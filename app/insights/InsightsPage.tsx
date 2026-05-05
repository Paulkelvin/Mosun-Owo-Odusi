'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, BookOpen, ChevronRight, Clock, Landmark, PenLine } from 'lucide-react'

type Article = {
  id: string
  title: string
  subtitle: string
  readTime: string
  date: string
  tag: string
  body: string[]
}

const articles: Article[] = [
  {
    id: 'lessons-205m-reform',
    title: 'Lessons from Delivering $205M of Public Sector Reform in a Nigerian State',
    subtitle: 'What I learned coordinating OGSTEP across four sectors, three tiers of government, and seventy-plus intervention sites.',
    readTime: '6 min read',
    date: 'April 2026',
    tag: 'Programme Leadership',
    body: [
      'When I took on the role of State Project Coordinator for the Ogun State Economic Transformation Project in 2021, I inherited a programme that was ambitious by any standard. OGSTEP was a $205M+ World Bank investment spanning four components: creating a business-enabling environment, improving agricultural value chains, skills development, and public sector reform. The remit was statewide. The expectation was transformation. The timeline was tight.',

      'Over the next four years, the programme reached more than 72,000 direct beneficiaries, issued over 15,000 Certificates of Occupancy, registered 160,000 farmers on the Ogun Geographic Farmers Information Management System (OGFIMS), launched the Ogun Land Administration and Revenue Management System (OLARMS), and rehabilitated eight Government Technical Colleges. These are the numbers. What follows are the lessons behind them.',

      'The first lesson is deceptively simple: align everyone to the same results framework from day one. OGSTEP operated on a results-based financing model with Disbursement Linked Results (DLRs). Every naira of World Bank funding was tied to verified, independently assessed outcomes. That structure forced discipline across the entire coordination chain, from the Governor\'s office to the implementing ministries, from my project managers to the field officers. When everyone knows that payment depends on documented results, meetings get shorter and deliverables get sharper.',

      'The second lesson is that stakeholder management across tiers of government is not a support function. It is the work. OGSTEP required simultaneous coordination with the World Bank Task Team in Washington, the Federal Ministry of Finance, the Governor\'s office, four line ministries, local government councils, traditional institutions, and community groups across 71+ intervention sites in four divisions. Any one of those relationships, if mismanaged, could stall a component for months. Investing time in alignment, transparency, and shared credit was not optional. It was a delivery strategy.',

      'The third lesson concerns procurement and fiduciary management. A $205M portfolio generates enormous procurement volume. Our team managed World Bank procurement guidelines, state financial regulations, and independent audit requirements simultaneously. The lesson here is that fiduciary rigour is not bureaucracy. It is the mechanism through which a programme earns continued trust, continued funding, and continued independence from political interference. We treated every procurement cycle as a credibility exercise.',

      'The fourth lesson is about institutional capacity and sustainability. It is tempting, in a large programme, to bring in consultants and contractors who deliver fast and leave. We chose a different path in several components. In the Government Technical Colleges, for instance, we did not just rehabilitate infrastructure. We worked with the Ministry of Education to retrain teachers, update curricula, and align skills training to economic demand in each division. The building is the visible result. The institutional shift is the one that lasts.',

      'The fifth lesson is that data systems are reform, not just tools. OGFIMS did not simply register 160,000 farmers. It gave the state, for the first time, a verified, georeferenced database of its agricultural base. OLARMS did not just digitise land records. It created a transparent, auditable system for land titling that reduced corruption and processing time. Both systems changed the relationship between government and citizen. That is reform.',

      'The sixth lesson is personal. Leading a programme of this scale requires a particular kind of resilience. There were Implementation Support Missions where the pressure was intense. There were community engagements where expectations exceeded resources. There were moments where the political calendar and the project calendar pulled in opposite directions. What I learned is that composure under institutional pressure is not a personality trait. It is a skill, and it can be practised.',

      'OGSTEP is now concluding. The infrastructure is visible. The systems are operational. The data is public. What I carry forward is a conviction that large-scale public sector reform in Nigeria is not only possible but repeatable, provided the programme architecture is right, the results framework is binding, and the leadership is accountable.',

      'I am now considering where to apply these lessons next: board advisory, multilateral programme leadership, or state-level reform mandates where the commitment to outcomes is genuine and the institutional will is present.',
    ],
  },
  {
    id: 'skills-development-ogstep',
    title: 'What Works and What Doesn\'t in State-Level Skills Development',
    subtitle: 'Reflections from OGSTEP\'s skills component, covering 39,000+ trainees, 8 rehabilitated technical colleges, and the gap between training and employment.',
    readTime: '5 min read',
    date: 'April 2026',
    tag: 'Skills & Education',
    body: [
      'Skills development is one of the most popular words in Nigerian development policy. Every state has a programme. Every governor has an initiative. Yet the outcomes are stubbornly uneven. Some programmes produce graduates who are employed within months. Others produce certificates that lead nowhere. After leading the skills component of OGSTEP for four years, I have views on what separates the two.',

      'The OGSTEP skills component trained over 39,000 participants across multiple sectors and rehabilitated eight Government Technical Colleges in Ogun State. Those are strong numbers. But the numbers alone do not tell you whether the training was worth the investment. The real question is: did the trainees find work, start businesses, or acquire capabilities that changed their economic trajectory? In some cases, yes. In others, the answer is more complicated.',

      'The first thing that works is aligning training content to actual economic demand in the local division. Ogun State has distinct economic profiles across its four divisions: Egba, Ijebu, Remo, and Yewa. Agricultural processing dominates some areas. Light manufacturing and trading dominate others. When we tailored curricula to local value chains, the placement rates improved measurably. When we ran generic "entrepreneurship" training without sector specificity, the outcomes were weaker.',

      'The second thing that works is combining infrastructure with institutional reform. Rehabilitating a Government Technical College is necessary but not sufficient. If the teachers are still using 1990s curricula, if the equipment sits unused because no one was trained on maintenance, if the school leadership has no accountability to outcomes, the building is just a building. Our approach was to pair physical rehabilitation with teacher retraining, curriculum updates, and management strengthening. It is slower and more expensive. It is also the only thing that produces lasting change.',

      'The third thing that works is embedding skills programmes within a broader results framework. Because OGSTEP was tied to DLRs, every training cohort had to be documented, verified, and independently assessed. That discipline forced the skills team to track not just enrolment but completion, not just completion but placement. Many state skills programmes operate without that feedback loop. They report inputs (number of people trained) rather than outcomes (number of people employed or earning more). The distinction matters enormously.',

      'Now for what does not work. The first is treating skills development as a standalone intervention. Training people without connecting them to markets, finance, or employers is an exercise in frustration for the trainees and a waste of public money. OGSTEP\'s skills component was most effective when it was integrated with the agricultural value chain component (connecting farmers to processing and markets) or the business-enabling environment component (connecting SMEs to registration, credit, and compliance systems). Siloed skills programmes consistently underperform.',

      'The second thing that does not work is political scheduling. Skills programmes need 12 to 18 months of curriculum development, trainer preparation, and institutional setup before the first cohort begins. Political cycles do not respect that timeline. The pressure to "launch" something visible before an election or budget review often compresses preparation to the point where quality suffers. I have seen this repeatedly, and the only defence is a strong programme coordinator who can push back with data.',

      'The third thing that does not work is ignoring the gender dynamics of skills access. In several divisions, female participation in technical training was significantly lower than male participation, not because of lack of interest but because of childcare responsibilities, transport constraints, and cultural expectations. We had to design specific interventions (flexible schedules, stipends, community sensitisation) to close that gap. Any skills programme that does not explicitly address gender access will reproduce the existing inequality.',

      'The rehabilitated Government Technical Colleges in Ogun State now have updated facilities, retrained staff, and revised curricula. Whether they sustain those gains depends on state government commitment to funding, staffing, and accountability after OGSTEP. That is the honest conclusion. Programme-funded reform creates a window. Institutional ownership determines whether the window stays open.',

      'These are lessons I intend to carry into my next engagement, whether that is advising a state government, supporting a DFI-funded programme, or serving on a board where skills and human capital investment are on the agenda.',
    ],
  },
]

