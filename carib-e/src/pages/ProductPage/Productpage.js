import React from "react";
import { Footer } from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import classes from "./ProductPage.module.css";
import { images } from "../../utils/Images";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useNavigate } from "react-router-dom";
import { addItemInACart, cartActions } from "../../store/reducers/cartSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

import { useDispatch, useSelector } from "react-redux";

const Dummy_Products = [
  {
    asin: 1,
    link: "www.dummy.com",
    image: images.product1,
    price: 10,
    title: "Watch",
  },
  {
    asin: 2,
    link: "www.dummy.com",
    image: images.product2,
    price: 20,
    title: "head Phones",
  },
  {
    asin: 3,
    link: "www.dummy.com",
    image: images.product3,
    price: 20,
    title: "VR",
  },
  {
    asin: 4,
    link: "www.dummy.com",
    image: images.product4,
    price: 20,

    title: "Ear pods",
  },
  {
    asin: 5,
    link: "www.dummy.com",
    image: images.product2,
    price: 20,
    title: "head Phones",
  },
  {
    asin: 6,
    link: "www.dummy.com",
    image: images.product3,
    price: 20,
    title: "VR",
  },
  {
    asin: 7,
    link: "www.dummy.com",
    image: images.product3,
    price: 20,
    title: "VR",
  },
  {
    asin: 8,
    link: "www.dummy.com",
    image: images.product4,
    price: 20,
    title: "Ear pods",
  },
  {
    asin: 9,
    link: "www.dummy.com",
    image: images.product2,
    price: 20,
    title: "head Phones",
  },
];

