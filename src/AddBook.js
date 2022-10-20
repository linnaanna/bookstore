import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

function AddBook(props) {
    const [open, setOpen] = useState(false);
    const [book, setBook] = useState({author: '', isbn: '', price: '',title: '', year: ''});

    const handleOpen = () => {
        setOpen(true);
      }
    
      const handleClose = () => {
        setOpen(false);
      }

      const handleSave = () => {
        props.addBook(book);
        handleClose();
      }

      const inputChanged = (event) => {
        setBook({...book, [event.target.name]: event.target.value});
      }

  return(
    <div><Button variant="outlined" color="primary" onClick={handleOpen}>
    Add book
  </Button>
  <Dialog open={open}> 
    <DialogTitle>New book</DialogTitle>
    <DialogContent>
    <TextField
            name="author"
            value={book.author}
            onChange={inputChanged}
            margin="normal"
            label="Author"
            fullWidth
          /> 
          <TextField
           name="title"
           value={book.title}
           onChange={inputChanged}
           margin="dense"
           label="Title"
           fullWidth
         /> 
         <TextField
           name="year"
           value={book.year}
           onChange={inputChanged}
           margin="dense"
           label="Year"
           fullWidth
         /> 
         <TextField
           name="isbn"
           value={book.isbn}
           onChange={inputChanged}
           margin="dense"
           label="ISBN"
           fullWidth
         /> 
         <TextField
           name="price"
           value={book.price}
           onChange={inputChanged}
           margin="dense"
           label="Price"
           fullWidth
         /> 
         
         
    </DialogContent>
    <DialogActions>
        <Button color="primary" onClick={handleClose}>Cancel</Button>
        <Button color="primary" onClick={handleSave}>Save</Button>
    </DialogActions>
  </Dialog> 
  </div>
  );
}

export default AddBook;