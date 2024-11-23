import ModeToggle from '@/components/mode-toggle';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { height } from '../anim';
import Body from './body/body';
import styles from './style.module.scss';

import { links } from '@/components/sections/header/config';

interface IndexProps {
  setIsActive: (isActive: boolean) => void;
}

interface SelectedLinkState {
  isActive: boolean;
  index: number;
}

const Index: React.FC<IndexProps> = ({ setIsActive }) => {
  const [selectedLink, setSelectedLink] = useState<SelectedLinkState>({
    isActive: false,
    index: 0
  });

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.nav}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
            setIsActive={setIsActive}
          />
        </div>
        <div className="absolute bottom-0 right-0 mb-auto">
          <ModeToggle />
        </div>
      </div>
    </motion.div>
  );
};

export default Index;
