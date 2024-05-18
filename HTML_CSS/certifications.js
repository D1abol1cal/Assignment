// Sample certification data
const certifications = [
    {
      id: 1,
      name: "Certified React Developer",
      issuer: "ABC Institute",
      issueDate: "2022-06-15",
      expirationDate: "2025-06-15",
      description: "Completed a comprehensive course on React development and passed the certification exam."
    },
    {
      id: 2,
      name: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      issueDate: "2023-03-01",
      expirationDate: null,
      description: "Achieved the AWS Certified Solutions Architect - Associate certification."
    },
    // Add more certification entries here
  ];
  
  // Function to render certification entries
  function renderCertificationEntries() {
    const certificationList = document.getElementById("certification-list");
    certificationList.innerHTML = "";
  
    certifications.forEach(certification => {
      const certificationEntry = document.createElement("div");
      certificationEntry.classList.add("certification-entry");
  
      const name = document.createElement("h3");
      name.textContent = certification.name;
      certificationEntry.appendChild(name);
  
      const issuer = document.createElement("p");
      issuer.textContent = `Issuer: ${certification.issuer}`;
      certificationEntry.appendChild(issuer);
  
      const issueDate = document.createElement("p");
      issueDate.textContent = `Issue Date: ${certification.issueDate}`;
      certificationEntry.appendChild(issueDate);
  
      if (certification.expirationDate) {
        const expirationDate = document.createElement("p");
        expirationDate.textContent = `Expiration Date: ${certification.expirationDate}`;
        certificationEntry.appendChild(expirationDate);
      }
  
      const description = document.createElement("p");
      description.textContent = certification.description;
      certificationEntry.appendChild(description);
  
      certificationList.appendChild(certificationEntry);
    });
  }
  
  // Initial render of certification entries
  renderCertificationEntries();