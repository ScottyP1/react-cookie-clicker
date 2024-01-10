import { useSelector } from "react-redux";
import classes from './Upgrades.module.css';
import { useState } from "react";
function Upgrades() {
    const upgrades = useSelector((state) => state.upgrades);
    const [toggle, setToggle] = useState(false);

    return (
        <div class="container text-center ">
            <h1 className={`text-white ${classes.glow}`} onClick={() => setToggle(!toggle)}>Upgrades</h1>
            <hr className="text-white" />
            {toggle && <div className={`${classes.itemList} row`}>
                <div className={`col ${classes.item}`}>
                    {upgrades.map((item) =>
                        <button type="button" class="btn btn-primary m-2">{item}</button>
                    )}
                </div>

            </div>}

        </div >
    )
}
export default Upgrades;
