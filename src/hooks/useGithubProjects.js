import { useEffect, useState } from "react";

export const useGithubProjects = (username) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!username) return;

    const fetchRepos = async () => {
      setLoading(true);
      setError("");

      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=100`
        );

        if (!res.ok) {
          // Ej: rate limit (403), no encontrado (404), etc.
          throw new Error(`GitHub API error: ${res.status}`);
        }

        const data = await res.json();

        const normalized = data.map((repo) => {
          const homepage = repo.homepage?.trim();

          const githubPages =
            homepage
              ? homepage
              : repo.has_pages
                ? `https://${username}.github.io/${repo.name}/`
                : null;

          return {
            ...repo,
            githubPages,
          };
        });

        setRepos(normalized);
      } catch (err) {
        console.error("Error fetching repos:", err);
        setError("No se pudieron cargar los proyectos en este momento. Intenta más tarde.");
        setRepos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  return { repos, loading, error };
};