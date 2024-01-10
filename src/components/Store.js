import classes from './Store.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementByPerSecond } from '../store/slices/cookiesSlice';
import StoreList from './StoreList';
import useInterval from '../hooks/useInterval';
function Store() {
    const [curMulti, setCurMulti] = useState(1);
    const [toggle, setToggle] = useState(false);

    const dispatch = useDispatch();
    const multiplier = useSelector((state) => state.multiplier);

    const handleMultiplier = (item) => {
        setCurMulti(item);
    };

    useInterval(() => {
        dispatch(incrementByPerSecond())
    }, 1000)

    return (
        <div className={classes.store}>
            <h1 className={`text-white ${classes.glow}`} onClick={() => setToggle(!toggle)}>Store</h1>
            <hr className="text-white" />
            {toggle &&
                <div className="text-white">
                    <div className={`${classes.itemQty} row`}>
                        <div className={`col-3 ${classes.hover}`}>Buy</div>
                        {multiplier.map((item) =>
                            <div key={item} onClick={() => handleMultiplier(item)} className={`col-3 ${classes.hover}`}>
                                {item}
                            </div>)}
                    </div>
                    <StoreList curMulti={curMulti} />
                </div>}

        </div >
    )
}
export default Store;