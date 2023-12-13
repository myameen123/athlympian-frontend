"use client";
import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
function CustomTextField({
  label,
  placeholder,
  variant = "outlined",
  fullWidth = true,
  value,
  color,
  onChange,
  sx = {},
  InputLabelProps = {},
  InputProps = {},
  size,
  height,
  disabled,
  required = false,
  minLength,
  type = "text",
}) {
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");

  useEffect(() => {
    validate();
  }, [value, required, minLength]);

  const validate = () => {
    if (required && value === "") {
      setError(true);
      setHelperText("This field is required");
    } else if (required && minLength && value?.length < minLength) {
      setError(true);
      setHelperText(`This field must be at least ${minLength}`);
    } else {
      setError(false);
      setHelperText("");
    }
  };
  return (
    <TextField
      error={error}
      type={type}
      id="outlinded-error"
      label={label}
      placeholder={placeholder}
      value={value}
      color={color}
      disabled={disabled}
      fullWidth={fullWidth}
      size={size}
      onBlur={() => {
        if (required && !value) {
          setError(true);
          setHelperText("This field is required");
        }
      }}
      InputLabelProps={{
        ...InputLabelProps,
        style: { color: "#000", ...InputLabelProps?.style },
        sx: { height, ...InputLabelProps?.sx },
      }}
      onChange={onChange}
      sx={{ height, ...sx }}
      InputProps={{
        ...InputProps,
        value,
        onChange,
        disabled,
        sx: {
          height,
          border: error ? "1px solid red !important" : "none",
          ...InputProps?.sx,
        },
      }}
      helperText={helperText}
      required={required}
    />
  );
}

export default CustomTextField;
