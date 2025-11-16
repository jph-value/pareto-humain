# PARETO HUMAIN Website

An upgraded minimalist website for pareto-humain.com with interactive hover effects and redirect functionality.

## Features

- **Modern Design**: Clean, minimalist interface inspired by PHvalue.space
- **Interactive Elements**: 
  - Hover over "PARETO" and "HUMAIN" to reveal popup windows
  - Click buttons to redirect to respective sites
- **Exclamation Point**: Top-left corner symbol that toggles an information banner
- **Responsive Design**: Optimized for desktop and mobile devices

## Functionality

### PARETO Section
- **Hover Text**: "Deeptech systems optimising for sustainable reality."
- **Button Text**: "Progress is reliant on values"
- **Redirect**: `https://values.capital`

### HUMAIN Section  
- **Hover Text**: "Economic systems Aligning Environment, Ethics, and Social Utility."
- **Button Text**: "Values create value"
- **Redirect**: `https://phvalue.space`

### Exclamation Point
- **Location**: Top-left corner
- **Banner Message**: "PVLOC integration not found. You're on your own for now."

## Keyboard Navigation
- Press `1` to navigate to values.capital
- Press `2` to navigate to phvalue.space  
- Press `Escape` to close the banner

## Technologies Used
- HTML5
- CSS3 with modern features (backdrop-filter, CSS Grid, Flexbox)
- Vanilla JavaScript (no dependencies)

## File Structure
```
/home/fed/npht/
├── index.html      # Main HTML structure
├── styles.css      # Styling and responsive design
├── script.js       # Interactive functionality
├── test.html       # Test page for link verification
└── README.md       # This documentation
```

## Local Development
To run the website locally:
```bash
cd /home/fed/npht
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

## Deployment
The files are ready for deployment to any web server or static hosting service.
