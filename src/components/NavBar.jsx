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
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const pages = ['Home', 'Resume', 'Github', 'Linkedin'];
const iconPages = ['Github', 'Linkedin'];
const pageToIcon = {
    'Github': 'fa-brands fa-github',
    'Linkedin': 'fa-brands fa-linkedin',
};

export const NavBar = () => {
  const theme = useTheme();
  const navigate = useNavigate();

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
            break;
        case 'Home':
            navigate('/');
            break;
        case 'Github':
            window.open('https://github.com/Bennyhwanggggg', '_blank');
            break;
        case 'Linkedin':
            window.open('https://www.linkedin.com/in/benny-hwang-35b077104/', '_blank');
            break;
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
                <Drawer anchor='top'
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
                        height: '100%',
                    }}
                    display={'flex'}
                    flexDirection={'column'}
                    flexWrap={'nowrap'}
                    justifyContent={'space-between'}
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
                            <CloseIcon sx={{
                                '&:hover': {
                                    cursor: 'pointer',
                                    textDecoration: 'underline',
                                }
                            }} onClick={handleCloseNavMenu}/>
                        </Box>
                        <Box width={'100%'}
                            display={'flex'}
                            flexDirection={'column'}
                            flexWrap={'nowrap'}
                            justifyContent={'center'}
                            alignContent={'center'}
                        >
                            {pages.filter(page => !iconPages.includes(page)).map((page) => (
                                <ListItem key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ justifyContent: 'center',
                                        '&:hover': {
                                            cursor: 'pointer',
                                            textDecoration: 'underline',
                                        }}}>
                                    <Typography textAlign="center"
                                        onClick={() => handleOnNavItemClick(page)}
                                        >{page}
                                    </Typography>
                                </ListItem>
                            ))}
                        </Box>
                        <Box display={'flex'}
                            alignContent={'center'}
                            alignItems={'center'}
                            justifyContent={'center'}
                            sx={{flexDirection: 'row',
                                flexWrap: 'nowrap'}}
                        >
                            {pages.filter(page => iconPages.includes(page)).map((page) => (
                                <IconButton key={page}
                                    disableRipple={true}
                                    onClick={() => handleOnNavItemClick(page)}>
                                    <FontAwesomeIcon icon={pageToIcon[page]}
                                        style={{
                                            color: `${theme.palette.secondary.main}`
                                        }}/>
                                </IconButton>
                                ))
                            }
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
            {pages.map((page) => {
                if (iconPages.includes(page)) {
                    return (
                        <IconButton key={page}
                            disableRipple={true}
                            onClick={() => handleOnNavItemClick(page)}>
                            <FontAwesomeIcon icon={pageToIcon[page]}
                                style={{
                                    color: `${theme.palette.secondary.main}`
                                }}/>
                        </IconButton>
                    );
                } else {
                   return (
                        <Button
                            key={page}
                            disableRipple={true}
                            onClick={() => handleOnNavItemClick(page)}
                            sx={{ my: 2,
                                display: 'block',
                                color: `${theme.palette.text.secondary}`,
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    left: 0,
                                    bottom: 0,
                                    width: '0%',
                                    height: 2,
                                    backgroundColor: `${theme.palette.text.secondary}`,
                                    transition: 'left 0.2s transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); transition-duration: 0.4s; transition-delay: 0.111111s;, width 0.3s cubic-bezier(0.19, 1, 0.22, 1)', // Transition both left and width
                                  },
                                '&:hover::after': {
                                    width: '100%',
                                }}}
                        >
                            {page}
                        </Button>
                   );
                }
            })}
          </Box>
        </Toolbar>
      </Container>
      <Box sx={{ borderBottom: `4px solid ${common.black}` }} />
    </AppBar>
  );
};

export default NavBar;