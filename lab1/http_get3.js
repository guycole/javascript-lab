console.log("http_get3 start")

const https = require('https');
//const url = "https://jsonplaceholder.typicode.com/todos/1"
const url = "https://scoop-kubernetes-artifacts-staging.s3-us-west-2.amazonaws.com/kubeconfigs/staging"

const xxx = https.get(url, (response) => {
    let buffer = ''

    // called when a data chunk is received.
    response.on('data', (chunk) => {
        console.log("read")
        buffer += chunk
    });

    // called when the complete response is received.
    response.on('end', () => {
        console.log("end")
        console.log(buffer);
    })
}).on("error", (error) => {
    console.log("Error: " + error.message)
})

console.log("http_get3 stop")
