import React, { useContext, useEffect, useRef, useState } from 'react';
import Papa from 'papaparse'
import { useFilePicker } from 'use-file-picker';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Container, Typography, CircularProgress, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, InputLabel, Input, TextField, Button, Dialog } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Context } from './context/context';
import { Taulukko } from './components/Taulukko';
import { Searchresults } from './components/Searchresults';
import { Duplicates } from './components/Duplicates';
import { Haku } from './components/Haku';
import { Duplikaattihaku } from './components/Duplikaattihaku';
import { Ohje } from './components/Ohje';

interface Data {
  data : any[]
  errors : any[]
  meta : any
}

function App() {
  const { paketti, setPaketti, setSearchResults, searchResults, duplicates, setDuplicates, lisaPaketti, setLisaPaketti } = useContext(Context)
  const hakuehtoRef : any = useRef<any>();
  const [hakuehto, setHakuEhto] = useState<string>();
  const [openFileSelector, { plainFiles, loading }] = useFilePicker({
    accept: '.csv',
  })
  ;

  useEffect(() => {
    if (plainFiles.length > 0)
    {
      Papa.parse(plainFiles[0], {header : true, complete: (results : Papa.ParseResult<Data | undefined>) => {setPaketti([...paketti, {data : results, tiedostonimi : plainFiles[0].name}])}})
    }
  }, [plainFiles])

  
  const testausFunktio = async () => {
    await openFileSelector();
  }

  if (loading) {
    return <CircularProgress/>;
  }

  return (
    <Container sx={{width:"960px"}}>
      <Button variant='outlined' fullWidth sx={{marginRight:"10px"}} onClick={() => testausFunktio()}>Lisää tiedosto</Button>
      {
        (paketti.length > 0)
        ? <Duplikaattihaku/>
        : <></>
      }

      { (paketti.length > 0)
      ?
      <>
      <Haku/>
      {(searchResults.length > 0)
      ? <Searchresults />
      :(duplicates.length > 0)
      ? <Duplicates/>
      : <Taulukko />
      }
      </> 
      : <Typography>Aloita lisäämällä yksi tai useampi .csv-tiedosto. Maltathan hetken! Suurella rivimäärällä lataus voi kestää.</Typography>
      }
    <Ohje/>
    </Container>
  );
}

export default App;
