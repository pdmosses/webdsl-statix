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
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix.sdf3/#WebDSL-Prefetch_19_3" id="WebDSL-Prefetch_1_8" title="a definition with a single reference">WebDSL-Prefetch</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3/#WebDSL-Action_1_8" id="WebDSL-Action_4_3" title="a reference to a single-file definition">WebDSL-Action</a>
  <a href="../WebDSL-Core.sdf3/#WebDSL-Core_1_8" id="WebDSL-Core_5_3" title="a reference to a single-file definition">WebDSL-Core</a>
  <a href="../WebDSL-Lexical.sdf3/#WebDSL-Lexical_1_8" id="WebDSL-Lexical_6_3" title="a reference to a single-file definition">WebDSL-Lexical</a>
  <a href="../WebDSL-UI.sdf3/#WebDSL-UI_1_8" id="WebDSL-UI_7_3" title="a reference to a single-file definition">WebDSL-UI</a>

<span class="keyword">context-free sorts</span>

  <button class="modal-open" id="PrefetchChildren_11_3" title="a definition with multiple references" data-urls="#PrefetchChildren line 17_69, 20_69, 27_25">PrefetchChildren</button> <a href="#PrefetchNode_24_6" id="PrefetchNode_11_20" title="a definition with a single reference">PrefetchNode</a> <button class="modal-open" id="PrefetchTemplateArgsOpt_11_33" title="a definition with multiple references" data-urls="#PrefetchTemplateArgsOpt line 17_24, 20_24, 29_80">PrefetchTemplateArgsOpt</button> <a href="#PrefetchNodeMod_29_61" id="PrefetchNodeMod_11_57" title="a definition with a single reference">PrefetchNodeMod</a> <a href="#PrefetchCondition_29_106" id="PrefetchCondition_11_73" title="a definition with a single reference">PrefetchCondition</a> <button class="modal-open" id="PrefetchCondVal_11_91" title="a definition with multiple references" data-urls="#PrefetchCondVal line 49_47, 49_68, 50_47, 50_68, 51_47, 51_68, 52_47, 52_69, 53_47, 53_68, 54_47, 54_69, 58_18, 67_35, 67_55, 68_35, 68_55, 69_35, 69_55, 70_35, 70_55, 71_35, 71_55, 79_5, 85_5, 86_5, 87_5, 90_5, 91_5">PrefetchCondVal</button> <button class="modal-open" id="PrefetchCond_11_107" title="a definition with multiple references" data-urls="#PrefetchCond line 45_48, 47_66, 55_47, 55_65, 56_47, 56_65, 57_49, 59_22, 82_5, 94_5, 95_5, 96_5, 97_5, 98_5, 99_5, 101_11, 102_11">PrefetchCond</button> <button class="modal-open" id="PrefetchWhereOpt_11_120" title="a definition with multiple references" data-urls="#PrefetchWhereOpt line 17_50, 20_50, 29_126">PrefetchWhereOpt</button> <a href="#PrefetchWhereMod_47_44" id="PrefetchWhereMod_11_137" title="a definition with a single reference">PrefetchWhereMod</a>
  <a href="#OptSimpleSort_66_43" id="OptSimpleSort_12_3" title="a definition with a single reference">OptSimpleSort</a> <a href="#PrefetchChildrenOpt_29_145" id="PrefetchChildrenOpt_12_17" title="a definition with a single reference">PrefetchChildrenOpt</a> <a href="#OptPrefetchOwnerCast_29_33" id="OptPrefetchOwnerCast_12_37" title="a definition with a single reference">OptPrefetchOwnerCast</a> <a href="#SortOrThis_37_51" id="SortOrThis_12_58" title="a definition with a single reference">SortOrThis</a> <a href="#TemplateArgOrThis_36_65" id="TemplateArgOrThis_12_69" title="a definition with a single reference">TemplateArgOrThis</a>

