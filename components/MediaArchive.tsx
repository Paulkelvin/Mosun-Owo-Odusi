'use client'

import { useState } from 'react'
import { AnimatePresence, motion, useMotionValue } from 'framer-motion'
import Image from 'next/image'
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Image as ImageIcon,
  Maximize2,
  X,
  ZoomIn,
  ZoomOut,
} from 'lucide-react'
import DotPattern from './DotPattern'

type ProjectFilter = 'all' | 'ogstep' | 'consults' | 'school'

type GalleryImage = {
  src: string
  alt: string
  category: string
  project: Exclude<ProjectFilter, 'all'>
  caption?: string
}

type VideoHighlight = {
  id: string
  title: string
  src: string
  kind?: 'iframe' | 'mp4'
  project: Exclude<ProjectFilter, 'all'>
  series?: string
}

const amvilleSchoolImageFiles = [
  '32191531_1010647379101058_8761177463532290048_n.jpg',
  '32207341_1010647345767728_532342968497995776_n.jpg',
  '492395805_3131546687011106_3819763382899474398_n.jpg',
  '492513519_3133084366857338_7106916571808794356_n.jpg',
  '492665641_3133084323524009_1421421123952328601_n.jpg',
  '493274069_3129988460500262_7435562253635418984_n.jpg',
  '493464755_3126501487515626_2666500780543568394_n.jpg',
  '494042548_3131367793695662_3861622649842334219_n.jpg',
  '494065573_3131546703677771_3882267901815472522_n.jpg',
  '494149103_3133082936857481_4677482530327605050_n.jpg',
  '494151786_3131546507011124_7424147878127108594_n.jpg',
  '494153182_3133084186857356_5563635929799904145_n.jpg',
  '494198837_3133734243459017_2743691675309893103_n.jpg',
  '494203869_3133084356857339_5694652705001493492_n.jpg',
  '494351832_3135118066653968_2498478728279829794_n.jpg',
  '494486803_3133082943524147_5868692918113333919_n.jpg',
  '494718595_3133734376792337_7672212559214372656_n.jpg',
  '494718626_3133084363524005_3056439979516402545_n.jpg',
  '494757206_3133734223459019_5649304177932934833_n.jpg',
  '494927901_3133082890190819_8683606523473826316_n.jpg',
  '495345181_3142609959238112_1021782434635614634_n.jpg',
  '495467024_3142876449211463_3207262548734877107_n.jpg',
  '495560006_3143204062512035_8647700429587335525_n.jpg',
  '495605240_3142876469211461_3819089734391182584_n.jpg',
  '495929228_3143204072512034_4082905641541503189_n.jpg',
  '496004702_3143204112512030_8916848118325411841_n.jpg',
  '496039857_3142871889211919_2016862950273819946_n.jpg',
  '496093308_3146150692217372_855948467040405015_n.jpg',
  '496094370_3146150728884035_5640144519273671681_n.jpg',
  '496302717_3142871955878579_7436781047252273618_n.jpg',
  '496431027_3142872209211887_8381447793832270055_n.jpg',
  '496768458_3142872139211894_8981526268468525852_n.jpg',
  '496846026_3143204475845327_181464409054056447_n.jpg',
  '496861406_3146150808884027_6318276303912791107_n.jpg',
  '497733032_3150207031811738_816517799275278899_n.jpg',
  '497786046_3146150718884036_7528200555851012017_n.jpg',
  '497922003_3150207035145071_9167000127100969446_n (1).jpg',
  '497922003_3150207035145071_9167000127100969446_n.jpg',
  '498637218_3149477605218014_2378160504742126547_n.jpg',
  '501309677_3160904207408687_3437259377520491577_n.jpg',
  '506629156_3182339745265133_6156151194386877499_n.jpg',
  '88316779_1544154315750359_6180190968071847936_n.jpg',
  'Amville School Children @ the Little Saints Orphanage.jpg',
  'Teachers day.jpg',
] as const

