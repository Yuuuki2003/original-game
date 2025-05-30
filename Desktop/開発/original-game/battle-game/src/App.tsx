import { useState} from "react";
import PlayerCard from './components/PlayerCard';
import type { Player } from "./types/Player";

function App(){
  const [player, setPlayer] = useState<Player>({name:'勇者',hp:100});
  const [enemy,setEnemy] = useState<Player>({name: '魔族',hp: 100});   
  //useStateに渡す初期値にはオブジェクトを入れることもできる

  const attackEnemy = () => {
    const damage = Math.floor(Math.random()*10)+5;
    const newEnemyHP = Math.max(enemy.hp-damage, 0);
    setEnemy({...enemy, hp:newEnemyHP});
    //Math.random*10で0以上10未満の小数を出力し、Math.floorで小数点以下切り捨て
    //Math.max(a,b)でaとbのうち大きい方を取る
    //setEnemy()を用いて状態を更新。スプレッド構文...を用いてオブジェクトのプロパティをコピーし、hpだけ更新する。
   
    if (newEnemyHP > 0) {
      const counter = Math.floor(Math.random()*10)+5;
      const newPlayerHP = Math.max(player.hp-counter, 0);
      setPlayer({...player, hp:newPlayerHP});
      //敵のHPが0より大きいときの反撃について定義
      console.log("player.hp", player.hp);
      console.log("enemy.hp", enemy.hp);
    }
  };

  return(
    <div style={{
      padding: '2rem', 
      fontFamily: 'sans-serif',
      backgroundColor: '#b3c6ff',
      color: 'yellow',
      minHeight: '100vh',
    }}>
    {/*JSX(JS内で書かれたHTMLっぽい部分)の中でのコメントはこれ*/}
    {/*htmlのフォントサイズは通常1rem(16px)*/}
    {/*ReactでのインラインCSSではJavaScriptのオブジェクトとして書くため、キャメルケース(	backgroundColorなど)になる*/}
    {/*100vh(viewpoint height)は画面の高さの100%*/}

      <h1 style={{
        textAlign: 'center',
        textShadow:'1px 1px 1px black'
        }}>バトルゲーム
      </h1>
      
      {/*中央揃えにする*/}

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        marginTop: '2rem',
      }}>
        {/*フレックスボックスは要素を横並びにする */}
        {/*gapは要素間の間隔*/}

        <PlayerCard name={player.name} hp={player.hp} />
        <PlayerCard name={enemy.name} hp={enemy.hp} />
      </div>
        {/*PlayerCardにpropsを渡す*/}

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <button
          onClick={attackEnemy}
          disabled={player.hp === 0 || enemy.hp === 0}
          style={{
            fontSize: '1.2rem',
            padding: '0.8rem 2rem',
            borderRadius: '6px',
            backgroundColor: '#8a2be2',
            color: 'white',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          攻撃！
        </button>          
      </div>
      {/*攻撃ボタンが押された時の設定*/}
    </div>
  
);

};



export default App;