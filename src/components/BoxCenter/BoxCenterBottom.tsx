import { TextField } from "@mui/material";

export default function BoxCenterBottom() {
  return (
    <TextField
      id="outlined-basic"
      label=""
      variant="outlined"
      placeholder="write here"
      rows={4}
      multiline
      color="primary"
      className="w-full"
    />
  );
}
