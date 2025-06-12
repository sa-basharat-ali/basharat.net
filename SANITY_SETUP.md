# Sanity.io Integration Setup Guide

## Overview
This guide will help you connect your personal website to Sanity.io for dynamic content management of blog posts and projects.

## Prerequisites
- A Sanity.io account and project
- Node.js installed on your machine

## Step 1: Configure Environment Variables

Update the `.env.local` file in your project root with your Sanity project details:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_sanity_token_here
```

### How to get these values:

1. **Project ID**: Found in your Sanity project dashboard URL or settings
2. **Dataset**: Usually "production" (default)
3. **API Token**: 
   - Go to your Sanity project dashboard
   - Navigate to API → Tokens
   - Create a new token with "Read" permissions (or "Read+Write" if you plan to update content from the frontend)

## Step 2: Set Up Sanity Studio Schemas

In your Sanity Studio project, you need to add the schema files. Copy the content from the `sanity-schemas/` folder:

### Blog Post Schema (`post.js`)
Copy the content from `sanity-schemas/post.js` to your Sanity Studio schemas folder.

### Project Schema (`project.js`)  
Copy the content from `sanity-schemas/project.js` to your Sanity Studio schemas folder.

### Update your `schema.js` file in Sanity Studio:

```javascript
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Import your schemas
import post from './post'
import project from './project'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    post,
    project,
  ]),
})
```

## Step 3: Content Structure

### Blog Posts
When creating blog posts in Sanity Studio, include:
- **Title**: The blog post title
- **Slug**: Auto-generated from title
- **Excerpt**: Short description for previews
- **Main Image**: Featured image for the post
- **Category**: Choose from predefined categories
- **Read Time**: e.g., "5 min read"
- **Featured**: Check this to show on homepage
- **Published At**: Publication date
- **Body**: Full blog post content

### Projects
When creating projects in Sanity Studio, include:
- **Title**: The project title
- **Slug**: Auto-generated from title
- **Description**: Short description of the project
- **Main Image**: Featured image for the project
- **Tags**: Array of technology tags
- **Project Link**: Link to live demo (optional)
- **GitHub Link**: Link to repository (optional)
- **Featured**: Check this to show on homepage
- **Published At**: Project completion/publication date
- **Body**: Detailed project description

## Step 4: How It Works

### Featured Content
- Set `featured: true` in Sanity Studio to show content on the homepage
- Homepage shows up to 4 featured posts and projects
- Content is ordered by publication date (newest first)

### Fallback Behavior
- If Sanity is not configured or fails to load, the website will show fallback content
- A yellow warning message will appear indicating fallback mode
- This ensures your site remains functional even if there are connectivity issues

### Dynamic Updates
- Content updates in Sanity Studio will appear on your website immediately
- No need to rebuild or redeploy your website
- Add/remove/edit content directly from Sanity Studio dashboard

## Step 5: Testing Your Setup

1. **Start your development server**:
   ```bash
   npm run dev
   ```

2. **Check the console** for any Sanity connection errors

3. **Add test content** in Sanity Studio:
   - Create a test blog post with `featured: true`
   - Create a test project with `featured: true`

4. **Verify on your website**:
   - Homepage should show your featured content
   - Blog page should list all posts
   - Projects page should list all projects

## Step 6: Deployment

When deploying to production:

1. **Add environment variables** to your hosting platform (Vercel, Netlify, etc.)
2. **Ensure your Sanity dataset** is set to "production"
3. **Test the production build** locally:
   ```bash
   npm run build
   npm start
   ```

## Troubleshooting

### Common Issues:

1. **"Loading..." appears indefinitely**:
   - Check your environment variables
   - Verify your Sanity project ID and dataset

2. **Images not loading**:
   - Ensure images are uploaded to Sanity Studio
   - Check the image URL format in Sanity

3. **Content not updating**:
   - Check if content is published in Sanity Studio
   - Verify the publication date is set

### Getting Help:

- Check browser console for error messages
- Verify Sanity Studio is accessible and working
- Test API connection using Sanity's Vision tool in your studio

## Benefits of This Setup

✅ **Dynamic Content Management**: Update content without touching code
✅ **SEO Friendly**: Server-side rendering with Next.js
✅ **Scalable**: Add unlimited posts and projects
✅ **Image Optimization**: Automatic image optimization through Sanity
✅ **Fallback Protection**: Site works even if Sanity is down
✅ **Real-time Updates**: Changes appear immediately on your site

Your personal website is now powered by Sanity.io! You can manage all your blog posts and projects from the Sanity Studio dashboard. 