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
import ModelObject from './ModelObject';

/**
* The SimilarityQueryRequest model module.
* @module model/SimilarityQueryRequest
* @version 0.0.0
*/
export default class SimilarityQueryRequest {
    /**
    * Constructs a new <code>SimilarityQueryRequest</code>.
    * @alias module:model/SimilarityQueryRequest
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>SimilarityQueryRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SimilarityQueryRequest} obj Optional instance to populate.
    * @return {module:model/SimilarityQueryRequest} The populated <code>SimilarityQueryRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SimilarityQueryRequest();
                        
            
            if (data.hasOwnProperty('query')) {
                obj['query'] = ApiClient.convertToType(data['query'], ModelObject);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/ModelObject} query
    */
    'query' = undefined;




}
