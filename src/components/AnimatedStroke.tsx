import React from 'react';
import Animated, { Easing, useAnimatedProps } from 'react-native-reanimated';
import { Path } from 'react-native-svg';

const AnimatedPath = Animated.createAnimatedComponent(Path);

interface Props {
  d: string;
  strokeWidth: number;
  animatedStrokeColor: string;
  progress: Animated.SharedValue<number>;
}

const AnimatedStroke = ({
  d,
  strokeWidth,
  animatedStrokeColor,
  progress,
}: Props) => {
  const ref = React.useRef<typeof AnimatedPath>(null);
  const [length, setLength] = React.useState(0);
  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset:
      length - length * Easing.bezier(0.37, 0, 0.63, 1)(progress.value),
  }));

  const animatedBGProps = useAnimatedProps(() => ({
    strokeDashoffset:
      length - length * Easing.bezier(0.61, 1, 0.88, 1)(progress.value),
    fillOpacity: progress.value,
  }));

  return (
    <>
      <AnimatedPath
        animatedProps={animatedBGProps}
        d={d}
        stroke={animatedStrokeColor}
        strokeWidth={strokeWidth}
        fill="white"
        strokeDasharray={length}
      />
      <AnimatedPath
        ref={ref}
        onLayout={() => setLength(ref.current.getTotalLength())}
        animatedProps={animatedProps}
        d={d}
        stroke="#000"
        strokeWidth={strokeWidth}
        strokeDasharray={length}
      />
    </>
  );
};

export default AnimatedStroke;
