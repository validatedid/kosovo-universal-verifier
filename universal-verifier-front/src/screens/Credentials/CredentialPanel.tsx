import {Grid} from "@mui/material";
import {useEffect, useState} from "react";
import {I18n} from "../../i18n/i18n";
import "./Panels.css";

interface Props {
  index: number;
  verifiableCredential: any;
}

function CredentialPanel(props: Props) {
  const [data, setData] = useState({
    type: [],
    issuanceDate: "",
    expirationDate: "",
  });
  const [validityStatus, setValidityStatus] = useState("Valid");
  const { verifiableCredential } = props;
  const { issuanceDate, type } = verifiableCredential;

  useEffect(() => {
    if (data.type.length === 0) {
      setData({ type, issuanceDate, expirationDate: "" });
    }
  }, []);

  const formatDate = (date: string) => {
    if (!date) {
      return I18n.t("global.notAvailable");
    }
    const formattedDate = new Date(date);
    return formattedDate.toLocaleString();
  };

  return (
      <Grid container className="mainPanelContainer">
        <Grid item xs={12} sm={12} md={12} lg={12} className="fieldContainer">
          <text>{I18n.t("credential.status")}:</text>
          <text>{validityStatus}</text>
          <img
              className="check"
              src={require("../../assets/images/checkSuccess.png")}
              alt="success"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} className="fieldContainer">
          <text>{I18n.t("credential.type")}:</text>
          <text>
            {data?.type.map((element: any, i: any) => {
              return element + (i === data.type.length - 1 ? "" : ", ");
            })}
          </text>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} className="fieldContainer">
          <text>{I18n.t("credential.issuanceDate")}:</text>
          <text>{formatDate(data.issuanceDate)}</text>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} className="fieldContainer">
          <text>{I18n.t("credential.expirationDate")}:</text>
          <text>{formatDate(verifiableCredential.validUntil)}</text>
        </Grid>
      </Grid>
  );
}

export default CredentialPanel;
