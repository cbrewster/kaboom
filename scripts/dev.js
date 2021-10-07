const cp = require("child_process");

const tasks = [
	cp.spawn("node", [
		"scripts/watch.js", "src",
		"npm", "run", "build", "--silent",
	], {
		stdio: "inherit",
		detached: true,
	}),
	cp.spawn("node", [
		"scripts/demo.js",
	], {
		stdio: "inherit",
		detached: true,
	}),
];

process.on("SIGINT", () => {
	tasks.forEach((t) => {
		process.kill(-t.pid);
	});
	process.exit();
});
