'use client'

import { motion } from 'framer-motion'
import { Filter, RotateCcw, ChevronDown, X } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

interface FiltersProps {
  filters: {
    types: string[]
    categories: string[]
    regions: string[]
  }
  activeFilters: {
    type: string
    category: string
    region: string
  }
  onFilterChange: (filterType: string, value: string) => void
  onReset: () => void
}

interface FilterDropdownProps {
  label: string
  options: string[]
  value: string
  onChange: (value: string) => void
  placeholder: string
}

const FilterDropdown = ({ label, options, value, onChange, placeholder }: FilterDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div ref={dropdownRef} className="relative">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between w-full px-4 py-2 bg-white border rounded-lg text-sm font-medium transition-all duration-200 ${
          value 
            ? 'border-primary-300 text-primary-700 bg-primary-50' 
            : 'border-slate-200 text-slate-600 hover:border-slate-300'
        }`}
      >
        <span className="flex items-center gap-2">
          <Filter className="w-4 h-4" />
          {value || placeholder}
        </span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-lg shadow-medium z-10 max-h-60 overflow-y-auto"
        >
          <button
            onClick={() => {
              onChange('')
              setIsOpen(false)
            }}
            className="w-full px-4 py-2 text-left text-sm text-slate-600 hover:bg-slate-50 transition-colors duration-200"
          >
            All {label}
          </button>
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                onChange(option)
                setIsOpen(false)
              }}
              className={`w-full px-4 py-2 text-left text-sm transition-colors duration-200 ${
                value === option
                  ? 'bg-primary-50 text-primary-700'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {option}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  )
}

const Filters = ({ filters, activeFilters, onFilterChange, onReset }: FiltersProps) => {
  const hasActiveFilters = activeFilters.type || activeFilters.category || activeFilters.region

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-white rounded-xl p-6 border border-slate-200 shadow-soft"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-slate-900">Filter Opportunities</h3>
        {hasActiveFilters && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onReset}
            className="flex items-center gap-2 px-3 py-1 text-sm text-slate-600 hover:text-primary-600 transition-colors duration-200"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </motion.button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FilterDropdown
          label="Types"
          options={filters.types}
          value={activeFilters.type}
          onChange={(value) => onFilterChange('type', value)}
          placeholder="All Types"
        />
        
        <FilterDropdown
          label="Categories"
          options={filters.categories}
          value={activeFilters.category}
          onChange={(value) => onFilterChange('category', value)}
          placeholder="All Categories"
        />
        
        <FilterDropdown
          label="Regions"
          options={filters.regions}
          value={activeFilters.region}
          onChange={(value) => onFilterChange('region', value)}
          placeholder="All Regions"
        />
      </div>

      {hasActiveFilters && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-4 pt-4 border-t border-slate-100"
        >
          <div className="flex flex-wrap gap-2">
            {activeFilters.type && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                Type: {activeFilters.type}
                <button
                  onClick={() => onFilterChange('type', '')}
                  className="ml-1 text-primary-600 hover:text-primary-800"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {activeFilters.category && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-gold-100 text-gold-700 rounded-full text-sm">
                Category: {activeFilters.category}
                <button
                  onClick={() => onFilterChange('category', '')}
                  className="ml-1 text-gold-600 hover:text-gold-800"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {activeFilters.region && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
                Region: {activeFilters.region}
                <button
                  onClick={() => onFilterChange('region', '')}
                  className="ml-1 text-emerald-600 hover:text-emerald-800"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default Filters