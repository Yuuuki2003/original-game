import PlayerCard from "./PlayerCard";
import type { Player } from "../types/Player";

const PlayerArea = ({ player, enemy }: { player: Player; enemy: Player }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    marginTop: '2rem',
  }}>
    <PlayerCard {...player} />
    <PlayerCard {...enemy} />
  </div>
);

export default PlayerArea;
