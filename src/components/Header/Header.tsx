// Libraries Imports
import React, { FC } from "react";
import styled from "styled-components";

// Local Imports
import { logo, homeStores, Search, Location, Config } from "../../img";

// Common Imports

// Components Imports

// API Imports

// Other Imports

// Types

const Header: FC = () => {
  // Local variables

  // States

  // Queries & Mutaions

  // Functions

  // Local Data

  return (
    <Wrapper className="--red-hat" menuImage={homeStores}>
      <div className="top-bar">
        <div className="top-bar__content">
          <div className="top-bar__logo">
            <img src={logo} alt="logo" aria-label="company logo" />
          </div>
          <div className="top-bar__search">
            <input type="search" className="search" />
            <Search role="img" aria-label="search icon" />
          </div>
          <div className="top-bar__stores">
            <Location
              role="img"
              aria-label="location icon"
              className="stores__icon stores__icon--left"
              width="22"
            />
            <span className="stores__label">Notre magasin</span>
            <Location
              role="img"
              aria-label="location icon"
              className="stores__icon stores__icon--right"
              width="22"
            />
          </div>
          <div className="top-bar__config">
            <Config
              role="img"
              aria-label="location icon"
              className="config__icon config__icon--left"
              width="22"
            />
            <span className="config__label">Configurateur</span>
            <Config
              role="img"
              aria-label="location icon"
              className="config__icon config__icon--right"
              width="22"
            />
          </div>
        </div>
      </div>
      <nav>
        <div className="nav__home">
          <span id="home" role="button">
            Accueil
          </span>
        </div>
        <hr />
        <div className="nav__store-container">
          <div className="nav__store">
            <div className="nav__store--list">
              <ul>
                <li>Lame Commposite</li>
                <li>Lame en Bois</li>
                <li>Panneau Boid</li>
                <li>Grile rigide</li>
                <li>Gabion</li>
              </ul>
            </div>
            <span id="store" role="button">
              Boutique
            </span>
          </div>
        </div>
        <hr />
        <div className="nav__work">
          <span id="work" role="button">
            Nos Réalisations
          </span>
        </div>
        <hr />
        <div className="nav__contact-container">
          <div className="nav__contact">
            <div className="nav__contact--content">
              <div className="content__header">
                <label htmlFor="contact">Coordonnées et Map</label>
              </div>
              <p>
                Hey! Pour toute informations ou suggestions, Merci de remplir le
                formulaire suivant
              </p>
              <input
                name="full-name"
                type="text"
                placeholder="Nom &amp; Prènom"
              />
              <input name="email" type="email" placeholder="Email" />
              <label htmlFor="message" className="message-label">
                Message
              </label>
              <textarea name="message" id="message" />
            </div>
            <span id="contact" role="button">
              Contactez-nous
            </span>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

// Types
type WrapperProps = {
  menuImage: string;
};

export const Wrapper = styled.header<WrapperProps>`
  width: 100%;
  height: inherit;
  position: fixed;
  top: 0;
  z-index: 9999;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 70px 50px;
  background-color: transparent;
  .top-bar {
    width: 100%;
    background-color: #ffffff;
    border-bottom: 1px solid #e2e2e2;
    .top-bar__content {
      width: 100%;
      max-width: 1024px;
      height: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      margin: 0 auto;
      .top-bar__logo {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        grid-column: span 2;
        img {
          height: 20px;
        }
      }
      .top-bar__search {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 60px;
        grid-column: span 2;
        border-top: 0px;
        border-right: 1px;
        border-bottom: 0px;
        border-left: 1px;
        border-style: solid;
        border-color: #e2e2e2;
        .search {
          width: 100%;
          height: 100%;
          padding-left: 15px;
        }
        svg {
          margin: auto;
        }
      }
      .top-bar__stores {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 40px 1fr 40px;
        grid-column: span 1;
        cursor: pointer;
        :hover .stores__label {
          transform: translateX(-20px);
        }
        :hover .stores__icon--left {
          transform: translateX(-15px);
          opacity: 0;
        }
        :hover .stores__icon--right {
          transform: translateX(-10px);
          opacity: 1;
        }
        .stores__label {
          margin: auto 0;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          font-size: 0.875rem;
          transform: translateX(10px);
        }
        .stores__icon {
          margin: auto;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .stores__icon--left {
          transform: translateX(5px);
          opacity: 1;
        }
        .stores__icon--right {
          transform: translateX(15px);
          opacity: 0;
        }
      }
      .top-bar__config {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 40px 1fr 40px;
        grid-column: span 1;
        border-top: 0px;
        border-right: 1px;
        border-bottom: 0px;
        border-left: 1px;
        border-style: solid;
        border-color: #e2e2e2;
        background-color: ${(props) => props.theme.colors.primary.main};
        transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        cursor: pointer;
        :hover {
          background-color: ${(props) => props.theme.colors.secondary.main};
        }
        :hover .config__label {
          transform: translateX(-20px);
        }
        :hover .config__icon--left {
          transform: translateX(-15px);
          opacity: 0;
        }
        :hover .config__icon--right {
          transform: translateX(-10px);
          opacity: 1;
        }
        .config__label {
          margin: auto 0;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          font-size: 0.875rem;
          transform: translateX(10px);
          color: ${(props) => props.theme.colors.primary.contrast};
        }
        .config__icon {
          margin: auto;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          path {
            stroke: ${(props) => props.theme.colors.primary.contrast};
          }
        }
        .config__icon--left {
          transform: translateX(5px);
          opacity: 1;
        }
        .config__icon--right {
          transform: translateX(15px);
          opacity: 0;
        }
      }
    }
  }
  nav {
    width: 100%;
    max-width: 1024px;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1px 1fr 1px 1fr 1px 1fr;
    margin: 0 auto;
    background-color: #ffffff;
    border-top: 0px;
    border-right: 1px;
    border-bottom: 1px;
    border-left: 1px;
    border-style: solid;
    border-color: #e2e2e2;
    > div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    span {
      width: 100%;
      height: 49px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ffffff;
    }
    > div:hover {
      cursor: pointer;
      span {
        color: ${(props) => props.theme.colors.primary.contrast};
        background-color: ${(props) => props.theme.colors.primary.main};
      }
    }
    > hr {
      border-right: 1px solid #e2e2e2;
      height: 100%;
    }
    .nav__store-container,
    .nav__contact-container {
      position: relative;
    }
    .nav__store,
    .nav__contact {
      width: 100%;
      position: absolute;
      top: 0;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr;
      background: white;
    }
    .nav__store--list {
      height: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
      background-color: ${(props) => props.theme.colors.primary.main};
      background-image: url(${(props) => props.menuImage});
      background-size: 300px;
      background-blend-mode: overlay;
      background-position: center;
    }
    .nav__contact--content {
      height: 0px;
      overflow: hidden;
      transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
      .content__header {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${(props) => props.theme.colors.primary.main};
        background-image: url(${(props) => props.menuImage});
        background-size: 300px;
        background-blend-mode: overlay;
        background-position: center;
        label {
          color: ${(props) => props.theme.colors.primary.contrast};
        }
      }
      p {
        width: 85%;
        margin: 15px auto 5px auto;
        color: #4d302b;
        font-size: 0.7rem;
        font-weight: 500;
        line-height: 20px;
      }
      input {
        width: calc(100% - 40px);
        height: 30px;
        margin: 10px 20px;
        padding-bottom: 10px;
        border-bottom: 1px solid rgb(200, 200, 200);
        border-radius: 0;
        font-size: 0.8rem;
      }
      .message-label {
        display: block;
        margin-left: 20px;
        margin-top: 10px;
        font-size: 0.75rem;
        color: ${(props) => props.theme.text.secondary};
      }
      textarea {
        width: calc(100% - 40px);
        height: 80px;
        margin: 10px 20px;
        padding: 15px 0 0 15px;
        font-size: 0.8rem;
        border: 1px solid rgb(200, 200, 200);
        resize: none;
      }
    }
    .nav__store--list ul {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      li {
        display: block;
        width: 100%;
        text-align: center;
        padding: 12px;
        color: #ffffff;
        transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        :hover {
          background-color: ${(props) => props.theme.colors.secondary.main};
        }
      }
    }
    .nav__store-container:hover .nav__store .nav__store--list {
      height: 235px;
    }
    .nav__contact-container:hover .nav__contact .nav__contact--content {
      height: 435px;
    }
  }
`;

export default Header;
