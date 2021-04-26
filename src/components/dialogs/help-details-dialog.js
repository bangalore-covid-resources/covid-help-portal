import { Modal, Button } from "react-bootstrap";
import HelpDetails from "../help/help-details";

function HelpDetailsDialog(props) {
  const { category, provider } = props;
  return (
    <Modal {...props}>
      <Modal.Header className="text-white bg-info text-center" closeButton>
        <Modal.Title className="w-100">{provider.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <HelpDetails category={category} provider={provider} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default HelpDetailsDialog;
