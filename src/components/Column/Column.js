import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';

const Column = props => {

  const filterCards = (state) => {
    if(search) {
      return state.cards.filter(card => card.columnId === props.id && card.title.toLowerCase().includes(search.toLowerCase()))
    } else {
      return state.cards.filter(card => card.columnId === props.id)
    }
  };

  const search = useSelector(state => state.search.value);
  const cards = useSelector(state => filterCards(state));

  return(
    <article className={styles.column}>
      <h3 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + props.icon}></span>
        {props.title}
      </h3>
      <ul className={styles.cards}>
        {cards.map(card => <Card key={card.id} title={card.title} />)}
      </ul>
      <CardForm columnId={props.id} />
    </article>
  );
}

export default Column;