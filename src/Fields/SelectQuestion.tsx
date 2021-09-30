import React from "react";
import { FormControl, FormLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";

export const SelectQuestion = (props: any) => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      justifyItems='center'
      marginY={2}
    >
      <FormControl
        fullWidth
        required={props.required}
        error={!!props.error?.value}
      >
        <FormLabel>{props.label}</FormLabel>
        <Select
          value={props.value.value}
          fullWidth
          required={props.required}
          error={!!props.error?.value}
          onChange={(e) =>
            props.onSetFieldValue(props.name, {
              ...props.value,
              value: e.target.value,
            })
          }
        >
          <MenuItem disabled value={""}>
            Choose one...
          </MenuItem>
          {props.content?.choices.map(
            (
              choice: { value: string; desc?: string; amount?: number },
              index: number
            ) => (
              <MenuItem
                key={index}
                value={choice.value}
                aria-label={choice.desc}
              >
                {`${choice.value} ${
                  choice.amount ? `- $${choice.amount}` : ""
                }`}
              </MenuItem>
            )
          )}
        </Select>
      </FormControl>
    </Box>
  );
};
