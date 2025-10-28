# Quote Display App / ENG

A small React (Vite) project to display quotes and longer texts with an interactive skull animation that follows the mouse, sound interactions, and handy controls.

---

## JSON File Format

The `src/quote.json` file contains an array of objects. Each object can represent either a simple quote or a detailed entry with a title and text.

### Example — Simple Quote
```json
{
  "quote": "Science is a way of thinking much more than it is a body of knowledge."
}
```

### Example — Title and Text Entry
```json
{
  "title": "The Twin Sisters of Understanding",
  "text": "As far as I can remember, I have always appreciated science..."
}
```

**Usage in the App:**
- If an object contains `quote`, it is displayed as a short quote.
- If it contains `title` (and optionally `text`), it is displayed as a long text entry.

---

## Screens

- Normal view  
![short view](./screen/screen.png?raw=true "normal view")

- Long text view  
![long view](./screen/screen_long.png?raw=true "long text view")

---

## Features

- Interactive skull animation following the mouse  
- Dynamic rotation based on cursor position  
- Smooth animations with customizable parameters  
- Quote and long text display  
- Click sound interaction  
- Mute button  
- Copy quote to clipboard  
- Expandable view for long texts

---

## Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

---

## Technologies

- React  
- Vite  
- CSS3 Animations  
- Web Audio API (for sound effects)

---

## TODO

- Add loading animation  
- Add unit tests for Quote component  
- Improve accessibility (keyboard navigation, ARIA labels)

---

## License & Credits

(_wirte song_)
freesound_community write song (Sound Effect by <a href="https://pixabay.com/users/freesound_community-46691455/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=38629">freesound_community</a> from <a href="https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=38629">Pixabay</a>)

(_magic song_)
Sound Effect by <a href="https://pixabay.com/users/freesound_crunchpixstudio-49769582/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=388923">Crunchpix Studio</a> from <a href="https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=388923">Pixabay</a>

(_skull svg_)
Image by <a href="https://pixabay.com/users/openclipart-vectors-30363/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2028284">OpenClipart-Vectors</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2028284">Pixabay</a>

---

## LICENSE — MIT

MIT License

Copyright (c) 2025 gleyze jonathan

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

# Application d’Affichage de Citations / FR

Un projet React (Vite) permettant d’afficher des citations et de longs textes avec une animation interactive de crâne suivant le curseur, des effets sonores et des contrôles pratiques.

---

## Format du fichier JSON

Le fichier `src/quote.json` contient un tableau d’objets. Chaque objet peut être une citation simple ou une entrée détaillée avec un titre et un texte.

### Exemple — Citation simple
```json
{
  "quote": "La science est une manière de penser bien plus qu'un simple ensemble de connaissances."
}
```

### Exemple — Titre + Texte
```json
{
  "title": "Les sœurs jumelles de la compréhension",
  "text": "Aussi loin que je me souvienne, j’ai toujours apprécié la science..."
}
```

**Utilisation dans l’application :**  
- Si un objet contient `quote`, il est affiché comme une citation courte.  
- S’il contient `title` (et éventuellement `text`), il est affiché comme un texte long.

---

## Captures d’écran

- Vue normale  
![short view](./screen/screen.png?raw=true "vue normale")

- Vue texte long  
![long view](./screen/screen_long.png?raw=true "vue texte long")

---

## Fonctionnalités

- Animation de crâne interactive suivant la souris  
- Rotation dynamique selon la position du curseur  
- Animations fluides et personnalisables  
- Affichage des citations et textes longs  
- Son de clic interactif  
- Bouton muet  
- Copier la citation dans le presse-papier  
- Vue extensible pour les longs textes

---

## Installation

```bash
npm install
```

### Développement

```bash
npm run dev
```

### Compilation

```bash
npm run build
```

---

## Technologies

- React  
- Vite  
- Animations CSS3  
- Web Audio API (pour les effets sonores)

---

## À faire

- Ajouter une animation de chargement  
- Ajouter des tests unitaires pour le composant Quote  
- Améliorer l’accessibilité (navigation clavier, labels ARIA)

---

## Licence et Crédits

(_wirte song_)
freesound_community write song (Sound Effect by <a href="https://pixabay.com/users/freesound_community-46691455/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=38629">freesound_community</a> from <a href="https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=38629">Pixabay</a>)

(_magic song_)
Sound Effect by <a href="https://pixabay.com/users/freesound_crunchpixstudio-49769582/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=388923">Crunchpix Studio</a> from <a href="https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=388923">Pixabay</a>

(_skull svg_)
Image by <a href="https://pixabay.com/users/openclipart-vectors-30363/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2028284">OpenClipart-Vectors</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2028284">Pixabay</a>


---

## LICENCE — MIT

Licence MIT

Copyright (c) 2025 gleyze jonathan

Permission est accordée, gratuitement, à toute personne obtenant une copie de ce logiciel et des fichiers de documentation associés (le « Logiciel »), d'utiliser le Logiciel sans restriction, y compris sans limitation les droits d'utiliser, copier, modifier, fusionner, publier, distribuer, sous-licencier et/ou vendre des copies du Logiciel, et de permettre aux personnes à qui le Logiciel est fourni de le faire, sous réserve des conditions suivantes :

L'avis de copyright ci-dessus et cet avis d'autorisation seront inclus dans toutes les copies ou parties substantielles du Logiciel.

LE LOGICIEL EST FOURNI « TEL QUEL », SANS GARANTIE D'AUCUNE SORTE, EXPLICITE OU IMPLICITE, Y COMPRIS MAIS SANS S'Y LIMITER AUX GARANTIES DE QUALITÉ MARCHANDE, D'ADÉQUATION À UN USAGE PARTICULIER ET D'ABSENCE DE CONTREFAÇON. EN AUCUN CAS LES AUTEURS OU DÉTENTEURS DU COPYRIGHT NE POURRONT ÊTRE TENUS RESPONSABLES DE TOUT DOMMAGE, RÉCLAMATION OU AUTRE RESPONSABILITÉ, QU’ELLE SOIT CONTRACTUELLE, DÉLICTUELLE OU AUTRE, DÉCOULANT DE L’UTILISATION OU DE L’IMPOSSIBILITÉ D’UTILISER LE LOGICIEL.

---

*README version française (mise à jour octobre 2025)*
