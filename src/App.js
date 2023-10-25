import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from './components/Header';
import About from './components/About';
import Courses from './components/Courses';
import Banner from './components/Banner';
import Coaches from './components/Coaches';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Overlay from './components/Overlay';
import useAppContext from './utils/Maincontext';
const App = () => {
    const { overlay, overlayHandler } = useAppContext();
    return (_jsxs("div", { className: `overflow-x-hidden overflow-y-hidden ${overlay ? 'h-screen overflow-hidden' : 'h-auto'}`, children: [overlay ? _jsx(Overlay, {}) : '', _jsx(Header, {}), _jsx(About, {}), _jsx(Courses, {}), _jsx(Banner, {}), _jsx(Coaches, {}), _jsx(Testimonials, {}), _jsx(Contact, {}), _jsx(Footer, {})] }));
};
export default App;
