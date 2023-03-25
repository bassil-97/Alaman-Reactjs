import React from "react";
import "./ProgramCard.css";

export default function ProgramCard({ title, image, description }) {
  return (
    <div className="program-card__container h-100">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body mt-4">
        <h5 className="card-title fw-bold mb-2">{title}</h5>
        <p className="card-text text-muted fw-bold">{description}</p>
      </div>
    </div>
  );
}
