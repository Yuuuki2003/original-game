import { Router } from "express";
import type {Player} from "../../shared/types/Player";

const router = Router();

const getElementMultiplier = (a: Player, b: Player): number => {
  if (a.element === "fire" && b.element === "grass") return 2;
  if (a.element === "grass" && b.element === "water") return 2;
  if (a.element === "water" && b.element === "fire") return 2;
  if (a.element === b.element) return 1;
  return 0.5;
};

router.post("/attack", (req, res) => {
  const { player, enemy } = req.body as { player: Player; enemy: Player };

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

  res.json({
    newEnemyHp,
    newPlayerHp,
    damageToEnemy: totalDamage,
    damageToPlayer: player.hp - newPlayerHp,
  });
});

export default router;