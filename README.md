

<h1 align="center">
  <br>
  Next.js Portfolio Website Template
  <br>
</h1>

<h4 align="center">A template for a portfolio website built with next.js and tailwind CSS that can easily be edited and deployed as your own.</h4>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#editing-the-website">Editing the website</a> •
  <a href="#hosting">Hosting</a> •
  <a href="#lisence">Lisence</a>
</p>

<div align="center">
  <video src="https://github.com/MrT-Stephens/NextJs-Portfolio-Website-Template/assets/92452307/8eb377f6-b32f-41b8-8333-fd8c3b6fa5cd"/>
</div>

# Features

This website is built using [Next.js](https://nextjs.org/) and [tailwind CSS](https://tailwindcss.com/). An example of the website can be found [here](https://mrt-stephens.github.io).
- The website information can be easily edited, by changing three files.
- Optimised for mobile and desktop and has been tested on many screen resolutions.
- The website has a home, about, skills, projects, and contact sections.
- Animated home page.
- Supports colours for light/dark mode.
- Navigation bar follows the page when scrolling.
- Easily host the template using [GitHub Pages](https://pages.github.com/).
- Easily change the colour scheme of the webiste.
- Pre-built GitHub Actions script to build and deploy to GitHub pages.

# Editing the website

### Opening the Project
Clone the repository and run the development sever with the commands below. To do this you will need [Node.js](https://nodejs.org/) installed on your device.
```
# Clone the repository.
git clone https://github.com/MrT-Stephens/NextJs-Portfolio-Website-Template.git

# Enter the directory.
cd NextJs-Portfolio-Website-Template

# Install packages.
npm install packages

# Start the development server.
npm run dev
```
Once the repository has been cloned and the development server has been started. You can open the `NextJs-Portfolio-Website-Template` folder within your chosen IDE/text editor.

### Making the Website Yours

#### Editing the Content

To edit the Websites content there are three different files that you will need to edit:
1. [Author Data File](https://github.com/MrT-Stephens/NextJs-Portfolio-Website-Template/blob/main/app/(data-arrays)/AuthorData.js) which is located in the directory `app/(data-arryas)/AuthorData.js`.
2. [Skills Data File](https://github.com/MrT-Stephens/NextJs-Portfolio-Website-Template/blob/main/app/(data-arrays)/SkillsData.js) which is located in the directory `app/(data-arrays)/SkillsData.js`.
3. [Projects Data File](https://github.com/MrT-Stephens/NextJs-Portfolio-Website-Template/blob/main/app/(data-arrays)/ProjectsData.js) which is located in the directory `app/(data-arrays)/ProjectsData.js`. 

You can edit all data within these files to make the website yours. Including adding/removing items from the `languages`, `hobbies`, `keySkills`, `SkillsData`, `projects`, etc. If items are added/removed from these arrays the website will dynamically adjust to accomidate the extra or less items.

#### Adding/Removing Images

If you would like to add/remove images from the website. This can be done by accessing the `/public/` directory.

If you would like to change the icon of the website. This can be done by replacing the `/app/favicon.ico` file with your `.ico` file (Make sure the name is `favicon.ico`).

#### Changing the Colour Scheme

To change the colour scheme your will need to goto the `tailwind.config.js` file and you can edit the `colors` for light/dark mode and this will change the colours across the whole website.

### Editing the Website Futher

Due to the website being created using [Next.js](https://nextjs.org/) and [tailwind CSS](https://tailwindcss.com/) you can easily expand the website to what ever you desire. The main content of the website is within the `/app/page.js` file and there are components that are used within this file, which can be found within the `/app/(components)/` directory.

# Hosting

To host the website I recommend using [GitHub Pages](https://pages.github.com/) which will allow you to host your website for free. It will use GitHub Actions to build and then deploy your Website automatically for you.

<ul>
  <li>
    Create a new repository called username.github.io, where <i>username</i> is your username or organization name on GitHub. If the first part of the repository name does not exactly match your GitHub                           username, it will not work, so make sure you get this part right.
  </li>
  <li>
    Goto Settings/Pages within your newly created repository and change the GitHub pages source to GitHub Actions. 
    <img src="https://github.com/MrT-Stephens/NextJs-Portfolio-Website-Template/assets/92452307/cdadc1bc-88d6-425c-9f20-5efee9d2bf64"/>
  </li>
  <li>
    Commit all the items to your newly created repository and GitHub actions should automatically build and deploy your website. You can access it though the https://username.github.io, where <i>username</i> is your             username or organization name on GitHub.
  </li>
</ul>

# Lisence

MIT License

Copyright (c) 2024 Thomas Stephens

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
