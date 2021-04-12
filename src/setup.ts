import * as inquirer from 'inquirer';

import * as fs from 'fs';

const readEnvFile = () => {
    if (fs.existsSync('.env')) {
        const data = fs.readFileSync('.env', { encoding: 'utf8', flag: 'r' });
        return data;
    }
};

const replaceEnvFile = (stringToAppend: string) => {
    fs.writeFile('.env', stringToAppend, function (err) {
        if (err) {
            return console.error(err);
        }
    });
};

var oldEnv = readEnvFile();
var hasAPI_KEY = false;
if (oldEnv.includes('API_KEY')) {
    hasAPI_KEY = true;
}

(async () => {
    var ans1 = { tokenBool: true };
    if (hasAPI_KEY) {
        ans1 = await inquirer.prompt([
            {
                type: 'confirm',
                name: 'tokenBool',
                message: 'Do you want to change your access-token?',
            },
        ]);
    }
    var ans2;
    if (ans1.tokenBool) {
        ans2 = await inquirer.prompt([
            {
                type: 'input',
                name: 'docName',
                message: 'What is the document name?',
            },
            {
                type: 'input',
                name: 'docID',
                message: "What's your Figma document ID?",
            },
            {
                type: 'input',
                name: 'access_token',
                message: "What's your Figma access token?",
            },
        ]);
    } else {
        ans2 = await inquirer.prompt([
            {
                type: 'input',
                name: 'docName',
                message: 'What is the document name?',
            },
            {
                type: 'input',
                name: 'docID',
                message: "What's your Figma document ID?",
            },
        ]);
    }

    return { ...ans1, ...ans2 };
})()
    .then((answers) => {
        var newEnv = '';
        if (hasAPI_KEY && answers.tokenBool) {
            // break the textblock into an array of lines
            var lines = oldEnv.split('\n');
            // remove one line, starting at the first position
            lines.splice(0, 1);
            // join the array back into a single string
            oldEnv = lines.join('\n');

            newEnv = `API_KEY=${answers.access_token}\n${oldEnv}\n${answers.docName}=${answers.docID}`;
        } else if (answers.tokenBool) {
            newEnv =
                oldEnv +
                `API_KEY=${answers.access_token}\n${answers.docName}=${answers.docID}`;
        } else {
            newEnv = oldEnv + `\n${answers.docName}=${answers.docID}`;
        }
        replaceEnvFile(newEnv);
        console.log(
            'To convert your components run:\nnpm run convert -- ' + answers.docName
        );
    })
    .catch(console.error);

// const questions = [
//     {
//         type: 'list',
//         name: 'tokenBool',
//         message: 'Do you want to add a access token?',
//         choices: ['yes', 'no'],
//     },
//     {
//         type: 'input',
//         name: 'docName',
//         message: 'What is the document name?',
//     },
//     {
//         type: 'input',
//         name: 'docID',
//         message: "What's your Figma document ID?",
//     },
//     {
//         type: 'input',
//         name: 'access_token',
//         message: "What's your Figma access token?",
//     },
// ];

// inquirer.prompt(questions).then((answers) => {
// var oldEnv = readEnvFile();
// console.log(oldEnv);
// if (oldEnv.includes('API_KEY')) console.log('contains key');
// var newEnv =
//     oldEnv + `API_KEY=${answers.access_token}\n${answers.docName}=${answers.docID}`;
// replaceEnvFile(newEnv);

// console.log('To convert your components run:\nnpm run convert -- ' + answers.docName);
// });
