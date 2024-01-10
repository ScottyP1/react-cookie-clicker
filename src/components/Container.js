import Cookie from "./Cookie";
import Header from "./Header";
import Store from "./Store";
import Upgrades from "./Upgrades";
import Milk from "./Milk";
import classes from './Container.module.css'
import { useState, useEffect } from "react";


function Container() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    useEffect(() => {
        function reportWindowSize() {
            setWindowWidth(window.innerWidth)
        }
        // Trigger this function on resize
        window.addEventListener('resize', reportWindowSize)
        //  Cleanup for componentWillUnmount
        return () => window.removeEventListener('resize', reportWindowSize)
    }, [])


    return (
        <div className="container-fluid text-center">
            <Header />
            <div className="row p-0 mt-5">
                {windowWidth > 800 ?
                    <>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <Upgrades />
                        </div>
                        <div className={`col-lg-4 col-md-4 col-sm-12 ${classes.box}`}>
                            <Cookie />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <Store />
                        </div>
                        <div className="row p-0 mt-5 m-0">
                            <div className={`col-12 p-0 m-0${classes.box}`}>
                                <Milk />
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className={`col-sm-12 ${classes.box}`}>
                            <Cookie />
                        </div>
                        <div className="col-sm-12">
                            <Upgrades />
                        </div>
                        <div className="col-sm-12">
                            <Store />
                        </div>
                        <div className="row p-0 mt-5 m-0">
                            <div className={`col-12 p-0 m-0${classes.box}`}>
                                <Milk />
                            </div>
                        </div>
                    </>
                }
            </div >
        </div>
    )
}



export default Container;