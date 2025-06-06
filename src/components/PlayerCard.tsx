import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import type { Weapon } from "../types/Player";

type Props = {
  name: string;
  hp: number;
  element: "fire" | "water" | "grass";
  weapon: Weapon;
  image: string;
};

const PlayerCard: React.FC<Props> = ({ name, hp, element, weapon,image }) => {
  const getHpColor = () => {
    if (hp > 60) return "#4caf50";
    if (hp > 30) return "#ff9800";
    return "#f44336";
  };

  return (
    <Card sx={{ width: 200, borderRadius: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
      /> 
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {name}
        </Typography>

        {/* HPゲージ */}
        <Box
          sx={{
            backgroundColor: "#ddd",
            borderRadius: 8,
            height: 15,
            overflow: "hidden",
            mb: 1
          }}
        >
          <Box
            sx={{
              width: `${hp}%`,
              backgroundColor: getHpColor(),
              height: "100%",
              transition: "width 0.3s ease"
            }}
          />
        </Box>
        <Typography variant="body2" gutterBottom>
          HP: {hp}
        </Typography>
        <Typography variant="body2">属性: {element}</Typography>
        <Typography variant="body2">武器: {weapon.name}</Typography>
      </CardContent>
    </Card>
  );
};

export default PlayerCard;