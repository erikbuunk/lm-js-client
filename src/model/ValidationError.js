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
* The ValidationError model module.
* @module model/ValidationError
* @version 0.0.0
*/
export default class ValidationError {
    /**
    * Constructs a new <code>ValidationError</code>.
    * @alias module:model/ValidationError
    * @class
    * @param loc {Array.<String>} 
    * @param msg {String} 
    * @param type {String} 
    */

    constructor(loc, msg, type) {
        
        
        this['loc'] = loc;
        this['msg'] = msg;
        this['type'] = type;
        
    }

    /**
    * Constructs a <code>ValidationError</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ValidationError} obj Optional instance to populate.
    * @return {module:model/ValidationError} The populated <code>ValidationError</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ValidationError();
                        
            
            if (data.hasOwnProperty('loc')) {
                obj['loc'] = ApiClient.convertToType(data['loc'], ['String']);
            }
            if (data.hasOwnProperty('msg')) {
                obj['msg'] = ApiClient.convertToType(data['msg'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {Array.<String>} loc
    */
    'loc' = undefined;
    /**
    * @member {String} msg
    */
    'msg' = undefined;
    /**
    * @member {String} type
    */
    'type' = undefined;




}
