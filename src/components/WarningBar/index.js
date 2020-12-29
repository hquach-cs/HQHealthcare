import React from "react";

import { Warning, WarningText, WarningButton } from "./WarningBarElements";

const WarningBar = () => {
  return (
    <Warning>
      <WarningText>
        Track news about Coronavirus (Covid-19) and upcoming Vaccination!
      </WarningText>
      <WarningButton>Learn More!</WarningButton>
    </Warning>
  );
};

export default WarningBar;
