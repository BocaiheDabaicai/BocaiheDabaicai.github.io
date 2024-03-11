import { b as buildAssetsURL } from '../routes/renderer.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, createVNode, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as useHomeStore, s as VIcon, V as VAvatar, $ as VList, a0 as VListItem } from './server.mjs';
import { V as VMain, a as VCard } from './VMain-CfJb7-Gh.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:net';
import 'node:path';
import 'vue-router';

const bookAvatar = "" + buildAssetsURL("book-avatar.BCoxworp.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "book",
  __ssrInlineRender: true,
  setup(__props) {
    const homeStore = useHomeStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VMain, mergeProps({ class: "my-16 mx-64" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, {
              class: "mx-auto",
              "max-width": "800"
            }, {
              prepend: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-pencil-outline`);
                      } else {
                        return [
                          createTextVNode("mdi-pencil-outline")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VIcon, null, {
                      default: withCtx(() => [
                        createTextVNode("mdi-pencil-outline")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u89C4\u5212\u8BB0`);
                } else {
                  return [
                    createTextVNode("\u89C4\u5212\u8BB0")
                  ];
                }
              }),
              subtitle: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u627F\u8F7D\u68A6\u60F3\u6D77\u6D0B\u7684\u91CD\u91CF\uFF0C\u98D8\u5411\u5F7C\u5CB8`);
                } else {
                  return [
                    createTextVNode("\u627F\u8F7D\u68A6\u60F3\u6D77\u6D0B\u7684\u91CD\u91CF\uFF0C\u98D8\u5411\u5F7C\u5CB8")
                  ];
                }
              }),
              append: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VAvatar, {
                    image: unref(bookAvatar),
                    size: "84"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VAvatar, {
                      image: unref(bookAvatar),
                      size: "84"
                    }, null, 8, ["image"])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VList, { lines: "two" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(homeStore).bookList, (item, index) => {
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
                            subtitle: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.subtitle)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.subtitle), 1)
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
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(homeStore).bookList, (item, index) => {
                            return openBlock(), createBlock(VListItem, {
                              key: index,
                              class: "px-12"
                            }, {
                              title: withCtx(() => [
                                createVNode("h2", { class: "font-bold" }, toDisplayString(item.title), 1)
                              ]),
                              subtitle: withCtx(() => [
                                createTextVNode(toDisplayString(item.subtitle), 1)
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
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(homeStore).bookList, (item, index) => {
                          return openBlock(), createBlock(VListItem, {
                            key: index,
                            class: "px-12"
                          }, {
                            title: withCtx(() => [
                              createVNode("h2", { class: "font-bold" }, toDisplayString(item.title), 1)
                            ]),
                            subtitle: withCtx(() => [
                              createTextVNode(toDisplayString(item.subtitle), 1)
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
                prepend: withCtx(() => [
                  createVNode(VIcon, null, {
                    default: withCtx(() => [
                      createTextVNode("mdi-pencil-outline")
                    ]),
                    _: 1
                  })
                ]),
                title: withCtx(() => [
                  createTextVNode("\u89C4\u5212\u8BB0")
                ]),
                subtitle: withCtx(() => [
                  createTextVNode("\u627F\u8F7D\u68A6\u60F3\u6D77\u6D0B\u7684\u91CD\u91CF\uFF0C\u98D8\u5411\u5F7C\u5CB8")
                ]),
                append: withCtx(() => [
                  createVNode(VAvatar, {
                    image: unref(bookAvatar),
                    size: "84"
                  }, null, 8, ["image"])
                ]),
                default: withCtx(() => [
                  createVNode(VList, { lines: "two" }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(homeStore).bookList, (item, index) => {
                        return openBlock(), createBlock(VListItem, {
                          key: index,
                          class: "px-12"
                        }, {
                          title: withCtx(() => [
                            createVNode("h2", { class: "font-bold" }, toDisplayString(item.title), 1)
                          ]),
                          subtitle: withCtx(() => [
                            createTextVNode(toDisplayString(item.subtitle), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/book.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=book-Bf1vLfXW.mjs.map
