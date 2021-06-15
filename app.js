"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var connection_to_db_1 = __importDefault(require("./connection-to-db"));
var dotenv_1 = __importDefault(require("dotenv"));
var users_route_1 = __importDefault(require("./Routes/users-route"));
var movie_route_1 = __importDefault(require("./Routes/movie-route"));
dotenv_1.default.config();
var startServer = function () {
    var app = express_1.default();
    app.use(express_1.default.json());
    app.use(cors_1.default());
    connection_to_db_1.default()
        .then(function () {
        console.log("Connected to database");
        app.listen(process.env.PORT, function () {
            console.log("Server Running at http://localhost:" + process.env.PORT);
        });
        app.use("/api/users", users_route_1.default);
        app.use("/api/movie", movie_route_1.default);
    })
        .catch(function (err) {
        console.log(err.message);
    });
};
startServer();
