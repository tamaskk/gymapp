import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Nav from '../components/Nav'; // Import the Nav component
import headerBg from '../assets/header-bg-img.webp'; // Import the background image
// Define a functional React component named "Header"
const Header = () => {
    // Define a background style object for the background image
    const backgroundStyle = {
        backgroundImage: `url(${headerBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover'
    };
    return (_jsxs("section", { className: 'w-screen h-screen overflow-y-hidden', children: [_jsx(Nav, {}), " ", _jsx("div", { style: backgroundStyle, className: 'w-full h-full flex justify-center items-start', children: _jsxs("div", { className: 'flex flex-col items-center lg:items-start justify-center lg:justify-end h-full lg:h-1/2 w-full lg:w-2/3 px-10', children: [_jsx("h1", { className: 'uppercase text-white text-4xl font-bold text-center lg:text-left', style: { letterSpacing: 1.5 }, children: "A place for your fitness goals" }), _jsx("h3", { className: 'text-white mt-8 text-center lg:text-left', children: "We Offer Functional Training, Plyometric Boxes, Aerobics classes, TRX And Much More" }), _jsxs("div", { className: 'mt-5 flex flex-col lg:flex-row items-center justify-center', children: [_jsx("button", { className: 'mb-5 lg:mb-0 text-black bg-yellow-400 px-8 py-2 rounded-md uppercase font-medium mr-2 hover:bg-yellow-600 transition-all duration-300', children: "Join us" }), _jsx("button", { className: 'text-white py-2 px-12 border-2 border-yellow-400 rounded-md hover:bg-yellow-200 hover:border-yellow-200 font-medium duration-300 transition-all hover:text-black', children: "Our Service" })] })] }) })] }));
};
export default Header;
