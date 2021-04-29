function longComputation() {
    let sum = 0;
    for (i=0; i<1e9; i++) {
        sum += i;
    }
    return sum;
}

// interprocess communication to send and get back data
process.on('message', (message) => {
    if (message === 'start') {
        const sum = longComputation();
        process.send(sum)
    }
})