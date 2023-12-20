/** @format */

import classes from "./Navbar.module.css";
import { images } from "../../utils/Images";
import carib from "../../utils/carib.svg";
import search from "../../utils/Search.svg";
import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { useSelector } from "react-redux";

import { motion, AnimatePresence, easeOut } from "framer-motion";

const Navbar = ({ showSearch, setQuery, query }) => {
  const [showNavModal, setShowNavModal] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 870);
  const [isFilter, setIsFilter] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const modalRef = useRef();
  const [showUserModal, setShowUserModal] = useState(false);
  const isLoggedin = useSelector((state) => state.auth.isLoggedin);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 870);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    if (location.pathname.includes("filter")) {
      setIsFilter(true);
    }
  }, []);
  const handleOnchangeQuery = (event) => {
    setSearchQuery(event.target.value);
    console.log(searchQuery, "final search query");
  };

  useEffect(() => {
    if (location.pathname.includes("filter")) {
      console.log("here");
      setShowButton(false);
    }
  });

  const onOpenCart = () => {
    navigate("/cart-page");
  };
  const onClickNavbarDrawer = () => {
    setShowNavModal(!showNavModal);
    console.log(showNavModal);
  };

  const onCloseModal = () => {
    setShowNavModal(false);
  };

  const varients = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-200%" },
  };

  const handleScrollBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  const handleOnpenuser = () => {
    setShowUserModal(true);
  };

  const hideUserModal = () => {
    setShowUserModal(false);
  };

  const handleOnSubmit = () => {
    console.log("submitted");
    setQuery(searchQuery);
  };
  console.log("user modal", showUserModal, "contact modal", showModal);
  return (
    <>
      <div className={`${classes.navContainer}  ${isFilter && classes.filter}`}>
        <AnimatePresence>
          {showUserModal && (
            <motion.div
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: "-25%" }}
              exit={{ opacity: 0, x: 0 }}
              transition={{ duration: 0.7, ease: easeOut }}
              key={"userModal"}
              className={classes.userModal}
            >
              {/* <div
                className={`${classes.userModal} ${classes.userModalSlideIn}`}
              > */}
              <div onClick={hideUserModal} className={classes.closeContainer}>
                x
              </div>
              <div className={classes.userModalInfo}>
                <div className={classes.iconsContainer}>
                  <span
                    style={{ fontWeight: 600 }}
                    className={classes.infoText}
                  >
                    Muhammad Ibrahim Khan
                  </span>
                </div>

                <div className={classes.iconsContainer}>
                  <span className={classes.infoText}>
                    123ibrahim7890@gmail.com
                  </span>
                </div>
              </div>
              {/* </div> */}
            </motion.div>
          )}
          {showModal && (
            <div
              key={"contactModal"}
              className={`${classes.ContactModal} ${classes.ModalSlideIn}`}
            >
              <div onClick={handleHideModal} className={classes.closeContainer}>
                x
              </div>
              <div className={classes.contactInfo}>
                <div className={classes.iconsContainer}>
                  <img className={classes.contactIcons} src={images.call}></img>
                  <span className={classes.infoText}>+12 345 6789 00</span>
                </div>
                <div className={classes.iconsContainer}>
                  <img
                    className={classes.contactIcons}
                    src={images.email}
                  ></img>
                  <span className={classes.infoText}>+support@tronix.com</span>
                </div>
                {/* <div className={classes.iconsContainer}>
                  <img
                    className={classes.contactIcons}
                    src={images.person}
                  ></img>
                  <span className={classes.infoText}>Account</span>
                </div> */}
              </div>
            </div>
          )}

          {isMobile && (
            <>
              <motion.nav
                key="modalAnimation"
                className={classes.modalAnimation}
                variants={varients}
                initial="closed"
                animate={!showNavModal ? "closed" : "open"}
                exit="closed"
              >
                <div className={classes.crossContainer}>
                  <img
                    onClick={onCloseModal}
                    className={classes.crossIcon}
                    src={images.cross}
                    alt="close"
                  />
                </div>
                <div className={classes.modelSocialsComtainer}>
                  <img
                    className={classes.mobileDrawerIcon}
                    src={images.person}
                  ></img>
                  <div className={classes.drawerText}>
                    <a className={classes.link} href="">
                      Account
                    </a>
                  </div>
                </div>
                <div
                  onClick={onOpenCart}
                  className={classes.modelSocialsComtainer}
                >
                  <img
                    className={classes.mobileDrawerIcon}
                    src={images.shoppingBag}
                  ></img>
                  <div className={classes.drawerText}>My Cart</div>
                </div>
                <div className={classes.modelSocialsComtainer}>
                  <img
                    className={classes.mobileDrawerIcon}
                    src={images.facebook}
                  ></img>
                  <div className={classes.drawerText}>
                    <a
                      className={classes.link}
                      href="https://www.facebook.com/"
                      target="_blank"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
                <div className={classes.modelSocialsComtainer}>
                  <img
                    className={classes.mobileDrawerIcon}
                    src={images.instagram}
                  ></img>
                  <div className={classes.drawerText}>
                    <a
                      className={classes.link}
                      href="https://www.instagram.com/explore/"
                      target="_blank"
                    >
                      Instagram
                    </a>
                  </div>
                </div>

                <div className={classes.modelSocialsComtainer}>
                  <img
                    className={classes.mobileDrawerIcon}
                    src={images.twitter}
                  ></img>
                  <div className={classes.drawerText}>
                    <a
                      className={classes.link}
                      target="_blank"
                      href="https://twitter.com/"
                    >
                      Twitter
                    </a>
                  </div>
                </div>
                <div className={classes.modelSocialsComtainer}>
                  <img
                    className={classes.mobileDrawerIcon}
                    src={images.linkedin}
                  ></img>
                  <div className={classes.drawerText}>
                    <a
                      className={classes.link}
                      target="_blank"
                      href="https://linkedin.com/"
                    >
                      Linkedin
                    </a>
                  </div>
                </div>
              </motion.nav>

              {!showNavModal && (
                <div className={classes.navlogocontain}>
                  <img
                    className={classes.navdroplogo}
                    onClick={onClickNavbarDrawer}
                    src={images.dropDown}
                  ></img>
                </div>
              )}
            </>
          )}
          {isMobile ? (
            <>
              <div className={classes.mobileNav}>
                <div className={classes.navlogo}>
                  <img src={carib}></img>
                </div>
              </div>
            </>
          ) : (
            <div className={classes.mainContainer}>
              <div className={classes.navUp}>
                <div className={classes.socialContainer}>
                  <img
                    className={classes.socialIcons}
                    src={images.instagram}
                  ></img>
                  <img
                    className={classes.socialIcons}
                    src={images.facebook}
                  ></img>
                  <img
                    className={classes.socialIcons}
                    src={images.twitter}
                  ></img>
                  <img
                    className={classes.socialIcons}
                    src={images.linkedin}
                  ></img>
                </div>
              </div>
              <hr className={classes.horizontal} />
              <div className={classes.navDown}>
                <div className={classes.logo}>
                  <img src={carib}></img>
                </div>
                <div className={classes.inputContainer}>
                  <ul
                    className={`${classes.unorderList} ${
                      !showButton && classes.onFilterPage
                    }`}
                  >
                    <Link to="/" className={classes.link}>
                      <li className={classes.listItem}>Home</li>
                    </Link>

                    <li
                      onClick={handleScrollBottom}
                      className={classes.listItem}
                    >
                      About us
                    </li>

                    <li
                      onMouseEnter={handleShowModal}
                      // onMouseLeave={handleHideModal}
                      // onClick={onContactUs}
                      className={classes.listItem}
                    >
                      Contact us
                    </li>
                    {showButton && (
                      <li className={classes.listItem}>
                        <Link
                          className={classes.link}
                          to={"/filter"}
                          state={query}
                        >
                          <button
                            style={{ borderRadius: "2vw" }}
                            className={classes.searchbtn}
                            type="submit"
                          >
                            Search
                            <img
                              className={classes.searchIcon}
                              src={search}
                            ></img>
                          </button>{" "}
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
                <div className={classes.cartContainer}>
                  <img
                    onClick={onOpenCart}
                    className={classes.contactIcons}
                    src={images.shoppingCart}
                  ></img>

                  <img
                    onClick={handleOnpenuser}
                    className={classes.contactIcons}
                    src={images.user}
                  ></img>
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>

      {isMobile || (isFilter && showSearch) ? (
        <div className={classes.searchBarContainer}>
          {/* <form onSubmit={handleSubmit} className={classes.searchform}> */}
          <form className={classes.searchform}>
            <input
              className={classes.searchInput}
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleOnchangeQuery}
            ></input>
            <Link to={"/filter"} state={searchQuery}>
              <button
                className={classes.searchButton}
                onClick={handleOnSubmit}
                type="submit"
              >
                <img className={classes.searchIcon} src={search}></img>
              </button>
            </Link>
          </form>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
