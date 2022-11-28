import './App.css';
import {Box, Card, createTheme, CssBaseline, Grid, Switch, ThemeProvider} from "@mui/material";
import ImageBox from "./component/ImageBox";
import ContactCard from "./component/ContactCard";
import SkillsCard from "./component/SkillsCard";
import {useCallback, useMemo, useState} from "react";

function App() {

    const frontendSkills = ["React.js", "HTML", "CSS", "JavaScript"];
    const backendSkills = ["Java", "SpringBoot", "NodeJS", "ExpressJS", "MySQL", "Redis"];
    const [darkMode, setDarkMode] = useState(true);
    const toggleSwitch = useCallback(
        () => {
                setDarkMode(!darkMode)
        },
        [darkMode],
    );
    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: darkMode ? 'dark' : 'light',
                },
            }),
        [darkMode],
    );


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Grid container spacing={2} padding={5} columns={{xs: 4, sm: 8, md: 12}}>
                <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
                    <ImageBox
                        height={200}
                        borderRadius={50}
                        altText={"My Profile Picture"}
                        src={"photo.jpeg"}
                    />
                </Grid>
                <Grid container display="flex" justifyContent="center" alignItems="center">
                    <Grid item lg={12} md={12} xs={12}>
                        <h1 align={"center"}>Hello, I am YANG Kwan Ki, Kelvin</h1>
                    </Grid>
                    <Grid item lg={12} md={12} xs={12}>
                        <h3 align={"center"}>I am currently working as a Backend Development Engineer in Bybit</h3>
                    </Grid>
                    <Grid item>
                        <a href={"https://www.bybit.com/"} target={"_blank"}>
                            <ImageBox
                                height={150}
                                altText={"Bybit Logo"}
                                src={"bybit-official-image.png"}
                            />
                        </a>
                    </Grid>
                </Grid>
                <Grid container display="flex" justifyContent="center" alignItems="center">
                    <SkillsCard
                        title={"Frontend"}
                        skills={frontendSkills}
                    />
                    <SkillsCard
                        title={"Backend"}
                        skills={backendSkills}
                    />
                </Grid>
                <Grid container display="flex" justifyContent="center" alignItems="center">
                    <Grid item xs={12} md={12} lg={12}>
                        <h1 align={"center"}>Contact Me</h1>
                    </Grid>
                    <ContactCard
                        url={"https://www.linkedin.com/in/kelvin-yang-7873a9187/"}
                        altText={"LinkedIn Logo"}
                        src={"linkedin-icon.png"}
                        title={"LinkedIn"}
                    />
                    <ContactCard
                        url={"https://github.com/kelvinykk511/"}
                        altText={"GitHub Logo"}
                        src={darkMode ? "GitHub-Mark-Light-120px-plus.png" : "GitHub-Mark-120px-plus.png"}
                        title={"GitHub"}
                    />
                    <ContactCard
                        url={"mailto:kelvinykk511@gmail.com"}
                        altText={"Gmail Logo"}
                        src={"gmail.png"}
                        title={"GMail"}
                    />
                </Grid>
                <Grid container display="flex" justifyContent="center" alignItems="center">
                    <h3>Dark Mode</h3>
                    <Switch
                        onChange={toggleSwitch}
                        sx={{marginTop: 0}}
                        defaultChecked
                    />
                </Grid>
            </Grid>

        </ThemeProvider>
    );
}

export default App;
