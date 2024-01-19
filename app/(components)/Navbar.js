"use client";

import { useState, useEffect } from "react";

const Navbar = ({
    name,
    githubURL,
    linkedinURL,
    navItems = [{ name: "", href: "", refName: "" }],
    avtivePageSection,
}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolling(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            {/* Navigation Menu */}
            <nav
                className={`bg-secondary-one-light dark:bg-secondary-one-dark p-2 grid grid-cols-2 w-full transition-all fixed top-0 duration-500 ease-in-out z-50 ${
                    scrolling ? "shadow-2xl opacity-75" : ""
                }`}
            >
                <div className="flex items-center">
                    <a
                        href="/"
                        className="text-primary-text-light dark:text-primary-text-dark lg:text-lg font-bold py-2 px-4 rounded bg-secondary-two-light dark:bg-secondary-two-dark"
                    >
                        {name}
                    </a>
                </div>

                {/* Menu Items */}
                <div
                    className={`lg:flex lg:justify-end absolute lg:static bg-secondary-two-light dark:bg-secondary-two-dark lg:bg-inherit lg:dark:bg-inherit opacity-100 top-100 lg:top-0 right-0 transform -translate-x-1/2 lg:-translate-x-0 translate-y-1/3 lg:translate-y-0 rounded-xl ${
                        menuOpen ? "block" : "hidden"
                    }`}
                >
                    {navItems.map((item, index) => (
                        <div key={index} className="lg:flex items-center justify-end ml-5 mr-5 2xl:ml-10 2xl:mr-10">
                            <a
                                href={item.href}
                                onClick={toggleMenu}
                                className={`font-bold hover:underline hover:animate-bounce xl:text-lg ${
                                    avtivePageSection === item.refName
                                        ? "text-primary-light dark:text-primary-dark"
                                        : "text-primary-text-light dark:text-primary-text-dark"
                                }`}
                            >
                                {item.name}
                            </a>
                        </div>
                    ))}

                    <div className="hidden lg:flex items-center justify-end ml-5 mr-1 2xl:ml-10">
                        <a
                            href={githubURL}
                            target="_blank"
                            rel="noreferrer"
                            className="w-9 h-9 xl:w-11 xl:h-11 cursor-pointer hover:opacity-50"
                        >
                            <img src="github.png" alt="GitHub" />
                        </a>
                    </div>

                    <div className="hidden lg:flex items-center justify-end ml-1 mr-5 2xl:mr-10">
                        <a
                            href={linkedinURL}
                            target="_blank"
                            rel="noreferrer"
                            className="w-9 h-9 xl:w-11 xl:h-11 cursor-pointer hover:opacity-50"
                        >
                            <img src="linkedin.png" alt="Linkedin" />
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Icon */}
                <div className="flex lg:hidden items-center justify-end ml-5 mr-0">
                    <button
                        onClick={toggleMenu}
                        className="text-primary-text-light dark:text-primary-text-dark hover:opacity-50"
                    >
                        <img src="/menu.png" alt="Menu" className="w-10 h-10" />
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
