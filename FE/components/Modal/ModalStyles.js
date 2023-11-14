import styled from "styled-components";

export const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  overflow-y: auto; /* Enable vertical scrolling */
  max-height: 80vh; /* Limit the height of the modal content */
`;

export const DeleteButton = styled.button`
  color: red;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  position: absolute;
`;

export const Children = styled.button`
  margin: 35px 20px 0px 20px;
`;
