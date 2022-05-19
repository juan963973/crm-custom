import { CustomAsyncPaginate } from "components/_common/auto-scroll";

const ScrollSelect = () => {
  return (
    <div>
      <CustomAsyncPaginate
        searchEndpoint="contacts"
      />
    </div>
  );
};

export default ScrollSelect;
