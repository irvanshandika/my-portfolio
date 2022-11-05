import React from "react";
import copyright from "./copyright.js";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <p className="text-side">
          © | Created by
          <a href="http://irvanshandika.my.id" className="text-black">
            {" "}
            Irvan Shandika{" "}
          </a>
        </p>
      </div>
    );
  }
}

export default Footer;

{
  /* <p>© <span id="current-year"></span> | Created with <i class="bi
                bi-heart-fill text-danger"></i> <a
                href="http://irvanshandika.my.id" class="text-white"> Irvan
                Shandika </a></p> */
}
