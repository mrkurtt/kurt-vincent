import React from "react";
import AboutPic from "../assets/profile-pic.png";
import SectionTitle from "../components/SectionTitle";
import Container from "../components/Container";
const About = () => {
  return (
    <section id="about">
      <Container>
        <SectionTitle title={"about me"} />
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="flex flex-col bg-gray-800 rounded-xl"
        >
          <div className="flex flex-col lg:flex-row gap-x-16 justify-center items-center py-6 lg:py-8 px-6 lg:px-12">
            <img
              data-aos="fade-right"
              data-aos-duration="1000"
              src={AboutPic}
              alt=""
              className="w-48 lg:w-96 mb-6 lg:mb-0 "
            />
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="flex flex-col gap-y-6 text-center lg:text-left"
            >
              <p className="text-xl">
                Hey there! I'm{" "}
                <span className="text-green-400">Kurt Vincent Timajo</span>, a{" "}
                <span className="text-green-400">Software Engineer</span> with
                3+ years of full stack development experience specializing in
                the MERN (MongoDB, Express.js, React.js, Node.js) stack,
                Next.js, and TypeScript. Proven ability to deliver scalable,
                user-focused applications while leveraging DevOps skills with{" "}
                <span className="text-orange-400">
                  Amazon Web Services (AWS) EC2{" "}
                </span>
                and <span className="text-blue-400">GitHub Actions</span> to
                ensure reliable deployment and high availability.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
