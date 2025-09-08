# Wedding Table Assignment System 🕌

A beautiful, modern web application that allows wedding guests to scan a QR code and find their assigned table by entering their name.

## Features ✨

- **QR Code Integration**: Guests scan a QR code to access the system
- **Name Search**: Simple form where guests enter their first name (and last name if needed for duplicates)
- **Beautiful Design**: Wedding-themed UI with elegant animations and effects
- **Duplicate Handling**: Smart system to handle guests with the same first name
- **Mobile Responsive**: Works perfectly on all devices
- **Celebration Effects**: Animated hearts and smooth transitions for a delightful experience

## How It Works 🎯

1. **Guest scans QR code** at the venue entrance
2. **Opens the search form** where they enter their name
3. **System finds their table** and displays it beautifully
4. **Guest heads to their assigned table** and enjoys the celebration!

## Setup Instructions 🚀

### Step 1: Customize Your Guest List

1. Open `guests.js`
2. Replace the example data with your actual guest list
3. Use this format:
   ```javascript
   { firstName: "John", lastName: "Smith", table: "Table 1 - Family" }
   ```

### Step 2: Host Your Website

Upload all files to a web hosting service:

- **GitHub Pages** (free and easy)
- **Netlify** (free with drag-and-drop)
- **Vercel** (free and fast)
- Any other web hosting service

### Step 3: Generate Your QR Code

1. Open `generate-qr.html` in your browser
2. Enter your website URL (where you hosted the files)
3. Click "Generate QR Code"
4. Download and save the QR code image

### Step 4: Print and Display

1. Print the QR code on a nice card or poster
2. Add instructions like "Scan to find your table"
3. Place it prominently at your venue entrance
4. Watch your guests easily find their tables!

## File Structure 📁

```
wedding-table-assignment/
├── index.html          # Main search form page
├── table.html          # Table assignment display page
├── style.css           # Beautiful wedding-themed styles
├── script.js           # Main form functionality
├── table-display.js    # Table page functionality
├── guests.js           # Guest list data (CUSTOMIZE THIS!)
├── generate-qr.html    # QR code generator tool
└── README.md           # This file
```

## Customization Tips 🎨

### Adding More Guests

Edit `guests.js` and add entries in this format:

```javascript
{ firstName: "Jane", lastName: "Doe", table: "Table 5 - College Friends" }
```

### Changing Colors

Edit `style.css` and modify the CSS variables:

- Main color: `#8b4b8c` (purple)
- Gradient: `#b46cb4` (light purple)

### Table Naming

You can use any naming convention:

- "Table 1", "Table 2", etc.
- "Family Table", "Friends Table", etc.
- "The Rose Table", "The Lily Table", etc.

## Browser Compatibility 🌐

- ✅ Chrome (recommended)
- ✅ Safari
- ✅ Firefox
- ✅ Edge
- ✅ Mobile browsers

## Troubleshooting 🔧

### "Guest not found" errors

- Check spelling in your guest list
- Ensure names match exactly (case doesn't matter)
- Consider common nicknames vs. formal names

### QR code not working

- Make sure your website URL is correct and accessible
- Test the URL in a browser first
- Ensure HTTPS is enabled if required

### Mobile display issues

- The system is mobile-responsive
- Test on actual devices before the event
- Ensure good internet connection at venue

## Tips for Success 🎉

1. **Test thoroughly** before the wedding day
2. **Have a backup plan** (printed guest list)
3. **Ensure good WiFi** at your venue
4. **Add clear instructions** next to the QR code
5. **Have someone available** to help guests if needed

## Support 💝

This system was created with love for your special day! If you need help:

1. Check this README first
2. Test all functionality before the event
3. Have a tech-savvy friend help with setup

---

**Congratulations on your upcoming wedding! 🥂**

May your special day be filled with love, joy, and seamlessly organized seating arrangements! ✨
# wedding-tables
