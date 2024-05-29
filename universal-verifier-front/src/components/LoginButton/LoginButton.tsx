import { ArrowForward } from "@mui/icons-material";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { I18n } from "../../i18n/i18n";

interface Props {
  vidchainLogin: () => void;
}

const StyledButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 15,
  marginLeft: "4%",
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

const LoginButton = (props: Props) => {
  return (
    <StyledButton
      onClick={props.vidchainLogin}
      variant="contained"
      disableRipple
      endIcon={<ArrowForward />}
    >
      {I18n.t("global.authenticate")}
    </StyledButton>
  );
};

export default LoginButton;
