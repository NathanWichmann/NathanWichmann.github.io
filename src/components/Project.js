import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import class1 from '../img/class1.png';
import Post from './Posts';
import budget from '../img/budgettracker3.png';
import fitness from '../img/fitness-tracker3.png';
import insomnia from '../img/insomnia.png';
import notetaker from '../img/NoteTake.png';
import SkewedNews from '../img/SkewedNews.png';
import techbook from '../img/techbookProject.png';
import under from '../img/under-construction.png'



const projects = [
    {   id: 1,
        image: class1,
        title: "Class",
        description: "Model, View, Controller: This model of web development, creates a seperation of concerns, allowing for code to be seperated an easily accessed.",
        href1: "https://github.com/NathanWichmann/Class",
        href: "https://cryptic-temple-86614.herokuapp.com/"
        
    },
    {   id: 2,
        image: insomnia,
        title: "E-Commerce",
        description: "Using Object-Relation-Mapping, this project indtroduces student's to Relational database management. Sequelize and MySql querries were used.",
        href1: "https://github.com/NathanWichmann/E-Commerce",
        href: "https://www.youtube.com/watch?v=95uSCnxoyOc"
    },
    {   id: 3,
        image: budget,
        title: "Budget Tracker",
        description: "Progressive Web Applications: Using a web app manifest and a service worker, this application allows users to store and save data when offline and add back once online",
        href1: "https://github.com/NathanWichmann/BudgetTracker",
        href: "https://lit-spire-34118.herokuapp.com/"
    },
    {   id: 4,
        image: fitness,
        title: "Fitness Tracker",
        description: "NoSql Databases: NoSql database Mongobd, with mongoose and Mongo Atlas were used and deployed to Heroku, to create a single user workout tracker.",
        href1: "https://github.com/NathanWichmann/FitnessTracker",
        href: "https://tranquil-eyrie-67751.herokuapp.com/?id=60d79acddce3a10020392803"
    },
    {   id: 5,
        image: techbook,
        title: "Group Project: Techbook",
        description: "Techbook allows people from the Tech industry to connect with each other, gives recruiters the ability to connect and interact with people, enables students to improve their work.",
        href1: "https://github.com/NathanWichmann/techbook",
        href: "https://my-techbook.herokuapp.com/"
    },
    {   id: 6,
        image: SkewedNews,
        title: "Group Project: SkewedNews",
        description: "Third Party API'S: Postman third party API was used to bring together, Fox News, BBC news and CNN. Three different sources come together to show how different perspectives of the news can shape political views.",
        href1: "https://github.com/NathanWichmann/SkewedNews",
        href: "https://weird-but-doable.github.io/SkewedNews/"
    },
    {   id: 7,
        image: under,
        title: "Group Project: Under Construction",
        description: "To be Determined",
        href1: "https://www.google.com/search?q=under+construction&rlz=1C1ONGR_enCA937CA937&oq=under+construction&aqs=chrome..69i57j0i457j0l8.4811j0j15&sourceid=chrome&ie=UTF-8",
        href: "https://www.google.com/search?q=under+construction&rlz=1C1ONGR_enCA937CA937&oq=under+construction&aqs=chrome..69i57j0i457j0l8.4811j0j15&sourceid=chrome&ie=UTF-8"
    },
    {   id: 8,
        image: notetaker,
        title: "Express/Node: Note Taker",
        description: "A very simple application which uses express and node.js in combination with a json file which acts as a server. First introduction to fetching data.",
        href1: "https://github.com/NathanWichmann/Note-Taker",
        href: "https://shielded-mesa-14413.herokuapp.com/"
    }
]



const Project = () => {
    return (
      < >
      
      <div className="h-full bg-gradient-to-b from-gray-200 to-gray-500">
        {" "}
        <h1 className="flex items-center justify-center py-3 px-3 mr-6 text-gray-400 hover:text-gray-600 text-4xl font-bold">
          Projects
          {" "}
        </h1>
        <Box p={4}>
          <Grid container spacing={10}>
            {projects.map((project, idx) => (
              <Grid item key={project.id}>
                <Post
                  title={project.title}
                  image={project.image}
                  description={project.description}
                  key={project.id}
                  href1={project.href1}
                  href={project.href}
                />
              </Grid>
            ))}
          </Grid>
        </Box>{" "}
        </div>
      </>
    );
}

export default Project
