// Team Data Mock Database
const teamData = {
    1: {
        name: "Carlos Mendoza",
        role: "Lead Backend Developer",
        image: "img/team1.jpg",
        bio: "Ingeniero de software con más de 8 años de experiencia creando sistemas de backend escalables, seguros y altamente eficientes para aplicaciones corporativas. Apasionado por la arquitectura de software y la optimización de rendimiento.",
        techs: [
            { name: "Python", icon: "fa-brands fa-python" },
            { name: "Flask", icon: "fa-solid fa-flask" },
            { name: "Node.js", icon: "fa-brands fa-node-js" },
            { name: "PostgreSQL", icon: "fa-solid fa-database" },
            { name: "Docker", icon: "fa-brands fa-docker" },
            { name: "AWS", icon: "fa-brands fa-aws" }
        ],
        specs: [
            "Arquitectura de Microservicios",
            "Optimización de Bases de Datos Relacionales",
            "Diseño e Implementación de APIs RESTful",
            "Integración de Servicios en la Nube"
        ],
        certs: [
            "AWS Certified Solutions Architect",
            "Backend Development Certificate (Meta)",
            "System Design Expert"
        ]
    },
    2: {
        name: "Laura Gómez",
        role: "Frontend Architect",
        image: "img/team2.jpg",
        bio: "Especialista en interfaces web fluidas, dinámicas y accesibles. Obsesionada con la experiencia de usuario y el rendimiento del lado del cliente. Lidera la implementación de las mejores prácticas en desarrollo frontend.",
        techs: [
            { name: "Angular", icon: "fa-brands fa-angular" },
            { name: "React", icon: "fa-brands fa-react" },
            { name: "TypeScript", icon: "fa-solid fa-code" },
            { name: "JavaScript", icon: "fa-brands fa-js" },
            { name: "HTML5", icon: "fa-brands fa-html5" },
            { name: "CSS3 / Sass", icon: "fa-brands fa-css3-alt" }
        ],
        specs: [
            "Desarrollo de SPAs",
            "Animaciones Web (CSS/JS)",
            "Optimización de Core Web Vitals",
            "Sistemas de Diseño",
            "Accesibilidad Web (WCAG)"
        ],
        certs: [
            "Google Mobile Web Specialist",
            "Frontend Web UI Frameworks",
            "Advanced TypeScript Masterclass"
        ]
    },
    3: {
        name: "Andrés López",
        role: "UI/UX Designer & Dev",
        image: "img/team3.jpg",
        bio: "Diseñador multidisciplinario que une la estética premium con la funcionalidad. Capaz de maquetar sus propios diseños con precisión de píxel. Especialista en crear experiencias memorables.",
        techs: [
            { name: "Figma", icon: "fa-solid fa-pen-nib" },
            { name: "Adobe XD", icon: "fa-solid fa-palette" },
            { name: "JavaScript", icon: "fa-brands fa-js" },
            { name: "Vanilla CSS", icon: "fa-brands fa-css3-alt" },
            { name: "TailwindCSS", icon: "fa-solid fa-wind" }
        ],
        specs: [
            "Diseño de Interfaces (UI)",
            "Investigación de Usuarios (UX)",
            "Prototipado Interactivo",
            "Creación de Wireframes",
            "Design Systems"
        ],
        certs: [
            "Google UX Design Professional Certificate",
            "Interaction Design Foundation Member",
            "Certified Usability Analyst (HFI)"
        ]
    }
};

// Helper function to get icon for tech name
function getTechIcon(tech) {
    if (typeof tech === 'string') {
        // Default icons based on tech name
        const iconMap = {
            'Python': 'fa-brands fa-python',
            'Flask': 'fa-solid fa-flask',
            'Node.js': 'fa-brands fa-node-js',
            'PostgreSQL': 'fa-solid fa-database',
            'Docker': 'fa-brands fa-docker',
            'AWS': 'fa-brands fa-aws',
            'Angular': 'fa-brands fa-angular',
            'React': 'fa-brands fa-react',
            'TypeScript': 'fa-solid fa-code',
            'JavaScript': 'fa-brands fa-js',
            'HTML5': 'fa-brands fa-html5',
            'CSS3 / Sass': 'fa-brands fa-css3-alt',
            'Figma': 'fa-solid fa-pen-nib',
            'Adobe XD': 'fa-solid fa-palette',
            'TailwindCSS': 'fa-solid fa-wind'
        };
        return iconMap[tech] || 'fa-solid fa-code';
    }
    return tech.icon || 'fa-solid fa-code';
}

document.addEventListener('DOMContentLoaded', () => {
    // Check if we are on the team member page
    const profileContainer = document.getElementById('profileContent');
    if (!profileContainer) return;

    // Get ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const memberId = urlParams.get('id');

    const member = teamData[memberId];

    if (member) {
        // Map techs to HTML with icons
        const techsHTML = member.techs.map(tech => {
            const techName = typeof tech === 'string' ? tech : tech.name;
            const techIcon = getTechIcon(tech);
            return `<span class="chip"><i class="${techIcon}"></i> ${techName}</span>`;
        }).join('');
        
        const specsHTML = member.specs.map(spec => `<li>${spec}</li>`).join('');
        const certsHTML = member.certs.map(cert => `<li><i class="fa-solid fa-certificate" style="margin-right: 0.5rem; color: var(--color-primary);"></i>${cert}</li>`).join('');

        profileContainer.innerHTML = `
            <div class="profile-sidebar">
                <div class="profile-image-container">
                    <img src="${member.image}" alt="${member.name}" class="profile-image">
                </div>
                <h1>${member.name}</h1>
                <p class="role">${member.role}</p>
                <p class="bio">${member.bio}</p>
            </div>

            <div class="profile-details-area">
                <div class="detail-section">
                    <h2 class="detail-title">
                        <span class="icon"><i class="fa-solid fa-code"></i></span> 
                        Tecnologías que Domina
                    </h2>
                    <div class="chip-container">
                        ${techsHTML}
                    </div>
                </div>

                <div class="detail-section">
                    <h2 class="detail-title">
                        <span class="icon"><i class="fa-solid fa-bullseye"></i></span> 
                        Áreas de Especialización
                    </h2>
                    <ul class="styled-list">
                        ${specsHTML}
                    </ul>
                </div>

                <div class="detail-section">
                    <h2 class="detail-title">
                        <span class="icon"><i class="fa-solid fa-award"></i></span> 
                        Certificados
                    </h2>
                    <ul class="styled-list">
                        ${certsHTML}
                    </ul>
                </div>
            </div>
        `;
        
        // Trigger animation for detail sections after content is loaded
        setTimeout(() => {
            const detailSections = document.querySelectorAll('.detail-section');
            detailSections.forEach((section, index) => {
                setTimeout(() => {
                    section.classList.add('visible');
                }, index * 150);
            });
        }, 100);
    } else {
        // Fallback for missing or invalid ID
        profileContainer.innerHTML = `
            <div class="error-state">
                <div style="font-size: 4rem; color: var(--color-primary); margin-bottom: 1.5rem;">
                    <i class="fa-solid fa-user-xmark"></i>
                </div>
                <h2 class="text-gradient">Miembro del equipo no encontrado</h2>
                <p style="margin-top: 1rem; color: var(--color-text-muted);">El perfil que buscas no existe o fue removido.</p>
                <a href="index.html#equipo" class="btn btn-outline" style="margin-top: 2rem;">
                    <i class="fa-solid fa-arrow-left"></i> Regresar
                </a>
            </div>
        `;
    }
});
