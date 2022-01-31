import React from 'react'
import preloader from './../../../assets/preloader.gif'
import s from './Preloader.module.scss'

const Preloader = (props) => {
    return (
        <div>
            {props.isFetching ? <img src={preloader} alt='noPREALOADER' className={s.preloader} /> : null}
        </div>
    )
}

export default Preloader