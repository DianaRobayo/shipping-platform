"use client";

import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { createContextApi } from '@/context/createContextApi';
import { useRouter } from 'next/navigation'
import { Card, CardContent, Box, Typography, FormControl, Container, Input, Button } from '@mui/material'
import { DocumentScanner, Search } from '@mui/icons-material';
import Grid from '@mui/material/Grid2';

const SearchGuide = () => {
  const { register, handleSubmit } = useForm();
  const { fetchGuides } = useContext(createContextApi);
  const [guide, setGuide] = useState("");
  const router = useRouter();

  const sendData = (data) => {
    console.log('getGuide', data)
    if (data) {
      console.log('getGuide', data.search)
      fetchGuides(data.search);
      setGuide(data.search);
      router.push(`./detail/${data.search}`);
    }
  }

  return (
    <>
      <Card className='search'>
        <CardContent className="search__title">
          <Typography variant="subtitle" color="primary">
            Selecciona la consulta que quieres realizar
          </Typography>
        </CardContent>
        <Container className='search__container'>
          <Grid container spacing={2}>
            <form onSubmit={handleSubmit(sendData)}>
              <FormControl>
                <Box className="search__container__box" >
                  <Button type="submit" className="search__container__buttons bg__button" fullWidth>
                    <Search className='search__container__icon' />
                    <span>Guías</span>
                  </Button>
                  <Button type="button" className="search__container__buttons bg__button" fullWidth>
                    <DocumentScanner className='search__container__icon' />
                    <span>Etiqueta</span>
                  </Button>
                </Box>
                <Grid size={{ xs: 12, md: 12 }}>
                  <Input id="my-input" className='search__container__input'
                    aria-describedby="my-helper-text"
                    placeholder="Buscar número de guía ..."
                    {...register("search", { required: true })} />
                </Grid>
              </FormControl>
              <Grid size={{ xs: 12, md: 12 }}
                className="search__container__link">
                <a href='/'> Buscar múltiples guías → </a>
              </Grid>

              {/* <form onSubmit={handleSubmit(sendData)}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <button className="button" type="submit">
                  <Search /> Guías
                </button>
                <button className="" type="button">
                  <DocumentScanner /> Etiqueta
                </button>
              </Box>
              <Grid size={{ xs: 12, md: 12 }}>
                <input
                  {...register("search", { required: true })}
                  type="text"
                  placeholder="Buscar número de guía ..." />
              </Grid>

              <Grid size={{ xs: 12, md: 12 }}>
                <a href='/'> Buscar múltiples guías -- </a>
              </Grid> */}


            </form>
          </Grid>
        </Container>

      </Card>
    </>
  )
}

export default SearchGuide