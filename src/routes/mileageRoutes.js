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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mileageRoutes;
const DuplicateMileageController_1 = require("../controllers/DuplicateMileageController");
const ListAllMileagesController_1 = require("../controllers/ListAllMileagesController");
function mileageRoutes(fastify) {
    return __awaiter(this, void 0, void 0, function* () {
        fastify.post("/mileages/duplicate/:mileageId", DuplicateMileageController_1.duplicateMileageHandler);
        fastify.get("/mileages", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new ListAllMileagesController_1.ListAllMileagesController().handle(request, reply);
        }));
    });
}
