import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";

export default function DateSelect(props) {
  const [dateRange, setDateRange] = React.useState(60);

  const handleChange = (event) => {
    let days = event.target.value;
    props.setDateDisplay(days);
    let minDate = getMinDate(days);
    setDateRange(event.target.value);
  };

  function getMinDate(value) {
    var todayDate = new Date();
    let newDate = todayDate.getDate() - value;
    todayDate.setDate(newDate);

    return todayDate;
  }

  return (
    <div>
      <FormControl>
        <InputLabel htmlFor="date-select"></InputLabel>
        <FormHelperText>Select Date Range</FormHelperText>
        <Select
          native
          value={dateRange}
          onChange={handleChange}
          inputProps={{
            name: "date-select",
            id: "date-select",
          }}
        >
          <option value={60}>Last 60 Days</option>
          <option value={28}>Last 28 Days</option>
          <option value={14}>Last 14 Days</option>
        </Select>
      </FormControl>
    </div>
  );
}
