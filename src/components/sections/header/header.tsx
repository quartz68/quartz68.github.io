'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { CodeIcon } from 'lucide-react';
import styles from './style.module.scss';
import { opacity } from './anim';
import Nav from './nav';

import { metadata as meta } from '@/app/config';

interface HeaderProps {
  loader?: boolean;
}

const Header = ({ loader }: HeaderProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <motion.header
      className={styles.header}
    >
      <div className={styles.bar}>
        <Link href="/" className="flex items-center justify-center">
          <span className="text-lg font-semibold">
            {meta.author.name}
          </span>
        </Link>
        <div onClick={() => setIsActive(!isActive)} className={styles.el}>
          <div
            className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}
          ></div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <Nav setIsActive={setIsActive} />}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
