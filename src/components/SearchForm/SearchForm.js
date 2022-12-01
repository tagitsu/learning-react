import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const SearchForm = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({type: 'SEARCH_CARD', payload: { value }});
    setValue('');
  };


  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput placeholder="Search..." value={value} onChange={ e => setValue(e.target.value)} />
      <Button children="Search" />
    </form>
  );
};

export default SearchForm;