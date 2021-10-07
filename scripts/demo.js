const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 8000

console.log(`http://localhost:${port}`)

http.createServer((req, res) => {
	res.writeHead(200, {
		"Content-Type": "text/html"
	});
	res.write(`
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
	res.end();
}).listen(port);
