import React from 'react'
import styles from './button.module.css'

function Button({label}) {
    return (
        <div data-testid="button" className={styles.buttonStyle}>Hi {label}</div>
    )
}

export default Button;