import { motion } from 'framer-motion';

import styles from './index.module.css';

export default function Grid({
  children,
  ...props
}: {
  children?: React.ReactNode;
}) {
  return (
    <motion.div className={styles.grid} {...props}>
      {children}
    </motion.div>
  );
}
