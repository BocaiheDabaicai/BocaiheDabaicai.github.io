import { shallowRef, computed, createVNode, toRef, mergeProps, withDirectives, vShow, Fragment, resolveDirective, useSSRContext, withCtx, createTextVNode } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { V as VMain, a as VCard } from './VMain-CfJb7-Gh.mjs';
import { o as propsFactory, I as IconValue, m as makeComponentProps, a1 as makeDisplayProps, E as makeTagProps, a2 as makeGroupProps, g as genericComponent, a3 as useRtl, a4 as useDisplay, a5 as useGroup, a6 as useResizeObserver, k as useRender, a7 as VFadeTransition, s as VIcon, aa as deepEqual, F as makeThemeProps, G as makeVariantProps, H as provideTheme, f as provideDefaults, ab as EventProp, v as makeBorderProps, q as makeDensityProps, y as makeElevationProps, ac as makeGroupItemProps, C as makeRoundedProps, D as makeRouterProps, ad as makeSizeProps, R as Ripple, ae as useLocale, J as useBorder, K as useVariant, L as useDensity, N as useElevation, S as useRounded, af as useSize, ag as useProxiedModel, ah as useGroupItem, T as useLink, X as genOverlays, ai as VExpandXTransition, t as VDefaultsProvider, V as VAvatar, a8 as focusableChildren, a9 as clamp, aj as VProgressLinear } from './server.mjs';
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

