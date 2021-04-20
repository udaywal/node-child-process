const { exec } = require("child_process");

exec('dir', (err, stdout, stderr) => {
    if (err) {
        console.log(err);
    }
    if (stderr) {
        console.log(stderr)
    }
    console.log(stdout);
});