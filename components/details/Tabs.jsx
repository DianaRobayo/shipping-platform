"use client";

import React, { useContext, useState } from 'react'
import { createContextApi } from '@/context/createContextApi';

import { Box, Tab, Paper, styled, Typography } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Grid from '@mui/material/Grid2';

const Tabs = () => {

  const { guides, sourceTerminal, destinationTerminal, loadingGuide, errorGuide } = useContext(createContextApi);
  const [value, setValue] = useState('1');
  // console.log('tabs', errorGuide)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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


  if (loadingGuide) {
    return (
      <Box sx={{ display: 'flex' }}>
        <LinearProgress />
      </Box>
    )
  } else {
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

          <TabPanel value="1" sx={{ color: 'black' }}>
            <Box sx={{ width: '100%' }}>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid size={2}>
                  <Item>Cliente:
                    <Typography variant="body1">
                      Nit: {(guides.cliente?.nit) ? guides.cliente?.nit : 'Sin información'}
                    </Typography>
                    <Typography variant="body1">
                      {(guides.cliente?.razon_social) ? guides.cliente?.razon_social : 'Sin información'}
                    </Typography>
                  </Item>
                </Grid>

                <Grid size={3}>
                  <Item>Remitente:
                    <Typography variant="body1">
                      {(guides.remitente?.nombre) ? guides.remitente?.nombre : 'Sin información'}
                    </Typography>
                    <Typography variant="body1">
                      {(guides.remitente?.zonificacion?.direccion) ? guides.remitente?.zonificacion?.direccion : 'Sin información'}
                    </Typography>
                  </Item>
                </Grid>

                <Grid size={3}>
                  <Item>Destinatario:
                    <Typography variant="body1">
                      {(guides.destinatario?.nombre) ? guides.destinatario?.nombre : 'Sin información'}
                    </Typography>
                    <Typography variant="body1">
                      {(guides.destinatario?.zonificacion?.direccion) ? guides.destinatario?.zonificacion?.direccion : 'Sin información'}
                    </Typography>
                  </Item>
                </Grid>

                <Grid size={2}>
                  <Item>Terminal Origen:
                    <Typography variant="body1">
                      {sourceTerminal}
                    </Typography>
                  </Item>
                </Grid>

                <Grid size={2}>
                  <Item>Terminal Destino:
                    <Typography variant="body1">
                      {destinationTerminal}
                    </Typography>
                  </Item>
                </Grid>

                <Grid size={2}>
                  <Item>Nivel/Servicio:
                    {(guides.servicio?.descripcion) ? guides.servicio?.descripcion : 'Sin información'}
                  </Item>
                </Grid>

                <Grid size={3}>
                  <Item>Teléfono Remitente:
                    {(guides.remitente?.telefono) ? guides.remitente?.telefono : 'Sin información'}
                  </Item>
                </Grid>

                <Grid size={3}>
                  <Item>Teléfono Destinatario:
                    {(guides.destinatario?.telefono) ? guides.destinatario?.telefono : ' Sin información'}
                  </Item>
                </Grid>

                <Grid size={2}>
                  <Item>Ciudad Origen:
                    {(guides.remitente?.zonificacion?.ciudad) ? guides.remitente?.zonificacion?.ciudad : 'Sin información'}
                  </Item>
                </Grid>

                <Grid size={2}>
                  <Item>Ciudad Destino:
                    {(guides.destinatario?.zonificacion?.ciudad) ? guides.destinatario?.zonificacion?.ciudad : 'Sin información'}
                  </Item>
                </Grid>

                <Grid size={2}>
                  <Item>Observaciones:
                    {(guides.observaciones) ? guides.observaciones : 'Sin información'}
                  </Item>
                </Grid>
                <Grid size={3}>
                  <Item>Producto:
                    {(guides.producto?.abreviado_producto) ? guides.producto?.abreviado_producto : 'Sin información'}
                  </Item>
                </Grid>
                <Grid size={3}>
                  <Item>Contenido:
                    {(guides.contenido) ? guides.contenido : 'Sin información'}
                  </Item>
                </Grid>
                <Grid size={2}>
                  <Item>Referencia:
                    {(guides.referencia) ? guides.referencia : 'Sin información'}
                  </Item>
                </Grid>
              </Grid>
            </Box>

          </TabPanel>
          <TabPanel value="2" sx={{ color: 'black' }}>Información de facturación</TabPanel>
          <TabPanel value="3" sx={{ color: 'black' }}>Novedades y soluciones</TabPanel>
          <TabPanel value="4" sx={{ color: 'black' }}>Información de entrega</TabPanel>
        </TabContext>
      </Box>
      </div>
    )
  }
}

export default Tabs