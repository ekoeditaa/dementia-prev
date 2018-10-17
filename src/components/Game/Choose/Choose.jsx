import React from 'react';
import styles from './Choose.module.scss';
import Header from '../../Header/Header';
import { Link } from 'react-router-dom';

function Choose() {
    return (
        <div>
            <Header />
            <div className={styles['choose']}>
                <div>
                    <div className={styles['choose-title']}>
                        Choose existing game
                </div>
                    <div>
                        <div className={styles['btn-container']}>
                            <Link to='default-guide'>
                                <button className={styles['choose-btn']}>
                                    <div className={styles['btn-text']}>
                                        <div className={styles['btn-name']}>
                                            Michelle
                                </div>
                                        <div className={styles['btn-date']}>
                                            Created 13 September 2018
                                </div>
                                    </div>
                                </button>
                            </Link>
                            <Link to='default-guide'>
                                <button className={styles['choose-btn']}>
                                    <div className={styles['btn-text']}>
                                        <div className={styles['btn-name']}>
                                            Vanessa
                                </div>
                                        <div className={styles['btn-date']}>
                                            Created 10 September 2018
                                </div>
                                    </div>
                                </button>
                            </Link>
                        </div>
                        <div className={styles['btn-container']}>
                            <Link to='default-guide'>
                                <button className={styles['choose-btn']}>
                                    <div className={styles['btn-text']}>
                                        <div className={styles['btn-name']}>
                                            Natassa
                                </div>
                                        <div className={styles['btn-date']}>
                                            Created 10 October 2018
                                </div>
                                    </div>
                                </button>
                            </Link>
                            <Link to='default-guide'>
                                <button className={styles['choose-btn']}>
                                    <div className={styles['btn-text']}>
                                        <div className={styles['btn-name']}>
                                            Karinka
                                </div>
                                        <div className={styles['btn-date']}>
                                            Created 30 September 2018
                                </div>
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Choose