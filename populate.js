'use strict';

let _ = require('lodash');

let app = require('./init.js');
let aws = require('./aws');

let send = function (__logs, __name, __event){
    let log_rented = _.filter(__logs, { event: __name });
    _.forEach(log_rented, function (__log) {
        app.send_event(__log.args, __event, __log.blockNumber);
    });
}

// Test
app.chargingPoles.allEvents({ fromBlock: 3738294, toBlock: 'latest' }).get(

  function populate(__err, __logs) {
    if(__err){
        console.error(__err);
        return;
    }

    send(__logs, 'LogRented', 'rented');
    send(__logs, 'LogReturned', 'returned');
});
