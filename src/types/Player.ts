export type Player = {
    name: string;
    hp: number;
    element: 'fire' | 'water' | 'grass';
    weapon: Weapon;
    image: string;
};

export type Weapon = {
    name: string;
    power: number;
}