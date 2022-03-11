"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    execute({ name, duration, instructor = "Matheus" }) {
        console.log(name, duration, instructor);
    }
}
exports.default = CreateCourseService;
