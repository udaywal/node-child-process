const express = require('express');

const app = express();

/** Synchronous request **/
app.get('/one', (req, res) => {
    return res.send({ sum: longComputation() });
})

/** Asynchronous request **/
app.get('/two', async (req, res) => {
    return res.send({ sum: await longComputePromise() });
})

/** Forked request **/
app.get('/three', (req, res) => {
    // spinning a child process
    const child = fork('./longTask.js');
    // communicating with child process
    child.send('start');
    child.on('message', (sum) => {
        return res.send({ sum: sum })
    })
})

app.listen(2000, () => {
    console.log(`Listening on 2000`);
})

function longComputation() {
    let sum = 0;
    for (i=0; i<1e9; i++) {
        sum += i;
    }
    return sum;
}

function longComputePromise() {
    return new Promise((resolve, reject) => {
        let sum = 0;
        for (i=0; i<1e9; i++) {
            sum += i;
        }
        resolve(sum);
    })
}
