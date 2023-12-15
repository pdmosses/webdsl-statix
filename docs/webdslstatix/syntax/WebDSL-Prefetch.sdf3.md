---
title: WebDSL-Prefetch.sdf3
hide:
  - toc
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
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix.sdf3/#WebDSL-Prefetch_19_3" id="WebDSL-Prefetch_1_8" title="Referenced at ../webdsl-statix.sdf3 line 19">WebDSL-Prefetch</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3/#WebDSL-Action_1_8" id="WebDSL-Action_4_3" title="Defined at ../WebDSL-Action.sdf3 line 1">WebDSL-Action</a>
  <a href="../WebDSL-Core.sdf3/#WebDSL-Core_1_8" id="WebDSL-Core_5_3" title="Defined at ../WebDSL-Core.sdf3 line 1">WebDSL-Core</a>
  <a href="../WebDSL-Lexical.sdf3/#WebDSL-Lexical_1_8" id="WebDSL-Lexical_6_3" title="Defined at ../WebDSL-Lexical.sdf3 line 1">WebDSL-Lexical</a>
  <a href="../WebDSL-UI.sdf3/#WebDSL-UI_1_8" id="WebDSL-UI_7_3" title="Defined at ../WebDSL-UI.sdf3 line 1">WebDSL-UI</a>

<span class="keyword">context-free sorts</span>

  <a href="#PrefetchChildren_17_69" id="PrefetchChildren_11_3" title="Referenced at line 17, 20, 27">PrefetchChildren</a> <a href="#PrefetchNode_24_6" id="PrefetchNode_11_20" title="Referenced at line 24">PrefetchNode</a> <a href="#PrefetchTemplateArgsOpt_17_24" id="PrefetchTemplateArgsOpt_11_33" title="Referenced at line 17, 20, 29">PrefetchTemplateArgsOpt</a> <a href="#PrefetchNodeMod_29_61" id="PrefetchNodeMod_11_57" title="Referenced at line 29">PrefetchNodeMod</a> <a href="#PrefetchCondition_29_106" id="PrefetchCondition_11_73" title="Referenced at line 29">PrefetchCondition</a> <a href="#PrefetchCondVal_49_47" id="PrefetchCondVal_11_91" title="Referenced at line 49, 50, 51, 52, 53, 54, 58, 67, 68, 69, 70, 71, 79, 85, 86, 87, 90, 91">PrefetchCondVal</a> <a href="#PrefetchCond_45_48" id="PrefetchCond_11_107" title="Referenced at line 45, 47, 55, 56, 57, 59, 82, 94, 95, 96, 97, 98, 99, 101, 102">PrefetchCond</a> <a href="#PrefetchWhereOpt_17_50" id="PrefetchWhereOpt_11_120" title="Referenced at line 17, 20, 29">PrefetchWhereOpt</a> <a href="#PrefetchWhereMod_47_44" id="PrefetchWhereMod_11_137" title="Referenced at line 47">PrefetchWhereMod</a>
  <a href="#OptSimpleSort_66_43" id="OptSimpleSort_12_3" title="Referenced at line 66">OptSimpleSort</a> <a href="#PrefetchChildrenOpt_29_145" id="PrefetchChildrenOpt_12_17" title="Referenced at line 29">PrefetchChildrenOpt</a> <a href="#OptPrefetchOwnerCast_29_33" id="OptPrefetchOwnerCast_12_37" title="Referenced at line 29">OptPrefetchOwnerCast</a> <a href="#SortOrThis_37_51" id="SortOrThis_12_58" title="Referenced at line 37">SortOrThis</a> <a href="#TemplateArgOrThis_36_65" id="TemplateArgOrThis_12_69" title="Referenced at line 36">TemplateArgOrThis</a>

