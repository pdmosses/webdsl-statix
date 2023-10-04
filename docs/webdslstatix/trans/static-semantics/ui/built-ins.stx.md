---
title: built-ins.stx
hide:
  - toc
---

# `built-ins.stx`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/ui/built-ins.stx]

[pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/ui/built-ins.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/trans/static-semantics/ui/built-ins.stx "The source file on GitHub"

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
38
39
40
41
42
43
44
45
46
47
48
49
50
51
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../../webdsl-ui.stx#static-semantics/ui/built-ins_250_279" id="static-semantics/ui/built-ins_7_36" title="Referenced at ../../webdsl-ui.stx line 13; ../../webdsl.stx line 9">static-semantics/ui/built-ins</a>

<span class="keyword">imports</span>
  <a href="../../types/built-ins.stx#static-semantics/types/built-ins_7_39" id="static-semantics/types/built-ins_48_80" title="Defined at ../../types/built-ins.stx line 1">static-semantics/types/built-ins</a>

  <a href="../template-calls.stx#static-semantics/ui/template-calls_7_41" id="static-semantics/ui/template-calls_84_118" title="Defined at ../template-calls.stx line 1">static-semantics/ui/template-calls</a>

  <a href="../../webdsl.stx#static-semantics/webdsl_7_30" id="static-semantics/webdsl_122_145" title="Defined at ../../webdsl.stx line 1">static-semantics/webdsl</a>
  <a href="../../webdsl-ui.stx#static-semantics/webdsl-ui_7_33" id="static-semantics/webdsl-ui_148_174" title="Defined at ../../webdsl-ui.stx line 1">static-semantics/webdsl-ui</a>

<span class="keyword">rules</span>

  <a href="#declareUIBuiltIns_213_230" id="declareUIBuiltIns_185_202" title="Referenced at line 14; ../../webdsl.stx line 383">declareUIBuiltIns</a> : <span class="keyword">scope</span>
  <a href="#declareUIBuiltIns_185_202" id="declareUIBuiltIns_213_230" title="Defined at line 13">declareUIBuiltIns</a>(<a href="#s_257_258" id="s_231_232" title="Referenced at line 15, 16, 16, 17, 17, 18, 19, 21, 22, 23, 24, 24, 25, 25, 33, 33, 33, 35, 35, 36, 36, 36, 37, 37, 38, 38, 39, 39, 41, 41, 43, 43">s</a>) :-
    <a href="../../webdsl.stx#declareTemplate_5279_5294" id="declareTemplate_241_256" title="Defined at ../../webdsl.stx line 151">declareTemplate</a>(<a href="#s_231_232" id="s_257_258" title="Defined at line 14">s</a>, "title", []),
    <a href="../../webdsl.stx#declareTemplate_5279_5294" id="declareTemplate_278_293" title="Defined at ../../webdsl.stx line 151">declareTemplate</a>(<a href="#s_231_232" id="s_294_295" title="Defined at line 14">s</a>, "text", [<a href="../../types/built-ins.stx#object_2954_2960" id="object_306_312" title="Defined at ../../types/built-ins.stx line 84">object</a>(<a href="#s_231_232" id="s_313_314" title="Defined at line 14">s</a>)]),
    <a href="../../webdsl.stx#declareTemplate_5279_5294" id="declareTemplate_323_338" title="Defined at ../../webdsl.stx line 151">declareTemplate</a>(<a href="#s_231_232" id="s_339_340" title="Defined at line 14">s</a>, "image", [<a href="../../types/built-ins.stx#url_2049_2052" id="url_352_355" title="Defined at ../../types/built-ins.stx line 54">url</a>(<a href="#s_231_232" id="s_356_357" title="Defined at line 14">s</a>)]),
    <a href="../../webdsl.stx#declareTemplate_5279_5294" id="declareTemplate_366_381" title="Defined at ../../webdsl.stx line 151">declareTemplate</a>(<a href="#s_231_232" id="s_382_383" title="Defined at line 14">s</a>, "header", []),
    <a href="../../webdsl.stx#declareTemplate_5279_5294" id="declareTemplate_404_419" title="Defined at ../../webdsl.stx line 151">declareTemplate</a>(<a href="#s_231_232" id="s_420_421" title="Defined at line 14">s</a>, "section", []),
//    declTemplate(s, "<span class="keyword">url</span>", [<span class="keyword">url</span>(<span class="keyword">s</span>)], []), <span class="layout">// TO-DO: investigate if url is template or pageplaceholde</span>
    <a href="../../webdsl.stx#declareTemplate_5279_5294" id="declareTemplate_546_561" title="Defined at ../../webdsl.stx line 151">declareTemplate</a>(<a href="#s_231_232" id="s_562_563" title="Defined at line 14">s</a>, "form", []),
    <a href="../../webdsl.stx#declareTemplate_5279_5294" id="declareTemplate_582_597" title="Defined at ../../webdsl.stx line 151">declareTemplate</a>(<a href="#s_231_232" id="s_598_599" title="Defined at line 14">s</a>, "dynamicform", []),
    <a href="../../webdsl.stx#declareTemplate_5279_5294" id="declareTemplate_625_640" title="Defined at ../../webdsl.stx line 151">declareTemplate</a>(<a href="#s_231_232" id="s_641_642" title="Defined at line 14">s</a>, "captcha", []),
    <a href="../../webdsl.stx#declareTemplate_5279_5294" id="declareTemplate_664_679" title="Defined at ../../webdsl.stx line 151">declareTemplate</a>(<a href="#s_231_232" id="s_680_681" title="Defined at line 14">s</a>, "input", [<a href="../../types/built-ins.stx#object_2954_2960" id="object_693_699" title="Defined at ../../types/built-ins.stx line 84">object</a>(<a href="#s_231_232" id="s_700_701" title="Defined at line 14">s</a>)]),
    <a href="../../webdsl.stx#declareTemplate_5279_5294" id="declareTemplate_710_725" title="Defined at ../../webdsl.stx line 151">declareTemplate</a>(<a href="#s_231_232" id="s_726_727" title="Defined at line 14">s</a>, "output", [<a href="../../types/built-ins.stx#object_2954_2960" id="object_740_746" title="Defined at ../../types/built-ins.stx line 84">object</a>(<a href="#s_231_232" id="s_747_748" title="Defined at line 14">s</a>)]),

<span class="layout">//    declareTemplate(s, "navigate", []),</span>
<span class="layout">//    declareTemplate(s, "navigate", [url(s)]),</span>
<span class="layout">//    declareTemplate(s, "navigate", [PAGE(_)]), // disable PAGE(_) declarations for now since they are producing nabl2.Var in libraries</span>
<span class="layout">//    declareTemplate(s, "navigate", [string(s), url(s)]),</span>
<span class="layout">//    declareTemplate(s, "navigate", [string(s), PAGE(_)]), // disable PAGE(_) declarations for now since they are producing nabl2.Var in libraries</span>
<span class="layout">//    declareTemplate(s, "navigatebutton", [PAGE(_), string(s)]), // disable PAGE(_) declarations for now since they are producing nabl2.Var in libraries</span>
    <a href="../../webdsl.stx#declareTemplate_5279_5294" id="declareTemplate_1346_1361" title="Defined at ../../webdsl.stx line 151">declareTemplate</a>(<a href="#s_231_232" id="s_1362_1363" title="Defined at line 14">s</a>, "navigatebutton", [<a href="../../types/built-ins.stx#url_2049_2052" id="url_1384_1387" title="Defined at ../../types/built-ins.stx line 54">url</a>(<a href="#s_231_232" id="s_1388_1389" title="Defined at line 14">s</a>), <a href="../../types/built-ins.stx#string_1822_1828" id="string_1392_1398" title="Defined at ../../types/built-ins.stx line 48">string</a>(<a href="#s_231_232" id="s_1399_1400" title="Defined at line 14">s</a>)]),

    <a href="../../webdsl.stx#declareTemplate_5279_5294" id="declareTemplate_1410_1425" title="Defined at ../../webdsl.stx line 151">declareTemplate</a>(<a href="#s_231_232" id="s_1426_1427" title="Defined at line 14">s</a>, "includeCSS", [<a href="../../types/built-ins.stx#string_1822_1828" id="string_1444_1450" title="Defined at ../../types/built-ins.stx line 48">string</a>(<a href="#s_231_232" id="s_1451_1452" title="Defined at line 14">s</a>)]),
    <a href="../../webdsl.stx#declareTemplate_5279_5294" id="declareTemplate_1461_1476" title="Defined at ../../webdsl.stx line 151">declareTemplate</a>(<a href="#s_231_232" id="s_1477_1478" title="Defined at line 14">s</a>, "includeCSS", [<a href="../../types/built-ins.stx#string_1822_1828" id="string_1495_1501" title="Defined at ../../types/built-ins.stx line 48">string</a>(<a href="#s_231_232" id="s_1502_1503" title="Defined at line 14">s</a>), <a href="../../types/built-ins.stx#string_1822_1828" id="string_1506_1512" title="Defined at ../../types/built-ins.stx line 48">string</a>(<a href="#s_231_232" id="s_1513_1514" title="Defined at line 14">s</a>)]),
    <a href="../../webdsl.stx#declareTemplate_5279_5294" id="declareTemplate_1523_1538" title="Defined at ../../webdsl.stx line 151">declareTemplate</a>(<a href="#s_231_232" id="s_1539_1540" title="Defined at line 14">s</a>, "includeJS", [<a href="../../types/built-ins.stx#string_1822_1828" id="string_1556_1562" title="Defined at ../../types/built-ins.stx line 48">string</a>(<a href="#s_231_232" id="s_1563_1564" title="Defined at line 14">s</a>)]),
    <a href="../../webdsl.stx#declareTemplate_5279_5294" id="declareTemplate_1573_1588" title="Defined at ../../webdsl.stx line 151">declareTemplate</a>(<a href="#s_231_232" id="s_1589_1590" title="Defined at line 14">s</a>, "includeJSLast", [<a href="../../types/built-ins.stx#string_1822_1828" id="string_1610_1616" title="Defined at ../../types/built-ins.stx line 48">string</a>(<a href="#s_231_232" id="s_1617_1618" title="Defined at line 14">s</a>)]),
    <a href="../../webdsl.stx#declareTemplate_5279_5294" id="declareTemplate_1627_1642" title="Defined at ../../webdsl.stx line 151">declareTemplate</a>(<a href="#s_231_232" id="s_1643_1644" title="Defined at line 14">s</a>, "includeHead", [<a href="../../types/built-ins.stx#string_1822_1828" id="string_1662_1668" title="Defined at ../../types/built-ins.stx line 48">string</a>(<a href="#s_231_232" id="s_1669_1670" title="Defined at line 14">s</a>)]),

    <a href="../../webdsl.stx#declareTemplate_5279_5294" id="declareTemplate_1680_1695" title="Defined at ../../webdsl.stx line 151">declareTemplate</a>(<a href="#s_231_232" id="s_1696_1697" title="Defined at line 14">s</a>, "templateContext", [<a href="../../types/built-ins.stx#string_1822_1828" id="string_1719_1725" title="Defined at ../../types/built-ins.stx line 48">string</a>(<a href="#s_231_232" id="s_1726_1727" title="Defined at line 14">s</a>)]),

    <a href="../../webdsl.stx#declarePage_5982_5993" id="declarePage_1737_1748" title="Defined at ../../webdsl.stx line 163">declarePage</a>(<a href="#s_231_232" id="s_1749_1750" title="Defined at line 14">s</a>, "url", [<a href="../../types/built-ins.stx#string_1822_1828" id="string_1760_1766" title="Defined at ../../types/built-ins.stx line 48">string</a>(<a href="#s_231_232" id="s_1767_1768" title="Defined at line 14">s</a>)]).

<span class="keyword">rules</span> <span class="layout">// navigate function call</span>

  <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_1809_1818" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(s, <a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#ThisCall2Exp_4393_4405" id="ThisCall2Exp_1822_1834" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 135">ThisCall2Exp</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#ThisCall_4428_4436" id="ThisCall_1835_1843" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 136">ThisCall</a>("navigate", [<a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#ThisCall2Exp_4393_4405" id="ThisCall2Exp_1857_1869" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 135">ThisCall2Exp</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#ThisCall_4428_4436" id="ThisCall_1870_1878" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 136">ThisCall</a>(<a href="#p_1935_1936" id="p_1879_1880" title="Referenced at line 48">p</a>, <a href="#args_1938_1942" id="args_1882_1886" title="Referenced at line 48">args</a>))]))) = <a href="../../types/built-ins.stx#string_1822_1828" id="string_1895_1901" title="Defined at ../../types/built-ins.stx line 48">string</a>(<a href="#s_1932_1933" id="s_1902_1903" title="Referenced at line 48">s</a>) :-
    <a href="../template-calls.stx#pageCallOk_internal_3645_3664" id="pageCallOk_internal_1912_1931" title="Defined at ../template-calls.stx line 84">pageCallOk_internal</a>(<a href="#s_1902_1903" id="s_1932_1933" title="Defined at line 47">s</a>, <a href="#p_1879_1880" id="p_1935_1936" title="Defined at line 47">p</a>, <a href="#args_1882_1886" id="args_1938_1942" title="Defined at line 47">args</a>).

  <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_1948_1957" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<span id="s_1958_1959" title="Not referenced locally, nor via imports">s</span>, <a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#ThisCall2Exp_4393_4405" id="ThisCall2Exp_1961_1973" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 135">ThisCall2Exp</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#ThisCall_4428_4436" id="ThisCall_1974_1982" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 136">ThisCall</a>("navigate", [_]))) = <a href="../../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_2004_2011" title="Defined at ../../webdsl-types.stx line 49">UNTYPED</a>() :-
    <span class="keyword">false</span> | <span class="keyword">error</span> $[Navigate function should have a page call or url(...) argument].

</code></pre></td></tr></tbody></table></div>