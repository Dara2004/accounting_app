import { IconButton, Typography } from "@material-ui/core";
import addIcon from "../public/add.svg";

const AddItemBtn = ({ text, onClick }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <IconButton onClick={onClick}>
        <img src={addIcon} width={30} height={30} />
        &nbsp;<Typography variant="body1">{text}</Typography>
      </IconButton>
    </div>
  );
};
export default AddItemBtn;
