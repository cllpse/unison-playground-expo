# unison-playground-expo

A small Expo app for trying out the unison-components library on iOS and Android.

## Getting started

```sh
git submodule update --init
bun install
bun start
```

`bun start` runs the Expo dev server on Linux, Windows or macOS. Scan the QR code with Expo Go on a phone to open the
app; this works from any OS. Building for the iOS simulator or a native iOS binary needs macOS with Xcode, or EAS
Build (`bunx eas-cli build`) from any OS. Android builds and the Android emulator work on all three.

## Scripts

- `bun start` - Expo dev server
- `bun run android` / `bun run ios` - dev server that opens the Android emulator or iOS simulator
- `bun run lint` - Biome check
- `bun run format` - Biome format, writing changes
- `bun run typecheck` - `tsc --noEmit`

## A note on /unison-components

The _./unison-components_ directory is the component library
([cllpse/unison-components](https://github.com/cllpse/unison-components)), included as a git submodule pinned to a
specific commit. Import it through the `@unison` path alias, which `tsconfig.json` defines and Metro
picks up:

```tsx
import { Frame, Text } from "@unison"
```

#### Styling

The library styles everything with Tailwind class names. [Uniwind](https://uniwind.dev) compiles them to React Native
styles at build time, using Tailwind 4 like the web playground. `global.css` is its entry point, wired up in
`metro.config.js`. It imports the library's _dist/tailwind.css_, which carries its colors as Tailwind theme colors and a
safelist of the class names the library builds at runtime, so there is no build step here. Don't edit
_uniwind-types.d.ts_ (written by Metro) by hand.

#### Updating

Only move the submodule pointer when intentionally bumping the library:

```sh
git -C unison-components pull origin main
git add unison-components
```
