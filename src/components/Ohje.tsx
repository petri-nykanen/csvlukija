import { Dialog, DialogContent, DialogActions, DialogContentText, DialogTitle } from '@mui/material'
import React, { useContext } from 'react'
import { Context } from '../context/context'

export const Ohje : React.FC = () : React.ReactElement => {

    const { avaus, setAvaus } = useContext(Context)

  return (
    <Dialog open={avaus.avaa} onClose={() => setAvaus({avaa : false, ohjeNro : 0})}>
    <DialogTitle>Ohje</DialogTitle>
    <DialogContent>
      {
        (avaus.ohjeNro === 1)
        ?<DialogContentText>
          Duplikaattifiltteri käy läpi syötetyt tiedostot ja palauttaa näkymään kaikki samanlaiset rivit.
          <br/>
          <br/>
          <b>Tuotenumero / VNR</b> — Palauttaa kaikki rivit, joissa on sama tuotenumero.
          <br/>
          <br/>
          <b>Tuotenumero (TARKKA)</b> — Palauttaa kaikki rivit, jossa koko tuotenimirivi on <b>täsmälleen</b> samanlainen. Esimerkiksi, "Burana 600mg 10 tabletti" ja "Burana 600mg 10 tabl" ei tuottaisi tulosta.
          <br/>
          <br/>
          <b>Tuotenumero (Rivin 3 ensimmäistä sanaa)</b> — Palauttaa kaikki rivit, jossa rivin 2 ensimmäistä sanaa ovat samanlaiset. Esimerkiksi "Burana 600 mg 100 tabl" ja "Burana 600 mg 50 tabl" tuottaisi tuloksen, koska molemmista löytyvät sanat "Burana 600 mg"
        </DialogContentText>
        :(avaus.ohjeNro === 2)
        ?<DialogContentText>
          Voit hakea millä tahansa sanalla tai kirjainyhdistelmällä, jolloin hakutuloksiin palautuu kaikki rivit, josta kyseinen kirjainsarja löytyy.
          <br/>
          <br/>
          Esimerkiksi "ran" haku palauttaisi tuloksiin muun muassa Buranan.
          <br/>
          <br/>
          Jos duplikaattifiltteröinti on päällä, voit myös rajata tuloksia tällä haulla.
        </DialogContentText>
        :<></>
      }
    </DialogContent>
    <DialogActions>
      
    </DialogActions>
    </Dialog>
  )
}
