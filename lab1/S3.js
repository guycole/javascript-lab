'use strict'

const YAML = require('js-yaml')

class S3 {
    constructor(s3) {
        this.s3 = s3
    }

    /**
     * Gets & parses a S3 object.
     *
     * @param {string} bucket - S3 bucket name.
     * @param {string} key - S3 key name.
     * @param {string} format - The format of the S3 object. Only supports json and yaml.
     * @returns {Object} The parsed S3 object.
     */
    async getObject(bucket, key, format) {
        const data = await this.s3.getObject({
            Bucket: bucket,
            Key: key,
        }).promise()

        const object = data.Body

        switch (format) {
            case 'json':
                return JSON.parse(object)
            case 'yaml':
                return YAML.safeLoad(object, 'utf8')
            default:
                throw new Error('Unsupported object format')
        }
    }
}

module.exports = S3
