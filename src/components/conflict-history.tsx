import { motion } from 'framer-motion';
import { ConflictStatusBadge } from './conflict-status-badge';
import { ConflictTypeBadge } from './conflict-type-badge';
import { sampleReports } from '../data/mock/trade-conflicts';

export function ConflictHistory() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">تاریخچه گزارش‌ها</h3>
        <button className="text-sm text-primary hover:underline">
          مشاهده همه
        </button>
      </div>

      <div className="space-y-4">
        {sampleReports.map((report, index) => (
          <motion.div
            key={report.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="rounded-lg bg-card p-4 hover:bg-accent/50 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <ConflictTypeBadge type={report.type} />
                  <ConflictStatusBadge status={report.status} />
                </div>
                <h4 className="font-medium">{report.businessName}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{report.description}</p>
                <p className="mt-2 text-sm text-muted-foreground">{report.address}</p>
              </div>
              <div className="text-sm text-muted-foreground">
                {report.createdAt}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}