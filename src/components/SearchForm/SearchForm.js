import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchCard } from '../../redux/store';

const SearchForm = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(searchCard({ value }));
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput placeholder="Search..." value={value} onChange={ e => setValue(e.target.value)} />
      <Button children="Search" />
    </form>
  );
};

export default SearchForm;