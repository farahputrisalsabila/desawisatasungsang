import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Waves,
  Ship,
  Sunrise,
  Users,
  UtensilsCrossed,
  Camera,
  ArrowRight,
  ArrowUpRight,
  X,
  MapPin,
  Clock,
  Sparkles,
  Compass,
  CheckCircle2,
  Navigation,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Car,
  Anchor,
  Fish,
  ShoppingBag,
  Award,
  HelpCircle,
  Trees,
  Instagram,
} from "lucide-react";

import { SiteNav } from "@/components/SiteNav";
import { Reveal } from "@/components/Reveal";
import { FloatingActions } from "@/components/FloatingActions";
import { Analytics } from "@vercel/analytics/next"
import {
  imgAdwiPlaque,
  imgAdwiDutaFull,
  imgAdwiDutaPortrait,
  imgMangroveGateGroup,
  imgMangroveEntrance2,
  imgMangroveBridgeWalk,
  imgMangroveNursery,
  imgMangroveBoardwalkSolo,
  imgMangroveBridgeSit,
  imgMangroveCanopyLook,
  imgTraditionalDance,
  imgFreshShrimpBasket,
  imgKemplangDryingHarbor,
  imgKemplangShowcase,
  imgKemplangChecking,
  imgFishFilletingGroup,
  imgFishMeatPrep,
  imgKidsHappyGroup,
  imgKidsLaughingTogether,
  imgBujangGadesMeeting1,
  imgBujangGadesHandshake,
  sungsangGallery,
  type SungsangPhoto,
} from "@/assets/photos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Desa Wisata Sungsang IV — Juara 75 Besar ADWI 2023 | Pesisir Banyuasin II Sumatera Selatan",
      },
      {
        name: "description",
        content:
          "Selamat datang di Desa Wisata Sungsang IV, Banyuasin II: Pemenang 75 Desa Wisata Terbaik ADWI 2023 Kemenparekraf. Nikmati Ekoeduwisata Mangrove Sungsang 4, pempek udang segar asli, kemplang tunu, dan keramahan masyarakat kampung nelayan terapung.",
      },
      {
        property: "og:title",
        content: "Desa Wisata Sungsang IV — Where Coastal Life Becomes an Unforgettable Story",
      },
      {
        property: "og:description",
        content:
          "Pemenang 75 Desa Wisata Terbaik Anugerah Desa Wisata Indonesia (ADWI 2023). Pesona rumah panggung di atas air, susur mangrove, dan kuliner laut segar di muara Sungai Musi.",
      },
    ],
  }),
  component: Index,
});

/* STATS */
const keyStats = [
  { value: "ADWI 2023", label: "Top 75 Desa Wisata", desc: "Anugerah Kemenparekraf RI resmi" },
  { value: "Sungsang IV", label: "Pusat Ekoeduwisata", desc: "Kawasan konservasi mangrove terpadu" },
  { value: "1.200+", label: "Perahu & Armada Nelayan", desc: "Aktivitas maritim aktif setiap hari" },
  { value: "100%", label: "Kuliner Udang & Ikan Segar", desc: "Sentra pempek udang & kemplang tunu" },
];

/* HIGHLIGHTS DI BAGIAN ABOUT */
const highlights = [
  {
    icon: Award,
    title: "Juara ADWI 2023",
    text: "Diakui secara resmi oleh Kemenparekraf RI sebagai salah satu dari 75 Desa Wisata Terbaik se-Indonesia atas komitmen pariwisata berkelanjutan.",
  },
  {
    icon: Trees,
    title: "Ekoeduwisata Mangrove 4",
    text: "Jembatan kayu (boardwalk) membelah hutan mangrove asri, dilengkapi pusat pembibitan dan program adopsi pohon bakau pesisir.",
  },
  {
    icon: Waves,
    title: "Pemukiman Terapung Legendaris",
    text: "Perkampungan nelayan bersejarah yang berdiri di atas ribuan tiang kayu ulin dengan titian papan kayu yang membentang di atas muara.",
  },
];

/* PAKET WISATA TERKURASI */
const tourPackages = [
  {
    id: "ekoeduwisata-mangrove",
    badge: "Konservasi & Edukasi",
    title: "Ekoeduwisata Mangrove Sungsang 4",
    duration: "3 - 4 Jam",
    target: "Pecinta Alam, Sekolah & Peneliti",
    image: imgMangroveGateGroup,
    description:
      "Jelajahi jembatan kanopi kayu di tengah rimbunnya hutan mangrove Sungsang IV. Kunjungi persemaian bibit Rhizophora berlabel, pelajari konservasi pesisir, dan abadikan momen di spot foto eksotis bersama Duta Pariwisata.",
    features: [
      "Akses jembatan kanopi kayu (boardwalk) mangrove",
      "Kunjungan persemaian & sertifikat adopsi bibit mangrove",
      "Pemandu resmi Duta Pariwisata / Bujang Gades Sungsang",
      "Kelapa muda segar & camilan kemplang tunu khas",
    ],
  },
  {
    id: "heritage-livein",
    badge: "Kearifan Lokal & Budaya",
    title: "Live-In Kampung Nelayan Rumah Panggung",
    duration: "1 - 2 Hari",
    target: "Keluarga & Wisatawan Human Interest",
    image: imgKidsHappyGroup,
    description:
      "Rasakan ketenangan hidup warga pesisir sesungguhnya. Menginap di homestay rumah panggung terapung, menyapa senyum riang anak-anak desa di titian kayu, serta menyaksikan gemerlap perahu nelayan bertolak saat fajar.",
    features: [
      "Akomodasi homestay rumah panggung kayu di atas air",
      "Interaksi ramah bersama keluarga nelayan lokal",
      "Mengamati gotong royong pemilahan ikan segar",
      "Makan bersama sajian hidangan laut khas Sungsang",
    ],
  },
  {
    id: "sentra-kuliner-kemplang",
    badge: "Gastronomi Pesisir",
    title: "Sentra Pempek Udang & Kemplang Tunu",
    duration: "3 - 4 Jam (Sore Hari)",
    target: "Pecinta Kuliner & Berburu Oleh-Oleh",
    image: imgKemplangShowcase,
    description:
      "Berburu udang laut segar langsung di pelataran dermaga, menyaksikan pemanggangan kemplang tunu tradisional di atas bara arang bakau, melihat sentra penjemuran kemplang di tampah bambu, dan menikmati sunset.",
    features: [
      "Icip pempek udang hangat & kemplang tunu gurih",
      "Melihat sentra penjemuran kemplang tepi dermaga perahu",
      "Beli udang laut segar & terasi rebon murni langsung dari nelayan",
      "Santai menikmati golden sunset di pelataran dermaga kayu",
    ],
  },
];

