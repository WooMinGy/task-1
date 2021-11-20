import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Grade = (props) => {
  const history = useHistory();

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
          일요일
        </span>
        평점 남기기
      </Title>
      <div>
        <Oneline>
          <Circle />
          <Circle />
          <Circle />
          <Circle />
          <Circle />
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

export default Grade;

// rgb(255, 235, 59); 노란색
// rgb(221, 221, 221); 회색
