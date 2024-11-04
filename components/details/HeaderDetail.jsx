"use client";

import React, { useContext } from 'react';
import { createContextApi } from '@/context/createContextApi';

import Grid from '@mui/material/Grid2';
import { Typography, IconButton, Button } from '@mui/material';
import { Error, Link } from '@mui/icons-material';

const HeaderDetail = () => {
  const { guide, guides } = useContext(createContextApi);

  return (
    <>
      <Grid className="header" container spacing={3} rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 8 }} className="header__subtitle">
          <Typography variant="subtitle" color="secondary">
            Guía nivel 1:
            <span className='header__subtitle__text'>{guide} </span>
            <IconButton size="large" aria-label="title"
              aria-controls="title" aria-haspopup="true"
              className='' >
              <Link className='detail__icon' color='secondary' />
            </IconButton>
          </Typography>
          <Typography variant="subtitle" color="secondary">
            Unidades:
            <span className='header__subtitle__text'>{(guides.total_unidades) ? guides.total_unidades : 0} </span>
          </Typography>
        </Grid>

        <Grid size={3}>
          <Typography sx={{ color: 'text.primary', fontSize: 14 }}
            className='header__title__text'>
            Macroestado:
            <span className='header__subtitle__text__second'> N/A </span>
          </Typography>

          <Typography sx={{ color: 'text.primary', fontSize: 14 }}
            className='header__title__text'>
            Estado Tracking Guía:
            <span className='header__subtitle__text__second'> N/A </span>
              <Error className='detail__icon' color='orange' />
          </Typography>
        </Grid>

        <Grid size={1} >
          <Button type="button" className="header__buttons bg__button" fullWidth>
            <span>Ver Guía Digital</span>
          </Button>
        </Grid>
      </Grid>
    </>
  )

}

export default HeaderDetail