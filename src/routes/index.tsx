import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import {
  Phone, MapPin, Calendar, MessageCircle, Star, ShieldCheck, Users, Award,
  Droplet, Disc3, Gauge, Wrench, Activity, Snowflake, Car, Truck, Bus,
  CheckCircle2, ArrowRight, Sparkles, Clock, Tag, Loader2,
  ClipboardCheck, AlertCircle, Navigation, DollarSign, BatteryCharging,
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
        <CostEstimator />
        <Reviews />
        <HealthChecker />
        <TireFinder />
        <Locations />
        <Family />
        <PromoBooking />
        <Footer />
      </main>
      <EmergencyCTA />
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
          <a href="#locations" className="hover:text-foreground transition-colors">Locations</a>
          <a href="#team" className="hover:text-foreground transition-colors">About</a>
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
        <img src={heroShop} alt="High-tech automotive service shop" width={1920} height={1080} className="h-full w-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/15 via-background/40 to-background" />

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
            <TrustBadge icon={<Star className="h-4 w-4 fill-neon text-neon" />} title="4.8★" sub="Google Rating" />
            <TrustBadge icon={<Wrench className="h-4 w-4 text-electric" />} title="5,000+" sub="Vehicles Serviced" />
            <TrustBadge icon={<MapPin className="h-4 w-4 text-electric" />} title="2 Locations" sub="Woodstock & Dorchester" />
            <TrustBadge icon={<Users className="h-4 w-4 text-neon" />} title="Family Owned" sub="Since 2020" />

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
    { icon: Droplet, title: "Oil Change", desc: "Full-synthetic & conventional. From $44.95.", cta: "Book Now", action: "book" },
    { icon: Disc3, title: "Tires & Wheels", desc: "Top brands, install, balance & TPMS.", cta: "Get Quote", action: "quote" },
    { icon: Gauge, title: "Brakes", desc: "Pads, rotors, fluid — safety first.", cta: "Book Now", action: "book" },
    { icon: Activity, title: "Diagnostics", desc: "Advanced scanning for engine & ABS lights.", cta: "Book Now", action: "book" },
    { icon: Snowflake, title: "Seasonal Tire Swap", desc: "Quick & easy winter / summer change-over.", cta: "Book Now", action: "book" },
    { icon: ClipboardCheck, title: "Vehicle Inspection", desc: "Pre-purchase & safety inspections.", cta: "Book Now", action: "book" },
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
const MODELS_BY_MAKE: Record<string, string[]> = {
  Toyota: ["Corolla", "Camry", "RAV4", "Highlander", "Tacoma", "Tundra", "Prius", "4Runner", "Sienna"],
  Honda: ["Civic", "Accord", "CR-V", "HR-V", "Pilot", "Odyssey", "Ridgeline", "Passport"],
  Ford: ["F-150", "Escape", "Edge", "Explorer", "Mustang", "Bronco", "Maverick", "Ranger"],
  Chevrolet: ["Silverado", "Equinox", "Trax", "Traverse", "Malibu", "Tahoe", "Suburban", "Colorado"],
  Hyundai: ["Elantra", "Sonata", "Tucson", "Santa Fe", "Kona", "Palisade", "Venue"],
  Kia: ["Forte", "K5", "Sportage", "Sorento", "Telluride", "Soul", "Seltos"],
  Nissan: ["Sentra", "Altima", "Rogue", "Murano", "Pathfinder", "Frontier", "Titan", "Kicks"],
  Subaru: ["Impreza", "Legacy", "Outback", "Forester", "Crosstrek", "Ascent", "WRX"],
  BMW: ["3 Series", "5 Series", "X1", "X3", "X5", "X7", "M3"],
  "Mercedes-Benz": ["A-Class", "C-Class", "E-Class", "S-Class", "GLA", "GLC", "GLE"],
  Audi: ["A3", "A4", "A6", "Q3", "Q5", "Q7", "e-tron"],
  Volkswagen: ["Jetta", "Passat", "Golf", "Tiguan", "Atlas", "Taos", "ID.4"],
  Mazda: ["Mazda3", "Mazda6", "CX-3", "CX-30", "CX-5", "CX-9", "MX-5 Miata"],
  Jeep: ["Wrangler", "Grand Cherokee", "Cherokee", "Compass", "Renegade", "Gladiator"],
  RAM: ["1500", "2500", "3500", "ProMaster"],
  GMC: ["Sierra 1500", "Canyon", "Terrain", "Acadia", "Yukon"],
};
const MAKES = Object.keys(MODELS_BY_MAKE);


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

type StatusLabel =
  | "Recently Serviced"
  | "Due Soon"
  | "Due Now"
  | "Recommended"
  | "Inspection Suggested"
  | "Upcoming";

interface StatusResult {
  label: StatusLabel;
  detail: string;
  confidence: "personalized" | "estimated" | "suggested";
}

function statusStyle(label: StatusLabel) {
  switch (label) {
    case "Due Now":             return "text-neon";
    case "Due Soon":            return "text-electric";
    case "Recommended":         return "text-electric";
    case "Inspection Suggested":return "text-electric";
    case "Recently Serviced":   return "text-muted-foreground";
    default:                    return "text-muted-foreground";
  }
}

function monthsBetween(iso: string): number | null {
  if (!iso) return null;
  const then = new Date(iso);
  if (isNaN(then.getTime())) return null;
  const now = new Date();
  return (now.getFullYear() - then.getFullYear()) * 12 + (now.getMonth() - then.getMonth());
}

function fmtKm(n: number) {
  return `${Math.max(0, Math.round(n)).toLocaleString()} km`;
}

function statusFromKnown(
  svc: ServiceDef,
  currentKm: number,
  lastKm: number | null,
  lastDateIso: string,
): StatusResult {
  const months = monthsBetween(lastDateIso);
  const kmSince = svc.tracksMileage && lastKm != null && currentKm >= lastKm ? currentKm - lastKm : null;
  const kmRemaining = kmSince != null ? svc.intervalKm - kmSince : null;
  const monthsRemaining = months != null && months >= 0 ? svc.intervalMonths - months : null;

  if (kmRemaining == null && monthsRemaining == null) {
    return statusFromAverage(svc, currentKm);
  }

  // Use whichever is more urgent (smaller remaining ratio)
  const kmRatio = kmRemaining != null ? kmRemaining / svc.intervalKm : 1;
  const monthRatio = monthsRemaining != null ? monthsRemaining / svc.intervalMonths : 1;
  const useKm = kmRatio <= monthRatio && kmRemaining != null;

  if (useKm && kmRemaining != null) {
    if (kmRemaining <= 0)      return { label: "Due Now",   detail: `Overdue by ${fmtKm(-kmRemaining)}`,  confidence: "personalized" };
    if (kmRemaining <= 1500)   return { label: "Due Soon",  detail: `Due in ${fmtKm(kmRemaining)}`,        confidence: "personalized" };
    if (kmRemaining <= svc.intervalKm * 0.5)
                               return { label: "Upcoming",  detail: `Due in ${fmtKm(kmRemaining)}`,        confidence: "personalized" };
    return { label: "Recently Serviced", detail: `${fmtKm(kmSince!)} since last service`, confidence: "personalized" };
  }

  if (monthsRemaining != null) {
    if (monthsRemaining <= 0)  return { label: "Due Now",   detail: `Overdue by ${-monthsRemaining} mo`,   confidence: "personalized" };
    if (monthsRemaining <= 2)  return { label: "Due Soon",  detail: `Due in ${monthsRemaining} months`,    confidence: "personalized" };
    if (monthsRemaining <= svc.intervalMonths * 0.5)
                               return { label: "Upcoming",  detail: `Due in ${monthsRemaining} months`,    confidence: "personalized" };
    return { label: "Recently Serviced", detail: `Serviced ${months} months ago`, confidence: "personalized" };
  }

  return statusFromAverage(svc, currentKm);
}

function statusFromAverage(svc: ServiceDef, currentKm: number): StatusResult {
  const remaining = svc.intervalKm - (currentKm % svc.intervalKm);
  if (remaining <= 1000) return { label: "Recommended",          detail: `Typically due around ${fmtKm(currentKm)}`, confidence: "estimated" };
  if (remaining <= 3000) return { label: "Due Soon",             detail: `Typical interval every ${fmtKm(svc.intervalKm)}`, confidence: "estimated" };
  return                   { label: "Upcoming",                  detail: `Plan within ~${fmtKm(remaining)}`,         confidence: "estimated" };
}

function statusInspectionOnly(svc: ServiceDef): StatusResult {
  return {
    label: "Inspection Suggested",
    detail: `Recommend a baseline check (typical interval ${fmtKm(svc.intervalKm)})`,
    confidence: "suggested",
  };
}

type HistoryMode = "recent" | "some" | "new" | "unsure";
type RecordsLevel = "" | "yes" | "partial" | "none";

interface HistoryState {
  oilKm: string; oilDate: string;
  rotationKm: string; rotationDate: string;
  brakesDate: string;
  fluidsDate: string;
  purchaseDate: string;
  purchaseKm: string;
  hasCarfax: boolean;
  records: RecordsLevel;
}
const EMPTY_HISTORY: HistoryState = {
  oilKm: "", oilDate: "",
  rotationKm: "", rotationDate: "",
  brakesDate: "",
  fluidsDate: "",
  purchaseDate: "",
  purchaseKm: "",
  hasCarfax: false,
  records: "",
};

interface BaselineService {
  key: string;
  name: string;
  detail: string;
  icon: React.ReactNode;
}
const BASELINE_SERVICES: BaselineService[] = [
  { key: "mpi",     name: "Multi-Point Inspection",   detail: "Comprehensive vehicle walk-around to establish current condition.", icon: <Wrench           className="h-4 w-4 text-electric shrink-0" /> },
  { key: "brakes",  name: "Brake Inspection",         detail: "Measure pad thickness, rotor condition and brake fluid quality.",   icon: <Gauge            className="h-4 w-4 text-electric shrink-0" /> },
  { key: "fluids",  name: "Fluid Condition Check",    detail: "Test engine oil, coolant, transmission and brake fluid condition.", icon: <Activity         className="h-4 w-4 text-electric shrink-0" /> },
  { key: "tires",   name: "Tire Assessment",          detail: "Tread depth, wear pattern, age and pressure check on all tires.",   icon: <Disc3            className="h-4 w-4 text-electric shrink-0" /> },
  { key: "battery", name: "Battery Health Check",     detail: "Load test the battery and inspect charging system performance.",    icon: <BatteryCharging  className="h-4 w-4 text-electric shrink-0" /> },
];


function HealthChecker() {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [mileage, setMileage] = useState("");

  const [step, setStep] = useState<1 | 2>(1);
  const [historyMode, setHistoryMode] = useState<HistoryMode | null>(null);
  const [history, setHistory] = useState<HistoryState>(EMPTY_HISTORY);

  const [checked, setChecked] = useState(false);
  const [scanning, setScanning] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const availableModels = make ? MODELS_BY_MAKE[make] ?? [] : [];
  const numMileage = Number(mileage);
  const canContinue = !!(make && model && year && mileage && numMileage >= 0);

  const handleMakeChange = (next: string) => {
    setMake(next);
    setModel(""); // clear & reload models when make changes
  };

  const handleContinue = () => {
    if (!canContinue) return;
    setChecked(false);
    setStep(2);
  };

  const runReport = (mode: HistoryMode) => {
    setHistoryMode(mode);
    setChecked(false);
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      setChecked(true);
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }, 1400);
  };

  // Effective records level: explicit for "new"; implicit for the other modes.
  const recordsLevel: RecordsLevel =
    historyMode === "new"    ? history.records :
    historyMode === "recent" ? "yes" :
    historyMode === "some"   ? "partial" :
    "none";

  // "Just bought + no records" → no forecast, just a baseline report.
  const isBaselineReport = historyMode === "new" && history.records === "none";
  // Anything with usable history (recent / some / new+yes / new+partial) → personalized forecast.
  const isPersonalized =
    historyMode === "recent" ||
    historyMode === "some"   ||
    (historyMode === "new" && (history.records === "yes" || history.records === "partial"));

  const canGenerate = (() => {
    if (!historyMode) return false;
    if (historyMode === "new") {
      if (!history.purchaseDate || !history.records) return false;
      if (history.records === "yes" && !history.oilKm && !history.oilDate) return false;
    }
    return true;
  })();

  const results = SERVICES.map((s) => {
    let result: StatusResult;
    if (isPersonalized) {
      if (s.key === "oil")           result = statusFromKnown(s, numMileage, Number(history.oilKm) || null, history.oilDate);
      else if (s.key === "rotation") result = statusFromKnown(s, numMileage, Number(history.rotationKm) || null, history.rotationDate);
      else if (s.key === "brakes")   result = statusFromKnown(s, numMileage, null, history.brakesDate);
      else if (s.key === "fluids")   result = statusFromKnown(s, numMileage, null, history.fluidsDate);
      else                            result = statusInspectionOnly(s);
    } else if (historyMode === "unsure") {
      result = statusFromAverage(s, numMileage);
    } else {
      result = statusInspectionOnly(s);
    }
    return { svc: s, result };
  });

  const reportTitle =
    isBaselineReport ? "New Vehicle Baseline Report" :
    isPersonalized   ? "Personalized Maintenance Forecast" :
    "Maintenance Planning Report";

  const reportSubtitle = (() => {
    if (isBaselineReport) return "Because previous maintenance history is unknown, we recommend establishing a service baseline.";
    if (historyMode === "recent") return "Based on the service history you provided";
    if (historyMode === "some")   return "Based on the partial records you provided";
    if (historyMode === "new" && history.records === "yes")     return "Based on the records you received with the vehicle";
    if (historyMode === "new" && history.records === "partial") return "Based on the partial records you received with the vehicle";
    if (historyMode === "unsure") return "Estimated using manufacturer-typical intervals";
    return "";
  })();

  const confidenceBadge = (() => {
    if (isBaselineReport) return "Baseline report";
    if (isPersonalized)   return recordsLevel === "partial" ? "Partial history" : "Personalized";
    return "Estimate";
  })();


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
                    <Select value={make} onValueChange={handleMakeChange}>
                      <SelectTrigger className="h-11 bg-background/60 border-border">
                        <SelectValue placeholder="Select Make" />
                      </SelectTrigger>
                      <SelectContent>
                        {MAKES.map((m) => <SelectItem key={m} value={m}>{m}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field label="Model">
                    <Select value={model} onValueChange={setModel} disabled={!make}>
                      <SelectTrigger className="h-11 bg-background/60 border-border disabled:opacity-60">
                        <SelectValue placeholder={make ? "Select Model" : "Select Make first"} />
                      </SelectTrigger>
                      <SelectContent>
                        {availableModels.map((m) => <SelectItem key={m} value={m}>{m}</SelectItem>)}
                      </SelectContent>
                    </Select>
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
                  <div className="font-display font-bold text-lg sm:text-xl tracking-tight">
                    How much service history do you have?
                  </div>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    The more information you provide, the more accurate your maintenance forecast.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <HistoryOption
                    active={historyMode === "recent"}
                    onClick={() => setHistoryMode("recent")}
                    title="I know my recent service history"
                    desc="Enter dates and mileage for recent work"
                  />
                  <HistoryOption
                    active={historyMode === "some"}
                    onClick={() => setHistoryMode("some")}
                    title="I have some records"
                    desc="Fill in what you remember — we'll fill the gaps"
                  />
                  <HistoryOption
                    active={historyMode === "new"}
                    onClick={() => setHistoryMode("new")}
                    title="I just bought this vehicle"
                    desc="We'll recommend a baseline inspection plan"
                  />
                  <HistoryOption
                    active={historyMode === "unsure"}
                    onClick={() => setHistoryMode("unsure")}
                    title="I'm not sure"
                    desc="We'll estimate using typical intervals"
                  />
                </div>

                {(historyMode === "recent" || historyMode === "some") && (
                  <div className="rounded-xl border border-electric/30 bg-background/40 p-4 sm:p-5 space-y-4">
                    <div className="text-[10px] uppercase tracking-widest text-electric font-semibold">
                      {historyMode === "recent" ? "Enter recent service details" : "Fill in what you remember"}
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
                  </div>
                )}

                {historyMode === "new" && (
                  <div className="rounded-xl border border-electric/30 bg-background/40 p-4 sm:p-5 space-y-4">
                    <div className="text-[10px] uppercase tracking-widest text-electric font-semibold">
                      A few details about your purchase
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <Field label="Purchase Date">
                        <Input type="date" value={history.purchaseDate} onChange={(e) => setHistory({ ...history, purchaseDate: e.target.value })} className="bg-background/60 border-border h-10" />
                      </Field>
                      <Field label="Mileage at Purchase">
                        <Input type="number" min={0} value={history.purchaseKm} onChange={(e) => setHistory({ ...history, purchaseKm: e.target.value })} placeholder="42,000" className="bg-background/60 border-border h-10" />
                      </Field>
                    </div>
                    <label className="flex items-start gap-2 text-xs text-muted-foreground">
                      <input
                        type="checkbox"
                        checked={history.hasCarfax}
                        onChange={(e) => setHistory({ ...history, hasCarfax: e.target.checked })}
                        className="mt-0.5 accent-electric"
                      />
                      I have a Carfax or service report I can share at the appointment
                    </label>
                    <div className="text-[11px] text-muted-foreground leading-relaxed">
                      Recommendation: start with a multi-point inspection so we can build an accurate plan together.
                    </div>
                  </div>
                )}

                {historyMode === "unsure" && (
                  <div className="rounded-xl border border-border bg-background/40 p-4 sm:p-5 text-[12px] text-muted-foreground leading-relaxed">
                    No problem — we'll generate a planning report using typical manufacturer intervals.
                    Bring the vehicle in and we can verify everything on a free inspection.
                  </div>
                )}

                <Button
                  onClick={() => historyMode && runReport(historyMode)}
                  disabled={scanning || !historyMode}
                  variant="neon"
                  size="lg"
                  className="w-full gap-2"
                >
                  {scanning ? <><Loader2 className="h-4 w-4 animate-spin" /> Analyzing…</> : <><Sparkles className="h-4 w-4" /> Generate Report</>}
                </Button>

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
                    {confidenceBadge}
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
                    {reportSubtitle}
                  </div>
                  <div className="mt-1.5 font-display font-black text-2xl sm:text-3xl leading-tight">
                    {reportTitle}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    for your <span className="text-electric">{year} {make} {model}</span>
                  </div>
                </div>
              )}

              <div className="mt-6">
                <ul className="space-y-2.5">
                  {results.map(({ svc, result }) => (
                    <li key={svc.key} className="flex items-start gap-3 text-sm rounded-lg border border-border/60 bg-background/30 px-3 py-2.5">
                      {checked
                        ? <CheckCircle2 className={`h-4 w-4 mt-0.5 shrink-0 ${result.label === "Due Now" ? "text-neon" : "text-electric"}`} />
                        : <span className="mt-0.5">{svc.icon}</span>}
                      <div className="flex-1 min-w-0">
                        <div className="font-medium">{svc.name}</div>
                        {checked && (
                          <div className="text-[11px] text-muted-foreground mt-0.5">{result.detail}</div>
                        )}
                      </div>
                      <span className={`text-xs font-semibold uppercase tracking-wide whitespace-nowrap ${checked ? statusStyle(result.label) : "text-muted-foreground"}`}>
                        {checked ? result.label : "—"}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {checked && (
                <>
                  <div className="mt-5 rounded-lg border border-border/60 bg-background/30 px-3 py-2.5 text-[11px] text-muted-foreground leading-relaxed">
                    {hasHistory
                      ? "Forecast based on the details you provided. A technician inspection confirms exact wear and condition."
                      : "These are planning suggestions based on typical intervals — not a diagnosis. A quick inspection at our shop will confirm what's actually needed."}
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

function HistoryOption({
  active, onClick, title, desc,
}: { active: boolean; onClick: () => void; title: string; desc: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-left rounded-xl border p-4 transition-all ${
        active
          ? "border-electric bg-electric/10 shadow-[var(--shadow-electric)]"
          : "border-border bg-background/40 hover:border-electric/50 hover:bg-background/60"
      }`}
    >
      <div className={`text-sm font-semibold ${active ? "text-electric" : "text-foreground"}`}>{title}</div>
      <div className="mt-1 text-[11px] text-muted-foreground leading-relaxed">{desc}</div>
    </button>
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

/* ---------------- AI Tire Advisor ---------------- */
type VType = "Car / Sedan" | "SUV / CUV" | "Truck / Van";

const TIRE_MODELS: Record<VType, { make: string; models: string[] }[]> = {
  "Car / Sedan": [
    { make: "Honda", models: ["Civic", "Accord", "Corolla"] },
    { make: "Toyota", models: ["Camry", "Corolla", "Prius"] },
    { make: "Hyundai", models: ["Elantra", "Sonata"] },
    { make: "Mazda", models: ["Mazda3", "Mazda6"] },
  ],
  "SUV / CUV": [
    { make: "Honda", models: ["CR-V", "Pilot"] },
    { make: "Toyota", models: ["RAV4", "Highlander"] },
    { make: "Ford", models: ["Escape", "Edge"] },
    { make: "Jeep", models: ["Grand Cherokee", "Wrangler"] },
  ],
  "Truck / Van": [
    { make: "Ford", models: ["F-150", "Transit"] },
    { make: "Ram", models: ["1500", "ProMaster"] },
    { make: "Chevrolet", models: ["Silverado 1500", "Express"] },
    { make: "GMC", models: ["Sierra 1500"] },
  ],
};

const FACTORY_SIZE: Record<VType, string> = {
  "Car / Sedan": "205/55R16",
  "SUV / CUV": "235/60R18",
  "Truck / Van": "265/70R17",
};

const PRIORITIES = [
  "Best Price", "Best Value", "Premium Quality", "Winter Tires",
  "All Weather Tires", "Longest Tire Life", "Quiet Ride", "Fuel Economy",
];
const DRIVING = [
  "Mostly City Driving", "Mostly Highway Driving", "Mixed Driving",
  "Rural Roads", "Heavy Snow Conditions",
];


function TireFinder() {
  const [step, setStep] = useState(1);
  const [vType, setVType] = useState<VType | "">("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [priorities, setPriorities] = useState<string[]>([]);
  const [driving, setDriving] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", location: "" });
  const topRef = useRef<HTMLDivElement>(null);

  const goto = (n: number) => {
    setStep(n);
    setTimeout(() => topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  };

  const togglePriority = (p: string) =>
    setPriorities((cur) => cur.includes(p) ? cur.filter((x) => x !== p) : [...cur, p]);

  const factorySize = vType ? FACTORY_SIZE[vType as VType] : "";
  const makesForType = vType ? TIRE_MODELS[vType as VType] : [];
  const modelsForMake = makesForType.find((m) => m.make === make)?.models ?? [];

  const recommendations = factorySize ? [
    { tier: "GOOD", title: "Budget-Friendly", brand: "Sailun", model: "Atrezzo", size: factorySize, price: "$650–$750", desc: "Reliable everyday performance at a great price.", warranty: "60,000 km treadwear warranty" },
    { tier: "BETTER", title: "Best Value", brand: "General", model: "Altimax", size: factorySize, price: "$800–$950", desc: "Balanced comfort, grip and longevity for daily drivers.", warranty: "85,000 km treadwear warranty" },
    { tier: "BEST", title: "Premium Performance", brand: "Michelin", model: "Defender", size: factorySize, price: "$1,100–$1,300", desc: "Top-tier ride quality, safety and tread life.", warranty: "110,000 km treadwear warranty" },
  ] : [];

  const canNext1 = vType !== "";
  const canNext2 = make && model && year;
  const canNext3 = priorities.length > 0;
  const canNext4 = driving !== "";

  return (
    <section id="tires" className="py-16 sm:py-24 bg-surface/40 relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 relative">
        <div className="text-center" ref={topRef}>
          <div className="inline-flex items-center gap-2 rounded-full border border-electric/40 bg-electric/10 px-3 py-1 text-xs font-medium text-electric">
            <Sparkles className="h-3.5 w-3.5" /> AI Tire Advisor
          </div>
          <h2 className="mt-5 font-display font-black text-3xl sm:text-5xl tracking-tight">AI TIRE <span className="text-electric">ADVISOR</span></h2>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Answer a few quick questions and we'll help you find the right tires for your vehicle.
          </p>
        </div>

        {/* Progress */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {[1, 2, 3, 4, 5].map((n) => (
            <div key={n} className="flex items-center gap-2">
              <div className={`h-2 w-8 sm:w-12 rounded-full transition-all ${n <= step ? "bg-neon" : "bg-border"}`} />
            </div>
          ))}
          <span className="ml-3 text-xs text-muted-foreground font-medium">Step {step} of 5</span>
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-surface p-5 sm:p-8" style={{ boxShadow: "var(--shadow-card)" }}>
          {/* STEP 1 — Vehicle Type */}
          {step === 1 && (
            <div className="animate-fade-in">
              <h3 className="font-display font-bold text-xl sm:text-2xl mb-1">Vehicle Type</h3>
              <p className="text-sm text-muted-foreground mb-5">Choose what you drive.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {([
                  { label: "Car / Sedan", icon: Car },
                  { label: "SUV / CUV", icon: Bus },
                  { label: "Truck / Van", icon: Truck },
                ] as { label: VType; icon: typeof Car }[]).map(({ label, icon: Icon }) => {
                  const on = vType === label;
                  return (
                    <button key={label} onClick={() => { setVType(label); setMake(""); setModel(""); }}
                      className={`group rounded-xl border p-5 text-center transition-all ${on ? "border-electric bg-electric/10 ring-electric -translate-y-0.5 glow-electric" : "border-border bg-background/40 hover:border-electric/40 hover:-translate-y-0.5"}`}>
                      <Icon className={`h-8 w-8 mx-auto ${on ? "text-electric" : "text-muted-foreground group-hover:text-foreground"}`} />
                      <div className="mt-2 text-sm font-semibold">{label}</div>
                    </button>
                  );
                })}
              </div>
              <Button variant="neon" size="xl" disabled={!canNext1} onClick={() => goto(2)} className="mt-6 w-full gap-2">
                Continue <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          )}

          {/* STEP 2 — Vehicle Info */}
          {step === 2 && (
            <div className="animate-fade-in">
              <h3 className="font-display font-bold text-xl sm:text-2xl mb-1">Vehicle Information</h3>
              <p className="text-sm text-muted-foreground mb-5">Tell us your vehicle's make, model and year.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <Label className="text-xs uppercase tracking-wide text-muted-foreground">Make</Label>
                  <Select value={make} onValueChange={(v) => { setMake(v); setModel(""); }}>
                    <SelectTrigger className="mt-1 h-12"><SelectValue placeholder="Select make" /></SelectTrigger>
                    <SelectContent>
                      {makesForType.map((m) => <SelectItem key={m.make} value={m.make}>{m.make}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-xs uppercase tracking-wide text-muted-foreground">Model</Label>
                  <Select value={model} onValueChange={setModel} disabled={!make}>
                    <SelectTrigger className="mt-1 h-12"><SelectValue placeholder="Select model" /></SelectTrigger>
                    <SelectContent>
                      {modelsForMake.map((m) => <SelectItem key={m} value={m}>{m}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-xs uppercase tracking-wide text-muted-foreground">Year</Label>
                  <Select value={year} onValueChange={setYear}>
                    <SelectTrigger className="mt-1 h-12"><SelectValue placeholder="Select year" /></SelectTrigger>
                    <SelectContent>
                      {YEARS.map((y) => <SelectItem key={y} value={y}>{y}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {canNext2 && (
                <div className="mt-5 rounded-xl border border-electric/40 bg-electric/5 p-4 animate-fade-in">
                  <div className="flex items-center gap-3">
                    <Disc3 className="h-5 w-5 text-electric" />
                    <div>
                      <div className="text-xs uppercase tracking-wide text-muted-foreground">Factory Tire Size</div>
                      <div className="font-display font-bold text-2xl text-electric">{factorySize}</div>
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">Factory tire size shown for convenience. Actual size may vary.</p>
                </div>
              )}

              <div className="mt-6 flex gap-3">
                <Button variant="outlineElectric" size="xl" onClick={() => goto(1)} className="flex-1">Back</Button>
                <Button variant="neon" size="xl" disabled={!canNext2} onClick={() => goto(3)} className="flex-1 gap-2">Continue <ArrowRight className="h-5 w-5" /></Button>
              </div>
            </div>
          )}

          {/* STEP 3 — Priorities */}
          {step === 3 && (
            <div className="animate-fade-in">
              <h3 className="font-display font-bold text-xl sm:text-2xl mb-1">What Are You Looking For?</h3>
              <p className="text-sm text-muted-foreground mb-5">Pick everything that matters to you.</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {PRIORITIES.map((p) => {
                  const on = priorities.includes(p);
                  return (
                    <button key={p} onClick={() => togglePriority(p)}
                      className={`rounded-xl border px-3 py-3 text-xs sm:text-sm font-semibold text-center transition-all ${on ? "border-neon bg-neon/15 text-foreground glow-neon -translate-y-0.5" : "border-border bg-background/40 hover:border-neon/50"}`}>
                      {p}
                    </button>
                  );
                })}
              </div>
              <div className="mt-6 flex gap-3">
                <Button variant="outlineElectric" size="xl" onClick={() => goto(2)} className="flex-1">Back</Button>
                <Button variant="neon" size="xl" disabled={!canNext3} onClick={() => goto(4)} className="flex-1 gap-2">Continue <ArrowRight className="h-5 w-5" /></Button>
              </div>
            </div>
          )}

          {/* STEP 4 — Driving Style */}
          {step === 4 && (
            <div className="animate-fade-in">
              <h3 className="font-display font-bold text-xl sm:text-2xl mb-1">Driving Style</h3>
              <p className="text-sm text-muted-foreground mb-5">How do you mostly drive?</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {DRIVING.map((d) => {
                  const on = driving === d;
                  return (
                    <button key={d} onClick={() => setDriving(d)}
                      className={`rounded-xl border px-4 py-4 text-sm font-semibold text-left transition-all ${on ? "border-electric bg-electric/10 glow-electric -translate-y-0.5" : "border-border bg-background/40 hover:border-electric/40"}`}>
                      {d}
                    </button>
                  );
                })}
              </div>
              <div className="mt-6 flex gap-3">
                <Button variant="outlineElectric" size="xl" onClick={() => goto(3)} className="flex-1">Back</Button>
                <Button variant="neon" size="xl" disabled={!canNext4} onClick={() => goto(5)} className="flex-1 gap-2">See Recommendations <ArrowRight className="h-5 w-5" /></Button>
              </div>
            </div>
          )}

          {/* STEP 5 — Recommendations */}
          {step === 5 && (
            <div className="animate-fade-in">
              <h3 className="font-display font-bold text-xl sm:text-2xl mb-1">Recommended Tire Packages</h3>
              <p className="text-sm text-muted-foreground mb-5">
                Based on your {year} {make} {model} • {driving}
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {recommendations.map((r, i) => {
                  const isBest = r.tier === "BEST";
                  const isBetter = r.tier === "BETTER";
                  return (
                    <article key={r.tier}
                      className={`relative rounded-2xl border p-5 sm:p-6 transition-all hover:-translate-y-1 ${
                        isBest ? "border-neon bg-neon/5 glow-neon" :
                        isBetter ? "border-electric bg-electric/5 glow-electric" :
                        "border-border bg-background/40"
                      }`}>
                      <div className={`inline-block rounded-full px-3 py-1 text-xs font-display font-black tracking-wider ${
                        isBest ? "bg-neon text-neon-foreground" :
                        isBetter ? "bg-electric text-electric-foreground" :
                        "bg-muted text-foreground"
                      }`}>{r.tier}</div>
                      <div className="mt-2 text-sm font-semibold text-muted-foreground">{r.title}</div>
                      <h4 className="mt-3 font-display font-bold text-xl">{r.brand} {r.model}</h4>
                      <div className="mt-1 text-sm text-muted-foreground">{r.size}</div>
                      <div className="mt-4 pt-4 border-t border-border">
                        <div className="text-xs uppercase tracking-wide text-muted-foreground">Estimated Installed Price</div>
                        <div className={`font-display font-black text-2xl ${isBest ? "text-neon" : isBetter ? "text-electric" : "text-foreground"}`}>{r.price}</div>
                      </div>
                      <p className="mt-3 text-sm text-muted-foreground">{r.desc}</p>
                      <div className="mt-3 flex items-start gap-2 text-xs text-muted-foreground">
                        <ShieldCheck className="h-3.5 w-3.5 text-neon shrink-0 mt-0.5" />
                        <span>{r.warranty}</span>
                      </div>
                    </article>
                  );
                })}
              </div>

              <p className="mt-5 text-xs text-muted-foreground italic">
                Pricing shown is an estimate only and may vary based on inventory, promotions, vehicle specifications, and installation requirements.
              </p>

              {/* Final CTA */}
              <div className="mt-8 rounded-2xl border border-neon/40 bg-background/60 p-6 sm:p-8" style={{ boxShadow: "var(--shadow-neon)" }}>
                {!submitted ? (
                  <>
                    <h3 className="font-display font-black text-2xl sm:text-3xl">GET YOUR EXACT <span className="text-neon">TIRE QUOTE</span></h3>
                    <p className="mt-2 text-sm text-muted-foreground">A tire specialist will contact you with pricing tailored to your vehicle.</p>
                    <form
                      className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3"
                      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                    >
                      <div>
                        <Label className="text-xs uppercase tracking-wide text-muted-foreground">Name</Label>
                        <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1 h-12" placeholder="Your name" maxLength={100} />
                      </div>
                      <div>
                        <Label className="text-xs uppercase tracking-wide text-muted-foreground">Phone</Label>
                        <Input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-1 h-12" placeholder="(519) 555-0123" maxLength={20} />
                      </div>
                      <div className="sm:col-span-2">
                        <Label className="text-xs uppercase tracking-wide text-muted-foreground">Email</Label>
                        <Input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1 h-12" placeholder="you@email.com" maxLength={255} />
                      </div>
                      <div className="sm:col-span-2">
                        <Label className="text-xs uppercase tracking-wide text-muted-foreground">Preferred Location <span className="normal-case text-muted-foreground/70">(optional)</span></Label>
                        <Select value={form.location} onValueChange={(v) => setForm({ ...form, location: v })}>
                          <SelectTrigger className="mt-1 h-12"><SelectValue placeholder="Select location" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Woodstock">Woodstock</SelectItem>
                            <SelectItem value="Dorchester">Dorchester</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Button type="submit" variant="neon" size="xl" className="sm:col-span-2 w-full gap-2">
                        REQUEST EXACT TIRE QUOTE <ArrowRight className="h-5 w-5" />
                      </Button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-6 animate-fade-in">
                    <div className="mx-auto h-14 w-14 rounded-full bg-neon/20 grid place-items-center glow-neon">
                      <CheckCircle2 className="h-8 w-8 text-neon" />
                    </div>
                    <h3 className="mt-4 font-display font-bold text-2xl">Thank you.</h3>
                    <p className="mt-2 text-muted-foreground">A tire specialist will contact you with an exact quote.</p>
                  </div>
                )}
              </div>

              <div className="mt-6 flex gap-3">
                <Button variant="outlineElectric" size="lg" onClick={() => goto(4)} className="flex-1">Back</Button>
                <Button variant="ghost" size="lg" onClick={() => {
                  setStep(1); setVType(""); setMake(""); setModel(""); setYear("");
                  setPriorities([]); setDriving(""); setSubmitted(false);
                  setForm({ name: "", phone: "", email: "", location: "" });
                  setTimeout(() => topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
                }} className="flex-1">Start Over</Button>
              </div>
            </div>
          )}
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
        <BarBtn icon={<MapPin className="h-4 w-4" />} label="Locations" href="#locations" />
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

/* ---------------- Emergency Floating CTA ---------------- */
function EmergencyCTA() {
  return (
    <a
      href="tel:5195375703"
      aria-label="Call now for same-day service"
      className="fixed z-50 right-4 bottom-24 lg:bottom-6 group"
    >
      <div className="relative flex items-center gap-3 rounded-full pl-4 pr-2 py-2 bg-surface-elevated/95 backdrop-blur-xl border border-neon/50 shadow-lg animate-pulse-glow">
        <div className="hidden sm:flex flex-col leading-tight pr-1">
          <span className="text-[10px] uppercase tracking-widest text-neon font-bold flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> Need Service Today?
          </span>
          <span className="text-xs text-muted-foreground">Same-day appointments</span>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-bold bg-neon text-neon-foreground glow-neon">
          <Phone className="h-4 w-4" /> Call Now
        </span>
      </div>
    </a>
  );
}

/* ---------------- Cost Estimator ---------------- */
const ESTIMATES: Record<string, { label: string; range: string; low: number; high: number }> = {
  oil: { label: "Oil Change", range: "$69 – $89", low: 69, high: 89 },
  tire: { label: "Tire Change", range: "$120 – $260", low: 120, high: 260 },
  swap: { label: "Seasonal Tire Swap", range: "$59 – $99", low: 59, high: 99 },
  brakes: { label: "Brake Service", range: "$299 – $799", low: 299, high: 799 },
  inspection: { label: "Vehicle Inspection", range: "$89 – $149", low: 89, high: 149 },
  diag: { label: "Diagnostics", range: "$99 – $179", low: 99, high: 179 },
};

function CostEstimator() {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [service, setService] = useState<string>("");
  const result = service ? ESTIMATES[service] : null;

  return (
    <section id="estimator" className="py-16 sm:py-24 bg-surface/40 relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
        <SectionHead
          eyebrow="Instant pricing"
          title={<>SERVICE COST <span className="text-electric">ESTIMATOR</span></>}
          subtitle="Get an instant estimate before you book."
        />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-5 gap-5">
          <div className="lg:col-span-3 rounded-2xl border border-border p-6 sm:p-8" style={{ background: "var(--gradient-surface)", boxShadow: "var(--shadow-card)" }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Vehicle Make">
                <Input value={make} onChange={(e) => setMake(e.target.value)} placeholder="e.g. Honda" />
              </Field>
              <Field label="Vehicle Model">
                <Input value={model} onChange={(e) => setModel(e.target.value)} placeholder="e.g. Civic" />
              </Field>
              <Field label="Vehicle Year">
                <Input value={year} onChange={(e) => setYear(e.target.value)} placeholder="e.g. 2020" inputMode="numeric" />
              </Field>
              <Field label="Service Type">
                <Select value={service} onValueChange={setService}>
                  <SelectTrigger><SelectValue placeholder="Select service" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="oil">Oil Change</SelectItem>
                    <SelectItem value="tire">Tire Change</SelectItem>
                    <SelectItem value="swap">Seasonal Tire Swap</SelectItem>
                    <SelectItem value="brakes">Brake Service</SelectItem>
                    <SelectItem value="inspection">Vehicle Inspection</SelectItem>
                    <SelectItem value="diag">Diagnostics</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            </div>
            <p className="mt-5 text-xs text-muted-foreground leading-relaxed">
              Pricing shown is an estimate only. Final pricing may vary depending on vehicle specifications, parts, labour requirements, and additional services.
            </p>
          </div>

          <div className="lg:col-span-2 relative overflow-hidden rounded-2xl border border-neon/30 p-6 sm:p-8 flex flex-col" style={{ background: "var(--gradient-surface)", boxShadow: "var(--shadow-neon)" }}>
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-neon to-transparent animate-scan" />
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neon font-semibold">
              <DollarSign className="h-4 w-4" /> Estimated Range
            </div>
            {result ? (
              <>
                <div className="mt-4 font-display font-black text-4xl sm:text-5xl tracking-tight text-foreground">{result.range}</div>
                <div className="mt-2 text-sm text-muted-foreground">
                  {result.label}{make || model || year ? ` — ${[year, make, model].filter(Boolean).join(" ")}` : ""}
                </div>
              </>
            ) : (
              <>
                <div className="mt-4 font-display font-black text-3xl sm:text-4xl tracking-tight text-muted-foreground">$—</div>
                <div className="mt-2 text-sm text-muted-foreground">Select a service to see your estimate.</div>
              </>
            )}
            <div className="mt-auto pt-6 flex flex-col sm:flex-row gap-3">
              <Button variant="neon" size="lg" className="gap-2 w-full sm:w-auto">
                <Calendar className="h-4 w-4" /> Book Appointment
              </Button>
              <a href="tel:5195375703" className="w-full sm:w-auto">
                <Button variant="outlineElectric" size="lg" className="gap-2 w-full">
                  <Phone className="h-4 w-4" /> Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Locations ---------------- */
function Locations() {
  const locations = [
    {
      city: "Woodstock",
      address: "123 Dundas St, Woodstock, ON",
      phone: "519-537-5703",
      hours: ["Mon – Fri: 8:00 AM – 6:00 PM", "Saturday: 8:00 AM – 4:00 PM", "Sunday: Closed"],
      map: "https://www.google.com/maps?q=Woodstock+Ontario&output=embed",
      directions: "https://www.google.com/maps/dir/?api=1&destination=Woodstock+Ontario",
    },
    {
      city: "Dorchester",
      address: "456 Hamilton Rd, Dorchester, ON",
      phone: "519-537-5703",
      hours: ["Mon – Fri: 8:00 AM – 6:00 PM", "Saturday: 8:00 AM – 4:00 PM", "Sunday: Closed"],
      map: "https://www.google.com/maps?q=Dorchester+Ontario&output=embed",
      directions: "https://www.google.com/maps/dir/?api=1&destination=Dorchester+Ontario",
    },
  ];
  return (
    <section id="locations" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          eyebrow="Find us"
          title={<>TWO CONVENIENT <span className="text-electric">LOCATIONS</span></>}
          subtitle="Drop by either shop — same trusted team, same honest service."
        />
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {locations.map((loc) => (
            <article key={loc.city} className="rounded-2xl border border-border overflow-hidden" style={{ background: "var(--gradient-surface)", boxShadow: "var(--shadow-card)" }}>
              <div className="aspect-[16/10] w-full bg-surface relative">
                <iframe
                  src={loc.map}
                  loading="lazy"
                  title={`${loc.city} location map`}
                  className="absolute inset-0 h-full w-full border-0 grayscale contrast-110"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display font-black text-2xl tracking-tight">{loc.city}</h3>
                  <span className="text-[10px] uppercase tracking-widest text-neon font-semibold">Open Today</span>
                </div>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-electric mt-0.5 shrink-0" />
                    <span className="text-foreground/90">{loc.address}</span>
                  </div>
                  <a href={`tel:${loc.phone.replace(/-/g, "")}`} className="flex items-start gap-3 hover:text-electric transition-colors">
                    <Phone className="h-4 w-4 text-electric mt-0.5 shrink-0" />
                    <span>{loc.phone}</span>
                  </a>
                  <div className="flex items-start gap-3">
                    <Clock className="h-4 w-4 text-electric mt-0.5 shrink-0" />
                    <div className="space-y-0.5 text-muted-foreground">
                      {loc.hours.map((h) => <div key={h}>{h}</div>)}
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a href={loc.directions} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                    <Button variant="electric" size="lg" className="gap-2 w-full">
                      <Navigation className="h-4 w-4" /> Get Directions
                    </Button>
                  </a>
                  <a href={`tel:${loc.phone.replace(/-/g, "")}`} className="w-full sm:w-auto">
                    <Button variant="outlineElectric" size="lg" className="gap-2 w-full">
                      <Phone className="h-4 w-4" /> Call {loc.city}
                    </Button>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

