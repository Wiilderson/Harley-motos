import styled from "styled-components";

export const ContainerHeader = styled.div`
  width: 100%;
  margin: auto;
  padding-top: 42px;
  height: 130px;
  background-color: #f2f2f2;
`;

export const Menu = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1300px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;
    list-style: none;
    li {
      cursor: pointer;
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 17px;
      line-height: 20px;
      margin-left: 35px;
    }
  }
`;
