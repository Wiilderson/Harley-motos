import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 851px;
  margin: auto;
  background-color: #fafafa;
  flex-wrap: wrap;
`;

export const CardsNewsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 1120px;
  height: 405px;
  margin-top: 30px;
  flex-wrap: wrap;
  gap: 10px 20px;
`;

export const CardNews = styled.div`
  width: 230px;
  height: 340px;
  background: #ffffff;
  box-shadow: 0px 0px 77px rgba(0, 0, 0, 0.06);
  border-radius: 15px;
  text-align: center;

  > img {
    margin-top: 10px;
    height: 200px;
    width: 70%;
  }
`;

export const CardInfos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h3 {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    line-height: 19px;
    color: #656465;
  }

  p {
    margin: 15px 0px 0px 0px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    color: #656465;
  }
`;

export const Paragrf = styled.div`
  width: 290px;
`;
