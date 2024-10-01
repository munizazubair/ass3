import Image from "next/image";
import image from "../app/public/profile-picture.jpg"
import Header from "../app/components/header"

import Footer from "../app/components/footer"
export default function Home() {
  
  return (
    <div>
    <Header />
    <div className="main-container">
<div className="content">
<div className="heading"> I'm <span>Maheen</span></div>
<p> "I am a front-end developer skilled in HTML, CSS, JavaScri
pt, and TypeScript. I focus on creating responsive, user-friendly web interfaces and am keen on learning new technologies."</p>    </div>
    <Image className="profile-image"
    src={image}
    alt="profile-image"
    />
</div>
    <Footer />
    </div>
  )}


