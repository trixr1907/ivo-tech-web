'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import TestError from '@/components/TestError';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Innovativ. Digital. Zukunftsorientiert.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Wir entwickeln maßgeschneiderte Technologielösungen für Ihren Erfolg
            </p>
            <div className="flex justify-center gap-4">
              <Link 
                href="/kontakt"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold animate-fade-in"
              >
                Kontakt aufnehmen
              </Link>
              <Link 
                href="/leistungen"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-colors font-semibold animate-fade-in delay-100"
              >
                Unsere Leistungen
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-100 rounded-full blur-3xl opacity-20" />
          <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-200 rounded-full blur-3xl opacity-20" />
        </div>
      </section>

      {/* Test Error Section */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Error Boundary Test</h2>
            <p className="text-gray-600 mb-6">Klicken Sie den Button, um die Error Boundary zu testen</p>
            <TestError />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Unsere Expertise</h2>
            <p className="text-xl text-gray-600">Wir bieten innovative Lösungen in verschiedenen Bereichen</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    title: 'Webentwicklung',
    description: 'Moderne und responsive Webseiten mit neuesten Technologien',
    icon: '🌐',
  },
  {
    title: 'App-Entwicklung',
    description: 'Native und Cross-Platform Apps für iOS und Android',
    icon: '📱',
  },
  {
    title: 'Digitale Transformation',
    description: 'Strategische Beratung und Umsetzung für Ihr digitales Wachstum',
    icon: '🚀',
  },
];
