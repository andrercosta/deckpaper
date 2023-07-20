'use client'
import styles from './styles.module.scss'

export default function Button({children, onClick}: any) {
    return (
        <button className={ styles.button } onClick={()=> onClick()} >{children}</button>
    )
}