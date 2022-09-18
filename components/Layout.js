import React from 'react'
import Head from 'next/head'
import { AppBar, Toolbar, Typography, Container, Link } from "@mui/material";
import useStyles from "../utils/styles";
import NextLink from 'next/link';

export default function Layout({children}) {
    const classes = useStyles();

    return (
        <div>
            <Head>
                <title>Curtain</title>
            </Head>
            <AppBar positon="static" className={classes.navbar}>
                <Toolbar>
                    <NextLink href="/" passHref>
                        <Link>
                            <Typography className={classes.brand}>
                                Curtain
                            </Typography>
                        </Link>
                    </NextLink>
                    <div className={classes.grow}></div>
                    <div>
                        <NextLink href="/cart" passHref>
                            <Link>
                                Cart
                            </Link>
                        </NextLink>
                    </div>
                    <div>
                        <NextLink href="/login" passHref>
                            <Link>
                                Login
                            </Link>
                        </NextLink>
                    </div>
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