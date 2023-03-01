import { useState } from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBody = styled.div`
  background-color: #fff;
  margin: 10% auto;
  padding: 1.3rem;
  width: 50%;
`;

const Button = styled.button`
  width: 10rem;
  height: 3rem;
  background-color: navy;
  color: #fff;
`;

const Modal = ({ children }) => {
  const [shouldShow, setShouldShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShouldShow(true)}>Show Modal</Button>
      {shouldShow && (
        <ModalBackground onClick={() => setShouldShow(false)}>
          <ModalBody onClick={(e) => e.stopPropagation()}>
            <Button onClick={() => setShouldShow(false)}>Hide Modal</Button>
            {children}
          </ModalBody>
        </ModalBackground>
      )}
    </>
  );
};

export default Modal;
