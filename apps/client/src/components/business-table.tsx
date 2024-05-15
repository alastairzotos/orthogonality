import { capitaliseWord } from "@/utils/misc";
import { urls } from "@/utils/urls";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { GetBusinessesDto } from "@repo/types";
import Link from "next/link";
import React from "react";

interface Props {
  businesses: GetBusinessesDto;
}

export const BusinessTable: React.FC<Props> = ({ businesses }) => {
  return (
    <TableContainer component={Paper} elevation={4}>
      <Table sx={{ width: 800 }}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Location</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {businesses.map((business) => (
            <TableRow key={business.id}>
              <TableCell>
                <Button LinkComponent={Link} href={urls.businessManage(business.id)}>
                  {business.name}
                </Button>
              </TableCell>
              <TableCell>{capitaliseWord(business.type || 'None')}</TableCell>
              <TableCell>{business.location}</TableCell>
              <TableCell>
                <Button LinkComponent={Link} href={urls.businessEdit(business.id)}>
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
