// Creating Split Screens

import styled from "styled-components";
import { SplitScreen } from "./SplitScreen";

const LeftStyle = styled.h1`
  text-align: center;
  background-color: green;
  height: 100vh;
`;

const MiddleStyle = styled.h1`
  text-align: center;
  color: #fff;
  font-weight: bold;
  background-color: navy;
  height: 100vh;
`;

const RightStyle = styled.h1`
  text-align: center;
  background-color: orange;
  height: 100vh;
`;

const LeftHandComponent = ({ leftHandText }) => {
  return <LeftStyle>{leftHandText}</LeftStyle>;
};

const MiddleComponent = ({ middleText }) => {
  return <MiddleStyle>{middleText}</MiddleStyle>;
};

const RightHandComponent = ({ rightHandText }) => {
  return <RightStyle>{rightHandText}</RightStyle>;
};

function SplitScreenApp() {
  return (
    <SplitScreen leftWeight={2} middleWeight={3} rightWeight={5}>
      <LeftHandComponent leftHandText="Left Pane" />
      <MiddleComponent middleText="Middle Pane" />
      <RightHandComponent rightHandText="Right Pane" />
    </SplitScreen>
  );
}

export default SplitScreenApp;
