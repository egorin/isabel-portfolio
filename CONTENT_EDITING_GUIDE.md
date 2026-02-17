# Content Editing Guide for Isabel's Portfolio

This guide shows you where to update content, images, and media files in your portfolio website.

---

## 📝 Text Content

### About Me Section
**File:** `client/src/components/sections/AboutSection.tsx`
- **Bio text:** Lines 60-65 (search for "High school senior")
- **Profile image:** Line 82 (`/images/profile-placeholder.png`)

### Capstone Section
**File:** `client/src/components/sections/CapstoneSection.tsx`
- **Main title:** Line 122 ("What No One Knows About...")
- **Subtitle:** Line 124 ("Assessing the Environmental Impacts of AI")
- **Description:** Lines 127-133
- **Policy Brief PDF:** Line 152 (`/Senior_Capstone_Isabel_Gorin.pdf`)
- **AI/Sustainability Image:** Line 176 (`/images/ai-sustainability.png`) ← **EDITABLE**

### Creative Companion Piece
**File:** `client/src/components/sections/CapstoneSection.tsx`
- **Description:** Line 234-236
- **Audio file:** Line 260 (`/audio/companion-piece.mp3`)
- **Image placeholder:** Line 272 (replace the div with `<img src="/images/your-image.png" />`)

### Extracurricular Activities
**File:** `client/src/components/sections/ExtracurricularSection.tsx`
- **Activities data:** Lines 28-110 (each activity object)
- **Activity images:** In the dialog (lines 274-283), replace the placeholder div with actual images

---

## 🖼️ How to Add Images

### Step 1: Add your image file
Place your image in: `client/public/images/your-image-name.png`

### Step 2: Reference it in the code
Update the `src` attribute:
```tsx
<img src="/images/your-image-name.png" alt="Description" />
```

### Example Locations:
- **Profile photo:** Line 82 in `AboutSection.tsx`
- **Capstone image:** Line 176 in `CapstoneSection.tsx`
- **Companion piece:** Line 272 in `CapstoneSection.tsx`
- **Activity images:** Lines 274-283 in `ExtracurricularSection.tsx`

---

## 🎵 How to Add Audio

### Step 1: Add your audio file
Place your audio file in: `client/public/audio/your-audio.mp3`

### Step 2: Update the audio source
**File:** `client/src/components/sections/CapstoneSection.tsx`
**Line:** 260

Change:
```tsx
src="/audio/companion-piece.mp3"
```
To:
```tsx
src="/audio/your-audio.mp3"
```

---

## 📄 How to Replace the PDF

### Step 1: Add your PDF file
Place your PDF in: `client/public/your-capstone.pdf`

### Step 2: Update PDF references
**File:** `client/src/components/sections/CapstoneSection.tsx`

Update **two locations**:
1. **Line 152** (PDF viewer):
   ```tsx
   src="/your-capstone.pdf"
   ```
2. **Line 164** (Download link):
   ```tsx
   href="/your-capstone.pdf"
   ```

---

## 🔗 Contact Links

### Footer
**File:** `client/src/components/Footer.tsx`
- **Email:** Search for `mailto:` and replace with your email
- **LinkedIn:** Search for `linkedin.com` and replace with your LinkedIn URL

---

## 🎨 Quick Tips

1. **Always use absolute paths** starting with `/` (e.g., `/images/photo.png`)
2. **Supported image formats:** PNG, JPG, JPEG, SVG, WebP
3. **Supported audio formats:** MP3, WAV, OGG
4. **After making changes:** Save the file and refresh your browser
5. **File names:** Use lowercase and hyphens (e.g., `my-photo.png` not `My Photo.png`)

---

## 🚀 Testing Your Changes

1. Save your edited files
2. The development server will automatically reload
3. Refresh your browser to see changes
4. Check the browser console (F12) for any errors

---

## 📦 File Structure Reference

```
client/
  public/
    images/           ← Put images here
      ai-sustainability.png
      profile-placeholder.png
      hero-sunset.png
      hero-frutiger.png
      hero-space.png
    audio/            ← Put audio files here
      companion-piece.mp3
    Senior_Capstone_Isabel_Gorin.pdf  ← Your PDF
  src/
    components/
      sections/
        AboutSection.tsx        ← Edit About Me content
        CapstoneSection.tsx     ← Edit Capstone content
        ExtracurricularSection.tsx  ← Edit activities
    Footer.tsx                  ← Edit contact links
```

---

## ❓ Need Help?

If you encounter issues:
1. Check that file paths start with `/`
2. Verify file names match exactly (case-sensitive)
3. Make sure files are in the `client/public/` directory
4. Clear your browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
