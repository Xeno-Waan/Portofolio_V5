import React, { useState } from "react";
import { Modal, IconButton, Box, Backdrop, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

const Certificate = ({ ImgSertif }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ width: "100%" }}>
      {/* Thumbnail */}
      <Box sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "10px",
        cursor: "pointer",
        "&:hover img": { transform: "scale(1.05)" }
      }}>
        <img 
          src={ImgSertif} 
          alt="Certificate" 
          style={{ 
            width: "100%", 
            height: "200px", 
            objectFit: "cover",
            transition: "transform 0.3s ease",
            borderRadius: "10px"
          }} 
          onClick={handleOpen} 
        />
        <Box sx={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "rgba(0,0,0,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0,
          transition: "opacity 0.3s ease",
          "&:hover": { opacity: 1 }
        }}>
          <FullscreenIcon sx={{ color: "white", fontSize: 40 }} />
        </Box>
      </Box>

      {/* Modal */}
      <Modal open={open} onClose={handleClose} BackdropComponent={Backdrop}>
        <Box sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90vw",
          maxWidth: "800px",
          bgcolor: "transparent",
          outline: "none"
        }}>
          <IconButton onClick={handleClose} sx={{
            position: "absolute",
            right: "-40px",
            top: "-40px",
            color: "white",
            bgcolor: "rgba(0,0,0,0.5)"
          }}>
            <CloseIcon />
          </IconButton>
          <img 
            src={ImgSertif} 
            alt="Certificate Full" 
            style={{ 
              width: "100%", 
              height: "auto",
              borderRadius: "10px"
            }} 
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default Certificate;