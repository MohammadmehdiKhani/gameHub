import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import usePlatforms from "../../hooks/usePlatforms";
import styles from "./PlatformSelector.module.scss";

export default function PlatformSelector() {
  const { data: platforms } = usePlatforms();
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <div className={styles.platformsContainer}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Platform</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Platform"
          onChange={handleChange}
        >
          {platforms.map((p) => (
            <MenuItem value={p.name}>{p.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
