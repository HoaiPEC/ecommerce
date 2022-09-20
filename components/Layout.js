import React from 'react'
import Head from 'next/head'
import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    Link,
    CssBaseline
} from "@mui/material";
import useStyles from "../utils/styles";
import NextLink from 'next/link';
import {
    ThemeProvider,
    createTheme
} from "@mui/material/styles";

export default function Layout({title, children, description}) {
    const theme = createTheme({
        typography: {
            h1: {
                fontSize: '1.6rem',
                fontWeight: 400,
                margin: '1rem 0'
            },
            h2: {
                fontSize: '1.4rem',
                fontWeight: 400,
                margin: '1rem 0'
            },
            body1: {
                fontWeight: 'normal'
            }
        },
        palette: {
            type: 'light',
            primary: {
                main: '#f0c000'
            },
            secondary: {
                main: '#208080'
            },
        }
    });
    const classes = useStyles();

    return (
        <div>
            <Head>
                <title>{title ? `${title}` : 'Curtain'}</title>
                {description && <meta name="description" content={description}></meta>}
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
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
            </ThemeProvider>
        </div>
    )
}