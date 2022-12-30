import styled from "styled-components";

export const Section = styled.section`
  display: ${({ flex }) => (flex ? " flex" : "block")};
  align-items: flex-start;
`;
