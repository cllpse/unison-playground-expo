import "./global.css"
import { Frame, Text, Vector } from "@unison"
import { StatusBar } from "expo-status-bar"
import type { ReactNode } from "react"
import { ScrollView } from "react-native"

// Keep these sections in step with unison-playground-web/src/app/page.tsx so web and native render the same cases.

// A "more" icon (three dots) as Figma exports its path.
const MORE_PATH =
  "M1.25 2.5 C0.91 2.5 0.61 2.38 0.37 2.13 C0.12 1.89 0 1.59 0 1.25 C0 0.91 0.12 0.61 0.37 0.37 C0.61 0.12 0.91 0 1.25 0 C1.59 0 1.89 0.12 2.13 0.37 C2.38 0.61 2.5 0.91 2.5 1.25 C2.5 1.59 2.38 1.89 2.13 2.13 C1.89 2.38 1.59 2.5 1.25 2.5 Z M6.06 2.5 C5.71 2.5 5.42 2.38 5.18 2.13 C4.93 1.89 4.81 1.59 4.81 1.25 C4.81 0.91 4.93 0.61 5.18 0.37 C5.42 0.12 5.71 0 6.06 0 C6.4 0 6.7 0.12 6.94 0.37 C7.19 0.61 7.31 0.91 7.31 1.25 C7.31 1.59 7.19 1.89 6.94 2.13 C6.7 2.38 6.4 2.5 6.06 2.5 Z M10.87 2.5 C10.52 2.5 10.23 2.38 9.98 2.13 C9.74 1.89 9.62 1.59 9.62 1.25 C9.62 0.91 9.74 0.61 9.98 0.37 C10.23 0.12 10.52 0 10.87 0 C11.21 0 11.5 0.12 11.75 0.37 C11.99 0.61 12.12 0.91 12.12 1.25 C12.12 1.59 11.99 1.89 11.75 2.13 C11.5 2.38 11.21 2.5 10.87 2.5 Z"

const LOREM =
  "Frames compose like Figma auto layout: direction, sizing, padding and gap decide where every child lands, and text wraps inside whatever width its parent gives it."

// Long enough to overflow a fill frame on any screen width, so the nowrap types always show their ellipsis.
const LOREM_LONG = `${LOREM} ${LOREM} ${LOREM}`

const Section = (p: { title: string; note: string; children?: ReactNode }) => {
  return (
    <Frame autolayout-vertical gap-2 height-hug width-fill>
      <Text fill-black typography-sm>
        {p.title}
      </Text>
      <Text fill-neutral-500 typography-sm>
        {p.note}
      </Text>
      <Frame corner-radius-xl fill-neutral-100 autolayout-vertical gap-4 height-hug padding-4 width-fill>
        {p.children}
      </Frame>
    </Frame>
  )
}

const Case = (p: { label: string; children?: ReactNode }) => {
  return (
    <Frame autolayout-vertical gap-1 height-hug width-hug>
      {p.children}
      <Text fill-neutral-500 typography-sm>
        {p.label}
      </Text>
    </Frame>
  )
}

const Caption = (p: { children?: ReactNode }) => {
  return (
    <Text fill-neutral-500 typography-sm>
      {p.children}
    </Text>
  )
}

