import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography} from "@material-ui/core";

import HelpDetails from "../help/help-details";

function HelpDetailsDialog(props) {
  const { category, provider } = props;
  return (
    <Dialog open={props.show} onClose={props.onHide} fullWidth aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title bg-light">{provider.name}</DialogTitle>
      <DialogContent>
        <HelpDetails category={category} provider={provider} />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onHide} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default HelpDetailsDialog;
