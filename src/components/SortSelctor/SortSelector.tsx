import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import usePlatforms from "../../hooks/usePlatforms";
import styles from "./SortSelector.module.scss";
import { Platform } from "../../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
}

export default function SortSelector() {
  return (
    <div className={styles.sortSelectorContainer}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Order by</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          label="Order by"
          // onChange={handleChange}
        >
          <MenuItem value={1}>YO 1</MenuItem>
          <MenuItem value={2}>YO 2</MenuItem>
          <MenuItem value={3}>YO 3</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
