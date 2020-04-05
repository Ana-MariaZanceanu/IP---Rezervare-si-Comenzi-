import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import UserForm from "./form/UserForm";
import "../App.css";
export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="button" onClick={handleClickOpen}>
        {props.name}
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <div style={styles.app}>
            <UserForm />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

const styles = {
  app: {
    padding: 20,
    width: "30vw",
    height: "70vh",
    textAlign: "center"
  }
};
