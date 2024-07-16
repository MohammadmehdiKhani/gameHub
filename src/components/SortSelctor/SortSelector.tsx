import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styles from "./SortSelector.module.scss";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  selectedSortOrder: string;
}

export default function SortSelector({
  onSelectSortOrder,
  selectedSortOrder,
}: Props) {
  const sortOrders = [
    { value: " ", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  return (
    <div className={styles.sortSelectorContainer}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Order by</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedSortOrder}
          label="Order by"
          // onChange={handleChange}
        >
          {sortOrders.map((s) => (
            <MenuItem
              key={s.value}
              value={s.value}
              onClick={() => onSelectSortOrder(s.value)}
            >
              {s.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
