'use strict';

exports.name = 'charging_poles'

exports.abi = [
    { "type": "function", "name": "poleOwner", "constant": true, "inputs": [{ "name": "_poleID", "type": "bytes32" }], "outputs": [{ "name": "", "type": "address" }], "payable": false },
    { "type": "function", "name": "getPricePerKW", "constant": true, "inputs": [{ "name": "_poleID", "type": "bytes32" }, { "name": "_user", "type": "address" }], "outputs": [{ "name": "price", "type": "uint256" }], "payable": false },

    { "type": "event", "name": "LogClosingTimeUpdated", "anonymous": false, "inputs": [{ "indexed": true, "name": "poleID", "type": "bytes32" }, { "indexed": false, "name": "_blocked", "type": "uint256" }] },
    { "type": "event", "name": "LogOwnerUpdated", "anonymous": false, "inputs": [{ "indexed": true, "name": "poleID", "type": "bytes32" }, { "indexed": false, "name": "newOwner", "type": "address" }] },
    { "type": "event", "name": "LogMeterProviderUpdated", "anonymous": false, "inputs": [{ "indexed": true, "name": "poleID", "type": "bytes32" }, { "indexed": false, "name": "newMeterProvider", "type": "address" }] },
    { "type": "event", "name": "LogPriceProviderUpdated", "anonymous": false, "inputs": [{ "indexed": true, "name": "poleID", "type": "bytes32" }, { "indexed": false, "name": "newPriceProvider", "type": "uint256" }] },
    { "type": "event", "name": "LogMaxWattPowerUpdated", "anonymous": false, "inputs": [{ "indexed": true, "name": "poleID", "type": "bytes32" }, { "indexed": false, "name": "newMaxWattPower", "type": "uint256" }] },
    { "type": "event", "name": "LogMaxRentingTimeUpdated", "anonymous": false, "inputs": [{ "indexed": true, "name": "poleID", "type": "bytes32" }, { "indexed": false, "name": "newMaxRentingTime", "type": "uint256" }] },
    { "type": "event", "name": "LogPoleSetUp", "anonymous": false, "inputs": [{ "indexed": true, "name": "poleID", "type": "bytes32" }] },
    { "type": "event", "name": "LogRented", "anonymous": false, "inputs": [{ "indexed": true, "name": "poleID", "type": "bytes32" }, { "indexed": false, "name": "controller", "type": "address" }, { "indexed": false, "name": "wattPower", "type": "uint256" }, { "indexed": false, "name": "hoursToRent", "type": "uint256" }] },
    { "type": "event", "name": "LogReturned", "anonymous": false, "inputs": [{ "indexed": true, "name": "poleID", "type": "bytes32" }, { "indexed": false, "name": "chargeAmount", "type": "uint256" }, { "indexed": false, "name": "elapsedSeconds", "type": "uint256" }, { "indexed": false, "name": "watt", "type": "uint256" }, { "indexed": false, "name": "contractType", "type": "uint8" }] }
];

exports.address = "0x61c810e21659032084a4448d8d2f498789f81cb5";