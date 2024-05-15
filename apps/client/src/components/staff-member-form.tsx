import { capitaliseWord } from "@/utils/misc";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, Box, Button, FormLabel, MenuItem, Select, TextField } from "@mui/material";
import { CreateStaffMemberDto, staffMemberPositionTypes, staffMemberSchema } from "@repo/types";
import { useRouter } from "next/router";
import React from "react";
import { Controller, useForm } from "react-hook-form";

interface Props {
  submitTitle: string;
  staffMember: CreateStaffMemberDto;
  onChange: (staffMember: CreateStaffMemberDto) => void;
  disabled?: boolean;
  error?: string;
}

export const StaffMemberForm: React.FC<Props> = ({ submitTitle, staffMember, onChange, disabled, error }) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm<CreateStaffMemberDto>({
    values: staffMember,
    resolver: zodResolver(staffMemberSchema),
    mode: 'onChange',
    disabled
  });

  return (
    <Box
      component="form"
      sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: 500 }}
      onSubmit={handleSubmit(onChange)}
    >
      <FormLabel>First name</FormLabel>
      <TextField
        {...register('firstName')}
        variant="outlined"
        size="small"
        placeholder="First name"
        helperText={errors.firstName && errors.firstName.message}
        error={!!errors.firstName}
      />

      <FormLabel>Last name</FormLabel>
      <TextField
        {...register('lastName')}
        variant="outlined"
        size="small"
        placeholder="Last name"
        helperText={errors.lastName && errors.lastName.message}
        error={!!errors.lastName}
      />

      <FormLabel>Email</FormLabel>
      <TextField
        {...register('email')}
        variant="outlined"
        size="small"
        type="email"
        placeholder="Email"
        helperText={errors.email && errors.email.message}
        error={!!errors.email}
      />

      <FormLabel>Phone number</FormLabel>
      <TextField
        {...register('phoneNumber')}
        variant="outlined"
        size="small"
        placeholder="Phone number"
        helperText={errors.phoneNumber && errors.phoneNumber.message}
        error={!!errors.phoneNumber}
      />

      <FormLabel>Position</FormLabel>
      <Controller
        name="position"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Select
            value={value}
            onChange={onChange}
          >
            {staffMemberPositionTypes.map((positionType) => (
              <MenuItem key={positionType} value={positionType}>
                {capitaliseWord(positionType)}
              </MenuItem>
            ))}
          </Select>
        )}
      />

      <Box sx={{ display: 'flex', gap: 1, pt: 3 }}>
        <Button
          onClick={() => router.back()}
          disabled={disabled}
        >
          Cancel
        </Button>

        <Button
          type="submit"
          variant="contained"
          disabled={!isValid || disabled}
        >
          {submitTitle}
        </Button>
      </Box>

      {error && (
        <Alert severity="error">
          {error}
        </Alert>
      )}
    </Box>
  )
}
