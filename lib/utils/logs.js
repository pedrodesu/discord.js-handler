"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
exports.errorLog = (message) => chalk_1.red(message);
exports.successLog = (message) => chalk_1.green(message);
