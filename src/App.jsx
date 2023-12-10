import { ContactsLast } from "./ContactsLast";
import { ContentLast } from "./ContentLast";
import { Hero_header } from "./Hero_header";
import { Partners } from "./Partners";
import { Their } from "./Their";
import { Usloviya } from "./Usloviya";

function App() {
  return (
    <>
      <Hero_header />
      <div className="back-content">
        <Their />
        <Usloviya />
      </div>
      <Partners />
      <ContentLast />
      <ContactsLast />
    </>
  );
}

export default App;
