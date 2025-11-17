'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Calendar, MapPin, Tag, Clock } from 'lucide-react'
import Link from 'next/link'

interface OpportunityCardProps {
  opportunity: {
    _id: string
    title: string
    source: string
    url: string
    category: string
    deadline?: string
    location: string
    type: string
    postedDate?: string
    description: string
    createdAt: string
  }
  index: number
}

const typeColors = {
  job: 'bg-blue-100 text-blue-700 border-blue-200',
  scholarship: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  grant: 'bg-purple-100 text-purple-700 border-purple-200',
  fellowship: 'bg-gold-100 text-gold-700 border-gold-200',
  training: 'bg-amber-100 text-amber-700 border-amber-200',
  opportunity: 'bg-slate-100 text-slate-700 border-slate-200'
}

const OpportunityCard = ({ opportunity, index }: OpportunityCardProps) => {
  const typeColor = typeColors[opportunity.type as keyof typeof typeColors] || typeColors.opportunity
  
  const truncateDescription = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength).trim() + '...'
  }

  const formatDate = (dateString?: string) => {
    if (!dateString) return null
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    } catch {
      return dateString
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -4,
        transition: { duration: 0.2 }
      }}
      className="bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-soft hover:shadow-medium transition-all duration-300 group"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${typeColor}`}>
            {opportunity.type}
          </span>
          <span className="text-xs text-slate-500 font-medium">
            {opportunity.source}
          </span>
        </div>
        {opportunity.deadline && (
          <div className="flex items-center gap-1 text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
            <Clock className="w-3 h-3" />
            <span>Deadline</span>
          </div>
        )}
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-primary-700 transition-colors duration-200">
        {opportunity.title}
      </h3>

      {/* Meta Information */}
      <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-slate-600">
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          <span>{opportunity.location}</span>
        </div>
        <div className="flex items-center gap-1">
          <Tag className="w-4 h-4" />
          <span>{opportunity.category}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-700 mb-4 text-sm leading-relaxed">
        {truncateDescription(opportunity.description)}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="text-xs text-slate-500">
          {opportunity.deadline && (
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>Due: {formatDate(opportunity.deadline)}</span>
            </div>
          )}
          {!opportunity.deadline && opportunity.postedDate && (
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>Posted: {formatDate(opportunity.postedDate)}</span>
            </div>
          )}
        </div>

        <motion.a
          href={opportunity.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
        >
          <span>View</span>
          <ExternalLink className="w-3 h-3" />
        </motion.a>
      </div>
    </motion.div>
  )
}

export default OpportunityCard