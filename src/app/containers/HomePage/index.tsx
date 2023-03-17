import { useEffect } from "react";
import styled from "styled-components";
import animeService from "../../services/animeService";
import { Dispatch } from "redux";
import { setAnimePage } from "./homePageSlice";
import { GetAnimePage } from "../../services/animeService/GetAnimePage";
import { useAppDispatch } from "../../hooks";
import HotAnime from "./HotAnime";
interface IHomePageProps {}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const actionDisPatch = (dispatch: Dispatch) => ({
  setAnimePage: (page: GetAnimePage["Page"]) => dispatch(setAnimePage(page)),
});

const HomePage = (props: IHomePageProps) => {
  const { setAnimePage } = actionDisPatch(useAppDispatch());
  const fetchAnimePage = async () => {
    const animePage = await animeService
      .getAnimePage(0)
      .catch((err) => console.log("ERROR: ", err));
    if (animePage) {
      console.log("ANIME PAGE: ", animePage);
      setAnimePage(animePage);
    }
  };
  useEffect(() => {
    fetchAnimePage();
  }, []);

  return (
    <Container>
      <h1>Hot Anime</h1>
      <HotAnime />
    </Container>
  );
};

export default HomePage;
