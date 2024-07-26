// Babel


 // npm : is a tool that we use to install 3rd party libarry and tools.

 //npm init --yes         // create json file

 //npm i babel-cli@6.26.0 babel-core@6.26.0 babel-preset-env@1.6.1
 // babel CLI is babel command line interface, is the tool we run from command line, like npm. in the command line ,and give it the name of our javascript file and then it will convert or compile that javascript code.
 // babel-core is core of Babel where all the logic for transpiring code is implemented.
 // babel-preset is combinatin of all these plugins

// in package,json -> script add "babel": "babel --presets env index.js -o build/index.js"