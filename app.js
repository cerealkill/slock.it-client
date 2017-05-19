'use strict';

var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.slock.it"));

var contract = require('./contract')
var charging_poles = web3.eth.contract(contract.abi).at(contract.address);

var send_logs = function (_error, _logs) {
    return new Promise(function (resolve, reject) {

        if (_error) {
            reject(_error);
        }

        let sms = require('./sms')
        try {
            let res = sms.send(JSON.stringify(_logs));
            resolve(res);
        } catch (_err) {
            reject(_err);
        }
    });
};

var action = charging_poles.LogReturned({ fromBlock: 3705027, toBlock: 'latest' });

var test = action.get();

charging_poles.LogReturned().watch(send_logs);