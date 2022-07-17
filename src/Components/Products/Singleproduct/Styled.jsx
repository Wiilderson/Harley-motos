import styled from "styled-components";

export const Container = styled.div`
  background-color: #f2f2f2;
  display: flex;
  width: 100%;
  height: 82vh;
`;

export const ImgProduct = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  height: 100%;
  /* background-color: green; */

  .img {
    margin-left: 30%;
    margin-top: 10px;
    width: 65%;
    height: 400px;
  }
`;

export const InforProduct = styled.div`
  width: 50%;

  div {
    margin-left: 50px;
    width: 50%;

    h4 {
      font-size: 14px;
    }

    button {
      border: none;
      margin-top: 30px;
      cursor: pointer;
      background-color: #4e4e4e;
      color: #ffffff;

      :hover {
        background-color: #835d5d;
      }
    }
  }

  .Link {
    text-decoration: none;
    margin-left: 10px;
  }
`;
