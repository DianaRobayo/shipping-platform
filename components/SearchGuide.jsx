"use client";

import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { createContextApi } from '@/context/createContextApi';
import { useRouter } from 'next/navigation'
import { Card, CardContent, Typography, FormControl, Container, Input, Button, FormHelperText  } from '@mui/material'
import { DocumentScanner, Search } from '@mui/icons-material';
import Grid from '@mui/material/Grid2';

const SearchGuide = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { fetchGuides } = useContext(createContextApi) || {};
  const [guide, setGuide] = useState("");
  const router = useRouter();

  const sendData = (data) => {
    if (data) {
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
          <Grid size={{ xs: 12 }} >
            <form onSubmit={handleSubmit(sendData)}>
              <FormControl fullWidth	>
                <Grid container alignItems="center" justifyContent="center">
                  <Grid size={{ xs: 12, md: 8 }} className="search__container__box" >
                    <Button type="submit" className="search__container__buttons bg__button" fullWidth>
                      <Search className='search__container__icon' />
                      <span>Guías</span>
                    </Button>
                    <Button type="button" className="search__container__buttons bg__button" fullWidth>
                      <DocumentScanner className='search__container__icon' />
                      <span>Etiqueta</span>
                    </Button>
                  </Grid>
                  <Grid size={{ xs: 12, md: 8 }}>
                    <Input id="my-input" className='search__container__input'
                      aria-describedby="my-helper-text"
                      placeholder="Buscar número de guía ..."
                      {...register("search", {
                        required: true, pattern: {
                          value: /^(?!0)\d+$/,
                          message: "Solo se permiten números."
                        }
                      })}
                      fullWidth />
                    {errors.search && (
                      <FormHelperText error>
                        {errors?.search.message}
                      </FormHelperText>
                    )}
                  </Grid>
                </Grid>
              </FormControl>
              <Grid size={{ xs: 12, md: 12 }}
                className="search__container__link">
                <a href='/'> Buscar múltiples guías → </a>
              </Grid>
            </form>
          </Grid>
        </Container>
      </Card>
    </>
  )
}

export default SearchGuide