import sertifikat from "../sertifikat.png";

const Sertifikat = () => {
  return (
    <section id="Sertifikat">
      <>
        <h4>My Certificate</h4>
        <img src={sertifikat} className="e-certificate" alt="amcc"></img>
      </>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#e3fdfd"
          fill-opacity="1"
          d="M0,96L0,128L180,128L180,96L360,96L360,224L540,224L540,32L720,32L720,160L900,160L900,160L1080,160L1080,128L1260,128L1260,96L1440,96L1440,320L1260,320L1260,320L1080,320L1080,320L900,320L900,320L720,320L720,320L540,320L540,320L360,320L360,320L180,320L180,320L0,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};
export default Sertifikat;
