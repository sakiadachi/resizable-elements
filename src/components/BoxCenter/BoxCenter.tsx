import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import BoxCenterBottom from "./BoxCenterBottom";

export default function BoxCenter() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Box sx={{ flexGrow: 1, position: "relative" }}>
      <Grid container spacing={2} columns={16} padding={1}>
        <Grid item xs={8}>
          <Item>box</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>box</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>box</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>box</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>box</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>box</Item>
        </Grid>
      </Grid>
      <Box sx={{ padding: 2 }} className="absolute bottom-0 w-full">
        <BoxCenterBottom />
      </Box>
    </Box>
  );
}
