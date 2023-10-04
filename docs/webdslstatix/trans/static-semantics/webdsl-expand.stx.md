---
title: webdsl-expand.stx
hide:
  - toc
---

# `webdsl-expand.stx`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/webdsl-expand.stx]

[pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/webdsl-expand.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/trans/static-semantics/webdsl-expand.stx "The source file on GitHub"

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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl.stx#static-semantics/webdsl-expand_356_386" id="static-semantics/webdsl-expand_7_37" title="Referenced at ../webdsl.stx line 16">static-semantics/webdsl-expand</a>

<span class="keyword">imports</span>
  <a href="../entities/annotations.stx#static-semantics/entities/annotations_7_44" id="static-semantics/entities/annotations_49_86" title="Defined at ../entities/annotations.stx line 1">static-semantics/entities/annotations</a>

  <a href="../types/built-ins.stx#static-semantics/types/built-ins_7_39" id="static-semantics/types/built-ins_90_122" title="Defined at ../types/built-ins.stx line 1">static-semantics/types/built-ins</a>

  <a href="../webdsl.stx#static-semantics/webdsl_7_30" id="static-semantics/webdsl_126_149" title="Defined at ../webdsl.stx line 1">static-semantics/webdsl</a>
  <a href="../webdsl-actions.stx#static-semantics/webdsl-actions_7_38" id="static-semantics/webdsl-actions_152_183" title="Defined at ../webdsl-actions.stx line 1">static-semantics/webdsl-actions</a>
  <a href="../webdsl-types.stx#static-semantics/webdsl-types_7_36" id="static-semantics/webdsl-types_186_215" title="Defined at ../webdsl-types.stx line 1">static-semantics/webdsl-types</a>
  <a href="../webdsl-ui.stx#static-semantics/webdsl-ui_7_33" id="static-semantics/webdsl-ui_218_244" title="Defined at ../webdsl-ui.stx line 1">static-semantics/webdsl-ui</a>

<span class="keyword">rules</span>  <span class="layout">// unimplemented</span>

  <a href="../webdsl.stx#defOk_15473_15478" id="defOk_273_278" title="Defined at ../webdsl.stx line 356">defOk</a>(_, <a href="../../../src-gen/statix/signatures/WebDSL-Expand-sig.stx#ExpandTemplateCall_1089_1107" id="ExpandTemplateCall_282_300" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Expand-sig.stx line 38">ExpandTemplateCall</a>(_, _)) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[This definition is not yet implemented].
  <a href="../webdsl.stx#defOk_15473_15478" id="defOk_380_385" title="Defined at ../webdsl.stx line 356">defOk</a>(_, <a href="../../../src-gen/statix/signatures/WebDSL-Expand-sig.stx#ExpandTemplateDefinition_1148_1172" id="ExpandTemplateDefinition_389_413" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Expand-sig.stx line 39">ExpandTemplateDefinition</a>(_, _, _)) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[This definition is not yet implemented].

  <a href="../webdsl.stx#stmtOk_15783_15789" id="stmtOk_497_503" title="Defined at ../webdsl.stx line 361">stmtOk</a>(_, _, <a href="../../../src-gen/statix/signatures/WebDSL-Expand-sig.stx#StatementExpandLocal_1475_1495" id="StatementExpandLocal_510_530" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Expand-sig.stx line 42">StatementExpandLocal</a>(_, _, _), _) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[This statement is not yet implemented].

  <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_616_625" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(_, <a href="#exp_721_724" id="exp_629_632" title="Referenced at line 20">exp</a>@<a href="../../../src-gen/statix/signatures/WebDSL-Expand-sig.stx#ExpExpandLocal_1802_1816" id="ExpExpandLocal_633_647" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Expand-sig.stx line 45">ExpExpandLocal</a>(_, _, _)) = <a href="../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_660_667" title="Defined at ../webdsl-types.stx line 49">UNTYPED</a>() :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[Typing of expression [<a href="#exp_629_632" id="exp_721_724" title="Defined at line 20">exp</a>] is not yet implemented].

<span class="keyword">rules</span>

  <a href="../webdsl-ui.stx#templateElementOk_7058_7075" id="templateElementOk_761_778" title="Defined at ../webdsl-ui.stx line 138">templateElementOk</a>(<a href="#s_863_864" id="s_779_780" title="Referenced at line 26">s</a>, _, <a href="#s_pha_866_871" id="s_pha_785_790" title="Referenced at line 26">s_pha</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Expand-sig.stx#DeriveNoFromNoFor_785_802" id="DeriveNoFromNoFor_792_809" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Expand-sig.stx line 32">DeriveNoFromNoFor</a>(<a href="#p_842_843" id="p_810_811" title="Referenced at line 25">p</a>, <a href="#body_873_877" id="body_813_817" title="Referenced at line 26">body</a>)) :-
    <a href="#deriveStringOk_1273_1287" id="deriveStringOk_827_841" title="Defined at line 36">deriveStringOk</a>(<a href="#p_810_811" id="p_842_843" title="Defined at line 24">p</a>),
    <a href="#deriveBodyOk_2617_2629" id="deriveBodyOk_850_862" title="Defined at line 61">deriveBodyOk</a>(<a href="#s_779_780" id="s_863_864" title="Defined at line 24">s</a>, <a href="#s_pha_785_790" id="s_pha_866_871" title="Defined at line 24">s_pha</a>, <a href="#body_813_817" id="body_873_877" title="Defined at line 24">body</a>),
    <span class="keyword">false</span> | <span class="keyword">error</span> $[Cannot derive for non-entity types, use syntax "derive &lt;pagetype&gt; from &lt;var&gt; { ... }"].

  <a href="../webdsl-ui.stx#templateElementOk_7058_7075" id="templateElementOk_991_1008" title="Defined at ../webdsl-ui.stx line 138">templateElementOk</a>(<a href="#s_1102_1103" id="s_1009_1010" title="Referenced at line 31, 32, 33, 34">s</a>, _, <a href="#s_pha_1256_1261" id="s_pha_1015_1020" title="Referenced at line 34">s_pha</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Expand-sig.stx#Derive_649_655" id="Derive_1022_1028" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Expand-sig.stx line 30">Derive</a>(<a href="#p_1079_1080" id="p_1029_1030" title="Referenced at line 30, 33">p</a>, <a href="#exp_1105_1108" id="exp_1032_1035" title="Referenced at line 31, 32">exp</a>, <a href="#props_1228_1233" id="props_1037_1042" title="Referenced at line 33">props</a>, <a href="#body_1263_1267" id="body_1044_1048" title="Referenced at line 34">body</a>)) :- { <a href="#t_1087_1088" id="t_1056_1057" title="Referenced at line 31, 32, 33">t</a> }
    <a href="#deriveStringOk_1273_1287" id="deriveStringOk_1064_1078" title="Defined at line 36">deriveStringOk</a>(<a href="#p_1029_1030" id="p_1079_1080" title="Defined at line 29">p</a>),
    <a href="#t_1056_1057" id="t_1087_1088" title="Defined at line 29">t</a> == <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_1092_1101" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_1009_1010" id="s_1102_1103" title="Defined at line 29">s</a>, <a href="#exp_1032_1035" id="exp_1105_1108" title="Defined at line 29">exp</a>),
    <a href="../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_1115_1129" title="Defined at ../webdsl.stx line 408">typeCompatible</a>(<a href="#t_1056_1057" id="t_1130_1131" title="Defined at line 29">t</a>, <a href="../types/built-ins.stx#entity_2883_2889" id="entity_1133_1139" title="Defined at ../types/built-ins.stx line 81">entity</a>(<a href="#s_1009_1010" id="s_1140_1141" title="Defined at line 29">s</a>)) | <span class="keyword">error</span> $[Cannot derive for non-entity types] @<a href="#exp_1032_1035" id="exp_1191_1194" title="Defined at line 29">exp</a>,
    <a href="#derivePropertiesOk_1584_1602" id="derivePropertiesOk_1200_1218" title="Defined at line 45">derivePropertiesOk</a>(<a href="#s_1009_1010" id="s_1219_1220" title="Defined at line 29">s</a>, <a href="#t_1056_1057" id="t_1222_1223" title="Defined at line 29">t</a>, <a href="#p_1029_1030" id="p_1225_1226" title="Defined at line 29">p</a>, <a href="#props_1037_1042" id="props_1228_1233" title="Defined at line 29">props</a>),
    <a href="#deriveBodyOk_2617_2629" id="deriveBodyOk_1240_1252" title="Defined at line 61">deriveBodyOk</a>(<a href="#s_1009_1010" id="s_1253_1254" title="Defined at line 29">s</a>, <a href="#s_pha_1015_1020" id="s_pha_1256_1261" title="Defined at line 29">s_pha</a>, <a href="#body_1044_1048" id="body_1263_1267" title="Defined at line 29">body</a>).

  <a href="#deriveStringOk_827_841" id="deriveStringOk_1273_1287" title="Referenced at line 25, 30, 37, 38, 39, 40, 41, 42, 43">deriveStringOk</a> : <span class="keyword">string</span>
  <a href="#deriveStringOk_1273_1287" id="deriveStringOk_1299_1313" title="Defined at line 36">deriveStringOk</a>(_) :- <span class="keyword">false</span> | <span class="keyword">error</span> $[Can only derive "viewPage", "createPage" or "editPage"].
  <a href="#deriveStringOk_1273_1287" id="deriveStringOk_1395_1409" title="Defined at line 36">deriveStringOk</a>("viewPage").
  <a href="#deriveStringOk_1273_1287" id="deriveStringOk_1425_1439" title="Defined at line 36">deriveStringOk</a>("viewRows").
  <a href="#deriveStringOk_1273_1287" id="deriveStringOk_1455_1469" title="Defined at line 36">deriveStringOk</a>("createPage").
  <a href="#deriveStringOk_1273_1287" id="deriveStringOk_1487_1501" title="Defined at line 36">deriveStringOk</a>("editPage").
  <a href="#deriveStringOk_1273_1287" id="deriveStringOk_1517_1531" title="Defined at line 36">deriveStringOk</a>("editRows").
  <a href="#deriveStringOk_1273_1287" id="deriveStringOk_1547_1561" title="Defined at line 36">deriveStringOk</a>("editRowsInline").

  <a href="#derivePropertiesOk_1200_1218" id="derivePropertiesOk_1584_1602" title="Referenced at line 33">derivePropertiesOk</a> <span class="keyword">maps</span> <a href="#derivePropertyOk_1645_1661" id="derivePropertyOk_1608_1624" title="Defined at line 46">derivePropertyOk</a>(*, *, *, <span class="keyword">list</span>(*))
  <a href="#derivePropertyOk_1608_1624" id="derivePropertyOk_1645_1661" title="Referenced at line 45, 47, 48, 53, 57">derivePropertyOk</a> : <span class="keyword">scope</span> * <a href="../webdsl.stx#TYPE_669_673" id="TYPE_1672_1676" title="Defined at ../webdsl.stx line 29">TYPE</a> * <span class="keyword">string</span> * <a href="../../../src-gen/statix/signatures/WebDSL-Expand-sig.stx#DeriveProperty_257_271" id="DeriveProperty_1688_1702" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Expand-sig.stx line 14">DeriveProperty</a>
  <a href="#derivePropertyOk_1645_1661" id="derivePropertyOk_1705_1721" title="Defined at line 46">derivePropertyOk</a>(_, _, _, _) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[This element is not yet supported].
  <a href="#derivePropertyOk_1645_1661" id="derivePropertyOk_1801_1817" title="Defined at line 46">derivePropertyOk</a>(<a href="#s_1932_1933" id="s_1818_1819" title="Referenced at line 50">s</a>, <a href="#t_ent_1876_1881" id="t_ent_1821_1826" title="Referenced at line 49, 50, 51">t_ent</a>, _, <a href="../../../src-gen/statix/signatures/WebDSL-Expand-sig.stx#DeriveDefault_844_857" id="DeriveDefault_1831_1844" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Expand-sig.stx line 33">DeriveDefault</a>(<a href="#prop_1942_1946" id="prop_1845_1849" title="Referenced at line 50, 50, 51, 51">prop</a>)) :- { <a href="#entityName_1892_1902" id="entityName_1857_1867" title="Referenced at line 49, 50">entityName</a> <a href="#t_1912_1913" id="t_1868_1869" title="Referenced at line 50">t</a> }
    <a href="#t_ent_1821_1826" id="t_ent_1876_1881" title="Defined at line 48">t_ent</a> == <a href="../webdsl-types.stx#ENTITY_444_450" id="ENTITY_1885_1891" title="Defined at ../webdsl-types.stx line 20">ENTITY</a>(<a href="#entityName_1857_1867" id="entityName_1892_1902" title="Defined at line 48">entityName</a>, _),
    <a href="#t_1868_1869" id="t_1912_1913" title="Defined at line 48">t</a> == <a href="../webdsl-actions.stx#typeOfProperty_10792_10806" id="typeOfProperty_1917_1931" title="Defined at ../webdsl-actions.stx line 260">typeOfProperty</a>(<a href="#s_1818_1819" id="s_1932_1933" title="Defined at line 48">s</a>, <a href="#t_ent_1821_1826" id="t_ent_1935_1940" title="Defined at line 48">t_ent</a>, <a href="#prop_1845_1849" id="prop_1942_1946" title="Defined at line 48">prop</a>) | <span class="keyword">error</span> $[Entity [<a href="#entityName_1857_1867" id="entityName_1966_1976" title="Defined at line 48">entityName</a>] has no property [<a href="#prop_1845_1849" id="prop_1995_1999" title="Defined at line 48">prop</a>]], <span class="layout">// correct error message for tests</span>
    <a href="../entities/annotations.stx#isMutableProperty_10850_10867" id="isMutableProperty_2042_2059" title="Defined at ../entities/annotations.stx line 231">isMutableProperty</a>(<a href="#t_ent_1821_1826" id="t_ent_2060_2065" title="Defined at line 48">t_ent</a>, <a href="#prop_1845_1849" id="prop_2067_2071" title="Defined at line 48">prop</a>) | <span class="keyword">error</span> $[Property [<a href="#prop_1845_1849" id="prop_2093_2097" title="Defined at line 48">prop</a>] is not mutable].

  <a href="#derivePropertyOk_1645_1661" id="derivePropertyOk_2119_2135" title="Defined at line 46">derivePropertyOk</a>(<a href="#s_2259_2260" id="s_2136_2137" title="Referenced at line 55">s</a>, <a href="#t_ent_2203_2208" id="t_ent_2139_2144" title="Referenced at line 54, 55">t_ent</a>, "viewPage", <a href="../../../src-gen/statix/signatures/WebDSL-Expand-sig.stx#DeriveDefault_844_857" id="DeriveDefault_2158_2171" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Expand-sig.stx line 33">DeriveDefault</a>(<a href="#prop_2269_2273" id="prop_2172_2176" title="Referenced at line 55, 55">prop</a>)) :- { <a href="#entityName_2219_2229" id="entityName_2184_2194" title="Referenced at line 54, 55">entityName</a> <a href="#t_2239_2240" id="t_2195_2196" title="Referenced at line 55">t</a> }
    <a href="#t_ent_2139_2144" id="t_ent_2203_2208" title="Defined at line 53">t_ent</a> == <a href="../webdsl-types.stx#ENTITY_444_450" id="ENTITY_2212_2218" title="Defined at ../webdsl-types.stx line 20">ENTITY</a>(<a href="#entityName_2184_2194" id="entityName_2219_2229" title="Defined at line 53">entityName</a>, _),
    <a href="#t_2195_2196" id="t_2239_2240" title="Defined at line 53">t</a> == <a href="../webdsl-actions.stx#typeOfProperty_10792_10806" id="typeOfProperty_2244_2258" title="Defined at ../webdsl-actions.stx line 260">typeOfProperty</a>(<a href="#s_2136_2137" id="s_2259_2260" title="Defined at line 53">s</a>, <a href="#t_ent_2139_2144" id="t_ent_2262_2267" title="Defined at line 53">t_ent</a>, <a href="#prop_2172_2176" id="prop_2269_2273" title="Defined at line 53">prop</a>) | <span class="keyword">error</span> $[Entity [<a href="#entityName_2184_2194" id="entityName_2293_2303" title="Defined at line 53">entityName</a>] has no property [<a href="#prop_2172_2176" id="prop_2322_2326" title="Defined at line 53">prop</a>]]. <span class="layout">// correct error message for tests</span>

  <a href="#derivePropertyOk_1645_1661" id="derivePropertyOk_2368_2384" title="Defined at line 46">derivePropertyOk</a>(<a href="#s_2508_2509" id="s_2385_2386" title="Referenced at line 59">s</a>, <a href="#t_ent_2452_2457" id="t_ent_2388_2393" title="Referenced at line 58, 59">t_ent</a>, "viewRows", <a href="../../../src-gen/statix/signatures/WebDSL-Expand-sig.stx#DeriveDefault_844_857" id="DeriveDefault_2407_2420" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Expand-sig.stx line 33">DeriveDefault</a>(<a href="#prop_2518_2522" id="prop_2421_2425" title="Referenced at line 59, 59">prop</a>)) :- { <a href="#entityName_2468_2478" id="entityName_2433_2443" title="Referenced at line 58, 59">entityName</a> <a href="#t_2488_2489" id="t_2444_2445" title="Referenced at line 59">t</a> }
    <a href="#t_ent_2388_2393" id="t_ent_2452_2457" title="Defined at line 57">t_ent</a> == <a href="../webdsl-types.stx#ENTITY_444_450" id="ENTITY_2461_2467" title="Defined at ../webdsl-types.stx line 20">ENTITY</a>(<a href="#entityName_2433_2443" id="entityName_2468_2478" title="Defined at line 57">entityName</a>, _),
    <a href="#t_2444_2445" id="t_2488_2489" title="Defined at line 57">t</a> == <a href="../webdsl-actions.stx#typeOfProperty_10792_10806" id="typeOfProperty_2493_2507" title="Defined at ../webdsl-actions.stx line 260">typeOfProperty</a>(<a href="#s_2385_2386" id="s_2508_2509" title="Defined at line 57">s</a>, <a href="#t_ent_2388_2393" id="t_ent_2511_2516" title="Defined at line 57">t_ent</a>, <a href="#prop_2421_2425" id="prop_2518_2522" title="Defined at line 57">prop</a>) | <span class="keyword">error</span> $[Entity [<a href="#entityName_2433_2443" id="entityName_2542_2552" title="Defined at line 57">entityName</a>] has no property [<a href="#prop_2421_2425" id="prop_2571_2575" title="Defined at line 57">prop</a>]]. <span class="layout">// correct error message for tests</span>

  <a href="#deriveBodyOk_850_862" id="deriveBodyOk_2617_2629" title="Referenced at line 26, 34, 62">deriveBodyOk</a> : <span class="keyword">scope</span> * <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/WebDSL-Expand-sig.stx#DeriveBody_276_286" id="DeriveBody_2648_2658" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Expand-sig.stx line 15">DeriveBody</a>
  <a href="#deriveBodyOk_2617_2629" id="deriveBodyOk_2661_2673" title="Defined at line 61">deriveBodyOk</a>(<a href="#s_2730_2731" id="s_2674_2675" title="Referenced at line 62">s</a>, <a href="#s_pha_2733_2738" id="s_pha_2677_2682" title="Referenced at line 62">s_pha</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Expand-sig.stx#DeriveBody_928_938" id="DeriveBody_2684_2694" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Expand-sig.stx line 35">DeriveBody</a>(<a href="#elements_2740_2748" id="elements_2695_2703" title="Referenced at line 62">elements</a>)) :- <a href="#deriveBodyElementsOk_2754_2774" id="deriveBodyElementsOk_2709_2729" title="Defined at line 64">deriveBodyElementsOk</a>(<a href="#s_2674_2675" id="s_2730_2731" title="Defined at line 62">s</a>, <a href="#s_pha_2677_2682" id="s_pha_2733_2738" title="Defined at line 62">s_pha</a>, <a href="#elements_2695_2703" id="elements_2740_2748" title="Defined at line 62">elements</a>).

  <a href="#deriveBodyElementsOk_2709_2729" id="deriveBodyElementsOk_2754_2774" title="Referenced at line 62">deriveBodyElementsOk</a> <span class="keyword">maps</span> <a href="#deriveBodyElementOk_2817_2836" id="deriveBodyElementOk_2780_2799" title="Defined at line 65">deriveBodyElementOk</a>(*, *, <span class="keyword">list</span>(*))
  <a href="#deriveBodyElementOk_2780_2799" id="deriveBodyElementOk_2817_2836" title="Referenced at line 64, 66">deriveBodyElementOk</a> : <span class="keyword">scope</span> * <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/WebDSL-Expand-sig.stx#DeriveBodyElement_291_308" id="DeriveBodyElement_2855_2872" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Expand-sig.stx line 16">DeriveBodyElement</a>
  <a href="#deriveBodyElementOk_2817_2836" id="deriveBodyElementOk_2875_2894" title="Defined at line 65">deriveBodyElementOk</a>(_, _, _) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[This element is not yet supported].

<span class="keyword">rules</span>

  <a href="../webdsl.stx#defOk_15473_15478" id="defOk_2979_2984" title="Defined at ../webdsl.stx line 356">defOk</a>(<a href="#s_3034_3035" id="s_2985_2986" title="Referenced at line 71, 72">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Expand-sig.stx#DeriveCrud_1055_1065" id="DeriveCrud_2988_2998" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Expand-sig.stx line 37">DeriveCrud</a>(<a href="#ent_3048_3051" id="ent_2999_3002" title="Referenced at line 71, 71, 72">ent</a>)) :- { <a href="#t_3018_3019" id="t_3010_3011" title="Referenced at line 71, 72">t</a> }
    <a href="#t_3010_3011" id="t_3018_3019" title="Defined at line 70">t</a> == <a href="../webdsl-types.stx#typeOfSort_5551_5561" id="typeOfSort_3023_3033" title="Defined at ../webdsl-types.stx line 160">typeOfSort</a>(<a href="#s_2985_2986" id="s_3034_3035" title="Defined at line 70">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#SimpleSort_859_869" id="SimpleSort_3037_3047" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 43">SimpleSort</a>(<a href="#ent_2999_3002" id="ent_3048_3051" title="Defined at line 70">ent</a>)) | <span class="keyword">error</span> $[The entity [<a href="#ent_2999_3002" id="ent_3076_3079" title="Defined at line 70">ent</a>] does not exist],
    <a href="../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_3102_3116" title="Defined at ../webdsl.stx line 408">typeCompatible</a>(<a href="#t_3010_3011" id="t_3117_3118" title="Defined at line 70">t</a>, <a href="../types/built-ins.stx#entity_2883_2889" id="entity_3120_3126" title="Defined at ../types/built-ins.stx line 81">entity</a>(<a href="#s_2985_2986" id="s_3127_3128" title="Defined at line 70">s</a>)) | <span class="keyword">error</span> $[The entity [<a href="#ent_2999_3002" id="ent_3153_3156" title="Defined at line 70">ent</a>] does not exist].

</code></pre></td></tr></tbody></table></div>