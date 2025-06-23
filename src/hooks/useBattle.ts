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
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7g0agTqNmdupJYisknrdc3WYdJysY0Q34JsTMzVc6Nsowz0bLujAuCZswTGIth0HQEWRa5H1Smq65RCjvR8eRVBF0g-zFjIovq1OKLNrMyPT_SMbEK-lrV06u9uStrIWPWdaaolQue8M/s450/yuusya_game.png'
  });

  // 敵初期化
  const enemyElement = getRandomElement();
  const [enemy, setEnemy] = useState<Player>({
    name: "魔族",
    hp: 100,
    element: enemyElement,
    weapon: getWeaponByElement(enemyElement),
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgkDZFHXugOEho62wp3nY9zo3SYl3qdbYwT_xh0jtLvUcD47vynnptKtmYKzkJLY5i4NFSdKvwgvZTCF1dhPyM-JXAe6ASgprYgpXr6pUsaoM-YCmXIN6gCZxoWDQm9GBlyhTeNyjkqfkZq/s500/fantasy_maou_devil.png'
  });

  // 攻撃処理（バックエンドに依頼）
  const attackEnemy = async () => {
    const API_BASE_URL =
      import.meta.env.MODE === 'development'
        ? '/api'
        : '/api';

    try {
      const response = await fetch(`${API_BASE_URL}/battle`, {
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