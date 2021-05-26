/**
 * Logic Mill Api
 * This is the API of the Logic Mill project
 *
 * OpenAPI spec version: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.LogicMillApi);
  }
}(this, function(expect, LogicMillApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new LogicMillApi.CreateIndexRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CreateIndexRequest', function() {
    it('should create an instance of CreateIndexRequest', function() {
      // uncomment below and update the code to test CreateIndexRequest
      //var instane = new LogicMillApi.CreateIndexRequest();
      //expect(instance).to.be.a(LogicMillApi.CreateIndexRequest);
    });

    it('should have the property dimensions (base name: "dimensions")', function() {
      // uncomment below and update the code to test the property dimensions
      //var instane = new LogicMillApi.CreateIndexRequest();
      //expect(instance).to.be();
    });

  });

}));
