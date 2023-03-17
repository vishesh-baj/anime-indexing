import React from "react";
import styled from "styled-components";
import HomePage from "./app/containers/HomePage";
type Props = {};

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = (props: Props) => {
  return (
    <AppContainer>
      <HomePage />
    </AppContainer>
  );
};

export default App;
