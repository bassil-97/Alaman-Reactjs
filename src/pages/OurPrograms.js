import React from "react";
import "./OurPrograms.css";

import ProgramCard from "../components/ProgramCard/ProgramCard";

// DUMMY_DATA
const APP_PROGRAMS = [
  {
    id: 1,
    title: "Educational Scholarships",
    image:
      "https://cms.alamanfund.jo/storage/programs/F9DiylbyYxKw7GTgaY2R2W3ke5IJiv-metaNVgyQTQ3NDAgY29weS5qcGc=-.jpg",
    description:
      "Because of its faith in the importance of an inclusive and quality education for all, Al-Aman Fund covers higher education tuition fees as part of its programs. This includes tuition fees for universities, colleges, and vocational training centers. Through its scholarship scheme, Al-Aman also provides orphaned youth with access to tools, mechanisms, and resources that facilitate their education journey in an increasingly transformative digital age and in light of growing economic challenges.",
  },
  {
    id: 2,
    title: "Livelihood Support",
    image:
      "https://cms.alamanfund.jo/storage/programs/prHjuPvhRAg71VSVl32hpJRJCFSk89-metaUEhPVE8tMjAyMi0xMS0yMS0xNS01NS0xMS5qcGc=-.jpg",
    description:
      "As a means for securing our orphans’ basic needs, our Livelihoods Program provides them with fundamentals like food, clothing, and shelter to help them sustain a healthy lifestyle.",
  },
  {
    id: 3,
    title: "Personal Growth and Capacity Building",
    image:
      "https://cms.alamanfund.jo/storage/programs/I9DyVy7ZTYJt7W2cGsmkfnXdAqLwt0-metaNVgyQTQ2NTcgY29weS5qcGc=-.jpg",
    description:
      "Al-Aman Fund equips youth in their final years of secondary school with the skills needed to enter the job market. The fund supports them in growing their personal networks and acquiring the skills needed to become creative, problem-solving, and resourceful individuals. It also helps transform some of their creative ideas into business plans by connecting them with incubators.",
  },
];

export default function OurPrograms() {
  return (
    <div className="app-programs__container">
      <div className="container">
        <h1 className="mb-4">Our Programs</h1>
        <div className="app-programs__list">
          <div className="row">
            {APP_PROGRAMS.map((prog) => (
              <div className="col-lg-4 mb-4" key={prog.id}>
                <ProgramCard {...prog} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
