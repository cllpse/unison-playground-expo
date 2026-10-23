# unison-playground-expo

A small Expo app for trying out [unison-components](https://github.com/cllpse/unison-components) on iOS and Android.
How the components work, and every flag they take, is documented there.

Part of [Unison](https://github.com/cllpse/unison), alongside
[unison-components](https://github.com/cllpse/unison-components),
[unison-plugin](https://github.com/cllpse/unison-plugin),
[unison-playground-web](https://github.com/cllpse/unison-playground-web) and
[unison-website](https://github.com/cllpse/unison-website).

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

The library is the [unison-components](https://www.npmjs.com/package/unison-components) npm package:

- `unison-components` exports `Frame`, `Text` and `Vector`. Metro and TypeScript pick the native build through the
  `react-native` export condition.
- _index.ts_ imports `unison-components/uniwind-motion` before the first render, so transitions and animations run
  through Reanimated.
- [Uniwind](https://uniwind.dev) compiles the library's Tailwind class names to React Native styles. _global.css_ is its
  entry, wired up in _metro.config.js_, and imports `unison-components/tailwind.css`, which carries the design tokens
  as Tailwind theme values. It ships prebuilt in the package, so there is no build step here. Don't edit
  _uniwind-types.d.ts_ (written by Metro) by hand.

```tsx
import "./global.css"
import { Frame, Text } from "unison-components"

export default () => {
  return (
    <Frame autolayout-vertical gap-4 padding-4 width-fill>
      <Text fill-black typography-lg>Hello</Text>
    </Frame>
  )
}
```

### Updating the library

Pick up a new release with `bun update unison-components`. While working on the library,
`bun run components:sync-watch:playground-expo` in the parent [unison](https://github.com/cllpse/unison) repository
builds it and copies it over the installed package as you edit; `bun install` puts the published package back.
