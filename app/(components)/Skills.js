"use client";

import React from "react";

const Skill = ({ name, imagePath }) => {
    const handleHover = () => {
        const tooltip = document.getElementById(name);
        tooltip.style.display = "block";
    };

    const handleLeave = () => {
        const tooltip = document.getElementById(name);
        tooltip.style.display = "none";
    };

    return (
        <div
            className="relative inline-block m-1"
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
        >
            <img
                src={imagePath}
                alt={name}
                className="w-14 h-14 cursor-pointer"
            />
            <div
                id={name}
                className="absolute bg-secondary-two-light dark:bg-secondary-two-dark text-primary-text-light dark:text-primary-text-dark p-2 rounded-md hidden"
                style={{
                    top: "100%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 20,
                }}
            >
                {name}
            </div>
        </div>
    );
};

const Skills = ({ skillsData }) => {
    return (
        <div className="flex flex-wrap">
            {skillsData.map((skill, index) => (
                <Skill key={index} {...skill} />
            ))}
        </div>
    );
};

export default Skills;
