- Setup 
  - Install ```grunt``` Library and ```grunt-purescript``` Plugin into the /node_modules directory
  ```
  npm install grunt grunt-purescript@0.6.0
  ```

- Implementation 
  - With Gruntfile.js
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