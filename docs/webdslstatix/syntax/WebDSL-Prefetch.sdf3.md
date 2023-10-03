---
title: WebDSL-Prefetch.sdf3
---

# `WebDSL-Prefetch.sdf3`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-Prefetch.sdf3]

[pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-Prefetch.sdf3]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/syntax/WebDSL-Prefetch.sdf3 "The source file on GitHub"

<div class="sdf3"><table class="highlighttable"><tbody><tr><td class="linenos"><div class="linenodiv"><pre><span></span>1
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
90
91
92
93
94
95
96
97
98
99
100
101
102
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix.sdf3#WebDSL-Prefetch_309_324" id="WebDSL-Prefetch_7_22" title="Referenced at ../webdsl-statix.sdf3 line 19">WebDSL-Prefetch</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3#WebDSL-Action_7_20" id="WebDSL-Action_34_47" title="Defined at ../WebDSL-Action.sdf3 line 1">WebDSL-Action</a>
  <a href="../WebDSL-Core.sdf3#WebDSL-Core_7_18" id="WebDSL-Core_50_61" title="Defined at ../WebDSL-Core.sdf3 line 1">WebDSL-Core</a>
  <a href="../WebDSL-Lexical.sdf3#WebDSL-Lexical_7_21" id="WebDSL-Lexical_64_78" title="Defined at ../WebDSL-Lexical.sdf3 line 1">WebDSL-Lexical</a>
  <a href="../WebDSL-UI.sdf3#WebDSL-UI_7_16" id="WebDSL-UI_81_90" title="Defined at ../WebDSL-UI.sdf3 line 1">WebDSL-UI</a>

<span class="keyword">context-free sorts</span>

  <a href="#PrefetchChildren_761_777" id="PrefetchChildren_114_130" title="Referenced at line 27">PrefetchChildren</a> <a href="#PrefetchNode_666_678" id="PrefetchNode_131_143" title="Referenced at line 24">PrefetchNode</a> <a href="#PrefetchTemplateArgsOpt_858_881" id="PrefetchTemplateArgsOpt_144_167" title="Referenced at line 29">PrefetchTemplateArgsOpt</a> <a href="#PrefetchNodeMod_839_854" id="PrefetchNodeMod_168_183" title="Referenced at line 29">PrefetchNodeMod</a> <a href="#PrefetchCondition_884_901" id="PrefetchCondition_184_201" title="Referenced at line 29">PrefetchCondition</a> <a href="#PrefetchCondVal_3700_3715" id="PrefetchCondVal_202_217" title="Referenced at line 91">PrefetchCondVal</a> <a href="#PrefetchCond_4018_4030" id="PrefetchCond_218_230" title="Referenced at line 102">PrefetchCond</a> <a href="#PrefetchWhereOpt_904_920" id="PrefetchWhereOpt_231_247" title="Referenced at line 29">PrefetchWhereOpt</a> <a href="#PrefetchWhereMod_1705_1721" id="PrefetchWhereMod_248_264" title="Referenced at line 47">PrefetchWhereMod</a>
  <a href="#OptSimpleSort_2899_2912" id="OptSimpleSort_267_280" title="Referenced at line 66">OptSimpleSort</a> <a href="#PrefetchChildrenOpt_923_942" id="PrefetchChildrenOpt_281_300" title="Referenced at line 29">PrefetchChildrenOpt</a> <a href="#OptPrefetchOwnerCast_811_831" id="OptPrefetchOwnerCast_301_321" title="Referenced at line 29">OptPrefetchOwnerCast</a> <a href="#SortOrThis_1358_1368" id="SortOrThis_322_332" title="Referenced at line 37">SortOrThis</a> <a href="#TemplateArgOrThis_1280_1297" id="TemplateArgOrThis_333_350" title="Referenced at line 36">TemplateArgOrThis</a>

