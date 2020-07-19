import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import TableSortLabel from "@material-ui/core/TableSortLabel";

export default function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  let headCells = [];
  props.dataTypes.forEach((type) => {
  let label = "";

    switch (type) {
      case "mediaType":
        label = "Media Type";
        break;
      case "trafficSource":
        label = "Traffic Source";
        break;
      case "geo":
        label = "Geo";
        break;
      case "cost":
        label = "Cost";
        break;
      case "impressions":
        label = "Impressions";
        break;
      case "clicks":
        label = "Clicks";
        break;
      case "conversions":
        label = "Conversions";
        break;
    }
    headCells.push({ id: type, label: label });
  });

  return (
    <TableHead id="table-head">
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="left"
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
