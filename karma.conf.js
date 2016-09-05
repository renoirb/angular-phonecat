//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'main.karma.js'
    ],

    preprocessors: {
      // Reference: http://webpack.github.io/docs/testing.html
      // Reference: https://github.com/webpack/karma-webpack
      'main.karma.js': ['webpack', 'sourcemap']
    },

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome', 'Firefox'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-sourcemap-loader',
      'karma-spec-reporter',
      'karma-webpack'
    ]

    ,webpack: require('./webpack.config')

    // Hide webpack build information from output
    ,webpackMiddleware: {
      noInfo: 'errors-only'
    }

    ,reporters: [
      // Reference: https://github.com/mlex/karma-spec-reporter
      'progress'
    ]

  });
};
