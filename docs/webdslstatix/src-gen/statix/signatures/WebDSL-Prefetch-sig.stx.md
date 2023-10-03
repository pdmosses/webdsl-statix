---
title: WebDSL-Prefetch-sig.stx
hide:
  - toc
---

# `WebDSL-Prefetch-sig.stx`



[pdmosses/webdsl-statix/webdslstatix/src-gen/statix/signatures/WebDSL-Prefetch-sig.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/src-gen/statix/signatures/WebDSL-Prefetch-sig.stx "The source file on GitHub"

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
77
78
79
80
81
82
83
84
85
86
87
88
89
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix-sig.stx#signatures/WebDSL-Prefetch-sig_549_579" id="signatures/WebDSL-Prefetch-sig_7_37" title="Referenced at ../webdsl-statix-sig.stx line 19">signatures/WebDSL-Prefetch-sig</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action-sig.stx#signatures/WebDSL-Action-sig_7_35" id="signatures/WebDSL-Action-sig_49_77" title="Defined at ../WebDSL-Action-sig.stx line 1">signatures/WebDSL-Action-sig</a>
  <a href="../WebDSL-Core-sig.stx#signatures/WebDSL-Core-sig_7_33" id="signatures/WebDSL-Core-sig_80_106" title="Defined at ../WebDSL-Core-sig.stx line 1">signatures/WebDSL-Core-sig</a>
  <a href="../WebDSL-Lexical-sig.stx#signatures/WebDSL-Lexical-sig_7_36" id="signatures/WebDSL-Lexical-sig_109_138" title="Defined at ../WebDSL-Lexical-sig.stx line 1">signatures/WebDSL-Lexical-sig</a>
  <a href="../WebDSL-UI-sig.stx#signatures/WebDSL-UI-sig_7_31" id="signatures/WebDSL-UI-sig_141_165" title="Defined at ../WebDSL-UI-sig.stx line 1">signatures/WebDSL-UI-sig</a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <a href="#PrefetchChildren_522_538" id="PrefetchChildren_190_206" title="Referenced at line 28, 46, 47, 48, 50">PrefetchChildren</a>
    <a href="#PrefetchNode_564_576" id="PrefetchNode_211_223" title="Referenced at line 29, 48, 51">PrefetchNode</a>
    <a href="#PrefetchTemplateArgsOpt_613_636" id="PrefetchTemplateArgsOpt_228_251" title="Referenced at line 30, 46, 47, 51, 56, 57">PrefetchTemplateArgsOpt</a>
    <a href="#PrefetchNodeMod_665_680" id="PrefetchNodeMod_256_271" title="Referenced at line 31, 51, 54, 55">PrefetchNodeMod</a>
    <a href="#PrefetchCondition_711_728" id="PrefetchCondition_276_293" title="Referenced at line 32, 51, 62, 63">PrefetchCondition</a>
    <a href="#PrefetchCondVal_757_772" id="PrefetchCondVal_298_313" title="Referenced at line 33, 67, 67, 68, 68, 69, 69, 70, 70, 71, 71, 72, 72, 76, 77, 78, 79, 80, 81, 82, 83, 83, 83, 84, 84, 84, 85, 85, 85, 86, 86, 86, 87, 87, 87">PrefetchCondVal</a>
    <a href="#PrefetchCond_798_810" id="PrefetchCond_318_330" title="Referenced at line 34, 63, 65, 67, 68, 69, 70, 71, 72, 73, 73, 73, 74, 74, 74, 75, 75, 76">PrefetchCond</a>
    <a href="#PrefetchWhereOpt_840_856" id="PrefetchWhereOpt_335_351" title="Referenced at line 35, 46, 47, 51, 64, 65">PrefetchWhereOpt</a>
    <a href="#PrefetchWhereMod_886_902" id="PrefetchWhereMod_356_372" title="Referenced at line 36, 65, 66">PrefetchWhereMod</a>
    <a href="#OptSimpleSort_929_942" id="OptSimpleSort_377_390" title="Referenced at line 37, 82, 88, 89">OptSimpleSort</a>
    <a href="#PrefetchChildrenOpt_975_994" id="PrefetchChildrenOpt_395_414" title="Referenced at line 38, 49, 50, 51">PrefetchChildrenOpt</a>
    <a href="#OptPrefetchOwnerCast_1028_1048" id="OptPrefetchOwnerCast_419_439" title="Referenced at line 39, 51, 52, 53">OptPrefetchOwnerCast</a>
    <a href="#SortOrThis_1072_1082" id="SortOrThis_444_454" title="Referenced at line 40, 58, 59, 60, 61">SortOrThis</a>
    <a href="#TemplateArgOrThis_1113_1130" id="TemplateArgOrThis_459_476" title="Referenced at line 41, 57, 58">TemplateArgOrThis</a>

  <span class="keyword">constructors</span>
    <span id="PrefetchChildren-Plhdr_497_519" title="Not referenced locally, nor via imports">PrefetchChildren-Plhdr</span> : <a href="#PrefetchChildren_190_206" id="PrefetchChildren_522_538" title="Defined at line 12">PrefetchChildren</a>
    <span id="PrefetchNode-Plhdr_543_561" title="Not referenced locally, nor via imports">PrefetchNode-Plhdr</span> : <a href="#PrefetchNode_211_223" id="PrefetchNode_564_576" title="Defined at line 13">PrefetchNode</a>
    <span id="PrefetchTemplateArgsOpt-Plhdr_581_610" title="Not referenced locally, nor via imports">PrefetchTemplateArgsOpt-Plhdr</span> : <a href="#PrefetchTemplateArgsOpt_228_251" id="PrefetchTemplateArgsOpt_613_636" title="Defined at line 14">PrefetchTemplateArgsOpt</a>
    <span id="PrefetchNodeMod-Plhdr_641_662" title="Not referenced locally, nor via imports">PrefetchNodeMod-Plhdr</span> : <a href="#PrefetchNodeMod_256_271" id="PrefetchNodeMod_665_680" title="Defined at line 15">PrefetchNodeMod</a>
    <span id="PrefetchCondition-Plhdr_685_708" title="Not referenced locally, nor via imports">PrefetchCondition-Plhdr</span> : <a href="#PrefetchCondition_276_293" id="PrefetchCondition_711_728" title="Defined at line 16">PrefetchCondition</a>
    <span id="PrefetchCondVal-Plhdr_733_754" title="Not referenced locally, nor via imports">PrefetchCondVal-Plhdr</span> : <a href="#PrefetchCondVal_298_313" id="PrefetchCondVal_757_772" title="Defined at line 17">PrefetchCondVal</a>
    <span id="PrefetchCond-Plhdr_777_795" title="Not referenced locally, nor via imports">PrefetchCond-Plhdr</span> : <a href="#PrefetchCond_318_330" id="PrefetchCond_798_810" title="Defined at line 18">PrefetchCond</a>
    <span id="PrefetchWhereOpt-Plhdr_815_837" title="Not referenced locally, nor via imports">PrefetchWhereOpt-Plhdr</span> : <a href="#PrefetchWhereOpt_335_351" id="PrefetchWhereOpt_840_856" title="Defined at line 19">PrefetchWhereOpt</a>
    <span id="PrefetchWhereMod-Plhdr_861_883" title="Not referenced locally, nor via imports">PrefetchWhereMod-Plhdr</span> : <a href="#PrefetchWhereMod_356_372" id="PrefetchWhereMod_886_902" title="Defined at line 20">PrefetchWhereMod</a>
    <span id="OptSimpleSort-Plhdr_907_926" title="Not referenced locally, nor via imports">OptSimpleSort-Plhdr</span> : <a href="#OptSimpleSort_377_390" id="OptSimpleSort_929_942" title="Defined at line 21">OptSimpleSort</a>
    <span id="PrefetchChildrenOpt-Plhdr_947_972" title="Not referenced locally, nor via imports">PrefetchChildrenOpt-Plhdr</span> : <a href="#PrefetchChildrenOpt_395_414" id="PrefetchChildrenOpt_975_994" title="Defined at line 22">PrefetchChildrenOpt</a>
    <span id="OptPrefetchOwnerCast-Plhdr_999_1025" title="Not referenced locally, nor via imports">OptPrefetchOwnerCast-Plhdr</span> : <a href="#OptPrefetchOwnerCast_419_439" id="OptPrefetchOwnerCast_1028_1048" title="Defined at line 23">OptPrefetchOwnerCast</a>
    <span id="SortOrThis-Plhdr_1053_1069" title="Not referenced locally, nor via imports">SortOrThis-Plhdr</span> : <a href="#SortOrThis_444_454" id="SortOrThis_1072_1082" title="Defined at line 24">SortOrThis</a>
    <span id="TemplateArgOrThis-Plhdr_1087_1110" title="Not referenced locally, nor via imports">TemplateArgOrThis-Plhdr</span> : <a href="#TemplateArgOrThis_459_476" id="TemplateArgOrThis_1113_1130" title="Defined at line 25">TemplateArgOrThis</a>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <span id="PrefetchFor_1162_1173" title="Not referenced locally, nor via imports">PrefetchFor</span> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_1176_1178" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="#PrefetchTemplateArgsOpt_228_251" id="PrefetchTemplateArgsOpt_1181_1204" title="Defined at line 14">PrefetchTemplateArgsOpt</a> * <a href="#PrefetchWhereOpt_335_351" id="PrefetchWhereOpt_1207_1223" title="Defined at line 19">PrefetchWhereOpt</a> * <a href="#PrefetchChildren_190_206" id="PrefetchChildren_1226_1242" title="Defined at line 12">PrefetchChildren</a> -&gt; <a href="../WebDSL-UI-sig.stx#TemplateElement_256_271" id="TemplateElement_1246_1261" title="Defined at ../WebDSL-UI-sig.stx line 15">TemplateElement</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#PrefetchForStmt_968_983" id="PrefetchForStmt_1266_1281" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 29">PrefetchForStmt</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_1284_1286" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="#PrefetchTemplateArgsOpt_228_251" id="PrefetchTemplateArgsOpt_1289_1312" title="Defined at line 14">PrefetchTemplateArgsOpt</a> * <a href="#PrefetchWhereOpt_335_351" id="PrefetchWhereOpt_1315_1331" title="Defined at line 19">PrefetchWhereOpt</a> * <a href="#PrefetchChildren_190_206" id="PrefetchChildren_1334_1350" title="Defined at line 12">PrefetchChildren</a> -&gt; <a href="../WebDSL-Core-sig.stx#Statement_350_359" id="Statement_1354_1363" title="Defined at ../WebDSL-Core-sig.stx line 23">Statement</a>
    <span id="PrefetchChildren_1368_1384" title="Not referenced locally, nor via imports">PrefetchChildren</span> : <span class="keyword">list</span>(<a href="#PrefetchNode_211_223" id="PrefetchNode_1392_1404" title="Defined at line 13">PrefetchNode</a>) -&gt; <a href="#PrefetchChildren_190_206" id="PrefetchChildren_1409_1425" title="Defined at line 12">PrefetchChildren</a>
    <span id="PrefetchChildrenOptNone_1430_1453" title="Not referenced locally, nor via imports">PrefetchChildrenOptNone</span> : <a href="#PrefetchChildrenOpt_395_414" id="PrefetchChildrenOpt_1456_1475" title="Defined at line 22">PrefetchChildrenOpt</a>
    <span id="PrefetchChildren2PrefetchChildrenOpt_1480_1516" title="Not referenced locally, nor via imports">PrefetchChildren2PrefetchChildrenOpt</span> : <a href="#PrefetchChildren_190_206" id="PrefetchChildren_1519_1535" title="Defined at line 12">PrefetchChildren</a> -&gt; <a href="#PrefetchChildrenOpt_395_414" id="PrefetchChildrenOpt_1539_1558" title="Defined at line 22">PrefetchChildrenOpt</a>
    <span id="PrefetchNode_1563_1575" title="Not referenced locally, nor via imports">PrefetchNode</span> : <a href="#OptPrefetchOwnerCast_419_439" id="OptPrefetchOwnerCast_1578_1598" title="Defined at line 23">OptPrefetchOwnerCast</a> * <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_1601_1603" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <span class="keyword">list</span>(<a href="#PrefetchNodeMod_256_271" id="PrefetchNodeMod_1611_1626" title="Defined at line 15">PrefetchNodeMod</a>) * <a href="#PrefetchTemplateArgsOpt_228_251" id="PrefetchTemplateArgsOpt_1630_1653" title="Defined at line 14">PrefetchTemplateArgsOpt</a> * <a href="#PrefetchCondition_276_293" id="PrefetchCondition_1656_1673" title="Defined at line 16">PrefetchCondition</a> * <a href="#PrefetchWhereOpt_335_351" id="PrefetchWhereOpt_1676_1692" title="Defined at line 19">PrefetchWhereOpt</a> * <a href="#PrefetchChildrenOpt_395_414" id="PrefetchChildrenOpt_1695_1714" title="Defined at line 22">PrefetchChildrenOpt</a> -&gt; <a href="#PrefetchNode_211_223" id="PrefetchNode_1718_1730" title="Defined at line 13">PrefetchNode</a>
    <span id="OptPrefetchOwnerCastNone_1735_1759" title="Not referenced locally, nor via imports">OptPrefetchOwnerCastNone</span> : <a href="#OptPrefetchOwnerCast_419_439" id="OptPrefetchOwnerCast_1762_1782" title="Defined at line 23">OptPrefetchOwnerCast</a>
    <span id="PrefetchOwnerCast_1787_1804" title="Not referenced locally, nor via imports">PrefetchOwnerCast</span> : <a href="../WebDSL-Lexical-sig.stx#SimpleSortLex_756_769" id="SimpleSortLex_1807_1820" title="Defined at ../WebDSL-Lexical-sig.stx line 42">SimpleSortLex</a> -&gt; <a href="#OptPrefetchOwnerCast_419_439" id="OptPrefetchOwnerCast_1824_1844" title="Defined at line 23">OptPrefetchOwnerCast</a>
    <span id="NoEmptyBatch_1849_1861" title="Not referenced locally, nor via imports">NoEmptyBatch</span> : <a href="#PrefetchNodeMod_256_271" id="PrefetchNodeMod_1864_1879" title="Defined at line 15">PrefetchNodeMod</a>
    <span id="FetchEarly_1884_1894" title="Not referenced locally, nor via imports">FetchEarly</span> : <a href="#PrefetchNodeMod_256_271" id="PrefetchNodeMod_1897_1912" title="Defined at line 15">PrefetchNodeMod</a>
    <span id="PrefetchTemplateArgsOptNone_1917_1944" title="Not referenced locally, nor via imports">PrefetchTemplateArgsOptNone</span> : <a href="#PrefetchTemplateArgsOpt_228_251" id="PrefetchTemplateArgsOpt_1947_1970" title="Defined at line 14">PrefetchTemplateArgsOpt</a>
    <span id="PrefetchTemplateArgs_1975_1995" title="Not referenced locally, nor via imports">PrefetchTemplateArgs</span> : <span class="keyword">list</span>(<a href="#TemplateArgOrThis_459_476" id="TemplateArgOrThis_2003_2020" title="Defined at line 25">TemplateArgOrThis</a>) -&gt; <a href="#PrefetchTemplateArgsOpt_228_251" id="PrefetchTemplateArgsOpt_2025_2048" title="Defined at line 14">PrefetchTemplateArgsOpt</a>
    <span id="TemplateArgOrThis_2053_2070" title="Not referenced locally, nor via imports">TemplateArgOrThis</span> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_2073_2075" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <span class="keyword">list</span>(<a href="#SortOrThis_444_454" id="SortOrThis_2083_2093" title="Defined at line 24">SortOrThis</a>) -&gt; <a href="#TemplateArgOrThis_459_476" id="TemplateArgOrThis_2098_2115" title="Defined at line 25">TemplateArgOrThis</a>
    <span id="Sort_2120_2124" title="Not referenced locally, nor via imports">Sort</span> : <a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_2127_2131" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a> -&gt; <a href="#SortOrThis_444_454" id="SortOrThis_2135_2145" title="Defined at line 24">SortOrThis</a>
    <span id="TArgThis_2150_2158" title="Not referenced locally, nor via imports">TArgThis</span> : <a href="#SortOrThis_444_454" id="SortOrThis_2161_2171" title="Defined at line 24">SortOrThis</a>
    <span id="PrefetchThisCast_2176_2192" title="Not referenced locally, nor via imports">PrefetchThisCast</span> : <a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_2195_2199" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a> -&gt; <a href="#SortOrThis_444_454" id="SortOrThis_2203_2213" title="Defined at line 24">SortOrThis</a>
    <span id="PrefetchConditionNone_2218_2239" title="Not referenced locally, nor via imports">PrefetchConditionNone</span> : <a href="#PrefetchCondition_276_293" id="PrefetchCondition_2242_2259" title="Defined at line 16">PrefetchCondition</a>
    <span id="PrefetchCondition_2264_2281" title="Not referenced locally, nor via imports">PrefetchCondition</span> : <a href="#PrefetchCond_318_330" id="PrefetchCond_2284_2296" title="Defined at line 18">PrefetchCond</a> -&gt; <a href="#PrefetchCondition_276_293" id="PrefetchCondition_2300_2317" title="Defined at line 16">PrefetchCondition</a>
    <span id="PrefetchWhereOptNone_2322_2342" title="Not referenced locally, nor via imports">PrefetchWhereOptNone</span> : <a href="#PrefetchWhereOpt_335_351" id="PrefetchWhereOpt_2345_2361" title="Defined at line 19">PrefetchWhereOpt</a>
    <span id="PrefetchWhere_2366_2379" title="Not referenced locally, nor via imports">PrefetchWhere</span> : <span class="keyword">list</span>(<a href="#PrefetchWhereMod_356_372" id="PrefetchWhereMod_2387_2403" title="Defined at line 20">PrefetchWhereMod</a>) * <a href="#PrefetchCond_318_330" id="PrefetchCond_2407_2419" title="Defined at line 18">PrefetchCond</a> -&gt; <a href="#PrefetchWhereOpt_335_351" id="PrefetchWhereOpt_2423_2439" title="Defined at line 19">PrefetchWhereOpt</a>
    <span id="Hint_2444_2448" title="Not referenced locally, nor via imports">Hint</span> : <a href="#PrefetchWhereMod_356_372" id="PrefetchWhereMod_2451_2467" title="Defined at line 20">PrefetchWhereMod</a>
    <span id="PrefetchEq_2472_2482" title="Not referenced locally, nor via imports">PrefetchEq</span> : <a href="#PrefetchCondVal_298_313" id="PrefetchCondVal_2485_2500" title="Defined at line 17">PrefetchCondVal</a> * <a href="#PrefetchCondVal_298_313" id="PrefetchCondVal_2503_2518" title="Defined at line 17">PrefetchCondVal</a> -&gt; <a href="#PrefetchCond_318_330" id="PrefetchCond_2522_2534" title="Defined at line 18">PrefetchCond</a>
    <span id="PrefetchNotEq_2539_2552" title="Not referenced locally, nor via imports">PrefetchNotEq</span> : <a href="#PrefetchCondVal_298_313" id="PrefetchCondVal_2555_2570" title="Defined at line 17">PrefetchCondVal</a> * <a href="#PrefetchCondVal_298_313" id="PrefetchCondVal_2573_2588" title="Defined at line 17">PrefetchCondVal</a> -&gt; <a href="#PrefetchCond_318_330" id="PrefetchCond_2592_2604" title="Defined at line 18">PrefetchCond</a>
    <span id="PrefetchLargerThan_2609_2627" title="Not referenced locally, nor via imports">PrefetchLargerThan</span> : <a href="#PrefetchCondVal_298_313" id="PrefetchCondVal_2630_2645" title="Defined at line 17">PrefetchCondVal</a> * <a href="#PrefetchCondVal_298_313" id="PrefetchCondVal_2648_2663" title="Defined at line 17">PrefetchCondVal</a> -&gt; <a href="#PrefetchCond_318_330" id="PrefetchCond_2667_2679" title="Defined at line 18">PrefetchCond</a>
    <span id="PrefetchLargerThanOrEqual_2684_2709" title="Not referenced locally, nor via imports">PrefetchLargerThanOrEqual</span> : <a href="#PrefetchCondVal_298_313" id="PrefetchCondVal_2712_2727" title="Defined at line 17">PrefetchCondVal</a> * <a href="#PrefetchCondVal_298_313" id="PrefetchCondVal_2730_2745" title="Defined at line 17">PrefetchCondVal</a> -&gt; <a href="#PrefetchCond_318_330" id="PrefetchCond_2749_2761" title="Defined at line 18">PrefetchCond</a>
    <span id="PrefetchSmallerThan_2766_2785" title="Not referenced locally, nor via imports">PrefetchSmallerThan</span> : <a href="#PrefetchCondVal_298_313" id="PrefetchCondVal_2788_2803" title="Defined at line 17">PrefetchCondVal</a> * <a href="#PrefetchCondVal_298_313" id="PrefetchCondVal_2806_2821" title="Defined at line 17">PrefetchCondVal</a> -&gt; <a href="#PrefetchCond_318_330" id="PrefetchCond_2825_2837" title="Defined at line 18">PrefetchCond</a>
    <span id="PrefetchSmallerThanOrEqual_2842_2868" title="Not referenced locally, nor via imports">PrefetchSmallerThanOrEqual</span> : <a href="#PrefetchCondVal_298_313" id="PrefetchCondVal_2871_2886" title="Defined at line 17">PrefetchCondVal</a> * <a href="#PrefetchCondVal_298_313" id="PrefetchCondVal_2889_2904" title="Defined at line 17">PrefetchCondVal</a> -&gt; <a href="#PrefetchCond_318_330" id="PrefetchCond_2908_2920" title="Defined at line 18">PrefetchCond</a>
    <span id="PrefetchAnd_2925_2936" title="Not referenced locally, nor via imports">PrefetchAnd</span> : <a href="#PrefetchCond_318_330" id="PrefetchCond_2939_2951" title="Defined at line 18">PrefetchCond</a> * <a href="#PrefetchCond_318_330" id="PrefetchCond_2954_2966" title="Defined at line 18">PrefetchCond</a> -&gt; <a href="#PrefetchCond_318_330" id="PrefetchCond_2970_2982" title="Defined at line 18">PrefetchCond</a>
    <span id="PrefetchOr_2987_2997" title="Not referenced locally, nor via imports">PrefetchOr</span> : <a href="#PrefetchCond_318_330" id="PrefetchCond_3000_3012" title="Defined at line 18">PrefetchCond</a> * <a href="#PrefetchCond_318_330" id="PrefetchCond_3015_3027" title="Defined at line 18">PrefetchCond</a> -&gt; <a href="#PrefetchCond_318_330" id="PrefetchCond_3031_3043" title="Defined at line 18">PrefetchCond</a>
    <span id="PrefetchNot_3048_3059" title="Not referenced locally, nor via imports">PrefetchNot</span> : <a href="#PrefetchCond_318_330" id="PrefetchCond_3062_3074" title="Defined at line 18">PrefetchCond</a> -&gt; <a href="#PrefetchCond_318_330" id="PrefetchCond_3078_3090" title="Defined at line 18">PrefetchCond</a>
    <span id="PrefetchCondVal2PrefetchCond_3095_3123" title="Not referenced locally, nor via imports">PrefetchCondVal2PrefetchCond</span> : <a href="#PrefetchCondVal_298_313" id="PrefetchCondVal_3126_3141" title="Defined at line 17">PrefetchCondVal</a> -&gt; <a href="#PrefetchCond_318_330" id="PrefetchCond_3145_3157" title="Defined at line 18">PrefetchCond</a>
    <span id="PrefetchTrue_3162_3174" title="Not referenced locally, nor via imports">PrefetchTrue</span> : <a href="#PrefetchCondVal_298_313" id="PrefetchCondVal_3177_3192" title="Defined at line 17">PrefetchCondVal</a>
    <span id="PrefetchFalse_3197_3210" title="Not referenced locally, nor via imports">PrefetchFalse</span> : <a href="#PrefetchCondVal_298_313" id="PrefetchCondVal_3213_3228" title="Defined at line 17">PrefetchCondVal</a>
    <span id="PrefetchNull_3233_3245" title="Not referenced locally, nor via imports">PrefetchNull</span> : <a href="#PrefetchCondVal_298_313" id="PrefetchCondVal_3248_3263" title="Defined at line 17">PrefetchCondVal</a>
    <span id="PrefetchConst_3268_3281" title="Not referenced locally, nor via imports">PrefetchConst</span> : <a href="../WebDSL-Action-sig.stx#ConstValue_389_399" id="ConstValue_3284_3294" title="Defined at ../WebDSL-Action-sig.stx line 24">ConstValue</a> -&gt; <a href="#PrefetchCondVal_298_313" id="PrefetchCondVal_3298_3313" title="Defined at line 17">PrefetchCondVal</a>
    <span id="PrefetchCondVar_3318_3333" title="Not referenced locally, nor via imports">PrefetchCondVar</span> : <a href="../WebDSL-Lexical-sig.stx#VarId_111_116" id="VarId_3336_3341" title="Defined at ../WebDSL-Lexical-sig.stx line 10">VarId</a> -&gt; <a href="#PrefetchCondVal_298_313" id="PrefetchCondVal_3345_3360" title="Defined at line 17">PrefetchCondVal</a>
    <span id="RelativeFieldAccess_3365_3384" title="Not referenced locally, nor via imports">RelativeFieldAccess</span> : <a href="#OptSimpleSort_377_390" id="OptSimpleSort_3387_3400" title="Defined at line 21">OptSimpleSort</a> * <a href="../WebDSL-Lexical-sig.stx#PropertyId_170_180" id="PropertyId_3403_3413" title="Defined at ../WebDSL-Lexical-sig.stx line 13">PropertyId</a> -&gt; <a href="#PrefetchCondVal_298_313" id="PrefetchCondVal_3417_3432" title="Defined at line 17">PrefetchCondVal</a>
    <span id="PrefetchMul_3437_3448" title="Not referenced locally, nor via imports">PrefetchMul</span> : <a href="#PrefetchCondVal_298_313" id="PrefetchCondVal_3451_3466" title="Defined at line 17">PrefetchCondVal</a> * <a href="#PrefetchCondVal_298_313" id="PrefetchCondVal_3469_3484" title="Defined at line 17">PrefetchCondVal</a> -&gt; <a href="#PrefetchCondVal_298_313" id="PrefetchCondVal_3488_3503" title="Defined at line 17">PrefetchCondVal</a>
    <span id="PrefetchDiv_3508_3519" title="Not referenced locally, nor via imports">PrefetchDiv</span> : <a href="#PrefetchCondVal_298_313" id="PrefetchCondVal_3522_3537" title="Defined at line 17">PrefetchCondVal</a> * <a href="#PrefetchCondVal_298_313" id="PrefetchCondVal_3540_3555" title="Defined at line 17">PrefetchCondVal</a> -&gt; <a href="#PrefetchCondVal_298_313" id="PrefetchCondVal_3559_3574" title="Defined at line 17">PrefetchCondVal</a>
    <span id="PrefetchMod_3579_3590" title="Not referenced locally, nor via imports">PrefetchMod</span> : <a href="#PrefetchCondVal_298_313" id="PrefetchCondVal_3593_3608" title="Defined at line 17">PrefetchCondVal</a> * <a href="#PrefetchCondVal_298_313" id="PrefetchCondVal_3611_3626" title="Defined at line 17">PrefetchCondVal</a> -&gt; <a href="#PrefetchCondVal_298_313" id="PrefetchCondVal_3630_3645" title="Defined at line 17">PrefetchCondVal</a>
    <span id="PrefetchAdd_3650_3661" title="Not referenced locally, nor via imports">PrefetchAdd</span> : <a href="#PrefetchCondVal_298_313" id="PrefetchCondVal_3664_3679" title="Defined at line 17">PrefetchCondVal</a> * <a href="#PrefetchCondVal_298_313" id="PrefetchCondVal_3682_3697" title="Defined at line 17">PrefetchCondVal</a> -&gt; <a href="#PrefetchCondVal_298_313" id="PrefetchCondVal_3701_3716" title="Defined at line 17">PrefetchCondVal</a>
    <span id="PrefetchSub_3721_3732" title="Not referenced locally, nor via imports">PrefetchSub</span> : <a href="#PrefetchCondVal_298_313" id="PrefetchCondVal_3735_3750" title="Defined at line 17">PrefetchCondVal</a> * <a href="#PrefetchCondVal_298_313" id="PrefetchCondVal_3753_3768" title="Defined at line 17">PrefetchCondVal</a> -&gt; <a href="#PrefetchCondVal_298_313" id="PrefetchCondVal_3772_3787" title="Defined at line 17">PrefetchCondVal</a>
    <span id="OptSimpleSortNone_3792_3809" title="Not referenced locally, nor via imports">OptSimpleSortNone</span> : <a href="#OptSimpleSort_377_390" id="OptSimpleSort_3812_3825" title="Defined at line 21">OptSimpleSort</a>
    <span id="OptSimpleSortSome_3830_3847" title="Not referenced locally, nor via imports">OptSimpleSortSome</span> : <a href="../WebDSL-Lexical-sig.stx#SimpleSortLex_756_769" id="SimpleSortLex_3850_3863" title="Defined at ../WebDSL-Lexical-sig.stx line 42">SimpleSortLex</a> -&gt; <a href="#OptSimpleSort_377_390" id="OptSimpleSort_3867_3880" title="Defined at line 21">OptSimpleSort</a>
</code></pre></td></tr></tbody></table></div>