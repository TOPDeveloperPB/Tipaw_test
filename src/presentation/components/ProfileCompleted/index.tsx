import { FC } from "react";
import { InsideProps } from "../../pages";
import {
  Container,
  ProgressBar,
  ProgressBarContainer,
  ProgressMessage,
  ProgressSection,
  ProgressText,
} from "./styled";
import { css } from "@emotion/react";
import ButtonUsage from "../buttons";
import styled from "@emotion/styled";
export const ProfileCompleted: FC<InsideProps> = ({ profile }) => {
  const progressStyle = css`
    width: ${profile.globalProgress}%;
  `;

  return (
    <Container>
      <ProgressSection>
        <ProgressText>
          You successfully completed your profile at Tipaw
        </ProgressText>
        <ProgressMessage>Now you can use Tipaw for 100% 🎉</ProgressMessage>
      </ProgressSection>
      <ProgressSection>
        <div>
          Profile Completed <strong>{profile.globalProgress}%</strong>
        </div>
        <ProgressBarContainer>
          <ProgressBar css={progressStyle} />
        </ProgressBarContainer>
      </ProgressSection>
    </Container>
  );
};
