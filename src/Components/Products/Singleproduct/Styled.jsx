import styled from "styled-components";

const media = {
  mobile: "@media(max-width: 768px)",
};

export const Container = styled.div`
  background-color: #f2f2f2;
  display: flex;
  width: 100%;
  height: 82vh;

  ${media.mobile} {
    flex-direction: column;
  }
`;

export const ImgProduct = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  height: 100%;
  /* background-color: green; */

  ${media.mobile} {
    width: 100%;
    height: auto;
  }

  .img {
    margin-left: 30%;
    margin-top: 10px;
    width: 65%;
    height: 400px;

    ${media.mobile} {
      margin-left: 0%;
      margin-top: 0px;
      width: 100%;
      height: 325px;
    }
  }
`;

export const InforProduct = styled.div`
  width: 50%;

  ${media.mobile} {
    width: 100%;
  }
  div {
    margin-left: 50px;
    width: 50%;

    ${media.mobile} {
      width: 80%;
    }

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

      ${media.mobile} {
        width: 100%;
        height: 40px;
        border-radius: 6px;
        box-shadow: 0 0 10;
      }
    }
  }

  .Link {
    text-decoration: none;
    margin-left: 10px;
  }
`;
