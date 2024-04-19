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
                spacing={1}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                paddingTop={'6vh'}>
                <Grid item xs={12} sm={6}>
                    <Paper elevation={3} sx={{
                        backgroundColor: `${theme.palette.primary.main}`,
                        width: '60%',
                    }}>
                        <Container sx={{ padding: '1em'}}>
                            <Typography variant='h4' sx={{color: `${theme.palette.text.primary}`}}
                                >Hi I'm Benny
                            </Typography>
                        </Container>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box component='img'
                        sx={{ width: '60%'}}
                        alt='Profile image'
                        src={`${process.env.PUBLIC_URL}/profile_image.jpg`}
                         />
                </Grid>
            </Grid>
        </>
    );
};