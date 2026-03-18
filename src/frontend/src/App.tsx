import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Crown,
  Facebook,
  Gem,
  Hand,
  Instagram,
  Loader2,
  Menu,
  ShoppingBag,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useId, useState } from "react";
import { SiPinterest } from "react-icons/si";
import { Toaster, toast } from "sonner";
import {
  useSubmitContactForm,
  useSubscribeNewsletter,
} from "./hooks/useQueries";

/* ── Inline SVG decorative elements ─────────────────────── */

function OrnamentalDivider({ light = false }: { light?: boolean }) {
  const color = light ? "#A67C2C" : "#C9A24A";
  return (
    <div
      className="flex items-center justify-center gap-3 my-3"
      aria-hidden="true"
    >
      <svg
        width="80"
        height="12"
        viewBox="0 0 80 12"
        fill="none"
        aria-hidden="true"
      >
        <line x1="0" y1="6" x2="28" y2="6" stroke={color} strokeWidth="1" />
        <path d="M32 6 L36 2 L40 6 L36 10 Z" fill={color} />
        <path d="M40 6 L44 2 L48 6 L44 10 Z" fill={color} opacity="0.6" />
        <line x1="52" y1="6" x2="80" y2="6" stroke={color} strokeWidth="1" />
      </svg>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill={color}
        aria-hidden="true"
      >
        <path d="M10 1 L12 7 L18 7 L13 11 L15 17 L10 13 L5 17 L7 11 L2 7 L8 7 Z" />
      </svg>
      <svg
        width="80"
        height="12"
        viewBox="0 0 80 12"
        fill="none"
        aria-hidden="true"
      >
        <line x1="0" y1="6" x2="28" y2="6" stroke={color} strokeWidth="1" />
        <path d="M32 6 L36 2 L40 6 L36 10 Z" fill={color} opacity="0.6" />
        <path d="M40 6 L44 2 L48 6 L44 10 Z" fill={color} />
        <line x1="52" y1="6" x2="80" y2="6" stroke={color} strokeWidth="1" />
      </svg>
    </div>
  );
}

function PaisleyPattern({ opacity = 0.07 }: { opacity?: number }) {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern
          id="paisley"
          x="0"
          y="0"
          width="120"
          height="120"
          patternUnits="userSpaceOnUse"
        >
          <g fill="none" opacity={opacity}>
            <path
              d="M60 10 C35 10,15 30,20 55 C25 80,50 90,60 85 C70 80,80 65,75 50 C70 35,55 25,60 10 Z"
              fill="#C9A24A"
            />
            <circle cx="60" cy="45" r="8" fill="#C9A24A" />
            <path
              d="M42 52 Q60 35 78 52"
              stroke="#C9A24A"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M30 70 Q60 55 90 70"
              stroke="#C9A24A"
              strokeWidth="1"
              fill="none"
            />
            <circle cx="30" cy="30" r="3" fill="#C9A24A" />
            <circle cx="90" cy="90" r="3" fill="#C9A24A" />
            <circle cx="90" cy="30" r="2" fill="#C9A24A" />
            <circle cx="30" cy="90" r="2" fill="#C9A24A" />
            <path d="M15 60 Q20 50 30 55 Q20 65 15 60 Z" fill="#C9A24A" />
            <path d="M90 60 Q95 50 105 55 Q95 65 90 60 Z" fill="#C9A24A" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#paisley)" />
    </svg>
  );
}

function MandalaCorner() {
  return (
    <svg
      aria-hidden="true"
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      className="opacity-20"
    >
      <circle
        cx="0"
        cy="0"
        r="100"
        stroke="#C9A24A"
        strokeWidth="0.8"
        fill="none"
      />
      <circle
        cx="0"
        cy="0"
        r="80"
        stroke="#C9A24A"
        strokeWidth="0.8"
        fill="none"
      />
      <circle
        cx="0"
        cy="0"
        r="60"
        stroke="#C9A24A"
        strokeWidth="0.8"
        fill="none"
      />
      <path
        d="M0 0 L120 0 L120 4 L4 4 L4 120 L0 120 Z"
        fill="#C9A24A"
        opacity="0.3"
      />
      <path
        d="M20 0 L20 20 L0 20"
        stroke="#C9A24A"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M40 0 L40 10 Q30 10 30 20 L0 20"
        stroke="#C9A24A"
        strokeWidth="0.6"
        fill="none"
      />
    </svg>
  );
}

