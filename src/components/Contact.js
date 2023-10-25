import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import GoogleMapReact from "google-map-react";
// Define a functional React component named "Contact"
const Contact = () => {
    // Default properties for the Google Map
    const defaultProps = {
        center: {
            lat: 17.99835602,
            lng: 77.01502627,
        },
        zoom: 11,
    };
    return (_jsx("section", { id: "contact", className: "h-auto w-screen bg-[#383838]", children: _jsxs("div", { className: "h-auto w-screen flex flex-col lg:flex-row", children: [_jsxs("div", { className: "h-auto w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center py-5 lg:py-0 pl-5 pr-5 lg:pr-24", children: [_jsxs("h1", { className: "uppercase text-white font-semibold text-4xl mb-10", children: ["Get in ", _jsx("span", { className: "text-yellow-400", children: "touch" })] }), _jsxs("form", { className: "flex flex-col items-center lg:items-start justify-center w-full text-white", children: [_jsx("input", { className: "w-full pl-10 py-4 border-b-2 border-slate-300 rounded-lg bg-transparent active:outline-none focus:outline-none mb-10", placeholder: "Name" }), _jsx("input", { className: "w-full pl-10 py-4 border-b-2 border-slate-300 rounded-lg bg-transparent active:outline-none  focus:outline-none mb-10", placeholder: "Email" }), _jsx("input", { className: "w-full pl-10 py-4 border-b-2 border-slate-300 rounded-lg bg-transparent active:outline-none focus:outline-none mb-10", placeholder: "Phone" }), _jsx("input", { className: "w-full pl-10 py-10 border-b-2 border-slate-300 rounded-lg bg-transparent active:outline-none active:border-b-2 focus:outline-none mb-10", placeholder: "Message" }), _jsx("button", { type: "submit", className: "uppercase bg-yellow-400 text-black py-3 px-8 rounded-md font-semibold hover:bg-yellow-700 transition-all duration-200", children: "Send" })] })] }), _jsx("div", { className: "h-[75vh] w-full lg:w-1/2", children: _jsx(GoogleMapReact, { defaultCenter: defaultProps.center, defaultZoom: defaultProps.zoom }) })] }) }));
};
export default Contact;
