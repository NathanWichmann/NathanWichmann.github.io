import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';



import Post from './Posts';

const projects = [
    {   id: 1,
        image: "/img/class1.PNG",
        title: "Class",
        description: "Model, View, Controller: This model of web development, creates a seperation of concerns, allowing for code to be seperated an easily accessed.",
        href1: "https://github.com/NathanWichmann/Class",
        href: "https://cryptic-temple-86614.herokuapp.com/"
        
    },
    {   id: 2,
        image: "/img/insomnia.PNG",
        title: "E-Commerce",
        description: "Using Object-Relation-Mapping, this project indtroduces student's to Relational database management. Sequelize and MySql querries were used.",
        href1: "https://github.com/NathanWichmann/E-Commerce",
        href: "https://www.youtube.com/watch?v=95uSCnxoyOc"
    },
    {   id: 3,
        image: "/img/budgettracker3.png",
        title: "Budget Tracker",
        description: "Progressive Web Applications: Using a web app manifest and a service worker, this application allows users to store and save data when offline and add back once online",
        href1: "https://github.com/NathanWichmann/BudgetTracker",
        href: "https://lit-spire-34118.herokuapp.com/"
    },
    {   id: 4,
        image: "/img/fitness-tracker3.png",
        title: "Fitness Tracker",
        description: "NoSql Databases: NoSql database Mongobd, with mongoose and Mongo Atlas were used and deployed to Heroku, to create a single user workout tracker.",
        href1: "https://github.com/NathanWichmann/FitnessTracker",
        href: "https://tranquil-eyrie-67751.herokuapp.com/?id=60d79acddce3a10020392803"
    },
    {   id: 5,
        image: "/img/techbookProject.png",
        title: "Group Project: Techbook",
        description: "Techbook allows people from the Tech industry to connect with each other, gives recruiters the ability to connect and interact with people, enables students to improve their work.",
        href1: "https://github.com/NathanWichmann/techbook",
        href: "https://my-techbook.herokuapp.com/"
    },
    {   id: 6,
        image: "/img/SkewedNews.png",
        title: "Group Project: SkewedNews",
        description: "Third Party API'S: Postman third party API was used to bring together, Fox News, BBC news and CNN. Three different sources come together to show how different perspectives of the news can shape political views.",
        href1: "https://github.com/NathanWichmann/SkewedNews",
        href: "https://weird-but-doable.github.io/SkewedNews/"
    },
    {   id: 7,
        image: "/img/under-construction.png",
        title: "Group Project: Under Construction",
        description: "To be Determined",
        href1: "",
        href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.seekpng.com%2Fipng%2Fu2q8q8w7w7y3y3t4_under-construction-png-file-under-construction-tape-png%2F&psig=AOvVaw1Nii58YvhmYthrwJYvLfiT&ust=1626183502292000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCMD49eTT3fECFQAAAAAdAAAAABAD"
    },
    {   id: 8,
        image: "/img/NoteTake.PNG",
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
          {" "}
          Projects
        </h1>
        <Box p={12}>
          <Grid container spacing={10}>
            {projects.map((project, idx) => (
              <Grid item key={project.id}>
                <Post
                  image={project.image}
                  title={project.title}
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
