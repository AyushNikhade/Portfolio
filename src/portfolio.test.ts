import { describe, it, expect } from 'vitest'
import { skillsData } from './pages/Skillsection'

describe('Portfolio Skills Data Configuration', () => {
  it('should have exactly 6 skill categories', () => {
    expect(skillsData).toHaveLength(6)
  })

  it('should have correct skill categories in order', () => {
    const categories = skillsData.map(cat => cat.category)
    expect(categories).toEqual([
      'Languages',
      'Frontend',
      'Backend',
      'Databases',
      'DevOps/Deployment',
      'AI / ML'
    ])
  })

  it('should contain the correct Languages', () => {
    const languages = skillsData.find(cat => cat.category === 'Languages')?.items
    expect(languages).toContain('C++')
    expect(languages).toContain('Java')
    expect(languages).toContain('Python')
    expect(languages).toContain('JavaScript')
    expect(languages).toContain('TypeScript')
    expect(languages).toContain('SQL')
    expect(languages).toHaveLength(6)
  })

  it('should contain the correct Frontend skills', () => {
    const frontend = skillsData.find(cat => cat.category === 'Frontend')?.items
    expect(frontend).toContain('React.js')
    expect(frontend).toContain('Next.js')
    expect(frontend).toContain('Tailwind CSS')
    expect(frontend).toContain('Framer Motion')
    expect(frontend).toHaveLength(4)
  })

  it('should contain the correct Backend skills', () => {
    const backend = skillsData.find(cat => cat.category === 'Backend')?.items
    expect(backend).toContain('Node.js')
    expect(backend).toContain('Express.js')
    expect(backend).toContain('Flask')
    expect(backend).toContain('REST API')
    expect(backend).toContain('Microservices')
    expect(backend).toContain('WebSocket')
    expect(backend).toContain('JWT')
    expect(backend).toContain('OAuth')
    expect(backend).toHaveLength(8)
  })

  it('should contain the correct Databases', () => {
    const databases = skillsData.find(cat => cat.category === 'Databases')?.items
    expect(databases).toContain('MongoDB')
    expect(databases).toContain('MySQL')
    expect(databases).toContain('PostgreSQL')
    expect(databases).toContain('Redis')
    expect(databases).toHaveLength(4)
  })

  it('should contain the correct DevOps/Deployment skills', () => {
    const devOps = skillsData.find(cat => cat.category === 'DevOps/Deployment')?.items
    expect(devOps).toContain('Git')
    expect(devOps).toContain('Docker')
    expect(devOps).toContain('AWS')
    expect(devOps).toContain('Vercel')
    expect(devOps).toContain('Render')
    expect(devOps).toContain('GitHub')
    expect(devOps).toContain('VS Code')
    expect(devOps).toHaveLength(7)
  })

  it('should contain the correct AI / ML skills', () => {
    const aiMl = skillsData.find(cat => cat.category === 'AI / ML')?.items
    expect(aiMl).toContain('TensorFlow')
    expect(aiMl).toContain('Keras')
    expect(aiMl).toContain('Scikit-learn')
    expect(aiMl).toContain('NumPy')
    expect(aiMl).toContain('Pandas')
    expect(aiMl).toContain('Matplotlib')
    expect(aiMl).toContain('LLM API Integration')
    expect(aiMl).toContain('RAG Pipelines')
    expect(aiMl).toContain('Langchain')
    expect(aiMl).toContain('Agentic AI')
    expect(aiMl).toHaveLength(10)
  })
})
