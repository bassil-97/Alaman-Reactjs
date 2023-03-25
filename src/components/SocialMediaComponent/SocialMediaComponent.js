import React from "react";
import "./SocialMediaComponent.css";

const SOCIAL_MEDIA_LINKS = [
  {
    id: 1,
    href: "https://www.facebook.com/AlAmanFund",
    img: <i className="bx bxl-facebook"></i>,
  },
  {
    id: 2,
    href: "https://www.instagram.com/alamanfund/",
    img: <i className="bx bxl-instagram"></i>,
  },
  {
    id: 3,
    href: "https://twitter.com/AlAmanFundJo",
    img: <i className="bx bxl-twitter"></i>,
  },
  {
    id: 4,
    href: "https://www.linkedin.com/company/al-aman-fund-for-the-future-of-orphans/",
    img: <i className="bx bxl-linkedin"></i>,
  },
  {
    id: 5,
    href: "https://www.youtube.com/channel/UCtbaPmL65hYXRSNoKSrPgsQ",
    img: <i className="bx bxl-youtube"></i>,
  },
];

export default function SocialMediaComponent() {
  return (
    <div className="app-social-media__container">
      {SOCIAL_MEDIA_LINKS.map((link) => (
        <a key={link.id} href={link.href}>
          {link.img}
        </a>
      ))}
    </div>
  );
}
