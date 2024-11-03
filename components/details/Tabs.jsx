"use client";

import React, { useContext, useState } from 'react'
import { createContextApi } from '@/context/createContextApi';

import { Box, Tab, Paper, styled, Typography, Alert, Stack, Button } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Grid from '@mui/material/Grid2';
import { FilterNone } from '@mui/icons-material';

const Tabs = () => {

  const { guides, sourceTerminal, destinationTerminal, loadingGuide, errorGuide } = useContext(createContextApi);
  const [value, setValue] = useState('1');
  // console.log('tabs', errorGuide)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const copyContent = async (divid) => {
    try {
      let text = document.getElementById(divid).innerHTML;

      await navigator.clipboard.writeText(text);
      console.log('Content copied to clipboard', text);
    } catch (err) {
      console.log('Failed to copy: ', err);
    }
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));


  return (
    <div>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Información General" value="1" />
              <Tab label="Información de facturación" value="2" />
              <Tab label="Novedades y soluciones" value="3" />
              <Tab label="Información de entrega" value="4" />
            </TabList>
          </Box>
          {
            (loadingGuide) ?
              <Box sx={{ display: 'flex' }}>
                <LinearProgress />
              </Box> : ''
          }
          {
            (errorGuide !== null) ?
              <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="error">
                  {(errorGuide) ? errorGuide : 'Se ha generado un error.'}
                </Alert>
              </Stack> : ''
          }

          <TabPanel value="1" sx={{ color: 'black' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid size={{ xs: 12, sm: 12, md: 2 }}>
                <p className='copy__title'> Cliente: </p>
                <Button startIcon={<FilterNone className='button__copy__icon' />} onClick={() => copyContent('data-nit')}
                  className='button__copy__text'>
                </Button>
                <Typography variant="body1" id="data-nit" className='copy__title__content'>
                  Nit: {(guides.cliente?.nit) ? guides.cliente?.nit : 'Sin información'}
                  {(guides.cliente?.razon_social) ? guides.cliente?.razon_social : 'Sin información'}
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, sm: 12, md: 3 }}>
                <p className='copy__title'> Remitente: </p>
                <Button startIcon={<FilterNone className='button__copy__icon' />} onClick={() => copyContent('data-remitente')}
                  className='button__copy__text'>
                </Button>
                <Typography variant="body1" id="data-remitente" className='copy__title__content'>
                  {(guides.remitente?.nombre) ? guides.remitente?.nombre : 'Sin información'}
                  {(guides.remitente?.zonificacion?.direccion) ? guides.remitente?.zonificacion?.direccion : 'Sin información'}
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, sm: 12, md: 3 }}>
                <p className='copy__title'> Destinatario: </p>
                <Button startIcon={<FilterNone className='button__copy__icon' />} onClick={() => copyContent('data-destinatario')}
                  className='button__copy__text'>
                </Button>
                <Typography variant="body1" id="data-destinatario" className='copy__title__content'>
                  {(guides.destinatario?.nombre) ? guides.destinatario?.nombre : 'Sin información'}
                  {(guides.destinatario?.zonificacion?.direccion) ? guides.destinatario?.zonificacion?.direccion : 'Sin información'}
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, sm: 12, md: 2 }}>
                <p className='copy__title'> Terminal Origen: </p>
                <Button startIcon={<FilterNone className='button__copy__icon' />} onClick={() => copyContent('terminal-origen')}
                  className='button__copy__text'>
                </Button>
                <Typography variant="body1" id="terminal-origen" className='copy__title__content'>
                  {sourceTerminal}
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, sm: 12, md: 2 }}>
                <p className='copy__title'> Terminal Destino: </p>
                <Button startIcon={<FilterNone className='button__copy__icon' />} onClick={() => copyContent('terminal-destino')}
                  className='button__copy__text'>
                </Button>
                <Typography variant="body1" id="terminal-destino" className='copy__title__content'>
                  {destinationTerminal}
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, sm: 12, md: 2 }}>
                <p className='copy__title'> Nivel/Servicio: </p>
                <Button startIcon={<FilterNone className='button__copy__icon' />} onClick={() => copyContent('nivel')}
                  className='button__copy__text'>
                </Button>
                <Typography variant="body1" id="nivel" className='copy__title__content'>
                  {(guides.servicio?.descripcion) ? guides.servicio?.descripcion : 'Sin información'}
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, sm: 12, md: 3 }}>
                <p className='copy__title'> Teléfono Remitente: </p>
                <Button startIcon={<FilterNone className='button__copy__icon' />} onClick={() => copyContent('tel-remitente')}
                  className='button__copy__text'>
                </Button>
                <Typography variant="body1" id="tel-remitente" className='copy__title__content'>
                  {(guides.remitente?.telefono) ? guides.remitente?.telefono : 'Sin información'}
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, sm: 12, md: 3 }}>
                <p className='copy__title'> Teléfono Destinatario: </p>
                <Button startIcon={<FilterNone className='button__copy__icon' />} onClick={() => copyContent('tel-destino')}
                  className='button__copy__text'>
                </Button>
                <Typography variant="body1" id="tel-destino" className='copy__title__content'>
                  {(guides.destinatario?.telefono) ? guides.destinatario?.telefono : ' Sin información'}
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, sm: 12, md: 2 }}>
                <p className='copy__title'> Ciudad Origen: </p>
                <Button startIcon={<FilterNone className='button__copy__icon' />} onClick={() => copyContent('ciudad-origen')}
                  className='button__copy__text'>
                </Button>
                <Typography variant="body1" id="ciudad-origen" className='copy__title__content'>
                  {(guides.remitente?.zonificacion?.ciudad) ? guides.remitente?.zonificacion?.ciudad : 'Sin información'}
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, sm: 12, md: 2 }}>
                <p className='copy__title'> Ciudad Destino: </p>
                <Button startIcon={<FilterNone className='button__copy__icon' />} onClick={() => copyContent('ciudad-destino')}
                  className='button__copy__text'>
                </Button>
                <Typography variant="body1" id="ciudad-destino" className='copy__title__content'>
                  {(guides.destinatario?.zonificacion?.ciudad) ? guides.destinatario?.zonificacion?.ciudad : 'Sin información'}
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, sm: 12, md: 2 }}>
                <p className='copy__title'> Observaciones: </p>
                <Button startIcon={<FilterNone className='button__copy__icon' />} onClick={() => copyContent('observacion')}
                  className='button__copy__text'>
                </Button>
                <Typography variant="body1" id="observacion" className='copy__title__content'>
                  {(guides.observaciones) ? guides.observaciones : 'Sin información'}
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, sm: 12, md: 3 }}>
                <p className='copy__title'> Producto: </p>
                <Button startIcon={<FilterNone className='button__copy__icon' />} onClick={() => copyContent('producto')}
                  className='button__copy__text'>
                </Button>
                <Typography variant="body1" id="producto" className='copy__title__content'>
                  {(guides.producto?.abreviado_producto) ? guides.producto?.abreviado_producto : 'Sin información'}
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, sm: 12, md: 3 }}>
                <p className='copy__title'> Contenido: </p>
                <Button startIcon={<FilterNone className='button__copy__icon' />} onClick={() => copyContent('contenido')}
                  className='button__copy__text'>
                </Button>
                <Typography variant="body1" id="contenido" className='copy__title__content'>
                  {(guides.contenido) ? guides.contenido : 'Sin información'}
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, sm: 12, md: 2 }}>
                <p className='copy__title'> Referencia: </p>
                <Button startIcon={<FilterNone className='button__copy__icon' />} onClick={() => copyContent('referencia')}
                  className='button__copy__text'>
                </Button>
                <Typography variant="body1" id="referencia" className='copy__title__content'>
                  {(guides.referencia) ? guides.referencia : 'Sin información'}
                </Typography>
              </Grid>
            </Grid>
          </TabPanel>

          <TabPanel value="2" sx={{ color: 'black' }}>Información de facturación</TabPanel>
          <TabPanel value="3" sx={{ color: 'black' }}>Novedades y soluciones</TabPanel>
          <TabPanel value="4" sx={{ color: 'black' }}>Información de entrega</TabPanel>
        </TabContext>
      </Box>
    </div >
  )


}

export default Tabs