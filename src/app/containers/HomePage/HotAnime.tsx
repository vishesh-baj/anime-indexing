import React from "react";
import { createSelector } from "reselect";
import { useAppSelector } from "../../hooks";
import { makeSelectAnimePage } from "./selectors";
import styled from "styled-components";

const HotAnimeContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const AnimeItemContainer = styled.div`
  width: 12em;
  height: 16em;
  display: flex;
  flex-direction: column;
`;

const AnimeCover = styled.div`
  width: auto;
  height: 10em;
  img {
    width: auto;
    height: 100%;
  }
`;

const AnimeTitle = styled.h6`
  margin-top: 8px;
  font-size: 19px;
  color: black;
  font-weight: 600;
`;

const stateSelector = createSelector(makeSelectAnimePage, (animePage) => ({
  animePage,
}));

const HotAnime = () => {
  const { animePage } = useAppSelector(stateSelector);
  console.log("ANIME PAGE: ", animePage);
  const isEmptyAnimePage =
    !animePage || !animePage.media || animePage.media.length === 0;
  if (isEmptyAnimePage) return null;
  return (
    <HotAnimeContainer>
      {animePage &&
        animePage.media &&
        animePage.media.map((anime) => {
          return (
            <AnimeItemContainer>
              <AnimeCover>
                <img src={anime?.coverImage?.extraLarge || ""} alt="" />
              </AnimeCover>
              <AnimeTitle>{anime?.title?.english}</AnimeTitle>
            </AnimeItemContainer>
          );
        })}
    </HotAnimeContainer>
  );
};

export default HotAnime;
