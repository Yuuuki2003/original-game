//属性に応じたダメージ倍率を取得する
import type { Player } from "../../shared/types/Player";

export const getElementMultiplier = (attacker: Player,defender: Player):number =>{
    const advantage: Record<'fire' | 'water' | 'grass',string> = {
        fire: 'grass',
        grass: 'water',
        water:'fire'
    };
    return advantage[attacker.element] === defender.element ? 1.5:1
};
