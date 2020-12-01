// Libraries Imports
import React, { FC } from "react";
import styled from "styled-components";

// Local Imports

// Common Imports

// Components Imports

// API Imports

// Other Imports
import { Letter, ArrowLeft } from "../../img";

// Types

const Configuration: FC = () => {
  // Local variables

  // States

  // Queries & Mutaions

  // Functions

  // Local Data

  return (
    <Wrapper id="config">
      <Letter className="icon__logo" />
      <h2 className="--philosopher">Configurez votre espace</h2>
      <span className="--red-hat">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus optio
        numquam nisi assumenda eos nam possimus ex aut ipsa molestias.
      </span>
      <ArrowLeft className="icon__arrow" />
    </Wrapper>
  );
};

// Styled component import

// Types

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 200px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 20%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.primary.main};
  overflow: hidden;
  cursor: pointer;
  :after {
    content: "";
    width: 100%;
    height: 0px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 9;
    background-color: ${(props) => props.theme.colors.secondary.main};
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }
  :hover:after {
    height: 100%;
  }
  :hover .icon__logo path {
    fill: ${(props) => props.theme.colors.primary.main};
  }
  :hover .icon__arrow {
    right: 100px;
  }
  h2,
  span {
    position: relative;
    z-index: 99;
    color: ${(props) => props.theme.colors.primary.contrast};
    line-height: 24px;
  }
  h2 {
    font-size: 32px;
    margin-bottom: 15px;
  }
  .icon__logo {
    position: absolute;
    left: 0;
    z-index: 999;
    transform: rotate(-25deg);
    path {
      fill: ${(props) => props.theme.colors.secondary.main};
      transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    }
  }
  .icon__arrow {
    position: absolute;
    right: 120px;
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 999;
  }
`;

export default Configuration;
