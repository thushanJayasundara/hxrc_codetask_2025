# 🔮 Tarot Card Viewer – Enhanced

This is an upgraded Tarot card deck viewer built with **React** and **Three.js**, redesigned for a more intuitive, responsive, and visually engaging experience.  
It allows users to shuffle and deal cards with interactive animations, bringing a touch of mysticism to modern UI/UX practices.

## 🌐 Live Demo

- 🔗 **New Enhanced App**: [https://hxrc-codetask-2025.vercel.app/](https://hxrc-codetask-2025.vercel.app/)  
- 🔗 **Original App for Comparison**: [https://xrdev.edu.metropolia.fi/hxrc_codetask_2025/](https://xrdev.edu.metropolia.fi/hxrc_codetask_2025/)

---

## ✅ Completed Enhancements

### ✨ UI/UX Improvements
- Rebuilt the UI using **Tailwind CSS** for a modern, mobile-first responsive layout.
- Improved card spacing, button placement, and grid responsiveness for both mobile and desktop.
- Clean, minimalist aesthetic with readable font sizes and intuitive controls.

### 🔁 Shuffling Logic
- Refactored shuffle mechanism to use true randomization with `Math.random()` and array mutation logic.
- Prevents predictable patterns and ensures fairness in every deal.

### 🃏 Hover Effect on Dealt Cards
- Hover animations added via `/src/animations/hovercard.js`.
- Cards slightly animate forward on hover to improve visibility and engagement.
- Only applied to **dealt** cards (not full deck) for clarity.

---

## 🧠 How the User Experience Was Improved

| Aspect              | Original App                                            | Enhanced App                                                  |
|---------------------|---------------------------------------------------------|---------------------------------------------------------------|
| Layout              | Static, not mobile-friendly                             | Fully responsive with adaptive card grid                      |
| Shuffling Logic     | Predictable or minimal                                  | Fully randomized per shuffle                                  |
| Visual Feedback     | No interactivity                                        | Hover animation and better button feedback                    |
| Clarity             | Lacked distinction between deck and dealt cards         | Clearly separated components with intuitive interactions      |
| Visual Appeal       | Basic browser styling                                   | Tailwind-based UI, spacing, and consistent design             |

---

## 🎮 Gamification Ideas (If Given a Full Week)

If allocated a full development week, here are ideas to turn this into a gamified Tarot experience:

### 1. **Daily Draw Challenge**
- Let users draw a single card daily as part of a "daily energy" prompt.
- Include a streak system and personalized card interpretations.

### 2. **Achievement Badges**
- Unlock badges for actions like “First Shuffle”, “3-Day Streak”, or “Draw Major Arcana”.

### 3. **Card Encyclopedia**
- Interactive catalog of all Tarot cards with meanings, allowing users to learn as they draw.

### 4. **Shareable Readings**
- Allow users to share their three-card spreads (Past-Present-Future) via social media or as images.

### 5. **Sound & Visual Effects**
- Background music, card flip sounds, and subtle particle animations for immersion.

### 6. **User Profiles & Save State**
- Let users create profiles to save their favorite readings or track progress.

---

## 🚀 Getting Started Locally

```bash
# Clone the repository
git clone https://github.com/thushanJayasundara/hxrc_codetask_2025.git
cd hxrc_codetask_2025

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 🛠️ Tech Stack

- **React** (Frontend Framework)
- **Three.js** (Card rendering and animations)
- **Tailwind CSS** (Styling)
- **Vercel** (Deployment)

---

## 📁 Folder Highlights

```
/src
 ┣ /animations        # Includes hover effect animations
 ┣ /components        # DeckViewer and Card component
 ┣ /utils             # Card list and shuffle logic
```

---

## 📬 Contact

Developed with care by **Thushan Jayasundara**  
📧 [thushanJayasundara@github](https://github.com/thushanJayasundara)
