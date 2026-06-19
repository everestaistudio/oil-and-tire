import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import {
  Phone, MapPin, Calendar, MessageCircle, Star, ShieldCheck, Users, Award,
  Droplet, Disc3, Gauge, Wrench, Activity, Snowflake, Car, Truck, Bus,
  CheckCircle2, ArrowRight, Sparkles, Clock, Tag, Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem,
} from "@/components/ui/select";
import heroShop from "@/assets/hero-shop.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hi-Tech Oil N' Tire — Fast. Honest. Reliable. | Woodstock & Dorchester" },
      { name: "description", content: "Trusted oil change, tire, brake & diagnostic experts in Woodstock and Dorchester. Book online in under 60 seconds." },
      { property: "og:title", content: "Hi-Tech Oil N' Tire — Premium Auto Service" },
      { property: "og:description", content: "Fast. Honest. Reliable. Vehicle care made easy in Woodstock & Dorchester." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main className="pb-28 lg:pb-0">
        <Hero />
        <Services />
        <Reviews />
        <HealthChecker />
        <TireFinder />
        <Family />
        <PromoBooking />
        <Footer />
      </main>
      <MobileBar />
    </div>
  );
}

/* ---------------- Header ---------------- */
function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-2 min-w-0">
          <div className="h-9 w-9 grid place-items-center rounded-lg bg-electric/15 ring-electric">
            <Wrench className="h-4 w-4 text-electric" />
          </div>
          <div className="min-w-0">
            <div className="font-display font-black text-sm sm:text-base tracking-tight truncate">HI-TECH<span className="text-electric"> OIL N' TIRE</span></div>
            <div className="text-[10px] text-muted-foreground tracking-widest uppercase hidden sm:block">Woodstock · Dorchester</div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#tires" className="hover:text-foreground transition-colors">Tires</a>
          <a href="#reviews" className="hover:text-foreground transition-colors">Reviews</a>
          <a href="#team" className="hover:text-foreground transition-colors">About</a>
          <a href="#promos" className="hover:text-foreground transition-colors">Promotions</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="tel:5195375703" className="hidden sm:inline-flex">
            <Button variant="outlineElectric" size="sm" className="gap-2">
              <Phone className="h-3.5 w-3.5" /> Call
            </Button>
          </a>
          <Button variant="neon" size="sm" className="gap-1.5">
            <Calendar className="h-3.5 w-3.5" /> Book
          </Button>
        </div>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={heroShop} alt="High-tech automotive service shop" width={1920} height={1080} className="h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-electric/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-neon/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-28 lg:pb-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-electric/40 bg-electric/10 px-3 py-1 text-xs font-medium text-electric">
            <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse-glow" />
            Now booking — same week appointments
          </div>
          <h1 className="mt-5 font-display font-black text-4xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
            FAST. <span className="text-electric">HONEST.</span><br />
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-neon)" }}>RELIABLE.</span>
          </h1>
          <p className="mt-5 text-xl sm:text-2xl font-semibold text-foreground/90">Vehicle care made easy.</p>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-xl">
            Woodstock & Dorchester's trusted oil change and tire experts.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button variant="neon" size="xl" className="gap-2 w-full sm:w-auto">
              <Calendar className="h-5 w-5" /> Book Appointment
            </Button>
            <Button variant="electric" size="xl" className="gap-2 w-full sm:w-auto">
              Get Tire Quote <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <TrustBadge icon={<Star className="h-4 w-4 fill-neon text-neon" />} title="4.8" sub="Google Rating" />
            <TrustBadge icon={<MapPin className="h-4 w-4 text-electric" />} title="2 Locations" sub="Convenient" />
            <TrustBadge icon={<ShieldCheck className="h-4 w-4 text-electric" />} title="Warranty" sub="Safe Service" />
            <TrustBadge icon={<Users className="h-4 w-4 text-neon" />} title="Family Owned" sub="Local Trusted" />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBadge({ icon, title, sub }: { icon: React.ReactNode; title: string; sub: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-surface/60 backdrop-blur px-3 py-2.5">
      <div className="h-9 w-9 shrink-0 grid place-items-center rounded-lg bg-background">{icon}</div>
      <div className="min-w-0">
        <div className="font-bold text-sm leading-tight truncate">{title}</div>
        <div className="text-[11px] text-muted-foreground leading-tight truncate">{sub}</div>
      </div>
    </div>
  );
}

