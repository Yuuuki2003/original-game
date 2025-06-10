import { useState } from "react";
import type { Player } from "../../shared/types/Player";
import { getWeaponByElement } from "../utils/weapons";

// 属性をランダムに決める関数
const getRandomElement = (): 'fire' | 'water' | 'grass' => {
  const elements = ['fire', 'water', 'grass'] as const;
  const randomIndex = Math.floor(Math.random() * elements.length);
  return elements[randomIndex];
};

export const useBattle = () => {
  // プレイヤー初期化
  const playerElement = getRandomElement();
  const [player, setPlayer] = useState<Player>({
    name: "勇者",
    hp: 100,
    element: playerElement,
    weapon: getWeaponByElement(playerElement),
    image: 'https://easyart.design/com/wp-content/uploads/2023/10/97def259a688a56b503688167abaaed3-1024x576.jpg'
  });

  // 敵初期化
  const enemyElement = getRandomElement();
  const [enemy, setEnemy] = useState<Player>({
    name: "魔族",
    hp: 100,
    element: enemyElement,
    weapon: getWeaponByElement(enemyElement),
    image: 'https://realdgame.jp/news/upload/%E3%82%BE%E3%83%BC%E3%83%9E_01.jpg'
  });

  // 攻撃処理（バックエンドに依頼）
  const attackEnemy = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/attack", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ player, enemy })
      });

      if (!response.ok) {
        console.error("API呼び出し失敗");
        return;
      }

      const data = await response.json();

      setEnemy((prev) => ({
        ...prev,
        hp: data.newEnemyHp
      }));

      setPlayer((prev) => ({
        ...prev,
        hp: data.newPlayerHp
      }));
    } catch (error) {
      console.error("通信エラー:", error);
    }
  };

  return {
    player,
    enemy,
    attackEnemy,
  };
};