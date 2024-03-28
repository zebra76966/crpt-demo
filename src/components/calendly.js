import React from "react";

import Axios from "axios";
import { useEffect, useState } from "react";
const Calendly = () => {
  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic NDh1enJSa3RYTHA4M0EwTGx6WTBHdWFPSGhVdTJLTWpxa2JtQk9jbDJ0NDplYXIwVHR1OEJwRnRLUXFwY1NuNEJIZFRxRGFFR1phOE42OEMtTGhLQk5B",
      },
    };

    Axios.get("https://auth.calendly.com/oauth/authorize?client_id=48uzrRktXLp83A0LlzY0GuaOHhUu2KMjqkbmBOcl2t4&response_type=code&redirect_uri=https://crpt-demo.vercel.app/calendly")

      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    Axios.post(
      "https://auth.calendly.com/oauth/token",
      { grant_type: "authorization_code", redirect_uri: "https://crpt-demo.vercel.app/calendly", code: "mPdjOwodaKAZrh6CzSueW17rWzlzTrEpx36Dde1eADU" },
      config
    )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <h1> Processing...</h1>;
};

export default Calendly;
