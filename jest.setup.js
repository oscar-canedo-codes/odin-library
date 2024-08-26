const { TextEncoder, TextDecoder } = require('util');

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const { JSDOM } = require('jsdom');

const dom = new JSDOM(`<!DOCTYPE html><div id="book"></div>`);
global.document = dom.window.document;