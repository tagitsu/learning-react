import { getAllLists } from '../../redux/store';
import { Link } from 'react-router-dom';
import styles from './Lists.module.scss';

const Lists = () => {

  const lists = getAllLists();

  const url = (id) => {
    return('/list/' + id);
  }

  return(
    <section className={styles.lists}>
      {lists.map( list => ( 
        <Link key={list.id} to={url(list.id)} className={styles.listLink}>
          <h3>{list.title}</h3>
          <p>{list.description}</p>
        </Link> ))}
    </section >

  );
};

export default Lists;