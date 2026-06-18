import {
  Award,
  BarChart3,
  BookOpen,
  Briefcase,
  Building2,
  CalendarDays,
  CheckCircle,
  Globe,
  GraduationCap,
  Home,
  Landmark,
  MapPinned,
  Network,
  PenLine,
  Sprout,
  Target,
  TrendingUp,
  Users,
  Wheat,
  type LucideIcon,
} from 'lucide-react'

/** Maps Sanity icon string values (see sanity/schemaTypes/objects.ts) to lucide icons. */
const ICONS: Record<string, LucideIcon> = {
  barChart: BarChart3,
  graduationCap: GraduationCap,
  building: Building2,
  globe: Globe,
  calendar: CalendarDays,
  briefcase: Briefcase,
  users: Users,
  award: Award,
  wheat: Wheat,
  mapPin: MapPinned,
  target: Target,
  home: Home,
  trendingUp: TrendingUp,
  sprout: Sprout,
  landmark: Landmark,
  network: Network,
  penLine: PenLine,
  bookOpen: BookOpen,
}

export function getIcon(name?: string): LucideIcon {
  return (name && ICONS[name]) || CheckCircle
}

export function Icon({ name, className }: { name?: string; className?: string }) {
  const Cmp = getIcon(name)
  return <Cmp className={className} />
}
