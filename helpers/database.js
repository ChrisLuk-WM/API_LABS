"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run_insert = exports.run_query = void 0;
var sqlite3_1 = require("sqlite3");
var sequelize_1 = require("sequelize");
var config_1 = require("../config");
var run_query = function (query_1) {
    var args_1 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args_1[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, __spreadArray([query_1], args_1, true), void 0, function (query, values) {
        var db, sequelize, data_1, err_1;
        if (values === void 0) { values = ""; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    db = new sqlite3_1.Database('db.sqlite');
                    // const sequelize = new Sequelize(`postgres://${config.user}:${
                    //     config.password}@${config.host}:${config.port}/${config.database}`);
                    //     await sequelize.authenticate();
                    //     let data = await sequelize.query(query, {
                    //     replacements: values,
                    //     type: QueryTypes.SELECT
                    //     });
                    db.all(query, function (err, rows) {
                        console.log(query);
                        console.log(rows);
                    });
                    sequelize = new sequelize_1.Sequelize({
                        dialect: "sqlite",
                        storage: config_1.config.path
                    });
                    return [4 /*yield*/, sequelize.authenticate()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, sequelize.query(query, {
                            replacements: values,
                            type: sequelize_1.QueryTypes.SELECT
                        })];
                case 2:
                    data_1 = _a.sent();
                    return [4 /*yield*/, sequelize.close()];
                case 3:
                    _a.sent();
                    return [2 /*return*/, data_1];
                case 4:
                    err_1 = _a.sent();
                    console.error("ERROR HERE");
                    console.error(err_1, query, values);
                    throw 'Database query error';
                case 5: return [2 /*return*/];
            }
        });
    });
};
exports.run_query = run_query;
var run_insert = function run_insert(sql, values) {
    return __awaiter(this, void 0, void 0, function () {
        var sequelize, data_2, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    sequelize = new sequelize_1.Sequelize("postgres://".concat(config_1.config.user, ":").concat(config_1.config.password, "@").concat(config_1.config.host, ":").concat(config_1.config.port, "/").concat(config_1.config.database));
                    return [4 /*yield*/, sequelize.authenticate()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, sequelize.query(sql, {
                            replacements: values,
                            type: sequelize_1.QueryTypes.INSERT
                        })];
                case 2:
                    data_2 = _a.sent();
                    return [4 /*yield*/, sequelize.close()];
                case 3:
                    _a.sent();
                    return [2 /*return*/, data_2];
                case 4:
                    err_2 = _a.sent();
                    console.error(err_2, values);
                    throw 'Database query error';
                case 5: return [2 /*return*/];
            }
        });
    });
};
exports.run_insert = run_insert;
var data = (0, exports.run_query)("SELECT * FROM `Articles`");
console.log(data);
