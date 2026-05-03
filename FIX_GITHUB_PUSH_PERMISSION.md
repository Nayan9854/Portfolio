# 🔧 Fix: GitHub Push Permission Denied on Company Laptop

## 📌 The Problem

When you are using a **company laptop**, your company's GitHub account is saved in macOS **Keychain**. Because of this, when you try to push your **personal project**, Git uses the company account instead of your personal account.

**Error you will see:**
```
remote: Permission to akt9802/Portfolio-Aman.git denied to aman-saarathi.
fatal: unable to access 'https://github.com/akt9802/Portfolio-Aman.git/': The requested URL returned error: 403
```

**Why this happens:**
- Company account (`aman-saarathi`) is stored in macOS Keychain
- Git automatically picks that account for all pushes
- Your personal repo (`akt9802`) does not give permission to the company account

---

## ✅ The Solution — Use a Personal Access Token (PAT)

### Step 1 — Generate a Personal Access Token on GitHub

1. Open GitHub and **log in as your personal account** (`akt9802`)
2. Go to: **Settings → Developer Settings → Personal Access Tokens → Tokens (classic)**
3. Click **"Generate new token (classic)"**
4. Fill in the details:
   - **Note:** give it a name (e.g., `company-laptop-token`)
   - **Expiration:** choose as per your need (e.g., 90 days)
   - **Scope:** check ✅ `repo` (this gives full repository access)
5. Click **"Generate token"**
6. **Copy the token immediately** — GitHub will NOT show it again!

---

### Step 2 — Update Your Remote URL With the Token

Run this command inside your project folder:

```bash
git remote set-url origin https://akt9802:<YOUR_TOKEN>@github.com/akt9802/Portfolio-Aman.git
```

> Replace `<YOUR_TOKEN>` with the token you copied in Step 1.

**Example:**
```bash
git remote set-url origin https://akt9802:ghp_abc123xyz456@github.com/akt9802/Portfolio-Aman.git
```

---

### Step 3 — Push Your Code

```bash
git push
```

It will now use your **personal account** directly, and the push will succeed! ✅

---

### Step 4 — Verify the Remote URL (Optional)

To confirm that the URL was updated correctly, run:

```bash
git remote -v
```

You should see output like this:

```
origin  https://akt9802:ghp_abc123xyz456@github.com/akt9802/Portfolio-Aman.git (fetch)
origin  https://akt9802:ghp_abc123xyz456@github.com/akt9802/Portfolio-Aman.git (push)
```

---

## ⚠️ Important Warnings

| Warning | Reason |
|--------|--------|
| ❌ Never commit the token inside your code | Anyone who sees it can access your GitHub account |
| ❌ Never share the remote URL containing the token | Same reason as above |
| ✅ Store the token somewhere safe | Use a password manager like Bitwarden or 1Password |
| ✅ Regenerate the token if it expires | Repeat Step 1 and Step 2 again |

---

## 🔁 When the Token Expires — What To Do

1. Go to GitHub → **Settings → Developer Settings → Personal Access Tokens**
2. Generate a **new token** (Step 1 above)
3. Update the remote URL again (Step 2 above)
4. Push normally (Step 3 above)

---

## 🗂️ Quick Reference — Commands

```bash
# Check which account Git is currently using
git config --list

# Update remote URL with your personal token
git remote set-url origin https://<your-username>:<your-token>@github.com/<your-username>/<repo-name>.git

# Verify the remote URL
git remote -v

# Push your code
git push
```

---

## 👤 My Account Details (for reference)

| Account | GitHub Username | Use |
|--------|----------------|-----|
| Company | `aman-saarathi` | Work projects only |
| Personal | `akt9802` | Personal projects |

---

*Created to solve the GitHub 403 permission error on a shared company laptop.*
