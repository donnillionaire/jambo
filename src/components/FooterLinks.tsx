// src/components/FooterLinks.tsx

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
      { label: "Nairobi", href: "#" },
      { label: "Kiambu", href: "#" },
      { label: "Mombasa", href: "#" },
      { label: "Ngong", href: "#" },
      { label: "Kiserian", href: "#" },
      { label: "Malindi", href: "#" },
    ],
    showMore: true,
  },
  {
    title: "Trending Searches",
    links: [
      { label: "Houses for rent", href: "#" },
      { label: "Houses for rent in Nairobi", href: "#" },
      { label: "Apartments for rent", href: "#" },
      { label: "Apartments for rent in Nairobi", href: "#" },
      { label: "Apartments for rent in Mombasa", href: "#" },
      { label: "Townhouse for rent", href: "#" },
    ],
    showMore: true,
  },
  {
    title: "By property category",
    links: [
      { label: "Apartment", href: "#" },
      { label: "House", href: "#" },
      { label: "Townhouse", href: "#" },
      { label: "Duplex", href: "#" },
      { label: "Penthouse", href: "#" },
      { label: "Bungalow", href: "#" },
    ],
    showMore: true,
  },
  {
    title: "Regions",
    links: [
      { label: "Nairobi", href: "#" },
      { label: "Thika", href: "#" },
      { label: "Kitengela", href: "#" },
      { label: "Ruiru", href: "#" },
      { label: "Kiambu", href: "#" },
      { label: "Kilimani", href: "#" },
    ],
    showMore: true,
  },
];



const FooterLinks = () => {
  return (
    <section className="py-8 px-4 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {linkGroups.map((group, index) => (
          <div key={index}>
            <h3 className="font-semibold text-gray-800 mb-4">{group.title}</h3>
            <ul className="space-y-2">
              {group.links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-[#082567] hover:text-green-700 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            {group.showMore && (
              <button className="mt-3 text-xs text-gray-500 hover:text-gray-700 font-medium">
                SHOW MORE
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FooterLinks;