import styles from './Button.module.scss';

const Button = props => {
  return (
    <button className={styles.button}><span className="fa fa-search" />{' ' + props.children}</button>
    
  );
  
};

export default Button;