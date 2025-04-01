# Basharat.net - Personal Portfolio Website

A modern, futuristic portfolio website for Basharat Ali, a Data Scientist and AI Specialist. This website showcases projects, blog posts, and professional information using a cutting-edge design.

## Features

- Responsive design optimized for all devices
- Interactive UI with animations and transitions
- Dark mode theme with futuristic elements
- Projects showcase with filtering capability
- Blog/content section for educational content
- Contact form with email integration
- Training request functionality

## Technologies Used

- **Framework**: Next.js 14+
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Effects**: Three.js / React Three Fiber
- **Particle Effects**: tsparticles
- **Form Handling**: React Hook Form
- **Email**: Nodemailer
- **Deployment**: Vercel/Hostinger

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm 9.6.7 or later

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/basharat-website.git
cd basharat-website
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory with the following variables:
```
EMAIL_HOST=your_smtp_host
EMAIL_PORT=your_smtp_port
EMAIL_USER=your_email
EMAIL_PASSWORD=your_email_password
EMAIL_FROM=your_email
NEXT_PUBLIC_SITE_URL=https://basharat.net
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

- `src/app/*`: Application pages
- `src/components/*`: Reusable React components
- `src/styles/*`: Global styles and CSS utilities
- `src/lib/*`: Utility functions and helpers
- `public/*`: Static assets like images and fonts

## Customization

### Content

Most of the website content is stored in component files. To update:

- Edit text in components to change content
- Replace images in the `/public/images/` directory
- Update project and blog data in their respective components

### Styling

The website uses Tailwind CSS for styling:

- Edit `tailwind.config.js` to change colors, fonts, and other design tokens
- Modify `globals.css` for custom CSS and animations

## Deployment

See the deployment guide for detailed instructions on deploying to Hostinger or other platforms.

## License

This project is proprietary and owned by Basharat Ali.

## Contact

For any questions or inquiries, please contact:
- Email: sabasharat.ali@gmail.com
- LinkedIn: [Basharat Ali](https://linkedin.com/in/...)
