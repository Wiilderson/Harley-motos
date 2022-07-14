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
    align-items: center;
    li {
      cursor: pointer;
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 17px;
      line-height: 20px;
      margin-left: 35px;
    }
    .Link {
      text-decoration: none;
    }
  }
`;

export const Dropdown = styled.div`
  /* width: 100px; */
  user-select: none;
  position: relative;
`;

export const DropdownBtn = styled.button`
  /* padding: 15px 20px; */
  background: #088b34;
  box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  border: none;
  border-radius: 6px;
  height: 34px;

  > span {
    font-size: 17px;
    color: #f7f8f8;
    align-items: center;
    margin-left: 9px;
  }
`;

export const DropdownContent = styled.div`
  position: absolute;
  top: 110%;
  left: 0;
  padding: 10px;
  background: #fff;
  box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
  font-weight: 500;
  color: #333;

  div {
    padding: 10px;
    cursor: default;
    transition: all 0.2s;
  }
`;

export const FlexCart = styled.div`
  width: 290px;
  display: flex;
  > img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    object-fit: cover;
  }
  > div {
    display: flex;
    padding: 0 20px;
    align-items: center;
    gap: 10px;
  }
`;

export const SpanCont = styled.div`
  width: 110px;
`;
