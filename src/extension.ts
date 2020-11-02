// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { gitBox, checkStagedFiles, addAll } from './gitToolbox';
import { git as GitProperties, localize } from './properties';
import { yesOrNo } from './uiToolbox';
import { getMessage } from './compiler';
import { SimpleGit } from 'simple-git';

const stageFiles = async (git: SimpleGit) => {
	const addFiles = await yesOrNo(localize(GitProperties.info.shouldStageFiles));
	if (!addFiles) { throw new Error(localize(GitProperties.error.noStagedFiles)); }
	await addAll(git);
};

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "constellation" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let commands = vscode.commands.registerCommand('constellation.helloWorld', async () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from constellation!');

		try {
			const git = await gitBox(vscode.workspace.rootPath);
			if (!(await checkStagedFiles(git))) { await stageFiles(git); }
			vscode.window.showInformationMessage(`${await getMessage()}`);
		} catch (e) {
			vscode.window.showErrorMessage(e.message);
			return;
		}

		vscode.window.showInformationMessage('Committed');
	});

	context.subscriptions.push(commands);
}

// this method is called when your extension is deactivated
export function deactivate() { }
