const Footer = ({ name, githubURL, linkedinURL }) => {
    return (
        <div>
            <footer className="bg-secondary-one-light dark:bg-secondary-one-dark p-2 grid grid-cols-2 w-full absolute">
                {/* Copywrite Item */}
                <div className="flex items-center">
                    <h4 className="text-primary-text-light dark:text-primary-text-dark text-sm xl:text-lg font-bold py-2 px-4">
                        Copyright &copy;, {new Date().getFullYear()}, {name}.
                    </h4>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-end">
                    <div className="flex items-center justify-end ml-5 mr-1">
                        <a
                            href={githubURL}
                            target="_blank"
                            rel="noreferrer"
                            className="w-7 h-7 xl:w-11 xl:h-11 cursor-pointer hover:opacity-50"
                        >
                            <img src="github.png" alt="GitHub" />
                        </a>
                    </div>

                    <div className="flex items-center justify-end ml-1 mr-5 xl:mr-10">
                        <a
                            href={linkedinURL}
                            target="_blank"
                            rel="noreferrer"
                            className="w-7 h-7 xl:w-11 xl:h-11 cursor-pointer hover:opacity-50"
                        >
                            <img src="linkedin.png" alt="Linkedin" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
