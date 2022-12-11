import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { getColumnsByList, getListById } from '../../redux/store';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const List = () => {

  const { listId } = useParams();
  console.log('list - listID param', listId);

  const columns = useSelector( state => getColumnsByList(state.columns, listId));
  const listData = useSelector( state => getListById(state.lists, listId));
  console.log('list - columns', columns);
  console.log('list - listData', listData);

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