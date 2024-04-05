import React, { FC } from "react";
import { BaseProps } from "./types";
import * as Styled from "./styled";
import { Global, useTheme } from "@emotion/react";
import { Header } from "../../components/Header";
import { AnnouncementContainer, resetStyles } from "./styled";
import { ProfileCompleted } from "../../components/ProfileCompleted";
import { CardData, CardList } from "../../components/Cards/CardList";
import {
  Accordion,
  AnnouncementTitle,
} from "../../components/Accordion/accordion";
export * from "./types";

const mockCards: CardData[] = [
  { id: 1, title: "Verification", description: "You verified your account" },
  {
    id: 2,
    title: "Profile picture",
    description: "You added your profile picture",
  },
  { id: 3, title: "Parents", description: "You added the parents" },
  { id: 3, title: "Litter", description: "You created the litter" },
];

export const HomePage: FC<BaseProps> = ({ announcements, profile }) => {
  const theme = useTheme();

  return (
    <Styled.PageWrapper>
      <Global styles={resetStyles} />
      <Header profile={profile} />
      <Styled.StatusContainer>
        <ProfileCompleted profile={profile} />
        <CardList cards={mockCards} />
      </Styled.StatusContainer>
      <Styled.AnnouncementsContainer>
        <AnnouncementTitle>Announcements from Tipaw</AnnouncementTitle>
        {announcements.map((announcement, index) => (
          <Styled.AnnouncementsContainer key={announcement.id}>
            <Accordion
              key={announcement.id}
              title={announcement.title}
              content={announcement.content}
            />
          </Styled.AnnouncementsContainer>
        ))}
      </Styled.AnnouncementsContainer>
    </Styled.PageWrapper>
  );
};
