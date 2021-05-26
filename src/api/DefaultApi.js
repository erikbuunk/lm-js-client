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

import ApiClient from "../ApiClient";
import BulkDocumentRequest from '../model/BulkDocumentRequest';
import BulkSaveDocumentRequest from '../model/BulkSaveDocumentRequest';
import CreateIndexRequest from '../model/CreateIndexRequest';
import DocVectorWrapper from '../model/DocVectorWrapper';
import HTTPValidationError from '../model/HTTPValidationError';
import MetadataRequest from '../model/MetadataRequest';
import ModelObject from '../model/ModelObject';
import SearchRequest from '../model/SearchRequest';
import SimilarityQueryRequest from '../model/SimilarityQueryRequest';
import SimilarityRequest from '../model/SimilarityRequest';
import VectorRequest from '../model/VectorRequest';

/**
* Default service.
* @module api/DefaultApi
* @version 0.0.0
*/
export default class DefaultApi {

    /**
    * Constructs a new DefaultApi. 
    * @alias module:api/DefaultApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the bulkEncodeDocumentsEndpointIndicesIndexEncodeBulkPut operation.
     * @callback module:api/DefaultApi~bulkEncodeDocumentsEndpointIndicesIndexEncodeBulkPutCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DocVectorWrapper>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Bulk Encode Documents Endpoint
     * Encode multiple documents  :param index: the index in elastic search :param payload: :param save_in_es: :return:
     * @param {Object} opts Optional parameters
     * @param {module:api/DefaultApi~bulkEncodeDocumentsEndpointIndicesIndexEncodeBulkPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/DocVectorWrapper>}
     */
    bulkEncodeDocumentsEndpointIndicesIndexEncodeBulkPut(body, index, opts, callback) {
      opts = opts || {};
      let postBody = body;

      let pathParams = {
        'index': index
      };
      let queryParams = {
        'save_in_es': opts['saveInEs']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [DocVectorWrapper];

      return this.apiClient.callApi(
        '/indices/{index}/encode/bulk', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the bulkSaveDocumentsEndpointIndicesIndexAddBulkPut operation.
     * @callback module:api/DefaultApi~bulkSaveDocumentsEndpointIndicesIndexAddBulkPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelObject} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Bulk Save Documents Endpoint
     * Saves multiple documents, that already include vectors, in elastic search :param index: the index in elastic search :param payload: the bulk save request :return:
     * @param {module:api/DefaultApi~bulkSaveDocumentsEndpointIndicesIndexAddBulkPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelObject}
     */
    bulkSaveDocumentsEndpointIndicesIndexAddBulkPut(body, index, callback) {
      let postBody = body;

      let pathParams = {
        'index': index
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ModelObject;

      return this.apiClient.callApi(
        '/indices/{index}/add/bulk', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the createIndexEndpointIndicesIndexPost operation.
     * @callback module:api/DefaultApi~createIndexEndpointIndicesIndexPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelObject} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Index Endpoint
     * Create a new index in elastic search with a search vector field :param index: the index in elastic search :param payload: :return:
     * @param {module:api/DefaultApi~createIndexEndpointIndicesIndexPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelObject}
     */
    createIndexEndpointIndicesIndexPost(body, index, callback) {
      let postBody = body;

      let pathParams = {
        'index': index
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ModelObject;

      return this.apiClient.callApi(
        '/indices/{index}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the existsEndpointIndicesIndexDocDocIdExistsGet operation.
     * @callback module:api/DefaultApi~existsEndpointIndicesIndexDocDocIdExistsGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Exists Endpoint
     * Updates the vector of a specific document in the database :param index: the index in elastic search :param doc_id: the id of the document in elastic search :return:
     * @param {module:api/DefaultApi~existsEndpointIndicesIndexDocDocIdExistsGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    existsEndpointIndicesIndexDocDocIdExistsGet(index, docId, callback) {
      let postBody = null;

      let pathParams = {
        'index': index,
        'doc_id': docId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/indices/{index}/doc/{doc_id}/exists', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the readDocumentEndpointIndicesIndexDocDocIdGet operation.
     * @callback module:api/DefaultApi~readDocumentEndpointIndicesIndexDocDocIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocVectorWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Read Document Endpoint
     * Get a document from the database index by its id :param doc_id: the id of the document in elastic search :param index: the index in elastic search :return:
     * @param {module:api/DefaultApi~readDocumentEndpointIndicesIndexDocDocIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocVectorWrapper}
     */
    readDocumentEndpointIndicesIndexDocDocIdGet(index, docId, callback) {
      let postBody = null;

      let pathParams = {
        'index': index,
        'doc_id': docId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DocVectorWrapper;

      return this.apiClient.callApi(
        '/indices/{index}/doc/{doc_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the readIndexMappingIndicesIndexMappingGet operation.
     * @callback module:api/DefaultApi~readIndexMappingIndicesIndexMappingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelObject} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Read Index Mapping
     * returns the mapping of the index :return: dict
     * @param {module:api/DefaultApi~readIndexMappingIndicesIndexMappingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelObject}
     */
    readIndexMappingIndicesIndexMappingGet(index, callback) {
      let postBody = null;

      let pathParams = {
        'index': index
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ModelObject;

      return this.apiClient.callApi(
        '/indices/{index}/mapping', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the readIndicesEndpointIndicesGet operation.
     * @callback module:api/DefaultApi~readIndicesEndpointIndicesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelObject} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Read Indices Endpoint
     * returns all indices from the database :return: dict
     * @param {module:api/DefaultApi~readIndicesEndpointIndicesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelObject}
     */
    readIndicesEndpointIndicesGet(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ModelObject;

      return this.apiClient.callApi(
        '/indices', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the readSimilarDocumentsEndpointIndicesIndexDocDocIdSimilarityGet operation.
     * @callback module:api/DefaultApi~readSimilarDocumentsEndpointIndicesIndexDocDocIdSimilarityGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelObject} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Read Similar Documents Endpoint
     * Get similar documents of a reference document from the database :param doc_id: the id of the reference document in elastic search :param index: the index in elastic search :param amount: amount of similar documents :return:
     * @param {Object} opts Optional parameters
     * @param {module:api/DefaultApi~readSimilarDocumentsEndpointIndicesIndexDocDocIdSimilarityGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelObject}
     */
    readSimilarDocumentsEndpointIndicesIndexDocDocIdSimilarityGet(index, docId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'index': index,
        'doc_id': docId
      };
      let queryParams = {
        'amount': opts['amount']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ModelObject;

      return this.apiClient.callApi(
        '/indices/{index}/doc/{doc_id}/similarity', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the readSimilarDocumentsWithQueryEndpointIndicesIndexDocDocIdSimilarityPut operation.
     * @callback module:api/DefaultApi~readSimilarDocumentsWithQueryEndpointIndicesIndexDocDocIdSimilarityPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelObject} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Read Similar Documents With Query Endpoint
     * Get similar documents of a reference document from the database and use a search query to filter :param doc_id: the id of the reference document in elastic search :param index: the index in elastic search :param payload: the search query :param amount: amount of similar documents :return:
     * @param {Object} opts Optional parameters
     * @param {module:api/DefaultApi~readSimilarDocumentsWithQueryEndpointIndicesIndexDocDocIdSimilarityPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelObject}
     */
    readSimilarDocumentsWithQueryEndpointIndicesIndexDocDocIdSimilarityPut(body, index, docId, opts, callback) {
      opts = opts || {};
      let postBody = body;

      let pathParams = {
        'index': index,
        'doc_id': docId
      };
      let queryParams = {
        'amount': opts['amount']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ModelObject;

      return this.apiClient.callApi(
        '/indices/{index}/doc/{doc_id}/similarity', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the readStatusEndpointGet operation.
     * @callback module:api/DefaultApi~readStatusEndpointGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelObject} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Read Status Endpoint
     * status / health endpoint TODO: add elastic search availability :return: dict
     * @param {module:api/DefaultApi~readStatusEndpointGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelObject}
     */
    readStatusEndpointGet(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ModelObject;

      return this.apiClient.callApi(
        '/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the searchEndpointIndicesIndexSearchPut operation.
     * @callback module:api/DefaultApi~searchEndpointIndicesIndexSearchPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelObject} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search Endpoint
     * Searches in an index using a keyword :param index: the index in elastic search :param payload: the search request payload :return:
     * @param {module:api/DefaultApi~searchEndpointIndicesIndexSearchPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelObject}
     */
    searchEndpointIndicesIndexSearchPut(body, index, callback) {
      let postBody = body;

      let pathParams = {
        'index': index
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ModelObject;

      return this.apiClient.callApi(
        '/indices/{index}/search', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the similaritySearchEndpointIndicesIndexEncodeSimilarityPut operation.
     * @callback module:api/DefaultApi~similaritySearchEndpointIndicesIndexEncodeSimilarityPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelObject} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Similarity Search Endpoint
     * Find similar documents :param index: the index in elastic search :param payload: the reference document :param amount: amount of similar documents :return:
     * @param {Object} opts Optional parameters
     * @param {module:api/DefaultApi~similaritySearchEndpointIndicesIndexEncodeSimilarityPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelObject}
     */
    similaritySearchEndpointIndicesIndexEncodeSimilarityPut(body, index, opts, callback) {
      opts = opts || {};
      let postBody = body;

      let pathParams = {
        'index': index
      };
      let queryParams = {
        'amount': opts['amount']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ModelObject;

      return this.apiClient.callApi(
        '/indices/{index}/encode/similarity', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateMetadataEndpointIndicesIndexDocDocIdMetadataPut operation.
     * @callback module:api/DefaultApi~updateMetadataEndpointIndicesIndexDocDocIdMetadataPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelObject} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Metadata Endpoint
     * Updates the metadata of a specific document in the database :param doc_id: the id of the document in elastic search :param index: the index in elastic search :param payload: the vector request :return:
     * @param {module:api/DefaultApi~updateMetadataEndpointIndicesIndexDocDocIdMetadataPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelObject}
     */
    updateMetadataEndpointIndicesIndexDocDocIdMetadataPut(body, index, docId, callback) {
      let postBody = body;

      let pathParams = {
        'index': index,
        'doc_id': docId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ModelObject;

      return this.apiClient.callApi(
        '/indices/{index}/doc/{doc_id}/metadata', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateVectorEndpointIndicesIndexDocDocIdVectorPut operation.
     * @callback module:api/DefaultApi~updateVectorEndpointIndicesIndexDocDocIdVectorPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelObject} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Vector Endpoint
     * Updates the vector of a specific document in the database :param doc_id: the id of the document in elastic search :param index: the index in elastic search :param payload: the vector request :return:
     * @param {module:api/DefaultApi~updateVectorEndpointIndicesIndexDocDocIdVectorPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelObject}
     */
    updateVectorEndpointIndicesIndexDocDocIdVectorPut(body, index, docId, callback) {
      let postBody = body;

      let pathParams = {
        'index': index,
        'doc_id': docId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ModelObject;

      return this.apiClient.callApi(
        '/indices/{index}/doc/{doc_id}/vector', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}