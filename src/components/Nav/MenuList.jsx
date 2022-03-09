import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Ul = styled.ul`
  margin-top: 0;
  padding-left: 1%;
  background: #343a40;
  height: 75px;
  width: 100vw;
  list-style: none;
  align-items: center;
  display: flex;
  font-family: "Poppins", sans-serif;

  li {
    color: #28a745;
    font-weight: bold;
    border: 1px solid #28a745;
    padding: 10px;
    border-radius: 5px;
    margin: 10px;
  }

  @media (max-width: 768px) {
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1.5rem;
    background-color: rgba(34, 34, 34, 0.85);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    transition: transform 0.3s ease-in-out;

    li {
      margin: 0;
      padding: 5%;
      color: #fff;
      border: 0;
      border-radius: 0;
      width: 100vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: rgba(34, 34, 34, 0.85);
      }
    }
  }
`;

const MenuList = ({ open }) => {
  return (
    <Ul open={open}>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/business">
        <li id="business">Business</li>
      </Link>
      <Link to="/technology">
        <li id="technology">Technology</li>
      </Link>
      <Link to="/science">
        <li id="science">Science</li>
      </Link>
      <Link to="/sports">
        <li id="sports">Sports</li>
      </Link>
      <Link to="/entertainment">
        <li id="entertainment">Entertainment</li>
      </Link>
    </Ul>
  );
};

export default MenuList;
