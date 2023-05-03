import "./card.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { Characters } from "../../characters";
const { DateTime } = require("luxon");

const randomIndex = Math.floor(Math.random() * Characters.length);
const randomCharacter = Characters[randomIndex];

const Avatar = () => {
  return (
    <img
      className="avatar"
      src={require(`../../images/${randomIndex}.jpeg`)}
      alt="foto"
    />
  );
};

console.log(randomIndex);
console.log(Avatar);

const dateFormatter = (date) => {
  const dateFormatted = DateTime.fromISO(date)
    .setLocale("es")
    .toFormat("cccc',' dd LLLL 'de' y");
  return <span> {dateFormatted}</span>;
};

const Card = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-header">
          <div>
            <Avatar />
          </div>
          <div className="character-info">
            <span className="character-name">{randomCharacter.name}</span>
            <span className="character-status">{randomCharacter.status}</span>
          </div>
        </div>

        <div>
          <ul className="character-props">
            <li className="prop-item">
              <FontAwesomeIcon icon={faCopyright} className="icn-blue" />
              <span> {randomCharacter.species} </span>
            </li>
            <li className="prop-item">
              {randomCharacter.gender === "Male" ? (
                <FontAwesomeIcon icon={faCopyright} className="icn-blue" />
              ) : (
                <FontAwesomeIcon icon={faCopyright} className="icn-blue" />
              )}
              <span> {randomCharacter.gender} </span>
            </li>
            <li className="prop-item">
              <FontAwesomeIcon icon={faCopyright} className="icn-blue" />
              <span>
                {randomCharacter.origin} ({randomCharacter.location})
              </span>
            </li>
            <li className="prop-item">
              <FontAwesomeIcon icon={faCopyright} className="icn-blue" />

              <span> {dateFormatter(randomCharacter.created)} </span>
            </li>
          </ul>
        </div>
        <div className="card-footer">
          <button className="btn-regular">
            <FontAwesomeIcon icon={faCopyright} />
            <span>perfil</span>
          </button>
          <button className="btn-primary">
            <FontAwesomeIcon icon={faCopyright} />
            <span>contacto</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export { Card };
