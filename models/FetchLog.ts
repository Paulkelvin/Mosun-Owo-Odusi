import mongoose, { Schema, Document } from 'mongoose';

// TypeScript interface for FetchLog document
export interface IFetchLog extends Document {
  source: string;
  lastFetchedAt: Date;
  itemsFetched: number;
  status: 'success' | 'failed' | 'partial';
  errorMessage?: string;
}

// MongoDB schema for FetchLog
const FetchLogSchema: Schema = new Schema({
  source: {
    type: String,
    required: true,
    unique: true,
    enum: ['ReliefWeb', 'API', 'Manual']
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
  }
});

export default mongoose.models.FetchLog || mongoose.model<IFetchLog>('FetchLog', FetchLogSchema);
