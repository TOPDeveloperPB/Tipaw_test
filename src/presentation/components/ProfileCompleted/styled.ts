import styled from "@emotion/styled";
import { theme } from "../../../application/theme";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  align-items: start;
  background: white;
  border-radius: 8px;
  padding: 16px;
  margin: 10px;
  margin-right: 4px;
  @media (max-width: 710px) {
    height: 200px;
    flex-direction: column;
    padding: 30px 0px;
    width: 100%;
  }
`;

export const ProgressSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 15px;
`;

export const ProgressText = styled.div`
  margin-right: 16px;
  font-size: 18px;
  color: ${theme.color.blue.default};
`;

export const ProgressMessage = styled.div`
  margin-right: 16px;
  font-size: 18px;
  color: ${theme.color.black.default};
`;

export const ProgressBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 350px;
  height: 5px;
  border-radius: 10px;
`;

export const ProgressBar = styled.div`
  background: ${theme.color.green.default};
  height: 100%;
  border-radius: 10px;
  width: 300px;
  transition: width 0.3s ease;
  padding: 5px;
  @media (max-width: 430px) {
    max-width: 220px;
  }
`;
