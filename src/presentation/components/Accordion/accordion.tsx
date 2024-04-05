import React, { useState, useRef, useLayoutEffect } from "react";
import styled from "@emotion/styled";
import { theme } from "../../../application/theme";

const AccordionSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

const AccordionTitle = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.color.blue.default};
  border: none;
  padding: 25px;
  font-size: 20px;
  cursor: pointer;
  outline: none;
  margin: 15px;
  margin-bottom: 0;
  border-radius: 8px 8px 0px 0px;
  transition: background-color 0.6s ease;
  color: white;
`;

export const AnnouncementTitle = styled.div`
  font-size: 25px;
  margin-left: 30px;
`;

const AccordionContent = styled.div<{
  ref: React.RefObject<HTMLDivElement>;
  maxHeight: string;
}>`
  background-color: white;
  overflow: hidden;
  transition: max-height 0.3s ease;
  margin: 15px;
  margin-top: 0;
  border-radius: 0px 0px 8px 8px;
`;

const ContentInner = styled.div`
  padding: 15px;
  background-color: white;
  border-left: 3px ${theme.color.blue.default};
`;

interface AccordionProps {
  title: string;
  content: string;
}

export const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // We use this to get the height of the content for the smooth animation
  useLayoutEffect(() => {
    contentRef.current!.style.maxHeight = isActive
      ? `${contentRef.current!.scrollHeight}px`
      : "0px";
  }, [contentRef, isActive]);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <AccordionSection>
      <AccordionTitle onClick={toggleAccordion}>
        {title}
        <span>{isActive ? "▲" : "▼"}</span>
      </AccordionTitle>
      <AccordionContent ref={contentRef} maxHeight={isActive ? "1000px" : "0"}>
        <ContentInner dangerouslySetInnerHTML={{ __html: content }} />
      </AccordionContent>
    </AccordionSection>
  );
};
