import React from "react";

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar, AppBar, Typography, Button } from "@material-ui/core";

// Components
import Login from "../Login";

const AppNav = () => {

    const useStyles = makeStyles(theme => ({
        root: {
          flexGrow: 1,
        },       
        title: {
          flexGrow: 1,
        },
      }));

    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Typography variant="h6" component="h1" align='left' className={classes.title}>
                    Photos
                </Typography>
                <Login />
            </Toolbar>
        </AppBar>
    )

};

export default AppNav;