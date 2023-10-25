import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Define a functional React component named "CourseCard"
const CourseCard = ({ title, description, picture }) => {
    return (_jsxs("article", { className: "border-l-2 border-[#feee0b] w-full relative group transition-all duration-300", children: [_jsx("img", { src: picture, className: "w-full" }), _jsxs("div", { className: "absolute border-none top-0 left-0 w-[70%] p-2 bg-gradient-to-r from-[#feee0b] to-yellow-600 text-uppercase font-semibold text-black z-50", style: {
                    WebkitClipPath: "polygon(0 0,100% 0,70% 100%,0 100%)",
                    clipPath: "polygon(0 0,100% 0,70% 100%,0 100%)",
                }, children: [title, " "] }), _jsxs("div", { className: "absolute top-0 right-0 left-0 w-full bg-black bg-opacity-50 h-0 group-hover:h-full transition-all duration-700 flex flex-col justify-center items-center z-30", children: [_jsxs("p", { className: "text-opacity-0 group-hover:text-opacity-100 text-center text-white", children: [description, " "] }), _jsx("button", { className: "text-opacity-0 group-hover:text-opacity-100 text-white py-2 border-b-0 group-hover:border-b-2 border-yellow-400 font-semibold hover:border-white transition-all duration-300 hover:text-yellow-400", children: "Read More -> " })] })] }));
};
export default CourseCard;
