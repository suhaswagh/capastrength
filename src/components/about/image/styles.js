import styled from "styled-components";

export const Container = styled.div`
  display: block;
  flex: 1;
  min-width: ${({ fullWidth }) => (fullWidth ? "100%" : "50%")};
  max-height: 500px;
  max-width: 50%;

  margin: ${({ fullWidth }) => (fullWidth ? "50px 0" : 0)};
`;

export const ImageHOlder = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-height: 500px;
  min-width: 50%;
`;
