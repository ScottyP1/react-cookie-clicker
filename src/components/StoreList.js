import cookie from '../images/cookie.png';
import { decrementByAmount, setItems, setPerSec } from '../store/slices/cookiesSlice';
import classes from './Store.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import StoreInfo from './StoreInfo';
function StoreList({ curMulti }) {
    const [id, setId] = useState(null);

    const items = useSelector((state) => state.items);
    const cookies = useSelector((state) => state.count);
    const dispatch = useDispatch();

    const handleClick = ((item) => {
        const price = item.price * curMulti;
        if (cookies >= price) {
            dispatch(decrementByAmount(price))
            dispatch(setItems({ item, curMulti }));
            dispatch(setPerSec(item.perSecond * curMulti))
        }
    })
    return (
        <>
            {
                items.map((item) => <>
                    <div key={item.name} className={`${classes.itemList} row`}>
                        <div className={`col text-start ${classes.item}`} onClick={() => handleClick(item)} >
                            {id === item.id && <StoreInfo item={item} />}
                            <div onMouseEnter={() => setId(item.id)} onMouseLeave={() => setId(null)}>
                                <h2 className='fs-4'>
                                    {item.name}
                                    <p className='float-end text-warning-emphasis'>
                                        {item.level >= 1 && item.level}
                                    </p>
                                </h2>
                                <h2 className={cookies >= item.price & cookies >= item.price * curMulti ? 'fs-6 text-success' : 'fs-6 text-secondary-emphasis'}>
                                    {curMulti > 1 ?
                                        <p className='float-start text-white'>
                                            x{curMulti}
                                        </p> : null}
                                    <img src={cookie} className={`${classes.cookie} border-0 ms-1 me-1`} alt='icon' />
                                    {curMulti ? item.price * curMulti : item.price}
                                </h2>
                            </div>
                        </div>
                    </div>
                </>
                )
            }
        </>
    )
}

export default StoreList;