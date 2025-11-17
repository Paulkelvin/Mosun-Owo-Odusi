'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, RefreshCw, Globe } from 'lucide-react'
import HighlightText from '../../components/HighlightText'
import SearchBar from '../../components/opportunities/SearchBar'
import Filters from '../../components/opportunities/Filters'
import OpportunitiesList from '../../components/opportunities/OpportunitiesList'

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

interface Pagination {
  currentPage: number
  totalPages: number
  totalItems: number
  hasNextPage: boolean
  hasPrevPage: boolean
  limit: number
}

interface FiltersData {
  categories: string[]
  locations: string[]
}

export default function OpportunitiesHub() {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([])
  const [pagination, setPagination] = useState<Pagination>({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    hasNextPage: false,
    hasPrevPage: false,
    limit: 12
  })
  const [filters, setFilters] = useState<FiltersData>({
    categories: [],
    locations: []
  })
  const [activeFilters, setActiveFilters] = useState({
    category: '',
    location: ''
  })
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isRefreshing, setIsRefreshing] = useState(false)

  // Fetch opportunities
  const fetchOpportunities = async (page = 1, search = '', filters = activeFilters) => {
    try {
      setLoading(true)
      setError(null)

      const params = new URLSearchParams({
        page: page.toString(),
        limit: '12',
        ...(search && { search }),
        ...(filters.category && { category: filters.category }),
        ...(filters.location && { location: filters.location })
      })

      const response = await fetch(`/api/opportunities?${params}`)
      const data = await response.json()

      if (!data.success) {
        throw new Error(data.error || 'Failed to fetch opportunities')
      }

      setOpportunities(data.data.opportunities)
      setPagination(data.data.pagination)
      setFilters(data.data.filters)
      
    } catch (err) {
      console.error('Error fetching opportunities:', err)
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  // Refresh external data
  const refreshData = async () => {
    try {
      setIsRefreshing(true)
      const response = await fetch('/api/opportunities/refresh', { 
        method: 'POST',
        headers: {
          'Authorization': 'Bearer mosun-refresh-2024'
        }
      })
      const result = await response.json()
      
      if (result.success) {
        // Refetch the opportunities after refresh
        await fetchOpportunities()
      }
    } catch (err) {
      console.error('Error refreshing data:', err)
    } finally {
      setIsRefreshing(false)
    }
  }

  // Initial load
  useEffect(() => {
    fetchOpportunities()
  }, [])

  // Handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query)
    fetchOpportunities(1, query, activeFilters)
  }

  // Handle filter change
  const handleFilterChange = (filterType: string, value: string) => {
    const newFilters = { ...activeFilters, [filterType]: value }
    setActiveFilters(newFilters)
    fetchOpportunities(1, searchQuery, newFilters)
  }

  // Reset filters
  const handleResetFilters = () => {
    const resetFilters = { category: '', location: '' }
    setActiveFilters(resetFilters)
    fetchOpportunities(1, searchQuery, resetFilters)
  }

  // Handle pagination
  const handlePageChange = (newPage: number) => {
    fetchOpportunities(newPage, searchQuery, activeFilters)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50/30 via-white to-gold-50/20 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative z-10 container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100/50 rounded-full text-primary-700 font-medium mb-6">
                <Globe className="w-4 h-4" />
                <span>Curated Global Opportunities</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Global <HighlightText highlightColor="gold">Opportunities</HighlightText> Hub
              </h1>
              
              <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                A curated collection of jobs, scholarships, grants, leadership programs, and global opportunities from trusted sources around the world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Search and Refresh */}
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-8">
            <div className="w-full lg:w-96">
              <SearchBar onSearch={handleSearch} />
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={refreshData}
              disabled={isRefreshing}
              className="flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-slate-400 text-white rounded-xl font-medium transition-colors duration-200"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              {isRefreshing ? 'Refreshing...' : 'Refresh Data'}
            </motion.button>
          </div>

          {/* Filters */}
          <div className="mb-8">
            <Filters
              filters={filters}
              activeFilters={activeFilters}
              onFilterChange={handleFilterChange}
              onReset={handleResetFilters}
            />
          </div>

          {/* Results Summary */}
          {!loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-6"
            >
              <p className="text-slate-600">
                Showing <span className="font-semibold text-slate-900">{opportunities.length}</span> of{' '}
                <span className="font-semibold text-slate-900">{pagination.totalItems}</span> opportunities
                {searchQuery && (
                  <span> for "<span className="font-semibold text-primary-700">{searchQuery}</span>"</span>
                )}
              </p>
            </motion.div>
          )}

          {/* Opportunities List */}
          <div className="mb-8">
            <OpportunitiesList 
              opportunities={opportunities}
              loading={loading}
              error={error}
            />
          </div>

          {/* Pagination */}
          {pagination.totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handlePageChange(pagination.currentPage - 1)}
                disabled={!pagination.hasPrevPage}
                className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-primary-600 disabled:text-slate-400 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </motion.button>

              <div className="flex items-center gap-2">
                {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
                  const pageNum = i + Math.max(1, pagination.currentPage - 2)
                  if (pageNum > pagination.totalPages) return null
                  
                  return (
                    <motion.button
                      key={pageNum}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handlePageChange(pageNum)}
                      className={`w-10 h-10 rounded-lg font-medium transition-colors duration-200 ${
                        pageNum === pagination.currentPage
                          ? 'bg-primary-600 text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {pageNum}
                    </motion.button>
                  )
                })}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handlePageChange(pagination.currentPage + 1)}
                disabled={!pagination.hasNextPage}
                className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-primary-600 disabled:text-slate-400 disabled:cursor-not-allowed transition-colors duration-200"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}

export default OpportunitiesHub