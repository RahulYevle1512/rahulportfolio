# Rahul Yevle – AWS Portfolio

Static portfolio site + example AWS Lambda backend.

## Structure

- `index.html` – main portfolio page
- `styles.css` – styling
- `script.js` – small JS for contact form + dynamic year
- `backend/lambda-contact.js` – example AWS Lambda handler for a contact form

## How to run locally

1. Open this folder in VS Code or Cursor.
2. Use any simple web server (for example, the Live Server extension) and open `index.html`.

You can also open `index.html` directly in your browser, but some features work best via a local server.

## Deploy to GitHub Pages

1. Create a GitHub account (if you don’t have one).
2. Create a new public repository named **`rahulyevle.github.io`**.
3. On your computer:

   ```bash
   cd aws-portfolio
   git init
   git remote add origin https://github.com/rahulyevle/rahulyevle.github.io.git
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git push -u origin main
   ```

4. In the GitHub repo settings → Pages, ensure it is serving from the `main` branch (root).
5. After a few minutes, visit `https://rahulyevle.github.io` in your browser to see your portfolio live.

