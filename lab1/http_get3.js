console.log("http_get3 start")

const https = require('https');
//const url = "https://jsonplaceholder.typicode.com/todos/1"
const url = "https://scoop-kubernetes-artifacts-staging.s3-us-west-2.amazonaws.com/kubeconfigs/staging"

https.get(url, (response) => {
    let todo = ''

    // called when a data chunk is received.
    response.on('data', (chunk) => {
        todo += chunk
    });

    // called when the complete response is received.
    response.on('end', () => {
        console.log(todo)
        //console.log(JSON.parse(todo).title);
    })
}).on("error", (error) => {
    console.log("Error: " + error.message)
})

console.log("http_get3 stop")
