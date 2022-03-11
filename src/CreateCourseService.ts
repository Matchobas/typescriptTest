interface ICourse {
  name: string;
  duration: number;
  instructor?: string;
}

class CreateCourseService {
  execute({ name, duration, instructor = "Matheus" }: ICourse) {
    console.log(name, duration, instructor);
  }
}

export default CreateCourseService;
