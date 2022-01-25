import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormHelperText from '@mui/material/FormHelperText';
import CopyIcon from "@mui/icons-material/Assignment";

const Output = ({ styles, css }) => {
  const [copiedCSS, setCopiedCSS] = useState(false);
  const [copiedHTML, setCopiedHTML] = useState(false);

  const handleCopiedCSS = () => {
    setCopiedCSS(true);
    setTimeout(() => {
      setCopiedCSS(false);
    }, 1000);
  }

  const handleCopiedHTML = () => {
    setCopiedHTML(true);
    setTimeout(() => {
      setCopiedHTML(false);
    }, 1000);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Paper className={styles.outputPaper}>
          <FormHelperText className={styles.helperText}>CSS</FormHelperText>
          <TextField
            fullWidth
            multiline
            disabled
            rows={15}
            rowsMax={15}
            value={css}
            variant="outlined"
            InputProps={{
              className: styles.outputText,
            }}
          />
          <Button
            color="inherit"
            sx={{
              width: "100%",
              opacity: 0.7,
              color: "#121212",
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
            }}
            variant="contained"
            endIcon={<CopyIcon />}
            onClick={() => {
              navigator.clipboard.writeText(css);
              handleCopiedCSS();
            }}
          >
            {copiedCSS ? "Copied!" : "Copy"}
          </Button>
        </Paper>
        <Paper className={styles.outputPaper}>
          <FormHelperText className={styles.helperText}>HTML</FormHelperText>
          <TextField
            fullWidth
            multiline
            disabled
            rows={15}
            rowsMax={15}
            value={css && `<div class="drawing"></div>`}
            variant="outlined"
            InputProps={{
              className: styles.outputText,
            }}
          />
          <Button
            color="inherit"
            sx={{
              width: "100%",
              opacity: 0.7,
              color: "#121212",
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
            }}
            variant="contained"
            endIcon={<CopyIcon />}
            onClick={() => {
              navigator.clipboard.writeText(
                css && `<div class="drawing"></div>`
              );
              handleCopiedHTML();
            }}
          >
            {copiedHTML ? "Copied!" : "Copy"}
          </Button>
        </Paper>
      </Grid>
    </Box>
  );
};

export default Output;
