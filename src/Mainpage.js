import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Mainpage = (line) => {
  const seven_lines = ["일", "월", "화", "수", "목", "금", "토"];
  const CircleNum = ["1", "2", "3", "4", "5"];
  const history = useHistory();

  let [count, setNum] = React.useState(null);
  let buttons;

  function RandomCircle() {
    setNum((count = Math.floor(Math.random() * 6)));
    for (let i = 0; i < count; i++) {
      buttons[i].style.background = "rgb(255, 235, 59)";
    }
  }

  React.useEffect(() => {
    for (let j = 0; j < seven_lines.length; j++) {
      buttons = document.getElementsByClassName(`btn${seven_lines[j]}`);
      RandomCircle();
    }

    return () => {
      buttons = document.getElementsByClassName("btn");
    };
  }, []);

  return (
    <div>
      <div>
        <Title>내 일주일은?</Title>
        {seven_lines.map((line, index) => {
          return (
            <div>
              <Oneline>
                <Sun_Sat>{line}</Sun_Sat>
                {CircleNum.map((props, secondIndex) => {
                  return (
                    <div>
                      <Circle className={`btn${line}`} />
                    </div>
                  );
                })}
                <Triangle
                  onClick={() => {
                    history.push(`/review/${line}`);
                  }}
                />
              </Oneline>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Title = styled.h3`
  text-align: center;
`;

const Oneline = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0px;
  width: 100%;
`;

const Sun_Sat = styled.p`
  margin: 0px 0.5rem 0px 0px;
  font-weight: bold;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 5px;
  background-color: rgb(221, 221, 221);
`;

const Triangle = styled.div`
  appearance: none;
  background-color: transparent;
  border-color: transparent purple;
  width: 0px;
  height: 0px;
  border-top-width: 1rem;
  border-top-style: solid;
  border-bottom-width: 1rem;
  border-bottom-style: solid;
  border-left-width: 1.6rem;
  border-left-style: solid;
  color: gray;
  cursor: pointer;
`;

export default Mainpage;
