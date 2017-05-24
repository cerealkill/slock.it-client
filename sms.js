'use strict';

let request = require('request');
let api_url = "https://6b0qxqwymf.execute-api.us-east-1.amazonaws.com/beta/send"

/**Sends request to SMS api on amazon. This api texts ll subscribers.
 * @param {string} __text Text to be sent.
 */
let send = function (__text) {

    request({
        url: api_url,
        method: "POST",
        json: true,
        body: { payload: __text }
    },
    function (error, response, body) {
        if (error) {
            throw error
        }
        console.log('%s sent!', __text);
    });
}

/**Sends request to SMS api on amazon. This api texts ll subscribers.
 * @param {Object} __obj Event object to be sent.
 */
exports.send_text = function (__obj) {
    let compile = _.template('<% _.forEach(args, function(v, k) { %><%- k %>: <%- v.toString() %> - <% }); %>');
    let text = compile({ 'args': __obj });
    send(text);
}
