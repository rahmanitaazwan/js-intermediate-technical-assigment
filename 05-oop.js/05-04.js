class Student {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.courseOfferings = [];
    }
    
    takeNewCourse(....) { .... }
    
    takeATest(....) { .... }
    
    courseAttendance(....) { .... }
  }
  
  class CourseOffering { .... }
  
  class Course { .... }
  
  
  const biology = new Course("biology", 10, 3);
  const physics = new Course("physics", 10, 2);
  
  const johnWatson = new Student("john watson", "male");
  
  johnWatson.takeNewCourse(biology);
  johnWatson.takeNewCourse(physics);
  
  johnWatson.courseAttendance(physics);
  johnWatson.courseAttendance(physics);
  johnWatson.courseAttendance(biology);
  johnWatson.courseAttendance(physics);
  
  console.log(biology.quota);
  console.log(physics.quota);
  
  johnWatson.takeATest(biology);
  johnWatson.takeATest(physics);
  
  console.log(johnWatson.courseOfferings);
  