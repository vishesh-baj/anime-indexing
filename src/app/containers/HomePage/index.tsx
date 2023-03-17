import { useEffect } from "react";
import styled from "styled-components";
import animeService from "../../services/animeService";
import { Dispatch } from "redux";
interface IHomePageProps {}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const actionDisPatch = (dispatch: Dispatch) => {
  
};

const HomePage = (props: IHomePageProps) => {
  const fetchAnimePage = async () => {
    const animePage = await animeService
      .getAnimePage(0)
      .catch((err) => console.log("ERROR: ", err));
    if (animePage) {
      console.log("ANIME PAGE: ", animePage);
    }
  };
  useEffect(() => {
    fetchAnimePage();
  }, []);

  return (
    <Container>
      <h1>Hot Anime</h1>
    </Container>
  );
};

export default HomePage;
