import mongoose, { Schema, Document } from 'mongoose';

// TypeScript interface for Opportunity document
export interface IOpportunity extends Document {
  title: string;
  organization: string;
  category: string;
  location: string;
  deadline: string | null;
  link: string;
  description: string;
  source: string; // "ReliefWeb", "API", "Manual"
  createdAt: Date;
  updatedAt: Date;
}

// MongoDB schema for Opportunity
const OpportunitySchema: Schema = new Schema({
  title: { 
    type: String, 
    required: true,
    trim: true,
    index: true // Index for search performance
  },
  organization: { 
    type: String, 
    required: true,
    trim: true,
    index: true
  },
  category: { 
    type: String, 
    required: true,
    enum: [
      'Leadership',
      'Education', 
      'Project Management',
      'Development',
      'Sustainability',
      'Global Opportunities'
    ],
    index: true // Index for filtering
  },
  location: { 
    type: String, 
    required: true,
    trim: true,
    index: true
  },
  deadline: { 
    type: String,
    default: null
  },
  link: { 
    type: String, 
    required: true,
    trim: true
  },
  description: { 
    type: String, 
    required: true
  },
  source: { 
    type: String, 
    required: true,
    enum: ['ReliefWeb', 'Adzuna', 'RemoteOK', 'Arbeitnow', 'TheMuse', 'Findwork', 'GitHubJobs', 'API', 'Manual'],
    default: 'API'
  },
  createdAt: { 
    type: Date, 
    default: Date.now,
    index: true
  },
  updatedAt: { 
    type: Date, 
    default: Date.now
  }
});

// Compound index for duplicate detection
OpportunitySchema.index({ title: 1, organization: 1, deadline: 1 }, { unique: true });

// Update the updatedAt timestamp before saving
OpportunitySchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

export default mongoose.models.Opportunity || mongoose.model<IOpportunity>('Opportunity', OpportunitySchema);