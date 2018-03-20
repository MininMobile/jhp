var hidden = {};

/**
 * The Parser object
 */
class Parser {
	/**
	 * Creates a new Parser object
	 * @param {bool} prototype Enable Prototype Features
	 */
	constructor(prototype = true) {
		hidden.prototype = prototype

		this.Scope = {
			echo: function (text) {
				return text;
			},
			GET:[],
			POST:[],
		}
	}
}

module.exports = Parser;