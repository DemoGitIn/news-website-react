import React, { useState } from 'react';
import styled from 'styled-components';
import MenuList from './MenuList';

const StyledBurger = styled.div`
  width: 4rem;
  height: 4rem;
  padding: 10px;
  position: fixed;
  bottom: 2vh;
  right: 3vw;
  z-index: 999;
  border-radius: 50%;
  background-color: #fff;
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div { 
    
    width: 2.7rem;
    height: 0.25rem;
    background-color: #333;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
      margin-left: ${({ open }) => open ? '0.3rem' : '0rem'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
      margin-left: ${({ open }) => open ? '0.3rem' : '0rem'};
    }
  }
`;


const Burger = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <MenuList open={open}/>
    </>
  )
}

export default Burger