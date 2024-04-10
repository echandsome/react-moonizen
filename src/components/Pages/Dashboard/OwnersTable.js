import { useEffect, useState } from "react";
import { Typography, Box, Stack, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Pagination, PaginationItem } from "@mui/material";
import GradientBorderBox from "../../GradientBorderBox";
import OwnersTableStyled from "./OwnersTable.styled";

import ImageTableTopRightBorder from '../../../assets/images/owners-table-tr-border.png';
import ImageTableBottomLeftBorder from '../../../assets/images/owners-table-bl-border.png';
import ImageIconGenisis from '../../../assets/images/moonizens-genesis.svg';
import SearchBar from "../../SearchBar";
import ImageTableAvatar from '../../../assets/images/owners-table-avatar.png';
// import ImagePrev from '../../../assets/images/arrow-prev.png';
// import ImageNext from '../../../assets/images/arrow-next.png';
// import { ArrowBack } from "@mui/icons-material";

const PAGE_LIMIT = 11;
const ROW_COUNT = 50;
const tableHeader = [
  { name: '', align: 'center', cellAlign: 'center', width: '10%' },
  { name: 'NAME', align: 'left', cellAlign: 'center', width: '30%' },
  { name: 'WALLET', align: 'center', cellAlign: 'center', width: '30%' },
  { name: 'OWNED', align: 'center', cellAlign: 'center', width: '15%' },
  { name: '% OWNED', align: 'right', cellAlign: 'right', width: '15%' }
];
const dataTamplate = [[ImageTableAvatar, 'Liam Murphy'], 'lAlzPl...eP5Q', '30', '32%'];
const tableData = [];
for (let i = 0; i < ROW_COUNT; i++) tableData.push([i + 1, ...dataTamplate]);

const OwnersTable = () => {
  const [page, setPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    const newData = [];
    for (let i = 0; i < PAGE_LIMIT; i++) {
      if (i + PAGE_LIMIT * (page - 1) >= ROW_COUNT) continue;
      newData.push([...tableData[i + PAGE_LIMIT * (page - 1)]])
    }
    setCurrentData(newData);
  }, [page]);


  return (
    <OwnersTableStyled>
      <GradientBorderBox className="owners-table-box">
        <Box className="title" mt={1} ml={5}>
          <Typography className="bg-title">Owners</Typography>
          <Typography className="sm-title">Top 100</Typography>
        </Box>
        <Box className="box-content" mt={1}>
          <Box className="table-wrapper">
            <GradientBorderBox className="table-wrapper-content">
              <img className="top-right-border" src={ImageTableTopRightBorder} alt="" />
              <img className="bottom-left-border" src={ImageTableBottomLeftBorder} alt="" />
              <Box className="table-main-content">
                <Stack className="table-top" direction={'row'} justifyContent={'space-between'}>
                  <Stack direction={'row'} spacing={1} alignItems={'center'}>
                    <Box className="image">
                      <img src={ImageIconGenisis} alt="" />
                    </Box>
                    <Typography className="table-title">GENESIS</Typography>
                  </Stack>
                  <Box>
                    <SearchBar />
                  </Box>
                </Stack>
                <TableContainer className="table-data">
                  <Table>
                    <TableHead>
                      <TableRow className="table-row">
                        {
                          tableHeader.map((item, index) => {
                            return (
                              <TableCell key={index} nowrap="true" className="table-cell" width={item.width}>
                                <Typography style={{ textAlign: item.align }} noWrap>{item.name}</Typography>
                              </TableCell>
                            )
                          })
                        }
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {
                        currentData.map((row, index) => {
                          return (
                            <TableRow key={index} className="table-row">
                              {
                                row.map((item, index) => {
                                  return (
                                    <TableCell key={index} className="table-cell" width={tableHeader[index].width}>
                                      <Box className="cell-content">
                                        {
                                          index === 1
                                            ? (
                                              <Stack direction={'row'} alignItems={'center'}>
                                                <Box className="image gradient-border-box"><img src={item[0]} alt="" /></Box>
                                                <Typography style={{ textAlign: tableHeader[index].cellAlign, color: tableHeader[index].color }} >{item[1]}</Typography>
                                              </Stack>
                                            )
                                            : <Typography style={{ textAlign: tableHeader[index].cellAlign, color: tableHeader[index].color }} >{item}</Typography>
                                        }
                                      </Box>
                                    </TableCell>
                                  )
                                })
                              }
                            </TableRow>
                          )
                        })
                      }
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
              <Stack direction={'row'} justifyContent={'end'} mt={2.5}>
                <Stack className="table-pagination" direction={'row'} alignItems={'center'} >
                  <Pagination
                    count={parseInt((tableData.length - 1) / PAGE_LIMIT) + 1}
                    page={page}
                    onChange={(event, value) => setPage(value)}
                    renderItem={(item) => (
                      <PaginationItem
                        components={
                          {
                            // previous: <IconButton> <img src={ImagePrev} /></IconButton>
                            // next: <IconButton> <img src={ImageNext} /></IconButton>
                          }
                        }
                        {...item}
                      />
                    )}
                  />
                </Stack>
              </Stack>
            </GradientBorderBox>
          </Box>
        </Box >
      </GradientBorderBox >
    </OwnersTableStyled >
  )
}

export default OwnersTable;