import createMiddleware from "@workspace/i18n/middleware";
import { routing } from "@workspace/i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default function proxy(request: import("next/server").NextRequest) {
  return intlMiddleware(request);
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!api|trpc|_next|_vercel|serwist|~offline|.*\\..*).*)",
};
