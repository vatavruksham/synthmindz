import { useState } from 'react';
import { Sparkles, Loader2, Copy, Check } from 'lucide-react';
import AnimateOnScroll from '../ui/AnimateOnScroll';
import SectionHeading from '../ui/SectionHeading';

const industries = [
  { id: 'saas', label: 'SaaS / B2B' },
  { id: 'ecommerce', label: 'E-commerce' },
  { id: 'agency', label: 'Agency' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'fintech', label: 'Fintech' },
];

const goals = [
  { id: 'awareness', label: 'Brand Awareness' },
  { id: 'leads', label: 'Lead Generation' },
  { id: 'seo', label: 'Organic SEO Growth' },
  { id: 'retention', label: 'Retention & Nurture' },
];

const strategies = {
  saas: {
    awareness: {
      pillars: ['Category education', 'Product POV essays', 'Customer narratives', 'Founder insights'],
      calendar: ['W1: Problem framing series', 'W2: Framework deep-dives', 'W3: Customer spotlights', 'W4: Roundup + webinar'],
      gaps: ['Competitors over-index on feature lists', 'Thin mid-funnel educational content', 'Weak LinkedIn narrative consistency'],
      brief: ['Primary KW: "B2B content strategy framework"', 'H2s: Audience map, Pillars, Channel mix, KPIs', 'Angle: Workshop-first vs tool-first', 'CTA: Strategy canvas template download'],
    },
    leads: {
      pillars: ['Problem-solution playbooks', 'ROI calculators + guides', 'Comparison content', 'Case study machine'],
      calendar: ['W1: Pain-point landing series', 'W2: Comparison briefs', 'W3: Case study drops', 'W4: Gated playbook + nurture'],
      gaps: ['Few competitors ship actionable templates', 'Weak gated asset follow-up paths', 'No multi-touch brief→demo journey'],
      brief: ['Primary KW: "content ops playbook"', 'Outline: Diagnosis → Pillars → Calendar → Measurement', 'Proof: 2 quantified customer outcomes', 'CTA: Book strategy workshop'],
    },
    seo: {
      pillars: ['Topic cluster hubs', 'Comparison & alternatives', 'Implementation guides', 'Glossary + templates'],
      calendar: ['W1: Hub page refresh', 'W2: Cluster spokes (3)', 'W3: Internal linking sprint', 'W4: SERP gap content'],
      gaps: ['Competitors rank for head terms only', 'Sparse supporting cluster content', 'Outdated alternatives pages'],
      brief: ['Cluster: content strategy software', 'Intent mix: informational + commercial', 'Include FAQ schema opportunities', 'Internal links to pricing + demo'],
    },
    retention: {
      pillars: ['Onboarding education', 'Advanced playbooks', 'Community spotlights', 'Product changelog stories'],
      calendar: ['W1: Onboarding tips series', 'W2: Power-user workflows', 'W3: Customer community picks', 'W4: Roadmap narrative'],
      gaps: ['Post-signup content drops off', 'Little advanced use-case coverage', 'No champion enablement kits'],
      brief: ['Audience: existing customers & champions', 'Format: short guides + Loom-ready outlines', 'Metric: activation & expansion signals', 'CTA: Join customer workshop'],
    },
  },
  ecommerce: {
    awareness: {
      pillars: ['Lifestyle storytelling', 'Trend reports', 'UGC spotlights', 'Brand values content'],
      calendar: ['W1: Seasonal moodboards', 'W2: Trend explainers', 'W3: Creator collabs', 'W4: Brand manifesto refresh'],
      gaps: ['Rivals lean on product SKUs only', 'Thin editorial lifestyle content', 'Inconsistent social proof loops'],
      brief: ['Theme: seasonal discovery', 'Visual-first briefs for social + blog', 'Include UGC rights checklist', 'CTA: Shop the edit / email capture'],
    },
    leads: {
      pillars: ['Buying guides', 'Comparison charts', 'Email nurture flows', 'Loyalty stories'],
      calendar: ['W1: Category guide launch', 'W2: Compare & choose series', 'W3: Abandoned-cart nurture', 'W4: Loyalty program push'],
      gaps: ['Weak mid-funnel education', 'Few comparison assets', 'Email sequences lack story arcs'],
      brief: ['Primary KW: category + "buying guide"', 'Structure: criteria → picks → FAQs', 'Offer: discount for email signup', 'CTA: Add to cart / join list'],
    },
    seo: {
      pillars: ['Category hubs', 'How-to & care guides', 'Ingredient/material SEO', 'Local + seasonal pages'],
      calendar: ['W1: Category hub rewrite', 'W2: Care guide cluster', 'W3: Seasonal landing pages', 'W4: FAQ schema pass'],
      gaps: ['Thin category copy', 'Missing long-tail care queries', 'No seasonal SERP coverage'],
      brief: ['Cluster around top category', 'Include size/fit/material FAQs', 'Internal links to bestsellers', 'CTA: Shop collection'],
    },
    retention: {
      pillars: ['Post-purchase care', 'Reorder prompts', 'Community looks', 'VIP early access'],
      calendar: ['W1: Care tips series', 'W2: Styling remixes', 'W3: Reorder campaigns', 'W4: VIP drop preview'],
      gaps: ['Little post-purchase content', 'Weak loyalty storytelling', 'No community showcase cadence'],
      brief: ['Focus: second purchase journey', 'Formats: email + short social', 'Proof: repeat customer stories', 'CTA: Reorder / join VIP'],
    },
  },
  agency: {
    awareness: {
      pillars: ['POV on content ops', 'Client teardown series', 'Frameworks & canvases', 'Thought leadership'],
      calendar: ['W1: Ops manifesto', 'W2: Client teardown', 'W3: Free canvas drop', 'W4: LinkedIn thread series'],
      gaps: ['Agencies sell services, not systems', 'Few public frameworks', 'Weak proof of process'],
      brief: ['Angle: strategy board as delivery OS', 'Include sample board screenshots', 'CTA: Download agency canvas'],
    },
    leads: {
      pillars: ['Diagnostic offers', 'Case study engines', 'RFP-ready kits', 'Workshop funnels'],
      calendar: ['W1: Free diagnostic quiz', 'W2: Case study pack', 'W3: Workshop invite', 'W4: Proposal playbook'],
      gaps: ['Inbound lacks qualification content', 'Case studies buried in PDFs', 'No workshop-led pipeline'],
      brief: ['Lead magnet: content maturity score', 'Nurture: 4-email diagnostic', 'CTA: Book strategy audit'],
    },
    seo: {
      pillars: ['Service cluster pages', 'Industry vertical hubs', 'Process explainers', 'Comparison content'],
      calendar: ['W1: Service hub refresh', 'W2: Vertical pages (2)', 'W3: Process deep-dive', 'W4: Alternatives page'],
      gaps: ['Generic service pages', 'No vertical specificity', 'Missing commercial intent pages'],
      brief: ['KW: "content strategy agency"', 'Proof: metrics + client logos', 'CTA: Start a project brief'],
    },
    retention: {
      pillars: ['Client education hubs', 'Quarterly strategy reviews', 'Enablement kits', 'Upsell playbooks'],
      calendar: ['W1: QBR narrative pack', 'W2: Enablement kit', 'W3: Upsell opportunities', 'W4: Renewal story'],
      gaps: ['Clients lack shared boards', 'Inconsistent QBR storytelling', 'Weak expansion narratives'],
      brief: ['Audience: account leads', 'Deliverable: shared strategy board', 'CTA: Schedule QBR workshop'],
    },
  },
  healthcare: {
    awareness: {
      pillars: ['Patient education', 'Clinician thought leadership', 'Trust & compliance stories', 'Community health'],
      calendar: ['W1: Condition explainers', 'W2: Clinician POV', 'W3: Trust series', 'W4: Community spotlight'],
      gaps: ['Overly clinical jargon', 'Thin patient-journey content', 'Weak trust signals online'],
      brief: ['Reading level: accessible', 'Medical review checklist', 'CTA: Find care / newsletter'],
    },
    leads: {
      pillars: ['Symptom → care paths', 'Provider comparison', 'Appointment prep guides', 'Insurance education'],
      calendar: ['W1: Care-path guides', 'W2: Prep checklists', 'W3: Provider FAQs', 'W4: Booking nurture'],
      gaps: ['Friction between education and booking', 'Sparse insurance explainers', 'Weak local SEO'],
      brief: ['Intent: find care near me', 'Include booking CTA early', 'Compliance review gate'],
    },
    seo: {
      pillars: ['Condition hubs', 'Procedure guides', 'Provider bios SEO', 'Local service pages'],
      calendar: ['W1: Hub architecture', 'W2: Procedure spokes', 'W3: Local pages', 'W4: E-E-A-T polish'],
      gaps: ['Thin condition pages', 'Weak E-E-A-T signals', 'Missing local intent'],
      brief: ['Cluster by condition', 'Cite clinicians & sources', 'CTA: Request appointment'],
    },
    retention: {
      pillars: ['Care continuity content', 'Follow-up education', 'Patient communities', 'Preventive reminders'],
      calendar: ['W1: Aftercare series', 'W2: Reminder campaigns', 'W3: Community stories', 'W4: Preventive tips'],
      gaps: ['Drop-off after first visit', 'Little aftercare content', 'No reminder cadence'],
      brief: ['Journey: post-visit', 'Tone: reassuring & clear', 'CTA: Schedule follow-up'],
    },
  },
  fintech: {
    awareness: {
      pillars: ['Money literacy', 'Product transparency', 'Founder & market POV', 'Trust & security stories'],
      calendar: ['W1: Literacy series', 'W2: Transparency posts', 'W3: Market POV', 'W4: Security deep-dive'],
      gaps: ['Competitors oversell features', 'Thin trust education', 'Jargon-heavy explainers'],
      brief: ['Simplify complex products', 'Include trust badges & proofs', 'CTA: Learn more / waitlist'],
    },
    leads: {
      pillars: ['Use-case calculators', 'Comparison vs banks', 'Onboarding guides', 'Referral stories'],
      calendar: ['W1: Calculator launch', 'W2: Comparison content', 'W3: Onboarding series', 'W4: Referral push'],
      gaps: ['Weak commercial comparison pages', 'Onboarding content buried', 'Few social-proof loops'],
      brief: ['KW: product + "vs traditional bank"', 'Include fees transparency table', 'CTA: Open account / demo'],
    },
    seo: {
      pillars: ['Product hubs', 'Glossary + explainers', 'Regulatory FAQs', 'Comparison clusters'],
      calendar: ['W1: Hub rewrite', 'W2: Glossary batch', 'W3: FAQ schema', 'W4: Comparison pages'],
      gaps: ['Thin glossary coverage', 'Missing regulated FAQ content', 'Weak comparison SERPs'],
      brief: ['Cluster: product category terms', 'Compliance review required', 'CTA: Get started'],
    },
    retention: {
      pillars: ['Feature education', 'Money milestones', 'Security updates', 'Power-user tips'],
      calendar: ['W1: Feature tips', 'W2: Milestone stories', 'W3: Security update', 'W4: Advanced workflows'],
      gaps: ['Users underuse features', 'Little milestone celebration content', 'Sparse security communications'],
      brief: ['Goal: deepen engagement', 'Formats: in-app + email', 'CTA: Try feature / invite friend'],
    },
  },
};

