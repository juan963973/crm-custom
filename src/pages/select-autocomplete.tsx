import React, { useState } from "react";
import SelectWrapper from "components/_common/prueba-select";
import axios from "axios";

function SelectAutocomplete() {
  const [options, setOptions] = useState([]);
  const [pageNo, setPage] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isNextPageLoading, setNextPageLoading] = useState(false);
  const [selectedValue, setSelectedOption] = useState("");

  const loadOptions = async (pageIndex: any) => {
    try {
      const params = {
        pageIndex,
        pageSize: 5,
      };

      setNextPageLoading(true);

      const {
        data: { items, count },
      } = await axios.get(`${process.env.BASE_URL}/Search/contacts`, {
        params,
      });

      const prueba = items.map((index: any) => {
        let label = index.value;
        let value = index.id;
        return { label: label, value: value };
      });

      const desglos = prueba.map((index: any) => {
        return { ...options, index };
      });

      const desglosado = desglos.map((index: any) => {
        return index.index;
      });

      setOptions(desglosado);
      setNextPageLoading(false);
      setHasNextPage(desglosado.length < count);
      setPage(pageIndex + 1);
    } catch (err) {
      console.log(err);
    }
  };

  const loadNextPage = async () => {
    await loadOptions(pageNo);
  };

  return (
    <div className="App mt-5">
      <div className="dropdown mt-5">
        <SelectWrapper
          value={selectedValue}
          placeholder="Select"
          isClearable
          hasNextPage={hasNextPage}
          isNextPageLoading={isNextPageLoading}
          options={options}
          loadNextPage={loadNextPage}
          onChange={(selected: any) => setSelectedOption(selected)}
        />
      </div>
    </div>
  );
}

export default SelectAutocomplete;
