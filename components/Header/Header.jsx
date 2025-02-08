import styles from './Header.module.css'
import JCLogo from '../../assets/download (3).png'
import Crown from '../../assets/crown-576226_1280.webp'
import Search from '../../assets/Screenshot 2025-02-07 at 8.31.11 PM.png'
import Mic from '../../assets/microphone-7502540_1280.webp'
import Jio from '../../assets/download (1).png'
import { useState, useEffect } from 'react'
import Show from '../Show/Show.jsx'

const Header = (props) => {

    let navLinks = ["Home", "Sports", "Movies", "TV Shows", "More"]
    let [searchTitle, setSearchTitle] = useState("");
    let [filteredMovies, setFilteredMovies] = useState([])

    useEffect(() => {

        if (searchTitle !== "") {
            let filterMovies = props.movies.filter((movie) => {
                return movie.name.toUpperCase().indexOf(searchTitle.toUpperCase()) == 0;
            })

            setFilteredMovies(filterMovies)
        }
        else {
            setFilteredMovies([])
        }
    }, [searchTitle])


    return (
        <>
            <header className={styles.header}>

                <nav className={styles.navigation}>
                    <div className={styles.logo}>
                        <img src={JCLogo} alt='logo' className={styles.jclogo} />
                        <div className={styles.premium}>
                            <img src={Crown} alt="image" className={styles.crown} />
                            <p>Go Premium</p>
                        </div>
                    </div>

                    <ul className={styles.navLinks}>
                        {
                            navLinks.map((link) => {
                                return <li className={styles.navLink}>{link}</li>
                            })
                        }
                    </ul>

                </nav>

                <div className={styles.search}>

                    <div className={styles.searchbox}>
                        <div >
                            <img src={Search} alt="icon" className={styles.searchicon} />
                        </div>

                        <input type="text"
                            onChange={(event) => {
                                setSearchTitle(event.target.value)
                            }}
                            className={styles.searchinput} placeholder='Movies, Shows and more ' />

                        <div>
                            <img src={Mic} alt="icon" className={styles.mic} />
                        </div>
                    </div>
                    <img className={styles.jio} src={Jio} alt="icon" />

                </div>

            </header>


            {
                filteredMovies.length !== 0 ? (
                    <div className={styles.searchResults}>

                        {
                            filteredMovies.map((movie) => {
                                return <Show movie={movie} />
                            })
                        }

                    </div>
                ) : null
            }




        </>
    )
}

export default Header