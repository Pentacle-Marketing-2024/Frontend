import React, { useState, useEffect, useCallback } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-scroll';

const pages = ['Trang chủ', 'Về chúng tôi', 'Dịch vụ', 'Sản phẩm', 'Liên hệ'];
const sectionIds = ['home', 'about', 'services', 'products', 'contact'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseMenuOnOutsideClick = useCallback((event) => {
    if (anchorElNav && !anchorElNav.contains(event.target)) {
      handleCloseNavMenu();
    }
  }, [anchorElNav]);

  useEffect(() => {
    document.addEventListener('click', handleCloseMenuOnOutsideClick);
    return () => {
      document.removeEventListener('click', handleCloseMenuOnOutsideClick);
    };
  }, [anchorElNav, handleCloseMenuOnOutsideClick]);

  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsTop(scrollTop === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar position="static" sx={{ backgroundColor: isTop ? 'transparent' : 'white', padding: '1rem', zIndex: '2', position: 'fixed', top: 0, boxShadow: '0rem 0rem 0rem 0rem' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <img src={isTop ? "./logo_trang.png" : "./logo.png"} alt="logo" width={'auto'} height={100}/>
          </Typography>


          <Typography
            sx={{
              display: { xs: 'flex', md: 'none' },
              width: '100%'
            }}
          >
            <img src={isTop ? "./logo_trang.png" : "./logo.png"} alt="logo" width={'auto'} height={60} style={{ margin: 'auto' }} />
          </Typography>


          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: 'white' }}
            >
              <MenuIcon sx={{ fontSize: '2rem', color: isTop ? 'white' : 'black' }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link
                    to={sectionIds[index]}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    style={{ textDecoration: 'none', color: 'inherit', textAlign: 'center', width: '100%' }}
                  >
                    <Typography textAlign="center" sx={{ textAlign: 'left' }}>{page}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, width: '100%', marginLeft: '10%' }}>
            {pages.map((page, index) => (
              <Link
                key={page}
                to={sectionIds[index]}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                sx={{ textDecoration: 'none', color: isTop ? "white" : 'gray', marginRight: '2rem', display: 'block' }}
              >
                <Button sx={{ my: 2, textDecoration: 'none', color: isTop ? "white" : 'gray', marginRight: '2rem', display: 'block', fontWeight: "700"}}>
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
