import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch, useSelector } from 'react-redux';
import { addColumn } from '../../redux/columnsReducer';

const ColumnForm = props => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState(''); 
  const [icon, setIcon] = useState('');

  const id = useSelector(state => String(state.columns.length + 1));
  const listId = props.listId;
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addColumn({ id, title, icon, listId }));
    setTitle('');
    setIcon('');
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