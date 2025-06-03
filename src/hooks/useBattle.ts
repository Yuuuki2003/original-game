import { useState } from "react";
import type { Player } from "../types/Player";
import { getElementMultiplier } from "../utils/battle";
import { getWeaponByElement } from "../utils/weapons";

const getRandomElement = (): 'fire' | 'water' | 'grass' => {
  const elements = ['fire', 'water', 'grass'] as const;
  const randomIndex = Math.floor(Math.random() * elements.length);
  return elements[randomIndex];
};

export const useBattle = () => {
  const playerElement = getRandomElement();
  const enemyElement = getRandomElement();

  const [player, setPlayer] = useState<Player>({
    name: "勇者",
    hp: 100,
    element: playerElement,
    weapon: getWeaponByElement(playerElement),
  });

  const [enemy, setEnemy] = useState<Player>({
    name: "魔族",
    hp: 100,
    element: enemyElement,
    weapon: getWeaponByElement(enemyElement),
  });

  const attackEnemy = () => {
    const multiplier = getElementMultiplier(player, enemy);
    const weaponPower = player.weapon?.power || 0;
    const baseDamage = Math.floor(Math.random() * 10) + 5;
    const totalDamage = Math.floor((baseDamage + weaponPower) * multiplier);
    const newEnemyHP = Math.max(enemy.hp - totalDamage, 0);
    setEnemy({ ...enemy, hp: newEnemyHP });

    if (newEnemyHP > 0) {
      const enemyMultiplier = getElementMultiplier(enemy, player);
      const enemyWeaponPower = enemy.weapon?.power || 0;
      const enemyBaseDamage = Math.floor(Math.random() * 10) + 5;
      const enemyTotalDamage = Math.floor((enemyBaseDamage + enemyWeaponPower) * enemyMultiplier);
      const newPlayerHP = Math.max(player.hp - enemyTotalDamage, 0);
      setPlayer({ ...player, hp: newPlayerHP });
    }
  };

  return {
    player,
    enemy,
    attackEnemy,
  };
};