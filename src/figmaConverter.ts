import axios from 'axios';
import { appendArrayToFile, appendStringToFile } from './fileManipulation';
import { LitElementFromFigmaComponent } from './litElementComponentClass';
import { litElementComponent } from './litElementComponentGenerator';
import { PurpleChild } from './apiTypes';
// import { Color } from './colors';
import Color from './newColors';
import Typography from './texts';
import * as inquirer from 'inquirer';

// https://www.figma.com/file/K4odZYkdvmAwB8ZEjoXSrp/Component-testing?node-id=0%3A1&viewport=578%2C610%2C2.3166487216949463
// hfpX16KHa01k2i28WwCyHB
require('dotenv').config();

var documentID = process.env[process.argv[2]];

axios({
    method: 'get',
    url: `https://api.figma.com/v1/files/${documentID}/images`,
    headers: {
        'X-Figma-Token': process.env.API_KEY,
    },
})
    .then((res) => {
        const images = res.data.meta.images;
        axios({
            method: 'get',
            url: `https://api.figma.com/v1/files/${documentID}/`,
            headers: { 'X-Figma-Token': process.env.API_KEY },
        })
            .then((res) => {
                var comps = [];
                for (var i = 0; i < res.data.document.children.length; i++) {
                    comps = [
                        ...comps,
                        ...res.data.document.children[i].children.filter(
                            (c: PurpleChild) => c.type == 'COMPONENT'
                        ),
                    ];
                }
                // var comps = res.data.document.children[0].children.filter(
                //     (c: PurpleChild) => c.type == 'COMPONENT'
                // );
                // var comp_sets = res.data.document.children[0].children.filter(
                //     (c: PurpleChild) => c.type == 'COMPONENT_SET'
                // )[0];
                // if (!comp_sets.children === undefined) comp_sets = comp_sets.children;

                // comps = comps.concat(comp_sets);
                const canvas = res.data.document.children[0];
                const stylesData = res.data.styles;

                var elementsWithTextStyle = canvas.children
                    .filter((c: PurpleChild) => c.styles)
                    .filter((c: PurpleChild) => c.styles.text);
                var textObjects = elementsWithTextStyle.map(
                    (text: PurpleChild) => new Typography(text)
                );
                textObjects.forEach((text: Typography) => {
                    text.setName(stylesData[text.styleId].name);
                });

                var elementsWithColorStyle = canvas.children
                    .filter((c: PurpleChild) => c.styles)
                    .filter((c: PurpleChild) => c.styles.fill);

                // var colorObjects = elementsWithColorStyle.map(
                //     (color: PurpleChild) => new Color(color)
                // );

                var colorObjects = elementsWithColorStyle.map(
                    (element: PurpleChild) =>
                        new Color(element.fills[0].color, element.styles.fill)
                );
                colorObjects.forEach((color: Color) => {
                    color.setName(stylesData[color.styleId].name);
                });

                createVariableFile(colorObjects, textObjects);

                var compFileNames = createComponentsFiles(colorObjects, comps, images);
                createIndexFile(compFileNames);
            })
            .catch((err) => console.log(err));
    })
    .catch((err) => {
        console.log(err);
        console.log(
            'status: ' + err.response.data.status + '\nMessage: ' + err.response.data.err
        );
    });

const createVariableFile = (colorObjects, textObjects) => {
    let colorSCSSVariableString = '';
    let textMixinString = '';

    colorObjects.forEach((color: Color) => {
        colorSCSSVariableString += `${color.scssColor} \n`;
    });

    textObjects.forEach((text: Typography) => {
        textMixinString += `${text.getTextMixin()} \n`;
    });

    let rootCSSColorVariable = ':root{ \n';
    colorObjects.forEach((color: Color) => {
        rootCSSColorVariable += `    ${color.cssVariable} \n`;
    });
    rootCSSColorVariable += '}';

    const outString = colorSCSSVariableString
        .concat(textMixinString)
        .concat(rootCSSColorVariable);

    appendStringToFile('./output/styles/variables.scss', outString);
};

const createComponentsFiles = (colorObjects, comps, images): string[] => {
    const fileNames = [];
    comps.forEach((component) => {
        const litElement = new LitElementFromFigmaComponent(
            component,
            colorObjects,
            images
        );
        const litElementComponentString = litElementComponent(
            litElement.name,
            litElement
        );

        const fileName = litElement.name.includes('-')
            ? litElement.stringToCamelCase(litElement.name, '-')
            : litElement.stringToCamelCase(litElement.name, '=');

        fileNames.push(fileName);
        appendStringToFile(`./output/${fileName}.ts`, litElementComponentString);
    });
    return fileNames;
};

const createIndexFile = (fileNames: string[]) => {
    var indexString = '';
    fileNames.forEach((name) => {
        indexString += `import './${name}.js' \n`;
    });

    appendStringToFile(`./output/index.js`, indexString);
};
