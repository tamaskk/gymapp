import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Import the CourseCard component
import CourseCard from "./courseCard";
// Import images for various courses
import courses1 from "../assets/courses-TRX.webp";
import courses2 from "../assets/courses-bodybuilding.webp";
import courses3 from "../assets/courses-boxing.webp";
import courses4 from "../assets/courses-crossfit.webp";
import courses5 from "../assets/courses-fitness.webp";
import courses6 from "../assets/courses-gymnastic.webp";
// Define a functional React component named "Courses"
const Courses = () => {
    return (_jsxs("section", { id: "courses", className: "h-auto w-full bg-[#383838] px-10 lg:px-32 max-w-[133rem] flex flex-col justify-center items-center py-20", children: [_jsx("h1", { className: "uppercase font-semibold text-white text-4xl border-b-2 border-yellow-400 pb-2", children: "Our courses" }), _jsx("p", { className: "text-white py-10 text-center", children: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit ducimus illum corporis magni voluptas, ex eum dolorum quia officia! Deleniti quia ut." }), _jsxs("div", { className: "w-5/6 gap-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1", children: [_jsx(CourseCard, { title: "TRX", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione culpa", picture: courses1 }), _jsx(CourseCard, { title: "Bodybuilding", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione culpa", picture: courses2 }), _jsx(CourseCard, { title: "Boxing", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione culpa", picture: courses3 }), _jsx(CourseCard, { title: "Crossfit", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione culpa", picture: courses4 }), _jsx(CourseCard, { title: "Fitness", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione culpa", picture: courses5 }), _jsx(CourseCard, { title: "Gymnastic", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione culpa", picture: courses6 })] })] }));
};
export default Courses;
