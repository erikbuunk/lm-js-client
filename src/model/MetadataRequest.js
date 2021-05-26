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
* The MetadataRequest model module.
* @module model/MetadataRequest
* @version 0.0.0
*/
export default class MetadataRequest {
    /**
    * Constructs a new <code>MetadataRequest</code>.
    * @alias module:model/MetadataRequest
    * @class
    * @param data {Object} 
    */

    constructor(data) {
        
        
        this['data'] = data;
        
    }

    /**
    * Constructs a <code>MetadataRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/MetadataRequest} obj Optional instance to populate.
    * @return {module:model/MetadataRequest} The populated <code>MetadataRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetadataRequest();
                        
            
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], Object);
            }
        }
        return obj;
    }

    /**
    * @member {Object} data
    */
    'data' = undefined;




}