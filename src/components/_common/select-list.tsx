import React from "react";
import { createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";

export default function ExampleWrapper({hasNextPage,isNextPageLoading,items,loadNextPage,getOptionProps,groupedOptions,listboxProps}:any) {

  const theme = createTheme();
  const useStyles: any = makeStyles((theme: any) => ({
    listbox: {
      width: "100%",
      margin: 0,
      padding: 0,
      zIndex: 1,
      listStyle: "none",
      backgroundColor: "·ffff",
      maxHeight: "100%",
      border: "1px solid rgba(0,0,0,.25)",
      '& li[data-focus="true"]': {
        backgroundColor: "#4a8df6",
        color: "white",
        cursor: "pointer",
      },
      "& li:active": {
        backgroundColor: "#2977f5",
        color: "white",
      },
    },
  }));
  const classes = useStyles();
  const itemCount = hasNextPage ? items.length + 1 : items.length;

  const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;

  const isItemLoaded = (index:any) => !hasNextPage || index < items.length;
  
  const Item = ({ index, style }:any) => {
    if (!isItemLoaded(index)) {
      return <li style={style}>Loading...</li>;
    } else if (!groupedOptions || index >= groupedOptions.length) {
      return <li style={style} />;
    } else {
      const option = groupedOptions[index];
      const name = option.name || "no name";
      return (
        <li style={style} {...getOptionProps({ option, index })}>
          {name}
        </li>
      );
    }
  };


  return (
    <InfiniteLoader
      isItemLoaded={isItemLoaded}
      itemCount={itemCount}
      loadMoreItems={loadMoreItems}
    >
      {({ onItemsRendered, ref }) => (
        <div {...listboxProps}>
          <List
            className={classes.listbox}
            height={150}
            itemCount={itemCount}
            itemSize={30}
            onItemsRendered={onItemsRendered}
            ref={ref}
            width={200}
            innerElementType="ul"
          >
            {Item}
          </List>
        </div>
      )}
    </InfiniteLoader>
  );
}
