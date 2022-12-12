import styles from './Card.module.scss';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { getCard, toggleCardFavorite } from '../../redux/store';

const Card = props => {

  const card = useSelector(state => getCard(state.cards, props.id));
  console.log('card - card', card.id);
  

  return(
    <li className={styles.card}>{props.title}
      <button className={styles.card__button} onClick={() => toggleCardFavorite(card.id)}>
        <i className={clsx('fa', 'fa-star-o', styles.btn, card.isFavorite && styles.liked)} />
      </button>
    </li>
  );
};

export default Card;