export default () => {
  return (
    <ScrollView>
      <StatusBar style="auto" />
      <Frame fill-white autolayout-vertical gap-10 height-hug padding-horizontal-4 padding-vertical-16 width-fill>
        <Text fill-black typography-2xl>
          Frame and Text test suite
        </Text>

        <Section
          title="1. Empty frames"
          note="Fixed sizes and padding keep empty frames visible. The red hug frame has no children and should collapse to nothing."
        >
          <Frame alignment-bottom-left autolayout-horizontal gap-4 height-hug width-fill wrap>
            <Case label="12 x 12">
              <Frame fill-violet-400 height-12 width-12 />
            </Case>
            <Case label="round">
              <Frame corner-radius-full fill-fuchsia-300 height-12 width-12 />
            </Case>
            <Case label="padding-4">
              <Frame fill-sky-300 padding-4 />
            </Case>
            <Case label="hug, empty">
              <Frame fill-red-400 height-hug width-hug />
            </Case>
            <Case label="dashed">
              <Frame height-12 stroke-neutral-500 stroke-style-dashed width-12 />
            </Case>
            <Case label="1px line">
              <Frame fill-neutral-900 height-px width-12 />
            </Case>
          </Frame>
          <Caption>width-fill, height-4</Caption>
          <Frame fill-green-600 height-4 width-fill />
        </Section>

        <Section title="2. Fixed sizes" note="Squares from width-1 to width-32, bottom aligned in a wrapping row.">
          <Frame alignment-bottom-left autolayout-horizontal gap-2 height-hug width-fill wrap>
            <Case label="1">
              <Frame fill-violet-600 height-1 width-1 />
            </Case>
            <Case label="2">
              <Frame fill-violet-600 height-2 width-2 />
            </Case>
            <Case label="2p5">
              <Frame fill-violet-600 height-2p5 width-2p5 />
            </Case>
            <Case label="4">
              <Frame fill-violet-600 height-4 width-4 />
            </Case>
            <Case label="6">
              <Frame fill-violet-600 height-6 width-6 />
            </Case>
            <Case label="8">
              <Frame fill-violet-600 height-8 width-8 />
            </Case>
            <Case label="9">
              <Frame fill-violet-600 height-9 width-9 />
            </Case>
            <Case label="10">
              <Frame fill-violet-600 height-10 width-10 />
            </Case>
            <Case label="12">
              <Frame fill-violet-600 height-12 width-12 />
            </Case>
            <Case label="16">
              <Frame fill-violet-600 height-16 width-16 />
            </Case>
            <Case label="20">
              <Frame fill-violet-600 height-20 width-20 />
            </Case>
            <Case label="24">
              <Frame fill-violet-600 height-24 width-24 />
            </Case>
            <Case label="28">
              <Frame fill-violet-600 height-28 width-28 />
            </Case>
            <Case label="32">
              <Frame fill-violet-600 height-32 width-32 />
            </Case>
            <Case label="28 x 4">
              <Frame fill-fuchsia-400 height-4 width-28 />
            </Case>
            <Case label="4 x 28">
              <Frame fill-fuchsia-400 height-28 width-4 />
            </Case>
          </Frame>
        </Section>

        <Section
          title="3. Rows: fixed, hug and fill"
          note="Fill children share the space left over by fixed and hug siblings. Fixed frames never shrink."
        >
          <Caption>fixed 16 | fill | fixed 16</Caption>
          <Frame autolayout-horizontal gap-2 height-hug width-fill>
            <Frame fill-violet-600 height-12 width-16 />
            <Frame fill-violet-300 height-12 width-fill />
            <Frame fill-violet-600 height-12 width-16 />
          </Frame>
          <Caption>fill | fill | fill (equal widths)</Caption>
          <Frame autolayout-horizontal gap-2 height-hug width-fill>
            <Frame fill-fuchsia-200 height-12 width-fill />
            <Frame fill-fuchsia-300 height-12 width-fill />
            <Frame fill-fuchsia-400 height-12 width-fill />
          </Frame>
          <Caption>hug text | fill | hug text</Caption>
          <Frame autolayout-horizontal gap-2 height-hug width-fill>
            <Frame fill-sky-100 height-hug padding-2 width-hug>
              <Text fill-black typography-sm>
                Hug left
              </Text>
            </Frame>
            <Frame fill-sky-300 height-fill width-fill />
            <Frame fill-sky-100 height-hug padding-2 width-hug>
              <Text fill-black typography-sm>
                Hug right
              </Text>
            </Frame>
          </Frame>
          <Caption>fixed 12 | fill with long nowrap text (truncates) | fixed 12</Caption>
          <Frame alignment-left autolayout-horizontal gap-2 height-hug width-fill>
            <Frame fill-green-700 height-12 width-12 />
            <Frame autolayout-vertical height-hug width-fill>
              <Text fill-black typography-base>
                {LOREM}
              </Text>
            </Frame>
            <Frame fill-green-700 height-12 width-12 />
          </Frame>
          <Caption>width-full child</Caption>
          <Frame autolayout-horizontal height-hug width-fill>
            <Frame fill-yellow-400 height-6 width-full />
          </Frame>
        </Section>

        <Section
          title="4. Columns: fixed, hug and fill"
          note="Three 28-high columns side by side. Fill children split the height left by fixed siblings."
        >
          <Frame autolayout-horizontal gap-4 height-28 width-fill>
            <Frame autolayout-vertical gap-1 height-fill width-fill>
              <Frame fill-violet-600 height-6 width-fill />
              <Frame fill-violet-300 height-fill width-fill />
              <Frame fill-violet-600 height-6 width-fill />
            </Frame>
            <Frame autolayout-vertical gap-1 height-fill width-fill>
              <Frame fill-fuchsia-200 height-fill width-fill />
              <Frame fill-fuchsia-300 height-fill width-fill />
              <Frame fill-fuchsia-400 height-fill width-fill />
            </Frame>
            <Frame fill-sky-50 autolayout-vertical gap-1 height-fill width-fill>
              <Frame fill-sky-300 height-hug padding-1 width-hug>
                <Text fill-white typography-sm>
                  hug
                </Text>
              </Frame>
              <Frame fill-sky-500 height-hug padding-1 width-fill>
                <Text fill-white typography-sm>
                  width-fill
                </Text>
              </Frame>
            </Frame>
          </Frame>
        </Section>

        <Section
          title="5. Fill on both axes"
          note="A frame that fills both axes grows along its parent's direction and stretches across it."
        >
          <Caption>row, height-20: fixed 12 | fill both | fixed 12</Caption>
          <Frame fill-neutral-200 autolayout-horizontal gap-2 height-20 padding-2 width-fill>
            <Frame fill-violet-600 height-12 width-12 />
            <Frame alignment-center fill-violet-300 autolayout-vertical height-fill width-fill>
              <Text fill-black typography-sm>
                fill both
              </Text>
            </Frame>
            <Frame fill-violet-600 height-12 width-12 />
          </Frame>
          <Caption>column, height-28: fixed 6 | fill both | fill both</Caption>
          <Frame fill-neutral-200 autolayout-vertical gap-2 height-28 padding-2 width-fill>
            <Frame fill-fuchsia-400 height-6 width-6 />
            <Frame fill-fuchsia-200 height-fill width-fill />
            <Frame fill-fuchsia-300 height-fill width-fill />
          </Frame>
        </Section>

        <Section title="6. Padding" note="An 8 x 8 dark box inside a light frame with each padding flag.">
          <Frame alignment-top-left autolayout-horizontal gap-4 height-hug width-fill wrap>
            <Case label="padding-0">
              <Frame fill-violet-200 padding-0>
                <Frame fill-violet-600 height-8 width-8 />
              </Frame>
            </Case>
            <Case label="padding-px">
              <Frame fill-violet-200 padding-px>
                <Frame fill-violet-600 height-8 width-8 />
              </Frame>
            </Case>
            <Case label="padding-2">
              <Frame fill-violet-200 padding-2>
                <Frame fill-violet-600 height-8 width-8 />
              </Frame>
            </Case>
            <Case label="padding-4">
              <Frame fill-violet-200 padding-4>
                <Frame fill-violet-600 height-8 width-8 />
              </Frame>
            </Case>
            <Case label="padding-8">
              <Frame fill-violet-200 padding-8>
                <Frame fill-violet-600 height-8 width-8 />
              </Frame>
            </Case>
            <Case label="vertical-4">
              <Frame fill-violet-200 padding-vertical-4>
                <Frame fill-violet-600 height-8 width-8 />
              </Frame>
            </Case>
            <Case label="horizontal-4">
              <Frame fill-violet-200 padding-horizontal-4>
                <Frame fill-violet-600 height-8 width-8 />
              </Frame>
            </Case>
            <Case label="left-6">
              <Frame fill-violet-200 padding-left-6>
                <Frame fill-violet-600 height-8 width-8 />
              </Frame>
            </Case>
            <Case label="right-6">
              <Frame fill-violet-200 padding-right-6>
                <Frame fill-violet-600 height-8 width-8 />
              </Frame>
            </Case>
            <Case label="top-6">
              <Frame fill-violet-200 padding-top-6>
                <Frame fill-violet-600 height-8 width-8 />
              </Frame>
            </Case>
            <Case label="bottom-6">
              <Frame fill-violet-200 padding-bottom-6>
                <Frame fill-violet-600 height-8 width-8 />
              </Frame>
            </Case>
            <Case label="top-2 left-8">
              <Frame fill-violet-200 padding-left-8 padding-top-2>
                <Frame fill-violet-600 height-8 width-8 />
              </Frame>
            </Case>
          </Frame>
          <Caption>padding-4 on a width-fill frame with text</Caption>
          <Frame fill-violet-200 padding-4 width-fill>
            <Text fill-black typography-base>
              {LOREM}
            </Text>
          </Frame>
        </Section>

        <Section title="7. Gaps" note="Three 6 x 6 boxes per row, then a column, with each gap flag.">
          <Frame alignment-top-left autolayout-horizontal gap-6 height-hug width-fill wrap>
            <Case label="gap-0">
              <Frame autolayout-horizontal gap-0>
                <Frame fill-fuchsia-400 height-6 width-6 />
                <Frame fill-fuchsia-300 height-6 width-6 />
                <Frame fill-fuchsia-200 height-6 width-6 />
              </Frame>
            </Case>
            <Case label="gap-px">
              <Frame autolayout-horizontal gap-px>
                <Frame fill-fuchsia-400 height-6 width-6 />
                <Frame fill-fuchsia-300 height-6 width-6 />
                <Frame fill-fuchsia-200 height-6 width-6 />
              </Frame>
            </Case>
            <Case label="gap-0p5">
              <Frame autolayout-horizontal gap-0p5>
                <Frame fill-fuchsia-400 height-6 width-6 />
                <Frame fill-fuchsia-300 height-6 width-6 />
                <Frame fill-fuchsia-200 height-6 width-6 />
              </Frame>
            </Case>
            <Case label="gap-1">
              <Frame autolayout-horizontal gap-1>
                <Frame fill-fuchsia-400 height-6 width-6 />
                <Frame fill-fuchsia-300 height-6 width-6 />
                <Frame fill-fuchsia-200 height-6 width-6 />
              </Frame>
            </Case>
            <Case label="gap-2">
              <Frame autolayout-horizontal gap-2>
                <Frame fill-fuchsia-400 height-6 width-6 />
                <Frame fill-fuchsia-300 height-6 width-6 />
                <Frame fill-fuchsia-200 height-6 width-6 />
              </Frame>
            </Case>
            <Case label="gap-4">
              <Frame autolayout-horizontal gap-4>
                <Frame fill-fuchsia-400 height-6 width-6 />
                <Frame fill-fuchsia-300 height-6 width-6 />
                <Frame fill-fuchsia-200 height-6 width-6 />
              </Frame>
            </Case>
            <Case label="gap-8">
              <Frame autolayout-horizontal gap-8>
                <Frame fill-fuchsia-400 height-6 width-6 />
                <Frame fill-fuchsia-300 height-6 width-6 />
                <Frame fill-fuchsia-200 height-6 width-6 />
              </Frame>
            </Case>
            <Case label="column gap-3">
              <Frame autolayout-vertical gap-3>
                <Frame fill-fuchsia-400 height-6 width-6 />
                <Frame fill-fuchsia-300 height-6 width-6 />
                <Frame fill-fuchsia-200 height-6 width-6 />
              </Frame>
            </Case>
          </Frame>
        </Section>

        <Section title="8. Corner radius" note="16 x 16 squares with each corner flag.">
          <Frame alignment-top-left autolayout-horizontal gap-4 height-hug width-fill wrap>
            <Case label="none">
              <Frame corner-radius-none fill-sky-300 height-16 width-16 />
            </Case>
            <Case label="xs">
              <Frame corner-radius-xs fill-sky-300 height-16 width-16 />
            </Case>
            <Case label="sm">
              <Frame corner-radius-sm fill-sky-300 height-16 width-16 />
            </Case>
            <Case label="md">
              <Frame corner-radius-md fill-sky-300 height-16 width-16 />
            </Case>
            <Case label="lg">
              <Frame corner-radius-lg fill-sky-300 height-16 width-16 />
            </Case>
            <Case label="xl">
              <Frame corner-radius-xl fill-sky-300 height-16 width-16 />
            </Case>
            <Case label="2xl">
              <Frame corner-radius-2xl fill-sky-300 height-16 width-16 />
            </Case>
            <Case label="3xl">
              <Frame corner-radius-3xl fill-sky-300 height-16 width-16 />
            </Case>
            <Case label="4xl">
              <Frame corner-radius-4xl fill-sky-300 height-16 width-16 />
            </Case>
            <Case label="full">
              <Frame corner-radius-full fill-sky-300 height-16 width-16 />
            </Case>
            <Case label="top-left-3xl">
              <Frame corner-radius-top-left-3xl fill-sky-300 height-16 width-16 />
            </Case>
            <Case label="top-right-3xl">
              <Frame corner-radius-top-right-3xl fill-sky-300 height-16 width-16 />
            </Case>
            <Case label="bottom-left-3xl">
              <Frame corner-radius-bottom-left-3xl fill-sky-300 height-16 width-16 />
            </Case>
            <Case label="bottom-right-3xl">
              <Frame corner-radius-bottom-right-3xl fill-sky-300 height-16 width-16 />
            </Case>
            <Case label="leaf">
              <Frame corner-radius-bottom-right-full corner-radius-top-left-full fill-sky-300 height-16 width-16 />
            </Case>
            <Case label="border-radius-2xl">
              <Frame border-radius-2xl fill-sky-300 height-16 width-16 />
            </Case>
            <Case label="pill 28 x 8">
              <Frame corner-radius-full fill-sky-300 height-8 width-28 />
            </Case>
          </Frame>
        </Section>

        <Section title="9. Fills and strokes" note="Each palette at 300, 500, 700 and brand, then strokes on white.">
          <Frame autolayout-vertical gap-1 height-hug width-fill>
            <Frame autolayout-horizontal gap-1 height-hug width-fill>
              <Frame fill-violet-300 height-8 width-fill />
              <Frame fill-violet-400 height-8 width-fill />
              <Frame fill-violet-600 height-8 width-fill />
              <Frame fill-violet-600 height-8 width-fill />
            </Frame>
            <Frame autolayout-horizontal gap-1 height-hug width-fill>
              <Frame fill-fuchsia-200 height-8 width-fill />
              <Frame fill-fuchsia-300 height-8 width-fill />
              <Frame fill-fuchsia-400 height-8 width-fill />
              <Frame fill-fuchsia-400 height-8 width-fill />
            </Frame>
            <Frame autolayout-horizontal gap-1 height-hug width-fill>
              <Frame fill-sky-200 height-8 width-fill />
              <Frame fill-sky-300 height-8 width-fill />
              <Frame fill-sky-500 height-8 width-fill />
              <Frame fill-sky-500 height-8 width-fill />
            </Frame>
            <Frame autolayout-horizontal gap-1 height-hug width-fill>
              <Frame fill-yellow-300 height-8 width-fill />
              <Frame fill-yellow-600 height-8 width-fill />
              <Frame fill-yellow-700 height-8 width-fill />
              <Frame fill-yellow-400 height-8 width-fill />
            </Frame>
            <Frame autolayout-horizontal gap-1 height-hug width-fill>
              <Frame fill-green-300 height-8 width-fill />
              <Frame fill-green-700 height-8 width-fill />
              <Frame fill-green-700 height-8 width-fill />
              <Frame fill-green-700 height-8 width-fill />
            </Frame>
            <Frame autolayout-horizontal gap-1 height-hug width-fill>
              <Frame fill-red-300 height-8 width-fill />
              <Frame fill-red-400 height-8 width-fill />
              <Frame fill-red-600 height-8 width-fill />
              <Frame fill-red-500 height-8 width-fill />
            </Frame>
            <Frame autolayout-horizontal gap-1 height-hug width-fill>
              <Frame fill-neutral-200 height-8 width-fill />
              <Frame fill-neutral-400 height-8 width-fill />
              <Frame fill-neutral-900 height-8 width-fill />
              <Frame fill-black height-8 width-fill />
            </Frame>
          </Frame>
          <Frame alignment-top-left autolayout-horizontal gap-4 height-hug width-fill wrap>
            <Case label="stroke solid">
              <Frame fill-white height-16 stroke-neutral-500 stroke-style-solid width-16 />
            </Case>
            <Case label="stroke dashed">
              <Frame fill-white height-16 stroke-neutral-500 stroke-style-dashed width-16 />
            </Case>
            <Case label="stroke + round">
              <Frame corner-radius-2xl fill-white height-16 stroke-violet-600 width-16 />
            </Case>
            <Case label="stroke + full">
              <Frame corner-radius-full fill-white height-16 stroke-fuchsia-400 width-16 />
            </Case>
            <Case label="transparent">
              <Frame fill-transparent height-16 stroke-sky-500 width-16 />
            </Case>
            <Case label="hover (web)">
              <Frame fill-hover-violet-400 fill-violet-200 height-16 width-16 />
            </Case>
          </Frame>
        </Section>

        <Section title="10. Shadows" note="Tinted shadows on white and primary frames, then Tailwind's shadow scale.">
          <Frame alignment-top-left fill-white autolayout-horizontal gap-6 height-hug padding-4 width-fill wrap>
            <Case label="white none">
              <Frame corner-radius-lg effect-shadow-none fill-white height-16 width-16 />
            </Case>
            <Case label="white small">
              <Frame corner-radius-lg effect-shadow-sm fill-white height-16 width-16 />
            </Case>
            <Case label="white large">
              <Frame corner-radius-lg effect-shadow-lg fill-white height-16 width-16 />
            </Case>
            <Case label="primary small">
              <Frame corner-radius-lg effect-shadow-sm fill-violet-400 height-16 width-16 />
            </Case>
            <Case label="primary large">
              <Frame corner-radius-lg effect-shadow-lg fill-violet-400 height-16 width-16 />
            </Case>
            <Case label="2xs">
              <Frame corner-radius-lg effect-shadow-2xs fill-white height-16 width-16 />
            </Case>
            <Case label="xs">
              <Frame corner-radius-lg effect-shadow-xs fill-white height-16 width-16 />
            </Case>
            <Case label="sm">
              <Frame corner-radius-lg effect-shadow-sm fill-white height-16 width-16 />
            </Case>
            <Case label="md">
              <Frame corner-radius-lg effect-shadow-md fill-white height-16 width-16 />
            </Case>
            <Case label="lg">
              <Frame corner-radius-lg effect-shadow-lg fill-white height-16 width-16 />
            </Case>
            <Case label="xl">
              <Frame corner-radius-lg effect-shadow-xl fill-white height-16 width-16 />
            </Case>
            <Case label="2xl">
              <Frame corner-radius-lg effect-shadow-2xl fill-white height-16 width-16 />
            </Case>
          </Frame>
        </Section>

        <Section
          title="11. Alignment"
          note="20 x 20 frames with each alignment flag. Horizontal flow holds two boxes side by side, vertical flow stacks them."
        >
          <Caption>autolayout-horizontal</Caption>
          <Frame alignment-top-left autolayout-horizontal gap-4 height-hug width-fill wrap>
            <Case label="top-left">
              <Frame alignment-top-left fill-neutral-200 autolayout-horizontal gap-1 height-20 width-20>
                <Frame fill-violet-600 height-4 width-4 />
                <Frame fill-violet-300 height-6 width-4 />
              </Frame>
            </Case>
            <Case label="top-center">
              <Frame alignment-top-center fill-neutral-200 autolayout-horizontal gap-1 height-20 width-20>
                <Frame fill-violet-600 height-4 width-4 />
                <Frame fill-violet-300 height-6 width-4 />
              </Frame>
            </Case>
            <Case label="top-right">
              <Frame alignment-top-right fill-neutral-200 autolayout-horizontal gap-1 height-20 width-20>
                <Frame fill-violet-600 height-4 width-4 />
                <Frame fill-violet-300 height-6 width-4 />
              </Frame>
            </Case>
            <Case label="left">
              <Frame alignment-left fill-neutral-200 autolayout-horizontal gap-1 height-20 width-20>
                <Frame fill-violet-600 height-4 width-4 />
                <Frame fill-violet-300 height-6 width-4 />
              </Frame>
            </Case>
            <Case label="center">
              <Frame alignment-center fill-neutral-200 autolayout-horizontal gap-1 height-20 width-20>
                <Frame fill-violet-600 height-4 width-4 />
                <Frame fill-violet-300 height-6 width-4 />
              </Frame>
            </Case>
            <Case label="right">
              <Frame alignment-right fill-neutral-200 autolayout-horizontal gap-1 height-20 width-20>
                <Frame fill-violet-600 height-4 width-4 />
                <Frame fill-violet-300 height-6 width-4 />
              </Frame>
            </Case>
            <Case label="bottom-left">
              <Frame alignment-bottom-left fill-neutral-200 autolayout-horizontal gap-1 height-20 width-20>
                <Frame fill-violet-600 height-4 width-4 />
                <Frame fill-violet-300 height-6 width-4 />
              </Frame>
            </Case>
            <Case label="bottom-center">
              <Frame alignment-bottom-center fill-neutral-200 autolayout-horizontal gap-1 height-20 width-20>
                <Frame fill-violet-600 height-4 width-4 />
                <Frame fill-violet-300 height-6 width-4 />
              </Frame>
            </Case>
            <Case label="bottom-right">
              <Frame alignment-bottom-right fill-neutral-200 autolayout-horizontal gap-1 height-20 width-20>
                <Frame fill-violet-600 height-4 width-4 />
                <Frame fill-violet-300 height-6 width-4 />
              </Frame>
            </Case>
          </Frame>
          <Caption>autolayout-vertical</Caption>
          <Frame alignment-top-left autolayout-horizontal gap-4 height-hug width-fill wrap>
            <Case label="top-left">
              <Frame alignment-top-left fill-neutral-200 autolayout-vertical gap-1 height-20 width-20>
                <Frame fill-fuchsia-400 height-4 width-4 />
                <Frame fill-fuchsia-300 height-4 width-6 />
              </Frame>
            </Case>
            <Case label="top-center">
              <Frame alignment-top-center fill-neutral-200 autolayout-vertical gap-1 height-20 width-20>
                <Frame fill-fuchsia-400 height-4 width-4 />
                <Frame fill-fuchsia-300 height-4 width-6 />
              </Frame>
            </Case>
            <Case label="top-right">
              <Frame alignment-top-right fill-neutral-200 autolayout-vertical gap-1 height-20 width-20>
                <Frame fill-fuchsia-400 height-4 width-4 />
                <Frame fill-fuchsia-300 height-4 width-6 />
              </Frame>
            </Case>
            <Case label="left">
              <Frame alignment-left fill-neutral-200 autolayout-vertical gap-1 height-20 width-20>
                <Frame fill-fuchsia-400 height-4 width-4 />
                <Frame fill-fuchsia-300 height-4 width-6 />
              </Frame>
            </Case>
            <Case label="center">
              <Frame alignment-center fill-neutral-200 autolayout-vertical gap-1 height-20 width-20>
                <Frame fill-fuchsia-400 height-4 width-4 />
                <Frame fill-fuchsia-300 height-4 width-6 />
              </Frame>
            </Case>
            <Case label="right">
              <Frame alignment-right fill-neutral-200 autolayout-vertical gap-1 height-20 width-20>
                <Frame fill-fuchsia-400 height-4 width-4 />
                <Frame fill-fuchsia-300 height-4 width-6 />
              </Frame>
            </Case>
            <Case label="bottom-left">
              <Frame alignment-bottom-left fill-neutral-200 autolayout-vertical gap-1 height-20 width-20>
                <Frame fill-fuchsia-400 height-4 width-4 />
                <Frame fill-fuchsia-300 height-4 width-6 />
              </Frame>
            </Case>
            <Case label="bottom-center">
              <Frame alignment-bottom-center fill-neutral-200 autolayout-vertical gap-1 height-20 width-20>
                <Frame fill-fuchsia-400 height-4 width-4 />
                <Frame fill-fuchsia-300 height-4 width-6 />
              </Frame>
            </Case>
            <Case label="bottom-right">
              <Frame alignment-bottom-right fill-neutral-200 autolayout-vertical gap-1 height-20 width-20>
                <Frame fill-fuchsia-400 height-4 width-4 />
                <Frame fill-fuchsia-300 height-4 width-6 />
              </Frame>
            </Case>
          </Frame>
        </Section>

        <Section
          title="12. Wrapping"
          note="Pills in a wrapping row, then the same boxes in a 28-wide frame with and without wrap."
        >
          <Frame autolayout-horizontal gap-2 height-hug width-fill wrap>
            <Frame corner-radius-full fill-violet-50 padding-horizontal-3 padding-vertical-1>
              <Text fill-violet-700 typography-sm>
                Design
              </Text>
            </Frame>
            <Frame corner-radius-full fill-fuchsia-50 padding-horizontal-3 padding-vertical-1>
              <Text fill-fuchsia-700 typography-sm>
                Engineering
              </Text>
            </Frame>
            <Frame corner-radius-full fill-sky-50 padding-horizontal-3 padding-vertical-1>
              <Text fill-sky-600 typography-sm>
                Research
              </Text>
            </Frame>
            <Frame corner-radius-full fill-green-100 padding-horizontal-3 padding-vertical-1>
              <Text fill-green-800 typography-sm>
                Shipped
              </Text>
            </Frame>
            <Frame corner-radius-full fill-red-100 padding-horizontal-3 padding-vertical-1>
              <Text fill-red-800 typography-sm>
                Blocked
              </Text>
            </Frame>
            <Frame corner-radius-full fill-yellow-100 padding-horizontal-3 padding-vertical-1>
              <Text fill-yellow-900 typography-sm>
                In review
              </Text>
            </Frame>
            <Frame corner-radius-full fill-neutral-100 padding-horizontal-3 padding-vertical-1>
              <Text fill-neutral-950 typography-sm>
                Backlog
              </Text>
            </Frame>
            <Frame corner-radius-full fill-violet-50 padding-horizontal-3 padding-vertical-1>
              <Text fill-violet-700 typography-sm>
                A much longer pill label
              </Text>
            </Frame>
            <Frame corner-radius-full fill-fuchsia-50 padding-horizontal-3 padding-vertical-1>
              <Text fill-fuchsia-700 typography-sm>
                Mobile
              </Text>
            </Frame>
            <Frame corner-radius-full fill-sky-50 padding-horizontal-3 padding-vertical-1>
              <Text fill-sky-600 typography-sm>
                Web
              </Text>
            </Frame>
          </Frame>
          <Frame alignment-top-left autolayout-horizontal gap-6 height-hug width-fill wrap>
            <Case label="width-28, wrap">
              <Frame fill-white autolayout-horizontal gap-1 height-hug padding-1 width-28 wrap>
                <Frame fill-sky-200 height-6 width-6 />
                <Frame fill-sky-200 height-6 width-6 />
                <Frame fill-sky-300 height-6 width-6 />
                <Frame fill-sky-400 height-6 width-6 />
                <Frame fill-sky-500 height-6 width-6 />
                <Frame fill-sky-600 height-6 width-6 />
                <Frame fill-sky-700 height-6 width-6 />
              </Frame>
            </Case>
            <Case label="width-28, no wrap (overflows)">
              <Frame fill-white autolayout-horizontal gap-1 height-hug padding-1 width-28>
                <Frame fill-sky-200 height-6 width-6 />
                <Frame fill-sky-200 height-6 width-6 />
                <Frame fill-sky-300 height-6 width-6 />
                <Frame fill-sky-400 height-6 width-6 />
                <Frame fill-sky-500 height-6 width-6 />
                <Frame fill-sky-600 height-6 width-6 />
                <Frame fill-sky-700 height-6 width-6 />
              </Frame>
            </Case>
          </Frame>
        </Section>

        <Section title="13. Typography" note="Every typography flag, in black.">
          <Frame autolayout-vertical gap-2 height-hug width-fill>
            <Text fill-black typography-2xl>
              display-wrap
            </Text>
            <Text fill-black typography-base>
              header-wrap
            </Text>
            <Text fill-black typography-sm>
              header-small-wrap
            </Text>
            <Text fill-black typography-base>
              body-wrap
            </Text>
            <Text fill-black typography-base>
              body-nowrap
            </Text>
            <Text fill-black typography-sm>
              body-small-wrap
            </Text>
            <Text fill-black typography-sm>
              body-small-nowrap
            </Text>
            <Text fill-black typography-base>
              mono-wrap
            </Text>
            <Text fill-black typography-base>
              mono-nowrap
            </Text>
            <Text fill-black typography-sm>
              mono-small-wrap
            </Text>
            <Text fill-black typography-sm>
              mono-small-nowrap
            </Text>
            <Text fill-black typography-base>
              label-wrap
            </Text>
            <Text fill-black typography-base>
              label-nowrap
            </Text>
            <Text fill-black typography-sm>
              label-small-wrap
            </Text>
            <Text fill-black typography-sm>
              label-small-nowrap
            </Text>
            <Text fill-black typography-6xl>
              01:23:45:12
            </Text>
            <Text fill-violet-600 typography-base typography-decoration-underline>
              underlined primary-700
            </Text>
          </Frame>
        </Section>

        <Section
          title="14. Typography wrapping"
          note="Each type in a 28-wide frame and a fill frame with text longer than any screen. Types ending in -wrap may wrap; every other type stays on one line and ends in an ellipsis."
        >
          <Caption>timecode</Caption>
          <Frame alignment-top-left autolayout-horizontal gap-2 height-hug width-fill>
            <Frame fill-white autolayout-vertical padding-2 width-28>
              <Text fill-black typography-6xl>
                {LOREM}
              </Text>
            </Frame>
            <Frame fill-white autolayout-vertical padding-2 width-fill>
              <Text fill-black typography-6xl>
                {LOREM_LONG}
              </Text>
            </Frame>
          </Frame>
          <Caption>display-wrap</Caption>
          <Frame alignment-top-left autolayout-horizontal gap-2 height-hug width-fill>
            <Frame fill-white autolayout-vertical padding-2 width-28>
              <Text fill-black typography-2xl>
                {LOREM}
              </Text>
            </Frame>
            <Frame fill-white autolayout-vertical padding-2 width-fill>
              <Text fill-black typography-2xl>
                {LOREM_LONG}
              </Text>
            </Frame>
          </Frame>
          <Caption>header-wrap</Caption>
          <Frame alignment-top-left autolayout-horizontal gap-2 height-hug width-fill>
            <Frame fill-white autolayout-vertical padding-2 width-28>
              <Text fill-black typography-base>
                {LOREM}
              </Text>
            </Frame>
            <Frame fill-white autolayout-vertical padding-2 width-fill>
              <Text fill-black typography-base>
                {LOREM_LONG}
              </Text>
            </Frame>
          </Frame>
          <Caption>header-small-wrap</Caption>
          <Frame alignment-top-left autolayout-horizontal gap-2 height-hug width-fill>
            <Frame fill-white autolayout-vertical padding-2 width-28>
              <Text fill-black typography-sm>
                {LOREM}
              </Text>
            </Frame>
            <Frame fill-white autolayout-vertical padding-2 width-fill>
              <Text fill-black typography-sm>
                {LOREM_LONG}
              </Text>
            </Frame>
          </Frame>
          <Caption>body-wrap</Caption>
          <Frame alignment-top-left autolayout-horizontal gap-2 height-hug width-fill>
            <Frame fill-white autolayout-vertical padding-2 width-28>
              <Text fill-black typography-base>
                {LOREM}
              </Text>
            </Frame>
            <Frame fill-white autolayout-vertical padding-2 width-fill>
              <Text fill-black typography-base>
                {LOREM_LONG}
              </Text>
            </Frame>
          </Frame>
          <Caption>body-nowrap</Caption>
          <Frame alignment-top-left autolayout-horizontal gap-2 height-hug width-fill>
            <Frame fill-white autolayout-vertical padding-2 width-28>
              <Text fill-black typography-base>
                {LOREM}
              </Text>
            </Frame>
            <Frame fill-white autolayout-vertical padding-2 width-fill>
              <Text fill-black typography-base>
                {LOREM_LONG}
              </Text>
            </Frame>
          </Frame>
          <Caption>body-small-wrap</Caption>
          <Frame alignment-top-left autolayout-horizontal gap-2 height-hug width-fill>
            <Frame fill-white autolayout-vertical padding-2 width-28>
              <Text fill-black typography-sm>
                {LOREM}
              </Text>
            </Frame>
            <Frame fill-white autolayout-vertical padding-2 width-fill>
              <Text fill-black typography-sm>
                {LOREM_LONG}
              </Text>
            </Frame>
          </Frame>
          <Caption>body-small-nowrap</Caption>
          <Frame alignment-top-left autolayout-horizontal gap-2 height-hug width-fill>
            <Frame fill-white autolayout-vertical padding-2 width-28>
              <Text fill-black typography-sm>
                {LOREM}
              </Text>
            </Frame>
            <Frame fill-white autolayout-vertical padding-2 width-fill>
              <Text fill-black typography-sm>
                {LOREM_LONG}
              </Text>
            </Frame>
          </Frame>
          <Caption>mono-wrap</Caption>
          <Frame alignment-top-left autolayout-horizontal gap-2 height-hug width-fill>
            <Frame fill-white autolayout-vertical padding-2 width-28>
              <Text fill-black typography-base>
                {LOREM}
              </Text>
            </Frame>
            <Frame fill-white autolayout-vertical padding-2 width-fill>
              <Text fill-black typography-base>
                {LOREM_LONG}
              </Text>
            </Frame>
          </Frame>
          <Caption>mono-nowrap</Caption>
          <Frame alignment-top-left autolayout-horizontal gap-2 height-hug width-fill>
            <Frame fill-white autolayout-vertical padding-2 width-28>
              <Text fill-black typography-base>
                {LOREM}
              </Text>
            </Frame>
            <Frame fill-white autolayout-vertical padding-2 width-fill>
              <Text fill-black typography-base>
                {LOREM_LONG}
              </Text>
            </Frame>
          </Frame>
          <Caption>mono-small-wrap</Caption>
          <Frame alignment-top-left autolayout-horizontal gap-2 height-hug width-fill>
            <Frame fill-white autolayout-vertical padding-2 width-28>
              <Text fill-black typography-sm>
                {LOREM}
              </Text>
            </Frame>
            <Frame fill-white autolayout-vertical padding-2 width-fill>
              <Text fill-black typography-sm>
                {LOREM_LONG}
              </Text>
            </Frame>
          </Frame>
          <Caption>mono-small-nowrap</Caption>
          <Frame alignment-top-left autolayout-horizontal gap-2 height-hug width-fill>
            <Frame fill-white autolayout-vertical padding-2 width-28>
              <Text fill-black typography-sm>
                {LOREM}
              </Text>
            </Frame>
            <Frame fill-white autolayout-vertical padding-2 width-fill>
              <Text fill-black typography-sm>
                {LOREM_LONG}
              </Text>
            </Frame>
          </Frame>
          <Caption>label-wrap</Caption>
          <Frame alignment-top-left autolayout-horizontal gap-2 height-hug width-fill>
            <Frame fill-white autolayout-vertical padding-2 width-28>
              <Text fill-black typography-base>
                {LOREM}
              </Text>
            </Frame>
            <Frame fill-white autolayout-vertical padding-2 width-fill>
              <Text fill-black typography-base>
                {LOREM_LONG}
              </Text>
            </Frame>
          </Frame>
          <Caption>label-nowrap</Caption>
          <Frame alignment-top-left autolayout-horizontal gap-2 height-hug width-fill>
            <Frame fill-white autolayout-vertical padding-2 width-28>
              <Text fill-black typography-base>
                {LOREM}
              </Text>
            </Frame>
            <Frame fill-white autolayout-vertical padding-2 width-fill>
              <Text fill-black typography-base>
                {LOREM_LONG}
              </Text>
            </Frame>
          </Frame>
          <Caption>label-small-wrap</Caption>
          <Frame alignment-top-left autolayout-horizontal gap-2 height-hug width-fill>
            <Frame fill-white autolayout-vertical padding-2 width-28>
              <Text fill-black typography-sm>
                {LOREM}
              </Text>
            </Frame>
            <Frame fill-white autolayout-vertical padding-2 width-fill>
              <Text fill-black typography-sm>
                {LOREM_LONG}
              </Text>
            </Frame>
          </Frame>
          <Caption>label-small-nowrap</Caption>
          <Frame alignment-top-left autolayout-horizontal gap-2 height-hug width-fill>
            <Frame fill-white autolayout-vertical padding-2 width-28>
              <Text fill-black typography-sm>
                {LOREM}
              </Text>
            </Frame>
            <Frame fill-white autolayout-vertical padding-2 width-fill>
              <Text fill-black typography-sm>
                {LOREM_LONG}
              </Text>
            </Frame>
          </Frame>
        </Section>

        <Section
          title="15. Text alignment and wrapping"
          note="Long text in width-fill frames with each alignment, then wrap and nowrap in a 28-wide frame."
        >
          <Frame fill-white padding-3 width-fill>
            <Text fill-black typography-align-left typography-base>
              {LOREM}
            </Text>
          </Frame>
          <Frame fill-white padding-3 width-fill>
            <Text fill-black typography-align-center typography-base>
              {LOREM}
            </Text>
          </Frame>
          <Frame fill-white padding-3 width-fill>
            <Text fill-black typography-align-right typography-base>
              {LOREM}
            </Text>
          </Frame>
          <Frame alignment-top-left autolayout-horizontal gap-4 height-hug width-fill wrap>
            <Case label="width-28, body-small-wrap">
              <Frame fill-white padding-2 width-28>
                <Text fill-black typography-sm>
                  {LOREM}
                </Text>
              </Frame>
            </Case>
            <Case label="width-28, body-small-nowrap">
              <Frame fill-white padding-2 width-28>
                <Text fill-black typography-sm>
                  {LOREM}
                </Text>
              </Frame>
            </Case>
            <Case label="width-28, mono-small-wrap">
              <Frame fill-white padding-2 width-28>
                <Text fill-black typography-sm>
                  {LOREM}
                </Text>
              </Frame>
            </Case>
          </Frame>
          <Caption>two texts side by side, each in a fill frame</Caption>
          <Frame autolayout-horizontal gap-3 height-hug width-fill>
            <Frame fill-white padding-2 width-fill>
              <Text fill-black typography-sm>
                {LOREM}
              </Text>
            </Frame>
            <Frame fill-white padding-2 width-fill>
              <Text fill-black typography-sm>
                Short text.
              </Text>
            </Frame>
          </Frame>
        </Section>

        <Section title="16. Card" note="Text and frames nested into a card with a shadow, tag and buttons.">
          <Frame
            corner-radius-2xl
            effect-shadow-lg
            fill-white
            autolayout-vertical
            gap-3
            height-hug
            padding-4
            width-fill
          >
            <Frame alignment-left autolayout-horizontal gap-2 height-hug width-fill>
              <Frame autolayout-vertical height-hug width-fill>
                <Text fill-black typography-sm>
                  Quarterly review
                </Text>
                <Text fill-neutral-500 typography-sm>
                  Thursday, 14:00 to 15:30
                </Text>
              </Frame>
              <Frame corner-radius-full fill-green-100 padding-horizontal-2 padding-vertical-0p5>
                <Text fill-green-800 typography-sm>
                  Confirmed
                </Text>
              </Frame>
            </Frame>
            <Frame fill-neutral-200 height-px width-fill />
            <Text fill-black typography-base>
              {LOREM}
            </Text>
            <Frame alignment-right autolayout-horizontal gap-2 height-hug width-fill>
              <Frame alignment-center corner-radius-full height-10 padding-horizontal-4 stroke-neutral-300 width-hug>
                <Text fill-black typography-base>
                  Decline
                </Text>
              </Frame>
              <Frame alignment-center corner-radius-full fill-violet-600 height-10 padding-horizontal-4 width-hug>
                <Text fill-white typography-base>
                  Accept
                </Text>
              </Frame>
            </Frame>
          </Frame>
        </Section>

        <Section
          title="17. List rows"
          note="Avatar, two lines of text that truncate, and a trailing badge. The middle column fills."
        >
          <Frame corner-radius-xl fill-white autolayout-vertical height-hug width-fill>
            <Frame alignment-left autolayout-horizontal gap-3 height-hug padding-3 width-fill>
              <Frame alignment-center corner-radius-full fill-violet-200 height-10 width-10>
                <Text fill-violet-700 typography-base>
                  AL
                </Text>
              </Frame>
              <Frame autolayout-vertical height-hug width-fill>
                <Text fill-black typography-base>
                  Ada Lovelace
                </Text>
                <Text fill-neutral-500 typography-sm>
                  Short subtitle
                </Text>
              </Frame>
              <Frame corner-radius-full fill-violet-600 padding-horizontal-2>
                <Text fill-white typography-sm>
                  3
                </Text>
              </Frame>
            </Frame>
            <Frame fill-neutral-100 height-px width-fill />
            <Frame alignment-left autolayout-horizontal gap-3 height-hug padding-3 width-fill>
              <Frame alignment-center corner-radius-full fill-fuchsia-100 height-10 width-10>
                <Text fill-fuchsia-700 typography-base>
                  GH
                </Text>
              </Frame>
              <Frame autolayout-vertical height-hug width-fill>
                <Text fill-black typography-base>
                  Grace Hopper with a name long enough to truncate on a narrow phone screen
                </Text>
                <Text fill-neutral-500 typography-sm>
                  {LOREM}
                </Text>
              </Frame>
              <Frame corner-radius-full fill-fuchsia-400 padding-horizontal-2>
                <Text fill-white typography-sm>
                  128
                </Text>
              </Frame>
            </Frame>
            <Frame fill-neutral-100 height-px width-fill />
            <Frame alignment-left autolayout-horizontal gap-3 height-hug padding-3 width-fill>
              <Frame alignment-center corner-radius-full fill-sky-100 height-10 width-10>
                <Text fill-sky-600 typography-base>
                  KJ
                </Text>
              </Frame>
              <Frame autolayout-vertical height-hug width-fill>
                <Text fill-black typography-base>
                  Katherine Johnson
                </Text>
                <Text fill-neutral-500 typography-sm>
                  This subtitle wraps instead of truncating, so the row grows taller and the avatar and badge stay
                  centered.
                </Text>
              </Frame>
              <Frame corner-radius-full fill-neutral-200 height-6 width-6 />
            </Frame>
          </Frame>
        </Section>

        <Section
          title="18. Rows of columns, columns of rows"
          note="An app shell: header, a sidebar beside a 2 x 2 grid of fill cards, and a footer."
        >
          <Frame corner-radius-xl fill-white autolayout-vertical height-hug stroke-neutral-200 width-fill>
            <Frame
              alignment-left
              corner-radius-top-left-xl
              corner-radius-top-right-xl
              fill-neutral-900
              autolayout-horizontal
              gap-2
              height-12
              padding-horizontal-3
              width-fill
            >
              <Frame corner-radius-sm fill-violet-400 height-6 width-6 />
              <Frame autolayout-vertical width-fill>
                <Text fill-white typography-base>
                  Header
                </Text>
              </Frame>
              <Frame corner-radius-full fill-neutral-400 height-6 width-6 />
            </Frame>
            <Frame autolayout-horizontal height-hug width-fill>
              <Frame fill-neutral-100 autolayout-vertical gap-1 height-fill padding-2 width-24>
                <Frame corner-radius-sm fill-violet-50 padding-2 width-fill>
                  <Text fill-violet-700 typography-sm>
                    Inbox
                  </Text>
                </Frame>
                <Frame padding-2 width-fill>
                  <Text fill-black typography-sm>
                    Drafts
                  </Text>
                </Frame>
                <Frame padding-2 width-fill>
                  <Text fill-black typography-sm>
                    Archive
                  </Text>
                </Frame>
              </Frame>
              <Frame autolayout-vertical gap-2 height-hug padding-2 width-fill>
                <Frame autolayout-horizontal gap-2 height-hug width-fill>
                  <Frame corner-radius-lg fill-violet-50 autolayout-vertical gap-1 height-hug padding-2 width-fill>
                    <Text fill-black typography-base>
                      One
                    </Text>
                    <Text fill-neutral-500 typography-sm>
                      A short card.
                    </Text>
                  </Frame>
                  <Frame corner-radius-lg fill-fuchsia-50 autolayout-vertical gap-1 height-fill padding-2 width-fill>
                    <Text fill-black typography-base>
                      Two
                    </Text>
                    <Text fill-neutral-500 typography-sm>
                      Fills the row height.
                    </Text>
                  </Frame>
                </Frame>
                <Frame autolayout-horizontal gap-2 height-hug width-fill>
                  <Frame corner-radius-lg fill-sky-50 autolayout-vertical gap-1 height-hug padding-2 width-fill>
                    <Text fill-black typography-base>
                      Three
                    </Text>
                    <Text fill-neutral-500 typography-sm>
                      {LOREM}
                    </Text>
                  </Frame>
                  <Frame corner-radius-lg fill-green-100 autolayout-vertical gap-1 height-hug padding-2 width-fill>
                    <Text fill-black typography-base>
                      Four
                    </Text>
                    <Text fill-neutral-500 typography-sm>
                      Hugs its text.
                    </Text>
                  </Frame>
                </Frame>
              </Frame>
            </Frame>
            <Frame alignment-center fill-neutral-200 height-8 width-fill>
              <Text fill-neutral-500 typography-sm>
                Footer
              </Text>
            </Frame>
          </Frame>
        </Section>

        <Section
          title="19. Deep nesting"
          note="Ten hug frames, each padding-2, from primary-50 to the innermost text. Then six width-fill levels that should all span the section."
        >
          <Frame fill-violet-50 padding-2>
            <Frame fill-violet-50 padding-2>
              <Frame fill-violet-200 padding-2>
                <Frame fill-violet-300 padding-2>
                  <Frame fill-violet-300 padding-2>
                    <Frame fill-violet-400 padding-2>
                      <Frame fill-violet-500 padding-2>
                        <Frame fill-violet-600 padding-2>
                          <Frame fill-violet-700 padding-2>
                            <Frame fill-violet-800 padding-2>
                              <Text fill-white typography-sm>
                                level 10
                              </Text>
                            </Frame>
                          </Frame>
                        </Frame>
                      </Frame>
                    </Frame>
                  </Frame>
                </Frame>
              </Frame>
            </Frame>
          </Frame>
          <Frame fill-fuchsia-50 padding-2 width-fill>
            <Frame fill-fuchsia-50 padding-2 width-fill>
              <Frame fill-fuchsia-100 padding-2 width-fill>
                <Frame fill-fuchsia-200 padding-2 width-fill>
                  <Frame fill-fuchsia-300 padding-2 width-fill>
                    <Frame alignment-left fill-fuchsia-400 autolayout-horizontal gap-2 padding-2 width-fill>
                      <Frame autolayout-vertical width-fill>
                        <Text fill-white typography-sm>
                          level 6, fill
                        </Text>
                      </Frame>
                      <Frame corner-radius-full fill-white height-4 width-4 />
                    </Frame>
                  </Frame>
                </Frame>
              </Frame>
            </Frame>
          </Frame>
        </Section>

        <Section title="20. Frames without text" note="A bar chart and a checkerboard built only from frames.">
          <Frame alignment-bottom-left fill-white autolayout-horizontal gap-1 height-28 padding-2 width-fill>
            <Frame corner-radius-top-left-sm corner-radius-top-right-sm fill-sky-200 height-4 width-fill />
            <Frame corner-radius-top-left-sm corner-radius-top-right-sm fill-sky-200 height-8 width-fill />
            <Frame corner-radius-top-left-sm corner-radius-top-right-sm fill-sky-300 height-12 width-fill />
            <Frame corner-radius-top-left-sm corner-radius-top-right-sm fill-sky-400 height-20 width-fill />
            <Frame corner-radius-top-left-sm corner-radius-top-right-sm fill-sky-500 height-24 width-fill />
            <Frame corner-radius-top-left-sm corner-radius-top-right-sm fill-sky-300 height-16 width-fill />
            <Frame corner-radius-top-left-sm corner-radius-top-right-sm fill-sky-200 height-10 width-fill />
            <Frame corner-radius-top-left-sm corner-radius-top-right-sm fill-sky-200 height-6 width-fill />
          </Frame>
          <Frame autolayout-vertical height-hug width-hug>
            <Frame autolayout-horizontal>
              <Frame fill-neutral-900 height-6 width-6 />
              <Frame fill-white height-6 width-6 />
              <Frame fill-neutral-900 height-6 width-6 />
              <Frame fill-white height-6 width-6 />
            </Frame>
            <Frame autolayout-horizontal>
              <Frame fill-white height-6 width-6 />
              <Frame fill-neutral-900 height-6 width-6 />
              <Frame fill-white height-6 width-6 />
              <Frame fill-neutral-900 height-6 width-6 />
            </Frame>
            <Frame autolayout-horizontal>
              <Frame fill-neutral-900 height-6 width-6 />
              <Frame fill-white height-6 width-6 />
              <Frame fill-neutral-900 height-6 width-6 />
              <Frame fill-white height-6 width-6 />
            </Frame>
            <Frame autolayout-horizontal>
              <Frame fill-white height-6 width-6 />
              <Frame fill-neutral-900 height-6 width-6 />
              <Frame fill-white height-6 width-6 />
              <Frame fill-neutral-900 height-6 width-6 />
            </Frame>
          </Frame>
        </Section>

        <Section
          title="21. Wrapping card grid"
          note="Fixed 28-wide cards that wrap onto new rows as the width shrinks."
        >
          <Frame alignment-top-left autolayout-horizontal gap-3 height-hug width-fill wrap>
            <Frame corner-radius-xl effect-shadow-sm fill-white autolayout-vertical gap-2 height-hug padding-3 width-28>
              <Frame corner-radius-lg fill-violet-300 height-12 width-fill />
              <Text fill-black typography-base>
                Alpha
              </Text>
              <Text fill-neutral-500 typography-sm>
                One line.
              </Text>
            </Frame>
            <Frame corner-radius-xl effect-shadow-sm fill-white autolayout-vertical gap-2 height-hug padding-3 width-28>
              <Frame corner-radius-lg fill-fuchsia-200 height-12 width-fill />
              <Text fill-black typography-base>
                Beta
              </Text>
              <Text fill-neutral-500 typography-sm>
                A couple of lines of text in this card.
              </Text>
            </Frame>
            <Frame corner-radius-xl effect-shadow-sm fill-white autolayout-vertical gap-2 height-hug padding-3 width-28>
              <Frame corner-radius-lg fill-sky-200 height-12 width-fill />
              <Text fill-black typography-base>
                Gamma
              </Text>
              <Text fill-neutral-500 typography-sm>
                Short.
              </Text>
            </Frame>
            <Frame corner-radius-xl effect-shadow-sm fill-white autolayout-vertical gap-2 height-hug padding-3 width-28>
              <Frame corner-radius-lg fill-green-300 height-12 width-fill />
              <Text fill-black typography-base>
                Delta
              </Text>
              <Text fill-neutral-500 typography-sm>
                {LOREM}
              </Text>
            </Frame>
            <Frame corner-radius-xl effect-shadow-sm fill-white autolayout-vertical gap-2 height-hug padding-3 width-28>
              <Frame corner-radius-lg fill-red-300 height-12 width-fill />
              <Text fill-black typography-base>
                Epsilon
              </Text>
              <Text fill-neutral-500 typography-sm>
                Last card.
              </Text>
            </Frame>
          </Frame>
        </Section>
        <Section title="22. Vector" note="A 20 x 20 icon path scaled into width- and height- boxes of 5 and 10.">
          <Frame alignment-bottom-left autolayout-horizontal gap-4 height-hug width-fill wrap>
            <Case label="5 x 5">
              <Vector fill-neutral-800 height-5 path={MORE_PATH} viewBox="-3.94 -8.75 20 20" width-5 />
            </Case>
            <Case label="10 x 10">
              <Vector fill-neutral-800 height-10 path={MORE_PATH} viewBox="-3.94 -8.75 20 20" width-10 />
            </Case>
          </Frame>
        </Section>
      </Frame>
    </ScrollView>
  )
}
