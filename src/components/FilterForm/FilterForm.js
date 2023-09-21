/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa6';
import { ButtonStyled, FormStyled, InputStyled } from './FilterForm.styled';
const FilterForm = () => {
  const [listCard, setListCard] = useState([]);
  const [isVisibleListCar, setIsVisibleListCar] = useState(false);
  const [inputCarValue, setInputCarValue] = useState('');

  const [inputPriceValue, setInputPriceValue] = useState('');
  const [isVisiblePriceList, setIsVisiblePriceList] = useState(false);

  const toggleVisible = e => {
    const { id } = e.currentTarget;
    console.dir(e.currentTarget.id);
    switch (id) {
      case 'btnListCar':
        setIsVisibleListCar(prev => !prev);
        break;
      case 'btnPrice':
        setIsVisiblePriceList(prev => !prev);
        break;

      default:
        break;
    }
    // setIsVisibleListCar(prev => !prev);
  };

  const hendleChangeInput = e => {
    const { value, name } = e.target;
    console.log(value);
    switch (name) {
      case 'inputCar':
        setInputCarValue(value);
        break;
      case 'inputPrice':
        setInputPriceValue(value);
        break;
      case 'inputPrice':
        setInputPriceValue(value);
        break;
      default:
        break;
    }
  };

  return (
    <FormStyled>
      <label>
        <span>Car brand</span>
        <InputStyled
          placeholder="Enter the text"
          type="text"
          id="inputCar"
          list="car"
          value={inputCarValue}
          name="inputCar"
          onChange={hendleChangeInput}
        />
        <ButtonStyled id="btnListCar" type="button" onClick={toggleVisible}>
          {!isVisibleListCar && <FaChevronDown />}
          {isVisibleListCar && <FaChevronUp />}
        </ButtonStyled>
        {isVisibleListCar && (
          <ul>
            <li>hummer</li>
            <li>hummer</li>
            <li>hummer</li>
            <li>hummer</li>
          </ul>
        )}
      </label>
      <label>
        <span>Price/ 1 hour</span>
        <InputStyled
          placeholder="To $"
          type="number"
          name="inputPrice"
          step={10}
          value={inputPriceValue}
          onChange={hendleChangeInput}
        />
        <ButtonStyled id="btnPrice" type="button" onClick={toggleVisible}>
          {!isVisiblePriceList && <FaChevronDown />}
          {isVisiblePriceList && <FaChevronUp />}
        </ButtonStyled>
        {isVisiblePriceList && (
          <ul>
            <li>10</li>
            <li>20</li>
            <li>30</li>
            <li>40</li>
          </ul>
        )}
      </label>
    </FormStyled>
  );
};

export default FilterForm;
