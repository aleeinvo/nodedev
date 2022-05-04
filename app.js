process.on('uncaughtException', e => {
    console.log(e.message);
})



throw new Error('Sample errror');

console.log('This is after the rrror');
