import { useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import APPLICATION_URL from "../../constants/application-routes";

import DisclaimerDialog from "../dialogs/disclaimer-dialog";

function Footer() {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  let history = useHistory();

  const routeToAboutUs = () => {
    history.push(APPLICATION_URL.ABOUT);
  };

  return (
    <div className="jumbotron mb-0 fixed-bottom text-center p-2">
      <Button variant="link" onClick={() => setShowDisclaimer(true)}>
        Disclaimer
      </Button>
      <Button
        variant="link"
        onClick={() =>
          window.open("https://forms.gle/kVkmRjpf5G1KmaZn6", "_blank")
        }
      >
        Feedback
      </Button>
      <Button variant="link" onClick={() => routeToAboutUs()}>
        About Us
      </Button>
      <DisclaimerDialog
        show={showDisclaimer}
        onHide={() => setShowDisclaimer(false)}
      />
    </div>
  );
}

export default Footer;
