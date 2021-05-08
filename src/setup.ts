import * as inquirer from 'inquirer';
import * as fs from 'fs';

/**
 * Reads the .env file and returns the contents of the file as a string.
 *
 * @return {*}  {string}
 */
const readEnvFile = (): string => {
    if (fs.existsSync('.env')) {
        const data = fs.readFileSync('.env', { encoding: 'utf8', flag: 'r' });
        return data;
    }
};

/**
 * Creates an .env file or replaces the existing .env
 * file with the envFileString contents
 *
 * @param {string} envFileString
 */
const replaceEnvFile = (envFileString: string) => {
    fs.writeFile('.env', envFileString, function (err) {
        if (err) {
            return console.error(err);
        }
    });
};

var oldEnv = readEnvFile();
var hasAPI_KEY = false;

// Checks if the .env file has an API-key
if (oldEnv) {
    if (oldEnv.includes('API_KEY')) {
        hasAPI_KEY = true;
    }
}
var questions = {
    doChangeAT: 'Do you want to change your access-token?',
    docName: 'Choose a name for the document:',
    docID: 'What is the ID for this Figma document?',
    access_token: 'What is your Figma access token?',
};

(async () => {
    var ans1 = { tokenBool: true };
    if (hasAPI_KEY) {
        ans1 = await inquirer.prompt([
            {
                type: 'confirm',
                name: 'tokenBool',
                message: questions.doChangeAT,
            },
        ]);
    }
    var ans2;
    if (ans1.tokenBool) {
        ans2 = await inquirer.prompt([
            {
                type: 'input',
                name: 'docName',
                message: questions.docName,
            },
            {
                type: 'input',
                name: 'docID',
                message: questions.docID,
            },
            {
                type: 'input',
                name: 'access_token',
                message: questions.access_token,
            },
        ]);
    } else {
        ans2 = await inquirer.prompt([
            {
                type: 'input',
                name: 'docName',
                message: questions.docName,
            },
            {
                type: 'input',
                name: 'docID',
                message: questions.docID,
            },
        ]);
    }

    return { ...ans1, ...ans2 };
})()
    .then((answers) => {
        var newEnv = '';
        // Sets new string to fill .env-file
        if (hasAPI_KEY && answers.tokenBool) {
            // break the textblock into an array of lines
            var lines = oldEnv.split('\n');
            // remove one line, starting at the first position
            lines.splice(0, 1);
            // join the array back into a single string
            oldEnv = lines.join('\n');
            newEnv = `API_KEY=${answers.access_token}\n${oldEnv}\n${answers.docName}=${answers.docID}`;
        } else if (answers.tokenBool) {
            newEnv = `API_KEY=${answers.access_token}\n${answers.docName}=${answers.docID}`;
        } else {
            newEnv = oldEnv + `\n${answers.docName}=${answers.docID}`;
        }
        replaceEnvFile(newEnv);
        console.log(
            'To convert your components run:\nnpm run convert -- ' + answers.docName
        );
    })
    .catch(console.error);
