import React from 'react';
import styles from './Choose.module.scss';

function Choose() {
    return (
        <div className={styles['choose']}>
            <div>
                <div className={styles['choose-title']}>
                    Choose existing game
                </div>
                <div>
                    <div className={styles['btn-container']}>
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
                    </div>
                    <div className={styles['btn-container']}>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Choose