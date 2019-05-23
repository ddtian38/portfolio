import React from "react";
import Grid from "@material-ui/core/Grid"
import "./style.css"
import Project from "../Components/Projects/index";
import { withStyles } from "@material-ui/core";

const styles = {
    main_body: {
        marginLeft: "10%",
        marginRight: "10%",
    },
    intro: {
        marginTop: "50px",
        marginBottom: "10px",
        backgroundColor: "rgba(255,255,255, 0.9)"
    },


    contact_container : {
        marginTop: "50px",
        border: "2px black solid",
        backgroundColor: "lightgray",

    }
}


const Home = ({classes})=>{
    
        return (
        <div className = {classes.main_body}>
        <Grid container spacing = {24}>
            <Grid item xs={12} className={classes.intro}>
                    <h1>My name is Daniel... What would you like build?</h1>
                    <p>Aspiring software engineer with a background in mechanical engineering and minor in computer science. Proficient in programming languages such as Python, Javascript, SQL, and other Web based technologies. Always eager to learn and develop my skills as a backend developer.</p>
                    <p></p>
            </Grid>
            <Project/>          
            <Grid item xs={12} className={classes.contact_container}>
                <h1>Contact Info</h1>
                <ul>
                    <li className = "contact-links">
                        <a href="https://github.com/ddtian38"><i class="fab fa-github"></i></a>
                    </li>
                    <li className = "contact-links">
                    <a href="https://www.linkedin.com/in/daniel-tian/"><i class="fab fa-linkedin-in"></i></a>
                     </li>
                </ul>
            </Grid>
        </Grid>

        </div>
        )
 
    }


export default withStyles(styles)(Home);