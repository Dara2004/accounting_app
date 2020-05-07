import Grid from "@material-ui/core/Grid";

const Column = (props) => (
  <Grid container direction="column" {...props}>
    {props.children}
  </Grid>
);

export default Column;
