import React from 'react';
import sorov from '../baza/sorov';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css'

const Navbar = () => {
    const router = useRouter()

    return (
        <div className={styles.navbar}>
            {Object.entries(sorov).map(([key, { title }]) => (
                <p
                    key={key}
                    onClick={() => router.push(`/?genre=${key}`)}
                    className={styles.navbarLinks}
                >
                    {title}
                </p>
            ))}
        </div>
    );
};

export default Navbar;