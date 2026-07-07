<div align="center">

<br/>

<img src="https://readme-typing-svg.demolab.com?font=Outfit&weight=800&size=60&duration=3000&pause=1000&color=8B5CF6&center=true&vCenter=true&width=600&height=80&lines=✅+TODO+App;Stay+Focused.;Stay+Productive." alt="TODO App" />

<br/>

<p align="center">
  <img src="https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white" alt="Vue 3" />
  &nbsp;
  <img src="https://img.shields.io/badge/Vuetify-4.x-1867C0?style=for-the-badge&logo=vuetify&logoColor=white" alt="Vuetify 4" />
  &nbsp;
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  &nbsp;
  <img src="https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Live%20%26%20Functional-10B981?style=for-the-badge" alt="Status" />
  &nbsp;
  <img src="https://img.shields.io/badge/Theme-Dark%20%2F%20Light-8B5CF6?style=for-the-badge" alt="Theme" />
  &nbsp;
  <img src="https://img.shields.io/badge/Responsive-Yes-EC4899?style=for-the-badge" alt="Responsive" />
</p>

<br/>

> **A premium, luxury-designed To-Do application** built with Vue 3 + Vuetify 4.  
> Featuring a stunning glassmorphic dark UI, smooth micro-animations,  
> full task management, and seamless local storage persistence.

<br/>

---

</div>

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎯 Core Functionality
- ✅ **Add Tasks** — Type and press Enter or click Add
- 🗑️ **Delete Tasks** — One-click removal with animation
- ☑️ **Mark Complete** — Toggle tasks as done / undone
- 🔍 **Filter Tasks** — All · Pending · Completed
- 💾 **Persist Data** — Survives browser refresh via LocalStorage

</td>
<td width="50%">

### 🎨 UI & Design
- 🌑 **Dark Mode** — Obsidian black glassmorphism theme
- ☀️ **Light Mode** — Soft violet/rose premium theme
- 🔄 **Theme Toggle** — Instant switch, preference saved
- 📊 **Progress Tracker** — Live completion stats & gradient bar
- 💫 **Micro-animations** — Smooth transitions on every action

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

