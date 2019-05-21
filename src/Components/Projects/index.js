import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import Divider from "@material-ui/core/Divider"
import { withStyles } from "@material-ui/core";
import LiveMerch from "../../assets/images/LiveMerch.png"
import Missenplace from "../../assets/images/missenplace.png"
import TweetTrace from "../../assets/images/TweetTrace.png"

const styles= {
    project_title : {
        textAlign: "center"
    },
    project_content: {
        marginTop: "5px",
        marginBottom: "5px",
        borderBottom: "2px white solid",
        backgroundColor: "rgba(255,255,255, 0.9)",
        color: "gray"
    },
    projectButtons: {
        margin: "10px"
    }
}

const Project = ({classes}) => {

    return <Grid container spacing = {24} alignContent="center">

                <Grid xs={12}>
                        <h2 className={classes.project_title}>Projects</h2>
                </Grid>
                    <Grid item md={6} xs={12} className={classes.project_content} alignContent = "center" style={{borderTopLeftRadius: "110px", borderBottomLeftRadius: "110px"}}>
                    <div style={{paddingTop: "35%"}}>           
                      <h3>Tweet Trace</h3>
                        <p>TweetTrace helps you manage your online presence. We let users sign in using their Twitter amount, pull their most recent weekly tweets, track likes and retweets, and get a feel for how people are receiving their tweets based on an NLP's analysis of comments.</p>
                        <p>Technologies used: Node.js, Express.js, React.js, MongoDB, Bootstrap</p>

                        <Button variant="contained"  color="primary" href="https://pure-escarpment-67547.herokuapp.com/" className={classes.projectButtons}>See It in Action</Button>
                        <Button  variant="contained" color="primary" className={classes.projectButtons}>Code</Button>
                    </div>

                    </Grid>

                    <Grid item  md={6} xs={12} className = {classes.project_content} style={{borderTopRightRadius: "110px", borderBottomRightRadius: "110px"}}>
                        <div style={{paddingTop: "1%"}}>       
                            <img src = {TweetTrace} alt="TweetTrace"/>
                        </div>
                    </Grid>     
                <Divider/>

            <Grid item md= {6} xs={12} className = {classes.project_content} style={{borderTopLeftRadius: "110px", borderBottomLeftRadius: "110px"}}>
                <div style={{paddingTop: "1%"}}>         
                    <img src = {Missenplace} alt="Missenplace"/>
                </div>
            </Grid>
            <Grid item md = {6} xs={12} className = {classes.project_content} style={{borderTopRightRadius: "110px", borderBottomRightRadius: "110px"}} >
            <div style={{paddingTop: "15%"}}>         
                <h3>Missenplace</h3>
                    <p>Mise en Place is a web application where users can search up recipes from Edamam API based on dietary restriction or preferences and schedule those recipes for the week. The user can create an account favorite certain recipes they enjoy making or can schedule them on their calendar when they would like to try out the recipe. If the user enjoys making the recipe, they can favorite it without having to search again on the Calendar tab.</p>
                    <p>Technologies used: Node.js, Express.js, Handlebars.js, MySQL, Bootstrap</p>

                    <Button variant="contained"  className={classes.projectButtons} color="primary" href="https://murmuring-brushlands-67751.herokuapp.com/">See It in Action</Button>
                    <Button variant="contained"  className={classes.projectButtons} color="primary">Code</Button>
                </div>
            </Grid>      
            <Grid item md = {6} xs={12} className={classes.project_content} style={{borderTopLeftRadius: "110px", borderBottomLeftRadius: "110px"}}>
                <div style={{paddingTop: "10%"}}>         

                <h3>LiveMerch</h3>
                <p>LiveMerch is a tool to help users find concerts in their area and provide relevant fan merchandise available for purchase all on one page. Users can search by band, city and state, or by their current location to find concerts and merchandise associated with the bands/artists performing.</p>
                <p>Technologies used: jQuery, Bootstrap</p>
                <Button variant="contained"  className={classes.projectButtons} color="primary" href="http://tinyurl.com/yxd3m6do">See It in Action</Button>
                <Button variant="contained"   className={classes.projectButtons} color="primary">Code</Button>
                </div>
            </Grid>
            <Grid item md = {6} xs={12} className = {classes.project_content} style={{borderTopRightRadius: "110px", borderBottomRightRadius: "110px"}}>
                <img src = {LiveMerch} alt="LiveMerch"/>

            </Grid>          
    </Grid>
    
}

export default withStyles(styles)(Project);