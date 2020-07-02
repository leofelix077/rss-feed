import React from "react";
import PropTypes from "prop-types";
import TableCell from "@material-ui/core/TableCell";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import { SortDirection } from "../constants";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      color: "white",
    },
    "&$active": {
      color: "white",
    },
  },
  icon: {
    backgroundColor: "white",
  },
  active: {
    color: "white",
  },
  head: {
    backgroundColor: "#424242",
    color: "white",
    fontSize: "1em",
  },
});

interface CustomTableHeadCellProps {
  id: string;
  label: string;
  numeric?: boolean;
  orderBy: string;
  direction: SortDirection;
  onRequestSort: (event: React.MouseEvent<unknown>, id: string) => void;
}

const CustomTableHeadCell: React.FC<CustomTableHeadCellProps> = ({
  id,
  label,
  numeric,
  orderBy,
  direction,
  onRequestSort,
}): ReturnType<React.FC<CustomTableHeadCellProps>> => {
  const classes = useStyles();
  const createSortHandler = (
    columnId: string
  ): ((event: React.MouseEvent<unknown>) => void) => (
    event: React.MouseEvent<unknown>
  ) => {
    onRequestSort(event, columnId);
  };

  return (
    <TableCell
      classes={{
        head: classes.head,
      }}
      align={numeric ? "right" : "left"}
      sortDirection={orderBy === id ? direction : false}
    >
      <TableSortLabel
        classes={{
          root: classes.root,
          active: classes.active,
          icon: classes.icon,
        }}
        active={orderBy === id}
        direction={direction}
        onClick={createSortHandler(id)}
      >
        <Typography variant="body2">{label}</Typography>
      </TableSortLabel>
    </TableCell>
  );
};

CustomTableHeadCell.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  numeric: PropTypes.bool,
  orderBy: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(["asc", "desc"]).isRequired as any,
  onRequestSort: PropTypes.func.isRequired,
};

CustomTableHeadCell.defaultProps = {
  numeric: false,
  direction: "desc",
};

export default CustomTableHeadCell;