<span class="keyword">context-free syntax</span>

  <span id="TemplateElement_16_3" title="Not referenced">TemplateElement</span>.<span class="cons_Constructor"><span id="PrefetchFor_16_19" title="Not referenced">PrefetchFor</span></span> = &lt;
    <span class="cons_String">prefetch-for</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_17_19" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; &lt;<a href="#PrefetchTemplateArgsOpt_11_33" id="PrefetchTemplateArgsOpt_17_24" title="Defined at line 11, 35, 36">PrefetchTemplateArgsOpt</a>&gt; &lt;<a href="#PrefetchWhereOpt_11_120" id="PrefetchWhereOpt_17_50" title="Defined at line 11, 46, 47">PrefetchWhereOpt</a>&gt; &lt;<a href="#PrefetchChildren_11_3" id="PrefetchChildren_17_69" title="Defined at line 11, 23">PrefetchChildren</a>&gt;
  &gt;
  <span id="Statement_19_3" title="Not referenced">Statement</span>.<span class="cons_Constructor"><span id="PrefetchForStmt_19_13" title="Not referenced">PrefetchForStmt</span></span> = &lt;
    <span class="cons_String">prefetch-for</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_20_19" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; &lt;<a href="#PrefetchTemplateArgsOpt_11_33" id="PrefetchTemplateArgsOpt_20_24" title="Defined at line 11, 35, 36">PrefetchTemplateArgsOpt</a>&gt; &lt;<a href="#PrefetchWhereOpt_11_120" id="PrefetchWhereOpt_20_50" title="Defined at line 11, 46, 47">PrefetchWhereOpt</a>&gt; &lt;<a href="#PrefetchChildren_11_3" id="PrefetchChildren_20_69" title="Defined at line 11, 23">PrefetchChildren</a>&gt;
  &gt;

  <a href="#PrefetchChildren_17_69" id="PrefetchChildren_23_3" title="Referenced at line 17, 20, 27">PrefetchChildren</a>.<span class="cons_Constructor"><span id="PrefetchChildren_23_20" title="Not referenced">PrefetchChildren</span></span> = &lt;<span class="cons_String">{</span>
    &lt;<a href="#PrefetchNode_11_20" id="PrefetchNode_24_6" title="Defined at line 11, 29">PrefetchNode</a>*&gt;
  <span class="cons_String">}</span>&gt;
  <a href="#PrefetchChildrenOpt_29_145" id="PrefetchChildrenOpt_26_3" title="Referenced at line 29">PrefetchChildrenOpt</a>.<span class="cons_Constructor"><span id="PrefetchChildrenOptNone_26_23" title="Not referenced">PrefetchChildrenOptNone</span></span> = &lt;&gt;
  <a href="#PrefetchChildrenOpt_29_145" id="PrefetchChildrenOpt_27_3" title="Referenced at line 29">PrefetchChildrenOpt</a> = <a href="#PrefetchChildren_11_3" id="PrefetchChildren_27_25" title="Defined at line 11, 23">PrefetchChildren</a>

  <a href="#PrefetchNode_24_6" id="PrefetchNode_29_3" title="Referenced at line 24">PrefetchNode</a>.<span class="cons_Constructor"><span id="PrefetchNode_29_16" title="Not referenced">PrefetchNode</span></span> = &lt;&lt;<a href="#OptPrefetchOwnerCast_12_37" id="OptPrefetchOwnerCast_29_33" title="Defined at line 12, 30, 31">OptPrefetchOwnerCast</a>&gt; &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_29_56" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; &lt;<a href="#PrefetchNodeMod_11_57" id="PrefetchNodeMod_29_61" title="Defined at line 11, 32, 33">PrefetchNodeMod</a>*&gt; &lt;<a href="#PrefetchTemplateArgsOpt_11_33" id="PrefetchTemplateArgsOpt_29_80" title="Defined at line 11, 35, 36">PrefetchTemplateArgsOpt</a>&gt; &lt;<a href="#PrefetchCondition_11_73" id="PrefetchCondition_29_106" title="Defined at line 11, 44, 45">PrefetchCondition</a>&gt; &lt;<a href="#PrefetchWhereOpt_11_120" id="PrefetchWhereOpt_29_126" title="Defined at line 11, 46, 47">PrefetchWhereOpt</a>&gt; &lt;<a href="#PrefetchChildrenOpt_12_17" id="PrefetchChildrenOpt_29_145" title="Defined at line 12, 26, 27">PrefetchChildrenOpt</a>&gt;&gt;
  <a href="#OptPrefetchOwnerCast_29_33" id="OptPrefetchOwnerCast_30_3" title="Referenced at line 29">OptPrefetchOwnerCast</a>.<span class="cons_Constructor"><span id="OptPrefetchOwnerCastNone_30_24" title="Not referenced">OptPrefetchOwnerCastNone</span></span> = &lt;&gt;
  <a href="#OptPrefetchOwnerCast_29_33" id="OptPrefetchOwnerCast_31_3" title="Referenced at line 29">OptPrefetchOwnerCast</a>.<span class="cons_Constructor"><span id="PrefetchOwnerCast_31_24" title="Not referenced">PrefetchOwnerCast</span></span> = &lt;&lt;<a href="../WebDSL-Core.sdf3/#SimpleSortLex_24_3" id="SimpleSortLex_31_46" title="Defined at ../WebDSL-Core.sdf3 line 24">SimpleSortLex</a>&gt; <span class="cons_String">.</span>&gt;
  <a href="#PrefetchNodeMod_29_61" id="PrefetchNodeMod_32_3" title="Referenced at line 29">PrefetchNodeMod</a>.<span class="cons_Constructor"><span id="NoEmptyBatch_32_19" title="Not referenced">NoEmptyBatch</span></span> = &lt;<span class="cons_String">no-empty-batch</span>&gt;
  <a href="#PrefetchNodeMod_29_61" id="PrefetchNodeMod_33_3" title="Referenced at line 29">PrefetchNodeMod</a>.<span class="cons_Constructor"><span id="FetchEarly_33_19" title="Not referenced">FetchEarly</span></span> = &lt;<span class="cons_String">fetch-early</span>&gt;

  <a href="#PrefetchTemplateArgsOpt_17_24" id="PrefetchTemplateArgsOpt_35_3" title="Referenced at line 17, 20, 29">PrefetchTemplateArgsOpt</a>.<span class="cons_Constructor"><span id="PrefetchTemplateArgsOptNone_35_27" title="Not referenced">PrefetchTemplateArgsOptNone</span></span> = &lt;&gt;
  <a href="#PrefetchTemplateArgsOpt_17_24" id="PrefetchTemplateArgsOpt_36_3" title="Referenced at line 17, 20, 29">PrefetchTemplateArgsOpt</a>.<span class="cons_Constructor"><span id="PrefetchTemplateArgs_36_27" title="Not referenced">PrefetchTemplateArgs</span></span> = &lt;<span class="cons_String">templates</span> <span class="cons_String">[</span> &lt;{<a href="#TemplateArgOrThis_12_69" id="TemplateArgOrThis_36_65" title="Defined at line 12, 37">TemplateArgOrThis</a> <span class="cons_Lit">","</span>}+&gt; <span class="cons_String">]</span>&gt;
  <a href="#TemplateArgOrThis_36_65" id="TemplateArgOrThis_37_3" title="Referenced at line 36">TemplateArgOrThis</a>.<span class="cons_Constructor"><span id="TemplateArgOrThis_37_21" title="Not referenced">TemplateArgOrThis</span></span> = &lt;&lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_37_43" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">(</span> &lt;{<a href="#SortOrThis_12_58" id="SortOrThis_37_51" title="Defined at line 12, 38, 39, 40">SortOrThis</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;
  <a href="#SortOrThis_37_51" id="SortOrThis_38_3" title="Referenced at line 37">SortOrThis</a>.<span class="cons_Constructor"><span id="Sort_38_14" title="Not referenced">Sort</span></span> = <a href="../WebDSL-Core.sdf3/#Sort_10_95" id="Sort_38_21" title="Defined at ../WebDSL-Core.sdf3 line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>
  <a href="#SortOrThis_37_51" id="SortOrThis_39_3" title="Referenced at line 37">SortOrThis</a>.<span class="cons_Constructor"><span id="TArgThis_39_14" title="Not referenced">TArgThis</span></span> = &lt;<span class="cons_String">this</span>&gt;
  <a href="#SortOrThis_37_51" id="SortOrThis_40_3" title="Referenced at line 37">SortOrThis</a>.<span class="cons_Constructor"><span id="PrefetchThisCast_40_14" title="Not referenced">PrefetchThisCast</span></span> = &lt;<span class="cons_String">this</span> <span class="cons_String">as</span> &lt;<a href="../WebDSL-Core.sdf3/#Sort_10_95" id="Sort_40_43" title="Defined at ../WebDSL-Core.sdf3 line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>&gt;&gt;

<span class="keyword">context-free syntax</span>

  <a href="#PrefetchCondition_29_106" id="PrefetchCondition_44_3" title="Referenced at line 29">PrefetchCondition</a>.<span class="cons_Constructor"><span id="PrefetchConditionNone_44_21" title="Not referenced">PrefetchConditionNone</span></span> = &lt;&gt;
  <a href="#PrefetchCondition_29_106" id="PrefetchCondition_45_3" title="Referenced at line 29">PrefetchCondition</a>.<span class="cons_Constructor"><span id="PrefetchCondition_45_21" title="Not referenced">PrefetchCondition</span></span> = &lt;<span class="cons_String">if</span> <span class="cons_String">(</span> &lt;<a href="#PrefetchCond_11_107" id="PrefetchCond_45_48" title="Defined at line 11, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59">PrefetchCond</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#PrefetchWhereOpt_17_50" id="PrefetchWhereOpt_46_3" title="Referenced at line 17, 20, 29">PrefetchWhereOpt</a>.<span class="cons_Constructor"><span id="PrefetchWhereOptNone_46_20" title="Not referenced">PrefetchWhereOptNone</span></span> = &lt;&gt;
  <a href="#PrefetchWhereOpt_17_50" id="PrefetchWhereOpt_47_3" title="Referenced at line 17, 20, 29">PrefetchWhereOpt</a>.<span class="cons_Constructor"><span id="PrefetchWhere_47_20" title="Not referenced">PrefetchWhere</span></span> = &lt;<span class="cons_String">where</span> &lt;<a href="#PrefetchWhereMod_11_137" id="PrefetchWhereMod_47_44" title="Defined at line 11, 48">PrefetchWhereMod</a>*&gt; <span class="cons_String">(</span> &lt;<a href="#PrefetchCond_11_107" id="PrefetchCond_47_66" title="Defined at line 11, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59">PrefetchCond</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#PrefetchWhereMod_47_44" id="PrefetchWhereMod_48_3" title="Referenced at line 47">PrefetchWhereMod</a>.<span class="cons_Constructor"><span id="Hint_48_20" title="Not referenced">Hint</span></span> = &lt;<span class="cons_String">hint</span>&gt;
  <a href="#PrefetchCond_45_48" id="PrefetchCond_49_3" title="Referenced at line 45, 47, 55, 56, 57, 59, 82, 94, 95, 96, 97, 98, 99, 101, 102">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchEq_94_18" id="PrefetchEq_49_16" title="Referenced at line 94">PrefetchEq</a></span>                 = &lt;&lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_49_47" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt; <span class="cons_String">==</span> &lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_49_68" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt;&gt; {<span class="keyword">left</span>}
  <a href="#PrefetchCond_45_48" id="PrefetchCond_50_3" title="Referenced at line 45, 47, 55, 56, 57, 59, 82, 94, 95, 96, 97, 98, 99, 101, 102">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchNotEq_95_18" id="PrefetchNotEq_50_16" title="Referenced at line 95">PrefetchNotEq</a></span>              = &lt;&lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_50_47" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt; <span class="cons_String">!=</span> &lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_50_68" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt;&gt; {<span class="keyword">left</span>}
  <a href="#PrefetchCond_45_48" id="PrefetchCond_51_3" title="Referenced at line 45, 47, 55, 56, 57, 59, 82, 94, 95, 96, 97, 98, 99, 101, 102">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchLargerThan_96_18" id="PrefetchLargerThan_51_16" title="Referenced at line 96">PrefetchLargerThan</a></span>         = &lt;&lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_51_47" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt; \&gt; &lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_51_68" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt;&gt; {<span class="keyword">left</span>}
  <a href="#PrefetchCond_45_48" id="PrefetchCond_52_3" title="Referenced at line 45, 47, 55, 56, 57, 59, 82, 94, 95, 96, 97, 98, 99, 101, 102">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchLargerThanOrEqual_97_18" id="PrefetchLargerThanOrEqual_52_16" title="Referenced at line 97">PrefetchLargerThanOrEqual</a></span>  = &lt;&lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_52_47" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt; \&gt;<span class="cons_String">=</span> &lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_52_69" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt;&gt; {<span class="keyword">left</span>}
  <a href="#PrefetchCond_45_48" id="PrefetchCond_53_3" title="Referenced at line 45, 47, 55, 56, 57, 59, 82, 94, 95, 96, 97, 98, 99, 101, 102">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchSmallerThan_98_18" id="PrefetchSmallerThan_53_16" title="Referenced at line 98">PrefetchSmallerThan</a></span>        = &lt;&lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_53_47" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt; \&lt; &lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_53_68" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt;&gt; {<span class="keyword">left</span>}
  <a href="#PrefetchCond_45_48" id="PrefetchCond_54_3" title="Referenced at line 45, 47, 55, 56, 57, 59, 82, 94, 95, 96, 97, 98, 99, 101, 102">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchSmallerThanOrEqual_99_18" id="PrefetchSmallerThanOrEqual_54_16" title="Referenced at line 99">PrefetchSmallerThanOrEqual</a></span> = &lt;&lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_54_47" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt; \&lt;<span class="cons_String">=</span> &lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_54_69" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt;&gt; {<span class="keyword">left</span>}
  <a href="#PrefetchCond_45_48" id="PrefetchCond_55_3" title="Referenced at line 45, 47, 55, 56, 57, 59, 82, 94, 95, 96, 97, 98, 99, 101, 102">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchAnd_101_24" id="PrefetchAnd_55_16" title="Referenced at line 101">PrefetchAnd</a></span>                = &lt;&lt;<a href="#PrefetchCond_11_107" id="PrefetchCond_55_47" title="Defined at line 11, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59">PrefetchCond</a>&gt; <span class="cons_String">&amp;&amp;</span> &lt;<a href="#PrefetchCond_11_107" id="PrefetchCond_55_65" title="Defined at line 11, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59">PrefetchCond</a>&gt;&gt; {<span class="keyword">left</span>}
  <a href="#PrefetchCond_45_48" id="PrefetchCond_56_3" title="Referenced at line 45, 47, 55, 56, 57, 59, 82, 94, 95, 96, 97, 98, 99, 101, 102">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchOr_102_24" id="PrefetchOr_56_16" title="Referenced at line 102">PrefetchOr</a></span>                 = &lt;&lt;<a href="#PrefetchCond_11_107" id="PrefetchCond_56_47" title="Defined at line 11, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59">PrefetchCond</a>&gt; <span class="cons_String">||</span> &lt;<a href="#PrefetchCond_11_107" id="PrefetchCond_56_65" title="Defined at line 11, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59">PrefetchCond</a>&gt;&gt; {<span class="keyword">left</span>}
  <a href="#PrefetchCond_45_48" id="PrefetchCond_57_3" title="Referenced at line 45, 47, 55, 56, 57, 59, 82, 94, 95, 96, 97, 98, 99, 101, 102">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchNot_82_18" id="PrefetchNot_57_16" title="Referenced at line 82">PrefetchNot</a></span>                = &lt;<span class="cons_String">!</span> &lt;<a href="#PrefetchCond_11_107" id="PrefetchCond_57_49" title="Defined at line 11, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59">PrefetchCond</a>&gt;&gt;
  <a href="#PrefetchCond_45_48" id="PrefetchCond_58_3" title="Referenced at line 45, 47, 55, 56, 57, 59, 82, 94, 95, 96, 97, 98, 99, 101, 102">PrefetchCond</a> = <a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_58_18" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>
  <a href="#PrefetchCond_45_48" id="PrefetchCond_59_3" title="Referenced at line 45, 47, 55, 56, 57, 59, 82, 94, 95, 96, 97, 98, 99, 101, 102">PrefetchCond</a> = &lt;<span class="cons_String">(</span> &lt;<a href="#PrefetchCond_11_107" id="PrefetchCond_59_22" title="Defined at line 11, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59">PrefetchCond</a>&gt; <span class="cons_String">)</span>&gt; {<span class="keyword">bracket</span>}

  <a href="#PrefetchCondVal_49_47" id="PrefetchCondVal_61_3" title="Referenced at line 49, 50, 51, 52, 53, 54, 58, 67, 68, 69, 70, 71, 79, 85, 86, 87, 90, 91">PrefetchCondVal</a>.<span class="cons_Constructor"><span id="PrefetchTrue_61_19" title="Not referenced">PrefetchTrue</span></span> = &lt;<span class="cons_String">true</span>&gt;
  <a href="#PrefetchCondVal_49_47" id="PrefetchCondVal_62_3" title="Referenced at line 49, 50, 51, 52, 53, 54, 58, 67, 68, 69, 70, 71, 79, 85, 86, 87, 90, 91">PrefetchCondVal</a>.<span class="cons_Constructor"><span id="PrefetchFalse_62_19" title="Not referenced">PrefetchFalse</span></span> = &lt;<span class="cons_String">false</span>&gt;
  <a href="#PrefetchCondVal_49_47" id="PrefetchCondVal_63_3" title="Referenced at line 49, 50, 51, 52, 53, 54, 58, 67, 68, 69, 70, 71, 79, 85, 86, 87, 90, 91">PrefetchCondVal</a>.<span class="cons_Constructor"><span id="PrefetchNull_63_19" title="Not referenced">PrefetchNull</span></span> = &lt;<span class="cons_String">null</span>&gt;
  <a href="#PrefetchCondVal_49_47" id="PrefetchCondVal_64_3" title="Referenced at line 49, 50, 51, 52, 53, 54, 58, 67, 68, 69, 70, 71, 79, 85, 86, 87, 90, 91">PrefetchCondVal</a>.<span class="cons_Constructor"><span id="PrefetchConst_64_19" title="Not referenced">PrefetchConst</span></span> = <a href="../WebDSL-Action.sdf3/#ConstValue_179_3" id="ConstValue_64_35" title="Defined at ../WebDSL-Action.sdf3 line 179, 185, 186, 187, 188">ConstValue</a>
  <a href="#PrefetchCondVal_49_47" id="PrefetchCondVal_65_3" title="Referenced at line 49, 50, 51, 52, 53, 54, 58, 67, 68, 69, 70, 71, 79, 85, 86, 87, 90, 91">PrefetchCondVal</a>.<span class="cons_Constructor"><span id="PrefetchCondVar_65_19" title="Not referenced">PrefetchCondVar</span></span> = <a href="../WebDSL-UI.sdf3/#VarId_521_3" id="VarId_65_37" title="Defined at ../WebDSL-UI.sdf3 line 521">VarId</a>
  <a href="#PrefetchCondVal_49_47" id="PrefetchCondVal_66_3" title="Referenced at line 49, 50, 51, 52, 53, 54, 58, 67, 68, 69, 70, 71, 79, 85, 86, 87, 90, 91">PrefetchCondVal</a>.<span class="cons_Constructor"><a href="#RelativeFieldAccess_79_21" id="RelativeFieldAccess_66_19" title="Referenced at line 79">RelativeFieldAccess</a></span> = &lt;&lt;<a href="#OptSimpleSort_12_3" id="OptSimpleSort_66_43" title="Defined at line 12, 73, 74">OptSimpleSort</a>&gt; <span class="cons_String">.</span> &lt;<a href="../WebDSL-Lexical.sdf3/#PropertyId_5_38" id="PropertyId_66_61" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 15">PropertyId</a>&gt;&gt; {<span class="keyword">left</span>}
  <a href="#PrefetchCondVal_49_47" id="PrefetchCondVal_67_3" title="Referenced at line 49, 50, 51, 52, 53, 54, 58, 67, 68, 69, 70, 71, 79, 85, 86, 87, 90, 91">PrefetchCondVal</a>.<span class="cons_Constructor"><a href="#PrefetchMul_85_21" id="PrefetchMul_67_19" title="Referenced at line 85">PrefetchMul</a></span> = &lt;&lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_67_35" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt; <span class="cons_String">*</span> &lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_67_55" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt;&gt; {<span class="keyword">left</span>}
  <a href="#PrefetchCondVal_49_47" id="PrefetchCondVal_68_3" title="Referenced at line 49, 50, 51, 52, 53, 54, 58, 67, 68, 69, 70, 71, 79, 85, 86, 87, 90, 91">PrefetchCondVal</a>.<span class="cons_Constructor"><a href="#PrefetchDiv_86_21" id="PrefetchDiv_68_19" title="Referenced at line 86">PrefetchDiv</a></span> = &lt;&lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_68_35" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt; <span class="cons_String">/</span> &lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_68_55" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt;&gt; {<span class="keyword">left</span>}
  <a href="#PrefetchCondVal_49_47" id="PrefetchCondVal_69_3" title="Referenced at line 49, 50, 51, 52, 53, 54, 58, 67, 68, 69, 70, 71, 79, 85, 86, 87, 90, 91">PrefetchCondVal</a>.<span class="cons_Constructor"><a href="#PrefetchMod_87_21" id="PrefetchMod_69_19" title="Referenced at line 87">PrefetchMod</a></span> = &lt;&lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_69_35" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt; <span class="cons_String">%</span> &lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_69_55" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt;&gt; {<span class="keyword">left</span>}
  <a href="#PrefetchCondVal_49_47" id="PrefetchCondVal_70_3" title="Referenced at line 49, 50, 51, 52, 53, 54, 58, 67, 68, 69, 70, 71, 79, 85, 86, 87, 90, 91">PrefetchCondVal</a>.<span class="cons_Constructor"><a href="#PrefetchAdd_90_21" id="PrefetchAdd_70_19" title="Referenced at line 90">PrefetchAdd</a></span> = &lt;&lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_70_35" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt; <span class="cons_String">+</span> &lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_70_55" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt;&gt; {<span class="keyword">left</span>}
  <a href="#PrefetchCondVal_49_47" id="PrefetchCondVal_71_3" title="Referenced at line 49, 50, 51, 52, 53, 54, 58, 67, 68, 69, 70, 71, 79, 85, 86, 87, 90, 91">PrefetchCondVal</a>.<span class="cons_Constructor"><a href="#PrefetchSub_91_21" id="PrefetchSub_71_19" title="Referenced at line 91">PrefetchSub</a></span> = &lt;&lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_71_35" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt; <span class="cons_String">-</span> &lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_71_55" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>&gt;&gt; {<span class="keyword">left</span>}

  <a href="#OptSimpleSort_66_43" id="OptSimpleSort_73_3" title="Referenced at line 66">OptSimpleSort</a>.<span class="cons_Constructor"><span id="OptSimpleSortNone_73_17" title="Not referenced">OptSimpleSortNone</span></span> = &lt;&gt;
  <a href="#OptSimpleSort_66_43" id="OptSimpleSort_74_3" title="Referenced at line 66">OptSimpleSort</a>.<span class="cons_Constructor"><span id="OptSimpleSortSome_74_17" title="Not referenced">OptSimpleSortSome</span></span> = <a href="../WebDSL-Core.sdf3/#SimpleSortLex_24_3" id="SimpleSortLex_74_37" title="Defined at ../WebDSL-Core.sdf3 line 24">SimpleSortLex</a>

<span class="keyword">context-free priorities</span>

  {<span class="keyword">left</span> :
    <a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_79_5" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>.<span class="cons_Constructor"><a href="#RelativeFieldAccess_66_19" id="RelativeFieldAccess_79_21" title="Defined at line 66">RelativeFieldAccess</a></span>
  } &gt;
  {
    <a href="#PrefetchCond_11_107" id="PrefetchCond_82_5" title="Defined at line 11, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchNot_57_16" id="PrefetchNot_82_18" title="Defined at line 57">PrefetchNot</a></span>
  } &gt;
  {<span class="keyword">left</span> :
    <a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_85_5" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>.<span class="cons_Constructor"><a href="#PrefetchMul_67_19" id="PrefetchMul_85_21" title="Defined at line 67">PrefetchMul</a></span>
    <a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_86_5" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>.<span class="cons_Constructor"><a href="#PrefetchDiv_68_19" id="PrefetchDiv_86_21" title="Defined at line 68">PrefetchDiv</a></span>
    <a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_87_5" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>.<span class="cons_Constructor"><a href="#PrefetchMod_69_19" id="PrefetchMod_87_21" title="Defined at line 69">PrefetchMod</a></span>
  } &gt;
  {<span class="keyword">left</span>:
    <a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_90_5" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>.<span class="cons_Constructor"><a href="#PrefetchAdd_70_19" id="PrefetchAdd_90_21" title="Defined at line 70">PrefetchAdd</a></span>
    <a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_91_5" title="Defined at line 11, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">PrefetchCondVal</a>.<span class="cons_Constructor"><a href="#PrefetchSub_71_19" id="PrefetchSub_91_21" title="Defined at line 71">PrefetchSub</a></span>
  } &gt;
  {<span class="keyword">left</span> :
    <a href="#PrefetchCond_11_107" id="PrefetchCond_94_5" title="Defined at line 11, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchEq_49_16" id="PrefetchEq_94_18" title="Defined at line 49">PrefetchEq</a></span>
    <a href="#PrefetchCond_11_107" id="PrefetchCond_95_5" title="Defined at line 11, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchNotEq_50_16" id="PrefetchNotEq_95_18" title="Defined at line 50">PrefetchNotEq</a></span>
    <a href="#PrefetchCond_11_107" id="PrefetchCond_96_5" title="Defined at line 11, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchLargerThan_51_16" id="PrefetchLargerThan_96_18" title="Defined at line 51">PrefetchLargerThan</a></span>
    <a href="#PrefetchCond_11_107" id="PrefetchCond_97_5" title="Defined at line 11, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchLargerThanOrEqual_52_16" id="PrefetchLargerThanOrEqual_97_18" title="Defined at line 52">PrefetchLargerThanOrEqual</a></span>
    <a href="#PrefetchCond_11_107" id="PrefetchCond_98_5" title="Defined at line 11, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchSmallerThan_53_16" id="PrefetchSmallerThan_98_18" title="Defined at line 53">PrefetchSmallerThan</a></span>
    <a href="#PrefetchCond_11_107" id="PrefetchCond_99_5" title="Defined at line 11, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchSmallerThanOrEqual_54_16" id="PrefetchSmallerThanOrEqual_99_18" title="Defined at line 54">PrefetchSmallerThanOrEqual</a></span>
  } &gt;
  {<span class="keyword">left</span> : <a href="#PrefetchCond_11_107" id="PrefetchCond_101_11" title="Defined at line 11, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchAnd_55_16" id="PrefetchAnd_101_24" title="Defined at line 55">PrefetchAnd</a></span> } &gt;
  {<span class="keyword">left</span> : <a href="#PrefetchCond_11_107" id="PrefetchCond_102_11" title="Defined at line 11, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchOr_56_16" id="PrefetchOr_102_24" title="Defined at line 56">PrefetchOr</a></span> }

</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
