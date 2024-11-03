"use client";

import React, { useState, useContext } from 'react'
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem }
  from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { createContextApi } from '@/context/createContextApi';
import { Apps, Search } from '@mui/icons-material';

const Navigation = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorUser, setAnchorUser] = useState(null);
  const { terminal, constUser } = useContext(createContextApi) || {};;
  // console.log('navigation', terminal)
  // console.log('constUser', constUser)

  const handleList = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuUser = (event) => {
    setAnchorUser(event.currentTarget);
  };

  const handleCloseUser = () => {
    setAnchorUser(null);
  };

  return (
    <div>
      <AppBar position="static" sx={{
        backgroundColor: 'background.default', color: 'background.color'
      }}>
        <Toolbar>
          <Link href="/">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
          </Link>
          <img width="120" height="80" src="https://coordinadora.com/wp-content/uploads/2023/03/logo-simbolo-coordinadora.svg" className="" alt="Coordinadora" decoding="async" />
          <Typography variant="text" style={{ flexGrow: 1 }}>
            Tracking
          </Typography>

          <Button color="inherit" onClick={handleList} aria-controls="menu-terminal">
            <Link href="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
              Terminal:
            </Link>
          </Button>
          <Menu
            id="menu-terminal"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose} >
            {terminal?.map(dato => (
              <MenuItem onClick={handleClose} key={dato.codigo_terminal} >
                <Typography sx={{ textAlign: 'center' }}>{dato.abreviado}</Typography>
              </MenuItem>
            ))}
          </Menu>


          <IconButton size="large" aria-label="menu user"
            aria-controls="menu-user" aria-haspopup="true"
            onClick={handleMenuUser} color="inherit">
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-user"
            anchorEl={anchorUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorUser)}
            onClose={handleCloseUser} >
            {constUser?.map(dato => (
              <MenuItem onClick={handleCloseUser} key={dato.id} >
                <Typography sx={{ textAlign: 'center' }}>{dato.title}</Typography>
              </MenuItem>
            ))}
          </Menu>

          <IconButton size="large" aria-label="menu search"
            aria-controls="menu-search" aria-haspopup="true"
            color="inherit">
            <Search />
          </IconButton>

          <IconButton size="large" aria-label="menu app"
            aria-controls="menu-app" aria-haspopup="true"
            color="inherit">
            <Apps />
          </IconButton>

        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navigation