const fieldImageFiles = [
  'IMG_0807.jpg',
  'IMG_0808.jpg',
  'IMG_0815.jpg',
  'IMG_0816.jpg',
  'IMG_0817.jpg',
  'IMG_0818.jpg',
  'IMG_0819.jpg',
  'IMG_0820.jpg',
  'IMG_0821.jpg',
  'IMG_0822.jpg',
  'IMG_0823.jpg',
  'IMG_0824.jpg',
  'IMG_0827.jpg',
  'IMG_0828.jpg',
  'IMG_0829.jpg',
  'IMG_0830.jpg',
  'IMG_0831.jpg',
  'IMG_0833.jpg',
  'IMG_0834.jpg',
  'IMG_0835.jpg',
  'IMG_0836.jpg',
  'IMG_0837.jpg',
] as const

const consultImageFiles = [
  '09cb198b-093a-4ba4-b305-3a207acadac7.JPG',
  '348e8c2b-ac52-4da6-a9f4-443e96904519.JPG',
  '4df97697-2737-4a5d-b94a-f787c4b0a95d.JPG',
  '8f8f2a42-c972-4edc-9059-60e977b56dc9.JPG',
  '940d84d9-2c69-4eea-813a-b8a3535c9427.JPG',
  'a872e439-a81b-4278-b440-d838586c96e3.JPG',
  'b29b85aa-3f83-4920-b2a6-a1a26f8c6a95.JPG',
  'c8c45d4b-c691-40ec-ab3e-6e9096ec3ae2.JPG',
  'cafe7245-01e4-4457-89c0-45bc110d3ca6.JPG',
  'dc97410a-cb60-4730-af7c-70bb963be437.JPG',
  'f50119ae-fcf2-42f8-aac6-7fba05f225bf.JPG',
  'f82400ed-90fc-4e4c-94b6-cc996c58d63e.JPG',
] as const

