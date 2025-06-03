import { useBattle } from './hooks/useBattle'; 
import AppLayout from './components/AppLayout';
import Title from './components/Title';
import PlayerArea from './components/PlayerArea';
import AttackButton from './components/AttackButton';

function App() {
  const { player, enemy, attackEnemy } = useBattle();

  return (
    <AppLayout>
      <Title />
      <PlayerArea player={player} enemy={enemy} />
      <AttackButton onClick={attackEnemy} disabled={player.hp === 0 || enemy.hp === 0} />
    </AppLayout>
  );
}

export default App;