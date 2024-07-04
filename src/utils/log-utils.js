"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.print = print;
/**
 * 打印日志
 * @param message
 */
function print(message) {
    console.log(`[${new Date().toLocaleString()}] ${message}`);
}
