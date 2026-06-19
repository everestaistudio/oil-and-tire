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
const MAKES = [
  "Toyota", "Honda", "Ford", "Chevrolet", "Hyundai", "Kia",
  "Nissan", "Subaru", "BMW", "Mercedes-Benz", "Audi", "Volkswagen",
  "Mazda", "Jeep", "RAM", "GMC",
];

const YEARS = Array.from({ length: 17 }, (_, i) => String(2010 + i));

type ServiceKey = "oil" | "rotation" | "brakes" | "fluids" | "mpi";

interface ServiceDef {
  key: ServiceKey;
  name: string;
  intervalKm: number;
  intervalMonths: number;
  tracksMileage: boolean;
  icon: React.ReactNode;
}

const SERVICES: ServiceDef[] = [
  { key: "oil",      name: "Oil Change",            intervalKm: 5000,  intervalMonths: 6,  tracksMileage: true,  icon: <Droplet  className="h-4 w-4 text-electric shrink-0" /> },
  { key: "rotation", name: "Tire Rotation",         intervalKm: 8000,  intervalMonths: 6,  tracksMileage: true,  icon: <Disc3    className="h-4 w-4 text-electric shrink-0" /> },
  { key: "brakes",   name: "Brake Inspection",      intervalKm: 15000, intervalMonths: 12, tracksMileage: false, icon: <Gauge    className="h-4 w-4 text-electric shrink-0" /> },
  { key: "fluids",   name: "Fluid Check",           intervalKm: 10000, intervalMonths: 12, tracksMileage: false, icon: <Activity className="h-4 w-4 text-electric shrink-0" /> },
  { key: "mpi",      name: "Multi-Point Inspection",intervalKm: 20000, intervalMonths: 12, tracksMileage: false, icon: <Wrench   className="h-4 w-4 text-electric shrink-0" /> },
];

type StatusLabel = "Due Now" | "Due Soon" | "Upcoming" | "Recently Done";

function statusStyle(label: StatusLabel) {
  switch (label) {
    case "Due Now":      return "text-neon";
    case "Due Soon":     return "text-electric";
    case "Recently Done":return "text-muted-foreground";
    default:             return "text-muted-foreground";
  }
}

function monthsBetween(iso: string): number | null {
  if (!iso) return null;
  const then = new Date(iso);
  if (isNaN(then.getTime())) return null;
  const now = new Date();
  return (now.getFullYear() - then.getFullYear()) * 12 + (now.getMonth() - then.getMonth());
}

function statusFromKnown(
  svc: ServiceDef,
  currentKm: number,
  lastKm: number | null,
  lastDateIso: string,
): StatusLabel {
  const months = monthsBetween(lastDateIso);
  let kmRatio = -Infinity;
  let monthRatio = -Infinity;
  if (svc.tracksMileage && lastKm != null && currentKm >= lastKm) {
    kmRatio = (currentKm - lastKm) / svc.intervalKm;
  }
  if (months != null && months >= 0) {
    monthRatio = months / svc.intervalMonths;
  }
  const ratio = Math.max(kmRatio, monthRatio);
  if (ratio === -Infinity) return statusFromAverage(svc, currentKm);
  if (ratio >= 1)    return "Due Now";
  if (ratio >= 0.85) return "Due Soon";
  if (ratio >= 0.4)  return "Upcoming";
  return "Recently Done";
}

function statusFromAverage(svc: ServiceDef, currentKm: number): StatusLabel {
  const remaining = svc.intervalKm - (currentKm % svc.intervalKm);
  if (remaining <= 1000) return "Due Now";
  if (remaining <= 3000) return "Due Soon";
  return "Upcoming";
}

interface HistoryState {
  oilKm: string; oilDate: string;
  rotationKm: string; rotationDate: string;
  brakesDate: string;
  fluidsDate: string;
}
const EMPTY_HISTORY: HistoryState = {
  oilKm: "", oilDate: "",
  rotationKm: "", rotationDate: "",
  brakesDate: "",
  fluidsDate: "",
};

