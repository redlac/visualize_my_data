import "date-fns";
import React, {useState} from "react";
import DateFnsUtils from '@date-io/date-fns';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

function getMinDate( value ) {
    var todayDate = new Date()
    let newDate = todayDate.getDate() - value;
    todayDate.setDate(newDate);

    return todayDate; 
}

export default function DatePicker(props) {
  const [dateFrom, setDateFrom] = useState(getMinDate(60));

  const handleDateFrom = (date) => {
    props.setDateDisplay()
    const diffTime = Math.abs(new Date() - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    setDateFrom(date);
    props.setDateDisplay(diffDays);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Choose starting date"
          value={dateFrom}
          onChange={handleDateFrom}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
    </MuiPickersUtilsProvider>
  );
}
