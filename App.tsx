import "./global.css"
import { Frame, Text, Vector } from "@unison"
import { StatusBar } from "expo-status-bar"
import type { ReactNode } from "react"
import { ScrollView } from "react-native"

// Keep these sections in step with unison-playground-web/src/app/page.tsx so web and native render the same cases.

// A "more" icon (three dots) as Figma exports its path.
const MORE_PATH =
  "M1.25 2.5 C0.91 2.5 0.61 2.38 0.37 2.13 C0.12 1.89 0 1.59 0 1.25 C0 0.91 0.12 0.61 0.37 0.37 C0.61 0.12 0.91 0 1.25 0 C1.59 0 1.89 0.12 2.13 0.37 C2.38 0.61 2.5 0.91 2.5 1.25 C2.5 1.59 2.38 1.89 2.13 2.13 C1.89 2.38 1.59 2.5 1.25 2.5 Z M6.06 2.5 C5.71 2.5 5.42 2.38 5.18 2.13 C4.93 1.89 4.81 1.59 4.81 1.25 C4.81 0.91 4.93 0.61 5.18 0.37 C5.42 0.12 5.71 0 6.06 0 C6.4 0 6.7 0.12 6.94 0.37 C7.19 0.61 7.31 0.91 7.31 1.25 C7.31 1.59 7.19 1.89 6.94 2.13 C6.7 2.38 6.4 2.5 6.06 2.5 Z M10.87 2.5 C10.52 2.5 10.23 2.38 9.98 2.13 C9.74 1.89 9.62 1.59 9.62 1.25 C9.62 0.91 9.74 0.61 9.98 0.37 C10.23 0.12 10.52 0 10.87 0 C11.21 0 11.5 0.12 11.75 0.37 C11.99 0.61 12.12 0.91 12.12 1.25 C12.12 1.59 11.99 1.89 11.75 2.13 C11.5 2.38 11.21 2.5 10.87 2.5 Z"

// A ring: two circles drawn the same way round, so it only shows its hole with fillRule="evenodd".
const RING_PATH = "M12 2 A10 10 0 1 0 12 22 A10 10 0 1 0 12 2 Z M12 6 A6 6 0 1 0 12 18 A6 6 0 1 0 12 6 Z"

// A check mark, wider than it is tall, to show the viewBox keeping its aspect ratio in boxes of other shapes.
const CHECK_PATH = "M2 7 L0 9 L6 15 L18 3 L16 1 L6 11 Z"

const LOREM =
  "Frames compose like Figma auto layout: direction, sizing, padding and gap decide where every child lands, and text wraps inside whatever width its parent gives it."

// Long enough to overflow a fill frame on any screen width.
const LOREM_LONG =
  "Frames compose like Figma auto layout: direction, sizing, padding and gap decide where every child lands, and text wraps inside whatever width its parent gives it. Frames compose like Figma auto layout: direction, sizing, padding and gap decide where every child lands, and text wraps inside whatever width its parent gives it. Frames compose like Figma auto layout: direction, sizing, padding and gap decide where every child lands, and text wraps inside whatever width its parent gives it."

// Short enough that even the largest size fits a few lines into a narrow frame.
const PANGRAM = "Sphinx of black quartz, judge my vow."

// A single word with no break opportunities, to show where text has to break mid-word.
const UNBROKEN = "Supercalifragilisticexpialidocious-and-then-some-more-without-any-spaces"

