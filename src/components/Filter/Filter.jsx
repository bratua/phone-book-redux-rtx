import { useDispatch, useSelector } from 'react-redux';
import { DebounceInput } from 'react-debounce-input';
import { filterChange } from 'redux/filterSlice';

export const Filter = ({ contacts }) => {
  const dispatch = useDispatch();
  const filterData = useSelector(state => state.filter.filterData);

  const onFilterChange = event => {
    //  console.log(event.target.value);
    dispatch(filterChange(event.target.value));
  };

  return (
    <>
      <p>Filter by Name</p>
      <DebounceInput
        minLength={0}
        debounceTimeout={500}
        value={filterData}
        onChange={onFilterChange}
      />
    </>
  );
};
