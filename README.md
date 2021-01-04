# react-native-logo-animation

React Native Logo Animation

<p align="center">
<img alt="React Native Logo Animation" src="https://github.com/anastely/react-native-logo-animation/blob/master/preview.gif" width="50%" />
</p>

# Installation

Add the dependency:

```sh
npm i react-native-logo-animation
```

Or

```sh
yarn add react-native-logo-animation
```

# Peer Dependencies

###### IMPORTANT! You need install them

```JSON
"react-native-reanimated": ">=2.0.0-alpha.9.2",
"react-native-svg": ">=0.9.1"
```

# Usage

## Import

```js
import AnimatedLogo from 'react-native-logo-animation';
```

## Basic Usage

```js
<AnimatedLogo
  vWidth={416}
  vHeight={601}
  duration={4000}
  strokeWidth={5}
  margin={10}
  strokeColor={'#000'}
  animatedStrokeColor={'#2255DF'}
  isRepeat={true}
  paths={[
    'M73.6139 84.789L81.2612 95.0328C71.699 93.0861 61.8991 93.0861 52.3369 95.0328C49.0756 95.6976 45.8676 96.6537 42.7448 97.8943C36.2324 100.48 28.9625 98.311 24.4848 92.4485L21.2347 88.1926L25.4127 88.6683C20.8039 84.9238 17.8291 79.1886 17.2195 72.8747L16.5294 65.7237C17.0753 68.5618 19.067 70.7782 21.6176 71.385L25.8528 72.3934C21.436 67.1067 19.6597 59.7291 21.1092 52.6914C23.9548 38.8856 30.4578 26.3496 39.7784 16.7041L46.1475 10.1121C45.1925 13.3201 44.4059 16.5871 43.7926 19.8962L42.55 26.5987C43.683 24.3158 45.3722 22.4337 47.4247 21.1734L51.923 18.4074C49.0915 27.1802 49.0915 36.7779 51.923 45.5507C55.896 57.8582 61.8176 69.2744 69.4087 79.257L73.6139 84.789ZM167.099 219.87L164.515 220.16C160.758 225.993 154.146 228.623 147.918 226.765C141.689 224.907 137.146 218.951 136.511 211.809L135.902 204.953C139.998 203.255 144.323 202.924 148.415 203.821C146.447 208.739 147.44 214.539 150.958 218.307L152.282 215.697C153.695 212.909 154.857 209.976 155.751 206.943C157.987 208.422 160.022 210.338 161.745 212.66L167.099 219.87ZM342.17 84.789L346.378 79.257C353.968 69.2744 359.89 57.8582 363.862 45.5507C366.694 36.7779 366.694 27.1802 363.862 18.4074L368.361 21.1734C370.413 22.4337 372.103 24.3158 373.236 26.5987L371.994 19.8962C371.379 16.5871 370.593 13.3201 369.638 10.1121L376.008 16.7041C385.327 26.3496 391.831 38.8856 394.675 52.6914C396.126 59.7291 394.35 67.1067 389.933 72.3934L394.169 71.385C396.719 70.7782 398.711 68.5618 399.255 65.7237L398.566 72.8747C397.955 79.1886 394.981 84.9238 390.373 88.6683L394.551 88.1926L391.301 92.4485C386.823 98.311 379.553 100.48 373.041 97.8943C369.918 96.6537 366.709 95.6976 363.448 95.0328C353.887 93.0861 344.086 93.0861 334.525 95.0328L342.17 84.789ZM248.688 219.87L254.04 212.66C255.763 210.338 257.799 208.422 260.035 206.943C260.929 209.976 262.091 212.909 263.503 215.697L264.826 218.307C268.346 214.539 269.339 208.739 267.37 203.821C271.462 202.924 275.786 203.255 279.883 204.953L279.273 211.809C278.638 218.951 274.096 224.907 267.867 226.765C261.639 228.623 255.029 225.993 251.269 220.16L248.688 219.87ZM207.893 429.959C219.849 436.438 234.343 431.901 241.483 419.298C244.392 414.161 250.364 412.38 255.191 415.209L261.101 418.672C255.171 416.704 248.75 418.618 244.499 423.622C237.216 432.198 227.844 438.221 217.531 440.955L207.893 443.505L198.255 440.955C187.941 438.221 178.568 432.198 171.285 423.622C167.035 418.618 160.614 416.704 154.684 418.672L160.595 415.209C165.422 412.38 171.393 414.161 174.303 419.298C181.443 431.901 195.937 436.438 207.893 429.959ZM207.893 403.994C199.775 400.867 192.287 395.992 185.855 389.646C182.419 386.255 181.133 380.91 182.585 376.062C185.022 367.926 190.759 361.54 198.069 358.828L204.378 356.488C203.017 341.633 203.017 326.662 204.378 311.808C206.607 287.474 206.607 262.951 204.378 238.617L203.336 227.231C196.608 219.615 180.128 215.121 172.529 202.924C163.314 192.668 149.883 188.664 137.296 192.417C124.708 196.17 114.876 207.114 111.503 221.124C109.658 228.783 106.035 235.767 100.997 241.375L96.8741 245.965C116.29 234.288 139.684 234.288 159.099 245.965L168.359 251.534C167.874 258.891 164.395 265.598 158.913 269.745C152.634 274.494 144.386 274.494 138.108 269.745L133.496 266.257C139.558 267.622 145.843 265.75 150.478 261.192L153.477 258.245C138.35 248.509 119.703 248.509 104.576 258.245C93.9171 265.104 81.8221 268.712 69.5098 268.702L65.0789 268.698C78.0139 253.819 87.4524 235.623 92.5621 215.718C95.2308 205.324 102.531 197.201 111.868 194.231L118.428 192.146C112.393 189.58 105.721 189.58 99.686 192.146L95.2093 194.048C99.6598 187.303 105.006 181.352 111.066 176.399C122.358 167.17 136.804 164.149 150.336 168.184C163.868 172.219 174.192 183.319 180.654 197.153C185.495 207.513 198.813 212.171 207.893 219.681C216.973 212.171 230.291 207.513 235.131 197.153C241.594 183.319 251.917 172.219 265.449 168.184C278.981 164.149 293.426 167.17 304.719 176.399C310.779 181.352 316.126 187.303 320.576 194.048L316.1 192.146C310.065 189.58 303.392 189.58 297.357 192.146L303.916 194.231C313.256 197.201 320.554 205.324 323.223 215.718C328.333 235.623 337.773 253.819 350.706 268.698L346.275 268.702C333.963 268.712 321.868 265.104 311.21 258.245C296.084 248.509 277.435 248.509 262.308 258.245L265.306 261.192C269.942 265.75 276.229 267.622 282.289 266.257L277.678 269.745C271.398 274.494 263.151 274.494 256.872 269.745C251.392 265.598 247.911 258.891 247.425 251.534L256.685 245.965C276.101 234.288 299.497 234.288 318.911 245.965L314.787 241.375C309.75 235.767 306.126 228.783 304.282 221.124C300.91 207.114 291.078 196.17 278.489 192.417C265.903 188.664 252.472 192.668 243.256 202.924C235.657 215.121 219.177 219.615 212.45 227.231L211.408 238.617C209.18 262.951 209.18 287.474 211.408 311.808C212.769 326.662 212.769 341.633 211.408 356.488L217.717 358.828C225.026 361.54 230.763 367.926 233.2 376.062C234.653 380.91 233.366 386.255 229.931 389.646C223.499 395.992 216.011 400.867 207.893 403.994ZM207.893 536.888C188.552 500.943 161.061 471.225 128.124 450.758C119.482 445.386 113.16 436.352 110.597 425.711C108.036 415.069 109.451 403.727 114.524 394.266L117.577 388.571C111.993 383.731 104.329 383.141 98.1991 387.08C92.0696 391.017 88.6968 398.698 89.6725 406.502L91.2016 418.737C83.4822 411.423 79.0326 400.705 79.0326 389.421C79.0326 378.136 83.4822 367.418 91.2016 360.103L98.2843 353.392C87.7605 348.3 75.4698 351.964 68.6437 362.232L64.0986 369.066C61.9112 361.263 62.7568 352.799 66.4282 345.722C70.0988 338.643 76.2638 333.597 83.4289 331.803L99.2309 327.848C87.6444 323.893 75.26 323.893 63.6735 327.848L53.7817 331.225C66.2943 307.372 93.7354 299.187 115.289 312.882C124.492 318.73 135.788 318.73 144.992 312.882C158.049 304.587 164.805 309.114 164.879 325.846L165.154 388.309C164.12 394.962 166.039 401.82 170.383 406.655C172.648 409.176 177 420.595 183.692 424.758C190.753 429.154 200.326 426.234 208.965 426.178C216.015 426.13 224.356 429.081 230.376 425.538C238.114 420.986 242.895 409.447 245.403 406.655C249.747 401.82 251.665 394.962 250.632 388.309L250.906 325.846C250.98 309.114 257.737 304.587 270.792 312.882C279.998 318.73 291.292 318.73 300.497 312.882C322.05 299.187 349.49 307.372 362.004 331.225L352.112 327.848C340.525 323.893 328.141 323.893 316.555 327.848L332.356 331.803C339.521 333.597 345.687 338.643 349.357 345.722C353.029 352.799 353.874 361.263 351.687 369.066L347.142 362.232C340.316 351.964 328.026 348.3 317.501 353.392L324.584 360.103C332.304 367.418 336.753 378.136 336.753 389.421C336.753 400.705 332.304 411.423 324.584 418.737L326.113 406.502C327.088 398.698 323.715 391.017 317.585 387.08C311.456 383.141 303.793 383.731 298.208 388.571L301.262 394.266C306.334 403.727 307.749 415.069 305.189 425.711C302.626 436.352 296.305 445.386 287.662 450.758C254.725 471.225 227.233 500.943 207.893 536.888ZM76.0297 123.45L75.4651 124.388L75.4632 124.386L60.4205 134.786C44.9265 145.498 26.9315 150.864 8.70143 150.21L14.1576 156.062C24.4998 167.152 38.3336 172.921 52.3828 172.393L52.4362 172.249L52.4305 172.25L34.4439 183.295C15.1979 195.114 3.41659 217.826 3.84358 242.286L9.57037 234.784C17.242 224.735 28.1647 218.989 39.5312 218.377C8.27071 250.788 -7.31132 288.236 3.92129 336.18L7.65832 323.293C11.8476 308.852 22.7694 298.738 35.4636 296.135L35.4318 295.726H35.429L27.9222 309.675C21.7403 321.164 20.008 334.95 23.1224 347.885C26.2367 360.82 33.9299 371.795 44.4452 378.306L40.9217 369.25C37.1482 359.547 38.0564 348.685 42.816 340.099C57.6292 398.155 91.9788 449.972 140.755 486.855C177.594 514.714 201.724 555.726 207.893 600.96C214.06 555.726 238.192 514.714 275.03 486.855C323.807 449.972 358.155 398.155 372.969 340.099C377.73 348.685 378.636 359.547 374.864 369.25L371.339 378.306C381.854 371.795 389.549 360.82 392.663 347.885C395.776 334.95 394.045 321.164 387.863 309.675L380.355 295.726H380.353L380.321 296.135C393.018 298.738 403.939 308.852 408.126 323.293L411.866 336.18C423.097 288.236 407.515 250.788 376.254 218.377C387.621 218.989 398.543 224.735 406.215 234.784L411.944 242.286C412.369 217.826 400.587 195.114 381.342 183.295L363.354 172.25L363.35 172.249L363.404 172.393C377.452 172.921 391.286 167.152 401.628 156.062L407.084 150.21C388.853 150.864 370.86 145.498 355.365 134.786L340.321 124.386L340.32 124.388L339.756 123.45C345.778 123.443 351.8 122.542 357.658 120.743L371.454 116.511C361.112 115.023 351.528 109.974 343.983 102.19C353.776 106.428 364.328 108.306 374.936 107.611L382.71 107.103C380.476 114.357 375.356 120.055 368.837 122.541L359.798 125.989C364.717 128.696 370.069 130.292 375.546 130.684L384.017 131.293C388.53 128.098 392.357 123.839 395.227 118.817C406.393 99.2932 409.685 75.4506 404.302 53.094C398.92 30.7402 385.357 11.9231 366.917 1.22697C364.739 -0.0380552 362.128 0.0246829 359.999 1.39271C357.872 2.7598 356.518 5.24398 356.413 7.97629C355.81 23.4853 348.441 37.6909 336.675 46.0254C328.515 51.8056 321.592 59.5081 316.4 68.5899L313.458 73.7352C308.328 71.3044 302.879 69.6396 297.251 68.8296L275.285 65.6703C274.972 65.6095 274.656 65.5542 274.341 65.4971C280.076 61.8265 286.613 59.7057 293.426 59.4688L305.663 59.0427C287.152 53.3028 267.585 53.3028 249.076 59.0427L230.335 64.8548C223.125 65.2508 215.658 65.6207 207.893 65.6207C200.129 65.6207 192.66 65.2508 185.449 64.8548L166.709 59.0427C148.2 53.3028 128.633 53.3028 110.124 59.0427L122.358 59.4688C129.173 59.7057 135.708 61.8265 141.443 65.4971C141.129 65.5542 140.813 65.6095 140.499 65.6703L118.535 68.8296C112.906 69.6396 107.457 71.3044 102.327 73.7352L99.3854 68.5899C94.1924 59.5081 87.2708 51.8056 79.1113 46.0254C67.344 37.6909 59.9739 23.4853 59.3727 7.97629C59.2669 5.24398 57.9139 2.7598 55.7855 1.39271C53.6562 0.0246829 51.0475 -0.0380552 48.8686 1.22697C30.4279 11.9231 16.8646 30.7402 11.4824 53.094C6.10021 75.4506 9.39247 99.2932 20.5577 118.817C23.4286 123.839 27.2555 128.098 31.7669 131.293L40.24 130.684C45.7149 130.292 51.0681 128.696 55.9869 125.989L46.9472 122.541C40.4282 120.055 35.3091 114.357 33.074 107.103L40.8496 107.611C51.4567 108.306 62.0095 106.428 71.8011 102.19C64.2568 109.974 54.6722 115.023 44.3319 116.511L58.1264 120.743C63.9853 122.542 70.008 123.443 76.0297 123.45Z',
  ]}
/>
```

### Configuration - Props

| Property            |     Type      | Description                             |
| ------------------- | :-----------: | --------------------------------------- |
| margin              |    number     | set the margin for viewBox              |
| paths               | array[string] | set the Paths `d`                       |
| vWidth              |    number     | set the svg width/viewBox               |
| vHeight             |    number     | set the svg height/viewBox              |
| duration            |    number     | change the Animation duration "ms"      |
| strokeWidth         |    number     | set the image source as uri             |
| strokeColor         |     color     | change the placeholder paths color      |
| animatedStrokeColor |     color     | change the Animated paths color         |
| isRepeat            |     bool      | set if you want to repeat the animation |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
