import styles from './CardForm.module.scss';
import { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';

const CardForm = props => {
  console.log('propsy', props);
  const dispatch = useDispatch();

  const id = useSelector(state => state.cards.length + 1);
  const [title, setTitle] = useState(''); 

  const handleSubmit = e => {
    e.preventDefault();
    const columnId = props.columnId;
    dispatch({ type: 'ADD_CARD', payload: { id, columnId, title }}); 
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