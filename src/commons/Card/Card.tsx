// Libraries Imports
import React, { FC } from "react";
import styled from "styled-components";

// Local Imports

// Common Imports

// Components Imports

// API Imports

// Other Imports

// Types
export type CardProps = {
  title: string;
  img: string;
};

const Card: FC<CardProps> = ({ title, img }) => {
  // Local variables

  // States

  // Queries & Mutaions

  // Functions

  // Local Data

  return (
    <Wrapper img={img}>
      <h3 className="--red-hat"> {title} </h3>
    </Wrapper>
  );
};

// Types
type WrapperProps = {
  img: string;
};

export const Wrapper = styled.div<WrapperProps>`
  width: 240px;
  height: 240px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.img});
  background-position: 50% 50%;
  background-size: 300px;
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  h3 {
    color: white;
    position: relative;
    z-index: 999;
  }
  :after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: ${(props) => props.theme.colors.primary.main};
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    opacity: 0;
    transform: scale(0.8);
  }
  :hover {
    background-size: 330px;
  }
  :hover:after {
    transform: scale(1);
    opacity: 1;
  }
`;

export default Card;
