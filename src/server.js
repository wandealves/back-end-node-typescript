"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
app.get("/", function (request, response) {
    return response.json({ message: "OPA" });
});
app.listen(3333, function () {
    console.log("Server started on port 3333");
});
