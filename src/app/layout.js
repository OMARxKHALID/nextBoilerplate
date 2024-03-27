import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Provider from "@/components/client-provider";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import NextTopLoader from "nextjs-toploader";

const inter = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  // metadataBase: new URL("/"),
  title: {
    template: "%s | NEXT Boilerplate",
    default: "NEXT Boilerplate",
  },
  authors: {
    name: "Omar Khalid",
  },
  openGraph: {
    title: "NEXT Boilerplate",
    url: "/",
    siteName: "NEXT Boilerplate",
    type: "website",
  },
  keywords: ["NEXT Boilerplate"],
};

export default async function RootLayout({ children }) {
  const isDev = process.env.NODE_ENV === "development";
  const session = await getServerSession(authOptions);
  console.log("session", session);

  return (
    <html lang="en" suppressHydrationWarning={isDev}>
      <body className={inter.className}>
        <main className="max-w-6xl min-h-screen mx-auto py-10 space-y-10 px-5 xl:px-0">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Provider session={session}>
              <NextTopLoader />
              <Navbar />
              {children}
            </Provider>
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
