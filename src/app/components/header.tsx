import Link from "next/link"

export default function Header(){
    return(     
        <div className="header">
        <ul className="headerBtns">
        <Link href={"/"}> <li>Portfolio</li></Link>
        <Link href={"/about-us"}> <li>About</li></Link>
        <Link href={"/contact"}> <li>Contact Us</li></Link>
</ul>
    </div>
    )
}