import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'primary.main' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            Sela Smith
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button
              component={RouterLink}
              to="/about"
              sx={{ color: 'white', mx: 1 }}
            >
              About
            </Button>
            <Button
              component={RouterLink}
              to="/projects"
              sx={{ color: 'white', mx: 1 }}
            >
              Projects
            </Button>
            <Button
              component={RouterLink}
              to="/contact"
              sx={{ color: 'white', mx: 1 }}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
