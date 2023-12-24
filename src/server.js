import express from "express";
import "dotenv/config";
import { Logger } from "~/utils";
const startService = async function () {
	const app = express();
	const port = process.env.PORT || 3000;

	app.listen(port, () => {
		Logger.info("Service", "Warn up", `App listening on port ${process.env.APP_DOMAINBE}/api-docs/`);
	});
};

startService();
