import dynamic from "next/dynamic";

import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import RenovationSection from "@components/sections/Renovation";
import { useEffect, useState } from "react";



const About = () => {

  const accessToken = "IGQWRNUWJJU1JtSTk4NzJOVlpZAWHpJNEF1ZADctbml6SVcya1BoN2RxVTMxdmJPNFFnZAFYyOHRBQjIxcDRxbjJlYkluTmhtTkRFR3BiMm9iM3dwWlhOTGc2d1E0Uk14U0hxOWQ3dUswNTVzVHZAfZAWZAnd2FRdDZA5TlkZD";
  const userId = "6697119563742629";
  const mediaUrl = `https://graph.instagram.com/v13.0/${userId}/media?access_token=${accessToken}&fields=id,media_url,caption`;
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch(mediaUrl)
      .then((response) => response.json())
      .then((mediaData) => {
        if (mediaData.data) {
          const posts = mediaData.data;
          console.log(posts);
          setPosts(posts);
        }
      })
      .catch((mediaError) => {
        console.warn("Error fetching media:", mediaError);
      });
  }, []);

  return (
    <Layouts>
      <PageBanner
        pageTitle={"About Us"}
        pageDesc={"our values and vaulted us to the top of our industry."}
      />
      {/* About-First Start */}
      <section className="gap about-first">
        <div className="container">
          <div className="row">
            <h2>
              Construction industry representing the interests of small and
              medium-sized building companies
            </h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="who-we-are">
                <div>
                  <h3>Who We Are?</h3>
                  <p>
                    We are resolute in our mission to not only make a difference
                    to the lives of people today but to also leave a legacy for
                    future generations and the planet we live in. Our portfolio
                    includes dozens of successfully completed projects of houses
                    of different storeys, with high–quality finishes and good
                    repairs. Building houses is our vocation!
                  </p>
                </div>
                <figure>
                  <img
                    className="w-100"
                    src="/DSK_images/gallery-1.jpeg"
                    alt="About Image One"
                  />
                </figure>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="who-we-are space">
                <div>
                  <h3>What's in it for me?</h3>
                  <ul>
                    <li>
                      <i className="fa-solid fa-circle-dot" /> High performing,
                      low carbon concrete solution
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-dot" /> Value for
                      workers' skills
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-dot" /> Excellent
                      standards in construction
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-dot" /> An inclusive
                      industry
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-dot" /> Don't take our
                      word for it
                    </li>
                  </ul>
                </div>
                <figure>
                  <img
                    className="w-100"
                    src="/DSK_images/gallery-3.jpeg"
                    alt="About Image Two"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About-First End */}

      {/* <CountersSection /> */}

      {/*About How It Works Start */}
      <section className="gap about-how-it-works light-bg-color">
        <div className="heading">
          <figure>
            <img src="/images/heading-icon.png" alt="Heading Icon" />
          </figure>
          <span>Plan + Control</span>
          <h2>How it Works</h2>
        </div>
        <div className="container">
          <figure style={{ position: "relative", zIndex: "9" }}>
            <img
              className="w-100"
              src="/DSK_images/gallery-2.jpeg"
              alt="About How It Works"
            />
          </figure>
        </div>
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="plans">
                <div className="y-box d-flex-all">1.</div>
                <h3>Phase Plan</h3>
                <p>
                  This step connects the design process and its miles tones with
                  construction.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="plans">
                <div className="y-box d-flex-all">2.</div>
                <h3>Design Pull Plan</h3>
                <p>
                  We work with the design team to establish a detailed plan for
                  reaching our goals.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="plans">
                <div className="y-box d-flex-all">3.</div>
                <h3>Coordinated Layout</h3>
                <p>
                  This process creates a single point of truth: drawings all
                  project.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="plans">
                <div className="y-box d-flex-all">4.</div>
                <h3>Quality Control</h3>
                <p>
                  Having geometry worked out in the Layout step, prior to
                  construction.
                </p>
              </div>
            </div>
          </div>
        </div>



        {/* instagram gallary */}
        <div className="container mt-5">
          <div className="row">

            {posts.map((post) => (
              <div className="col-lg-4">
                <div className="card p-4">
                <img src={post.media_url} style={{ width: "100%" }} alt="" />
                  <p className="mt-2" >caption: {post.caption}</p>
                </div>
              </div>
            ))
            }

          </div>
        </div>

        {/* instagram gallary */}






      </section>



      {/*About How It Works End */}

      <RenovationSection />

      {/* <TestimonialSlider /> */}

      {/* <PartnersSlider noTop /> */}
    </Layouts>
  );
};
export default About;
