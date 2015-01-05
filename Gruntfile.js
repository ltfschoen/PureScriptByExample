/* 
  Node.js module using the Grunt module library to define build config with PureScript compiler options
*/
module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({

    srcFiles: ["src/**/*.purs"],

    psc: {
      options: {
        // Task-specific options go here
        main: "PureScriptbyExample.Chapter2.Hello",
        modules: ["PureScriptbyExample.Chapter2.Hello"]
      },
      // Target
      all: {
        // Target-specific file lists and/or options go here
        src: ["<%=srcFiles%>"],
        dest: "dist/Main.js"
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

  grunt.registerTask("default", ["psc:all"]);

};