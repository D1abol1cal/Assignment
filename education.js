// Sample education data
const educationEntries = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "FAST NUCES",
      startYear: 2020,
      endYear: 2024,
      description: "Completed a four-year degree program with a focus on software development and programming."
    },
    {
      id: 2,
      degree: "A-Levels",
      institution: "The City School, Gulshan A Levels Campus",
      startYear: 2018,
      endYear: 2020,
      description: "Completed secondary education within pre-engineering subjects."
    },

    {
        id: 3,
        degree: "O-Levels",
        institution: "The City School, Gulshan Campus A, Boys Branch",
        startYear: 2012,
        endYear: 2018,
        description: "Completed secondary education within pre-engineering subjects."
      },
    // Add more education entries here
  ];
  
  // Function to render education entries
  function renderEducationEntries() {
    const educationList = document.getElementById("education-list");
    educationList.innerHTML = "";
  
    educationEntries.forEach(entry => {
      const educationEntry = document.createElement("div");
      educationEntry.classList.add("education-entry");
  
      const degree = document.createElement("h3");
      degree.textContent = entry.degree;
      educationEntry.appendChild(degree);
  
      const institution = document.createElement("p");
      institution.textContent = `${entry.institution} (${entry.startYear} - ${entry.endYear})`;
      educationEntry.appendChild(institution);
  
      const description = document.createElement("p");
      description.textContent = entry.description;
      educationEntry.appendChild(description);
  
      educationList.appendChild(educationEntry);
    });
  }
  
  // Initial render of education entries
  renderEducationEntries();