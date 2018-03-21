# jhp
JavaScript Hypertext Preprocessor

## Example
### Input
File on Server
```
<body>
	<h3><?js Scope.echo("ur mum is...") ?></h3>
	<h1>BIG GAY</h<?js 1+1-1 ?>>
</body>
```
### Output
HTML recieved by User
```
<body>
	<h3>ur mum is...</h3>
	<h1>BIG GAY</h1>
</body>
```

## Functions
All these are under the `Scope` variable/object.

| Name   | Type     | Description                                       | Example                 |
| ------ | -------- | ------------------------------------------------- | ----------------------- |
| `echo` | Function | Add information to the page                       | `echo("Hello, World!")` |
| `GET`  | Object   | Get information from the GET headers of the page  | `GET["name"]`           |
| `POST` | Object   | Get information from the POST headers of the page | `POST["password"]`      |

[ insert stuff here you lazy bastard ]

*totally not php*
