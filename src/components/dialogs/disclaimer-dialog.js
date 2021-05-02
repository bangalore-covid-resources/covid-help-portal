import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Typography} from "@material-ui/core";

function DisclaimerDialog(props) {
  return (

    <Dialog open={props.show} onClose={props.onHide} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title bg-light">Disclaimer</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography  paragraph={true}>
            The information provided is curated from publicly available sources by
            volunteers. We however, do not accept any responsibility or liability
            for the accuracy, content, completeness, legality or reliability of the
            information contained in any of these.
         </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onHide} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>

  );
}

export default DisclaimerDialog;
