import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Wed = (props) => {
  const history = useHistory();
  let buttons;

  const clickCircle = (index) => {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.background = "rgb(221, 221, 221)";
    }
    for (let j = 0; j <= index; j++) {
      buttons[j].style.background = "rgb(255, 235, 59)";
    }
  };

  React.useEffect(() => {
    buttons = document.getElementsByClassName("btn");

    return () => {
      buttons = document.getElementsByClassName("btn");
    };
  }, []);

  return (
    <div>
      <Title>
        <span
          style={{
            background: "orange",
            padding: "0.2rem",
            color: "rgb(255, 255, 255)",
            fontWeight: "900",
            borderRadius: "5px",
          }}
        >
          수요일
        </span>
        평점 남기기
      </Title>
      <div>
        <Oneline>
          <Circle
            className="btn"
            onClick={() => {
              clickCircle(0);
            }}
          />
          <Circle
            className="btn"
            onClick={() => {
              clickCircle(1);
            }}
          />
          <Circle
            className="btn"
            onClick={() => {
              clickCircle(2);
            }}
          />
          <Circle
            className="btn"
            onClick={() => {
              clickCircle(3);
            }}
          />
          <Circle
            className="btn"
            onClick={() => {
              clickCircle(4);
            }}
          />
        </Oneline>
        <button
          style={{
            width: "100%",
            backgroundColor: "purple",
            border: "none",
            borderRadius: "5px",
            padding: "1rem",
            color: "rgb(255, 255, 255)",
          }}
          onClick={() => {
            history.goBack();
          }}
        >
          평점 남기기
        </button>
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

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 5px;
  background-color: rgb(221, 221, 221);
`;

export default Wed;
