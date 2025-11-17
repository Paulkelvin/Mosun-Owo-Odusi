import mongoose, { Schema, Document } from 'mongoose';

// TypeScript interface for FetchLog document
export interface IFetchLog extends Document {
  source: string;
  lastFetchedAt: Date;
  itemsFetched: number;
  status: 'success' | 'failed' | 'partial';
  errorMessage?: string;
  metadata?: {
    added?: number;
    updated?: number;
    sources?: Record<string, number>;
  };
}

// MongoDB schema for FetchLog
const FetchLogSchema: Schema = new Schema({
  source: {
    type: String,
    required: true,
    enum: ['ReliefWeb', 'Adzuna', 'RemoteOK', 'Arbeitnow', 'TheMuse', 'Findwork', 'GitHubJobs', 'multi-source', 'multi-source-manual', 'API', 'Manual']
  },
  lastFetchedAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  itemsFetched: {
    type: Number,
    required: true,
    default: 0
  },
  status: {
    type: String,
    required: true,
    enum: ['success', 'failed', 'partial'],
    default: 'success'
  },
  errorMessage: {
    type: String,
    default: null
  },
  metadata: {
    type: Schema.Types.Mixed,
    default: {}
  }
});

// Add index for querying by source and date
FetchLogSchema.index({ source: 1, lastFetchedAt: -1 });

export default mongoose.models.FetchLog || mongoose.model<IFetchLog>('FetchLog', FetchLogSchema);
