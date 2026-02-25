'use client'
import React from 'react'
import styles from './FeaturedProjects.module.css'
import { caveatFont, interFont } from '@/font'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Whisper Do — Agentic Todo App',
    points: [
      'Full-stack agentic todo app with voice control, chat assistants, and event-driven notifications.',
    ],
    stack: ['Next.js', 'shadcn/ui', 'FastAPI', 'MCP Server', 'Postgres', 'Docker', 'Kubernetes', 'Kafka', 'Dapr', 'Grafana', 'Prometheus', 'Loki'],
    href: '#',
  },
  {
    title: 'Physical AI Textbook — RAG Interactive Learning',
    points: [
      '15-week interactive textbook with personalized RAG chatbot for learning support.',
    ],
    stack: ['Docusaurus', 'React', 'FastAPI', 'Qdrant', 'Better Auth', 'Gemini 2.0 Flash'],
    href: '#',
  },
  {
    title: 'E-Commerce Marketplace — Nike Shoes Platform',
    points: [
      'Next.js + TypeScript e-commerce app; Sanity CMS for products/content; optimized SEO and performance.',
    ],
    stack: ['Next.js', 'TypeScript', 'Sanity CMS', 'SEO'],
    href: 'https://e-commerce-website-9iux.vercel.app/',
  },
]

function FeaturedProjects() {
  return (
    <section id="featured" className={styles.featured}>
      <h1 className={caveatFont.className}>
        <span>F</span>eatured{' '}
        <span>P</span>rojects
      </h1>
      <p className={`${styles.subtitle} ${interFont.className}`}>
        Highlights of my most impactful and technically challenging work.
      </p>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`${styles.card} ${interFont.className}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className={styles.cardHeader}>
              <span className={styles.number}>0{index + 1}</span>
              <h3 className={styles.title}>{project.title}</h3>
            </div>

            <ul className={styles.points}>
              {project.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <div className={styles.stackList}>
              {project.stack.map((tech, i) => (
                <span key={i} className={styles.tag}>{tech}</span>
              ))}
            </div>

            {project.href !== '#' && (
              <a href={project.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
                View Project →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedProjects
