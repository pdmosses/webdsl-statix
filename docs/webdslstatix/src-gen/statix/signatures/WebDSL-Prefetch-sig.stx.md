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
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix-sig.stx/#signatures/WebDSL-Prefetch-sig_19_3" id="signatures/WebDSL-Prefetch-sig_1_8" title="Referenced at ../webdsl-statix-sig.stx line 19"><span class="token sort_Id">signatures/WebDSL-Prefetch-sig</span></a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action-sig.stx/#signatures/WebDSL-Action-sig_1_8" id="signatures/WebDSL-Action-sig_4_3" title="Defined at ../WebDSL-Action-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Action-sig</span></a>
  <a href="../WebDSL-Core-sig.stx/#signatures/WebDSL-Core-sig_1_8" id="signatures/WebDSL-Core-sig_5_3" title="Defined at ../WebDSL-Core-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Core-sig</span></a>
  <a href="../WebDSL-Lexical-sig.stx/#signatures/WebDSL-Lexical-sig_1_8" id="signatures/WebDSL-Lexical-sig_6_3" title="Defined at ../WebDSL-Lexical-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Lexical-sig</span></a>
  <a href="../WebDSL-UI-sig.stx/#signatures/WebDSL-UI-sig_1_8" id="signatures/WebDSL-UI-sig_7_3" title="Defined at ../WebDSL-UI-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-UI-sig</span></a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <span class="cons_SortDecl"><a href="#PrefetchChildren_28_30" id="PrefetchChildren_12_5" title="Referenced at line 28, 46, 47, 48, 50"><span class="token sort_Id">PrefetchChildren</span></a></span>
    <span class="cons_SortDecl"><a href="#PrefetchNode_29_26" id="PrefetchNode_13_5" title="Referenced at line 29, 48, 51"><span class="token sort_Id">PrefetchNode</span></a></span>
    <span class="cons_SortDecl"><a href="#PrefetchTemplateArgsOpt_30_37" id="PrefetchTemplateArgsOpt_14_5" title="Referenced at line 30, 46, 47, 51, 56, 57"><span class="token sort_Id">PrefetchTemplateArgsOpt</span></a></span>
    <span class="cons_SortDecl"><a href="#PrefetchNodeMod_31_29" id="PrefetchNodeMod_15_5" title="Referenced at line 31, 51, 54, 55"><span class="token sort_Id">PrefetchNodeMod</span></a></span>
    <span class="cons_SortDecl"><a href="#PrefetchCondition_32_31" id="PrefetchCondition_16_5" title="Referenced at line 32, 51, 62, 63"><span class="token sort_Id">PrefetchCondition</span></a></span>
    <span class="cons_SortDecl"><a href="#PrefetchCondVal_33_29" id="PrefetchCondVal_17_5" title="Referenced at line 33, 67, 68, 69, 70, 71, 72, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87"><span class="token sort_Id">PrefetchCondVal</span></a></span>
    <span class="cons_SortDecl"><a href="#PrefetchCond_34_26" id="PrefetchCond_18_5" title="Referenced at line 34, 63, 65, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76"><span class="token sort_Id">PrefetchCond</span></a></span>
    <span class="cons_SortDecl"><a href="#PrefetchWhereOpt_35_30" id="PrefetchWhereOpt_19_5" title="Referenced at line 35, 46, 47, 51, 64, 65"><span class="token sort_Id">PrefetchWhereOpt</span></a></span>
    <span class="cons_SortDecl"><a href="#PrefetchWhereMod_36_30" id="PrefetchWhereMod_20_5" title="Referenced at line 36, 65, 66"><span class="token sort_Id">PrefetchWhereMod</span></a></span>
    <span class="cons_SortDecl"><a href="#OptSimpleSort_37_27" id="OptSimpleSort_21_5" title="Referenced at line 37, 82, 88, 89"><span class="token sort_Id">OptSimpleSort</span></a></span>
    <span class="cons_SortDecl"><a href="#PrefetchChildrenOpt_38_33" id="PrefetchChildrenOpt_22_5" title="Referenced at line 38, 49, 50, 51"><span class="token sort_Id">PrefetchChildrenOpt</span></a></span>
    <span class="cons_SortDecl"><a href="#OptPrefetchOwnerCast_39_34" id="OptPrefetchOwnerCast_23_5" title="Referenced at line 39, 51, 52, 53"><span class="token sort_Id">OptPrefetchOwnerCast</span></a></span>
    <span class="cons_SortDecl"><a href="#SortOrThis_40_24" id="SortOrThis_24_5" title="Referenced at line 40, 58, 59, 60, 61"><span class="token sort_Id">SortOrThis</span></a></span>
    <span class="cons_SortDecl"><a href="#TemplateArgOrThis_41_31" id="TemplateArgOrThis_25_5" title="Referenced at line 41, 57, 58"><span class="token sort_Id">TemplateArgOrThis</span></a></span>

  <span class="keyword">constructors</span>
    <span class="cons_OpDecl"><span id="PrefetchChildren-Plhdr_28_5" title="Not referenced"><span class="token sort_Id">PrefetchChildren-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#PrefetchChildren_12_5" id="PrefetchChildren_28_30" title="Defined at line 12"><span class="token sort_Id">PrefetchChildren</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrefetchNode-Plhdr_29_5" title="Not referenced"><span class="token sort_Id">PrefetchNode-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#PrefetchNode_13_5" id="PrefetchNode_29_26" title="Defined at line 13"><span class="token sort_Id">PrefetchNode</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrefetchTemplateArgsOpt-Plhdr_30_5" title="Not referenced"><span class="token sort_Id">PrefetchTemplateArgsOpt-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#PrefetchTemplateArgsOpt_14_5" id="PrefetchTemplateArgsOpt_30_37" title="Defined at line 14"><span class="token sort_Id">PrefetchTemplateArgsOpt</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrefetchNodeMod-Plhdr_31_5" title="Not referenced"><span class="token sort_Id">PrefetchNodeMod-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#PrefetchNodeMod_15_5" id="PrefetchNodeMod_31_29" title="Defined at line 15"><span class="token sort_Id">PrefetchNodeMod</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrefetchCondition-Plhdr_32_5" title="Not referenced"><span class="token sort_Id">PrefetchCondition-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#PrefetchCondition_16_5" id="PrefetchCondition_32_31" title="Defined at line 16"><span class="token sort_Id">PrefetchCondition</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrefetchCondVal-Plhdr_33_5" title="Not referenced"><span class="token sort_Id">PrefetchCondVal-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#PrefetchCondVal_17_5" id="PrefetchCondVal_33_29" title="Defined at line 17"><span class="token sort_Id">PrefetchCondVal</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrefetchCond-Plhdr_34_5" title="Not referenced"><span class="token sort_Id">PrefetchCond-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#PrefetchCond_18_5" id="PrefetchCond_34_26" title="Defined at line 18"><span class="token sort_Id">PrefetchCond</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrefetchWhereOpt-Plhdr_35_5" title="Not referenced"><span class="token sort_Id">PrefetchWhereOpt-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#PrefetchWhereOpt_19_5" id="PrefetchWhereOpt_35_30" title="Defined at line 19"><span class="token sort_Id">PrefetchWhereOpt</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrefetchWhereMod-Plhdr_36_5" title="Not referenced"><span class="token sort_Id">PrefetchWhereMod-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#PrefetchWhereMod_20_5" id="PrefetchWhereMod_36_30" title="Defined at line 20"><span class="token sort_Id">PrefetchWhereMod</span></a></span></span>
    <span class="cons_OpDecl"><span id="OptSimpleSort-Plhdr_37_5" title="Not referenced"><span class="token sort_Id">OptSimpleSort-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#OptSimpleSort_21_5" id="OptSimpleSort_37_27" title="Defined at line 21"><span class="token sort_Id">OptSimpleSort</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrefetchChildrenOpt-Plhdr_38_5" title="Not referenced"><span class="token sort_Id">PrefetchChildrenOpt-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#PrefetchChildrenOpt_22_5" id="PrefetchChildrenOpt_38_33" title="Defined at line 22"><span class="token sort_Id">PrefetchChildrenOpt</span></a></span></span>
    <span class="cons_OpDecl"><span id="OptPrefetchOwnerCast-Plhdr_39_5" title="Not referenced"><span class="token sort_Id">OptPrefetchOwnerCast-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#OptPrefetchOwnerCast_23_5" id="OptPrefetchOwnerCast_39_34" title="Defined at line 23"><span class="token sort_Id">OptPrefetchOwnerCast</span></a></span></span>
    <span class="cons_OpDecl"><span id="SortOrThis-Plhdr_40_5" title="Not referenced"><span class="token sort_Id">SortOrThis-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#SortOrThis_24_5" id="SortOrThis_40_24" title="Defined at line 24"><span class="token sort_Id">SortOrThis</span></a></span></span>
    <span class="cons_OpDecl"><span id="TemplateArgOrThis-Plhdr_41_5" title="Not referenced"><span class="token sort_Id">TemplateArgOrThis-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#TemplateArgOrThis_25_5" id="TemplateArgOrThis_41_31" title="Defined at line 25"><span class="token sort_Id">TemplateArgOrThis</span></a></span></span>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <span class="cons_OpDecl"><span id="PrefetchFor_46_5" title="Not referenced"><span class="token sort_Id">PrefetchFor</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#Id_14_5" id="Id_46_19" title="Defined at ../WebDSL-Lexical-sig.stx line 14"><span class="token sort_Id">Id</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#PrefetchTemplateArgsOpt_14_5" id="PrefetchTemplateArgsOpt_46_24" title="Defined at line 14"><span class="token sort_Id">PrefetchTemplateArgsOpt</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#PrefetchWhereOpt_19_5" id="PrefetchWhereOpt_46_50" title="Defined at line 19"><span class="token sort_Id">PrefetchWhereOpt</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#PrefetchChildren_12_5" id="PrefetchChildren_46_69" title="Defined at line 12"><span class="token sort_Id">PrefetchChildren</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-UI-sig.stx/#TemplateElement_15_5" id="TemplateElement_46_89" title="Defined at ../WebDSL-UI-sig.stx line 15"><span class="token sort_Id">TemplateElement</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-actions.stx/#PrefetchForStmt_29_16" id="PrefetchForStmt_47_5" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 29"><span class="token sort_Id">PrefetchForStmt</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#Id_14_5" id="Id_47_23" title="Defined at ../WebDSL-Lexical-sig.stx line 14"><span class="token sort_Id">Id</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#PrefetchTemplateArgsOpt_14_5" id="PrefetchTemplateArgsOpt_47_28" title="Defined at line 14"><span class="token sort_Id">PrefetchTemplateArgsOpt</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#PrefetchWhereOpt_19_5" id="PrefetchWhereOpt_47_54" title="Defined at line 19"><span class="token sort_Id">PrefetchWhereOpt</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#PrefetchChildren_12_5" id="PrefetchChildren_47_73" title="Defined at line 12"><span class="token sort_Id">PrefetchChildren</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-Core-sig.stx/#Statement_23_5" id="Statement_47_93" title="Defined at ../WebDSL-Core-sig.stx line 23"><span class="token sort_Id">Statement</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrefetchChildren_48_5" title="Not referenced"><span class="token sort_Id">PrefetchChildren</span></span> <span class="operator">:</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="#PrefetchNode_13_5" id="PrefetchNode_48_29" title="Defined at line 13"><span class="token sort_Id">PrefetchNode</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#PrefetchChildren_12_5" id="PrefetchChildren_48_46" title="Defined at line 12"><span class="token sort_Id">PrefetchChildren</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrefetchChildrenOptNone_49_5" title="Not referenced"><span class="token sort_Id">PrefetchChildrenOptNone</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#PrefetchChildrenOpt_22_5" id="PrefetchChildrenOpt_49_31" title="Defined at line 22"><span class="token sort_Id">PrefetchChildrenOpt</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrefetchChildren2PrefetchChildrenOpt_50_5" title="Not referenced"><span class="token sort_Id">PrefetchChildren2PrefetchChildrenOpt</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#PrefetchChildren_12_5" id="PrefetchChildren_50_44" title="Defined at line 12"><span class="token sort_Id">PrefetchChildren</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#PrefetchChildrenOpt_22_5" id="PrefetchChildrenOpt_50_64" title="Defined at line 22"><span class="token sort_Id">PrefetchChildrenOpt</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrefetchNode_51_5" title="Not referenced"><span class="token sort_Id">PrefetchNode</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#OptPrefetchOwnerCast_23_5" id="OptPrefetchOwnerCast_51_20" title="Defined at line 23"><span class="token sort_Id">OptPrefetchOwnerCast</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#Id_14_5" id="Id_51_43" title="Defined at ../WebDSL-Lexical-sig.stx line 14"><span class="token sort_Id">Id</span></a></span> <span class="operator">*</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="#PrefetchNodeMod_15_5" id="PrefetchNodeMod_51_53" title="Defined at line 15"><span class="token sort_Id">PrefetchNodeMod</span></a></span><span class="operator">)</span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#PrefetchTemplateArgsOpt_14_5" id="PrefetchTemplateArgsOpt_51_72" title="Defined at line 14"><span class="token sort_Id">PrefetchTemplateArgsOpt</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#PrefetchCondition_16_5" id="PrefetchCondition_51_98" title="Defined at line 16"><span class="token sort_Id">PrefetchCondition</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#PrefetchWhereOpt_19_5" id="PrefetchWhereOpt_51_118" title="Defined at line 19"><span class="token sort_Id">PrefetchWhereOpt</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#PrefetchChildrenOpt_22_5" id="PrefetchChildrenOpt_51_137" title="Defined at line 22"><span class="token sort_Id">PrefetchChildrenOpt</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#PrefetchNode_13_5" id="PrefetchNode_51_160" title="Defined at line 13"><span class="token sort_Id">PrefetchNode</span></a></span></span>
    <span class="cons_OpDecl"><span id="OptPrefetchOwnerCastNone_52_5" title="Not referenced"><span class="token sort_Id">OptPrefetchOwnerCastNone</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#OptPrefetchOwnerCast_23_5" id="OptPrefetchOwnerCast_52_32" title="Defined at line 23"><span class="token sort_Id">OptPrefetchOwnerCast</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrefetchOwnerCast_53_5" title="Not referenced"><span class="token sort_Id">PrefetchOwnerCast</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#SimpleSortLex_42_5" id="SimpleSortLex_53_25" title="Defined at ../WebDSL-Lexical-sig.stx line 42"><span class="token sort_Id">SimpleSortLex</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#OptPrefetchOwnerCast_23_5" id="OptPrefetchOwnerCast_53_42" title="Defined at line 23"><span class="token sort_Id">OptPrefetchOwnerCast</span></a></span></span>
    <span class="cons_OpDecl"><span id="NoEmptyBatch_54_5" title="Not referenced"><span class="token sort_Id">NoEmptyBatch</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#PrefetchNodeMod_15_5" id="PrefetchNodeMod_54_20" title="Defined at line 15"><span class="token sort_Id">PrefetchNodeMod</span></a></span></span>
    <span class="cons_OpDecl"><span id="FetchEarly_55_5" title="Not referenced"><span class="token sort_Id">FetchEarly</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#PrefetchNodeMod_15_5" id="PrefetchNodeMod_55_18" title="Defined at line 15"><span class="token sort_Id">PrefetchNodeMod</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrefetchTemplateArgsOptNone_56_5" title="Not referenced"><span class="token sort_Id">PrefetchTemplateArgsOptNone</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#PrefetchTemplateArgsOpt_14_5" id="PrefetchTemplateArgsOpt_56_35" title="Defined at line 14"><span class="token sort_Id">PrefetchTemplateArgsOpt</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrefetchTemplateArgs_57_5" title="Not referenced"><span class="token sort_Id">PrefetchTemplateArgs</span></span> <span class="operator">:</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="#TemplateArgOrThis_25_5" id="TemplateArgOrThis_57_33" title="Defined at line 25"><span class="token sort_Id">TemplateArgOrThis</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#PrefetchTemplateArgsOpt_14_5" id="PrefetchTemplateArgsOpt_57_55" title="Defined at line 14"><span class="token sort_Id">PrefetchTemplateArgsOpt</span></a></span></span>
    <span class="cons_OpDecl"><span id="TemplateArgOrThis_58_5" title="Not referenced"><span class="token sort_Id">TemplateArgOrThis</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#Id_14_5" id="Id_58_25" title="Defined at ../WebDSL-Lexical-sig.stx line 14"><span class="token sort_Id">Id</span></a></span> <span class="operator">*</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="#SortOrThis_24_5" id="SortOrThis_58_35" title="Defined at line 24"><span class="token sort_Id">SortOrThis</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#TemplateArgOrThis_25_5" id="TemplateArgOrThis_58_50" title="Defined at line 25"><span class="token sort_Id">TemplateArgOrThis</span></a></span></span>
    <span class="cons_OpDecl"><span id="Sort_59_5" title="Not referenced"><span class="token sort_Id">Sort</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Core-sig.stx/#Sort_17_5" id="Sort_59_12" title="Defined at ../WebDSL-Core-sig.stx line 17"><span class="token sort_Id">Sort</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#SortOrThis_24_5" id="SortOrThis_59_20" title="Defined at line 24"><span class="token sort_Id">SortOrThis</span></a></span></span>
    <span class="cons_OpDecl"><span id="TArgThis_60_5" title="Not referenced"><span class="token sort_Id">TArgThis</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#SortOrThis_24_5" id="SortOrThis_60_16" title="Defined at line 24"><span class="token sort_Id">SortOrThis</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrefetchThisCast_61_5" title="Not referenced"><span class="token sort_Id">PrefetchThisCast</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Core-sig.stx/#Sort_17_5" id="Sort_61_24" title="Defined at ../WebDSL-Core-sig.stx line 17"><span class="token sort_Id">Sort</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#SortOrThis_24_5" id="SortOrThis_61_32" title="Defined at line 24"><span class="token sort_Id">SortOrThis</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrefetchConditionNone_62_5" title="Not referenced"><span class="token sort_Id">PrefetchConditionNone</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#PrefetchCondition_16_5" id="PrefetchCondition_62_29" title="Defined at line 16"><span class="token sort_Id">PrefetchCondition</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrefetchCondition_63_5" title="Not referenced"><span class="token sort_Id">PrefetchCondition</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#PrefetchCond_18_5" id="PrefetchCond_63_25" title="Defined at line 18"><span class="token sort_Id">PrefetchCond</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#PrefetchCondition_16_5" id="PrefetchCondition_63_41" title="Defined at line 16"><span class="token sort_Id">PrefetchCondition</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrefetchWhereOptNone_64_5" title="Not referenced"><span class="token sort_Id">PrefetchWhereOptNone</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#PrefetchWhereOpt_19_5" id="PrefetchWhereOpt_64_28" title="Defined at line 19"><span class="token sort_Id">PrefetchWhereOpt</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrefetchWhere_65_5" title="Not referenced"><span class="token sort_Id">PrefetchWhere</span></span> <span class="operator">:</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="#PrefetchWhereMod_20_5" id="PrefetchWhereMod_65_26" title="Defined at line 20"><span class="token sort_Id">PrefetchWhereMod</span></a></span><span class="operator">)</span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#PrefetchCond_18_5" id="PrefetchCond_65_46" title="Defined at line 18"><span class="token sort_Id">PrefetchCond</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#PrefetchWhereOpt_19_5" id="PrefetchWhereOpt_65_62" title="Defined at line 19"><span class="token sort_Id">PrefetchWhereOpt</span></a></span></span>
    <span class="cons_OpDecl"><span id="Hint_66_5" title="Not referenced"><span class="token sort_Id">Hint</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#PrefetchWhereMod_20_5" id="PrefetchWhereMod_66_12" title="Defined at line 20"><span class="token sort_Id">PrefetchWhereMod</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrefetchEq_67_5" title="Not referenced"><span class="token sort_Id">PrefetchEq</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#PrefetchCondVal_17_5" id="PrefetchCondVal_67_18" title="Defined at line 17"><span class="token sort_Id">PrefetchCondVal</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#PrefetchCondVal_17_5" id="PrefetchCondVal_67_36" title="Defined at line 17"><span class="token sort_Id">PrefetchCondVal</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#PrefetchCond_18_5" id="PrefetchCond_67_55" title="Defined at line 18"><span class="token sort_Id">PrefetchCond</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrefetchNotEq_68_5" title="Not referenced"><span class="token sort_Id">PrefetchNotEq</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#PrefetchCondVal_17_5" id="PrefetchCondVal_68_21" title="Defined at line 17"><span class="token sort_Id">PrefetchCondVal</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#PrefetchCondVal_17_5" id="PrefetchCondVal_68_39" title="Defined at line 17"><span class="token sort_Id">PrefetchCondVal</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#PrefetchCond_18_5" id="PrefetchCond_68_58" title="Defined at line 18"><span class="token sort_Id">PrefetchCond</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrefetchLargerThan_69_5" title="Not referenced"><span class="token sort_Id">PrefetchLargerThan</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#PrefetchCondVal_17_5" id="PrefetchCondVal_69_26" title="Defined at line 17"><span class="token sort_Id">PrefetchCondVal</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#PrefetchCondVal_17_5" id="PrefetchCondVal_69_44" title="Defined at line 17"><span class="token sort_Id">PrefetchCondVal</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#PrefetchCond_18_5" id="PrefetchCond_69_63" title="Defined at line 18"><span class="token sort_Id">PrefetchCond</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrefetchLargerThanOrEqual_70_5" title="Not referenced"><span class="token sort_Id">PrefetchLargerThanOrEqual</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#PrefetchCondVal_17_5" id="PrefetchCondVal_70_33" title="Defined at line 17"><span class="token sort_Id">PrefetchCondVal</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#PrefetchCondVal_17_5" id="PrefetchCondVal_70_51" title="Defined at line 17"><span class="token sort_Id">PrefetchCondVal</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#PrefetchCond_18_5" id="PrefetchCond_70_70" title="Defined at line 18"><span class="token sort_Id">PrefetchCond</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrefetchSmallerThan_71_5" title="Not referenced"><span class="token sort_Id">PrefetchSmallerThan</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#PrefetchCondVal_17_5" id="PrefetchCondVal_71_27" title="Defined at line 17"><span class="token sort_Id">PrefetchCondVal</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#PrefetchCondVal_17_5" id="PrefetchCondVal_71_45" title="Defined at line 17"><span class="token sort_Id">PrefetchCondVal</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#PrefetchCond_18_5" id="PrefetchCond_71_64" title="Defined at line 18"><span class="token sort_Id">PrefetchCond</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrefetchSmallerThanOrEqual_72_5" title="Not referenced"><span class="token sort_Id">PrefetchSmallerThanOrEqual</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#PrefetchCondVal_17_5" id="PrefetchCondVal_72_34" title="Defined at line 17"><span class="token sort_Id">PrefetchCondVal</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#PrefetchCondVal_17_5" id="PrefetchCondVal_72_52" title="Defined at line 17"><span class="token sort_Id">PrefetchCondVal</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#PrefetchCond_18_5" id="PrefetchCond_72_71" title="Defined at line 18"><span class="token sort_Id">PrefetchCond</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrefetchAnd_73_5" title="Not referenced"><span class="token sort_Id">PrefetchAnd</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#PrefetchCond_18_5" id="PrefetchCond_73_19" title="Defined at line 18"><span class="token sort_Id">PrefetchCond</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#PrefetchCond_18_5" id="PrefetchCond_73_34" title="Defined at line 18"><span class="token sort_Id">PrefetchCond</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#PrefetchCond_18_5" id="PrefetchCond_73_50" title="Defined at line 18"><span class="token sort_Id">PrefetchCond</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrefetchOr_74_5" title="Not referenced"><span class="token sort_Id">PrefetchOr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#PrefetchCond_18_5" id="PrefetchCond_74_18" title="Defined at line 18"><span class="token sort_Id">PrefetchCond</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#PrefetchCond_18_5" id="PrefetchCond_74_33" title="Defined at line 18"><span class="token sort_Id">PrefetchCond</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#PrefetchCond_18_5" id="PrefetchCond_74_49" title="Defined at line 18"><span class="token sort_Id">PrefetchCond</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrefetchNot_75_5" title="Not referenced"><span class="token sort_Id">PrefetchNot</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#PrefetchCond_18_5" id="PrefetchCond_75_19" title="Defined at line 18"><span class="token sort_Id">PrefetchCond</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#PrefetchCond_18_5" id="PrefetchCond_75_35" title="Defined at line 18"><span class="token sort_Id">PrefetchCond</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrefetchCondVal2PrefetchCond_76_5" title="Not referenced"><span class="token sort_Id">PrefetchCondVal2PrefetchCond</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#PrefetchCondVal_17_5" id="PrefetchCondVal_76_36" title="Defined at line 17"><span class="token sort_Id">PrefetchCondVal</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#PrefetchCond_18_5" id="PrefetchCond_76_55" title="Defined at line 18"><span class="token sort_Id">PrefetchCond</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrefetchTrue_77_5" title="Not referenced"><span class="token sort_Id">PrefetchTrue</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#PrefetchCondVal_17_5" id="PrefetchCondVal_77_20" title="Defined at line 17"><span class="token sort_Id">PrefetchCondVal</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrefetchFalse_78_5" title="Not referenced"><span class="token sort_Id">PrefetchFalse</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#PrefetchCondVal_17_5" id="PrefetchCondVal_78_21" title="Defined at line 17"><span class="token sort_Id">PrefetchCondVal</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrefetchNull_79_5" title="Not referenced"><span class="token sort_Id">PrefetchNull</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#PrefetchCondVal_17_5" id="PrefetchCondVal_79_20" title="Defined at line 17"><span class="token sort_Id">PrefetchCondVal</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrefetchConst_80_5" title="Not referenced"><span class="token sort_Id">PrefetchConst</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#ConstValue_24_5" id="ConstValue_80_21" title="Defined at ../WebDSL-Action-sig.stx line 24"><span class="token sort_Id">ConstValue</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#PrefetchCondVal_17_5" id="PrefetchCondVal_80_35" title="Defined at line 17"><span class="token sort_Id">PrefetchCondVal</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrefetchCondVar_81_5" title="Not referenced"><span class="token sort_Id">PrefetchCondVar</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#VarId_10_5" id="VarId_81_23" title="Defined at ../WebDSL-Lexical-sig.stx line 10"><span class="token sort_Id">VarId</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#PrefetchCondVal_17_5" id="PrefetchCondVal_81_32" title="Defined at line 17"><span class="token sort_Id">PrefetchCondVal</span></a></span></span>
    <span class="cons_OpDecl"><span id="RelativeFieldAccess_82_5" title="Not referenced"><span class="token sort_Id">RelativeFieldAccess</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#OptSimpleSort_21_5" id="OptSimpleSort_82_27" title="Defined at line 21"><span class="token sort_Id">OptSimpleSort</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#PropertyId_13_5" id="PropertyId_82_43" title="Defined at ../WebDSL-Lexical-sig.stx line 13"><span class="token sort_Id">PropertyId</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#PrefetchCondVal_17_5" id="PrefetchCondVal_82_57" title="Defined at line 17"><span class="token sort_Id">PrefetchCondVal</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrefetchMul_83_5" title="Not referenced"><span class="token sort_Id">PrefetchMul</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#PrefetchCondVal_17_5" id="PrefetchCondVal_83_19" title="Defined at line 17"><span class="token sort_Id">PrefetchCondVal</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#PrefetchCondVal_17_5" id="PrefetchCondVal_83_37" title="Defined at line 17"><span class="token sort_Id">PrefetchCondVal</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#PrefetchCondVal_17_5" id="PrefetchCondVal_83_56" title="Defined at line 17"><span class="token sort_Id">PrefetchCondVal</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrefetchDiv_84_5" title="Not referenced"><span class="token sort_Id">PrefetchDiv</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#PrefetchCondVal_17_5" id="PrefetchCondVal_84_19" title="Defined at line 17"><span class="token sort_Id">PrefetchCondVal</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#PrefetchCondVal_17_5" id="PrefetchCondVal_84_37" title="Defined at line 17"><span class="token sort_Id">PrefetchCondVal</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#PrefetchCondVal_17_5" id="PrefetchCondVal_84_56" title="Defined at line 17"><span class="token sort_Id">PrefetchCondVal</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrefetchMod_85_5" title="Not referenced"><span class="token sort_Id">PrefetchMod</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#PrefetchCondVal_17_5" id="PrefetchCondVal_85_19" title="Defined at line 17"><span class="token sort_Id">PrefetchCondVal</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#PrefetchCondVal_17_5" id="PrefetchCondVal_85_37" title="Defined at line 17"><span class="token sort_Id">PrefetchCondVal</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#PrefetchCondVal_17_5" id="PrefetchCondVal_85_56" title="Defined at line 17"><span class="token sort_Id">PrefetchCondVal</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrefetchAdd_86_5" title="Not referenced"><span class="token sort_Id">PrefetchAdd</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#PrefetchCondVal_17_5" id="PrefetchCondVal_86_19" title="Defined at line 17"><span class="token sort_Id">PrefetchCondVal</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#PrefetchCondVal_17_5" id="PrefetchCondVal_86_37" title="Defined at line 17"><span class="token sort_Id">PrefetchCondVal</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#PrefetchCondVal_17_5" id="PrefetchCondVal_86_56" title="Defined at line 17"><span class="token sort_Id">PrefetchCondVal</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrefetchSub_87_5" title="Not referenced"><span class="token sort_Id">PrefetchSub</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#PrefetchCondVal_17_5" id="PrefetchCondVal_87_19" title="Defined at line 17"><span class="token sort_Id">PrefetchCondVal</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#PrefetchCondVal_17_5" id="PrefetchCondVal_87_37" title="Defined at line 17"><span class="token sort_Id">PrefetchCondVal</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#PrefetchCondVal_17_5" id="PrefetchCondVal_87_56" title="Defined at line 17"><span class="token sort_Id">PrefetchCondVal</span></a></span></span>
    <span class="cons_OpDecl"><span id="OptSimpleSortNone_88_5" title="Not referenced"><span class="token sort_Id">OptSimpleSortNone</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#OptSimpleSort_21_5" id="OptSimpleSort_88_25" title="Defined at line 21"><span class="token sort_Id">OptSimpleSort</span></a></span></span>
    <span class="cons_OpDecl"><span id="OptSimpleSortSome_89_5" title="Not referenced"><span class="token sort_Id">OptSimpleSortSome</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#SimpleSortLex_42_5" id="SimpleSortLex_89_25" title="Defined at ../WebDSL-Lexical-sig.stx line 42"><span class="token sort_Id">SimpleSortLex</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#OptSimpleSort_21_5" id="OptSimpleSort_89_42" title="Defined at line 21"><span class="token sort_Id">OptSimpleSort</span></a></span></span>
</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
