/* eslint-disable react/no-array-index-key */
// Libraries Imports
import React, { FC } from "react";
import styled from "styled-components";
import GaleryCard from "../../commons/GaleryCard/GaleryCard";

// Local Imports

// Common Imports

// Components Imports

// API Imports

// Other Imports
import {
  ArrowLeft,
  galery1,
  galery2,
  galery3,
  galery4,
  galery5,
} from "../../img";

// Types

const Galery: FC = () => {
  // Local variables

  // States

  // Queries & Mutaions

  // Functions

  // Local Data
  const galeryImages = [galery1, galery2, galery3, galery4, galery5];

  return (
    <Wrapper>
      <div className="galery__description">
        <h2 className="--philosopher">Notice &amp; installation</h2>
        <span className="--red-hat">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          optio numquam nisi assumenda eos nam possimus ex aut ipsa molestias.
        </span>
        <div className="more">
          <label htmlFor="more" className="more__label --red-hat">
            en savoir plus
          </label>
          <button type="button" className="more__btn">
            <ArrowLeft />
          </button>
        </div>
      </div>
      {galeryImages.map((image, index) => {
        return <GaleryCard key={index} img={image} />;
      })}
    </Wrapper>
  );
};

// Styled component import

// Types

export const Wrapper = styled.section`
  width: fit-content;
  max-width: 1280px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  margin: 0 auto;
  > div {
    width: 100%;
    height: 413.33px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .galery__description {
    width: 100%;
    height: 100%;
    min-height: 414px;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 60px 0px 60px;
    background-color: ${(props) => props.theme.colors.secondary.main};
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    > * {
      transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    }
    :hover {
      padding: 0 60px 80px 60px;
      background-color: ${(props) => props.theme.colors.primary.main};
      h2 {
        color: ${(props) => props.theme.colors.secondary.main};
      }
      .more {
        bottom: 50px;
        opacity: 1;
      }
    }
    h2 {
      font-size: 38px;
      margin-bottom: 20px;
      color: ${(props) => props.theme.colors.primary.main};
    }
    span {
      color: ${(props) => props.theme.colors.primary.contrast};
      line-height: 24px;
    }
    .more {
      width: calc(100% - 120px);
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      bottom: 20px;
      opacity: 0;
    }
    label.more__label {
      color: ${(props) => props.theme.colors.primary.contrast};
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
    }
  }
  @media only screen and (max-width: 1279px) {
    grid-template-columns: 1fr 1fr;
    margin: 20px;
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 20px;
  }
`;

export default Galery;
