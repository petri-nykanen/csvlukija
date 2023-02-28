import { Typography } from '@mui/material'

export const Footer = () => {
  return (
    <Typography
    fontSize={10}
    paddingTop={10}
    paddingBottom={3}
    textAlign={'center'}
    >
        Petri Nykänen {new Date().getFullYear()}{<br></br>}
        petri.nykaenen@gmail.com
    </Typography>
  )
}
