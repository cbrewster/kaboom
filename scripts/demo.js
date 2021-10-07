const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 8000

console.log(`http://localhost:${port}`)

http.createServer((req, res) => {
	try {
		res.writeHead(200, {
			"Content-Type": "text/html"
		});
		res.end(`
	<html>
	<head>
		<script>
			${fs.readFileSync("dist/kaboom.js")}
		</script>
	</head>
	<body>
		<script>
			${fs.readFileSync(`demo/${req.url}.js`)}
		</script>
	</body>
	</html>
		`);
	} catch (err) {
		res.writeHead(500);
		res.end(err.stack);
	}
}).listen(port);
