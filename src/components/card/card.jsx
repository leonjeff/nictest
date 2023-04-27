import "./card.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { Characters } from "../../characters";
import av from "../../images/1.jpeg";


const Avatar = ({ id }) => {
  return <img className="avatar" src={`../../images/1.jpeg`} alt="Avatar" />;
};

console.log(Characters);

const Card = () => {
  return (
    <div className="card">
      <div className="card-header">
        <div>
          <Avatar />
          <img className="avatar" src={av} alt="Avatar" />
        </div>
        <div>
          <h4
            style={{
              fontWeight: 900,
              fontSize: "16px",
              textTransform: "capitalize",
            }}
          >
            {Characters.name}
          </h4>
          <span className="status">{Characters[0].status}</span>
        </div>
      </div>
      <div>
        <ul className="character-props">
          <li className="prop-item">
            <FontAwesomeIcon icon={faCopyright} className="icn-blue" />
            <span> {Characters.species} </span>
          </li>
          <li className="prop-item">
            <FontAwesomeIcon icon={faCopyright} className="icn-blue" />
            <span> {Characters.gender} </span>
          </li>
          <li className="prop-item">
            <FontAwesomeIcon icon={faCopyright} className="icn-blue" />
            <span>
              {Characters.origin} ({Characters.location})
            </span>
          </li>
          <li className="prop-item">
            <FontAwesomeIcon icon={faCopyright} className="icn-blue" />
            <span> {Characters.created} </span>
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
  );
};

export { Card };
