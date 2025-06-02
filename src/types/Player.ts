export type Player = {
    name: string;
    hp: number;
    element: 'fire' | 'water' | 'grass';
    weapon: Weapon;
};

export type Weapon = {
    name: string;
    power: number;
}