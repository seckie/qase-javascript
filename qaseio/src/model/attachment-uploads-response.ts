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


import { AttachmentGet } from './attachment-get';

/**
 * 
 * @export
 * @interface AttachmentUploadsResponse
 */
export interface AttachmentUploadsResponse {
    /**
     * 
     * @type {boolean}
     * @memberof AttachmentUploadsResponse
     */
    'status'?: boolean;
    /**
     * 
     * @type {Array<AttachmentGet>}
     * @memberof AttachmentUploadsResponse
     */
    'result'?: Array<AttachmentGet>;
}

