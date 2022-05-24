import { openBlock, createElementBlock, createElementVNode } from "vue";
var _style_0 = { "content": { "": { "flexDirection": "column" } }, "tabBar": { "": { "height": "100rpx" } } };
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", { class: "content icon" }, [
    createElementVNode("view", { style: { "background-color": "antiquewhite", "flex": "1" } }),
    createElementVNode("view", { class: "tabBar" }, [
      createElementVNode("view", { class: "icon" })
    ])
  ]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "D:/Desktop/uniapp/Store/pages/index/index.nvue"]]);
export { index as default };
