import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import Parser from "rss-parser";
import PropTypes from "prop-types";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import moment from "moment";

interface RSSFeedItemProps {
  item: Parser.Item;
}

const useStyles = makeStyles((theme) => ({
  feedItemContainer: {
    justifyContent: "center",
    flexDirection: "column",
    boxShadow: "rgba(0,0,0, 0.3) 0px 5px 2px",
    padding: theme.spacing(2),
  },
  date: {
    fontSize: 10,
    textAlign: "end",
  },
  creatorText: {
    fontSize: 12,
  },
}));

const RSSFeedItem: React.FC<RSSFeedItemProps> = ({
  item,
}): ReturnType<React.FC<RSSFeedItemProps>> => {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.feedItemContainer}>
      {item.title && <Typography>{item.title}</Typography>}
      {item.creator && (
        <Typography className={classes.creatorText}>{item.creator}</Typography>
      )}
      {!!item.content && item.content}
      {item.categories && <Grid item>{item.categories.join(", ")}</Grid>}
      {item.isoDate && (
        <Typography className={classes.date}>
          {moment(item.isoDate).format("LLLL")}
        </Typography>
      )}
    </Grid>
  );
};

export default RSSFeedItem;

RSSFeedItem.propTypes = {
  item: PropTypes.object.isRequired,
};
