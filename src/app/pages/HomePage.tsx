import { Link } from 'react-router';
import { ArrowDown } from 'lucide-react';

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
            Creare Ciò Che Conta
          </h1>

          <p className="text-lg md:text-xl tracking-[0.05em] text-muted-foreground max-w-2xl mx-auto">
            Creating what truly matters, solving real problems, and building ventures with purpose.
          </p>

          <div className="pt-8">
            <Link
              to="/ventures"
              className="inline-flex flex-col items-center gap-4 group"
            >
              <ArrowDown className="w-12 h-12 animate-bounce" />
              <span className="text-sm underline group-hover:no-underline">
                Esplorare
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Chi Siamo Section */}
      <section className="py-24 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-5xl md:text-6xl mb-6">Chi Siamo</h2>
              <div className="w-full h-px bg-border" />
            </div>

            <div className="space-y-6">
              <p className="text-base leading-relaxed">
                Corsi Enterprises is a sister-built venture shaped by the grit and imagination of our Italian immigrant family. We grew up believing that if something doesn't exist, you create it—and if something isn't working, you fix it.
              </p>

              <p className="text-base leading-relaxed">
                Corsi Enterprises is our home for creating what matters—with passion, intuition, and a vision always focused on the future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
