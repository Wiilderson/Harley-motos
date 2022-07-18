import styled from "styled-components";

const media = {
  mobile: "@media(max-width: 768px)",
};

export const HomeContainer = styled.div`
  background-color: #f2f2f2;
  display: flex;
  height: 82vh;
  flex-direction: column;
  align-items: center;

  img {
    width: 1000px;
    height: 442px;
  }

  ${media.mobile} {
    img {
      width: 380px;
      height: 236px;
    }
  }
`;
