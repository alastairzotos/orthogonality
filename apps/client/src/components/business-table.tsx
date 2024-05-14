import { urls } from "@/utils/urls";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { GetBusinessDto } from "@repo/types";
import Link from "next/link";
import React from "react";

interface Props {
  businesses: GetBusinessDto[];
}

export const BusinessTable: React.FC<Props> = ({ businesses }) => {
  return (
    <TableContainer component={Paper} elevation={4}>
      <Table sx={{ width: 600 }}>
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
              <TableCell>{business.name}</TableCell>
              <TableCell>{business.type}</TableCell>
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
