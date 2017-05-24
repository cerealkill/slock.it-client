'use strict';

let eth = require('./init');
let sms = require('./sms');


// Watches for new Returned operations and notify users
eth.chargingPoles.LogReturned().watch(function watch_returned(error, log) {
    sms.send_text({
            'Event': 'Returned',
            'Amount': log.args.chargeAmount,
            'Time elapsed': log.args.elapsedSeconds
      });
});

// Watches for new Renting operations and notify users
eth.chargingPoles.LogRented().watch(function watch_rented(error, log) {
    sms.send_text({
            'Event': 'Rented',
            'Max car W/h': log.args.wattPower,
            'Hours rented': log.args.hoursToRent
        });
});
