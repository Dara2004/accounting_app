import Grid from "@material-ui/core/Grid";

const Row = (props) => (
  <Grid container direction="row" {...props}>
    {props.children}
  </Grid>
);

export default Row;
