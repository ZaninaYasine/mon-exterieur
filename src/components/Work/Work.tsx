/* eslint-disable no-console */
// Libraries Imports
import React, { FC } from "react";
import styled from "styled-components";

// Local Imports

// Common Imports

// Components Imports

// API Imports

// Other Imports
import { ArrowLeft, WorkBanner, LogoWhite } from "../../img";

// Types

const Work: FC = () => {
  // Local variables

  // States

  // Queries & Mutaions

  // Functions

  // Local Data

  return (
    <Wrapper id="work">
      <h2 className="--philosopher">Nos Réalisation</h2>
      <div className="work__slider">
        <h3 className="--red-hat">Panneau Bois</h3>
        <p className="--red-hat">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          molestiae consequuntur eveniet vel necessitatibus recusandae quae
          porro perferendis ut sapiente harum, repudiandae assumenda hic
          deserunt laboriosam sed obcaecati ipsum temporibus?
        </p>
        <div className="slider-navigation">
          <button type="button" aria-label="back">
            <ArrowLeft width="26" height="26" className="arrow--right" />
          </button>
          <div className="chips">
            <Chip
              aria-label="button"
              onClick={() => console.log("Clicked on Chip!")}
              onKeyDown={() => console.log("Clicked on Chip!")}
              role="button"
              tabIndex={0}
            />
            <Chip
              aria-label="button"
              onClick={() => console.log("Clicked on Chip!")}
              onKeyDown={() => console.log("Clicked on Chip!")}
              role="button"
              tabIndex={0}
              className="--selected"
            />
            <Chip
              aria-label="button"
              onClick={() => console.log("Clicked on Chip!")}
              onKeyDown={() => console.log("Clicked on Chip!")}
              role="button"
              tabIndex={0}
            />
          </div>
          <button type="button" aria-label="back">
            <ArrowLeft width="26" height="26" />
          </button>
        </div>
      </div>
      <div className="work__banner">
        <div className="work__banner-container">
          <img
            src={WorkBanner}
            alt="work banner"
            className="work__banner-img"
          />
          <LogoWhite className="work__banner-logo" />
        </div>
      </div>
    </Wrapper>
  );
};

// Styled component import

// Types
const Chip = styled.div`
  width: 11px;
  height: 11px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.primary.contrast};
  border: 2px solid #e2e2e2;
`;

export const Wrapper = styled.section`
  width: 100%;
  height: fit-content;
  position: relative;
  max-width: 1280px;
  margin: 30px auto 130px auto;
  padding: 60px 0;
  * {
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  :hover img.work__banner-img {
    transform: scale(1.1);
  }
  :hover svg.work__banner-logo {
    transform: scale(1.1);
    opacity: 1 !important;
  }
  :hover .work__slider {
    background-color: ${(props) => props.theme.colors.primary.main};
    border: 1px solid transparent;
  }
  :hover .work__slider .slider-navigation .chips {
    width: 100px;
    opacity: 1;
  }
  :hover .work__slider h3 {
    color: ${(props) => props.theme.colors.primary.contrast};
  }
  :hover .work__slider p {
    color: ${(props) => props.theme.colors.primary.contrast};
  }
  h2 {
    font-size: 32px;
    margin: 50px 0;
  }
  .work__slider {
    width: 450px;
    height: 450px;
    position: relative;
    z-index: 9;
    padding: 50px;
    background: #fff;
    border: 1px solid #e2e2e2;
    h3 {
      font-size: 24px;
      margin-bottom: 30px;
      color: ${(props) => props.theme.text.primary};
    }
    p {
      font-size: 18px;
      line-height: 30px;
      color: ${(props) => props.theme.text.secondary};
    }
    .slider-navigation {
      height: 75px;
      position: absolute;
      right: 0;
      bottom: 1px;
      display: flex;
      align-items: center;
      border-top: 1px solid #e2e2e2;
      border-left: 1px solid #e2e2e2;
      background-color: white;
      .chips {
        width: 0;
        height: 75px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        overflow: hidden;
        opacity: 0;
        transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        border-bottom: 1px solid #ffffff;
      }
      .--selected {
        background-color: ${(props) => props.theme.colors.primary.main};
        border: 1px solid ${(props) => props.theme.colors.primary.main};
      }
      button {
        width: 75px;
        height: 75px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${(props) => props.theme.colors.primary.contrast};
      }
      svg path:nth-child(2) {
        fill: #000000;
      }
      svg.arrow--right {
        transform: rotate(180deg);
      }
    }
  }
  .work__banner {
    height: 550px;
    width: calc(100vw - 299px);
    position: absolute;
    top: 145px;
    left: 299px;
    background: ${(props) => props.theme.colors.primary.main};
    overflow: hidden;
    .work__banner-container {
      width: 100%;
      height: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      svg.work__banner-logo {
        position: absolute;
        z-index: 99;
        opacity: 0;
      }
      img.work__banner-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  @media only screen and (max-width: 1279px) {
    margin-left: 20px;
  }
  @media only screen and (max-width: 768px) {
    margin-left: 20px;
  }
`;

export default Work;
