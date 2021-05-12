const { variants } = require("@tailwindcss/postcss7-compat/defaultConfig");

module.exports = {
  separator: "_",
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html",
  ],
  theme: {
    extends: {
      flex: {
        2: "2 1 0%",
        3: "3 1 0%",
        4: "4 1 0%",
        5: "5 1 0%",
        6: "6 1 0%",
        7: "7 1 0%",
        8: "8 1 0%",
        9: "9 1 0%",
        10: "10 1 0%",
        11: "11 1 0%",
        12: "12 1 0%",
      },
    },
  },
  variants: {
    borderWidth: [...variants.borderWidth, "first", "last"],
    margin: [...variants.margin, "first", "last"],
    outline: [...variants.outline, "focus"],
    padding: [...variants.margin, "first", "last"],
  },
  corePlugins: {
    preflight: false, // Tailwind's base/reset styles
    container: false, // The container component
    accessibility: false, // The sr-only and not-sr-only utilities
    alignContent: false, // The align-content utilities like content-end
    alignItems: true, // The align-items utilities like items-center
    alignSelf: true, // The align-self utilities like self-end
    animation: false, // The animation utilities like animate-none
    appearance: false, // The appearance utilities like appearance-none
    backdropBlur: false, // The backdrop-blur utilities like backdrop-blur-md
    backdropBrightness: false, // The backdrop-brightness utilities like backdrop-brightness-100
    backdropContrast: false, // The backdrop-contrast utilities like backdrop-contrast-100
    backdropFilter: false, // The backdrop-filter utilities like backdrop-filter
    backdropGrayscale: false, // The backdrop-grayscale utilities like backdrop-grayscale-0
    backdropHueRotate: false, // The backdrop-hue-rotate utilities like backdrop-hue-rotate-180
    backdropInvert: false, // The backdrop-invert utilities like backdrop-invert-0
    backdropOpacity: false, // The backdrop-opacity utilities like backdrop-opacity-50
    backdropSaturate: false, // The backdrop-saturate utilities like backdrop-saturate-100
    backdropSepia: false, // The backdrop-sepia utilities like backdrop-sepia-0
    backgroundAttachment: false, // The background-attachment utilities like bg-local
    backgroundBlendMode: false, // The background-blend-mode utilities like bg-blend-color-burn
    backgroundClip: false, // The background-clip utilities like bg-clip-padding
    backgroundColor: true, // The background-color utilities like bg-green-700
    backgroundImage: false, // The background-image utilities like bg-gradient-to-br
    backgroundOpacity: true, // The background-color opacity utilities like bg-opacity-25
    backgroundPosition: false, // The background-position utilities like bg-left-top
    backgroundRepeat: false, // The background-repeat utilities like bg-repeat-x
    backgroundSize: false, // The background-size utilities like bg-cover
    blur: false, // The blur utilities like blur-md
    borderCollapse: false, // The border-collapse utilities like border-collapse
    borderColor: true, // The border-color utilities like border-green-700
    borderOpacity: true, // The border-color opacity utilities like border-opacity-25
    borderRadius: true, // The border-radius utilities like rounded-l-3xl
    borderStyle: true, // The border-style utilities like border-dotted
    borderWidth: true, // The border-width utilities like border-l-2
    boxDecorationBreak: false, // The box-decoration-break utilities like decoration-slice
    boxShadow: false, // The box-shadow utilities like shadow-lg
    boxSizing: true, // The box-sizing utilities like box-border
    brightness: false, // The brightness utilities like brightness-100
    clear: false, // The clear utilities like clear-right
    contrast: false, // The contrast utilities like contrast-100
    cursor: false, // The cursor utilities like cursor-wait
    display: true, // The display utilities like table-column-group
    divideColor: false, // The between elements border-color utilities like divide-gray-500
    divideOpacity: false, // The divide-opacity utilities like divide-opacity-50
    divideStyle: false, // The divide-style utilities like divide-dotted
    divideWidth: false, // The between elements border-width utilities like divide-x-2
    dropShadow: false, // The drop-shadow utilities like drop-shadow-lg
    fill: false, // The fill utilities like fill-current
    filter: false, // The filter utilities like filter
    flex: true, // The flex utilities like flex-auto
    flexDirection: true, // The flex-direction utilities like flex-row-reverse
    flexGrow: true, // The flex-grow utilities like flex-grow-0
    flexShrink: true, // The flex-shrink utilities like flex-shrink-0
    flexWrap: true, // The flex-wrap utilities like flex-wrap-reverse
    float: false, // The float utilities like float-left
    fontFamily: false, // The font-family utilities like font-serif
    fontSize: true, // The font-size utilities like text-3xl
    fontSmoothing: false, // The font-smoothing utilities like antialiased
    fontStyle: false, // The font-style utilities like italic
    fontVariantNumeric: false, // The font-variant-numeric utilities like lining-nums
    fontWeight: true, // The font-weight utilities like font-medium
    gap: false, // The gap utilities like gap-x-28
    gradientColorStops: false, // The gradient-color-stops utilities like via-green-700
    grayscale: false, // The grayscale utilities like grayscale-0
    gridAutoColumns: false, // The grid-auto-columns utilities like auto-cols-min
    gridAutoFlow: false, // The grid-auto-flow utilities like grid-flow-col
    gridAutoRows: false, // The grid-auto-rows utilities like auto-rows-min
    gridColumn: false, // The grid-column utilities like col-span-6
    gridColumnEnd: false, // The grid-column-end utilities like col-end-7
    gridColumnStart: false, // The grid-column-start utilities like col-start-7
    gridRow: false, // The grid-row utilities like row-span-3
    gridRowEnd: false, // The grid-row-end utilities like row-end-4
    gridRowStart: false, // The grid-row-start utilities like row-start-4
    gridTemplateColumns: false, // The grid-template-columns utilities like grid-cols-7
    gridTemplateRows: false, // The grid-template-rows utilities like grid-rows-4
    height: true, // The height utilities like h-64
    hueRotate: false, // The hue-rotate utilities like hue-rotate-180
    inset: true, // The inset utilities like bottom-10
    invert: false, // The invert utilities like invert-0
    isolation: false, // The isolation utilities like isolate
    justifyContent: true, // The justify-content utilities like justify-center
    justifyItems: false, // The justify-items utilities like justify-items-end
    justifySelf: false, // The justify-self utilities like justify-self-end
    letterSpacing: false, // The letter-spacing utilities like tracking-normal
    lineHeight: false, // The line-height utilities like leading-9
    listStylePosition: false, // The list-style-position utilities like list-inside
    listStyleType: false, // The list-style-type utilities like list-disc
    margin: true, // The margin utilities like ml-8
    maxHeight: true, // The max-height utilities like max-h-32
    maxWidth: true, // The max-width utilities like max-w-5xl
    minHeight: true, // The min-height utilities like min-h-full
    minWidth: true, // The min-width utilities like min-w-full
    mixBlendMode: false, // The mix-blend-mode utilities like mix-blend-color-burn
    objectFit: true, // The object-fit utilities like object-fill
    objectPosition: false, // The object-position utilities like object-left-top
    opacity: false, // The opacity utilities like opacity-50
    order: true, // The order utilities like order-8
    outline: false, // The outline utilities like outline-white
    overflow: true, // The overflow utilities like overflow-y-auto
    overscrollBehavior: false, // The overscroll-behavior utilities like overscroll-y-contain
    padding: true, // The padding utilities like pr-4
    placeContent: false, // The place-content utilities like place-content-between
    placeholderColor: true, // The placeholder color utilities like placeholder-red-600
    placeholderOpacity: true, // The placeholder color opacity utilities like placeholder-opacity-25
    placeItems: false, // The place-items utilities like place-items-end
    placeSelf: false, // The place-self utilities like place-self-end
    pointerEvents: true, // The pointer-events utilities like pointer-events-none
    position: true, // The position utilities like absolute
    resize: false, // The resize utilities like resize-y
    ringColor: false, // The ring-color utilities like ring-green-700
    ringOffsetColor: false, // The ring-offset-color utilities like ring-offset-green-700
    ringOffsetWidth: false, // The ring-offset-width utilities like ring-offset-2
    ringOpacity: false, // The ring-opacity utilities like ring-opacity-50
    ringWidth: false, // The ring-width utilities like ring-2
    rotate: false, // The rotate utilities like rotate-180
    saturate: false, // The saturate utilities like saturate-100
    scale: false, // The scale utilities like scale-x-95
    sepia: false, // The sepia utilities like sepia-0
    skew: false, // The skew utilities like -skew-x-1
    space: false, // The "space-between" utilities like space-x-4
    stroke: false, // The stroke utilities like stroke-current
    strokeWidth: false, // The stroke-width utilities like stroke-1
    tableLayout: false, // The table-layout utilities like table-auto
    textAlign: true, // The text-align utilities like text-center
    textColor: true, // The text-color utilities like text-green-700
    textDecoration: false, // The text-decoration utilities like line-through
    textOpacity: true, // The text-opacity utilities like text-opacity-50
    textOverflow: false, // The text-overflow utilities like overflow-ellipsis
    textTransform: false, // The text-transform utilities like lowercase
    transform: false, // The transform utility (for enabling transform features)
    transformOrigin: false, // The transform-origin utilities like origin-bottom-right
    transitionDelay: false, // The transition-delay utilities like delay-200
    transitionDuration: false, // The transition-duration utilities like duration-200
    transitionProperty: false, // The transition-property utilities like transition-colors
    transitionTimingFunction: false, // The transition-timing-function utilities like ease-in
    translate: false, // The translate utilities like -translate-x-full
    userSelect: false, // The user-select utilities like select-text
    verticalAlign: false, // The vertical-align utilities like align-middle
    visibility: false, // The visibility utilities like visible
    whitespace: true, // The whitespace utilities like whitespace-pre
    width: true, // The width utilities like w-0.5
    wordBreak: false, // The word-break utilities like break-words
    zIndex: true, // The z-index utilities like z-30
  },
  plugins: [],
};
