import { useEffect, useState } from "react";

// Función para detectar GitHub Pages automáticamente
const detectGithubPages = async (username, repoName) => {
    const url = `https://${username}.github.io/${repoName}/`;

    try {
        const res = await fetch(url, { method: "HEAD" });

        if (res.ok) {
            return url; // Página encontrada
        }
    } catch (err) {
        // Silent fail
    }

    return null; // No existe GitHub Pages
};

export const useGithubProjects = (username) => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const res = await fetch(
                    `https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=100`
                );

                const data = await res.json();

                // Detectar GitHub Pages automáticamente
                const reposWithPages = await Promise.all(
                    data.map(async (repo) => {
                        const ghPagesUrl = await detectGithubPages(username, repo.name);

                        return {
                            ...repo,
                            githubPages: ghPagesUrl
                        };
                    })
                );

                setRepos(reposWithPages);
            } catch (error) {
                console.error("Error fetching repos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, [username]);

    return { repos, loading };
};