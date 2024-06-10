import { Link } from "react-router-dom"

/* eslint-disable react/prop-types */
function Button({children,disabled,to,type , onClick}) {
    const base="bg-yellow-400  text-sm inline-block  font-semibold uppercase rounded-full tracking-wide text-slate-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ";

    const styles={
        primary: base +"px-4 py-3 md:px-6 md:py-4",
        small:base+"px-4 py-2 md:px-5 md:py-2.5 text-xs",
        round:base + "px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
        
        secondary:" px-4 text-sm py-2.5 md:px-6 md:py-3.5 bg-transparent inline-block border-2 border-stone-300  font-semibold uppercase rounded-full tracking-wide text-slate-800 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800   focus:bg-stone-200 focus:outline-none focus:ring focus:ring-stone-200 focus:text-stone-800 focus:ring-offset-2 disabled:cursor-not-allowed "
    }


    if(onClick) return(
        <button  onClick={onClick} className={styles[type]} disabled={disabled}>{children}</button>
    )


    if(to) return(<Link  to={to} className={styles[type]}>{children}</Link>)
return(
        <button  className={styles[type]} disabled={disabled}>{children}</button>
    )
}

export default Button
