const path = require("path");
const fs = require("fs");
const solc = require("solc");

const inboxPah = path.resolve(__dirname, "contracts", "Inbox.sol");
const source = fs.readFileSync(inboxPah, "utf8");

module.exports = solc.compile(source, 1).contracts[":Inbox"];
