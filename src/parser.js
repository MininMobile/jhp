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
			GET: [],
			POST: [],
		}
	}
	
	Parse(data, customScope = this.Scope) {
		var result = data;

		var s = `<body>
	<h3><?js echo("ur mum is...") ?></h3>
	<h1>BIG GAY</h1>
</body>`;
		var arrStr = s.split(/(\<\?\js)|(\?\>)/);

		console.log(arrStr);

		return result
	}
}
module.exports = Parser;