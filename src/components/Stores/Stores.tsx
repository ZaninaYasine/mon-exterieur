// Libraries Imports
import React, { FC } from "react";
import styled from "styled-components";

// Local Imports

// Common Imports

// Components Imports

// API Imports

// Other Imports
import { StoresBanner, StoresImg, ArrowLeft, LogoWhite } from "../../img";

// Types

const Stores: FC = () => {
  // Local variables

  // States

  // Queries & Mutaions

  // Functions

  // Local Data

  return (
    <Wrapper>
      <div className="stores__information-container">
        <h2 className="--philosopher">Notre Magasin</h2>
        <div className="stores__information">
          <img src={StoresImg} alt="stores banner" />
          <p className="--red-hat">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            molestiae consequuntur eveniet vel necessitatibus recusandae quae
            porro perferendis ut sapiente harum.
          </p>
          <div className="more">
            <label htmlFor="more" className="more__label --red-hat">
              en savoir plus
            </label>
            <button type="button" className="more__btn">
              <ArrowLeft />
            </button>
          </div>
        </div>
      </div>
      <div className="stores__banner">
        <div className="stores__banner-container">
          <img
            src={StoresBanner}
            alt="stores banner"
            className="stores__banner-img"
          />
          <LogoWhite className="stores__banner-logo" />
        </div>
      </div>
    </Wrapper>
  );
};

// Styled component import

// Types

export const Wrapper = styled.section`
  width: 100%;
  height: fit-content;
  position: relative;
  max-width: 1280px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 30px auto 0 auto;
  padding: 120px 0;
  * {
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  :hover img.stores__banner-img {
    transform: scale(1.1);
  }
  :hover svg.stores__banner-logo {
    transform: scale(1.1);
    opacity: 1 !important;
  }
  :hover .stores__information-container .stores__information img {
    height: 170px;
  }
  :hover .stores__information-container .stores__information .more {
    bottom: 40px;
    opacity: 1;
  }
  .stores__information-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    h2 {
      font-size: 32px;
      margin: 0 0 30px 0;
    }
    .stores__information {
      width: 650px;
      height: 350px;
      position: relative;
      display: flex;
      align-items: center;
      flex-direction: column;
      background-color: white;
      z-index: 99;
      img {
        width: 100%;
        height: 250px;
        object-fit: cover;
      }
      p {
        margin: 20px 40px;
        font-size: 14px;
        line-height: 24px;
      }
      .more {
        width: calc(100% - 120px);
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        bottom: 0px;
        opacity: 0;
      }
      label.more__label {
        color: ${(props) => props.theme.colors.primary.main};
        text-transform: uppercase;
        font-size: 18px;
      }
      button.more__btn {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: transparent;
        svg path:nth-child(2) {
          fill: ${(props) => props.theme.colors.primary.main};
        }
      }
    }
  }
  .stores__banner {
    width: calc(100vw - 470px);
    height: 480px;
    position: absolute;
    top: 85px;
    right: 470px;
    background: ${(props) => props.theme.colors.primary.main};
    overflow: hidden;
    .stores__banner-container {
      width: 100%;
      height: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      svg.stores__banner-logo {
        position: absolute;
        z-index: 99;
        opacity: 0;
      }
      img.stores__banner-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

export default Stores;
