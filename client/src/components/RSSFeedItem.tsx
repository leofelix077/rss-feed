import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import Parser from "rss-parser";
import PropTypes from "prop-types";

interface RSSFeedItemProps {
  item?: Parser.Item;
}

const RSSFeedItem: React.FC<RSSFeedItemProps> = ({
  item,
}): ReturnType<React.FC<RSSFeedItemProps>> => {
  return <div>{JSON.stringify(item)}</div>;
};

export default RSSFeedItem;

RSSFeedItem.propTypes = {
  item: PropTypes.array,
};

RSSFeedItem.defaultProps = {
  item: undefined,
};
