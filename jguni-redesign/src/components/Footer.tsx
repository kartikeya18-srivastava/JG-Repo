"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    {
      title: "Discover",
      items: [
        { name: "Vision", href: "#about" },
        { name: "Our DNA", href: "#about" },
        { name: "Why Us", href: "#about" },
        { name: "Faculty", href: "#about" },
        { name: "Our Leaders", href: "#about" },
      ],
    },
    {
      title: "Programmes",
      items: [
        { name: "Undergraduate", href: "#programs" },
        { name: "Postgraduate", href: "#programs" },
        { name: "Doctoral (Ph.D)", href: "#programs" },
        { name: "NEP 2020", href: "#programs" },
      ],
    },
    {
      title: "Quick Links",
      items: [
        { name: "Campus", href: "#campus" },
        { name: "Collaborations", href: "#about" },
        { name: "Career", href: "#contact" },
        { name: "Awards", href: "#about" },
        { name: "FAQs", href: "#contact" },
      ],
    },
  ];

  return (
    <footer className="bg-slate-50 border-t border-slate-200/60 pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-6 block">
              <img 
                src="https://jguni.in/images/jg-logo.svg" 
                alt="JG University Logo" 
                className="h-12 w-auto"
              />
            </a>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              A UGC-approved, tech-driven university empowering students to explore and gain wisdom beyond the pages of books.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/JGUnIIndia" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-200/50 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-300">
                <span className="sr-only">Facebook</span>
                <i className="fab fa-facebook-f text-xs"></i>
              </a>
              <a href="https://www.instagram.com/jguniversity" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-200/50 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors duration-300">
                <span className="sr-only">Instagram</span>
                <i className="fab fa-instagram text-xs"></i>
              </a>
              <a href="https://twitter.com/_JGUniversity" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-200/50 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors duration-300">
                <span className="sr-only">Twitter</span>
                <i className="fab fa-twitter text-xs"></i>
              </a>
              <a href="https://www.linkedin.com/company/99373780" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-200/50 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors duration-300">
                <span className="sr-only">LinkedIn</span>
                <i className="fab fa-linkedin-in text-xs"></i>
              </a>
            </div>
          </div>

          {links.map((col, idx) => (
            <div key={idx}>
              <h4 className="font-bold text-slate-900 text-sm tracking-widest uppercase mb-6">{col.title}</h4>
              <ul className="space-y-4">
                {col.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <a href={item.href} className="text-slate-600 hover:text-blue-600 text-sm transition-colors duration-300">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-200/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} JG University. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">
            Sponsored by <span className="font-semibold text-slate-700">Asia Charitable Trust</span> (Est. 1965).
          </p>
        </div>
      </div>
    </footer>
  );
}
