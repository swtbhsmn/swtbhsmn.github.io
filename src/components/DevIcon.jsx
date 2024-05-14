import { Box, Typography } from '@mui/material'
import React from 'react'

export default function DevIcon({label,icon,size=20,...restProps}) {
  return (
   <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
     <i className={`devicon-${icon}-plain colored cbp-ig-icon`} style={{fontSize:size}}></i>
     <Typography {...restProps}>{label}</Typography>
   </Box>
  )
}
