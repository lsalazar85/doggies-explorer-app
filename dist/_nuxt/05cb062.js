(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    250: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"string","name":"baseURI","type":"string"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"address payable","name":"_sandOwner","type":"address"},{"internalType":"address","name":"_signAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"_pause","type":"bool"}],"name":"TogglePaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"allowedToExecuteMint","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseTokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"chain","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_wallet","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"checkMintAllowed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_wallet","type":"address"},{"internalType":"uint256","name":"_signatureId","type":"uint256"},{"internalType":"address","name":"_contractAddress","type":"address"},{"internalType":"uint256","name":"_chainId","type":"uint256"},{"internalType":"bytes","name":"_signature","type":"bytes"}],"name":"checkSignature","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"contractAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"erc1155Id","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"indexWave","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_wallet","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_signatureId","type":"uint256"},{"internalType":"bytes","name":"_signature","type":"bytes"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_count","type":"uint256"}],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setAllowedExecuteMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"setSandOwnerAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_signAddress","type":"address"}],"name":"setSignAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_waveType","type":"uint256"},{"internalType":"uint256","name":"_waveMaxTokens","type":"uint256"},{"internalType":"uint256","name":"_waveMaxTokensToBuy","type":"uint256"},{"internalType":"uint256","name":"_waveSingleTokenPrice","type":"uint256"},{"internalType":"address","name":"_contractAddress","type":"address"},{"internalType":"uint256","name":"_erc1155Id","type":"uint256"}],"name":"setupWave","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"signAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"toggleSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"waveMaxTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"waveMaxTokensToBuy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"waveSingleTokenPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"waveTotalMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"waveType","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]'
      );
    },
    253: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(12),
        y = (n(58), n(18), n(1)),
        o = n(252),
        d = n.n(o),
        l = n(250),
        m = Object(y.b)({
          __name: "Search",
          setup: function (e) {
            var t = Object(y.c)(""),
              n = (function () {
                var e = Object(r.a)(
                  regeneratorRuntime.mark(function e() {
                    var n, r, y, o, m;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (n = new d.a(
                                  "".concat(
                                    "https://mainnet.infura.io/v3/c83c37fa3b754594ada81272a37fa9b7"
                                  )
                                )),
                                "0xC7dF86762ba83f2a6197e1Ff9Bb40ae0f696B9E6",
                                (r = new n.eth.Contract(
                                  l,
                                  "0xC7dF86762ba83f2a6197e1Ff9Bb40ae0f696B9E6"
                                )),
                                (e.next = 6),
                                r.methods
                                  .tokenURI(t.value)
                                  .call()
                                  .then(function (e) {
                                    return e;
                                  })
                              );
                            case 6:
                              return (
                                (y = e.sent), (e.next = 9), fetch("".concat(y))
                              );
                            case 9:
                              return (o = e.sent), (e.next = 12), o.json();
                            case 12:
                              (m = e.sent), console.log(m), (e.next = 19);
                              break;
                            case 16:
                              (e.prev = 16),
                                (e.t0 = e.catch(0)),
                                console.log(e.t0);
                            case 19:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 16]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })();
            return { __sfc: !0, inputTokenId: t, onSubmit: n };
          },
        }),
        c = m,
        T = n(42),
        component = Object(T.a)(
          c,
          function () {
            var e = this,
              t = e._self._c,
              n = e._self._setupProxy;
            return t("div", { staticClass: "search-container" }, [
              t(
                "form",
                {
                  on: {
                    submit: function (e) {
                      return e.preventDefault(), n.onSubmit();
                    },
                  },
                },
                [
                  t("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: n.inputTokenId,
                        expression: "inputTokenId",
                        modifiers: { number: !0 },
                      },
                    ],
                    attrs: { placeholder: "search" },
                    domProps: { value: n.inputTokenId },
                    on: {
                      input: function (t) {
                        t.target.composing ||
                          (n.inputTokenId = e._n(t.target.value));
                      },
                      blur: function (t) {
                        return e.$forceUpdate();
                      },
                    },
                  }),
                  e._v(" "),
                  t("button", { attrs: { type: "submit" } }, [e._v("button")]),
                ]
              ),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.default = component.exports;
    },
  },
]);