/* ── Header ──────────────────────────────────────────────── */

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Shop", href: "#products" },
    { label: "Collections", href: "#products" },
    { label: "About", href: "#craftsmanship" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-[0_2px_30px_rgba(0,0,0,0.4)]" : ""
      }`}
      style={{ backgroundColor: "#062830" }}
    >
      <div
        className="h-0.5 w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, #C9A24A, #D9B15A, #C9A24A, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="#home"
            className="flex items-center gap-3"
            data-ocid="nav.link"
          >
            <img
              src="/assets/generated/sukh-dastak-logo-transparent.dim_400x400.png"
              alt="Sukh Dastak Logo"
              className="h-14 w-14 object-contain"
            />
            <div>
              <div
                className="font-cinzel font-bold text-xl tracking-[0.2em] leading-tight"
                style={{ color: "#D9B15A" }}
              >
                SUKH DASTAK
              </div>
              <div
                className="font-playfair text-xs tracking-[0.15em] italic"
                style={{ color: "#C9A24A", opacity: 0.85 }}
              >
                Royal Indian Gifting
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-cinzel text-sm tracking-widest transition-colors duration-200 hover:text-[#D9B15A]"
                style={{ color: "#F2E7D2" }}
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#products"
              className="flex items-center gap-2 px-4 py-2 font-cinzel text-sm tracking-widest transition-all duration-200 hover:shadow-gold"
              style={{
                background: "linear-gradient(135deg, #D9B15A, #A67C2C)",
                color: "#062830",
                fontWeight: 700,
              }}
              data-ocid="nav.primary_button"
            >
              <ShoppingBag size={15} />
              Shop Now
            </a>
          </nav>

          <button
            type="button"
            className="lg:hidden p-2"
            style={{ color: "#D9B15A" }}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden lg:hidden border-t"
            style={{ backgroundColor: "#062830", borderColor: "#0B4D62" }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-cinzel text-sm tracking-widest py-2 border-b"
                  style={{ color: "#F2E7D2", borderColor: "#0B4D62" }}
                  onClick={() => setMobileOpen(false)}
                  data-ocid="nav.link"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, #0B4D62, #A67C2C 30%, #0B4D62, transparent)",
        }}
      />
    </header>
  );
}

/* ── Hero Section ────────────────────────────────────────── */

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-stretch pt-20"
    >
      <div className="flex flex-col lg:flex-row w-full">
        <motion.div
          className="relative lg:w-[55%] min-h-[50vh] lg:min-h-screen overflow-hidden"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <img
            src="/assets/generated/resin-hero.dim_1200x700.jpg"
            alt="Sukh Dastak handcrafted resin gifting"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-y-0 right-0 w-24 pointer-events-none hidden lg:block"
            style={{
              background: "linear-gradient(to right, transparent, #062830)",
            }}
          />
          <div className="absolute inset-0 bg-black/30 lg:bg-transparent" />
        </motion.div>

        <div
          className="relative lg:w-[45%] flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#062830", minHeight: "60vh" }}
        >
          <PaisleyPattern opacity={0.09} />

          <div className="absolute top-0 left-0 pointer-events-none">
            <MandalaCorner />
          </div>
          <div className="absolute bottom-0 right-0 pointer-events-none rotate-180">
            <MandalaCorner />
          </div>

          <motion.div
            className="relative z-10 px-10 lg:px-16 py-16 text-center max-w-lg mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <div className="flex justify-center mb-6">
              <svg
                aria-hidden="true"
                width="60"
                height="40"
                viewBox="0 0 60 40"
                fill="none"
              >
                <path
                  d="M5 35 L5 20 L15 5 L30 18 L45 5 L55 20 L55 35 Z"
                  fill="#C9A24A"
                  opacity="0.9"
                />
                <rect
                  x="3"
                  y="33"
                  width="54"
                  height="5"
                  rx="1"
                  fill="#C9A24A"
                />
                <circle cx="30" cy="18" r="4" fill="#D9B15A" />
                <circle cx="5" cy="20" r="3" fill="#D9B15A" />
                <circle cx="55" cy="20" r="3" fill="#D9B15A" />
              </svg>
            </div>

            <p
              className="font-cinzel text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: "#C9A24A" }}
            >
              Handcrafted with Love
            </p>

            <h1
              className="font-cinzel font-bold text-4xl lg:text-5xl leading-tight mb-4"
              style={{ color: "#D7B25A", letterSpacing: "0.05em" }}
            >
              Where Art
              <br />
              <span style={{ color: "#F2E7D2" }}>Meets Emotion</span>
            </h1>

            <OrnamentalDivider />

            <p
              className="font-playfair text-base lg:text-lg leading-relaxed mt-4 mb-8"
              style={{ color: "#F2E7D2", opacity: 0.88 }}
            >
              Each piece is a story — of patience, pigment, and passion. Our
              handcrafted resin art gifts carry the soul of India in every swirl
              and shimmer.
            </p>

            <a
              href="#products"
              className="inline-block font-cinzel font-bold text-sm tracking-[0.2em] px-10 py-4 transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #D9B15A, #A67C2C)",
                color: "#062830",
              }}
              data-ocid="hero.primary_button"
            >
              EXPLORE COLLECTION
            </a>

            <div className="mt-8 flex justify-center gap-8">
              {[
                { num: "500+", label: "Happy Customers" },
                { num: "100%", label: "Handcrafted" },
                { num: "50+", label: "Unique Designs" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="font-cinzel font-bold text-lg"
                    style={{ color: "#D9B15A" }}
                  >
                    {stat.num}
                  </div>
                  <div
                    className="font-playfair text-xs"
                    style={{ color: "#C9A24A", opacity: 0.8 }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Craftsmanship Strip ─────────────────────────────────── */

function CraftsmanshipStrip() {
  const features = [
    {
      icon: <Hand size={32} strokeWidth={1.5} />,
      title: "Handcrafted with Love",
      desc: "Every piece is painstakingly crafted by skilled artisans who pour their heart into every layer of resin.",
    },
    {
      icon: <Gem size={32} strokeWidth={1.5} />,
      title: "Unique Resin Designs",
      desc: "No two pieces are alike. Each creation is one-of-a-kind, infused with natural pigments, flowers, and gold flakes.",
    },
    {
      icon: <Crown size={32} strokeWidth={1.5} />,
      title: "Royal Aesthetics",
      desc: "Inspired by the grandeur of Indian heritage — Madhubani, Warli, paisley, and Mughal motifs reimagined in resin.",
    },
  ];

  return (
    <section
      id="craftsmanship"
      className="relative py-20 overflow-hidden"
      style={{ backgroundColor: "#F6F1E6" }}
    >
      <div className="absolute top-0 left-0 opacity-30" aria-hidden="true">
        <svg width="140" height="140" viewBox="0 0 140 140" aria-hidden="true">
          <path
            d="M0 0 Q70 0 70 70 Q70 0 140 0"
            fill="none"
            stroke="#A67C2C"
            strokeWidth="1.5"
          />
          <path
            d="M0 0 Q50 0 50 50 Q50 0 100 0"
            fill="none"
            stroke="#A67C2C"
            strokeWidth="0.8"
          />
          <circle cx="0" cy="0" r="8" fill="#C9A24A" opacity="0.4" />
          <circle
            cx="0"
            cy="0"
            r="20"
            fill="none"
            stroke="#C9A24A"
            strokeWidth="0.8"
          />
        </svg>
      </div>
      <div
        className="absolute top-0 right-0 opacity-30 scale-x-[-1]"
        aria-hidden="true"
      >
        <svg width="140" height="140" viewBox="0 0 140 140" aria-hidden="true">
          <path
            d="M0 0 Q70 0 70 70 Q70 0 140 0"
            fill="none"
            stroke="#A67C2C"
            strokeWidth="1.5"
          />
          <circle cx="0" cy="0" r="8" fill="#C9A24A" opacity="0.4" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="font-cinzel text-xs tracking-[0.3em] uppercase mb-2"
            style={{ color: "#A67C2C" }}
          >
            The Sukh Dastak Promise
          </p>
          <h2
            className="font-cinzel font-bold text-3xl lg:text-4xl tracking-wider mb-2"
            style={{ color: "#062830" }}
          >
            OUR CRAFTSMANSHIP
          </h2>
          <OrnamentalDivider light />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="text-center p-8 relative"
              style={{
                borderTop: "2px solid #C9A24A",
                borderBottom: "1px solid rgba(166,124,44,0.3)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              <div
                className="flex justify-center mb-5"
                style={{ color: "#A67C2C" }}
              >
                {f.icon}
              </div>
              <h3
                className="font-cinzel font-semibold text-lg tracking-wider mb-3"
                style={{ color: "#062830" }}
              >
                {f.title}
              </h3>
              <p
                className="font-playfair text-sm leading-relaxed"
                style={{ color: "#073040" }}
              >
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Products Section ────────────────────────────────────── */

const PRODUCTS = [
  {
    id: 1,
    name: "Royal Resin Tray",
    desc: "Peacock & Paisley motif",
    price: "₹2,499",
    img: "/assets/generated/product-tray.dim_600x600.jpg",
  },
  {
    id: 2,
    name: "Madhubani Coaster Set",
    desc: "Folk art, set of 4",
    price: "₹1,299",
    img: "/assets/generated/product-coasters.dim_600x600.jpg",
  },
  {
    id: 3,
    name: "Treasure Jewelry Box",
    desc: "Floral mandala resin lid",
    price: "₹3,199",
    img: "/assets/generated/product-jewel-box.dim_600x600.jpg",
  },
  {
    id: 4,
    name: "Peacock Wall Clock",
    desc: "Handpainted resin dial",
    price: "₹2,899",
    img: "/assets/generated/product-clock.dim_600x600.jpg",
  },
];

function ProductsSection() {
  return (
    <section
      id="products"
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: "#062830" }}
    >
      <PaisleyPattern opacity={0.06} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="font-cinzel text-xs tracking-[0.3em] uppercase mb-2"
            style={{ color: "#C9A24A" }}
          >
            Crafted for the Discerning Soul
          </p>
          <h2
            className="font-cinzel font-bold text-3xl lg:text-4xl tracking-wider mb-1"
            style={{ color: "#D7B25A" }}
          >
            EXCLUSIVE RESIN CREATIONS
          </h2>
          <OrnamentalDivider />
        </motion.div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          data-ocid="products.list"
        >
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.id}
              className="royal-card group cursor-pointer overflow-hidden"
              style={{ backgroundColor: "#0A3A48" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              data-ocid={`products.item.${i + 1}`}
            >
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "1" }}
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, transparent 40%, rgba(201,162,74,0.15) 60%, transparent 80%)",
                  }}
                />
              </div>

              <div className="p-5 relative z-10">
                <div
                  className="w-8 h-px mb-3"
                  style={{
                    background:
                      "linear-gradient(to right, #C9A24A, transparent)",
                  }}
                />
                <h3
                  className="font-cinzel font-semibold text-base tracking-wide mb-1 leading-snug"
                  style={{ color: "#D7B25A" }}
                >
                  &ldquo;{product.name}&rdquo;
                </h3>
                <p
                  className="font-playfair italic text-xs mb-3"
                  style={{ color: "#C9A24A", opacity: 0.75 }}
                >
                  {product.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span
                    className="font-cinzel font-bold text-lg"
                    style={{ color: "#F2E7D2" }}
                  >
                    {product.price}
                  </span>
                  <button
                    type="button"
                    className="font-cinzel text-xs tracking-widest px-4 py-2 transition-all duration-200"
                    style={{
                      border: "1px solid #C9A24A",
                      color: "#C9A24A",
                      background: "transparent",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "linear-gradient(135deg, #D9B15A, #A67C2C)";
                      (e.currentTarget as HTMLButtonElement).style.color =
                        "#062830";
                      (e.currentTarget as HTMLButtonElement).style.borderColor =
                        "#D9B15A";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "transparent";
                      (e.currentTarget as HTMLButtonElement).style.color =
                        "#C9A24A";
                      (e.currentTarget as HTMLButtonElement).style.borderColor =
                        "#C9A24A";
                    }}
                    data-ocid={`products.edit_button.${i + 1}`}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="#contact"
            className="inline-block font-cinzel font-bold text-sm tracking-[0.2em] px-12 py-4 transition-all duration-300"
            style={{ border: "1px solid #C9A24A", color: "#D7B25A" }}
            data-ocid="products.primary_button"
          >
            VIEW ALL CREATIONS
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Customized Gifts + Contact Split ────────────────────── */

function ContactSection() {
  const nameId = useId();
  const emailId = useId();
  const msgId = useId();
  const nlEmailId = useId();

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const submitContact = useSubmitContactForm();
  const subscribeNewsletter = useSubscribeNewsletter();

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await submitContact.mutateAsync(contactForm);
      toast.success("Your message has been sent! We'll reach out soon.");
      setContactForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await subscribeNewsletter.mutateAsync(newsletterEmail);
      toast.success("You're now part of the Sukh Dastak royal family!");
      setNewsletterEmail("");
    } catch {
      toast.error("Subscription failed. Please try again.");
    }
  };

  const inputStyle = {
    backgroundColor: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(201,162,74,0.4)",
    color: "#F2E7D2",
    fontFamily: "'Playfair Display', serif",
  };

  return (
    <section id="contact" className="relative">
      <div className="flex flex-col lg:flex-row">
        {/* Left: Customized Gifts */}
        <div
          className="relative lg:w-1/2 min-h-[60vh] flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#0A3A48" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage:
                "url('/assets/generated/resin-hero.dim_1200x700.jpg')",
            }}
          />
          <PaisleyPattern opacity={0.08} />

          <motion.div
            className="relative z-10 px-10 lg:px-16 py-20 max-w-lg"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p
              className="font-cinzel text-xs tracking-[0.3em] uppercase mb-3"
              style={{ color: "#C9A24A" }}
            >
              Made Just for You
            </p>
            <h2
              className="font-cinzel font-bold text-3xl lg:text-4xl tracking-wider mb-4"
              style={{ color: "#D7B25A" }}
            >
              CUSTOMIZED
              <br />
              <span style={{ color: "#F2E7D2" }}>GIFTS</span>
            </h2>
            <OrnamentalDivider />
            <p
              className="font-playfair text-base leading-relaxed mt-5 mb-8"
              style={{ color: "#F2E7D2", opacity: 0.88 }}
            >
              From weddings to housewarmings, birthdays to corporate gifting —
              we craft bespoke resin art pieces personalized with names, dates,
              and messages. A gift that will be cherished for generations.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Name & date engravings in gold",
                "Custom color palettes & motifs",
                "Corporate bulk orders welcome",
                "Pan-India delivery within 7 days",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <svg
                    aria-hidden="true"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 1 L9.5 5.5 L14 5.5 L10.5 8.5 L12 13 L8 10 L4 13 L5.5 8.5 L2 5.5 L6.5 5.5 Z"
                      fill="#C9A24A"
                    />
                  </svg>
                  <span
                    className="font-playfair text-sm"
                    style={{ color: "#F2E7D2", opacity: 0.85 }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-block font-cinzel font-bold text-sm tracking-[0.2em] px-10 py-4 transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #D9B15A, #A67C2C)",
                color: "#062830",
              }}
              data-ocid="gifts.primary_button"
            >
              REQUEST CUSTOM ORDER
            </a>
          </motion.div>
        </div>

        {/* Right: Contact form */}
        <div
          className="lg:w-1/2 py-20 px-10 lg:px-16 relative overflow-hidden"
          style={{ backgroundColor: "#062830" }}
        >
          <PaisleyPattern opacity={0.06} />
          <motion.div
            className="relative z-10 max-w-lg mx-auto"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p
              className="font-cinzel text-xs tracking-[0.3em] uppercase mb-3"
              style={{ color: "#C9A24A" }}
            >
              Write to Us
            </p>
            <h2
              className="font-cinzel font-bold text-3xl tracking-wider mb-2"
              style={{ color: "#D7B25A" }}
            >
              GET IN TOUCH
            </h2>
            <OrnamentalDivider />

            <form onSubmit={handleContactSubmit} className="space-y-4 mt-6">
              <div>
                <label
                  htmlFor={nameId}
                  className="font-cinzel text-xs tracking-widest mb-2 block"
                  style={{ color: "#C9A24A" }}
                >
                  YOUR NAME
                </label>
                <Input
                  id={nameId}
                  value={contactForm.name}
                  onChange={(e) =>
                    setContactForm((p) => ({ ...p, name: e.target.value }))
                  }
                  placeholder="Enter your name"
                  required
                  style={inputStyle}
                  className="placeholder:text-[#1E6A7A]"
                  data-ocid="contact.input"
                />
              </div>
              <div>
                <label
                  htmlFor={emailId}
                  className="font-cinzel text-xs tracking-widest mb-2 block"
                  style={{ color: "#C9A24A" }}
                >
                  EMAIL ADDRESS
                </label>
                <Input
                  id={emailId}
                  type="email"
                  value={contactForm.email}
                  onChange={(e) =>
                    setContactForm((p) => ({ ...p, email: e.target.value }))
                  }
                  placeholder="your@email.com"
                  required
                  style={inputStyle}
                  className="placeholder:text-[#1E6A7A]"
                  data-ocid="contact.input"
                />
              </div>
              <div>
                <label
                  htmlFor={msgId}
                  className="font-cinzel text-xs tracking-widest mb-2 block"
                  style={{ color: "#C9A24A" }}
                >
                  YOUR MESSAGE
                </label>
                <Textarea
                  id={msgId}
                  value={contactForm.message}
                  onChange={(e) =>
                    setContactForm((p) => ({ ...p, message: e.target.value }))
                  }
                  placeholder="Tell us about your gifting needs…"
                  required
                  rows={4}
                  style={inputStyle}
                  className="placeholder:text-[#1E6A7A] resize-none"
                  data-ocid="contact.textarea"
                />
              </div>
              <Button
                type="submit"
                disabled={submitContact.isPending}
                className="w-full font-cinzel font-bold tracking-[0.2em] text-sm py-4 h-auto transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #D9B15A, #A67C2C)",
                  color: "#062830",
                  border: "none",
                }}
                data-ocid="contact.submit_button"
              >
                {submitContact.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    SENDING…
                  </>
                ) : (
                  "SEND MESSAGE"
                )}
              </Button>
              {submitContact.isSuccess && (
                <p
                  className="text-center font-playfair text-sm"
                  style={{ color: "#C9A24A" }}
                  data-ocid="contact.success_state"
                >
                  ✦ Message received. We'll be in touch soon!
                </p>
              )}
            </form>

            <div
              className="mt-10 pt-8"
              style={{ borderTop: "1px solid rgba(201,162,74,0.3)" }}
            >
              <h3
                className="font-cinzel font-semibold text-lg tracking-wider mb-2"
                style={{ color: "#D7B25A" }}
              >
                JOIN THE ROYAL CIRCLE
              </h3>
              <p
                className="font-playfair text-sm mb-4"
                style={{ color: "#F2E7D2", opacity: 0.7 }}
              >
                Be the first to know about new collections, festive offers, and
                exclusive launches.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <label htmlFor={nlEmailId} className="sr-only">
                  Email for newsletter
                </label>
                <Input
                  id={nlEmailId}
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  style={inputStyle}
                  className="flex-1 placeholder:text-[#1E6A7A]"
                  data-ocid="newsletter.input"
                />
                <Button
                  type="submit"
                  disabled={subscribeNewsletter.isPending}
                  className="font-cinzel text-xs tracking-widest px-5 h-auto transition-all duration-200"
                  style={{
                    background: "linear-gradient(135deg, #D9B15A, #A67C2C)",
                    color: "#062830",
                    border: "none",
                  }}
                  data-ocid="newsletter.submit_button"
                >
                  {subscribeNewsletter.isPending ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    "SUBSCRIBE"
                  )}
                </Button>
              </form>
              {subscribeNewsletter.isSuccess && (
                <p
                  className="font-playfair text-xs mt-2"
                  style={{ color: "#C9A24A" }}
                  data-ocid="newsletter.success_state"
                >
                  ✦ Welcome to the Sukh Dastak family!
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ──────────────────────────────────────────────── */

function Footer() {
  const currentYear = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer
      className="relative overflow-hidden pt-16 pb-6"
      style={{ backgroundColor: "#041C24" }}
    >
      <PaisleyPattern opacity={0.09} />

      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{
          background:
            "linear-gradient(90deg, transparent, #C9A24A, #D9B15A, #C9A24A, transparent)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12"
          style={{ borderBottom: "1px solid rgba(201,162,74,0.2)" }}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/generated/sukh-dastak-logo-transparent.dim_400x400.png"
                alt="Sukh Dastak"
                className="h-16 w-16 object-contain"
              />
              <div>
                <div
                  className="font-cinzel font-bold text-lg tracking-[0.2em]"
                  style={{ color: "#D7B25A" }}
                >
                  SUKH DASTAK
                </div>
                <div
                  className="font-playfair text-xs italic"
                  style={{ color: "#C9A24A", opacity: 0.8 }}
                >
                  Royal Indian Gifting
                </div>
              </div>
            </div>
            <p
              className="font-playfair text-sm leading-relaxed mb-6"
              style={{ color: "#F2E7D2", opacity: 0.65 }}
            >
              Bringing the art of India to your doorstep — one handcrafted resin
              piece at a time.
            </p>
            <div className="flex gap-4">
              {[
                {
                  icon: <Instagram size={18} />,
                  label: "Instagram",
                  href: "#",
                },
                { icon: <Facebook size={18} />, label: "Facebook", href: "#" },
                {
                  icon: <SiPinterest size={18} />,
                  label: "Pinterest",
                  href: "#",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2.5 transition-all duration-200"
                  style={{
                    border: "1px solid rgba(201,162,74,0.4)",
                    color: "#C9A24A",
                  }}
                  data-ocid="nav.link"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4
              className="font-cinzel font-semibold text-sm tracking-[0.2em] mb-6"
              style={{ color: "#D7B25A" }}
            >
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "Shop Resin Art", href: "#products" },
                { label: "Collections", href: "#products" },
                { label: "About Us", href: "#craftsmanship" },
                { label: "Custom Orders", href: "#contact" },
                { label: "Contact Us", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-playfair text-sm transition-colors duration-200 hover:text-[#D7B25A] flex items-center gap-2"
                    style={{ color: "#F2E7D2", opacity: 0.7 }}
                    data-ocid="nav.link"
                  >
                    <span style={{ color: "#C9A24A" }}>›</span> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="font-cinzel font-semibold text-sm tracking-[0.2em] mb-6"
              style={{ color: "#D7B25A" }}
            >
              REACH US
            </h4>
            <div
              className="space-y-4 font-playfair text-sm"
              style={{ color: "#F2E7D2", opacity: 0.7 }}
            >
              <p>✦ Handcrafted with love in India</p>
              <p>✦ Custom orders: 7–14 working days</p>
              <p>✦ Pan-India delivery available</p>
              <p>✦ sukhdastak@gifting.in</p>
              <p>✦ +91 98765 43210</p>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="font-cinzel text-xs tracking-widest"
            style={{ color: "#C9A24A", opacity: 0.5 }}
          >
            © {currentYear} SUKH DASTAK. ALL RIGHTS RESERVED.
          </p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-playfair text-xs transition-opacity hover:opacity-100"
            style={{ color: "#C9A24A", opacity: 0.45 }}
          >
            © {currentYear}. Built with ♥ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ── App ─────────────────────────────────────────────────── */

export default function App() {
  return (
    <div className="min-h-screen">
      <Toaster
        toastOptions={{
          style: {
            background: "#0A3A48",
            border: "1px solid #C9A24A",
            color: "#F2E7D2",
            fontFamily: "'Playfair Display', serif",
          },
        }}
      />
      <Header />
      <main>
        <HeroSection />
        <CraftsmanshipStrip />
        <ProductsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
