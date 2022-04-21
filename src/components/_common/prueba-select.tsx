import React, { useEffect, useState } from 'react';
import { FixedSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import Select from 'react-select';
import AutoSizer from 'react-virtualized-auto-sizer';

const SelectWrapper = (props:any) => {
  const {
    hasNextPage,
    isNextPageLoading,
    options,
    loadNextPage,
    placeholder,
    onChange,
    value
  } = props;

  const [selectedOption, setSelectedOption] = useState(value);

  useEffect(() => {
    setSelectedOption(value);
  }, [value]);

  const itemCount = hasNextPage ? options.length + 1 : options.length;

  const itemsData = isNextPageLoading ? () => {} :loadNextPage

  const isItemLoaded = (index:any) => !hasNextPage || index < options.length;

  const MenuList = ({ children }:any) => {
    const childrenArray = React.Children.toArray(children);
    const Item = ({ index, style, ...rest }:any) => {
      const child = childrenArray[index];

      return (
        <div
          className="drop-down-list"
          style={{
            borderBottom: '1px solid rgb(243 234 234 / 72%)',
            display: 'flex',
            alignItems: 'center',
            ...style,
          }}
          onClick={() => handleChange(options[index])}
          {...rest}
        >
          {isItemLoaded(index) && child ? child : `Loading...`}
        </div>
      );
    };

    return (
      <AutoSizer disableHeight>
        {({ width }) => (
          <InfiniteLoader
            isItemLoaded={(index) => index < options.length}
            itemCount={itemCount}
            loadMoreItems={itemsData}
          >
            {({ onItemsRendered, ref }) => (
              <List
                className="List"
                height={150}
                itemCount={itemCount}
                itemSize={35}
                onItemsRendered={onItemsRendered}
                ref={ref}
                width={width}
                overscanCount={4} //The number of options (rows or columns) to render outside of the visible area.
              >
                {Item}
              </List>
            )}
          </InfiniteLoader>
        )}
      </AutoSizer>
    );
  };

  const handleChange = (selected:any) => {
    onChange(selected);
  };

  return (
    <Select
      placeholder={placeholder}
      components={{
        MenuList,
      }}
      value={selectedOption}
      options={options}
      {...props}
    />
  );
};
export default SelectWrapper;