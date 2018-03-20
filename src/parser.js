var private = {};

/**
 * The Parser object
 */
class Parser {
	/**
	 * Creates a new Parser object
	 * @param {bool} prototype Enable Prototype Features
	 */
	constructor(prototype = true) {
		private.prototype = prototype

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