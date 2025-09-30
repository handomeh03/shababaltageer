import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { useAddReceipt } from "../hooks/useAddReceipt";

export default function AddrecepitDialog({flag2,handlechangeflag2,event_id}) {
  const textFieldStyle = {
    "& label.Mui-focused": { color: "#ef6c00" },
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "skiny" },
      "&:hover fieldset": { borderColor: "#ef6c00" },
      "&.Mui-focused fieldset": { borderColor: "#ef6c00" },
    },
  };

  const buttonStyle = {
    backgroundColor: "#ef6c00",
    color: "white",
    "&:hover": {
      backgroundColor: "#ef6c00",
    },
  };

  let [amount,setAmount]=useState("");
  let [rec_image,setRec_image]=useState(null);

  let{addReceipt}=useAddReceipt();

  function handlechangeAmount(e){
    setAmount(e);
  }
  function handleChangeImage(e){
    setRec_image(e);
  }
function handleaddreceipt(e){
   e.preventDefault();
  addReceipt(event_id,amount,rec_image,handlechangeflag2);
}
  return (
    <Dialog style={{ zIndex: "12345675" }} open={flag2}>
      <DialogTitle> تسجيل بالتطوع </DialogTitle>
      <DialogContent>
        <form id="subscription-form">
          
          <TextField
            autoFocus
            required
            margin="dense"
            id="amount"
            name="amount"
            label="المبلغ"
            type="number"
            fullWidth
            variant="outlined"
            value={amount}
            onChange={(e) => handlechangeAmount(e.target.value)}
            sx={textFieldStyle}
          />

          
          <Button
            variant="outlined"
            component="label"
            sx={{ mt: 2, color: "#ef6c00", borderColor: "#ef6c00" }}
          >
        ارفع صورة الوصل
            <input
              hidden
              accept="image/*"
              type="file"
              onChange={(e) => handleChangeImage(e.target.files[0])}
            />
          </Button>

          {rec_image && (
            <div style={{ marginTop: "15px"}}>
              <img
                src={URL.createObjectURL(rec_image)}
                alt="receipt preview"
                style={{ borderRadius: "8px",width:"100%" }}
              />
            </div>
          )}
        </form>
      </DialogContent>

      <DialogActions>
        <Button onClick={handlechangeflag2} sx={{ color: "#ef6c00" }}>الغاء</Button>
        <Button onClick={handleaddreceipt} type="submit" form="subscription-form" sx={buttonStyle}>
          تسجيل
        </Button>
      </DialogActions>
    </Dialog>
  );
}
