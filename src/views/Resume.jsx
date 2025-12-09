const Resume = () => {
  const handleDownload = () => {
    // Create a temporary link element
    const link = document.createElement("a");
    link.href = "/src/assets/nuray-senturk-cv.pdf"; // Path to your CV file
    link.download = "Nuray_Senturk_CV.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section className="section">
        <h2 className="sectionTitle">Resume</h2>

        <div className="resume-download-container">
          <div className="resume-card">
            <h3>Download My Resume</h3>
            <p>
              You can download my complete resume in PDF format using the button
              below. The file contains detailed information about my
              professional experience, skills, and education.
            </p>
            <button className="download-button" onClick={handleDownload}>
              Download CV
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
