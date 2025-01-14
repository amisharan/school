import Navbar from "./component/Navbar"
import Logo from "./component/Logo"
import Header from "./component/Header"
import Firstpage from "./homepages/Firstpage"
import 'react-multi-carousel/lib/styles.css';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Logo />
      <Header />
      <Firstpage />
    </div>
  );
}
