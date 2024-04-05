import React from 'react';
import { CardContainer, IconContainer, Title, Description } from './styled';

interface CardProps {
    title: string;
    description: string;
    icon: React.ReactNode; // Иконка как React компонент
}

export const Card: React.FC<CardProps> = ({ title, description, icon }) => {
    return (
        <CardContainer>
            <IconContainer>{icon}</IconContainer>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </CardContainer>
    );
};
