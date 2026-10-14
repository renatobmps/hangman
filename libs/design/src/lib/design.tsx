import styles from './design.module.css';

export function Design() {
  return (
    <div className={`${styles['container']} flex border-8 border-red-500 p-2`}>
      <h1 className={`${styles['welcome']} font-bold`}>Welcome to Design!</h1>
    </div>
  );
}
