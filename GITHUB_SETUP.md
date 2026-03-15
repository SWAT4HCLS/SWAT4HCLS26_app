# GitHub Setup Instructions

Two repositories to create:

| Repo | Purpose | URL |
|------|---------|-----|
| `SWAT4HCLS/swat4hcls_app_template` | Reusable template for all future editions | github.com/SWAT4HCLS/swat4hcls_app_template |
| `SWAT4HCLS/SWAT4HCLS26_app` | 2026 Amsterdam conference app | github.com/SWAT4HCLS/SWAT4HCLS26_app |

---

## Step 1 — Create the template repository

```bash
cd ~/projects/swat4hcls_app_template

git init
git add .
git commit -m "Initial SWAT4HCLS conference app template"

# Create repo on GitHub (requires gh CLI)
gh repo create SWAT4HCLS/swat4hcls_app_template \
  --public \
  --description "Reusable mobile PWA template for SWAT4HCLS conference editions" \
  --push --source=.

# Mark it as a GitHub Template Repository
gh api repos/SWAT4HCLS/swat4hcls_app_template \
  --method PATCH \
  --field is_template=true
```

---

## Step 2 — Create the 2026 app repository

```bash
cd ~/projects/SWAT4HCLS26_app

git init
git add .
git commit -m "SWAT4HCLS 2026 Amsterdam conference app"

# Create repo on GitHub
gh repo create SWAT4HCLS/SWAT4HCLS26_app \
  --public \
  --description "Attendee companion app for SWAT4HCLS 2026 Amsterdam (March 23-26)" \
  --homepage "https://SWAT4HCLS.github.io/SWAT4HCLS26_app/" \
  --push --source=.
```

---

## Step 3 — Enable GitHub Pages for the 2026 app

```bash
# Enable GitHub Pages on main branch, root folder
gh api repos/SWAT4HCLS/SWAT4HCLS26_app/pages \
  --method POST \
  --field source='{"branch":"main","path":"/"}'
```

Or via the web UI:
1. Go to https://github.com/SWAT4HCLS/SWAT4HCLS26_app
2. **Settings** → **Pages**
3. Source: **Deploy from a branch**
4. Branch: `main` / folder: `/ (root)`
5. Click **Save**

The app will be live at **https://SWAT4HCLS.github.io/SWAT4HCLS26_app/** within ~60 seconds.

---

## Step 4 — Enable GitHub Discussions (for the Connect tab)

```bash
gh api repos/SWAT4HCLS/SWAT4HCLS26_app \
  --method PATCH \
  --field has_discussions=true
```

Or via the web UI: **Settings** → tick **Discussions** under *Features*.

Pin a welcome discussion post to invite attendees to introduce themselves.

---

## Day-of programme updates

```bash
cd ~/projects/SWAT4HCLS26_app
# Edit data/program.json with real session assignments, room names, etc.
git add data/program.json
git commit -m "Update programme: add room assignments for Day 2"
git push
# Live in ~30 seconds
```

---

## Future editions (using the template)

```bash
# From GitHub web UI: click "Use this template" on swat4hcls_app_template
# Or via CLI:
gh repo create SWAT4HCLS/SWAT4HCLS27_app \
  --template SWAT4HCLS/swat4hcls_app_template \
  --public --clone

cd SWAT4HCLS27_app
# Edit data/program.json with new year's data
# Update manifest.json name fields
# Update sw.js cache name (swat4hcls27-v1)
git add . && git commit -m "Update for SWAT4HCLS 2027" && git push
# Enable Pages as above
```
