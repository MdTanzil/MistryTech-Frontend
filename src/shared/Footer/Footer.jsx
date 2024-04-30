import { Link } from "react-router-dom";
import icon from "../../assets/images/Mistrytech furniture logo white svg.2-01.svg";
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-zinc-900 text-base-content">
        <aside>
          <img src={icon} alt="" className="h-36  " />
          <p className="text-white">
            Hotline: +8801999099009
            <br />
            Messenger: m.me/mistrytach
            <br />
            Email: mtl19.bd@gmail.com
          </p>
          <p className="text-white">Keep in touch with us</p>
          <div className="grid grid-flow-col gap-4 text-white">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </aside>
        <nav className="text-white">
          <h6 className="uppercase 2xl">About Us</h6>
          <Link to={"/brand-story"}>
            <p className="link link-hover">Brand Story</p>
          </Link>
          <Link to={"/contact-us"}>
            <p className="link link-hover">Contact Us</p>
          </Link>
          <Link to={"/career"}>
            <p className="link link-hover">Careers</p>
          </Link>
          <Link to={"/business-entity-record"}>
            <p className="link link-hover">Business Entity Record</p>
          </Link>
          <Link to={"/mistrytech-happy-photo"}>
            <p className="link link-hover">MistrytechHappyPhoto</p>
          </Link>
          <Link to={"/social-media-post"}>
            <p className="link link-hover">Social Media Posts</p>
          </Link>
          <Link to={"/contact-us"}>
            <p className="link link-hover">Apply for Franchise</p>
          </Link>
        </nav>
        <nav className="text-white">
          <h6 className="uppercase 2xl">Services</h6>
          <Link to={"/servicing-request"}>
            {" "}
            <p className="link link-hover">Servicing Request</p>
          </Link>
          <Link to={"/meeting-request"}>
            {" "}
            <p className="link link-hover">Meeting Request</p>
          </Link>
          <Link to={"/shipping-policy"}>
            {" "}
            <p className="link link-hover">Shipping Policy</p>
          </Link>
          <Link to={"/exchange-refund"}>
            {" "}
            <p className="link link-hover">Exchange & Refund</p>
          </Link>
          <Link>
            {" "}
            <p className="link link-hover">Terms & Condition</p>
          </Link>
          <Link>
            {" "}
            <p className="link link-hover">Privacy Policy</p>
          </Link>
        </nav>
        <nav className="text-white">
          <h6 className="uppercase 2xl">Information</h6>
          <Link>
            {" "}
            <p className="link link-hover">Available Colors List</p>
          </Link>
          <Link>
            {" "}
            <p className="link link-hover">Home Furniture Catalogue</p>
          </Link>
          <Link>
            {" "}
            <p className="link link-hover">Office Furniture Catalogue</p>
          </Link>
          <Link>
            {" "}
            <p className="link link-hover">Academic Furniture Catalogue</p>
          </Link>
          <Link>
            {" "}
            <p className="link link-hover">Store Locator</p>
          </Link>
          <Link>
            {" "}
            <p className="link link-hover">Care & Maintenance</p>
          </Link>
          <Link>
            {" "}
            <p className="link link-hover">Customization</p>
          </Link>
          <Link>
            {" "}
            <p className="link link-hover">FAQs</p>
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
