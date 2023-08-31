import classes from './Header.module.css';

function Header({showPostFunc}){
    return (
        <header className={classes.header}>
           <h1>Title</h1>
           <button className={classes.button}
           onClick={showPostFunc}
           >New Post</button>
        </header>
    );
}

export default Header;

