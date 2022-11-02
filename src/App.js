import "./App.css";
import NavigasiBar from "./component/navbar.js";
import Jumbotron from "./component/Jumbotron.js";
import Aboutme from "./component/Aboutme.js";
import Socialmedia from "./component/Socialmedia.js";
import Sertifikat from "./component/Sertifikat.js";
import TextControls from "./component/Contact.js";
import Footer from "./component/Footer.js";

function App() {
  return (
    <div className="App">
      <NavigasiBar />
      {/* Jumbotron */}
      <Jumbotron />
      {/* Aboutme */}
      <Aboutme />
      {/* Sertifikat */}
      <Sertifikat />
      {/* Social Media */}
      <Socialmedia />
      {/* Contact */}
      <TextControls />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
