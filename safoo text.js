"use strict";
/*https://learntypescript.online/app.html  */
/*  .js = javascript
    .ts = typescript or tsc
    npm = node package manAger
    i = install
    g = globaly
    init= initialization
    CLI = command line interface
    -v = for version check e.g tsc -v enter or tsc --v or node -v
    node.js = a software that we have installed is runtime environment or a compiler for java script. HERE CODE VISUALIZATION WORKS AS NODE.JS
    runtime environment = means that it talks with system
    compiler = means any language into binary
    npm = node package manager
    cmd = command
    -- means hypen
  
  
  // module can be used as for modular work or we can say multiple works//
  // what is json file ??// // AND ts config.json means typescript configuration//   // and package.json means javascript configuration//
  // it tells about the discription about the file, what program will it run, its version, its license, author etccc//
  //these are the instructions so we can add our own instructions also user friendly//
  
  //init = means initialization   of project FOR JASON FILE//
  // this terminal opened in vs code is also called ide integrated development environment//
  
  // these all instruction you can add via "npm init" and "tsc --init"//

  // just run "npm init" in cmd, package.json file will be created details will be asked by cmd//
 /* "name": "todos",
  "version": "1.0.0",
  "description": "safoo",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "safoo",
  "license": "ISC"*/
// now make some changes as you want and some more for example//
//"type": "module",//
//TO BY PASS ALL ABOVE JUST TPYE NPM INIT -Y    //  
//"tsc --init" just type it will make tsconfig.json file and make some changes//
// in package.jason editing to be made telling the sysytem that your configuartions are old so we editing to new version//
//1-change target to es2016 to es2022 or esnext//
//2-module node10 to nodnext//
//3-moduleresulotion node10 to node next//
Object.defineProperty(exports, "__esModule", { value: true });
// CODE .    THIS WILL OPEN VS CODE DIRECT FROM CMD WHERE FILE HAS BEEN CREATED //
//now install inquirer just write npm i inquirer//
//"inquirer": "^9.2.16" this tells pre programmed files or programmes which are availble on net or web site i.e, npmjs.com/package/inquire//
// made by someone else can be used in our programmed// // installation process npm i inquirer//
//npm i inquirer, in package.json it will intall name called dependencies, this project that we created will update onit//
// ^9.2.16 indicates its last version and, ^ called cap indicates if any update in package or programme will update auto//
// inquirer also called repository//// this inquirer package also created by some one via typescript//
//there are many types in inquirer for developer some tools are required for this project just for help called dev dependencies//
// npm i --save-dev @types/inquirer//
// [] this square brackets called array or index bracket called data types for taking multiple data//
// {} this curly brackets that contains object//
//inquirer installed from web and in inquirer there is prompt//
// typescript follow structural typing//
//ADD YOUR PROJECT TO NPM SITE//
// #!   she=# bang =!//  // called shabang or shebang//
//ADD AT FIRST LINE          #! /usr/bin/env node   FOR PUBLISH IN NPM//
//EDIT PACKAGE.JSAON FILE BEFORE UPLOADING//
//ADD "PublishConfig":{"acess": "public"},//
//ADD "bin": "index.js", "index2.js", "index3.js", "index4.js", "index5.js"//
// only one file in bon that is "bin": "index5.js",//
// add any update before publish change version in package.jason//
//minor changes example name or something else change last digit 1.0.2 to 1.0.3//
//now add your simple calculator to npm//
//just create account in npx i inquirer//
//login via npm login//
//now publish means upload    npx publish//
// NOW GO AT WEBSITE SEE YOUR PROJECT UPLOADED WITH VERSION OR DETAILS//
//NOW RUN FROM ANY WHERE IN WORLD  JUST TYPE YOUR PROJECT NAME//
//NPX SAFWANSAF-SIMPLE-CALCULATOR//
//NOW TO ADD YOUR PROJECT AT GIT HUB //
//CREATE YOUR ACCOUNT ON GIT HUB//
// HOW TO UPLOAD DATA IN IN GIT, INSTRUCTION GIVEN AT WEBSITES//
//BUT WE DO WITH SOME CHANGES//
//echo "# simple-calculator" >> README.md   COPY THE CODE AND PASTE AND RUN//
//GIT INIT//
//WE HAVE INSTALLED NODE MODULES FROM INQUIRER SO WE DONT WANT THIS BECAUSE THIS DATA BASE WE DOWNLOADED NO NEED TO UPLOAD THIS FOLDER//
//SO WE CREATE A FILE CALLED .gitignore//
//now in .gitignore file we add file name node_modules//
//now node_modules will not be selected to uplaod or for staging//
// now run command git add.    means add all files//
// now run command git commit -m "push my calculator to github"//
//means git covention or git says ,  with current changes with this project add a message that is "push my calculator to github"//
//-m means message  and commit means says //
// now run command git branch -M main//
//branch means many persons are working on this projects so it differentiates between peoples//
//i created a branch name called saf//
//this command means project from local folder to github folder//
//git remote add origin https://github.com/safwansaf123/simple-calculator.git//
//this above address created by me on git hub//
//just run a command to push it to web or server//
//git push -u origin saf//
//now changes made how to send to git hub//
//now run 3 commands//
//git add . //
//git commit -m"changes made"//
//git push -u origin saf//
//two statements, two types or two properties are seprated by ; semi colon example console.log(aircraft[0]); console.log(aircraft[6]); //
//two key data or two key value seprates by , comma example [777, a320, b737]
// object properties or object atributes or key value pair????//
//key defined in object by default it is string
// invoke or invoke call means call the function
