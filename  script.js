fetch("content/about.md")
  .then(response => response.text())
  .then(text => {
    document.getElementById("about-text").innerText = text;
  });

fetch("content/projects.json")
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById("project-list");
    const projects = data.projects;

    projects.forEach(project => {
      const card = document.createElement("div");
      card.className = "project";

      card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        ${project.link ? `<a href="${project.link}" target="_blank">View Project</a>` : ""}
      `;

      list.appendChild(card);
    });
  });