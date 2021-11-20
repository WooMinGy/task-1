import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

import Mainpage from "./Mainpage";
import Grade from "./Grade";
import Mon from "./Mon";
import Tue from "./Tue";
import Wed from "./Wed";
import Thu from "./Thu";
import Fri from "./Fri";
import Sat from "./Sat";

function App() {
  return (
    <div className="App">
      <Container>
        <Switch>
          <Route path="/" exact component={Mainpage} />
          <Route path="/review/일" component={Grade} />
          <Route path="/review/월" component={Mon} />
          <Route path="/review/화" component={Tue} />
          <Route path="/review/수" component={Wed} />
          <Route path="/review/목" component={Thu} />
          <Route path="/review/금" component={Fri} />
          <Route path="/review/토" component={Sat} />
        </Switch>
      </Container>
    </div>
  );
}

const Container = styled.div`
  max-width: 350px;
  width: 80vw;
  height: 90vh;
  margin: 5vh auto;
  padding: 5vh 5vw;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

export default App;
