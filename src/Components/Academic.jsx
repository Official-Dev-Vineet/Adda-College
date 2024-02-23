import BannerList from "../Utils/BannerList";
import gp from "../assets/gp.jpg";
import up from "../assets/up.jpg";
import cp from "../assets/cpe.jpg";

const Academic = () => {
  return (
    <div className="padding-md">
      <h2 className="tac mb">Academic Programs at Adda College</h2>
      <p className="tac mb">
        Welcome to the Academic Programs section of Adda College, where we open
        the doors to a world of knowledge, innovation, and opportunity. At Adda
        College, we are dedicated to providing a diverse and dynamic educational
        environment that prepares students for success in their future careers
        and life endeavors. Explore our range of undergraduate, graduate, and
        professional programs designed to challenge, inspire, and cultivate the
        leaders of tomorrow.
      </p>
      <BannerList
        title={"Undergraduate Programs"}
        description={
          <>
            Our undergraduate programs offer a broad spectrum of disciplines,
            from the arts and humanities to science and technology. Each program
            is designed to build a strong foundation of knowledge, critical
            thinking, and practical skills.
          </>
        }
        list={[
          `<span>Bachelor of Science (B.S.) </span>in fields such as
        Biology, Computer Science, Engineering, and more.`,
          `<span>Bachelor of Arts (B.A.) </span>in disciplines including
        English, History, Psychology, and other liberal arts.`,
          ` <span>Bachelor of Business Administration (B.B.A.) </span>with
          specializations in Finance, Marketing, International Business,
          and Entrepreneurship.`,
        ]}
        link={"/login"}
        linkName={"Apply Now"}
        image={up}
      />
      <BannerList
        title={"Graduate Programs"}
        description={
          <>
            Elevate your education and career with our graduate programs, which
            emphasize research, advanced knowledge, and specialized skill
            development in your chosen field.
          </>
        }
        list={[
          `<span>Master of Science (M.S.)</span>
        offering advanced studies in areas like Data Science,
        Environmental Science, and Biotechnology.`,
          `<span>Master of Arts (M.A.)</span> for those pursuing higher
      knowledge in Education, Sociology, Communication, and more.`,
          `<span>Master of Business Administration (M.B.A.)</span> with
      concentrations available in Strategic Management, Human
      Resources, Digital Marketing, and Supply Chain Management.`,
        ]}
        link={"/login"}
        linkName={"Apply Now"}
        image={gp}
      />
      <BannerList
        title="Professional and Continuing Education"
        description={
          <>
            For professionals looking to advance their careers or expand their
            expertise, Adda College provides a range of certificates and
            continuing education courses that cater to the evolving needs of the
            workforce.
          </>
        }
        list={[
          `<span>Certificate Programs</span> in Digital Marketing, Project Management, Cybersecurity, and more.
        `,
          `<span>Online Courses and Workshops</span> designed for flexibility and convenience, allowing you to learn at your own pace.`,
        ]}
        link={"/login"}
        linkName={"Apply Now"}
        image={cp}
      />
    </div>
  );
};

export default Academic;
