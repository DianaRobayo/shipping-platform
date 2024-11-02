"use client";

import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { createContextApi } from '@/context/createContextApi';
import { useRouter } from 'next/navigation'
import { Card, CardContent, Box, Typography, FormControl } from '@mui/material'
import Buttons from './Buttons';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

const SearchGuide = () => {
  const { register, handleSubmit } = useForm();
  const { fetchGuides } = useContext(createContextApi);
  const [guide, setGuide] = useState("");
  const router = useRouter();

  const sendData = (data) => {
    if (data) {
      // console.log('getGuide', data.search)
      fetchGuides(data.search);
      setGuide(data.search);
      router.push(`./detail/${data.search}`);
    }
  }

  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
            Word of the Day
          </Typography>

          <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>


        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Buttons type="submit" />
          <Buttons />
        </Box>
        <form onSubmit={handleSubmit(sendData)}>
          <button className="button" type="submit">
            Guías
          </button>
          <button className="button" type="button">
            Etiquetas
          </button>
          <input
            {...register("search", { required: true })}
            type="text"
            placeholder="Buscar número de guía ..." />

          <button className="button" type="button" onClick={e => {
            e.preventDefault();
            router.push(`./detail/${guide}`);
          }}>
            buscar
          </button>

        </form>

        <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
      </Card>
    </>
  )
}

export default SearchGuide