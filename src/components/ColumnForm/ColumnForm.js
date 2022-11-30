import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch, useSelector } from 'react-redux';

const ColumnForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState(''); 
  const [icon, setIcon] = useState('');
  console.log('title i icon', title, icon);

  const id = useSelector(state => state.columns.length + 1);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_COLUMN', newColumn: { id, title, icon } });
    setTitle('');
    setIcon('');
    console.log('funkcja dodająca kolumnę zadziałała');
 };
 
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label><span className={styles.form__label}>Title:</span>
        <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      </label>
      <label><span className={styles.form__label}>Icon:</span>
        <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
      </label>
      <Button >Add column</Button>
    </form>
  );
};

export default ColumnForm;