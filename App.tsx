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
    <Frame flow-vertical gap-2 height-hug width-fill>
      <Text fill-text-800 typography-header-small-wrap>
        {p.title}
      </Text>
      <Text fill-neutral-600 typography-body-small-wrap>
        {p.note}
      </Text>
      <Frame corner-radius-3 fill-neutralsurface-100 flow-vertical gap-4 height-hug padding-4 width-fill>
        {p.children}
      </Frame>
    </Frame>
  )
}

const Case = (p: { label: string; children?: ReactNode }) => {
  return (
    <Frame flow-vertical gap-1 height-hug width-hug>
      {p.children}
      <Text fill-neutral-600 typography-label-small-nowrap>
        {p.label}
      </Text>
    </Frame>
  )
}

const Caption = (p: { children?: ReactNode }) => {
  return (
    <Text fill-neutral-600 typography-label-small-nowrap>
      {p.children}
    </Text>
  )
}

export default () => {
  return (
    <ScrollView>
      <StatusBar style="auto" />
      <Frame fill-white flow-vertical gap-10 height-hug padding-horizontal-4 padding-vertical-16 width-fill>
        <Text fill-text-800 typography-display-wrap>
          Frame and Text test suite
        </Text>

        <Section
          title="1. Empty frames"
          note="Fixed sizes and padding keep empty frames visible. The red hug frame has no children and should collapse to nothing."
        >
          <Frame alignment-bottom-left flow-horizontal gap-4 height-hug width-fill wrap>
            <Case label="12 x 12">
              <Frame fill-primary-500 height-12 width-12 />
            </Case>
            <Case label="round">
              <Frame corner-radius-full fill-secondary-500 height-12 width-12 />
            </Case>
            <Case label="padding-4">
              <Frame fill-tertiary-500 padding-4 />
            </Case>
            <Case label="hug, empty">
              <Frame fill-negative-500 height-hug width-hug />
            </Case>
            <Case label="dashed">
              <Frame height-12 stroke-neutral-600 stroke-style-dashed width-12 />
            </Case>
            <Case label="1px line">
              <Frame fill-neutral-700 height-1px width-12 />
            </Case>
          </Frame>
          <Caption>width-fill, height-4</Caption>
          <Frame fill-positive-400 height-4 width-fill />
        </Section>

        <Section title="2. Fixed sizes" note="Squares from width-1 to width-28, bottom aligned in a wrapping row.">
          <Frame alignment-bottom-left flow-horizontal gap-2 height-hug width-fill wrap>
            <Case label="1">
              <Frame fill-primary-700 height-1 width-1 />
            </Case>
            <Case label="2">
              <Frame fill-primary-700 height-2 width-2 />
            </Case>
            <Case label="4">
              <Frame fill-primary-700 height-4 width-4 />
            </Case>
            <Case label="6">
              <Frame fill-primary-700 height-6 width-6 />
            </Case>
            <Case label="8">
              <Frame fill-primary-700 height-8 width-8 />
            </Case>
            <Case label="10">
              <Frame fill-primary-700 height-10 width-10 />
            </Case>
            <Case label="12">
              <Frame fill-primary-700 height-12 width-12 />
            </Case>
            <Case label="16">
              <Frame fill-primary-700 height-16 width-16 />
            </Case>
            <Case label="20">
              <Frame fill-primary-700 height-20 width-20 />
            </Case>
            <Case label="24">
              <Frame fill-primary-700 height-24 width-24 />
            </Case>
            <Case label="28">
              <Frame fill-primary-700 height-28 width-28 />
            </Case>
            <Case label="28 x 4">
              <Frame fill-secondary-700 height-4 width-28 />
            </Case>
            <Case label="4 x 28">
              <Frame fill-secondary-700 height-28 width-4 />
            </Case>
          </Frame>
        </Section>

        <Section
          title="3. Rows: fixed, hug and fill"
          note="Fill children share the space left over by fixed and hug siblings. Fixed frames never shrink."
        >
          <Caption>fixed 16 | fill | fixed 16</Caption>
          <Frame flow-horizontal gap-2 height-hug width-fill>
            <Frame fill-primary-700 height-12 width-16 />
            <Frame fill-primary-300 height-12 width-fill />
            <Frame fill-primary-700 height-12 width-16 />
          </Frame>
          <Caption>fill | fill | fill (equal widths)</Caption>
          <Frame flow-horizontal gap-2 height-hug width-fill>
            <Frame fill-secondary-300 height-12 width-fill />
            <Frame fill-secondary-500 height-12 width-fill />
            <Frame fill-secondary-700 height-12 width-fill />
          </Frame>
          <Caption>hug text | fill | hug text</Caption>
          <Frame flow-horizontal gap-2 height-hug width-fill>
            <Frame fill-tertiary-200 height-hug padding-2 width-hug>
              <Text fill-text-800 typography-body-small-nowrap>
                Hug left
              </Text>
            </Frame>
            <Frame fill-tertiary-500 height-fill width-fill />
            <Frame fill-tertiary-200 height-hug padding-2 width-hug>
              <Text fill-text-800 typography-body-small-nowrap>
                Hug right
              </Text>
            </Frame>
          </Frame>
          <Caption>fixed 12 | fill with long nowrap text (truncates) | fixed 12</Caption>
          <Frame alignment-left flow-horizontal gap-2 height-hug width-fill>
            <Frame fill-positive-500 height-12 width-12 />
            <Frame flow-vertical height-hug width-fill>
              <Text fill-text-800 typography-body-nowrap>
                {LOREM}
              </Text>
            </Frame>
            <Frame fill-positive-500 height-12 width-12 />
          </Frame>
          <Caption>width-full child</Caption>
          <Frame flow-horizontal height-hug width-fill>
            <Frame fill-tentative-brand height-6 width-full />
          </Frame>
        </Section>

        <Section
          title="4. Columns: fixed, hug and fill"
          note="Three 28-high columns side by side. Fill children split the height left by fixed siblings."
        >
          <Frame flow-horizontal gap-4 height-28 width-fill>
            <Frame flow-vertical gap-1 height-fill width-fill>
              <Frame fill-primary-700 height-6 width-fill />
              <Frame fill-primary-300 height-fill width-fill />
              <Frame fill-primary-700 height-6 width-fill />
            </Frame>
            <Frame flow-vertical gap-1 height-fill width-fill>
              <Frame fill-secondary-300 height-fill width-fill />
              <Frame fill-secondary-500 height-fill width-fill />
              <Frame fill-secondary-700 height-fill width-fill />
            </Frame>
            <Frame fill-tertiary-100 flow-vertical gap-1 height-fill width-fill>
              <Frame fill-tertiary-500 height-hug padding-1 width-hug>
                <Text fill-white typography-label-small-nowrap>
                  hug
                </Text>
              </Frame>
              <Frame fill-tertiary-700 height-hug padding-1 width-fill>
                <Text fill-white typography-label-small-nowrap>
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
          <Frame fill-neutralsurface-300 flow-horizontal gap-2 height-20 padding-2 width-fill>
            <Frame fill-primary-700 height-12 width-12 />
            <Frame alignment-center fill-primary-300 flow-vertical height-fill width-fill>
              <Text fill-text-800 typography-label-small-nowrap>
                fill both
              </Text>
            </Frame>
            <Frame fill-primary-700 height-12 width-12 />
          </Frame>
          <Caption>column, height-28: fixed 6 | fill both | fill both</Caption>
          <Frame fill-neutralsurface-300 flow-vertical gap-2 height-28 padding-2 width-fill>
            <Frame fill-secondary-700 height-6 width-6 />
            <Frame fill-secondary-300 height-fill width-fill />
            <Frame fill-secondary-500 height-fill width-fill />
          </Frame>
        </Section>

        <Section title="6. Padding" note="An 8 x 8 dark box inside a light frame with each padding flag.">
          <Frame alignment-top-left flow-horizontal gap-4 height-hug width-fill wrap>
            <Case label="padding-0">
              <Frame fill-primary-200 padding-0>
                <Frame fill-primary-700 height-8 width-8 />
              </Frame>
            </Case>
            <Case label="padding-1px">
              <Frame fill-primary-200 padding-1px>
                <Frame fill-primary-700 height-8 width-8 />
              </Frame>
            </Case>
            <Case label="padding-2">
              <Frame fill-primary-200 padding-2>
                <Frame fill-primary-700 height-8 width-8 />
              </Frame>
            </Case>
            <Case label="padding-4">
              <Frame fill-primary-200 padding-4>
                <Frame fill-primary-700 height-8 width-8 />
              </Frame>
            </Case>
            <Case label="padding-8">
              <Frame fill-primary-200 padding-8>
                <Frame fill-primary-700 height-8 width-8 />
              </Frame>
            </Case>
            <Case label="vertical-4">
              <Frame fill-primary-200 padding-vertical-4>
                <Frame fill-primary-700 height-8 width-8 />
              </Frame>
            </Case>
            <Case label="horizontal-4">
              <Frame fill-primary-200 padding-horizontal-4>
                <Frame fill-primary-700 height-8 width-8 />
              </Frame>
            </Case>
            <Case label="left-6">
              <Frame fill-primary-200 padding-left-6>
                <Frame fill-primary-700 height-8 width-8 />
              </Frame>
            </Case>
            <Case label="right-6">
              <Frame fill-primary-200 padding-right-6>
                <Frame fill-primary-700 height-8 width-8 />
              </Frame>
            </Case>
            <Case label="top-6">
              <Frame fill-primary-200 padding-top-6>
                <Frame fill-primary-700 height-8 width-8 />
              </Frame>
            </Case>
            <Case label="bottom-6">
              <Frame fill-primary-200 padding-bottom-6>
                <Frame fill-primary-700 height-8 width-8 />
              </Frame>
            </Case>
            <Case label="top-2 left-8">
              <Frame fill-primary-200 padding-left-8 padding-top-2>
                <Frame fill-primary-700 height-8 width-8 />
              </Frame>
            </Case>
          </Frame>
          <Caption>padding-4 on a width-fill frame with text</Caption>
          <Frame fill-primary-200 padding-4 width-fill>
            <Text fill-text-800 typography-body-wrap>
              {LOREM}
            </Text>
          </Frame>
        </Section>

        <Section title="7. Gaps" note="Three 6 x 6 boxes per row, then a column, with each gap flag.">
          <Frame alignment-top-left flow-horizontal gap-6 height-hug width-fill wrap>
            <Case label="gap-0">
              <Frame flow-horizontal gap-0>
                <Frame fill-secondary-700 height-6 width-6 />
                <Frame fill-secondary-500 height-6 width-6 />
                <Frame fill-secondary-300 height-6 width-6 />
              </Frame>
            </Case>
            <Case label="gap-1px">
              <Frame flow-horizontal gap-1px>
                <Frame fill-secondary-700 height-6 width-6 />
                <Frame fill-secondary-500 height-6 width-6 />
                <Frame fill-secondary-300 height-6 width-6 />
              </Frame>
            </Case>
            <Case label="gap-0p5">
              <Frame flow-horizontal gap-0p5>
                <Frame fill-secondary-700 height-6 width-6 />
                <Frame fill-secondary-500 height-6 width-6 />
                <Frame fill-secondary-300 height-6 width-6 />
              </Frame>
            </Case>
            <Case label="gap-1">
              <Frame flow-horizontal gap-1>
                <Frame fill-secondary-700 height-6 width-6 />
                <Frame fill-secondary-500 height-6 width-6 />
                <Frame fill-secondary-300 height-6 width-6 />
              </Frame>
            </Case>
            <Case label="gap-2">
              <Frame flow-horizontal gap-2>
                <Frame fill-secondary-700 height-6 width-6 />
                <Frame fill-secondary-500 height-6 width-6 />
                <Frame fill-secondary-300 height-6 width-6 />
              </Frame>
            </Case>
            <Case label="gap-4">
              <Frame flow-horizontal gap-4>
                <Frame fill-secondary-700 height-6 width-6 />
                <Frame fill-secondary-500 height-6 width-6 />
                <Frame fill-secondary-300 height-6 width-6 />
              </Frame>
            </Case>
            <Case label="gap-8">
              <Frame flow-horizontal gap-8>
                <Frame fill-secondary-700 height-6 width-6 />
                <Frame fill-secondary-500 height-6 width-6 />
                <Frame fill-secondary-300 height-6 width-6 />
              </Frame>
            </Case>
            <Case label="column gap-3">
              <Frame flow-vertical gap-3>
                <Frame fill-secondary-700 height-6 width-6 />
                <Frame fill-secondary-500 height-6 width-6 />
                <Frame fill-secondary-300 height-6 width-6 />
              </Frame>
            </Case>
          </Frame>
        </Section>

        <Section title="8. Corner radius" note="16 x 16 squares with each corner flag.">
          <Frame alignment-top-left flow-horizontal gap-4 height-hug width-fill wrap>
            <Case label="0">
              <Frame corner-radius-0 fill-tertiary-500 height-16 width-16 />
            </Case>
            <Case label="1">
              <Frame corner-radius-1 fill-tertiary-500 height-16 width-16 />
            </Case>
            <Case label="2">
              <Frame corner-radius-2 fill-tertiary-500 height-16 width-16 />
            </Case>
            <Case label="4">
              <Frame corner-radius-4 fill-tertiary-500 height-16 width-16 />
            </Case>
            <Case label="8">
              <Frame corner-radius-8 fill-tertiary-500 height-16 width-16 />
            </Case>
            <Case label="full">
              <Frame corner-radius-full fill-tertiary-500 height-16 width-16 />
            </Case>
            <Case label="huge">
              <Frame corner-radius-huge fill-tertiary-500 height-16 width-16 />
            </Case>
            <Case label="top-left-6">
              <Frame corner-radius-top-left-6 fill-tertiary-500 height-16 width-16 />
            </Case>
            <Case label="top-right-6">
              <Frame corner-radius-top-right-6 fill-tertiary-500 height-16 width-16 />
            </Case>
            <Case label="bottom-left-6">
              <Frame corner-radius-bottom-left-6 fill-tertiary-500 height-16 width-16 />
            </Case>
            <Case label="bottom-right-6">
              <Frame corner-radius-bottom-right-6 fill-tertiary-500 height-16 width-16 />
            </Case>
            <Case label="leaf">
              <Frame corner-radius-bottom-right-full corner-radius-top-left-full fill-tertiary-500 height-16 width-16 />
            </Case>
            <Case label="border-radius-4">
              <Frame border-radius-4 fill-tertiary-500 height-16 width-16 />
            </Case>
            <Case label="pill 28 x 8">
              <Frame corner-radius-full fill-tertiary-500 height-8 width-28 />
            </Case>
          </Frame>
        </Section>

        <Section title="9. Fills and strokes" note="Each palette at 300, 500, 700 and brand, then strokes on white.">
          <Frame flow-vertical gap-1 height-hug width-fill>
            <Frame flow-horizontal gap-1 height-hug width-fill>
              <Frame fill-primary-300 height-8 width-fill />
              <Frame fill-primary-500 height-8 width-fill />
              <Frame fill-primary-700 height-8 width-fill />
              <Frame fill-primary-brand height-8 width-fill />
            </Frame>
            <Frame flow-horizontal gap-1 height-hug width-fill>
              <Frame fill-secondary-300 height-8 width-fill />
              <Frame fill-secondary-500 height-8 width-fill />
              <Frame fill-secondary-700 height-8 width-fill />
              <Frame fill-secondary-brand height-8 width-fill />
            </Frame>
            <Frame flow-horizontal gap-1 height-hug width-fill>
              <Frame fill-tertiary-300 height-8 width-fill />
              <Frame fill-tertiary-500 height-8 width-fill />
              <Frame fill-tertiary-700 height-8 width-fill />
              <Frame fill-tertiary-brand height-8 width-fill />
            </Frame>
            <Frame flow-horizontal gap-1 height-hug width-fill>
              <Frame fill-tentative-300 height-8 width-fill />
              <Frame fill-tentative-500 height-8 width-fill />
              <Frame fill-tentative-700 height-8 width-fill />
              <Frame fill-tentative-brand height-8 width-fill />
            </Frame>
            <Frame flow-horizontal gap-1 height-hug width-fill>
              <Frame fill-positive-300 height-8 width-fill />
              <Frame fill-positive-500 height-8 width-fill />
              <Frame fill-positive-700 height-8 width-fill />
              <Frame fill-positive-brand height-8 width-fill />
            </Frame>
            <Frame flow-horizontal gap-1 height-hug width-fill>
              <Frame fill-negative-300 height-8 width-fill />
              <Frame fill-negative-500 height-8 width-fill />
              <Frame fill-negative-700 height-8 width-fill />
              <Frame fill-negative-brand height-8 width-fill />
            </Frame>
            <Frame flow-horizontal gap-1 height-hug width-fill>
              <Frame fill-neutral-300 height-8 width-fill />
              <Frame fill-neutral-500 height-8 width-fill />
              <Frame fill-neutral-700 height-8 width-fill />
              <Frame fill-black height-8 width-fill />
            </Frame>
          </Frame>
          <Frame alignment-top-left flow-horizontal gap-4 height-hug width-fill wrap>
            <Case label="stroke solid">
              <Frame fill-white height-16 stroke-neutral-600 stroke-style-solid width-16 />
            </Case>
            <Case label="stroke dashed">
              <Frame fill-white height-16 stroke-neutral-600 stroke-style-dashed width-16 />
            </Case>
            <Case label="stroke + round">
              <Frame corner-radius-4 fill-white height-16 stroke-primary-700 width-16 />
            </Case>
            <Case label="stroke + full">
              <Frame corner-radius-full fill-white height-16 stroke-secondary-700 width-16 />
            </Case>
            <Case label="transparent">
              <Frame fill-transparent height-16 stroke-tertiary-700 width-16 />
            </Case>
            <Case label="hover (web)">
              <Frame fill-hover-primary-500 fill-primary-200 height-16 width-16 />
            </Case>
          </Frame>
        </Section>

        <Section title="10. Shadows" note="Shadows on white and tinted frames.">
          <Frame alignment-top-left fill-white flow-horizontal gap-6 height-hug padding-4 width-fill wrap>
            <Case label="white none">
              <Frame corner-radius-2 effect-shadow-none fill-white height-16 width-16 />
            </Case>
            <Case label="white small">
              <Frame corner-radius-2 effect-shadow-small fill-white height-16 width-16 />
            </Case>
            <Case label="white large">
              <Frame corner-radius-2 effect-shadow-large fill-white height-16 width-16 />
            </Case>
            <Case label="primary small">
              <Frame corner-radius-2 effect-shadow-small fill-primary-500 height-16 width-16 />
            </Case>
            <Case label="primary large">
              <Frame corner-radius-2 effect-shadow-large fill-primary-500 height-16 width-16 />
            </Case>
          </Frame>
        </Section>

        <Section
          title="11. Alignment"
          note="20 x 20 frames with each alignment flag. Horizontal flow holds two boxes side by side, vertical flow stacks them."
        >
          <Caption>flow-horizontal</Caption>
          <Frame alignment-top-left flow-horizontal gap-4 height-hug width-fill wrap>
            <Case label="top-left">
              <Frame alignment-top-left fill-neutralsurface-300 flow-horizontal gap-1 height-20 width-20>
                <Frame fill-primary-700 height-4 width-4 />
                <Frame fill-primary-400 height-6 width-4 />
              </Frame>
            </Case>
            <Case label="top-center">
              <Frame alignment-top-center fill-neutralsurface-300 flow-horizontal gap-1 height-20 width-20>
                <Frame fill-primary-700 height-4 width-4 />
                <Frame fill-primary-400 height-6 width-4 />
              </Frame>
            </Case>
            <Case label="top-right">
              <Frame alignment-top-right fill-neutralsurface-300 flow-horizontal gap-1 height-20 width-20>
                <Frame fill-primary-700 height-4 width-4 />
                <Frame fill-primary-400 height-6 width-4 />
              </Frame>
            </Case>
            <Case label="left">
              <Frame alignment-left fill-neutralsurface-300 flow-horizontal gap-1 height-20 width-20>
                <Frame fill-primary-700 height-4 width-4 />
                <Frame fill-primary-400 height-6 width-4 />
              </Frame>
            </Case>
            <Case label="center">
              <Frame alignment-center fill-neutralsurface-300 flow-horizontal gap-1 height-20 width-20>
                <Frame fill-primary-700 height-4 width-4 />
                <Frame fill-primary-400 height-6 width-4 />
              </Frame>
            </Case>
            <Case label="right">
              <Frame alignment-right fill-neutralsurface-300 flow-horizontal gap-1 height-20 width-20>
                <Frame fill-primary-700 height-4 width-4 />
                <Frame fill-primary-400 height-6 width-4 />
              </Frame>
            </Case>
            <Case label="bottom-left">
              <Frame alignment-bottom-left fill-neutralsurface-300 flow-horizontal gap-1 height-20 width-20>
                <Frame fill-primary-700 height-4 width-4 />
                <Frame fill-primary-400 height-6 width-4 />
              </Frame>
            </Case>
            <Case label="bottom-center">
              <Frame alignment-bottom-center fill-neutralsurface-300 flow-horizontal gap-1 height-20 width-20>
                <Frame fill-primary-700 height-4 width-4 />
                <Frame fill-primary-400 height-6 width-4 />
              </Frame>
            </Case>
            <Case label="bottom-right">
              <Frame alignment-bottom-right fill-neutralsurface-300 flow-horizontal gap-1 height-20 width-20>
                <Frame fill-primary-700 height-4 width-4 />
                <Frame fill-primary-400 height-6 width-4 />
              </Frame>
            </Case>
          </Frame>
          <Caption>flow-vertical</Caption>
          <Frame alignment-top-left flow-horizontal gap-4 height-hug width-fill wrap>
            <Case label="top-left">
              <Frame alignment-top-left fill-neutralsurface-300 flow-vertical gap-1 height-20 width-20>
                <Frame fill-secondary-700 height-4 width-4 />
                <Frame fill-secondary-400 height-4 width-6 />
              </Frame>
            </Case>
            <Case label="top-center">
              <Frame alignment-top-center fill-neutralsurface-300 flow-vertical gap-1 height-20 width-20>
                <Frame fill-secondary-700 height-4 width-4 />
                <Frame fill-secondary-400 height-4 width-6 />
              </Frame>
            </Case>
            <Case label="top-right">
              <Frame alignment-top-right fill-neutralsurface-300 flow-vertical gap-1 height-20 width-20>
                <Frame fill-secondary-700 height-4 width-4 />
                <Frame fill-secondary-400 height-4 width-6 />
              </Frame>
            </Case>
            <Case label="left">
              <Frame alignment-left fill-neutralsurface-300 flow-vertical gap-1 height-20 width-20>
                <Frame fill-secondary-700 height-4 width-4 />
                <Frame fill-secondary-400 height-4 width-6 />
              </Frame>
            </Case>
            <Case label="center">
              <Frame alignment-center fill-neutralsurface-300 flow-vertical gap-1 height-20 width-20>
                <Frame fill-secondary-700 height-4 width-4 />
                <Frame fill-secondary-400 height-4 width-6 />
              </Frame>
            </Case>
            <Case label="right">
              <Frame alignment-right fill-neutralsurface-300 flow-vertical gap-1 height-20 width-20>
                <Frame fill-secondary-700 height-4 width-4 />
                <Frame fill-secondary-400 height-4 width-6 />
              </Frame>
            </Case>
            <Case label="bottom-left">
              <Frame alignment-bottom-left fill-neutralsurface-300 flow-vertical gap-1 height-20 width-20>
                <Frame fill-secondary-700 height-4 width-4 />
                <Frame fill-secondary-400 height-4 width-6 />
              </Frame>
            </Case>
            <Case label="bottom-center">
              <Frame alignment-bottom-center fill-neutralsurface-300 flow-vertical gap-1 height-20 width-20>
                <Frame fill-secondary-700 height-4 width-4 />
                <Frame fill-secondary-400 height-4 width-6 />
              </Frame>
            </Case>
            <Case label="bottom-right">
              <Frame alignment-bottom-right fill-neutralsurface-300 flow-vertical gap-1 height-20 width-20>
                <Frame fill-secondary-700 height-4 width-4 />
                <Frame fill-secondary-400 height-4 width-6 />
              </Frame>
            </Case>
          </Frame>
        </Section>

        <Section
          title="12. Wrapping"
          note="Pills in a wrapping row, then the same boxes in a 28-wide frame with and without wrap."
        >
          <Frame flow-horizontal gap-2 height-hug width-fill wrap>
            <Frame corner-radius-full fill-primary-100 padding-horizontal-3 padding-vertical-1>
              <Text fill-primary-800 typography-label-small-nowrap>
                Design
              </Text>
            </Frame>
            <Frame corner-radius-full fill-secondary-100 padding-horizontal-3 padding-vertical-1>
              <Text fill-secondary-800 typography-label-small-nowrap>
                Engineering
              </Text>
            </Frame>
            <Frame corner-radius-full fill-tertiary-100 padding-horizontal-3 padding-vertical-1>
              <Text fill-tertiary-800 typography-label-small-nowrap>
                Research
              </Text>
            </Frame>
            <Frame corner-radius-full fill-positive-100 padding-horizontal-3 padding-vertical-1>
              <Text fill-positive-800 typography-label-small-nowrap>
                Shipped
              </Text>
            </Frame>
            <Frame corner-radius-full fill-negative-100 padding-horizontal-3 padding-vertical-1>
              <Text fill-negative-800 typography-label-small-nowrap>
                Blocked
              </Text>
            </Frame>
            <Frame corner-radius-full fill-tentative-100 padding-horizontal-3 padding-vertical-1>
              <Text fill-tentative-800 typography-label-small-nowrap>
                In review
              </Text>
            </Frame>
            <Frame corner-radius-full fill-neutral-200 padding-horizontal-3 padding-vertical-1>
              <Text fill-neutral-800 typography-label-small-nowrap>
                Backlog
              </Text>
            </Frame>
            <Frame corner-radius-full fill-primary-100 padding-horizontal-3 padding-vertical-1>
              <Text fill-primary-800 typography-label-small-nowrap>
                A much longer pill label
              </Text>
            </Frame>
            <Frame corner-radius-full fill-secondary-100 padding-horizontal-3 padding-vertical-1>
              <Text fill-secondary-800 typography-label-small-nowrap>
                Mobile
              </Text>
            </Frame>
            <Frame corner-radius-full fill-tertiary-100 padding-horizontal-3 padding-vertical-1>
              <Text fill-tertiary-800 typography-label-small-nowrap>
                Web
              </Text>
            </Frame>
          </Frame>
          <Frame alignment-top-left flow-horizontal gap-6 height-hug width-fill wrap>
            <Case label="width-28, wrap">
              <Frame fill-white flow-horizontal gap-1 height-hug padding-1 width-28 wrap>
                <Frame fill-tertiary-300 height-6 width-6 />
                <Frame fill-tertiary-400 height-6 width-6 />
                <Frame fill-tertiary-500 height-6 width-6 />
                <Frame fill-tertiary-600 height-6 width-6 />
                <Frame fill-tertiary-700 height-6 width-6 />
                <Frame fill-tertiary-800 height-6 width-6 />
                <Frame fill-tertiary-900 height-6 width-6 />
              </Frame>
            </Case>
            <Case label="width-28, no wrap (overflows)">
              <Frame fill-white flow-horizontal gap-1 height-hug padding-1 width-28>
                <Frame fill-tertiary-300 height-6 width-6 />
                <Frame fill-tertiary-400 height-6 width-6 />
                <Frame fill-tertiary-500 height-6 width-6 />
                <Frame fill-tertiary-600 height-6 width-6 />
                <Frame fill-tertiary-700 height-6 width-6 />
                <Frame fill-tertiary-800 height-6 width-6 />
                <Frame fill-tertiary-900 height-6 width-6 />
              </Frame>
            </Case>
          </Frame>
        </Section>

        <Section title="13. Typography" note="Every typography flag, in black.">
          <Frame flow-vertical gap-2 height-hug width-fill>
            <Text fill-text-800 typography-display-wrap>
              display-wrap
            </Text>
            <Text fill-text-800 typography-header-wrap>
              header-wrap
            </Text>
            <Text fill-text-800 typography-header-small-wrap>
              header-small-wrap
            </Text>
            <Text fill-text-800 typography-body-wrap>
              body-wrap
            </Text>
            <Text fill-text-800 typography-body-nowrap>
              body-nowrap
            </Text>
            <Text fill-text-800 typography-body-small-wrap>
              body-small-wrap
            </Text>
            <Text fill-text-800 typography-body-small-nowrap>
              body-small-nowrap
            </Text>
            <Text fill-text-800 typography-mono-wrap>
              mono-wrap
            </Text>
            <Text fill-text-800 typography-mono-nowrap>
              mono-nowrap
            </Text>
            <Text fill-text-800 typography-mono-small-wrap>
              mono-small-wrap
            </Text>
            <Text fill-text-800 typography-mono-small-nowrap>
              mono-small-nowrap
            </Text>
            <Text fill-text-800 typography-label-wrap>
              label-wrap
            </Text>
            <Text fill-text-800 typography-label-nowrap>
              label-nowrap
            </Text>
            <Text fill-text-800 typography-label-small-wrap>
              label-small-wrap
            </Text>
            <Text fill-text-800 typography-label-small-nowrap>
              label-small-nowrap
            </Text>
            <Text fill-text-800 typography-timecode>
              01:23:45:12
            </Text>
            <Text fill-primary-700 typography-body-wrap typography-decoration-underline>
              underlined primary-700
            </Text>
          </Frame>
        </Section>

        <Section
          title="14. Typography wrapping"
          note="Each type in a 28-wide frame and a fill frame with text longer than any screen. Types ending in -wrap may wrap; every other type stays on one line and ends in an ellipsis."
        >
          <Caption>timecode</Caption>
          <Frame alignment-top-left flow-horizontal gap-2 height-hug width-fill>
            <Frame fill-white flow-vertical padding-2 width-28>
              <Text fill-text-800 typography-timecode>
                {LOREM}
              </Text>
            </Frame>
            <Frame fill-white flow-vertical padding-2 width-fill>
              <Text fill-text-800 typography-timecode>
                {LOREM_LONG}
              </Text>
            </Frame>
          </Frame>
          <Caption>display-wrap</Caption>
          <Frame alignment-top-left flow-horizontal gap-2 height-hug width-fill>
            <Frame fill-white flow-vertical padding-2 width-28>
              <Text fill-text-800 typography-display-wrap>
                {LOREM}
              </Text>
            </Frame>
            <Frame fill-white flow-vertical padding-2 width-fill>
              <Text fill-text-800 typography-display-wrap>
                {LOREM_LONG}
              </Text>
            </Frame>
          </Frame>
          <Caption>header-wrap</Caption>
          <Frame alignment-top-left flow-horizontal gap-2 height-hug width-fill>
            <Frame fill-white flow-vertical padding-2 width-28>
              <Text fill-text-800 typography-header-wrap>
                {LOREM}
              </Text>
            </Frame>
            <Frame fill-white flow-vertical padding-2 width-fill>
              <Text fill-text-800 typography-header-wrap>
                {LOREM_LONG}
              </Text>
            </Frame>
          </Frame>
          <Caption>header-small-wrap</Caption>
          <Frame alignment-top-left flow-horizontal gap-2 height-hug width-fill>
            <Frame fill-white flow-vertical padding-2 width-28>
              <Text fill-text-800 typography-header-small-wrap>
                {LOREM}
              </Text>
            </Frame>
            <Frame fill-white flow-vertical padding-2 width-fill>
              <Text fill-text-800 typography-header-small-wrap>
                {LOREM_LONG}
              </Text>
            </Frame>
          </Frame>
          <Caption>body-wrap</Caption>
          <Frame alignment-top-left flow-horizontal gap-2 height-hug width-fill>
            <Frame fill-white flow-vertical padding-2 width-28>
              <Text fill-text-800 typography-body-wrap>
                {LOREM}
              </Text>
            </Frame>
            <Frame fill-white flow-vertical padding-2 width-fill>
              <Text fill-text-800 typography-body-wrap>
                {LOREM_LONG}
              </Text>
            </Frame>
          </Frame>
          <Caption>body-nowrap</Caption>
          <Frame alignment-top-left flow-horizontal gap-2 height-hug width-fill>
            <Frame fill-white flow-vertical padding-2 width-28>
              <Text fill-text-800 typography-body-nowrap>
                {LOREM}
              </Text>
            </Frame>
            <Frame fill-white flow-vertical padding-2 width-fill>
              <Text fill-text-800 typography-body-nowrap>
                {LOREM_LONG}
              </Text>
            </Frame>
          </Frame>
          <Caption>body-small-wrap</Caption>
          <Frame alignment-top-left flow-horizontal gap-2 height-hug width-fill>
            <Frame fill-white flow-vertical padding-2 width-28>
              <Text fill-text-800 typography-body-small-wrap>
                {LOREM}
              </Text>
            </Frame>
            <Frame fill-white flow-vertical padding-2 width-fill>
              <Text fill-text-800 typography-body-small-wrap>
                {LOREM_LONG}
              </Text>
            </Frame>
          </Frame>
          <Caption>body-small-nowrap</Caption>
          <Frame alignment-top-left flow-horizontal gap-2 height-hug width-fill>
            <Frame fill-white flow-vertical padding-2 width-28>
              <Text fill-text-800 typography-body-small-nowrap>
                {LOREM}
              </Text>
            </Frame>
            <Frame fill-white flow-vertical padding-2 width-fill>
              <Text fill-text-800 typography-body-small-nowrap>
                {LOREM_LONG}
              </Text>
            </Frame>
          </Frame>
          <Caption>mono-wrap</Caption>
          <Frame alignment-top-left flow-horizontal gap-2 height-hug width-fill>
            <Frame fill-white flow-vertical padding-2 width-28>
              <Text fill-text-800 typography-mono-wrap>
                {LOREM}
              </Text>
            </Frame>
            <Frame fill-white flow-vertical padding-2 width-fill>
              <Text fill-text-800 typography-mono-wrap>
                {LOREM_LONG}
              </Text>
            </Frame>
          </Frame>
          <Caption>mono-nowrap</Caption>
          <Frame alignment-top-left flow-horizontal gap-2 height-hug width-fill>
            <Frame fill-white flow-vertical padding-2 width-28>
              <Text fill-text-800 typography-mono-nowrap>
                {LOREM}
              </Text>
            </Frame>
            <Frame fill-white flow-vertical padding-2 width-fill>
              <Text fill-text-800 typography-mono-nowrap>
                {LOREM_LONG}
              </Text>
            </Frame>
          </Frame>
          <Caption>mono-small-wrap</Caption>
          <Frame alignment-top-left flow-horizontal gap-2 height-hug width-fill>
            <Frame fill-white flow-vertical padding-2 width-28>
              <Text fill-text-800 typography-mono-small-wrap>
                {LOREM}
              </Text>
            </Frame>
            <Frame fill-white flow-vertical padding-2 width-fill>
              <Text fill-text-800 typography-mono-small-wrap>
                {LOREM_LONG}
              </Text>
            </Frame>
          </Frame>
          <Caption>mono-small-nowrap</Caption>
          <Frame alignment-top-left flow-horizontal gap-2 height-hug width-fill>
            <Frame fill-white flow-vertical padding-2 width-28>
              <Text fill-text-800 typography-mono-small-nowrap>
                {LOREM}
              </Text>
            </Frame>
            <Frame fill-white flow-vertical padding-2 width-fill>
              <Text fill-text-800 typography-mono-small-nowrap>
                {LOREM_LONG}
              </Text>
            </Frame>
          </Frame>
          <Caption>label-wrap</Caption>
          <Frame alignment-top-left flow-horizontal gap-2 height-hug width-fill>
            <Frame fill-white flow-vertical padding-2 width-28>
              <Text fill-text-800 typography-label-wrap>
                {LOREM}
              </Text>
            </Frame>
            <Frame fill-white flow-vertical padding-2 width-fill>
              <Text fill-text-800 typography-label-wrap>
                {LOREM_LONG}
              </Text>
            </Frame>
          </Frame>
          <Caption>label-nowrap</Caption>
          <Frame alignment-top-left flow-horizontal gap-2 height-hug width-fill>
            <Frame fill-white flow-vertical padding-2 width-28>
              <Text fill-text-800 typography-label-nowrap>
                {LOREM}
              </Text>
            </Frame>
            <Frame fill-white flow-vertical padding-2 width-fill>
              <Text fill-text-800 typography-label-nowrap>
                {LOREM_LONG}
              </Text>
            </Frame>
          </Frame>
          <Caption>label-small-wrap</Caption>
          <Frame alignment-top-left flow-horizontal gap-2 height-hug width-fill>
            <Frame fill-white flow-vertical padding-2 width-28>
              <Text fill-text-800 typography-label-small-wrap>
                {LOREM}
              </Text>
            </Frame>
            <Frame fill-white flow-vertical padding-2 width-fill>
              <Text fill-text-800 typography-label-small-wrap>
                {LOREM_LONG}
              </Text>
            </Frame>
          </Frame>
          <Caption>label-small-nowrap</Caption>
          <Frame alignment-top-left flow-horizontal gap-2 height-hug width-fill>
            <Frame fill-white flow-vertical padding-2 width-28>
              <Text fill-text-800 typography-label-small-nowrap>
                {LOREM}
              </Text>
            </Frame>
            <Frame fill-white flow-vertical padding-2 width-fill>
              <Text fill-text-800 typography-label-small-nowrap>
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
            <Text fill-text-800 typography-align-left typography-body-wrap>
              {LOREM}
            </Text>
          </Frame>
          <Frame fill-white padding-3 width-fill>
            <Text fill-text-800 typography-align-center typography-body-wrap>
              {LOREM}
            </Text>
          </Frame>
          <Frame fill-white padding-3 width-fill>
            <Text fill-text-800 typography-align-right typography-body-wrap>
              {LOREM}
            </Text>
          </Frame>
          <Frame alignment-top-left flow-horizontal gap-4 height-hug width-fill wrap>
            <Case label="width-28, body-small-wrap">
              <Frame fill-white padding-2 width-28>
                <Text fill-text-800 typography-body-small-wrap>
                  {LOREM}
                </Text>
              </Frame>
            </Case>
            <Case label="width-28, body-small-nowrap">
              <Frame fill-white padding-2 width-28>
                <Text fill-text-800 typography-body-small-nowrap>
                  {LOREM}
                </Text>
              </Frame>
            </Case>
            <Case label="width-28, mono-small-wrap">
              <Frame fill-white padding-2 width-28>
                <Text fill-text-800 typography-mono-small-wrap>
                  {LOREM}
                </Text>
              </Frame>
            </Case>
          </Frame>
          <Caption>two texts side by side, each in a fill frame</Caption>
          <Frame flow-horizontal gap-3 height-hug width-fill>
            <Frame fill-white padding-2 width-fill>
              <Text fill-text-800 typography-body-small-wrap>
                {LOREM}
              </Text>
            </Frame>
            <Frame fill-white padding-2 width-fill>
              <Text fill-text-800 typography-body-small-wrap>
                Short text.
              </Text>
            </Frame>
          </Frame>
        </Section>

        <Section title="16. Card" note="Text and frames nested into a card with a shadow, tag and buttons.">
          <Frame corner-radius-4 effect-shadow-large fill-white flow-vertical gap-3 height-hug padding-4 width-fill>
            <Frame alignment-left flow-horizontal gap-2 height-hug width-fill>
              <Frame flow-vertical height-hug width-fill>
                <Text fill-text-800 typography-header-small-wrap>
                  Quarterly review
                </Text>
                <Text fill-neutral-600 typography-body-small-nowrap>
                  Thursday, 14:00 to 15:30
                </Text>
              </Frame>
              <Frame corner-radius-full fill-positive-100 padding-horizontal-2 padding-vertical-0p5>
                <Text fill-positive-800 typography-label-small-nowrap>
                  Confirmed
                </Text>
              </Frame>
            </Frame>
            <Frame fill-neutral-300 height-1px width-fill />
            <Text fill-text-800 typography-body-wrap>
              {LOREM}
            </Text>
            <Frame alignment-right flow-horizontal gap-2 height-hug width-fill>
              <Frame alignment-center corner-radius-full height-10 padding-horizontal-4 stroke-neutral-400 width-hug>
                <Text fill-text-800 typography-label-nowrap>
                  Decline
                </Text>
              </Frame>
              <Frame alignment-center corner-radius-full fill-primary-700 height-10 padding-horizontal-4 width-hug>
                <Text fill-white typography-label-nowrap>
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
          <Frame corner-radius-3 fill-white flow-vertical height-hug width-fill>
            <Frame alignment-left flow-horizontal gap-3 height-hug padding-3 width-fill>
              <Frame alignment-center corner-radius-full fill-primary-200 height-10 width-10>
                <Text fill-primary-800 typography-label-nowrap>
                  AL
                </Text>
              </Frame>
              <Frame flow-vertical height-hug width-fill>
                <Text fill-text-800 typography-body-nowrap>
                  Ada Lovelace
                </Text>
                <Text fill-neutral-600 typography-body-small-nowrap>
                  Short subtitle
                </Text>
              </Frame>
              <Frame corner-radius-full fill-primary-700 padding-horizontal-2>
                <Text fill-white typography-label-small-nowrap>
                  3
                </Text>
              </Frame>
            </Frame>
            <Frame fill-neutral-200 height-1px width-fill />
            <Frame alignment-left flow-horizontal gap-3 height-hug padding-3 width-fill>
              <Frame alignment-center corner-radius-full fill-secondary-200 height-10 width-10>
                <Text fill-secondary-800 typography-label-nowrap>
                  GH
                </Text>
              </Frame>
              <Frame flow-vertical height-hug width-fill>
                <Text fill-text-800 typography-body-nowrap>
                  Grace Hopper with a name long enough to truncate on a narrow phone screen
                </Text>
                <Text fill-neutral-600 typography-body-small-nowrap>
                  {LOREM}
                </Text>
              </Frame>
              <Frame corner-radius-full fill-secondary-700 padding-horizontal-2>
                <Text fill-white typography-label-small-nowrap>
                  128
                </Text>
              </Frame>
            </Frame>
            <Frame fill-neutral-200 height-1px width-fill />
            <Frame alignment-left flow-horizontal gap-3 height-hug padding-3 width-fill>
              <Frame alignment-center corner-radius-full fill-tertiary-200 height-10 width-10>
                <Text fill-tertiary-800 typography-label-nowrap>
                  KJ
                </Text>
              </Frame>
              <Frame flow-vertical height-hug width-fill>
                <Text fill-text-800 typography-body-nowrap>
                  Katherine Johnson
                </Text>
                <Text fill-neutral-600 typography-body-small-wrap>
                  This subtitle wraps instead of truncating, so the row grows taller and the avatar and badge stay
                  centered.
                </Text>
              </Frame>
              <Frame corner-radius-full fill-neutral-300 height-6 width-6 />
            </Frame>
          </Frame>
        </Section>

        <Section
          title="18. Rows of columns, columns of rows"
          note="An app shell: header, a sidebar beside a 2 x 2 grid of fill cards, and a footer."
        >
          <Frame corner-radius-3 fill-white flow-vertical height-hug stroke-neutral-300 width-fill>
            <Frame
              alignment-left
              corner-radius-top-left-3
              corner-radius-top-right-3
              fill-neutral-700
              flow-horizontal
              gap-2
              height-12
              padding-horizontal-3
              width-fill
            >
              <Frame corner-radius-1 fill-primary-500 height-6 width-6 />
              <Frame flow-vertical width-fill>
                <Text fill-white typography-label-nowrap>
                  Header
                </Text>
              </Frame>
              <Frame corner-radius-full fill-neutral-500 height-6 width-6 />
            </Frame>
            <Frame flow-horizontal height-hug width-fill>
              <Frame fill-neutralsurface-100 flow-vertical gap-1 height-fill padding-2 width-24>
                <Frame corner-radius-1 fill-primary-100 padding-2 width-fill>
                  <Text fill-primary-800 typography-label-small-nowrap>
                    Inbox
                  </Text>
                </Frame>
                <Frame padding-2 width-fill>
                  <Text fill-text-800 typography-label-small-nowrap>
                    Drafts
                  </Text>
                </Frame>
                <Frame padding-2 width-fill>
                  <Text fill-text-800 typography-label-small-nowrap>
                    Archive
                  </Text>
                </Frame>
              </Frame>
              <Frame flow-vertical gap-2 height-hug padding-2 width-fill>
                <Frame flow-horizontal gap-2 height-hug width-fill>
                  <Frame corner-radius-2 fill-primary-100 flow-vertical gap-1 height-hug padding-2 width-fill>
                    <Text fill-text-800 typography-label-nowrap>
                      One
                    </Text>
                    <Text fill-neutral-600 typography-body-small-wrap>
                      A short card.
                    </Text>
                  </Frame>
                  <Frame corner-radius-2 fill-secondary-100 flow-vertical gap-1 height-fill padding-2 width-fill>
                    <Text fill-text-800 typography-label-nowrap>
                      Two
                    </Text>
                    <Text fill-neutral-600 typography-body-small-wrap>
                      Fills the row height.
                    </Text>
                  </Frame>
                </Frame>
                <Frame flow-horizontal gap-2 height-hug width-fill>
                  <Frame corner-radius-2 fill-tertiary-100 flow-vertical gap-1 height-hug padding-2 width-fill>
                    <Text fill-text-800 typography-label-nowrap>
                      Three
                    </Text>
                    <Text fill-neutral-600 typography-body-small-wrap>
                      {LOREM}
                    </Text>
                  </Frame>
                  <Frame corner-radius-2 fill-positive-100 flow-vertical gap-1 height-hug padding-2 width-fill>
                    <Text fill-text-800 typography-label-nowrap>
                      Four
                    </Text>
                    <Text fill-neutral-600 typography-body-small-wrap>
                      Hugs its text.
                    </Text>
                  </Frame>
                </Frame>
              </Frame>
            </Frame>
            <Frame alignment-center fill-neutralsurface-200 height-8 width-fill>
              <Text fill-neutral-600 typography-label-small-nowrap>
                Footer
              </Text>
            </Frame>
          </Frame>
        </Section>

        <Section
          title="19. Deep nesting"
          note="Ten hug frames, each padding-2, from primary-50 to the innermost text. Then six width-fill levels that should all span the section."
        >
          <Frame fill-primary-50 padding-2>
            <Frame fill-primary-100 padding-2>
              <Frame fill-primary-200 padding-2>
                <Frame fill-primary-300 padding-2>
                  <Frame fill-primary-400 padding-2>
                    <Frame fill-primary-500 padding-2>
                      <Frame fill-primary-600 padding-2>
                        <Frame fill-primary-700 padding-2>
                          <Frame fill-primary-800 padding-2>
                            <Frame fill-primary-900 padding-2>
                              <Text fill-white typography-label-small-nowrap>
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
          <Frame fill-secondary-50 padding-2 width-fill>
            <Frame fill-secondary-100 padding-2 width-fill>
              <Frame fill-secondary-200 padding-2 width-fill>
                <Frame fill-secondary-300 padding-2 width-fill>
                  <Frame fill-secondary-400 padding-2 width-fill>
                    <Frame alignment-left fill-secondary-700 flow-horizontal gap-2 padding-2 width-fill>
                      <Frame flow-vertical width-fill>
                        <Text fill-white typography-body-small-nowrap>
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
          <Frame alignment-bottom-left fill-white flow-horizontal gap-1 height-28 padding-2 width-fill>
            <Frame corner-radius-top-left-1 corner-radius-top-right-1 fill-tertiary-300 height-4 width-fill />
            <Frame corner-radius-top-left-1 corner-radius-top-right-1 fill-tertiary-400 height-8 width-fill />
            <Frame corner-radius-top-left-1 corner-radius-top-right-1 fill-tertiary-500 height-12 width-fill />
            <Frame corner-radius-top-left-1 corner-radius-top-right-1 fill-tertiary-600 height-20 width-fill />
            <Frame corner-radius-top-left-1 corner-radius-top-right-1 fill-tertiary-700 height-24 width-fill />
            <Frame corner-radius-top-left-1 corner-radius-top-right-1 fill-tertiary-500 height-16 width-fill />
            <Frame corner-radius-top-left-1 corner-radius-top-right-1 fill-tertiary-400 height-10 width-fill />
            <Frame corner-radius-top-left-1 corner-radius-top-right-1 fill-tertiary-300 height-6 width-fill />
          </Frame>
          <Frame flow-vertical height-hug width-hug>
            <Frame flow-horizontal>
              <Frame fill-neutral-700 height-6 width-6 />
              <Frame fill-white height-6 width-6 />
              <Frame fill-neutral-700 height-6 width-6 />
              <Frame fill-white height-6 width-6 />
            </Frame>
            <Frame flow-horizontal>
              <Frame fill-white height-6 width-6 />
              <Frame fill-neutral-700 height-6 width-6 />
              <Frame fill-white height-6 width-6 />
              <Frame fill-neutral-700 height-6 width-6 />
            </Frame>
            <Frame flow-horizontal>
              <Frame fill-neutral-700 height-6 width-6 />
              <Frame fill-white height-6 width-6 />
              <Frame fill-neutral-700 height-6 width-6 />
              <Frame fill-white height-6 width-6 />
            </Frame>
            <Frame flow-horizontal>
              <Frame fill-white height-6 width-6 />
              <Frame fill-neutral-700 height-6 width-6 />
              <Frame fill-white height-6 width-6 />
              <Frame fill-neutral-700 height-6 width-6 />
            </Frame>
          </Frame>
        </Section>

        <Section
          title="21. Wrapping card grid"
          note="Fixed 28-wide cards that wrap onto new rows as the width shrinks."
        >
          <Frame alignment-top-left flow-horizontal gap-3 height-hug width-fill wrap>
            <Frame corner-radius-3 effect-shadow-small fill-white flow-vertical gap-2 height-hug padding-3 width-28>
              <Frame corner-radius-2 fill-primary-300 height-12 width-fill />
              <Text fill-text-800 typography-label-nowrap>
                Alpha
              </Text>
              <Text fill-neutral-600 typography-body-small-wrap>
                One line.
              </Text>
            </Frame>
            <Frame corner-radius-3 effect-shadow-small fill-white flow-vertical gap-2 height-hug padding-3 width-28>
              <Frame corner-radius-2 fill-secondary-300 height-12 width-fill />
              <Text fill-text-800 typography-label-nowrap>
                Beta
              </Text>
              <Text fill-neutral-600 typography-body-small-wrap>
                A couple of lines of text in this card.
              </Text>
            </Frame>
            <Frame corner-radius-3 effect-shadow-small fill-white flow-vertical gap-2 height-hug padding-3 width-28>
              <Frame corner-radius-2 fill-tertiary-300 height-12 width-fill />
              <Text fill-text-800 typography-label-nowrap>
                Gamma
              </Text>
              <Text fill-neutral-600 typography-body-small-wrap>
                Short.
              </Text>
            </Frame>
            <Frame corner-radius-3 effect-shadow-small fill-white flow-vertical gap-2 height-hug padding-3 width-28>
              <Frame corner-radius-2 fill-positive-300 height-12 width-fill />
              <Text fill-text-800 typography-label-nowrap>
                Delta
              </Text>
              <Text fill-neutral-600 typography-body-small-wrap>
                {LOREM}
              </Text>
            </Frame>
            <Frame corner-radius-3 effect-shadow-small fill-white flow-vertical gap-2 height-hug padding-3 width-28>
              <Frame corner-radius-2 fill-negative-300 height-12 width-fill />
              <Text fill-text-800 typography-label-nowrap>
                Epsilon
              </Text>
              <Text fill-neutral-600 typography-body-small-wrap>
                Last card.
              </Text>
            </Frame>
          </Frame>
        </Section>
        <Section title="22. Vector" note="A 20 x 20 icon path scaled into width- and height- boxes of 5 and 10.">
          <Frame alignment-bottom-left flow-horizontal gap-4 height-hug width-fill wrap>
            <Case label="5 x 5">
              <Vector fill-text-700 height-5 path={MORE_PATH} viewBox="-3.94 -8.75 20 20" width-5 />
            </Case>
            <Case label="10 x 10">
              <Vector fill-text-700 height-10 path={MORE_PATH} viewBox="-3.94 -8.75 20 20" width-10 />
            </Case>
          </Frame>
        </Section>
      </Frame>
    </ScrollView>
  )
}
