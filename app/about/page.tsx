'use client';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-grow mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About AI Emoji Maker
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Transform your ideas into unique emojis using artificial intelligence
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <FeatureCard
              title="AI-Powered Creation"
              description="Utilizing advanced machine learning algorithms to generate unique and expressive emojis from your text descriptions."
              icon="🤖"
            />
            <FeatureCard
              title="Instant Generation"
              description="Get your custom emoji in seconds, with high-quality results that capture your creative vision."
              icon="⚡"
            />
            <FeatureCard
              title="Endless Possibilities"
              description="Create an infinite variety of emotions, characters, and expressions with simple text prompts."
              icon="✨"
            />
          </div>

          {/* How It Works Section */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Step
                number="1"
                title="Enter Your Prompt"
                description="Describe the emoji you want to create using natural language."
              />
              <Step
                number="2"
                title="AI Processing"
                description="Our AI system analyzes your description and generates the perfect emoji."
              />
              <Step
                number="3"
                title="Download & Use"
                description="Download your custom emoji and use it anywhere you like!"
              />
            </div>
          </div>

          {/* Technology Stack */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              Powered By
            </h2>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <TechBadge name="Next.js" />
              <TechBadge name="OpenAI" />
              <TechBadge name="Tailwind CSS" />
              <TechBadge name="TypeScript" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Component for feature cards
function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

// Component for steps
function Step({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

// Component for technology badges
function TechBadge({ name }: { name: string }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-gray-700 dark:text-gray-300">
      {name}
    </div>
  );
}
