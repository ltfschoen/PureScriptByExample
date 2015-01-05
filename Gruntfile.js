/* 
  Node.js module using the Grunt module library to define build config with PureScript compiler options
*/
module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({

    libFiles: [
      "src/**/*.purs"
    ],

    pscMake: {
      lib: {
        src: ["<%=libFiles%>"],
        dest: "build" // Custom outputs target directory
      }
    },

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
  grunt.registerTask("default", ["make"]);

};