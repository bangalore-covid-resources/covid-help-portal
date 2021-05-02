import { Card, CardContent, Grid } from "@material-ui/core";

function About() {
  return (
    <Grid       
    container
    justify="center"
    alignItems="stretch">
      <Grid item xs={10}>
      <Card className="card-box mb-4">
        <div className="card-header">
          <div className="card-header--title">
            <b className="font-size-lg d-flex align-items-center">Covid Resources for India</b>
            <p>
              This is an initiative by like minded volunteers to help people
              affected by Covid.
          </p>
          </div>
        </div>
        <CardContent className="p-3">
          <p>
            People affected by Covid may need help like finding Oxygen,
            Ambulance, Plasma, Medicines etc. Most of the sources providing
            these details are not credible and an ample amount of time
            is wasted before getting the right help. The time wasted in this
            process may lead to critical situation.
        </p>

        <p>
            This portal aims at reducing this time by providing the details of
            credible sources frequently verified by our team of
            volunteers.
        </p>
        </CardContent>
      </Card>
      </Grid>
    </Grid>
  );
}

export default About;
