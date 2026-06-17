"use client";

export default function OfflinePage() {
  return (
    <>
      <style
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Trusted style
        dangerouslySetInnerHTML={{
          __html: `
        :root {
          --bg: #ffffff;
          --text: #09090b;
          --muted: #71717a;
        }
        @media (prefers-color-scheme: dark) {
          :root {
            --bg: #09090b;
            --text: #fafafa;
            --muted: #a1a1aa;
          }
        }
        body {
          background-color: var(--bg);
          color: var(--text);
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          text-align: center;
        }
        .icon {
          color: var(--muted);
          margin-bottom: 1.5rem;
          opacity: 0.7;
        }
        h1 {
          font-size: 2.25rem;
          font-weight: 700;
          margin: 0 0 1rem;
          letter-spacing: -0.025em;
        }
        p {
          color: var(--muted);
          max-width: 400px;
          margin: 0 auto 2rem;
          line-height: 1.5;
        }
      `,
        }}
      />

      <div className="icon">
        <svg
          aria-hidden="true"
          className="lucide lucide-wifi-off-icon lucide-wifi-off"
          fill="none"
          height="80"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="80"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 20h.01" />
          <path d="M8.5 16.429a5 5 0 0 1 7 0" />
          <path d="M5 12.859a10 10 0 0 1 5.17-2.69" />
          <path d="M19 12.859a10 10 0 0 0-2.007-1.523" />
          <path d="M2 8.82a15 15 0 0 1 4.177-2.643" />
          <path d="M22 8.82a15 15 0 0 0-11.288-3.764" />
          <path d="m2 2 20 20" />
        </svg>
      </div>

      <h1>You are offline</h1>
      <p>
        It looks like you&apos;ve lost your internet connection. Please check
        your connection and try again.
      </p>
    </>
  );
}
