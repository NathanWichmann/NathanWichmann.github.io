# Unit 20: React: Portfolio
This repository (My-App aka Portfolio) is an educational homework assignment from the CARL-OTT-FSF-PT-02-20121-U-C course. It was designed to help students become more familiar with React. 


<a href="https://nathanwichmann.github.io/My-App">Deployed to gh-pages</a>


## Table of Contents 
- [Unit 20: React: Portfolio](#unit-20-react-portfolio)
  - [Table of Contents](#table-of-contents)
- [Pictures](#pictures)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [What I learnt](#what-i-learnt)
  - [Credits](#credits)
  - [Lisence](#lisence)

# Pictures
![Portfolio](https://user-images.githubusercontent.com/77902368/125954650-a07e328f-4111-4cf5-b1af-a9dc1940c99b.PNG)
![portfolio2](https://user-images.githubusercontent.com/77902368/125954656-4e9a81e7-2fbd-4dd9-8461-f505b153595c.PNG)
![portfolio3](https://user-images.githubusercontent.com/77902368/125954668-644b0158-136e-4f25-960d-965ccbc3aed8.PNG)
![portfolio4](https://user-images.githubusercontent.com/77902368/125954670-3895af35-be2e-4cb6-b9d9-2fb8d460d390.PNG)
![portfolio5](https://user-images.githubusercontent.com/77902368/125954678-5d6402a9-0688-4d52-a296-4bc3d0af2a79.PNG)
![portfolio6](https://user-images.githubusercontent.com/77902368/125954688-836c16a3-93f5-4d39-a6f8-723bf849aef7.PNG)

# Description
This application is a web-developer portfolio that will be used to show potential employers my cosing abilities. There is a working message section that sends a message directly to my gmail through email.js. The resume section has a pdf viewer that allows the user to print out a copy of the resume. There is an interactive projects section that links directly to each projects respoitory and deployed application on heroku. There are pictures and a description of eack project indicating its use and function. 

# Installation 
This application uses React as the main platform and my different dependencies;
`"dependencies": {
    "@material-ui/core": "^4.12.1",
    "@progress/kendo-drawing": "^1.10.1",
    "@progress/kendo-react-pdf": "^4.7.0",
    "@react-pdf-viewer/core": "^2.4.1",
    "@react-pdf-viewer/default-layout": "^2.6.1",
    "@sanity/client": "^2.11.0",
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "emailjs-com": "^3.2.0",
    "pdfjs-dist": "^2.6.347",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-hook-form": "^7.10.1",
    "react-pdf": "^5.3.2",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "react-social-icons": "^5.5.1",
    "tailwind": "^4.0.0",
    "web-vitals": "^1.1.2"
  },
  and devdependencies;
   "devDependencies": {
    "autoprefixer": "^10.2.6",
    "gh-pages": "^3.2.3",
    "postcss": "^8.3.5",
    "tailwindcss": "^2.2.4"
  }`
  This application is published on gh-pages and all sections are functional. The only issue is that I still have to work out is the mobile first respone. Material ui seems to have automatically used a mobile first appraoch, while the tailwind version boasts about being mobile first, the way it is used here that is not the case.

# Usage 
This application will be used as my personal and main portfolio for job searching. 

# What I learnt
I learnt a great deal making this application. There were many issues along the way. There were issues with deploying the application. The process proved to be more difficult than heroku. There were issues with the starting page once deployed, it goes to the my-app version that is not the start page. Tried to remove the my-pp portion in the home-page in the package-json. It seemed to work at first but fpr some reason reverted back. There were issues with rendering the images once deployed to gh-pages. I was forced to import each picture to the projects page, therefore, having to hard code the picture so they would render. There were issues with the mobile first approach. The tailwind website promotes that they are mobile first, however my navbar would say otherwise. I will attempt to fix in in the future as time has become an issue now. Getting close to the end of the program and I must choose my victories. I will fix this before the end of the course hopefully. On a side note the projects page that uses material ui is very responsive. 


## Credits 
<a href="https://github.com/NathanWichmann/">GitHub Link For Nathan Wichmann</a>

Tutor: Joey Rodregez 
Instructor: Adam 
Teachers Assistants: BEN & AIDEN


## Lisence 
MIT License

Copyright (c) [2021] [FitnessTracker]

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