import React from 'react';
import IconButton from '@mui/material/IconButton';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveClients from './../components/removeClient';

const NavBar = () => {
  return (
    <div>
        <IconButton color="info">
          <VisibilityRoundedIcon fontSize="medium" />
        </IconButton>
        <IconButton color="secondary">
          <EditSharpIcon fontSize="medium" />
        </IconButton>
        <IconButton color="warning" onClick={RemoveClients}>
          <DeleteIcon fontSize="medium" />
        </IconButton>
    </div >
  )
}

export default NavBar;