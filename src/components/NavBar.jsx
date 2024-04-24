import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { common } from '@mui/material/colors';
import { Drawer, ListItem, useTheme } from '@mui/material';

const pages = ['Home', 'Resume'];

export const NavBar = () => {
  const theme = useTheme();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOnNavItemClick = (page) => {
    switch(page) {
        case 'Resume':
            window.open('https://docs.google.com/document/d/1ZaSMdYVZcm8wK1P5yFI_QNrFohmvEsdxdL8n7BMDBC8/edit?usp=sharing', '_blank');
    }
  };

  return (
    <AppBar position="static" color='accent' >
      <Container maxWidth="xl" >
        <Toolbar disableGutters sx={{justifyContent: 'space-between',
        paddingTop:  '1.4vw',
        paddingBottom: '0.3vw',
        paddingLeft: '10vw',
        paddingRight: '10vw',
        pointerEvents: 'auto' }} >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
              color: `${theme.palette.text.secondary}`,
            }}
          >
            Benny Hwang
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu icon"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon color='secondary' />
            </IconButton>
            <React.Fragment key={anchorElNav}>
                <Drawer anchorEl={anchorElNav}
                    anchor='top'
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        height: '100vh',
                    }}
                    PaperProps={{ sx: {
                            width: '100%',
                            height: '100%',
                            backgroundColor: `${theme.palette.primary.main}`,
                        }}
                    }
                >
                    <Box sx={{
                        paddingTop: '7vw',
                        paddingBottom: '7vw',
                        paddingLeft: '6vw',
                        paddingRight: '6vw',
                        height: '100%'
                    }}
                    >
                        <Box display={'flex'}
                            alignContent={'center'}
                            alignItems={'center'}
                            justifyContent={'space-between'}
                            sx={{flexDirection: 'row',
                                flexWrap: 'nowrap'}}
                        >
                            <Typography variant='h4'>
                                Benny Hwang
                            </Typography>
                            <CloseIcon onClick={handleCloseNavMenu}/>
                        </Box>
                        <Box height={'100%'}
                            width={'100%'}
                            display={'flex'}
                            flexDirection={'column'}
                            flexWrap={'nowrap'}
                            justifyContent={'center'}
                            alignContent={'center'}
                        >
                            {pages.map((page) => (
                                <ListItem key={page} onClick={handleCloseNavMenu} justifyContent={'center'}>
                                    <Typography textAlign="center"
                                        onClick={() => handleOnNavItemClick(page)}
                                        >{page}
                                    </Typography>
                                </ListItem>
                            ))}
                        </Box>
                    </Box>
                </Drawer>
            </React.Fragment>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: `${theme.palette.text.secondary}`,
              textDecoration: 'none',
            }}
          >
            Benny Hwang
          </Typography>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex', p: 1 } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'block', color: `${theme.palette.text.secondary}` }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
      <Box sx={{ borderBottom: `4px solid ${common.black}` }} />
    </AppBar>
  );
};

export default NavBar;