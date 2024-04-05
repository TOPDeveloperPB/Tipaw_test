import React from 'react';
import {Card} from './Card';
import { CardListContainer } from './styled';
import {CheckIcon} from "lucide-react";

export interface CardData {
    id: number
    title: string;
    description: string;
}

interface CardListProps {
    cards: CardData[];
}

export const CardList: React.FC<CardListProps> = ({ cards }) => {
    return (
        <CardListContainer>
            {cards.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    icon={<CheckIcon />} // Используйте свои иконки
                />
            ))}
        </CardListContainer>
    );
};
