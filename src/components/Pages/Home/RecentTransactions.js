import { Box, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import RecentTransactionsStyled from "./RecentTransactions.styled";

import ImageItem from '../../../assets/images/table-image.png';
import GradientBorderBox from "../../GradientBorderBox";

const tableHeader = [
  { label: '', align: 'left', cellAlign: 'left', width: '3%' },
  { label: 'Item', align: 'center', cellAlign: 'center', width: '7%' },
  { label: '', align: 'left', cellAlign: 'left', width: '10%' },
  { label: 'Price', align: 'center', cellAlign: 'center', width: '10%' },
  { label: 'From', align: 'center', cellAlign: 'center', width: '17%', color: '#F35077' },
  { label: 'To', align: 'center', cellAlign: 'center', width: '17%', color: '#47C3C1' },
  { label: 'Time', align: 'center', cellAlign: 'center', width: '17%' },
]

const tableDataItem = [
  ImageItem, 'Moonizen#1', '165 Matic', '0x000...000', '0x111...111', '13 mins  ago',
]

const tableData = [];
for (let i = 0; i < 20; i++) tableData.push([i + 1, ...tableDataItem]);

const RecentTransactions = () => {
  return (
    <RecentTransactionsStyled>
      <Stack className="recent-transactions-box" spacing={2}>
        <Box className="title">
          <Typography>
            Recent Transactions
          </Typography>
        </Box>
        <GradientBorderBox className="table-wrapper">
          <GradientBorderBox className="table-content">
            {/* <TableContainer className="header-table">
              <Table>
                <TableHead>
                  <TableRow className="table-row">
                    {
                      tableHeader.map((item, index) => {
                        return (
                          <TableCell key={index} nowrap="true" className="table-cell" width={item.width}>
                            <Typography style={{ textAlign: item.align }} noWrap>{item.label}</Typography>
                          </TableCell>
                        )
                      })
                    }
                  </TableRow>
                </TableHead>
              </Table>
            </TableContainer> */}
            <TableContainer className="data-table" style={{ height: '420px' }}>
              <Table>
                <TableHead>
                  <TableRow className="table-row">
                    {
                      tableHeader.map((item, index) => {
                        return (
                          <TableCell key={index} nowrap="true" className="table-cell" width={item.width}>
                            <Typography style={{ textAlign: item.align }} noWrap>{item.label}</Typography>
                          </TableCell>
                        )
                      })
                    }
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    tableData.map((row, index) => {
                      return (
                        <TableRow key={index} className="table-row">
                          {
                            row.map((item, index) => {
                              return (
                                <TableCell key={index} className="table-cell" width={tableHeader[index].width} nowrap="true">
                                  <Box className="cell-content">
                                    {
                                      index === 1
                                        ? <Box className="image gradient-border-box"><img src={item} alt="" /></Box>
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
          </GradientBorderBox>
        </GradientBorderBox>
      </Stack>
    </RecentTransactionsStyled >
  )
}

export default RecentTransactions;