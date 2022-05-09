import React from 'react';
import Link from 'next/link';
import { HeaderData } from './HeaderData';
import styles from '../styles/Home.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <Link href={"/"}>
                <a className={styles.navbarBrand}>
                    <img
                        src="/assets/huluLogo.png"
                        alt='Hulu Logo'
                        className={styles.logo}
                    />
                </a>
            </Link>
            <nav className={styles.headerNav}>
                {HeaderData.map((item, index) => {
                    return(
                        <Link href={item.path} key={index}>
                            <a className={styles.headerItem}>
                                <span>{item.icon}</span>
                                <p className={styles.linkItem}>{item.title}</p>
                            </a>
                        </Link>
                    )
                })}
            </nav>
        </div>
    );
};

export default Header;