function bias(val) {
  const c = 0.501;
  const x = Math.abs(val);
  return Math.sign(val) * (x / ((1 / c - 2) * (1 - x) + 1));
}
function calculateUpdatedOffset(_ref) {
  let {
    selectedElement,
    containerSize,
    contentSize,
    isRtl,
    currentScrollOffset,
    isHorizontal
  } = _ref;
  const clientSize = isHorizontal ? selectedElement.clientWidth : selectedElement.clientHeight;
  const offsetStart = isHorizontal ? selectedElement.offsetLeft : selectedElement.offsetTop;
  const adjustedOffsetStart = isRtl && isHorizontal ? contentSize - offsetStart - clientSize : offsetStart;
  const totalSize = containerSize + currentScrollOffset;
  const itemOffset = clientSize + adjustedOffsetStart;
  const additionalOffset = clientSize * 0.4;
  if (adjustedOffsetStart <= currentScrollOffset) {
    currentScrollOffset = Math.max(adjustedOffsetStart - additionalOffset, 0);
  } else if (totalSize <= itemOffset) {
    currentScrollOffset = Math.min(currentScrollOffset - (totalSize - itemOffset - additionalOffset), contentSize - containerSize);
  }
  return currentScrollOffset;
}
const VSlideGroupSymbol = Symbol.for("vuetify:v-slide-group");
const makeVSlideGroupProps = propsFactory({
  centerActive: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  symbol: {
    type: null,
    default: VSlideGroupSymbol
  },
  nextIcon: {
    type: IconValue,
    default: "$next"
  },
  prevIcon: {
    type: IconValue,
    default: "$prev"
  },
  showArrows: {
    type: [Boolean, String],
    validator: (v) => typeof v === "boolean" || ["always", "desktop", "mobile"].includes(v)
  },
  ...makeComponentProps(),
  ...makeDisplayProps(),
  ...makeTagProps(),
  ...makeGroupProps({
    selectedClass: "v-slide-group-item--active"
  })
}, "VSlideGroup");
const VSlideGroup = genericComponent()({
  name: "VSlideGroup",
  props: makeVSlideGroupProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      isRtl
    } = useRtl();
    const {
      displayClasses,
      mobile
    } = useDisplay(props);
    const group = useGroup(props, props.symbol);
    const isOverflowing = shallowRef(false);
    const scrollOffset = shallowRef(0);
    const containerSize = shallowRef(0);
    const contentSize = shallowRef(0);
    const isHorizontal = computed(() => props.direction === "horizontal");
    const {
      resizeRef: containerRef,
      contentRect: containerRect
    } = useResizeObserver();
    const {
      resizeRef: contentRef,
      contentRect
    } = useResizeObserver();
    computed(() => {
      if (!group.selected.value.length)
        return -1;
      return group.items.value.findIndex((item) => item.id === group.selected.value[0]);
    });
    computed(() => {
      if (!group.selected.value.length)
        return -1;
      return group.items.value.findIndex((item) => item.id === group.selected.value[group.selected.value.length - 1]);
    });
    const disableTransition = shallowRef(false);
    let startTouch = 0;
    let startOffset = 0;
    function onTouchstart(e) {
      const sizeProperty = isHorizontal.value ? "clientX" : "clientY";
      const sign = isRtl.value && isHorizontal.value ? -1 : 1;
      startOffset = sign * scrollOffset.value;
      startTouch = e.touches[0][sizeProperty];
      disableTransition.value = true;
    }
    function onTouchmove(e) {
      if (!isOverflowing.value)
        return;
      const sizeProperty = isHorizontal.value ? "clientX" : "clientY";
      const sign = isRtl.value && isHorizontal.value ? -1 : 1;
      scrollOffset.value = sign * (startOffset + startTouch - e.touches[0][sizeProperty]);
    }
    function onTouchend(e) {
      const maxScrollOffset = contentSize.value - containerSize.value;
      if (scrollOffset.value < 0 || !isOverflowing.value) {
        scrollOffset.value = 0;
      } else if (scrollOffset.value >= maxScrollOffset) {
        scrollOffset.value = maxScrollOffset;
      }
      disableTransition.value = false;
    }
    function onScroll() {
      if (!containerRef.value)
        return;
      containerRef.value[isHorizontal.value ? "scrollLeft" : "scrollTop"] = 0;
    }
    const isFocused = shallowRef(false);
    function onFocusin(e) {
      isFocused.value = true;
      if (!isOverflowing.value || !contentRef.value)
        return;
      for (const el of e.composedPath()) {
        for (const item of contentRef.value.children) {
          if (item === el) {
            scrollOffset.value = calculateUpdatedOffset({
              selectedElement: item,
              containerSize: containerSize.value,
              contentSize: contentSize.value,
              isRtl: isRtl.value,
              currentScrollOffset: scrollOffset.value,
              isHorizontal: isHorizontal.value
            });
            return;
          }
        }
      }
    }
    function onFocusout(e) {
      isFocused.value = false;
    }
    function onFocus(e) {
      var _a;
      if (!isFocused.value && !(e.relatedTarget && ((_a = contentRef.value) == null ? void 0 : _a.contains(e.relatedTarget))))
        focus();
    }
    function onKeydown(e) {
      if (!contentRef.value)
        return;
      if (isHorizontal.value) {
        if (e.key === "ArrowRight") {
          focus(isRtl.value ? "prev" : "next");
        } else if (e.key === "ArrowLeft") {
          focus(isRtl.value ? "next" : "prev");
        }
      } else {
        if (e.key === "ArrowDown") {
          focus("next");
        } else if (e.key === "ArrowUp") {
          focus("prev");
        }
      }
      if (e.key === "Home") {
        focus("first");
      } else if (e.key === "End") {
        focus("last");
      }
    }
    function focus(location) {
      var _a, _b, _c, _d, _e;
      if (!contentRef.value)
        return;
      if (!location) {
        const focusable = focusableChildren(contentRef.value);
        (_a = focusable[0]) == null ? void 0 : _a.focus();
      } else if (location === "next") {
        const el = (_b = contentRef.value.querySelector(":focus")) == null ? void 0 : _b.nextElementSibling;
        if (el)
          el.focus();
        else
          focus("first");
      } else if (location === "prev") {
        const el = (_c = contentRef.value.querySelector(":focus")) == null ? void 0 : _c.previousElementSibling;
        if (el)
          el.focus();
        else
          focus("last");
      } else if (location === "first") {
        (_d = contentRef.value.firstElementChild) == null ? void 0 : _d.focus();
      } else if (location === "last") {
        (_e = contentRef.value.lastElementChild) == null ? void 0 : _e.focus();
      }
    }
    function scrollTo(location) {
      const newAbsoluteOffset = scrollOffset.value + (location === "prev" ? -1 : 1) * containerSize.value;
      scrollOffset.value = clamp(newAbsoluteOffset, 0, contentSize.value - containerSize.value);
    }
    const contentStyles = computed(() => {
      let scrollAmount = scrollOffset.value > contentSize.value - containerSize.value ? -(contentSize.value - containerSize.value) + bias(contentSize.value - containerSize.value - scrollOffset.value) : -scrollOffset.value;
      if (scrollOffset.value <= 0) {
        scrollAmount = bias(-scrollOffset.value);
      }
      const sign = isRtl.value && isHorizontal.value ? -1 : 1;
      return {
        transform: `translate${isHorizontal.value ? "X" : "Y"}(${sign * scrollAmount}px)`,
        transition: disableTransition.value ? "none" : "",
        willChange: disableTransition.value ? "transform" : ""
      };
    });
    const slotProps = computed(() => ({
      next: group.next,
      prev: group.prev,
      select: group.select,
      isSelected: group.isSelected
    }));
    const hasAffixes = computed(() => {
      switch (props.showArrows) {
        case "always":
          return true;
        case "desktop":
          return !mobile.value;
        case true:
          return isOverflowing.value || Math.abs(scrollOffset.value) > 0;
        case "mobile":
          return mobile.value || isOverflowing.value || Math.abs(scrollOffset.value) > 0;
        default:
          return !mobile.value && (isOverflowing.value || Math.abs(scrollOffset.value) > 0);
      }
    });
    const hasPrev = computed(() => {
      return Math.abs(scrollOffset.value) > 0;
    });
    const hasNext = computed(() => {
      return contentSize.value > Math.abs(scrollOffset.value) + containerSize.value;
    });
    useRender(() => createVNode(props.tag, {
      "class": ["v-slide-group", {
        "v-slide-group--vertical": !isHorizontal.value,
        "v-slide-group--has-affixes": hasAffixes.value,
        "v-slide-group--is-overflowing": isOverflowing.value
      }, displayClasses.value, props.class],
      "style": props.style,
      "tabindex": isFocused.value || group.selected.value.length ? -1 : 0,
      "onFocus": onFocus
    }, {
      default: () => {
        var _a2, _b2;
        var _a, _b, _c;
        return [hasAffixes.value && createVNode("div", {
          "key": "prev",
          "class": ["v-slide-group__prev", {
            "v-slide-group__prev--disabled": !hasPrev.value
          }],
          "onClick": () => hasPrev.value && scrollTo("prev")
        }, [(_a2 = (_a = slots.prev) == null ? void 0 : _a.call(slots, slotProps.value)) != null ? _a2 : createVNode(VFadeTransition, null, {
          default: () => [createVNode(VIcon, {
            "icon": isRtl.value ? props.nextIcon : props.prevIcon
          }, null)]
        })]), createVNode("div", {
          "key": "container",
          "ref": containerRef,
          "class": "v-slide-group__container",
          "onScroll": onScroll
        }, [createVNode("div", {
          "ref": contentRef,
          "class": "v-slide-group__content",
          "style": contentStyles.value,
          "onTouchstartPassive": onTouchstart,
          "onTouchmovePassive": onTouchmove,
          "onTouchendPassive": onTouchend,
          "onFocusin": onFocusin,
          "onFocusout": onFocusout,
          "onKeydown": onKeydown
        }, [(_b = slots.default) == null ? void 0 : _b.call(slots, slotProps.value)])]), hasAffixes.value && createVNode("div", {
          "key": "next",
          "class": ["v-slide-group__next", {
            "v-slide-group__next--disabled": !hasNext.value
          }],
          "onClick": () => hasNext.value && scrollTo("next")
        }, [(_b2 = (_c = slots.next) == null ? void 0 : _c.call(slots, slotProps.value)) != null ? _b2 : createVNode(VFadeTransition, null, {
          default: () => [createVNode(VIcon, {
            "icon": isRtl.value ? props.prevIcon : props.nextIcon
          }, null)]
        })])];
      }
    }));
    return {
      selected: group.selected,
      scrollTo,
      scrollOffset,
      focus
    };
  }
});
const VChipGroupSymbol = Symbol.for("vuetify:v-chip-group");
const makeVChipGroupProps = propsFactory({
  column: Boolean,
  filter: Boolean,
  valueComparator: {
    type: Function,
    default: deepEqual
  },
  ...makeVSlideGroupProps(),
  ...makeComponentProps(),
  ...makeGroupProps({
    selectedClass: "v-chip--selected"
  }),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "tonal"
  })
}, "VChipGroup");
const VChipGroup = genericComponent()({
  name: "VChipGroup",
  props: makeVChipGroupProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      isSelected,
      select,
      next,
      prev,
      selected
    } = useGroup(props, VChipGroupSymbol);
    provideDefaults({
      VChip: {
        color: toRef(props, "color"),
        disabled: toRef(props, "disabled"),
        filter: toRef(props, "filter"),
        variant: toRef(props, "variant")
      }
    });
    useRender(() => {
      const slideGroupProps = VSlideGroup.filterProps(props);
      return createVNode(VSlideGroup, mergeProps(slideGroupProps, {
        "class": ["v-chip-group", {
          "v-chip-group--column": props.column
        }, themeClasses.value, props.class],
        "style": props.style
      }), {
        default: () => {
          var _a;
          return [(_a = slots.default) == null ? void 0 : _a.call(slots, {
            isSelected,
            select,
            next,
            prev,
            selected: selected.value
          })];
        }
      });
    });
    return {};
  }
});
const makeVChipProps = propsFactory({
  activeClass: String,
  appendAvatar: String,
  appendIcon: IconValue,
  closable: Boolean,
  closeIcon: {
    type: IconValue,
    default: "$delete"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  draggable: Boolean,
  filter: Boolean,
  filterIcon: {
    type: String,
    default: "$complete"
  },
  label: Boolean,
  link: {
    type: Boolean,
    default: void 0
  },
  pill: Boolean,
  prependAvatar: String,
  prependIcon: IconValue,
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  text: String,
  modelValue: {
    type: Boolean,
    default: true
  },
  onClick: EventProp(),
  onClickOnce: EventProp(),
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeElevationProps(),
  ...makeGroupItemProps(),
  ...makeRoundedProps(),
  ...makeRouterProps(),
  ...makeSizeProps(),
  ...makeTagProps({
    tag: "span"
  }),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "tonal"
  })
}, "VChip");
const VChip = genericComponent()({
  name: "VChip",
  directives: {
    Ripple
  },
  props: makeVChipProps(),
  emits: {
    "click:close": (e) => true,
    "update:modelValue": (value) => true,
    "group:selected": (val) => true,
    click: (e) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    const {
      borderClasses
    } = useBorder(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      sizeClasses
    } = useSize(props);
    const {
      themeClasses
    } = provideTheme(props);
    const isActive = useProxiedModel(props, "modelValue");
    const group = useGroupItem(props, VChipGroupSymbol, false);
    const link = useLink(props, attrs);
    const isLink = computed(() => props.link !== false && link.isLink.value);
    const isClickable = computed(() => !props.disabled && props.link !== false && (!!group || props.link || link.isClickable.value));
    const closeProps = computed(() => ({
      "aria-label": t(props.closeLabel),
      onClick(e) {
        e.stopPropagation();
        isActive.value = false;
        emit("click:close", e);
      }
    }));
    function onClick(e) {
      var _a;
      emit("click", e);
      if (!isClickable.value)
        return;
      (_a = link.navigate) == null ? void 0 : _a.call(link, e);
      group == null ? void 0 : group.toggle();
    }
    function onKeyDown(e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick(e);
      }
    }
    return () => {
      const Tag = link.isLink.value ? "a" : props.tag;
      const hasAppendMedia = !!(props.appendIcon || props.appendAvatar);
      const hasAppend = !!(hasAppendMedia || slots.append);
      const hasClose = !!(slots.close || props.closable);
      const hasFilter = !!(slots.filter || props.filter) && group;
      const hasPrependMedia = !!(props.prependIcon || props.prependAvatar);
      const hasPrepend = !!(hasPrependMedia || slots.prepend);
      const hasColor = !group || group.isSelected.value;
      return isActive.value && withDirectives(createVNode(Tag, {
        "class": ["v-chip", {
          "v-chip--disabled": props.disabled,
          "v-chip--label": props.label,
          "v-chip--link": isClickable.value,
          "v-chip--filter": hasFilter,
          "v-chip--pill": props.pill
        }, themeClasses.value, borderClasses.value, hasColor ? colorClasses.value : void 0, densityClasses.value, elevationClasses.value, roundedClasses.value, sizeClasses.value, variantClasses.value, group == null ? void 0 : group.selectedClass.value, props.class],
        "style": [hasColor ? colorStyles.value : void 0, props.style],
        "disabled": props.disabled || void 0,
        "draggable": props.draggable,
        "href": link.href.value,
        "tabindex": isClickable.value ? 0 : void 0,
        "onClick": onClick,
        "onKeydown": isClickable.value && !isLink.value && onKeyDown
      }, {
        default: () => {
          var _a2;
          var _a;
          return [genOverlays(isClickable.value, "v-chip"), hasFilter && createVNode(VExpandXTransition, {
            "key": "filter"
          }, {
            default: () => [withDirectives(createVNode("div", {
              "class": "v-chip__filter"
            }, [!slots.filter ? createVNode(VIcon, {
              "key": "filter-icon",
              "icon": props.filterIcon
            }, null) : createVNode(VDefaultsProvider, {
              "key": "filter-defaults",
              "disabled": !props.filterIcon,
              "defaults": {
                VIcon: {
                  icon: props.filterIcon
                }
              }
            }, slots.filter)]), [[vShow, group.isSelected.value]])]
          }), hasPrepend && createVNode("div", {
            "key": "prepend",
            "class": "v-chip__prepend"
          }, [!slots.prepend ? createVNode(Fragment, null, [props.prependIcon && createVNode(VIcon, {
            "key": "prepend-icon",
            "icon": props.prependIcon,
            "start": true
          }, null), props.prependAvatar && createVNode(VAvatar, {
            "key": "prepend-avatar",
            "image": props.prependAvatar,
            "start": true
          }, null)]) : createVNode(VDefaultsProvider, {
            "key": "prepend-defaults",
            "disabled": !hasPrependMedia,
            "defaults": {
              VAvatar: {
                image: props.prependAvatar,
                start: true
              },
              VIcon: {
                icon: props.prependIcon,
                start: true
              }
            }
          }, slots.prepend)]), createVNode("div", {
            "class": "v-chip__content",
            "data-no-activator": ""
          }, [(_a2 = (_a = slots.default) == null ? void 0 : _a.call(slots, {
            isSelected: group == null ? void 0 : group.isSelected.value,
            selectedClass: group == null ? void 0 : group.selectedClass.value,
            select: group == null ? void 0 : group.select,
            toggle: group == null ? void 0 : group.toggle,
            value: group == null ? void 0 : group.value.value,
            disabled: props.disabled
          })) != null ? _a2 : props.text]), hasAppend && createVNode("div", {
            "key": "append",
            "class": "v-chip__append"
          }, [!slots.append ? createVNode(Fragment, null, [props.appendIcon && createVNode(VIcon, {
            "key": "append-icon",
            "end": true,
            "icon": props.appendIcon
          }, null), props.appendAvatar && createVNode(VAvatar, {
            "key": "append-avatar",
            "end": true,
            "image": props.appendAvatar
          }, null)]) : createVNode(VDefaultsProvider, {
            "key": "append-defaults",
            "disabled": !hasAppendMedia,
            "defaults": {
              VAvatar: {
                end: true,
                image: props.appendAvatar
              },
              VIcon: {
                end: true,
                icon: props.appendIcon
              }
            }
          }, slots.append)]), hasClose && createVNode("button", mergeProps({
            "key": "close",
            "class": "v-chip__close",
            "type": "button"
          }, closeProps.value), [!slots.close ? createVNode(VIcon, {
            "key": "close-icon",
            "icon": props.closeIcon,
            "size": "x-small"
          }, null) : createVNode(VDefaultsProvider, {
            "key": "close-defaults",
            "defaults": {
              VIcon: {
                icon: props.closeIcon,
                size: "x-small"
              }
            }
          }, slots.close)])];
        }
      }), [[resolveDirective("ripple"), isClickable.value && props.ripple, null]]);
    };
  }
});
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VMain, mergeProps({ class: "my-16 mx-64" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCard, {
          class: "mx-auto",
          "max-width": "800"
        }, {
          title: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`\u6280\u80FD\u4E66`);
            } else {
              return [
                createTextVNode("\u6280\u80FD\u4E66")
              ];
            }
          }),
          subtitle: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`\u6280\u80FD\uFF0C\u8FBE\u5230\u6700\u7EC8\u4E4B\u5730\u7684\u624B\u6BB5\uFF0C\u7531\u8F6F\u5B9E\u529B\u4E0E\u786C\u5B9E\u529B\u7EFC\u5408\u6784\u6210`);
            } else {
              return [
                createTextVNode("\u6280\u80FD\uFF0C\u8FBE\u5230\u6700\u7EC8\u4E4B\u5730\u7684\u624B\u6BB5\uFF0C\u7531\u8F6F\u5B9E\u529B\u4E0E\u786C\u5B9E\u529B\u7EFC\u5408\u6784\u6210")
              ];
            }
          }),
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="p-4"${_scopeId2}><div class="flex items-baseline mb-2"${_scopeId2}><h2 class="text-md"${_scopeId2}>\u524D\u7AEF\u5F00\u53D1</h2><div class="w-10/12 ml-4"${_scopeId2}>`);
              _push3(ssrRenderComponent(VProgressLinear, {
                color: "primary",
                height: "5",
                "model-value": "64",
                striped: "",
                rounded: ""
              }, null, _parent3, _scopeId2));
              _push3(`</div></div>`);
              _push3(ssrRenderComponent(VCard, { variant: "plain" }, {
                prepend: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VIcon, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`mdi-tools`);
                        } else {
                          return [
                            createTextVNode("mdi-tools")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VIcon, null, {
                        default: withCtx(() => [
                          createTextVNode("mdi-tools")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`\u7EC4\u4EF6\u5E93`);
                  } else {
                    return [
                      createTextVNode("\u7EC4\u4EF6\u5E93")
                    ];
                  }
                }),
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VChipGroup, { column: "" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VChip, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`element-vue3`);
                              } else {
                                return [
                                  createTextVNode("element-vue3")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`naiveUI`);
                              } else {
                                return [
                                  createTextVNode("naiveUI")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`vantUI`);
                              } else {
                                return [
                                  createTextVNode("vantUI")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`varletUI`);
                              } else {
                                return [
                                  createTextVNode("varletUI")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`antd-vue`);
                              } else {
                                return [
                                  createTextVNode("antd-vue")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`vuetify`);
                              } else {
                                return [
                                  createTextVNode("vuetify")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`native`);
                              } else {
                                return [
                                  createTextVNode("native")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`vuesticUI`);
                              } else {
                                return [
                                  createTextVNode("vuesticUI")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`NuxtUI`);
                              } else {
                                return [
                                  createTextVNode("NuxtUI")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VChip, null, {
                              default: withCtx(() => [
                                createTextVNode("element-vue3")
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, null, {
                              default: withCtx(() => [
                                createTextVNode("naiveUI")
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, null, {
                              default: withCtx(() => [
                                createTextVNode("vantUI")
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, null, {
                              default: withCtx(() => [
                                createTextVNode("varletUI")
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, null, {
                              default: withCtx(() => [
                                createTextVNode("antd-vue")
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, null, {
                              default: withCtx(() => [
                                createTextVNode("vuetify")
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, null, {
                              default: withCtx(() => [
                                createTextVNode("native")
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, null, {
                              default: withCtx(() => [
                                createTextVNode("vuesticUI")
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, null, {
                              default: withCtx(() => [
                                createTextVNode("NuxtUI")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VChipGroup, { column: "" }, {
                        default: withCtx(() => [
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("element-vue3")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("naiveUI")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("vantUI")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("varletUI")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("antd-vue")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("vuetify")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("native")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("vuesticUI")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("NuxtUI")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCard, { variant: "plain" }, {
                prepend: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VIcon, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`mdi-palette`);
                        } else {
                          return [
                            createTextVNode("mdi-palette")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VIcon, null, {
                        default: withCtx(() => [
                          createTextVNode("mdi-palette")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`\u6837\u5F0F`);
                  } else {
                    return [
                      createTextVNode("\u6837\u5F0F")
                    ];
                  }
                }),
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VChipGroup, { column: "" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VChip, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`reset.css`);
                              } else {
                                return [
                                  createTextVNode("reset.css")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`less`);
                              } else {
                                return [
                                  createTextVNode("less")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`sass`);
                              } else {
                                return [
                                  createTextVNode("sass")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`postcss`);
                              } else {
                                return [
                                  createTextVNode("postcss")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`unocss`);
                              } else {
                                return [
                                  createTextVNode("unocss")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`tailwindcss`);
                              } else {
                                return [
                                  createTextVNode("tailwindcss")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VChip, null, {
                              default: withCtx(() => [
                                createTextVNode("reset.css")
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, null, {
                              default: withCtx(() => [
                                createTextVNode("less")
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, null, {
                              default: withCtx(() => [
                                createTextVNode("sass")
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, null, {
                              default: withCtx(() => [
                                createTextVNode("postcss")
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, null, {
                              default: withCtx(() => [
                                createTextVNode("unocss")
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, null, {
                              default: withCtx(() => [
                                createTextVNode("tailwindcss")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VChipGroup, { column: "" }, {
                        default: withCtx(() => [
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("reset.css")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("less")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("sass")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("postcss")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("unocss")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("tailwindcss")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCard, { variant: "plain" }, {
                prepend: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VIcon, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`mdi-vuejs`);
                        } else {
                          return [
                            createTextVNode("mdi-vuejs")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VIcon, null, {
                        default: withCtx(() => [
                          createTextVNode("mdi-vuejs")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`vue`);
                  } else {
                    return [
                      createTextVNode("vue")
                    ];
                  }
                }),
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VChipGroup, { column: "" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VChip, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`vue2`);
                              } else {
                                return [
                                  createTextVNode("vue2")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`vue3`);
                              } else {
                                return [
                                  createTextVNode("vue3")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`vuex`);
                              } else {
                                return [
                                  createTextVNode("vuex")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`vue-cli`);
                              } else {
                                return [
                                  createTextVNode("vue-cli")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`vite`);
                              } else {
                                return [
                                  createTextVNode("vite")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`pinia`);
                              } else {
                                return [
                                  createTextVNode("pinia")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`vue-router`);
                              } else {
                                return [
                                  createTextVNode("vue-router")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`vue-echart`);
                              } else {
                                return [
                                  createTextVNode("vue-echart")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`goView`);
                              } else {
                                return [
                                  createTextVNode("goView")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`nuxt3`);
                              } else {
                                return [
                                  createTextVNode("nuxt3")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Shiki`);
                              } else {
                                return [
                                  createTextVNode("Shiki")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`vue-Flow`);
                              } else {
                                return [
                                  createTextVNode("vue-Flow")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VChip, null, {
                              default: withCtx(() => [
                                createTextVNode("vue2")
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, null, {
                              default: withCtx(() => [
                                createTextVNode("vue3")
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, null, {
                              default: withCtx(() => [
                                createTextVNode("vuex")
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, null, {
                              default: withCtx(() => [
                                createTextVNode("vue-cli")
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, null, {
                              default: withCtx(() => [
                                createTextVNode("vite")
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, null, {
                              default: withCtx(() => [
                                createTextVNode("pinia")
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, null, {
                              default: withCtx(() => [
                                createTextVNode("vue-router")
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, null, {
                              default: withCtx(() => [
                                createTextVNode("vue-echart")
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, null, {
                              default: withCtx(() => [
                                createTextVNode("goView")
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, null, {
                              default: withCtx(() => [
                                createTextVNode("nuxt3")
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, null, {
                              default: withCtx(() => [
                                createTextVNode("Shiki")
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, null, {
                              default: withCtx(() => [
                                createTextVNode("vue-Flow")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VChipGroup, { column: "" }, {
                        default: withCtx(() => [
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("vue2")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("vue3")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("vuex")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("vue-cli")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("vite")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("pinia")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("vue-router")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("vue-echart")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("goView")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("nuxt3")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("Shiki")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("vue-Flow")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCard, { variant: "plain" }, {
                prepend: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VIcon, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`mdi-toolbox`);
                        } else {
                          return [
                            createTextVNode("mdi-toolbox")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VIcon, null, {
                        default: withCtx(() => [
                          createTextVNode("mdi-toolbox")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`\u5176\u5B83\u5DE5\u5177`);
                  } else {
                    return [
                      createTextVNode("\u5176\u5B83\u5DE5\u5177")
                    ];
                  }
                }),
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VChipGroup, { column: "" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VChip, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`axios`);
                              } else {
                                return [
                                  createTextVNode("axios")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`prettier`);
                              } else {
                                return [
                                  createTextVNode("prettier")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`eslint`);
                              } else {
                                return [
                                  createTextVNode("eslint")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`webpack`);
                              } else {
                                return [
                                  createTextVNode("webpack")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`rollup`);
                              } else {
                                return [
                                  createTextVNode("rollup")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`vite`);
                              } else {
                                return [
                                  createTextVNode("vite")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`npm`);
                              } else {
                                return [
                                  createTextVNode("npm")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`pnpm`);
                              } else {
                                return [
                                  createTextVNode("pnpm")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`bun`);
                              } else {
                                return [
                                  createTextVNode("bun")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`echart`);
                              } else {
                                return [
                                  createTextVNode("echart")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`hichart`);
                              } else {
                                return [
                                  createTextVNode("hichart")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`d3.js`);
                              } else {
                                return [
                                  createTextVNode("d3.js")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VChip, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`\u5730\u56FE`);
                              } else {
                                return [
                                  createTextVNode("\u5730\u56FE")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VChip, null, {
                              default: withCtx(() => [
                                createTextVNode("axios")
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, null, {
                              default: withCtx(() => [
                                createTextVNode("prettier")
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, null, {
                              default: withCtx(() => [
                                createTextVNode("eslint")
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, null, {
                              default: withCtx(() => [
                                createTextVNode("webpack")
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, null, {
                              default: withCtx(() => [
                                createTextVNode("rollup")
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, null, {
                              default: withCtx(() => [
                                createTextVNode("vite")
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, null, {
                              default: withCtx(() => [
                                createTextVNode("npm")
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, null, {
                              default: withCtx(() => [
                                createTextVNode("pnpm")
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, null, {
                              default: withCtx(() => [
                                createTextVNode("bun")
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, null, {
                              default: withCtx(() => [
                                createTextVNode("echart")
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, null, {
                              default: withCtx(() => [
                                createTextVNode("hichart")
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, null, {
                              default: withCtx(() => [
                                createTextVNode("d3.js")
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, null, {
                              default: withCtx(() => [
                                createTextVNode("\u5730\u56FE")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VChipGroup, { column: "" }, {
                        default: withCtx(() => [
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("axios")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("prettier")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("eslint")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("webpack")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("rollup")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("vite")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("npm")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("pnpm")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("bun")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("echart")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("hichart")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("d3.js")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("\u5730\u56FE")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div><div class="p-4"${_scopeId2}><div class="flex items-baseline mb-2"${_scopeId2}><h2 class="text-md"${_scopeId2}>\u540E\u7AEF\u5F00\u53D1</h2><div class="w-10/12 ml-4"${_scopeId2}>`);
              _push3(ssrRenderComponent(VProgressLinear, {
                color: "secondary",
                height: "5",
                "model-value": "19",
                striped: "",
                rounded: ""
              }, null, _parent3, _scopeId2));
              _push3(`</div></div>`);
              _push3(ssrRenderComponent(VCard, { variant: "plain" }, {
                prepend: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VIcon, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`mdi-magnify`);
                        } else {
                          return [
                            createTextVNode("mdi-magnify")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VIcon, null, {
                        default: withCtx(() => [
                          createTextVNode("mdi-magnify")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`\u63A2\u7D22\u4E2D`);
                  } else {
                    return [
                      createTextVNode("\u63A2\u7D22\u4E2D")
                    ];
                  }
                }),
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VChipGroup, { column: "" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VChip, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`rust`);
                              } else {
                                return [
                                  createTextVNode("rust")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VChip, null, {
                              default: withCtx(() => [
                                createTextVNode("rust")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VChipGroup, { column: "" }, {
                        default: withCtx(() => [
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("rust")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "p-4" }, [
                  createVNode("div", { class: "flex items-baseline mb-2" }, [
                    createVNode("h2", { class: "text-md" }, "\u524D\u7AEF\u5F00\u53D1"),
                    createVNode("div", { class: "w-10/12 ml-4" }, [
                      createVNode(VProgressLinear, {
                        color: "primary",
                        height: "5",
                        "model-value": "64",
                        striped: "",
                        rounded: ""
                      })
                    ])
                  ]),
                  createVNode(VCard, { variant: "plain" }, {
                    prepend: withCtx(() => [
                      createVNode(VIcon, null, {
                        default: withCtx(() => [
                          createTextVNode("mdi-tools")
                        ]),
                        _: 1
                      })
                    ]),
                    title: withCtx(() => [
                      createTextVNode("\u7EC4\u4EF6\u5E93")
                    ]),
                    default: withCtx(() => [
                      createVNode(VChipGroup, { column: "" }, {
                        default: withCtx(() => [
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("element-vue3")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("naiveUI")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("vantUI")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("varletUI")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("antd-vue")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("vuetify")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("native")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("vuesticUI")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("NuxtUI")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCard, { variant: "plain" }, {
                    prepend: withCtx(() => [
                      createVNode(VIcon, null, {
                        default: withCtx(() => [
                          createTextVNode("mdi-palette")
                        ]),
                        _: 1
                      })
                    ]),
                    title: withCtx(() => [
                      createTextVNode("\u6837\u5F0F")
                    ]),
                    default: withCtx(() => [
                      createVNode(VChipGroup, { column: "" }, {
                        default: withCtx(() => [
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("reset.css")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("less")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("sass")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("postcss")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("unocss")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("tailwindcss")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCard, { variant: "plain" }, {
                    prepend: withCtx(() => [
                      createVNode(VIcon, null, {
                        default: withCtx(() => [
                          createTextVNode("mdi-vuejs")
                        ]),
                        _: 1
                      })
                    ]),
                    title: withCtx(() => [
                      createTextVNode("vue")
                    ]),
                    default: withCtx(() => [
                      createVNode(VChipGroup, { column: "" }, {
                        default: withCtx(() => [
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("vue2")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("vue3")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("vuex")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("vue-cli")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("vite")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("pinia")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("vue-router")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("vue-echart")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("goView")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("nuxt3")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("Shiki")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("vue-Flow")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCard, { variant: "plain" }, {
                    prepend: withCtx(() => [
                      createVNode(VIcon, null, {
                        default: withCtx(() => [
                          createTextVNode("mdi-toolbox")
                        ]),
                        _: 1
                      })
                    ]),
                    title: withCtx(() => [
                      createTextVNode("\u5176\u5B83\u5DE5\u5177")
                    ]),
                    default: withCtx(() => [
                      createVNode(VChipGroup, { column: "" }, {
                        default: withCtx(() => [
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("axios")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("prettier")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("eslint")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("webpack")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("rollup")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("vite")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("npm")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("pnpm")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("bun")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("echart")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("hichart")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("d3.js")
                            ]),
                            _: 1
                          }),
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("\u5730\u56FE")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "p-4" }, [
                  createVNode("div", { class: "flex items-baseline mb-2" }, [
                    createVNode("h2", { class: "text-md" }, "\u540E\u7AEF\u5F00\u53D1"),
                    createVNode("div", { class: "w-10/12 ml-4" }, [
                      createVNode(VProgressLinear, {
                        color: "secondary",
                        height: "5",
                        "model-value": "19",
                        striped: "",
                        rounded: ""
                      })
                    ])
                  ]),
                  createVNode(VCard, { variant: "plain" }, {
                    prepend: withCtx(() => [
                      createVNode(VIcon, null, {
                        default: withCtx(() => [
                          createTextVNode("mdi-magnify")
                        ]),
                        _: 1
                      })
                    ]),
                    title: withCtx(() => [
                      createTextVNode("\u63A2\u7D22\u4E2D")
                    ]),
                    default: withCtx(() => [
                      createVNode(VChipGroup, { column: "" }, {
                        default: withCtx(() => [
                          createVNode(VChip, null, {
                            default: withCtx(() => [
                              createTextVNode("rust")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
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
              createTextVNode("\u6280\u80FD\u4E66")
            ]),
            subtitle: withCtx(() => [
              createTextVNode("\u6280\u80FD\uFF0C\u8FBE\u5230\u6700\u7EC8\u4E4B\u5730\u7684\u624B\u6BB5\uFF0C\u7531\u8F6F\u5B9E\u529B\u4E0E\u786C\u5B9E\u529B\u7EFC\u5408\u6784\u6210")
            ]),
            default: withCtx(() => [
              createVNode("div", { class: "p-4" }, [
                createVNode("div", { class: "flex items-baseline mb-2" }, [
                  createVNode("h2", { class: "text-md" }, "\u524D\u7AEF\u5F00\u53D1"),
                  createVNode("div", { class: "w-10/12 ml-4" }, [
                    createVNode(VProgressLinear, {
                      color: "primary",
                      height: "5",
                      "model-value": "64",
                      striped: "",
                      rounded: ""
                    })
                  ])
                ]),
                createVNode(VCard, { variant: "plain" }, {
                  prepend: withCtx(() => [
                    createVNode(VIcon, null, {
                      default: withCtx(() => [
                        createTextVNode("mdi-tools")
                      ]),
                      _: 1
                    })
                  ]),
                  title: withCtx(() => [
                    createTextVNode("\u7EC4\u4EF6\u5E93")
                  ]),
                  default: withCtx(() => [
                    createVNode(VChipGroup, { column: "" }, {
                      default: withCtx(() => [
                        createVNode(VChip, null, {
                          default: withCtx(() => [
                            createTextVNode("element-vue3")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, null, {
                          default: withCtx(() => [
                            createTextVNode("naiveUI")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, null, {
                          default: withCtx(() => [
                            createTextVNode("vantUI")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, null, {
                          default: withCtx(() => [
                            createTextVNode("varletUI")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, null, {
                          default: withCtx(() => [
                            createTextVNode("antd-vue")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, null, {
                          default: withCtx(() => [
                            createTextVNode("vuetify")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, null, {
                          default: withCtx(() => [
                            createTextVNode("native")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, null, {
                          default: withCtx(() => [
                            createTextVNode("vuesticUI")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, null, {
                          default: withCtx(() => [
                            createTextVNode("NuxtUI")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(VCard, { variant: "plain" }, {
                  prepend: withCtx(() => [
                    createVNode(VIcon, null, {
                      default: withCtx(() => [
                        createTextVNode("mdi-palette")
                      ]),
                      _: 1
                    })
                  ]),
                  title: withCtx(() => [
                    createTextVNode("\u6837\u5F0F")
                  ]),
                  default: withCtx(() => [
                    createVNode(VChipGroup, { column: "" }, {
                      default: withCtx(() => [
                        createVNode(VChip, null, {
                          default: withCtx(() => [
                            createTextVNode("reset.css")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, null, {
                          default: withCtx(() => [
                            createTextVNode("less")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, null, {
                          default: withCtx(() => [
                            createTextVNode("sass")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, null, {
                          default: withCtx(() => [
                            createTextVNode("postcss")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, null, {
                          default: withCtx(() => [
                            createTextVNode("unocss")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, null, {
                          default: withCtx(() => [
                            createTextVNode("tailwindcss")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(VCard, { variant: "plain" }, {
                  prepend: withCtx(() => [
                    createVNode(VIcon, null, {
                      default: withCtx(() => [
                        createTextVNode("mdi-vuejs")
                      ]),
                      _: 1
                    })
                  ]),
                  title: withCtx(() => [
                    createTextVNode("vue")
                  ]),
                  default: withCtx(() => [
                    createVNode(VChipGroup, { column: "" }, {
                      default: withCtx(() => [
                        createVNode(VChip, null, {
                          default: withCtx(() => [
                            createTextVNode("vue2")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, null, {
                          default: withCtx(() => [
                            createTextVNode("vue3")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, null, {
                          default: withCtx(() => [
                            createTextVNode("vuex")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, null, {
                          default: withCtx(() => [
                            createTextVNode("vue-cli")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, null, {
                          default: withCtx(() => [
                            createTextVNode("vite")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, null, {
                          default: withCtx(() => [
                            createTextVNode("pinia")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, null, {
                          default: withCtx(() => [
                            createTextVNode("vue-router")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, null, {
                          default: withCtx(() => [
                            createTextVNode("vue-echart")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, null, {
                          default: withCtx(() => [
                            createTextVNode("goView")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, null, {
                          default: withCtx(() => [
                            createTextVNode("nuxt3")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, null, {
                          default: withCtx(() => [
                            createTextVNode("Shiki")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, null, {
                          default: withCtx(() => [
                            createTextVNode("vue-Flow")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(VCard, { variant: "plain" }, {
                  prepend: withCtx(() => [
                    createVNode(VIcon, null, {
                      default: withCtx(() => [
                        createTextVNode("mdi-toolbox")
                      ]),
                      _: 1
                    })
                  ]),
                  title: withCtx(() => [
                    createTextVNode("\u5176\u5B83\u5DE5\u5177")
                  ]),
                  default: withCtx(() => [
                    createVNode(VChipGroup, { column: "" }, {
                      default: withCtx(() => [
                        createVNode(VChip, null, {
                          default: withCtx(() => [
                            createTextVNode("axios")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, null, {
                          default: withCtx(() => [
                            createTextVNode("prettier")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, null, {
                          default: withCtx(() => [
                            createTextVNode("eslint")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, null, {
                          default: withCtx(() => [
                            createTextVNode("webpack")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, null, {
                          default: withCtx(() => [
                            createTextVNode("rollup")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, null, {
                          default: withCtx(() => [
                            createTextVNode("vite")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, null, {
                          default: withCtx(() => [
                            createTextVNode("npm")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, null, {
                          default: withCtx(() => [
                            createTextVNode("pnpm")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, null, {
                          default: withCtx(() => [
                            createTextVNode("bun")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, null, {
                          default: withCtx(() => [
                            createTextVNode("echart")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, null, {
                          default: withCtx(() => [
                            createTextVNode("hichart")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, null, {
                          default: withCtx(() => [
                            createTextVNode("d3.js")
                          ]),
                          _: 1
                        }),
                        createVNode(VChip, null, {
                          default: withCtx(() => [
                            createTextVNode("\u5730\u56FE")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "p-4" }, [
                createVNode("div", { class: "flex items-baseline mb-2" }, [
                  createVNode("h2", { class: "text-md" }, "\u540E\u7AEF\u5F00\u53D1"),
                  createVNode("div", { class: "w-10/12 ml-4" }, [
                    createVNode(VProgressLinear, {
                      color: "secondary",
                      height: "5",
                      "model-value": "19",
                      striped: "",
                      rounded: ""
                    })
                  ])
                ]),
                createVNode(VCard, { variant: "plain" }, {
                  prepend: withCtx(() => [
                    createVNode(VIcon, null, {
                      default: withCtx(() => [
                        createTextVNode("mdi-magnify")
                      ]),
                      _: 1
                    })
                  ]),
                  title: withCtx(() => [
                    createTextVNode("\u63A2\u7D22\u4E2D")
                  ]),
                  default: withCtx(() => [
                    createVNode(VChipGroup, { column: "" }, {
                      default: withCtx(() => [
                        createVNode(VChip, null, {
                          default: withCtx(() => [
                            createTextVNode("rust")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
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
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/gift.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gift = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { gift as default };
//# sourceMappingURL=gift-C00w0er3.mjs.map
