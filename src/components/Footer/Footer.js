import React from "react";
import "./Footer.css";

import DonationButton from "../DonationButton/DonationButton";
import SocialMediaComponent from "../SocialMediaComponent/SocialMediaComponent";

export default function Footer() {
  return (
    <div className="app__footer">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-4">
            <div className="app-logo__container mb-5">
              <img
                src="https://alamanfund.jo/static/media/new-footer-logo.a2ed3e54d1d92f21d1489870a87908b5.svg"
                alt="app logo"
                className="me-4"
              />
              <img
                src="https://alamanfund.jo/static/media/logo-text.6869754277c1647234abc648ecda66a3.svg"
                alt="app logo"
              />
            </div>
            <div className="mb-5">
              <h4>Donate for a better tomorrow.</h4>
            </div>
            <div className="mb-5">
              <h4>Every donation makes a difference</h4>
            </div>
            <div className="donate-container">
              <DonationButton />
            </div>
          </div>
          <div className="col-lg-4">
            <h3 className="section-title">Contact</h3>
            <div className="text-light mb-5">
              <h5>Working Hours</h5>
              <p>Sunday-Thursday, 8:30 AM – 4:30 PM</p>
            </div>
            <div className="text-light">
              <h5>Contact Information</h5>
              <p>P.O. Box 930297 Amman, Jordan 11193</p>
              <p>Email: info@alamanfund.jo</p>
              <p>Tel: +962-6-5664427</p>
              <p>Fax: +962-6-5664471</p>
            </div>
            <SocialMediaComponent />
          </div>
          <div className="col-lg-4">
            <h3 className="section-title">Contact Information</h3>
            <div className="text-light">
              <p>
                All donations go directly towards the different support schemes
                the Fund provides to its orphans, the administrative costs are
                directly covered from separate donations for this purpose.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-xs-12 text-center text-light">
            Copyright Al-Aman Fund 2023 All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
