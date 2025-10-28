# Quote JSON Format

The `src/quote.json` file contains an array of objects. Each object can represent either a simple quote or a more detailed entry with a title and text.

## Examples

### Simple Quote
```json
{
	"quote": "Science is a way of thinking much more than it is a body of knowledge."
}
```

### Title and Text Entry
```json
{
	"title": "Les sœur jumelle de la compréhension",
	"text": "Aussi loin que je me souvienne, j’ai toujours apprécié la science. ..."
}
```

## Usage in App
- If an entry contains a `quote` property, the app displays it as a quote.
- If an entry contains a `title` (and no `quote`), the app displays the title only.
# Screen Component

The `Screen` component is a simple wrapper for centering content and filling the viewport.

## Usage

Import and use in your React app:
You can customize the styles in `src/screen/screen.css`.


# Quote Display App

A simple React application for displaying quotes with interactive mouse-following animations.

## Screen
![Alt text](./screen/screen.png?raw=true "Optional Title")

## Features

- Interactive skull animation that follows mouse movement
- Dynamic rotation based on cursor position
- Smooth animation with customizable parameters
- Quote display component
- smoth sound interact
- muted btn
- copy quote

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Technologies

- React
- Vite
- CSS3 Animations

## Todo List
- add loading animation

- Add expandable quotes for long texts

## License & Credits
(_wirte song_)
freesound_community write song (Sound Effect by <a href="https://pixabay.com/users/freesound_community-46691455/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=38629">freesound_community</a> from <a href="https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=38629">Pixabay</a>)

(_magic song_)
Sound Effect by <a href="https://pixabay.com/users/freesound_crunchpixstudio-49769582/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=388923">Crunchpix Studio</a> from <a href="https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=388923">Pixabay</a>

(_skull svg_)
Image by <a href="https://pixabay.com/users/openclipart-vectors-30363/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2028284">OpenClipart-Vectors</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2028284">Pixabay</a>




## Icons

- FontAwesome <a href="https://fontawesome.com/"> here </a>
- favicon by SVG Repo <a href="https://www.svgrepo.com/svg/478631/fountain-pen"> here </a>