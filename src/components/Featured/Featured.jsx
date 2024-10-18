import { useState } from "react";
import * as React from "react";
import Summary from "../Summary/Summary";
import "./Featured.scss";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
});

const Featured = () => {
  const navigate = useNavigate();
  const [contribution, setContribution] = useState(1200.0);

  const card1 = (
    <React.Fragment>
      <CardContent sx={{ height: 400 }}>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          Featured
        </Typography>
        <Typography variant="h5" component="div">
          Youth Empowerment Through Sports & Recreation
        </Typography>
        <Typography variant="body1">
          Bell has been a proud supporter of the Canadian Olympic
          <br />
          Team since 1996 and the Canadian Paralympic Team since 2013.
        </Typography>
        <div className="featured" />
      </CardContent>
      <CardActions>
        <Button size="large">
          <a
            href="https://www.bell.ca/bell-for-better"
            target="_blank"
            className="anchor"
          >
            Learn More
          </a>
        </Button>
      </CardActions>
    </React.Fragment>
  );

  const card2 = (
    <React.Fragment>
      <CardContent sx={{ height: 400 }}>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          Game
        </Typography>
        <Typography variant="h5" component="div">
          BlueBells
        </Typography>
        <Typography variant="body1">
          Play the BlueBells game to earn rewards
          <br />
          towards a cause of your choosing.
        </Typography>
        <div className="card-game" />
      </CardContent>
      <CardActions>
        <Button size="large" onClick={() => navigate("/game")}>
          Play now
        </Button>
      </CardActions>
    </React.Fragment>
  );

  return (
    <ThemeProvider theme={theme}>
      <div className="carousel">
        <Box sx={{ minWidth: 500 }}>
          <Card variant="outlined">{card1}</Card>
        </Box>

        <Box sx={{ minWidth: 500 }}>
          <Card variant="outlined">{card2}</Card>
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default Featured;
