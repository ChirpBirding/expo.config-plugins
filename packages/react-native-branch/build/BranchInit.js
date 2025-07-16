"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initSession = initSession;
const expo_modules_core_1 = require("expo-modules-core");
const BranchInit = (0, expo_modules_core_1.requireNativeModule)("BranchInit");
//iOS only
async function initSession() {
    return await BranchInit.initSession();
}
