/* eslint-disable react/no-array-index-key */
// Libraries Imports
import React, { FC } from "react";
import styled from "styled-components";

// Local Imports

// Common Imports

// Components Imports
import { Card } from "../../commons";

// API Imports

// Other Imports
import {
  banner,
  panneau,
  grille,
  gabion,
  lameBois,
  lameCommposite,
} from "../../img";

// Types
import { CardProps } from "../../commons/Card/Card";

const Banner: FC = () => {
  // Local variables

  // States

  // Queries & Mutaions

  // Functions

  // Local Data
  const cards: CardProps[] = [
    { title: "Lame Commposite", img: lameCommposite },
    { title: "Lame en Bois", img: lameBois },
    { title: "Panneau Bois", img: panneau },
    { title: "Grille Rigide", img: grille },
    { title: "Gabion", img: gabion },
  ];

  return (
    <Wrapper>
      <img src={banner} alt="banner" className="banner__img" />
      <div className="banner__cards">
        {cards.map((card, index) => {
          return <Card key={index} title={card.title} img={card.img} />;
        })}
      </div>
    </Wrapper>
  );
};

// Styled component import

// Types

export const Wrapper = styled.div`
  position: fixed;
  top: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  .banner__img {
    width: 100vw;
    height: 350px;
    margin-bottom: 35px;
    object-fit: cover;
  }
  .banner__cards {
    width: 100%;
    max-width: 1280px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    margin: 0 auto;
  }
`;

export default Banner;
