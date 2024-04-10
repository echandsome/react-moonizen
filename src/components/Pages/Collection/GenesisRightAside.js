import GenesisRightAsideStyled from "./GenesisRightAsideStyled";
import GradientBorderBox from "../../GradientBorderBox";
import GradientSecBorderBox from "../../GradientBorderBox/secondary";

const GenesisRightAside = () => {
  return (
    <GenesisRightAsideStyled>
      <GradientBorderBox>
        <GradientSecBorderBox className="genesis-right-box" />
      </GradientBorderBox>
    </GenesisRightAsideStyled>
  );
}

export default GenesisRightAside;