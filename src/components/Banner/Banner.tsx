/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */

// Libraries Imports
import React, { FC, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { connect, useDispatch } from "react-redux";
import * as actionCreators from "../../actions";

// Local Imports

// Common Imports

// Components Imports
import { Card } from "../../commons";

// API Imports

// Other Imports
import { panneau, grille, gabion, lameBois, lameCommposite } from "../../img";

// Types
import { CardProps } from "../../commons/Card/Card";

type BannerProps = {
  workBanner?: string;
};
const Banner: FC<BannerProps> = ({ ...props }) => {
  // Local variables
  const dispatch = useDispatch();
  const workBanner = props?.workBanner;

  // States

  // Queries & Mutaions

  // Functions
  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/photos/random?client_id=Htf6bZh-KBiyEg9GPQjei6ySq-zs9dULZluZp2-UdtA"
      )
      .then((response) => {
        const ImageUrl: any = response.data.urls.full;
        dispatch({ type: "CHANGE_IMAGE", image: ImageUrl });
      });
  });

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
      <img src={workBanner} alt="banner" className="banner__img" />
      <div className="banner__cards">
        {cards.map((card, index) => {
          return <Card key={index} title={card.title} img={card.img} />;
        })}
        <i />
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
    overflow-x: auto;
  }
  i {
    width: 1px;
    display: none;
  }
  @media only screen and (max-width: 1279px) {
    .banner__cards {
      padding: 0 20px;
      ::-webkit-scrollbar {
        display: none;
      }
    }
    i {
      display: block;
    }
  }
  @media only screen and (max-width: 768px) {
    .banner__cards {
      padding: 0 20px;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      ::-webkit-scrollbar {
        display: none;
      }
    }
    i {
      display: block;
    }
  }
`;

const mapStateToProps = (state: any) => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(Banner);
