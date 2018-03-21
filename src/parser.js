const http = require("http");
const qs = require("querystring");
const url = require("url");

var hidden = {};

/**
 * The Parser object
 */
class Parser {
	/**
	 * Creates a new Parser object
	 * @param {bool} prototype Enable Prototype Features
	 */
	constructor(prototype = false) {
		hidden.prototype = prototype

		this.Scope = {
			echo: function (text) {
				return text;
			},
		};

		this.Scope.POST = {};
		this.Scope.GET = {};
	}
	
	/**
	 * Parse a bit of code or a file
	 * @param {string} data File/Code to parse
	 * @param {object} customScope Use a custom scope
	 */
	Parse(data, customScope = this.Scope) {
		var resA = data.split(/(\<\?\js)|(\?\>)/);
		var resB = [];

		var nextIsCode = false;
		resA.forEach((x) => {
			if (x == null || undefined) {
				// Do Nothing
			} else if (x == "<?js") {
				nextIsCode = true;
			} else if (x == "?>") {
				nextIsCode = false;
			} else if (nextIsCode) {
				var Scope = customScope;
				resB.push(eval(x));
			} else {
				resB.push(x);
			}
		});

		return resB.join("");
	}

	/**
	 * Extract the POST from a http request
	 * @param {http.ClientRequest} req HTTP Client Request
	 */
	GetPost(req) {
		var post = "";

		req.on('data', (data) => {
			post += data;

			if (post.length > 1e6)
				req.connection.destroy();
		});
		
		this.Scope.POST = qs.parse(post);
	}

	/**
	 * Extract the GET from a http request
	 * @param {http.ClientRequest} req HTTP Client Request
	 */
	GetGet(req) {
		var get = url.parse(req.url, true);
		
		this.Scope.GET = url.parse(get);
	}
}

module.exports = Parser;