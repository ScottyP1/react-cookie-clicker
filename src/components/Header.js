import classes from './Header.module.css'
function Header() {
    return (
        <div className='ps-5 pe-5'>
            <h1 className={`text-white text-center mt-3 ${classes.header}`}>Galaxy Cookie</h1>
        </div>
    )
}

export default Header;