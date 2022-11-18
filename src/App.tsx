import React, { useContext, useEffect, useRef, useState } from 'react';
import Papa from 'papaparse'
import { useFilePicker } from 'use-file-picker';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Container, Typography, CircularProgress, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, InputLabel, Input, TextField, Button } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Context } from './context/context';
import { Taulukko } from './components/Taulukko';
import { Searchresults } from './components/Searchresults';
import { Duplicates } from './components/Duplicates';

interface Data {
  data : any[]
  errors : any[]
  meta : any
}

function App() {
  const { paketti, setPaketti, setSearchResults, searchResults, duplicates, setDuplicates } = useContext(Context)
  const hakuehtoRef : any = useRef<any>();
  const [hakuehto, setHakuEhto] = useState<string>();
  const [openFileSelector, { plainFiles, loading }] = useFilePicker({
    accept: '.csv',
  })
  ;

  useEffect(() => {
    if (plainFiles.length > 0)
    {
      Papa.parse(plainFiles[0], {complete: (results : Papa.ParseResult<Data | undefined>) => {setPaketti([...paketti, {data : results, tiedostonimi : plainFiles[0].name}])}})
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
      <Button variant='contained' sx={{marginRight:"10px"}} onClick={() => testausFunktio()}>Lisää tiedosto</Button>
      {
        (paketti.length > 0)
        ?<Button variant='contained' sx={{marginRight:"10px"}} onClick={() => {

          let array1 = paketti.map((tieto : any, idx : number) => {
          return (tieto.data.data.map((sisalto : any) => {return [tieto.tiedostonimi, sisalto["0"], sisalto["2"]]}))
          })
  
          let nimet = Array.from(array1.flat(), (el : any) => el["1"])
          let filtteroitava = Array.from(array1.flat(), (el : any) => el["1"])
          let setti = Array.from(new Set(nimet))
  
          for (let i = 0; i < setti.length; i++){
            filtteroitava.splice(filtteroitava.indexOf(setti[i]), 1)
          }
  
          setDuplicates(array1.flat().filter((el : any) => new Set(filtteroitava).has(el["1"]) === true))
  
        }}>ETSI DUPLIKAATIT (VNR / TUOTENUMERO)</Button>
        : <></>
      }

{
        (paketti.length > 0)
        ?<Button variant='contained' onClick={() => {

          let array1 = paketti.map((tieto : any, idx : number) => {
          return (tieto.data.data.map((sisalto : any) => {return [tieto.tiedostonimi, sisalto["0"], sisalto["2"]]}))
          })
  
          let nimet = Array.from(array1.flat(), (el : any) => el["2"])
          let filtteroitava = Array.from(array1.flat(), (el : any) => el["2"])
          let setti = Array.from(new Set(nimet))
  
          for (let i = 0; i < setti.length; i++){
            filtteroitava.splice(filtteroitava.indexOf(setti[i]), 1)
          }
  
          setDuplicates(array1.flat().filter((el : any) => new Set(filtteroitava).has(el["2"]) === true))
  
        }}>ETSI DUPLIKAATIT (TUOTENIMI)</Button>
        : <></>
      }

      { (paketti.length > 0)
      ?
      <>
        <FormControl sx={{width:"100%"}}>
        <TextField inputRef={hakuehtoRef} variant="outlined" id="tekstikentta"/>
        <FormLabel id="demo-radio-buttons-group-label">Hakuehto</FormLabel>
            <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="0"
            name="radio-buttons-group"
            onChange={(e) => {setHakuEhto(e.target.value)}}
            >
            <FormControlLabel value="0" control={<Radio />} label="Tuotenumero" />
            <FormControlLabel value="2" control={<Radio />} label="Tuotenimi" />
            </RadioGroup>
            <Button
            sx={{marginBottom:"10px"}}
            variant='contained' onClick={() => setSearchResults(paketti.map((tieto : any, idx : number) => {
        return ([tieto.tiedostonimi, tieto.data.data.filter((nimi : any) => {
          let hakusana = new RegExp(`${hakuehtoRef!.current!.value}`, "i")
          return (hakusana.test(nimi[`${hakuehto}`]))})])
      }))}>HAE </Button>

        </FormControl>
      {(searchResults.length > 0)
      ? <Searchresults />
      :(duplicates.length > 0)
      ? <Duplicates/>
      : <Taulukko />
      }
      </> 
      : <Typography>Aloita lisäämällä yksi tai useampi .csv-tiedosto. Maltathan hetken! Suurella rivimäärällä lataus voi kestää.</Typography>
      }
    </Container>
  );
}

export default App;
