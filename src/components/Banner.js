import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import bannerImg from '../assets/offer-img.webp';
// Define a functional React component named "Banner"
const Banner = () => {
    return (_jsx("section", { className: 'w-screen h-auto', children: _jsxs("div", { className: 'flex flex-col lg:flex-row', children: [_jsxs("div", { className: 'w-full lg:w-1/2 bg-[#262626] text-white flex flex-col items-center lg:items-start justify-center px-10 py-10 lg:py-0', children: [_jsx("h1", { className: 'uppercase text-2xl text-center lg:text-left lg:text-3xl font-semibold mb-5', children: "Special offer this summer: get full benefits for a year with a 20% discount" }), _jsx("p", { className: 'mb-5 text-base text-center lg:text-left', children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur exercitationem amet quas repellendus esse natus." }), _jsx("button", { className: 'uppercase bg-yellow-400 rounded-md text-black font-semibold px-7 py-2 hover:bg-yellow-600 transition-all duration-300 hover:rounded-xl', children: "Become a member" })] }), _jsxs("div", { className: 'w-full lg:w-1/2 relative', children: [_jsx("img", { src: bannerImg, className: 'w-full h-full', alt: 'Special Offer Banner' }), _jsx("div", { className: 'absolute top-0 right-0 left-0 bg-yellow-200 bg-opacity-40 w-full h-full', style: { opacity: 10 } })] })] }) }));
};
export default Banner;
