"use client";

import React, { useContext } from 'react';
import { createContextApi } from '@/context/createContextApi';

import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';
import { Error, Link } from '@mui/icons-material';

const HeaderDetail = () => {
  const { guide, guides } = useContext(createContextApi);
  console.log('fuide', guide)


  return (
    <>
      <Grid container spacing={3} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={9}>
          <Typography variant="subtitle" color="primary">
            Guía nivel 1: {guide} <Link />
          </Typography>
          <Typography variant="subtitle" color="primary">
            Unidades: {(guides.total_unidades) ? guides.total_unidades : 0}
          </Typography>
        </Grid>

        <Grid size={2}>
          <Typography sx={{ color: 'text.primary', fontSize: 14 }} >
            Macroestado:
          </Typography>
          <Typography sx={{ color: 'text.primary', fontSize: 14 }} >
            Estado Tracking Guía: <Error className='' />
          </Typography>
        </Grid>

        <Grid size={1}>
          <Typography sx={{ color: 'text.primary', fontSize: 14 }} >
            Boton
          </Typography>
        </Grid>
      </Grid>
    </>
  )

}

export default HeaderDetail