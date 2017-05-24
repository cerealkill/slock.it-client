'use strict';

let _ = require('lodash');
let Web3 = require('web3');
let web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.slock.it"));

let contract = require('./contract')
let chargingPoles = web3.eth.contract(contract.abi).at(contract.address);

/**
 * @param {object} __obj Object to be sent.
 * @param {string} __event Event name.
 * @param {number} __epoch Epoch time of eth block.
*/
exports.send_event = function (__obj, __event, __epoch, __blockNumber){
    let formated = {};
    _.forEach(__obj, (v, k) => formated[k] = v.toString());
    formated.epoch = web3.eth.getBlock(__blockNumber).timestamp.toString();
    formated.event = __event;
    send(formated);
}

exports.chargingPoles = chargingPoles;
