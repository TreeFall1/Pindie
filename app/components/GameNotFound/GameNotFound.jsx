import Styles from './GameNotFound.module.css'

export const GameNotFound = () => {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>404</h1>
			<h3 className={Styles.subtitle}>Игра не найдена!</h3>
    </div>
  );
};
