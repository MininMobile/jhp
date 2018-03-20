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

		if (hidden.prototype) {
			this.Scope["POST"] = {};
			this.Scope["GET"] = {};
		}
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
}
module.exports = Parser;