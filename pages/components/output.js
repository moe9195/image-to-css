import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CopyIcon from "@mui/icons-material/Assignment";

const Output = ({ styles, css }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Paper className={styles.outputPaper}>
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
            }}
          >
            Copy
          </Button>
        </Paper>
        <Paper className={styles.outputPaper}>
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
            }}
          >
            Copy
          </Button>
        </Paper>
      </Grid>
    </Box>
  );
};

export default Output;
