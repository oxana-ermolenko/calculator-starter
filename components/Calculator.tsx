import Grid2 from "@mui/material/Unstable_Grid2";
import {
  Box,
  Paper,
  TextField,
  FormControl,
  NativeSelect,
  Button,
  Divider,
  Typography,
} from "@mui/material";
import { OutlinedInput } from "@mui/material";
import axios from "axios";

import { useState, useRef, useEffect, ChangeEvent, FormEvent } from "react";

const Calculator = (): JSX.Element => {
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");
  const firstRef = useRef<HTMLInputElement | null>(null);
  const secondRef = useRef<HTMLInputElement | null>(null);
  const welcomeMessage = "Calculator is ready!";

  const handleChange = (e: ChangeEvent<HTMLSelectElement>):void => {
    setOperation(e.target.value);
  };

  useEffect(():void => {
    setResult(welcomeMessage);
  }, []);

  const handleCalculate = (e: FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
    const query = {
      operation: operation,
      first: firstRef.current?.value,
      second: secondRef.current?.value,
    };

    axios
      .get(`/api/calculate/${query.operation}/${query.first}/${query.second}`)
      .then((res) => {
        setResult(res.data.result);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setOperation("");
    setResult(welcomeMessage);
    if (firstRef.current !== null) {
      (firstRef.current as HTMLInputElement).value = "";
    }

    if (secondRef.current !== null) {
      (secondRef.current as HTMLInputElement).value = "";
    }
    const operationSelect = document.getElementById("operation") as HTMLSelectElement | null;
    if (operationSelect instanceof HTMLSelectElement) {
      operationSelect.selectedIndex = 0;
    }
  };

  return (
    <form id="calculator-form" onSubmit={handleCalculate}>
      <Grid2 container spacing={1}>
        <Grid2 xs={5}>
          <FormControl fullWidth>
            <TextField
              id="first"
              label="First Number"
              variant="outlined"
              inputRef={firstRef}
            />
          </FormControl>
        </Grid2>
        <Grid2 xs={2}>
          <FormControl fullWidth>
            <NativeSelect
              input={<OutlinedInput />}
              defaultValue={""}
              inputProps={{
                name: "operation",
                id: "operation",
              }}
              onChange={handleChange}
            >
              <option value="">Op</option>
              <option value={"add"}>+</option>
              <option value={"subtract"}>-</option>
              <option value={"multiply"}>*</option>
              <option value={"divide"}>/</option>
            </NativeSelect>
          </FormControl>
        </Grid2>
        <Grid2 xs={5}>
          <FormControl fullWidth>
            <TextField
              id="second"
              label="Second Number"
              variant="outlined"
              inputRef={secondRef}
            />
          </FormControl>
        </Grid2>
        <Grid2 xs={10}>
          <FormControl fullWidth>
            <Button variant="contained" type="submit">
              Calculate
            </Button>
          </FormControl>
        </Grid2>
        <Grid2 xs={2}>
          <FormControl fullWidth>
            <Button variant="outlined" onClick={handleReset}>
              Reset
            </Button>
          </FormControl>
        </Grid2>
        <Grid2 xs={12}>
          <Divider />
        </Grid2>
        <Grid2 xs={12}>
          <Box>
            <Paper>
              <Typography align="center" variant="h3" gutterBottom>
                {result}
              </Typography>
            </Paper>
          </Box>
        </Grid2>
      </Grid2>
    </form>
  );
};
export default Calculator;




























