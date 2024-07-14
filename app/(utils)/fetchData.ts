import axios from 'axios';

export interface Card {
    id: number;
    image: string;
    description: string;
}

export const fetchCards = async(): Promise<Card[]> => {
    try {
        var baseUrl = 'http://localhost:3001';
        const { data } = await axios.get('http://localhost:3001/cards');
        data.cards.forEach((card: Card) => {
            card.image = baseUrl + card.image;
            console.log(card.id);
            console.log(card.image);
            console.log(card.description);
        });
        return data.cards;
    } catch (error) {
        console.error('Failed to fetch cards. ERROR: ', error);
        throw new Error('Failed to fetch cards');
    }
}