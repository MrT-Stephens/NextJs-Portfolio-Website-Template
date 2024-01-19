"use client";

import React, { useState } from "react";

const Projects = ({ projects }) => {
    const [currentProject, setCurrentProject] = useState(0);
    const [key, setKey] = useState(0);

    const handlePrev = () => {
        setCurrentProject((prev) =>
            prev === 0 ? projects.length - 1 : prev - 1
        );
        setKey((prevKey) => prevKey + 1);
    };

    const handleNext = () => {
        setCurrentProject((prev) =>
            prev === projects.length - 1 ? 0 : prev + 1
        );
        setKey((prevKey) => prevKey + 1);
    };

    return (
        <div className="relative">
            <div className="items-center justify-center grid lg:grid-cols-2">
                <div className="flex flex-col justify-center lg:ml-10">
                    <h1 className="text-2xl font-bold text-primary-text-light dark:text-primary-text-dark underline text-left mb-3">
                        Projects {currentProject + 1} of {projects.length}
                    </h1>
                    <h2 className="text-2xl font-bold text-primary-text-light dark:text-primary-text-dark text-left mb-2">
                        {projects[currentProject].title}
                    </h2>
                    <div className="h-1 w-full bg-secondary-one-light dark:bg-secondary-one-dark mt-3 mb-3" />
                    {projects[currentProject].descriptionJSX}
                    <div className="h-1 w-full bg-secondary-one-light dark:bg-secondary-one-dark mt-3 mb-3" />
                    <div className="flex justify-center mb-3 lg:mb-0">
                        <a
                            href={projects[currentProject].link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-primary-text-light dark:text-primary-text-dark font-bold hover:underline hover:animate-bounce"
                        >
                            View Project
                        </a>
                    </div>
                </div>
                <div
                    key={key}
                    className="flex flex-col justify-center lg:ml-10 mb-10 lg:mb-0 lg:mr-10"
                >
                    {projects[currentProject].imageJSX}
                </div>
            </div>

            <div className="absolute lg:top-1/2 left-0 transform -translate-y-8 lg:-translate-y-1/2">
                <button
                    onClick={handlePrev}
                    className="text-primary-text-light dark:text-primary-text-dark bg-secondary-two-light dark:bg-secondary-two-dark px-6 lg:px-2 py-2 rounded-l-md rounded-r-md lg:rounded-r-none hover:animate-bounce hover:opacity-50"
                >
                    &lt;
                </button>
            </div>

            <div className="absolute lg:top-1/2  right-0 transform -translate-y-8 lg:-translate-y-1/2">
                <button
                    onClick={handleNext}
                    className="text-primary-text-light dark:text-primary-text-dark bg-secondary-two-light dark:bg-secondary-two-dark px-6 lg:px-2 py-2 rounded-r-md rounded-l-md lg:rounded-l-none hover:animate-bounce hover:opacity-50"
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Projects;
