const Admission = () => {
  const steps = [
    {
      id: 1,
      title: "Step 1",
      des: `<strong class="t-danger">Research Programs and Requirements:</strong> Explore the academic programs offered by the linked college and review their admission requirements. This information is typically available on the college's website or admissions portal.`,
    },
    {
      id: 2,
      title: "Step 2",
      des: `<strong class="t-danger">Prepare Application Materials:</strong> Gather all the necessary documents required for the application process. This may include transcripts, standardized test scores (such as the SAT or ACT), letters of recommendation, a personal statement or essay, and any other required materials.`,
    },
    {
      id: 3,
      title: "Step 3",
      des: `<strong class="t-danger">Complete the Application:</strong> Fill out the online application form provided by the college. Make sure to provide accurate and complete information. Pay attention to any specific instructions or prompts given in the application.`,
    },
    {
      id: 4,
      title: "Step 4",
      des: `<strong class="t-danger">Submit Application Fee:</strong> Some colleges require an application fee to process your application. Make sure to submit the fee according to the college's instructions. In some cases, application fee waivers may be available for eligible students.`,
    },
    {
      id: 5,
      title: "Step 5",
      des: `<strong class="t-danger">Submit Supporting Documents:</strong> Upload or submit all required supporting documents, such as transcripts, test scores, letters of recommendation, and essays, through the college's admissions portal or designated application system.`,
    },
    {
      id: 6,
      title: "Step 6",
      des: `<strong class="t-danger">Track Application Status:</strong> After submitting your application, monitor your application status through the college's admissions portal. This may include checking for receipt of supporting documents, application review status, and admission decision updates.`,
    },
    {
      id: 7,
      title: "Step 7",
      des: `<strong class="t-danger">Attend Interviews or Auditions (if applicable):</strong> Some programs or colleges may require applicants to participate in interviews, auditions, or portfolio reviews as part of the admissions process. Prepare accordingly and attend any scheduled interviews or auditions as required.`,
    },
    {
      id: 8,
      title: "Step 8",
      des: `<strong class="t-danger">Wait for Admission Decision:</strong> Once your application is complete, wait for the college to review your application and make an admission decision. This process may take several weeks or months, depending on the college's timeline.`,
    },
    {
      id: 9,
      title: "Step 9",
      des: `<strong class="t-danger">Acceptance and Enrollment:</strong> If you receive an offer of admission, carefully review the admission offer, including any financial aid or scholarship information. Follow the college's instructions for accepting the offer and completing the enrollment process, which may include submitting a deposit and registering for classes.`,
    },
    {
      id: 10,
      title: "Step 10",
      des: `<strong class="t-danger">Orientation and Transition:</strong> Upon acceptance and enrollment, participate in any orientation programs offered by the college to familiarize yourself with campus resources, academic requirements, and student life.`,
    },
  ];
  return (
    <div
      className="admission max-w shadow-3d-light mx-auto padding-sm radius-1"
      style={{ "--mwValue": 100 }}
    >
      <h2 className="mb tac">Admissions Process</h2>

      <div className="steps ml flex flex-wrap gap-sm  justify-evenly">
        {steps.map((step) => (
          <div
            className="step shadow-3d-light padding-sm mb radius-1 max-w"
            key={step.id}
            style={{ "--mwValue": 40 }}
          >
            <h3 className="t-primary tac">{step.title}</h3>
            <p
              className="ml mt t-bold"
              dangerouslySetInnerHTML={{ __html: step.des }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admission;
