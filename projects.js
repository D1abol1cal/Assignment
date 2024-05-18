// Sample project data
const projects = [
    {
      id: 1,
      title: "islah.ai",
      description: "Namaz posture correction app using AI and ML. It uses the camera to detect the posture of the user and provided correctional feedback.",
      technologies: ["Flutter", "Python"]
    },
    {
      id: 2,
      title: "Bunninja",
      description: "Bunninja is a 2D pixel art platformer game written in Python. Join Bunninja on an exciting adventure through colorful pixelated worlds filled with obstacles, enemies, and treasures.",
      technologies: ["Python"]
    },
    // Add more project objects here
  ];
  
  // Function to render project cards
  function renderProjectCards(filterTechnology = "all") {
    const projectList = document.getElementById("project-list");
    projectList.innerHTML = "";
  
    projects.forEach(project => {
      if (filterTechnology === "all" || project.technologies.includes(filterTechnology)) {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");
  
        const title = document.createElement("h3");
        title.textContent = project.title;
        projectCard.appendChild(title);
  
        const description = document.createElement("p");
        description.textContent = project.description;
        projectCard.appendChild(description);
  
        const techList = document.createElement("ul");
        techList.classList.add("tech-list");
        project.technologies.forEach(tech => {
          const techItem = document.createElement("li");
          techItem.textContent = tech;
          techList.appendChild(techItem);
        });
        projectCard.appendChild(techList);
  
        projectList.appendChild(projectCard);
      }
    });
  }
  
  // Event listener for technology filter
  document.getElementById("technology-filter").addEventListener("change", (event) => {
    const selectedTechnology = event.target.value;
    renderProjectCards(selectedTechnology);
  });
  
  // Initial render of project cards
  renderProjectCards();