/* EXPLORE CARDS (4 PILAR) */
const explore = [
  {
    title: "Ekoeduwisata Mangrove",
    badge: "Konservasi Alam",
    img: imgMangroveBoardwalkSolo,
    text: "Menyusuri lorong hijau rimbunnya hutan mangrove Sungsang IV lewat titian kayu boardwalk dengan semilir angin muara yang menenangkan.",
  },
  {
    title: "Tradisi Nelayan Pesisir",
    badge: "Kearifan Bahari",
    img: imgFishFilletingGroup,
    text: "Menyaksikan langsung gotong royong para ibu nelayan memfillet tumpukan ikan segar di pelataran kayu untuk bahan pempek dan kemplang.",
  },
  {
    title: "Seni Tari Tradisional",
    badge: "Warisan Budaya",
    img: imgTraditionalDance,
    text: "Pertunjukan tari pesisir bertema burung mangrove dengan mahkota artistik dan kostum sayap anggun di atas panggung kayu alam.",
  },
  {
    title: "Surga Udang & Kuliner Laut",
    badge: "Cita Rasa Ikonik",
    img: imgFreshShrimpBasket,
    text: "Limpahan udang laut segar hasil tangkapan nelayan harian yang menjadi rahasia kelezatan pempek udang dan terasi rebon Sungsang.",
  },
];

/* KULINER KHAS */
const culinaryHighlights = [
  {
    title: "Pempek Udang Asli Sungsang",
    tag: "Kuliner Ikonik",
    desc: "Bila daerah lain dominan ikan, Sungsang punya signature legendaris: pempek berbahan daging udang laut segar alami dengan warna kemerahan menggoda, rasa manis gurih alami, dan cuka pedas khas pesisir.",
    icon: Fish,
  },
  {
    title: "Kemplang Tunu (Panggang Arang)",
    tag: "Camilan Tradisional",
    desc: "Kerupuk kemplang udang yang dipanggang satu demi satu secara telaten di atas bara arang kayu bakau tanpa minyak. Menghasilkan aroma gurih smokey alami yang renyah dengan cocolan sambal terasi pedas manis.",
    icon: Sparkles,
  },
  {
    title: "Terasi / Belacan Rebon Murni",
    tag: "Oleh-Oleh Primadona",
    desc: "Terasi legendaris Sungsang dibuat murni dari 100% udang rebon laut pilihan hasil tangkapan nelayan lokal tanpa bahan pewarna kimia atau pengawet buatan, menghasilkan aroma masakan yang sangat sedap.",
    icon: ShoppingBag,
  },
  {
    title: "Udang Laut & Ikan Segar Muara",
    tag: "Hasil Laut Harian",
    desc: "Tangkapan udang laut super, kepiting bakau, dan aneka ikan muara segar yang dapat Anda beli langsung dari nelayan di dermaga perahu dengan harga bersahabat dan kesegaran terbaik.",
    icon: UtensilsCrossed,
  },
];

/* PENGALAMAN / EXPERIENCE */
const experiences = [
  {
    icon: Trees,
    title: "Susur Boardwalk Mangrove Sungsang 4",
    text: "Melintasi jembatan kayu di bawah keteduhan kanopi hutan bakau alami yang masih sangat lestari.",
  },
  {
    icon: Award,
    title: "Melihat Bukti Prestasi ADWI 2023",
    text: "Menyaksikan plakat resmi penghargaan 75 Desa Wisata Terbaik Indonesia yang ditandatangani Sandiaga Uno.",
  },
  {
    icon: Ship,
    title: "Dermaga & Armada Perahu Nelayan",
    text: "Menyaksikan ratusan perahu kayu bercat warna-warni bersandar rapi dan bertolak melaut di muara Sungai Musi.",
  },
  {
    icon: Users,
    title: "Kehangatan Senyum Warga & Anak-Anak",
    text: "Bercengkerama hangat dengan warga dan anak-anak kampung nelayan di atas titian jembatan kayu panggung.",
  },
  {
    icon: UtensilsCrossed,
    title: "Icip Pempek Udang & Kemplang Tunu",
    text: "Merasakan sensasi menyantap pempek udang hangat dan kemplang yang baru saja diangkat dari bara arang bakau.",
  },
  {
    icon: Camera,
    title: "Spot Fotografi Lanskap & Human Interest",
    text: "Setiap sudut dermaga, jemuran kemplang tampah bambu, dan aktivitas nelayan menjadi bidikan kamera tak ternilai.",
  },
];

/* FAQ DATA */
const faqData = [
  {
    q: "Apa yang membuat Desa Wisata Sungsang IV berhasil meraih Top 75 ADWI 2023?",
    a: "Desa Wisata Sungsang IV dinilai unggul oleh Kemenparekraf RI karena keberhasilan memadukan kearifan lokal kampung nelayan terapung, inovasi Ekoeduwisata Mangrove Sungsang 4 dengan konservasi pembibitan bakau, kuliner khas pempek udang dan kemplang tunu, serta partisipasi aktif pemuda Bujang Gades dalam Pokdarwis.",
  },
  {
    q: "Berapa jarak dan waktu tempuh menuju Desa Wisata Sungsang dari Kota Palembang?",
    a: "Dari pusat Kota Palembang, jarak tempuh darat adalah sekitar 75 - 85 km melalui Jalan Lintas Palembang – Tanjung Api-Api (TAA) dengan waktu tempuh sekitar 1,5 hingga 2 jam berkendara mobil atau motor. Kondisi jalan saat ini sudah beraspal mulus.",
  },
  {
    q: "Apakah wisatawan bisa mengadopsi bibit mangrove di Ekoeduwisata Mangrove Sungsang 4?",
    a: "Ya! Di kawasan Ekoeduwisata Mangrove Sungsang 4 tersedia area persemaian bibit mangrove Rhizophora. Wisatawan dan rombongan dapat menanam bibit secara langsung dengan papan nama identitas penanam sebagai bentuk kontribusi pelestarian lingkungan pesisir.",
  },
  {
    q: "Apakah tersedia penginapan / homestay bagi wisatawan yang ingin bermalam?",
    a: "Tersedia beberapa homestay rumah panggung terapung milik warga lokal yang dikelola dengan bersih dan nyaman. Anda dapat merasakan pengalaman otentik tidur dengan suara hembusan angin sungai di bawah lantai kayu ulin.",
  },
  {
    q: "Kapan waktu terbaik untuk berkunjung ke Sungsang?",
    a: "Waktu terbaik adalah pagi hari (pukul 06.00 - 09.00 WIB) untuk menyaksikan aktivitas pasar ikan dan persiapan nelayan, atau sore hari (pukul 15.30 - 18.15 WIB) untuk menikmati panorama matahari terbenam (golden sunset) dan proses pemanggangan kemplang.",
  },
  {
    q: "Apa saja oleh-oleh khas Sungsang yang paling wajib dibeli?",
    a: "Oleh-oleh paling dicari adalah Pempek Udang Sungsang beku, Kemplang Tunu (panggang arang bakau), Terasi Belacan Rebon Murni kemasan, serta udang dan ikan asin kering kualitas super langsung dari pengrajin.",
  },
];

