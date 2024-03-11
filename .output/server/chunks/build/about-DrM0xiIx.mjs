import { useSSRContext, mergeProps, withCtx, createTextVNode, createVNode } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { V as VMain, a as VCard } from './VMain-CfJb7-Gh.mjs';
import './server.mjs';
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
              _push3(`\u5173\u4E8E`);
            } else {
              return [
                createTextVNode("\u5173\u4E8E")
              ];
            }
          }),
          subtitle: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`\u8BB2\u4E00\u4E0B\u8FD9\u4E2A\u535A\u5BA2`);
            } else {
              return [
                createTextVNode("\u8BB2\u4E00\u4E0B\u8FD9\u4E2A\u535A\u5BA2")
              ];
            }
          }),
          text: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="p-32 indent-8"${_scopeId2}> \u8FD9\u4E2A\u535A\u5BA2\u4E3B\u8981\u7528nuxt3+vuetify+tailwindcss+pinia+nitro\u6784\u5EFA\uFF0C\u7528\u6765\u8BB0\u5F55\u81EA\u5DF1\u7684\u4EBA\u751F\u75D5\u8FF9\uFF0C\u6211\u5E76\u975E\u8FBE\u5B98\u663E\u8D35\uFF0C\u4ECA\u5929\u5230\u4E86\u8FD9\u4E00\u6B65\uFF0C\u5168\u6743\u662F\u4ECE\u6700\u5E95\u5C42\u4E00\u70B9\u4E00\u70B9\u722C\u4E0A\u6765\u7684\uFF0C\u6211\u5E0C\u671B\u81EA\u5DF1\u3001\u8FD8\u6709\u6BCF\u4E00\u4E2A\u770B\u89C1\u6211\u535A\u5BA2\u7684\u4EBA\uFF0C\u90FD\u53EF\u4EE5\u5C06\u4EBA\u751F\u6D3B\u5F97\u7CBE\u5F69\u3002 </div><p class="text-right"${_scopeId2}>-- \u751F\u547D\u53EA\u6709\u4E00\u6B21\uFF0C\u4E14\u884C\u4E14\u73CD\u60DC</p>`);
            } else {
              return [
                createVNode("div", { class: "p-32 indent-8" }, " \u8FD9\u4E2A\u535A\u5BA2\u4E3B\u8981\u7528nuxt3+vuetify+tailwindcss+pinia+nitro\u6784\u5EFA\uFF0C\u7528\u6765\u8BB0\u5F55\u81EA\u5DF1\u7684\u4EBA\u751F\u75D5\u8FF9\uFF0C\u6211\u5E76\u975E\u8FBE\u5B98\u663E\u8D35\uFF0C\u4ECA\u5929\u5230\u4E86\u8FD9\u4E00\u6B65\uFF0C\u5168\u6743\u662F\u4ECE\u6700\u5E95\u5C42\u4E00\u70B9\u4E00\u70B9\u722C\u4E0A\u6765\u7684\uFF0C\u6211\u5E0C\u671B\u81EA\u5DF1\u3001\u8FD8\u6709\u6BCF\u4E00\u4E2A\u770B\u89C1\u6211\u535A\u5BA2\u7684\u4EBA\uFF0C\u90FD\u53EF\u4EE5\u5C06\u4EBA\u751F\u6D3B\u5F97\u7CBE\u5F69\u3002 "),
                createVNode("p", { class: "text-right" }, "-- \u751F\u547D\u53EA\u6709\u4E00\u6B21\uFF0C\u4E14\u884C\u4E14\u73CD\u60DC")
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
              createTextVNode("\u5173\u4E8E")
            ]),
            subtitle: withCtx(() => [
              createTextVNode("\u8BB2\u4E00\u4E0B\u8FD9\u4E2A\u535A\u5BA2")
            ]),
            text: withCtx(() => [
              createVNode("div", { class: "p-32 indent-8" }, " \u8FD9\u4E2A\u535A\u5BA2\u4E3B\u8981\u7528nuxt3+vuetify+tailwindcss+pinia+nitro\u6784\u5EFA\uFF0C\u7528\u6765\u8BB0\u5F55\u81EA\u5DF1\u7684\u4EBA\u751F\u75D5\u8FF9\uFF0C\u6211\u5E76\u975E\u8FBE\u5B98\u663E\u8D35\uFF0C\u4ECA\u5929\u5230\u4E86\u8FD9\u4E00\u6B65\uFF0C\u5168\u6743\u662F\u4ECE\u6700\u5E95\u5C42\u4E00\u70B9\u4E00\u70B9\u722C\u4E0A\u6765\u7684\uFF0C\u6211\u5E0C\u671B\u81EA\u5DF1\u3001\u8FD8\u6709\u6BCF\u4E00\u4E2A\u770B\u89C1\u6211\u535A\u5BA2\u7684\u4EBA\uFF0C\u90FD\u53EF\u4EE5\u5C06\u4EBA\u751F\u6D3B\u5F97\u7CBE\u5F69\u3002 "),
              createVNode("p", { class: "text-right" }, "-- \u751F\u547D\u53EA\u6709\u4E00\u6B21\uFF0C\u4E14\u884C\u4E14\u73CD\u60DC")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { about as default };
//# sourceMappingURL=about-DrM0xiIx.mjs.map
