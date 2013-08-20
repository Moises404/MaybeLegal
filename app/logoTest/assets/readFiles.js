#!/usr/bin/env node

var fs = require("fs"),
    path = require("path");

var p = "Logos_SVG"
fs.readdir(p, function (err, files) {
    if (err) {
        throw err;
    }

    files.map(function (file) {
        return path.join(p, file);
    }).filter(function (file) {
        return fs.statSync(file).isFile();
    }).forEach(function (file) {
        //console.log("%s (%s)", file, path.extname(file));
        console.log('"../../assets/'+ '%s' + '",', file);
    });
});