import { Snackbar } from "@mui/material";
import Alert from "@mui/material/Alert";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { clearMessage } from "../../store/weather/weatherSlice";
import { useWeatherStore } from "../../hooks";

export const AlertMessageWithAutoHide = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const { message } = useWeatherStore();

  const handleClose = (reason) => {
    if (reason === "clickaway") {
        
      return;
    }

    setOpen(false, dispatch(clearMessage()));
  };
  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={'error'}
          variant="filled"
          sx={{ width: "100%" }}
        >
         {message.message || message}
        </Alert>
      </Snackbar>
    </div>
  );
};
