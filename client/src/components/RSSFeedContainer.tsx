import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { Loading } from "./Loading";
import { makeStyles, Grid } from "@material-ui/core";
import { Error } from "./Error";
import { SearchBar } from "./SearchBar";
import RSSFeed from "./RSSFeed";

const useStyles = makeStyles((theme) => ({
  container: {
    color: "white",
    fontSize: "6vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: "10vw",
    color: "#3C3C3C",
  },
  currentTime: {
    fontSize: 16,
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(0),
    paddingTop: theme.spacing(1),
  },
  weatherBlockContainer: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  weatherBlockContainerHidden: {
    display: "none",
  },
  header: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
  },
  loadingOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.75)",
  },
  loadingMargin: {
    marginTop: 64,
  },
}));

const RSSFeedContainer: React.FC = (): ReturnType<React.FC> => {
  const classes = useStyles();

  const rssFeedData = useSelector(
    (state: RootState) => state.rssFeed.feedResult
  );

  const { error, processing } = useSelector(
    (state: RootState) => state.rssFeed.request
  );

  const loadingOverlay = (
    <div className={classes.loadingOverlay}>
      <div className={classes.loadingMargin}>
        <Loading />
      </div>
    </div>
  );

  if (error) {
    return (
      <div>
        <SearchBar />
        <Error error={error} />
        {processing && loadingOverlay}
      </div>
    );
  }

  if (processing && !rssFeedData) {
    return <Loading />;
  }

  if (!rssFeedData) {
    return <SearchBar />;
  }

  return (
    <div>
      {rssFeedData?.items?.length && (
        <>
          <SearchBar />
          <div className={classes.container}>
            <Grid container>
              <Grid item container xs={10}>
                <RSSFeed data={rssFeedData.items} />
              </Grid>
            </Grid>
          </div>
        </>
      )}
      {processing && loadingOverlay}
    </div>
  );
};

export default RSSFeedContainer;
