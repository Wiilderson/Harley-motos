import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: #f2f2f2;
`;

export const Item = styled.div`
  width: 70%;
  /* background-color: brown; */
  display: flex;
  justify-content: flex-end;

  > div {
    margin-top: 2em;
    width: 86%;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 2em;

    img {
      width: 148px;
      height: 140px;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 70%;

      .span1 {
        width: 40%;
        display: flex;
        flex-wrap: wrap;
      }

      > span {
        width: 21%;
      }
    }
  }
  .itemCart {
    /* background-color: #aa968a; */
  }

  .infos {
    justify-content: space-between;
    display: flex;
  }
`;

export const TotalItens = styled.div`
  width: 20%;
  background-color: #323232;
  height: 60vh;
  color: white;
  display: flex;

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 20px;

    button {
      margin-top: 55px;
      width: 11.8em;
      color: black;
      border-radius: 5px;
      border: none;
      cursor: pointer;
    }
  }
`;
