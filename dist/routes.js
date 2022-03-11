"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
const CreateCourseService_1 = __importDefault(require("./CreateCourseService"));
function createCourse(request, response) {
    const createCourseService = new CreateCourseService_1.default();
    createCourseService.execute({
        name: "Ser foda",
        duration: 10
    });
    return response.json({ message: 'From got my back' });
}
exports.createCourse = createCourse;
