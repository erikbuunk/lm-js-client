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
    instance = new LogicMillApi.ValidationError();
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

  describe('ValidationError', function() {
    it('should create an instance of ValidationError', function() {
      // uncomment below and update the code to test ValidationError
      //var instane = new LogicMillApi.ValidationError();
      //expect(instance).to.be.a(LogicMillApi.ValidationError);
    });

    it('should have the property loc (base name: "loc")', function() {
      // uncomment below and update the code to test the property loc
      //var instane = new LogicMillApi.ValidationError();
      //expect(instance).to.be();
    });

    it('should have the property msg (base name: "msg")', function() {
      // uncomment below and update the code to test the property msg
      //var instane = new LogicMillApi.ValidationError();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new LogicMillApi.ValidationError();
      //expect(instance).to.be();
    });

  });

}));
