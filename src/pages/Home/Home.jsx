import React from 'react'
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Box, Button, Card, Container, Grid, InputAdornment, Paper, TextField, Typography, duration, useTheme } from '@mui/material'
import Loader from "react-spinners/BeatLoader";
import PictureWhite from './../../assets/pt.png'
import PictureBlack from './../../assets/pt.png'
import ResumePng from './../../assets/s1.png'
import WordCloud from '../../components/WordCloud';
import VerticalTabs from '../../components/Tab';
import { Download, Email, LocalActivity } from '@mui/icons-material';
import PhoneIcon from '@mui/icons-material/Phone';
import CakeIcon from '@mui/icons-material/Cake';
import SchoolIcon from '@mui/icons-material/School';
import DomainIcon from '@mui/icons-material/Domain';
import PlaceIcon from '@mui/icons-material/Place';

const ScrollAnimationComponent = () => {
    const controls1 = useAnimation();
    const controls2 = useAnimation();
    const { ref: ref1, inView: inView1 } = useInView();
    const { ref: ref2, inView: inView2 } = useInView();

    const theme = useTheme()

    useEffect(() => {
        if (inView1) {
            controls1.start({ x: 0 });
        } else {
            controls1.start({ x: "-100%" });
        }
    }, [controls1, inView1]);

    useEffect(() => {
        if (inView2) {
            controls2.start({ x: "5%" });
        } else {
            controls2.start({ x: "10%" });
        }
    }, [controls2, inView2]);


    return (
        <>
            <Grid item sx={{ display: { md: "none", sm: "block", xs: "block" } }}>
                <motion.div
                    ref={ref1}
                    initial={{ x: "10%" }}
                    animate={{ ...controls1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.img initial={{ opacity: .3 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} src={theme.palette.mode === "light" ? PictureWhite : PictureBlack} style={{ width: "200px", height: "200px" }} />

                </motion.div>

            </Grid>
            <Grid item>
                <motion.div
                    ref={ref2}
                    initial={{ opacity: .3 }} animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                >
                    <Typography sx={{ fontSize: 20 }}>Hi, I am</Typography>
                    <Typography sx={{ fontSize: "6.4vw" }}>Swetabh Suman</Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: .3 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                >
                    <Box>
                        <Typography sx={{ fontSize: "2vh" }}>
                            I am a software engineer with a background in both Back-end and Front-end development.
                        </Typography>
                    </Box>

                </motion.div>
            </Grid>
            <Grid item sx={{ display: { md: "block", sm: "none", xs: "none" } }}>
                <motion.div
                    ref={ref2}
                    initial={{ x: "10%" }}
                    animate={{ ...controls2 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", height: "100%", width: "100%" }}>
                        <motion.img initial={{ opacity: .3 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} src={theme.palette.mode === "light" ? PictureWhite : PictureBlack} style={{ width: "200px", height: "200px" }} />
                    </Box>
                </motion.div>
            </Grid>
        </>
    );
};


export default function Home() {
    const controls3 = useAnimation();

    const { ref: ref3, inView: inView3 } = useInView();


    useEffect(() => {
        if (inView3) {
            controls3.start({ scale: .9 });
        } else {
            controls3.start({ scale: 0 });
        }
    }, [controls3, inView3]);

    const certi = [
        { cName: "AWS Certified Developer", link: "https://www.credly.com/badges/26613f24-ca0b-4687-b0bb-396d49eb230f/linked_in_profile", ino: "G1WN5MCVMEEQ7K9" },
        { cName: "Server-side Development with NodeJS, Expressand MongoDB", link: "https://www.coursera.org/account/accomplishments/certificate/HTR2B8SRGNM7", ino: "HTR2B8SRGNM7" },
        { cName: "Java (Basic) Certificate", link: "https://www.hackerrank.com/certificates/218763a7d281", ino: "218763a7d281" },
        { cName: "Rest API (Intermediate) Certificate", link: "https://www.hackerrank.com/certificates/f093d0b20f84", ino: "f093d0b20f84" },
        { cName: "Front-End Web Development with React", link: "https://www.coursera.org/account/accomplishments/certificate/BY6PL9TLKMBH", ino: "BY6PL9TLKMBH" },
        { cName: "The Modern GraphQL Bootcamp (with Node.js and Apollo)", link: "https://www.udemy.com/certificate/UC-97b28cb4-cb66-4494-8383-7fece0ab50f1/", ino: "UC-97b28cb4-cb66-4494-8383-7fece0ab50f1" }
    ]
    return (
        <Box>
            <motion.div
                initial={{ x: 50, opacity: .3 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}>
                <Paper sx={{ p: 2, my: 2 }} elevation={0}>
                    <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "400px" }} >

                        <ScrollAnimationComponent />

                    </Grid>
                </Paper>
            </motion.div>
            <motion.div
                initial={{ x: -50, opacity: .3 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
            >
                <Paper sx={{ p: 2 }} elevation={0}>
                    <Typography sx={{ fontSize: "5vh" }}>About</Typography>
                    <Typography>
                        I believe, I am a good learner and describe myself as a lifelong learner and implementer.
                        I am very keen to use my technical and managing skills as well as learning for the betterment of software industry by keeping mutual growth in mind.
                        I have around 6 months (internship) + 2 year(s) and 5 month(s) of corporate experience in software development and scripting which includes various web development projects in different technologies and frameworks like Chalice (Python), ReactJS, NodeJS, ExpressJS etc.
                    </Typography>
                    <Box sx={{ p: 5 }}>
                        <Grid container spacing={2}>
                            <Grid item md={4}>
                                <TextField
                                    fullWidth
                                    label="Date Of Birth"
                                    defaultValue="17 March 1998"
                                    InputProps={{
                                        readOnly: true,
                                        endAdornment: 
                                            <InputAdornment position="start">
                                                <CakeIcon />
                                            </InputAdornment>
                                        
                                    }}

                                />
                            </Grid >
                            <Grid item md={4}>
                                <TextField
                                    fullWidth
                                    label="Degree"
                                    defaultValue="Bachelor of Technology"
                                    InputProps={{
                                        readOnly: true,
                                        endAdornment: (
                                            <InputAdornment position="start">
                                                <SchoolIcon />
                                            </InputAdornment>

                                        )
                                    }}

                                />

                            </Grid>
                            <Grid item md={4}>
                                <TextField
                                    fullWidth
                                    label="Branch"
                                    defaultValue="Computer Science And Engineering"
                                    InputProps={{
                                        readOnly: true,
                                        endAdornment: (
                                            <InputAdornment position="start">
                                                <DomainIcon />
                                            </InputAdornment>

                                        )
                                    }}

                                />
                            </Grid>
                            <Grid item md={4}>
                                <TextField
                                    fullWidth
                                    label="Email"
                                    defaultValue="swtbhsmn@gmail.com"
                                    InputProps={{
                                        readOnly: true,
                                        endAdornment: (
                                            <InputAdornment position="start">
                                                <Email />
                                            </InputAdornment>

                                        )
                                    }}


                                />

                            </Grid>
                            <Grid item md={4}>
                                <TextField
                                    type="tel"
                                    fullWidth
                                    label="Mobile Number"
                                    defaultValue="+91 790-338-5534"
                                    InputProps={{
                                        readOnly: true,
                                        endAdornment: (
                                            <InputAdornment position="start">
                                                <PhoneIcon />
                                            </InputAdornment>

                                        )
                                    }}

                                />
                            </Grid>
                            <Grid item md={4}>
                                <TextField
                                    fullWidth
                                    label="Place"
                                    defaultValue="Bengaluru, Karnataka, India"
                                    InputProps={{
                                        readOnly: true,
                                        endAdornment: (
                                            <InputAdornment position="start">
                                                <PlaceIcon />
                                            </InputAdornment>
                                        )
                                    }}

                                />

                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </motion.div>

            <motion.div
                initial={{ x: 50, opacity: .3 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
            >
                <Paper sx={{ p: 2, my: 2 }} elevation={0}>
                    <Typography sx={{ fontSize: "5vh" }}>Career</Typography>
                    <VerticalTabs />
                </Paper>
            </motion.div>

            <motion.div
                initial={{ x: -50, opacity: .3 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
            >
                <Paper sx={{ p: 2, my: 2 }} elevation={0}>
                    <Typography sx={{ fontSize: "5vh" }}>Certification</Typography>
                    <Grid container spacing={2}>
                        {certi?.map((i, k) => <Grid item key={k} md={4} sx={{ width: "100%" }} >
                            <Paper onClick={() => {
                                window.open(i.link, '_blank')
                            }} elevation={0} className='card-hover' sx={{ height: 300, width: "100%", p: 2, display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid #d4cdcd", cursor: "pointer" }}>
                                {i.cName}
                            </Paper>
                        </Grid>)}
                    </Grid>
                </Paper>
            </motion.div>
            <motion.div
                ref={ref3}
                initial={{ x: 50, opacity: .3 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
            >
                <Paper sx={{ p: 2, my: 2 }} elevation={0}>
                    <Typography sx={{ fontSize: "5vh" }}>Resume</Typography>
                    <Grid container spacing={2}>
                        <Grid item sx={{ width: "100%" }}>
                            <motion.img src={ResumePng} initial={{ scale: 0 }} animate={{ scale: .9, ...controls3 }} transition={{ duration: 3, ease: "easeOut" }} width={"100%"} />
                        </Grid>
                    </Grid>
                </Paper>
            </motion.div>
            <Box sx={{ position: "fixed", bottom: 0, right: 0, m: 1 }}>
            <Button variant="contained" sx={{textTransform:"capitalize",backgroundColor:(theme)=>theme.palette.mode ==="light" ? "#1976d2" : "#121212",color:(theme)=>theme.palette.mode ==="light" ? "#fff" : "#fff"}} endIcon={<Download/>} onClick={()=>{
                 const pdfPath = window.location.origin+"/Swetabh_Suman_Resume.pdf"
                 const anchor = document.createElement('a');
                 anchor.href = pdfPath;
                 anchor.download = 'Swetabh_Suman_Resume.pdf';
                 anchor.click();
            }}>Resume</Button>
            </Box>

            {false ? (
                <Box sx={{ display: "flex", justifyContent: "center", height: 100, alignItems: "center" }}>
                    <Loader
                        style={{ padding: 5, mb: 5 }}
                        loading={true}
                    />
                </Box>) : null}
        </Box>
    )
}
