import { toRef, computed, createVNode, shallowRef, ref, watch, defineComponent, mergeProps, withCtx, createTextVNode, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { o as propsFactory, m as makeComponentProps, q as makeDensityProps, E as makeTagProps, F as makeThemeProps, g as genericComponent, H as provideTheme, L as useDensity, a3 as useRtl, f as provideDefaults, k as useRender, al as convertToUnit, I as IconValue, C as makeRoundedProps, ad as makeSizeProps, y as makeElevationProps, af as useSize, am as useBackgroundColor, S as useRounded, N as useElevation, s as VIcon, t as VDefaultsProvider, x as makeDimensionProps, M as useDimension, _ as useHomeStore } from './server.mjs';
import { V as VMain, a as VCard } from './VMain-CfJb7-Gh.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '../runtime.mjs';
import 'fs';
import 'path';
import 'unhead';
import 'vue-router';

const makeVTimelineProps = propsFactory({
  align: {
    type: String,
    default: "center",
    validator: (v) => ["center", "start"].includes(v)
  },
  direction: {
    type: String,
    default: "vertical",
    validator: (v) => ["vertical", "horizontal"].includes(v)
  },
  justify: {
    type: String,
    default: "auto",
    validator: (v) => ["auto", "center"].includes(v)
  },
  side: {
    type: String,
    validator: (v) => v == null || ["start", "end"].includes(v)
  },
  lineInset: {
    type: [String, Number],
    default: 0
  },
  lineThickness: {
    type: [String, Number],
    default: 2
  },
  lineColor: String,
  truncateLine: {
    type: String,
    validator: (v) => ["start", "end", "both"].includes(v)
  },
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VTimeline");
const VTimeline = genericComponent()({
  name: "VTimeline",
  props: makeVTimelineProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      rtlClasses
    } = useRtl();
    provideDefaults({
      VTimelineDivider: {
        lineColor: toRef(props, "lineColor")
      },
      VTimelineItem: {
        density: toRef(props, "density"),
        lineInset: toRef(props, "lineInset")
      }
    });
    const sideClasses = computed(() => {
      const side = props.side ? props.side : props.density !== "default" ? "end" : null;
      return side && `v-timeline--side-${side}`;
    });
    const truncateClasses = computed(() => {
      const classes = ["v-timeline--truncate-line-start", "v-timeline--truncate-line-end"];
      switch (props.truncateLine) {
        case "both":
          return classes;
        case "start":
          return classes[0];
        case "end":
          return classes[1];
        default:
          return null;
      }
    });
    useRender(() => createVNode(props.tag, {
      "class": ["v-timeline", `v-timeline--${props.direction}`, `v-timeline--align-${props.align}`, `v-timeline--justify-${props.justify}`, truncateClasses.value, {
        "v-timeline--inset-line": !!props.lineInset
      }, themeClasses.value, densityClasses.value, sideClasses.value, rtlClasses.value, props.class],
      "style": [{
        "--v-timeline-line-thickness": convertToUnit(props.lineThickness)
      }, props.style]
    }, slots));
    return {};
  }
});
const makeVTimelineDividerProps = propsFactory({
  dotColor: String,
  fillDot: Boolean,
  hideDot: Boolean,
  icon: IconValue,
  iconColor: String,
  lineColor: String,
  ...makeComponentProps(),
  ...makeRoundedProps(),
  ...makeSizeProps(),
  ...makeElevationProps()
}, "VTimelineDivider");
const VTimelineDivider = genericComponent()({
  name: "VTimelineDivider",
  props: makeVTimelineDividerProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      sizeClasses,
      sizeStyles
    } = useSize(props, "v-timeline-divider__dot");
    const {
      backgroundColorStyles,
      backgroundColorClasses
    } = useBackgroundColor(toRef(props, "dotColor"));
    const {
      roundedClasses
    } = useRounded(props, "v-timeline-divider__dot");
    const {
      elevationClasses
    } = useElevation(props);
    const {
      backgroundColorClasses: lineColorClasses,
      backgroundColorStyles: lineColorStyles
    } = useBackgroundColor(toRef(props, "lineColor"));
    useRender(() => createVNode("div", {
      "class": ["v-timeline-divider", {
        "v-timeline-divider--fill-dot": props.fillDot
      }, props.class],
      "style": props.style
    }, [createVNode("div", {
      "class": ["v-timeline-divider__before", lineColorClasses.value],
      "style": lineColorStyles.value
    }, null), !props.hideDot && createVNode("div", {
      "key": "dot",
      "class": ["v-timeline-divider__dot", elevationClasses.value, roundedClasses.value, sizeClasses.value],
      "style": sizeStyles.value
    }, [createVNode("div", {
      "class": ["v-timeline-divider__inner-dot", backgroundColorClasses.value, roundedClasses.value],
      "style": backgroundColorStyles.value
    }, [!slots.default ? createVNode(VIcon, {
      "key": "icon",
      "color": props.iconColor,
      "icon": props.icon,
      "size": props.size
    }, null) : createVNode(VDefaultsProvider, {
      "key": "icon-defaults",
      "disabled": !props.icon,
      "defaults": {
        VIcon: {
          color: props.iconColor,
          icon: props.icon,
          size: props.size
        }
      }
    }, slots.default)])]), createVNode("div", {
      "class": ["v-timeline-divider__after", lineColorClasses.value],
      "style": lineColorStyles.value
    }, null)]));
    return {};
  }
});
const makeVTimelineItemProps = propsFactory({
  density: String,
  dotColor: String,
  fillDot: Boolean,
  hideDot: Boolean,
  hideOpposite: {
    type: Boolean,
    default: void 0
  },
  icon: IconValue,
  iconColor: String,
  lineInset: [Number, String],
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeSizeProps(),
  ...makeTagProps()
}, "VTimelineItem");
const VTimelineItem = genericComponent()({
  name: "VTimelineItem",
  props: makeVTimelineItemProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      dimensionStyles
    } = useDimension(props);
    const dotSize = shallowRef(0);
    const dotRef = ref();
    watch(dotRef, (newValue) => {
      var _a2;
      var _a;
      if (!newValue)
        return;
      dotSize.value = (_a2 = (_a = newValue.$el.querySelector(".v-timeline-divider__dot")) == null ? void 0 : _a.getBoundingClientRect().width) != null ? _a2 : 0;
    }, {
      flush: "post"
    });
    useRender(() => {
      var _a, _b;
      return createVNode("div", {
        "class": ["v-timeline-item", {
          "v-timeline-item--fill-dot": props.fillDot
        }, props.class],
        "style": [{
          "--v-timeline-dot-size": convertToUnit(dotSize.value),
          "--v-timeline-line-inset": props.lineInset ? `calc(var(--v-timeline-dot-size) / 2 + ${convertToUnit(props.lineInset)})` : convertToUnit(0)
        }, props.style]
      }, [createVNode("div", {
        "class": "v-timeline-item__body",
        "style": dimensionStyles.value
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]), createVNode(VTimelineDivider, {
        "ref": dotRef,
        "hideDot": props.hideDot,
        "icon": props.icon,
        "iconColor": props.iconColor,
        "size": props.size,
        "elevation": props.elevation,
        "dotColor": props.dotColor,
        "fillDot": props.fillDot,
        "rounded": props.rounded
      }, {
        default: slots.icon
      }), props.density !== "compact" && createVNode("div", {
        "class": "v-timeline-item__opposite"
      }, [!props.hideOpposite && ((_b = slots.opposite) == null ? void 0 : _b.call(slots))])]);
    });
    return {};
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tree",
  __ssrInlineRender: true,
  setup(__props) {
    let homeStore = useHomeStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VMain, mergeProps({ class: "my-16 mx-64" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, {
              class: "mx-auto",
              "max-width": "800"
            }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u76EE\u6807`);
                } else {
                  return [
                    createTextVNode("\u76EE\u6807")
                  ];
                }
              }),
              subtitle: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u4F55\u4E3A\u76EE\u6807\uFF0C\u76EE\u6807\u5373\u662F\u8FBE\u5230\u6700\u7EC8\u7684\u6BCF\u4E00\u4E2A\u91CC\u7A0B\u7891`);
                } else {
                  return [
                    createTextVNode("\u4F55\u4E3A\u76EE\u6807\uFF0C\u76EE\u6807\u5373\u662F\u8FBE\u5230\u6700\u7EC8\u7684\u6BCF\u4E00\u4E2A\u91CC\u7A0B\u7891")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VTimeline, {
                    align: "start",
                    side: "end"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(homeStore).targetList, (item, i) => {
                          _push4(ssrRenderComponent(VTimelineItem, { key: i }, {
                            opposite: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.date)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.date), 1)
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div${_scopeId4}><h2 class="font-bold"${_scopeId4}>${ssrInterpolate(item.title)}</h2><p class="opacity-70"${_scopeId4}>${ssrInterpolate(item.content)}</p></div>`);
                              } else {
                                return [
                                  createVNode("div", null, [
                                    createVNode("h2", { class: "font-bold" }, toDisplayString(item.title), 1),
                                    createVNode("p", { class: "opacity-70" }, toDisplayString(item.content), 1)
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(homeStore).targetList, (item, i) => {
                            return openBlock(), createBlock(VTimelineItem, { key: i }, {
                              opposite: withCtx(() => [
                                createTextVNode(toDisplayString(item.date), 1)
                              ]),
                              default: withCtx(() => [
                                createVNode("div", null, [
                                  createVNode("h2", { class: "font-bold" }, toDisplayString(item.title), 1),
                                  createVNode("p", { class: "opacity-70" }, toDisplayString(item.content), 1)
                                ])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-4" }, [
                      createVNode(VTimeline, {
                        align: "start",
                        side: "end"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(homeStore).targetList, (item, i) => {
                            return openBlock(), createBlock(VTimelineItem, { key: i }, {
                              opposite: withCtx(() => [
                                createTextVNode(toDisplayString(item.date), 1)
                              ]),
                              default: withCtx(() => [
                                createVNode("div", null, [
                                  createVNode("h2", { class: "font-bold" }, toDisplayString(item.title), 1),
                                  createVNode("p", { class: "opacity-70" }, toDisplayString(item.content), 1)
                                ])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, {
                class: "mx-auto",
                "max-width": "800"
              }, {
                title: withCtx(() => [
                  createTextVNode("\u76EE\u6807")
                ]),
                subtitle: withCtx(() => [
                  createTextVNode("\u4F55\u4E3A\u76EE\u6807\uFF0C\u76EE\u6807\u5373\u662F\u8FBE\u5230\u6700\u7EC8\u7684\u6BCF\u4E00\u4E2A\u91CC\u7A0B\u7891")
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "p-4" }, [
                    createVNode(VTimeline, {
                      align: "start",
                      side: "end"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(homeStore).targetList, (item, i) => {
                          return openBlock(), createBlock(VTimelineItem, { key: i }, {
                            opposite: withCtx(() => [
                              createTextVNode(toDisplayString(item.date), 1)
                            ]),
                            default: withCtx(() => [
                              createVNode("div", null, [
                                createVNode("h2", { class: "font-bold" }, toDisplayString(item.title), 1),
                                createVNode("p", { class: "opacity-70" }, toDisplayString(item.content), 1)
                              ])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tree.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=tree-Bv2waUCI.mjs.map
