import Navbar from "./component/Navbar"
import Logo from "./component/Logo"
import Header from "./component/Header"
import Firstpage from "./homepages/Firstpage"
import 'react-multi-carousel/lib/styles.css';
import About from "./homepages/About";
import Facilities from "./homepages/Facilities"
import Message from "./homepages/Message"
import Gallery from "./homepages/Gallery"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Logo />
      <Header />
      <Firstpage />
      <About />
      <Facilities />
      <Message />
      <Gallery />
    </div>
  );
}
