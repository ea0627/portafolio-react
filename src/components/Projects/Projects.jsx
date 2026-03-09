import "./projects.css";
import { useGithubProjects } from "../../hooks/useGithubProjects";

// Despliegues manuales en Vercel
const deployments = {
    "portafolio-react": "https://portafolio-ea.vercel.app",
    "web_project_around": "https://web-project-around.vercel.app",
    "aluraflix": "https://aluraflix-ea.vercel.app",
    "alura-geek": "https://ea0627.github.io/alura-geek/",
    "juego_pong_chatgpt": "https://juego-pong-chatgpt.vercel.app",
    "adivina-el-numero": "https://adivina-el-numero-ea.vercel.app"
};

const Projects = () => {
    const { repos, loading } = useGithubProjects("ea0627");

    // Función Demo Inteligente PRO
    const getDemoUrl = (repo) => {
        // 1️⃣ homepage manual desde GitHub
        if (repo.homepage && repo.homepage !== "") {
            return repo.homepage;
        }

        // 2️⃣ GitHub Pages autodetectado
        if (repo.githubPages) {
            return repo.githubPages;
        }

        // 3️⃣ Vercel registrado manualmente
        if (deployments[repo.name]) {
            return deployments[repo.name];
        }

        // 4️⃣ Fallback Vercel automático
        return `https://${repo.name}.vercel.app`;
    };

    return (
        <section id="projects" className="projects-section">
            <div className="projects-overlay"></div>

            <div className="projects-container">
                <h2 className="projects-title">Proyectos</h2>

                {loading && <p className="projects-loading">Cargando proyectos…</p>}

                <div className="projects-grid">
                    {!loading &&
                        repos.map((repo) => {
                            const demoUrl = getDemoUrl(repo);

                            return (
                                <article key={repo.id} className="project-card">

                                    <h3 className="project-title">{repo.name}</h3>

                                    <div className="project-badges">
                                        {repo.language && (
                                            <span className="badge badge-lang">{repo.language}</span>
                                        )}

                                        <span className="badge badge-stars">
                                            ⭐ {repo.stargazers_count}
                                        </span>

                                        <span className="badge badge-updated">
                                            🕒 {new Date(repo.updated_at).toLocaleDateString("es-CO")}
                                        </span>
                                    </div>

                                    <p className="project-description">
                                        {repo.description || "Sin descripción"}
                                    </p>

                                    <div className="project-tech">
                                        {repo.language && (
                                            <span className="tech-pill">{repo.language}</span>
                                        )}
                                    </div>

                                    <div className="project-links">
                                        <a
                                            href={repo.html_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-project"
                                        >
                                            Repositorio
                                        </a>

                                        {demoUrl && (
                                            <a
                                                href={demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-project secondary"
                                            >
                                                Demo
                                            </a>
                                        )}
                                    </div>
                                </article>
                            );
                        })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
