import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const ColumnForm = props => {
  const [title, setTitle] = useState(''); 
  const [icon, setIcon] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    props.action({ title: title, icon: icon }); // funkcja addColumn
    setTitle(''); 
    setIcon('');
  };


  return (
    <form className={styles.form}  onSubmit={handleSubmit}>
      <label><span className={styles.form__label}>Title:</span>
        <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      </label>
      <label><span className={styles.form__label}>Icon:</span>
        <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
      </label>
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;