'use client'

import { motion } from 'framer-motion'
import OpportunityCard from './OpportunityCard'
import { Loader2, AlertCircle } from 'lucide-react'

interface Opportunity {
  _id: string
  title: string
  organization: string
  link: string
  category: string
  deadline: string | null
  location: string
  description: string
  source: string
  createdAt: string
  updatedAt: string
}

interface OpportunitiesListProps {
  opportunities: Opportunity[]
  loading: boolean
  error: string | null
}

// Loading skeleton component
const OpportunitySkeleton = ({ index }: { index: number }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
  >
    <div className="animate-pulse">
      {/* Header skeleton */}
      <div className="flex items-center gap-2 mb-4">
        <div className="h-6 w-16 bg-slate-200 rounded-full"></div>
        <div className="h-4 w-20 bg-slate-200 rounded"></div>
      </div>
      
      {/* Title skeleton */}
      <div className="h-6 w-3/4 bg-slate-200 rounded mb-3"></div>
      
      {/* Meta info skeleton */}
      <div className="flex gap-4 mb-4">
        <div className="h-4 w-24 bg-slate-200 rounded"></div>
        <div className="h-4 w-20 bg-slate-200 rounded"></div>
      </div>
      
      {/* Description skeleton */}
      <div className="space-y-2 mb-4">
        <div className="h-4 w-full bg-slate-200 rounded"></div>
        <div className="h-4 w-2/3 bg-slate-200 rounded"></div>
      </div>
      
      {/* Footer skeleton */}
      <div className="flex justify-between items-center">
        <div className="h-4 w-20 bg-slate-200 rounded"></div>
        <div className="h-8 w-16 bg-slate-200 rounded-lg"></div>
      </div>
    </div>
  </motion.div>
)

const OpportunitiesList = ({ opportunities, loading, error }: OpportunitiesListProps) => {
  if (loading) {
    return (
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <OpportunitySkeleton key={index} index={index} />
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-12"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
          <AlertCircle className="w-8 h-8 text-red-600" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">Something went wrong</h3>
        <p className="text-slate-600 mb-6">{error}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors duration-200"
        >
          Try Again
        </motion.button>
      </motion.div>
    )
  }

  if (opportunities.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-12"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4">
          <AlertCircle className="w-8 h-8 text-slate-400" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">No opportunities found</h3>
        <p className="text-slate-600">Try adjusting your search criteria or filters.</p>
      </motion.div>
    )
  }

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
      {opportunities.map((opportunity, index) => (
        <OpportunityCard 
          key={opportunity._id} 
          opportunity={opportunity} 
          index={index} 
        />
      ))}
    </div>
  )
}

export default OpportunitiesList