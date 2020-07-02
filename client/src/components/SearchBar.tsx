import React, { FormEvent, useState } from "react";
import { TextField, makeStyles, Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { getFeedRequest } from "../redux/rssFeed";

const useStyles = makeStyles((theme) => ({
  searchField: {
    padding: theme.spacing(2),
  },
  searchFieldContainer: {
    padding: theme.spacing(2),
    display: "flex",
    alignItems: "row",
    justifyContent: "space-around",
  },
  textFieldRoot: {
    padding: 0,
  },
  input: {
    color: "white",
  },
  buttonContainer: {
    height: 24,
  },
  buttonRoot: {
    height: 28,
  },
  form: {
    display: "flex",
    flexDirection: "row",
  },
}));

export const SearchBar: React.FC = (): ReturnType<React.FC> => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [url, setUrl] = useState("");

  const { t } = useTranslation("feed");

  const handlePlaceChange = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(getFeedRequest(url));
  };

  return (
    <div className={classes.searchFieldContainer}>
      <form onSubmit={handlePlaceChange} className={classes.form}>
        <TextField
          className={classes.searchField}
          id="place"
          label="URL"
          type="search"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            className: classes.input,
          }}
          classes={{
            root: classes.textFieldRoot,
          }}
          onChange={(event) => setUrl(event.target.value)}
          value={url}
        />
        <div className={classes.buttonContainer}>
          <Button
            variant="contained"
            type="submit"
            classes={{
              root: classes.buttonRoot,
            }}
          >
            {t("send")}
          </Button>
        </div>
      </form>
    </div>
  );
};
