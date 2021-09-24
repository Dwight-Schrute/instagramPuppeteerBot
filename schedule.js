const spawn = require('child_process').spawn;
const fs = require('fs');
const schedule = require('node-schedule');
const { r, log, timeNow } = require('./src/helpers');
const firstRun = r(15, 20);
const secondRun = r(43, 48);

schedule.scheduleJob(' 25 * * * *', () => {
	let now = new Date().toLocaleString();
	console.log(now + ' running dks.js');
	spawn('node', ['dks.js']);
});

// schedule.scheduleJob(' 19,49 * * * *', () => {
// 	let now = new Date().toLocaleString();
// 	console.log(now + ' running sbj.js');
// 	spawn('node', ['sbj.js']);
// });