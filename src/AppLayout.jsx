import React, { useState, useEffect } from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import Loader from "react-spinners/BeatLoader";
import { useSelector, useDispatch } from 'react-redux'

import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import { useTheme } from '@emotion/react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(0),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(0),
                },
            }),
        },
    }),
);

function AppLayout({ colorMode }) {

    const theme = useTheme()
    const [open, setOpen] = React.useState(false);
    const [openMobile, setOpenMobile] = React.useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
        setOpenMobile(!openMobile);
    };


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar elevation={0}   position="absolute" open={open} sx={{ display: { md: "block", sm: "none", xs: "none" } }}>
                {/*Desktop View*/}
                <Header toggleDrawer={toggleDrawer} colorMode={colorMode} />
            </AppBar>

            <MuiAppBar elevation={0}  open={openMobile} sx={{ display: { md: "none", sm: "block", xs: "block" } }}>
                {/*Mobile View*/}
                <Header toggleDrawer={toggleDrawer} colorMode={colorMode} />
            </MuiAppBar>

            <Drawer variant="permanent" open={open} sx={{ display: { md: "block", sm: "none", xs: "none" } }}>
                <Sidebar toggleDrawer={toggleDrawer} open={open} drawerWidth={drawerWidth} >
                    <Box>
                        {/*Desktop View*/}
                    </Box>
                </Sidebar>
            </Drawer>

            <MuiDrawer open={openMobile} sx={{ display: { md: "none", sm: "block", xs: "block" } }} onClose={toggleDrawer} >
                <Sidebar toggleDrawer={toggleDrawer} open={openMobile} drawerWidth={drawerWidth} >
                    <Box >
                        {/*Mobile View*/}
                    </Box>
                </Sidebar>
            </MuiDrawer>
          
            <Box
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                    flexGrow: 1,
                    height: "calc(100vh - 0px)",
                    overflow: 'auto',
                    scrollBehavior: 'smooth'
                }}>
                <Toolbar />
                <Container  maxWidth="lg" >
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
                </Container>
            </Box>
     

        </Box>
    )
}
export default AppLayout;
