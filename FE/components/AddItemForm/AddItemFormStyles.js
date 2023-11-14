import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 600px;
  margin: 198px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  @media screen and (max-width: 480px) {
    margin: auto;
  }

  & > div:not(:last-child) {
    //not last child, because the last child is the buttons
    margin-bottom: 10px; /* Add margin between items except for the last item */
    border-bottom: 3px double #4caf50; /* Add a border between items */
    padding-bottom: 10px; /* Optional: Add padding at the bottom of each item */
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  margin-right: 10px;
`;

export const StaticsContainer = styled.label`
  display: flex;
  margin-bottom: 10px;
  border-bottom: 3px double #277d2a;
  padding-bottom: 10px;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
export const Static = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 4px;
  margin-right: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 4px;
`;

export const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  margin: 20px;
  border: none;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
`;

export const DeleteButton = styled.button`
  background-color: #f44336;
  color: white;
  padding: 5px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const MadalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.div`
  background-color: #55b959;
  padding: 10px;
  margin: 8px;
  display: flex;
  flex-direction: column;
  width: 150px;
  border-radius: 20px;
`;

export const OutItem = styled.div`
  background-color: #e14336;
  padding: 10px;
  margin: 8px;
  display: flex;
  flex-direction: column;
  width: 150px;
  border-radius: 20px;
`;

export const ItemLable = styled.label`
  font-size: 12px;
`;
