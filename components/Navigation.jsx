"use client";

import React, { useState, useContext } from 'react'
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem }
  from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { createContextApi } from '@/context/createContextApi';

const Navigation = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { terminal, constUser } = useContext(createContextApi) || {};;
  // console.log('navigation', terminal)
  // console.log('constUser', constUser)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Mi Aplicación
          </Typography>
          <Button color="inherit" onClick={handleMenu} aria-controls="menu-terminal">
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Terminal:
            </Link>
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
                  {dato.abreviado}
                </MenuItem>
              ))}
            </Menu>
          </Button>

          <Button color="inherit">
            <Link href="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
              Acerca
            </Link>
          </Button>

          <div>
            <IconButton size="large" aria-label="account of current user"
              aria-controls="menu-appbar" aria-haspopup="true"
              onClick={handleMenu} color="inherit">
              <AccountCircle />
            </IconButton>
            {/* <Menu
              id="menu-appbar"
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
              {data?.constUser?.map(dato => (
                <MenuItem onClick={handleClose} key={dato.id} >
                  {dato.title}
                </MenuItem>
              ))}
            </Menu> */}
          </div>
          <Button color="inherit">
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Contacto
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navigation
