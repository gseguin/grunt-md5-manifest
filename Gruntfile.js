/*
 * grunt-md5-manifest
 * http://gruntjs.com/
 *
 * Copyright (c) 2013 Ghislain Seguin
 * Licensed under the MIT license.
 */

module.exports = function ( grunt ) {
	"use strict";

	// Project configuration.
	grunt.initConfig( {
		jshint: {
			all: [
				"Gruntfile.js",
				"tasks/*.js",
				"<%= nodeunit.tests %>"
			],
			options: {
				jshintrc: ".jshintrc"
			}
		},

		// Before generating any new files, remove any previously-created files.
		clean: {
			test: [ "tmp" ]
		},

		test_vars: {
			match: "folder_one/*"
		},

		// Configuration to be run (and then tested).
		"md5-manifest": {
			all: {
				options: {
					cwd: "test/fixtures"
				},
				src: [ "**/*" ],
				dest: "../../tmp/manifest-all-md5.txt"
			},
			shallow: {
				options: {
					cwd: "test/fixtures"
				},
				src: [ "*.*" ],
				dest: "../../tmp/manifest-shallow-md5.txt"
			},
			expand: {
				options: {
					cwd: "test/fixtures"
				},
				src: [ "<%= test_vars.match%>" ],
				dest: "../../tmp/manifest-expand-md5.txt"
			}

		},

		// Unit tests.
		nodeunit: {
			tests: [ "test/*_test.js" ]
		}
	} );

	// Actually load this plugin"s task(s).
	grunt.loadTasks( "tasks" );

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks( "grunt-contrib-jshint" );
	grunt.loadNpmTasks( "grunt-contrib-clean" );
	grunt.loadNpmTasks( "grunt-contrib-nodeunit" );

	// Whenever the "test" task is run, first clean the "tmp" dir, then run this
	// plugin"s task(s), then test the result.
	grunt.registerTask( "test", [ "clean", "md5-manifest", "nodeunit" ] );

	// By default, lint and run all tests.
	grunt.registerTask( "default", [ "jshint", "test" ] );
};