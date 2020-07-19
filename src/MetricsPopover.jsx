import React, { useState } from "react";
import Popover from "@material-ui/core/Popover";
import SortableItems from "./SortableItems";
import ItemsList from "./ItemsList";
import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import "./styles.css";

export default function MetricsPopover(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "metrics-popover" : undefined;

  let handleSelectMetrics = (item) => {
    props.handleSelectMetrics(item);
  };

  let handleChangeMetrics = (metrics) => {
    props.handleChangeMetrics(metrics);
  };

  return (
    <div id="metrics-popover">
      <a className="data-table-dimensions-popover" href="#">
        <span onClick={handleClick}>
          <span className="data-table-dimensions-popover-heading">
            Metrics:
          </span>{" "}
          Cost, Impressions, Clicks, Conversions
        </span>
      </a>
      <Popover
        id={id}
        className="metrics-popover"
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
        <Grid
          id="popover-metrics-content-grid"
          container
          justify="space-around"
        >
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
          <Grid id="popover-item-selection" item container justify="center">
            <Grid item>
              <div id="items-list-container">
                <ItemsList
                  selectedMetrics={props.selectedSelectedMetrics}
                  handleSelectMetrics={handleSelectMetrics}
                  itemType="metric"
                />
              </div>
            </Grid>
            <Grid item>
              <div id="sortable-items-container">
                <SortableItems
                  selectedMetrics={props.selectedMetrics}
                  handleChangeMetrics={handleChangeMetrics}
                  itemType="metrics"
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Popover>
    </div>
  );
}
