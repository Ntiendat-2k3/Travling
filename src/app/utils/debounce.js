import { debounce } from "lodash";

const debounceSearch = (func, delay) => {
  return debounce(func, delay, { leading: false, trailing: true });
};

export default debounceSearch;
