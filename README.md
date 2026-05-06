# Xperience Finance — Credibility Speech Site

> **"I Wasn't Supposed To Win."**  
> A credibility speech by Xav | Xperience Finance

---

## Files

```
xperience-finance-site/
├── index.html      ← Main speech page
├── style.css       ← All styles
├── script.js       ← Scroll animations + reading progress bar
├── 404.html        ← Custom "page not found" page
└── README.md       ← This file
```

---

## 🚀 How to Deploy on GitHub Pages (Step by Step)

### Step 1 — Create a GitHub Account
If you don't have one, go to [github.com](https://github.com) and sign up. It's free.

---

### Step 2 — Create a New Repository

1. Click the **+** icon (top right) → **New repository**
2. Name it: `xperience-finance` (or any name you like)
3. Set it to **Public**
4. Leave everything else as default
5. Click **Create repository**

---

### Step 3 — Upload Your Files

On the next screen:

1. Click **uploading an existing file**
2. Drag and drop ALL four files at once:
   - `index.html`
   - `style.css`
   - `script.js`
   - `404.html`
3. Scroll down, add a commit message like `Initial upload`
4. Click **Commit changes**

---

### Step 4 — Enable GitHub Pages

1. Go to your repository's **Settings** tab (top menu)
2. Scroll down to **Pages** in the left sidebar
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**
5. Wait 1–2 minutes

Your site will be live at:
```
https://YOUR-USERNAME.github.io/xperience-finance/
```

---

### Step 5 — Update the Links in index.html

Open `index.html` and replace these placeholders with your real info:

| Find this | Replace with |
|---|---|
| `YOUR-USERNAME` | Your GitHub username |
| `YOUR-REPO-NAME` | Your repository name (e.g. `xperience-finance`) |
| `YOUR_HANDLE` | Your Instagram handle (e.g. `xperiencefinance`) |
| `YOUR_EMAIL` | Your contact email |

---

## Optional: Connect a Custom Domain

If you have a domain like `xperiencefinance.com`:

1. In **Settings → Pages**, find the **Custom domain** field
2. Enter your domain and click **Save**
3. Go to your domain registrar (e.g. GoDaddy, Cloudflare)
4. Add these DNS records:

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | YOUR-USERNAME.github.io |

DNS changes can take up to 24–48 hours to fully propagate.

---

## Built With

- Plain HTML, CSS, JavaScript — no frameworks, no build tools
- Google Fonts (Playfair Display + DM Sans)
- GitHub Pages hosting (free)

---

*Xperience Finance — Building Trust, One Conversation at a Time.*