const galleryImages: GalleryImage[] = [
  { src: '/images/OGSTEP_outreach.JPG', alt: 'OGSTEP outreach session with community members', category: 'Leadership & Outreach', project: 'ogstep' },
  { src: '/images/OGSTEP_Mosun_Owo-Odusi.JPG', alt: 'Mosun Owo-Odusi speaking during OGSTEP session', category: 'Leadership & Outreach', project: 'ogstep' },
  { src: '/images/Mosun Owo-Odusi.jpg', alt: 'Professional portrait of Mosun Owo-Odusi', category: 'Leadership & Outreach', project: 'ogstep' },
  { src: '/images/Mosun Owo-Odusi.png', alt: 'Alternate portrait of Mosun Owo-Odusi', category: 'Leadership & Outreach', project: 'ogstep' },
  { src: '/images/Mosun Owo-Odusi-OGSTEP_project_coordinator.jpg', alt: 'Mosun Owo-Odusi as OGSTEP Project Coordinator', category: 'Leadership & Outreach', project: 'ogstep' },
  { src: '/images/OGSTEP_Agric2.JPG', alt: 'OGSTEP field engagement with farmers', category: 'Leadership & Outreach', project: 'ogstep' },
  { src: '/images/Agric_OGSFAFA.JPG', alt: 'Farmers participating in OGSTEP agricultural programme', category: 'Agriculture & Value Chains', project: 'ogstep' },
  { src: '/images/Agric_OGSFAFA2.JPG', alt: 'OGSTEP-supported agricultural activities in Ogun State', category: 'Agriculture & Value Chains', project: 'ogstep' },
  { src: '/images/OGSTEP_Agric.JPG', alt: 'OGSTEP agricultural training and demonstration', category: 'Agriculture & Value Chains', project: 'ogstep' },
  { src: '/images/OGSTEP_Agric (1).JPG', alt: 'Featured OGSTEP agricultural field visit', category: 'Agriculture & Value Chains', project: 'ogstep' },
  { src: '/images/OGSTEP_skills.JPG', alt: 'Skills development session under OGSTEP', category: 'Skills & Education', project: 'ogstep' },
  { src: '/images/OGSTEP_skills1.jpeg', alt: 'Participants at OGSTEP skills training', category: 'Skills & Education', project: 'ogstep' },
  { src: '/images/OGSTEP_skills2.jpeg', alt: 'Hands-on technical training session', category: 'Skills & Education', project: 'ogstep' },
  { src: '/images/OGSTEP_skills3.jpeg', alt: 'Group photo from OGSTEP skills programme', category: 'Skills & Education', project: 'ogstep' },
  { src: '/images/Government_Technical_College_Before_Rehabilitation.png', alt: 'Government Technical College buildings before rehabilitation under OGSTEP', category: 'Before & After: Technical Colleges', project: 'ogstep' },
  { src: '/images/Government_Technical_College_After_Rehabilitation.png', alt: 'Government Technical College buildings after rehabilitation under OGSTEP', category: 'Before & After: Technical Colleges', project: 'ogstep' },
  { src: '/images/Before1.png', alt: 'Project site condition before intervention 1', category: 'Before & After: Project Sites', project: 'ogstep' },
  { src: '/images/After1.png', alt: 'Project site condition after intervention 1', category: 'Before & After: Project Sites', project: 'ogstep' },
  { src: '/images/Before2.png', alt: 'Project site condition before intervention 2', category: 'Before & After: Project Sites', project: 'ogstep' },
  { src: '/images/After2.png', alt: 'Project site condition after intervention 2', category: 'Before & After: Project Sites', project: 'ogstep' },
  { src: '/images/Before3.png', alt: 'Project site condition before intervention 3', category: 'Before & After: Project Sites', project: 'ogstep' },
  { src: '/images/After3.png', alt: 'Project site condition after intervention 3', category: 'Before & After: Project Sites', project: 'ogstep' },
  { src: '/images/Before4.png', alt: 'Project site condition before intervention 4', category: 'Before & After: Project Sites', project: 'ogstep' },
  { src: '/images/After4.png', alt: 'Project site condition after intervention 4', category: 'Before & After: Project Sites', project: 'ogstep' },
  { src: '/images/OGSTEP_CORS.webp', alt: 'OGSTEP CORS geospatial infrastructure mast', category: 'Land Administration & GIS', project: 'ogstep' },
  { src: '/images/OGSTEP_CORS2.webp', alt: 'CORS station equipment installed outdoors', category: 'Land Administration & GIS', project: 'ogstep' },
  { src: '/images/OGSTEP_CORS_indoor_unit.webp', alt: 'Indoor CORS control unit rack', category: 'Land Administration & GIS', project: 'ogstep' },
  { src: '/images/OGSTEP_CORS_indoor_unit2.webp', alt: 'Detail view of CORS indoor equipment', category: 'Land Administration & GIS', project: 'ogstep' },
  { src: '/images/OGSTEP_CORS_Training_by_sivan_design.webp', alt: 'Training on geospatial systems by technical partners', category: 'Land Administration & GIS', project: 'ogstep' },
  { src: '/images/OGSTEP_surveying_equipment_training_by_Sivan_Design.webp', alt: 'Surveying equipment demonstration during OGSTEP training', category: 'Land Administration & GIS', project: 'ogstep' },
  ...fieldImageFiles.map((fileName, index) => ({
    src: `/images/gallery/${fileName}`,
    alt: `OGSTEP field highlight ${index + 1}`,
    category: 'Field Highlights',
    project: 'ogstep' as const,
  })),
  ...consultImageFiles.map((fileName, index) => ({
    src: `/images/amville-consults/${fileName}`,
    alt: `Amville Consults highlight ${index + 1}`,
    category: index === 4 ? 'Student Leadership' : index === 5 ? 'School Re-engineering' : index === 8 ? 'Scholarships & Awards' : 'Consulting & Training',
    project: 'consults' as const,
  })),
  ...amvilleSchoolImageFiles.map((fileName, index) => ({
    src: `/images/amville-school/${fileName}`,
    alt: `Amville School highlight ${index + 1}`,
    category: 'Amville School Highlights',
    project: 'school' as const,
  })),
]

const beforeAfterGallerySrcs = new Set<string>([
  '/images/Government_Technical_College_Before_Rehabilitation.png',
  '/images/Government_Technical_College_After_Rehabilitation.png',
  '/images/Before1.png',
  '/images/After1.png',
  '/images/Before2.png',
  '/images/After2.png',
  '/images/Before3.png',
  '/images/After3.png',
  '/images/Before4.png',
  '/images/After4.png',
])

