import React, { useState, useEffect } from "react";
import { useAutocomplete, createTheme, Input } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ExampleWrapper from "./select-list";
import { multiSelectOption } from "services/filterService";

const theme = createTheme();

export default function UseAutocomplete() {
  const theme = createTheme();

  const useStyles = makeStyles((theme: any) => ({
    label: {
      display: "block",
    },
    input: {
      width: "100%",
      display: "block",
      padding: ".375rem",
      borderRadius: ".25rem",
      color: "#495058",
      border: "1px solid #ced4da",
    },
  }));
  const classes = useStyles();
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isNextPageLoading, setIsNextPageLoading] = useState(false);
  const [items, setItems] = useState([]);

  const loadNextPage = (...args: any) => {
    console.log("loadNextPage", ...args);
    setIsNextPageLoading(true);
    setTimeout(async () => {
      setHasNextPage(items.length < 100);
      setIsNextPageLoading(false);

      try {
        const result = await multiSelectOption("Info/list-contact");
        console.log(result);
        // setItems([...items].concat(
        //   new Array(30).fill(true).map(() => ({ name: result }))
        // ))
        const data = result.map((index) => {
          return { name: index.value, id: index.id };
        });
        setItems(data);
      } catch (err) {
        console.log(err);
      }
    }, 2500);
  };

  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: "use-autocomplete-demo",
    options: items,
    getOptionLabel: (option) => option.name,
  });

  useEffect(() => {
    if (items.length === 0) {
      loadNextPage();
    }
  }, [items]);

  return (
    <div>
      <div {...getRootProps()}>
        <input className={classes.input} {...getInputProps()} />
      </div>
      {groupedOptions.length > 0 ? (
        <ExampleWrapper
          hasNextPage={hasNextPage}
          isNextPageLoading={isNextPageLoading}
          items={items}
          loadNextPage={loadNextPage}
          getOptionProps={getOptionProps}
          groupedOptions={groupedOptions}
          listboxProps={getListboxProps()}
        />
      ) : null}
    </div>
  );
}