const Section = (p: { title: string; note: string; children?: ReactNode }) => {
  return (
    <Frame autolayout-vertical gap-2 height-hug width-fill>
      <Text fill-black typography-lg>
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
      <Text fill-neutral-500 typography-xs>
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

// A wrapping row of cases, bottom aligned so sizes compare along one baseline.
const Cases = (p: { children?: ReactNode }) => {
  return (
    <Frame alignment-bottom-left autolayout-horizontal gap-3 height-hug width-fill wrap>
      {p.children}
    </Frame>
  )
}

const Chips = () => {
  return (
    <>
      <Frame corner-radius-full fill-violet-200 padding-horizontal-2 padding-vertical-0p5>
        <Text fill-violet-900 typography-xs>
          one
        </Text>
      </Frame>
      <Frame corner-radius-full fill-violet-200 padding-horizontal-2 padding-vertical-0p5>
        <Text fill-violet-900 typography-xs>
          two
        </Text>
      </Frame>
      <Frame corner-radius-full fill-violet-200 padding-horizontal-2 padding-vertical-0p5>
        <Text fill-violet-900 typography-xs>
          three
        </Text>
      </Frame>
      <Frame corner-radius-full fill-violet-200 padding-horizontal-2 padding-vertical-0p5>
        <Text fill-violet-900 typography-xs>
          four
        </Text>
      </Frame>
      <Frame corner-radius-full fill-violet-200 padding-horizontal-2 padding-vertical-0p5>
        <Text fill-violet-900 typography-xs>
          five
        </Text>
      </Frame>
      <Frame corner-radius-full fill-violet-200 padding-horizontal-2 padding-vertical-0p5>
        <Text fill-violet-900 typography-xs>
          six
        </Text>
      </Frame>
      <Frame corner-radius-full fill-violet-200 padding-horizontal-2 padding-vertical-0p5>
        <Text fill-violet-900 typography-xs>
          seven
        </Text>
      </Frame>
      <Frame corner-radius-full fill-violet-200 padding-horizontal-2 padding-vertical-0p5>
        <Text fill-violet-900 typography-xs>
          eight
        </Text>
      </Frame>
    </>
  )
}

export default () => {
  return (
    <ScrollView>
      <StatusBar style="auto" />
      <Frame fill-white autolayout-vertical gap-10 height-hug padding-horizontal-4 padding-vertical-16 width-fill>
        <Frame autolayout-vertical gap-1 height-hug width-fill>
          <Text fill-black typography-3xl>
            Frame, Text and Vector test suite
          </Text>
          <Text fill-neutral-500 typography-sm>
            Every value of every token in design-tokens.json, written out flag by flag.
          </Text>
        </Frame>

        <Section
          title="1. Spacing scale"
          note="Every spacing step from 0 to 96 as a width- and height- square, including px and the half steps. 0 is an empty box."
        >
          <Cases>
            <Case label="0 (0)">
              <Frame fill-violet-600 height-0 width-0 />
            </Case>
            <Case label="px (1)">
              <Frame fill-violet-600 height-px width-px />
            </Case>
            <Case label="0p5 (2)">
              <Frame fill-violet-600 height-0p5 width-0p5 />
            </Case>
            <Case label="1 (4)">
              <Frame fill-violet-600 height-1 width-1 />
            </Case>
            <Case label="1p5 (6)">
              <Frame fill-violet-600 height-1p5 width-1p5 />
            </Case>
            <Case label="2 (8)">
              <Frame fill-violet-600 height-2 width-2 />
            </Case>
            <Case label="2p5 (10)">
              <Frame fill-violet-600 height-2p5 width-2p5 />
            </Case>
            <Case label="3 (12)">
              <Frame fill-violet-600 height-3 width-3 />
            </Case>
            <Case label="3p5 (14)">
              <Frame fill-violet-600 height-3p5 width-3p5 />
            </Case>
            <Case label="4 (16)">
              <Frame fill-violet-600 height-4 width-4 />
            </Case>
            <Case label="5 (20)">
              <Frame fill-violet-600 height-5 width-5 />
            </Case>
            <Case label="6 (24)">
              <Frame fill-violet-600 height-6 width-6 />
            </Case>
            <Case label="7 (28)">
              <Frame fill-violet-600 height-7 width-7 />
            </Case>
            <Case label="8 (32)">
              <Frame fill-violet-600 height-8 width-8 />
            </Case>
            <Case label="9 (36)">
              <Frame fill-violet-600 height-9 width-9 />
            </Case>
            <Case label="10 (40)">
              <Frame fill-violet-600 height-10 width-10 />
            </Case>
            <Case label="11 (44)">
              <Frame fill-violet-600 height-11 width-11 />
            </Case>
            <Case label="12 (48)">
              <Frame fill-violet-600 height-12 width-12 />
            </Case>
            <Case label="14 (56)">
              <Frame fill-violet-600 height-14 width-14 />
            </Case>
            <Case label="16 (64)">
              <Frame fill-violet-600 height-16 width-16 />
            </Case>
            <Case label="20 (80)">
              <Frame fill-violet-600 height-20 width-20 />
            </Case>
            <Case label="24 (96)">
              <Frame fill-violet-600 height-24 width-24 />
            </Case>
            <Case label="28 (112)">
              <Frame fill-violet-600 height-28 width-28 />
            </Case>
            <Case label="32 (128)">
              <Frame fill-violet-600 height-32 width-32 />
            </Case>
            <Case label="36 (144)">
              <Frame fill-violet-600 height-36 width-36 />
            </Case>
            <Case label="40 (160)">
              <Frame fill-violet-600 height-40 width-40 />
            </Case>
            <Case label="44 (176)">
              <Frame fill-violet-600 height-44 width-44 />
            </Case>
            <Case label="48 (192)">
              <Frame fill-violet-600 height-48 width-48 />
            </Case>
            <Case label="52 (208)">
              <Frame fill-violet-600 height-52 width-52 />
            </Case>
            <Case label="56 (224)">
              <Frame fill-violet-600 height-56 width-56 />
            </Case>
            <Case label="60 (240)">
              <Frame fill-violet-600 height-60 width-60 />
            </Case>
            <Case label="64 (256)">
              <Frame fill-violet-600 height-64 width-64 />
            </Case>
            <Case label="72 (288)">
              <Frame fill-violet-600 height-72 width-72 />
            </Case>
            <Case label="80 (320)">
              <Frame fill-violet-600 height-80 width-80 />
            </Case>
            <Case label="96 (384)">
              <Frame fill-violet-600 height-96 width-96 />
            </Case>
          </Cases>
          <Caption>Bars of width-0p5, 1, 1p5, 2, 2p5, 3 and 3p5, height-8: each step should be visibly wider.</Caption>
          <Frame alignment-bottom-left autolayout-horizontal gap-1 height-hug width-fill>
            <Frame fill-fuchsia-500 height-8 width-px />
            <Frame fill-fuchsia-500 height-8 width-0p5 />
            <Frame fill-fuchsia-500 height-8 width-1 />
            <Frame fill-fuchsia-500 height-8 width-1p5 />
            <Frame fill-fuchsia-500 height-8 width-2 />
            <Frame fill-fuchsia-500 height-8 width-2p5 />
            <Frame fill-fuchsia-500 height-8 width-3 />
            <Frame fill-fuchsia-500 height-8 width-3p5 />
            <Frame fill-fuchsia-500 height-8 width-4 />
          </Frame>
          <Caption>width-full and height-full inside a 64 x 16 frame</Caption>
          <Frame fill-neutral-300 autolayout-horizontal gap-2 height-16 padding-2 width-64>
            <Frame fill-sky-500 height-full width-8 />
            <Frame fill-sky-300 height-4 width-full />
          </Frame>
        </Section>

        <Section
          title="2. Hug, fill and fixed"
          note="Fill children share the space left by fixed and hug siblings. Fixed frames never shrink, hug frames wrap their content."
        >
          <Caption>row: fixed 16 | fill | fixed 16</Caption>
          <Frame autolayout-horizontal gap-2 height-hug width-fill>
            <Frame fill-violet-600 height-12 width-16 />
            <Frame fill-violet-300 height-12 width-fill />
            <Frame fill-violet-600 height-12 width-16 />
          </Frame>
          <Caption>row: fill | fill | fill (equal widths)</Caption>
          <Frame autolayout-horizontal gap-2 height-hug width-fill>
            <Frame fill-fuchsia-200 height-12 width-fill />
            <Frame fill-fuchsia-300 height-12 width-fill />
            <Frame fill-fuchsia-400 height-12 width-fill />
          </Frame>
          <Caption>row: hug text | fill both | hug text</Caption>
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
          <Caption>row: fixed 12 | fill with wrapping text | fixed 12</Caption>
          <Frame alignment-left autolayout-horizontal gap-2 height-hug width-fill>
            <Frame fill-green-700 height-12 width-12 />
            <Frame autolayout-vertical height-hug width-fill>
              <Text fill-black typography-base>
                {LOREM}
              </Text>
            </Frame>
            <Frame fill-green-700 height-12 width-12 />
          </Frame>
          <Caption>columns, height-28: fixed | fill | fixed, then three fills, then hug and fill widths</Caption>
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
                <Text fill-white typography-xs>
                  hug
                </Text>
              </Frame>
              <Frame fill-sky-500 height-hug padding-1 width-fill>
                <Text fill-white typography-xs>
                  fill
                </Text>
              </Frame>
            </Frame>
          </Frame>
          <Caption>hug with no children collapses to nothing (between the two markers)</Caption>
          <Frame alignment-left autolayout-horizontal height-hug width-hug>
            <Frame fill-neutral-900 height-4 width-px />
            <Frame fill-red-500 height-hug width-hug />
            <Frame fill-neutral-900 height-4 width-px />
          </Frame>
        </Section>

        <Section
          title="3. Container widths"
          note="Every container width from 3xs (256) to 7xl (1280). Wider ones overflow the section on narrow screens instead of shrinking."
        >
          <Frame autolayout-vertical gap-1 height-hug width-fill>
            <Caption>width-3xs (256)</Caption>
            <Frame corner-radius-sm fill-teal-400 height-4 width-3xs />
          </Frame>
          <Frame autolayout-vertical gap-1 height-hug width-fill>
            <Caption>width-2xs (288)</Caption>
            <Frame corner-radius-sm fill-teal-400 height-4 width-2xs />
          </Frame>
          <Frame autolayout-vertical gap-1 height-hug width-fill>
            <Caption>width-xs (320)</Caption>
            <Frame corner-radius-sm fill-teal-400 height-4 width-xs />
          </Frame>
          <Frame autolayout-vertical gap-1 height-hug width-fill>
            <Caption>width-sm (384)</Caption>
            <Frame corner-radius-sm fill-teal-400 height-4 width-sm />
          </Frame>
          <Frame autolayout-vertical gap-1 height-hug width-fill>
            <Caption>width-md (448)</Caption>
            <Frame corner-radius-sm fill-teal-400 height-4 width-md />
          </Frame>
          <Frame autolayout-vertical gap-1 height-hug width-fill>
            <Caption>width-lg (512)</Caption>
            <Frame corner-radius-sm fill-teal-400 height-4 width-lg />
          </Frame>
          <Frame autolayout-vertical gap-1 height-hug width-fill>
            <Caption>width-xl (576)</Caption>
            <Frame corner-radius-sm fill-teal-400 height-4 width-xl />
          </Frame>
          <Frame autolayout-vertical gap-1 height-hug width-fill>
            <Caption>width-2xl (672)</Caption>
            <Frame corner-radius-sm fill-teal-400 height-4 width-2xl />
          </Frame>
          <Frame autolayout-vertical gap-1 height-hug width-fill>
            <Caption>width-3xl (768)</Caption>
            <Frame corner-radius-sm fill-teal-400 height-4 width-3xl />
          </Frame>
          <Frame autolayout-vertical gap-1 height-hug width-fill>
            <Caption>width-4xl (896)</Caption>
            <Frame corner-radius-sm fill-teal-400 height-4 width-4xl />
          </Frame>
          <Frame autolayout-vertical gap-1 height-hug width-fill>
            <Caption>width-5xl (1024)</Caption>
            <Frame corner-radius-sm fill-teal-400 height-4 width-5xl />
          </Frame>
          <Frame autolayout-vertical gap-1 height-hug width-fill>
            <Caption>width-6xl (1152)</Caption>
            <Frame corner-radius-sm fill-teal-400 height-4 width-6xl />
          </Frame>
          <Frame autolayout-vertical gap-1 height-hug width-fill>
            <Caption>width-7xl (1280)</Caption>
            <Frame corner-radius-sm fill-teal-400 height-4 width-7xl />
          </Frame>
        </Section>

        <Section title="4. Padding scale" note="A 2 x 2 box inside a frame with every padding step.">
          <Cases>
            <Case label="0">
              <Frame fill-amber-300 padding-0>
                <Frame fill-amber-700 height-2 width-2 />
              </Frame>
            </Case>
            <Case label="px">
              <Frame fill-amber-300 padding-px>
                <Frame fill-amber-700 height-2 width-2 />
              </Frame>
            </Case>
            <Case label="0p5">
              <Frame fill-amber-300 padding-0p5>
                <Frame fill-amber-700 height-2 width-2 />
              </Frame>
            </Case>
            <Case label="1">
              <Frame fill-amber-300 padding-1>
                <Frame fill-amber-700 height-2 width-2 />
              </Frame>
            </Case>
            <Case label="1p5">
              <Frame fill-amber-300 padding-1p5>
                <Frame fill-amber-700 height-2 width-2 />
              </Frame>
            </Case>
            <Case label="2">
              <Frame fill-amber-300 padding-2>
                <Frame fill-amber-700 height-2 width-2 />
              </Frame>
            </Case>
            <Case label="2p5">
              <Frame fill-amber-300 padding-2p5>
                <Frame fill-amber-700 height-2 width-2 />
              </Frame>
            </Case>
            <Case label="3">
              <Frame fill-amber-300 padding-3>
                <Frame fill-amber-700 height-2 width-2 />
              </Frame>
            </Case>
            <Case label="3p5">
              <Frame fill-amber-300 padding-3p5>
                <Frame fill-amber-700 height-2 width-2 />
              </Frame>
            </Case>
            <Case label="4">
              <Frame fill-amber-300 padding-4>
                <Frame fill-amber-700 height-2 width-2 />
              </Frame>
            </Case>
            <Case label="5">
              <Frame fill-amber-300 padding-5>
                <Frame fill-amber-700 height-2 width-2 />
              </Frame>
            </Case>
            <Case label="6">
              <Frame fill-amber-300 padding-6>
                <Frame fill-amber-700 height-2 width-2 />
              </Frame>
            </Case>
            <Case label="7">
              <Frame fill-amber-300 padding-7>
                <Frame fill-amber-700 height-2 width-2 />
              </Frame>
            </Case>
            <Case label="8">
              <Frame fill-amber-300 padding-8>
                <Frame fill-amber-700 height-2 width-2 />
              </Frame>
            </Case>
            <Case label="9">
              <Frame fill-amber-300 padding-9>
                <Frame fill-amber-700 height-2 width-2 />
              </Frame>
            </Case>
            <Case label="10">
              <Frame fill-amber-300 padding-10>
                <Frame fill-amber-700 height-2 width-2 />
              </Frame>
            </Case>
            <Case label="11">
              <Frame fill-amber-300 padding-11>
                <Frame fill-amber-700 height-2 width-2 />
              </Frame>
            </Case>
            <Case label="12">
              <Frame fill-amber-300 padding-12>
                <Frame fill-amber-700 height-2 width-2 />
              </Frame>
            </Case>
            <Case label="14">
              <Frame fill-amber-300 padding-14>
                <Frame fill-amber-700 height-2 width-2 />
              </Frame>
            </Case>
            <Case label="16">
              <Frame fill-amber-300 padding-16>
                <Frame fill-amber-700 height-2 width-2 />
              </Frame>
            </Case>
            <Case label="20">
              <Frame fill-amber-300 padding-20>
                <Frame fill-amber-700 height-2 width-2 />
              </Frame>
            </Case>
            <Case label="24">
              <Frame fill-amber-300 padding-24>
                <Frame fill-amber-700 height-2 width-2 />
              </Frame>
            </Case>
            <Case label="28">
              <Frame fill-amber-300 padding-28>
                <Frame fill-amber-700 height-2 width-2 />
              </Frame>
            </Case>
            <Case label="32">
              <Frame fill-amber-300 padding-32>
                <Frame fill-amber-700 height-2 width-2 />
              </Frame>
            </Case>
            <Case label="36">
              <Frame fill-amber-300 padding-36>
                <Frame fill-amber-700 height-2 width-2 />
              </Frame>
            </Case>
            <Case label="40">
              <Frame fill-amber-300 padding-40>
                <Frame fill-amber-700 height-2 width-2 />
              </Frame>
            </Case>
            <Case label="44">
              <Frame fill-amber-300 padding-44>
                <Frame fill-amber-700 height-2 width-2 />
              </Frame>
            </Case>
            <Case label="48">
              <Frame fill-amber-300 padding-48>
                <Frame fill-amber-700 height-2 width-2 />
              </Frame>
            </Case>
            <Case label="52">
              <Frame fill-amber-300 padding-52>
                <Frame fill-amber-700 height-2 width-2 />
              </Frame>
            </Case>
            <Case label="56">
              <Frame fill-amber-300 padding-56>
                <Frame fill-amber-700 height-2 width-2 />
              </Frame>
            </Case>
            <Case label="60">
              <Frame fill-amber-300 padding-60>
                <Frame fill-amber-700 height-2 width-2 />
              </Frame>
            </Case>
            <Case label="64">
              <Frame fill-amber-300 padding-64>
                <Frame fill-amber-700 height-2 width-2 />
              </Frame>
            </Case>
            <Case label="72">
              <Frame fill-amber-300 padding-72>
                <Frame fill-amber-700 height-2 width-2 />
              </Frame>
            </Case>
            <Case label="80">
              <Frame fill-amber-300 padding-80>
                <Frame fill-amber-700 height-2 width-2 />
              </Frame>
            </Case>
            <Case label="96">
              <Frame fill-amber-300 padding-96>
                <Frame fill-amber-700 height-2 width-2 />
              </Frame>
            </Case>
          </Cases>
        </Section>

        <Section title="5. Padding sides" note="An 8 x 8 box inside a light frame with each side's padding flag.">
          <Cases>
            <Case label="vertical-4">
              <Frame fill-sky-200 padding-vertical-4>
                <Frame fill-sky-700 height-8 width-8 />
              </Frame>
            </Case>
            <Case label="horizontal-4">
              <Frame fill-sky-200 padding-horizontal-4>
                <Frame fill-sky-700 height-8 width-8 />
              </Frame>
            </Case>
            <Case label="left-6">
              <Frame fill-sky-200 padding-left-6>
                <Frame fill-sky-700 height-8 width-8 />
              </Frame>
            </Case>
            <Case label="right-6">
              <Frame fill-sky-200 padding-right-6>
                <Frame fill-sky-700 height-8 width-8 />
              </Frame>
            </Case>
            <Case label="top-6">
              <Frame fill-sky-200 padding-top-6>
                <Frame fill-sky-700 height-8 width-8 />
              </Frame>
            </Case>
            <Case label="bottom-6">
              <Frame fill-sky-200 padding-bottom-6>
                <Frame fill-sky-700 height-8 width-8 />
              </Frame>
            </Case>
            <Case label="top-1 right-2 bottom-4 left-8">
              <Frame fill-sky-200 padding-bottom-4 padding-left-8 padding-right-2 padding-top-1>
                <Frame fill-sky-700 height-8 width-8 />
              </Frame>
            </Case>
            <Case label="vertical-px horizontal-0p5">
              <Frame fill-sky-200 padding-horizontal-0p5 padding-vertical-px>
                <Frame fill-sky-700 height-8 width-8 />
              </Frame>
            </Case>
            <Case label="padding-2 left-10">
              <Frame fill-sky-200 padding-2 padding-left-10>
                <Frame fill-sky-700 height-8 width-8 />
              </Frame>
            </Case>
          </Cases>
        </Section>

        <Section title="6. Gap scale" note="Three 4 x 4 boxes in a row with every gap step.">
          <Cases>
            <Case label="0">
              <Frame autolayout-horizontal gap-0 height-hug width-hug>
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="px">
              <Frame autolayout-horizontal gap-px height-hug width-hug>
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="0p5">
              <Frame autolayout-horizontal gap-0p5 height-hug width-hug>
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="1">
              <Frame autolayout-horizontal gap-1 height-hug width-hug>
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="1p5">
              <Frame autolayout-horizontal gap-1p5 height-hug width-hug>
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="2">
              <Frame autolayout-horizontal gap-2 height-hug width-hug>
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="2p5">
              <Frame autolayout-horizontal gap-2p5 height-hug width-hug>
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="3">
              <Frame autolayout-horizontal gap-3 height-hug width-hug>
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="3p5">
              <Frame autolayout-horizontal gap-3p5 height-hug width-hug>
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="4">
              <Frame autolayout-horizontal gap-4 height-hug width-hug>
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="5">
              <Frame autolayout-horizontal gap-5 height-hug width-hug>
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="6">
              <Frame autolayout-horizontal gap-6 height-hug width-hug>
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="7">
              <Frame autolayout-horizontal gap-7 height-hug width-hug>
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="8">
              <Frame autolayout-horizontal gap-8 height-hug width-hug>
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="9">
              <Frame autolayout-horizontal gap-9 height-hug width-hug>
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="10">
              <Frame autolayout-horizontal gap-10 height-hug width-hug>
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="11">
              <Frame autolayout-horizontal gap-11 height-hug width-hug>
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="12">
              <Frame autolayout-horizontal gap-12 height-hug width-hug>
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="14">
              <Frame autolayout-horizontal gap-14 height-hug width-hug>
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="16">
              <Frame autolayout-horizontal gap-16 height-hug width-hug>
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="20">
              <Frame autolayout-horizontal gap-20 height-hug width-hug>
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="24">
              <Frame autolayout-horizontal gap-24 height-hug width-hug>
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="28">
              <Frame autolayout-horizontal gap-28 height-hug width-hug>
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="32">
              <Frame autolayout-horizontal gap-32 height-hug width-hug>
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="36">
              <Frame autolayout-horizontal gap-36 height-hug width-hug>
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="40">
              <Frame autolayout-horizontal gap-40 height-hug width-hug>
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="44">
              <Frame autolayout-horizontal gap-44 height-hug width-hug>
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="48">
              <Frame autolayout-horizontal gap-48 height-hug width-hug>
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="52">
              <Frame autolayout-horizontal gap-52 height-hug width-hug>
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="56">
              <Frame autolayout-horizontal gap-56 height-hug width-hug>
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="60">
              <Frame autolayout-horizontal gap-60 height-hug width-hug>
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="64">
              <Frame autolayout-horizontal gap-64 height-hug width-hug>
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="72">
              <Frame autolayout-horizontal gap-72 height-hug width-hug>
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="80">
              <Frame autolayout-horizontal gap-80 height-hug width-hug>
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="96">
              <Frame autolayout-horizontal gap-96 height-hug width-hug>
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
                <Frame fill-rose-500 height-4 width-4 />
              </Frame>
            </Case>
          </Cases>
        </Section>

        <Section
          title="7. Gap directions and wrap"
          note="Eight chips in a 48-wide frame. gap- spaces items and rows alike; gap-horizontal- and gap-vertical- set one direction and win over gap-."
        >
          <Cases>
            <Case label="gap-2, wrap">
              <Frame fill-white autolayout-horizontal gap-2 padding-2 width-48 wrap>
                <Chips />
              </Frame>
            </Case>
            <Case label="horizontal-6 vertical-1, wrap">
              <Frame fill-white autolayout-horizontal gap-horizontal-6 gap-vertical-1 padding-2 width-48 wrap>
                <Chips />
              </Frame>
            </Case>
            <Case label="horizontal-1 vertical-6, wrap">
              <Frame fill-white autolayout-horizontal gap-horizontal-1 gap-vertical-6 padding-2 width-48 wrap>
                <Chips />
              </Frame>
            </Case>
            <Case label="gap-2 horizontal-8, wrap">
              <Frame fill-white autolayout-horizontal gap-2 gap-horizontal-8 padding-2 width-48 wrap>
                <Chips />
              </Frame>
            </Case>
            <Case label="gap-vertical-4 only, wrap">
              <Frame fill-white autolayout-horizontal gap-vertical-4 padding-2 width-48 wrap>
                <Chips />
              </Frame>
            </Case>
          </Cases>
          <Caption>Without wrap the same row overflows its 48-wide frame on one line.</Caption>
          <Cases>
            <Case label="gap-2, no wrap">
              <Frame fill-white autolayout-horizontal gap-2 padding-2 width-48>
                <Chips />
              </Frame>
            </Case>
            <Case label="horizontal-6 vertical-6, no wrap">
              <Frame fill-white autolayout-horizontal gap-horizontal-6 gap-vertical-6 padding-2 width-48>
                <Chips />
              </Frame>
            </Case>
          </Cases>
          <Caption>Vertical flow, 24 high: gap-vertical- spaces items, gap-horizontal- the wrapped columns.</Caption>
          <Cases>
            <Case label="vertical-1 horizontal-6, wrap">
              <Frame fill-white autolayout-vertical gap-horizontal-6 gap-vertical-1 height-24 padding-2 wrap>
                <Chips />
              </Frame>
            </Case>
            <Case label="gap-3, wrap">
              <Frame fill-white autolayout-vertical gap-3 height-24 padding-2 wrap>
                <Chips />
              </Frame>
            </Case>
            <Case label="gap-1, no wrap">
              <Frame fill-white autolayout-vertical gap-1 height-hug padding-2>
                <Chips />
              </Frame>
            </Case>
          </Cases>
        </Section>

        <Section title="8. Corner radius" note="16 x 16 squares with every radius, then one corner at a time.">
          <Cases>
            <Case label="none (0)">
              <Frame corner-radius-none fill-indigo-500 height-16 width-16 />
            </Case>
            <Case label="xs (2)">
              <Frame corner-radius-xs fill-indigo-500 height-16 width-16 />
            </Case>
            <Case label="sm (4)">
              <Frame corner-radius-sm fill-indigo-500 height-16 width-16 />
            </Case>
            <Case label="md (6)">
              <Frame corner-radius-md fill-indigo-500 height-16 width-16 />
            </Case>
            <Case label="lg (8)">
              <Frame corner-radius-lg fill-indigo-500 height-16 width-16 />
            </Case>
            <Case label="xl (12)">
              <Frame corner-radius-xl fill-indigo-500 height-16 width-16 />
            </Case>
            <Case label="2xl (16)">
              <Frame corner-radius-2xl fill-indigo-500 height-16 width-16 />
            </Case>
            <Case label="3xl (24)">
              <Frame corner-radius-3xl fill-indigo-500 height-16 width-16 />
            </Case>
            <Case label="4xl (32)">
              <Frame corner-radius-4xl fill-indigo-500 height-16 width-16 />
            </Case>
            <Case label="full (999)">
              <Frame corner-radius-full fill-indigo-500 height-16 width-16 />
            </Case>
          </Cases>
          <Cases>
            <Case label="top-left-2xl">
              <Frame corner-radius-top-left-2xl fill-indigo-300 height-16 width-16 />
            </Case>
            <Case label="top-right-2xl">
              <Frame corner-radius-top-right-2xl fill-indigo-300 height-16 width-16 />
            </Case>
            <Case label="bottom-left-2xl">
              <Frame corner-radius-bottom-left-2xl fill-indigo-300 height-16 width-16 />
            </Case>
            <Case label="bottom-right-2xl">
              <Frame corner-radius-bottom-right-2xl fill-indigo-300 height-16 width-16 />
            </Case>
            <Case label="sm, top-left-full">
              <Frame corner-radius-sm corner-radius-top-left-full fill-indigo-300 height-16 width-16 />
            </Case>
            <Case label="full, 32 x 8">
              <Frame corner-radius-full fill-indigo-300 height-8 width-32 />
            </Case>
            <Case label="lg with stroke">
              <Frame corner-radius-lg fill-white height-16 stroke-indigo-500 width-16 />
            </Case>
            <Case label="xl clips nothing">
              <Frame alignment-top-left corner-radius-xl fill-indigo-200 height-16 width-16>
                <Frame fill-indigo-700 height-6 width-6 />
              </Frame>
            </Case>
          </Cases>
        </Section>

        <Section
          title="9. Color swatches"
          note="Every hue at every step. The page follows the system color scheme: in dark mode each scale reverses, so 50 is the darkest and white turns black."
        >
          <Frame autolayout-horizontal gap-0p5 height-hug width-hug>
            <Frame height-hug width-12 />
            <Frame alignment-center autolayout-vertical height-hug width-6>
              <Text fill-neutral-500 typography-xs>
                50
              </Text>
            </Frame>
            <Frame alignment-center autolayout-vertical height-hug width-6>
              <Text fill-neutral-500 typography-xs>
                100
              </Text>
            </Frame>
            <Frame alignment-center autolayout-vertical height-hug width-6>
              <Text fill-neutral-500 typography-xs>
                200
              </Text>
            </Frame>
            <Frame alignment-center autolayout-vertical height-hug width-6>
              <Text fill-neutral-500 typography-xs>
                300
              </Text>
            </Frame>
            <Frame alignment-center autolayout-vertical height-hug width-6>
              <Text fill-neutral-500 typography-xs>
                400
              </Text>
            </Frame>
            <Frame alignment-center autolayout-vertical height-hug width-6>
              <Text fill-neutral-500 typography-xs>
                500
              </Text>
            </Frame>
            <Frame alignment-center autolayout-vertical height-hug width-6>
              <Text fill-neutral-500 typography-xs>
                600
              </Text>
            </Frame>
            <Frame alignment-center autolayout-vertical height-hug width-6>
              <Text fill-neutral-500 typography-xs>
                700
              </Text>
            </Frame>
            <Frame alignment-center autolayout-vertical height-hug width-6>
              <Text fill-neutral-500 typography-xs>
                800
              </Text>
            </Frame>
            <Frame alignment-center autolayout-vertical height-hug width-6>
              <Text fill-neutral-500 typography-xs>
                900
              </Text>
            </Frame>
          </Frame>
          <Frame autolayout-vertical gap-0p5 height-hug width-hug>
            <Frame alignment-left autolayout-horizontal gap-0p5 height-hug width-hug>
              <Frame height-hug width-12>
                <Text fill-neutral-700 typography-xs>
                  red
                </Text>
              </Frame>
              <Frame corner-radius-xs fill-red-50 height-6 width-6 />
              <Frame corner-radius-xs fill-red-100 height-6 width-6 />
              <Frame corner-radius-xs fill-red-200 height-6 width-6 />
              <Frame corner-radius-xs fill-red-300 height-6 width-6 />
              <Frame corner-radius-xs fill-red-400 height-6 width-6 />
              <Frame corner-radius-xs fill-red-500 height-6 width-6 />
              <Frame corner-radius-xs fill-red-600 height-6 width-6 />
              <Frame corner-radius-xs fill-red-700 height-6 width-6 />
              <Frame corner-radius-xs fill-red-800 height-6 width-6 />
              <Frame corner-radius-xs fill-red-900 height-6 width-6 />
            </Frame>
            <Frame alignment-left autolayout-horizontal gap-0p5 height-hug width-hug>
              <Frame height-hug width-12>
                <Text fill-neutral-700 typography-xs>
                  orange
                </Text>
              </Frame>
              <Frame corner-radius-xs fill-orange-50 height-6 width-6 />
              <Frame corner-radius-xs fill-orange-100 height-6 width-6 />
              <Frame corner-radius-xs fill-orange-200 height-6 width-6 />
              <Frame corner-radius-xs fill-orange-300 height-6 width-6 />
              <Frame corner-radius-xs fill-orange-400 height-6 width-6 />
              <Frame corner-radius-xs fill-orange-500 height-6 width-6 />
              <Frame corner-radius-xs fill-orange-600 height-6 width-6 />
              <Frame corner-radius-xs fill-orange-700 height-6 width-6 />
              <Frame corner-radius-xs fill-orange-800 height-6 width-6 />
              <Frame corner-radius-xs fill-orange-900 height-6 width-6 />
            </Frame>
            <Frame alignment-left autolayout-horizontal gap-0p5 height-hug width-hug>
              <Frame height-hug width-12>
                <Text fill-neutral-700 typography-xs>
                  amber
                </Text>
              </Frame>
              <Frame corner-radius-xs fill-amber-50 height-6 width-6 />
              <Frame corner-radius-xs fill-amber-100 height-6 width-6 />
              <Frame corner-radius-xs fill-amber-200 height-6 width-6 />
              <Frame corner-radius-xs fill-amber-300 height-6 width-6 />
              <Frame corner-radius-xs fill-amber-400 height-6 width-6 />
              <Frame corner-radius-xs fill-amber-500 height-6 width-6 />
              <Frame corner-radius-xs fill-amber-600 height-6 width-6 />
              <Frame corner-radius-xs fill-amber-700 height-6 width-6 />
              <Frame corner-radius-xs fill-amber-800 height-6 width-6 />
              <Frame corner-radius-xs fill-amber-900 height-6 width-6 />
            </Frame>
            <Frame alignment-left autolayout-horizontal gap-0p5 height-hug width-hug>
              <Frame height-hug width-12>
                <Text fill-neutral-700 typography-xs>
                  yellow
                </Text>
              </Frame>
              <Frame corner-radius-xs fill-yellow-50 height-6 width-6 />
              <Frame corner-radius-xs fill-yellow-100 height-6 width-6 />
              <Frame corner-radius-xs fill-yellow-200 height-6 width-6 />
              <Frame corner-radius-xs fill-yellow-300 height-6 width-6 />
              <Frame corner-radius-xs fill-yellow-400 height-6 width-6 />
              <Frame corner-radius-xs fill-yellow-500 height-6 width-6 />
              <Frame corner-radius-xs fill-yellow-600 height-6 width-6 />
              <Frame corner-radius-xs fill-yellow-700 height-6 width-6 />
              <Frame corner-radius-xs fill-yellow-800 height-6 width-6 />
              <Frame corner-radius-xs fill-yellow-900 height-6 width-6 />
            </Frame>
            <Frame alignment-left autolayout-horizontal gap-0p5 height-hug width-hug>
              <Frame height-hug width-12>
                <Text fill-neutral-700 typography-xs>
                  lime
                </Text>
              </Frame>
              <Frame corner-radius-xs fill-lime-50 height-6 width-6 />
              <Frame corner-radius-xs fill-lime-100 height-6 width-6 />
              <Frame corner-radius-xs fill-lime-200 height-6 width-6 />
              <Frame corner-radius-xs fill-lime-300 height-6 width-6 />
              <Frame corner-radius-xs fill-lime-400 height-6 width-6 />
              <Frame corner-radius-xs fill-lime-500 height-6 width-6 />
              <Frame corner-radius-xs fill-lime-600 height-6 width-6 />
              <Frame corner-radius-xs fill-lime-700 height-6 width-6 />
              <Frame corner-radius-xs fill-lime-800 height-6 width-6 />
              <Frame corner-radius-xs fill-lime-900 height-6 width-6 />
            </Frame>
            <Frame alignment-left autolayout-horizontal gap-0p5 height-hug width-hug>
              <Frame height-hug width-12>
                <Text fill-neutral-700 typography-xs>
                  green
                </Text>
              </Frame>
              <Frame corner-radius-xs fill-green-50 height-6 width-6 />
              <Frame corner-radius-xs fill-green-100 height-6 width-6 />
              <Frame corner-radius-xs fill-green-200 height-6 width-6 />
              <Frame corner-radius-xs fill-green-300 height-6 width-6 />
              <Frame corner-radius-xs fill-green-400 height-6 width-6 />
              <Frame corner-radius-xs fill-green-500 height-6 width-6 />
              <Frame corner-radius-xs fill-green-600 height-6 width-6 />
              <Frame corner-radius-xs fill-green-700 height-6 width-6 />
              <Frame corner-radius-xs fill-green-800 height-6 width-6 />
              <Frame corner-radius-xs fill-green-900 height-6 width-6 />
            </Frame>
            <Frame alignment-left autolayout-horizontal gap-0p5 height-hug width-hug>
              <Frame height-hug width-12>
                <Text fill-neutral-700 typography-xs>
                  emerald
                </Text>
              </Frame>
              <Frame corner-radius-xs fill-emerald-50 height-6 width-6 />
              <Frame corner-radius-xs fill-emerald-100 height-6 width-6 />
              <Frame corner-radius-xs fill-emerald-200 height-6 width-6 />
              <Frame corner-radius-xs fill-emerald-300 height-6 width-6 />
              <Frame corner-radius-xs fill-emerald-400 height-6 width-6 />
              <Frame corner-radius-xs fill-emerald-500 height-6 width-6 />
              <Frame corner-radius-xs fill-emerald-600 height-6 width-6 />
              <Frame corner-radius-xs fill-emerald-700 height-6 width-6 />
              <Frame corner-radius-xs fill-emerald-800 height-6 width-6 />
              <Frame corner-radius-xs fill-emerald-900 height-6 width-6 />
            </Frame>
            <Frame alignment-left autolayout-horizontal gap-0p5 height-hug width-hug>
              <Frame height-hug width-12>
                <Text fill-neutral-700 typography-xs>
                  teal
                </Text>
              </Frame>
              <Frame corner-radius-xs fill-teal-50 height-6 width-6 />
              <Frame corner-radius-xs fill-teal-100 height-6 width-6 />
              <Frame corner-radius-xs fill-teal-200 height-6 width-6 />
              <Frame corner-radius-xs fill-teal-300 height-6 width-6 />
              <Frame corner-radius-xs fill-teal-400 height-6 width-6 />
              <Frame corner-radius-xs fill-teal-500 height-6 width-6 />
              <Frame corner-radius-xs fill-teal-600 height-6 width-6 />
              <Frame corner-radius-xs fill-teal-700 height-6 width-6 />
              <Frame corner-radius-xs fill-teal-800 height-6 width-6 />
              <Frame corner-radius-xs fill-teal-900 height-6 width-6 />
            </Frame>
            <Frame alignment-left autolayout-horizontal gap-0p5 height-hug width-hug>
              <Frame height-hug width-12>
                <Text fill-neutral-700 typography-xs>
                  cyan
                </Text>
              </Frame>
              <Frame corner-radius-xs fill-cyan-50 height-6 width-6 />
              <Frame corner-radius-xs fill-cyan-100 height-6 width-6 />
              <Frame corner-radius-xs fill-cyan-200 height-6 width-6 />
              <Frame corner-radius-xs fill-cyan-300 height-6 width-6 />
              <Frame corner-radius-xs fill-cyan-400 height-6 width-6 />
              <Frame corner-radius-xs fill-cyan-500 height-6 width-6 />
              <Frame corner-radius-xs fill-cyan-600 height-6 width-6 />
              <Frame corner-radius-xs fill-cyan-700 height-6 width-6 />
              <Frame corner-radius-xs fill-cyan-800 height-6 width-6 />
              <Frame corner-radius-xs fill-cyan-900 height-6 width-6 />
            </Frame>
            <Frame alignment-left autolayout-horizontal gap-0p5 height-hug width-hug>
              <Frame height-hug width-12>
                <Text fill-neutral-700 typography-xs>
                  sky
                </Text>
              </Frame>
              <Frame corner-radius-xs fill-sky-50 height-6 width-6 />
              <Frame corner-radius-xs fill-sky-100 height-6 width-6 />
              <Frame corner-radius-xs fill-sky-200 height-6 width-6 />
              <Frame corner-radius-xs fill-sky-300 height-6 width-6 />
              <Frame corner-radius-xs fill-sky-400 height-6 width-6 />
              <Frame corner-radius-xs fill-sky-500 height-6 width-6 />
              <Frame corner-radius-xs fill-sky-600 height-6 width-6 />
              <Frame corner-radius-xs fill-sky-700 height-6 width-6 />
              <Frame corner-radius-xs fill-sky-800 height-6 width-6 />
              <Frame corner-radius-xs fill-sky-900 height-6 width-6 />
            </Frame>
            <Frame alignment-left autolayout-horizontal gap-0p5 height-hug width-hug>
              <Frame height-hug width-12>
                <Text fill-neutral-700 typography-xs>
                  blue
                </Text>
              </Frame>
              <Frame corner-radius-xs fill-blue-50 height-6 width-6 />
              <Frame corner-radius-xs fill-blue-100 height-6 width-6 />
              <Frame corner-radius-xs fill-blue-200 height-6 width-6 />
              <Frame corner-radius-xs fill-blue-300 height-6 width-6 />
              <Frame corner-radius-xs fill-blue-400 height-6 width-6 />
              <Frame corner-radius-xs fill-blue-500 height-6 width-6 />
              <Frame corner-radius-xs fill-blue-600 height-6 width-6 />
              <Frame corner-radius-xs fill-blue-700 height-6 width-6 />
              <Frame corner-radius-xs fill-blue-800 height-6 width-6 />
              <Frame corner-radius-xs fill-blue-900 height-6 width-6 />
            </Frame>
            <Frame alignment-left autolayout-horizontal gap-0p5 height-hug width-hug>
              <Frame height-hug width-12>
                <Text fill-neutral-700 typography-xs>
                  indigo
                </Text>
              </Frame>
              <Frame corner-radius-xs fill-indigo-50 height-6 width-6 />
              <Frame corner-radius-xs fill-indigo-100 height-6 width-6 />
              <Frame corner-radius-xs fill-indigo-200 height-6 width-6 />
              <Frame corner-radius-xs fill-indigo-300 height-6 width-6 />
              <Frame corner-radius-xs fill-indigo-400 height-6 width-6 />
              <Frame corner-radius-xs fill-indigo-500 height-6 width-6 />
              <Frame corner-radius-xs fill-indigo-600 height-6 width-6 />
              <Frame corner-radius-xs fill-indigo-700 height-6 width-6 />
              <Frame corner-radius-xs fill-indigo-800 height-6 width-6 />
              <Frame corner-radius-xs fill-indigo-900 height-6 width-6 />
            </Frame>
            <Frame alignment-left autolayout-horizontal gap-0p5 height-hug width-hug>
              <Frame height-hug width-12>
                <Text fill-neutral-700 typography-xs>
                  violet
                </Text>
              </Frame>
              <Frame corner-radius-xs fill-violet-50 height-6 width-6 />
              <Frame corner-radius-xs fill-violet-100 height-6 width-6 />
              <Frame corner-radius-xs fill-violet-200 height-6 width-6 />
              <Frame corner-radius-xs fill-violet-300 height-6 width-6 />
              <Frame corner-radius-xs fill-violet-400 height-6 width-6 />
              <Frame corner-radius-xs fill-violet-500 height-6 width-6 />
              <Frame corner-radius-xs fill-violet-600 height-6 width-6 />
              <Frame corner-radius-xs fill-violet-700 height-6 width-6 />
              <Frame corner-radius-xs fill-violet-800 height-6 width-6 />
              <Frame corner-radius-xs fill-violet-900 height-6 width-6 />
            </Frame>
            <Frame alignment-left autolayout-horizontal gap-0p5 height-hug width-hug>
              <Frame height-hug width-12>
                <Text fill-neutral-700 typography-xs>
                  purple
                </Text>
              </Frame>
              <Frame corner-radius-xs fill-purple-50 height-6 width-6 />
              <Frame corner-radius-xs fill-purple-100 height-6 width-6 />
              <Frame corner-radius-xs fill-purple-200 height-6 width-6 />
              <Frame corner-radius-xs fill-purple-300 height-6 width-6 />
              <Frame corner-radius-xs fill-purple-400 height-6 width-6 />
              <Frame corner-radius-xs fill-purple-500 height-6 width-6 />
              <Frame corner-radius-xs fill-purple-600 height-6 width-6 />
              <Frame corner-radius-xs fill-purple-700 height-6 width-6 />
              <Frame corner-radius-xs fill-purple-800 height-6 width-6 />
              <Frame corner-radius-xs fill-purple-900 height-6 width-6 />
            </Frame>
            <Frame alignment-left autolayout-horizontal gap-0p5 height-hug width-hug>
              <Frame height-hug width-12>
                <Text fill-neutral-700 typography-xs>
                  fuchsia
                </Text>
              </Frame>
              <Frame corner-radius-xs fill-fuchsia-50 height-6 width-6 />
              <Frame corner-radius-xs fill-fuchsia-100 height-6 width-6 />
              <Frame corner-radius-xs fill-fuchsia-200 height-6 width-6 />
              <Frame corner-radius-xs fill-fuchsia-300 height-6 width-6 />
              <Frame corner-radius-xs fill-fuchsia-400 height-6 width-6 />
              <Frame corner-radius-xs fill-fuchsia-500 height-6 width-6 />
              <Frame corner-radius-xs fill-fuchsia-600 height-6 width-6 />
              <Frame corner-radius-xs fill-fuchsia-700 height-6 width-6 />
              <Frame corner-radius-xs fill-fuchsia-800 height-6 width-6 />
              <Frame corner-radius-xs fill-fuchsia-900 height-6 width-6 />
            </Frame>
            <Frame alignment-left autolayout-horizontal gap-0p5 height-hug width-hug>
              <Frame height-hug width-12>
                <Text fill-neutral-700 typography-xs>
                  pink
                </Text>
              </Frame>
              <Frame corner-radius-xs fill-pink-50 height-6 width-6 />
              <Frame corner-radius-xs fill-pink-100 height-6 width-6 />
              <Frame corner-radius-xs fill-pink-200 height-6 width-6 />
              <Frame corner-radius-xs fill-pink-300 height-6 width-6 />
              <Frame corner-radius-xs fill-pink-400 height-6 width-6 />
              <Frame corner-radius-xs fill-pink-500 height-6 width-6 />
              <Frame corner-radius-xs fill-pink-600 height-6 width-6 />
              <Frame corner-radius-xs fill-pink-700 height-6 width-6 />
              <Frame corner-radius-xs fill-pink-800 height-6 width-6 />
              <Frame corner-radius-xs fill-pink-900 height-6 width-6 />
            </Frame>
            <Frame alignment-left autolayout-horizontal gap-0p5 height-hug width-hug>
              <Frame height-hug width-12>
                <Text fill-neutral-700 typography-xs>
                  rose
                </Text>
              </Frame>
              <Frame corner-radius-xs fill-rose-50 height-6 width-6 />
              <Frame corner-radius-xs fill-rose-100 height-6 width-6 />
              <Frame corner-radius-xs fill-rose-200 height-6 width-6 />
              <Frame corner-radius-xs fill-rose-300 height-6 width-6 />
              <Frame corner-radius-xs fill-rose-400 height-6 width-6 />
              <Frame corner-radius-xs fill-rose-500 height-6 width-6 />
              <Frame corner-radius-xs fill-rose-600 height-6 width-6 />
              <Frame corner-radius-xs fill-rose-700 height-6 width-6 />
              <Frame corner-radius-xs fill-rose-800 height-6 width-6 />
              <Frame corner-radius-xs fill-rose-900 height-6 width-6 />
            </Frame>
            <Frame alignment-left autolayout-horizontal gap-0p5 height-hug width-hug>
              <Frame height-hug width-12>
                <Text fill-neutral-700 typography-xs>
                  slate
                </Text>
              </Frame>
              <Frame corner-radius-xs fill-slate-50 height-6 width-6 />
              <Frame corner-radius-xs fill-slate-100 height-6 width-6 />
              <Frame corner-radius-xs fill-slate-200 height-6 width-6 />
              <Frame corner-radius-xs fill-slate-300 height-6 width-6 />
              <Frame corner-radius-xs fill-slate-400 height-6 width-6 />
              <Frame corner-radius-xs fill-slate-500 height-6 width-6 />
              <Frame corner-radius-xs fill-slate-600 height-6 width-6 />
              <Frame corner-radius-xs fill-slate-700 height-6 width-6 />
              <Frame corner-radius-xs fill-slate-800 height-6 width-6 />
              <Frame corner-radius-xs fill-slate-900 height-6 width-6 />
            </Frame>
            <Frame alignment-left autolayout-horizontal gap-0p5 height-hug width-hug>
              <Frame height-hug width-12>
                <Text fill-neutral-700 typography-xs>
                  gray
                </Text>
              </Frame>
              <Frame corner-radius-xs fill-gray-50 height-6 width-6 />
              <Frame corner-radius-xs fill-gray-100 height-6 width-6 />
              <Frame corner-radius-xs fill-gray-200 height-6 width-6 />
              <Frame corner-radius-xs fill-gray-300 height-6 width-6 />
              <Frame corner-radius-xs fill-gray-400 height-6 width-6 />
              <Frame corner-radius-xs fill-gray-500 height-6 width-6 />
              <Frame corner-radius-xs fill-gray-600 height-6 width-6 />
              <Frame corner-radius-xs fill-gray-700 height-6 width-6 />
              <Frame corner-radius-xs fill-gray-800 height-6 width-6 />
              <Frame corner-radius-xs fill-gray-900 height-6 width-6 />
            </Frame>
            <Frame alignment-left autolayout-horizontal gap-0p5 height-hug width-hug>
              <Frame height-hug width-12>
                <Text fill-neutral-700 typography-xs>
                  zinc
                </Text>
              </Frame>
              <Frame corner-radius-xs fill-zinc-50 height-6 width-6 />
              <Frame corner-radius-xs fill-zinc-100 height-6 width-6 />
              <Frame corner-radius-xs fill-zinc-200 height-6 width-6 />
              <Frame corner-radius-xs fill-zinc-300 height-6 width-6 />
              <Frame corner-radius-xs fill-zinc-400 height-6 width-6 />
              <Frame corner-radius-xs fill-zinc-500 height-6 width-6 />
              <Frame corner-radius-xs fill-zinc-600 height-6 width-6 />
              <Frame corner-radius-xs fill-zinc-700 height-6 width-6 />
              <Frame corner-radius-xs fill-zinc-800 height-6 width-6 />
              <Frame corner-radius-xs fill-zinc-900 height-6 width-6 />
            </Frame>
            <Frame alignment-left autolayout-horizontal gap-0p5 height-hug width-hug>
              <Frame height-hug width-12>
                <Text fill-neutral-700 typography-xs>
                  neutral
                </Text>
              </Frame>
              <Frame corner-radius-xs fill-neutral-50 height-6 width-6 />
              <Frame corner-radius-xs fill-neutral-100 height-6 width-6 />
              <Frame corner-radius-xs fill-neutral-200 height-6 width-6 />
              <Frame corner-radius-xs fill-neutral-300 height-6 width-6 />
              <Frame corner-radius-xs fill-neutral-400 height-6 width-6 />
              <Frame corner-radius-xs fill-neutral-500 height-6 width-6 />
              <Frame corner-radius-xs fill-neutral-600 height-6 width-6 />
              <Frame corner-radius-xs fill-neutral-700 height-6 width-6 />
              <Frame corner-radius-xs fill-neutral-800 height-6 width-6 />
              <Frame corner-radius-xs fill-neutral-900 height-6 width-6 />
            </Frame>
            <Frame alignment-left autolayout-horizontal gap-0p5 height-hug width-hug>
              <Frame height-hug width-12>
                <Text fill-neutral-700 typography-xs>
                  stone
                </Text>
              </Frame>
              <Frame corner-radius-xs fill-stone-50 height-6 width-6 />
              <Frame corner-radius-xs fill-stone-100 height-6 width-6 />
              <Frame corner-radius-xs fill-stone-200 height-6 width-6 />
              <Frame corner-radius-xs fill-stone-300 height-6 width-6 />
              <Frame corner-radius-xs fill-stone-400 height-6 width-6 />
              <Frame corner-radius-xs fill-stone-500 height-6 width-6 />
              <Frame corner-radius-xs fill-stone-600 height-6 width-6 />
              <Frame corner-radius-xs fill-stone-700 height-6 width-6 />
              <Frame corner-radius-xs fill-stone-800 height-6 width-6 />
              <Frame corner-radius-xs fill-stone-900 height-6 width-6 />
            </Frame>
          </Frame>
          <Cases>
            <Case label="white">
              <Frame corner-radius-md fill-white height-12 stroke-neutral-300 width-12 />
            </Case>
            <Case label="black">
              <Frame corner-radius-md fill-black height-12 stroke-neutral-300 width-12 />
            </Case>
            <Case label="transparent">
              <Frame corner-radius-md fill-transparent height-12 stroke-neutral-300 width-12 />
            </Case>
          </Cases>
          <Caption>Text in every hue's 600</Caption>
          <Frame autolayout-horizontal gap-2 height-hug width-fill wrap>
            <Text fill-red-600 typography-sm>
              red
            </Text>
            <Text fill-orange-600 typography-sm>
              orange
            </Text>
            <Text fill-amber-600 typography-sm>
              amber
            </Text>
            <Text fill-yellow-600 typography-sm>
              yellow
            </Text>
            <Text fill-lime-600 typography-sm>
              lime
            </Text>
            <Text fill-green-600 typography-sm>
              green
            </Text>
            <Text fill-emerald-600 typography-sm>
              emerald
            </Text>
            <Text fill-teal-600 typography-sm>
              teal
            </Text>
            <Text fill-cyan-600 typography-sm>
              cyan
            </Text>
            <Text fill-sky-600 typography-sm>
              sky
            </Text>
            <Text fill-blue-600 typography-sm>
              blue
            </Text>
            <Text fill-indigo-600 typography-sm>
              indigo
            </Text>
            <Text fill-violet-600 typography-sm>
              violet
            </Text>
            <Text fill-purple-600 typography-sm>
              purple
            </Text>
            <Text fill-fuchsia-600 typography-sm>
              fuchsia
            </Text>
            <Text fill-pink-600 typography-sm>
              pink
            </Text>
            <Text fill-rose-600 typography-sm>
              rose
            </Text>
            <Text fill-slate-600 typography-sm>
              slate
            </Text>
            <Text fill-gray-600 typography-sm>
              gray
            </Text>
            <Text fill-zinc-600 typography-sm>
              zinc
            </Text>
            <Text fill-neutral-600 typography-sm>
              neutral
            </Text>
            <Text fill-stone-600 typography-sm>
              stone
            </Text>
          </Frame>
        </Section>

        <Section title="10. Strokes" note="A 1px inside stroke in every hue's 500, solid then dashed, on white frames.">
          <Cases>
            <Case label="red-500">
              <Frame corner-radius-md fill-white height-10 stroke-red-500 width-10 />
            </Case>
            <Case label="orange-500">
              <Frame corner-radius-md fill-white height-10 stroke-orange-500 width-10 />
            </Case>
            <Case label="amber-500">
              <Frame corner-radius-md fill-white height-10 stroke-amber-500 width-10 />
            </Case>
            <Case label="yellow-500">
              <Frame corner-radius-md fill-white height-10 stroke-yellow-500 width-10 />
            </Case>
            <Case label="lime-500">
              <Frame corner-radius-md fill-white height-10 stroke-lime-500 width-10 />
            </Case>
            <Case label="green-500">
              <Frame corner-radius-md fill-white height-10 stroke-green-500 width-10 />
            </Case>
            <Case label="emerald-500">
              <Frame corner-radius-md fill-white height-10 stroke-emerald-500 width-10 />
            </Case>
            <Case label="teal-500">
              <Frame corner-radius-md fill-white height-10 stroke-teal-500 width-10 />
            </Case>
            <Case label="cyan-500">
              <Frame corner-radius-md fill-white height-10 stroke-cyan-500 width-10 />
            </Case>
            <Case label="sky-500">
              <Frame corner-radius-md fill-white height-10 stroke-sky-500 width-10 />
            </Case>
            <Case label="blue-500">
              <Frame corner-radius-md fill-white height-10 stroke-blue-500 width-10 />
            </Case>
            <Case label="indigo-500">
              <Frame corner-radius-md fill-white height-10 stroke-indigo-500 width-10 />
            </Case>
            <Case label="violet-500">
              <Frame corner-radius-md fill-white height-10 stroke-violet-500 width-10 />
            </Case>
            <Case label="purple-500">
              <Frame corner-radius-md fill-white height-10 stroke-purple-500 width-10 />
            </Case>
            <Case label="fuchsia-500">
              <Frame corner-radius-md fill-white height-10 stroke-fuchsia-500 width-10 />
            </Case>
            <Case label="pink-500">
              <Frame corner-radius-md fill-white height-10 stroke-pink-500 width-10 />
            </Case>
            <Case label="rose-500">
              <Frame corner-radius-md fill-white height-10 stroke-rose-500 width-10 />
            </Case>
            <Case label="slate-500">
              <Frame corner-radius-md fill-white height-10 stroke-slate-500 width-10 />
            </Case>
            <Case label="gray-500">
              <Frame corner-radius-md fill-white height-10 stroke-gray-500 width-10 />
            </Case>
            <Case label="zinc-500">
              <Frame corner-radius-md fill-white height-10 stroke-zinc-500 width-10 />
            </Case>
            <Case label="neutral-500">
              <Frame corner-radius-md fill-white height-10 stroke-neutral-500 width-10 />
            </Case>
            <Case label="stone-500">
              <Frame corner-radius-md fill-white height-10 stroke-stone-500 width-10 />
            </Case>
          </Cases>
          <Cases>
            <Case label="red-500">
              <Frame corner-radius-md fill-white height-10 stroke-red-500 stroke-style-dashed width-10 />
            </Case>
            <Case label="orange-500">
              <Frame corner-radius-md fill-white height-10 stroke-orange-500 stroke-style-dashed width-10 />
            </Case>
            <Case label="amber-500">
              <Frame corner-radius-md fill-white height-10 stroke-amber-500 stroke-style-dashed width-10 />
            </Case>
            <Case label="yellow-500">
              <Frame corner-radius-md fill-white height-10 stroke-yellow-500 stroke-style-dashed width-10 />
            </Case>
            <Case label="lime-500">
              <Frame corner-radius-md fill-white height-10 stroke-lime-500 stroke-style-dashed width-10 />
            </Case>
            <Case label="green-500">
              <Frame corner-radius-md fill-white height-10 stroke-green-500 stroke-style-dashed width-10 />
            </Case>
            <Case label="emerald-500">
              <Frame corner-radius-md fill-white height-10 stroke-emerald-500 stroke-style-dashed width-10 />
            </Case>
            <Case label="teal-500">
              <Frame corner-radius-md fill-white height-10 stroke-teal-500 stroke-style-dashed width-10 />
            </Case>
            <Case label="cyan-500">
              <Frame corner-radius-md fill-white height-10 stroke-cyan-500 stroke-style-dashed width-10 />
            </Case>
            <Case label="sky-500">
              <Frame corner-radius-md fill-white height-10 stroke-sky-500 stroke-style-dashed width-10 />
            </Case>
            <Case label="blue-500">
              <Frame corner-radius-md fill-white height-10 stroke-blue-500 stroke-style-dashed width-10 />
            </Case>
            <Case label="indigo-500">
              <Frame corner-radius-md fill-white height-10 stroke-indigo-500 stroke-style-dashed width-10 />
            </Case>
            <Case label="violet-500">
              <Frame corner-radius-md fill-white height-10 stroke-violet-500 stroke-style-dashed width-10 />
            </Case>
            <Case label="purple-500">
              <Frame corner-radius-md fill-white height-10 stroke-purple-500 stroke-style-dashed width-10 />
            </Case>
            <Case label="fuchsia-500">
              <Frame corner-radius-md fill-white height-10 stroke-fuchsia-500 stroke-style-dashed width-10 />
            </Case>
            <Case label="pink-500">
              <Frame corner-radius-md fill-white height-10 stroke-pink-500 stroke-style-dashed width-10 />
            </Case>
            <Case label="rose-500">
              <Frame corner-radius-md fill-white height-10 stroke-rose-500 stroke-style-dashed width-10 />
            </Case>
            <Case label="slate-500">
              <Frame corner-radius-md fill-white height-10 stroke-slate-500 stroke-style-dashed width-10 />
            </Case>
            <Case label="gray-500">
              <Frame corner-radius-md fill-white height-10 stroke-gray-500 stroke-style-dashed width-10 />
            </Case>
            <Case label="zinc-500">
              <Frame corner-radius-md fill-white height-10 stroke-zinc-500 stroke-style-dashed width-10 />
            </Case>
            <Case label="neutral-500">
              <Frame corner-radius-md fill-white height-10 stroke-neutral-500 stroke-style-dashed width-10 />
            </Case>
            <Case label="stone-500">
              <Frame corner-radius-md fill-white height-10 stroke-stone-500 stroke-style-dashed width-10 />
            </Case>
          </Cases>
          <Cases>
            <Case label="black on white">
              <Frame fill-white height-10 stroke-black width-10 />
            </Case>
            <Case label="white on black">
              <Frame fill-black height-10 stroke-white width-10 />
            </Case>
            <Case label="stroke, no fill">
              <Frame corner-radius-full height-10 stroke-neutral-900 width-10 />
            </Case>
          </Cases>
        </Section>

        <Section
          title="11. Hover"
          note="Hover each box on web: fill-hover- swaps the fill, stroke-hover- the stroke, and a tailwind-group frame recolors its text. Native ignores hover."
        >
          <Cases>
            <Case label="hover red-500">
              <Frame corner-radius-lg fill-hover-red-500 fill-neutral-200 height-12 width-12 />
            </Case>
            <Case label="hover orange-500">
              <Frame corner-radius-lg fill-hover-orange-500 fill-neutral-200 height-12 width-12 />
            </Case>
            <Case label="hover amber-500">
              <Frame corner-radius-lg fill-hover-amber-500 fill-neutral-200 height-12 width-12 />
            </Case>
            <Case label="hover yellow-500">
              <Frame corner-radius-lg fill-hover-yellow-500 fill-neutral-200 height-12 width-12 />
            </Case>
            <Case label="hover lime-500">
              <Frame corner-radius-lg fill-hover-lime-500 fill-neutral-200 height-12 width-12 />
            </Case>
            <Case label="hover green-500">
              <Frame corner-radius-lg fill-hover-green-500 fill-neutral-200 height-12 width-12 />
            </Case>
            <Case label="hover emerald-500">
              <Frame corner-radius-lg fill-hover-emerald-500 fill-neutral-200 height-12 width-12 />
            </Case>
            <Case label="hover teal-500">
              <Frame corner-radius-lg fill-hover-teal-500 fill-neutral-200 height-12 width-12 />
            </Case>
          </Cases>
          <Cases>
            <Case label="fill-hover-black">
              <Frame alignment-center corner-radius-3xl fill-blue-600 fill-hover-black height-10 padding-horizontal-4>
                <Text fill-white typography-sm>
                  Button
                </Text>
              </Frame>
            </Case>
            <Case label="stroke-hover-red-500">
              <Frame corner-radius-lg fill-white height-12 stroke-hover-red-500 stroke-neutral-300 width-12 />
            </Case>
            <Case label="fill and stroke hover">
              <Frame
                corner-radius-lg
                fill-hover-emerald-100
                fill-white
                height-12
                stroke-emerald-300
                stroke-hover-emerald-700
                width-12
              />
            </Case>
            <Case label="text fill-hover">
              <Text fill-hover-pink-600 fill-neutral-900 typography-base>
                Hover this text
              </Text>
            </Case>
            <Case label="tailwind-group">
              <Frame corner-radius-lg fill-hover-neutral-900 fill-white padding-3 tailwind-group>
                <Text fill-hover-white fill-neutral-900 tailwind-group-hover-fill typography-sm>
                  Hover the frame
                </Text>
              </Frame>
            </Case>
          </Cases>
        </Section>

        <Section
          title="12. Shadows"
          note="No shadow and every shadow on white 20 x 20 frames, then every shadow on a dark fill."
        >
          <Frame autolayout-horizontal gap-8 height-hug padding-4 width-fill wrap>
            <Case label="none">
              <Frame corner-radius-lg effect-shadow-none fill-white height-20 width-20 />
            </Case>
            <Case label="2xs">
              <Frame corner-radius-lg effect-shadow-2xs fill-white height-20 width-20 />
            </Case>
            <Case label="xs">
              <Frame corner-radius-lg effect-shadow-xs fill-white height-20 width-20 />
            </Case>
            <Case label="sm">
              <Frame corner-radius-lg effect-shadow-sm fill-white height-20 width-20 />
            </Case>
            <Case label="md">
              <Frame corner-radius-lg effect-shadow-md fill-white height-20 width-20 />
            </Case>
            <Case label="lg">
              <Frame corner-radius-lg effect-shadow-lg fill-white height-20 width-20 />
            </Case>
            <Case label="xl">
              <Frame corner-radius-lg effect-shadow-xl fill-white height-20 width-20 />
            </Case>
            <Case label="2xl">
              <Frame corner-radius-lg effect-shadow-2xl fill-white height-20 width-20 />
            </Case>
          </Frame>
          <Frame autolayout-horizontal fill-neutral-800 gap-8 height-hug padding-8 width-fill wrap>
            <Frame corner-radius-full effect-shadow-2xs fill-violet-500 height-12 width-12 />
            <Frame corner-radius-full effect-shadow-xs fill-violet-500 height-12 width-12 />
            <Frame corner-radius-full effect-shadow-sm fill-violet-500 height-12 width-12 />
            <Frame corner-radius-full effect-shadow-md fill-violet-500 height-12 width-12 />
            <Frame corner-radius-full effect-shadow-lg fill-violet-500 height-12 width-12 />
            <Frame corner-radius-full effect-shadow-xl fill-violet-500 height-12 width-12 />
            <Frame corner-radius-full effect-shadow-2xl fill-violet-500 height-12 width-12 />
          </Frame>
        </Section>

        <Section title="13. Text sizes" note="Every typography size with its token font size.">
          <Text fill-black typography-xs>
            xs 12px {PANGRAM}
          </Text>
          <Text fill-black typography-sm>
            sm 14px {PANGRAM}
          </Text>
          <Text fill-black typography-base>
            base 16px {PANGRAM}
          </Text>
          <Text fill-black typography-lg>
            lg 18px {PANGRAM}
          </Text>
          <Text fill-black typography-xl>
            xl 20px {PANGRAM}
          </Text>
          <Text fill-black typography-2xl>
            2xl 24px {PANGRAM}
          </Text>
          <Text fill-black typography-3xl>
            3xl 30px {PANGRAM}
          </Text>
          <Text fill-black typography-4xl>
            4xl 36px {PANGRAM}
          </Text>
          <Text fill-black typography-5xl>
            5xl 48px {PANGRAM}
          </Text>
          <Text fill-black typography-6xl>
            6xl 60px {PANGRAM}
          </Text>
          <Text fill-black typography-7xl>
            7xl 72px {PANGRAM}
          </Text>
          <Text fill-black typography-8xl>
            8xl 96px {PANGRAM}
          </Text>
          <Text fill-black typography-9xl>
            9xl 128px {PANGRAM}
          </Text>
        </Section>

        <Section
          title="14. Text wrapping and overflow"
          note="Each size in a 32-wide frame and a fill frame. Text wraps at spaces, and a word too long for its frame breaks mid-word."
        >
          <Frame autolayout-vertical gap-1 height-hug width-fill>
            <Caption>xs</Caption>
            <Frame alignment-top-left autolayout-horizontal gap-2 height-hug width-fill>
              <Frame fill-white autolayout-vertical padding-2 width-32>
                <Text fill-black typography-xs>
                  {PANGRAM}
                </Text>
              </Frame>
              <Frame fill-white autolayout-vertical padding-2 width-fill>
                <Text fill-black typography-xs>
                  {LOREM_LONG}
                </Text>
              </Frame>
            </Frame>
          </Frame>
          <Frame autolayout-vertical gap-1 height-hug width-fill>
            <Caption>sm</Caption>
            <Frame alignment-top-left autolayout-horizontal gap-2 height-hug width-fill>
              <Frame fill-white autolayout-vertical padding-2 width-32>
                <Text fill-black typography-sm>
                  {PANGRAM}
                </Text>
              </Frame>
              <Frame fill-white autolayout-vertical padding-2 width-fill>
                <Text fill-black typography-sm>
                  {LOREM_LONG}
                </Text>
              </Frame>
            </Frame>
          </Frame>
          <Frame autolayout-vertical gap-1 height-hug width-fill>
            <Caption>base</Caption>
            <Frame alignment-top-left autolayout-horizontal gap-2 height-hug width-fill>
              <Frame fill-white autolayout-vertical padding-2 width-32>
                <Text fill-black typography-base>
                  {PANGRAM}
                </Text>
              </Frame>
              <Frame fill-white autolayout-vertical padding-2 width-fill>
                <Text fill-black typography-base>
                  {LOREM}
                </Text>
              </Frame>
            </Frame>
          </Frame>
          <Frame autolayout-vertical gap-1 height-hug width-fill>
            <Caption>lg</Caption>
            <Frame alignment-top-left autolayout-horizontal gap-2 height-hug width-fill>
              <Frame fill-white autolayout-vertical padding-2 width-32>
                <Text fill-black typography-lg>
                  {PANGRAM}
                </Text>
              </Frame>
              <Frame fill-white autolayout-vertical padding-2 width-fill>
                <Text fill-black typography-lg>
                  {LOREM}
                </Text>
              </Frame>
            </Frame>
          </Frame>
          <Frame autolayout-vertical gap-1 height-hug width-fill>
            <Caption>xl</Caption>
            <Frame alignment-top-left autolayout-horizontal gap-2 height-hug width-fill>
              <Frame fill-white autolayout-vertical padding-2 width-32>
                <Text fill-black typography-xl>
                  {PANGRAM}
                </Text>
              </Frame>
              <Frame fill-white autolayout-vertical padding-2 width-fill>
                <Text fill-black typography-xl>
                  {LOREM}
                </Text>
              </Frame>
            </Frame>
          </Frame>
          <Frame autolayout-vertical gap-1 height-hug width-fill>
            <Caption>2xl</Caption>
            <Frame alignment-top-left autolayout-horizontal gap-2 height-hug width-fill>
              <Frame fill-white autolayout-vertical padding-2 width-32>
                <Text fill-black typography-2xl>
                  {PANGRAM}
                </Text>
              </Frame>
              <Frame fill-white autolayout-vertical padding-2 width-fill>
                <Text fill-black typography-2xl>
                  {LOREM}
                </Text>
              </Frame>
            </Frame>
          </Frame>
          <Frame autolayout-vertical gap-1 height-hug width-fill>
            <Caption>3xl</Caption>
            <Frame alignment-top-left autolayout-horizontal gap-2 height-hug width-fill>
              <Frame fill-white autolayout-vertical padding-2 width-32>
                <Text fill-black typography-3xl>
                  {PANGRAM}
                </Text>
              </Frame>
              <Frame fill-white autolayout-vertical padding-2 width-fill>
                <Text fill-black typography-3xl>
                  {LOREM}
                </Text>
              </Frame>
            </Frame>
          </Frame>
          <Frame autolayout-vertical gap-1 height-hug width-fill>
            <Caption>4xl</Caption>
            <Frame alignment-top-left autolayout-horizontal gap-2 height-hug width-fill>
              <Frame fill-white autolayout-vertical padding-2 width-32>
                <Text fill-black typography-4xl>
                  {PANGRAM}
                </Text>
              </Frame>
              <Frame fill-white autolayout-vertical padding-2 width-fill>
                <Text fill-black typography-4xl>
                  {LOREM}
                </Text>
              </Frame>
            </Frame>
          </Frame>
          <Frame autolayout-vertical gap-1 height-hug width-fill>
            <Caption>5xl</Caption>
            <Frame alignment-top-left autolayout-horizontal gap-2 height-hug width-fill>
              <Frame fill-white autolayout-vertical padding-2 width-32>
                <Text fill-black typography-5xl>
                  {PANGRAM}
                </Text>
              </Frame>
              <Frame fill-white autolayout-vertical padding-2 width-fill>
                <Text fill-black typography-5xl>
                  {LOREM}
                </Text>
              </Frame>
            </Frame>
          </Frame>
          <Frame autolayout-vertical gap-1 height-hug width-fill>
            <Caption>6xl</Caption>
            <Frame alignment-top-left autolayout-horizontal gap-2 height-hug width-fill>
              <Frame fill-white autolayout-vertical padding-2 width-32>
                <Text fill-black typography-6xl>
                  {PANGRAM}
                </Text>
              </Frame>
              <Frame fill-white autolayout-vertical padding-2 width-fill>
                <Text fill-black typography-6xl>
                  {LOREM}
                </Text>
              </Frame>
            </Frame>
          </Frame>
          <Frame autolayout-vertical gap-1 height-hug width-fill>
            <Caption>7xl</Caption>
            <Frame alignment-top-left autolayout-horizontal gap-2 height-hug width-fill>
              <Frame fill-white autolayout-vertical padding-2 width-32>
                <Text fill-black typography-7xl>
                  {PANGRAM}
                </Text>
              </Frame>
              <Frame fill-white autolayout-vertical padding-2 width-fill>
                <Text fill-black typography-7xl>
                  {LOREM}
                </Text>
              </Frame>
            </Frame>
          </Frame>
          <Frame autolayout-vertical gap-1 height-hug width-fill>
            <Caption>8xl</Caption>
            <Frame alignment-top-left autolayout-horizontal gap-2 height-hug width-fill>
              <Frame fill-white autolayout-vertical padding-2 width-32>
                <Text fill-black typography-8xl>
                  {PANGRAM}
                </Text>
              </Frame>
              <Frame fill-white autolayout-vertical padding-2 width-fill>
                <Text fill-black typography-8xl>
                  {LOREM}
                </Text>
              </Frame>
            </Frame>
          </Frame>
          <Frame autolayout-vertical gap-1 height-hug width-fill>
            <Caption>9xl</Caption>
            <Frame alignment-top-left autolayout-horizontal gap-2 height-hug width-fill>
              <Frame fill-white autolayout-vertical padding-2 width-32>
                <Text fill-black typography-9xl>
                  {PANGRAM}
                </Text>
              </Frame>
              <Frame fill-white autolayout-vertical padding-2 width-fill>
                <Text fill-black typography-9xl>
                  {LOREM}
                </Text>
              </Frame>
            </Frame>
          </Frame>
          <Caption>One unbroken word in a 24-wide frame, a hug frame and a fill frame</Caption>
          <Frame alignment-top-left autolayout-horizontal gap-2 height-hug width-fill>
            <Frame fill-white autolayout-vertical padding-2 width-24>
              <Text fill-black typography-base>
                {UNBROKEN}
              </Text>
            </Frame>
            <Frame fill-white autolayout-vertical padding-2 width-hug>
              <Text fill-black typography-base>
                {UNBROKEN}
              </Text>
            </Frame>
            <Frame fill-white autolayout-vertical padding-2 width-fill>
              <Text fill-black typography-base>
                {UNBROKEN}
              </Text>
            </Frame>
          </Frame>
          <Caption>Hug text beside fill text: the hug frame keeps its width, the fill frame wraps</Caption>
          <Frame alignment-top-left autolayout-horizontal gap-2 height-hug width-fill>
            <Frame fill-amber-100 padding-2 width-hug>
              <Text fill-black typography-sm>
                Label
              </Text>
            </Frame>
            <Frame fill-white padding-2 width-fill>
              <Text fill-black typography-sm>
                {LOREM}
              </Text>
            </Frame>
          </Frame>
        </Section>

        <Section
          title="15. Text alignment"
          note="Each typography-align- flag in a fill frame, then in a 40-wide frame, then inside frames aligned the other way."
        >
          <Frame fill-white autolayout-vertical gap-2 padding-2 width-fill>
            <Text fill-black typography-align-left typography-sm>
              typography-align-left. {LOREM}
            </Text>
            <Text fill-black typography-align-center typography-sm>
              typography-align-center. {LOREM}
            </Text>
            <Text fill-black typography-align-right typography-sm>
              typography-align-right. {LOREM}
            </Text>
          </Frame>
          <Frame alignment-top-left autolayout-horizontal gap-2 height-hug width-fill wrap>
            <Frame fill-white autolayout-vertical padding-2 width-40>
              <Text fill-black typography-align-left typography-xs>
                {LOREM}
              </Text>
            </Frame>
            <Frame fill-white autolayout-vertical padding-2 width-40>
              <Text fill-black typography-align-center typography-xs>
                {LOREM}
              </Text>
            </Frame>
            <Frame fill-white autolayout-vertical padding-2 width-40>
              <Text fill-black typography-align-right typography-xs>
                {LOREM}
              </Text>
            </Frame>
          </Frame>
          <Caption>right-aligned frame, left-aligned text | centered frame, right-aligned text</Caption>
          <Frame autolayout-horizontal gap-2 height-hug width-fill>
            <Frame alignment-top-right fill-white autolayout-vertical padding-2 width-fill>
              <Text fill-black typography-align-left typography-sm>
                Short line
              </Text>
              <Text fill-black typography-align-left typography-sm>
                A somewhat longer line
              </Text>
            </Frame>
            <Frame alignment-center fill-white autolayout-vertical padding-2 width-fill>
              <Text fill-black typography-align-right typography-sm>
                Short line
              </Text>
              <Text fill-black typography-align-right typography-sm>
                A somewhat longer line
              </Text>
            </Frame>
          </Frame>
        </Section>

        <Section
          title="16. Frame alignment"
          note="24 x 24 frames with each alignment flag. Horizontal flow holds two boxes side by side, vertical flow stacks them."
        >
          <Caption>autolayout-horizontal</Caption>
          <Cases>
            <Case label="top-left">
              <Frame alignment-top-left fill-white autolayout-horizontal gap-1 height-24 padding-1 width-24>
                <Frame fill-orange-500 height-6 width-4 />
                <Frame fill-orange-300 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="top-center">
              <Frame alignment-top-center fill-white autolayout-horizontal gap-1 height-24 padding-1 width-24>
                <Frame fill-orange-500 height-6 width-4 />
                <Frame fill-orange-300 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="top-right">
              <Frame alignment-top-right fill-white autolayout-horizontal gap-1 height-24 padding-1 width-24>
                <Frame fill-orange-500 height-6 width-4 />
                <Frame fill-orange-300 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="left">
              <Frame alignment-left fill-white autolayout-horizontal gap-1 height-24 padding-1 width-24>
                <Frame fill-orange-500 height-6 width-4 />
                <Frame fill-orange-300 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="center">
              <Frame alignment-center fill-white autolayout-horizontal gap-1 height-24 padding-1 width-24>
                <Frame fill-orange-500 height-6 width-4 />
                <Frame fill-orange-300 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="right">
              <Frame alignment-right fill-white autolayout-horizontal gap-1 height-24 padding-1 width-24>
                <Frame fill-orange-500 height-6 width-4 />
                <Frame fill-orange-300 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="bottom-left">
              <Frame alignment-bottom-left fill-white autolayout-horizontal gap-1 height-24 padding-1 width-24>
                <Frame fill-orange-500 height-6 width-4 />
                <Frame fill-orange-300 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="bottom-center">
              <Frame alignment-bottom-center fill-white autolayout-horizontal gap-1 height-24 padding-1 width-24>
                <Frame fill-orange-500 height-6 width-4 />
                <Frame fill-orange-300 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="bottom-right">
              <Frame alignment-bottom-right fill-white autolayout-horizontal gap-1 height-24 padding-1 width-24>
                <Frame fill-orange-500 height-6 width-4 />
                <Frame fill-orange-300 height-4 width-4 />
              </Frame>
            </Case>
          </Cases>
          <Caption>autolayout-vertical</Caption>
          <Cases>
            <Case label="top-left">
              <Frame alignment-top-left fill-white autolayout-vertical gap-1 height-24 padding-1 width-24>
                <Frame fill-cyan-500 height-4 width-6 />
                <Frame fill-cyan-300 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="top-center">
              <Frame alignment-top-center fill-white autolayout-vertical gap-1 height-24 padding-1 width-24>
                <Frame fill-cyan-500 height-4 width-6 />
                <Frame fill-cyan-300 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="top-right">
              <Frame alignment-top-right fill-white autolayout-vertical gap-1 height-24 padding-1 width-24>
                <Frame fill-cyan-500 height-4 width-6 />
                <Frame fill-cyan-300 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="left">
              <Frame alignment-left fill-white autolayout-vertical gap-1 height-24 padding-1 width-24>
                <Frame fill-cyan-500 height-4 width-6 />
                <Frame fill-cyan-300 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="center">
              <Frame alignment-center fill-white autolayout-vertical gap-1 height-24 padding-1 width-24>
                <Frame fill-cyan-500 height-4 width-6 />
                <Frame fill-cyan-300 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="right">
              <Frame alignment-right fill-white autolayout-vertical gap-1 height-24 padding-1 width-24>
                <Frame fill-cyan-500 height-4 width-6 />
                <Frame fill-cyan-300 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="bottom-left">
              <Frame alignment-bottom-left fill-white autolayout-vertical gap-1 height-24 padding-1 width-24>
                <Frame fill-cyan-500 height-4 width-6 />
                <Frame fill-cyan-300 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="bottom-center">
              <Frame alignment-bottom-center fill-white autolayout-vertical gap-1 height-24 padding-1 width-24>
                <Frame fill-cyan-500 height-4 width-6 />
                <Frame fill-cyan-300 height-4 width-4 />
              </Frame>
            </Case>
            <Case label="bottom-right">
              <Frame alignment-bottom-right fill-white autolayout-vertical gap-1 height-24 padding-1 width-24>
                <Frame fill-cyan-500 height-4 width-6 />
                <Frame fill-cyan-300 height-4 width-4 />
              </Frame>
            </Case>
          </Cases>
          <Caption>Wrapped rows in a 48-wide frame: left, center and bottom-right</Caption>
          <Cases>
            <Case label="alignment-left">
              <Frame alignment-left fill-white autolayout-horizontal gap-1 height-28 padding-2 width-48 wrap>
                <Chips />
              </Frame>
            </Case>
            <Case label="alignment-center">
              <Frame alignment-center fill-white autolayout-horizontal gap-1 height-28 padding-2 width-48 wrap>
                <Chips />
              </Frame>
            </Case>
            <Case label="alignment-bottom-right">
              <Frame alignment-bottom-right fill-white autolayout-horizontal gap-1 height-28 padding-2 width-48 wrap>
                <Chips />
              </Frame>
            </Case>
          </Cases>
        </Section>

        <Section
          title="17. Deep nesting"
          note="Twelve hug frames alternating direction, each padding-2 and a step darker. Then six fill levels that should all span the section."
        >
          <Frame fill-emerald-50 autolayout-horizontal padding-2>
            <Frame fill-emerald-100 autolayout-vertical padding-2>
              <Frame fill-emerald-200 autolayout-horizontal padding-2>
                <Frame fill-emerald-300 autolayout-vertical padding-2>
                  <Frame fill-emerald-400 autolayout-horizontal padding-2>
                    <Frame fill-emerald-500 autolayout-vertical padding-2>
                      <Frame fill-emerald-600 autolayout-horizontal padding-2>
                        <Frame fill-emerald-700 autolayout-vertical padding-2>
                          <Frame fill-emerald-800 autolayout-horizontal padding-2>
                            <Frame fill-emerald-900 autolayout-vertical padding-2>
                              <Frame fill-emerald-900 autolayout-horizontal padding-2>
                                <Frame fill-white autolayout-vertical padding-1>
                                  <Text fill-black typography-xs>
                                    12 deep
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
            </Frame>
          </Frame>
          <Frame fill-slate-200 autolayout-vertical padding-2 width-fill>
            <Frame fill-slate-300 autolayout-horizontal padding-2 width-fill>
              <Frame fill-slate-400 autolayout-vertical padding-2 width-fill>
                <Frame fill-slate-500 autolayout-horizontal padding-2 width-fill>
                  <Frame fill-slate-600 autolayout-vertical padding-2 width-fill>
                    <Frame alignment-center fill-slate-700 autolayout-horizontal padding-2 width-fill>
                      <Text fill-white typography-xs>
                        6 fill levels
                      </Text>
                    </Frame>
                  </Frame>
                </Frame>
              </Frame>
            </Frame>
          </Frame>
          <Caption>An app shell: header, a sidebar beside a 2 x 2 grid of fill cards, and a footer</Caption>
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
          title="18. Vectors"
          note="Paths scaled into width- and height- boxes. The viewBox keeps its aspect ratio, so a path centers in a box of another shape."
        >
          <Caption>The dots icon at 3, 4, 6, 8, 12, 16 and 24, in neutral-900</Caption>
          <Cases>
            <Case label="3">
              <Frame fill-white height-hug padding-1 width-hug>
                <Vector fill-neutral-900 height-3 path={MORE_PATH} viewBox="0 0 12.12 2.5" width-3 />
              </Frame>
            </Case>
            <Case label="4">
              <Frame fill-white height-hug padding-1 width-hug>
                <Vector fill-neutral-900 height-4 path={MORE_PATH} viewBox="0 0 12.12 2.5" width-4 />
              </Frame>
            </Case>
            <Case label="6">
              <Frame fill-white height-hug padding-1 width-hug>
                <Vector fill-neutral-900 height-6 path={MORE_PATH} viewBox="0 0 12.12 2.5" width-6 />
              </Frame>
            </Case>
            <Case label="8">
              <Frame fill-white height-hug padding-1 width-hug>
                <Vector fill-neutral-900 height-8 path={MORE_PATH} viewBox="0 0 12.12 2.5" width-8 />
              </Frame>
            </Case>
            <Case label="12">
              <Frame fill-white height-hug padding-1 width-hug>
                <Vector fill-neutral-900 height-12 path={MORE_PATH} viewBox="0 0 12.12 2.5" width-12 />
              </Frame>
            </Case>
            <Case label="16">
              <Frame fill-white height-hug padding-1 width-hug>
                <Vector fill-neutral-900 height-16 path={MORE_PATH} viewBox="0 0 12.12 2.5" width-16 />
              </Frame>
            </Case>
            <Case label="24">
              <Frame fill-white height-hug padding-1 width-hug>
                <Vector fill-neutral-900 height-24 path={MORE_PATH} viewBox="0 0 12.12 2.5" width-24 />
              </Frame>
            </Case>
          </Cases>
          <Caption>The check mark, 8 x 8, in every hue's 500</Caption>
          <Cases>
            <Vector fill-red-500 height-8 path={CHECK_PATH} viewBox="0 0 18 16" width-8 />
            <Vector fill-orange-500 height-8 path={CHECK_PATH} viewBox="0 0 18 16" width-8 />
            <Vector fill-amber-500 height-8 path={CHECK_PATH} viewBox="0 0 18 16" width-8 />
            <Vector fill-yellow-500 height-8 path={CHECK_PATH} viewBox="0 0 18 16" width-8 />
            <Vector fill-lime-500 height-8 path={CHECK_PATH} viewBox="0 0 18 16" width-8 />
            <Vector fill-green-500 height-8 path={CHECK_PATH} viewBox="0 0 18 16" width-8 />
            <Vector fill-emerald-500 height-8 path={CHECK_PATH} viewBox="0 0 18 16" width-8 />
            <Vector fill-teal-500 height-8 path={CHECK_PATH} viewBox="0 0 18 16" width-8 />
            <Vector fill-cyan-500 height-8 path={CHECK_PATH} viewBox="0 0 18 16" width-8 />
            <Vector fill-sky-500 height-8 path={CHECK_PATH} viewBox="0 0 18 16" width-8 />
            <Vector fill-blue-500 height-8 path={CHECK_PATH} viewBox="0 0 18 16" width-8 />
            <Vector fill-indigo-500 height-8 path={CHECK_PATH} viewBox="0 0 18 16" width-8 />
            <Vector fill-violet-500 height-8 path={CHECK_PATH} viewBox="0 0 18 16" width-8 />
            <Vector fill-purple-500 height-8 path={CHECK_PATH} viewBox="0 0 18 16" width-8 />
            <Vector fill-fuchsia-500 height-8 path={CHECK_PATH} viewBox="0 0 18 16" width-8 />
            <Vector fill-pink-500 height-8 path={CHECK_PATH} viewBox="0 0 18 16" width-8 />
            <Vector fill-rose-500 height-8 path={CHECK_PATH} viewBox="0 0 18 16" width-8 />
            <Vector fill-slate-500 height-8 path={CHECK_PATH} viewBox="0 0 18 16" width-8 />
            <Vector fill-gray-500 height-8 path={CHECK_PATH} viewBox="0 0 18 16" width-8 />
            <Vector fill-zinc-500 height-8 path={CHECK_PATH} viewBox="0 0 18 16" width-8 />
            <Vector fill-neutral-500 height-8 path={CHECK_PATH} viewBox="0 0 18 16" width-8 />
            <Vector fill-stone-500 height-8 path={CHECK_PATH} viewBox="0 0 18 16" width-8 />
          </Cases>
          <Caption>Boxes of other shapes, with a stroke to show each box</Caption>
          <Cases>
            <Case label="16 x 4">
              <Frame stroke-neutral-400 width-hug>
                <Vector fill-blue-600 height-4 path={CHECK_PATH} viewBox="0 0 18 16" width-16 />
              </Frame>
            </Case>
            <Case label="4 x 16">
              <Frame stroke-neutral-400 width-hug>
                <Vector fill-blue-600 height-16 path={CHECK_PATH} viewBox="0 0 18 16" width-4 />
              </Frame>
            </Case>
            <Case label="px x px">
              <Frame stroke-neutral-400 width-hug>
                <Vector fill-blue-600 height-px path={CHECK_PATH} viewBox="0 0 18 16" width-px />
              </Frame>
            </Case>
            <Case label="96 x 24">
              <Frame stroke-neutral-400 width-hug>
                <Vector fill-blue-600 height-24 path={MORE_PATH} viewBox="0 0 12.12 2.5" width-96 />
              </Frame>
            </Case>
          </Cases>
          <Caption>The ring with fillRule nonzero (solid) and evenodd (hole), white and black, and no fill</Caption>
          <Cases>
            <Case label="nonzero">
              <Vector fill-rose-500 height-12 path={RING_PATH} viewBox="0 0 24 24" width-12 />
            </Case>
            <Case label="evenodd">
              <Vector fill-rose-500 fillRule="evenodd" height-12 path={RING_PATH} viewBox="0 0 24 24" width-12 />
            </Case>
            <Case label="white on black">
              <Frame fill-black padding-1>
                <Vector fill-white fillRule="evenodd" height-12 path={RING_PATH} viewBox="0 0 24 24" width-12 />
              </Frame>
            </Case>
            <Case label="black">
              <Vector fill-black fillRule="evenodd" height-12 path={RING_PATH} viewBox="0 0 24 24" width-12 />
            </Case>
            <Case label="no fill">
              <Vector fillRule="evenodd" height-12 path={RING_PATH} viewBox="0 0 24 24" width-12 />
            </Case>
          </Cases>
          <Caption>
            Inside auto layout: an icon button, and a row where the vector keeps its size beside fill text
          </Caption>
          <Frame alignment-left autolayout-horizontal gap-3 height-hug width-fill>
            <Frame alignment-center corner-radius-full fill-neutral-900 height-10 width-10>
              <Vector fill-white height-1 path={MORE_PATH} viewBox="0 0 12.12 2.5" width-5 />
            </Frame>
            <Frame autolayout-vertical height-hug width-fill>
              <Text fill-black typography-sm>
                {LOREM}
              </Text>
            </Frame>
            <Vector fill-green-600 height-6 path={CHECK_PATH} viewBox="0 0 18 16" width-6 />
          </Frame>
        </Section>

        <Section
          title="19. Motion"
          note="The animations from motion-tokens.css on a Frame: CSS on web, Reanimated on iOS and Android through unison-components/uniwind-motion."
        >
          <Cases>
            <Case label="tailwind-animate-spin">
              <Frame corner-radius-sm fill-violet-600 height-8 tailwind-animate-spin width-8 />
            </Case>
            <Case label="tailwind-animate-ping">
              <Frame corner-radius-full fill-violet-600 height-8 tailwind-animate-ping width-8 />
            </Case>
            <Case label="tailwind-animate-pulse">
              <Frame corner-radius-sm fill-violet-600 height-8 tailwind-animate-pulse width-8 />
            </Case>
            <Case label="tailwind-animate-bounce">
              <Frame corner-radius-full fill-violet-600 height-8 tailwind-animate-bounce width-8 />
            </Case>
          </Cases>
        </Section>
      </Frame>
    </ScrollView>
  )
}
