import React from 'react';
import NavBar from '../components/NavBar';
import { Grid, Paper, Typography, Container, Box } from '@mui/material';
import { useTheme } from '@mui/material';

export const Home = () => {
    const theme = useTheme();
    return (
        <>
            <NavBar/>
            <Grid container
                spacing={0}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                paddingTop={'10vh'}>
                <Grid item xs={12} sm={6} display={'flex'} sx={{justifyContent: { xs: 'center', sm: 'flex-end'}}}>
                    <Paper elevation={3} sx={{
                        backgroundColor: `${theme.palette.primary.main}`,
                        width: '50%',
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
        </>
    );
};