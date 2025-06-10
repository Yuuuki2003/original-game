import PlayerCard from './PlayerCard'; 
import type { Player } from '../types/Player'; 

type Props = {
  player: Player;
  enemy: Player;
};

const BattleField: React.FC<Props> = ({ player, enemy }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      marginTop: '2rem',
    }}>

      <PlayerCard 
        name={player.name} 
        hp={player.hp} 
        element={player.element} 
        weapon={player.weapon}
        image={player.image} 
      />
      <PlayerCard 
        name={enemy.name} 
        hp={enemy.hp} 
        element={enemy.element} 
        weapon={enemy.weapon} 
        image={enemy.image}
      />
    </div>
  );
};

export default BattleField;