
import React from 'react'
import { Container, Typography } from '@mui/material';
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
      <Container>
        <Typography variant="title" color="primary">
          Información General de Envío
          <Search />
        </Typography>
        <HeaderDetail/>
        <TimeLine />
        <Tabs />
        <SectionAccordion />
      </Container>
    </div>
  )
}

export default Detail