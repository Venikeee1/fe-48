import styled from 'styled-components';

export const Button = styled.button`
  display: inline-flex;
  text-decoration: none;
  position: relative;
  background: transparent;
  border-radius: 1px;
  font-family: Syne, sans-serif;
  background-repeat: no-repeat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #3a342a;
  padding: 18px 52px;
  border: 2px solid #c0a775;
  box-shadow: 2px 2px 20px #ffdfa21a, 10px 10px 100px #ffe4b04d;
  z-index: 12;
  text-transform: uppercase;
  transition: all ease-in 0.2s;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    max-width: 100%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(97.3deg, #ffe49f 0%, #977a51 100%), #ffffff;
    z-index: -1;
    transition: all 0.5s ease-in-out;
    opacity: 1;
  }

  &:after {
    content: '';
    position: absolute;
    max-width: 100%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(97.3deg, #ffebb7 0%, #e2c08d 100%), #ffffff;
    box-shadow: 2px 2px 20px #ffdfa21a, 10px 10px 100px #ffe4b04d;
    z-index: -1;
    transition: all 0.5s ease-in-out;
    opacity: 0;
  }
`;
