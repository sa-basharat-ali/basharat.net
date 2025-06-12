import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Get environment variables with fallbacks and validation
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'k1lkanap'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_TOKEN

console.log('Sanity Config:', { 
  projectId: projectId ? projectId.substring(0, 4) + '...' : 'missing', 
  dataset,
  hasToken: !!token
})

// Always create client - we know the project ID is valid
let client = null
let hasValidConfig = false

try {
  client = createClient({
    projectId,
    dataset,
    useCdn: true,
    apiVersion: '2024-01-01',
    token,
  })
  hasValidConfig = true
  console.log('✅ Sanity client initialized successfully')
} catch (error) {
  console.error('❌ Sanity client initialization failed:', error.message)
}

// Set up the image URL builder
let builder = null
if (client) {
  builder = imageUrlBuilder(client)
}

export function urlFor(source) {
  if (builder && source) {
    return builder.image(source)
  }
  // Return a fallback for missing images
  return { url: () => '/images/placeholder.jpg' }
}

// GROQ queries for fetching data
export const queries = {
  // Get all blog posts
  allPosts: `*[_type == "post"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    excerpt,
    readTime,
    category,
    featured,
    mediumUrl,
    mainImage,
    "imageUrl": mainImage.asset->url
  }`,
  
  // Get featured blog posts
  featuredPosts: `*[_type == "post" && featured == true] | order(_createdAt desc)[0...4] {
    _id,
    title,
    slug,
    excerpt,
    readTime,
    category,
    featured,
    mediumUrl,
    mainImage,
    "imageUrl": mainImage.asset->url
  }`,
  
  // Get all projects
  allProjects: `*[_type == "project"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    publishedAt,
    tags,
    featured,
    projectLink,
    githubLink,
    mainImage,
    "imageUrl": mainImage.asset->url
  }`,
  
  // Get featured projects
  featuredProjects: `*[_type == "project" && featured == true] | order(publishedAt desc)[0...4] {
    _id,
    title,
    slug,
    description,
    publishedAt,
    tags,
    featured,
    projectLink,
    githubLink,
    mainImage,
    "imageUrl": mainImage.asset->url
  }`,
  
  // Get single post by slug
  postBySlug: `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    readTime,
    category,
    mediumUrl,
    body,
    mainImage,
    "imageUrl": mainImage.asset->url
  }`,
  
  // Get single project by slug
  projectBySlug: `*[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    publishedAt,
    tags,
    body,
    projectLink,
    githubLink,
    mainImage,
    "imageUrl": mainImage.asset->url
  }`
}

// Helper functions for fetching data with better error handling
export async function getPosts() {
  if (!client || !hasValidConfig) {
    console.error('Sanity client not configured properly')
    throw new Error('Sanity client not configured')
  }
  
  try {
    console.log('🔍 Fetching posts from Sanity...')
    const posts = await client.fetch(queries.allPosts)
    console.log('✅ Posts fetched successfully:', posts.length, 'posts')
    return posts
  } catch (error) {
    console.error('❌ Error fetching posts:', error)
    throw error
  }
}

export async function getFeaturedPosts() {
  if (!client || !hasValidConfig) {
    console.error('Sanity client not configured properly')
    throw new Error('Sanity client not configured')
  }
  
  try {
    console.log('🔍 Fetching featured posts from Sanity...')
    const posts = await client.fetch(queries.featuredPosts)
    console.log('✅ Featured posts fetched successfully:', posts.length, 'posts')
    return posts
  } catch (error) {
    console.error('❌ Error fetching featured posts:', error)
    throw error
  }
}

export async function getProjects() {
  if (!client || !hasValidConfig) {
    console.error('Sanity client not configured properly')
    throw new Error('Sanity client not configured')
  }
  
  try {
    console.log('🔍 Fetching projects from Sanity...')
    const projects = await client.fetch(queries.allProjects)
    console.log('✅ Projects fetched successfully:', projects.length, 'projects')
    return projects
  } catch (error) {
    console.error('❌ Error fetching projects:', error)
    throw error
  }
}

export async function getFeaturedProjects() {
  if (!client || !hasValidConfig) {
    console.error('Sanity client not configured properly')
    throw new Error('Sanity client not configured')
  }
  
  try {
    console.log('🔍 Fetching featured projects from Sanity...')
    const projects = await client.fetch(queries.featuredProjects)
    console.log('✅ Featured projects fetched successfully:', projects.length, 'projects')
    return projects
  } catch (error) {
    console.error('❌ Error fetching featured projects:', error)
    throw error
  }
}

export async function getPostBySlug(slug) {
  if (!client || !hasValidConfig) {
    throw new Error('Sanity client not configured')
  }
  return await client.fetch(queries.postBySlug, { slug })
}

export async function getProjectBySlug(slug) {
  if (!client || !hasValidConfig) {
    throw new Error('Sanity client not configured')
  }
  return await client.fetch(queries.projectBySlug, { slug })
}

// Export the client and config status for debugging
export { client, hasValidConfig } 