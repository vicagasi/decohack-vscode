// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const decoJson = require('./deco.json');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	// console.log('Congratulations, your extension "decohackplugin" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	vscode.languages.registerColorProvider

	let decoTemplate = vscode.commands.registerTextEditorCommand('decohackplugin.includeTemplate', function (editor, edit) {

		const text = decoJson["snippets"][0]["text"];

		editor.selections.forEach((selection) => {
			edit.insert(selection.active, text);
		})

		console.log('decohackplugin: include template loaded');
	});

	let weaponTemplate = vscode.commands.registerTextEditorCommand('decohackplugin.weaponTemplate', function (editor, edit) {

		const text = decoJson["snippets"][1]["text"];

		editor.selections.forEach((selection) => {
			edit.insert(selection.active, text);
		})

		console.log('decohackplugin: weapon template loaded');
	});

	context.subscriptions.push(decoTemplate);
	context.subscriptions.push(weaponTemplate);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
