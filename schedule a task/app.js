const schedule = require('node-schedule');

schedule.scheduleJob('*/2 * * * * *', () => {
   console.log('running a task every 2 seconds');
});