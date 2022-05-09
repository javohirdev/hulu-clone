import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from "@heroicons/react/outline";
import styles from '../styles/Home.module.css';

export const HeaderData = [
    {
        title: "Home",
        path: "/",
        icon: <HomeIcon className={styles.icon} />
    },
    {
        title: "Verified",
        path: "/",
        icon: <BadgeCheckIcon className={styles.icon} />
    },
    {
        title: "Collections",
        path: "/",
        icon: <CollectionIcon className={styles.icon} />
    },
    {
        title: "Trending",
        path: "/",
        icon: <LightningBoltIcon className={styles.icon} />
    },
    {
        title: "Search",
        path: "/",
        icon: <SearchIcon className={styles.icon} />
    },
    {
        title: "Account",
        path: "/",
        icon: <UserIcon className={styles.icon} />
    }
]