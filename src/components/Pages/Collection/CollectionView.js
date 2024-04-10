import { Box, Typography, Modal, Stack } from "@mui/material";
import CollectionViewStyled from "./CollectionView.styled";
import GradientBorderBox from "../../GradientBorderBox";

import ImageModalAvatar from '../../../assets/images/modal-avatar.png';
import Traits from "./Traits";

const CollectionView = ({ isOpen, setIsOpen }) => {
  return (
    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
      <CollectionViewStyled>
        <Box className="modal-inner-wrapper">
          <Box className="modal-inner">
            <GradientBorderBox className="modal-content">
              <Box className="box-content">
                <GradientBorderBox className="top-header-box">
                  <Stack direction={'row'} spacing={4.5} className="top-box">
                    <GradientBorderBox className="image">
                      <img src={ImageModalAvatar} alt="" />
                    </GradientBorderBox>
                    <Box className="top-header-desc">
                      <Typography className="bg-title">MOONIZEN: GENESIS</Typography>
                      <Typography mt={1 / 2} className="sm-title">MOONIZEN #111</Typography>
                      <Typography mt={1 / 2} className="sm-title">RANK: 692</Typography>
                      <Typography mt={1 / 2} className="sm-title">CATEGORY: ART</Typography>
                      <Typography mt={2} className="content">
                        The Moonizens Genesis collection,
                        created by Spook and Moonizen Studios,
                        is a 1,000 piece human created NFT collection minted on the Polygon blockchain.
                      </Typography>
                      <Typography mt={1} className="content">
                        Each and drawn piece is a gateway to stunning art, exclusive perks, immersive web3 encounters, and exclusive events.
                      </Typography>
                    </Box>
                  </Stack>
                </GradientBorderBox>
                <Box mt={2}>
                  <Traits />
                </Box>
              </Box>
            </GradientBorderBox>
          </Box>
        </Box>
      </CollectionViewStyled>
    </Modal>
  )
}

export default CollectionView;