import GenesisAvatarStyled from "./GenesisAvatarStyled";
import GradientBorderBox from "../../GradientBorderBox";
import { Button } from "@mui/material";

const GenesisAvatar = ({ onClick, src }) => {
  return (
    <GenesisAvatarStyled>
      <GradientBorderBox className="genesis-avatar-box">
        <Button onClick={() => onClick()} className="bg-box" sx={{ backgroundImage: `url(${src})` }} />
      </GradientBorderBox>
    </GenesisAvatarStyled>
  );
}

export default GenesisAvatar;