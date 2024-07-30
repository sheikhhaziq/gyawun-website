import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gyawun Music - Ad-Free Music Streaming and Downloads",
  description:
    "Stream your favorite songs for free with Gyawun Music, the ad-free music app! Download songs for offline listening and enjoy uninterrupted music anytime, anywhere. Discover a vast library of tracks and create your perfect playlist today!",
  keywords: [
    "Gyawun Music",
    "Free music streaming",
    "Ad-free music",
    "Download songs",
    "Offline listening",
    "Music app",
    "Stream songs free",
    "No ads music",
    "Music library",
    "Create playlists",
    "Uninterrupted music",
  ],
  authors: [{ name: "Sheikh Haziq", url: "https://github.com/sheikhhaziq" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SpeedInsights />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        // disableTransitionOnChange
      >
        <body className={inter.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
