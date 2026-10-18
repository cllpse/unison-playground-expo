import { Frame, Text } from "@unison-components/native"
import { StatusBar } from "expo-status-bar"
// The native entry does not export Vector yet; its base component renders with react-native-svg on every platform.
import Vector from "./unison-components/src/base/Vector.base"

export default () => {
  return (
    <Frame alignment-center fill-white flow-vertical gap-2 height-fill padding-4 width-fill>
      <Frame
        alignment-left
        corner-radius-full
        fill-neutralsurface-100
        flow-horizontal
        gap-0p5
        height-8
        padding-left-3
        width-hug
      >
        <Text fill-text-700 typography-align-left typography-body-small-wrap>
          Hello from unison-components
        </Text>
        <Frame alignment-center flow-horizontal height-8 width-8>
          <Vector
            fill-tertiary-700
            height-2
            path="M3.77 4.64 L1.06 7.34 C0.94 7.46 0.8 7.52 0.62 7.52 C0.45 7.52 0.31 7.46 0.19 7.34 C0.06 7.21 0 7.07 0 6.89 C0 6.72 0.06 6.57 0.19 6.45 L2.88 3.75 L0.18 1.07 C0.06 0.95 0 0.8 0 0.62 C0 0.45 0.06 0.3 0.19 0.18 C0.31 0.06 0.45 0 0.63 0 C0.8 0 0.95 0.06 1.07 0.18 L3.77 2.89 L6.45 0.18 C6.57 0.06 6.72 0 6.89 0 C7.06 0 7.21 0.06 7.33 0.18 C7.46 0.31 7.52 0.46 7.52 0.63 C7.52 0.8 7.46 0.95 7.33 1.07 L4.63 3.75 L7.34 6.46 C7.46 6.58 7.52 6.72 7.52 6.9 C7.52 7.07 7.46 7.21 7.34 7.34 C7.21 7.46 7.06 7.53 6.89 7.53 C6.72 7.53 6.57 7.46 6.45 7.34 L3.77 4.64 Z"
            viewBox="0 0 7.52 7.53"
            width-2
          />
        </Frame>
      </Frame>
      <StatusBar style="auto" />
    </Frame>
  )
}
