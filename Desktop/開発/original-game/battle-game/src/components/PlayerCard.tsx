import React from "react";

type Props = {
    name: string;
    hp: number;
};

const PlayerCard: React.FC<Props> = ({name,hp}) => {
    const getHpColor = () => {
        if(hp>60) return '#4caf50';
        if(hp>30) return '#ff9800'
        return '#f44336';
    };

    return (
        <div style={{
            border: '2px solid #111',
            borderRadius: '10px',
            padding: '1rem',
            width: '180px',
            backgroundColor: '#fff', 
            color: '#000',            
            textAlign: 'center',
        }}>
    {/*枠全体の設定*/}

        <h3 style={{ fontSize: '1.5rem', margin: '1rem' }}>{name}</h3>
        <div style={{
            backgroundColor: '#ddd',
            borderRadius: '10px',
            height: '15px',
            overflow: 'hidden',
            marginBottom: '0.5rem'
        }}>
        {/*HPゲージの見た目の設計*/}
     
            <div style={{
                width: `${hp}%`,
                backgroundColor: getHpColor(),
                height: '100%',
                transition: 'width 0.3s ease'
            }} />
        </div>
        {/*ダメージくらったときの動き*/}

        <p style={{ margin: 0 }}>HP: {hp}</p>
    </div>
  );
};


export default PlayerCard;