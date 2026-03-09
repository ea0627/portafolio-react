import "./projects.css";
import { deployments } from "../../config/deployments";
import { useGithubProjects } from "../../hooks/useGithubProjects";

const Projects = () => {
    const { repos, loading, error } = useGithubProjects("ea0627");

    // Función Demo Inteligente PRO (robusta)
    const getDemoUrl = (repo) => {
        // 1️⃣ homepage manual desde GitHub (si existe y no es vacío)
        const homepage = repo.homepage?.trim();
        if (homepage) return homepage;

        // 2️⃣ GitHub Pages (si el repo realmente tiene Pages)
        if (repo.githubPages) return repo.githubPages;

        // 3️⃣ Deploys manuales (Vercel u otros) definidos por ti
        const manualDeploy = deployments?.[repo.name]?.trim();
        if (manualDeploy) return manualDeploy;

        // 4️⃣ Sin demo real → no mostrar botón Demo
        return null;
        };

  const showLoading = loading;
  const showError = !loading && Boolean(error);
  const showEmpty = !loading && !error && repos.length === 0;
  const showGrid = !loading && !error && repos.length > 0;

    return (
        <section id="projects" className="projects-section">
            <div className="projects-overlay"></div>

            <div className="projects-container">
                <h2 className="projects-title">Proyectos</h2>

                {showLoading && (
                <p className="projects-loading">Cargando proyectos…</p>
                )}

                {showError && (
                <p className="projects-error">{error}</p>
                )}

                {showEmpty && (
                <p className="projects-empty">No hay proyectos para mostrar.</p>
                )}

                {showGrid && (
                <div className="projects-grid">
                    {repos.map((repo) => {
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
                            🕒{" "}
                            {new Date(repo.updated_at).toLocaleDateString("es-CO")}
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
                )}
            </div>
        </section>
    );
};

export default Projects;