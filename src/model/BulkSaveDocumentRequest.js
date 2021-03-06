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
import DocVectorWrapper from './DocVectorWrapper';

/**
* The BulkSaveDocumentRequest model module.
* @module model/BulkSaveDocumentRequest
* @version 0.0.0
*/
export default class BulkSaveDocumentRequest {
    /**
    * Constructs a new <code>BulkSaveDocumentRequest</code>.
    * @alias module:model/BulkSaveDocumentRequest
    * @class
    * @param data {Array.<module:model/DocVectorWrapper>} 
    */

    constructor(data) {
        
        
        this['data'] = data;
        
    }

    /**
    * Constructs a <code>BulkSaveDocumentRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/BulkSaveDocumentRequest} obj Optional instance to populate.
    * @return {module:model/BulkSaveDocumentRequest} The populated <code>BulkSaveDocumentRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BulkSaveDocumentRequest();
                        
            
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [DocVectorWrapper]);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/DocVectorWrapper>} data
    */
    'data' = undefined;




}
