// Libraries Imports
import React, { FC } from "react";
import styled from "styled-components";

// Local Imports

// Common Imports

// Components Imports

// API Imports

// Other Imports
import { logo, Clock } from "../../img";

// Types

const Footer: FC = () => {
  // Local variables

  // States

  // Queries & Mutaions

  // Functions

  // Local Data

  return (
    <Wrapper className="--red-hat">
      <div className="footer__content">
        <img src={logo} alt="company logo" className="footer__logo" />
        <div className="footer__links">
          <h3>Lien Utils</h3>
          <a href="#config">Configurateur</a>
          <a href="#store">Notre magasin</a>
          <a href="#galery">Notice &amp; Installation</a>
          <a href="#work">Livraison &amp; Transport</a>
        </div>
        <div className="footer__contact">
          <h3>Nous Contactez</h3>
          <span>Addresse:</span>
          <span>
            3 rue du champ de verger Allonnes, Pays de la Loire, France
          </span>
          <span>Téléphone:</span>
          <span>+33 2 43 57 00 87</span>
        </div>
        <div className="footer__work-time">
          <h3>Horaire</h3>
          <span>Lundi a Vendredi</span>
          <span>
            <Clock width="18" height="18" />
            7:30 -12:00
          </span>
          <span>
            <Clock width="18" height="18" />
            13:30 -18:00
          </span>
          <span>
            Samedi
            <br />
            <sub>( Fermé les samedis de janvier et février)</sub>{" "}
          </span>
          <span>
            <Clock width="18" height="18" />
            13:30 -18:00
          </span>
        </div>
      </div>
    </Wrapper>
  );
};

// Styled component import

// Types

export const Wrapper = styled.footer`
  width: 100%;
  height: fit-content;
  background-color: white;
  position: relative;
  z-index: 9999;
  .footer__content {
    width: 100%;
    max-width: 1280px;
    height: inherit;
    position: relative;
    display: grid;
    grid-template-columns: 34% 22% 22% 22%;
    grid-gap: 20px;
    margin: 0 auto;
    padding: 40px 0 30px 0;
    :after {
      content: "";
      width: 100%;
      height: 10px;
      position: absolute;
      top: -10px;
      z-index: 9999;
      background-color: ${(props) => props.theme.colors.primary.main};
    }
    .footer__logo {
      height: 28px;
    }
    .footer__links,
    .footer__contact,
    .footer__work-time {
      display: flex;
      flex-direction: column;
      h3 {
        margin-bottom: 25px;
      }
      a,
      span {
        max-width: 200px;
        display: inline-block;
        margin-bottom: 15px;
        color: ${(props) => props.theme.text.secondary};
      }
    }
    svg {
      margin-right: 10px;
      margin-bottom: -3px;
      path {
        stroke: ${(props) => props.theme.text.secondary};
      }
    }
  }
  @media only screen and (max-width: 1279px) {
    .footer__content {
      grid-template-columns: 1fr 1fr 1fr;
      padding: 20px;
      .footer__logo {
        grid-column: span 3;
        margin: 25px auto;
      }
      .footer__links,
      .footer__contact,
      .footer__work-time {
        align-items: center;
      }
      * {
        text-align: center;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .footer__content {
      grid-template-columns: 1fr 1fr;
      padding: 20px;
    }
  }
`;

export default Footer;
