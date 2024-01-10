import classes from './StoreInfo.module.css'
function StoreInfo({ item }) {
    return (
        <div className={classes.storeInfo}>
            <div className={`card text-start ${classes.storeCard}`}>
                <div className="card-header text-white">
                    <h1 className='fs-4 inline'>{item.name}<p className='float-end text-success'>{item.level}</p></h1>
                </div>
                <ul className='m-3 pe-2'>
                    <li className='fs-6'>each {item.name.toLowerCase()} produces {item.perSecond} per second</li>
                    <li className='fs-6'>{item.level} {item.name.toLowerCase()}{item.level > 1 && 's'} producing {item.perSecond * item.level} per second</li>
                </ul>
            </div>
        </div>


    )
}

export default StoreInfo;