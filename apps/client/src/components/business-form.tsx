import React from "react";
import { Alert, Box, Button, FormLabel, MenuItem, Select, TextField, FormControl } from "@mui/material";
import { CreateBusinessDto, businessSchema, businessTypes } from "@repo/types";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { capitaliseWord } from "@/utils/misc";
import { useRouter } from "next/router";

interface Props {
  submitTitle: string;
  business: CreateBusinessDto;
  onChange: (business: CreateBusinessDto) => void;
  disabled?: boolean;
  error?: string;
}

export const BusinessForm: React.FC<Props> = ({ submitTitle, business, onChange, disabled, error }) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm<CreateBusinessDto>({
    values: business,
    resolver: zodResolver(businessSchema),
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
        <FormLabel htmlFor="name">Business name</FormLabel>
        <TextField
          id="name"
          {...register('name')}
          variant="outlined"
          size="small"
          placeholder="Business name"
          helperText={errors.name && errors.name.message}
          error={!!errors.name}
        />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="type">Business type</FormLabel>
        <Controller
          name="type"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select
              id="type"
              value={value}
              onChange={onChange}
            >
              {businessTypes.map((businessType) => (
                <MenuItem key={businessType} value={businessType}>
                  {capitaliseWord(businessType)}
                </MenuItem>
              ))}
            </Select>
          )}
        />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="location">Location</FormLabel>
        <TextField
          id="location"
          {...register('location')}
          variant="outlined"
          size="small"
          placeholder="Location"
          multiline
          rows={4}
          helperText={errors.location && errors.location.message}
          error={!!errors.location}
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
