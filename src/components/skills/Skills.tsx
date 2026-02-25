'use client'
import React from 'react'
import styles from './Skills.module.css'
import { caveatFont, interFont } from '@/font'
import { motion } from 'framer-motion'

const skillCategories = [
  {
    category: 'Languages',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'Python'],
  },
  {
    category: 'Frontend',
    skills: ['Next.js (SSR/SEO, App Router)', 'React (Hooks/Context)', 'shadcn/ui', 'Responsive UI', 'Docusaurus'],
  },
  {
    category: 'Backend',
    skills: ['FastAPI', 'Node.js', 'Express.js', 'REST APIs', 'AuthN/AuthZ'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL (Drizzle)', 'MongoDB (Mongoose/Atlas)', 'SQLite', 'Qdrant (Vector DB)'],
  },
  {
    category: 'DevOps / Cloud',
    skills: ['Docker', 'Kubernetes', 'Helm', 'AWS (ECR/ECS)', 'Kafka', 'Dapr', 'CI/CD (GitHub Actions)'],
  },
  {
    category: 'AI / Agentic',
    skills: ['OpenAI API', 'Agent SDK', 'MCP Server', 'Gemini 2.0 Flash', 'RAG'],
  },
  {
    category: 'Observability',
    skills: ['Grafana', 'Prometheus', 'Loki'],
  },
  {
    category: 'Tools',
    skills: ['Git / GitHub', 'Postman / Thunder Client'],
  },
]

function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h1 className={caveatFont.className}>
        <span>C</span>ore{' '}
        <span>S</span>kills
      </h1>
      <p className={`${styles.subtitle} ${interFont.className}`}>
        Technologies and tools I work with to build modern, scalable applications.
      </p>

      <div className={styles.skillsGrid}>
        {skillCategories.map((cat, index) => (
          <motion.div
            key={index}
            className={`${styles.skillCard} ${interFont.className}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <h3 className={styles.categoryTitle}>{cat.category}</h3>
            <div className={styles.tagList}>
              {cat.skills.map((skill, i) => (
                <span key={i} className={styles.tag}>{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills
