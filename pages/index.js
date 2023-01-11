import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function HomePage() {
  return (
    <div>
      <h1>The Home Page</h1>
    </div>
  );
}
