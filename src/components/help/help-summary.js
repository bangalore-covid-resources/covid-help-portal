import { useHistory } from "react-router";
import * as Oxygen from "../../content/data/oxygen.json";
import APPLICATION_URL from "../../constants/application-routes";

function HelpSummary() {
  const history = useHistory();

  return (
    <div>
      {Oxygen.providers.map((provider) => (
        <div onClick={() => history.push(APPLICATION_URL.DETAILS)}>
          <h1>{provider.name}</h1>
          <h2>{provider.contact}</h2>
          <p>{provider.status}</p>
        </div>
      ))}
    </div>
  );
}

export default HelpSummary;
