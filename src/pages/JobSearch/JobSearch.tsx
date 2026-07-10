import { useRef, useEffect, useState, useCallback } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import mdContent from "../../content/blog/job-search.md?raw";
import "./JobSearch.scss";

interface TocItem {
    id: string;
    text: string;
    level: number; // 2 for h2, 3 for h3, 4 for h4
}

function JobSearch() {
    const contentRef = useRef<HTMLDivElement>(null);
    const [tocItems, setTocItems] = useState<TocItem[]>([]);
    const [activeId, setActiveId] = useState<string>("");

    // Build TOC from rendered DOM and set up scroll tracking
    const handleScroll = useCallback(() => {
        if (!contentRef.current) return;

        const headings = Array.from(
            contentRef.current.querySelectorAll<HTMLElement>(
                "h2[id], h3[id], h4[id]",
            ),
        );

        // Find the last heading whose top edge is at or above the threshold
        for (let i = headings.length - 1; i >= 0; i--) {
            const rect = headings[i].getBoundingClientRect();
            if (rect.top <= 100) {
                setActiveId(headings[i].id);
                return;
            }
        }

        // If no heading is above the threshold, activate the first one
        if (headings.length > 0) {
            setActiveId(headings[0].id);
        }
    }, []);

    useEffect(() => {
        if (!contentRef.current) return;

        const headings = Array.from(
            contentRef.current.querySelectorAll<HTMLElement>(
                "h2[id], h3[id], h4[id]",
            ),
        );

        const items: TocItem[] = headings.map((el) => ({
            id: el.id,
            text: el.textContent || "",
            level:
                el.tagName === "H2"
                    ? 2
                    : el.tagName === "H3"
                      ? 3
                      : 4,
        }));
        setTocItems(items);

        // Initialize active heading
        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    useEffect(() => {
        const prev = document.title;
        document.title = "Riki's Job Search Guide";
        return () => {
            document.title = prev;
        };
    }, []);

    return (
        <div className="job-search-page">
            <aside className="job-search-sidebar">
                <a href="#/" className="job-search-back-link">
                    ← Portfolio
                </a>
                <nav className="job-search-toc">
                    {tocItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                document
                                    .getElementById(item.id)
                                    ?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                            }}
                            className={
                                "toc-item" +
                                ` toc-level-${item.level}` +
                                (activeId === item.id ? " toc-active" : "")
                            }
                        >
                            {item.text}
                        </a>
                    ))}
                </nav>
            </aside>
            <main className="job-search-content" ref={contentRef}>
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeSlug]}
                >
                    {mdContent}
                </ReactMarkdown>
            </main>
        </div>
    );
}

export default JobSearch;
