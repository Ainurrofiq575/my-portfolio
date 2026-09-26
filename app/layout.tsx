import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ainur Rofiq | Software Developer Portfolio",
  description:
    "D4 Teknik Informatika student at Universitas Harkat Negeri, specializing in Backend Development, REST APIs, Database Architecture, and Mobile Application Development.",
  icons: {
    icon: "/icons.png",
    shortcut: "/icons.png",
    apple: "/icons.png",
  },
  openGraph: {
    title: "Ainur Rofiq | Software Developer Portfolio",
    description:
      "D4 Teknik Informatika student at Universitas Harkat Negeri, specializing in Backend Development, REST APIs, Database Architecture, and Mobile Application Development.",
    url: "https://ainurrofiq.dev",
    siteName: "Ainur Rofiq Portfolio",
    images: [
      {
        url: "/Profile.jpg",
        width: 800,
        height: 800,
        alt: "Ainur Rofiq - Software Developer",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ainur Rofiq | Software Developer Portfolio",
    description:
      "D4 Teknik Informatika student at Universitas Harkat Negeri, specializing in Backend Development, REST APIs, Database Architecture, and Mobile Application Development.",
    images: ["/Profile.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme') || 'system';
                  var isDark = saved === 'dark' || (saved === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
