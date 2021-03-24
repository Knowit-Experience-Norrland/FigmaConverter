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
const questions = [
    {
        type: 'input',
        name: 'figma_id',
        message: "What's your Figma document id?",
        default: function () {
            // return 'K4odZYkdvmAwB8ZEjoXSrp';
            return 'hfpX16KHa01k2i28WwCyHB';
        },
    },
    {
        type: 'input',
        name: 'access_token',
        message: "What's your Figma access token?",
        default: function () {
            return '159182-c6cfd568-439a-43fb-abec-a818f6db9ed7';
        },
    },
];

inquirer.prompt(questions).then((answers) => {
    axios({
        method: 'get',
        url: `https://api.figma.com/v1/files/${answers.figma_id}/`,
        headers: { 'X-Figma-Token': answers.access_token },
    })
        .then((res) => {
            var comps = res.data.document.children[0].children.filter(
                (c: PurpleChild) => c.type == 'COMPONENT'
            );
            // console.log(comps);
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

            var compFileNames = createComponentsFiles(colorObjects, comps);
            createIndexFile(compFileNames);
        })
        .catch((err) => console.log(err));
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

const createComponentsFiles = (colorObjects, comps): string[] => {
    const fileNames = [];
    comps.forEach((component) => {
        const litElement = new LitElementFromFigmaComponent(component, colorObjects);
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
