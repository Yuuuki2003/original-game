import type { VercelRequest, VercelResponse } from '@vercel/node';
import type { Player } from '../shared/types/Player';

const getElementMultiplier = (a: Player, b: Player): number => {
  if (a.element === "fire" && b.element === "grass") return 2;
  if (a.element === "grass" && b.element === "water") return 2;
  if (a.element === "water" && b.element === "fire") return 2;
  if (a.element === b.element) return 1;
  return 0.5;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  try {
    const buffers: Uint8Array[] = [];
    for await (const chunk of req) {
      buffers.push(chunk);
    }
    const bodyString = Buffer.concat(buffers).toString();
    const { player, enemy } = JSON.parse(bodyString) as { player: Player; enemy: Player };

    const baseDamage = Math.floor(Math.random() * 10) + 5;
    const multiplier = getElementMultiplier(player, enemy);
    const weaponPower = player.weapon?.power || 0;
    const totalDamage = Math.floor((baseDamage + weaponPower) * multiplier);
    const newEnemyHp = Math.max(0, enemy.hp - totalDamage);

    let newPlayerHp = player.hp;

    if (newEnemyHp > 0) {
      const enemyBaseDamage = Math.floor(Math.random() * 10) + 5;
      const enemyMultiplier = getElementMultiplier(enemy, player);
      const enemyWeaponPower = enemy.weapon?.power || 0;
      const enemyTotalDamage = Math.floor((enemyBaseDamage + enemyWeaponPower) * enemyMultiplier);
      newPlayerHp = Math.max(0, player.hp - enemyTotalDamage);
    }

    res.status(200).json({
      newEnemyHp,
      newPlayerHp,
      damageToEnemy: totalDamage,
      damageToPlayer: player.hp - newPlayerHp,
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', detail: (error as Error).message });
  }
}