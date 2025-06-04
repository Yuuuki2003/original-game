import { Button } from "@mui/material";

const AttackButton = ({
  onClick,
  disabled
}: {
  onClick: () => void;
  disabled: boolean;
}) => (
  <div style={{ textAlign: 'center', marginTop: '2rem' }}>
    <Button
      variant="contained"
      onClick={onClick}
      disabled={disabled}
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
    </Button>
  </div>
);

