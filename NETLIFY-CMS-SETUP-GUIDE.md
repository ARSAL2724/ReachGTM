# 🚀 Netlify CMS Setup Guide for ReachGTM

## 📋 What You're Getting

**Admin Panel Features:**
- ✅ Add/Edit/Delete Job Postings (no coding!)
- ✅ Manage Testimonials
- ✅ Update Site Settings
- ✅ Upload Images
- ✅ Markdown Editor
- ✅ Preview Before Publishing
- ✅ Access from anywhere: `yoursite.com/admin`

---

## 🎯 Step-by-Step Setup

### **Step 1: Upload All Files to Netlify**

Upload these files/folders to your Netlify site:

```
reachgtm-website/
├── admin/
│   ├── index.html
│   └── config.yml
├── content/
│   └── README.md
├── images/
│   └── uploads/
│       └── README.md
├── index.html
├── jobs.html
├── hiring-solutions.html
├── (all other HTML files...)
├── styles.css
├── favicon.png
└── (all other files)
```

**How to upload:**
1. Put ALL files in one folder
2. Drag the folder to Netlify
3. Wait for deployment to complete

---

### **Step 2: Enable Netlify Identity**

This allows you to login to the admin panel.

1. **Go to your Netlify dashboard**
2. **Click on your site**
3. **Go to "Site settings" → "Identity"**
4. **Click "Enable Identity"**

---

### **Step 3: Enable Git Gateway**

This allows the CMS to save changes.

1. **Still in Identity settings**
2. **Scroll down to "Services"**
3. **Click "Enable Git Gateway"**
4. **Confirm**

---

### **Step 4: Invite Yourself as User**

1. **In Identity tab**, click **"Invite users"**
2. **Enter your email address**
3. **Check your email** for invitation
4. **Click the link** and set your password
5. **Done!** You can now login

---

### **Step 5: Access Your Admin Panel**

1. **Go to:** `https://yoursite.netlify.app/admin`
2. **Login** with your email and password
3. **You're in!** 🎉

---

## 📝 How to Add a Job Posting

### **From Admin Panel:**

1. **Go to** `yoursite.com/admin`
2. **Login** with your credentials
3. **Click "Job Postings"** in sidebar
4. **Click "New Job Postings"**
5. **Fill in the form:**
   - Job Title: e.g., "Sales Development Representative"
   - Publish Date: (auto-filled)
   - Location: e.g., "Remote - North America"
   - Job Type: Select from dropdown
   - Department: Select from dropdown
   - Experience Level: Select from dropdown
   - Salary Range: (optional) e.g., "$50,000 - $70,000"
   - Description: Full job description
   - Responsibilities: List of duties
   - Requirements: Skills and qualifications
   - Benefits: (optional)
   - Active: Toggle ON to publish

6. **Click "Publish"**
7. **Done!** Your job appears on `yoursite.com/jobs.html`

---

## 🎨 How to Add/Edit Testimonials

1. **Go to admin panel**
2. **Click "Testimonials"**
3. **Click "New Testimonials"**
4. **Fill in:**
   - Client Name
   - Job Title
   - Company
   - Rating (3-5 stars)
   - Testimonial Text
   - Active: Toggle ON

5. **Click "Publish"**

---

## ⚙️ Site Settings

Update LinkedIn URL, form endpoints, etc:

1. **Click "Site Settings"**
2. **Click "Contact Information"**
3. **Edit fields**
4. **Save**

---

## 📱 Using the Admin Panel

### **On Desktop:**
- Go to `yoursite.com/admin`
- Full featured editor

### **On Mobile:**
- Same URL works!
- Touch-friendly interface
- Add jobs from anywhere

### **Publishing:**
- **Save Draft** = Not visible on site
- **Publish** = Live immediately
- **Set to Review** = Pending approval

---

## 🔧 Workflow

```
You → Admin Panel → Add Job → Publish → 
Netlify CMS → Saves to GitHub → 
Netlify Auto-Deploys → 
Job appears on website (30 seconds)
```

---

## 📂 File Structure After Setup

```
Your GitHub Repo:
├── content/
│   ├── jobs/
│   │   ├── 2024-02-07-sales-rep.md
│   │   ├── 2024-02-08-engineer.md
│   │   └── jobs-list.json (auto-generated)
│   ├── testimonials/
│   │   └── john-smith.md
│   └── settings/
│       └── contact.json
├── images/uploads/
│   └── (uploaded images)
└── (all your HTML/CSS files)
```

---

## ✏️ Editing Jobs

### **To Edit:**
1. Go to admin panel
2. Click "Job Postings"
3. Click on job to edit
4. Make changes
5. Click "Publish"

### **To Delete:**
1. Click on job
2. Click "Delete" button
3. Confirm

### **To Hide (not delete):**
1. Click on job
2. Toggle "Active" to OFF
3. Save

---

## 🎯 Quick Reference

| Action | Steps |
|--------|-------|
| **Add Job** | Admin → Job Postings → New → Fill Form → Publish |
| **Edit Job** | Admin → Job Postings → Click Job → Edit → Publish |
| **Delete Job** | Admin → Job Postings → Click Job → Delete |
| **Add Testimonial** | Admin → Testimonials → New → Fill → Publish |
| **Upload Image** | In any content editor → Click image icon → Upload |

---

## 🔐 Security

- **Identity** is managed by Netlify (secure)
- **Only invited users** can access admin
- **All changes** are tracked in Git
- **Can rollback** if needed

---

## 🆘 Troubleshooting

### **Can't login to /admin?**
- Make sure you enabled Identity
- Check spam folder for invite email
- Try password reset

### **Changes not showing on site?**
- Wait 30-60 seconds for deployment
- Check if job is set to "Active"
- Clear browser cache (Ctrl + F5)

### **Admin panel not loading?**
- Make sure `admin/` folder uploaded correctly
- Check `admin/config.yml` exists
- Verify Git Gateway is enabled

---

## 📞 Support Resources

- **Netlify CMS Docs:** https://www.netlifycms.org/docs/
- **Netlify Identity:** https://docs.netlify.com/visitor-access/identity/
- **Video Tutorial:** Search YouTube for "Netlify CMS setup"

---

## ✅ Verification Checklist

After setup, verify:
- [ ] Can access `yoursite.com/admin`
- [ ] Can login with email/password
- [ ] Can create new job posting
- [ ] Job appears on `yoursite.com/jobs.html`
- [ ] Can edit existing job
- [ ] Can delete job
- [ ] Can add testimonial
- [ ] Mobile admin panel works

---

## 🎉 You're All Set!

You now have a **professional CMS** for your website!

**No more:**
- ❌ Editing HTML files
- ❌ Re-uploading to Netlify
- ❌ Coding to add jobs

**Now you can:**
- ✅ Add jobs in 2 minutes
- ✅ Update from anywhere
- ✅ No technical knowledge needed
- ✅ Changes go live automatically

**Happy hiring! 🚀**

---

## 📧 Need Help?

If you get stuck during setup, check:
1. Netlify dashboard → Build logs
2. Browser console for errors
3. Netlify CMS documentation

**The admin panel makes managing your website as easy as using Google Docs!**
