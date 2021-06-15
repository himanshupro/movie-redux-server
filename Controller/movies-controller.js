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
        while (_) try {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchByTitle = exports.getMovieById = exports.addMovie = exports.getMovie = void 0;
var movie_schema_1 = __importDefault(require("../Model/movie-schema"));
var axios_1 = __importDefault(require("axios"));
var addMovie = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, movie_schema_1.default.create(req.body)];
            case 1:
                _a.sent();
                res.json({
                    ok: true,
                    data: 'created'
                });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.log(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addMovie = addMovie;
var getMovie = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, movie_schema_1.default.find()];
            case 1:
                result = _a.sent();
                res.json({
                    ok: true,
                    data: result
                });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                console.log(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getMovie = getMovie;
// const getMovieByPage = async(req:any, res:any) => {
//     try{
//         const pageSize = Math.ceil(Movie.length/10);
//         let page = parseInt(req.query.p);
//         if(!page) {
//             page = 1;
//         }
//         if (page > pageSize) {
//             page = pageSize
//         }
//         res.json({
//             page : page,
//             pageSize: pageSize,
//             data : Movie.slice(page*10 - 5, page * 5)
//         })
//     }
//     catch(error){
//         console.log(error)
//     }
// }
var getMovieById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, result, result_1, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                id = req.params.id;
                return [4 /*yield*/, movie_schema_1.default.findOne({ imdbID: id })
                    // 
                ];
            case 1:
                result = _a.sent();
                if (!result) return [3 /*break*/, 2];
                res.status(200).send(result);
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, axios_1.default.get("http://www.omdbapi.com/?i=" + id + "&apikey=68328419")];
            case 3:
                result_1 = _a.sent();
                console.log(result_1);
                res.status(200).json(result_1.data);
                _a.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                error_3 = _a.sent();
                console.log(error_3);
                res.status(404).send(error_3);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.getMovieById = getMovieById;
var searchByTitle = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var movieTitle, result, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                movieTitle = req.params.movieTitle;
                return [4 /*yield*/, axios_1.default.get("http://www.omdbapi.com/?&s=" + movieTitle + "&apikey=68328419")];
            case 1:
                result = _a.sent();
                if (movieTitle) {
                    movie_schema_1.default.insertMany(result.data.Search);
                    res.status(200).send(result.data);
                }
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                console.log(error_4);
                res.status(404).send(error_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.searchByTitle = searchByTitle;