function HealthChecker() {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [mileage, setMileage] = useState("");

  const [step, setStep] = useState<1 | 2>(1);
  const [knowsHistory, setKnowsHistory] = useState<null | boolean>(null);
  const [history, setHistory] = useState<HistoryState>(EMPTY_HISTORY);

  const [checked, setChecked] = useState(false);
  const [scanning, setScanning] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const numMileage = Number(mileage);
  const canContinue = !!(make && model.trim() && year && mileage && numMileage >= 0);

  const handleContinue = () => {
    if (!canContinue) return;
    setChecked(false);
    setStep(2);
  };

  const handleCheck = (knows: boolean) => {
    setKnowsHistory(knows);
    setChecked(false);
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      setChecked(true);
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }, 1500);
  };

  const results = SERVICES.map((s) => {
    let label: StatusLabel;
    if (knowsHistory) {
      if (s.key === "oil")           label = statusFromKnown(s, numMileage, Number(history.oilKm) || null, history.oilDate);
      else if (s.key === "rotation") label = statusFromKnown(s, numMileage, Number(history.rotationKm) || null, history.rotationDate);
      else if (s.key === "brakes")   label = statusFromKnown(s, numMileage, null, history.brakesDate);
      else if (s.key === "fluids")   label = statusFromKnown(s, numMileage, null, history.fluidsDate);
      else                            label = statusFromAverage(s, numMileage);
    } else {
      label = statusFromAverage(s, numMileage);
    }
    return { svc: s, label };
  });

  return (
    <section className="py-16 sm:py-24" id="health-checker">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          eyebrow="Smart diagnostics"
          title={<>VEHICLE <span className="text-electric">HEALTH</span> CHECKER</>}
          subtitle="Tell us about your ride. We'll tell you what's next."
        />
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
          {/* Form */}
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-7 space-y-5" style={{ boxShadow: "var(--shadow-card)" }}>
            {/* Step indicator */}
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-semibold">
              <StepDot active={step >= 1} done={step > 1} n={1} label="Vehicle" />
              <span className="flex-1 h-px bg-border" />
              <StepDot active={step >= 2} done={false} n={2} label="History" />
            </div>

            {step === 1 && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Make">
                    <Select value={make} onValueChange={setMake}>
                      <SelectTrigger className="h-11 bg-background/60 border-border">
                        <SelectValue placeholder="Select Make" />
                      </SelectTrigger>
                      <SelectContent>
                        {MAKES.map((m) => <SelectItem key={m} value={m}>{m}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field label="Model">
                    <Input value={model} onChange={(e) => setModel(e.target.value)} placeholder="e.g. Civic" className="bg-background/60 border-border h-11" />
                  </Field>
                  <Field label="Year">
                    <Select value={year} onValueChange={setYear}>
                      <SelectTrigger className="h-11 bg-background/60 border-border">
                        <SelectValue placeholder="Select Year" />
                      </SelectTrigger>
                      <SelectContent>
                        {YEARS.map((y) => <SelectItem key={y} value={y}>{y}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field label="Current Mileage (km)">
                    <Input type="number" min={0} value={mileage} onChange={(e) => setMileage(e.target.value)} placeholder="48,500" className="bg-background/60 border-border h-11" />
                  </Field>
                </div>
                <Button onClick={handleContinue} disabled={!canContinue} variant="neon" size="xl" className="w-full gap-2">
                  Continue <ArrowRight className="h-5 w-5" />
                </Button>
                <p className="text-xs text-muted-foreground text-center">Free service report · no commitment · demo only</p>
              </>
            )}

            {step === 2 && (
              <>
                <div>
                  <div className="font-display font-bold text-lg sm:text-xl tracking-tight">Do you know your last service details?</div>
                  <p className="mt-1.5 text-sm text-muted-foreground">More details = more accurate recommendations.</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    onClick={() => handleCheck(true)}
                    disabled={scanning}
                    variant={knowsHistory === true ? "neon" : "outlineElectric"}
                    size="lg"
                    className="w-full"
                  >
                    Yes, I know
                  </Button>
                  <Button
                    onClick={() => handleCheck(false)}
                    disabled={scanning}
                    variant={knowsHistory === false ? "electric" : "outlineElectric"}
                    size="lg"
                    className="w-full"
                  >
                    Not sure
                  </Button>
                </div>

                {knowsHistory === true && (
                  <div className="rounded-xl border border-electric/30 bg-background/40 p-4 sm:p-5 space-y-4">
                    <div className="text-[10px] uppercase tracking-widest text-electric font-semibold">
                      Optional · fill what you remember
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <Field label="Last Oil Change (km)">
                        <Input type="number" min={0} value={history.oilKm} onChange={(e) => setHistory({ ...history, oilKm: e.target.value })} placeholder="43,200" className="bg-background/60 border-border h-10" />
                      </Field>
                      <Field label="Last Oil Change Date">
                        <Input type="date" value={history.oilDate} onChange={(e) => setHistory({ ...history, oilDate: e.target.value })} className="bg-background/60 border-border h-10" />
                      </Field>
                      <Field label="Last Tire Rotation (km)">
                        <Input type="number" min={0} value={history.rotationKm} onChange={(e) => setHistory({ ...history, rotationKm: e.target.value })} placeholder="40,000" className="bg-background/60 border-border h-10" />
                      </Field>
                      <Field label="Last Tire Rotation Date">
                        <Input type="date" value={history.rotationDate} onChange={(e) => setHistory({ ...history, rotationDate: e.target.value })} className="bg-background/60 border-border h-10" />
                      </Field>
                      <Field label="Last Brake Inspection">
                        <Input type="date" value={history.brakesDate} onChange={(e) => setHistory({ ...history, brakesDate: e.target.value })} className="bg-background/60 border-border h-10" />
                      </Field>
                      <Field label="Last Fluid Check">
                        <Input type="date" value={history.fluidsDate} onChange={(e) => setHistory({ ...history, fluidsDate: e.target.value })} className="bg-background/60 border-border h-10" />
                      </Field>
                    </div>
                    <Button onClick={() => handleCheck(true)} disabled={scanning} variant="neon" size="lg" className="w-full gap-2">
                      {scanning ? <><Loader2 className="h-4 w-4 animate-spin" /> Analyzing…</> : <><Sparkles className="h-4 w-4" /> Update Report</>}
                    </Button>
                  </div>
                )}

                <button onClick={() => setStep(1)} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  ← Edit vehicle info
                </button>
              </>
            )}
          </div>

          {/* Result Card */}
          <div
            ref={resultRef}
            className={`relative rounded-2xl border bg-surface p-6 sm:p-7 overflow-hidden transition-all duration-500 ${
              checked ? "border-electric/30 opacity-100 translate-y-0" : "border-border opacity-60"
            }`}
            style={{ boxShadow: checked ? "var(--shadow-electric)" : "var(--shadow-card)" }}
          >
            <div className="absolute inset-0 bg-grid opacity-30" />
            {scanning && (
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-electric to-transparent animate-scan" />
            )}
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-electric font-semibold">
                  {checked ? "Live Report" : scanning ? "Scanning…" : "Preview"}
                </span>
                {checked ? (
                  <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-neon">
                    <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse-glow" />
                    {knowsHistory ? "Personalized" : "Estimate"}
                  </span>
                ) : (
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    Awaiting input
                  </span>
                )}
              </div>

              {checked && (
                <div className="mt-5">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">
                    {knowsHistory ? "Based on your service history" : "Based on average maintenance intervals"}
                  </div>
                  <div className="mt-1.5 font-display font-black text-2xl sm:text-3xl leading-tight">
                    Your <span className="text-electric">{year} {make} {model}</span> may be due for…
                  </div>
                </div>
              )}

              <div className="mt-6">
                <ul className="space-y-2.5">
                  {results.map(({ svc, label }) => (
                    <li key={svc.key} className="flex items-center gap-3 text-sm rounded-lg border border-border/60 bg-background/30 px-3 py-2.5">
                      {checked
                        ? <CheckCircle2 className={`h-4 w-4 shrink-0 ${label === "Due Now" ? "text-neon" : "text-electric"}`} />
                        : svc.icon}
                      <span className="flex-1">{svc.name}</span>
                      <span className={`text-xs font-semibold uppercase tracking-wide ${checked ? statusStyle(label) : "text-muted-foreground"}`}>
                        {checked ? label : "—"}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {checked && (
                <>
                  <div className="mt-5 rounded-lg border border-border/60 bg-background/30 px-3 py-2.5 text-[11px] text-muted-foreground leading-relaxed">
                    This is an estimate only, not a mechanical diagnosis.
                  </div>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Button variant="neon" size="lg" className="w-full gap-2">
                      <Calendar className="h-4 w-4" /> Book Appointment
                    </Button>
                    <Button variant="electric" size="lg" className="w-full gap-2">
                      <Wrench className="h-4 w-4" /> Get Service Quote
                    </Button>
                  </div>
                </>
              )}
              {!checked && (
                <Button variant="electric" size="lg" className="mt-6 w-full gap-2" disabled>
                  Schedule Service <ArrowRight className="h-4 w-4" />
                </Button>
              )}
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

function StepDot({ active, done, n, label }: { active: boolean; done: boolean; n: number; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`h-6 w-6 grid place-items-center rounded-full text-[11px] font-bold transition-colors ${
        done ? "bg-neon text-neon-foreground" : active ? "bg-electric text-electric-foreground" : "bg-background border border-border text-muted-foreground"
      }`}>
        {done ? <CheckCircle2 className="h-3.5 w-3.5" /> : n}
      </span>
      <span className={active ? "text-foreground" : "text-muted-foreground"}>{label}</span>
    </div>
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
