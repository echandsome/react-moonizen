import { Box } from "@mui/material";
import TabPanelStyled from "./index.styled";

const TabPanel = ({ children, index, value, ...props }) => {
  return (
    <TabPanelStyled>
      <div
        hidden={value !== index}
        {...props}
      >
        {
          value === index && (
            <Box>
              {children}
            </Box>
          )
        }
      </div>
    </TabPanelStyled>
  )
}

export default TabPanel;