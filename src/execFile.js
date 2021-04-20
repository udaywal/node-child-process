const { execFile } = require("child_process");

execFile('file.bat', (err, stdout, stderr) => {
    if (err) {
        console.log(err);
    }
    if (stderr) {
        console.log(stderr)
    }
    console.log(stdout);
});