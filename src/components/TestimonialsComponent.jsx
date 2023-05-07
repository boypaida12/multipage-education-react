import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function TestimonialsComponent() {
  return (
    <>
      <section className="testimonials-section">
        <h2>Testimonials</h2>
        <div className="testimonial-container">
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="testimonial-inner swiper-slide">
                <div className="testimonial-image">
                  <img
                    src="../images/aiony-haust-3TLl_97HNJo-unsplash.jpg"
                    alt=""
                  />
                </div>
                <div className="testimonial-profile">
                  <h5>Sandra</h5>
                  <h6>Frontend-Developer</h6>
                </div>
                <div className="testimonial">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt vel ad cumque quis dignissimos ratione in explicabo
                    mollitia qui, id optio officiis, soluta deserunt iusto ullam
                    veniam molestiae provident voluptates, ipsa odit eius vitae?
                    Facere veritatis vel dignissimos corrupti voluptates!
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-inner">
                <div className="testimonial-image">
                  <img
                    src="../images/toa-heftiba-O3ymvT7Wf9U-unsplash.jpg"
                    alt=""
                  />
                </div>
                <div className="testimonial-profile">
                  <h5>Selasie</h5>
                  <h6>Frontend-Developer</h6>
                </div>
                <div className="testimonial">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt vel ad cumque quis dignissimos ratione in explicabo
                    mollitia qui, id optio officiis, soluta deserunt iusto ullam
                    veniam molestiae provident voluptates, ipsa odit eius vitae?
                    Facere veritatis vel dignissimos corrupti voluptates!
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-inner">
                <div className="testimonial-image">
                  <img
                    src="../images/ian-dooley-d1UPkiFd04A-unsplash.jpg"
                    alt=""
                  />
                </div>
                <div className="testimonial-profile">
                  <h5>Ben</h5>
                  <h6>Frontend-Developer</h6>
                </div>
                <div className="testimonial">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt vel ad cumque quis dignissimos ratione in explicabo
                    mollitia qui, id optio officiis, soluta deserunt iusto ullam
                    veniam molestiae provident voluptates, ipsa odit eius vitae?
                    Facere veritatis vel dignissimos corrupti voluptates!
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-inner">
                <div className="testimonial-image">
                  <img
                    src="../images/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.jpg"
                    alt=""
                  />
                </div>
                <div className="testimonial-profile">
                  <h5>Auriele</h5>
                  <h6>Frontend-Developer</h6>
                </div>
                <div className="testimonial">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt vel ad cumque quis dignissimos ratione in explicabo
                    mollitia qui, id optio officiis, soluta deserunt iusto ullam
                    veniam molestiae provident voluptates, ipsa odit eius vitae?
                    Facere veritatis vel dignissimos corrupti voluptates!
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="testimonial-inner">
                <div class="testimonial-image">
                  <img
                    src="../images/dom-hill-nimElTcTNyY-unsplash.jpg"
                    alt=""
                  />
                </div>
                <div class="testimonial-profile">
                  <h5>Phyllis</h5>
                  <h6>Frontend-Developer</h6>
                </div>
                <div class="testimonial">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt vel ad cumque quis dignissimos ratione in explicabo
                    mollitia qui, id optio officiis, soluta deserunt iusto ullam
                    veniam molestiae provident voluptates, ipsa odit eius vitae?
                    Facere veritatis vel dignissimos corrupti voluptates!
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="testimonial-inner">
                <div class="testimonial-image">
                  <img
                    src="../images/ivana-cajina-_7LbC5J-jw4-unsplash.jpg"
                    alt=""
                  />
                </div>
                <div class="testimonial-profile">
                  <h5>Carlos</h5>
                  <h6>Frontend-Developer</h6>
                </div>
                <div class="testimonial">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt vel ad cumque quis dignissimos ratione in explicabo
                    mollitia qui, id optio officiis, soluta deserunt iusto ullam
                    veniam molestiae provident voluptates, ipsa odit eius vitae?
                    Facere veritatis vel dignissimos corrupti voluptates!
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="testimonial-inner">
                <div class="testimonial-image">
                  <img
                    src="../images/ian-dooley-d1UPkiFd04A-unsplash.jpg"
                    alt=""
                  />
                </div>
                <div class="testimonial-profile">
                  <h5>Rabbi</h5>
                  <h6>Frontend-Developer</h6>
                </div>
                <div class="testimonial">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt vel ad cumque quis dignissimos ratione in explicabo
                    mollitia qui, id optio officiis, soluta deserunt iusto ullam
                    veniam molestiae provident voluptates, ipsa odit eius vitae?
                    Facere veritatis vel dignissimos corrupti voluptates!
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default TestimonialsComponent;