export const Productpage = () => {
  // const [isMobile, setIsMobile] = useState(window.innerWidth < 400);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 870);
  const [quantity, setQuantity] = useState(1);
  const [istemsToShow, setItemsToShow] = useState(5);
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const productImage = location.state.image;
  const productTitle = location.state.title;
  const productPrice = location.state.price;
  const rating = location.state.rating;
  console.log(productImage, "mn product imaeg hn");
  const items = useSelector((state) => state.cart.items);
  console.log(isMobile, "ismopbile");
  useEffect(() => {
    console.log(items, "items");
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 870);
      if (window.innerWidth < 870) {
        setItemsToShow(2);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  const navigate = useNavigate();
  var productInfo = "true";
  const handleOnProductClick = (product) => {
    var productInfo = product;
    console.log(product, "product item");
    navigate("/product", { state: productInfo });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productInfo]);

  const onAddQuantity = () => {
    setQuantity(quantity + 1);
  };
  const onSubtractQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const onAddToCart = () => {
    console.log(location.state);
    // const price = location.state.price * quantity;
    // const  = ;
    const price = parseFloat(location.state.price.replace("$", "")) * quantity;
    console.log("price to  set", price);

    dispatch(
      addItemInACart({ ...location.state, quantity: quantity, price: price })
    );
    navigate("/cart-page");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar showSearch={true}></Navbar>

      <div
        style={{
          display: "flex",

          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/*  product--------------------------------*/}
        {isMobile ? (
          <div className={classes.mobileProductContainer}>
            <div className={classes.mobileProductImage}>
              <img
                src={productImage}
                className={classes.mobileimage}
                alt="productImage"
              />
            </div>

            <div className={classes.mobileTitle}>{productTitle}</div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "4vh",
                marginBottom: "1vh",
                width: "40vw",
              }}
            >
              {/* <div
                style={{
                  textDecoration: "line-through",
                  color: "#B4B4B4",
                  fontWeight: "500",
                  fontSize: "3vw",
                }}
                className={classes.mobileHeadingSub}
              >
                ${productPrice}
              </div> */}
              <div
                style={{
                  color: "#ff3c3c",
                  fontWeight: "500",
                }}
                className={classes.mobileHeadingSub}
              >
                {productPrice}
              </div>

              <div
                style={{
                  backgroundColor: "#707070",
                  color: "#cfcfcf",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingRight: "1.5vw",
                  paddingLeft: "1.5vw",
                  paddingTop: "1.2vw",
                  paddingBottom: "1.2vw",
                  fontWeight: "600",
                  width: "13vw",
                }}
                className={classes.mobile20Off}
              >
                -20% OFF
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onAddToCart}
              style={{
                backgroundColor: "#ff3c3c",
                border: "none",
                outline: "none",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1vh",
                  height: "5vh",
                  border: "none",
                  outline: "none",
                  width: "100%",
                }}
              >
                <img
                  src={images.cartIcon}
                  style={{ width: "2.3vh", height: "auto" }}
                />
                <p
                  style={{
                    color: "white",
                    fontSize: "1.6vh",
                    fontWeight: "500",
                  }}
                >
                  ADD TO CART
                </p>
              </div>
            </motion.button>
            {/* </div> */}
          </div>
        ) : (
          <div className={classes.product}>
            <div
              style={{
                width: "30vw",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img className={classes.prodImageStyle} src={productImage} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "start",

                justifyContent: "center",
              }}
              className={classes.prodContent}
            >
              <div
                style={{ borderBottom: "1px solid #E4E4E4 ", color: "#414141" }}
              >
                <div className={classes.productTitle}>{productTitle}</div>
                {/* <ReactStars
                  count={5}
                  onChange={() => {}}
                  size={24}
                  activeColor="#ffd700"
                  value={rating}
                  edit={false}
                /> */}
                <div
                  className={classes.miniHeading}
                  style={{
                    color: "#AEAEAE",
                  }}
                >
                  Overview
                </div>
                <div className={classes.textSize} style={{ color: "#C7C7C7" }}>
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus.
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "4vh",
                    marginBottom: "1vh",
                  }}
                >
                  {/* <div
                    style={{
                      textDecoration: "line-through",
                      color: "#B4B4B4",
                      fontWeight: "500",
                    }}
                    className={classes.headingsub}
                  >
                    ${productPrice}
                  </div> */}
                  <div
                    style={{
                      color: "#ff3c3c",
                      fontWeight: "500",
                    }}
                    className={classes.headingsub}
                  >
                    {productPrice}
                  </div>

                  <div
                    style={{
                      backgroundColor: "#707070",
                      color: "#cfcfcf",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingRight: ".3vw",
                      paddingLeft: ".3vw",
                      paddingTop: "1vh",
                      paddingBottom: "1vh",
                      fontWeight: "600",
                    }}
                    className={classes.textSize}
                  >
                    -20% OFF
                  </div>
                </div>
              </div>
              <div>
                <div
                  className={classes.miniUnboldHeading}
                  style={{
                    color: "#AEAEAE",
                    marginTop: "4vh",
                    marginBottom: "1.5vh",
                  }}
                >
                  Various Versions
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <button
                    onClick={onSubtractQuantity}
                    style={{
                      height: "50px",
                      width: "50px",
                      border: "none",
                      outline: "none",
                      backgroundColor: "#E0E0E0",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "3vw",
                      width: "3vw",
                    }}
                  >
                    <img
                      src={images.minus}
                      style={{ width: "1.2vw", height: "auto" }}
                    />
                  </button>
                  <div
                    style={{
                      borderBottom: ".1vw solid #F9F9F9",
                      borderTop: ".1vw solid #F9F9F9",
                      flex: 1,

                      height: "2.8vw",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ fontSize: "larger", color: "#414141" }}>
                      {quantity}
                    </p>
                  </div>
                  <button
                    onClick={onAddQuantity}
                    style={{
                      border: "none",
                      outline: "none",
                      backgroundColor: "#B2B2B2",

                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "3vw",
                      width: "3vw",
                    }}
                  >
                    <img
                      src={images.plus}
                      style={{ width: "1.2vw", height: "auto" }}
                    />
                  </button>
                </div>
                <div style={{ marginTop: "8vh" }}>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onAddToCart}
                    className={classes.buttonStyles}
                  >
                    <button
                      onClick={onAddToCart}
                      className={classes.buttonStyles}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "1vw",

                          border: "none",
                          outline: "none",
                          width: "100%",
                        }}
                      >
                        <img
                          src={images.cartIcon}
                          style={{ width: "1.2vw", height: "auto" }}
                        />
                        <p
                          style={{
                            color: "white",
                            fontSize: "1.2vw",
                            fontWeight: "500",
                          }}
                        >
                          ADD TO CART
                        </p>
                      </div>
                    </button>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* About product--------------------------------and further form here*/}
        {isMobile ? (
          <div
            className={classes.mobileAboutContainer}
            style={{
              fontSize: "30vw",
              textAlign: "start",
              color: " #414141",
              marginTop: "5vh",
            }}
          >
            <div style={{ width: "25vw", marginRight: "1vw" }}>
              <div className={classes.mobileTitle}>Descriptions</div>
              <div
                className={classes.mobileTextSize}
                style={{ color: "#A1A1A1" }}
              >
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere ossimus,
                omnis amet voluptas ssumenda est, omnis dolor repellendus quis
                nostrum.
                <br />
                Temporibus autem quibusdam et aut officiis debitis aut re
              </div>
            </div>
            <></>
            <div style={{ width: "25vw", marginRight: "1vw" }}>
              <div className={classes.mobileTitle}>Informations</div>
              <div
                className={classes.mobileminiHeading}
                style={{ color: "#ff3c3c" }}
              >
                Shipping
              </div>
              <div
                className={classes.mobileTextSize}
                style={{ color: "#A1A1A1" }}
              >
                We currently offer free shipping worldwide on all orders over
                $100
              </div>
              <div
                className={classes.mobileminiHeading}
                style={{ color: "#ff3c3c" }}
              >
                Sizing
              </div>
              <div
                className={classes.mobileTextSize}
                style={{ color: "#A1A1A1" }}
              >
                We currently offer free shipping.
              </div>
              <div
                className={classes.mobileminiHeading}
                style={{ color: "#ff3c3c" }}
              >
                Assistance
              </div>
              <div
                className={classes.mobileTextSize}
                style={{ color: "#A1A1A1" }}
              >
                Contact us on (+44) 555 88 65, or email us at
                upport@reytheme.com.
              </div>
            </div>
            <div style={{ width: "25vw", marginRight: "1vw" }}>
              <div className={classes.mobileTitle}>Specifications</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  color: "#A1A1A1",
                  width: "80vw",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: ".1vw solid #E3E3E3",
                    paddingBottom: ".7vw",
                  }}
                >
                  <div
                    style={{ width: "10vh" }}
                    className={classes.mobileminiHeading}
                  >
                    BRAND
                  </div>
                  <div
                    style={{ width: "10vh", textAlign: "end" }}
                    className={classes.mobileTextSize}
                  >
                    Zenuro
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: ".1vw solid #E3E3E3",
                    paddingBottom: ".7vw",
                  }}
                >
                  <div
                    style={{ width: "10vh" }}
                    className={classes.mobileminiHeading}
                  >
                    FARMER
                  </div>
                  <div
                    style={{ width: "10vh", textAlign: "end" }}
                    className={classes.mobileTextSize}
                  >
                    M,L
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: "1px solid #E3E3E3",
                    paddingBottom: ".7vw",
                  }}
                >
                  <div
                    style={{ width: "10vh" }}
                    className={classes.mobileminiHeading}
                  >
                    COUNTRY
                  </div>
                  <div
                    style={{ width: "10vh", textAlign: "end" }}
                    className={classes.mobileTextSize}
                  >
                    Canvas
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            className={[classes.aboutContainer]}
            style={{
              textAlign: "start",
              color: " #414141",
              marginTop: "5vh",
            }}
          >
            <div style={{ width: "25vw", marginRight: "1vw" }}>
              <div className={classes.heading}>Descriptions</div>
              <div className={classes.textSize} style={{ color: "#A1A1A1" }}>
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere ossimus,
                omnis amet voluptas ssumenda est, omnis dolor repellendus quis
                nostrum.
                <br />
                Temporibus autem quibusdam et aut officiis debitis aut re
              </div>
            </div>
            <></>
            <div style={{ width: "25vw", marginRight: "1vw" }}>
              <div className={classes.heading}>Informations</div>
              <div className={classes.miniHeading} style={{ color: "#ff3c3c" }}>
                Shipping
              </div>
              <div className={classes.textSize} style={{ color: "#A1A1A1" }}>
                We currently offer free shipping worldwide on all orders over
                $100
              </div>
              <div className={classes.miniHeading} style={{ color: "#ff3c3c" }}>
                Sizing
              </div>
              <div className={classes.textSize} style={{ color: "#A1A1A1" }}>
                We currently offer free shipping.
              </div>
              <div className={classes.miniHeading} style={{ color: "#ff3c3c" }}>
                Assistance
              </div>
              <div className={classes.textSize} style={{ color: "#A1A1A1" }}>
                Contact us on (+44) 555 88 65, or email us at
                upport@reytheme.com.
              </div>
            </div>
            <div style={{ width: "25vw", marginRight: "1vw" }}>
              <div className={classes.heading}>Specifications</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  color: "#A1A1A1",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: ".1vw solid #E3E3E3",
                    paddingBottom: ".7vw",
                  }}
                >
                  <div className={classes.miniHeading}>BRAND</div>
                  <div className={classes.textSize}>Zenuro</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: ".1vw solid #E3E3E3",
                    paddingBottom: ".7vw",
                  }}
                >
                  <div className={classes.miniHeading}>FARMER</div>
                  <div className={classes.textSize}>M,L</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: "1px solid #E3E3E3",
                    paddingBottom: ".7vw",
                  }}
                >
                  <div className={classes.miniHeading}>COUNTRY</div>
                  <div className={classes.textSize}>Canvas</div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div
          className={classes.mobileProductTitle}
          style={{
            color: "#707070",
            marginTop: "7vh",
            marginBottom: "7vh",
          }}
        >
          Related Product
        </div>
        {console.log(istemsToShow)}
        <div className={classes.productsContainer}>
          <Swiper
            pagination={{ dynamicBullets: true, clickable: true }}
            className="myswiper"
            modules={[Pagination]}
            slidesPerView={istemsToShow}
          >
            {Dummy_Products.map((product, index) => {
              return (
                <SwiperSlide
                  style={{
                    width: "16vw",

                    paddingBottom: "4vh",
                  }}
                >
                  <div
                    onClick={() => handleOnProductClick(product)}
                    key={index}
                    className={classes.mainProductCard}
                  >
                    <div style={{ marginTop: ".7vw" }}>
                      <img
                        className={classes.productImage}
                        src={product.image}
                      ></img>
                    </div>
                    <div className={classes.ProductsCardInfo}>
                      <div className={classes.productNameContainer}>
                        {/* <div className={classes.cardTitle}>{product.title}</div> */}

                        {/* <img
                          onClick={() => setIsFavorite(!isFavorite)}
                          className={classes.productIcon}
                          src={` ${!isFavorite ? images.heart : images.heartS}`}
                        /> */}
                      </div>
                      {/* <div
                        className={classes.productPrice}
                      >{`${product.price}.00`}</div> */}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
