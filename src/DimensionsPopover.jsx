import React, { useState } from "react";
import Popover from "@material-ui/core/Popover";
import SortableItems from "./SortableItems";
import ItemsList from "./ItemsList";
import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import "./styles.css";

export default function DimensionsPopover(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "dimensions-popover" : undefined;

  let handleSelectItem = (item) => {
    props.handleSelectItem(item);
  };

  let handleChangeDimensions = (dimensions) => {
    props.handleChangeDimensions(dimensions);
};

  return (
    <div id="dimensions-popover">
      <a className="data-table-dimensions-popover" href="#">
        <span onClick={handleClick}>
          <span className="data-table-dimensions-popover-heading">
            Dimensions:
          </span>{" "}
          Media Type, Traffic Source, Geo
        </span>
      </a>
      <Popover
        id={id}
        className="dimensions-popover"
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
        <Grid id="popover-content-grid" container justify="space-around">
          <Grid id="search-input-grid" item>
            <div id="search-popover">
              <TextField
                id="search-popover-input"
                label="Search"
                variant="outlined"
                size="small"
              />
            </div>
          </Grid>
          <Grid
            id="popover-item-selection"
            item
            container
            justify="center"
          >
            <Grid item>
              <div id="items-list-container">
                <ItemsList
                  selectedDimensions={props.selectedDimensions}
                  handleSelectItem={handleSelectItem}
                  itemType='dimensions'
                />
              </div>
            </Grid>
            <Grid item>
              <div id="sortable-items-container">
                <SortableItems selectedDimensions={props.selectedDimensions} handleChangeDimensions={handleChangeDimensions} itemType='dimensions'/>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Popover>
    </div>
  );
}
