
const sass = require('gulp-sass');

const server_config = require('./server_config');
const webpack_config = require('./webpack_config');

const config = {
    server_config,
    sass_config: {outputStyle: 'compressed'},
    webpack_config
    
}

module.exports = config;