<span class="keyword">context-free syntax</span>

  <span id="TemplateElement_16_3" title="a definition with no references">TemplateElement</span>.<span class="cons_Constructor"><span id="PrefetchFor_16_19" title="a definition with no references">PrefetchFor</span></span> = &lt;
    <span class="cons_String">prefetch-for</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_17_19" title="a reference to a single-file definition">Id</a>&gt; &lt;<a href="#PrefetchTemplateArgsOpt_11_33" id="PrefetchTemplateArgsOpt_17_24" title="a reference to a single-file definition">PrefetchTemplateArgsOpt</a>&gt; &lt;<a href="#PrefetchWhereOpt_11_120" id="PrefetchWhereOpt_17_50" title="a reference to a single-file definition">PrefetchWhereOpt</a>&gt; &lt;<a href="#PrefetchChildren_11_3" id="PrefetchChildren_17_69" title="a reference to a single-file definition">PrefetchChildren</a>&gt;
  &gt;
  <span id="Statement_19_3" title="a definition with no references">Statement</span>.<span class="cons_Constructor"><span id="PrefetchForStmt_19_13" title="a definition with no references">PrefetchForStmt</span></span> = &lt;
    <span class="cons_String">prefetch-for</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_20_19" title="a reference to a single-file definition">Id</a>&gt; &lt;<a href="#PrefetchTemplateArgsOpt_11_33" id="PrefetchTemplateArgsOpt_20_24" title="a reference to a single-file definition">PrefetchTemplateArgsOpt</a>&gt; &lt;<a href="#PrefetchWhereOpt_11_120" id="PrefetchWhereOpt_20_50" title="a reference to a single-file definition">PrefetchWhereOpt</a>&gt; &lt;<a href="#PrefetchChildren_11_3" id="PrefetchChildren_20_69" title="a reference to a single-file definition">PrefetchChildren</a>&gt;
  &gt;

  <button class="modal-open" id="PrefetchChildren_23_3" title="a definition with multiple references" data-urls="#PrefetchChildren line 17_69, 20_69, 27_25">PrefetchChildren</button>.<span class="cons_Constructor"><span id="PrefetchChildren_23_20" title="a definition with no references">PrefetchChildren</span></span> = &lt;<span class="cons_String">{</span>
    &lt;<a href="#PrefetchNode_11_20" id="PrefetchNode_24_6" title="a reference to a single-file definition">PrefetchNode</a>*&gt;
  <span class="cons_String">}</span>&gt;
  <a href="#PrefetchChildrenOpt_29_145" id="PrefetchChildrenOpt_26_3" title="a definition with a single reference">PrefetchChildrenOpt</a>.<span class="cons_Constructor"><span id="PrefetchChildrenOptNone_26_23" title="a definition with no references">PrefetchChildrenOptNone</span></span> = &lt;&gt;
  <a href="#PrefetchChildrenOpt_29_145" id="PrefetchChildrenOpt_27_3" title="a definition with a single reference">PrefetchChildrenOpt</a> = <a href="#PrefetchChildren_11_3" id="PrefetchChildren_27_25" title="a reference to a single-file definition">PrefetchChildren</a>

  <a href="#PrefetchNode_24_6" id="PrefetchNode_29_3" title="a definition with a single reference">PrefetchNode</a>.<span class="cons_Constructor"><span id="PrefetchNode_29_16" title="a definition with no references">PrefetchNode</span></span> = &lt;&lt;<a href="#OptPrefetchOwnerCast_12_37" id="OptPrefetchOwnerCast_29_33" title="a reference to a single-file definition">OptPrefetchOwnerCast</a>&gt; &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_29_56" title="a reference to a single-file definition">Id</a>&gt; &lt;<a href="#PrefetchNodeMod_11_57" id="PrefetchNodeMod_29_61" title="a reference to a single-file definition">PrefetchNodeMod</a>*&gt; &lt;<a href="#PrefetchTemplateArgsOpt_11_33" id="PrefetchTemplateArgsOpt_29_80" title="a reference to a single-file definition">PrefetchTemplateArgsOpt</a>&gt; &lt;<a href="#PrefetchCondition_11_73" id="PrefetchCondition_29_106" title="a reference to a single-file definition">PrefetchCondition</a>&gt; &lt;<a href="#PrefetchWhereOpt_11_120" id="PrefetchWhereOpt_29_126" title="a reference to a single-file definition">PrefetchWhereOpt</a>&gt; &lt;<a href="#PrefetchChildrenOpt_12_17" id="PrefetchChildrenOpt_29_145" title="a reference to a single-file definition">PrefetchChildrenOpt</a>&gt;&gt;
  <a href="#OptPrefetchOwnerCast_29_33" id="OptPrefetchOwnerCast_30_3" title="a definition with a single reference">OptPrefetchOwnerCast</a>.<span class="cons_Constructor"><span id="OptPrefetchOwnerCastNone_30_24" title="a definition with no references">OptPrefetchOwnerCastNone</span></span> = &lt;&gt;
  <a href="#OptPrefetchOwnerCast_29_33" id="OptPrefetchOwnerCast_31_3" title="a definition with a single reference">OptPrefetchOwnerCast</a>.<span class="cons_Constructor"><span id="PrefetchOwnerCast_31_24" title="a definition with no references">PrefetchOwnerCast</span></span> = &lt;&lt;<a href="../WebDSL-Core.sdf3/#SimpleSortLex_24_3" id="SimpleSortLex_31_46" title="a reference to a single-file definition">SimpleSortLex</a>&gt; <span class="cons_String">.</span>&gt;
  <a href="#PrefetchNodeMod_29_61" id="PrefetchNodeMod_32_3" title="a definition with a single reference">PrefetchNodeMod</a>.<span class="cons_Constructor"><span id="NoEmptyBatch_32_19" title="a definition with no references">NoEmptyBatch</span></span> = &lt;<span class="cons_String">no-empty-batch</span>&gt;
  <a href="#PrefetchNodeMod_29_61" id="PrefetchNodeMod_33_3" title="a definition with a single reference">PrefetchNodeMod</a>.<span class="cons_Constructor"><span id="FetchEarly_33_19" title="a definition with no references">FetchEarly</span></span> = &lt;<span class="cons_String">fetch-early</span>&gt;

  <button class="modal-open" id="PrefetchTemplateArgsOpt_35_3" title="a definition with multiple references" data-urls="#PrefetchTemplateArgsOpt line 17_24, 20_24, 29_80">PrefetchTemplateArgsOpt</button>.<span class="cons_Constructor"><span id="PrefetchTemplateArgsOptNone_35_27" title="a definition with no references">PrefetchTemplateArgsOptNone</span></span> = &lt;&gt;
  <button class="modal-open" id="PrefetchTemplateArgsOpt_36_3" title="a definition with multiple references" data-urls="#PrefetchTemplateArgsOpt line 17_24, 20_24, 29_80">PrefetchTemplateArgsOpt</button>.<span class="cons_Constructor"><span id="PrefetchTemplateArgs_36_27" title="a definition with no references">PrefetchTemplateArgs</span></span> = &lt;<span class="cons_String">templates</span> <span class="cons_String">[</span> &lt;{<a href="#TemplateArgOrThis_12_69" id="TemplateArgOrThis_36_65" title="a reference to a single-file definition">TemplateArgOrThis</a> <span class="cons_Lit">","</span>}+&gt; <span class="cons_String">]</span>&gt;
  <a href="#TemplateArgOrThis_36_65" id="TemplateArgOrThis_37_3" title="a definition with a single reference">TemplateArgOrThis</a>.<span class="cons_Constructor"><span id="TemplateArgOrThis_37_21" title="a definition with no references">TemplateArgOrThis</span></span> = &lt;&lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_37_43" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">(</span> &lt;{<a href="#SortOrThis_12_58" id="SortOrThis_37_51" title="a reference to a single-file definition">SortOrThis</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;
  <a href="#SortOrThis_37_51" id="SortOrThis_38_3" title="a definition with a single reference">SortOrThis</a>.<span class="cons_Constructor"><span id="Sort_38_14" title="a definition with no references">Sort</span></span> = <a href="../WebDSL-Core.sdf3/#Sort_10_95" id="Sort_38_21" title="a reference to a single-file definition">Sort</a>
  <a href="#SortOrThis_37_51" id="SortOrThis_39_3" title="a definition with a single reference">SortOrThis</a>.<span class="cons_Constructor"><span id="TArgThis_39_14" title="a definition with no references">TArgThis</span></span> = &lt;<span class="cons_String">this</span>&gt;
  <a href="#SortOrThis_37_51" id="SortOrThis_40_3" title="a definition with a single reference">SortOrThis</a>.<span class="cons_Constructor"><span id="PrefetchThisCast_40_14" title="a definition with no references">PrefetchThisCast</span></span> = &lt;<span class="cons_String">this</span> <span class="cons_String">as</span> &lt;<a href="../WebDSL-Core.sdf3/#Sort_10_95" id="Sort_40_43" title="a reference to a single-file definition">Sort</a>&gt;&gt;

<span class="keyword">context-free syntax</span>

  <a href="#PrefetchCondition_29_106" id="PrefetchCondition_44_3" title="a definition with a single reference">PrefetchCondition</a>.<span class="cons_Constructor"><span id="PrefetchConditionNone_44_21" title="a definition with no references">PrefetchConditionNone</span></span> = &lt;&gt;
  <a href="#PrefetchCondition_29_106" id="PrefetchCondition_45_3" title="a definition with a single reference">PrefetchCondition</a>.<span class="cons_Constructor"><span id="PrefetchCondition_45_21" title="a definition with no references">PrefetchCondition</span></span> = &lt;<span class="cons_String">if</span> <span class="cons_String">(</span> &lt;<a href="#PrefetchCond_11_107" id="PrefetchCond_45_48" title="a reference to a single-file definition">PrefetchCond</a>&gt; <span class="cons_String">)</span>&gt;
  <button class="modal-open" id="PrefetchWhereOpt_46_3" title="a definition with multiple references" data-urls="#PrefetchWhereOpt line 17_50, 20_50, 29_126">PrefetchWhereOpt</button>.<span class="cons_Constructor"><span id="PrefetchWhereOptNone_46_20" title="a definition with no references">PrefetchWhereOptNone</span></span> = &lt;&gt;
  <button class="modal-open" id="PrefetchWhereOpt_47_3" title="a definition with multiple references" data-urls="#PrefetchWhereOpt line 17_50, 20_50, 29_126">PrefetchWhereOpt</button>.<span class="cons_Constructor"><span id="PrefetchWhere_47_20" title="a definition with no references">PrefetchWhere</span></span> = &lt;<span class="cons_String">where</span> &lt;<a href="#PrefetchWhereMod_11_137" id="PrefetchWhereMod_47_44" title="a reference to a single-file definition">PrefetchWhereMod</a>*&gt; <span class="cons_String">(</span> &lt;<a href="#PrefetchCond_11_107" id="PrefetchCond_47_66" title="a reference to a single-file definition">PrefetchCond</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#PrefetchWhereMod_47_44" id="PrefetchWhereMod_48_3" title="a definition with a single reference">PrefetchWhereMod</a>.<span class="cons_Constructor"><span id="Hint_48_20" title="a definition with no references">Hint</span></span> = &lt;<span class="cons_String">hint</span>&gt;
  <button class="modal-open" id="PrefetchCond_49_3" title="a definition with multiple references" data-urls="#PrefetchCond line 45_48, 47_66, 55_47, 55_65, 56_47, 56_65, 57_49, 59_22, 82_5, 94_5, 95_5, 96_5, 97_5, 98_5, 99_5, 101_11, 102_11">PrefetchCond</button>.<span class="cons_Constructor"><a href="#PrefetchEq_94_18" id="PrefetchEq_49_16" title="a definition with a single reference">PrefetchEq</a></span>                 = &lt;&lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_49_47" title="a reference to a single-file definition">PrefetchCondVal</a>&gt; <span class="cons_String">==</span> &lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_49_68" title="a reference to a single-file definition">PrefetchCondVal</a>&gt;&gt; {<span class="keyword">left</span>}
  <button class="modal-open" id="PrefetchCond_50_3" title="a definition with multiple references" data-urls="#PrefetchCond line 45_48, 47_66, 55_47, 55_65, 56_47, 56_65, 57_49, 59_22, 82_5, 94_5, 95_5, 96_5, 97_5, 98_5, 99_5, 101_11, 102_11">PrefetchCond</button>.<span class="cons_Constructor"><a href="#PrefetchNotEq_95_18" id="PrefetchNotEq_50_16" title="a definition with a single reference">PrefetchNotEq</a></span>              = &lt;&lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_50_47" title="a reference to a single-file definition">PrefetchCondVal</a>&gt; <span class="cons_String">!=</span> &lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_50_68" title="a reference to a single-file definition">PrefetchCondVal</a>&gt;&gt; {<span class="keyword">left</span>}
  <button class="modal-open" id="PrefetchCond_51_3" title="a definition with multiple references" data-urls="#PrefetchCond line 45_48, 47_66, 55_47, 55_65, 56_47, 56_65, 57_49, 59_22, 82_5, 94_5, 95_5, 96_5, 97_5, 98_5, 99_5, 101_11, 102_11">PrefetchCond</button>.<span class="cons_Constructor"><a href="#PrefetchLargerThan_96_18" id="PrefetchLargerThan_51_16" title="a definition with a single reference">PrefetchLargerThan</a></span>         = &lt;&lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_51_47" title="a reference to a single-file definition">PrefetchCondVal</a>&gt; \&gt; &lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_51_68" title="a reference to a single-file definition">PrefetchCondVal</a>&gt;&gt; {<span class="keyword">left</span>}
  <button class="modal-open" id="PrefetchCond_52_3" title="a definition with multiple references" data-urls="#PrefetchCond line 45_48, 47_66, 55_47, 55_65, 56_47, 56_65, 57_49, 59_22, 82_5, 94_5, 95_5, 96_5, 97_5, 98_5, 99_5, 101_11, 102_11">PrefetchCond</button>.<span class="cons_Constructor"><a href="#PrefetchLargerThanOrEqual_97_18" id="PrefetchLargerThanOrEqual_52_16" title="a definition with a single reference">PrefetchLargerThanOrEqual</a></span>  = &lt;&lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_52_47" title="a reference to a single-file definition">PrefetchCondVal</a>&gt; \&gt;<span class="cons_String">=</span> &lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_52_69" title="a reference to a single-file definition">PrefetchCondVal</a>&gt;&gt; {<span class="keyword">left</span>}
  <button class="modal-open" id="PrefetchCond_53_3" title="a definition with multiple references" data-urls="#PrefetchCond line 45_48, 47_66, 55_47, 55_65, 56_47, 56_65, 57_49, 59_22, 82_5, 94_5, 95_5, 96_5, 97_5, 98_5, 99_5, 101_11, 102_11">PrefetchCond</button>.<span class="cons_Constructor"><a href="#PrefetchSmallerThan_98_18" id="PrefetchSmallerThan_53_16" title="a definition with a single reference">PrefetchSmallerThan</a></span>        = &lt;&lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_53_47" title="a reference to a single-file definition">PrefetchCondVal</a>&gt; \&lt; &lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_53_68" title="a reference to a single-file definition">PrefetchCondVal</a>&gt;&gt; {<span class="keyword">left</span>}
  <button class="modal-open" id="PrefetchCond_54_3" title="a definition with multiple references" data-urls="#PrefetchCond line 45_48, 47_66, 55_47, 55_65, 56_47, 56_65, 57_49, 59_22, 82_5, 94_5, 95_5, 96_5, 97_5, 98_5, 99_5, 101_11, 102_11">PrefetchCond</button>.<span class="cons_Constructor"><a href="#PrefetchSmallerThanOrEqual_99_18" id="PrefetchSmallerThanOrEqual_54_16" title="a definition with a single reference">PrefetchSmallerThanOrEqual</a></span> = &lt;&lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_54_47" title="a reference to a single-file definition">PrefetchCondVal</a>&gt; \&lt;<span class="cons_String">=</span> &lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_54_69" title="a reference to a single-file definition">PrefetchCondVal</a>&gt;&gt; {<span class="keyword">left</span>}
  <button class="modal-open" id="PrefetchCond_55_3" title="a definition with multiple references" data-urls="#PrefetchCond line 45_48, 47_66, 55_47, 55_65, 56_47, 56_65, 57_49, 59_22, 82_5, 94_5, 95_5, 96_5, 97_5, 98_5, 99_5, 101_11, 102_11">PrefetchCond</button>.<span class="cons_Constructor"><a href="#PrefetchAnd_101_24" id="PrefetchAnd_55_16" title="a definition with a single reference">PrefetchAnd</a></span>                = &lt;&lt;<a href="#PrefetchCond_11_107" id="PrefetchCond_55_47" title="a reference to a single-file definition">PrefetchCond</a>&gt; <span class="cons_String">&amp;&amp;</span> &lt;<a href="#PrefetchCond_11_107" id="PrefetchCond_55_65" title="a reference to a single-file definition">PrefetchCond</a>&gt;&gt; {<span class="keyword">left</span>}
  <button class="modal-open" id="PrefetchCond_56_3" title="a definition with multiple references" data-urls="#PrefetchCond line 45_48, 47_66, 55_47, 55_65, 56_47, 56_65, 57_49, 59_22, 82_5, 94_5, 95_5, 96_5, 97_5, 98_5, 99_5, 101_11, 102_11">PrefetchCond</button>.<span class="cons_Constructor"><a href="#PrefetchOr_102_24" id="PrefetchOr_56_16" title="a definition with a single reference">PrefetchOr</a></span>                 = &lt;&lt;<a href="#PrefetchCond_11_107" id="PrefetchCond_56_47" title="a reference to a single-file definition">PrefetchCond</a>&gt; <span class="cons_String">||</span> &lt;<a href="#PrefetchCond_11_107" id="PrefetchCond_56_65" title="a reference to a single-file definition">PrefetchCond</a>&gt;&gt; {<span class="keyword">left</span>}
  <button class="modal-open" id="PrefetchCond_57_3" title="a definition with multiple references" data-urls="#PrefetchCond line 45_48, 47_66, 55_47, 55_65, 56_47, 56_65, 57_49, 59_22, 82_5, 94_5, 95_5, 96_5, 97_5, 98_5, 99_5, 101_11, 102_11">PrefetchCond</button>.<span class="cons_Constructor"><a href="#PrefetchNot_82_18" id="PrefetchNot_57_16" title="a definition with a single reference">PrefetchNot</a></span>                = &lt;<span class="cons_String">!</span> &lt;<a href="#PrefetchCond_11_107" id="PrefetchCond_57_49" title="a reference to a single-file definition">PrefetchCond</a>&gt;&gt;
  <button class="modal-open" id="PrefetchCond_58_3" title="a definition with multiple references" data-urls="#PrefetchCond line 45_48, 47_66, 55_47, 55_65, 56_47, 56_65, 57_49, 59_22, 82_5, 94_5, 95_5, 96_5, 97_5, 98_5, 99_5, 101_11, 102_11">PrefetchCond</button> = <a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_58_18" title="a reference to a single-file definition">PrefetchCondVal</a>
  <button class="modal-open" id="PrefetchCond_59_3" title="a definition with multiple references" data-urls="#PrefetchCond line 45_48, 47_66, 55_47, 55_65, 56_47, 56_65, 57_49, 59_22, 82_5, 94_5, 95_5, 96_5, 97_5, 98_5, 99_5, 101_11, 102_11">PrefetchCond</button> = &lt;<span class="cons_String">(</span> &lt;<a href="#PrefetchCond_11_107" id="PrefetchCond_59_22" title="a reference to a single-file definition">PrefetchCond</a>&gt; <span class="cons_String">)</span>&gt; {<span class="keyword">bracket</span>}

  <button class="modal-open" id="PrefetchCondVal_61_3" title="a definition with multiple references" data-urls="#PrefetchCondVal line 49_47, 49_68, 50_47, 50_68, 51_47, 51_68, 52_47, 52_69, 53_47, 53_68, 54_47, 54_69, 58_18, 67_35, 67_55, 68_35, 68_55, 69_35, 69_55, 70_35, 70_55, 71_35, 71_55, 79_5, 85_5, 86_5, 87_5, 90_5, 91_5">PrefetchCondVal</button>.<span class="cons_Constructor"><span id="PrefetchTrue_61_19" title="a definition with no references">PrefetchTrue</span></span> = &lt;<span class="cons_String">true</span>&gt;
  <button class="modal-open" id="PrefetchCondVal_62_3" title="a definition with multiple references" data-urls="#PrefetchCondVal line 49_47, 49_68, 50_47, 50_68, 51_47, 51_68, 52_47, 52_69, 53_47, 53_68, 54_47, 54_69, 58_18, 67_35, 67_55, 68_35, 68_55, 69_35, 69_55, 70_35, 70_55, 71_35, 71_55, 79_5, 85_5, 86_5, 87_5, 90_5, 91_5">PrefetchCondVal</button>.<span class="cons_Constructor"><span id="PrefetchFalse_62_19" title="a definition with no references">PrefetchFalse</span></span> = &lt;<span class="cons_String">false</span>&gt;
  <button class="modal-open" id="PrefetchCondVal_63_3" title="a definition with multiple references" data-urls="#PrefetchCondVal line 49_47, 49_68, 50_47, 50_68, 51_47, 51_68, 52_47, 52_69, 53_47, 53_68, 54_47, 54_69, 58_18, 67_35, 67_55, 68_35, 68_55, 69_35, 69_55, 70_35, 70_55, 71_35, 71_55, 79_5, 85_5, 86_5, 87_5, 90_5, 91_5">PrefetchCondVal</button>.<span class="cons_Constructor"><span id="PrefetchNull_63_19" title="a definition with no references">PrefetchNull</span></span> = &lt;<span class="cons_String">null</span>&gt;
  <button class="modal-open" id="PrefetchCondVal_64_3" title="a definition with multiple references" data-urls="#PrefetchCondVal line 49_47, 49_68, 50_47, 50_68, 51_47, 51_68, 52_47, 52_69, 53_47, 53_68, 54_47, 54_69, 58_18, 67_35, 67_55, 68_35, 68_55, 69_35, 69_55, 70_35, 70_55, 71_35, 71_55, 79_5, 85_5, 86_5, 87_5, 90_5, 91_5">PrefetchCondVal</button>.<span class="cons_Constructor"><span id="PrefetchConst_64_19" title="a definition with no references">PrefetchConst</span></span> = <a href="../WebDSL-Action.sdf3/#ConstValue_179_3" id="ConstValue_64_35" title="a reference to a single-file definition">ConstValue</a>
  <button class="modal-open" id="PrefetchCondVal_65_3" title="a definition with multiple references" data-urls="#PrefetchCondVal line 49_47, 49_68, 50_47, 50_68, 51_47, 51_68, 52_47, 52_69, 53_47, 53_68, 54_47, 54_69, 58_18, 67_35, 67_55, 68_35, 68_55, 69_35, 69_55, 70_35, 70_55, 71_35, 71_55, 79_5, 85_5, 86_5, 87_5, 90_5, 91_5">PrefetchCondVal</button>.<span class="cons_Constructor"><span id="PrefetchCondVar_65_19" title="a definition with no references">PrefetchCondVar</span></span> = <a href="../WebDSL-UI.sdf3/#VarId_521_3" id="VarId_65_37" title="a reference to a single-file definition">VarId</a>
  <button class="modal-open" id="PrefetchCondVal_66_3" title="a definition with multiple references" data-urls="#PrefetchCondVal line 49_47, 49_68, 50_47, 50_68, 51_47, 51_68, 52_47, 52_69, 53_47, 53_68, 54_47, 54_69, 58_18, 67_35, 67_55, 68_35, 68_55, 69_35, 69_55, 70_35, 70_55, 71_35, 71_55, 79_5, 85_5, 86_5, 87_5, 90_5, 91_5">PrefetchCondVal</button>.<span class="cons_Constructor"><a href="#RelativeFieldAccess_79_21" id="RelativeFieldAccess_66_19" title="a definition with a single reference">RelativeFieldAccess</a></span> = &lt;&lt;<a href="#OptSimpleSort_12_3" id="OptSimpleSort_66_43" title="a reference to a single-file definition">OptSimpleSort</a>&gt; <span class="cons_String">.</span> &lt;<a href="../WebDSL-Lexical.sdf3/#PropertyId_5_38" id="PropertyId_66_61" title="a reference to a single-file definition">PropertyId</a>&gt;&gt; {<span class="keyword">left</span>}
  <button class="modal-open" id="PrefetchCondVal_67_3" title="a definition with multiple references" data-urls="#PrefetchCondVal line 49_47, 49_68, 50_47, 50_68, 51_47, 51_68, 52_47, 52_69, 53_47, 53_68, 54_47, 54_69, 58_18, 67_35, 67_55, 68_35, 68_55, 69_35, 69_55, 70_35, 70_55, 71_35, 71_55, 79_5, 85_5, 86_5, 87_5, 90_5, 91_5">PrefetchCondVal</button>.<span class="cons_Constructor"><a href="#PrefetchMul_85_21" id="PrefetchMul_67_19" title="a definition with a single reference">PrefetchMul</a></span> = &lt;&lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_67_35" title="a reference to a single-file definition">PrefetchCondVal</a>&gt; <span class="cons_String">*</span> &lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_67_55" title="a reference to a single-file definition">PrefetchCondVal</a>&gt;&gt; {<span class="keyword">left</span>}
  <button class="modal-open" id="PrefetchCondVal_68_3" title="a definition with multiple references" data-urls="#PrefetchCondVal line 49_47, 49_68, 50_47, 50_68, 51_47, 51_68, 52_47, 52_69, 53_47, 53_68, 54_47, 54_69, 58_18, 67_35, 67_55, 68_35, 68_55, 69_35, 69_55, 70_35, 70_55, 71_35, 71_55, 79_5, 85_5, 86_5, 87_5, 90_5, 91_5">PrefetchCondVal</button>.<span class="cons_Constructor"><a href="#PrefetchDiv_86_21" id="PrefetchDiv_68_19" title="a definition with a single reference">PrefetchDiv</a></span> = &lt;&lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_68_35" title="a reference to a single-file definition">PrefetchCondVal</a>&gt; <span class="cons_String">/</span> &lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_68_55" title="a reference to a single-file definition">PrefetchCondVal</a>&gt;&gt; {<span class="keyword">left</span>}
  <button class="modal-open" id="PrefetchCondVal_69_3" title="a definition with multiple references" data-urls="#PrefetchCondVal line 49_47, 49_68, 50_47, 50_68, 51_47, 51_68, 52_47, 52_69, 53_47, 53_68, 54_47, 54_69, 58_18, 67_35, 67_55, 68_35, 68_55, 69_35, 69_55, 70_35, 70_55, 71_35, 71_55, 79_5, 85_5, 86_5, 87_5, 90_5, 91_5">PrefetchCondVal</button>.<span class="cons_Constructor"><a href="#PrefetchMod_87_21" id="PrefetchMod_69_19" title="a definition with a single reference">PrefetchMod</a></span> = &lt;&lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_69_35" title="a reference to a single-file definition">PrefetchCondVal</a>&gt; <span class="cons_String">%</span> &lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_69_55" title="a reference to a single-file definition">PrefetchCondVal</a>&gt;&gt; {<span class="keyword">left</span>}
  <button class="modal-open" id="PrefetchCondVal_70_3" title="a definition with multiple references" data-urls="#PrefetchCondVal line 49_47, 49_68, 50_47, 50_68, 51_47, 51_68, 52_47, 52_69, 53_47, 53_68, 54_47, 54_69, 58_18, 67_35, 67_55, 68_35, 68_55, 69_35, 69_55, 70_35, 70_55, 71_35, 71_55, 79_5, 85_5, 86_5, 87_5, 90_5, 91_5">PrefetchCondVal</button>.<span class="cons_Constructor"><a href="#PrefetchAdd_90_21" id="PrefetchAdd_70_19" title="a definition with a single reference">PrefetchAdd</a></span> = &lt;&lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_70_35" title="a reference to a single-file definition">PrefetchCondVal</a>&gt; <span class="cons_String">+</span> &lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_70_55" title="a reference to a single-file definition">PrefetchCondVal</a>&gt;&gt; {<span class="keyword">left</span>}
  <button class="modal-open" id="PrefetchCondVal_71_3" title="a definition with multiple references" data-urls="#PrefetchCondVal line 49_47, 49_68, 50_47, 50_68, 51_47, 51_68, 52_47, 52_69, 53_47, 53_68, 54_47, 54_69, 58_18, 67_35, 67_55, 68_35, 68_55, 69_35, 69_55, 70_35, 70_55, 71_35, 71_55, 79_5, 85_5, 86_5, 87_5, 90_5, 91_5">PrefetchCondVal</button>.<span class="cons_Constructor"><a href="#PrefetchSub_91_21" id="PrefetchSub_71_19" title="a definition with a single reference">PrefetchSub</a></span> = &lt;&lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_71_35" title="a reference to a single-file definition">PrefetchCondVal</a>&gt; <span class="cons_String">-</span> &lt;<a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_71_55" title="a reference to a single-file definition">PrefetchCondVal</a>&gt;&gt; {<span class="keyword">left</span>}

  <a href="#OptSimpleSort_66_43" id="OptSimpleSort_73_3" title="a definition with a single reference">OptSimpleSort</a>.<span class="cons_Constructor"><span id="OptSimpleSortNone_73_17" title="a definition with no references">OptSimpleSortNone</span></span> = &lt;&gt;
  <a href="#OptSimpleSort_66_43" id="OptSimpleSort_74_3" title="a definition with a single reference">OptSimpleSort</a>.<span class="cons_Constructor"><span id="OptSimpleSortSome_74_17" title="a definition with no references">OptSimpleSortSome</span></span> = <a href="../WebDSL-Core.sdf3/#SimpleSortLex_24_3" id="SimpleSortLex_74_37" title="a reference to a single-file definition">SimpleSortLex</a>

<span class="keyword">context-free priorities</span>

  {<span class="keyword">left</span> :
    <a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_79_5" title="a reference to a single-file definition">PrefetchCondVal</a>.<span class="cons_Constructor"><a href="#RelativeFieldAccess_66_19" id="RelativeFieldAccess_79_21" title="a reference to a single-file definition">RelativeFieldAccess</a></span>
  } &gt;
  {
    <a href="#PrefetchCond_11_107" id="PrefetchCond_82_5" title="a reference to a single-file definition">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchNot_57_16" id="PrefetchNot_82_18" title="a reference to a single-file definition">PrefetchNot</a></span>
  } &gt;
  {<span class="keyword">left</span> :
    <a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_85_5" title="a reference to a single-file definition">PrefetchCondVal</a>.<span class="cons_Constructor"><a href="#PrefetchMul_67_19" id="PrefetchMul_85_21" title="a reference to a single-file definition">PrefetchMul</a></span>
    <a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_86_5" title="a reference to a single-file definition">PrefetchCondVal</a>.<span class="cons_Constructor"><a href="#PrefetchDiv_68_19" id="PrefetchDiv_86_21" title="a reference to a single-file definition">PrefetchDiv</a></span>
    <a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_87_5" title="a reference to a single-file definition">PrefetchCondVal</a>.<span class="cons_Constructor"><a href="#PrefetchMod_69_19" id="PrefetchMod_87_21" title="a reference to a single-file definition">PrefetchMod</a></span>
  } &gt;
  {<span class="keyword">left</span>:
    <a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_90_5" title="a reference to a single-file definition">PrefetchCondVal</a>.<span class="cons_Constructor"><a href="#PrefetchAdd_70_19" id="PrefetchAdd_90_21" title="a reference to a single-file definition">PrefetchAdd</a></span>
    <a href="#PrefetchCondVal_11_91" id="PrefetchCondVal_91_5" title="a reference to a single-file definition">PrefetchCondVal</a>.<span class="cons_Constructor"><a href="#PrefetchSub_71_19" id="PrefetchSub_91_21" title="a reference to a single-file definition">PrefetchSub</a></span>
  } &gt;
  {<span class="keyword">left</span> :
    <a href="#PrefetchCond_11_107" id="PrefetchCond_94_5" title="a reference to a single-file definition">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchEq_49_16" id="PrefetchEq_94_18" title="a reference to a single-file definition">PrefetchEq</a></span>
    <a href="#PrefetchCond_11_107" id="PrefetchCond_95_5" title="a reference to a single-file definition">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchNotEq_50_16" id="PrefetchNotEq_95_18" title="a reference to a single-file definition">PrefetchNotEq</a></span>
    <a href="#PrefetchCond_11_107" id="PrefetchCond_96_5" title="a reference to a single-file definition">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchLargerThan_51_16" id="PrefetchLargerThan_96_18" title="a reference to a single-file definition">PrefetchLargerThan</a></span>
    <a href="#PrefetchCond_11_107" id="PrefetchCond_97_5" title="a reference to a single-file definition">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchLargerThanOrEqual_52_16" id="PrefetchLargerThanOrEqual_97_18" title="a reference to a single-file definition">PrefetchLargerThanOrEqual</a></span>
    <a href="#PrefetchCond_11_107" id="PrefetchCond_98_5" title="a reference to a single-file definition">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchSmallerThan_53_16" id="PrefetchSmallerThan_98_18" title="a reference to a single-file definition">PrefetchSmallerThan</a></span>
    <a href="#PrefetchCond_11_107" id="PrefetchCond_99_5" title="a reference to a single-file definition">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchSmallerThanOrEqual_54_16" id="PrefetchSmallerThanOrEqual_99_18" title="a reference to a single-file definition">PrefetchSmallerThanOrEqual</a></span>
  } &gt;
  {<span class="keyword">left</span> : <a href="#PrefetchCond_11_107" id="PrefetchCond_101_11" title="a reference to a single-file definition">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchAnd_55_16" id="PrefetchAnd_101_24" title="a reference to a single-file definition">PrefetchAnd</a></span> } &gt;
  {<span class="keyword">left</span> : <a href="#PrefetchCond_11_107" id="PrefetchCond_102_11" title="a reference to a single-file definition">PrefetchCond</a>.<span class="cons_Constructor"><a href="#PrefetchOr_56_16" id="PrefetchOr_102_24" title="a reference to a single-file definition">PrefetchOr</a></span> }

</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
