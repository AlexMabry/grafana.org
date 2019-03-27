module.exports = function(grunt) {

  require("load-grunt-tasks")(grunt);

  grunt.loadNpmTasks("grunt-contrib-clean");

  var useMinTask = require('./tasks/usemin/tasks/usemin');
  useMinTask(grunt);

  var env = grunt.option('env') || "dev";
  var port = parseInt(grunt.option('port') || "3002");
  var docsVersion = grunt.option('docsVersion') || 'latest';
  var baseUrl = 'http://localhost:3002';

  if (docsVersion === 'root') {
    docsVersion = "";
  } else {
    docsVersion = "/" + docsVersion;
  }

  grunt.initConfig({
    baseUrl: baseUrl,

    clean: ["dist"],

    watch: {
      options: {
        livereload: port+1,
      },
      content: {
        files: ["content/**/*", "layouts/**/*", "config.toml"],
        tasks: ["hugo", "htmlmin"],
        options: {spawn: false},
      },
      sass: {
        files: ["static/sass/**/*"],
        tasks: ["hugo", "assets-dev"],
        options: {
          spawn: false
        }
      },
      js: {
        files: ["static/js/**/*"],
        tasks: ["hugo", "assets-dev"],
        options: {
          spawn: false
        }
      },
    },

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          "dist/css/styles.css": "static/sass/styles.scss",
        }
      }
    },

    'string-replace': {
      dist: {
        files: [{expand: true, cwd: 'dist/', src: ['css/*.css', '**/*.html'], dest: 'dist/'}],
        options: {
          replacements: [
            {
              pattern: /url\((\/assets)/ig,
              replacement: 'url(<%= baseUrl %>$1'
            },
            {
              pattern: /url\(\.\.\/\.\.(\/static)/ig,
              replacement: 'url(<%= baseUrl %>$1'
            },
            {
              pattern: /url\(\'\.\.\/\.\.(\/static)/ig,
              replacement: 'url(\'<%= baseUrl %>$1'
            },
            {
              pattern: /url\(\"\.\.\/\.\.(\/static)/ig,
              replacement: 'url(\"<%= baseUrl %>$1'
            },
          ]
        }
      }
    },

    postcss: {
      options: {
        map: true,
        processors: [
          require("autoprefixer")({browsers: "last 2 versions"}), // add vendor prefixes
        ]
      },
      dist: {
        src: "dist/css/*.css"
      }
    },

    connect: {
      mysite: {
        options: {
          hostname: "*",
          port: port,
          protocol: "http",
          base: "dist",
          livereload: port+1,
          keepalive: true,
          debug: true,
        }
      }
    },

    babel: {
      options: {
        sourceMap: true,
        presets:  ["es2015"],
        plugins: ["transform-es2015-modules-systemjs", "transform-es2015-for-of"],
      },
      dist: {
        files: [{
          cwd: "static",
          expand: true,
          src: ["js/**/*.js", "!js/system.conf.js"],
          dest: "dist",
          ext:".js"
        }]
      },
    },

    concat:  {
      js: {
        src: [
          'dist/bower/es6-shim/es6-shim.js',
          'dist/js/app.bundle.js',
        ],
        dest: 'dist/js/app.bundle.js'
      },
    },

    cssmin: {
      build: {
        expand: true,
        cwd: "dist/css",
        src: ["*.css"],
        dest: "dist/css"
      }
    },

    usemin: {
      html: ['dist/**/*.html', 'dist/*.html'],
      options: {
        assetsDirs: ['dist']
      }
    },

    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{expand: true, cwd: 'dist', src: ['**/*.html'], dest: 'dist'}],
      },
    },

    uglify: {
      build: {
        expand: true,
        src: ["**/*.js"],
        dest: 'dist/js',
        cwd: 'dist/js',
        options: {
          quite: true,
          compress: {},
          preserveComments: false,
        }
      }
    },

    filerev: {
      options: {encoding: "utf8", algorithm: "md5", length: 8},
      js: {
        src: "dist/js/app.bundle.js",
        dest: "dist/js",
      },
      css: {
        src: "dist/css/styles.css",
        dest: "dist/css",
      }
    }

  });

  grunt.registerTask("hugo", function(target) {
    var done = this.async();
    var args = ["--destination=dist/"];
    var buildDrafts = false;

    switch (env) {
      case 'dev':
        baseUrl = 'http://localhost:3002';
        buildDrafts = true;
        break;
      case 'dev-docs':
        baseUrl = 'http://localhost:3004';
        buildDrafts = true;
        break;
      case 'staging':
        baseUrl = 'https://staging.grafana.com/blog';
        buildDrafts = true;
        break;
      case 'prod':
        baseUrl = 'https://grafana.com/blog';
        break;
      case 'staging-docs':
        buildDrafts = true;
        baseUrl = 'http://staging-docs.grafana.org' + docsVersion;
        break;
      case 'prod-docs':
        baseUrl = 'http://docs.grafana.org' + docsVersion;
        break;
    }

    // update grunt config
    grunt.config('baseUrl', baseUrl);

    args.push("--buildDrafts=" + buildDrafts);
    args.push("--buildFuture=" + buildDrafts);
    args.push("--baseUrl=" + baseUrl);

    hugo = require("child_process").spawn("hugo", args, {stdio: "inherit"});
    hugo.on("exit", function(code) { done(code === 0); });
    hugo.on("error", function() { done(false); });
  });

  grunt.registerTask('systemjs', function() {
    var Builder = require('systemjs-builder');
    var done = this.async();

    // optional constructor options
    // sets the baseURL and loads the configuration file
    var builder = new Builder('dist', 'dist/js/system.conf.js');
    console.log('Starting systemjs-builder');

    builder
      .buildStatic('js/app.js', 'dist/js/app.bundle.js')
      .then(function() {
        console.log('Build complete');
        done();
      })
        .catch(function(err) {
          console.log('Build error');
          console.log(err);
          done(false);
        });
  });

  grunt.registerTask('remapFilerev', function() {
    var summary = grunt.filerev.summary;
    var fixed = {};

    for(var key in summary){
      if(summary.hasOwnProperty(key)){
        var orig = key.replace("dist", baseUrl);
        fixed[orig] = summary[key].replace('dist', baseUrl);
      }
    }

    grunt.filerev.summary = fixed;
  });

  grunt.registerTask("assets-dev", [
    "sass",
    "postcss",
    "babel",
    "systemjs",
    "concat",
    "string-replace",
  ]);

  grunt.registerTask("default", [
    "hugo",
    "assets-dev",
  ]);

  grunt.registerTask("build", [
    "clean",
    "hugo",
    "assets-dev",
    "cssmin",
    "uglify",
    "filerev",
    "remapFilerev",
    "usemin",
    "htmlmin",
  ]);

};

