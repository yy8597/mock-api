/* This script generates mock data for local development.
   This way you don't have to point to an actual API,
   but you can enjoy realistic, but randomized data,
   and rapid page loads due to local, static data.
 */

var jsf = require('json-schema-faker');
var mockDataSchema = require('./mockDataSchema');
var fs = require('fs');


var walk    = require('walk');
var files   = [];
var walker  = walk.walk('./schema', { followLinks: false });

walker.on('file', function(root, stat, next) {
    // Add this file to the list of files
    //a/b/c/d'.match(/^([^\/]+)\/(.+)/)
    files.push([root.slice(2).split('/'), stat.name]);
    next();
});

walker.on('end', function() {
    var json = {}
    var route = {}
    files.forEach(([path, filename]) => {
      var mockDataSchema = require('../' + path.join('/') + '/' + filename)
      
      /* 层级渐进 */
      // var node = path.slice(1).reduce((node, p) => {
      //   if(!node[p]) {
      //     node[p] = {}
      //   }
      //   return node[p]
      // }, json)

      // node[filename.replace('.js', '')] = jsf(mockDataSchema);

      /* 单层 */
      const attr = path.slice(1).concat(filename.replace('.js', '')).join('%%')
      json[attr] = mockDataSchema.type ? jsf(mockDataSchema) : mockDataSchema;
      route['/' + path.slice(1).concat(filename.replace('.js', '')).join('/') + '?*'] = '/' + attr
      route['/' + path.slice(1).concat(filename.replace('.js', '')).join('/') + ''] = '/' + attr

    })
    fs.writeFile('./output/db.json', JSON.stringify(json), function (err) {
      if (err) {
        return console.log(err);
      } else {
        console.log("Mock data generated.");
      }
    });

    fs.writeFile('./output/route.json', JSON.stringify(route), function (err) {
      if (err) {
        return console.log(err);
      } else {
        console.log("Route generated.");
      }
    });
    
});



