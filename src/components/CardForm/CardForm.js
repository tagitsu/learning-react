import styles from './CardForm.module.scss';
import { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addCard } from '../../redux/store';

const CardForm = props => {
  const dispatch = useDispatch();

  const id = useSelector(state => String(state.cards.length + 1));
  const [title, setTitle] = useState(''); 
  const isFavorite = false;

  const handleSubmit = e => {
    e.preventDefault();
    const columnId = String(props.columnId);
    dispatch(addCard({ id, columnId, title, isFavorite }));
    setTitle(''); 
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} >
      <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      <Button>Add</Button>
    </form>
  );
};

export default CardForm;