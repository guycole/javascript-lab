
const https = require('https');
const url = "https://scoop-kubernetes-artifacts-staging.s3-us-west-2.amazonaws.com/kubeconfigs/staging"

async function run() {
    console.log("run run")

    let buffer = ''
    https.get(url, (response) => {
        // called when a data chunk is received.
        response.on('data', (chunk) => {
            buffer += chunk
        });

        // called when the complete response is received.
        response.on('end', () => {
            console.log("-x-x-x-")
            console.log(buffer)
            console.log("-x-x-x-")
        })
    }).on("error", (error) => {
        console.log("Error: " + error.message)
    })

    console.log("get stop")
//    console.log(rv)
//    console.log(buffer)
}

console.log("start")
run()
console.log("stop")
