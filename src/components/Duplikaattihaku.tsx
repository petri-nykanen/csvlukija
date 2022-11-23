import { Accordion, AccordionSummary, Typography, AccordionDetails, Button } from '@mui/material'
import React, { useContext } from 'react'
import { Context } from '../context/context'

export const Duplikaattihaku : React.FC = () : React.ReactElement => {

    const { paketti, setPaketti, setSearchResults, searchResults, duplicates, setDuplicates, lisaPaketti, setLisaPaketti } = useContext(Context)
    
  return (
    <Accordion>
    <AccordionSummary
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography>Duplikaattihaut</Typography>
    </AccordionSummary>
    <AccordionDetails>
    {
        (paketti.length > 0)
        ?<Button variant='contained' sx={{marginRight:"10px", marginTop:"10px", display:"block"}} onClick={() => {

          let array1 = paketti.map((tieto : any, idx : number) => {
          return (tieto.data.data.map((sisalto : any) => {return [tieto.tiedostonimi, sisalto.Tuote, sisalto.Tuotenimi]}))
          })
  
          let nimet = Array.from(array1.flat(), (el : any) => el["1"])
          let filtteroitava = Array.from(array1.flat(), (el : any) => el["1"])
          let setti = Array.from(new Set(nimet))
  
          for (let i = 0; i < setti.length; i++){
            filtteroitava.splice(filtteroitava.indexOf(setti[i]), 1)
          }
  
          setDuplicates(array1.flat().filter((el : any) => new Set(filtteroitava).has(el["1"]) === true))
  
        }}>Tuotenumero / VNR</Button>
        : <></>
      }

{
        (paketti.length > 0)
        ?<Button variant='contained' sx={{marginRight:"10px", marginTop:"10px", display:"block"}} onClick={() => {

          let array1 = paketti.map((tieto : any, idx : number) => {
          return (tieto.data.data.map((sisalto : any) => {return [tieto.tiedostonimi, sisalto.Tuote, sisalto.Tuotenimi]}))
          })
  
          let nimet = Array.from(array1.flat(), (el : any) => el["2"])
          let filtteroitava = Array.from(array1.flat(), (el : any) => el["2"])
          let setti = Array.from(new Set(nimet))
  
          for (let i = 0; i < setti.length; i++){
            filtteroitava.splice(filtteroitava.indexOf(setti[i]), 1)
          }

          console.log(nimet)

          setDuplicates(array1.flat().filter((el : any) => new Set(filtteroitava).has(el["2"]) === true))
  
        }}>Tuotenimi (tarkka)</Button>
        : <></>
      }
    </AccordionDetails>
  </Accordion>
  )
}
