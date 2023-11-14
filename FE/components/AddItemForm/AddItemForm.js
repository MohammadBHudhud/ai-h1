import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";

import {
  FormContainer,
  Label,
  Input,
  Button,
  ItemsContainer,
  StaticsContainer,
  Static,
  DeleteButton,
  MadalContainer,
  Item,
  OutItem,
  ItemLable,
} from "./AddItemFormStyles";
import Modal from "../Modal/Modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const AddItemForm = () => {
  const [items, setItems] = useState([
    { id: 1, name: "", value: "", weight: "" },
  ]);

  const [bagWeight, setBagWeight] = useState();
  const [turns, setTurns] = useState();
  const [inBagItems, setInBagItems] = useState([]);
  const [outBagItems, setOutBagItems] = useState([]);

  ///modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  ///

  const isAddButtonDisabled = items.some(
    (item) => !item.name || !item.value || !item.weight
  );
  const handleInputChange = (id, field, value) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setItems(updatedItems);
  };

  const handleWeightChange = (event) => {
    setBagWeight(event.target.value);
  };

  const handleTurnsChange = (event) => {
    setTurns(event.target.value);
  };

  const handleAddItems = async () => {
    try {
      //await axios.post("http://localhost/gitadditem", items, bagWeight);
      const data = await axios.post(
        "http://localhost:8080/run/"+ turns +"/"+ bagWeight, items
      );

      console.log(data.data);

      //tems.filter((item) => item.id !== id);
      setInBagItems(data.data.filter((item) => item.inbag === true));
      setOutBagItems(data.data.filter((item) => item.inbag === false));
      openModal();
    } catch (error) {
      console.log("error: " + error);
    }
  };

  const handleAddItem = () => {
    const newItem = {
      id: items.length + 1,
      name: "",
      value: "",
      weight: "",
    };
    setItems([...items, newItem]);
  };

  const handleDeleteItem = (id) => {
    var updatedItems = items.filter((item) => item.id !== id);
    var id = 0;
    updatedItems.map((item) => {
      item.id = id + 1;
      id += 1;
    });
    setItems(updatedItems);
  };
  return (
    <FormContainer>
      <StaticsContainer>
        Bag Weight:
        <Static
          type="number"
          name="bagWeight"
          value={bagWeight}
          onChange={(event) => handleWeightChange(event)}
        />
        Number Of Turns:
        <Static
          type="number"
          name="turns"
          value={turns}
          onChange={(event) => handleTurnsChange(event)}
        />
      </StaticsContainer>
      {items.map((item) => (
        <ItemsContainer key={item.id}>
          <Label>
            Name:
            <Input
              type="text"
              value={item.name}
              onChange={(e) =>
                handleInputChange(item.id, "name", e.target.value)
              }
            />
          </Label>

          <Label>
            value:
            <Input
              type="number"
              value={item.value}
              onChange={(e) =>
                handleInputChange(item.id, "value", e.target.value)
              }
            />
          </Label>
          <Label>
            weight:
            <Input
              type="number"
              value={item.weight}
              onChange={(e) =>
                handleInputChange(item.id, "weight", e.target.value)
              }
            />
          </Label>
          <DeleteButton onClick={() => handleDeleteItem(item.id)}>
            <FontAwesomeIcon icon={faXmark} />
          </DeleteButton>
        </ItemsContainer>
      ))}
      <Button onClick={handleAddItem} disabled={isAddButtonDisabled}>
        Add More
      </Button>
      <Button onClick={handleAddItems} disabled={isAddButtonDisabled}>
        Add Items
      </Button>
      {/*Modal 
      {items.map((item) => (
        <ItemsContainer key={item.id}>
          <Label>*/}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <MadalContainer>
          {inBagItems[0] &&
            inBagItems.map((item) => (
              <Item>
                <ItemLable>name: {item.name}</ItemLable>
                <ItemLable>value: {item.value}</ItemLable>
                <ItemLable>weight: {item.weight}</ItemLable>
              </Item>
            ))}
          <Image src="/images/bag.jpeg" alt="bag" width={150} height={150} />
          {outBagItems[0] &&
            outBagItems.map((item) => (
              <OutItem>
                <ItemLable>name: {item.name}</ItemLable>
                <ItemLable>value: {item.value}</ItemLable>
                <ItemLable>weight: {item.weight}</ItemLable>
              </OutItem>
            ))}
        </MadalContainer>
      </Modal>
    </FormContainer>
  );
};

export default AddItemForm;
