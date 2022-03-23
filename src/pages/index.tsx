import styles from './index.less';
import HelloWorld from './HelloWorld.js';
export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <HelloWorld />
    </div>
  );
}
