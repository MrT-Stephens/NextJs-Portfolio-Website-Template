"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "./(components)/Navbar.js";
import Projects from "./(components)/Projects.js";
import Skills from "./(components)/Skills.js";
import ProjectsData from "./(data-arrays)/ProjectsData.js";
import AuthorData from "./(data-arrays)/AuthorData.js";
import SkillsData from "./(data-arrays)/SkillsData.js";
import Footer from "./(components)/Footer.js";

export default function Home() {
    const [activeSection, setActiveSection] = useState("home_section");
    const [isHomeTextVisible, setIsHomeTextVisible] = useState(true);

    const sectionRefs = {
        home_section: useRef(null),
        about_section: useRef(null),
        skills_section: useRef(null),
        projects_section: useRef(null),
        contact_section: useRef(null),
    };

    const handleScroll = () => {
        const scrollPosition =
            window.scrollY || document.documentElement.scrollTop;

        // Check each section's position dynamically
        Object.keys(sectionRefs).forEach((sectionKey) => {
            const sectionRef = sectionRefs[sectionKey];

            if (sectionRef && sectionRef.current) {
                const sectionTop = sectionRef.current.offsetTop;
                const sectionBottom =
                    sectionTop + sectionRef.current.clientHeight;

                if (
                    scrollPosition >= sectionTop &&
                    scrollPosition < sectionBottom
                ) {
                    setActiveSection(sectionKey);
                }
            }
        });
    };

    const updateText = async () => {
        const home_text_one =
            typeof document !== "undefined"
                ? document.getElementById("home_text_one")
                : null;
        const home_text_two =
            typeof document !== "undefined"
                ? document.getElementById("home_text_two")
                : null;

        const home_text_one_text = "Hello,";
        const home_text_two_text = `I'm ${AuthorData.fullName}`;

        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

        const typeText = async (element, targetText) => {
            if (element.textContent !== targetText) {
                for (let i = 0; i < targetText.length; i++) {
                    element.textContent += targetText.charAt(i);
                    await delay(50);
                }
            }
        };

        const eraseText = async (element) => {
            const currentText = element.textContent;
            for (let i = currentText.length - 1; i >= 0; i--) {
                element.textContent = currentText.slice(0, i);
                await delay(50);
            }
        };

        if (!home_text_one || !home_text_two) {
            return;
        }

        if (isHomeTextVisible) {
            await delay(7500);
            await eraseText(home_text_two);
            await eraseText(home_text_one);
            setIsHomeTextVisible(false);
        } else {
            await delay(800);
            await typeText(home_text_one, home_text_one_text);
            await typeText(home_text_two, home_text_two_text);
            setIsHomeTextVisible(true);
        }
    };

    useEffect(() => {
        updateText();
    }, [isHomeTextVisible]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="overflow-hidden">
            <Navbar
                name={AuthorData.name}
                githubURL={AuthorData.github}
                linkedinURL={AuthorData.linkedin}
                navItems={[
                    {
                        name: "Home",
                        href: "/#home",
                        refName: "home_section",
                    },
                    {
                        name: "About",
                        href: "/#about",
                        refName: "about_section",
                    },
                    {
                        name: "Skills",
                        href: "/#skills",
                        refName: "skills_section",
                    },
                    {
                        name: "Projects",
                        href: "/#projects",
                        refName: "projects_section",
                    },
                    {
                        name: "Contact",
                        href: "/#contact",
                        refName: "contact_section",
                    },
                ]}
                avtivePageSection={activeSection}
            />

            <div className="bg-primary-light dark:bg-primary-dark">
                <section id="home" ref={sectionRefs.home_section}>
                    <div className="flex items-center justify-center pl-4 pr-4 pt-8 pb-8 min-h-screen 2xl:scale-125 3xl:scale-200 4xl:scale-300 5xl:scale-400">
                        <div className="grid text-center lg:grid-cols-3 bg-secondary-three-light dark:bg-secondary-three-dark p-4 rounded-3xl max-w-6xl shadow-2xl">
                            <div className="flex flex-col justify-center items-center lg:items-end">
                                <img
                                    src={AuthorData.picture}
                                    alt="Profile Image"
                                    className="rounded-full h-64 w-64 object-cover border-4 border-primary-text-light dark:border-primary-text-dark"
                                />
                            </div>
                            <div className="flex flex-col justify-center text-left lg:ml-10 lg:col-span-2">
                                <h2
                                    id="home_text_one"
                                    className="text-4xl font-bold text-primary-text-light dark:text-primary-text-dark transition-all duration-500 ease-in-out"
                                >
                                    Hello,
                                </h2>
                                <h1
                                    id="home_text_two"
                                    className="text-5xl font-bold text-primary-text-light dark:text-primary-text-dark"
                                >
                                    I'm {AuthorData.fullName}
                                </h1>
                                <div className="h-1 w-full bg-secondary-one-light dark:bg-secondary-one-dark mt-3 mb-2" />
                                <h2 className="text-2xl font-bold text-secondary-two-light dark:text-secondary-two-dark">
                                    {AuthorData.occupation}
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="h-1 w-full bg-secondary-one-light dark:bg-secondary-one-dark" />
                </section>

                <section id="about" ref={sectionRefs.about_section}>
                    <div className="flex items-center justify-center pl-4 pr-4 pt-8 pb-8 min-h-screen 2xl:scale-125 3xl:scale-200 4xl:scale-300 5xl:scale-400">
                        <div className="grid text-center lg:grid-cols-3 bg-secondary-three-light dark:bg-secondary-three-dark p-4 rounded-3xl max-w-6xl shadow-2xl">
                            <div className="flex flex-col justify-center lg:col-span-2">
                                <h2 className="text-2xl font-bold text-primary-text-light dark:text-primary-text-dark text-left mb-2">
                                    About Me
                                </h2>
                                {AuthorData.aboutJSX}
                            </div>
                            <div className="flex flex-col justify-center text-left lg:ml-10">
                                <h2 className="text-2xl font-bold text-primary-text-light dark:text-primary-text-dark mb-2">
                                    Languages
                                </h2>
                                <ul class="list-inside list-disc text-primary-text-light dark:text-primary-text-dark">
                                    {AuthorData.languages.map((language) => (
                                        <li>{language}</li>
                                    ))}
                                </ul>
                                <div className="h-1 w-full bg-secondary-one-light dark:bg-secondary-one-dark mt-3 mb-3" />
                                <h2 className="text-2xl font-bold text-primary-text-light dark:text-primary-text-dark mb-2">
                                    Hobbies
                                </h2>
                                <ul class="list-inside list-disc text-primary-text-light dark:text-primary-text-dark">
                                    {AuthorData.hobbies.map((hobby) => (
                                        <li>{hobby}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="h-1 w-full bg-secondary-one-light dark:bg-secondary-one-dark" />
                </section>

                <section id="skills" ref={sectionRefs.skills_section}>
                    <div className="flex items-center justify-center pl-4 pr-4 pt-8 pb-8 min-h-screen 2xl:scale-125 3xl:scale-200 4xl:scale-300 5xl:scale-400">
                        <div className="grid text-center lg:grid-cols-3 bg-secondary-three-light dark:bg-secondary-three-dark p-4 rounded-3xl max-w-6xl shadow-2xl">
                            <div className="flex flex-col justify-center lg:col-span-2 mb-2 lg:mb-0">
                                <h2 className="text-2xl font-bold text-primary-text-light dark:text-primary-text-dark text-left mb-2">
                                    Technical Skills
                                </h2>
                                <Skills skillsData={SkillsData} />
                            </div>
                            <div className="flex flex-col justify-center text-left lg:ml-10">
                                <h2 className="text-2xl font-bold text-primary-text-light dark:text-primary-text-dark">
                                    Key Skills
                                </h2>
                                {AuthorData.keySkills.map((keySkill) => (
                                    <div>
                                        <div className="h-1 w-full bg-secondary-one-light dark:bg-secondary-one-dark mt-3 mb-3" />
                                        <p className="text-primary-text-light dark:text-primary-text-dark">
                                            <a className="font-bold text-primary-text-light dark:text-primary-text-dark">
                                                {keySkill.skillTitle}
                                                {": "}
                                            </a>
                                            {keySkill.skillDescription}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="h-1 w-full bg-secondary-one-light dark:bg-secondary-one-dark" />
                </section>

                <section id="projects" ref={sectionRefs.projects_section}>
                    <div className="flex items-center justify-center pl-4 pr-4 pt-8 pb-8 min-h-screen 2xl:scale-125 3xl:scale-200 4xl:scale-300 5xl:scale-400">
                        <div className="text-center bg-secondary-three-light dark:bg-secondary-three-dark p-4 rounded-3xl max-w-6xl shadow-2xl">
                            <Projects projects={ProjectsData} />
                        </div>
                    </div>
                    <div className="h-1 w-full bg-secondary-one-light dark:bg-secondary-one-dark" />
                </section>

                <section id="contact" ref={sectionRefs.contact_section}>
                    <div className="flex items-center justify-center pl-4 pr-4 pt-8 pb-8 min-h-screen 2xl:scale-125 3xl:scale-200 4xl:scale-300 5xl:scale-400">
                        <div className="grid text-center bg-secondary-three-light dark:bg-secondary-three-dark p-4 rounded-3xl max-w-6xl shadow-2xl">
                            <h2 className="text-2xl font-bold text-primary-text-light dark:text-primary-text-dark">
                                Contact Me
                            </h2>
                            <div className="h-1 w-full bg-secondary-one-light dark:bg-secondary-one-dark mt-3 mb-3" />
                            <h1 className="text-3xl font-bold text-primary-text-light dark:text-primary-text-dark">
                                Would you like to contact me?
                            </h1>
                            <div className="h-1 w-full bg-secondary-one-light dark:bg-secondary-one-dark mt-3 mb-3" />
                            <a
                                className="text-1xl text-primary-text-light dark:text-primary-text-dark font-bold hover:underline"
                                href={`mailto:${AuthorData.email}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {AuthorData.email}
                            </a>
                            <h3 className="text-1xl text-primary-text-light dark:text-primary-text-dark font-bold mt-3 mb-3 opacity-60">
                                or
                            </h3>
                            <div className="flex justify-center">
                                <a
                                    href={AuthorData.github}
                                    className="ml-1 mr-1"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src="github.png"
                                        alt="GitHub"
                                        className="w-14 h-14 cursor-pointer hover:opacity-50"
                                    />
                                </a>
                                <a
                                    href={AuthorData.linkedin}
                                    className="ml-1 mr-1"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src="linkedin.png"
                                        alt="GitHub"
                                        className="w-14 h-14 cursor-pointer hover:opacity-50"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer
                name={AuthorData.name}
                githubURL={AuthorData.github}
                linkedinURL={AuthorData.linkedin}
            />
        </div>
    );
}
