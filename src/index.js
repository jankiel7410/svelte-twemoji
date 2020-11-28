"use strict";
exports.__esModule = true;
exports.twemoji = void 0;
var twemoji_1 = require("twemoji");
var svelte_1 = require("svelte");
function twemoji(node, how) {
    if (how === void 0) { how = {}; }
    twemoji_1.parse(node, how);
    svelte_1.afterUpdate(function () {
        twemoji_1.parse(node, how);
    });
    return {
        update: function () {
            console.warn('Changing twemoji options after the action was mounted is not possible.');
        }
    };
}
exports.twemoji = twemoji;
