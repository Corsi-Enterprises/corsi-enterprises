import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const ventures = [
  {
    name: 'EarthABC',
    description: 'White-label software that empowers consulting firms to deliver smarter, faster, and more scalable solutions. A.I. OS applications to compete in climate, ESG, and sustainability consulting.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=400&fit=crop',
    link: 'https://earthabc.com/',
    hasLink: true
  },
  {
    name: 'PetChain',
    description: 'In Venture Studio',
    image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=400&h=400&fit=crop',
    hasLink: false
  },
  {
    name: 'Neuro In A Flash',
    description: 'Study Material For Electroneurodiagnostic Professionals. We provide electroneurodiagnostic materials that simplify tough concepts, organizes the "chaos", and gives NDX professionals additional learning options.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop',
    link: 'https://neuroinaflash.com/',
    hasLink: true
  },
  {
    name: 'Howling for Help',
    description: 'In Production: A Documentary Uncovering America\'s Animal Crisis',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=400&fit=crop',
    link: 'https://www.howlingforhelp.com/',
    hasLink: true
  }
];

export function VenturesPage() {
  return (
    <div className="min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-6">
          <h1 className="text-5xl md:text-6xl">Ventures</h1>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            We build products designed to plug in, power up, and create value the moment you acquire them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mt-20">
          {ventures.map((venture) => (
            <div key={venture.name} className="text-center space-y-4">
              {venture.hasLink ? (
                <a
                  href={venture.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="block group"
                >
                  <ImageWithFallback
                    src={venture.image}
                    alt={venture.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto group-hover:opacity-80 transition-opacity"
                  />
                </a>
              ) : (
                <div className="w-32 h-32 rounded-full mx-auto overflow-hidden">
                  <ImageWithFallback
                    src={venture.image}
                    alt={venture.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <h3 className="text-xl">{venture.name}</h3>

              <p className="text-base leading-relaxed text-muted-foreground">
                {venture.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
