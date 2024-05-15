import { capitaliseWord } from "@/utils/misc";
import { urls } from "@/utils/urls";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { GetBusinessDto } from "@repo/types";
import Link from "next/link";
import React from "react";

interface Props {
  business: GetBusinessDto;
}

export const StaffMemberTable: React.FC<Props> = ({ business }) => {
  return (
    <TableContainer component={Paper} elevation={4}>
      <Table sx={{ width: 800 }}>
        <TableHead>
          <TableRow>
            <TableCell>First name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone number</TableCell>
            <TableCell>Position</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {business.staffMembers.map((staffMember) => (
            <TableRow key={staffMember.id}>
              <TableCell>{staffMember.firstName}</TableCell>
              <TableCell>{staffMember.lastName}</TableCell>
              <TableCell>{staffMember.email}</TableCell>
              <TableCell>{staffMember.phoneNumber}</TableCell>
              <TableCell>{capitaliseWord(staffMember.position)}</TableCell>
              <TableCell>
                <Button LinkComponent={Link} href={urls.staffMemberEdit(business.id, staffMember.id)}>
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