const filters = [
  "Semua",
  "Prestasi ADWI",
  "Mangrove & Alam",
  "Kuliner & Laut",
  "Kearifan Lokal",
  "Seni Budaya",
  "Bujang Gades",
] as const;

function Index() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Semua");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [accessTab, setAccessTab] = useState<"darat" | "air">("darat");
  const [showPlaqueModal, setShowPlaqueModal] = useState(false);

  // Filter gallery items
  const filteredGallery = sungsangGallery.filter((g) => {
    if (filter === "Semua") return true;
    return g.category === filter;
  });

  const activeLightboxItem =
    lightboxIndex !== null ? filteredGallery[lightboxIndex] : null;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxIndex(null);
        setShowPlaqueModal(false);
      }
      if (lightboxIndex !== null) {
        if (e.key === "ArrowRight") {
          setLightboxIndex((prev) =>
            prev !== null && prev < filteredGallery.length - 1 ? prev + 1 : 0
          );
        } else if (e.key === "ArrowLeft") {
          setLightboxIndex((prev) =>
            prev !== null && prev > 0 ? prev - 1 : filteredGallery.length - 1
          );
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, filteredGallery.length]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-forest selection:text-white">
      <SiteNav />

      {/* ================= HERO SECTION ================= */}
      <section
        id="home"
        className="relative flex min-h-[100svh] items-center justify-center pt-24 pb-20 overflow-hidden"
      >
        {/* Authentic Background Image: Sungsang Harbor & Kemplang Drying */}
        <img
          src={imgKemplangDryingHarbor}
          alt="Panorama pesisir Desa Wisata Sungsang IV dengan perahu nelayan dan penjemuran kemplang"
          width={1920}
          height={1280}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover scale-105 transition-transform duration-[2000ms]"
        />
        {/* Subtle Coastal Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-deep/75 to-deep/95" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-20 lg:px-10 flex flex-col justify-center">
          {/* Official ADWI 2023 Trophy Badge */}
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setShowPlaqueModal(true)}
                className="group inline-flex items-center gap-2.5 rounded-full border border-sand/40 bg-sand/15 px-4 py-2 backdrop-blur-md transition-all hover:bg-sand/25 hover:border-sand cursor-pointer text-left"
              >
                <Award size={16} className="text-sand animate-pulse" />
                <span className="text-[0.72rem] uppercase tracking-[0.2em] font-bold text-sand group-hover:underline">
                  🏆 Top 75 Desa Wisata Terbaik ADWI 2023 · Kemenparekraf RI
                </span>
                <span className="rounded-full bg-sand/20 px-2 py-0.5 text-[0.62rem] font-semibold uppercase text-white">
                  Lihat Plakat
                </span>
              </button>

              <div className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                <Sparkles size={14} className="text-sand" />
                <span className="text-[0.68rem] uppercase tracking-[0.22em] font-medium text-white">
                  Banyuasin II · Muara Sungai Musi
                </span>
              </div>
            </div>
          </Reveal>

          {/* Main Heading */}
          <Reveal delay={120}>
            <h1 className="mt-7 max-w-4xl font-display text-4xl leading-[1.08] font-bold text-white sm:text-6xl lg:text-7xl">
              PESONA BAHARI DESA WISATA SUNGSANG IV
            </h1>
          </Reveal>

          {/* Tagline */}
          <Reveal delay={220}>
            <p className="mt-6 font-display text-2xl italic text-sand lg:text-3xl max-w-2xl">
              Where Coastal Life Becomes an Unforgettable Story.
            </p>
          </Reveal>

          {/* Subtitle */}
          <Reveal delay={320}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              Sungsang IV menyambut Anda dengan keaslian kehidupan kampung nelayan terapung
              di atas ribuan tiang kayu ulin, keteduhan jembatan kanopi Ekoeduwisata Mangrove,
              hingga kelezatan legendaris pempek udang dan kemplang tunu panggang arang.
            </p>
          </Reveal>

          {/* CTA Actions */}
          <Reveal delay={420}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#about"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-[0.74rem] font-bold uppercase tracking-[0.2em] text-deep shadow-xl transition-all duration-300 hover:bg-forest hover:text-white hover:-translate-y-0.5 active:translate-y-0"
              >
                Tentang Sungsang IV
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#gallery"
                className="inline-flex items-center gap-2 rounded-full px-5 py-4 text-[0.74rem] font-medium uppercase tracking-[0.18em] text-white/80 hover:text-white transition-colors"
              >
                Galeri Foto Asli
              </a>

              <a
                href="https://www.instagram.com/balqisindira?stkn=MTdrZ2J1cmE5dzVpdg=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-pink-400/40 bg-gradient-to-r from-[#833ab4]/40 via-[#fd1d1d]/40 to-[#fcb045]/40 px-6 py-4 text-[0.74rem] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-pink-300 hover:shadow-lg"
              >
                <Instagram size={16} className="text-pink-300" />
                Instagram @balqisindira
              </a>
            </div>
          </Reveal>

          {/* Quick Metrics Bar */}
          <Reveal delay={520}>
            <div className="mt-16 grid grid-cols-2 gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md sm:grid-cols-4 lg:p-7">
              {keyStats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-r border-white/10 last:border-none pr-3"
                >
                  <p className="font-display text-2xl sm:text-3xl font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-sand">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-[0.75rem] text-white/70 hidden sm:block">
                    {stat.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= ABOUT SECTION (WITH ADWI 2023 SHOWCASE) ================= */}
      <section id="about" className="bg-background py-24 lg:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
          {/* Authentic Visual Showcase */}
          <Reveal>
            <div className="relative">
              {/* Primary Image: Duta Pariwisata holding ADWI 2023 plaque */}
              <div className="overflow-hidden rounded-3xl border border-border/80 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.3)]">
                <img
                  src={imgAdwiDutaFull}
                  alt="Duta Pariwisata memegang plakat penghargaan 75 Desa Wisata Terbaik ADWI 2023 Desa Wisata Sungsang IV"
                  loading="lazy"
                  width={1200}
                  height={1504}
                  className="w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Floating Macro Inset: ADWI 2023 Plaque close-up */}
              <div
                onClick={() => setShowPlaqueModal(true)}
                className="absolute -bottom-8 -right-4 hidden w-72 rounded-2xl border-4 border-background bg-card p-3.5 shadow-2xl lg:block coastal-card cursor-pointer group"
              >
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={imgAdwiPlaque}
                    alt="Plakat resmi Juara 75 Desa Wisata Terbaik ADWI 2023 Kemenparekraf RI"
                    loading="lazy"
                    width={400}
                    height={260}
                    className="h-36 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="mt-2.5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-forest flex items-center gap-1">
                      <Award size={14} />
                      Plakat Resmi ADWI 2023
                    </p>
                    <p className="text-[0.7rem] text-muted-foreground">
                      Ditandatangani Menparekraf Sandiaga Uno
                    </p>
                  </div>
                  <span className="rounded-md bg-forest/10 p-1.5 text-forest group-hover:bg-forest group-hover:text-white transition-colors">
                    <ExternalLink size={14} />
                  </span>
                </div>
              </div>

              {/* Corner Badge */}
              <div className="absolute -top-4 -left-4 rounded-full bg-forest px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-lg flex items-center gap-1.5">
                <Award size={14} />
                Desa Wisata Sungsang IV
              </div>
            </div>
          </Reveal>

          {/* Description & Highlights */}
          <Reveal delay={120}>
            <div>
              <p className="eyebrow flex items-center gap-2">
                <Compass size={16} className="text-forest" />
                Tentang Desa Wisata Sungsang IV
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight font-bold text-deep lg:text-5xl">
                HARMONI ALAM MANGROVE & WARISAN KAMPUNG BAHARI
              </h2>
              <div className="mt-6 space-y-4 text-[1.02rem] leading-relaxed text-muted-foreground">
                <p>
                  Terletak di Kecamatan Banyuasin II, Kabupaten Banyuasin, <strong>Desa Wisata Sungsang IV</strong>{" "}
                  adalah permata pesisir Sumatera Selatan yang diakui secara nasional sebagai salah satu dari{" "}
                  <strong className="text-deep font-semibold">75 Desa Wisata Terbaik Anugerah Desa Wisata Indonesia (ADWI 2023)</strong>{" "}
                  oleh Kementerian Pariwisata dan Ekonomi Kreatif RI.
                </p>
                <p>
                  Di sini, Anda tidak sekadar berkunjung, melainkan melangkah ke dalam peradaban bahari yang autentik:
                  menyusuri lorong hijau kanopi <em>Ekoeduwisata Mangrove Sungsang 4</em>, menyaksikan gotong royong warga
                  mengolah hasil tangkapan laut segar, serta bertukar senyum hangat dengan anak-anak dan tetua desa di atas
                  jembatan titian papan kayu.
                </p>
                <p>
                  Didukung oleh generasi muda <strong>Duta Pariwisata, Bujang Gades Sungsang</strong> dan Pokdarwis lokal yang ramah,
                  setiap kunjungan dirancang berkesan, aman, dan penuh wawasan pelestarian lingkungan pesisir.
                </p>
                <div className="pt-2">
                  <a
                    href="https://www.instagram.com/balqisindira?stkn=MTdrZ2J1cmE5dzVpdg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-50/80 px-4 py-2 text-xs font-semibold text-pink-700 transition-all hover:bg-pink-100 hover:border-pink-500/40 hover:shadow-sm"
                  >
                    <Instagram size={14} className="text-pink-600" />
                    <span>Duta Pariwisata Sungsang IV: <strong className="font-bold underline decoration-pink-400">@balqisindira</strong></span>
                  </a>
                </div>
              </div>

              {/* 3 Highlight Cards */}
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {highlights.map((h, i) => (
                  <div
                    key={h.title}
                    style={{ animationDelay: `${i * 100}ms` }}
                    className="h-full rounded-2xl border border-border/80 bg-mist/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-forest/50 hover:bg-card hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest/10 text-forest">
                      <h.icon size={20} />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold text-deep">
                      {h.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {h.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= TOUR PACKAGES (AUTHENTIC PHOTOS) ================= */}
      <section
        id="packages"
        className="bg-mist/40 py-24 lg:py-36 border-y border-border/60"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl font-bold text-deep lg:text-5xl">
                PENGALAMAN TERBAIK DI SUNGSANG IV
              </h2>
            </div>
          </Reveal>

          {/* Cards Grid */}
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tourPackages.map((pkg, idx) => (
              <Reveal key={pkg.id} delay={idx * 120}>
                <div className="flex flex-col h-full overflow-hidden rounded-3xl border border-border/90 bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 hover:border-forest/40">
                  {/* Image & Badge */}
                  <div className="relative h-60 w-full overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full bg-deep/90 px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-sand backdrop-blur-xs">
                        {pkg.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-lg bg-black/65 px-2.5 py-1 text-xs text-white backdrop-blur-xs">
                      <Clock size={13} className="text-sand" />
                      <span>{pkg.duration}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="flex flex-col flex-1 p-6">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-widest text-forest">
                      {pkg.target}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-bold text-deep leading-snug">
                      {pkg.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {pkg.description}
                    </p>

                    {/* Features list */}
                    <ul className="mt-auto space-y-2.5 border-t border-border/80 pt-5 text-xs text-foreground/85">
                      {pkg.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2">
                          <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-forest" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CULINARY SHOWCASE (AUTHENTIC PHOTOS) ================= */}
      <section id="culinary" className="bg-background py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <p className="eyebrow flex items-center gap-2">
                  <UtensilsCrossed size={16} className="text-forest" />
                  Cita Rasa Khas Pesisir
                </p>
                <h2 className="mt-4 font-display text-4xl font-bold text-deep lg:text-5xl">
                  KULINER & HASIL LAUT IKONIK SUNGSANG
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Keistimewaan Sungsang yang tersohor di seluruh Nusantara adalah limpahan udang laut segar
                  dan ikan bermutu tinggi, melahirkan tradisi kuliner istimewa yang dibuat dengan resep warisan leluhur.
                </p>
              </div>

              <div className="hidden md:block">
                <span className="inline-flex items-center gap-2 rounded-full border border-forest/30 bg-forest/10 px-4 py-2 text-xs font-semibold text-forest">
                  <Fish size={15} />
                  100% Olahan Udang & Ikan Laut Segar
                </span>
              </div>
            </div>
          </Reveal>

          {/* Culinary Bento Cards */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {culinaryHighlights.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 100}>
                <div className="flex flex-col h-full rounded-2xl border border-border/80 bg-mist/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-forest/60 hover:bg-card hover:shadow-lg">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest/10 text-forest">
                      <item.icon size={20} />
                    </span>
                    <span className="rounded-full bg-sand/80 px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-deep">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-bold text-deep">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground flex-1">
                    {item.desc}
                  </p>

                  <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs font-semibold text-forest">
                    <span>Wajib Dicoba</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Culinary Banner with Real Shrimp & Fish Filleting Photos */}
          <Reveal delay={250}>
            <div className="mt-14 relative overflow-hidden rounded-3xl border border-border/80 bg-deep text-white">
              <div className="grid lg:grid-cols-2 items-center">
                <div className="p-8 lg:p-14">
                  <span className="text-xs uppercase tracking-[0.25em] font-semibold text-sand">
                    Tradisi Bahari Autentik
                  </span>
                  <h3 className="mt-3 font-display text-3xl font-bold lg:text-4xl text-white">
                    Udang Laut Segar & Panggang Kemplang Arang Bakau
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/80">
                    Di Sungsang IV, udang laut ditangkap setiap hari oleh perahu nelayan muara.
                    Para pengrajin mengolah daging udang dan ikan segar secara telaten menjadi pempek udang
                    dan kemplang tunu yang dipanggang satu demi satu di atas bara arang kayu bakau tanpa digoreng minyak.
                  </p>
                </div>

                {/* Banner Photo: Duta holding fresh shrimp */}
                <div className="relative h-80 lg:h-full min-h-[340px] w-full overflow-hidden">
                  <img
                    src={imgFreshShrimpBasket}
                    alt="Duta Pariwisata menunjukkan udang segar hasil tangkapan nelayan Sungsang"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute bottom-4 right-4 rounded-xl bg-deep/85 px-3 py-1.5 text-xs text-sand backdrop-blur-xs">
                    Udang Segar Tangkapan Nelayan Sungsang IV
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Secondary Process Showcase: Gotong Royong Fillet Ikan & Penjemuran Kemplang */}
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Reveal delay={100}>
              <div className="group relative overflow-hidden rounded-2xl border border-border/80 bg-card">
                <div className="h-48 overflow-hidden">
                  <img
                    src={imgFishFilletingGroup}
                    alt="Ibu-ibu nelayan Sungsang bergotong royong memfillet ikan segar di atas pelataran panggung"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs font-bold uppercase text-forest">01. Gotong Royong Fillet Ikan</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Para ibu nelayan memotong dan memfillet ikan segar harian untuk bahan adonan pempek dan kemplang.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="group relative overflow-hidden rounded-2xl border border-border/80 bg-card">
                <div className="h-48 overflow-hidden">
                  <img
                    src={imgFishMeatPrep}
                    alt="Daging ikan segar kualitas super siap diolah menjadi kuliner pempek khas"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs font-bold uppercase text-forest">02. Daging Ikan & Udang Murni</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Daging segar dipersiapkan secara higienis tanpa campuran bahan kimia pengawet buatan.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="group relative overflow-hidden rounded-2xl border border-border/80 bg-card">
                <div className="h-48 overflow-hidden">
                  <img
                    src={imgKemplangChecking}
                    alt="Duta Pariwisata meninjau proses penjemuran kemplang di atas tampah bambu di tepi muara perahu nelayan"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs font-bold uppercase text-forest">03. Penjemuran Tampah Bambu</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Kemplang dijemur di atas tampah bambu memanfaatkan terik matahari dan semilir angin laut muara.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= EXPLORE (4 PILAR DENGAN FOTO ASLI) ================= */}
      <section id="explore" className="bg-mist/50 py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow flex items-center gap-2">
                <Compass size={16} className="text-forest" />
                Empat Pilar Eksplorasi
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold text-deep lg:text-5xl">
                JELAJAHI SUDUT SUNGSANG IV
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Menemukan keindahan dari hutan mangrove yang asri, tradisi kampung nelayan,
                keanggunan seni tari pesisir, hingga cita rasa kuliner laut legendaris.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {explore.map((c, i) => (
              <Reveal key={c.title} delay={i * 110}>
                <article className="group relative h-[28rem] overflow-hidden rounded-3xl shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep/95 via-deep/45 to-transparent transition-opacity duration-500 group-hover:from-deep" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="text-[0.68rem] uppercase tracking-[0.2em] font-semibold text-sand">
                      {c.badge}
                    </span>
                    <h3 className="mt-1 font-display text-2xl font-bold text-white">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/85">
                      {c.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STORY SECTION (ATMOSPHERIC PHOTO) ================= */}
      <section id="culture" className="relative py-32 lg:py-48 overflow-hidden">
        <img
          src={imgMangroveCanopyLook}
          alt="Suasana keteduhan di bawah kanopi hutan Ekoeduwisata Mangrove Sungsang 4"
          loading="lazy"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover scale-105"
        />
        <div className="hero-overlay absolute inset-0 bg-gradient-to-b from-deep/85 via-deep/80 to-deep/95" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
              <Sparkles size={14} className="text-sand" />
              <span className="text-[0.68rem] uppercase tracking-[0.28em] font-semibold text-white">
                Kisah Dari Ujung Muara Musi
              </span>
            </div>
            <h2 className="mt-6 max-w-3xl font-display text-4xl leading-tight font-bold text-white lg:text-6xl">
              SETIAP TITIAN KAYU MENYIMPAN SEJUTA CERITA
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 text-white/90 md:grid-cols-3">
            <Reveal delay={100}>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-7 backdrop-blur-md">
                <p className="text-sm font-bold uppercase tracking-widest text-sand mb-3">
                  01. Rumah Panggung & Titian Papan
                </p>
                <p className="leading-relaxed text-sm text-white/85">
                  Berdiri di atas ribuan tiang kayu ulin, rumah-rumah warga saling tersambung oleh titian jembatan papan
                  tempat anak-anak berlari gembira, perahu bersandar di beranda, dan tetangga saling bertukar sapa.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-7 backdrop-blur-md">
                <p className="text-sm font-bold uppercase tracking-widest text-sand mb-3">
                  02. Konservasi Ekoeduwisata Mangrove
                </p>
                <p className="leading-relaxed text-sm text-white/85">
                  Masyarakat Sungsang IV menjaga kelestarian benteng hijau pesisir. Hutan mangrove bukan hanya pelindung
                  dari abrasi, namun juga laboratorium alam tempat generasi masa depan belajar mencintai bumi.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-7 backdrop-blur-md">
                <p className="text-sm font-bold uppercase tracking-widest text-sand mb-3">
                  03. Jala, Udang & Rasa Syukur
                </p>
                <p className="leading-relaxed text-sm text-white/85">
                  Dan ketika jala terangkat dari muara, yang terangkat bukan sekadar udang dan ikan segar — melainkan
                  rasa syukur, tradisi maritim yang lestari, dan kehangatan menyambut setiap tamu selayaknya keluarga.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= BUJANG GADES & POKDARWIS SPOTLIGHT (NEW) ================= */}
      <section className="bg-background py-20 border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border/80 bg-mist/40 p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 items-center gap-10">
                <div>
                  <span className="eyebrow flex items-center gap-2">
                    <Users size={16} className="text-forest" />
                    Generasi Muda & Pokdarwis
                  </span>
                  <h3 className="mt-3 font-display text-3xl font-bold lg:text-4xl text-deep">
                    DIPANDU LANGSUNG OLEH BUJANG GADES SUNGSANG
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    Kehangatan Desa Wisata Sungsang IV hadir melalui keterlibatan aktif generasi muda
                    <strong> Duta Pariwisata, Bujang Gades Sungsang</strong> dan Kelompok Sadar Wisata (Pokdarwis).
                    Mereka siap memandu perjalanan Anda menyusuri mangrove, mengenalkan kearifan lokal,
                    serta memastikan kenyamanan dan keamanan selama berkunjung.
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2 text-xs font-semibold text-deep">
                      <CheckCircle2 size={16} className="text-forest" />
                      Pemandu Lokal Berpengalaman
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-deep">
                      <CheckCircle2 size={16} className="text-forest" />
                      Edukasi Konservasi Terpadu
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-deep">
                      <CheckCircle2 size={16} className="text-forest" />
                      Hospitality Ramah Khas Pesisir
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <a
                      href="https://www.instagram.com/balqisindira?stkn=MTdrZ2J1cmE5dzVpdg=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:opacity-95 hover:scale-105 transition-all"
                    >
                      <Instagram size={15} />
                      Instagram @balqisindira
                    </a>
                  </div>
                </div>

                {/* Photos: Forum & Sinergi Bujang Gades */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="overflow-hidden rounded-2xl border border-border/80 shadow-sm">
                    <img
                      src={imgBujangGadesMeeting1}
                      alt="Forum musyawarah generasi muda Bujang Gades Sungsang memajukan desa wisata"
                      loading="lazy"
                      className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="p-3 bg-card">
                      <p className="text-[0.72rem] font-bold text-deep">Forum Musyawarah Pemuda</p>
                      <p className="text-[0.65rem] text-muted-foreground">Pengembangan pariwisata berkelanjutan</p>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-2xl border border-border/80 shadow-sm">
                    <img
                      src={imgBujangGadesHandshake}
                      alt="Sinergi dan jabat tangan kemitraan memajukan promosi Desa Wisata Sungsang IV"
                      loading="lazy"
                      className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="p-3 bg-card">
                      <p className="text-[0.72rem] font-bold text-deep">Sinergi & Kemitraan</p>
                      <p className="text-[0.65rem] text-muted-foreground">Menyambut wisatawan dengan hangat</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= EXPERIENCE (ACTIVITIES & VISUALS) ================= */}
      <section className="bg-background py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow flex items-center gap-2">
                <Compass size={16} className="text-forest" />
                Aktivitas Pilihan
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold text-deep lg:text-5xl">
                PENGALAMAN AUTENTIK DI SUNGSANG IV
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Setiap detik yang Anda luangkan di Desa Wisata Sungsang IV menghadirkan kedekatan
                dengan alam pesisir dan kehangatan warganya.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid items-start gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {experiences.map((e, i) => (
                <Reveal key={e.title} delay={i * 80}>
                  <div className="flex gap-4 rounded-2xl border border-border/80 bg-mist/40 p-5 transition-all duration-300 hover:border-forest/40 hover:bg-card hover:shadow-sm">
                    <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest/10 text-forest">
                      <e.icon size={20} />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-deep">
                        {e.title}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                        {e.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Side Authentic Visuals: Nursery & Kids Laughing */}
            <Reveal delay={150}>
              <div className="grid gap-5">
                <div className="overflow-hidden rounded-3xl border border-border/80 shadow-md">
                  <img
                    src={imgMangroveNursery}
                    alt="Persemaian bibit mangrove Rhizophora berlabel di Ekoeduwisata Mangrove Sungsang 4"
                    loading="lazy"
                    className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="p-3 bg-card border-t border-border/60">
                    <p className="text-xs font-bold text-deep">Persemaian Bibit Mangrove</p>
                    <p className="text-[0.7rem] text-muted-foreground">Program edukasi adopsi bibit bakau untuk wisatawan</p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-3xl border border-border/80 shadow-md">
                  <img
                    src={imgKidsLaughingTogether}
                    alt="Tawa riang anak-anak kampung nelayan di jembatan kayu Sungsang"
                    loading="lazy"
                    className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="p-3 bg-card border-t border-border/60">
                    <p className="text-xs font-bold text-deep">Keceriaan Anak-Anak Pesisir</p>
                    <p className="text-[0.7rem] text-muted-foreground">Kehangatan menyambut tamu selayaknya keluarga</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= GALLERY (AUTHENTIC PHOTOS BENTO GRID) ================= */}
      <section
        id="gallery"
        className="bg-mist/50 py-24 lg:py-36 border-y border-border/60"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <p className="eyebrow flex items-center justify-center gap-2">
                <Camera size={16} className="text-forest" />
                Galeri Visual Asli
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold text-deep lg:text-6xl">
                POTRET AUTENTIK SUNGSANG IV
              </h2>
              <p className="mt-4 font-display text-xl italic text-muted-foreground">
                Koleksi foto asli mendokumentasikan prestasi ADWI 2023, pesona mangrove, kuliner, dan kehidupan nelayan.
              </p>
            </div>
          </Reveal>

          {/* Filter Pills */}
          <Reveal delay={120}>
            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded-full border px-5 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] transition-all duration-300 cursor-pointer ${
                    filter === f
                      ? "border-forest bg-forest text-white shadow-md"
                      : "border-border/80 bg-card text-muted-foreground hover:border-forest/50 hover:text-foreground"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Image Bento Grid */}
          <div className="mt-12 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {filteredGallery.map((g, i) => (
              <button
                key={g.id}
                onClick={() => setLightboxIndex(i)}
                style={{ animationDelay: `${i * 40}ms` }}
                className={`group relative animate-fade-in overflow-hidden rounded-2xl cursor-pointer text-left border border-border/60 shadow-xs transition-transform duration-300 hover:scale-[1.01] ${
                  g.span || ""
                }`}
              >
                <img
                  src={g.src}
                  alt={g.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-deep/95 via-deep/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="rounded-full bg-forest/90 px-2.5 py-0.5 text-[0.62rem] font-semibold uppercase tracking-wider text-white">
                    {g.category}
                  </span>
                  <p className="mt-1.5 text-xs font-bold text-white line-clamp-1">
                    {g.title}
                  </p>
                  <p className="text-[0.68rem] text-white/80 line-clamp-2 mt-0.5">
                    {g.desc}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Lightbox Modal with Next/Prev Controls */}
      {activeLightboxItem && lightboxIndex !== null && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-[70] flex animate-fade-in items-center justify-center bg-deep/95 p-4 backdrop-blur-md"
        >
          {/* Close button */}
          <button
            aria-label="Tutup foto"
            onClick={() => setLightboxIndex(null)}
            className="absolute right-6 top-6 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 cursor-pointer"
          >
            <X size={24} />
          </button>

          {/* Prev Button */}
          <button
            aria-label="Foto sebelumnya"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) =>
                prev !== null && prev > 0 ? prev - 1 : filteredGallery.length - 1
              );
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 cursor-pointer"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Next Button */}
          <button
            aria-label="Foto berikutnya"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) =>
                prev !== null && prev < filteredGallery.length - 1 ? prev + 1 : 0
              );
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 cursor-pointer"
          >
            <ChevronRight size={28} />
          </button>

          {/* Modal Content */}
          <div
            className="max-w-4xl text-center px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-hidden rounded-2xl shadow-2xl bg-black/40 border border-white/10">
              <img
                src={activeLightboxItem.src}
                alt={activeLightboxItem.title}
                className="max-h-[75vh] max-w-full object-contain mx-auto"
              />
            </div>
            <div className="mt-4 flex flex-col items-center gap-1.5 max-w-2xl mx-auto">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-sand/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sand">
                  {activeLightboxItem.category}
                </span>
                <span className="text-xs text-white/50">
                  {lightboxIndex + 1} / {filteredGallery.length}
                </span>
              </div>
              <h4 className="text-base font-bold text-white">
                {activeLightboxItem.title}
              </h4>
              <p className="text-xs leading-relaxed text-white/80">
                {activeLightboxItem.desc}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ADWI 2023 Official Plaque Modal */}
      {showPlaqueModal && (
        <div
          onClick={() => setShowPlaqueModal(false)}
          className="fixed inset-0 z-[80] flex animate-fade-in items-center justify-center bg-deep/95 p-4 backdrop-blur-md"
        >
          <button
            aria-label="Tutup plakat"
            onClick={() => setShowPlaqueModal(false)}
            className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 cursor-pointer"
          >
            <X size={24} />
          </button>

          <div
            className="max-w-3xl rounded-3xl border border-white/20 bg-deep p-6 sm:p-8 text-white shadow-2xl text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-hidden rounded-2xl border border-sand/30 shadow-lg max-h-[60vh] flex items-center justify-center bg-black/40">
              <img
                src={imgAdwiPlaque}
                alt="Plakat Juara 75 Besar ADWI 2023 Desa Wisata Sungsang IV"
                className="max-h-[55vh] object-contain"
              />
            </div>
            <div className="mt-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sand/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-sand">
                <Award size={14} />
                Sertifikat Penghargaan Resmi
              </span>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-white">
                75 DESA WISATA TERBAIK ADWI 2023
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-white/80 max-w-xl mx-auto">
                Diberikan kepada <strong>Desa Wisata Sungsang IV</strong>, Kecamatan Banyuasin II, Kabupaten Banyuasin, Sumatera Selatan.
                Ditandatangani secara resmi oleh Menteri Pariwisata dan Ekonomi Kreatif RI, Sandiaga Salahuddin Uno.
              </p>
              <button
                onClick={() => setShowPlaqueModal(false)}
                className="mt-6 rounded-full bg-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-deep hover:bg-sand transition-colors cursor-pointer"
              >
                Tutup Jendela
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= ACCESS & ROUTE GUIDE ================= */}
      <section id="access" className="bg-background py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow flex items-center gap-2">
                <Navigation size={16} className="text-forest" />
                Panduan Perjalanan
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold text-deep lg:text-5xl">
                CARA MENUJU KE SUNGSANG IV
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Desa Wisata Sungsang IV dapat diakses dengan mudah melalui dua rute menarik: jalur darat yang nyaman
                atau jalur air menyusuri aliran Sungai Musi ke arah muara.
              </p>
            </div>
          </Reveal>

          {/* Route Tabs */}
          <Reveal delay={120}>
            <div className="mt-10 flex gap-3 border-b border-border/80 pb-4">
              <button
                onClick={() => setAccessTab("darat")}
                className={`flex items-center gap-2 rounded-xl px-5 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  accessTab === "darat"
                    ? "bg-forest text-white shadow-md"
                    : "bg-mist text-muted-foreground hover:text-foreground"
                }`}
              >
                <Car size={16} />
                Jalur Darat (Mobil / Motor)
              </button>

              <button
                onClick={() => setAccessTab("air")}
                className={`flex items-center gap-2 rounded-xl px-5 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  accessTab === "air"
                    ? "bg-forest text-white shadow-md"
                    : "bg-mist text-muted-foreground hover:text-foreground"
                }`}
              >
                <Anchor size={16} />
                Jalur Air (Speedboat Tradisional)
              </button>
            </div>
          </Reveal>

          {/* Route Content */}
          <Reveal delay={200}>
            <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
              {accessTab === "darat" ? (
                <div className="rounded-3xl border border-border/80 bg-mist/40 p-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest text-white">
                      <Car size={20} />
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-deep">
                        Rute Jalur Darat (Lintas Tanjung Api-Api)
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Paling direkomendasikan untuk kenyamanan keluarga dan rombongan
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4 text-sm text-foreground/80 leading-relaxed">
                    <p>
                      <strong>Rute Perjalanan:</strong> Kota Palembang ➔ Simpang Bandara SMB II ➔ Jalan Lintas Palembang – Tanjung Api-Api (TAA) ➔ Simpang Sungsang ➔ Kawasan Dermaga Desa Sungsang IV.
                    </p>
                    <p>
                      <strong>Estimasi Waktu:</strong> ± 1,5 hingga 2 Jam (Jarak sekitar 75 - 85 km). Jalan beraspal mulus.
                    </p>
                    <p>
                      <strong>Fasilitas Parkir:</strong> Tersedia area parkir kendaraan mobil dan motor yang aman di dekat gapura pintu masuk dan dermaga desa.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href="https://maps.google.com/?q=Desa+Wisata+Sungsang+IV+Banyuasin"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-deep px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-forest transition-colors shadow-sm"
                    >
                      Buka di Google Maps
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              ) : (
                <div className="rounded-3xl border border-border/80 bg-mist/40 p-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest text-white">
                      <Ship size={20} />
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-deep">
                        Rute Jalur Air (Speedboat Sungai Musi)
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Sensasi petualangan menyusuri urat nadi Sungai Musi ke arah muara
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4 text-sm text-foreground/80 leading-relaxed">
                    <p>
                      <strong>Titik Berangkat:</strong> Dermaga Benteng Kuto Besak (BKB) atau Dermaga Bawah Ampera (Pasar 16 Ilir), Palembang.
                    </p>
                    <p>
                      <strong>Estimasi Waktu:</strong> ± 1,5 Jam perjalanan air menyusuri aliran Sungai Musi ke arah muara Selat Bangka.
                    </p>
                    <p>
                      <strong>Pemandangan Sepanjang Rute:</strong> Kapal tongkang, kehidupan pesisir sungai, vegetasi bakau alami, dan panorama muara.
                    </p>
                  </div>
                </div>
              )}

              {/* Practical Tips Card */}
              <div className="rounded-3xl border border-forest/20 bg-forest/5 p-8">
                <h4 className="font-display text-xl font-bold text-deep flex items-center gap-2">
                  <Sparkles size={18} className="text-forest" />
                  Tips Penting Wisatawan
                </h4>
                <ul className="mt-5 space-y-3.5 text-xs text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 h-2 w-2 rounded-full bg-forest shrink-0" />
                    <span>
                      <strong>Waktu Datang Terbaik:</strong> Pagi (06.00 WIB) untuk lelang hasil laut, atau sore (15.30 WIB) untuk menikmati semarak sunset dan kemplang tunu.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 h-2 w-2 rounded-full bg-forest shrink-0" />
                    <span>
                      <strong>Alas Kaki:</strong> Kenakan sepatu sneakers atau sandal gunung berpermukaan datar yang nyaman untuk berjalan di atas jembatan titian papan kayu.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 h-2 w-2 rounded-full bg-forest shrink-0" />
                    <span>
                      <strong>Uang Tunai:</strong> Siapkan uang tunai secukupnya untuk berbelanja pempek udang dan kemplang langsung dari pengrajin warga lokal.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 h-2 w-2 rounded-full bg-forest shrink-0" />
                    <span>
                      <strong>Kamera:</strong> Bawa kamera atau smartphone dengan memori cukup karena banyak spot foto human interest dan alam eksotis.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section id="faq" className="bg-mist/40 py-24 lg:py-36 border-t border-border/60">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <Reveal>
            <div className="text-center">
              <p className="eyebrow flex items-center justify-center gap-2">
                <HelpCircle size={16} className="text-forest" />
                Tanya Jawab
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold text-deep lg:text-5xl">
                PERTANYAAN UMUM WISATAWAN
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Informasi penting seputar Desa Wisata Sungsang IV, fasilitas, dan paket kunjungan.
              </p>
            </div>
          </Reveal>

          {/* Accordion List */}
          <div className="mt-14 space-y-4">
            {faqData.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <Reveal key={faq.q} delay={index * 70}>
                  <div className="rounded-2xl border border-border/80 bg-card transition-all duration-200 overflow-hidden shadow-xs hover:border-forest/40">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between p-6 text-left cursor-pointer"
                    >
                      <span className="font-display text-lg font-bold text-deep pr-4">
                        {faq.q}
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mist text-forest transition-transform duration-300 ${
                          isOpen ? "rotate-180 bg-forest text-white" : ""
                        }`}
                      >
                        <ChevronDown size={18} />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-sm leading-relaxed text-muted-foreground border-t border-border/40 animate-fade-in">
                        {faq.a}
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer id="contact" className="bg-deep text-white border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1.2fr]">
            <div>
              <div className="flex items-center gap-3">
                <img
                  src="/favicon.svg"
                  alt="Logo Desa Wisata Sungsang IV"
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain rounded-xl shadow-xs"
                />
                <p className="font-display text-3xl font-bold tracking-[0.25em] text-white">
                  SUNGSANG IV
                </p>
              </div>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-sand font-semibold">
                Juara 75 Desa Wisata Terbaik ADWI 2023
              </p>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-white/75">
                Menghadirkan pesona bahari autentik di muara Sungai Musi. Nikmati pempek udang khas,
                susur jembatan Ekoeduwisata Mangrove 4, dan keramahan hangat di atas rumah panggung terapung.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="https://www.instagram.com/balqisindira?stkn=MTdrZ2J1cmE5dzVpdg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] px-5 py-2.5 text-xs font-semibold text-white shadow-md hover:opacity-95 hover:scale-105 transition-all"
                >
                  <Instagram size={15} />
                  Instagram @balqisindira
                </a>
              </div>
            </div>

            <div>
              <p className="text-[0.72rem] uppercase tracking-[0.25em] font-semibold text-sand">
                Navigasi Cepat
              </p>
              <nav className="mt-5 flex flex-col gap-2.5 text-sm text-white/80">
                <a href="#home" className="w-fit transition-colors hover:text-sand">Beranda</a>
                <a href="#about" className="w-fit transition-colors hover:text-sand">Tentang Sungsang IV</a>
                <a href="#packages" className="w-fit transition-colors hover:text-sand">Paket Wisata</a>
                <a href="#culinary" className="w-fit transition-colors hover:text-sand">Kuliner Khas</a>
                <a href="#gallery" className="w-fit transition-colors hover:text-sand">Galeri Foto Asli</a>
                <a href="#access" className="w-fit transition-colors hover:text-sand">Panduan Rute</a>
                <a href="#faq" className="w-fit transition-colors hover:text-sand">Tanya Jawab (FAQ)</a>
                <a
                  href="https://www.instagram.com/balqisindira?stkn=MTdrZ2J1cmE5dzVpdg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 w-fit text-pink-300 transition-colors hover:text-pink-200 pt-1 font-medium"
                >
                  <Instagram size={14} />
                  Instagram @balqisindira
                </a>
              </nav>
            </div>

            <div>
              <p className="text-[0.72rem] uppercase tracking-[0.25em] font-semibold text-sand">
                Lokasi & Media Sosial
              </p>
              <ul className="mt-5 space-y-4 text-sm text-white/80">
                <li className="flex gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-sand" />
                  <span>
                    Kawasan Ekoeduwisata Mangrove 4 & Dermaga Desa Sungsang IV, Kecamatan Banyuasin II, Kabupaten Banyuasin, Sumatera Selatan
                  </span>
                </li>
                <li className="flex gap-3">
                  <Instagram size={18} className="mt-0.5 shrink-0 text-pink-400" />
                  <a
                    href="https://www.instagram.com/balqisindira?stkn=MTdrZ2J1cmE5dzVpdg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sand transition-colors"
                  >
                    @balqisindira (Instagram Duta Pariwisata Sungsang IV)
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
            <p>© {new Date().getFullYear()} Desa Wisata Sungsang IV. Seluruh Hak Cipta Dilindungi.</p>
            <p className="text-center sm:text-right">
              Kelompok Sadar Wisata (Pokdarwis) · Dinas Pariwisata Banyuasin, Sumatera Selatan
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Instagram and Scroll-to-Top Button */}
      <FloatingActions />
    </div>
  );
}
export default Index;
