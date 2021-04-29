const { spawn } = require("child_process");

const child = spawn('ls', ['-lh']);

child.stdout.on('data', data => {
    console.log(`stdout : ${data}`);
})

child.stderr.on('data', data => {
    console.log(`stderr : ${data}`);
})

child.on('error', error => {
    console.log(`error : ${error}`);
})

child.on('exit', (code, signal) => {
    if (code) console.log(`code : process exit with code ${code}`)
    if (signal) console.log(`signal : process killed with signal ${signal}`)
    console.log('Done ✅');
})