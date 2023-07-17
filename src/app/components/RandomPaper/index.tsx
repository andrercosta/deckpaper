'use client'
import { invoke } from '@tauri-apps/api/tauri'
import styles from './styles.module.scss'
  export default function RandomPaper() {
    const  handleAddWallpaper = async ()=> {
    const res  = await invoke('random_paper')
   console.log(res);
    }

    return (
      <div>
        <button className={ styles.randomPaper } onClick={()=> handleAddWallpaper()} >Add Wallpaper</button>
      </div>
    )
  }