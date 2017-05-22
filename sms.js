'use strict';

let request = require('request');
let api_url = "https://6b0qxqwymf.execute-api.us-east-1.amazonaws.com/beta/send"

/**Sends request to SMS api on amazon. This api texts ll subscribers.
 * @param {string} _text Text to be sent.
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
        console.log('%s sent!', _text);
    });
}
