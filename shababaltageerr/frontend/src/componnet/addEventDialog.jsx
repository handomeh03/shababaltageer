import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import { useAddEvent } from "../hooks/useAddEvent";

export default function AddEventDilaog({flag, image, name, description, location, numberOfMember, price,status, handlechangeFlag,handleChangename, handlechangedescription ,handlechangeLocation, handlechangeNumberOfmember ,handleChangePrice,handlechangestatus}) {
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
 let {addEvent}=useAddEvent();
  function handleAddevent(e){
    e.preventDefault(); 
    addEvent(name, description,location, numberOfMember,price,status,image);
    handlechangeFlag();
  }

  return (
    <Dialog style={{ zIndex: "12345675" }} open={flag}>
      <DialogTitle>اضافة تطوع جديد</DialogTitle>
      <DialogContent>
        <form id="subscription-form">
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="اسم التطوع"
            type="text"
            fullWidth
            variant="outlined"
            value={name}
            onChange={(e) => handleChangename(e.target.value)}
            sx={textFieldStyle}
          />

          <TextField
            required
            margin="dense"
            id="description"
            name="description"
            label="وصف التطوع"
            type="text"
            fullWidth
            variant="outlined"
            value={description}
            onChange={(e) => handlechangedescription(e.target.value)}
            sx={textFieldStyle}
          />

          <TextField
            required
            margin="dense"
            id="location"
            name="location"
            label="موقع التطوع"
            type="text"
            fullWidth
            variant="outlined"
            value={location}
            onChange={(e) => handlechangeLocation(e.target.value)}
            sx={textFieldStyle}
          />

          <TextField
            required
            margin="dense"
            id="numberOfMember"
            name="numberOfMember"
            label="عدد المتطوعين المطلوب"
            type="text"
            fullWidth
            variant="outlined"
            value={numberOfMember}
            onChange={(e) => handlechangeNumberOfmember(e.target.value)}
            sx={textFieldStyle}
          />

          <TextField
            required
            margin="dense"
            id="price"
            name="price"
            label="سهم التطوع"
            type="text"
            fullWidth
            variant="outlined"
            value={price}
            onChange={(e) => handleChangePrice(e.target.value)}
            sx={textFieldStyle}
          />

          <TextField
            select
            required
            margin="dense"
            id="status"
            name="status"
            label="الحالة"
            fullWidth
            variant="outlined"
            value={status}
            onChange={(e) => handlechangestatus(e.target.value)}
            sx={textFieldStyle}
            SelectProps={{
              MenuProps: {
                container: document.body,
                disablePortal: true, 
              },
            }}
          >
            <MenuItem value="active">فعال</MenuItem>
            <MenuItem value="inactive">غير فعال</MenuItem>
            <MenuItem value="cancelled">متوقف</MenuItem>
          </TextField>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handlechangeFlag} sx={{ color: "#ef6c00" }}>
          الغاء
        </Button>
        <Button
          
          type="submit"
          form="subscription-form"
          sx={buttonStyle}
          onClick={handleAddevent}
        >
          اضافة
        </Button>
      </DialogActions>
    </Dialog>
  );
}
