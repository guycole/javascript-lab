'use strict'

const https = require('https')

console.log("start")

const url = "https://scoop-kubernetes-artifacts-staging.s3-us-west-2.amazonaws.com/kubeconfigs/staging"

console.log(__filename)
console.log(__dirname)

class FileFetcher {
    getObject(url, format) {
        return new Promise((resolve, reject) => {
            https.get(url, (response) => {
                var buffer = ''

                response.on('data', (chunk) => {
                    console.log("read")
                    buffer += chunk
                })

                response.on('end', () => {
                    console.log("end")
                    console.log(buffer)
                    resolve(buffer)
                })
            }).on("error", (error) => {
                console.log("Error: " + error.message)
                reject("yaddayadda")
            })
        })
    }
}

const ff = new FileFetcher()
console.log(ff.getObject(url, 'xxx'))

console.log("stop")