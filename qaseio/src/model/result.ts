/* tslint:disable */
/* eslint-disable */
/**
 * Qase.io API
 * Qase API Specification.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@qase.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Attachment } from './attachment';
import { ResultSteps } from './result-steps';

/**
 * 
 * @export
 * @interface Result
 */
export interface Result {
    /**
     * 
     * @type {string}
     * @memberof Result
     */
    'hash'?: string;
    /**
     * 
     * @type {string}
     * @memberof Result
     */
    'comment'?: string;
    /**
     * 
     * @type {string}
     * @memberof Result
     */
    'stacktrace'?: string;
    /**
     * 
     * @type {number}
     * @memberof Result
     */
    'run_id'?: number;
    /**
     * 
     * @type {number}
     * @memberof Result
     */
    'case_id'?: number;
    /**
     * 
     * @type {Array<ResultSteps>}
     * @memberof Result
     */
    'steps'?: Array<ResultSteps>;
    /**
     * 
     * @type {string}
     * @memberof Result
     */
    'status'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Result
     */
    'is_api_result'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof Result
     */
    'time_spent_ms'?: number;
    /**
     * 
     * @type {string}
     * @memberof Result
     */
    'end_time'?: string | null;
    /**
     * 
     * @type {Array<Attachment>}
     * @memberof Result
     */
    'attachments'?: Array<Attachment>;
}

