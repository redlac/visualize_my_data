import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import EnhancedTableHead from "./EnhancedTableHead";
import TrafficSourceFilter from "./TrafficSourceFilter";

import "./styles.css";

export default function DataTable(props) {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("mediaType");
  let rows = [];
  const [filteredRows, setFilteredRows] = useState(rows);
  const [filteredTotalCost, setFilteredTotalCost] = useState(0);
  const [filteredImpressions, setFilteredImpressions] = useState(0);
  const [filteredClicks, setFilteredClicks] = useState(0);
  const [filteredConversions, setFilteredConversions] = useState(0);

  let totalCost = 0;
  let totalImpressions = 0;
  let totalClicks = 0;
  let totalConversions = 0;

  let types = [];
  props.selectedDimensions[0].forEach((dim) => {
    Object.keys(dim).forEach((key) => {
      if (key === "content") {
        let type = dim[key];

        switch (type) {
          case "mediaType":
            if (!types.includes("mediaType")) {
              types.push("mediaType");
            }
            break;
          case "trafficSource":
            if (!types.includes("trafficSource")) {
              types.push("trafficSource");
            }
            break;
          case "geo":
            if (!types.includes("geo")) {
              types.push("geo");
            }
            break;
        }
      }
    });
  });

  props.selectedMetrics[0].forEach((metric) => {
    Object.keys(metric).forEach((key) => {
      if (key === "content") {
        let type = metric[key];

        switch (type) {
          case "cost":
            if (!types.includes("cost")) {
              types.push("cost");
            }
            break;
          case "impressions":
            if (!types.includes("impressions")) {
              types.push("impressions");
            }
            break;
          case "clicks":
            if (!types.includes("clicks")) {
              types.push("clicks");
            }
            break;
          case "conversions":
            if (!types.includes("conversions")) {
              types.push("conversions");
            }
            break;
        }
      }
    });
  });

  for (let i = 1; i < props.data.length; i++) {
    let rowVals = [];
    props.selectedDimensions !== undefined &&
      props.selectedDimensions[0].forEach((dim) => {
        Object.keys(dim).forEach((key) => {
          if (dim[key].length > 1) {
            let type = dim[key];
            let d = props.data[i][dim[key]];
            rowVals.push({ type: type, value: d });
          }
        });
      });

    props.selectedMetrics !== undefined &&
      props.selectedMetrics[0].forEach((metric) => {
        Object.keys(metric).forEach((key) => {
          if (metric[key].length > 1) {
            let type = metric[key];
            let d = props.data[i][metric[key]];
            rowVals.push({ type: type, value: d });
          }
        });
      });

    if (rowVals !== undefined) {
      rows.push(createdata(...rowVals));
    }

    totalCost += props.data[i].cost;
    totalImpressions += props.data[i].impressions;
    totalClicks += props.data[i].clicks;

    totalConversions += props.data[i].conversions;
  }

  let formatter = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "CAD",
  });

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  let filterTrafficSource = (trafficSourceList) => {
    let filteredRows = rows.filter((row) => {
      return trafficSourceList.includes(row.trafficSource);
    });
    setFilteredRows(filteredRows);
    props.handleFilterData(filteredRows);
  };

  useEffect(() => {
    let newTotalCost = 0;
    let newImpressions = 0;
    let newClicks = 0;
    let newConversions = 0;

    filteredRows.forEach((row) => {
      newTotalCost += row.cost;
      newImpressions += row.impressions;
      newClicks += row.clicks;
      newConversions += row.conversions;
    });

    setFilteredTotalCost(newTotalCost);
    setFilteredImpressions(newImpressions);
    setFilteredClicks(newClicks);
    setFilteredConversions(newConversions);
  }, [filteredRows]);

  return (
    <TableContainer className="table-container">
      <Table aria-label="simple table" className="table">
        <EnhancedTableHead
          order={order}
          orderBy={orderBy}
          onRequestSort={handleRequestSort}
          rowCount={filteredRows.length}
          dataTypes={types}
        />
        <TableBody>
          <TableRow id="all-data-row">
            {types.map((type, index) => {
              let label = "";
              switch (type) {
                case "mediaType":
                  label = "All";
                  break;
                case "trafficSource":
                  label =
                    filteredRows.length === rows.length ? "All" : "Custom";
                  break;
                case "geo":
                  label = "All";
                  break;
                case "cost":
                  label = formatter.format(filteredTotalCost).substring(2);
                  break;
                case "impressions":
                  label = filteredImpressions;
                  break;
                case "clicks":
                  label = filteredClicks;
                  break;
                case "conversions":
                  label = filteredConversions + "%";
                  break;
              }
              return (
                <TableCell key={index} align="left">
                  {label}
                  {type === "trafficSource" ? (
                    <TrafficSourceFilter
                      filterTrafficSource={filterTrafficSource}
                    />
                  ) : (
                    ""
                  )}
                </TableCell>
              );
            })}
          </TableRow>
          {stableSort(filteredRows, getComparator(order, orderBy)).map(
            (row, index) => {
              const labelId = `enhanced-table-${index}`;
              return (
                <TableRow className="table-row" hover tabIndex={-1} key={index}>
                  {types.map((type, index) => {
                    return (
                      <TableCell key={index} align="left">
                        {type === "cost"
                          ? formatter.format(row[type]).substring(2)
                          : type === "conversions"
                          ? row[type] + "%"
                          : row[type]}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            }
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function createdata(...params) {
  let rowData = {};
  params.forEach((p) => {
    if (p.type === "mediaType") {
      rowData.mediaType = p.value;
    } else if (p.type === "trafficSource") {
      rowData.trafficSource = p.value;
    } else if (p.type === "geo") {
      rowData.geo = p.value;
    } else if (p.type === "cost") {
      let val = p.value;
      rowData.cost = val;
    } else if (p.type === "impressions") {
      rowData.impressions = p.value;
    } else if (p.type === "clicks") {
      rowData.clicks = p.value;
    } else if (p.type === "conversions") {
      let val = p.value;
      rowData.conversions = val;
    }
  });
  return rowData;
}
