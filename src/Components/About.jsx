import TimelineFile from "../Utils/TimelineFile";
import "./aboutPage.css";
import heroImage from "../assets/about-bg.png";
const About = () => {
  const timeline = [
    {
      title: "Establishment of Adda College",
      date: "2013",
      description:
        "Adda College is founded with a vision to provide quality education and holistic development opportunities.",
    },
    {
      title: "Expansion of Academic Programs",
      date: "2015",
      description:
        "Adda College expands its academic offerings to include new disciplines and specializations.",
    },
    {
      title: "Modernization of Campus Facilities",
      date: "2017",
      description:
        "Adda College invests in upgrading its campus facilities with state-of-the-art infrastructure and amenities.",
    },
    {
      title: "Inauguration of Sports Complex",
      date: "2019",
      description:
        "Adda College inaugurates a modern sports complex to promote physical fitness and extracurricular activities among students.",
    },
    {
      title: "Launch of Entrepreneurship Center",
      date: "2020",
      description:
        "Adda College establishes an entrepreneurship center to nurture innovative ideas and support aspiring entrepreneurs.",
    },
    {
      title: "Partnership with Industry Giants",
      date: "2020",
      description:
        "Adda College forms strategic partnerships with industry giants to provide students with hands-on training and industry exposure.",
    },
    {
      title: "International Exchange Programs",
      date: "2021",
      description:
        "Adda College initiates international exchange programs to foster global perspectives and cultural diversity among students.",
    },
    {
      title: "Adoption of Sustainable Practices",
      date: "2021",
      description:
        "Adda College embraces sustainable practices, including green initiatives and eco-friendly policies, to contribute to environmental conservation.",
    },
    {
      title: "Virtual Learning Integration",
      date: "2022",
      description:
        "Adda College integrates virtual learning platforms and online resources to facilitate flexible and accessible education for students.",
    },
    {
      title: "Celebration of Decade of Excellence",
      date: "2023",
      description:
        "Adda College celebrates a decade of academic excellence with various events and achievements highlighting its journey.",
    },
  ];

  return (
    <div className="about-page">
      <header className="hero-header">
        <div className="hero-content">
          <h1 className="t-primary">Welcome to Adda College</h1>
          <p className="t-bold mt mb t-info">
            <q>Where Excellence Meets Opportunity </q>
          </p>
          <p className="t-balance t-bold t-opacity">
            Embark on a journey of discovery, growth, and transformation. Join a
            vibrant community of learners, thinkers, and doers. Experience
            education that goes beyond the classroom. Unlock your potential and
            shape a brighter tomorrow. At Adda College, your success is our
            priority.
          </p>
        </div>
        <div className="hero-image">
          <img
            src={heroImage}
            alt="hero image"
            style={{ objectFit: "contain" }}
          />
        </div>
      </header>

      <section className="our-story">
        <div className="container mt mb">
          <h2 className="t-info">Our Story</h2>
          <p className="t-bold mt mb ml t-t-opacity">
            Established in 2013, Adda College has been a beacon of excellence in
            education for over 10 years. Founded with a vision to nurture minds
            and empower individuals, our institution has evolved into a dynamic
            hub of learning, innovation, and growth. Over the years, we have
            remained committed to our mission of providing quality education and
            fostering holistic development in our students.
          </p>
        </div>
      </section>
      <h2 className="tac mb mt">Timeline</h2>
      <TimelineFile timelines={timeline} />
    </div>
  );
};

export default About;
