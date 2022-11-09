import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

export default function Categories() {
  const status = useSelector((state) => state.categories);
  const setChecked = React.useState(false);
  const dispatch = useDispatch();
  const checkHandler = () => {
    dispatch(checkStatus());
    setChecked(true);
  };
  return (
    <div className="categories">
      <p className="status">{status}</p>
      <button className="check-btn" type="button" onClick={checkHandler}>CHECK STATUS</button>
    </div>
  );
}
