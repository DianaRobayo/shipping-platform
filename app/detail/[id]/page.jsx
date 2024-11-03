
import React from 'react'
import { Container, Typography, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
import Navigation from "@/components/Navigation";
import HeaderDetail from '@/components/details/HeaderDetail';
import TimeLine from "@/components/details/TimeLine";
import Tabs from "@/components/details/Tabs";
import SectionAccordion from "@/components/details/SectionAccordion";

const Detail = ({ params }) => {
  const { id } = React.use(params);
  console.log('param', id)
  return (
    <div>
      <Navigation />
      <Container className="detail">
        <Typography className="detail__title" variant="title" color="secondary">
          Información General de Envío
          <IconButton size="large" aria-label="title"
            aria-controls="title" aria-haspopup="true"
            className='button__user' >
            <Search className="detail__icon" color="black"
              sx={{ fontSize: 18, background: 'terciary' }} />
          </IconButton>
        </Typography>
        <HeaderDetail />
        <TimeLine />
        <Tabs />
        <SectionAccordion />
      </Container>
    </div>
  )
}

export default Detail