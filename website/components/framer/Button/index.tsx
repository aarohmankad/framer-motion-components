import { Button } from '@nextui-org/react';
import { motion } from 'framer-motion';
import React from 'react';

import styles from './index.module.css';

const FramerButton: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <Button>{children}</Button>;
};
export default FramerButton;
