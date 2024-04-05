import styled from "@emotion/styled";

import { css } from "@emotion/react";

export const resetStyles = css`
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");

  * {
    font-family: "Roboto", sans-serif;
  }
  html {
    background-color: #f8f8f8;
  }
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    text-decoration: none;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #f0f0f0;

  > div:first-child {
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }

  > div:nth-child(2) {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #333;

    > div {
      margin-right: 24px;
      cursor: pointer;
    }

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 10px;
    }

    span {
      display: inline-block;
      margin-right: 8px;
    }
  }
`;

export const GlobalProgress = styled.div``;

export const ProgressContainer = styled.div`
  display: flex;

  flex-direction: row;
`;

export const StatusContainer = styled.div`
  background-color: #ffffff;
  margin: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  padding-right: 7px;
  padding-top: -20px;
`;
export const AnnouncementsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AnnouncementContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
