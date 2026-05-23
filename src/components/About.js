import { useContext } from "react";
import UserContext from "../utils/UserContext";

const About = () => {
  const { loggedInUser } = useContext(UserContext);

  const techStack = [
    { name: "React 18", desc: "UI library with hooks & context" },
    { name: "Redux Toolkit", desc: "Global state management for cart" },
    { name: "React Router v6", desc: "Client-side navigation" },
    { name: "Tailwind CSS", desc: "Utility-first styling" },
    { name: "Parcel", desc: "Zero-config bundler" },
    { name: "Vercel", desc: "Serverless deployment & API routes" },
  ];

  const features = [
    { icon: "🍔", title: "Restaurant Listing", desc: "Browse restaurants with real-time search and rating filters" },
    { icon: "📋", title: "Menu Browsing", desc: "Expandable category menus with item descriptions and prices" },
    { icon: "🛒", title: "Cart Management", desc: "Add items, view bill summary with GST and delivery charges" },
    { icon: "⚡", title: "Shimmer UI", desc: "Skeleton loading for smooth user experience" },
    { icon: "📡", title: "Offline Detection", desc: "Real-time online/offline status awareness" },
    { icon: "🔀", title: "Lazy Loading", desc: "Code splitting for faster initial page loads" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">About FoodOrder</h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          A modern food ordering platform inspired by Swiggy — browse restaurants, explore menus, and manage your cart seamlessly.
        </p>
        {loggedInUser && (
          <div className="mt-4 inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
            <span>👋</span> Welcome, {loggedInUser}!
          </div>
        )}
      </div>

      {/* Mission */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-2xl p-8 text-white mb-10">
        <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
        <p className="text-orange-50 leading-relaxed">
          To make food ordering fast, simple, and enjoyable. We connect people with the best local restaurants, offering a smooth experience from browsing to checkout.
        </p>
      </div>

      {/* Features */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-5">What's Built</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <div key={f.title} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl">{f.icon}</span>
              <h3 className="font-bold text-gray-800 mt-2 mb-1">{f.title}</h3>
              <p className="text-gray-500 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-5">Tech Stack</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {techStack.map((t) => (
            <div key={t.name} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
              <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 shrink-0" />
              <div>
                <p className="font-semibold text-gray-800 text-sm">{t.name}</p>
                <p className="text-gray-500 text-xs mt-0.5">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Developer */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-center gap-5">
        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-2xl shrink-0">
          👨‍💻
        </div>
        <div>
          <p className="text-xs text-gray-400 uppercase font-semibold tracking-wide">Developer</p>
          <h3 className="text-xl font-bold text-gray-900 mt-0.5">Sankha Subhra Moitra</h3>
          <p className="text-gray-500 text-sm mt-1">
            Full-stack developer passionate about building clean, user-friendly web applications.
          </p>
          <a
            href="https://github.com/sankha4567"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 mt-2 text-sm text-orange-500 font-medium hover:underline"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            github.com/sankha4567
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
