const https = require('https')

console.log("start")

const options = {
    hostname: 'scoop-kubernetes-artifacts-staging.s3-us-west-2.amazonaws.com',
    port: 443,
    path: '/kubeconfigs/staging',
    method: 'GET',
    agent: false
}

const req = https.request(options, function(res) {
    console.log('hit hit')

    res.on('data', function(d) {
        console.log("zzzzzzz")
    })
})

req.on('error', error => {
    console.error(error)
})

req.end()

console.log("stop")
