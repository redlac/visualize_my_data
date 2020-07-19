import React, { useState } from "react";
import Popover from "@material-ui/core/Popover";
import DatePicker from "./DatePicker";
import DateSelect from "./DateSelect";
import "./styles.css";

export default function DatePopover(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [days, setDays] = useState(60);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let handleSetDate = (days) => {
    setDays(days);
    props.handleSetDate(days);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div id="date-popover">
      <a
        className="data-table-settings-date-popover"
        onClick={handleClick}
        href="#"
      >
        Date:<span>Last {days} Days</span>
      </a>
      <Popover
        id={id}
        className="date-popover"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <DateSelect setDateDisplay={handleSetDate} />
        <DatePicker id="date-picker" setDateDisplay={handleSetDate} />
      </Popover>
    </div>
  );
}
