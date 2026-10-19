# unison-playground-expo

A small Expo app for trying out [unison-components](https://github.com/cllpse/unison-components) on iOS and Android.
How the components work, and every flag they take, is documented there.

## Requirements

- [Bun](https://bun.sh) 1.4.3
- [Expo Go](https://expo.dev/go) on a phone, or the Android emulator or iOS simulator (the simulator needs macOS with
  Xcode)
- An editor with the TypeScript Native Preview extension (the project uses TypeScript 7)

`bun install` brings in the rest:

- [Expo](https://expo.dev) SDK 58 with React Native 0.88, React 19 and the React Compiler (`experiments.reactCompiler`
  in _app.json_)
- [Uniwind](https://uniwind.dev) 1.12, to compile Tailwind class names to React Native styles
- [Tailwind CSS](https://tailwindcss.com) 4
- [react-native-svg](https://github.com/software-mansion/react-native-svg) 15, for `Vector`
- [Biome](https://biomejs.dev) 2.5 for linting and formatting

## Getting started

```sh
git submodule update --init
bun install
bun start
```

Scan the QR code with Expo Go to open the app. It follows the phone's light or dark setting. From the parent
[unison](https://github.com/cllpse/unison) repository the same scripts run as `bun run playground-expo:<script>`.

## Scripts

- `bun start` - Expo dev server
- `bun run android` / `bun run ios` - dev server that opens the Android emulator or iOS simulator
- `bun run lint` - Biome check
- `bun run format` - Biome format, writing changes
- `bun run typecheck` - `tsc --noEmit`

## How the playground works

The whole app is one screen, _App.tsx_: a fixed suite of sections, one per group of flags (spacing, sizing, padding,
gap, radius, colors, strokes, shadows, text, alignment, nesting, vectors), in a `ScrollView`. Each section is literal
JSX with no logic, so what you read is what the plugin would generate. The same suite lives in
[unison-playground-web](https://github.com/cllpse/unison-playground-web)'s _src/app/page.tsx_; keep the two in step so
web and native render the same cases.

## How the components are wired in

_./unison-components_ is the library as a git submodule, pinned to a commit:

- `@unison` is a path alias in _tsconfig.json_ for _unison-components/dist/native_, which exports `Frame`, `Text` and
  `Vector`. Metro picks the alias up; the web entry and shells are excluded from type checking.
- [Uniwind](https://uniwind.dev) compiles the library's Tailwind class names to React Native styles. _global.css_ is its
  entry, wired up in _metro.config.js_, and imports the library's _dist/tailwind.css_, which carries the design tokens
  as Tailwind theme values. It is generated and committed in the library, so there is no build step here. Don't edit
  _uniwind-types.d.ts_ (written by Metro) by hand.

```tsx
import "./global.css"
import { Frame, Text } from "@unison"

export default () => {
  return (
    <Frame autolayout-vertical gap-4 padding-4 width-fill>
      <Text fill-black typography-lg>Hello</Text>
    </Frame>
  )
}
```

### Updating the library

Move the pinned commit to pick up library changes:

```sh
git -C unison-components pull origin main
git add unison-components
```