/* ---------------- Services ---------------- */
function Services() {
  const items = [
    { icon: Droplet, title: "Oil Change", desc: "From $44.95", cta: "Book Now", action: "book" },
    { icon: Disc3, title: "Tires", desc: "Top Brands, Best Prices", cta: "Get Quote", action: "quote" },
    { icon: Gauge, title: "Brakes", desc: "Safety Starts With Brakes", cta: "Book Now", action: "book" },
    { icon: Wrench, title: "Maintenance", desc: "Keep Your Vehicle Running Its Best", cta: "Book Now", action: "book" },
    { icon: Activity, title: "Diagnostics", desc: "Advanced Scanning & Diagnostics", cta: "Book Now", action: "book" },
    { icon: Snowflake, title: "Seasonal Tire Swap", desc: "Quick & Easy Seasonal Change", cta: "Book Now", action: "book" },
  ];
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead eyebrow="What we do" title={<>POPULAR <span className="text-electric">SERVICES</span></>} subtitle="Expert care for every vehicle. Transparent pricing. No surprises." />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {items.map((s) => (
            <article key={s.title} className="group relative rounded-2xl border border-border bg-surface p-6 transition-all hover:border-electric/50 hover:-translate-y-1" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-electric/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start justify-between">
                <div className="h-12 w-12 grid place-items-center rounded-xl bg-electric/10 text-electric ring-electric">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Available</span>
              </div>
              <h3 className="mt-5 font-display font-bold text-xl tracking-tight">{s.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
              <Button variant={s.action === "book" ? "neon" : "electric"} size="sm" className="mt-5 gap-1.5">
                {s.cta} <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Reviews ---------------- */
function Reviews() {
  const reviews = [
    { name: "Sarah M.", loc: "Woodstock", text: "Honest, fast and so friendly. They explained everything, gave me a fair price, and had me out the door in 30 minutes. My new go-to shop.", stars: 5 },
    { name: "Dave R.", loc: "Dorchester", text: "Best tire prices I could find anywhere — and they price-matched a quote I had. Installed same day. Couldn't be happier.", stars: 5 },
    { name: "Jenn K.", loc: "Woodstock", text: "Justin and the team treat you like family. Quality work, no upselling. Been bringing all three of our vehicles here for years.", stars: 5 },
  ];
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-gradient-to-b from-background to-surface/50 relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
        <SectionHead eyebrow="What customers say" title={<>REAL PEOPLE. REAL <span className="text-electric">REVIEWS.</span> REAL TRUST.</>} />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <article key={i} className="rounded-2xl border border-border bg-surface p-6" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="flex items-center gap-1">
                {Array.from({ length: r.stars }).map((_, k) => <Star key={k} className="h-4 w-4 fill-neon text-neon" />)}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">"{r.text}"</p>
              <div className="mt-5 flex items-center gap-3 pt-4 border-t border-border">
                <div className="h-9 w-9 rounded-full bg-electric/15 text-electric grid place-items-center font-bold text-sm">{r.name[0]}</div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold truncate">{r.name}</div>
                  <div className="text-xs text-muted-foreground truncate">{r.loc} · via Google</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Health Checker ---------------- */
function HealthChecker() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead eyebrow="Smart diagnostics" title={<>VEHICLE <span className="text-electric">HEALTH</span> CHECKER</>} subtitle="Tell us about your ride. We'll tell you what's next." />
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
          {/* Form */}
          <form className="rounded-2xl border border-border bg-surface p-6 sm:p-7 space-y-4" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Make"><SelectShell placeholder="Select Make" /></Field>
              <Field label="Model"><SelectShell placeholder="Select Model" /></Field>
              <Field label="Year"><Input type="number" placeholder="2021" className="bg-background/60 border-border h-11" /></Field>
              <Field label="Current Mileage"><Input type="number" placeholder="48,500 km" className="bg-background/60 border-border h-11" /></Field>
            </div>
            <Button type="button" variant="neon" size="xl" className="w-full gap-2">
              <Sparkles className="h-5 w-5" /> Check My Vehicle
            </Button>
            <p className="text-xs text-muted-foreground text-center">Free service report · no commitment</p>
          </form>

          {/* Dashboard */}
          <div className="relative rounded-2xl border border-electric/30 bg-surface p-6 sm:p-7 overflow-hidden" style={{ boxShadow: "var(--shadow-electric)" }}>
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-electric to-transparent animate-scan" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-electric font-semibold">Live Report</span>
                <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-neon">
                  <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse-glow" /> Healthy
                </span>
              </div>
              <div className="mt-5">
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Your next oil change in</div>
                <div className="mt-1 font-display font-black text-5xl sm:text-6xl">
                  3,500 <span className="text-electric text-2xl sm:text-3xl">km</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-background overflow-hidden">
                  <div className="h-full w-[68%]" style={{ background: "var(--gradient-electric)" }} />
                </div>
              </div>
              <div className="mt-6">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Recommended Services</div>
                <ul className="mt-3 space-y-2.5">
                  {["Oil Change", "Tire Rotation", "Brake Inspection", "Multi-Point Inspection", "Fluid Check"].map((s) => (
                    <li key={s} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-neon shrink-0" />
                      <span className="flex-1">{s}</span>
                      <span className="text-xs text-muted-foreground">Due soon</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button variant="electric" size="lg" className="mt-6 w-full gap-2">
                Schedule Service <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <Label className="text-xs uppercase tracking-widest text-muted-foreground mb-1.5 block">{label}</Label>
      {children}
    </div>
  );
}
function SelectShell({ placeholder }: { placeholder: string }) {
  return (
    <button type="button" className="w-full h-11 rounded-md bg-background/60 border border-border px-3 text-left text-sm text-muted-foreground hover:border-electric/60 transition-colors flex items-center justify-between">
      <span>{placeholder}</span>
      <ArrowRight className="h-4 w-4 rotate-90 opacity-60" />
    </button>
  );
}

/* ---------------- Tire Finder ---------------- */
function TireFinder() {
  const [active, setActive] = useState("Car / Sedan");
  const types = [
    { label: "Car / Sedan", icon: Car },
    { label: "SUV / CUV", icon: Bus },
    { label: "Truck / Van", icon: Truck },
  ];
  return (
    <section id="tires" className="py-16 sm:py-24 bg-surface/40 relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 relative">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-electric/40 bg-electric/10 px-3 py-1 text-xs font-medium text-electric">
            <Disc3 className="h-3.5 w-3.5" /> Tire Finder
          </div>
          <h2 className="mt-5 font-display font-black text-3xl sm:text-5xl tracking-tight">FIND THE PERFECT <span className="text-electric">TIRES</span></h2>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground">Top brands. Best prices. Expert installation.</p>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-surface p-6 sm:p-8" style={{ boxShadow: "var(--shadow-card)" }}>
          <div className="grid grid-cols-3 gap-3">
            {types.map(({ label, icon: Icon }) => {
              const on = active === label;
              return (
                <button key={label} onClick={() => setActive(label)}
                  className={`group rounded-xl border p-4 sm:p-5 text-center transition-all ${on ? "border-electric bg-electric/10 ring-electric -translate-y-0.5" : "border-border bg-background/40 hover:border-electric/40"}`}>
                  <Icon className={`h-6 w-6 mx-auto ${on ? "text-electric" : "text-muted-foreground group-hover:text-foreground"}`} />
                  <div className="mt-2 text-xs sm:text-sm font-semibold">{label}</div>
                </button>
              );
            })}
          </div>

          <Button variant="neon" size="xl" className="mt-6 w-full gap-2">
            Get Tire Quote <ArrowRight className="h-5 w-5" />
          </Button>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            {[
              { icon: Tag, t: "Price Match Guarantee" },
              { icon: Award, t: "Top Brands" },
              { icon: Wrench, t: "Expert Installation" },
            ].map(({ icon: I, t }) => (
              <div key={t} className="flex items-center gap-2.5 rounded-lg border border-border bg-background/40 px-3 py-2.5">
                <I className="h-4 w-4 text-neon shrink-0" />
                <span className="font-medium text-sm">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Family ---------------- */
function Family() {
  const team = [
    { name: "Justin", role: "Owner / Operator", initial: "J" },
    { name: "Mike", role: "Master Technician", initial: "M" },
    { name: "Kyle", role: "Technician", initial: "K" },
    { name: "Amanda", role: "Service Advisor", initial: "A" },
  ];
  return (
    <section id="team" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead eyebrow="Who we are" title={<>FAMILY OWNED. <span className="text-electric">COMMUNITY FOCUSED.</span></>} subtitle="We treat every vehicle like it's our own. Honest advice, quality service, and customers for life." />
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {team.map((p) => (
            <article key={p.name} className="group rounded-2xl border border-border bg-surface p-5 sm:p-6 text-center transition-all hover:border-electric/50 hover:-translate-y-1" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="mx-auto h-20 w-20 sm:h-24 sm:w-24 rounded-full grid place-items-center font-display font-black text-3xl text-electric-foreground" style={{ background: "var(--gradient-electric)", boxShadow: "var(--shadow-electric)" }}>
                {p.initial}
              </div>
              <h3 className="mt-4 font-display font-bold text-lg">{p.name}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">{p.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Promotions + Booking ---------------- */
function PromoBooking() {
  return (
    <section id="promos" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
          {/* Promotions */}
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-7 sm:p-10" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-electric/20 blur-3xl" />
            <Tag className="h-7 w-7 text-electric" />
            <h3 className="mt-4 font-display font-black text-3xl sm:text-4xl tracking-tight">SPECIAL <span className="text-electric">OFFERS</span></h3>
            <p className="mt-3 text-muted-foreground max-w-md">Check out our latest promotions and save on your next visit.</p>
            <Button variant="outlineElectric" size="lg" className="mt-6 gap-2">
              View Promotions <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Booking */}
          <div className="relative overflow-hidden rounded-2xl border border-neon/30 p-7 sm:p-10" style={{ background: "var(--gradient-surface)", boxShadow: "var(--shadow-neon)" }}>
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-neon/20 blur-3xl" />
            <Clock className="h-7 w-7 text-neon" />
            <h3 className="mt-4 font-display font-black text-3xl sm:text-4xl tracking-tight leading-tight">BOOK ONLINE IN UNDER <span className="text-neon">60 SECONDS!</span></h3>
            <p className="mt-3 text-muted-foreground">Quick. Easy. Convenient.</p>
            <Button variant="neon" size="xl" className="mt-6 gap-2 w-full sm:w-auto">
              <Calendar className="h-5 w-5" /> Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40 pt-14 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="font-display font-black text-lg">HI-TECH<span className="text-electric"> OIL N' TIRE</span></div>
            <p className="mt-3 text-sm text-muted-foreground">Fast. Honest. Reliable. Family-owned auto service trusted across Oxford & Middlesex County.</p>
          </div>
          <LocationCard city="Woodstock" phone="519-537-5703" />
          <LocationCard city="Dorchester" phone="519-268-1073" />
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Hours</div>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li className="flex justify-between"><span>Mon – Fri</span><span className="text-muted-foreground">8:00 – 5:30</span></li>
              <li className="flex justify-between"><span>Saturday</span><span className="text-muted-foreground">9:00 – 2:00</span></li>
              <li className="flex justify-between"><span>Sunday</span><span className="text-muted-foreground">Closed</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Hi-Tech Oil N' Tire. All rights reserved.</p>
          <p>Built for Canadian drivers, eh.</p>
        </div>
      </div>
    </footer>
  );
}

function LocationCard({ city, phone }: { city: string; phone: string }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground">{city}</div>
      <div className="mt-3 flex items-start gap-3">
        <MapPin className="h-4 w-4 text-electric mt-0.5 shrink-0" />
        <div className="text-sm">
          <div className="font-semibold">{city}, ON</div>
          <a href={`tel:${phone.replace(/-/g, "")}`} className="text-muted-foreground hover:text-electric transition-colors">{phone}</a>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Section Head ---------------- */
function SectionHead({ eyebrow, title, subtitle }: { eyebrow: string; title: React.ReactNode; subtitle?: string }) {
  return (
    <div className="max-w-2xl">
      <div className="text-xs uppercase tracking-[0.2em] text-electric font-semibold">{eyebrow}</div>
      <h2 className="mt-3 font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-base sm:text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

/* ---------------- Mobile Bottom Bar ---------------- */
function MobileBar() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 border-t border-border bg-background/95 backdrop-blur-xl">
      <div className="grid grid-cols-4 gap-1 px-2 pt-2 pb-[max(env(safe-area-inset-bottom),0.5rem)]">
        <BarBtn icon={<Phone className="h-4 w-4" />} label="Call" href="tel:5195375703" />
        <BarBtn icon={<MapPin className="h-4 w-4" />} label="Locations" href="#footer" />
        <a href="#book" className="flex flex-col items-center justify-center gap-1 rounded-xl py-2 px-1 bg-neon text-neon-foreground glow-neon -translate-y-3 shadow-lg">
          <Calendar className="h-5 w-5" />
          <span className="text-[10px] font-bold uppercase tracking-wide">Book</span>
        </a>
        <BarBtn icon={<MessageCircle className="h-4 w-4" />} label="Chat" />
      </div>
    </div>
  );
}
function BarBtn({ icon, label, href = "#" }: { icon: React.ReactNode; label: string; href?: string }) {
  return (
    <a href={href} className="flex flex-col items-center justify-center gap-1 rounded-xl py-2 px-1 text-muted-foreground hover:text-foreground hover:bg-surface transition-colors">
      {icon}
      <span className="text-[10px] font-medium">{label}</span>
    </a>
  );
}
