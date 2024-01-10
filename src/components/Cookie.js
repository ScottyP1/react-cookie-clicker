import cookie from '../images/cookie.png';
import classes from './Cookie.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { incrementCookies } from '../store/slices/cookiesSlice';
import { useState, useEffect } from 'react';
// import Pointer from './Pointer';

function Cookie() {
    const [hover, setHover] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const dispatch = useDispatch();
    const cookies = useSelector((state) => state.count);
    const perSecond = useSelector((state) => state.perSecond);


    useEffect(() => {
        function reportWindowSize() {
            setWindowWidth(window.innerWidth)
        }
        // Trigger this function on resize
        window.addEventListener('resize', reportWindowSize)
        //  Cleanup for componentWillUnmount
        return () => window.removeEventListener('resize', reportWindowSize)
    }, [])

    const handleIncrement = () => {
        dispatch(incrementCookies())
    };

    const handleMouseOver = () => {
        setHover(!hover)
    }

    return (
        <div className="container text-center text-white">
            <h1 className={classes.text}>{cookies.toLocaleString("en-US")} cookies</h1>
            <p>per second: {perSecond.toLocaleString("en-US")}</p>
            {/* {pointer.map((pointers) => <Pointer />)} */}
            <button className={`border-0 btn btn-transparent m-2 ${windowWidth > 800 && classes.block} ${classes.pulse}`} onClick={handleIncrement}>
                <img onMouseOver={handleMouseOver} onMouseLeave={handleMouseOver} className={/*{hover */ `img-fluid ${classes.cookie}`}/* : `${classes.mouseOver}`}*/ src={cookie} alt='cookie' />
            </button>
        </div>
    )
}
export default Cookie;