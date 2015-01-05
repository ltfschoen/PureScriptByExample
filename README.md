- Setup 
  - Install ```grunt``` Library and ```grunt-purescript``` Plugin into the /node_modules directory
  ```
  npm install grunt grunt-purescript@0.6.0
  ```

- Implementation
  - With Gruntfile.js (preferred)
    ``` 
    grunt
    ```
  - Without Gruntfile.js
    - Step 1: Output PURS to JS with:
      ```
      psc Chapter2.purs --output dist/Main.js --main=Chapter2 --module Chapter2
      ```
    - Step 2: Run code using Node.js with:
      ```
      node dist/Main.js
      ```