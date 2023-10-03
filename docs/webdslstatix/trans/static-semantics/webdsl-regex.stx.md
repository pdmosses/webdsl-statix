---
title: webdsl-regex.stx
hide:
  - toc
---

# `webdsl-regex.stx`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/webdsl-regex.stx]

[pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/webdsl-regex.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/trans/static-semantics/webdsl-regex.stx "The source file on GitHub"

<div class="stx"><table class="highlighttable"><tbody><tr><td class="linenos"><div class="linenodiv"><pre><span></span>1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl.stx#static-semantics/webdsl-regex_486_515" id="static-semantics/webdsl-regex_7_36" title="Referenced at ../webdsl.stx line 20">static-semantics/webdsl-regex</a>

<span class="keyword">imports</span>
  <a href="../types/built-ins.stx#static-semantics/types/built-ins_7_39" id="static-semantics/types/built-ins_48_80" title="Defined at ../types/built-ins.stx line 1">static-semantics/types/built-ins</a>

  <a href="../webdsl.stx#static-semantics/webdsl_7_30" id="static-semantics/webdsl_84_107" title="Defined at ../webdsl.stx line 1">static-semantics/webdsl</a>

<span class="keyword">rules</span>

  <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_118_127" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_262_263" id="s_128_129" title="Referenced at line 12">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Regex-sig.stx#RegexCall_2613_2622" id="RegexCall_131_140" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Regex-sig.stx line 108">RegexCall</a>(_, <a href="#f_229_230" id="f_144_145" title="Referenced at line 11">f</a>, <a href="#args_265_269" id="args_147_151" title="Referenced at line 12">args</a>)) = <a href="../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_156_163" title="Defined at ../webdsl-types.stx line 49">UNTYPED</a>() :- { <a href="#argTypes_238_246" id="argTypes_171_179" title="Referenced at line 12">argTypes</a> }
    <span class="keyword">false</span> | <span class="keyword">error</span> $[Cannot resolve Regex Call [<a href="#f_144_145" id="f_229_230" title="Defined at line 10">f</a>]],
    <a href="#argTypes_171_179" id="argTypes_238_246" title="Defined at line 10">argTypes</a> == <a href="../webdsl.stx#typesOfExps_16528_16539" id="typesOfExps_250_261" title="Defined at ../webdsl.stx line 387">typesOfExps</a>(<a href="#s_128_129" id="s_262_263" title="Defined at line 10">s</a>, <a href="#args_147_151" id="args_265_269" title="Defined at line 10">args</a>).

  <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_275_284" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(s, <a href="../../../src-gen/statix/signatures/WebDSL-Regex-sig.stx#RegexCall_2613_2622" id="RegexCall_288_297" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Regex-sig.stx line 108">RegexCall</a>(_, "find", <a href="#args_397_401" id="args_309_313" title="Referenced at line 16">args</a>)) = <a href="../types/built-ins.stx#bool_2637_2641" id="bool_318_322" title="Defined at ../types/built-ins.stx line 72">bool</a>(<a href="#s_361_362" id="s_323_324" title="Referenced at line 15, 16">s</a>) :- {<a href="#argTypes_370_378" id="argTypes_330_338" title="Referenced at line 16, 17, 17">argTypes</a> <a href="#ts_347_349" id="ts_339_341" title="Referenced at line 15, 17, 17">ts</a>}
    <a href="#ts_339_341" id="ts_347_349" title="Defined at line 14">ts</a> == [<a href="../types/built-ins.stx#string_1822_1828" id="string_354_360" title="Defined at ../types/built-ins.stx line 48">string</a>(<a href="#s_323_324" id="s_361_362" title="Defined at line 14">s</a>)],
    <a href="#argTypes_330_338" id="argTypes_370_378" title="Defined at line 14">argTypes</a> == <a href="../webdsl.stx#typesOfExps_16528_16539" id="typesOfExps_382_393" title="Defined at ../webdsl.stx line 387">typesOfExps</a>(<a href="#s_323_324" id="s_394_395" title="Defined at line 14">s</a>, <a href="#args_309_313" id="args_397_401" title="Defined at line 14">args</a>),
    <a href="../webdsl.stx#typesCompatible_17112_17127" id="typesCompatible_408_423" title="Defined at ../webdsl.stx line 401">typesCompatible</a>(<a href="#argTypes_330_338" id="argTypes_424_432" title="Defined at line 14">argTypes</a>, <a href="#ts_339_341" id="ts_434_436" title="Defined at line 14">ts</a>) == <a href="../webdsl.stx#TRUE_828_832" id="TRUE_441_445" title="Defined at ../webdsl.stx line 34">TRUE</a>() | <span class="keyword">error</span> $[Given argument types not compatible with page definition. Got [<a href="#argTypes_330_338" id="argTypes_521_529" title="Defined at line 14">argTypes</a>] but expected [<a href="#ts_339_341" id="ts_545_547" title="Defined at line 14">ts</a>]].

  <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_554_563" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_641_642" id="s_564_565" title="Referenced at line 20, 21">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Regex-sig.stx#RegexCall_2613_2622" id="RegexCall_567_576" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Regex-sig.stx line 108">RegexCall</a>(_, "match", <a href="#args_677_681" id="args_589_593" title="Referenced at line 21">args</a>)) = <a href="../types/built-ins.stx#bool_2637_2641" id="bool_598_602" title="Defined at ../types/built-ins.stx line 72">bool</a>(s) :- {<a href="#argTypes_650_658" id="argTypes_610_618" title="Referenced at line 21, 22, 22">argTypes</a> <a href="#ts_627_629" id="ts_619_621" title="Referenced at line 20, 22, 22">ts</a>}
    <a href="#ts_619_621" id="ts_627_629" title="Defined at line 19">ts</a> == [<a href="../types/built-ins.stx#string_1822_1828" id="string_634_640" title="Defined at ../types/built-ins.stx line 48">string</a>(<a href="#s_564_565" id="s_641_642" title="Defined at line 19">s</a>)],
    <a href="#argTypes_610_618" id="argTypes_650_658" title="Defined at line 19">argTypes</a> == <a href="../webdsl.stx#typesOfExps_16528_16539" id="typesOfExps_662_673" title="Defined at ../webdsl.stx line 387">typesOfExps</a>(<a href="#s_564_565" id="s_674_675" title="Defined at line 19">s</a>, <a href="#args_589_593" id="args_677_681" title="Defined at line 19">args</a>),
    <a href="../webdsl.stx#typesCompatible_17112_17127" id="typesCompatible_688_703" title="Defined at ../webdsl.stx line 401">typesCompatible</a>(<a href="#argTypes_610_618" id="argTypes_704_712" title="Defined at line 19">argTypes</a>, <a href="#ts_619_621" id="ts_714_716" title="Defined at line 19">ts</a>) == <a href="../webdsl.stx#TRUE_828_832" id="TRUE_721_725" title="Defined at ../webdsl.stx line 34">TRUE</a>() | <span class="keyword">error</span> $[Given argument types not compatible with page definition. Got [<a href="#argTypes_610_618" id="argTypes_801_809" title="Defined at line 19">argTypes</a>] but expected [<a href="#ts_619_621" id="ts_825_827" title="Defined at line 19">ts</a>]].

  <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_834_843" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_929_930" id="s_844_845" title="Referenced at line 25, 26">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Regex-sig.stx#RegexCall_2613_2622" id="RegexCall_847_856" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Regex-sig.stx line 108">RegexCall</a>(_, "split", <a href="#args_965_969" id="args_869_873" title="Referenced at line 26">args</a>)) = <a href="../webdsl-types.stx#LIST_891_895" id="LIST_878_882" title="Defined at ../webdsl-types.stx line 35">LIST</a>(<a href="../types/built-ins.stx#string_1822_1828" id="string_883_889" title="Defined at ../types/built-ins.stx line 48">string</a>(s)) :- {<a href="#argTypes_938_946" id="argTypes_898_906" title="Referenced at line 26, 27, 27">argTypes</a> <a href="#ts_915_917" id="ts_907_909" title="Referenced at line 25, 27, 27">ts</a>}
    <a href="#ts_907_909" id="ts_915_917" title="Defined at line 24">ts</a> == [<a href="../types/built-ins.stx#string_1822_1828" id="string_922_928" title="Defined at ../types/built-ins.stx line 48">string</a>(<a href="#s_844_845" id="s_929_930" title="Defined at line 24">s</a>)],
    <a href="#argTypes_898_906" id="argTypes_938_946" title="Defined at line 24">argTypes</a> == <a href="../webdsl.stx#typesOfExps_16528_16539" id="typesOfExps_950_961" title="Defined at ../webdsl.stx line 387">typesOfExps</a>(<a href="#s_844_845" id="s_962_963" title="Defined at line 24">s</a>, <a href="#args_869_873" id="args_965_969" title="Defined at line 24">args</a>),
    <a href="../webdsl.stx#typesCompatible_17112_17127" id="typesCompatible_976_991" title="Defined at ../webdsl.stx line 401">typesCompatible</a>(<a href="#argTypes_898_906" id="argTypes_992_1000" title="Defined at line 24">argTypes</a>, <a href="#ts_907_909" id="ts_1002_1004" title="Defined at line 24">ts</a>) == <a href="../webdsl.stx#TRUE_828_832" id="TRUE_1009_1013" title="Defined at ../webdsl.stx line 34">TRUE</a>() | <span class="keyword">error</span> $[Given argument types not compatible with page definition. Got [<a href="#argTypes_898_906" id="argTypes_1089_1097" title="Defined at line 24">argTypes</a>] but expected [<a href="#ts_907_909" id="ts_1113_1115" title="Defined at line 24">ts</a>]].

  <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_1122_1131" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_1216_1217" id="s_1132_1133" title="Referenced at line 30, 30, 31">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Regex-sig.stx#RegexCall_2613_2622" id="RegexCall_1135_1144" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Regex-sig.stx line 108">RegexCall</a>(_, "replaceAll", <a href="#args_1263_1267" id="args_1162_1166" title="Referenced at line 31">args</a>)) = <a href="../types/built-ins.stx#string_1822_1828" id="string_1171_1177" title="Defined at ../types/built-ins.stx line 48">string</a>(s) :- {<a href="#argTypes_1236_1244" id="argTypes_1185_1193" title="Referenced at line 31, 32, 32">argTypes</a> <a href="#ts_1202_1204" id="ts_1194_1196" title="Referenced at line 30, 32, 32">ts</a>}
    <a href="#ts_1194_1196" id="ts_1202_1204" title="Defined at line 29">ts</a> == [<a href="../types/built-ins.stx#string_1822_1828" id="string_1209_1215" title="Defined at ../types/built-ins.stx line 48">string</a>(<a href="#s_1132_1133" id="s_1216_1217" title="Defined at line 29">s</a>), <a href="../types/built-ins.stx#string_1822_1828" id="string_1220_1226" title="Defined at ../types/built-ins.stx line 48">string</a>(<a href="#s_1132_1133" id="s_1227_1228" title="Defined at line 29">s</a>)],
    <a href="#argTypes_1185_1193" id="argTypes_1236_1244" title="Defined at line 29">argTypes</a> == <a href="../webdsl.stx#typesOfExps_16528_16539" id="typesOfExps_1248_1259" title="Defined at ../webdsl.stx line 387">typesOfExps</a>(<a href="#s_1132_1133" id="s_1260_1261" title="Defined at line 29">s</a>, <a href="#args_1162_1166" id="args_1263_1267" title="Defined at line 29">args</a>),
    <a href="../webdsl.stx#typesCompatible_17112_17127" id="typesCompatible_1274_1289" title="Defined at ../webdsl.stx line 401">typesCompatible</a>(<a href="#argTypes_1185_1193" id="argTypes_1290_1298" title="Defined at line 29">argTypes</a>, <a href="#ts_1194_1196" id="ts_1300_1302" title="Defined at line 29">ts</a>) == <a href="../webdsl.stx#TRUE_828_832" id="TRUE_1307_1311" title="Defined at ../webdsl.stx line 34">TRUE</a>() | <span class="keyword">error</span> $[Given argument types not compatible with page definition. Got [<a href="#argTypes_1185_1193" id="argTypes_1387_1395" title="Defined at line 29">argTypes</a>] but expected [<a href="#ts_1194_1196" id="ts_1411_1413" title="Defined at line 29">ts</a>]].

  <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_1420_1429" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_1516_1517" id="s_1430_1431" title="Referenced at line 35, 35, 36">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Regex-sig.stx#RegexCall_2613_2622" id="RegexCall_1433_1442" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Regex-sig.stx line 108">RegexCall</a>(_, "replaceFirst", <a href="#args_1563_1567" id="args_1462_1466" title="Referenced at line 36">args</a>)) = <a href="../types/built-ins.stx#string_1822_1828" id="string_1471_1477" title="Defined at ../types/built-ins.stx line 48">string</a>(s) :- {<a href="#argTypes_1536_1544" id="argTypes_1485_1493" title="Referenced at line 36, 37, 37">argTypes</a> <a href="#ts_1502_1504" id="ts_1494_1496" title="Referenced at line 35, 37, 37">ts</a>}
    <a href="#ts_1494_1496" id="ts_1502_1504" title="Defined at line 34">ts</a> == [<a href="../types/built-ins.stx#string_1822_1828" id="string_1509_1515" title="Defined at ../types/built-ins.stx line 48">string</a>(<a href="#s_1430_1431" id="s_1516_1517" title="Defined at line 34">s</a>), <a href="../types/built-ins.stx#string_1822_1828" id="string_1520_1526" title="Defined at ../types/built-ins.stx line 48">string</a>(<a href="#s_1430_1431" id="s_1527_1528" title="Defined at line 34">s</a>)],
    <a href="#argTypes_1485_1493" id="argTypes_1536_1544" title="Defined at line 34">argTypes</a> == <a href="../webdsl.stx#typesOfExps_16528_16539" id="typesOfExps_1548_1559" title="Defined at ../webdsl.stx line 387">typesOfExps</a>(<a href="#s_1430_1431" id="s_1560_1561" title="Defined at line 34">s</a>, <a href="#args_1462_1466" id="args_1563_1567" title="Defined at line 34">args</a>),
    <a href="../webdsl.stx#typesCompatible_17112_17127" id="typesCompatible_1574_1589" title="Defined at ../webdsl.stx line 401">typesCompatible</a>(<a href="#argTypes_1485_1493" id="argTypes_1590_1598" title="Defined at line 34">argTypes</a>, <a href="#ts_1494_1496" id="ts_1600_1602" title="Defined at line 34">ts</a>) == <a href="../webdsl.stx#TRUE_828_832" id="TRUE_1607_1611" title="Defined at ../webdsl.stx line 34">TRUE</a>() | <span class="keyword">error</span> $[Given argument types not compatible with page definition. Got [<a href="#argTypes_1485_1493" id="argTypes_1687_1695" title="Defined at line 34">argTypes</a>] but expected [<a href="#ts_1494_1496" id="ts_1711_1713" title="Defined at line 34">ts</a>]].

</code></pre></td></tr></tbody></table></div>