const stickyColors = ['bg-sticky-teal', 'bg-sticky-coral', 'bg-sticky-sky', 'bg-sticky-lemon'];

export default function AIDemo() {
  const [industry, setIndustry] = useState('saas');
  const [goal, setGoal] = useState('awareness');
  const [isGenerating, setIsGenerating] = useState(false);
  const [strategy, setStrategy] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setStrategy(null);

    setTimeout(() => {
      const result = strategies[industry]?.[goal] || strategies.saas.awareness;
      setStrategy(result);
      setIsGenerating(false);
    }, 1600);
  };

  const handleCopy = () => {
    if (!strategy) return;
    const text = [
      'CONTENT PILLARS',
      ...strategy.pillars.map((p) => `• ${p}`),
      '',
      '4-WEEK CALENDAR',
      ...strategy.calendar.map((c) => `• ${c}`),
      '',
      'COMPETITOR GAPS',
      ...strategy.gaps.map((g) => `• ${g}`),
      '',
      'SEO BRIEF OUTLINE',
      ...strategy.brief.map((b) => `• ${b}`),
    ].join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="demo" className="scroll-mt-24 py-20 canvas-grid border-y border-surface-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            eyebrow="Strategy Canvas"
            title="Build a Strategy Board in Seconds"
            subtitle="Pick your industry and goal. SynthMindz generates pillars, calendar themes, competitor gaps, and an SEO brief outline — sticky-note style."
          />
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="max-w-5xl mx-auto">
            <div className="glass rounded-2xl p-6 lg:p-8 border border-surface-200 shadow-board">
              {/* Industry */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-ink-soft mb-3">
                  Business type
                </label>
                <div className="flex flex-wrap gap-2">
                  {industries.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setIndustry(item.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        industry === item.id
                          ? 'bg-primary text-white shadow-md'
                          : 'bg-white border border-surface-200 text-ink-soft hover:border-primary/40'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Goal */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-ink-soft mb-3">
                  Primary goal
                </label>
                <div className="flex flex-wrap gap-2">
                  {goals.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setGoal(item.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        goal === item.id
                          ? 'bg-accent text-white shadow-md'
                          : 'bg-white border border-surface-200 text-ink-soft hover:border-accent/40'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={handleGenerate}
                disabled={isGenerating}
                className={`w-full btn-glow bg-gradient-to-r from-primary to-primary-dark text-white font-semibold py-3.5 rounded-lg transition-all duration-300 hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${
                  isGenerating ? 'animate-generate-pulse' : ''
                }`}
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Generating strategy board...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Generate Strategy Board
                  </>
                )}
              </button>

              {strategy && (
                <div className="mt-8 animate-board-fade">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display font-bold text-ink text-lg">
                      Your strategy board
                    </h3>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-surface-200 text-xs font-medium text-ink-soft hover:text-primary-dark transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { title: 'Content Pillars', items: strategy.pillars, color: stickyColors[0], rotate: '-1deg' },
                      { title: '4-Week Themes', items: strategy.calendar, color: stickyColors[1], rotate: '1deg' },
                      { title: 'Competitor Gaps', items: strategy.gaps, color: stickyColors[2], rotate: '0.5deg' },
                      { title: 'SEO Brief Outline', items: strategy.brief, color: stickyColors[3], rotate: '-0.5deg' },
                    ].map((column, i) => (
                      <div
                        key={column.title}
                        className={`sticky-note ${column.color} p-4 opacity-0 animate-sticky-in`}
                        style={{
                          '--sticky-rotate': column.rotate,
                          animationDelay: `${i * 100}ms`,
                          transform: `rotate(${column.rotate})`,
                        }}
                      >
                        <p className="text-xs font-display font-bold uppercase tracking-wider text-ink/55 mb-3">
                          {column.title}
                        </p>
                        <ul className="space-y-2">
                          {column.items.map((item) => (
                            <li key={item} className="text-sm text-ink-soft leading-snug font-medium flex gap-2">
                              <span className="text-primary-dark shrink-0">▸</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