<span class="keyword">context-free syntax</span>

  <span id="TemplateElement_375_390" title="Not referenced locally, nor via imports">TemplateElement</span>.<span class="cons_Constructor"><span id="PrefetchFor_391_402" title="Not referenced locally, nor via imports">PrefetchFor</span></span> = &lt;
    <span class="cons_String">prefetch-for</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_425_427" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; &lt;<a href="#PrefetchTemplateArgsOpt_144_167" id="PrefetchTemplateArgsOpt_430_453" title="Defined at line 11, 35, 36">PrefetchTemplateArgsOpt</a>&gt; &lt;<a href="#PrefetchWhereOpt_231_247" id="PrefetchWhereOpt_456_472" title="Defined at line 11, 46, 47">PrefetchWhereOpt</a>&gt; &lt;<a href="#PrefetchChildren_114_130" id="PrefetchChildren_475_491" title="Defined at line 11, 23">PrefetchChildren</a>&gt;
  &gt;
  <span id="Statement_499_508" title="Not referenced locally, nor via imports">Statement</span>.<span class="cons_Constructor"><span id="PrefetchForStmt_509_524" title="Not referenced locally, nor via imports">PrefetchForStmt</span></span> = &lt;
    <span class="cons_String">prefetch-for</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_547_549" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; &lt;<a href="#PrefetchTemplateArgsOpt_144_167" id="PrefetchTemplateArgsOpt_552_575" title="Defined at line 11, 35, 36">PrefetchTemplateArgsOpt</a>&gt; &lt;<a href="#PrefetchWhereOpt_231_247" id="PrefetchWhereOpt_578_594" title="Defined at line 11, 46, 47">PrefetchWhereOpt</a>&gt; &lt;<a href="#PrefetchChildren_114_130" id="PrefetchChildren_597_613" title="Defined at line 11, 23">PrefetchChildren</a>&gt;
  &gt;

  <a href="#PrefetchChildren_761_777" id="PrefetchChildren_622_638" title="Referenced at line 27">PrefetchChildren</a>.<span class="cons_Constructor"><span id="PrefetchChildren_639_655" title="Not referenced locally, nor via imports">PrefetchChildren</span></span> = &lt;<span class="cons_String">{</span>
    &lt;<a href="#PrefetchNode_131_143" id="PrefetchNode_666_678" title="Defined at line 11, 29">PrefetchNode</a>*&gt;
  <span class="cons_String">}</span>&gt;
  <a href="#PrefetchChildrenOpt_923_942" id="PrefetchChildrenOpt_688_707" title="Referenced at line 29">PrefetchChildrenOpt</a>.<span class="cons_Constructor"><span id="PrefetchChildrenOptNone_708_731" title="Not referenced locally, nor via imports">PrefetchChildrenOptNone</span></span> = &lt;&gt;
  <a href="#PrefetchChildrenOpt_923_942" id="PrefetchChildrenOpt_739_758" title="Referenced at line 29">PrefetchChildrenOpt</a> = <a href="#PrefetchChildren_114_130" id="PrefetchChildren_761_777" title="Defined at line 11, 23">PrefetchChildren</a>

  <a href="#PrefetchNode_666_678" id="PrefetchNode_781_793" title="Referenced at line 24">PrefetchNode</a>.<span class="cons_Constructor"><span id="PrefetchNode_794_806" title="Not referenced locally, nor via imports">PrefetchNode</span></span> = &lt;&lt;<a href="#OptPrefetchOwnerCast_301_321" id="OptPrefetchOwnerCast_811_831" title="Defined at line 12, 30, 31">OptPrefetchOwnerCast</a>&gt; &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_834_836" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; &lt;<a href="#PrefetchNodeMod_168_183" id="PrefetchNodeMod_839_854" title="Defined at line 11, 32, 33">PrefetchNodeMod</a>*&gt; &lt;<a href="#PrefetchTemplateArgsOpt_144_167" id="PrefetchTemplateArgsOpt_858_881" title="Defined at line 11, 35, 36">PrefetchTemplateArgsOpt</a>&gt; &lt;<a href="#PrefetchCondition_184_201" id="PrefetchCondition_884_901" title="Defined at line 11, 44, 45">PrefetchCondition</a>&gt; &lt;<a href="#PrefetchWhereOpt_231_247" id="PrefetchWhereOpt_904_920" title="Defined at line 11, 46, 47">PrefetchWhereOpt</a>&gt; &lt;<a href="#PrefetchChildrenOpt_281_300" id="PrefetchChildrenOpt_923_942" title="Defined at line 12, 26, 27">PrefetchChildrenOpt</a>&gt;&gt;
  <a href="#OptPrefetchOwnerCast_811_831" id="OptPrefetchOwnerCast_947_967" title="Referenced at line 29">OptPrefetchOwnerCast</a>.<span class="cons_Constructor"><span id="OptPrefetchOwnerCastNone_968_992" title="Not referenced locally, nor via imports">OptPrefetchOwnerCastNone</span></span> = &lt;&gt;
  <a href="#OptPrefetchOwnerCast_811_831" id="OptPrefetchOwnerCast_1000_1020" title="Referenced at line 29">OptPrefetchOwnerCast</a>.<span class="cons_Constructor"><span id="PrefetchOwnerCast_1021_1038" title="Not referenced locally, nor via imports">PrefetchOwnerCast</span></span> = &lt;&lt;<a href="../WebDSL-Core.sdf3#SimpleSortLex_553_566" id="SimpleSortLex_1043_1056" title="Defined at ../WebDSL-Core.sdf3 line 24">SimpleSortLex</a>&gt; <span class="cons_String">.</span>&gt;
  <a href="#PrefetchNodeMod_839_854" id="PrefetchNodeMod_1063_1078" title="Referenced at line 29">PrefetchNodeMod</a>.<span class="cons_Constructor"><span id="NoEmptyBatch_1079_1091" title="Not referenced locally, nor via imports">NoEmptyBatch</span></span> = &lt;<span class="cons_String">no-empty-batch</span>&gt;
  <a href="#PrefetchNodeMod_839_854" id="PrefetchNodeMod_1113_1128" title="Referenced at line 29">PrefetchNodeMod</a>.<span class="cons_Constructor"><span id="FetchEarly_1129_1139" title="Not referenced locally, nor via imports">FetchEarly</span></span> = &lt;<span class="cons_String">fetch-early</span>&gt;

  <a href="#PrefetchTemplateArgsOpt_858_881" id="PrefetchTemplateArgsOpt_1159_1182" title="Referenced at line 29">PrefetchTemplateArgsOpt</a>.<span class="cons_Constructor"><span id="PrefetchTemplateArgsOptNone_1183_1210" title="Not referenced locally, nor via imports">PrefetchTemplateArgsOptNone</span></span> = &lt;&gt;
  <a href="#PrefetchTemplateArgsOpt_858_881" id="PrefetchTemplateArgsOpt_1218_1241" title="Referenced at line 29">PrefetchTemplateArgsOpt</a>.<span class="cons_Constructor"><span id="PrefetchTemplateArgs_1242_1262" title="Not referenced locally, nor via imports">PrefetchTemplateArgs</span></span> = &lt;<span class="cons_String">templates</span> <span class="cons_String">[</span> &lt;{<a href="#TemplateArgOrThis_333_350" id="TemplateArgOrThis_1280_1297" title="Defined at line 12, 37">TemplateArgOrThis</a> <span class="cons_Lit">","</span>}+&gt; <span class="cons_String">]</span>&gt;
  <a href="#TemplateArgOrThis_1280_1297" id="TemplateArgOrThis_1310_1327" title="Referenced at line 36">TemplateArgOrThis</a>.<span class="cons_Constructor"><span id="TemplateArgOrThis_1328_1345" title="Not referenced locally, nor via imports">TemplateArgOrThis</span></span> = &lt;&lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_1350_1352" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">(</span> &lt;{<a href="#SortOrThis_322_332" id="SortOrThis_1358_1368" title="Defined at line 12, 38, 39, 40">SortOrThis</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;
  <a href="#SortOrThis_1358_1368" id="SortOrThis_1381_1391" title="Referenced at line 37">SortOrThis</a>.<span class="cons_Constructor"><span id="Sort_1392_1396" title="Not referenced locally, nor via imports">Sort</span></span> = <a href="../WebDSL-UI.sdf3#Sort_13078_13082" id="Sort_1399_1403" title="Defined at ../WebDSL-UI.sdf3 line 464">Sort</a>
  <a href="#SortOrThis_1358_1368" id="SortOrThis_1406_1416" title="Referenced at line 37">SortOrThis</a>.<span class="cons_Constructor"><span id="TArgThis_1417_1425" title="Not referenced locally, nor via imports">TArgThis</span></span> = &lt;<span class="cons_String">this</span>&gt;
  <a href="#SortOrThis_1358_1368" id="SortOrThis_1437_1447" title="Referenced at line 37">SortOrThis</a>.<span class="cons_Constructor"><span id="PrefetchThisCast_1448_1464" title="Not referenced locally, nor via imports">PrefetchThisCast</span></span> = &lt;<span class="cons_String">this</span> <span class="cons_String">as</span> &lt;<a href="../WebDSL-UI.sdf3#Sort_13078_13082" id="Sort_1477_1481" title="Defined at ../WebDSL-UI.sdf3 line 464">Sort</a>&gt;&gt;

<span class="keyword">context-free syntax</span>

  <a href="#PrefetchCondition_884_901" id="PrefetchCondition_1508_1525" title="Referenced at line 29">PrefetchCondition</a>.<span class="cons_Constructor"><span id="PrefetchConditionNone_1526_1547" title="Not referenced locally, nor via imports">PrefetchConditionNone</span></span> = &lt;&gt;
  <a href="#PrefetchCondition_884_901" id="PrefetchCondition_1555_1572" title="Referenced at line 29">PrefetchCondition</a>.<span class="cons_Constructor"><span id="PrefetchCondition_1573_1590" title="Not referenced locally, nor via imports">PrefetchCondition</span></span> = &lt;<span class="cons_String">if</span> <span class="cons_String">(</span> &lt;<a href="#PrefetchCond_218_230" id="PrefetchCond_1600_1612" title="Defined at line 11, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59">PrefetchCond</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#PrefetchWhereOpt_904_920" id="PrefetchWhereOpt_1619_1635" title="Referenced at line 29">PrefetchWhereOpt</a>.<span class="cons_Constructor"><span id="PrefetchWhereOptNone_1636_1656" title="Not referenced locally, nor via imports">PrefetchWhereOptNone</span></span> = &lt;&gt;
  <a href="#PrefetchWhereOpt_904_920" id="PrefetchWhereOpt_1664_1680" title="Referenced at line 29">PrefetchWhereOpt</a>.<span class="cons_Constructor"><span id="PrefetchWhere_1681_1694" title="Not referenced locally, nor via imports">PrefetchWhere</span></span> = &lt;<span class="cons_String">where</span> &lt;<a href="#PrefetchWhereMod_248_264" id="PrefetchWhereMod_1705_1721" title="Defined at line 11, 48">PrefetchWhereMod</a>*&gt; <span class="cons_String">(</span> &lt;<a href="#PrefetchCond_218_230" id="PrefetchCond_1727_1739" title="Defined at line 11, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59">PrefetchCond</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#PrefetchWhereMod_1705_1721" id="PrefetchWhereMod_1746_1762" title="Referenced at line 47">PrefetchWhereMod</a>.<span class="cons_Constructor"><span id="Hint_1763_1767" title="Not referenced locally, nor via imports">Hint</span></span> = &lt;<span class="cons_String">hint</span>&gt;
  <a href="#PrefetchCond_4018_4030" id="PrefetchCond_1779_1791" title="Referenced at line 102">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchEq_3761_3771" id="PrefetchEq_1792_1802" title="Referenced at line 94">PrefetchEq</a></span>                 = &lt;&lt;<a href="#PrefetchCondVal_202_217" id="PrefetchCondVal_1823_1838" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt; <span class="cons_String">==</span> &lt;<a href="#PrefetchCondVal_202_217" id="PrefetchCondVal_1844_1859" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt;&gt; {<span class="keyword">left</span>}
  <a href="#PrefetchCond_4018_4030" id="PrefetchCond_1871_1883" title="Referenced at line 102">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchNotEq_3789_3802" id="PrefetchNotEq_1884_1897" title="Referenced at line 95">PrefetchNotEq</a></span>              = &lt;&lt;<a href="#PrefetchCondVal_202_217" id="PrefetchCondVal_1915_1930" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt; <span class="cons_String">!=</span> &lt;<a href="#PrefetchCondVal_202_217" id="PrefetchCondVal_1936_1951" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt;&gt; {<span class="keyword">left</span>}
  <a href="#PrefetchCond_4018_4030" id="PrefetchCond_1963_1975" title="Referenced at line 102">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchLargerThan_3820_3838" id="PrefetchLargerThan_1976_1994" title="Referenced at line 96">PrefetchLargerThan</a></span>         = &lt;&lt;<a href="#PrefetchCondVal_202_217" id="PrefetchCondVal_2007_2022" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt; \&gt; &lt;<a href="#PrefetchCondVal_202_217" id="PrefetchCondVal_2028_2043" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt;&gt; {<span class="keyword">left</span>}
  <a href="#PrefetchCond_4018_4030" id="PrefetchCond_2055_2067" title="Referenced at line 102">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchLargerThanOrEqual_3856_3881" id="PrefetchLargerThanOrEqual_2068_2093" title="Referenced at line 97">PrefetchLargerThanOrEqual</a></span>  = &lt;&lt;<a href="#PrefetchCondVal_202_217" id="PrefetchCondVal_2099_2114" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt; \&gt;<span class="cons_String">=</span> &lt;<a href="#PrefetchCondVal_202_217" id="PrefetchCondVal_2121_2136" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt;&gt; {<span class="keyword">left</span>}
  <a href="#PrefetchCond_4018_4030" id="PrefetchCond_2148_2160" title="Referenced at line 102">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchSmallerThan_3899_3918" id="PrefetchSmallerThan_2161_2180" title="Referenced at line 98">PrefetchSmallerThan</a></span>        = &lt;&lt;<a href="#PrefetchCondVal_202_217" id="PrefetchCondVal_2192_2207" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt; \&lt; &lt;<a href="#PrefetchCondVal_202_217" id="PrefetchCondVal_2213_2228" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt;&gt; {<span class="keyword">left</span>}
  <a href="#PrefetchCond_4018_4030" id="PrefetchCond_2240_2252" title="Referenced at line 102">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchSmallerThanOrEqual_3936_3962" id="PrefetchSmallerThanOrEqual_2253_2279" title="Referenced at line 99">PrefetchSmallerThanOrEqual</a></span> = &lt;&lt;<a href="#PrefetchCondVal_202_217" id="PrefetchCondVal_2284_2299" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt; \&lt;<span class="cons_String">=</span> &lt;<a href="#PrefetchCondVal_202_217" id="PrefetchCondVal_2306_2321" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt;&gt; {<span class="keyword">left</span>}
  <a href="#PrefetchCond_4018_4030" id="PrefetchCond_2333_2345" title="Referenced at line 102">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchAnd_3992_4003" id="PrefetchAnd_2346_2357" title="Referenced at line 101">PrefetchAnd</a></span>                = &lt;&lt;<a href="#PrefetchCond_218_230" id="PrefetchCond_2377_2389" title="Defined at line 11, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59">PrefetchCond</a>&gt; <span class="cons_String">&amp;&amp;</span> &lt;<a href="#PrefetchCond_218_230" id="PrefetchCond_2395_2407" title="Defined at line 11, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59">PrefetchCond</a>&gt;&gt; {<span class="keyword">left</span>}
  <a href="#PrefetchCond_4018_4030" id="PrefetchCond_2419_2431" title="Referenced at line 102">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchOr_4031_4041" id="PrefetchOr_2432_2442" title="Referenced at line 102">PrefetchOr</a></span>                 = &lt;&lt;<a href="#PrefetchCond_218_230" id="PrefetchCond_2463_2475" title="Defined at line 11, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59">PrefetchCond</a>&gt; <span class="cons_String">||</span> &lt;<a href="#PrefetchCond_218_230" id="PrefetchCond_2481_2493" title="Defined at line 11, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59">PrefetchCond</a>&gt;&gt; {<span class="keyword">left</span>}
  <a href="#PrefetchCond_4018_4030" id="PrefetchCond_2505_2517" title="Referenced at line 102">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchNot_3525_3536" id="PrefetchNot_2518_2529" title="Referenced at line 82">PrefetchNot</a></span>                = &lt;<span class="cons_String">!</span> &lt;<a href="#PrefetchCond_218_230" id="PrefetchCond_2551_2563" title="Defined at line 11, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59">PrefetchCond</a>&gt;&gt;
  <a href="#PrefetchCond_4018_4030" id="PrefetchCond_2568_2580" title="Referenced at line 102">PrefetchCond</a> = <a href="#PrefetchCondVal_202_217" id="PrefetchCondVal_2583_2598" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>
  <a href="#PrefetchCond_4018_4030" id="PrefetchCond_2601_2613" title="Referenced at line 102">PrefetchCond</a> = &lt;<span class="cons_String">(</span> &lt;<a href="#PrefetchCond_218_230" id="PrefetchCond_2620_2632" title="Defined at line 11, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59">PrefetchCond</a>&gt; <span class="cons_String">)</span>&gt; {<span class="keyword">bracket</span>}

  <a href="#PrefetchCondVal_3700_3715" id="PrefetchCondVal_2650_2665" title="Referenced at line 91">PrefetchCondVal</a>.<span class="cons_Constructor"><span id="PrefetchTrue_2666_2678" title="Not referenced locally, nor via imports">PrefetchTrue</span></span> = &lt;<span class="cons_String">true</span>&gt;
  <a href="#PrefetchCondVal_3700_3715" id="PrefetchCondVal_2690_2705" title="Referenced at line 91">PrefetchCondVal</a>.<span class="cons_Constructor"><span id="PrefetchFalse_2706_2719" title="Not referenced locally, nor via imports">PrefetchFalse</span></span> = &lt;<span class="cons_String">false</span>&gt;
  <a href="#PrefetchCondVal_3700_3715" id="PrefetchCondVal_2732_2747" title="Referenced at line 91">PrefetchCondVal</a>.<span class="cons_Constructor"><span id="PrefetchNull_2748_2760" title="Not referenced locally, nor via imports">PrefetchNull</span></span> = &lt;<span class="cons_String">null</span>&gt;
  <a href="#PrefetchCondVal_3700_3715" id="PrefetchCondVal_2772_2787" title="Referenced at line 91">PrefetchCondVal</a>.<span class="cons_Constructor"><span id="PrefetchConst_2788_2801" title="Not referenced locally, nor via imports">PrefetchConst</span></span> = <a href="../WebDSL-Action.sdf3#ConstValue_3459_3469" id="ConstValue_2804_2814" title="Defined at ../WebDSL-Action.sdf3 line 179, 185, 186, 187, 188">ConstValue</a>
  <a href="#PrefetchCondVal_3700_3715" id="PrefetchCondVal_2817_2832" title="Referenced at line 91">PrefetchCondVal</a>.<span class="cons_Constructor"><span id="PrefetchCondVar_2833_2848" title="Not referenced locally, nor via imports">PrefetchCondVar</span></span> = <a href="../WebDSL-UI.sdf3#VarId_14717_14722" id="VarId_2851_2856" title="Defined at ../WebDSL-UI.sdf3 line 521">VarId</a>
  <a href="#PrefetchCondVal_3700_3715" id="PrefetchCondVal_2859_2874" title="Referenced at line 91">PrefetchCondVal</a>.<span class="cons_Constructor"><a href="#RelativeFieldAccess_3478_3497" id="RelativeFieldAccess_2875_2894" title="Referenced at line 79">RelativeFieldAccess</a></span> = &lt;&lt;<a href="#OptSimpleSort_267_280" id="OptSimpleSort_2899_2912" title="Defined at line 12, 73, 74">OptSimpleSort</a>&gt; <span class="cons_String">.</span> &lt;<a href="../WebDSL-Lexical.sdf3#PropertyId_75_85" id="PropertyId_2917_2927" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 15">PropertyId</a>&gt;&gt; {<span class="keyword">left</span>}
  <a href="#PrefetchCondVal_3700_3715" id="PrefetchCondVal_2939_2954" title="Referenced at line 91">PrefetchCondVal</a>.<span class="cons_Constructor"><a href="#PrefetchMul_3573_3584" id="PrefetchMul_2955_2966" title="Referenced at line 85">PrefetchMul</a></span> = &lt;&lt;<a href="#PrefetchCondVal_202_217" id="PrefetchCondVal_2971_2986" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt; <span class="cons_String">*</span> &lt;<a href="#PrefetchCondVal_202_217" id="PrefetchCondVal_2991_3006" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt;&gt; {<span class="keyword">left</span>}
  <a href="#PrefetchCondVal_3700_3715" id="PrefetchCondVal_3018_3033" title="Referenced at line 91">PrefetchCondVal</a>.<span class="cons_Constructor"><a href="#PrefetchDiv_3605_3616" id="PrefetchDiv_3034_3045" title="Referenced at line 86">PrefetchDiv</a></span> = &lt;&lt;<a href="#PrefetchCondVal_202_217" id="PrefetchCondVal_3050_3065" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt; <span class="cons_String">/</span> &lt;<a href="#PrefetchCondVal_202_217" id="PrefetchCondVal_3070_3085" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt;&gt; {<span class="keyword">left</span>}
  <a href="#PrefetchCondVal_3700_3715" id="PrefetchCondVal_3097_3112" title="Referenced at line 91">PrefetchCondVal</a>.<span class="cons_Constructor"><a href="#PrefetchMod_3637_3648" id="PrefetchMod_3113_3124" title="Referenced at line 87">PrefetchMod</a></span> = &lt;&lt;<a href="#PrefetchCondVal_202_217" id="PrefetchCondVal_3129_3144" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt; <span class="cons_String">%</span> &lt;<a href="#PrefetchCondVal_202_217" id="PrefetchCondVal_3149_3164" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt;&gt; {<span class="keyword">left</span>}
  <a href="#PrefetchCondVal_3700_3715" id="PrefetchCondVal_3176_3191" title="Referenced at line 91">PrefetchCondVal</a>.<span class="cons_Constructor"><a href="#PrefetchAdd_3684_3695" id="PrefetchAdd_3192_3203" title="Referenced at line 90">PrefetchAdd</a></span> = &lt;&lt;<a href="#PrefetchCondVal_202_217" id="PrefetchCondVal_3208_3223" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt; <span class="cons_String">+</span> &lt;<a href="#PrefetchCondVal_202_217" id="PrefetchCondVal_3228_3243" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt;&gt; {<span class="keyword">left</span>}
  <a href="#PrefetchCondVal_3700_3715" id="PrefetchCondVal_3255_3270" title="Referenced at line 91">PrefetchCondVal</a>.<span class="cons_Constructor"><a href="#PrefetchSub_3716_3727" id="PrefetchSub_3271_3282" title="Referenced at line 91">PrefetchSub</a></span> = &lt;&lt;<a href="#PrefetchCondVal_202_217" id="PrefetchCondVal_3287_3302" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt; <span class="cons_String">-</span> &lt;<a href="#PrefetchCondVal_202_217" id="PrefetchCondVal_3307_3322" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt;&gt; {<span class="keyword">left</span>}

  <a href="#OptSimpleSort_2899_2912" id="OptSimpleSort_3335_3348" title="Referenced at line 66">OptSimpleSort</a>.<span class="cons_Constructor"><span id="OptSimpleSortNone_3349_3366" title="Not referenced locally, nor via imports">OptSimpleSortNone</span></span> = &lt;&gt;
  <a href="#OptSimpleSort_2899_2912" id="OptSimpleSort_3374_3387" title="Referenced at line 66">OptSimpleSort</a>.<span class="cons_Constructor"><span id="OptSimpleSortSome_3388_3405" title="Not referenced locally, nor via imports">OptSimpleSortSome</span></span> = <a href="../WebDSL-Core.sdf3#SimpleSortLex_553_566" id="SimpleSortLex_3408_3421" title="Defined at ../WebDSL-Core.sdf3 line 24">SimpleSortLex</a>

<span class="keyword">context-free priorities</span>

  {<span class="keyword">left</span> :
    <a href="#PrefetchCondVal_202_217" id="PrefetchCondVal_3462_3477" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>.<span class="cons_Constructor"><a href="#RelativeFieldAccess_2875_2894" id="RelativeFieldAccess_3478_3497" title="Defined at line 66">RelativeFieldAccess</a></span>
  } &gt;
  {
    <a href="#PrefetchCond_218_230" id="PrefetchCond_3512_3524" title="Defined at line 11, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchNot_2518_2529" id="PrefetchNot_3525_3536" title="Defined at line 57">PrefetchNot</a></span>
  } &gt;
  {<span class="keyword">left</span> :
    <a href="#PrefetchCondVal_202_217" id="PrefetchCondVal_3557_3572" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>.<span class="cons_Constructor"><a href="#PrefetchMul_2955_2966" id="PrefetchMul_3573_3584" title="Defined at line 67">PrefetchMul</a></span>
    <a href="#PrefetchCondVal_202_217" id="PrefetchCondVal_3589_3604" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>.<span class="cons_Constructor"><a href="#PrefetchDiv_3034_3045" id="PrefetchDiv_3605_3616" title="Defined at line 68">PrefetchDiv</a></span>
    <a href="#PrefetchCondVal_202_217" id="PrefetchCondVal_3621_3636" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>.<span class="cons_Constructor"><a href="#PrefetchMod_3113_3124" id="PrefetchMod_3637_3648" title="Defined at line 69">PrefetchMod</a></span>
  } &gt;
  {<span class="keyword">left</span>:
    <a href="#PrefetchCondVal_202_217" id="PrefetchCondVal_3668_3683" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>.<span class="cons_Constructor"><a href="#PrefetchAdd_3192_3203" id="PrefetchAdd_3684_3695" title="Defined at line 70">PrefetchAdd</a></span>
    <a href="#PrefetchCondVal_202_217" id="PrefetchCondVal_3700_3715" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>.<span class="cons_Constructor"><a href="#PrefetchSub_3271_3282" id="PrefetchSub_3716_3727" title="Defined at line 71">PrefetchSub</a></span>
  } &gt;
  {<span class="keyword">left</span> :
    <a href="#PrefetchCond_218_230" id="PrefetchCond_3748_3760" title="Defined at line 11, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchEq_1792_1802" id="PrefetchEq_3761_3771" title="Defined at line 49">PrefetchEq</a></span>
    <a href="#PrefetchCond_218_230" id="PrefetchCond_3776_3788" title="Defined at line 11, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchNotEq_1884_1897" id="PrefetchNotEq_3789_3802" title="Defined at line 50">PrefetchNotEq</a></span>
    <a href="#PrefetchCond_218_230" id="PrefetchCond_3807_3819" title="Defined at line 11, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchLargerThan_1976_1994" id="PrefetchLargerThan_3820_3838" title="Defined at line 51">PrefetchLargerThan</a></span>
    <a href="#PrefetchCond_218_230" id="PrefetchCond_3843_3855" title="Defined at line 11, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchLargerThanOrEqual_2068_2093" id="PrefetchLargerThanOrEqual_3856_3881" title="Defined at line 52">PrefetchLargerThanOrEqual</a></span>
    <a href="#PrefetchCond_218_230" id="PrefetchCond_3886_3898" title="Defined at line 11, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchSmallerThan_2161_2180" id="PrefetchSmallerThan_3899_3918" title="Defined at line 53">PrefetchSmallerThan</a></span>
    <a href="#PrefetchCond_218_230" id="PrefetchCond_3923_3935" title="Defined at line 11, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchSmallerThanOrEqual_2253_2279" id="PrefetchSmallerThanOrEqual_3936_3962" title="Defined at line 54">PrefetchSmallerThanOrEqual</a></span>
  } &gt;
  {<span class="keyword">left</span> : <a href="#PrefetchCond_218_230" id="PrefetchCond_3979_3991" title="Defined at line 11, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchAnd_2346_2357" id="PrefetchAnd_3992_4003" title="Defined at line 55">PrefetchAnd</a></span> } &gt;
  {<span class="keyword">left</span> : <a href="#PrefetchCond_218_230" id="PrefetchCond_4018_4030" title="Defined at line 11, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchOr_2432_2442" id="PrefetchOr_4031_4041" title="Defined at line 56">PrefetchOr</a></span> }

</code></pre></td></tr></tbody></table></div>