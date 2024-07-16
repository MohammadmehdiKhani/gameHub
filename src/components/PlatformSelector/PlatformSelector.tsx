import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import usePlatforms from "../../hooks/usePlatforms";
import styles from "./PlatformSelector.module.scss";
import { Platform } from "../../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

export default function PlatformSelector({
  onSelectPlatform,
  selectedPlatform,
}: Props) {
  const { data: platforms } = usePlatforms();

  return (
    <div className={styles.platformsContainer}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Platform</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedPlatform?.id}
          label="Platform"
        >
          {platforms.map((p) => (
            <MenuItem
              key={p.id}
              value={p.id}
              onClick={() => onSelectPlatform(p)}
            >
              {p.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
