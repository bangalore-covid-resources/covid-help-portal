import { Grid, Card, List, ListItem, Divider, Typography } from "@material-ui/core";
import { useHistory } from "react-router";
import { MENUS } from "../../constants/constants";
import APPLICATION_URL from "../../constants/application-routes";

function Home() {
  const history = useHistory();
  const routeToHelp = (url) => {
    history.push(url);
  };

  const renderHelpRow = (imgUrl, title, routeUrl) => {
    return (
      <ListItem button className="d-block" onClick={() => routeToHelp(routeUrl)}>
        <div className="d-flex align-items-center flex-column flex-sm-row">
          <div className="avatar-icon-wrapper rounded mb-2">
            <div className="d-block p-0 avatar-icon-wrapper m-0 d-100">
              <div className="rounded overflow-hidden">
                <img alt="..." style={{ height: "100px" }} className="img-fluid" src={imgUrl} />
              </div>
            </div>
          </div>
          <div className="pl-0 pl-sm-4">
            <div className="d-block text-center d-sm-flex align-items-center">
              <div className="font-weight-bold display-4 mt-3">
                {title}
              </div>
            </div>
          </div>
        </div>
      </ListItem>
    );
  };

  return (
    <Grid container justify="center">
      <Grid
        container
        item
        justify="center"
        alignItems="stretch"
        className="mb-2"
      >
        <Grid item xs={10} >
          <Card button className="card-box">
            <List>
              {renderHelpRow(
                process.env.PUBLIC_URL + "/images/oxygen.png",
                MENUS.OXYGEN,
                APPLICATION_URL.OXYGEN
              )}
              <Divider />
              {renderHelpRow(
                "/images/medicine.png",
                MENUS.REMDESIVIR,
                APPLICATION_URL.REMDESIVIR
              )}
              <Divider />
              {renderHelpRow(
                "/images/ambulance.png",
                MENUS.AMBULANCE,
                APPLICATION_URL.AMBULANCE
              )}
              <Divider />
              {renderHelpRow(
                "/images/plasma.png",
                MENUS.PLASMA,
                APPLICATION_URL.PLASMA
              )}
              <Divider />
              {renderHelpRow(
                "/images/meals.png",
                MENUS.MEALS,
                APPLICATION_URL.MEALS
              )}
            </List>
          </Card>
        </Grid>
      </Grid>
      <Grid item xs={10}>
      <span className="m-1 badge badge-danger">Important</span>
        <Typography variant="overline">
          <br/>
				Please do not panic and source the help unless it is absolutely
				needed. This helps to reduce the burden on our Health care system.
			  </Typography>
      </Grid>
      <Grid item>
          <div style={{height: "120px"}}></div>
      </Grid>

    </Grid>
  );
}

export default Home;
