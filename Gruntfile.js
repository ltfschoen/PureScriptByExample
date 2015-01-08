/* 
  Node.js module using the Grunt module library to define build config with PureScript compiler options
*/
module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({

    libFiles: [
      "src/**/*.purs",
      "bower_components/purescript-*/src/**/*.purs"
    ],

    srcFiles: [
      "src/LSHello.purs", 
      "src/LSMath.purs"
    ],

    psc: {
      options: {
        // Task-specific options go here
        main: "PureScriptbyExample.Chapter2.LSHello",
        modules: [
          "PureScriptbyExample.Chapter2.LSHello", 
          "PureScriptbyExample.Chapter2.LSMath"
        ]
      },
      // Target
      all: {
        // Target-specific file lists and/or options go here
        // libFiles are also required for Bower dependencies
        src: [
          "<%=srcFiles%>",
          "<%=libFiles%>"
        ],
        dest: "dist/Main.js"
      }
    },

    pscMake: {
      lib: {
        src: ["<%=libFiles%>"],
        dest: "build" // Custom outputs target directory
      }
    },
    
    /*
      Generates .psci file that specifies commands to use when configuring psci in Interactive Mode
    */
    dotPsci: ["<%=libFiles%>"],

    pscDocs: {
      readme: {
        src: "src/**/*.purs",
        dest: "pscREADME.md"
      }
    }

  });

  /*
    https://github.com/purescript-contrib/grunt-purescript
    Load grunt-purescript plugin to invoke PureScript compiler and its:
     - Command-line options as JSON properties
     - Generation of Markdown format documentation from code
     - Generation of library Config files for psci interactive compiler
  */
  grunt.loadNpmTasks("grunt-purescript");

  grunt.registerTask("make", ["pscMake:lib", "dotPsci", "pscDocs"]);
  grunt.registerTask("default", ["psc:all", "make"]);

};