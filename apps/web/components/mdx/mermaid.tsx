"use client"

import { use, useEffect, useId, useState } from "react"
import { useThemeTransition } from "@workspace/core/hooks/use-theme-transition"

export function Mermaid({ chart }: { chart: string }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return <MermaidContent chart={chart} />
}

const cache = new Map<string, Promise<unknown>>()

function cachePromise<T>(
  key: string,
  setPromise: () => Promise<T>
): Promise<T> {
  const cached = cache.get(key)
  if (cached) return cached as Promise<T>
  const promise = setPromise()
  cache.set(key, promise)
  return promise
}

function MermaidContent({ chart }: { chart: string }) {
  const id = useId()
  const { resolvedTheme } = useThemeTransition()

  // Asynchronously load mermaid to prevent SSR issues and reduce bundle size
  const { default: mermaid } = use(
    cachePromise("mermaid", () => import("mermaid"))
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ) as any

  mermaid.initialize({
    startOnLoad: false,
    securityLevel: "loose",
    fontFamily: "inherit",
    themeCSS: "margin: 1.5rem auto 0;",
    theme: resolvedTheme === "dark" ? "dark" : "default",
  })

  const { svg, bindFunctions } = use(
    cachePromise(`${chart}-${resolvedTheme}`, () =>
      mermaid.render(id, chart.replaceAll("\\\\n", "\\n"))
    )
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ) as any

  return (
    <div
      dangerouslySetInnerHTML={{ __html: svg }}
      ref={(container) => {
        if (container) bindFunctions?.(container)
      }}
    />
  )
}
