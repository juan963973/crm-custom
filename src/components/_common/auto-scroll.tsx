import React, {useCallback, useEffect, useState} from "react";

import { AsyncPaginate } from "react-select-async-paginate";
import { seletScroll } from "services/filterService";
import debounce from "lodash.debounce";
import { refenceField } from "services/contactService";
import {A} from "ts-toolbelt";

  export const CustomAsyncPaginate = ({ searchEndpoint, disabled, keyFilter, onChange, defaultValue }: any) => {
  const [data, setData] = useState(null);
  
  let options: any = [];
  let countPage = 0;
  let countSearch = 0;
  let keySearch: string = "";
  
  const loadOptions = async (search: any, prevOptions: any) => {
    let filteredOptions;
    console.log(search);
    
    if (!search) {
      countSearch = 0;
      const page = keySearch
        ? `Search/${searchEndpoint}?q=${keySearch}`
        : `Search/${searchEndpoint}`;

      const params = {
        pageIndex: countPage,
        pageSize: 20,
      };

      options = await seletScroll(page, params);
      console.log("here::",options);
      filteredOptions = options.items;
      countPage = countPage + 1;

    } else {
      countPage = 0;

      const params = {
        pageIndex: countSearch,
        pageSize: 20,
      };
      options =  await debounceOptions(params,search);
      filteredOptions = options.items;
      countSearch = countSearch+1;
    }

    const hasMore = options.count > prevOptions.length + 10;
    console.log({options: filteredOptions,
      hasMore,
    });
    
    return {
      options: filteredOptions,
      hasMore,
    };
  };

  const debounceOptions = useCallback(
    debounce(async (params: any, search:any) => {
      if(keySearch.length < 3)
        return;

      const page = `Search/${searchEndpoint}?q=${keySearch}`;
      const dataList = await seletScroll(page, params);

      return dataList;
    }, 300),
    []
  );

  const handleKey = (e: any) => {
    countSearch = 0;
    if (e.key === "Backspace") {
      keySearch = keySearch.slice(0, -1);
      return;
    }
    keySearch += e.key;
  };

  const changeValue = (e:any) => {
    if(e){
      setData(e)
      const {value, label} = e;
      onChange( value, keyFilter);
    } else {
      let valueData;
      onChange(valueData=null, keyFilter);
      return;
    }
  }

  return (
    <AsyncPaginate
      onKeyDown={handleKey}
      value={defaultValue ??  data}
      loadOptions={loadOptions}
      onChange={changeValue}
      isDisabled={disabled}
      isClearable
    />
  );
};
