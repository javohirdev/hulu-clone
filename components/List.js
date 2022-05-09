import FlipMove from "react-flip-move";
import Poster from "./Poster";
import styles from '../styles/Home.module.css'

const List = ({ results }) => {
    return (
        <FlipMove className={styles.poster}>
            {results.map((result) => (
                <Poster key={result.id} result={result} />
            ))}
        </FlipMove>
    );
};

export default List;