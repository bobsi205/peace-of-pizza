import React from "react";

import imgFacebook from "./images/icon-facebook.svg";
import imgInstagram from "./images/icon-instagram.svg";
import imgTwitter from "./images/icon-twitter.svg";
import imgYelp from "./images/icon-yelp.svg";

const Social = () => {
  return (
    <section className="text-center my-4" style={{ padding: "5rem" }}>
      <h3>Stay Connected</h3>
      <p>Follow us on social media to stay up-to date.</p>

      <div
        className="d-flex justify-content-between mx-auto my-4"
        style={{ maxWidth: "400px" }}
      >
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={imgFacebook} alt="Facebook" height="40" />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={imgInstagram} alt="Instagram" height="40" />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={imgTwitter} alt="Twitter" height="40" />
        </a>
        <a
          href="https://www.yelp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={imgYelp} alt="Yelp" height="40" />
        </a>
      </div>
    </section>
  );
};

export default Social;
