import Link from 'next/link';
import styles from '../../styles/Header.module.css'
const Header = () => {
    return (
        <ul className={styles.ul}>
            <li className={styles.li}>
                <Link href="/View">
                    <a className={styles.link}>
                        Home
                    </a>
                </Link>
            </li>
            <li className={styles.li}>
                <Link href="/Create">
                    <a className={styles.link}>
                        Create
                    </a>
                </Link>
            </li>
            <li className={styles.li}>
                <Link href="/DeleteData">
                    <a className={styles.link}>
                        Delete
                    </a>
                </Link>
            </li>
            <li className={styles.li}>
                <Link href="/Update">
                    <a className={styles.link}>
                        Update
                    </a>
                </Link>
            </li>
        </ul>
    );
};

export default Header;