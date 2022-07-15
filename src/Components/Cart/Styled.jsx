import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: gray;
  display: flex;
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
