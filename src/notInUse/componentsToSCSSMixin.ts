import { torgbString } from '../colors';

export const badNameForComponentGenerator = (comps, colorObject) => {
    var compColor: string;
    if (comps[0].styles) {
        compColor = colorObject[comps[0].styles.fills];
    } else {
        const { r, g, b, a } = comps[0].fills[0].color;
        compColor = torgbString(r, g, b, a);
    }
    // const compColor = comps[0].styles ? colorStyleObject[comps[0].styles.fills] :

    var compRadius: string | string[];
    if (comps[0].cornerRadius) {
        compRadius = comps[0].rectangleCornerRadii.every(
            (val: string, arr: string[]) => val === arr[0]
        )
            ? comps[0].cornerRadius + 'px'
            : comps[0].rectangleCornerRadii;
    } else {
        compRadius = '0';
    }

    if (Array.isArray(compRadius)) {
        var tmp = '';

        compRadius.forEach((part, index, compRadius) => {
            tmp += ' ' + part + 'px';
        });
        compRadius = tmp;
    }

    // const compRadius = comps[0].cornerRadius ? comps[0].cornerRadius : 0;
    var compString: string =
        '@mixin ' +
        comps[0].name +
        '{ \n' +
        '    width: ' +
        comps[0].absoluteBoundingBox.width +
        'px;\n' +
        '    height: ' +
        comps[0].absoluteBoundingBox.height +
        'px;\n' +
        '    background-color: ' +
        compColor +
        ';\n' +
        '    border-radius: ' +
        compRadius +
        ';\n' +
        '}';

    return compString;
};
