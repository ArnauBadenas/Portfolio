document.addEventListener('DOMContentLoaded', () => {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      // About Me Section
      const aboutMeSection = document.getElementById('aboutme');
      const aboutMeContent = `
        <p>${data.aboutMe.description}</p>
        ${data.aboutMe.additionalInfo.map(info => `<p>${info}</p>`).join('')}
      `;
      aboutMeSection.innerHTML = aboutMeContent;

      // Tools Section
      const toolsSection = document.getElementById('tools');
      const toolsContent = Object.entries(data.tools).map(([category, tools]) => `
        <h3>${category.replace(/([A-Z])/g, ' $1')}</h3>
        <div class="tools-category">
          ${tools.map(tool => `
            <div class="tool">
              <img src="https://skillicons.dev/icons?i=${tool}" alt="${tool}">
              <p>${tool}</p>
            </div>
          `).join('')}
        </div>
      `).join('');
      toolsSection.innerHTML = toolsContent;

      // Projects Section
      const projectsSection = document.getElementById('projects');
      const projectsContent = data.projects.map(project => `
        <div class="project">
          <h2>${project.title}</h2>
          <img src="${project.image}" alt="${project.title}">
          <p>${project.description}</p>
          <a href="${project.link}">View Project</a>
          <p>Technologies: ${project.technologies.join(', ')}</p>
        </div>
      `).join('');
      projectsSection.innerHTML = projectsContent;

      // Contact Section
      const contactSection = document.getElementById('contact');
      const contactContent = `
        <section class="contact-grid">
          <article>
            <h3>Email me</h3>
            <a href="mailto:${data.contact.email}">${data.contact.email}</a>
          </article>
          <article>
            <h3>Call</h3>
            <p>${data.contact.phone}</p>
          </article>
          <article>
            <h3>Check out my LinkedIn</h3>
            <a href="${data.contact.linkedin.url}" target="_blank">${data.contact.linkedin.name}</a>
          </article>
        </section>
      `;
      contactSection.innerHTML = contactContent;
    })
    .catch(error => console.error('Error fetching data:', error));
});
