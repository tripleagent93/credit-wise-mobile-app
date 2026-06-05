### 1. User Research & Insights

We conducted interviews with 5 participants matching our target demographic (ages 18–30).

**Key Insights:**

- **Fear of Failure:** Users avoided checking their credit score because decreases caused intense financial anxiety.
- **Lack of Actionable Steps:** Traditional credit trackers show the _score_ but do not explain _how to fix it_.
- **Mobile-First Necessity:** Users demand instant access to credit analytics on the go, specifically prioritizing bottom-of-the-screen thumb accessibility.

### 2. Information Architecture & Wireframes

Initial low-fidelity wireframes focused on maximizing thumb reachability by leveraging bottom-sheet modal layouts for complex analytical forms and data entries.

|                                           Low-Fidelity Paper Sketches                                            |                                                   Digital Wireframes                                                   |
| :--------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------: |
| <img src="https://via.placeholder.com/300x500.png?text=Paper+Wireframe+Sketch" width="280" alt="Paper Sketch" /> | <img src="https://via.placeholder.com/300x500.png?text=Digital+Lo-Fi+Wireframe" width="280" alt="Digital Wireframe" /> |

---

## 🚀 Key Features & Visual Showcases

### 📊 1. Core Application Interface

The dashboard presents a clear, non-intimidating circular credit wheel accompanied by contextual dynamic alerts.

<p align="center">
  <img src="https://via.placeholder.com/320x640.png?text=Dashboard+Mockup" width="320" alt="CreditWise Dashboard Screen" />
  <img src="https://via.placeholder.com/320x640.png?text=Credit+Simulator+Screen" width="320" alt="Credit Simulator Screen" />
</p>

### 🛠️ 2. Bottom Sheet Form Component

To optimize mobile accessibility, full-screen modals were replaced with fluid **Bottom Sheets**. This pattern ensures the native keyboard doesn't obscure primary form inputs and retains the user's focus.

<p align="center">
  <img src="https://via.placeholder.com/320x640.png?text=Mobile+Bottom+Sheet+Open" width="320" alt="Bottom Sheet Component Modal" />
</p>

---

## 🧱 Component Library & UI Engineering

A major goal of this project was to establish a pixel-perfect component library built according to strict design token specifications.

### Storybook Documentation

The components are fully documented inside **Storybook**. Each element utilizes explicit optical balancing guidelines to maximize clarity on low-resolution mobile displays.

<p align="center">
  <img src="https://via.placeholder.com/800x450.png?text=Storybook+Component+Documentation+Dashboard" width="100%" alt="Storybook Workspace Interface" />
</p>

### Micro-Interactions & Layout Rules Followed:

- **Optical Button Balancing:** Side padding automatically scales from `16px` down to `12px` when leading icons are introduced to preserve spatial equilibrium.
- **Overlay Stacking:** Overlays utilize strict `fixed inset-0 z-[9999]` configurations with explicit alpha-channel backgrounds (`bg-[#BABBBB]/70`) and subtle background blurs to insulate foreground tasks safely.
- **Mobile Bounds:** Modals enforce dynamic safety bands using `w-full max-w-[calc(100%-32px)] mx-4` to adapt seamlessly across differing aspect ratios like iPhone Mini up to standard tablet sizes.

---

## 🛠️ Technical Implementation

The component ecosystem is built with a highly maintainable frontend stack mirroring production environments:

- **Framework:** React 18 (TypeScript)
- **Styling:** Tailwind CSS (Utility-first styling Engine)
- **Isolation Environment:** Storybook 8
- **Icons:** Hand-crafted optimized SVG elements bundled into scalable React elements

### Getting Started Locally

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/yourusername/creditwise-mobile-app.git](https://github.com/yourusername/creditwise-mobile-app.git)
   cd creditwise-mobile-app
   ```
