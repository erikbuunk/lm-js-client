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

import ApiClient from '../ApiClient';

/**
* The DocVectorWrapper model module.
* @module model/DocVectorWrapper
* @version 0.0.0
*/
export default class DocVectorWrapper {
    /**
    * Constructs a new <code>DocVectorWrapper</code>.
    * @alias module:model/DocVectorWrapper
    * @class
    * @param id {String} 
    * @param document {String} 
    * @param vector {Array.<Number>} 
    */

    constructor(id, document, vector) {
        
        
        this['id'] = id;
        this['document'] = document;
        this['vector'] = vector;
        
    }

    /**
    * Constructs a <code>DocVectorWrapper</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/DocVectorWrapper} obj Optional instance to populate.
    * @return {module:model/DocVectorWrapper} The populated <code>DocVectorWrapper</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DocVectorWrapper();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('document')) {
                obj['document'] = ApiClient.convertToType(data['document'], 'String');
            }
            if (data.hasOwnProperty('documentParts')) {
                obj['documentParts'] = ApiClient.convertToType(data['documentParts'], {'String': 'String'});
            }
            if (data.hasOwnProperty('vector')) {
                obj['vector'] = ApiClient.convertToType(data['vector'], ['Number']);
            }
            if (data.hasOwnProperty('modelName')) {
                obj['modelName'] = ApiClient.convertToType(data['modelName'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} id
    */
    'id' = undefined;
    /**
    * @member {Object} metadata
    */
    'metadata' = undefined;
    /**
    * @member {String} document
    */
    'document' = undefined;
    /**
    * @member {Object.<String, String>} documentParts
    */
    'documentParts' = undefined;
    /**
    * @member {Array.<Number>} vector
    */
    'vector' = undefined;
    /**
    * @member {String} modelName
    */
    'modelName' = undefined;




}
