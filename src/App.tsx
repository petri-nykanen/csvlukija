import { useContext, useEffect, useRef, useState } from 'react';
import Papa from 'papaparse'
import { useFilePicker } from 'use-file-picker';
import { Container, Typography, CircularProgress,  Button,} from '@mui/material';
import { Context } from './context/context';
import { Taulukko } from './components/Taulukko';
import { Searchresults } from './components/Searchresults';
import { Duplicates } from './components/Duplicates';
import { Haku } from './components/Haku';
import { Duplikaattihaku } from './components/Duplikaattihaku';
import { Ohje } from './components/Ohje';
import { Footer } from './components/Footer';

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
    return (
    <Container sx={{textAlign:"center", margin:"auto", marginTop:"20%"}}>
    <CircularProgress/>
    </Container>)
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
      : <Typography textAlign={'center'}>
        Tämä sovellus lukee syötetyt CSV-tiedostot ja palauttaa ne näkymään taulukkomuodossa.<br></br>
        Näkymässä voidaan etsiä taulukosta hakusanalla tai etsiä samankaltaiset rivit.<br></br>
        Sovellusta käytetään pääasiassa lääkevalikoimien vertailuun.<br></br>
        <br></br>
        <b>Duplikaattirivien vertailu toteutuu sarakekohtaisesti, eli jotta tämä toimisi oikein, tulee sarakkeiden olla alkuperäisissä CSV-taulukoissa samoissa kohdissa. Eli esim. Nimi - Tuotenumero - Varasto järjestys tulee olla kaikissa syötetyissä tiedostoissa.</b>
        <br></br>
        <br></br>
        Aloita lisäämällä yksi tai useampi .csv-tiedosto. Maltathan hetken! Suurella rivimäärällä lataus voi kestää.</Typography>
      }
    <Ohje/>
    <Footer/>
    </Container>
  );
}

export default App;
