import { useState } from "react";
import Card from "./Card";

function Cards(props) {
  let courses = props.courses;
  const [likedCourses, setLikedCourses] = useState([])
  let category = props.category;
  console.log("printing data");
  console.log(courses);

  function getCourses() {
    if(category === 'All'){
        let allCourses = [];
        Object.values(courses).forEach((array) => {
          array.forEach((courseData) => {
            allCourses.push(courseData);
          });
        });
        console.log(allCourses);
        return allCourses;
    }
    else{
        return courses[category]
    }
  }

  getCourses();

  return(
    <div className="flex flex-wrap justify-center gap-4 mb-4">
        {
            getCourses().map( (course) => (
                <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
            ))
        }
    </div>
  )
}

export default Cards;
