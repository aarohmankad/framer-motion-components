import { motion } from 'framer-motion';

import styles from './index.module.css';

export default function Row({
  children,
  ...props
}: {
  children?: React.ReactNode;
}) {
  return (
    <motion.div layout className={styles.col} {...props}>
      {children}
    </motion.div>
  );
}
