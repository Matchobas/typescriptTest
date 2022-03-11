import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(request: Request, response: Response) {
    const createCourseService = new CreateCourseService();

    createCourseService.execute({
        name: "Ser foda", 
        duration: 10
    });

    return response.json({message: 'I want to play Elden Ring'});
}