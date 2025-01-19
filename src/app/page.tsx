import Navbar from "./component/Navbar"
import Logo from "./component/Logo"
import Header from "./component/Header"
import Firstpage from "./homepages/Firstpage"
import 'react-multi-carousel/lib/styles.css';
import About from "./homepages/About";
import Facilities from "./homepages/Facilities"
import Message from "./homepages/Message"
import Gallery from "./homepages/Gallery"
import Mission from "./aboutpage/Mission"
import Missions from "./aboutpage/missions";
import Aims from "./aboutpage/Aims"
import Chairman from "./aboutpage/chairman/Chairman"
import Paragraph from "./aboutpage/chairman/Paragraph"
import Manager from './aboutpage/manager/Manager'
import Paragraph1 from "./aboutpage/manager/Paragraph1";
import Principal from "./aboutpage/principal/Principal"
import Paragraph2 from "./aboutpage/principal/Paragraph2";
import Addmission from "./academics/Admission";
import Headline from './academics/Headline'
import First from './academics/exam/First'

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
      <Mission />
      <Missions />
      <Aims />
      <Chairman />
      <Paragraph />
      <Manager />
      <Paragraph1 />
      <Principal />
      <Paragraph2 />
      <Addmission />
      < Headline />
      <First />
    </div>
  );
}
