import React, { useState } from "react";
import { Button, Grid, Input, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { Image } from "@mui/icons-material";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const useStyle = makeStyles({
  root: {
    width: "fit-content",
    margin: "auto",
    marginTop: "1rem",
    padding: "1rem",
    border: "2px solid orange",
    borderRadius: "1rem",
  },
  item: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    justifySelf: "center",
    justifyItems: "center",
    margin: "1rem",
  },
});
function Admin() {
  const classes = useStyle();
  const [image, setImage] = useState("");
  const storage = getStorage();
  const upload = () => {
    if (image == null) return;
    const storageRef = ref(storage, `/images/${image.name}`);
    uploadBytes(storageRef, image).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });
  };

  const inputField = (name) => (
    <Box className={classes.item}>
      <TextField label={name} variant="standard" />
    </Box>
  );
  return (
    <Box className={classes.root}>
      <Box className={classes.item}>
        <Input
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
      </Box>
      {inputField("Name")}
      {inputField("Description")}
      <Box className={classes.item}>
        <Button onClick={upload} variant="contained">
          Upload
        </Button>
      </Box>
    </Box>
  );
}

export default Admin;
