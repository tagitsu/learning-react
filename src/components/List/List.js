import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { getAllColumns, getListById } from '../../redux/store';
import { useSelector } from 'react-redux';

const List = () => {

  const columns = getAllColumns();
  const listData = useSelector( state => getListById(state.lists[0].id));
  
  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>{listData.title}<span>soon!</span></h2>
      </header>
      <p className={styles.description}>{listData.description}</p>
      <section className={styles.columns}>
        {columns.map(column =>
          <Column
            key={column.id}
            {...column}  />
        )}
      </section>
      <ColumnForm />
    </div>
  );};

export default List;