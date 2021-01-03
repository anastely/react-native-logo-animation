import React from 'react';
import Animated from 'react-native-reanimated';
import { Path } from 'react-native-svg';

const AnimatedPath = Animated.createAnimatedComponent(Path);

interface Props {
  d: string;
  strokeWidth: number;
  strokeColor: string;
}

const AnimatedBgStroke = ({ d, strokeWidth, strokeColor }: Props) => {
  const ref = React.useRef<typeof AnimatedPath>(null);
  const [length, setLength] = React.useState(0);

  return (
    <AnimatedPath
      ref={ref}
      onLayout={() => setLength(ref.current.getTotalLength())}
      d={d}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeDasharray={length}
    />
  );
};

export default AnimatedBgStroke;
