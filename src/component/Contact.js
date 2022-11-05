import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
function TextControls() {
  const [loading, setLoading] = useState(false);
  const form = document.forms["messege-to-form"];
  const scriptURL = "https://script.google.com/macros/s/AKfycbxDhJp2Kya9dSPXVhpkStDYNhWums6uNMrB_ssrOeX1KkNg2B_3S0-7sFejJ9xMjqaj/exec";

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      fetch(scriptURL, {
        method: "POST",
        body: new FormData(form),
      }).then(() => {
        setLoading(false);
        form.reset();
        setTimeout(() => {
          alert("Pesan Terkirim");
        }, 1000);
      });
    } catch (error) {
      setLoading(false);
      console.log(error.messege);
    }
  };

  return (
    <section id="contactus">
      <div className="form-width justify-content-center">
        <Form onSubmit={handleSubmit} name="messege-to-form" className="form">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nama Lengkap</Form.Label>
            <Form.Control type="text" placeholder="Nama Lengkap" name="nama" />
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" name="email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Masukkan Pesan Disini :)</Form.Label>
            <Form.Control as="textarea" rows={3} name="pesan" />
          </Form.Group>
          {loading ? <Button as="input" type="submit" value="loading ...." /> : <Button as="input" type="submit" value="Submit" />}
        </Form>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#e3fdfd"
          fill-opacity="1"
          d="M0,320L0,128L240,128L240,160L480,160L480,288L720,288L720,128L960,128L960,192L1200,192L1200,32L1440,32L1440,320L1200,320L1200,320L960,320L960,320L720,320L720,320L480,320L480,320L240,320L240,320L0,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}

export default TextControls;
