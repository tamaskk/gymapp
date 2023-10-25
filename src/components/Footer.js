import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Import social media icons from image assets
import facebook from "../assets/logo-facebook.svg";
// Define a functional React component named "Footer"
const Footer = () => {
    return (_jsxs("footer", { className: "h-auto w-screen py-10 lg:py-32 px-8 lg:px-64 bg-[#282828] text-white", children: [_jsxs("div", { className: "flex flex-col lg:flex-row items-start justify-between pb-8", children: [_jsxs("div", { className: "flex flex-col lg:flex-col items-center lg:items-start justify-center w-full lg:w-1/3 mb-20 lg:mb-0", children: [_jsx("div", { className: "w-40 h-7 bg-white mb-8" }), _jsx("p", { className: "mb-2", children: "100 Nallin Street, New York" }), _jsx("p", { className: "mb-2", children: "+00 000 000 00" }), _jsx("p", { className: "mb-2", children: "KTFitness@domain.com" }), _jsxs("div", { className: "flex", children: [_jsx("img", { src: facebook }), " "] })] }), _jsxs("div", { className: "w-full lg:w-1/3 flex flex-col items-center lg:items-start justify-center mb-20 lg:mb-0", children: [_jsx("h3", { className: "text-xl mb-10 font-semibold", children: "Quick Links" }), _jsxs("p", { className: "mb-4 hover:text-yellow-400 transition-all duration-300 cursor-pointer", children: [_jsx("span", { className: "text-yellow-400", children: "->" }), " Home"] }), _jsxs("p", { className: "mb-4 hover:text-yellow-400 transition-all duration-300 cursor-pointer", children: [_jsx("span", { className: "text-yellow-400", children: "->" }), " About"] }), _jsxs("p", { className: "mb-4 hover:text-yellow-400 transition-all duration-300 cursor-pointer", children: [_jsx("span", { className: "text-yellow-400", children: "->" }), " Courses"] }), _jsxs("p", { className: "mb-4 hover:text-yellow-400 transition-all duration-300 cursor-pointer", children: [_jsx("span", { className: "text-yellow-400", children: "->" }), " Trainers"] }), _jsxs("p", { className: "mb-4 hover:text-yellow-400 transition-all duration-300 cursor-pointer", children: [_jsx("span", { className: "text-yellow-400", children: "->" }), " Contact"] })] }), _jsxs("div", { className: "w-full lg:w-1/3 flex flex-col items-center lg:items-start justify-center", children: [_jsx("h3", { className: "text-xl mb-10 font-semibold", children: "Newsletter" }), _jsx("p", { className: "mb-5 text-center lg:text-left", children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nisi!" }), _jsxs("div", { className: "flex flex-row w-full", children: [_jsx("input", { type: "text", className: "py-3 pl-8 w-full", placeholder: "example@domain.com" }), _jsx("button", { className: "py-1 px-3 text-3xl bg-black text-yellow-400 font-bold flex items-center justify-center text-center", children: ">" })] })] })] }), _jsx("div", { className: "w-full border border-white mb-10" }), _jsxs("div", { className: "w-full flex flex-col items-center justify-center", children: [_jsx("p", { className: "mb-4", children: "Copyright \u00A9 by KT" }), _jsx("div", { className: "w-10 h-10 bg-white rounded-full" })] })] }));
};
export default Footer;