import { defineComponent, mergeProps, withCtx, createTextVNode, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as useHomeStore, $ as VList, a0 as VListItem } from './server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "talk",
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
                  _push3(`\u95F2\u804A\u7AD9`);
                } else {
                  return [
                    createTextVNode("\u95F2\u804A\u7AD9")
                  ];
                }
              }),
              subtitle: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u63D0\u51FA\u4E00\u4E9B\u95EE\u9898\uFF0C\u5E76\u56DE\u7B54`);
                } else {
                  return [
                    createTextVNode("\u63D0\u51FA\u4E00\u4E9B\u95EE\u9898\uFF0C\u5E76\u56DE\u7B54")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VList, { lines: "two" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(homeStore).talkList, (item, index) => {
                          _push4(ssrRenderComponent(VListItem, {
                            key: index,
                            class: "px-12"
                          }, {
                            title: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<h2 class="font-bold"${_scopeId4}>${ssrInterpolate(item.title)}</h2>`);
                              } else {
                                return [
                                  createVNode("h2", { class: "font-bold" }, toDisplayString(item.title), 1)
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<p class="text-sm mt-2"${_scopeId4}>${ssrInterpolate(item.content)}</p>`);
                              } else {
                                return [
                                  createVNode("p", { class: "text-sm mt-2" }, toDisplayString(item.content), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(homeStore).talkList, (item, index) => {
                            return openBlock(), createBlock(VListItem, {
                              key: index,
                              class: "px-12"
                            }, {
                              title: withCtx(() => [
                                createVNode("h2", { class: "font-bold" }, toDisplayString(item.title), 1)
                              ]),
                              default: withCtx(() => [
                                createVNode("p", { class: "text-sm mt-2" }, toDisplayString(item.content), 1)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VList, { lines: "two" }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(homeStore).talkList, (item, index) => {
                          return openBlock(), createBlock(VListItem, {
                            key: index,
                            class: "px-12"
                          }, {
                            title: withCtx(() => [
                              createVNode("h2", { class: "font-bold" }, toDisplayString(item.title), 1)
                            ]),
                            default: withCtx(() => [
                              createVNode("p", { class: "text-sm mt-2" }, toDisplayString(item.content), 1)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })
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
                  createTextVNode("\u95F2\u804A\u7AD9")
                ]),
                subtitle: withCtx(() => [
                  createTextVNode("\u63D0\u51FA\u4E00\u4E9B\u95EE\u9898\uFF0C\u5E76\u56DE\u7B54")
                ]),
                default: withCtx(() => [
                  createVNode(VList, { lines: "two" }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(homeStore).talkList, (item, index) => {
                        return openBlock(), createBlock(VListItem, {
                          key: index,
                          class: "px-12"
                        }, {
                          title: withCtx(() => [
                            createVNode("h2", { class: "font-bold" }, toDisplayString(item.title), 1)
                          ]),
                          default: withCtx(() => [
                            createVNode("p", { class: "text-sm mt-2" }, toDisplayString(item.content), 1)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
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
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/talk.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=talk-8oNwFzk8.mjs.map
