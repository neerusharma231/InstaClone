import { Modal, Box, Typography, IconButton, Button, TextField} from '@mui/material';
import React, { useState, useRef } from 'react';
import CollectionsTwoToneIcon from '@mui/icons-material/CollectionsTwoTone';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "../css/UploadingModal.css";

const UploadModal = ({ open, onClose }) => {
  const [files, setFiles] = useState([]);
  const [nextstep, setNextStep] = useState(false);
  const [caption, setCaption] = useState('');
  const [confirmOpen, setConfirmOpen] = useState(false);
  
  const fileInputRef = useRef(null); 

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    setFiles(droppedFiles);
  };

  const handleDragOver = (event) => {
    event.preventDefault(); 
  };

  const handleUpload = () => {
    fileInputRef.current.click();
  };
  const handleNext = ()=>{
 setNextStep(true);
  }
  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);
  };

  const handlePreviouss = () =>{
    setNextStep(false);
  }

  const handlePrevious = () => {
  //    setFiles([]);
  //  setNextStep(false);
  //  setConfirmOpen(true);
  //  setCaption(''); 
  setConfirmOpen(true);
  };
  
  // Confirm discard
  const handleDiscard = () => {
    setFiles([]);
    setNextStep(false);
    setCaption('');
    setConfirmOpen(false);
  };

  // Cancel discard
  const handleCancel = () => {
    setConfirmOpen(false);
  };

  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <Box
          className="dragpc-img"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '30%', 
            bgcolor: 'background.paper',
            boxShadow: 'none',
            borderRadius: '8px', 
            padding: '16px',
            textAlign: 'center'
            
          }}
        >
           <Modal open={confirmOpen} onClose={handleCancel}>
          <Box
            sx={{
              padding: 3,
              textAlign: 'center',
              bgcolor: 'white',
              borderRadius: '8px',
              boxShadow: 3,
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '300px',
            }}
          >
            <Typography variant="h6">Discard Post?</Typography>
            <Typography variant="body2" sx={{ margin: '16px 0' }}>
              If you leave, your edits won't be saved.
            </Typography>
            <Button variant="outlined" onClick={handleCancel}>Cancel</Button>
            <Button variant="contained" color="primary" onClick={handleDiscard} sx={{ marginLeft: 2 }}>Discard</Button>
          </Box>
        </Modal>
          {files.length === 0 ? (
            <>
              <Typography 
                variant="h6" 
                component="h2" 
                style={{ padding: '16px', borderBottom: '1px solid #ccc' }}
              >
                Create a Post
              </Typography>

              <Box 
                className="bxmodal"
                sx={{
                  padding: "60px 20px",
                  height: 200,
                  textAlign: 'center', 
                }}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                <CollectionsTwoToneIcon className="imgdg" sx={{ display: "flex", justifyContent: 'center', marginBottom: '16px' }} />
                <Typography className="paradg" variant="body2">
                  Drag photos and videos here
                </Typography>

                <button className="dgbtnx" onClick={handleUpload}>Upload</button>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileChange} 
                  style={{ display: 'none' }} 
                  accept="image/*" 
                  multiple 
                />
              </Box>
            </>
          ) : !nextstep ? (
            <>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <IconButton onClick={handlePrevious}>
                  <ArrowBackIcon />
                </IconButton>
                <Typography variant="h6"> Create a Post</Typography>
                <Button variant="contained" color="primary" onClick={handleNext}>
                  Next
                </Button>
              </Box>

              <Box sx={{ mt: 2 }}>
                <img 
                  src={URL.createObjectURL(files[0])} 
                  alt="Selected" 
                  style={{ width: '100%', height: 'auto', borderRadius: '4px' }} 
                />
              </Box>
            </>
          ) : (
            <>
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center' ,width:'100%'}}>
             <IconButton onClick={handlePreviouss}>
              <ArrowBackIcon />
              </IconButton> 
              <Typography variant='h6'>Create a Post </Typography>
              <Button variant='contained' color='primary' onClick={()=>console.log(caption)}>
                Share
              </Button>
            </Box>
            <Box className="cptn-otr">
              <Box className="capimg"  sx={{width:'100%'}}>
                <img src={URL.createObjectURL(files[0])} 
                    alt="Selected" 
                    style={{borderRadius: '4px' }} />
              </Box>
              <Box className="cption" sx={{ display: 'flex', justifyContent: 'space-between' ,width:'100%',alignItems: 'center' }}>
                  <TextField className="txtcp"
                    label="Caption"
                    multiline
                    
                    variant="outlined"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    fullWidth
                  />
                </Box>
            </Box>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default UploadModal;
