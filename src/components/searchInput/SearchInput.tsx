import { InputAdornment, TextField } from "@mui/material";
import styles from "./SearchInput.module.scss";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

interface Props {
  setSearchedText: (text: string) => void;
}

export default function SearchInput({ setSearchedText }: Props) {
  const [inputString, setInputString] = useState<string>("");

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setSearchedText(inputString);
    }
  };

  return (
    <div className={styles.SearchInputContainer}>
      <TextField
        onKeyDown={handleKeyPress}
        onChange={(event) => setInputString(event.target.value)}
        id="outlined-basic"
        label="Search"
        variant="outlined"
        sx={{ width: "100%" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <FaSearch onClick={() => console.log("yoyo")} />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}
