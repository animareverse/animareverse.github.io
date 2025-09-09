# Sistema di Assegnazione Tavoli Matrimonio 🌳

Una bellissima applicazione web a tema foresta incantata che permette agli ospiti del matrimonio di scansionare un codice QR e trovare il loro tavolo assegnato inserendo il loro nome.

## Caratteristiche ✨

- **Integrazione Codice QR**: Gli ospiti scansionano un codice QR per accedere al sistema
- **Ricerca per Nome**: Semplice modulo dove gli ospiti inseriscono il loro nome (e cognome se necessario per i duplicati)
- **Design Bellissimo**: UI a tema foresta incantata con eleganti animazioni ed effetti di foglie che cadono
- **Gestione Duplicati**: Sistema intelligente per gestire ospiti con lo stesso nome
- **Responsive Mobile**: Funziona perfettamente su tutti i dispositivi
- **Effetti di Celebrazione**: Foglie che cadono animate e transizioni fluide per un'esperienza magica

## Come Funziona 🎯

1. **L'ospite scansiona il codice QR** all'ingresso del locale
2. **Si apre il modulo di ricerca** dove inserisce il suo nome
3. **Il sistema trova il suo tavolo** e lo mostra in modo bellissimo
4. **L'ospite si dirige al tavolo assegnato** e si gode la celebrazione!

## Istruzioni di Configurazione 🚀

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
