import styles from './ListForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch, useSelector } from 'react-redux';
import { addList } from '../../redux/store';

const ListForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState(''); 
  const [description, setDescription] = useState('');

  const id = useSelector(state => state.lists.length + 1);
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addList({ id, title, description}));
    setTitle('');
    setDescription('');
 };
 
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label><span className={styles.form__label}>Title:</span>
        <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      </label>
      <label><span className={styles.form__label}>Description:</span>
        <TextInput value={description} onChange={e => setDescription(e.target.value)} />
      </label>
      <Button >Add list</Button>
    </form>
  );
};

export default ListForm;