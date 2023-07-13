import  {useContext, useEffect, useState} from "react";
import { Transition } from "@headlessui/react";
import LanguageDropDown from "./LanguageDropDown.tsx";
import { useTranslation } from "react-i18next";
import {useTheme} from "@mui/material";
import {useLocation} from "react-router-dom";
import {LanguageContext} from "../LanguageContext.tsx";

function Navbar() {
    const { t,i18n  } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
     const theme = useTheme();
    const { currentLanguage } = useContext(LanguageContext);

    console.log(theme.direction)
    //destructuring pathname from location
    const { pathname } = location;
    const splitLocation = pathname;
    useEffect(() => {
        console.log("i18n?.language",currentLanguage)
        i18n.changeLanguage(currentLanguage)


    }, [currentLanguage,i18n])
    const links = [
        {
            text: t("home"),
            href: '/',
        },
        {
            text: t("blog"),
            href: '/blog',
        }

    ];
    return (
        <div>
            <nav className="">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <svg width="72" height="24" viewBox="0 0 72 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6976 14.4195C16.5167 12.4041 15.7098 10.5791 14.3808 9.21177C12.8769 7.66107 10.79 6.80375 8.51562 6.78885C3.80895 6.81045 0 10.6107 0 15.2942C0 15.5919 0.0161081 15.8887 0.0477048 16.1837C0.105322 16.7424 0.220248 17.2953 0.389073 17.832C0.552013 18.3557 0.768853 18.8642 1.03185 19.3463C1.29268 19.8231 1.59997 20.275 1.94568 20.6944C2.29231 21.1123 2.67705 21.4973 3.09648 21.8425C3.51591 22.1886 3.96941 22.4954 4.4477 22.7573C4.93188 23.0206 5.44207 23.2384 5.96868 23.4044C6.50614 23.5738 7.06156 23.6903 7.62317 23.7496C7.9314 23.7837 8.24395 23.8013 8.55744 23.808C8.61506 23.8089 8.67299 23.8095 8.73061 23.8095C9.03139 23.8086 9.33032 23.7961 9.6274 23.777C10.2609 23.7362 10.8919 23.6429 11.5062 23.485C12.0811 23.3366 12.639 23.1322 13.1665 22.8664C13.6804 22.607 14.1643 22.2895 14.6036 21.9234C14.826 21.7375 15.0376 21.5399 15.2371 21.3306C15.2888 21.2774 15.8077 20.667 15.8077 20.6661C15.8077 20.6646 12.5541 18.8159 12.1719 18.5984C12.148 18.586 12.1353 18.5784 12.1353 18.5784C11.381 19.3222 10.2082 19.7665 8.9555 19.7805H8.89695C8.58006 19.7805 8.27958 19.7638 7.99583 19.7288C6.40329 19.5838 5.08459 18.5157 4.59794 17.0742H16.5719C16.6533 16.6515 16.7051 16.2087 16.7255 15.7534C16.7323 15.6016 16.7357 15.4484 16.7357 15.2939C16.7357 14.9986 16.723 14.7072 16.6976 14.4195ZM4.46381 14.2787C4.46381 12.1599 6.2134 10.4425 8.37127 10.4425C10.5291 10.4425 12.2781 12.1602 12.2781 14.2787H4.46381Z" fill="#2E2F38"></path><path d="M25.7615 13.3645C24.3896 12.915 23.306 12.5598 23.306 11.8621C23.306 11.0644 24.384 10.7013 25.3858 10.7013C26.7249 10.7013 27.8661 11.3713 28.4271 11.7709L28.5411 11.8521L30.7306 8.51651L30.6339 8.4417C29.5965 7.64034 27.2869 6.7885 25.0503 6.7885C23.3915 6.7885 21.8259 7.27662 20.6423 8.16252C19.375 9.11107 18.6774 10.4486 18.6774 11.9284C18.6774 15.0949 21.5205 16.0605 23.8053 16.8363C25.2836 17.3381 26.5601 17.7718 26.5601 18.6607C26.5601 19.3605 25.7238 19.8878 24.6145 19.8878C22.9869 19.8878 21.312 19.2912 20.2433 18.3305L20.129 18.2277L17.8568 21.5438L17.9606 21.6192C19.8635 23.0057 22.2766 23.8007 24.581 23.8007C26.3331 23.8007 27.9665 23.3189 29.1799 22.4446C30.4942 21.4976 31.1887 20.2005 31.1887 18.6939C31.1887 15.1427 28.052 14.1151 25.7615 13.3645Z" fill="#2E2F38"></path><path d="M42.1581 6.78825C40.6157 6.78825 39.1016 7.30161 37.8643 8.2386V0H33.2357V23.4689H37.8643V13.3402C38.3745 12.6182 39.7905 11.3139 41.6885 11.3139C42.6475 11.3139 43.4836 11.6384 44.0424 12.2271C44.6967 12.9169 44.9761 13.8493 44.9761 15.345V23.4692H49.6047V15.6987C49.6047 12.9579 49.0778 11.076 47.8963 9.59741C46.4853 7.81253 44.3937 6.78825 42.1581 6.78825Z" fill="#2E2F38"></path><path d="M51.6485 23.469C51.6485 21.2048 53.518 19.3694 55.8242 19.3694C58.1305 19.3694 60 21.2048 60 23.469H51.6485Z" fill="#2E2F38"></path></svg>

                            </div>
                            <div className="hidden md:block">
                                <ul className="ml-10 flex items-baseline space-x-5">


                                    {links.map((link) => {
                                        return (

                                            <li key={link.text} className={splitLocation ===link.href ? "active" : ""}>
                                            <a className={ "text-black px-3 py-2 rounded-md text-sm font-medium "}
                                                key={link.text}
                                                href={link.href}


                                            >
                                                {link.text}
                                            </a>
                                            </li>
                                        );
                                    })}




                                </ul>

                            </div>
                        </div>
                        <div className=" flex-end flex text-black">
                            <LanguageDropDown/>

                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>

                        </div>
                    </div>

                </div>


                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

                                {links.map((link) => {
                                    return (
                                        <a
                                            key={link.text}
                                            href={link.href}
                                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            {link.text}
                                        </a>
                                    );
                                })}


                            </div>
                        </div>
                    )}
                </Transition>
            </nav>


        </div>
    );
}

export default Navbar;
