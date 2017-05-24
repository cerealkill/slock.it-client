'use strict';

let request = require('request');
let api_url = "https://fnw14hgt3k.execute-api.us-east-1.amazonaws.com/beta/events"

/** Add log entry to api on amazon.
 * @param {string} __body js object to be sent.
 */
let send = function (__body) {

    request({
        url: api_url,
        method: "POST",
        json: true,
        body: __body
    },
    function (error, response, body) {
        if (error) {
            throw error
        }
        console.log('%s sent!', JSON.stringify(__body));
        console.log('%s returned!', JSON.stringify(body));
    });
}
