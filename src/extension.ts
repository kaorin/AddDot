// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "AddDot" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let cmd1 = vscode.commands.registerCommand('extension.addDot', () => {
		// The code you place here will be executed every time your command is executed
		let editor = vscode.window.activeTextEditor; // エディタ取得
		if(editor){
			let doc = editor.document;            // ドキュメント取得
			let cur_selection = editor.selection; // 選択範囲取得
			if(editor.selection.isEmpty){         
				// 選択範囲が空であれば終了
				return;
			}
			
			let text = doc.getText(cur_selection); //取得されたテキスト
			/**
			 * ここでテキストを加工します。
			 **/
			let textArray = Array.from(text);
			let convText = '';
			textArray.forEach((val) =>{
				convText += "｜"+val+"《・》";
			});
			
			//エディタ選択範囲にテキストを反映
			editor.edit(edit => {
				edit.replace(cur_selection, convText);
			});	
		}
	});
	let cmd2 = vscode.commands.registerCommand('extension.addRuby', () => {
		// The code you place here will be executed every time your command is executed
		let editor = vscode.window.activeTextEditor; // エディタ取得
		if(editor){
			let doc = editor.document;            // ドキュメント取得
			let cur_selection = editor.selection; // 選択範囲取得
			if(editor.selection.isEmpty){         
				// 選択範囲が空であれば終了
				return;
			}
			
			let text = doc.getText(cur_selection); //取得されたテキスト
			/**
			 * ここでテキストを加工します。
			 **/
			let convText = "｜"+text+"《》";
			
			//エディタ選択範囲にテキストを反映
			editor.edit(edit => {
				edit.replace(cur_selection, convText);
			});	
		}
	});

	context.subscriptions.push(cmd1);
	context.subscriptions.push(cmd2);
}

// this method is called when your extension is deactivated
export function deactivate() {}
