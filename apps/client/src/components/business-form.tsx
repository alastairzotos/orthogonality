import React from "react";
import { Alert, Box, Button, FormLabel, TextField } from "@mui/material";
import { CreateBusinessDto, businessSchema } from "@repo/types";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';

interface Props {
  business: CreateBusinessDto;
  onChange: (business: CreateBusinessDto) => void;
  onCancel: () => void;
  disabled?: boolean;
  error?: string;
}

export const BusinessForm: React.FC<Props> = ({ business, onChange, onCancel, disabled, error }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
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
      <FormLabel>Business name</FormLabel>
      <TextField
        {...register('name')}
        variant="outlined"
        size="small"
        placeholder="Business name"
        helperText={errors.name && errors.name.message}
        error={!!errors.name}
      />

      <FormLabel>Business type</FormLabel>
      <TextField
        {...register('type')}
        variant="outlined"
        size="small"
        placeholder="Business type"
        helperText={errors.type && errors.type.message}
        error={!!errors.type}
      />

      <FormLabel>Location</FormLabel>
      <TextField
        {...register('location')}
        variant="outlined"
        size="small"
        placeholder="Location"
        multiline
        rows={4}
        helperText={errors.location && errors.location.message}
        error={!!errors.location}
      />

      <Box sx={{ display: 'flex', gap: 1, pt: 3 }}>
        <Button
          onClick={onCancel}
          disabled={disabled}
        >
          Cancel
        </Button>

        <Button
          type="submit"
          variant="contained"
          disabled={!isValid || disabled}
        >
          Create
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
