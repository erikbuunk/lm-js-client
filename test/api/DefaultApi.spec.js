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
    instance = new LogicMillApi.DefaultApi();
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

  describe('DefaultApi', function() {
    describe('bulkEncodeDocumentsEndpointIndicesIndexEncodeBulkPut', function() {
      it('should call bulkEncodeDocumentsEndpointIndicesIndexEncodeBulkPut successfully', function(done) {
        //uncomment below and update the code to test bulkEncodeDocumentsEndpointIndicesIndexEncodeBulkPut
        //instance.bulkEncodeDocumentsEndpointIndicesIndexEncodeBulkPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('bulkSaveDocumentsEndpointIndicesIndexAddBulkPut', function() {
      it('should call bulkSaveDocumentsEndpointIndicesIndexAddBulkPut successfully', function(done) {
        //uncomment below and update the code to test bulkSaveDocumentsEndpointIndicesIndexAddBulkPut
        //instance.bulkSaveDocumentsEndpointIndicesIndexAddBulkPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createIndexEndpointIndicesIndexPost', function() {
      it('should call createIndexEndpointIndicesIndexPost successfully', function(done) {
        //uncomment below and update the code to test createIndexEndpointIndicesIndexPost
        //instance.createIndexEndpointIndicesIndexPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('existsEndpointIndicesIndexDocDocIdExistsGet', function() {
      it('should call existsEndpointIndicesIndexDocDocIdExistsGet successfully', function(done) {
        //uncomment below and update the code to test existsEndpointIndicesIndexDocDocIdExistsGet
        //instance.existsEndpointIndicesIndexDocDocIdExistsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readDocumentEndpointIndicesIndexDocDocIdGet', function() {
      it('should call readDocumentEndpointIndicesIndexDocDocIdGet successfully', function(done) {
        //uncomment below and update the code to test readDocumentEndpointIndicesIndexDocDocIdGet
        //instance.readDocumentEndpointIndicesIndexDocDocIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readIndexMappingIndicesIndexMappingGet', function() {
      it('should call readIndexMappingIndicesIndexMappingGet successfully', function(done) {
        //uncomment below and update the code to test readIndexMappingIndicesIndexMappingGet
        //instance.readIndexMappingIndicesIndexMappingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readIndicesEndpointIndicesGet', function() {
      it('should call readIndicesEndpointIndicesGet successfully', function(done) {
        //uncomment below and update the code to test readIndicesEndpointIndicesGet
        //instance.readIndicesEndpointIndicesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readSimilarDocumentsEndpointIndicesIndexDocDocIdSimilarityGet', function() {
      it('should call readSimilarDocumentsEndpointIndicesIndexDocDocIdSimilarityGet successfully', function(done) {
        //uncomment below and update the code to test readSimilarDocumentsEndpointIndicesIndexDocDocIdSimilarityGet
        //instance.readSimilarDocumentsEndpointIndicesIndexDocDocIdSimilarityGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readSimilarDocumentsWithQueryEndpointIndicesIndexDocDocIdSimilarityPut', function() {
      it('should call readSimilarDocumentsWithQueryEndpointIndicesIndexDocDocIdSimilarityPut successfully', function(done) {
        //uncomment below and update the code to test readSimilarDocumentsWithQueryEndpointIndicesIndexDocDocIdSimilarityPut
        //instance.readSimilarDocumentsWithQueryEndpointIndicesIndexDocDocIdSimilarityPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readStatusEndpointGet', function() {
      it('should call readStatusEndpointGet successfully', function(done) {
        //uncomment below and update the code to test readStatusEndpointGet
        //instance.readStatusEndpointGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchEndpointIndicesIndexSearchPut', function() {
      it('should call searchEndpointIndicesIndexSearchPut successfully', function(done) {
        //uncomment below and update the code to test searchEndpointIndicesIndexSearchPut
        //instance.searchEndpointIndicesIndexSearchPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('similaritySearchEndpointIndicesIndexEncodeSimilarityPut', function() {
      it('should call similaritySearchEndpointIndicesIndexEncodeSimilarityPut successfully', function(done) {
        //uncomment below and update the code to test similaritySearchEndpointIndicesIndexEncodeSimilarityPut
        //instance.similaritySearchEndpointIndicesIndexEncodeSimilarityPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateMetadataEndpointIndicesIndexDocDocIdMetadataPut', function() {
      it('should call updateMetadataEndpointIndicesIndexDocDocIdMetadataPut successfully', function(done) {
        //uncomment below and update the code to test updateMetadataEndpointIndicesIndexDocDocIdMetadataPut
        //instance.updateMetadataEndpointIndicesIndexDocDocIdMetadataPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateVectorEndpointIndicesIndexDocDocIdVectorPut', function() {
      it('should call updateVectorEndpointIndicesIndexDocDocIdVectorPut successfully', function(done) {
        //uncomment below and update the code to test updateVectorEndpointIndicesIndexDocDocIdVectorPut
        //instance.updateVectorEndpointIndicesIndexDocDocIdVectorPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
