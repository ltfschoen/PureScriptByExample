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
  - Compiling Multiple PureScript Files and Alternation
    - Update Gruntfile.js with a .purs file Module Name set for 'grunt.initConfig > psc > main' 
    - Run ```grunt```
    - Open dist/Main.js and append to the bottom of the file separate calls to additional 'psc > modules' that are defined in the Gruntfile (i.e. ```PS.<insert_module_name>.main();```)

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
      psc src/Hello.purs --output dist/Main.js --main=PureScriptbyExample.Chapter2.LSHello --module PureScriptbyExample.Chapter2.LSHello
      ```
    - Step 2: Run code using Node.js with:
      ```
      node dist/Main.js
      ```

## Interactive Mode (psci) (Note: The '>' symbol indicates psci prompt) 

  - Run Interactive Mode
    ```
    > psci
    ```
  - List the available commands (i.e. :?, :i <module>, :m <file>, :q, :r, :t <expr>)
    ```
    > :?
    ```
  - List all available Functions (in codebase), including Bower dependencies and Prelude modules (refer to output manually entered into [psciFunctionsAndBowerDependencies.md](psciFunctionsAndBowerDependencies.md))
    ```
    > Press TAB key
    ```
  - Unload any Modules that have been Compiled in memory with Reset command
    ```
    > :r
    ```
  - Evaluate an expression
    - Step 1: Type an expression
      ```
      > 1 + 2
      ```
    - Step 2: Evaluate the expressing by Compiling dependent Modules (expected output shown)
      Press CTRL+D
      ```
      > 3
      ```
  - Call a specific Function within a Module
      - Step 1: Type an expression
        ```
        > PureScriptbyExample.Chapter2.LSMath.diagonal 5 12
        13
        ```
  - Define new Functions
      - Step 1: Type an expression
        ```
        > let double x = x * 2
        ```
      - Step 2: Evaluate the expression
        ```
        > double 10
        20
        ```
  - Type checking of an expression
      - Example 1
        ```
        > :t true
        Prim.Boolean
        > :t [1, 2, 3]
        [Prim.Number]
        ```
        
  **Note:** In the Gruntfile.js, the grunt.initConfig > dotPsci property generates the .psci file, which specifies commands to use when configuring psci in Interactive Mode