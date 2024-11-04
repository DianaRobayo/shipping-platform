"use client";
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { createContextApi } from './createContextApi';

const constUser = [
  { id: "1", title: "Mi cuenta", logo: "Task 1 description" },
  { id: "2", title: "Cerrar sesión", logo: "Task 2 logo" },
  { id: "3", title: "Soporte", logo: "Task 2 logo" },
  { id: "4", title: "Impresoras", logo: "Task 2 logo" }
];

const DataProvider = ({ children, dataTerminal }) => {
  const [terminal, setTerminal] = useState([]);
  const [guide, setGuide] = useState('');
  const [guides, setGuides] = useState([]);
  const [line, setLine] = useState([]);
  const [sourceTerminal, setSourceTerminal] = useState('Sin información');
  const [destinationTerminal, setDestinationTerminal] = useState('Sin información');
  const [loadingGuide, setLoadingGuide] = useState(true);
  const [errorGuide, setErrorGuide] = useState(null);
  const [loadingLine, setLoadingLine] = useState(true);
  const [errorLine, setErrorLine] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    let ordered = [];
    if (dataTerminal) {
      const filteredData = dataTerminal?.data?.filter(item => item.abreviado !== '' && item.abreviado !== null);
      if (filteredData) {
        filteredData.map(dato => {
          dato.abreviado = `${dato.codigo_terminal} - ${dato.abreviado}`;
        });
        // Se ordena la información según el codigo terminal
        ordered = [...filteredData].sort((a, b) => a.codigo_terminal - b.codigo_terminal);
      }
      setTerminal(ordered);
    } else {
      setTerminal([]);
    }
  }, []);

  const fetchGuides = async (param) => {
    try {
      setLoadingGuide(true);
      setGuide(param);
      if (param !== '' && param !== null) {
        fetchTimeLine(param);
        const dataGuides = await axios.get(`https://apiv2-test.coordinadora.com/cm-consultar-guia-ms/guia/${param}`);
        if (dataGuides) {
          setLoadingGuide(false);
          setGuides(dataGuides.data.data);
          processDataGuides(dataGuides.data.data);
          setErrorGuide(null);
        }
        if (dataGuides.data.isError) {
          setErrorGuide(dataGuides.statusText);
          setGuides([]);
        }
      }
    } catch (error) {
      setGuide('');
      setGuides([]);
      setErrorGuide(error.message);
    }
  };

  const processDataGuides = async (data) => {
    try {
      setLoading(true);
      if (data !== '' && data !== null) {
        let zonSource = data?.remitente?.zonificacion;
        let zonDestination = data?.destinatario?.zonificacion;

        if (zonSource?.codigo_terminal !== null
          && zonSource?.codigo_terminal !== ''
          && zonSource?.nombre_terminal !== null
          && zonSource?.nombre_terminal !== '') {
          setSourceTerminal(zonSource?.codigo_terminal + '-' + zonSource?.nombre_terminal);
        }
        if (zonDestination?.codigo_terminal !== null
          && zonDestination?.codigo_terminal !== ''
          && zonDestination?.nombre_terminal !== null
          && zonDestination?.nombre_terminal !== '') {
          setDestinationTerminal(zonDestination?.codigo_terminal + '-' + zonDestination?.nombre_terminal);
        }
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const fetchTimeLine = async (param) => {
    try {
      const body = {
        "guias": [param]
      }

      let sortByDate = [];
      setLoadingLine(true);
      if (body) {
        const dataLine = await axios.post(`https://api.coordinadora.com/cm-tracking-consulta-test/api/v1/remisiones`, body);

        if (dataLine) {
          // Se ordena segun la fecha
          sortByDate = [...dataLine.data.data[0].estado].sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
          setLine(sortByDate);
          setLoadingLine(false);
          setErrorLine(null);
        }

        if (dataLine.data.isError) {
          setLine([]);
          setErrorLine(dataLine.statusText);
        }
      }
    } catch (error) {
      setLine([]);
      setErrorLine(error.message);
    }
  };

  return (
    <createContextApi.Provider value={{
      terminal, fetchGuides, guides, loadingGuide, errorGuide, guide,
      loading, error, constUser, sourceTerminal, destinationTerminal,
      line, loadingLine, errorLine
    }}>
      {/* {props.children} */}
      {children}
    </createContextApi.Provider>
  )
}

export default DataProvider



