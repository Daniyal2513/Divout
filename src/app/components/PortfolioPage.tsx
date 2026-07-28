import PortfolioHoverCard from './PortfolioHoverCard';

// Yahan apne clients ki list add karein
const clients = [
  {
    image: "/images/WebLogo.png",
    siteName: "clientwebsite.com",
    imageHeight: 2400,
  },
//   {
//     image: "/images/client2-fullpage.png",
//     siteName: "clientwebsite2.com",
//     imageHeight: 3000,
//   },
  // ... baaki clients yahan add karte jayein
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-white text-4xl font-bold mb-12 text-center">
          Our Portfolio
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, i) => (
            <PortfolioHoverCard key={i} {...client} />
          ))}
        </div>
      </div>
    </div>
  );
}