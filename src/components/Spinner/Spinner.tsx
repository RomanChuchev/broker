import React from "react";

import s from "./Spinner.module.scss";

const Spinner = () => {
  return (
    <div className={s.ldsCss}>
      <div className={s.ldsDoubleRing}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
