import React, { useRef, useEffect } from 'react';
import NavBar from '../components/NavBar';
import { Grid, Paper, Typography, Container, Box, CardMedia } from '@mui/material';
import { useTheme } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { projects } from '../data/projects';
import FadeInUp from '../components/FadeInUp';
import { useLocation } from 'react-router-dom';

export const Home = () => {
    const theme = useTheme();
    const projectsRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#projects') {
            projectsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);

    return (
        <>
            <NavBar/>
            <Box backgroundColor={'white'}
                paddingTop={'10vh'}
                paddingBottom={'10vh'}>
                <FadeInUp>
                    <Grid container
                        backgroundColor={'white'}
                        spacing={0}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Grid item xs={12} sm={6} display={'flex'} sx={{justifyContent: { xs: 'center', sm: 'flex-end'}}}>
                            <Paper elevation={3} sx={{
                                backgroundColor: `${theme.palette.primary.main}`,
                                width: '50%',
                                minWidth: '300px',
                                marginBottom: { sm: '15vh'},
                            }}>
                                <Container sx={{ padding: '1em'}}>
                                    <Typography paragraph
                                        fontWeight={'bold'}
                                        variant='h5'
                                        sx={{color: `${theme.palette.text.primary}`}}
                                        >Hi I'm Benny!
                                    </Typography>
                                    <Typography fontSize={16}
                                        variant='body1'
                                        paragraph
                                        lineHeight={2}
                                        sx={{color: `${theme.palette.text.primary}`}}
                                        >I am a software engineer based in Sydney, Australia. I am currently a senior software engineer at Atlassian working on AI platform.
                                        Previously, I worked at Google, Amazon (AWS), startups and other Australian big techs.
                                    </Typography>
                                    <Typography fontSize={16}
                                        variant='body1'
                                        paragraph
                                        lineHeight={2}
                                        sx={{color: `${theme.palette.text.primary}`}}
                                        >My skills range from building mobile apps, web apps to large scale distributed systems.
                                    </Typography>
                                    <Typography fontSize={16}
                                        variant='body1'
                                        paragraph
                                        lineHeight={2}
                                        sx={{color: `${theme.palette.text.primary}`}}
                                        >👋 Get in Touch: bennyhwangg@gmail.com
                                    </Typography>
                                </Container>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} display={'flex'} sx={{justifyContent: { xs: 'center', sm: 'flex-start'}}}>
                            <Box component='img'
                                sx={{ width: '40%', minWidth: '300px', marginTop: { sm: '15vh'}}}
                                alt='Profile image'
                                src={`${process.env.PUBLIC_URL}/profile_image.jpg`}
                                borderRadius={4}
                                />
                        </Grid>
                    </Grid>
                </FadeInUp>
                <FadeInUp>
                    <Box marginLeft={'10vw'}
                        marginRight={'10vw'}
                        marginTop={'5vh'}
                        marginBottom={'5vh'}>
                        <Typography paragraph
                            ref={projectsRef}
                            fontWeight={'bold'}
                            variant='h5'
                            sx={{color: `${theme.palette.text.primary}`}}
                            >Things I've built
                        </Typography>
                        <Grid container
                            spacing={2}
                            display={'flex'}
                            justifyContent={'flex-start'}
                            alignItems={'center'}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <Grid key={index}
                                        item
                                        xs={12} sm={4}
                                        minWidth={250}
                                        display={'flex'}>
                                        <Card sx={{ width: '100%',
                                            height: {xs: '35vh', sm: '40vh', md: '37vh'},
                                            '&:hover': {
                                                cursor: 'pointer',
                                            }}}
                                            elevation={3}
                                            onClick={() => window.open(project.url, '_blank')}
                                            >
                                            <CardMedia
                                                component={'img'}
                                                sx={{
                                                    height: '20vh'
                                                }}
                                                image={`${process.env.PUBLIC_URL}/${project.image}`}
                                            />
                                            <CardContent>
                                                <Typography variant='h5' component="div">{project.title}</Typography>
                                                <Typography variant='body2'>{project.description}</Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Box>
                </FadeInUp>
            </Box>
        </>
    );
};