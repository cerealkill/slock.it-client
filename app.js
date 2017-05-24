'use strict';

let app = require('./init.js');
let aws = require('./aws');

// Watches for new Returned operations and notify users
app.chargingPoles.LogReturned().watch(function watch_returned(__error, __log) {
      aws.send_event(__log.args, 'returned', __log.blockNumber);
});

// Watches for new Renting operations and notify users
app.chargingPoles.LogRented().watch(function watch_rented(__error, __log) {
      aws.send_event(__log.args, 'returned', __log.blockNumber);
});
