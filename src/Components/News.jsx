const NewsAndEvents = () => {
  // Sample news and events data
  const newsAndEventsData = [
    {
      title: "Adda College Hosts Annual Career Fair",
      date: "February 15, 2024",
      description:
        "Adda College hosted its annual career fair, connecting students with leading companies from various industries.",
    },
    {
      title: "Professor Johnson Receives Research Grant",
      date: "March 5, 2024",
      description:
        "Dr. Emily Johnson, a professor in the Department of Biology, has been awarded a prestigious research grant for her work on biodiversity conservation.",
    },
    {
      title:
        'Upcoming Guest Lecture: "Exploring the Future of Artificial Intelligence"',
      date: "April 10, 2024",
      description:
        "Join us for an insightful guest lecture by Dr. David Smith, an expert in artificial intelligence, as he discusses the future implications of AI technology.",
    },
    {
      title: "Adda College Celebrates Diversity Week",
      date: "May 20, 2024",
      description:
        "Join us for a week-long celebration of diversity at Adda College, featuring cultural performances, workshops, and discussions on inclusion and equity.",
    },
    {
      title: "New Student Orientation for Fall Semester",
      date: "June 8, 2024",
      description:
        "Incoming freshmen and transfer students are invited to attend the New Student Orientation to learn about campus resources, meet faculty and staff, and prepare for the upcoming semester.",
    },
    {
      title: "Adda College Launches Sustainability Initiative",
      date: "July 15, 2024",
      description:
        "Adda College is committed to environmental sustainability. Join us as we launch our new initiative aimed at reducing carbon footprint, promoting eco-friendly practices, and fostering a culture of sustainability on campus.",
    },
    {
      title: "Adda College Alumni Reunion Weekend",
      date: "August 30, 2024",
      description:
        "Calling all Adda College alumni! Join us for a weekend of reminiscing, reconnecting, and celebrating our shared memories and achievements.",
    },
    {
      title:
        "Faculty Spotlight: Dr. Sarah Lee Receives Teaching Excellence Award",
      date: "September 12, 2024",
      description:
        "Congratulations to Dr. Sarah Lee, a professor in the Department of Chemistry, for receiving the prestigious Teaching Excellence Award in recognition of her outstanding contributions to student learning and engagement.",
    },
    {
      title: "Adda College Debating Society Wins National Championship",
      date: "October 5, 2024",
      description:
        "The Adda College Debating Society clinched the title of National Champions at the recent debating competition, showcasing their exceptional argumentation and rhetorical skills.",
    },
    {
      title: 'Student Art Exhibition: "Expressions of Creativity"',
      date: "November 20, 2024",
      description:
        "Experience the creativity and talent of Adda College students at our annual art exhibition, featuring a diverse range of artworks in various mediums.",
    },
    {
      title: "Adda College Choir Performs Holiday Concert",
      date: "December 15, 2024",
      description:
        "Celebrate the holiday season with the enchanting melodies of the Adda College Choir at our annual holiday concert, featuring classic carols and festive tunes.",
    },
    {
      title: "Adda College Ranked Among Top 10 Colleges for Engineering",
      date: "January 8, 2025",
      description:
        "We are proud to announce that Adda College has been ranked among the top 10 colleges for engineering programs in the latest national rankings, highlighting our commitment to academic excellence and innovation.",
    },
  ];

  return (
    <div
      className="news max-w shadow-3d-light mx-auto mt mb padding-md"
      style={{ "--mwValue": 100 }}
    >
      <h2 className="tac mb t-info">News and Events</h2>
      <div
        className="flex gap-md flex-wrap justify-evenly mt"
        style={{ "--mt": 2 }}
      >
        {newsAndEventsData.map((item, index) => (
          <div
            key={index}
            className="news-item shadow-3d-light max-w padding-sm radius-1"
            style={{ "--mwValue": 40 }}
          >
            <h3 className="t-danger">{item.title}</h3>
            <p className="t-success mb">{item.date}</p>
            <p className="t-opacity">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsAndEvents;
