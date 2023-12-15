---
title: WebDSL-Core.sdf3
hide:
  - toc
---

# `WebDSL-Core.sdf3`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-Core.sdf3]

[pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-Core.sdf3]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/syntax/WebDSL-Core.sdf3 "The source file on GitHub"

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
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <button class="modal-open" id="WebDSL-Core_1_8" title="Multi-file references" data-urls="../WebDSL-AccessControl.sdf3/#WebDSL-Core_5_3 line 5; ../WebDSL-Action.sdf3/#WebDSL-Core_4_3 line 4; ../WebDSL-Ajax.sdf3/#WebDSL-Core_7_3 line 7; ../WebDSL-Attributes.sdf3/#WebDSL-Core_6_3 line 6; ../WebDSL-DataModel.sdf3/#WebDSL-Core_5_3 line 5; ../WebDSL-DataValidation.sdf3/#WebDSL-Core_8_3 line 8; ../WebDSL-Dispatch.sdf3/#WebDSL-Core_5_3 line 5; ../WebDSL-EntityDerive.sdf3/#WebDSL-Core_5_3 line 5; ../WebDSL-Exception.sdf3/#WebDSL-Core_5_3 line 5; ../WebDSL-Expand.sdf3/#WebDSL-Core_6_3 line 6; ../WebDSL-Generated.sdf3/#WebDSL-Core_4_3 line 4; ../WebDSL-Native.sdf3/#WebDSL-Core_4_3 line 4; ../WebDSL-Prefetch.sdf3/#WebDSL-Core_5_3 line 5; ../WebDSL-Routing.sdf3/#WebDSL-Core_4_3 line 4; ../WebDSL-Search.sdf3/#WebDSL-Core_5_3 line 5; ../WebDSL-Service.sdf3/#WebDSL-Core_5_3 line 5; ../webdsl-statix.sdf3/#WebDSL-Core_8_3 line 8; ../WebDSL-Test.sdf3/#WebDSL-Core_6_3 line 6; ../WebDSL-TimeInterval.sdf3/#WebDSL-Core_5_3 line 5; ../WebDSL-Type.sdf3/#WebDSL-Core_8_3 line 8; ../WebDSL-UI.sdf3/#WebDSL-Core_6_3 line 6">WebDSL-Core</button>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3/#WebDSL-Action_1_8" id="WebDSL-Action_4_3" title="Defined at ../WebDSL-Action.sdf3 line 1">WebDSL-Action</a>
  <a href="../WebDSL-DataModel.sdf3/#WebDSL-DataModel_1_8" id="WebDSL-DataModel_5_3" title="Defined at ../WebDSL-DataModel.sdf3 line 1">WebDSL-DataModel</a>
  <a href="../WebDSL-Lexical.sdf3/#WebDSL-Lexical_1_8" id="WebDSL-Lexical_6_3" title="Defined at ../WebDSL-Lexical.sdf3 line 1">WebDSL-Lexical</a>

<span class="keyword">context-free sorts</span>

  <button class="modal-open" id="FormalArg_10_3" title="Multi-file references" data-urls="#FormalArg_37_35 line 37; ../WebDSL-AccessControl.sdf3/#FormalArg_54_23 line 54, 103; ../WebDSL-Dispatch.sdf3/#FormalArg_33_32 line 33; ../WebDSL-Service.sdf3/#FormalArg_17_34 line 17; ../WebDSL-UI.sdf3/#FormalArg_36_41 line 36, 271">FormalArg</button> <button class="modal-open" id="OptFormalArgs_10_13" title="Multi-file references" data-urls="../WebDSL-AccessControl.sdf3/#OptFormalArgs_37_21 line 37, 46, 84; ../WebDSL-Action.sdf3/#OptFormalArgs_18_23 line 18, 34; ../WebDSL-Dispatch.sdf3/#OptFormalArgs_24_11 line 24; ../WebDSL-EntityDerive.sdf3/#OptFormalArgs_18_56 line 18; ../WebDSL-Routing.sdf3/#OptFormalArgs_19_14 line 19, 22; ../WebDSL-UI.sdf3/#OptFormalArgs_28_30 line 28, 42, 47, 52, 444">OptFormalArgs</button> <a href="#FunctionSortParams_20_34" id="FunctionSortParams_10_27" title="Referenced at line 20">FunctionSortParams</a> <a href="#FunctionSortParam_29_48" id="FunctionSortParam_10_46" title="Referenced at line 29">FunctionSortParam</a> <a href="#FunctionSortReturn_20_55" id="FunctionSortReturn_10_64" title="Referenced at line 20">FunctionSortReturn</a> <a href="../WebDSL-EntityDerive.sdf3/#OptCallArgs_16_65" id="OptCallArgs_10_83" title="Referenced at ../WebDSL-EntityDerive.sdf3 line 16">OptCallArgs</a> <button class="modal-open" id="Sort_10_95" title="Multi-file references" data-urls="#Sort_15_45 line 15, 16, 17, 18, 19, 31, 32, 33, 36; ../WebDSL-Action.sdf3/#Sort_21_29 line 21, 35, 36, 37, 80, 83, 128, 150, 156, 239, 240, 252, 253, 308, 310, 311, 313, 315; ../WebDSL-DataModel.sdf3/#Sort_48_20 line 48, 51, 54, 57, 66, 69, 72, 75, 91, 94; ../WebDSL-Prefetch.sdf3/#Sort_38_21 line 38, 40">Sort</button>

