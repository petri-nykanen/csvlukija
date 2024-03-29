import { Accordion, AccordionSummary, Typography, AccordionDetails, Button } from '@mui/material'
import React, { useContext } from 'react'
import { Context } from '../context/context'

export const Duplikaattihaku : React.FC = () : React.ReactElement => {

    const { paketti, setSearchResults, duplicates, setDuplicates, setAvaus,} = useContext(Context)
    
  return (
    <Accordion>
    <AccordionSummary
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography>Duplikaattifiltterit</Typography>
    </AccordionSummary>
    <AccordionDetails>
    <Button onClick={() => setAvaus({avaa : true, ohjeNro : 1})}>Ohje</Button>
    {
        (paketti.length > 0)
        ?<Button variant='contained' sx={{marginRight:"10px", marginTop:"10px", display:"block"}} onClick={() => {
          setSearchResults([])
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
          setSearchResults([])
          let array1 = paketti.map((tieto : any, idx : number) => {
          return (tieto.data.data.map((sisalto : any) => {return [tieto.tiedostonimi, sisalto.Tuote, sisalto.Tuotenimi]}))
          })
  
          let nimet = Array.from(array1.flat(), (el : any) => el["2"])
          let filtteroitava = Array.from(array1.flat(), (el : any) => el["2"])
          let setti = Array.from(new Set(nimet))
  
          for (let i = 0; i < setti.length; i++){
            filtteroitava.splice(filtteroitava.indexOf(setti[i]), 1)
          }

          setDuplicates(array1.flat().filter((el : any) => new Set(filtteroitava).has(el["2"]) === true))
  
        }}>Tuotenimi (tarkka)</Button>
        : <></>
      }

    {
      (paketti.length > 0)
      ?<Button variant='contained' sx={{marginRight:"10px", marginTop:"10px", display:"block"}} onClick={() => {
        setSearchResults([])
        let array1 = paketti.map((tieto : any, idx : number) => {
        return (tieto.data.data.map((sisalto : any) => {return [tieto.tiedostonimi, sisalto.Tuote, (sisalto?.Tuotenimi?.split(" ")[0])]}))
        })

        let nimet = Array.from(array1.flat(), (el : any) => el["2"])
        let filtteroitava = Array.from(array1.flat(), (el : any) => el["2"])
        let setti = Array.from(new Set(nimet))

        for (let i = 0; i < setti.length; i++){
          filtteroitava.splice(filtteroitava.indexOf(setti[i]), 1)
        }

        setDuplicates(array1.flat().filter((el : any) => new Set(filtteroitava).has(el["2"]) === true))

      }}>Tuotenimi (rivin ensimmäinen sana)</Button>
      : <></>
    }

{
        (paketti.length > 0)
        ?<Button variant='contained' sx={{marginRight:"10px", marginTop:"10px", display:"block"}} onClick={() => {
          setSearchResults([])
          let array1 = paketti.map((tieto : any, idx : number) => {
          return (tieto.data.data.map((sisalto : any) => {return [tieto.tiedostonimi, sisalto.Tuote, (sisalto?.Tuotenimi?.split(" ")[0] + " " + sisalto?.Tuotenimi?.split(" ")[1])]}))
          })
  
          let nimet = Array.from(array1.flat(), (el : any) => el["2"])
          let filtteroitava = Array.from(array1.flat(), (el : any) => el["2"])
          let setti = Array.from(new Set(nimet))
  
          for (let i = 0; i < setti.length; i++){
            filtteroitava.splice(filtteroitava.indexOf(setti[i]), 1)
          }

          setDuplicates(array1.flat().filter((el : any) => new Set(filtteroitava).has(el["2"]) === true))
  
        }}>Tuotenimi (rivin 2 ensimmäistä sanaa)</Button>
        : <></>
      }

{
        (paketti.length > 0)
        ?<Button variant='contained' sx={{marginRight:"10px", marginTop:"10px", display:"block"}} onClick={() => {
          setSearchResults([])
          let array1 = paketti.map((tieto : any, idx : number) => {
          return (tieto.data.data.map((sisalto : any) => {return [tieto.tiedostonimi, sisalto.Tuote, (sisalto?.Tuotenimi?.split(" ")[0] + " " + sisalto?.Tuotenimi?.split(" ")[1] + " " + sisalto?.Tuotenimi?.split(" ")[3])]}))
          })
  
          let nimet = Array.from(array1.flat(), (el : any) => el["2"])
          let filtteroitava = Array.from(array1.flat(), (el : any) => el["2"])
          let setti = Array.from(new Set(nimet))
  
          for (let i = 0; i < setti.length; i++){
            filtteroitava.splice(filtteroitava.indexOf(setti[i]), 1)
          }

          setDuplicates(array1.flat().filter((el : any) => new Set(filtteroitava).has(el["2"]) === true))
  
        }}>Tuotenimi (rivin 3 ensimmäistä sanaa)</Button>
        : <></>
      }
    </AccordionDetails>
  </Accordion>
  )
}
