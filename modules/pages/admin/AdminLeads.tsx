'use client';

import { getLeads } from "@/lib/api/storage";
import { motion } from "framer-motion";
import { Mail, Building2, DollarSign, Clock } from "lucide-react";

export default function AdminLeads() {
  const leads = getLeads();

  return (
    <div className="space-y-5 max-w-4xl">
      <div>
        <h1 className="text-xl font-heading font-bold text-white">Contact Leads</h1>
        <p className="text-sm font-body text-white/40">{leads.length} submissions</p>
      </div>

      {leads.length === 0 ? (
        <div className="bg-white/[0.03] border border-white/5 rounded-2xl py-16 text-center">
          <p className="text-sm text-white/30 font-body">No leads yet. Submissions from the Contact page will appear here.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {leads.map((lead, i) => (
            <motion.div
              key={lead.id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white/[0.03] border border-white/5 rounded-2xl p-5"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <div className="text-sm font-body font-medium text-white/80">{lead.fullName}</div>
                  <div className="flex items-center gap-3 mt-1 text-xs font-body text-white/40">
                    <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {lead.email}</span>
                    {lead.company && <span className="flex items-center gap-1"><Building2 className="w-3 h-3" /> {lead.company}</span>}
                  </div>
                </div>
                <span className="text-[10px] font-body text-white/30">
                  {new Date(lead.createdAt).toLocaleDateString()}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {lead.service && (
                  <span className="text-[10px] font-body px-2 py-0.5 rounded-full bg-accent/10 text-accent">{lead.service}</span>
                )}
                {lead.budget && (
                  <span className="text-[10px] font-body px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 flex items-center gap-1">
                    <DollarSign className="w-2.5 h-2.5" />{lead.budget}
                  </span>
                )}
                {lead.timeline && (
                  <span className="text-[10px] font-body px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 flex items-center gap-1">
                    <Clock className="w-2.5 h-2.5" />{lead.timeline}
                  </span>
                )}
              </div>
              {lead.message && (
                <p className="text-sm font-body text-white/50 leading-relaxed">{lead.message}</p>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