export default function InsightsPage() {
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null)
  const active = selectedArticle ? articles.find(a => a.id === selectedArticle) : null

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="container-custom max-w-5xl">

        <AnimatePresence mode="wait">
          {!active ? (
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {/* Page Header */}
              <div className="relative mb-14 overflow-hidden rounded-2xl bg-slate-950 px-6 py-10 shadow-large sm:px-8 lg:px-10">
                <div
                  className="pointer-events-none absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      'linear-gradient(135deg, rgba(255,255,255,0.14) 1px, transparent 1px)',
                    backgroundSize: '34px 34px',
                  }}
                />
                <div className="relative grid gap-8 lg:grid-cols-[1.15fr,0.85fr] lg:items-end">
                  <div>
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-100">
                      <BookOpen className="h-4 w-4 text-gold-300" />
                      Insights
                    </div>
                    <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
                      Field notes from reform, delivery, and institutional leadership.
                    </h1>
                    <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
                      Practical reflections drawn from public-sector reform, skills systems, education leadership, and a $205M+ World Bank portfolio.
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                    {[
                      { label: 'Programme leadership', icon: Landmark },
                      { label: 'Board-level perspective', icon: PenLine },
                    ].map((item) => {
                      const Icon = item.icon
                      return (
                        <div key={item.label} className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                          <Icon className="mb-4 h-5 w-5 text-gold-300" />
                          <p className="text-sm font-semibold text-white">{item.label}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Article Cards */}
              <div className="mx-auto max-w-4xl space-y-6">
                {articles.map((article, index) => (
                  <motion.button
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => setSelectedArticle(article.id)}
                    className="w-full text-left bg-white rounded-2xl p-6 md:p-8 shadow-soft border border-slate-100 hover:shadow-large hover:border-primary-200 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-semibold px-2.5 py-1 bg-primary-100 text-primary-700 rounded-full">
                        {article.tag}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Clock size={12} />
                        {article.readTime}
                      </span>
                      <span className="text-xs text-slate-400">{article.date}</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 group-hover:text-primary-700 transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {article.subtitle}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-700 group-hover:gap-2 transition-all">
                      Read article <ChevronRight size={16} />
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="article"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {/* Back button */}
              <button
                onClick={() => setSelectedArticle(null)}
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-primary-700 transition-colors mb-8"
              >
                <ArrowLeft size={16} />
                Back to all insights
              </button>

              {/* Article Header */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 bg-primary-100 text-primary-700 rounded-full">
                    {active!.tag}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock size={12} />
                    {active!.readTime}
                  </span>
                  <span className="text-xs text-slate-400">{active!.date}</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                  {active!.title}
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed italic">
                  {active!.subtitle}
                </p>
                <div className="mt-6 h-px bg-slate-200" />
              </div>

              {/* Article Body */}
              <div className="prose prose-slate prose-lg max-w-none">
                {active!.body.map((paragraph, i) => (
                  <p key={i} className="text-slate-700 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Bottom nav */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 hover:gap-3 transition-all"
                >
                  <ArrowLeft size={16} />
                  Back to all insights
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
