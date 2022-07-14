import styled from "styled-components";

export const Container = styled.div`
  background-color: #f2f2f2;
  display: flex;
  width: 100%;
  height: 400px;
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
    width: 400px;
    height: 400px;
  }
`;

export const InforProduct = styled.div`
  width: 50%;
  /* background-color: gray; */

  > div {
    margin-left: 30px;
    width: 50%;
  }

  .Link {
    text-decoration: none;
    margin-left: 10px;
  }
`;
