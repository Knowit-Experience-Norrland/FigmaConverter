import * as fs from 'fs';

const breakPointMessage = '// NOT GENERATED CODE';

export const readFromFile = (file: string) => {
    if (fs.existsSync(file)) {
        const data = fs.readFileSync(file, { encoding: 'utf8', flag: 'r' });
        return (
            '\n // NOT GENERATED CODE' + data.toString().split(breakPointMessage).pop()
        );
    }
};

const createFile = (
    file: string,
    stringArrayToAppend: string[],
    originalString: string
) => {
    var stringToWrite: string = '';

    stringArrayToAppend.forEach((string) => {
        stringToWrite += string + '\n';
    });

    stringToWrite += originalString;

    fs.writeFile(file, stringToWrite, function (err) {
        if (err) {
            return console.error(err);
        }
        console.log(file + ' UPDATED');
    });
};
export const appendArrayToFile = (file: string, stringArray: string[]) => {
    var readFile = readFromFile(file);

    createFile(file, stringArray, readFile);
};

const createFileString = (
    file: string,
    stringToAppend: string,
    originalString: string
) => {
    let message = ' UPDATED';
    if (!originalString) {
        originalString = '\n' + breakPointMessage;
        message = ' CREATED';
    }

    stringToAppend += originalString;
    fs.writeFile(file, stringToAppend, function (err) {
        if (err) {
            return console.error(err);
        }
        console.log(file + message);
    });
};

export const appendStringToFile = (file: string, string: string) => {
    var readFile = readFromFile(file);

    createFileString(file, string, readFile);
};
