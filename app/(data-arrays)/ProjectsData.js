import React from "react";

const ProjectsData = [
    {
        title: "TableConverter Application",
        link: "/TableConverter",
        imageJSX: [
            <video className="w-full h-full" controls autoPlay loop muted>
                <source src="/projects-images/tableconverter.mp4" type="video/mp4" />
            </video>,
        ],
        descriptionJSX: [
            <div>
                <p className="text-left leading-loose text-primary-text-light dark:text-primary-text-dark">
                    TableConverter is a cross-platform application that allows
                    users to convert a tablular file types into many other file
                    types. The application was built using C# and the
                    open-source{" "}
                    <a
                        class="text-sky-400 after:content-['_↗'] hover:underline"
                        href="https://www.avaloniaui.net/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Avalonia
                    </a>{" "}
                    .NET framework.
                </p>
                <p className="text-left leading-loose text-primary-text-light dark:text-primary-text-dark mt-2">
                    TableConverter can convert many tabular types like CSV, SQL,
                    XML, HTML, etc, to many other types like CSV with different
                    delimiters, SQL insert statements, Ascii Tables, Markdown
                    Tables, XML, HTML Tables, LaTex Tables, JSON, PHP Arrays,
                    Ruby Arrays, Multi-line data, YAML, BBCode, and XLSX files.
                    It also has many other valuable built-in features, like
                    changing the data format, editing the data, using dark/light
                    mode, and many more.
                </p>
            </div>,
        ],
    },
    {
        title: "Csv to Desktop Application",
        link: "https://github.com/MrT-Stephens/Csv-to-Desktop-Application",
        imageJSX: [
            <video className="w-full h-full" controls autoPlay loop muted>
                <source src="/projects-images/csv-to.mp4" type="video/mp4" />
            </video>,
        ],
        descriptionJSX: [
            <div>
                <p className="text-left leading-loose text-primary-text-light dark:text-primary-text-dark">
                    CSV to is a Windows desktop application that allows users to
                    convert a CSV (Comma Separated Values) file into many other
                    file types. The application was built using C++ and the
                    open-source{" "}
                    <a
                        class="text-sky-400 after:content-['_↗'] hover:underline"
                        href="https://wxwidgets.org/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        wxWidgets
                    </a>{" "}
                    library.
                </p>
                <p className="text-left leading-loose text-primary-text-light dark:text-primary-text-dark mt-2">
                    Csv to can convert a CSV file into CSV with different
                    delimiters, SQL insert statements, Ascii Tables, Markdown
                    Tables, XML, HTML Tables, LaTex Tables, JSON, PHP Arrays,
                    Ruby Arrays, Multi-line data, YAML, BBCode, and XLSX files.
                    It also has many other useful features built-in, like
                    ability to change the format of the data, editing the data,
                    dark/light mode, and many more.
                </p>
            </div>,
        ],
    },
    {
        title: "C# Digital Vending Machine",
        link: "https://github.com/MrT-Stephens/CSharp-Digital-Vending-Machine",
        imageJSX: [
            <video className="w-full h-full" controls autoPlay loop muted>
                <source src="/projects-images/digital-vending-machine.mp4" type="video/mp4" />
            </video>,
        ],
        descriptionJSX: [
            <div>
                <p className="text-left leading-loose text-primary-text-light dark:text-primary-text-dark">
                    This Windows desktop application allows users to purchase
                    shop items from a digital vending machine. This application
                    was built using C# and the{" "}
                    <a
                        class="text-sky-400 after:content-['_↗'] hover:underline"
                        href="https://learn.microsoft.com/en-us/dotnet/desktop/winforms/overview/?view=netdesktop-8.0"
                        target="_blank"
                        rel="noreferrer"
                    >
                        .NET Windows Forms
                    </a>{" "}
                    framework and was made for a university assessment.
                </p>
                <p className="text-left leading-loose text-primary-text-light dark:text-primary-text-dark mt-2">
                    The digital vending machine application has a dynamic shop
                    panel which can have items added/removed from it at runtime;
                    items can be added/removed from the basket by clicking the
                    checkout button, the payment panel will slide out, and
                    dragging coin/notes to the coin slots will pay for the
                    order.
                </p>
            </div>,
        ],
    },
    {
        title: "C++ Drawing Application",
        link: "https://github.com/MrT-Stephens/Cpp-Drawing-Application",
        imageJSX: [
            <video className="w-full h-full" controls autoPlay loop muted>
                <source src="/projects-images/drawing-app.mp4" type="video/mp4" />
            </video>,
        ],
        descriptionJSX: [
            <div>
                <p className="text-left leading-loose text-primary-text-light dark:text-primary-text-dark">
                    This Windows desktop application lets users draw onto a
                    canvas using different tools. This application was built
                    using C++ and the open-source{" "}
                    <a
                        class="text-sky-400 after:content-['_↗'] hover:underline"
                        href="https://wxwidgets.org/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        wxWidgets
                    </a>{" "}
                    library.
                </p>
                <p className="text-left leading-loose text-primary-text-light dark:text-primary-text-dark mt-2">
                    This drawing application has five different tools: a pen
                    tool, a circle tool, a rectangle tool, a straight-line tool,
                    and a rounded rectangle tool. The user can also change the
                    colour of the tools; if the current tool is either the pen
                    or straight line, the user can change the width of these
                    tools. The drawing can then be exported to a ‘.png’ or saved
                    as the custom ‘.drw’ file, a compressed archive of XML
                    documents.
                </p>
            </div>,
        ],
    },
];

export default ProjectsData;
