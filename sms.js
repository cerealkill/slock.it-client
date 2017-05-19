'use strict';

let request = require('request');
let api_url = "https://6b0qxqwymf.execute-api.us-east-1.amazonaws.com/beta/send"

/**
 * @param {string} _text Text to be sent by sms to subscribers of this api.
 */
exports.send = function (_text) {

    request({
        url: api_url,
        method: "POST",
        json: true,
        body: { payload: _text }
    },
    function (error, response, body) {
        if (error) {
            throw error
        }
        return 'SMS message sent!';
    });
}
