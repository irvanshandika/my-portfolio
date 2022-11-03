import ig from "../icons8-instagram-192.png";
import github from "../icons8-github-144.png";
import facebook from "../icons8-facebook-192.png";
import youtube from "../youtube.svg";
const SocialMedia = () => {
  return (
    <section id="socialmedia">
      <div className="wrapper">
        <div className="typing-demo">
          <p>Don't Forget to Follow My Social Media :P</p>
        </div>
      </div>
      {/* Instagram */}
      <a href="https://www.instagram.com/irvan_shandika/">
        <img src={ig} className="App-logo" alt="Instagram" />
      </a>
      {/* Github */}
      <a href="https://github.com/irvanshandika">
        <img src={github} className="App-logo" alt="Github"></img>
      </a>
      {/* Facebook */}
      <a href="https://www.facebook.com/shandika.irvan/">
        <img src={facebook} className="App-logo" alt="Facebook"></img>
      </a>
      {/* Youtube */}
      <a href="https://www.youtube.com/channel/UCRPH_MP4WE2WeKiwd4f4EAQ">
        <img src={youtube} className="App-logo" alt="Youtube"></img>
      </a>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#cbf1f5"
          fill-opacity="1"
          d="M0,224L0,64L130.9,64L130.9,192L261.8,192L261.8,160L392.7,160L392.7,256L523.6,256L523.6,160L654.5,160L654.5,128L785.5,128L785.5,288L916.4,288L916.4,224L1047.3,224L1047.3,32L1178.2,32L1178.2,32L1309.1,32L1309.1,32L1440,32L1440,320L1309.1,320L1309.1,320L1178.2,320L1178.2,320L1047.3,320L1047.3,320L916.4,320L916.4,320L785.5,320L785.5,320L654.5,320L654.5,320L523.6,320L523.6,320L392.7,320L392.7,320L261.8,320L261.8,320L130.9,320L130.9,320L0,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};
export default SocialMedia;
