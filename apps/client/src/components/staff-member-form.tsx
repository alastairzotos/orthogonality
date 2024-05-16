import { capitaliseWord } from "@/utils/misc";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, Box, Button, FormLabel, MenuItem, Select, TextField, FormControl } from "@mui/material";
import { CreateStaffMemberDto, staffMemberPositionTypes, staffMemberSchema } from "@repo/types";
import { useRouter } from "next/router";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'

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
      <FormControl>
        <FormLabel htmlFor="firstName">First name</FormLabel>
        <TextField
          id="firstName"
          {...register('firstName')}
          variant="outlined"
          size="small"
          placeholder="First name"
          helperText={errors.firstName && errors.firstName.message}
          error={!!errors.firstName}
        />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="lastName">Last name</FormLabel>
        <TextField
          id="lastName"
          {...register('lastName')}
          variant="outlined"
          size="small"
          placeholder="Last name"
          helperText={errors.lastName && errors.lastName.message}
          error={!!errors.lastName}
        />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="email">Email</FormLabel>
        <TextField
          id="email"
          {...register('email')}
          variant="outlined"
          size="small"
          type="email"
          placeholder="Email"
          helperText={errors.email && errors.email.message}
          error={!!errors.email}
        />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="phoneNumber">Phone number</FormLabel>
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <PhoneInput
              inputProps={{ id: 'phoneNumber' }}
              inputStyle={{ width: '100%' }}
              value={value}
              onChange={onChange}
              isValid={() => error?.message! || true}
            />
          )}
        />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="position">Position</FormLabel>
        <Controller
          name="position"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select
              id="position"
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
      </FormControl>

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
