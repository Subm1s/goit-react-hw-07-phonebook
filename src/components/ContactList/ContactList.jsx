import s from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchItems,
  removeItem,
  getIsLoading,
  getFilteredItems,
  getDeletingIds,
} from 'redux/contacts';
import Spinner from 'components/Spinner';

const ContactList = () => {
  const items = useSelector(getFilteredItems);
  const isLoading = useSelector(getIsLoading);
  const deletingIds = useSelector(getDeletingIds);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const createDeleteButton = id => (
    <button type="button" onClick={() => dispatch(removeItem(id))}>
      Delete
    </button>
  );

  const createList = () => (
    <ul className={s.list}>
      {items.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <p className={s.entry}>
            <span>{name}</span>
            <span className={s.number}>{number}</span>
          </p>
          {deletingIds.some(delId => delId === id) ? (
            <Spinner />
          ) : (
            createDeleteButton(id)
          )}
        </li>
      ))}
    </ul>
  );

  return <>{isLoading ? <Spinner /> : createList()}</>;
};

export default ContactList;
