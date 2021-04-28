import { Modal, Button } from "react-bootstrap";

function DisclaimerDialog(props) {
  return (
    <Modal {...props}>
      <Modal.Header className="text-white bg-info text-center" closeButton>
        <Modal.Title className="w-100">Disclaimer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          This is an initiative by a like minded volunteers to help the people
          affected by Covid.
        </p>
        <p>
          The information provided is curated from publicly available sources by
          volunteers. We however, do not accept any responsibility or liability
          for the accuracy, content, completeness,legality or reliability of the
          information contained in any of these.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DisclaimerDialog;
