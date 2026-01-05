# Publications Section Documentation

## Overview

The publications section displays your academic papers with a beautiful, responsive layout featuring:
- Paper images on the left (with automatic fallback to a default placeholder)
- Paper title and description on the right with wrapping text
- Status badges (e.g., "Published at NeurIPS 2024")
- Quick access links to papers and GitHub repositories

## How to Edit Publications

### 1. **Adding a New Publication**

Edit the `config/config.js` file and add a new card object to the `publications.cards` array:

```javascript
{
  title: "Your Paper Title Here",
  description: "Author info and publication status. E.g., '1st Author. Published at CONFERENCE 2024'",
  image: null, // or "/path/to/image.jpg" if you have a custom image
  status: "Published at CONFERENCE 2024", // optional status badge
  icons: [
    {
      title: "Paper",
      icon: faGoogle,
      link: "https://link-to-paper.com",
    },
    {
      title: "GitHub",
      icon: faGithub,
      link: "https://github.com/your-repo",
    },
    // Add more links as needed (e.g., arXiv, Poster, etc.)
  ]
}
```

### 2. **Adding Custom Images**

To add a custom image for a paper:

1. **Place the image** in the `public/` folder (e.g., `public/papers/my-paper.jpg`)
2. **Update the config** to reference it:
   ```javascript
   image: "/papers/my-paper.jpg"
   ```

### 3. **Image Requirements**

- **Recommended size**: 220x220 pixels (will be resized by CSS)
- **Format**: JPG, PNG, or SVG
- **Default fallback**: `/black.svg` (automatically used if `image: null`)

### 4. **Editing Existing Publications**

Simply modify the relevant properties in `config/config.js`:
- `title`: Change the paper title
- `description`: Update author and status info
- `icons[].link`: Update paper or GitHub links
- `status`: Change the status badge text
- `image`: Update the image path

### 5. **Adding More Link Types**

You can add additional links (Poster, arXiv, Video, etc.) by importing more icons from FontAwesome:

```javascript
import { faVideo, faFilePdf } from '@fortawesome/free-solid-svg-icons';

// Then in your publication card:
{
  title: "Poster",
  icon: faFilePdf,
  link: "https://link-to-poster.pdf",
}
```

## Styling

The publication cards are styled in `styles/custom.global.scss` with these customizable classes:

- `.publication-card`: Main card container
- `.publication-image-container`: Image wrapper
- `.publication-image`: The image element
- `.publication-content`: Content area
- `.publication-description`: Description text
- `.publication-status`: Status badge
- `.publication-link-button`: Link buttons

### Customizing Colors

Edit the color variables in `styles/custom.global.scss`:
- `$primary`: Main color (currently `#365B6D`)
- `$secondary`: Secondary color

### Responsive Design

The layout automatically adapts to mobile devices:
- **Desktop (> 768px)**: Image on left (3 columns), content on right (9 columns)
- **Mobile (≤ 768px)**: Image stacks above content, centered layout

## Component Usage

The `Publications` component is used in `pages/index.js`:

```javascript
import { Publications } from '../components/Publications';
import { publications } from '../config/config';

// In your page component:
<Publications
  title={publications.title}
  cards={publications.cards}
/>
```

## File Structure

```
BarakeelFanseuKamhoua.github.io-source_files/
├── components/
│   └── Publications.js          # Publication component
├── config/
│   └── config.js               # Publication data
├── pages/
│   └── index.js                # Page using Publications
├── public/
│   ├── black.svg               # Default placeholder image
│   └── papers/                 # Custom paper images (create if needed)
└── styles/
    └── custom.global.scss      # Publication styling
```

## Tips for Best Results

1. **Keep titles concise**: Aim for 60-80 characters
2. **Use clear descriptions**: Include author role, status, and venue
3. **Add paper images**: Custom images make the section more visually appealing
4. **Link all papers**: Include links to paper PDFs and code repositories
5. **Order by relevance**: Place your most important publications first

## Troubleshooting

- **Images not showing**: Check the path in the `image` property - paths should start with `/`
- **Links not working**: Verify the URL is correct and accessible
- **Styling issues**: Clear your browser cache and rebuild with `npm run build`

## Example: Complete Publication Entry

```javascript
{
  title: "Deep Learning for Graph Matching",
  description: "1st Author. Published at NEURIPS 2023",
  image: "/papers/graph-matching.jpg",
  status: "Published at NeurIPS 2023",
  icons: [
    {
      title: "Paper",
      icon: faGoogle,
      link: "https://arxiv.org/abs/2310.12345",
    },
    {
      title: "GitHub",
      icon: faGithub,
      link: "https://github.com/user/graph-matching",
    },
  ]
}
```

---

For more customization needs, edit the `Publications` component in `components/Publications.js` or update styles in `styles/custom.global.scss`.
