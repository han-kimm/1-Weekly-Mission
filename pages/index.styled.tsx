import styled from "styled-components";

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30rem;
    height: 10rem;
    border-radius: 1rem;
    color: var(--White);
    font-size: 3rem;
    font-weight: 600;
  }
`;

export const LeftWrapper = styled(LinkWrapper)`
  grid-area: left;

  & a {
    background-image: linear-gradient(90deg, #6d6afe, #6ae3fe);
  }
`;

export const RightWrapper = styled(LinkWrapper)`
  grid-area: right;

  & a {
    background-image: linear-gradient(90deg, #6ae3fe, #cc99ff);
  }
`;

export const StyledMain = styled.main`
  display: grid;
  grid-template-areas:
    "logo"
    "left"
    "right";
  height: 100vh;
  background-color: var(--Gray1);
  font-size: 2.4rem;

  @media screen and (min-width: 768px) {
    grid-template: 1fr 1fr 1fr / 1fr 1fr;
    grid-template-areas:
      "logo logo"
      "left right";
  }
`;

export const Logo = styled.img`
  width: 30rem;
  grid-area: logo;
  justify-self: center;
  align-self: center;
`;
