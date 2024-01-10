import { useSelector } from "react-redux";
import classes from './Upgrades.module.css';
import { useState } from "react";
function Upgrades() {
    const upgrades = useSelector((state) => state.upgrades);
    const [toggle, setToggle] = useState(false);

    return (
        <div class="container text-center">
            <h1 className={`text-white ${classes.glow}`} onClick={() => setToggle(!toggle)}>Upgrades</h1>
            <hr className="text-white" />
            {toggle && <div className={`${classes.itemList} row`}>
                {upgrades.map((item) =>
                    <div className={`col-3 text-start ${classes.item}`}>
                        <div className="text-center">
                            <h1 className="text-white fs-6 mt-4">{item}</h1>
                        </div>
                    </div>
                )}
            </div>}

        </div >
    )
}
export default Upgrades;
