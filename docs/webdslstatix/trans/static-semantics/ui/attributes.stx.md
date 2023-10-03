---
title: attributes.stx
hide:
  - toc
---

# `attributes.stx`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/ui/attributes.stx]

[pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/ui/attributes.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/trans/static-semantics/ui/attributes.stx "The source file on GitHub"

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
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../template-calls.stx#static-semantics/ui/attributes_198_228" id="static-semantics/ui/attributes_7_37" title="Referenced at ../template-calls.stx line 11; ../../webdsl-ui.stx line 12">static-semantics/ui/attributes</a>

<span class="keyword">imports</span>
  <a href="../../types/built-ins.stx#static-semantics/types/built-ins_7_39" id="static-semantics/types/built-ins_49_81" title="Defined at ../../types/built-ins.stx line 1">static-semantics/types/built-ins</a>

  <a href="../../webdsl-types.stx#static-semantics/webdsl-types_7_36" id="static-semantics/webdsl-types_85_114" title="Defined at ../../webdsl-types.stx line 1">static-semantics/webdsl-types</a>
  <a href="../../webdsl.stx#static-semantics/webdsl_7_30" id="static-semantics/webdsl_117_140" title="Defined at ../../webdsl.stx line 1">static-semantics/webdsl</a>

<span class="keyword">signature</span>
  <span class="keyword">relations</span>
    <a href="#attributeCollection_344_363" id="attributeCollection_168_187" title="Referenced at line 17, 22">attributeCollection</a> : <span class="keyword">string</span>

<span class="keyword">rules</span> <span class="layout">// attribute collection declaration and resolving</span>

  <a href="#declareAttributeCollection_303_329" id="declareAttributeCollection_257_283" title="Referenced at line 16, 72">declareAttributeCollection</a> : <span class="keyword">scope</span> * <span class="keyword">string</span>
  <a href="#declareAttributeCollection_257_283" id="declareAttributeCollection_303_329" title="Defined at line 15">declareAttributeCollection</a>(<a href="#s_370_371" id="s_330_331" title="Referenced at line 17, 18">s</a>, <a href="#c_364_365" id="c_333_334" title="Referenced at line 17, 18, 18">c</a>) :-
    !<a href="#attributeCollection_168_187" id="attributeCollection_344_363" title="Defined at line 11">attributeCollection</a>[<a href="#c_333_334" id="c_364_365" title="Defined at line 16">c</a>] <span class="keyword">in</span> <a href="#s_330_331" id="s_370_371" title="Defined at line 16">s</a>,
    <a href="#resolveAttributeCollection_595_621" id="resolveAttributeCollection_377_403" title="Defined at line 20">resolveAttributeCollection</a>(<a href="#s_330_331" id="s_404_405" title="Defined at line 16">s</a>, <a href="#c_333_334" id="c_407_408" title="Defined at line 16">c</a>) == [_] | <span class="keyword">error</span> $[Attribute collection with name [<a href="#c_333_334" id="c_459_460" title="Defined at line 16">c</a>] is defined multiple times. Use "override" modifier to replace existing attribute collections]. <span class="layout">// correct error message for tests</span>

  <a href="#resolveAttributeCollection_377_403" id="resolveAttributeCollection_595_621" title="Referenced at line 18, 21, 75; ../template-calls.stx line 123">resolveAttributeCollection</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> -&gt; <span class="keyword">list</span>((<span class="keyword">path</span> * <span class="keyword">string</span>))
  <a href="#resolveAttributeCollection_595_621" id="resolveAttributeCollection_666_692" title="Defined at line 20">resolveAttributeCollection</a>(<a href="#s_845_846" id="s_693_694" title="Referenced at line 25">s</a>, <a href="#c_832_833" id="c_696_697" title="Referenced at line 24">c</a>) = <a href="#ps_851_853" id="ps_701_703" title="Referenced at line 25">ps</a> :-
    <span class="keyword">query</span> <a href="#attributeCollection_168_187" id="attributeCollection_717_736" title="Defined at line 11">attributeCollection</a>
      <span class="keyword">filter</span> <a href="../../webdsl.stx#P_1226_1227" id="P_750_751" title="Defined at ../../webdsl.stx line 45">P</a>* <a href="../../webdsl.stx#F_1290_1291" id="F_753_754" title="Defined at ../../webdsl.stx line 46">F</a>* ((<a href="../../webdsl.stx#EXTEND_1385_1391" id="EXTEND_758_764" title="Defined at ../../webdsl.stx line 47">EXTEND</a>? <a href="../../webdsl.stx#INHERIT_1445_1452" id="INHERIT_766_773" title="Defined at ../../webdsl.stx line 48">INHERIT</a>*) | (<a href="../../webdsl.stx#DEF_1498_1501" id="DEF_779_782" title="Defined at ../../webdsl.stx line 49">DEF</a>? (<a href="../../webdsl.stx#IMPORT_1595_1601" id="IMPORT_785_791" title="Defined at ../../webdsl.stx line 50">IMPORT</a> | <a href="../../webdsl.stx#IMPORTLIB_1661_1670" id="IMPORTLIB_794_803" title="Defined at ../../webdsl.stx line 51">IMPORTLIB</a>)?))
      <span class="keyword">and</span> { <a href="#c'_826_828" id="c'_820_822" title="Referenced at line 24">c'</a> :- <a href="#c'_820_822" id="c'_826_828" title="Defined at line 24">c'</a> == <a href="#c_696_697" id="c_832_833" title="Defined at line 21">c</a> }
      <span class="keyword">in</span> <a href="#s_693_694" id="s_845_846" title="Defined at line 21">s</a> |-&gt; <a href="#ps_701_703" id="ps_851_853" title="Defined at line 21">ps</a>.

<span class="keyword">rules</span> <span class="layout">// attributes</span>

  <a href="#attributesOk_1401_1413" id="attributesOk_879_891" title="Referenced at line 37, 41, 42; ../../webdsl-ui.stx line 155, 158, 162, 166, 170">attributesOk</a> <span class="keyword">maps</span> <a href="#attributeOk_923_934" id="attributeOk_897_908" title="Defined at line 30">attributeOk</a>(*, <span class="keyword">list</span>(*))
  <a href="#attributeOk_897_908" id="attributeOk_923_934" title="Referenced at line 29, 31, 32, 34, 35, 39, 44">attributeOk</a> : <span class="keyword">scope</span> * <a href="../../../../src-gen/statix/signatures/WebDSL-Attributes-sig.stx#Attribute_292_301" id="Attribute_945_954" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Attributes-sig.stx line 16">Attribute</a>
  <a href="#attributeOk_923_934" id="attributeOk_957_968" title="Defined at line 30">attributeOk</a>(<span id="s_969_970" title="Not referenced locally, nor via imports">s</span>, <a href="#a_1079_1080" id="a_972_973" title="Referenced at line 31">a</a>@<a href="../../../../src-gen/statix/signatures/WebDSL-Attributes-sig.stx#AttributeSelection2Attribute_1366_1394" id="AttributeSelection2Attribute_974_1002" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Attributes-sig.stx line 40">AttributeSelection2Attribute</a>(_)) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[This UI attribute is not implemented yet] @<a href="#a_972_973" id="a_1079_1080" title="Defined at line 31">a</a>.
  <a href="#attributeOk_923_934" id="attributeOk_1084_1095" title="Defined at line 30">attributeOk</a>(<span id="s_1096_1097" title="Not referenced locally, nor via imports">s</span>, <a href="../../../../src-gen/statix/signatures/WebDSL-Expand-sig.stx#AttributeExpandLocal_1871_1891" id="AttributeExpandLocal_1099_1119" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Expand-sig.stx line 46">AttributeExpandLocal</a>(_, _, _)) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[This UI attribute is not implemented yet].

  <a href="#attributeOk_923_934" id="attributeOk_1205_1216" title="Defined at line 30">attributeOk</a>(<a href="#s_1248_1249" id="s_1217_1218" title="Referenced at line 34">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-XML-sig.stx#Attribute_920_929" id="Attribute_1220_1229" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-XML-sig.stx line 34">Attribute</a>(_, <a href="#exp_1251_1254" id="exp_1233_1236" title="Referenced at line 34">exp</a>)) :- <a href="../../webdsl-types.stx#typed_10475_10480" id="typed_1242_1247" title="Defined at ../../webdsl-types.stx line 283">typed</a>(<a href="#s_1217_1218" id="s_1248_1249" title="Defined at line 34">s</a>, <a href="#exp_1233_1236" id="exp_1251_1254" title="Defined at line 34">exp</a>).
  <a href="#attributeOk_923_934" id="attributeOk_1259_1270" title="Defined at line 30">attributeOk</a>(<a href="#s_1333_1334" id="s_1271_1272" title="Referenced at line 36, 36, 37">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-XML-sig.stx#XMLAttributesIf_784_799" id="XMLAttributesIf_1274_1289" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-XML-sig.stx line 32">XMLAttributesIf</a>(<a href="#c_1336_1337" id="c_1290_1291" title="Referenced at line 36, 36">c</a>, <a href="#attributes_1417_1427" id="attributes_1293_1303" title="Referenced at line 37">attributes</a>)) :-
    <a href="../../webdsl-types.stx#equalType_10645_10654" id="equalType_1313_1322" title="Defined at ../../webdsl-types.stx line 289">equalType</a>(<a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_1323_1332" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_1271_1272" id="s_1333_1334" title="Defined at line 35">s</a>, <a href="#c_1290_1291" id="c_1336_1337" title="Defined at line 35">c</a>), <a href="../../types/built-ins.stx#bool_2637_2641" id="bool_1340_1344" title="Defined at ../../types/built-ins.stx line 72">bool</a>(<a href="#s_1271_1272" id="s_1345_1346" title="Defined at line 35">s</a>)) | <span class="keyword">error</span> $[Condition should be of type bool] @<a href="#c_1290_1291" id="c_1394_1395" title="Defined at line 35">c</a>,
    <a href="#attributesOk_879_891" id="attributesOk_1401_1413" title="Defined at line 29">attributesOk</a>(<a href="#s_1271_1272" id="s_1414_1415" title="Defined at line 35">s</a>, <a href="#attributes_1293_1303" id="attributes_1417_1427" title="Defined at line 35">attributes</a>).

  <a href="#attributeOk_923_934" id="attributeOk_1433_1444" title="Defined at line 30">attributeOk</a>(<a href="#s_1531_1532" id="s_1445_1446" title="Referenced at line 40, 40, 41, 42">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-XML-sig.stx#XMLAttributesIfElse_841_860" id="XMLAttributesIfElse_1448_1467" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-XML-sig.stx line 33">XMLAttributesIfElse</a>(<a href="#c_1534_1535" id="c_1468_1469" title="Referenced at line 40, 40">c</a>, <a href="#attributes_if_1615_1628" id="attributes_if_1471_1484" title="Referenced at line 41">attributes_if</a>, <a href="#attributes_else_1651_1666" id="attributes_else_1486_1501" title="Referenced at line 42">attributes_else</a>)) :-
    <a href="../../webdsl-types.stx#equalType_10645_10654" id="equalType_1511_1520" title="Defined at ../../webdsl-types.stx line 289">equalType</a>(<a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_1521_1530" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_1445_1446" id="s_1531_1532" title="Defined at line 39">s</a>, <a href="#c_1468_1469" id="c_1534_1535" title="Defined at line 39">c</a>), <a href="../../types/built-ins.stx#bool_2637_2641" id="bool_1538_1542" title="Defined at ../../types/built-ins.stx line 72">bool</a>(<a href="#s_1445_1446" id="s_1543_1544" title="Defined at line 39">s</a>)) | <span class="keyword">error</span> $[Condition should be of type bool] @<a href="#c_1468_1469" id="c_1592_1593" title="Defined at line 39">c</a>,
    <a href="#attributesOk_879_891" id="attributesOk_1599_1611" title="Defined at line 29">attributesOk</a>(<a href="#s_1445_1446" id="s_1612_1613" title="Defined at line 39">s</a>, <a href="#attributes_if_1471_1484" id="attributes_if_1615_1628" title="Defined at line 39">attributes_if</a>),
    <a href="#attributesOk_879_891" id="attributesOk_1635_1647" title="Defined at line 29">attributesOk</a>(<a href="#s_1445_1446" id="s_1648_1649" title="Defined at line 39">s</a>, <a href="#attributes_else_1486_1501" id="attributes_else_1651_1666" title="Defined at line 39">attributes_else</a>).

  <a href="#attributeOk_923_934" id="attributeOk_1672_1683" title="Defined at line 30">attributeOk</a>(<a href="#s_1739_1740" id="s_1684_1685" title="Referenced at line 44">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-XML-sig.stx#CommonAttribute2Attribute_964_989" id="CommonAttribute2Attribute_1687_1712" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-XML-sig.stx line 35">CommonAttribute2Attribute</a>(<a href="#ca_1742_1744" id="ca_1713_1715" title="Referenced at line 44">ca</a>)) :- <a href="#commonAttributeOk_1750_1767" id="commonAttributeOk_1721_1738" title="Defined at line 46">commonAttributeOk</a>(<a href="#s_1684_1685" id="s_1739_1740" title="Defined at line 44">s</a>, <a href="#ca_1713_1715" id="ca_1742_1744" title="Defined at line 44">ca</a>).

  <a href="#commonAttributeOk_1721_1738" id="commonAttributeOk_1750_1767" title="Referenced at line 44, 47, 48, 49, 59; ../template-calls.stx line 120">commonAttributeOk</a> : <span class="keyword">scope</span> * <a href="../../../../src-gen/statix/signatures/WebDSL-XML-sig.stx#CommonAttribute_374_389" id="CommonAttribute_1778_1793" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-XML-sig.stx line 20">CommonAttribute</a>
  <a href="#commonAttributeOk_1750_1767" id="commonAttributeOk_1796_1813" title="Defined at line 46">commonAttributeOk</a>(_, _) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[This common attribute is not yet implemented].
  <a href="#commonAttributeOk_1750_1767" id="commonAttributeOk_1898_1915" title="Defined at line 46">commonAttributeOk</a>(<span id="s_1916_1917" title="Not referenced locally, nor via imports">s</span>, <a href="../../../../src-gen/statix/signatures/WebDSL-XML-sig.stx#AllAttributes_1025_1038" id="AllAttributes_1919_1932" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-XML-sig.stx line 36">AllAttributes</a>()).
  <a href="#commonAttributeOk_1750_1767" id="commonAttributeOk_1939_1956" title="Defined at line 46">commonAttributeOk</a>(<a href="#s_2015_2016" id="s_1957_1958" title="Referenced at line 50, 52, 54, 55">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-XML-sig.stx#AllAttributesExceptExp_1061_1083" id="AllAttributesExceptExp_1960_1982" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-XML-sig.stx line 37">AllAttributesExceptExp</a>(<a href="#exp_2018_2021" id="exp_1983_1986" title="Referenced at line 50, 57">exp</a>)) :- {<a href="#t_2000_2001" id="t_1993_1994" title="Referenced at line 50, 52, 54, 55, 57">t</a>}
    <a href="#t_1993_1994" id="t_2000_2001" title="Defined at line 49">t</a> == <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_2005_2014" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_1957_1958" id="s_2015_2016" title="Defined at line 49">s</a>, <a href="#exp_1983_1986" id="exp_2018_2021" title="Defined at line 49">exp</a>),
    <a href="../../webdsl.stx#or_17705_17707" id="or_2028_2030" title="Defined at ../../webdsl.stx line 417">or</a>(
      <a href="../../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_2038_2053" title="Defined at ../../webdsl.stx line 411">typeCompatibleB</a>(<a href="../../types/built-ins.stx#string_1822_1828" id="string_2054_2060" title="Defined at ../../types/built-ins.stx line 48">string</a>(<a href="#s_1957_1958" id="s_2061_2062" title="Defined at line 49">s</a>), <a href="#t_1993_1994" id="t_2065_2066" title="Defined at line 49">t</a>),
      <a href="../../webdsl.stx#orB_17763_17766" id="orB_2075_2078" title="Defined at ../../webdsl.stx line 419">orB</a>(
        <a href="../../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_2088_2103" title="Defined at ../../webdsl.stx line 411">typeCompatibleB</a>(<a href="../../webdsl-types.stx#LIST_891_895" id="LIST_2104_2108" title="Defined at ../../webdsl-types.stx line 35">LIST</a>(<a href="../../types/built-ins.stx#string_1822_1828" id="string_2109_2115" title="Defined at ../../types/built-ins.stx line 48">string</a>(<a href="#s_1957_1958" id="s_2116_2117" title="Defined at line 49">s</a>)), <a href="#t_1993_1994" id="t_2121_2122" title="Defined at line 49">t</a>),
        <a href="../../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_2133_2148" title="Defined at ../../webdsl.stx line 411">typeCompatibleB</a>(<a href="../../webdsl-types.stx#SET_915_918" id="SET_2149_2152" title="Defined at ../../webdsl-types.stx line 36">SET</a>(<a href="../../types/built-ins.stx#string_1822_1828" id="string_2153_2159" title="Defined at ../../types/built-ins.stx line 48">string</a>(<a href="#s_1957_1958" id="s_2160_2161" title="Defined at line 49">s</a>)), <a href="#t_1993_1994" id="t_2165_2166" title="Defined at line 49">t</a>)
      )
    ) | <span class="keyword">error</span> $[Attribute names should be of type String, List of String of Set of String, but type [<a href="#t_1993_1994" id="t_2277_2278" title="Defined at line 49">t</a>] given] @<a href="#exp_1983_1986" id="exp_2288_2291" title="Defined at line 49">exp</a>.

  <a href="#commonAttributeOk_1750_1767" id="commonAttributeOk_2296_2313" title="Defined at line 46">commonAttributeOk</a>(<a href="#s_2363_2364" id="s_2314_2315" title="Referenced at line 60, 62, 64, 65">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-XML-sig.stx#AttributesExp_1113_1126" id="AttributesExp_2317_2330" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-XML-sig.stx line 38">AttributesExp</a>(<a href="#exp_2366_2369" id="exp_2331_2334" title="Referenced at line 60, 67">exp</a>)) :- {<a href="#t_2348_2349" id="t_2341_2342" title="Referenced at line 60, 62, 64, 65, 67">t</a>}
    <a href="#t_2341_2342" id="t_2348_2349" title="Defined at line 59">t</a> == <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_2353_2362" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_2314_2315" id="s_2363_2364" title="Defined at line 59">s</a>, <a href="#exp_2331_2334" id="exp_2366_2369" title="Defined at line 59">exp</a>),
    <a href="../../webdsl.stx#or_17705_17707" id="or_2376_2378" title="Defined at ../../webdsl.stx line 417">or</a>(
      <a href="../../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_2386_2401" title="Defined at ../../webdsl.stx line 411">typeCompatibleB</a>(<a href="../../types/built-ins.stx#string_1822_1828" id="string_2402_2408" title="Defined at ../../types/built-ins.stx line 48">string</a>(<a href="#s_2314_2315" id="s_2409_2410" title="Defined at line 59">s</a>), <a href="#t_2341_2342" id="t_2413_2414" title="Defined at line 59">t</a>),
      <a href="../../webdsl.stx#orB_17763_17766" id="orB_2423_2426" title="Defined at ../../webdsl.stx line 419">orB</a>(
        <a href="../../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_2436_2451" title="Defined at ../../webdsl.stx line 411">typeCompatibleB</a>(<a href="../../webdsl-types.stx#LIST_891_895" id="LIST_2452_2456" title="Defined at ../../webdsl-types.stx line 35">LIST</a>(<a href="../../types/built-ins.stx#string_1822_1828" id="string_2457_2463" title="Defined at ../../types/built-ins.stx line 48">string</a>(<a href="#s_2314_2315" id="s_2464_2465" title="Defined at line 59">s</a>)), <a href="#t_2341_2342" id="t_2469_2470" title="Defined at line 59">t</a>),
        <a href="../../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_2481_2496" title="Defined at ../../webdsl.stx line 411">typeCompatibleB</a>(<a href="../../webdsl-types.stx#SET_915_918" id="SET_2497_2500" title="Defined at ../../webdsl-types.stx line 36">SET</a>(<a href="../../types/built-ins.stx#string_1822_1828" id="string_2501_2507" title="Defined at ../../types/built-ins.stx line 48">string</a>(<a href="#s_2314_2315" id="s_2508_2509" title="Defined at line 59">s</a>)), <a href="#t_2341_2342" id="t_2513_2514" title="Defined at line 59">t</a>)
      )
    ) | <span class="keyword">error</span> $[Attribute names should be of type String, List of String of Set of String, but type [<a href="#t_2341_2342" id="t_2625_2626" title="Defined at line 59">t</a>] given] @<a href="#exp_2331_2334" id="exp_2636_2639" title="Defined at line 59">exp</a>.

<span class="keyword">rules</span> <span class="layout">// attribute collections</span>

  <a href="../../webdsl.stx#defOk_15473_15478" id="defOk_2676_2681" title="Defined at ../../webdsl.stx line 356">defOk</a>(<a href="#s_2785_2786" id="s_2682_2683" title="Referenced at line 72">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Attributes-sig.stx#AttributeCollection_622_641" id="AttributeCollection_2685_2704" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Attributes-sig.stx line 29">AttributeCollection</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-Attributes-sig.stx#AttributeCollectionOverrideNone_1031_1062" id="AttributeCollectionOverrideNone_2705_2736" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Attributes-sig.stx line 35">AttributeCollectionOverrideNone</a>(), <a href="#c_2788_2789" id="c_2740_2741" title="Referenced at line 72">c</a>, <span id="attrs_2743_2748" title="Not referenced locally, nor via imports">attrs</span>)) :-
    <a href="#declareAttributeCollection_257_283" id="declareAttributeCollection_2758_2784" title="Defined at line 15">declareAttributeCollection</a>(<a href="#s_2682_2683" id="s_2785_2786" title="Defined at line 71">s</a>, <a href="#c_2740_2741" id="c_2788_2789" title="Defined at line 71">c</a>).

  <a href="../../webdsl.stx#defOk_15473_15478" id="defOk_2795_2800" title="Defined at ../../webdsl.stx line 356">defOk</a>(<a href="#s_2905_2906" id="s_2801_2802" title="Referenced at line 75">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Attributes-sig.stx#AttributeCollection_622_641" id="AttributeCollection_2804_2823" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Attributes-sig.stx line 29">AttributeCollection</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-Attributes-sig.stx#AttributeCollectionOverride_1097_1124" id="AttributeCollectionOverride_2824_2851" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Attributes-sig.stx line 36">AttributeCollectionOverride</a>(), <a href="#c_2908_2909" id="c_2855_2856" title="Referenced at line 75, 75, 75, 76">c</a>, <span id="attrs_2858_2863" title="Not referenced locally, nor via imports">attrs</span>)) :- {<a href="#c'_2919_2921" id="c'_2870_2872" title="Referenced at line 75, 76">c'</a>}
    <a href="#resolveAttributeCollection_595_621" id="resolveAttributeCollection_2878_2904" title="Defined at line 20">resolveAttributeCollection</a>(<a href="#s_2801_2802" id="s_2905_2906" title="Defined at line 74">s</a>, <a href="#c_2855_2856" id="c_2908_2909" title="Defined at line 74">c</a>) == [(_, <a href="#c'_2870_2872" id="c'_2919_2921" title="Defined at line 74">c'</a>)] | <span class="keyword">error</span> $[Attribute collection with name [<a href="#c_2855_2856" id="c_2966_2967" title="Defined at line 74">c</a>] not defined] @<a href="#c_2855_2856" id="c_2983_2984" title="Defined at line 74">c</a>, <span class="layout">// correct error message for tests</span>
    @<a href="#c_2855_2856" id="c_3026_3027" title="Defined at line 74">c</a>.<span class="keyword">ref</span> := <a href="#c'_2870_2872" id="c'_3035_3037" title="Defined at line 74">c'</a>.

</code></pre></td></tr></tbody></table></div>