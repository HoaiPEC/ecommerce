import React from 'react'
import Head from 'next/head'
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import useStyles from "../utils/styles";

export default function Layout({children}) {
    const classes = useStyles();

    return (
        <div>
            <Head>
                <title>Curtain</title>
            </Head>
            <AppBar positon="static" className={classes.navbar}>
                <Toolbar>
                    <Typography>
                        Curtain
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container className={classes.main}>
                {children}
            </Container>
            <footer className={classes.footer}>
                <Typography>
                    All right reserve
                </Typography>
            </footer>
        </div>
    )
}