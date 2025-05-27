// next.config.js
const nextConfig = {
  i18n: {
    locales: ['en', 'ar', 'yo', 'ha', 'ig'],
    defaultLocale: 'en',
  },
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
};

module.exports = nextConfig;


// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};


// styles/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;


// pages/_app.js
import '@/styles/globals.css';
import { useRouter } from 'next/router';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  return (
    <>
      <Head>
        <title>The Fountain Al-Manba Media</title>
      </Head>
      <Component {...pageProps} locale={locale} />
    </>
  );
}

export default MyApp;


// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="p-4 shadow-md flex justify-between items-center bg-white dark:bg-gray-800">
        <h1 className="text-xl font-bold">The Fountain Al-Manba Media</h1>
        <nav className="space-x-4">
          <Link href="/articles">Articles</Link>
          <Link href="/videos">Videos</Link>
          <Link href="/audio">Audio</Link>
          <Link href="/events">Events</Link>
          <Link href="/about">About</Link>
        </nav>
      </header>
      <main className="p-4">
        <h2 className="text-2xl font-semibold mb-4">Welcome to Al-Manba</h2>
        <p className="mb-4">Illuminating Truth, Uniting Communities.</p>
      </main>
    </div>
  );
}
