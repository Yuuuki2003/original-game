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
    {/*JSX(JS内で書かれたHTMLっぽい部分)の中でのコメントはこれ*/}
    {/*htmlのフォントサイズは通常1rem(16px)*/}
    {/*ReactでのインラインCSSではJavaScriptのオブジェクトとして書くため、キャメルケース(	backgroundColorなど)になる*/}
    {/*100vh(viewpoint height)は画面の高さの100%*/} 

      <PlayerCard 
        name={player.name} 
        hp={player.hp} 
        element={player.element} 
        weapon={player.weapon} 
      />
      <PlayerCard 
        name={enemy.name} 
        hp={enemy.hp} 
        element={enemy.element} 
        weapon={enemy.weapon} 
      />
    </div>
  );
};

export default BattleField;