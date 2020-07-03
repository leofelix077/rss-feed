import React, { useState, useEffect } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import Parser from "rss-parser";
import { makeStyles, Grid, Button, Select, MenuItem } from "@material-ui/core";
import PropTypes from "prop-types";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Parser as HtmlToReactParser } from "html-to-react";
import RSSFeedItem from "./RSSFeedItem";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const htmlToReactParser = new HtmlToReactParser();

interface RSSFeedProps {
  data: Parser.Item[];
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: theme.spacing(2),
    flexDirection: "row",
  },
  icon: {
    color: theme.palette.primary.main,
    fontSize: 32,
  },
  selectRoot: {
    backgroundColor: "#333333",
    borderRadius: "3px",
    borderColor: theme.palette.primary.dark,
  },
  selectMenu: {
    color: "#8D8D8D",
    backgroundColor: "3E3E3E",
    padding: theme.spacing(1),
  },
  empty: {
    width: 64,
    height: 1,
  },
}));

const RSSFeed: React.FC<RSSFeedProps> = ({
  data,
}): ReturnType<React.FC<RSSFeedProps>> => {
  const classes = useStyles();
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(5);

  const [formattedData, setFormattedData] = useState(
    data.slice(offset, offset + limit).map((item) => ({
      ...item,
      content: htmlToReactParser.parse(item.content),
    }))
  );

  useEffect(() => {
    setFormattedData(
      data.slice(offset, offset + limit).map((item) => ({
        ...item,
        content: htmlToReactParser.parse(item.content),
      }))
    );
  }, [limit, offset, data]);

  return (
    <Grid container item className={classes.root}>
      <Grid item container justify="space-between">
        {offset ? (
          <Button onClick={() => setOffset(Math.max(offset - limit, 0))}>
            <ChevronLeftIcon className={classes.icon} />
          </Button>
        ) : (
          <Grid className={classes.empty} />
        )}
        <Select
          labelId="paging-selector"
          id="paging-selector"
          value={limit}
          onChange={(event) => setLimit(event.target.value as number)}
          classes={{
            select: classes.selectRoot,
            selectMenu: classes.selectMenu,
          }}
        >
          {[5, 10, 20].map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
        {offset + limit < data.length ? (
          <Button onClick={() => setOffset(offset + limit)}>
            <ChevronRightIcon className={classes.icon} />
          </Button>
        ) : (
          <Grid className={classes.empty} />
        )}
      </Grid>
      {formattedData.map((item) => (
        <RSSFeedItem item={item} key={item.guid} />
      ))}
    </Grid>
  );
};

RSSFeed.propTypes = {
  data: PropTypes.array.isRequired,
};

export default RSSFeed;
