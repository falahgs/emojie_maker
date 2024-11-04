'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Exploring the intersection of AI and creative expression
            </p>
          </div>

          {/* Featured Project */}
          <div className="mb-20">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="space-y-6">
                  <div className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-semibold">
                    Featured Project
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    AI Emoji Generator
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Create custom, unique emojis using advanced AI technology. Transform your ideas into expressive emoji art with just a text description.
                  </p>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Key Features:</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li className="flex items-center">
                        <span className="mr-2">✨</span>
                        AI-powered emoji generation
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">🎨</span>
                        Custom style options
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">⚡</span>
                        Real-time preview
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">💾</span>
                        Easy export and sharing
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Link 
                      href="/"
                      className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                    >
                      Try It Now
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                    <a 
                      href="https://github.com/yourusername/emoji-generator"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-medium rounded-lg transition-colors"
                    >
                      View Source
                      <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src="/project-preview.png" // Add your project preview image
                    alt="AI Emoji Generator Preview"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Projects */}
          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Upcoming Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <UpcomingProjectCard
                title="AI Sticker Creator"
                description="Create custom sticker packs using AI-generated artwork. Perfect for messaging apps and social media."
                status="In Development"
                eta="Q3 2024"
              />
              <UpcomingProjectCard
                title="Emoji Animation Studio"
                description="Bring your emojis to life with AI-powered animations. Create dynamic expressions for your digital content."
                status="Planning"
                eta="Q4 2024"
              />
              <UpcomingProjectCard
                title="Emoji Style Transfer"
                description="Transform existing emojis into different artistic styles using AI. From pixel art to watercolor."
                status="Concept"
                eta="2025"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function UpcomingProjectCard({ 
  title, 
  description, 
  status, 
  eta 
}: { 
  title: string; 
  description: string; 
  status: string; 
  eta: string; 
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
      <div className="space-y-4">
        <div className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
          {status}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Expected: {eta}
        </div>
      </div>
    </div>
  );
} 