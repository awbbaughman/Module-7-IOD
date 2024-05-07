import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router-dom';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Home', 'Login', 'Bitcoin Rates', 'Posts'];


/* naturally, all this was taken from the Module 7 Exercise 5 help guide.
how are we to know what things like "page.replace(/\s/g, '')" on line 150 mean?
*/

function NavBar() {

const [anchorElNav, setAnchorElNav] = React.useState(null);

const handleOpenNavMenu = (event) => {

setAnchorElNav(event.currentTarget);
};

const handleCloseNavMenu = () => {

setAnchorElNav(null);
};

return (

<AppBar position="static">

  <Container maxWidth="xl">

    <Toolbar disableGutters>

      <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

      <Typography

        variant="h6"

        noWrap

        component="div"

        sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}

      >

        AppName

      </Typography>

      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

        <IconButton

          size="large"

          aria-label="account of current user"

          aria-controls="menu-appbar"

          aria-haspopup="true"

          onClick={handleOpenNavMenu}

          color="inherit"

        >

          <MenuIcon />

        </IconButton>

        <Menu

          id="menu-appbar"

          anchorEl={anchorElNav}

          anchorOrigin={{

            vertical: 'bottom',

            horizontal: 'left',

          }}

          keepMounted

          transformOrigin={{

            vertical: 'top',

            horizontal: 'left',

          }}

          open={Boolean(anchorElNav)}

          onClose={handleCloseNavMenu}

        >

          {pages.map((page) => (

            <MenuItem key={page} onClick={handleCloseNavMenu}>

              <NavLink to={'/' + page.replace(/\s/g, '').toLowerCase()}>{page}</NavLink>

            </MenuItem>

          ))}

        </Menu>

      </Box>

      <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

        {pages.map((page) => (

          <Button

            key={page}

            onClick={handleCloseNavMenu}

            sx={{ my: 2, color: 'white', display: 'block' }}>
            <NavLink to={'/' + page.replace(/\s/g, '').toLowerCase()}>{page}</NavLink>

          </Button>

        ))}

      </Box>

    </Toolbar>

  </Container>

</AppBar>
);

}

export default NavBar;