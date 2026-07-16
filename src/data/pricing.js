const pricing = [
  {
    id: 1,
    name: 'Starter',
    price: 39,
    period: '/mo',
    description: 'Perfect for solo marketers and small teams getting started with AI-powered content strategy.',
    features: [
      '10 strategies per month',
      'Blog & social media strategies',
      'Basic competitor analysis',
      'Editorial calendar generation',
      'Content brief generator (5/mo)',
      'Email support',
    ],
    highlighted: false,
  },
  {
    id: 2,
    name: 'Growth',
    price: 89,
    period: '/mo',
    description: 'For growing teams that need comprehensive strategy generation and deeper market intelligence.',
    features: [
      '50 strategies per month',
      'All strategy types',
      'Advanced competitor intelligence',
      'Full editorial calendar suite',
      'Unlimited content briefs',
      'SEO optimization engine',
      'Performance analytics',
      'Priority support',
    ],
    highlighted: true,
  },
  {
    id: 3,
    name: 'Agency',
    price: 199,
    period: '/mo',
    description: 'For agencies and enterprise teams managing multiple brands and high-volume strategy work.',
    features: [
      'Unlimited strategies',
      'All strategy types + custom',
      'Multi-brand competitor tracking',
      'White-label exports',
      'Team collaboration (10 seats)',
      'Custom brand voice profiles',
      'API access',
      'Dedicated account manager',
    ],
    highlighted: false,
  },
];

export const faqs = [
  {
    question: 'What types of content strategies can SynthMindz generate?',
    answer:
      'SynthMindz generates strategies for blog content, social media campaigns, SEO-focused content plans, email marketing sequences, and full-funnel campaign strategies. Each strategy is tailored to your industry, audience, and specific business goals.',
  },
  {
    question: 'How does the competitor intelligence feature work?',
    answer:
      'Our AI monitors your competitors\' content across channels, analyzing their publishing frequency, top-performing topics, keyword rankings, and engagement patterns. You get actionable insights on gaps and opportunities to outperform them.',
  },
  {
    question: 'Can I customize strategies for different brands or clients?',
    answer:
      'Yes. Agency plan users can create multiple brand profiles with distinct voice guidelines, target audiences, and competitive landscapes. Each strategy is generated within the context of that specific brand.',
  },
  {
    question: 'How accurate are the SEO recommendations?',
    answer:
      'Our SEO engine uses real-time search data to identify keyword opportunities, search volume, difficulty scores, and topic clusters. Recommendations are based on current SERP analysis and updated regularly.',
  },
  {
    question: 'Do I own the strategies and content briefs generated?',
    answer:
      'Yes. All strategies, calendars, and content briefs generated are 100% yours with full commercial usage rights. Use them for client work, internal projects, or any commercial purpose without attribution.',
  },
  {
    question: 'Is there a satisfaction guarantee?',
    answer:
      'We offer a 14-day satisfaction guarantee. If SynthMindz doesn\'t meet your expectations within the first 14 days, contact us for a full refund — no questions asked.',
  },
];

export const comparisonFeatures = [
  { feature: 'Strategies per month', starter: '10', growth: '50', agency: 'Unlimited' },
  { feature: 'Strategy types', starter: 'Blog, Social', growth: 'All types', agency: 'All + Custom' },
  { feature: 'Competitor intelligence', starter: 'Basic', growth: 'Advanced', agency: 'Multi-brand' },
  { feature: 'Editorial calendar', starter: '✓', growth: '✓ Full suite', agency: '✓ Full suite' },
  { feature: 'Content briefs', starter: '5/month', growth: 'Unlimited', agency: 'Unlimited' },
  { feature: 'SEO optimization', starter: '—', growth: '✓', agency: '✓' },
  { feature: 'Performance analytics', starter: '—', growth: '✓', agency: '✓ Advanced' },
  { feature: 'White-label exports', starter: '—', growth: '—', agency: '✓' },
  { feature: 'Team collaboration', starter: '—', growth: '—', agency: '10 seats' },
  { feature: 'API access', starter: '—', growth: '—', agency: '✓' },
  { feature: 'Support', starter: 'Email', growth: 'Priority', agency: 'Dedicated Manager' },
];

export default pricing;
