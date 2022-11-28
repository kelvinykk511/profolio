import './App.css';
import {Box, Card, createTheme, CssBaseline, Grid, ThemeProvider} from "@mui/material";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});


function App() {


    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <Grid container spacing={2} padding={5} columns={{xs: 4, sm: 8, md: 12}}>
                <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
                    <Box
                        component="img"
                        sx={{
                            borderRadius: "50%",
                            height: 200,
                            // width: 350,
                            // maxHeight: { xs: 233, md: 167 },
                            // maxWidth: { xs: 350, md: 250 },
                        }}
                        alt="The house from the offer."
                        src="photo.jpeg"
                    />
                </Grid>
                <Grid container xs={12} display="flex" justifyContent="center" alignItems="center">
                    <Grid item lg={12} md={12} xs={12}>
                        <h1 align={"center"}>Hello, I am Kelvin</h1>
                    </Grid>
                    <Grid item lg={12} md={12} xs={12}>
                        <h3 align={"center"}>I am currently working as a Backend Development Engineer in Bybit</h3>
                    </Grid>
                    <Grid item>
                        <a href={"https://www.bybit.com/"} target={"_blank"}>
                            <Box
                                component="img"
                                sx={{height: 70}}
                                alt="Bybit Logo"
                                src="bybit-official-image.png"
                            />
                        </a>
                    </Grid>
                </Grid>
                <Grid container display="flex" justifyContent="center" alignItems="center">
                    <Grid item padding={5} xs={12} md={4} lg={3}>
                        <Card variant="outlined" sx={{padding: 5, height: 400}}>
                            <h2>Frontend:</h2>
                            <h5>React.js</h5>
                            <h5>HTML</h5>
                            <h5>CSS</h5>
                            <h5>JavaScript</h5>
                        </Card>
                    </Grid>
                    <Grid item padding={5} xs={12} md={4} lg={3}>
                        <Card variant="outlined" sx={{padding: 5, height: 400}}>
                            <h2>Backend:</h2>
                            <h5>Java</h5>
                            <h5>SpringBoot</h5>
                            <h5>NodeJS</h5>
                            <h5>ExpressJs</h5>
                            <h5>MySQL</h5>
                            <h5>Redis</h5>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container display="flex" justifyContent="center" alignItems="center">
                    <Grid item xs={12} md={12} lg={12}>
                        <h1 align={"center"}>Contact Me</h1>
                    </Grid>
                    <Grid item paddingTop={5} paddingX={5} xs={12} sm={6} md={4} lg={3} display="flex" justifyContent="center" alignItems="center">
                        <a href={"https://www.linkedin.com/in/kelvin-yang-7873a9187/"} target={"_blank"}>
                        <Card variant="outlined" sx={{
                            padding: 5,
                            height: 200,
                            width:250,
                        }}>
                            <Grid item display="flex" justifyContent="center" alignItems="center">
                                <Box
                                    component="img"
                                    sx={{height: 70}}
                                    alt="LinkedIn Logo"
                                    src="linkedin-icon.png"
                                />
                            </Grid>
                            <Grid>
                                <h1 align={"center"}>LinkedIn</h1>
                            </Grid>
                        </Card>
                        </a>
                    </Grid>
                    <Grid item paddingTop={5} paddingX={5} xs={12} sm={6} md={4} lg={3} display="flex" justifyContent="center" alignItems="center">
                        <a href={"https://github.com/kelvinykk511/"} target={"_blank"}>
                            <Card variant="outlined" sx={{
                                padding: 5,
                                height: 200,
                                width:250,
                            }}>
                                <Grid item display="flex" justifyContent="center" alignItems="center" >
                                    <Box
                                        component="img"
                                        sx={{height: 70}}
                                        alt="GitHub Logo"
                                        src="GitHub-Mark-Light-120px-plus.png"
                                    />
                                </Grid>
                                <Grid>
                                    <h1 align={"center"}>GitHub</h1>
                                </Grid>
                            </Card>
                        </a>
                    </Grid>
                    <Grid item paddingTop={5} paddingX={5} xs={12} sm={6} md={4} lg={3} display="flex" justifyContent="center" alignItems="center">
                        <a href={"https://github.com/kelvinykk511/"} target={"_blank"}>
                            <Card variant="outlined" sx={{
                                padding: 5,
                                height: 200,
                                width:250,
                            }}>
                                <Grid item display="flex" justifyContent="center" alignItems="center" alignSelf={"center"}>
                                    <Box
                                        component="img"
                                        sx={{height: 70}}
                                        alt="GMail Logo"
                                        src="gmail.png"
                                    />
                                </Grid>
                                <Grid>
                                    <h1 align={"center"}>GMail</h1>
                                </Grid>
                            </Card>
                        </a>
                    </Grid>
                </Grid>
            </Grid>

        </ThemeProvider>
    );
}

export default App;
