// src/components/QuickLinksSection.tsx

import React from 'react';

interface LinkGroup {
  title: string;
  links: { label: string; href: string }[];
  showMore?: boolean;
}

const linkGroups: LinkGroup[] = [
  {
    title: "Top Locations",
    links: [
      { label: "Nairobi", href: "/locations/nairobi" },
      { label: "Kiambu", href: "/locations/kiambu" },
      { label: "Mombasa", href: "/locations/mombasa" },
      { label: "Ngong", href: "/locations/ngong" },
      { label: "Kiserian", href: "/locations/kiserian" },
      { label: "Malindi", href: "/locations/malindi" },
    ],
    showMore: true,
  },
  {
    title: "Trending Searches",
    links: [
      { label: "Houses for rent", href: "/search?category=house" },
      { label: "Houses for rent in Nairobi", href: "/search?location=nairobi&category=house" },
      { label: "Apartments for rent", href: "/search?category=apartment" },
      { label: "Apartments for rent in Nairobi", href: "/search?location=nairobi&category=apartment" },
      { label: "Apartments for rent in Mombasa", href: "/search?location=mombasa&category=apartment" },
      { label: "Townhouse for rent", href: "/search?category=townhouse" },
    ],
    showMore: true,
  },
  {
    title: "By property category",
    links: [
      { label: "Apartment", href: "/categories/apartment" },
      { label: "House", href: "/categories/house" },
      { label: "Townhouse", href: "/categories/townhouse" },
      { label: "Duplex", href: "/categories/duplex" },
      { label: "Penthouse", href: "/categories/penthouse" },
      { label: "Bungalow", href: "/categories/bungalow" },
    ],
    showMore: true,
  },
  {
    title: "Regions",
    links: [
      { label: "Nairobi", href: "/regions/nairobi" },
      { label: "Thika", href: "/regions/thika" },
      { label: "Kitengela", href: "/regions/kitengela" },
      { label: "Ruiru", href: "/regions/ruiru" },
      { label: "Kiambu", href: "/regions/kiambu" },
      { label: "Kilimani", href: "/regions/kilimani" },
    ],
    showMore: true,
  },
];

const QuickLinksSection = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {linkGroups.map((group, index) => (
            <div key={index}>
              <h3 className="font-bold text-gray-800 mb-4">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-green-600 hover:text-green-800 text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              {group.showMore && (
                <button className="mt-3 text-xs font-medium text-gray-500 hover:text-gray-700">
                  SHOW MORE
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinksSection;