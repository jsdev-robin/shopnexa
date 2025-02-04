import styles from "./PacmanLoader.module.css";

const PacmanLoader = () => {
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 bg-background w-screen h-screen overflow-hidden flex items-center justify-center">
      <div className={styles.container}>
        <div className={styles.dots}>
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className={styles.dot}
              style={{ animationDelay: `${i * 0.25}s` }}
            ></div>
          ))}
        </div>
        <div className={styles.dots2}>
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className={styles.dot2}
              style={{ animationDelay: `${(10 - i) * 0.25}s` }}
            ></div>
          ))}
        </div>
        <div className={styles.circle}></div>
      </div>
    </div>
  );
};

export default PacmanLoader;
