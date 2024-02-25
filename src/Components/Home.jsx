import Banner from "../Utils/Banner";
import bannerImage from "../assets/hero.jpg";
import Academic from "./Academic";
import Admission from "./Admission";
import NewsAndEvents from "./News";
import StudentReviewSlider from "./Reviews";
const studentReviews = [
  {
    name: "Aditi Patel",
    stars: Math.round(Math.random() * 5),
    comment:
      "Attending Adda College was one of the best decisions I ever made. The faculty members are not only experts in their fields but also genuinely care about their students' success. I felt supported every step of the way.",
  },
  {
    name: "Rohan Kumar",
    stars: Math.round(Math.random() * 5),
    comment:
      "The hands-on learning opportunities at Adda College helped me apply theoretical knowledge to real-world situations. From research projects to internships, I gained valuable experience that set me apart in the job market.",
  },
  {
    name: "Priya Sharma",
    stars: Math.round(Math.random() * 5),
    comment:
      "Adda College provided me with a holistic education that prepared me for both my career and personal life. The diverse student body and inclusive campus culture enriched my college experience.",
  },
  {
    name: "Aryan Singh",
    stars: Math.round(Math.random() * 5),
    comment:
      "I appreciated the flexibility of Adda College's curriculum, which allowed me to tailor my course selections to my interests and career goals. The support services, such as tutoring and career advising, were also instrumental in my success.",
  },
  {
    name: "Neha Gupta",
    stars: Math.round(Math.random() * 5),
    comment:
      "The opportunities for student involvement at Adda College are endless. Whether through clubs, organizations, or volunteer activities, I was able to explore my passions and make a positive impact on campus and in the community.",
  },
  {
    name: "Karan Patel",
    stars: Math.round(Math.random() * 5),
    comment:
      "Adda College fosters a culture of innovation and creativity. The interdisciplinary approach to education encouraged me to think critically and solve complex problems, skills that have been invaluable in my professional journey.",
  },
  {
    name: "Isha Singh",
    stars: Math.round(Math.random() * 5),
    comment:
      "As a first-generation college student, Adda College provided me with the support and resources I needed to navigate the higher education landscape successfully. I am grateful for the mentorship and guidance I received.",
  },
  {
    name: "Riya Sharma",
    stars: Math.round(Math.random() * 5),
    comment:
      "Adda College's commitment to diversity and inclusion is evident in every aspect of campus life. The diverse perspectives and backgrounds of my peers enriched classroom discussions and broadened my worldview.",
  },
  {
    name: "Rajesh Kumar",
    stars: Math.round(Math.random() * 5),
    comment:
      "Adda College goes above and beyond to create a supportive and inclusive environment for students with disabilities. The accessibility services and accommodations ensured that I had equal opportunities to succeed.",
  },
  {
    name: "Ananya Joshi",
    stars: Math.round(Math.random() * 5),
    comment:
      "I appreciated the emphasis on experiential learning at Adda College. Whether through internships, study abroad programs, or research opportunities, I gained practical skills and expanded my horizons beyond the classroom.",
  },
  {
    name: "Aakash Patel",
    stars: Math.round(Math.random() * 5),
    comment:
      "The sense of community at Adda College is unparalleled. From faculty members who know you by name to classmates who become lifelong friends, I felt like I belonged from day one.",
  },
  {
    name: "Divya Gupta",
    stars: Math.round(Math.random() * 5),
    comment:
      "Adda College's commitment to sustainability and social responsibility aligns with my values. I was impressed by the college's efforts to reduce its environmental footprint and promote ethical practices.",
  },
];

const Home = () => {
  return (
    <div className="relative">
      <Banner
        title={"Welcome to Adda College"}
        description={
          <>
            <span>
              <q>Adda College: Where Ambitions Meet Opportunities </q>
            </span>
            <br />
            It a digital gateway to our academic community and a comprehensive
            resource for prospective students, current students, faculty, and
            staff. Our website has been designed with a user-friendly interface
            to ensure that information is accessible and navigation is
            effortless. Below is an overview of what you can expect to find on
            our site.
          </>
        }
        link={"/login"}
        linkName={"Get Started"}
        image={bannerImage}
      />
      <Academic />
      <Admission />
      <NewsAndEvents />
      <StudentReviewSlider reviews={studentReviews} />
    </div>
  );
};

export default Home;