<span class="keyword">context-free syntax</span> <span class="layout">%% Types</span>

  <button class="modal-open" id="Sort_14_3" title="Multi-file references" data-urls="#Sort_15_45 line 15, 16, 17, 18, 19, 31, 32, 33, 36; ../WebDSL-Action.sdf3/#Sort_21_29 line 21, 35, 36, 37, 80, 83, 128, 150, 156, 239, 240, 252, 253, 308, 310, 311, 313, 315; ../WebDSL-DataModel.sdf3/#Sort_48_20 line 48, 51, 54, 57, 66, 69, 72, 75, 91, 94; ../WebDSL-Prefetch.sdf3/#Sort_38_21 line 38, 40">Sort</button>.<span class="cons_Constructor"><span id="SimpleSort_14_8" title="Not referenced">SimpleSort</span></span> = &lt;&lt;<a href="#SimpleSortLex_24_3" id="SimpleSortLex_14_23" title="Defined at line 24">SimpleSortLex</a>&gt;&gt;
  <button class="modal-open" id="Sort_15_3" title="Multi-file references" data-urls="#Sort_15_45 line 15, 16, 17, 18, 19, 31, 32, 33, 36; ../WebDSL-Action.sdf3/#Sort_21_29 line 21, 35, 36, 37, 80, 83, 128, 150, 156, 239, 240, 252, 253, 308, 310, 311, 313, 315; ../WebDSL-DataModel.sdf3/#Sort_48_20 line 48, 51, 54, 57, 66, 69, 72, 75, 91, 94; ../WebDSL-Prefetch.sdf3/#Sort_38_21 line 38, 40">Sort</button>.<span class="cons_Constructor"><span id="GenericSort_15_8" title="Not referenced">GenericSort</span></span> = &lt;&lt;<a href="../WebDSL-Lexical.sdf3/#GenericSortLex_167_17" id="GenericSortLex_15_24" title="Defined at ../WebDSL-Lexical.sdf3 line 167, 172, 173">GenericSortLex</a>&gt; \&lt; &lt;{<a href="#Sort_10_95" id="Sort_15_45" title="Defined at line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a> <span class="cons_Lit">","</span>}+&gt; \&gt;&gt;
  <button class="modal-open" id="Sort_16_3" title="Multi-file references" data-urls="#Sort_15_45 line 15, 16, 17, 18, 19, 31, 32, 33, 36; ../WebDSL-Action.sdf3/#Sort_21_29 line 21, 35, 36, 37, 80, 83, 128, 150, 156, 239, 240, 252, 253, 308, 310, 311, 313, 315; ../WebDSL-DataModel.sdf3/#Sort_48_20 line 48, 51, 54, 57, 66, 69, 72, 75, 91, 94; ../WebDSL-Prefetch.sdf3/#Sort_38_21 line 38, 40">Sort</button>.<span class="cons_Constructor"><span id="ListSort_16_8" title="Not referenced">ListSort</span></span> = &lt;<span class="cons_String">[</span> &lt;<a href="#Sort_10_95" id="Sort_16_23" title="Defined at line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>&gt; <span class="cons_String">]</span>&gt;
  <button class="modal-open" id="Sort_17_3" title="Multi-file references" data-urls="#Sort_15_45 line 15, 16, 17, 18, 19, 31, 32, 33, 36; ../WebDSL-Action.sdf3/#Sort_21_29 line 21, 35, 36, 37, 80, 83, 128, 150, 156, 239, 240, 252, 253, 308, 310, 311, 313, 315; ../WebDSL-DataModel.sdf3/#Sort_48_20 line 48, 51, 54, 57, 66, 69, 72, 75, 91, 94; ../WebDSL-Prefetch.sdf3/#Sort_38_21 line 38, 40">Sort</button>.<span class="cons_Constructor"><span id="SetSort_17_8" title="Not referenced">SetSort</span></span> = &lt;<span class="cons_String">{</span> &lt;<a href="#Sort_10_95" id="Sort_17_22" title="Defined at line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>&gt; <span class="cons_String">}</span>&gt;
  <button class="modal-open" id="Sort_18_3" title="Multi-file references" data-urls="#Sort_15_45 line 15, 16, 17, 18, 19, 31, 32, 33, 36; ../WebDSL-Action.sdf3/#Sort_21_29 line 21, 35, 36, 37, 80, 83, 128, 150, 156, 239, 240, 252, 253, 308, 310, 311, 313, 315; ../WebDSL-DataModel.sdf3/#Sort_48_20 line 48, 51, 54, 57, 66, 69, 72, 75, 91, 94; ../WebDSL-Prefetch.sdf3/#Sort_38_21 line 38, 40">Sort</button>.<span class="cons_Constructor"><span id="RefSort_18_8" title="Not referenced">RefSort</span></span> = &lt;<span class="cons_String">ref</span> &lt;<a href="#Sort_10_95" id="Sort_18_24" title="Defined at line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>&gt;&gt;
  <button class="modal-open" id="Sort_19_3" title="Multi-file references" data-urls="#Sort_15_45 line 15, 16, 17, 18, 19, 31, 32, 33, 36; ../WebDSL-Action.sdf3/#Sort_21_29 line 21, 35, 36, 37, 80, 83, 128, 150, 156, 239, 240, 252, 253, 308, 310, 311, 313, 315; ../WebDSL-DataModel.sdf3/#Sort_48_20 line 48, 51, 54, 57, 66, 69, 72, 75, 91, 94; ../WebDSL-Prefetch.sdf3/#Sort_38_21 line 38, 40">Sort</button>.<span class="cons_Constructor"><span id="RefSortAlt_19_8" title="Not referenced">RefSortAlt</span></span> = &lt;<span class="cons_String">Ref</span> \&lt; &lt;<a href="#Sort_10_95" id="Sort_19_30" title="Defined at line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>&gt; \&gt;&gt;
  <button class="modal-open" id="Sort_20_3" title="Multi-file references" data-urls="#Sort_15_45 line 15, 16, 17, 18, 19, 31, 32, 33, 36; ../WebDSL-Action.sdf3/#Sort_21_29 line 21, 35, 36, 37, 80, 83, 128, 150, 156, 239, 240, 252, 253, 308, 310, 311, 313, 315; ../WebDSL-DataModel.sdf3/#Sort_48_20 line 48, 51, 54, 57, 66, 69, 72, 75, 91, 94; ../WebDSL-Prefetch.sdf3/#Sort_38_21 line 38, 40">Sort</button>.<span class="cons_Constructor"><span id="FunctionSort_20_8" title="Not referenced">FunctionSort</span></span> = &lt;<span class="cons_String">function</span> &lt;<a href="#FunctionSortParams_10_27" id="FunctionSortParams_20_34" title="Defined at line 10, 29, 30">FunctionSortParams</a>&gt; &lt;<a href="#FunctionSortReturn_10_64" id="FunctionSortReturn_20_55" title="Defined at line 10, 33, 34">FunctionSortReturn</a>&gt;&gt;

<span class="keyword">lexical syntax</span>

  <button class="modal-open" id="SimpleSortLex_24_3" title="Multi-file references" data-urls="#SimpleSortLex_14_23 line 14; ../WebDSL-Prefetch.sdf3/#SimpleSortLex_31_46 line 31, 74">SimpleSortLex</button> = <span class="cons_Lit">"function"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free syntax</span>

  <span class="layout">%% function type; optionally specify (named) args and return type</span>
  <a href="#FunctionSortParams_20_34" id="FunctionSortParams_29_3" title="Referenced at line 20">FunctionSortParams</a>.<span class="cons_Constructor"><span id="FunctionSortParams_29_22" title="Not referenced">FunctionSortParams</span></span> = &lt;<span class="cons_String">(</span> &lt;{<a href="#FunctionSortParam_10_46" id="FunctionSortParam_29_48" title="Defined at line 10, 31, 32">FunctionSortParam</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;
  <a href="#FunctionSortParams_20_34" id="FunctionSortParams_30_3" title="Referenced at line 20">FunctionSortParams</a>.<span class="cons_Constructor"><span id="FunctionSortParamsNone_30_22" title="Not referenced">FunctionSortParamsNone</span></span> = &lt;&gt;
  <a href="#FunctionSortParam_29_48" id="FunctionSortParam_31_3" title="Referenced at line 29">FunctionSortParam</a>.<span class="cons_Constructor"><span id="UnnamedArg_31_21" title="Not referenced">UnnamedArg</span></span> = <a href="#Sort_10_95" id="Sort_31_34" title="Defined at line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>
  <a href="#FunctionSortParam_29_48" id="FunctionSortParam_32_3" title="Referenced at line 29">FunctionSortParam</a>.<span class="cons_Constructor"><span id="NamedArg_32_21" title="Not referenced">NamedArg</span></span> = &lt;&lt;<a href="../WebDSL-Action.sdf3/#VarId_41_3" id="VarId_32_34" title="Defined at ../WebDSL-Action.sdf3 line 41, 61, 206, 244, 245, 264, 265, 294, 295, 296">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="#Sort_10_95" id="Sort_32_44" title="Defined at line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>&gt;&gt;
  <a href="#FunctionSortReturn_20_55" id="FunctionSortReturn_33_3" title="Referenced at line 20">FunctionSortReturn</a>.<span class="cons_Constructor"><span id="FunctionSortReturn_33_22" title="Not referenced">FunctionSortReturn</span></span> = &lt;<span class="cons_String">:</span> &lt;<a href="#Sort_10_95" id="Sort_33_47" title="Defined at line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>&gt;&gt;
  <a href="#FunctionSortReturn_20_55" id="FunctionSortReturn_34_3" title="Referenced at line 20">FunctionSortReturn</a>.<span class="cons_Constructor"><span id="FunctionSortReturnNone_34_22" title="Not referenced">FunctionSortReturnNone</span></span> = &lt;&gt;

  <button class="modal-open" id="FormalArg_36_3" title="Multi-file references" data-urls="#FormalArg_37_35 line 37; ../WebDSL-AccessControl.sdf3/#FormalArg_54_23 line 54, 103; ../WebDSL-Dispatch.sdf3/#FormalArg_33_32 line 33; ../WebDSL-Service.sdf3/#FormalArg_17_34 line 17; ../WebDSL-UI.sdf3/#FormalArg_36_41 line 36, 271">FormalArg</button>.<span class="cons_Constructor"><span id="Arg_36_13" title="Not referenced">Arg</span></span> = &lt;&lt;<a href="../WebDSL-Action.sdf3/#VarId_41_3" id="VarId_36_21" title="Defined at ../WebDSL-Action.sdf3 line 41, 61, 206, 244, 245, 264, 265, 294, 295, 296">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="#Sort_10_95" id="Sort_36_31" title="Defined at line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>&gt;&gt;
  <button class="modal-open" id="OptFormalArgs_37_3" title="Multi-file references" data-urls="../WebDSL-AccessControl.sdf3/#OptFormalArgs_37_21 line 37, 46, 84; ../WebDSL-Action.sdf3/#OptFormalArgs_18_23 line 18, 34; ../WebDSL-Dispatch.sdf3/#OptFormalArgs_24_11 line 24; ../WebDSL-EntityDerive.sdf3/#OptFormalArgs_18_56 line 18; ../WebDSL-Routing.sdf3/#OptFormalArgs_19_14 line 19, 22; ../WebDSL-UI.sdf3/#OptFormalArgs_28_30 line 28, 42, 47, 52, 444">OptFormalArgs</button>.<span class="cons_Constructor"><span id="FormalArgs_37_17" title="Not referenced">FormalArgs</span></span> = &lt;<span class="cons_String">(</span> &lt;{<a href="#FormalArg_10_3" id="FormalArg_37_35" title="Defined at line 10, 36">FormalArg</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;
  <button class="modal-open" id="OptFormalArgs_38_3" title="Multi-file references" data-urls="../WebDSL-AccessControl.sdf3/#OptFormalArgs_37_21 line 37, 46, 84; ../WebDSL-Action.sdf3/#OptFormalArgs_18_23 line 18, 34; ../WebDSL-Dispatch.sdf3/#OptFormalArgs_24_11 line 24; ../WebDSL-EntityDerive.sdf3/#OptFormalArgs_18_56 line 18; ../WebDSL-Routing.sdf3/#OptFormalArgs_19_14 line 19, 22; ../WebDSL-UI.sdf3/#OptFormalArgs_28_30 line 28, 42, 47, 52, 444">OptFormalArgs</button>.<span class="cons_Constructor"><span id="OptFormalArgsNone_38_17" title="Not referenced">OptFormalArgsNone</span></span> = &lt;&gt;

  <a href="../WebDSL-EntityDerive.sdf3/#OptCallArgs_16_65" id="OptCallArgs_40_3" title="Referenced at ../WebDSL-EntityDerive.sdf3 line 16">OptCallArgs</a>.<span class="cons_Constructor"><span id="CallArgs_40_15" title="Not referenced">CallArgs</span></span> = &lt;<span class="cons_String">(</span> &lt;{<a href="../WebDSL-Action.sdf3/#Exp_34_3" id="Exp_40_31" title="Defined at ../WebDSL-Action.sdf3 line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;
  <a href="../WebDSL-EntityDerive.sdf3/#OptCallArgs_16_65" id="OptCallArgs_41_3" title="Referenced at ../WebDSL-EntityDerive.sdf3 line 16">OptCallArgs</a>.<span class="cons_Constructor"><span id="OptCallArgsNone_41_15" title="Not referenced">OptCallArgsNone</span></span> = &lt;&gt;

<span class="keyword">context-free sorts</span>

  <a href="../webdsl-statix.sdf3/#Unit_32_3" id="Unit_45_3" title="Referenced at ../webdsl-statix.sdf3 line 32">Unit</a> <a href="#Section_56_6" id="Section_45_8" title="Referenced at line 56, 61, 67, 72, 78, 83, 89, 94">Section</a> <a href="#Definition_49_60" id="Definition_45_16" title="Referenced at line 49, 55, 66, 77, 88">Definition</a> <a href="#EnumValue_120_9" id="EnumValue_45_27" title="Referenced at line 120">EnumValue</a>

<span class="keyword">syntax</span>

  <a href="#Section_56_6" id="Section_49_3" title="Referenced at line 56, 61, 67, 72, 78, 83, 89, 94">Section</a><span class="keyword">-CF</span>.<span class="cons_Constructor"><span id="Section_49_14" title="Not referenced">Section</span></span> = <span class="cons_Lit">"section"</span> <a href="../WebDSL-Lexical.sdf3/#SectionName_5_70" id="SectionName_49_34" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 19">SectionName</a><span class="keyword">-CF LAYOUT</span>?<span class="keyword">-CF</span> <a href="#Definition_45_16" id="Definition_49_60" title="Defined at line 45, 99, 103, 111, 114, 118, 131">Definition</a>*<span class="keyword">-CF</span>

<span class="keyword">context-free syntax</span>

  <a href="../webdsl-statix.sdf3/#Unit_32_3" id="Unit_53_3" title="Referenced at ../webdsl-statix.sdf3 line 32">Unit</a>.<span class="cons_Constructor"><span id="ApplicationDefs_53_8" title="Not referenced">ApplicationDefs</span></span> = &lt;
    <span class="cons_String">application</span> &lt;<a href="../WebDSL-Lexical.sdf3/#QId_5_3" id="QId_54_18" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 9, 10">QId</a>&gt;
      &lt;<a href="#Definition_45_16" id="Definition_55_8" title="Defined at line 45, 99, 103, 111, 114, 118, 131">Definition</a>+&gt;
    &lt;<a href="#Section_45_8" id="Section_56_6" title="Defined at line 45, 49">Section</a>*&gt;
  &gt;

  <a href="../webdsl-statix.sdf3/#Unit_32_3" id="Unit_59_3" title="Referenced at ../webdsl-statix.sdf3 line 32">Unit</a>.<span class="cons_Constructor"><span id="Application_59_8" title="Not referenced">Application</span></span> = &lt;
    <span class="cons_String">application</span> &lt;<a href="../WebDSL-Lexical.sdf3/#QId_5_3" id="QId_60_18" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 9, 10">QId</a>&gt;
    &lt;<a href="#Section_45_8" id="Section_61_6" title="Defined at line 45, 49">Section</a>*&gt;
  &gt;

  <a href="../webdsl-statix.sdf3/#Unit_32_3" id="Unit_64_3" title="Referenced at ../webdsl-statix.sdf3 line 32">Unit</a>.<span class="cons_Constructor"><span id="ModuleDefs_64_8" title="Not referenced">ModuleDefs</span></span> = &lt;
    <span class="cons_String">module</span> &lt;<a href="../WebDSL-Lexical.sdf3/#ModuleName_23_3" id="ModuleName_65_13" title="Defined at ../WebDSL-Lexical.sdf3 line 23, 33">ModuleName</a>&gt;
      &lt;<a href="#Definition_45_16" id="Definition_66_8" title="Defined at line 45, 99, 103, 111, 114, 118, 131">Definition</a>+&gt;
    &lt;<a href="#Section_45_8" id="Section_67_6" title="Defined at line 45, 49">Section</a>*&gt;
  &gt;

  <a href="../webdsl-statix.sdf3/#Unit_32_3" id="Unit_70_3" title="Referenced at ../webdsl-statix.sdf3 line 32">Unit</a>.<span class="cons_Constructor"><span id="Module_70_8" title="Not referenced">Module</span></span> = &lt;
    <span class="cons_String">module</span> &lt;<a href="../WebDSL-Lexical.sdf3/#ModuleName_23_3" id="ModuleName_71_13" title="Defined at ../WebDSL-Lexical.sdf3 line 23, 33">ModuleName</a>&gt;
    &lt;<a href="#Section_45_8" id="Section_72_6" title="Defined at line 45, 49">Section</a>*&gt;
  &gt;

  <a href="../webdsl-statix.sdf3/#Unit_32_3" id="Unit_75_3" title="Referenced at ../webdsl-statix.sdf3 line 32">Unit</a>.<span class="cons_Constructor"><span id="BuiltInDefs_75_8" title="Not referenced">BuiltInDefs</span></span> = &lt;
    <span class="cons_String">built-in</span>
      &lt;<a href="#Definition_45_16" id="Definition_77_8" title="Defined at line 45, 99, 103, 111, 114, 118, 131">Definition</a>+&gt;
    &lt;<a href="#Section_45_8" id="Section_78_6" title="Defined at line 45, 49">Section</a>*&gt;
  &gt;

  <a href="../webdsl-statix.sdf3/#Unit_32_3" id="Unit_81_3" title="Referenced at ../webdsl-statix.sdf3 line 32">Unit</a>.<span class="cons_Constructor"><span id="BuiltIn_81_8" title="Not referenced">BuiltIn</span></span> = &lt;
    <span class="cons_String">built-in</span>
    &lt;<a href="#Section_45_8" id="Section_83_6" title="Defined at line 45, 49">Section</a>*&gt;
  &gt;

  <a href="../webdsl-statix.sdf3/#Unit_32_3" id="Unit_86_3" title="Referenced at ../webdsl-statix.sdf3 line 32">Unit</a>.<span class="cons_Constructor"><span id="BuiltInLibraryDefs_86_8" title="Not referenced">BuiltInLibraryDefs</span></span> = &lt;
    <span class="cons_String">built-in-library</span>
      &lt;<a href="#Definition_45_16" id="Definition_88_8" title="Defined at line 45, 99, 103, 111, 114, 118, 131">Definition</a>+&gt;
    &lt;<a href="#Section_45_8" id="Section_89_6" title="Defined at line 45, 49">Section</a>*&gt;
  &gt;

  <a href="../webdsl-statix.sdf3/#Unit_32_3" id="Unit_92_3" title="Referenced at ../webdsl-statix.sdf3 line 32">Unit</a>.<span class="cons_Constructor"><span id="BuiltInLibrary_92_8" title="Not referenced">BuiltInLibrary</span></span> = &lt;
    <span class="cons_String">built-in-library</span>
    &lt;<a href="#Section_45_8" id="Section_94_6" title="Defined at line 45, 49">Section</a>*&gt;
  &gt;

  <a href="../webdsl-statix.sdf3/#Unit_32_3" id="Unit_97_3" title="Referenced at ../webdsl-statix.sdf3 line 32">Unit</a>.<span class="cons_Constructor"><span id="EmptyUnit_97_8" title="Not referenced">EmptyUnit</span></span> = &lt;&gt;

  <a href="#Definition_49_60" id="Definition_99_3" title="Referenced at line 49, 55, 66, 77, 88">Definition</a>.<span class="cons_Constructor"><span id="Imports_99_14" title="Not referenced">Imports</span></span> = &lt;
    <span class="cons_String">imports</span> &lt;<a href="#ImportName_107_3" id="ImportName_100_14" title="Defined at line 107">ImportName</a>&gt;
  &gt;

  <a href="#Definition_49_60" id="Definition_103_3" title="Referenced at line 49, 55, 66, 77, 88">Definition</a>.<span class="cons_Constructor"><span id="ImportsBuiltIn_103_14" title="Not referenced">ImportsBuiltIn</span></span> = &lt;
    <span class="cons_String">imports</span> <span class="cons_String">built-in</span>
  &gt;

  <a href="#ImportName_100_14" id="ImportName_107_3" title="Referenced at line 100">ImportName</a> = <span class="cons_Lit">"built-in"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free syntax</span>

  <a href="#Definition_49_60" id="Definition_111_3" title="Referenced at line 49, 55, 66, 77, 88">Definition</a>.<span class="cons_Constructor"><span id="Description_111_14" title="Not referenced">Description</span></span> = &lt;
    <span class="cons_String">description</span> <span class="cons_String">{</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Word_155_3" id="Word_112_20" title="Defined at ../WebDSL-Lexical.sdf3 line 155, 159">Word</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#Definition_49_60" id="Definition_114_3" title="Referenced at line 49, 55, 66, 77, 88">Definition</a>.<span class="cons_Constructor"><span id="Note_114_14" title="Not referenced">Note</span></span> = &lt;
    <span class="cons_String">note</span> <span class="cons_String">{</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Word_155_3" id="Word_115_13" title="Defined at ../WebDSL-Lexical.sdf3 line 155, 159">Word</a>*&gt; <span class="cons_String">}</span>
  &gt;

  <a href="#Definition_49_60" id="Definition_118_3" title="Referenced at line 49, 55, 66, 77, 88">Definition</a>.<span class="cons_Constructor"><span id="Enum_118_14" title="Not referenced">Enum</span></span> = &lt;
    <span class="cons_String">enum</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_119_11" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">{</span>
      &lt;{<a href="#EnumValue_45_27" id="EnumValue_120_9" title="Defined at line 45, 123">EnumValue</a> <span class="cons_Lit">","</span>}*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#EnumValue_120_9" id="EnumValue_123_3" title="Referenced at line 120">EnumValue</a>.<span class="cons_Constructor"><span id="EnumValue_123_13" title="Not referenced">EnumValue</span></span> = &lt;&lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_123_27" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">(</span> &lt;<a href="../WebDSL-Lexical.sdf3/#String_69_3" id="String_123_34" title="Defined at ../WebDSL-Lexical.sdf3 line 69, 75">String</a>&gt; <span class="cons_String">)</span>&gt;

<span class="keyword">context-free sorts</span>

  <a href="#Action_131_16" id="Action_127_3" title="Referenced at line 131">Action</a> <span id="Statement_127_10" title="Not referenced">Statement</span>

<span class="keyword">context-free syntax</span>

  <a href="#Definition_49_60" id="Definition_131_3" title="Referenced at line 49, 55, 66, 77, 88">Definition</a> = <a href="#Action_127_3" id="Action_131_16" title="Defined at line 127">Action</a>

</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
