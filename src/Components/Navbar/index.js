import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar"
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
    menuButtons: {
        marginLeft: "auto",
        marginRight: "12px"
      }
}

const Navbar = (props) => {

    const {classes} = props;

    return (
    <div >
        <AppBar position="static">
        <Toolbar>
            <Typography variant = "h5" color="inherit">
                Daniel Tian
            </Typography>
            <div className = {classes.menuButtons}>
                <Button color="inherit">Projects</Button>
                <Button color="inherit">About Me</Button>
                <Button color="inherit">Contact</Button>
            </div>

        </Toolbar>

    </AppBar>
    
    
    </div>
    )
}

export default withStyles(styles) (Navbar)