const beforeAfterPairs = [
  {
    label: 'Government Technical College Rehabilitation',
    context: 'One of eight Government Technical Colleges upgraded under OGSTEP to modern, skills-focused learning environments.',
    before: '/images/Government_Technical_College_Before_Rehabilitation.png',
    after: '/images/Government_Technical_College_After_Rehabilitation.png',
  },
  {
    label: 'Project Site Transformation 1',
    context: 'Illustrative transformation of learning and community environments before and after OGSTEP and related interventions.',
    before: '/images/Before1.png',
    after: '/images/After1.png',
  },
  {
    label: 'Project Site Transformation 2',
    context: 'Improved infrastructure and usability following targeted investment and rehabilitation.',
    before: '/images/Before2.png',
    after: '/images/After2.png',
  },
  {
    label: 'Project Site Transformation 3',
    context: 'Upgraded facilities supporting safer, more effective learning and workspaces.',
    before: '/images/Before3.png',
    after: '/images/After3.png',
  },
  {
    label: 'Project Site Transformation 4',
    context: 'Visible upgrade from informal settings to more structured, well-equipped environments.',
    before: '/images/Before4.png',
    after: '/images/After4.png',
  },
] as const

const videoHighlights: VideoHighlight[] = [
  { id: 'ogstep-documentary-achievements', title: 'OGSTEP Documentary: Achievements Overview', src: 'https://drive.google.com/file/d/1EwkTDB1JdZlX7mNIeR2w-bazeYMMAJ3W/preview', kind: 'iframe', project: 'ogstep', series: 'General Highlights' },
  { id: 'amville-school-video-1', title: 'Amville School Video Highlight 1', src: '/images/amville-school/AQNzwG2CsMq3htCToofp3Br6ramI6LAbgKpWRyG0kCKczhfSUMGN2J4Wteu9XniZt3pqxNMf-MXVP-_BsQhMi6uC.mp4', kind: 'mp4', project: 'school', series: 'Amville School Highlights' },
  { id: 'amville-school-video-2', title: 'Amville School Video Highlight 2', src: '/images/amville-school/AQOfeAmIX2zzNCYS7t1NjWWSH7B3g1E1XwLAAsd70arW4mEim3veHoCnUO_akGz6htUXj10WYWcKQLZRIuVyMuM.mp4', kind: 'mp4', project: 'school', series: 'Amville School Highlights' },
  { id: 'bee-sango', title: 'BEE Sango', src: 'https://drive.google.com/file/d/1KboTbHPEiWTpKNoEn_z-stQUY5gf2VvF/preview', kind: 'iframe', project: 'ogstep', series: 'Documentary Series 1' },
  { id: 'cassava-processing-center-ipokia', title: 'Cassava Processing Center Ipokia', src: 'https://drive.google.com/file/d/1Dz-20puxaCohKK_mjes6EaYNp2t3SJf_/preview', kind: 'iframe', project: 'ogstep', series: 'Documentary Series 1' },
  { id: 'ijebu-ode-zonal-planning-office-rehabilitation', title: 'Ijebu Ode Zonal Planning Office Rehabilitation', src: 'https://drive.google.com/file/d/1dY5_TOxX13U_iRkg-QL5iwY4fg3CVG8x/preview', kind: 'iframe', project: 'ogstep', series: 'Documentary Series 1' },
  { id: 'ota-aquaculture-intervention', title: 'Ota Aquaculture Intervention', src: 'https://drive.google.com/file/d/11HppPWfY1u8pua8nhDiShRNNKuPkaui0/preview', kind: 'iframe', project: 'ogstep', series: 'Documentary Series 1' },
  { id: 'remo-high-school-rehabilitation', title: 'Remo High School Rehabilitation', src: 'https://drive.google.com/file/d/1zSubLFaNkZguQ-e8DMS4cjOpCYU_W-El/preview', kind: 'iframe', project: 'ogstep', series: 'Documentary Series 1' },
  { id: 'agriculture-mechanization-intervention', title: 'Agriculture Mechanization Intervention', src: 'https://drive.google.com/file/d/1JcU_W2NbczX_EuhKR3d37z7FaAItsYjj/preview', kind: 'iframe', project: 'ogstep', series: 'Documentary Series 1' },
  { id: 'yewa-egbado-college-rehabilitation', title: 'Yewa Egbado College Rehabilitation', src: 'https://drive.google.com/file/d/1mvnSraO-8X7ZRCfuOUISrsYaGaOIB00L/preview', kind: 'iframe', project: 'ogstep', series: 'Documentary Series 1' },
  { id: 'ministry-of-education-research-and-statistics-rehabilitation', title: 'Ministry of Education Research and Statistics Rehabilitation', src: 'https://drive.google.com/file/d/1JKKpe76s303DzItk4gEwObQ0iA0Tc48T/preview', kind: 'iframe', project: 'ogstep', series: 'Documentary Series 2' },
  { id: 'owowo-farm-settlement-agricultural-intervention', title: 'Owowo Farm Settlement Agricultural Intervention', src: 'https://drive.google.com/file/d/1QHB4p7QtA0mM5sQi9tBvrY_hK2ttIABz/preview', kind: 'iframe', project: 'ogstep', series: 'Documentary Series 2' },
  { id: 'nawairuddeen-grammar-school-rehabilitation', title: 'Nawairuddeen Grammar School Rehabilitation', src: 'https://drive.google.com/file/d/19k_eCiQ0AjsHleiegOy6VMAiWjBCnxnE/preview', kind: 'iframe', project: 'ogstep', series: 'Documentary Series 3' },
]

