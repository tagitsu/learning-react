import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';
import { filteredCards } from '../../redux/columnsRedux';

const Column = props => {

  const search = useSelector(state => state.search);
  const cards = useSelector(state => filteredCards(state.cards, props.id, search));
  
  return(
    <article className={styles.column}>
      <h3 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + props.icon}></span>
        {props.title}
      </h3>
      <ul className={styles.cards}>
        {cards.map(card => <Card key={card.id} id={card.id} title={card.title} />)}
      </ul>
      <CardForm columnId={props.id} />
    </article>
  );
}

export default Column;