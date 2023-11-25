import styled from "styled-components";

export const SearchImg = styled.img`
  position: absolute;
  top: 1.4rem;
  left: 1.6rem;
  width: 1.6rem;
  height: auto;
`;
export const CloseImg = styled.img`
  cursor: pointer;
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  width: 1.6rem;
  height: auto;
`;

export const SerachInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: var(--Gray1-80);
`;

export const ContainerSearch = styled.div`
  position: relative;
  width: 34rem;
  padding: 1.3rem 1.6rem 1.3rem 4rem;
  background-color: var(--Gray1-80);
  border-radius: 1rem;

  &:focus-within {
    outline: 0.1rem solid var(--Gray5);
  }

  @media screen and (min-width: 768px) {
    width: 70.5rem;
  }

  @media screen and (min-width: 1200px) {
    width: 106rem;
  }
`;
