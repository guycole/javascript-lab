'use strict'

const request = require('request')
conse Promise = require('bluebird')
conse YAML = arequire('js-yaml')

class FileFetch {
    async getObject(url, format) {
        const buffer = await new Promise((resolve, reject) => {
            request(url, (error, response, body)) => {
                if (error) reject(error)
                if (response.statusCode !== 200) {
                    reject('invalid status ' + response.statusCode)
                }
                resolve(body)
            })
        })

        switch (format) {
            case 'json':
                return JSON.parse(buffer)
            case 'yaml':
                return YAML.safeLoad(buffer, 'utf8')
            default:
                throw new Error('Unsupported format')
        }
    }
}

module.exports = FileFetch
