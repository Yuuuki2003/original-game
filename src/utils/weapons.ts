//属性を取得し、属性に応じた武器を戻り値として返す

export const getWeaponByElement = (element: 'fire' | 'water' | 'grass') => {
    const weapons = {
        fire: {name:'炎の剣' , power: 5},
        water: {name:'水の槍', power: 4},
        grass: {name:'草の弓', power: 3},
    } as const;
    {/*as constは読み取り専用にするTSの機能*/}
    return weapons[element];
};