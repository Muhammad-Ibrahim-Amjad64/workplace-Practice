import React from "react";
import classes from "./Loader.module.css";
import { Modal, Typography, Box } from "@mui/material";
import { images } from "../../utils/Images";
export const Loader = ({ isLoading }) => {
  return (
    <Modal
      hideBackdrop={true}
      // hideBackdrop={true}
      open={isLoading}
      //   onClose={() => setShowModal(!showModal)}
      //   onClose={() => handleCloseModal}
      sx={{ backgroundColor: "#00000056" }}
      className={classes.ProgressContainer}
    >
      <Box
        style={{
          gap: "1vw",
        }}
        className={classes.modalContent}
      >
        <Box className={classes.spinnerContainer}>
          <img
            className={`${classes.image} ${classes.rotate}`}
            src={images.caribicon}
          ></img>
        </Box>
        <Typography
          id="modal-modal-title"
          variant="h8" // fontweight
          component="h2" // fontsize
        >
          Loading...
        </Typography>
      </Box>
    </Modal>
  );
};
