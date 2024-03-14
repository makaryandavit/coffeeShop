import { Footer, Header, Section1, Section2, Section3, Section4 } from "./Components";
import { boxesInfo, boxesInfo2, boxesInfo3 } from "./coffessInfo";
import "./global.css"
function App() {
  return (
    <>
      <Header />
      <Section1 boxesInfo={boxesInfo} />
      <Section2 />
      <Section3 />
      <Section1 boxesInfo={boxesInfo2} />
      <Section4 />
      <Section1 boxesInfo={boxesInfo3} />
      <Footer />
    </>
  );
}

export default App;
