const { generateKeyPairSync } = require("crypto");
const { publicKey, privateKey } = generateKeyPairSync("rsa", {
	modulusLength: 4096,
	publicKeyEncoding: {
		type: "spki",
		format: "pem"
	},
	privateKeyEncoding: {
		type: "pkcs8",
		format: "pem",
		cipher: "aes-256-cbc",
		passphrase: "top secret"
	}
});

const fs = require("fs");
fs.writeFile("./key/public.pem", publicKey, function (err) {
	if (err) return console.log(err);
	console.log("Public key has been created");
});
fs.writeFile("./key/private.pem", privateKey, function (err) {
	if (err) return console.log(err);
	console.log("Private key has been created");
});
