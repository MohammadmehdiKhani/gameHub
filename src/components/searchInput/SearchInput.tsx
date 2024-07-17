import { InputAdornment, TextField } from "@mui/material";
import styles from "./SearchInput.module.scss";
import { FaSearch } from "react-icons/fa";

export default function SearchInput() {
  return (
    <div className={styles.SearchInputContainer}>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        sx={{ width: '100%' }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <FaSearch />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}
