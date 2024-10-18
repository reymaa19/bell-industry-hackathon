import "./InitiativeList.scss";
import InitiativeModal from "../../components/InitiativeModal/InitiativeModal";
import { Link } from "react-router-dom";
import { useState } from "react";

const initiatives = [
  {
    id: 1,
    name: "Bell Let's Talk",
    description:
      "Largest-ever corporate commitment to Canadian mental health. Investments in mental health programs in every corner of the country so that more Canadians can get better access to the care they need.",
  },
  {
    id: 2,
    name: "Better communities: Sports and Recreation",
    description:
      "Helping Canadian athletes achieve their Olympic and Paralympic dreams. Bell has been a proud supporter of the Canadian Olympic Team since 1996 and the Canadian Paralympic Team since 2013. In addition to Team Canada support, Bell provides athletes with a phone and service to ensure they stay connected with their support system and use applications that help them train each day.",
  },
  {
    id: 3,
    name: "Better world: Environment",
    description:
      "Reduces e-waste from consumer electronic devices and donates the net proceeds from the value of thousands of recycled mobile phones to World Wildlife Fund (WWF) and their Regenerate Canada program.",
  },
  {
    id: 4,
    name: "Better World: Accessibility",
    description:
      "Providing solutions to break down barriers for Canadians with accessibility needs. Dedicated Accessibility Services Centre providing specialized customer service. Accessibility discounts on certain products, services and solutions available to eligible customers. ",
  },
];

const CharityList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedInitiative, setSelectedInitiative] = useState(null);
  const [score, setScore] = useState(0);

  const openModal = (initiative) => {
    setSelectedInitiative(initiative);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedInitiative(null);
  };
  return (
    <section className="initiative__section">
      <div className="initiative__heading">
        <h2>Support one of the Bell initiatives from the list below</h2>
      </div>
      <ul className="initiative__list">
        {initiatives.map((initiative) => (
          <li key={initiative.id} className="initiative__item">
            <Link
              to="/game/modal"
              onClick={(e) => {
                e.preventDefault();
                openModal(initiative);
              }}
            >
              <div className="initiative__sub-heading">
                <div className="initiative__box">
                  <h2 className="initiative__name">{initiative.name}</h2>
                </div>
                <div className="initiative__box">
                  <h2 className="initiative__coins">
                    500 BlueBells (equivalent to 5 CAD)
                  </h2>
                </div>
              </div>
              <p className="initiative__text">{initiative.description}</p>
            </Link>
          </li>
        ))}
      </ul>
      {isOpen && selectedInitiative && (
        <InitiativeModal
          isOpen={isOpen}
          closeModal={closeModal}
          initiative={selectedInitiative}
          setScore={setScore}
        />
      )}
    </section>
  );
};

export default CharityList;
