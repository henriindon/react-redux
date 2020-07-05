import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function saveCourseSuccess(course) {
  return { type: types.SAVE_COURSE_SUCCESS, course };
}

export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function loadCourses() {
  return (dispatch) => {
    return courseApi
      .getCourses()
      .then((courses) => dispatch(loadCoursesSuccess(courses)))
      .catch((error) => {
        throw error;
      });
  };
}

export function saveCourse(course) {
  return (dispatch) => {
    return courseApi
      .saveCourse(course)
      .then((savedCourse) =>
        course.id
          ? dispatch(saveCourseSuccess(savedCourse))
          : dispatch(createCourseSuccess(savedCourse))
      )
      .catch((error) => {
        throw error;
      });
  };
}
