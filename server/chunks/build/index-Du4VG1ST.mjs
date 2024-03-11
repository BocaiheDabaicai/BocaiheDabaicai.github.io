import { defineComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as useHomeStore, U as VImg, ak as VBtn } from './server.mjs';
import { V as VMain, a as VCard, b as VCardTitle, c as VCardSubtitle, d as VCardText, e as VCardActions } from './VMain-CfJb7-Gh.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHomeStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VMain, mergeProps({ class: "my-16 mx-64" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, {
              class: "mx-auto",
              "max-width": "800"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VImg, {
                    class: "align-end text-white",
                    height: "400",
                    src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
                    cover: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u6B22\u8FCE\u56DE\u6765\uFF01\u8FD9\u91CC\u53EF\u4EE5\u6682\u6B47\u4E00\u4F1A\u513F`);
                            } else {
                              return [
                                createTextVNode("\u6B22\u8FCE\u56DE\u6765\uFF01\u8FD9\u91CC\u53EF\u4EE5\u6682\u6B47\u4E00\u4F1A\u513F")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\u6B22\u8FCE\u56DE\u6765\uFF01\u8FD9\u91CC\u53EF\u4EE5\u6682\u6B47\u4E00\u4F1A\u513F")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardSubtitle, { class: "pt-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` 10\u6708 23\u53F7 `);
                      } else {
                        return [
                          createTextVNode(" 10\u6708 23\u53F7 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div${_scopeId3}>\u4ECA\u65E5\u8BAF\u606F</div><div${_scopeId3}> \u738B\u6BC5\u8BF4\uFF1A\u201C\u6253\u538B\u4E2D\u56FD\u7684\u624B\u6BB5\u4E0D\u65AD\u82B1\u6837\u7FFB\u65B0\uFF0C\u5355\u8FB9\u5236\u88C1\u7684\u6E05\u5355\u4E0D\u65AD\u5EF6\u957F\uFF0C\u6B32\u52A0\u4E4B\u7F6A\u5230\u4E86\u532A\u5937\u6240\u601D\u7684\u7A0B\u5EA6\u3002\u7F8E\u56FD\u5982\u679C\u603B\u662F\u8BF4\u4E00\u5957\u3001\u505A\u4E00\u5957\uFF0C\u5927\u56FD\u7684\u4FE1\u8A89\u4F55\u5728\uFF1F\u7F8E\u56FD\u5982\u679C\u4E00\u542C\u5230\u2018\u4E2D\u56FD\u2019\u8FD9\u4E24\u4E2A\u5B57\u5C31\u7D27\u5F20\u7126\u8651\uFF0C\u5927\u56FD\u7684\u81EA\u4FE1\u4F55\u5728\uFF1F\u7F8E\u56FD\u5982\u679C\u53EA\u8BA9\u81EA\u5DF1\u4FDD\u6301\u7E41\u8363\uFF0C\u4E0D\u5141\u8BB8\u522B\u56FD\u6B63\u5F53\u53D1\u5C55\uFF0C\u56FD\u9645\u516C\u7406\u4F55\u5728\uFF1F\u7F8E\u56FD\u5982\u679C\u6267\u610F\u5784\u65AD\u4EF7\u503C\u94FE\u9AD8\u7AEF\uFF0C\u53EA\u8BA9\u4E2D\u56FD\u505C\u7559\u5728\u4F4E\u7AEF\uFF0C\u516C\u5E73\u7ADE\u4E89\u4F55\u5728\uFF1F\u201D \u4ED6\u5F3A\u8C03\uFF0C\u7F8E\u56FD\u9762\u5BF9\u7684\u6311\u6218\u5728\u81EA\u8EAB\uFF0C\u800C\u4E0D\u5728\u4E2D\u56FD\u3002\u5982\u679C\u4E00\u95E8\u5FC3\u601D\u6253\u538B\u4E2D\u56FD\uFF0C\u6700\u7EC8\u5FC5\u5C06\u5BB3\u4E86\u81EA\u5DF1\u3002\u201C\u6211\u4EEC\u6566\u4FC3\u7F8E\u65B9\u8BA4\u6E05\u5386\u53F2\u53D1\u5C55\u5927\u52BF\uFF0C\u5BA2\u89C2\u7406\u6027\u770B\u5F85\u4E2D\u56FD\u7684\u53D1\u5C55\uFF0C\u79EF\u6781\u52A1\u5B9E\u5730\u5F00\u5C55\u5BF9\u534E\u4EA4\u5F80\uFF0C\u8A00\u884C\u4E00\u81F4\u5730\u628A\u627F\u8BFA\u843D\u5230\u5B9E\u5904\u3002\u540C\u4E2D\u65B9\u4E00\u9053\uFF0C\u63A8\u52A8\u4E2D\u7F8E\u5173\u7CFB\u8D70\u4E0A\u7A33\u5B9A\u3001\u5065\u5EB7\u3001\u53EF\u6301\u7EED\u7684\u53D1\u5C55\u8F68\u9053\u3002\u201D </div>`);
                      } else {
                        return [
                          createVNode("div", null, "\u4ECA\u65E5\u8BAF\u606F"),
                          createVNode("div", null, " \u738B\u6BC5\u8BF4\uFF1A\u201C\u6253\u538B\u4E2D\u56FD\u7684\u624B\u6BB5\u4E0D\u65AD\u82B1\u6837\u7FFB\u65B0\uFF0C\u5355\u8FB9\u5236\u88C1\u7684\u6E05\u5355\u4E0D\u65AD\u5EF6\u957F\uFF0C\u6B32\u52A0\u4E4B\u7F6A\u5230\u4E86\u532A\u5937\u6240\u601D\u7684\u7A0B\u5EA6\u3002\u7F8E\u56FD\u5982\u679C\u603B\u662F\u8BF4\u4E00\u5957\u3001\u505A\u4E00\u5957\uFF0C\u5927\u56FD\u7684\u4FE1\u8A89\u4F55\u5728\uFF1F\u7F8E\u56FD\u5982\u679C\u4E00\u542C\u5230\u2018\u4E2D\u56FD\u2019\u8FD9\u4E24\u4E2A\u5B57\u5C31\u7D27\u5F20\u7126\u8651\uFF0C\u5927\u56FD\u7684\u81EA\u4FE1\u4F55\u5728\uFF1F\u7F8E\u56FD\u5982\u679C\u53EA\u8BA9\u81EA\u5DF1\u4FDD\u6301\u7E41\u8363\uFF0C\u4E0D\u5141\u8BB8\u522B\u56FD\u6B63\u5F53\u53D1\u5C55\uFF0C\u56FD\u9645\u516C\u7406\u4F55\u5728\uFF1F\u7F8E\u56FD\u5982\u679C\u6267\u610F\u5784\u65AD\u4EF7\u503C\u94FE\u9AD8\u7AEF\uFF0C\u53EA\u8BA9\u4E2D\u56FD\u505C\u7559\u5728\u4F4E\u7AEF\uFF0C\u516C\u5E73\u7ADE\u4E89\u4F55\u5728\uFF1F\u201D \u4ED6\u5F3A\u8C03\uFF0C\u7F8E\u56FD\u9762\u5BF9\u7684\u6311\u6218\u5728\u81EA\u8EAB\uFF0C\u800C\u4E0D\u5728\u4E2D\u56FD\u3002\u5982\u679C\u4E00\u95E8\u5FC3\u601D\u6253\u538B\u4E2D\u56FD\uFF0C\u6700\u7EC8\u5FC5\u5C06\u5BB3\u4E86\u81EA\u5DF1\u3002\u201C\u6211\u4EEC\u6566\u4FC3\u7F8E\u65B9\u8BA4\u6E05\u5386\u53F2\u53D1\u5C55\u5927\u52BF\uFF0C\u5BA2\u89C2\u7406\u6027\u770B\u5F85\u4E2D\u56FD\u7684\u53D1\u5C55\uFF0C\u79EF\u6781\u52A1\u5B9E\u5730\u5F00\u5C55\u5BF9\u534E\u4EA4\u5F80\uFF0C\u8A00\u884C\u4E00\u81F4\u5730\u628A\u627F\u8BFA\u843D\u5230\u5B9E\u5904\u3002\u540C\u4E2D\u65B9\u4E00\u9053\uFF0C\u63A8\u52A8\u4E2D\u7F8E\u5173\u7CFB\u8D70\u4E0A\u7A33\u5B9A\u3001\u5065\u5EB7\u3001\u53EF\u6301\u7EED\u7684\u53D1\u5C55\u8F68\u9053\u3002\u201D ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardActions, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, { color: "secondary" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u6362\u4E00\u6761\u6D88\u606F `);
                            } else {
                              return [
                                createTextVNode(" \u6362\u4E00\u6761\u6D88\u606F ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, { color: "secondary" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u64AD\u653E\u97F3\u4E50 `);
                            } else {
                              return [
                                createTextVNode(" \u64AD\u653E\u97F3\u4E50 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, { color: "secondary" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u6362\u4E00\u6761\u6D88\u606F ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, { color: "secondary" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u64AD\u653E\u97F3\u4E50 ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VImg, {
                      class: "align-end text-white",
                      height: "400",
                      src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
                      cover: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u6B22\u8FCE\u56DE\u6765\uFF01\u8FD9\u91CC\u53EF\u4EE5\u6682\u6B47\u4E00\u4F1A\u513F")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCardSubtitle, { class: "pt-4" }, {
                      default: withCtx(() => [
                        createTextVNode(" 10\u6708 23\u53F7 ")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode("div", null, "\u4ECA\u65E5\u8BAF\u606F"),
                        createVNode("div", null, " \u738B\u6BC5\u8BF4\uFF1A\u201C\u6253\u538B\u4E2D\u56FD\u7684\u624B\u6BB5\u4E0D\u65AD\u82B1\u6837\u7FFB\u65B0\uFF0C\u5355\u8FB9\u5236\u88C1\u7684\u6E05\u5355\u4E0D\u65AD\u5EF6\u957F\uFF0C\u6B32\u52A0\u4E4B\u7F6A\u5230\u4E86\u532A\u5937\u6240\u601D\u7684\u7A0B\u5EA6\u3002\u7F8E\u56FD\u5982\u679C\u603B\u662F\u8BF4\u4E00\u5957\u3001\u505A\u4E00\u5957\uFF0C\u5927\u56FD\u7684\u4FE1\u8A89\u4F55\u5728\uFF1F\u7F8E\u56FD\u5982\u679C\u4E00\u542C\u5230\u2018\u4E2D\u56FD\u2019\u8FD9\u4E24\u4E2A\u5B57\u5C31\u7D27\u5F20\u7126\u8651\uFF0C\u5927\u56FD\u7684\u81EA\u4FE1\u4F55\u5728\uFF1F\u7F8E\u56FD\u5982\u679C\u53EA\u8BA9\u81EA\u5DF1\u4FDD\u6301\u7E41\u8363\uFF0C\u4E0D\u5141\u8BB8\u522B\u56FD\u6B63\u5F53\u53D1\u5C55\uFF0C\u56FD\u9645\u516C\u7406\u4F55\u5728\uFF1F\u7F8E\u56FD\u5982\u679C\u6267\u610F\u5784\u65AD\u4EF7\u503C\u94FE\u9AD8\u7AEF\uFF0C\u53EA\u8BA9\u4E2D\u56FD\u505C\u7559\u5728\u4F4E\u7AEF\uFF0C\u516C\u5E73\u7ADE\u4E89\u4F55\u5728\uFF1F\u201D \u4ED6\u5F3A\u8C03\uFF0C\u7F8E\u56FD\u9762\u5BF9\u7684\u6311\u6218\u5728\u81EA\u8EAB\uFF0C\u800C\u4E0D\u5728\u4E2D\u56FD\u3002\u5982\u679C\u4E00\u95E8\u5FC3\u601D\u6253\u538B\u4E2D\u56FD\uFF0C\u6700\u7EC8\u5FC5\u5C06\u5BB3\u4E86\u81EA\u5DF1\u3002\u201C\u6211\u4EEC\u6566\u4FC3\u7F8E\u65B9\u8BA4\u6E05\u5386\u53F2\u53D1\u5C55\u5927\u52BF\uFF0C\u5BA2\u89C2\u7406\u6027\u770B\u5F85\u4E2D\u56FD\u7684\u53D1\u5C55\uFF0C\u79EF\u6781\u52A1\u5B9E\u5730\u5F00\u5C55\u5BF9\u534E\u4EA4\u5F80\uFF0C\u8A00\u884C\u4E00\u81F4\u5730\u628A\u627F\u8BFA\u843D\u5230\u5B9E\u5904\u3002\u540C\u4E2D\u65B9\u4E00\u9053\uFF0C\u63A8\u52A8\u4E2D\u7F8E\u5173\u7CFB\u8D70\u4E0A\u7A33\u5B9A\u3001\u5065\u5EB7\u3001\u53EF\u6301\u7EED\u7684\u53D1\u5C55\u8F68\u9053\u3002\u201D ")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardActions, null, {
                      default: withCtx(() => [
                        createVNode(VBtn, { color: "secondary" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u6362\u4E00\u6761\u6D88\u606F ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, { color: "secondary" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u64AD\u653E\u97F3\u4E50 ")
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, {
                class: "mx-auto",
                "max-width": "800"
              }, {
                default: withCtx(() => [
                  createVNode(VImg, {
                    class: "align-end text-white",
                    height: "400",
                    src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
                    cover: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("\u6B22\u8FCE\u56DE\u6765\uFF01\u8FD9\u91CC\u53EF\u4EE5\u6682\u6B47\u4E00\u4F1A\u513F")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCardSubtitle, { class: "pt-4" }, {
                    default: withCtx(() => [
                      createTextVNode(" 10\u6708 23\u53F7 ")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode("div", null, "\u4ECA\u65E5\u8BAF\u606F"),
                      createVNode("div", null, " \u738B\u6BC5\u8BF4\uFF1A\u201C\u6253\u538B\u4E2D\u56FD\u7684\u624B\u6BB5\u4E0D\u65AD\u82B1\u6837\u7FFB\u65B0\uFF0C\u5355\u8FB9\u5236\u88C1\u7684\u6E05\u5355\u4E0D\u65AD\u5EF6\u957F\uFF0C\u6B32\u52A0\u4E4B\u7F6A\u5230\u4E86\u532A\u5937\u6240\u601D\u7684\u7A0B\u5EA6\u3002\u7F8E\u56FD\u5982\u679C\u603B\u662F\u8BF4\u4E00\u5957\u3001\u505A\u4E00\u5957\uFF0C\u5927\u56FD\u7684\u4FE1\u8A89\u4F55\u5728\uFF1F\u7F8E\u56FD\u5982\u679C\u4E00\u542C\u5230\u2018\u4E2D\u56FD\u2019\u8FD9\u4E24\u4E2A\u5B57\u5C31\u7D27\u5F20\u7126\u8651\uFF0C\u5927\u56FD\u7684\u81EA\u4FE1\u4F55\u5728\uFF1F\u7F8E\u56FD\u5982\u679C\u53EA\u8BA9\u81EA\u5DF1\u4FDD\u6301\u7E41\u8363\uFF0C\u4E0D\u5141\u8BB8\u522B\u56FD\u6B63\u5F53\u53D1\u5C55\uFF0C\u56FD\u9645\u516C\u7406\u4F55\u5728\uFF1F\u7F8E\u56FD\u5982\u679C\u6267\u610F\u5784\u65AD\u4EF7\u503C\u94FE\u9AD8\u7AEF\uFF0C\u53EA\u8BA9\u4E2D\u56FD\u505C\u7559\u5728\u4F4E\u7AEF\uFF0C\u516C\u5E73\u7ADE\u4E89\u4F55\u5728\uFF1F\u201D \u4ED6\u5F3A\u8C03\uFF0C\u7F8E\u56FD\u9762\u5BF9\u7684\u6311\u6218\u5728\u81EA\u8EAB\uFF0C\u800C\u4E0D\u5728\u4E2D\u56FD\u3002\u5982\u679C\u4E00\u95E8\u5FC3\u601D\u6253\u538B\u4E2D\u56FD\uFF0C\u6700\u7EC8\u5FC5\u5C06\u5BB3\u4E86\u81EA\u5DF1\u3002\u201C\u6211\u4EEC\u6566\u4FC3\u7F8E\u65B9\u8BA4\u6E05\u5386\u53F2\u53D1\u5C55\u5927\u52BF\uFF0C\u5BA2\u89C2\u7406\u6027\u770B\u5F85\u4E2D\u56FD\u7684\u53D1\u5C55\uFF0C\u79EF\u6781\u52A1\u5B9E\u5730\u5F00\u5C55\u5BF9\u534E\u4EA4\u5F80\uFF0C\u8A00\u884C\u4E00\u81F4\u5730\u628A\u627F\u8BFA\u843D\u5230\u5B9E\u5904\u3002\u540C\u4E2D\u65B9\u4E00\u9053\uFF0C\u63A8\u52A8\u4E2D\u7F8E\u5173\u7CFB\u8D70\u4E0A\u7A33\u5B9A\u3001\u5065\u5EB7\u3001\u53EF\u6301\u7EED\u7684\u53D1\u5C55\u8F68\u9053\u3002\u201D ")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, null, {
                    default: withCtx(() => [
                      createVNode(VBtn, { color: "secondary" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u6362\u4E00\u6761\u6D88\u606F ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, { color: "secondary" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u64AD\u653E\u97F3\u4E50 ")
                        ]),
                        _: 1
                      })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Du4VG1ST.mjs.map
