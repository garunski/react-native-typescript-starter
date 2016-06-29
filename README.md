This is the starter or a template on converting your own React Native starter app to use Visual Studio Code, and typescript.

The goal was to be able to use the React-Native VS Code extension to the compilation in the editor and use TypeScript to create the application. 
TypeScript is set to Convert JSX to React code, and to compile to es6. React Native CLI should convert the generated ES6 to ES5 with the standards set by the React Native CLI.
You could transpile the application on your own but since CLI will run Babel anyway there is no need.
The ESLint config is not final.
The .vscode contains the Task Runner config for the Task Runner that comes with VSCode. 
tsconfig.json is set up for TypeScript compilation so no need for command line arguments.
You may need to run the ios or android builds before trying to run the apps. 
npm install before attempting to run the app.
I have not excluded the generated .ios.js files from git so that the generated files could be viewed.
Have not attempted to debug the application.


Gotchas I ran into.

1. import * as React from "react"; is the only way I could get the compiler to output the js in an acceptable format. 
2. If the jsx option in the tsconfig set to preserve the extension for the generated file will be jsx and then the react-native compile does not know what to do.
3. Not super sure about the need for exports = scry where scry is the application name.
