import React from 'react';
import kottok from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={navData => navData.isActive ? kottok.active : kottok.item}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>

}

const Dialogs = (props) => {
    return <dialogs className={kottok.dialogs}>
        <dialog className={kottok.dialog}>
            <DialogsItem name="Anton" id="1"/>
        </dialog>
        <dialog className={kottok.dialog}>
            <DialogsItem name="Step" id="2"/>
        </dialog>
        <dialog className={kottok.dialog}>
            <DialogsItem name="Areton" id="2"/>
        </dialog>
        <dialog className={kottok.dialog}>
            <DialogsItem name="Antonina" id="3"/>
        </dialog>
        <dialog className={kottok.dialog}>
            <DialogsItem name="Sergo" id="4"/>
        </dialog>
        <dialog className={kottok.dialog}>
            <DialogsItem name="Lion" id="5"/>
        </dialog>

    </dialogs>
}
export default Dialogs;




