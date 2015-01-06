# PureScript By Example #

## About ##
  - Application and customisation of PureScript code samples from the [PureScript By Example Functional Programming for the Web By Phil Freeman](https://leanpub.com/purescript) book, supported by custom code comments.

## Automation Tools ##

  - Gruntfile.js (Grunt) is used to automate compiler build commands
  - node command (Node.js) is used to execute the compiled JavaScript output
  - package.json (NPM Package Manager generated with ```npm init```) defines project and NPM dependency properties and is used to install custom set of NPM packages before compiler build
  - bower.json (Bower Package Manager generated with ```bower init``` and choosing [moduleType](http://stackoverflow.com/questions/22674018/bower-init-difference-between-amd-es6-globals-and-node)) defines defines Bower dependencies used to install custom Bower packages before compiler build, whereby the user may pull dependencies by simply invoking ```bower update``` (instead of downloading each packages directly with ```bower install ___```)

## Custom Dependencies ##

  - [purescript-math](https://github.com/purescript/purescript-math) contains type definitions for functions defined on JavaScript Math object

## Setup ## 

  - **With package.json and bower.json (recommended)** 
    - Install NPM dependencies defined in package.json 
    ```
    npm install
    ```
    Note: Install more packages and save as dependencies in package.json file with ```npm install <pkg> --save```, or ```npm help json``` for help
    - Pull Bower dependencies defined in bower.json 
    ```
    bower update
    ```
  - Without package.json
    - Install ```grunt``` Library and ```grunt-purescript``` Plugin into the /node_modules directory
    ```
    npm install grunt grunt-purescript@0.6.0
    ```
    - Pull Bower dependencies defined in bower.json 
    ```
    bower update
    ```

## Implementation ##

  - **With Gruntfile.js (recommended)**
    - Step 1: Generate JS from PURS including PureScript Prelude in build/
      ``` 
      grunt
      ```
    - Step 2: Run code using Node.js with:
      ```
      node dist/Main.js
      ```
  - Without Gruntfile.js
    - Step 1: Output PURS to JS with:
      ```
      psc src/Hello.purs --output dist/Main.js --main=PureScriptbyExample.Chapter2.Hello --module PureScriptbyExample.Chapter2.Hello
      ```
    - Step 2: Run code using Node.js with:
      ```
      node dist/Main.js
      ```