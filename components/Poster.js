import React, {forwardRef} from 'react';
import { HeartIcon } from '@heroicons/react/outline';
import styles from '../styles/Home.module.css'

const Poster = forwardRef(({result}, ref) => {
    const BASE_URL = "https://image.tmdb.org/t/p/original";

    return (
        <div ref={ref} className={styles.posterCard}>
            <div className={styles.cardHeader}>
                <img 
                    className={styles.image}
                    src={
                       `${BASE_URL}${result.backdrop_path || result.poster_path}` 
                    }
                />
            </div>
            <div className={styles.cardBody}>
                <h2 className={styles.title}>
                    {result.title || result.original_title}
                </h2>
                <p className={styles.overview}>
                    {result.overview}
                </p>
                <h4 className={styles.date}>
                    {result.release_date || result.first_air_date} - {" "}
                    {result.vote_count} <HeartIcon className={styles.likeIcon} />
                </h4>
            </div>
        </div>
    );
});

Poster.displayName = "Poster"
export default Poster;