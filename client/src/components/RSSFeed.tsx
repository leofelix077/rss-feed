import React, { useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import Parser from "rss-parser";
import { useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
import {
  TableHead,
  TableRow,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TablePagination,
} from "@material-ui/core";
import CustomTableHeadCell from "./CustomTableHeadCell";
import { push } from "connected-react-router";
import TablePaginationActions from "@material-ui/core/TablePagination/TablePaginationActions";

interface RSSFeedProps {
  data: Parser.Output;
}

const useStyles = makeStyles((theme) => ({
  ordersWrapper: {
    position: "relative",
  },
  ordersContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "2rem",
    height: "calc(100vh - 4rem)",
    backgroundColor: "#f6f6f6",
    overflowY: "auto",
  },
  searchContainer: {
    padding: "1rem",
  },
  resultsContainer: {
    padding: "1rem",
  },
  sumTotalCell: {
    display: "flex",
    alignItems: "center",
  },
  hover: {
    color: "white",
    fontWeight: 600,
  },
  rowSpanningCell: {
    textAlign: "center",
  },
  noResultsMessage: {
    color: "#aaaaaa",
  },
  errorMessage: {
    color: "#aaaaaa",
  },
  ordersTableRow: {
    cursor: "pointer",
  },
  statisticContainer: {
    padding: "1rem",
  },
  progress: {
    flexGrow: 1,
  },
  statisticError: {
    height: "5rem",
    fontSize: "3rem",
    alignContent: "center",
  },
  head: {
    backgroundColor: "#424242",
    color: "white",
    fontSize: "1em",
  },
}));

const RSSFeed: React.FC<RSSFeedProps> = (): ReturnType<
  React.FC<RSSFeedProps>
> => {
  const data = useSelector((state: RootState) => state.rssFeed.feedResult);
  const classes = useStyles();

  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);

  const orderBy: any = (): any => "";
  const direction: any = (): any => "";
  const handleRequestSort: any = (): any => "";

  const handleChangePage = (_: any, page: any): any => "";

  return (
    <Table>
      <colgroup>
        <col style={{ width: "15%" }} />
        <col style={{ width: "20%" }} />
        <col style={{ width: "20%" }} />
        <col style={{ width: "5%" }} />
        <col style={{ width: "5%" }} />
        <col style={{ width: "15%" }} />
        <col style={{ width: "10%" }} />
        <col style={{ width: "5%" }} />
        <col style={{ width: "5%" }} />
      </colgroup>
      <TableHead>
        <TableRow classes={{ hover: classes.hover }}>
          <CustomTableHeadCell
            id="name"
            label="Name"
            orderBy={orderBy}
            direction={direction}
            onRequestSort={handleRequestSort}
          />
          <CustomTableHeadCell
            id="email"
            label="Email"
            orderBy={orderBy}
            direction={direction}
            onRequestSort={handleRequestSort}
          />
          <CustomTableHeadCell
            id="venue"
            label="Venue"
            orderBy={orderBy}
            direction={direction}
            onRequestSort={handleRequestSort}
          />
          <CustomTableHeadCell
            id="orderNumber"
            label="Order Number"
            orderBy={orderBy}
            direction={direction}
            onRequestSort={handleRequestSort}
          />
          <CustomTableHeadCell
            id="orderLocation"
            label="Location"
            orderBy={orderBy}
            direction={direction}
            onRequestSort={handleRequestSort}
          />
          <CustomTableHeadCell
            id="total"
            label="Total – Payment Method"
            orderBy={orderBy}
            direction={direction}
            onRequestSort={handleRequestSort}
          />
          <CustomTableHeadCell
            id="time"
            label="Time"
            orderBy={orderBy}
            direction={direction}
            onRequestSort={handleRequestSort}
          />
          <CustomTableHeadCell
            id="userRating"
            label="User Rating"
            orderBy={orderBy}
            direction={direction}
            onRequestSort={handleRequestSort}
          />
          <TableCell
            classes={{
              head: classes.head,
            }}
          />
        </TableRow>
      </TableHead>
      <>
        <TableBody>
          {data?.map((item: any) => (
            <TableRow
              key="abcd"
              onClick={() => push(`something`)}
              className={classes.ordersTableRow}
            >
              <TableCell>something</TableCell>
              <TableCell>something2</TableCell>
              <TableCell>something3</TableCell>
              <TableCell>something4</TableCell>
              <TableCell>something5</TableCell>
              <TableCell>somethign6</TableCell>
              <TableCell>something7</TableCell>
              <TableCell>something8</TableCell>
              <TableCell>something9</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[10, 25, 50]}
              colSpan={8}
              count={data?.length}
              rowsPerPage={limit}
              page={offset / limit}
              SelectProps={{
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={() => setLimit(25)}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </>
    </Table>
  );
};

export default RSSFeed;
