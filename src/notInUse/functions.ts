export const ObjectToSCSSString = (colorStyles, stylesData, preVariable:string) => {
    var stringArray:string[] = [];
    Object.keys(colorStyles).forEach(key => {
        stringArray.push("$" + preVariable + "-" + stylesData[key].name + ": " + colorStyles[key] + ";");
    })
    return stringArray;
}

export const ObjectToSCSSList = (colorStyles, stylesData, preVariable:string) => {
    var string = "$colors-list: ";
    Object.keys(colorStyles).forEach(key => {
        string += "$" + preVariable + "-" + stylesData[key].name + " ";
    })
    string += ";";
    return string;
}

export const ObjectToCSSObject = (styleObject, stylesData, preVariable:string) => {
    Object.keys(styleObject).forEach(key => {
       styleObject[key] =  "--" + preVariable + "-" + stylesData[key].name + ": " + styleObject[key] + ";";
    })
    return styleObject;
}

export const ObjectToCSSString = (colorStyles, stylesData, preVariable:string) => {
    var stringArray:string[] = [];
    stringArray.push(':root {')
    Object.keys(colorStyles).forEach(key => {
        stringArray.push("--" + preVariable + "-" + stylesData[key].name + ": " + colorStyles[key] + ";");
    })
    stringArray.push('}')
    return stringArray;
}