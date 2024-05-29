import { Download } from "@mui/icons-material";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { I18n } from "../../i18n/i18n";

interface Props {
  downloadEvent: () => void;
  title: string;
}

const StyledButton = styled(Button)({
  boxShadow: "none",
  alignSelf: "flex-end",
  textTransform: "none",
  fontSize: 15,
  marginRight: "2.5%",
  marginTop: "2%",
  padding: "12px 20px",
  lineHeight: 1.5,
  backgroundColor: "#125FDE",
  borderRadius: "0px",
  "&:hover": {
    backgroundColor: "#244AA5",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#244AA5",
  },
  "&:focus": {
    boxShadow: "none",
  },
});

const DownloadButton = (props: Props) => {
  return (
    <StyledButton
      onClick={props.downloadEvent}
      variant="contained"
      disableRipple
      endIcon={<Download />}
    >
      {props.title}
    </StyledButton>
  );
};

export default DownloadButton;
