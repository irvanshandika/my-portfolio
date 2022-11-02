import Irvan from "../foto.png";
import Badge from "react-bootstrap/Badge";

const Jumbotron = () => {
  return (
    <section className="jumbotron text-center text-white">
      <img src={Irvan} className="App-logo" alt="Muhammad Irvan Shandika" class="rounded-circle img-thumbnail" />
      <h1 class="display-4 text-dark">
        Muhammad Irvan Shandika{" "}
        <h6>
          <Badge className="badge" bg="primary">
            Junior
          </Badge>
        </h6>
      </h1>
      <p class="lead text-dark">Mahasiswa | Web Developer Junior</p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#E3FDFD"
          fill-opacity="1"
          d="M0,32L0,160L180,160L180,160L360,160L360,32L540,32L540,160L720,160L720,64L900,64L900,224L1080,224L1080,128L1260,128L1260,0L1440,0L1440,320L1260,320L1260,320L1080,320L1080,320L900,320L900,320L720,320L720,320L540,320L540,320L360,320L360,320L180,320L180,320L0,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Jumbotron;
