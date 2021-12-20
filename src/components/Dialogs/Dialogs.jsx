import React from "react";
import s from './Dialogs.module.scss'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className="dialogs__items">
                <div className={s.item}>Kolya</div>
                <div className={s.item}>Vanya</div>
                <div className={s.item}>Ira</div>
                <div className={s.item}>Masha</div>
                <div className={s.item}>Danya</div>
            </div>
            <div className="messenges">
                <div className="message">Hi</div>
                <div className="message">How are you?</div>
                <div className="message">How is your React?</div>
            </div>
        </div>
    )
}

export default Dialogs;