import React, { useState } from "react";
import DatePopover from "./DatePopover";
import DimensionsPopover from "./DimensionsPopover";
import MetricsPopover from "./MetricsPopover";
import { Grid } from "@material-ui/core";
import BarChartIcon from "@material-ui/icons/BarChart";
import Modal from "@material-ui/core/Modal";
import DataChart from "./DataChart";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./styles.css";

export default function DataTableSettings(props) {
  const [open, setOpen] = useState(false);

  let handleSetDate = (days) => {
    props.filterDataByDays(days);
  };

  let handleChangeDimensions = (dimensions) => {
    props.handleChangeDimensions(dimensions);
  };

  let handleChangeMetrics = (metrics) => {
    props.handleChangeMetrics(metrics);
  };

  let handleSelectItem = (dim) => {
    props.handleSelectItem(dim);
  };

  let handleSelectMetrics = (metric) => {
    props.handleSelectMetrics(metric);
  };

  const handleOpenDataChart = () => {
    setOpen(true);
  };

  const handleCloseDataChart = () => {
    setOpen(false);
  };

  return (
    <div id="data-table-settings">
      <h6 id="data-table-settings-title">Data Table Settings</h6>
      <hr />
      <Grid id="data-table-settings-grid" container justify="flex-start">
        <Grid item>
          <DimensionsPopover
            handleChangeDimensions={handleChangeDimensions}
            selectedDimensions={props.selectedDimensions}
            handleSelectItem={handleSelectItem}
          />
        </Grid>
        <Grid item>
          <MetricsPopover
            handleChangeMetrics={handleChangeMetrics}
            selectedMetrics={props.selectedMetrics}
            handleSelectMetrics={handleSelectMetrics}
          />
        </Grid>
        <div
          id="data-table-settings-chart-icon-container"
        >
          <Grid
            id="data-table-settings-chart-icon-container-grid"
            container
            item
            justify="flex-end"
          onClick={handleOpenDataChart}
          >
            <Grid item>
              <BarChartIcon id="data-table-settings-chart-icon" />
            </Grid>
          </Grid>
        </div>
        <Modal
          id="data-chart-modal"
          open={open}
          onClose={handleCloseDataChart}
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <DataChart data={props.data} />
          </Fade>
        </Modal>
      </Grid>
      <br />
      <DatePopover numRows={props.numRows} handleSetDate={handleSetDate} />
      <hr />
      <span id="row-count">Showing {props.numRows} Rows</span>
    </div>
  );
}
