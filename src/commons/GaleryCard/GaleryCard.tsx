// Libraries Imports
import React, { FC } from "react";
import styled from "styled-components";

// Local Imports

// Common Imports

// Components Imports

// API Imports

// Other Imports
import { LogoWhite } from "../../img";

// Types
type GaleryCardProps = {
  img: string;
};

const GaleryCard: FC<GaleryCardProps> = ({ img }) => {
  // Local variables

  // States

  // Queries & Mutaions

  // Functions

  // Local Data

  return (
    <Wrapper>
      <LogoWhite className="galery__thumbnail-logo" />
      <img src={img} alt="galery thumbnail" />
    </Wrapper>
  );
};

// Styled component import

// Types

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  > * {
    transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
  }
  :hover img {
    transform: scale(1.1);
  }
  :hover svg.galery__thumbnail-logo {
    transform: scale(1.1);
    opacity: 1;
  }
  svg.galery__thumbnail-logo {
    position: absolute;
    z-index: 99;
    opacity: 0;
  }
`;

export default GaleryCard;
