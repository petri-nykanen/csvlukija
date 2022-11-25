import { Dialog, DialogContent, DialogActions, DialogContentText, DialogTitle } from '@mui/material'
import React, { useContext } from 'react'
import { Context } from '../context/context'

export const Ohje : React.FC = () : React.ReactElement => {

    const { avaus, setAvaus } = useContext(Context)

  return (
    <Dialog open={avaus.avaa} onClose={() => setAvaus({avaa : false, ohjeNro : 0})}>
    <DialogTitle>Ohje</DialogTitle>
    <DialogContent>
        <DialogContentText>
            Tämä on pelkkää testiä
        </DialogContentText>
    </DialogContent>
    <DialogActions>
      
    </DialogActions>
    </Dialog>
  )
}
