'use strict';

let Web3 = require('web3');
let web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.slock.it"));

let contract = require('./contract')
let chargingPoles = web3.eth.contract(contract.abi).at(contract.address);

let _ = require('lodash');
let sms = require('./sms');


let compiled_text = function (obj) {
    let compile = _.template('<% _.forEach(args, function(v, k) { %><%- k %>: <%- v.toString() %> - <% }); %>');
    return compile({ 'args': obj });
}

// Watches for new Returned operations and notify users
chargingPoles.LogReturned().watch(function watch_returned(error, log) {
    sms.send(compiled_text(
        {
            'Event': 'Returned',
            'Amount': log.args.chargeAmount,
            'Time elapsed': log.args.elapsedSeconds
        }
    ));
});

// Watches for new Renting operations and notify users
chargingPoles.LogRented().watch(function watch_rented(error, log) {
    sms.send(compiled_text(
        {
            'Event': 'Rented',
            'Max car W/h': log.args.wattPower,
            'Hours rented': log.args.hoursToRent
        }
    ));
});

// Test
chargingPoles.allEvents({ fromBlock: 3721056, toBlock: 'latest' }).get(function test_sms(err, logs) {

    let log_rented = _.filter(logs, { event: 'LogRented' });
    _.forEach(log_rented, function (log) {
        sms.send(compiled_text(
            {
                'Max car W/h': log.args.wattPower,
                'Hours rented': log.args.hoursToRent
            }
        ));
    });

});