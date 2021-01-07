import React, { useState } from "react";

import {
  PopupContainer,
  Popup,
  PopupClose,
  PopupTitle,
  PopupDesc,
  PopupLink,
} from "./PopupElements";

const PopupWindow = () => {
  const [closed, setClose] = useState(false);

  return (
    <PopupContainer style={{ display: closed ? "none" : "block" }}>
      <Popup>
        <PopupClose onClick={() => setClose(true)}></PopupClose>
        <PopupTitle>Warning! Not a real 'Healthcare' website.</PopupTitle>
        <PopupDesc>
          This is a website that is created to showcase my skillset in
          full-stack developing.
        </PopupDesc>
        <PopupLink href="https://github.com/hquach-cs/HQHealthcare">
          Source
        </PopupLink>
      </Popup>
    </PopupContainer>
  );
};

export default PopupWindow;
