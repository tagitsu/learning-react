import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import SearchForm from '../SearchForm/SearchForm';
import { getColumnsByList, getListById } from '../../redux/store';
import { useSelector } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';


const List = () => {

  const { listId }  = useParams();
  console.log('list - listId useParams', listId);


  const columns = useSelector( state => getColumnsByList(state.columns, listId));
  const listData = useSelector( state => getListById(state.lists, listId));

  if(!listData) return( <Navigate to="/" />)

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>{listData.title}<span>soon!</span></h2>
      </header>
      <p className={styles.description}>{listData.description}</p>
      <SearchForm />
      <section className={styles.columns}>
        {columns.map(column =>
          <Column
            key={column.id}
            {...column}  />
        )}
      </section>
      <ColumnForm listId={listId}/>
    </div>
  );};

export default List;