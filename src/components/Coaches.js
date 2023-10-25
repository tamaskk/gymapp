import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Import the CoachCard component
import CoachCard from "./coachCard";
// Import images of coaches
import coach1 from "../assets/coache-1.webp";
import coach2 from "../assets/coache-2.webp";
import coach3 from "../assets/coache-3.webp";
// Define a functional React component named "Coaches"
const Coaches = () => {
    return (_jsxs("section", { id: "coaches", className: "w-screen h-auto flex flex-col items-center justify-start bg-[#383838] py-20 overflow-x-hidden", children: [_jsx("h1", { className: "uppercase font-semibold text-white text-4xl border-b-2 border-yellow-400 pb-2", children: "Our coaches" }), _jsx("p", { className: "text-white py-10 text-center", children: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit ducimus illum corporis magni voluptas, ex eum dolorum quia officia! Deleniti quia ut." }), _jsxs("div", { className: "w-4/6 gap-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1", children: [_jsx(CoachCard, { name: "Mark Bertul", img: coach1, profession: "Body Building", type: "strongman" }), _jsx(CoachCard, { name: "Serio Mike", img: coach2, profession: "Cardio Expert", type: "cardio" }), _jsx(CoachCard, { name: "Sven Mieke", img: coach3, profession: "Fitness Coach", type: "powerlifting" })] })] }));
};
export default Coaches;
