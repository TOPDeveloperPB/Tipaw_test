/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export const CardListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 5px;
  margin: 3px;
  width: 100%;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 32px 16px;
  margin: 8px;
  width: 100%;
  max-width: 280px;

  @media (max-width: 930px) {
    max-width: 100%;
  }
`;

export const IconContainer = styled.div`
  background-color: #8fdeb5;
  color: white;
  border-radius: 50%;
  padding: 8px 12px;
  padding-top: 13px;
  margin-bottom: 16px;
`;

export const Title = styled.h3`
  color: #181818;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  color: #707070;
  text-align: center;
`;
