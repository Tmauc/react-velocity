# ⚡ Vite React TypeScript Template

🚀 Template moderne et performant pour démarrer rapidement vos projets React avec Vite, TypeScript, Tailwind CSS et GSAP.

![Template Preview](https://via.placeholder.com/800x400/1e293b/ffffff?text=Vite+React+Template)

## ✨ Technologies incluses

- ⚡ **[Vite](https://vitejs.dev/)** - Build tool ultra-rapide
- ⚛️ **[React 19](https://react.dev/)** - Bibliothèque UI moderne
- 📘 **[TypeScript](https://www.typescriptlang.org/)** - Typage statique
- 🎨 **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitaire
- ✨ **[GSAP](https://greensock.com/gsap/)** - Animations performantes

## 🚀 Démarrage rapide

### Prérequis

- Node.js 20.19+
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone https://github.com/tmauc/react-velocity

# Aller dans le dossier
cd react-velocity

# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev
```

Votre application sera disponible sur `http://localhost:5173`

## 📦 Scripts disponibles

```bash
# Développement
npm run dev          # Lance le serveur de développement
npm run build        # Build pour production
npm run preview      # Prévisualise le build de production
npm run lint         # Lance ESLint
npm run type-check   # Vérifie les types TypeScript
```

## 📁 Structure du projet

```
react-velocity/
├── public/                 # Assets statiques
├── src/
│   ├── pages/             # Pages de l'application
│   │   └── Home.tsx       # Page d'accueil
│   ├── assets/            # Images et ressources
│   ├── App.tsx            # Composant racine
│   ├── main.tsx           # Point d'entrée
│   └── index.css          # Styles globaux
├── package.json
├── tsconfig.json          # Configuration TypeScript
├── tailwind.config.js     # Configuration Tailwind
├── vite.config.ts         # Configuration Vite
└── README.md
```

## 🎨 Fonctionnalités

### ✨ Animations GSAP

- **ScrollTrigger** intégré pour les animations au scroll
- **Timeline animations** pour des séquences coordonnées
- **Stagger effects** pour les animations en cascade
- **Transformations 3D** (rotation, scale, translation)

### 🎨 Design moderne

- **Gradients** et effets visuels modernes
- **Responsive design** avec Tailwind CSS
- **Dark/Light themes** prêts à l'emploi
- **Composants interactifs** avec hover effects

### ⚡ Performance

- **Hot Module Replacement** avec Vite
- **Tree shaking** automatique
- **Code splitting** optimisé
- **Build optimisé** pour la production

## 🔧 Configuration

### Tailwind CSS

```javascript
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Vos personnalisations ici
    },
  },
  plugins: [],
};
```

### TypeScript

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### GSAP

```typescript
// Exemple d'utilisation GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Animation simple
gsap.to(".element", {
  x: 100,
  duration: 1,
  ease: "power2.out",
});

// Animation au scroll
gsap.from(".card", {
  y: 100,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".container",
    start: "top 80%",
  },
});
```

## 🎯 Composants inclus

### Home Page

- **Hero section** avec animations d'entrée
- **Badges interactifs** vers les documentations
- **Section features** avec animations au scroll
- **Design responsive** et moderne

### GSAP Components

- **AnimatedHero** - Animations avancées avec particules

## 🚀 Déploiement

### Vercel

```bash
npm run build
# Déployer le dossier dist/
```

### Netlify

```bash
npm run build
# Déployer le dossier dist/
```

### GitHub Pages

```bash
npm run build
# Déployer le dossier dist/ sur la branche gh-pages
```

## 🤝 Contribution

Les contributions sont les bienvenues !

1. Fork le projet
2. Créez une branche feature (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🙏 Remerciements

- [Vite](https://vitejs.dev/) pour l'outil de build ultra-rapide
- [React](https://react.dev/) pour la bibliothèque UI
- [Tailwind CSS](https://tailwindcss.com/) pour le framework CSS
- [GSAP](https://greensock.com/gsap/) pour les animations
- [TypeScript](https://www.typescriptlang.org/) pour le typage statique

## 📞 Support

Si vous avez des questions ou des problèmes :

- 📧 Email: mauc.spam@gmail.com
- 🐛 Issues: [GitHub Issues](https://github.com/tmauc/react-velocity/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/tmauc/react-velocity/discussions)

---

⭐ **N'hésitez pas à donner une étoile si ce template vous aide !**
