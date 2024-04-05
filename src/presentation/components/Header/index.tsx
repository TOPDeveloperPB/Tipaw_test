/** @jsxImportSource @emotion/react */
import * as Styled from "../../pages/HomePage/styled";
import React, { FC } from "react";
import { BaseProps, InsideProps } from "../../pages";
import { FaRegBell } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { css, useTheme } from "@emotion/react";
import { GoDotFill } from "react-icons/go";
import styled from "@emotion/styled";

export const Header: FC<InsideProps> = ({ profile }) => {
  const theme = useTheme();
  const LanguageSpan = styled.span`
    color: ${(props) => props.theme.color.blue.default};
    font-family: ${(props) => props.theme.font.default};
  `;

  const HiddenDiv = styled.div`
    @media (max-width: 490px) {
      visibility: hidden;
    }
  `;

  const UserDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
  `;
  const DropdownDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
  `;
  const IconStyle = css`
    margin-right: 8px;
  `;
  return (
    <Styled.HeaderContainer>
      <h3>My Tipaw</h3>
      <UserDiv>
        <HiddenDiv>
          <LanguageSpan>
            Fr <GoDotFill size={10} />
          </LanguageSpan>
          Nl
        </HiddenDiv>
        <DropdownDiv>
          <FaRegBell size={24} css={IconStyle} color={"gray"} />
          <img src={profile.avatar} alt="some guy with a dog" />
          <h4 className={"bg-red-400"}>{profile.name}</h4>
          <MdKeyboardArrowDown size={32} color={"gray"} />
        </DropdownDiv>
      </UserDiv>
    </Styled.HeaderContainer>
  );
};