| Technology | Version | Role |
|:---:|:---:|:---|
| ![Vue](https://img.shields.io/badge/-Vue.js-4FC08D?logo=vue.js&logoColor=white&style=flat-square) | `^3.5` | Reactive UI framework |
| ![Vuetify](https://img.shields.io/badge/-Vuetify-1867C0?logo=vuetify&logoColor=white&style=flat-square) | `^4.1` | Material Design component library |
| ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white&style=flat-square) | `~6.0` | Type-safe JavaScript |
| ![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white&style=flat-square) | `^8.0` | Lightning-fast build tool |
| ![MDI](https://img.shields.io/badge/-MDI%20Icons-2196F3?logo=material-design&logoColor=white&style=flat-square) | `^7.4` | Material Design Icons |
| ![Google Fonts](https://img.shields.io/badge/-Google%20Fonts-4285F4?logo=google&logoColor=white&style=flat-square) | — | Outfit & Plus Jakarta Sans |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** `≥ 22.18.0` installed:

```bash
node --version   # v22.x or higher
npm --version    # 10.x or higher
```

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/todo-app.git
cd todo-app

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Then open **http://localhost:5173** in your browser 🎉

### Build for Production

```bash
npm run build     # Compiles & minifies for production
npm run preview   # Preview the production build locally
```

---

## 📁 Project Structure

```
todo-app/
│
├── 📂 src/
│   ├── 📂 components/
│   │   ├── 🧩 TaskInput.vue      # Input bar with glowing Add button
│   │   ├── 🧩 TaskFilter.vue     # Segmented All / Pending / Completed tabs
│   │   ├── 🧩 TaskItem.vue       # Individual task card with animations
│   │   └── 🧩 TaskList.vue       # Animated list with empty state
│   │
│   ├── 📂 plugins/
│   │   └── ⚙️  vuetify.ts        # Dark + Light premium themes
│   │
│   ├── 🎯 App.vue                # Root: theme toggle, stats, layout
│   └── 🚀 main.ts                # Entry point
│
├── 📄 index.html                 # Google Fonts, meta tags
├── ⚙️  vite.config.ts            # Vite configuration
├── 📝 tsconfig.json              # TypeScript configuration
└── 📦 package.json               # Dependencies & scripts
```

---

## 🎨 Design System

### Color Palette

#### 🌑 Dark Theme — Midnight Obsidian
| Token | Value | Preview |
|:---:|:---:|:---:|
| Background | `#090a0f` | ![](https://placehold.co/40x20/090a0f/090a0f) |
| Surface | `#131520` | ![](https://placehold.co/40x20/131520/131520) |
| Primary | `#8b5cf6` | ![](https://placehold.co/40x20/8b5cf6/8b5cf6) |
| Secondary | `#ec4899` | ![](https://placehold.co/40x20/ec4899/ec4899) |
| Success | `#10b981` | ![](https://placehold.co/40x20/10b981/10b981) |

#### ☀️ Light Theme — Soft Violet
| Token | Value | Preview |
|:---:|:---:|:---:|
| Background | `#f5f3ff` | ![](https://placehold.co/40x20/f5f3ff/f5f3ff) |
| Surface | `#ffffff` | ![](https://placehold.co/40x20/ffffff/ffffff) |
| Primary | `#7c3aed` | ![](https://placehold.co/40x20/7c3aed/7c3aed) |
| Secondary | `#db2777` | ![](https://placehold.co/40x20/db2777/db2777) |
| Success | `#059669` | ![](https://placehold.co/40x20/059669/059669) |

### Typography

| Font | Usage | Weight |
|:---|:---|:---|
| **Outfit** | App title, stats numbers, headings | 800 |
| **Plus Jakarta Sans** | Body, task titles, UI labels | 400 – 700 |

---

## ⚡ How It Works

```mermaid
flowchart TD
    A([🚀 App Loads]) --> B{LocalStorage\nhas saved data?}
    B -- Yes --> C[Restore Tasks + Theme]
    B -- No  --> D[Default Dark Theme\nEmpty Task List]
    C --> E([✅ App Ready])
    D --> E

    E --> F{User Action}
    F -->|Add Task| G[Push to tasks array]
    F -->|Toggle Done| H[Flip completed flag]
    F -->|Delete| I[Filter out task]
    F -->|Filter| J[Computed filtered list]
    F -->|Theme Toggle| K[Switch Vuetify theme\nSave to LocalStorage]

    G --> L[Vue watcher saves\ntasks to LocalStorage]
    H --> L
    I --> L
```

---

## 📋 Functional Requirements — Completion Status

| # | Requirement | Status |
|:---:|:---|:---:|
| 1 | **Add Task** — Enter task, click Add, appears in list | ✅ Done |
| 2 | **Delete Task** — Remove any task from the list | ✅ Done |
| 3 | **Mark Completed** — Toggle completed / uncompleted with visual change | ✅ Done |
| 4 | **Filter Tasks** — All, Completed, Pending filters | ✅ Done |
| 5 | **Persist Data** — Tasks survive page refresh via LocalStorage | ✅ Done |
| + | **Theme Toggle** — Dark / Light mode with persisted preference | ✅ Bonus |
| + | **Progress Tracker** — Live completion rate with gradient progress bar | ✅ Bonus |

---

## 🤖 AI Development Process

This project was built in collaboration with **AI tools** as part of an assignment to understand modern AI-assisted development workflows.

### Prompting Strategy Used

1. **Break down the problem** into smaller subtasks (add, delete, complete, filter, persist)
2. **Describe the tech stack explicitly** — Vue 3 + Vuetify 4 + TypeScript
3. **Request premium UI** with specific design language (glassmorphism, obsidian palette)
4. **Iterate with feedback** — fix warnings, add theme toggle, improve persistence
5. **Review & understand** every code block before accepting

### Key Learnings

> - AI tools excel at boilerplate and component scaffolding  
> - Specific prompts yield better, more targeted output  
> - Always review and test AI-generated code — don't blindly copy  
> - AI helps debug issues quickly when you describe the exact error  
> - Understanding the code is the goal, not just shipping it

---

## 📄 License

This project was created as part of an academic assignment.  
Feel free to use it as a reference for learning Vue 3 + Vuetify 4.

---

<div align="center">

<br/>

<img src="https://readme-typing-svg.demolab.com?font=Plus+Jakarta+Sans&weight=600&size=18&duration=4000&pause=1000&color=8B5CF6&center=true&vCenter=true&width=500&lines=Built+with+Vue+3+%2B+Vuetify+4+%E2%9C%A8;Glassmorphic+%7C+Animated+%7C+Responsive;Dark+%26+Light+Theme+Included+🌙☀️" alt="Typing SVG" />

<br/><br/>

<img src="https://img.shields.io/badge/Made%20with-Vue%203%20%2B%20Vuetify%204-8B5CF6?style=for-the-badge&logo=vue.js" />

<br/>

</div>
