import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';

import GenesisAside from '../Pages/Collection/GenesisAside';

function SecondPage() {
  
  const history = useHistory();
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    history.push({ GenesisAside });
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Modal Title</DialogTitle>
        <DialogContent>
          <p>Modal Content</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button onClick={handleClose} color="primary">
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SecondPage;