const descriptions: Record<ProjectFilter, string> = {
  all: 'Visual highlights across OGSTEP, Amville Consults, and Amville School.',
  ogstep: 'A visual story of agricultural transformation, skills development, and geospatial reforms across the OGSTEP portfolio.',
  consults: 'Educational consulting, CSR projects, and capacity-building initiatives through Amville Consults.',
  school: 'Educational programmes and community moments from Amville School.',
}

export default function MediaArchive() {
  const [galleryFilter, setGalleryFilter] = useState<ProjectFilter>('all')
  const [galleryMode, setGalleryMode] = useState<'preview' | 'expanded' | 'full'>('preview')
  const [isImageZoomOpen, setIsImageZoomOpen] = useState(false)
  const [zoomImageIndex, setZoomImageIndex] = useState<number | null>(null)
  const [zoomLevel, setZoomLevel] = useState(1)
  const zoomPanX = useMotionValue(0)
  const zoomPanY = useMotionValue(0)

  const nonBeforeAfterImages = galleryImages.filter((img) => !beforeAfterGallerySrcs.has(img.src))
  const filteredImages = galleryFilter === 'all' ? nonBeforeAfterImages : nonBeforeAfterImages.filter(img => img.project === galleryFilter)
  const filteredVideos = galleryFilter === 'all' ? videoHighlights : videoHighlights.filter(video => video.project === galleryFilter)
  const visibleGalleryImages = galleryMode === 'preview' ? filteredImages.slice(0, 6) : galleryMode === 'expanded' ? filteredImages.slice(0, 12) : filteredImages

  const resetZoomPosition = () => {
    setZoomLevel(1)
    zoomPanX.set(0)
    zoomPanY.set(0)
  }

  const openZoomForImage = (img: GalleryImage) => {
    const index = galleryImages.findIndex((g) => g.src === img.src && g.alt === img.alt && g.category === img.category)
    if (index !== -1) {
      setZoomImageIndex(index)
      resetZoomPosition()
      setIsImageZoomOpen(true)
    }
  }

  const openZoomForSrc = (src: string) => {
    const img = galleryImages.find((g) => g.src === src)
    if (img) openZoomForImage(img)
  }

  const closeZoom = () => {
    setIsImageZoomOpen(false)
    setZoomImageIndex(null)
    resetZoomPosition()
  }

  const goToZoomImage = (direction: 1 | -1) => {
    if (zoomImageIndex === null) return
    setZoomImageIndex((zoomImageIndex + direction + galleryImages.length) % galleryImages.length)
    resetZoomPosition()
  }

  const groupedVideos = filteredVideos.reduce((acc, video) => {
    const key = video.series || 'General Highlights'
    if (!acc[key]) acc[key] = []
    acc[key].push(video)
    return acc
  }, {} as Record<string, VideoHighlight[]>)

  const sortedVideoGroups = Object.keys(groupedVideos).sort((a, b) => {
    if (a === 'General Highlights') return 1
    if (b === 'General Highlights') return -1
    return a.localeCompare(b)
  })

  return (
    <section id="media-archive" className="section-padding bg-slate-950 relative overflow-hidden">
      <DotPattern position="top-left" color="gold" size="sm" rows={4} cols={5} opacity={0.4} />
      <DotPattern position="bottom-right" color="blue" size="sm" rows={5} cols={4} opacity={0.35} />
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-32 right-0 w-80 h-80 bg-primary-500/30 blur-3xl rounded-full" />
        <div className="absolute -bottom-32 left-0 w-80 h-80 bg-gold-500/20 blur-3xl rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6 lg:mb-8"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Media Archive</h2>
          <p className="text-slate-200/80 max-w-2xl mx-auto text-lg mb-6">{descriptions[galleryFilter]}</p>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              ['all', 'All Media'],
              ['ogstep', 'OGSTEP'],
              ['consults', 'Amville Consults'],
              ['school', 'Amville School'],
            ].map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setGalleryFilter(key as ProjectFilter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  galleryFilter === key
                    ? 'bg-primary-600 text-white shadow-lg border-2 border-primary-500'
                    : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/60 border-2 border-slate-700/50 hover:border-slate-600/50'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </motion.div>

        {(galleryFilter === 'all' || galleryFilter === 'ogstep') && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 mb-8 rounded-2xl border border-slate-800/70 bg-slate-900/80 px-4 py-6 sm:px-6 sm:py-7 shadow-[0_18px_45px_rgba(15,23,42,0.85)] -mx-2 sm:mx-0"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-50 mb-1">Before &amp; After: Infrastructure Transformation</h3>
                <p className="text-sm text-slate-300 max-w-3xl">See how OGSTEP investments transformed Government Technical Colleges and key project sites from under-resourced spaces into modern, skills-ready environments.</p>
              </div>
              <div className="flex flex-wrap gap-2 text-[11px] text-slate-300">
                <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 border border-emerald-400/40 text-emerald-200">8 Technical Colleges Upgraded</span>
                <span className="inline-flex items-center rounded-full bg-sky-500/10 px-3 py-1 border border-sky-400/40 text-sky-200">Learning Environments Modernised</span>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 select-none">
              {beforeAfterPairs.map((pair) => (
                <div key={pair.label} className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-[0_14px_36px_rgba(15,23,42,0.9)]">
                  <div className="grid grid-cols-2 gap-px bg-slate-900/60">
                    {(['before', 'after'] as const).map((state) => (
                      <div key={state} className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                        <Image
                          src={pair[state]}
                          alt={`${pair.label} - ${state}`}
                          fill
                          className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03] pointer-events-none select-none"
                          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 220px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                        <div className={`absolute left-2 top-2 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white shadow-sm ${state === 'before' ? 'bg-red-500/90' : 'bg-emerald-500/95'}`}>
                          {state}
                        </div>
                        <button type="button" onClick={() => openZoomForSrc(pair[state])} className="absolute inset-0" aria-label={`${pair.label} ${state} - view larger`}>
                          <span className="sr-only">View {state} image</span>
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="px-3.5 py-3 border-t border-slate-800/80 bg-slate-950/80">
                    <p className="text-xs font-semibold text-slate-100 mb-1 line-clamp-2">{pair.label}</p>
                    <p className="text-[11px] text-slate-400 leading-snug line-clamp-3">{pair.context}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {filteredVideos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="mb-10 rounded-2xl border border-slate-800/70 bg-slate-900/80 px-4 py-6 sm:px-6 sm:py-7 shadow-[0_18px_45px_rgba(15,23,42,0.85)] -mx-2 sm:mx-0"
          >
            <div className="mb-5">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-50 mb-1">Video Highlights</h3>
              <p className="text-sm text-slate-300 max-w-3xl">Short clips, documentary footage, school moments, and field coverage.</p>
            </div>
            <div className="space-y-10">
              {sortedVideoGroups.map((seriesKey) => (
                <div key={seriesKey} className="space-y-5">
                  {sortedVideoGroups.length > 1 && <h4 className="text-base sm:text-lg font-bold text-slate-100 border-b border-slate-800/80 pb-2">{seriesKey}</h4>}
                  <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {groupedVideos[seriesKey].map((video) => (
                      <div key={video.id} className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 shadow-[0_16px_40px_rgba(15,23,42,0.9)]">
                        <div className={`relative w-full bg-slate-900 ${video.kind === 'mp4' ? 'aspect-video' : 'aspect-[16/10]'}`}>
                          {video.kind === 'mp4' ? (
                            <video src={video.src} title={video.title} controls preload="metadata" controlsList="nodownload noplaybackrate" disablePictureInPicture className="absolute inset-0 h-full w-full object-cover" />
                          ) : (
                            <>
                              <iframe
                                src={video.src}
                                title={video.title}
                                loading="lazy"
                                className="absolute inset-0 h-full w-full border-0"
                                referrerPolicy="no-referrer"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                              />
                              <div aria-hidden="true" className="absolute right-0 top-0 z-10 h-16 w-20 bg-transparent" />
                            </>
                          )}
                        </div>
                        <div className="px-3.5 py-3 border-t border-slate-800/80 bg-slate-950/90 flex flex-col justify-center min-h-[60px]">
                          <p className="text-xs sm:text-sm font-semibold text-slate-50 leading-snug line-clamp-2">{video.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance] -mx-2 sm:mx-0">
          {visibleGalleryImages.map((img, index) => (
            <motion.button
              key={img.src + index}
              type="button"
              onClick={() => openZoomForImage(img)}
              className="mb-4 block w-full text-left break-inside-avoid rounded-2xl overflow-hidden relative group shadow-[0_18px_45px_rgba(15,23,42,0.6)] border border-slate-800/60 bg-slate-900/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 select-none"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
              whileHover={{ y: -6 }}
            >
              <div className="relative w-full overflow-hidden">
                <div className={`relative w-full ${img.project === 'consults' ? 'h-80' : 'h-72'}`}>
                  <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover object-center transition-transform duration-500 group-hover:scale-105 pointer-events-none select-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                  <div className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-slate-950/85 px-2.5 py-1 text-[10px] font-medium text-slate-50 shadow-sm opacity-90 sm:opacity-0 sm:group-hover:opacity-100 sm:translate-y-1 sm:group-hover:translate-y-0 transition-all duration-200">
                    <ImageIcon className="h-3 w-3" />
                    <span>View photo</span>
                  </div>
                </div>
                {img.project !== 'consults' && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-1">
                    <span className="inline-flex px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-900/80 text-slate-100 border border-slate-700/80 w-fit">{img.category}</span>
                    <p className="text-sm text-slate-100/95 leading-snug text-left">{img.caption ?? img.alt}</p>
                  </div>
                )}
              </div>
            </motion.button>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-2">
          <p className="text-xs text-slate-400">
            Showing {visibleGalleryImages.length} of {filteredImages.length} photos
            {galleryFilter !== 'all' && ` (${galleryFilter === 'ogstep' ? 'OGSTEP' : galleryFilter === 'consults' ? 'Amville Consults' : 'Amville School'})`}
          </p>
          <button
            type="button"
            onClick={() => setGalleryMode(prev => prev === 'preview' ? 'expanded' : prev === 'expanded' ? 'full' : 'preview')}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/70 px-5 py-2.5 text-sm font-semibold text-slate-50 shadow-sm hover:bg-slate-800/80 transition-colors"
          >
            {galleryMode === 'preview' && <><span>See more photos</span><ChevronDown className="h-4 w-4" /></>}
            {galleryMode === 'expanded' && <><span>View full media</span><ChevronDown className="h-4 w-4" /></>}
            {galleryMode === 'full' && <><span>Show fewer photos</span><ChevronUp className="h-4 w-4" /></>}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isImageZoomOpen && zoomImageIndex !== null && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeZoom}>
            <motion.div
              className="relative max-w-5xl w-full mx-4 bg-slate-950/95 border border-slate-700/80 rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.8)] overflow-hidden"
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-800/80 bg-slate-900/80">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300 text-xs font-semibold">{(zoomImageIndex + 1).toString().padStart(2, '0')}</span>
                  <p className="text-sm sm:text-base font-medium text-slate-100 truncate">{galleryImages[zoomImageIndex].category}</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <button type="button" onClick={resetZoomPosition} className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800/80 text-slate-200 hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400" aria-label="Reset zoom"><Maximize2 className="h-4 w-4" /></button>
                  <button type="button" onClick={() => setZoomLevel((prev) => Math.max(prev - 0.3, 1))} className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800/80 text-slate-200 hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400" aria-label="Zoom out"><ZoomOut className="h-4 w-4" /></button>
                  <button type="button" onClick={() => setZoomLevel((prev) => Math.min(prev + 0.3, 2.5))} className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800/80 text-slate-200 hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400" aria-label="Zoom in"><ZoomIn className="h-4 w-4" /></button>
                  <button type="button" onClick={closeZoom} className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800/80 text-slate-300 hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 ml-1.5" aria-label="Close image viewer"><X className="h-4 w-4" /></button>
                </div>
              </div>

              <div className="relative flex flex-col sm:flex-row items-center gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-5">
                <button type="button" onClick={() => goToZoomImage(-1)} className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/80 text-slate-200 hover:bg-slate-800 border border-slate-700/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400" aria-label="Previous image"><ChevronLeft className="h-4 w-4" /></button>
                <div className="relative flex-1 w-full">
                  <motion.div
                    className="relative w-full max-h-[70vh] sm:max-h-[65vh] flex items-center justify-center overflow-hidden rounded-xl bg-slate-900/80 border border-slate-800/80"
                    drag="x"
                    dragListener={zoomLevel === 1}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(_e, info) => {
                      if (zoomLevel !== 1) return
                      if (info.offset.x < -50) goToZoomImage(1)
                      if (info.offset.x > 50) goToZoomImage(-1)
                    }}
                  >
                    <motion.div
                      className="relative w-full h-[55vh] sm:h-[60vh] md:h-[65vh] flex items-center justify-center cursor-grab active:cursor-grabbing"
                      style={{ scale: zoomLevel, x: zoomPanX, y: zoomPanY }}
                      drag={zoomLevel > 1}
                      dragMomentum={false}
                      dragElastic={0.18}
                      dragConstraints={{ left: -220, right: 220, top: -220, bottom: 220 }}
                    >
                      <Image src={galleryImages[zoomImageIndex].src} alt={galleryImages[zoomImageIndex].alt} fill sizes="(min-width: 1024px) 800px, 100vw" className="object-contain select-none pointer-events-none" priority />
                    </motion.div>
                  </motion.div>
                </div>
                <button type="button" onClick={() => goToZoomImage(1)} className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/80 text-slate-200 hover:bg-slate-800 border border-slate-700/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400" aria-label="Next image"><ChevronRight className="h-4 w-4" /></button>
              </div>

              <div className="px-4 sm:px-6 pb-4 sm:pb-5 border-t border-slate-800/80 bg-slate-900/80">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <p className="text-xs sm:text-sm text-slate-200/90 max-w-2xl">{galleryImages[zoomImageIndex].caption ?? galleryImages[zoomImageIndex].alt}</p>
                  <div className="flex items-center gap-2 justify-between sm:justify-end">
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                      <span>Image {zoomImageIndex + 1} of {galleryImages.length}</span>
                      <span className="mx-1 text-slate-600">|</span>
                      <span>{Math.round(zoomLevel * 100)}% zoom</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:hidden">
                      <button type="button" onClick={() => goToZoomImage(-1)} className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/80 text-slate-200 hover:bg-slate-800 border border-slate-700/80" aria-label="Previous image"><ChevronLeft className="h-3 w-3" /></button>
                      <button type="button" onClick={() => goToZoomImage(1)} className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/80 text-slate-200 hover:bg-slate-800 border border-slate-700/80" aria-label="Next image"><ChevronRight className="h-3 w-3" /></button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
