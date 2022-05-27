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
                filteredOptions = options.items;
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
                onChange({target: {id: keyFilter, value: e.value}}, keyFilter)
                return;
            }

            const {value} = e;
            onChange(value, keyFilter);
            return;
        }
        onChange(null, keyFilter);
    }

    return (
        <AsyncPaginate
            onKeyDown={handleKey}
            debounceTimeout={300}
            value={defaultValue ?? data}
            loadOptions={loadOptions}
            onChange={changeValue}
            isDisabled={disabled}
            isClearable
        />
    );
};
