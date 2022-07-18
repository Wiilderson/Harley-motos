import styled from "styled-components";

const media = {
  mobile: "@media(max-width: 768px)",
};

export const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: #f2f2f2;

  ${media.mobile} {
    flex-direction: column;
    gap: 30px;
  }
`;

export const Item = styled.div`
  width: 70%;
  display: flex;
  justify-content: flex-end;

  ${media.mobile} {
    width: auto;
    margin-left: 20px;
  }

  > div {
    margin-top: 2em;
    width: 86%;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 2em;

    ${media.mobile} {
      width: 100%;
    }

    img {
      width: 30%;
      height: 140px;
      ${media.mobile} {
        border-radius: 50%;
        width: 50px;
        height: 50px;
        object-fit: cover;
      }
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 70%;

      ${media.mobile} {
        width: 100%;
      }

      .span1 {
        width: 29%;
        display: flex;
        flex-wrap: wrap;

        ${media.mobile} {
          width: 40%;
          margin-left: 5px;
        }
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

  ${media.mobile} {
    width: 100%;
    height: 30vh;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 20px;

    > button {
      margin-top: 55px;
      width: 11.8em;
      color: black;
      border-radius: 5px;
      border: none;
      cursor: pointer;

      :hover {
        background-color: #323232;
        color: white;
        border: 1px solid;
      }

      ${media.mobile} {
        width: 20.4em;
        background-color: #fa6600;
        color: #ffffff;
      }
    }
  }
`;
