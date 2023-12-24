import clc from "cli-color";

const generateTimeStamp = function () {
	const localeStringOptions = {
		year: "numeric",
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
		day: "2-digit",
		month: "2-digit",
	};
	const timestamp = new Date(Date.now()).toLocaleString(undefined, localeStringOptions);
	return timestamp;
};
const info = function (service, funcName, message) {
	let timestamp = generateTimeStamp();
	console.log(`${clc.green("[Nodejs]")} ${timestamp} ${clc.yellow(`[${service}]`)}${clc.green(`:${funcName} -> ${message}`)}`);
};

const warn = function (service, funcName, message) {
	let timestamp = generateTimeStamp();
	console.log(`${clc.yellow("[Nodejs]")} ${timestamp} ${clc.yellow(`[${service}]`)}${clc.yellow(`:${funcName} -> ${message}`)}`);
};

const error = function (service, funcName, error, data) {
	let timestamp = generateTimeStamp();
	console.log(
		`${clc.red("[Nodejs]")} ${timestamp} ${clc.yellow(`[${service}]`)}${clc.red(`:${funcName} -> ${error} `)} ${
			data ? "ON DATA: " + JSON.stringify(data) : ""
		}`
	);
};

export const Logger = {
	info,
	warn,
	error,
};
