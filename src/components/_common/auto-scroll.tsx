import React, {useState} from "react";

import {AsyncPaginate} from "react-select-async-paginate";
import {seletScroll} from "services/filterService";

export const CustomAsyncPaginate = ({
                                        searchEndpoint,
                                        disabled,
                                        keyFilter,
                                        onChange,
                                        defaultValue,
                                        returnObject
                                    }: any) => {
    const [data, setData] = useState(null);

    let options: any = [];
    let countPage = 0;
    let countSearch = 0;
    let keySearch: string = "";

    const defaultOptions = () => ({
        options: [] as any,
        hasMore: false,
    });

    const loadOptions = async (search: any, prevOptions: any) => {
        let filteredOptions;

        if (!search) {
            countSearch = 0;
            const page = keySearch
                ? `Search/${searchEndpoint}?q=${keySearch}`
                : `Search/${searchEndpoint}`;

            const params = {
                pageIndex: countPage,
                pageSize: 20,
            };

            try {
                options = await seletScroll(page, params);
                filteredOptions = [{value: null, label: " - SIN ASIGNAR - "}, ...options.items];
                // filteredOptions = options.items;
                countPage = countPage + 1;
            } catch (e) {
                return defaultOptions()
            }

        } else {
            countPage = 0;

            const params = {
                pageIndex: countSearch,
                pageSize: 20,
            };

            if (keySearch.length < 3)
                return defaultOptions()

            options = await seletScroll(`Search/${searchEndpoint}?q=${keySearch}`, params);
            filteredOptions = options.items;
            countSearch = countSearch + 1;
        }

        const hasMore = options.count > prevOptions.length + 10;

        return {
            options: filteredOptions,
            hasMore,
        };
    };

    const handleKey = (e: any) => {
        countSearch = 0;
        console.log('key::',e.key);
        if (
            e.key === "CapsLock" || e.key === "Escape" ||
            e.key === "ArrowUp" || e.key === "ArrowUp" || 
            e.key === "ArrowLeft" || e.key === "ArrowRight"  ||
            e.key === "Control" || e.key === "Shift" ||  
            e.key === "Tab" || e.key === "Enter"  ||
            e.key === "Alt" || e.key === "Delete" ||
            e.key === "Dead"
        ) {
            return
        }

        if (e.key === "Backspace") {
            keySearch = keySearch.slice(0, -1);
            return;
        }
        keySearch += e.key;
    };

    const changeValue = (e: any) => {
        if (e) {
            setData(e)
            if (returnObject) {
                onChange({target: {name: keyFilter, value: e.value}}, keyFilter)
                return;
            }

            const {value} = e;
            onChange(value, keyFilter);
            return;
        }
        onChange(null, keyFilter);
    }
    console.log("data", data);
    return (
        <AsyncPaginate
            onKeyDown={handleKey}
            debounceTimeout={300}
            // value={defaultValue}
            // value={defaultValue?.label != null  ? defaultValue : data}
            value={defaultValue?.label ? defaultValue : data}
            loadOptions={loadOptions}
            onChange={changeValue}
            isDisabled={disabled}
            // isClearable
        />
    );
};
