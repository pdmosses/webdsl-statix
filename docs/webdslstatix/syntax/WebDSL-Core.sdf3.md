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
<td class="code"><pre><code><span class="keyword">module</span> <button class="modal-open" id="WebDSL-Core_1_8" title="a definition with multiple references" data-urls="../WebDSL-AccessControl.sdf3/#WebDSL-Core line 5_3; ../WebDSL-Action.sdf3/#WebDSL-Core line 4_3; ../WebDSL-Ajax.sdf3/#WebDSL-Core line 7_3; ../WebDSL-Attributes.sdf3/#WebDSL-Core line 6_3; ../WebDSL-DataModel.sdf3/#WebDSL-Core line 5_3; ../WebDSL-DataValidation.sdf3/#WebDSL-Core line 8_3; ../WebDSL-Dispatch.sdf3/#WebDSL-Core line 5_3; ../WebDSL-EntityDerive.sdf3/#WebDSL-Core line 5_3; ../WebDSL-Exception.sdf3/#WebDSL-Core line 5_3; ../WebDSL-Expand.sdf3/#WebDSL-Core line 6_3; ../WebDSL-Generated.sdf3/#WebDSL-Core line 4_3; ../WebDSL-Native.sdf3/#WebDSL-Core line 4_3; ../WebDSL-Prefetch.sdf3/#WebDSL-Core line 5_3; ../WebDSL-Routing.sdf3/#WebDSL-Core line 4_3; ../WebDSL-Search.sdf3/#WebDSL-Core line 5_3; ../WebDSL-Service.sdf3/#WebDSL-Core line 5_3; ../webdsl-statix.sdf3/#WebDSL-Core line 8_3; ../WebDSL-Test.sdf3/#WebDSL-Core line 6_3; ../WebDSL-TimeInterval.sdf3/#WebDSL-Core line 5_3; ../WebDSL-Type.sdf3/#WebDSL-Core line 8_3; ../WebDSL-UI.sdf3/#WebDSL-Core line 6_3">WebDSL-Core</button>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3/#WebDSL-Action_1_8" id="WebDSL-Action_4_3" title="a reference to a single-file definition">WebDSL-Action</a>
  <a href="../WebDSL-DataModel.sdf3/#WebDSL-DataModel_1_8" id="WebDSL-DataModel_5_3" title="a reference to a single-file definition">WebDSL-DataModel</a>
  <a href="../WebDSL-Lexical.sdf3/#WebDSL-Lexical_1_8" id="WebDSL-Lexical_6_3" title="a reference to a single-file definition">WebDSL-Lexical</a>

<span class="keyword">context-free sorts</span>

  <button class="modal-open" id="FormalArg_10_3" title="a definition with multiple references" data-urls="#FormalArg line 37_35; ../WebDSL-AccessControl.sdf3/#FormalArg line 54_23, 103_33; ../WebDSL-Dispatch.sdf3/#FormalArg line 33_32; ../WebDSL-Service.sdf3/#FormalArg line 17_34; ../WebDSL-UI.sdf3/#FormalArg line 36_41, 271_26">FormalArg</button> <button class="modal-open" id="OptFormalArgs_10_13" title="a definition with multiple references" data-urls="../WebDSL-AccessControl.sdf3/#OptFormalArgs line 37_21, 46_21, 84_21; ../WebDSL-Action.sdf3/#OptFormalArgs line 18_23, 34_32; ../WebDSL-Dispatch.sdf3/#OptFormalArgs line 24_11; ../WebDSL-EntityDerive.sdf3/#OptFormalArgs line 18_56; ../WebDSL-Routing.sdf3/#OptFormalArgs line 19_14, 22_16; ../WebDSL-UI.sdf3/#OptFormalArgs line 28_30, 42_32, 47_40, 52_29, 444_51">OptFormalArgs</button> <a href="#FunctionSortParams_20_34" id="FunctionSortParams_10_27" title="a definition with a single reference">FunctionSortParams</a> <a href="#FunctionSortParam_29_48" id="FunctionSortParam_10_46" title="a definition with a single reference">FunctionSortParam</a> <a href="#FunctionSortReturn_20_55" id="FunctionSortReturn_10_64" title="a definition with a single reference">FunctionSortReturn</a> <a href="../WebDSL-EntityDerive.sdf3/#OptCallArgs_16_65" id="OptCallArgs_10_83" title="a definition with a single reference">OptCallArgs</a> <button class="modal-open" id="Sort_10_95" title="a definition with multiple references" data-urls="#Sort line 15_45, 16_23, 17_22, 18_24, 19_30, 31_34, 32_44, 33_47, 36_31; ../WebDSL-Action.sdf3/#Sort line 21_29, 35_45, 36_49, 37_56, 80_20, 83_20, 128_6, 150_22, 156_22, 239_37, 240_35, 252_26, 253_25, 308_67, 310_59, 311_59, 313_59, 315_59; ../WebDSL-DataModel.sdf3/#Sort line 48_20, 51_20, 54_20, 57_20, 66_28, 69_28, 72_28, 75_28, 91_30, 94_30; ../WebDSL-Prefetch.sdf3/#Sort line 38_21, 40_43">Sort</button>

<span class="keyword">context-free syntax</span> <span class="layout">%% Types</span>

  <button class="modal-open" id="Sort_14_3" title="a definition with multiple references" data-urls="#Sort line 15_45, 16_23, 17_22, 18_24, 19_30, 31_34, 32_44, 33_47, 36_31; ../WebDSL-Action.sdf3/#Sort line 21_29, 35_45, 36_49, 37_56, 80_20, 83_20, 128_6, 150_22, 156_22, 239_37, 240_35, 252_26, 253_25, 308_67, 310_59, 311_59, 313_59, 315_59; ../WebDSL-DataModel.sdf3/#Sort line 48_20, 51_20, 54_20, 57_20, 66_28, 69_28, 72_28, 75_28, 91_30, 94_30; ../WebDSL-Prefetch.sdf3/#Sort line 38_21, 40_43">Sort</button>.<span class="cons_Constructor"><span id="SimpleSort_14_8" title="a definition with no references">SimpleSort</span></span> = &lt;&lt;<a href="#SimpleSortLex_24_3" id="SimpleSortLex_14_23" title="a reference to a single-file definition">SimpleSortLex</a>&gt;&gt;
  <button class="modal-open" id="Sort_15_3" title="a definition with multiple references" data-urls="#Sort line 15_45, 16_23, 17_22, 18_24, 19_30, 31_34, 32_44, 33_47, 36_31; ../WebDSL-Action.sdf3/#Sort line 21_29, 35_45, 36_49, 37_56, 80_20, 83_20, 128_6, 150_22, 156_22, 239_37, 240_35, 252_26, 253_25, 308_67, 310_59, 311_59, 313_59, 315_59; ../WebDSL-DataModel.sdf3/#Sort line 48_20, 51_20, 54_20, 57_20, 66_28, 69_28, 72_28, 75_28, 91_30, 94_30; ../WebDSL-Prefetch.sdf3/#Sort line 38_21, 40_43">Sort</button>.<span class="cons_Constructor"><span id="GenericSort_15_8" title="a definition with no references">GenericSort</span></span> = &lt;&lt;<a href="../WebDSL-Lexical.sdf3/#GenericSortLex_167_17" id="GenericSortLex_15_24" title="a reference to a single-file definition">GenericSortLex</a>&gt; \&lt; &lt;{<a href="#Sort_10_95" id="Sort_15_45" title="a reference to a single-file definition">Sort</a> <span class="cons_Lit">","</span>}+&gt; \&gt;&gt;
  <button class="modal-open" id="Sort_16_3" title="a definition with multiple references" data-urls="#Sort line 15_45, 16_23, 17_22, 18_24, 19_30, 31_34, 32_44, 33_47, 36_31; ../WebDSL-Action.sdf3/#Sort line 21_29, 35_45, 36_49, 37_56, 80_20, 83_20, 128_6, 150_22, 156_22, 239_37, 240_35, 252_26, 253_25, 308_67, 310_59, 311_59, 313_59, 315_59; ../WebDSL-DataModel.sdf3/#Sort line 48_20, 51_20, 54_20, 57_20, 66_28, 69_28, 72_28, 75_28, 91_30, 94_30; ../WebDSL-Prefetch.sdf3/#Sort line 38_21, 40_43">Sort</button>.<span class="cons_Constructor"><span id="ListSort_16_8" title="a definition with no references">ListSort</span></span> = &lt;<span class="cons_String">[</span> &lt;<a href="#Sort_10_95" id="Sort_16_23" title="a reference to a single-file definition">Sort</a>&gt; <span class="cons_String">]</span>&gt;
  <button class="modal-open" id="Sort_17_3" title="a definition with multiple references" data-urls="#Sort line 15_45, 16_23, 17_22, 18_24, 19_30, 31_34, 32_44, 33_47, 36_31; ../WebDSL-Action.sdf3/#Sort line 21_29, 35_45, 36_49, 37_56, 80_20, 83_20, 128_6, 150_22, 156_22, 239_37, 240_35, 252_26, 253_25, 308_67, 310_59, 311_59, 313_59, 315_59; ../WebDSL-DataModel.sdf3/#Sort line 48_20, 51_20, 54_20, 57_20, 66_28, 69_28, 72_28, 75_28, 91_30, 94_30; ../WebDSL-Prefetch.sdf3/#Sort line 38_21, 40_43">Sort</button>.<span class="cons_Constructor"><span id="SetSort_17_8" title="a definition with no references">SetSort</span></span> = &lt;<span class="cons_String">{</span> &lt;<a href="#Sort_10_95" id="Sort_17_22" title="a reference to a single-file definition">Sort</a>&gt; <span class="cons_String">}</span>&gt;
  <button class="modal-open" id="Sort_18_3" title="a definition with multiple references" data-urls="#Sort line 15_45, 16_23, 17_22, 18_24, 19_30, 31_34, 32_44, 33_47, 36_31; ../WebDSL-Action.sdf3/#Sort line 21_29, 35_45, 36_49, 37_56, 80_20, 83_20, 128_6, 150_22, 156_22, 239_37, 240_35, 252_26, 253_25, 308_67, 310_59, 311_59, 313_59, 315_59; ../WebDSL-DataModel.sdf3/#Sort line 48_20, 51_20, 54_20, 57_20, 66_28, 69_28, 72_28, 75_28, 91_30, 94_30; ../WebDSL-Prefetch.sdf3/#Sort line 38_21, 40_43">Sort</button>.<span class="cons_Constructor"><span id="RefSort_18_8" title="a definition with no references">RefSort</span></span> = &lt;<span class="cons_String">ref</span> &lt;<a href="#Sort_10_95" id="Sort_18_24" title="a reference to a single-file definition">Sort</a>&gt;&gt;
  <button class="modal-open" id="Sort_19_3" title="a definition with multiple references" data-urls="#Sort line 15_45, 16_23, 17_22, 18_24, 19_30, 31_34, 32_44, 33_47, 36_31; ../WebDSL-Action.sdf3/#Sort line 21_29, 35_45, 36_49, 37_56, 80_20, 83_20, 128_6, 150_22, 156_22, 239_37, 240_35, 252_26, 253_25, 308_67, 310_59, 311_59, 313_59, 315_59; ../WebDSL-DataModel.sdf3/#Sort line 48_20, 51_20, 54_20, 57_20, 66_28, 69_28, 72_28, 75_28, 91_30, 94_30; ../WebDSL-Prefetch.sdf3/#Sort line 38_21, 40_43">Sort</button>.<span class="cons_Constructor"><span id="RefSortAlt_19_8" title="a definition with no references">RefSortAlt</span></span> = &lt;<span class="cons_String">Ref</span> \&lt; &lt;<a href="#Sort_10_95" id="Sort_19_30" title="a reference to a single-file definition">Sort</a>&gt; \&gt;&gt;
  <button class="modal-open" id="Sort_20_3" title="a definition with multiple references" data-urls="#Sort line 15_45, 16_23, 17_22, 18_24, 19_30, 31_34, 32_44, 33_47, 36_31; ../WebDSL-Action.sdf3/#Sort line 21_29, 35_45, 36_49, 37_56, 80_20, 83_20, 128_6, 150_22, 156_22, 239_37, 240_35, 252_26, 253_25, 308_67, 310_59, 311_59, 313_59, 315_59; ../WebDSL-DataModel.sdf3/#Sort line 48_20, 51_20, 54_20, 57_20, 66_28, 69_28, 72_28, 75_28, 91_30, 94_30; ../WebDSL-Prefetch.sdf3/#Sort line 38_21, 40_43">Sort</button>.<span class="cons_Constructor"><span id="FunctionSort_20_8" title="a definition with no references">FunctionSort</span></span> = &lt;<span class="cons_String">function</span> &lt;<a href="#FunctionSortParams_10_27" id="FunctionSortParams_20_34" title="a reference to a single-file definition">FunctionSortParams</a>&gt; &lt;<a href="#FunctionSortReturn_10_64" id="FunctionSortReturn_20_55" title="a reference to a single-file definition">FunctionSortReturn</a>&gt;&gt;

<span class="keyword">lexical syntax</span>

  <button class="modal-open" id="SimpleSortLex_24_3" title="a definition with multiple references" data-urls="#SimpleSortLex line 14_23; ../WebDSL-Prefetch.sdf3/#SimpleSortLex line 31_46, 74_37">SimpleSortLex</button> = <span class="cons_Lit">"function"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free syntax</span>

  <span class="layout">%% function type; optionally specify (named) args and return type</span>
  <a href="#FunctionSortParams_20_34" id="FunctionSortParams_29_3" title="a definition with a single reference">FunctionSortParams</a>.<span class="cons_Constructor"><span id="FunctionSortParams_29_22" title="a definition with no references">FunctionSortParams</span></span> = &lt;<span class="cons_String">(</span> &lt;{<a href="#FunctionSortParam_10_46" id="FunctionSortParam_29_48" title="a reference to a single-file definition">FunctionSortParam</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;
  <a href="#FunctionSortParams_20_34" id="FunctionSortParams_30_3" title="a definition with a single reference">FunctionSortParams</a>.<span class="cons_Constructor"><span id="FunctionSortParamsNone_30_22" title="a definition with no references">FunctionSortParamsNone</span></span> = &lt;&gt;
  <a href="#FunctionSortParam_29_48" id="FunctionSortParam_31_3" title="a definition with a single reference">FunctionSortParam</a>.<span class="cons_Constructor"><span id="UnnamedArg_31_21" title="a definition with no references">UnnamedArg</span></span> = <a href="#Sort_10_95" id="Sort_31_34" title="a reference to a single-file definition">Sort</a>
  <a href="#FunctionSortParam_29_48" id="FunctionSortParam_32_3" title="a definition with a single reference">FunctionSortParam</a>.<span class="cons_Constructor"><span id="NamedArg_32_21" title="a definition with no references">NamedArg</span></span> = &lt;&lt;<a href="../WebDSL-Action.sdf3/#VarId_41_3" id="VarId_32_34" title="a reference to a single-file definition">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="#Sort_10_95" id="Sort_32_44" title="a reference to a single-file definition">Sort</a>&gt;&gt;
  <a href="#FunctionSortReturn_20_55" id="FunctionSortReturn_33_3" title="a definition with a single reference">FunctionSortReturn</a>.<span class="cons_Constructor"><span id="FunctionSortReturn_33_22" title="a definition with no references">FunctionSortReturn</span></span> = &lt;<span class="cons_String">:</span> &lt;<a href="#Sort_10_95" id="Sort_33_47" title="a reference to a single-file definition">Sort</a>&gt;&gt;
  <a href="#FunctionSortReturn_20_55" id="FunctionSortReturn_34_3" title="a definition with a single reference">FunctionSortReturn</a>.<span class="cons_Constructor"><span id="FunctionSortReturnNone_34_22" title="a definition with no references">FunctionSortReturnNone</span></span> = &lt;&gt;

  <button class="modal-open" id="FormalArg_36_3" title="a definition with multiple references" data-urls="#FormalArg line 37_35; ../WebDSL-AccessControl.sdf3/#FormalArg line 54_23, 103_33; ../WebDSL-Dispatch.sdf3/#FormalArg line 33_32; ../WebDSL-Service.sdf3/#FormalArg line 17_34; ../WebDSL-UI.sdf3/#FormalArg line 36_41, 271_26">FormalArg</button>.<span class="cons_Constructor"><span id="Arg_36_13" title="a definition with no references">Arg</span></span> = &lt;&lt;<a href="../WebDSL-Action.sdf3/#VarId_41_3" id="VarId_36_21" title="a reference to a single-file definition">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="#Sort_10_95" id="Sort_36_31" title="a reference to a single-file definition">Sort</a>&gt;&gt;
  <button class="modal-open" id="OptFormalArgs_37_3" title="a definition with multiple references" data-urls="../WebDSL-AccessControl.sdf3/#OptFormalArgs line 37_21, 46_21, 84_21; ../WebDSL-Action.sdf3/#OptFormalArgs line 18_23, 34_32; ../WebDSL-Dispatch.sdf3/#OptFormalArgs line 24_11; ../WebDSL-EntityDerive.sdf3/#OptFormalArgs line 18_56; ../WebDSL-Routing.sdf3/#OptFormalArgs line 19_14, 22_16; ../WebDSL-UI.sdf3/#OptFormalArgs line 28_30, 42_32, 47_40, 52_29, 444_51">OptFormalArgs</button>.<span class="cons_Constructor"><span id="FormalArgs_37_17" title="a definition with no references">FormalArgs</span></span> = &lt;<span class="cons_String">(</span> &lt;{<a href="#FormalArg_10_3" id="FormalArg_37_35" title="a reference to a single-file definition">FormalArg</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;
  <button class="modal-open" id="OptFormalArgs_38_3" title="a definition with multiple references" data-urls="../WebDSL-AccessControl.sdf3/#OptFormalArgs line 37_21, 46_21, 84_21; ../WebDSL-Action.sdf3/#OptFormalArgs line 18_23, 34_32; ../WebDSL-Dispatch.sdf3/#OptFormalArgs line 24_11; ../WebDSL-EntityDerive.sdf3/#OptFormalArgs line 18_56; ../WebDSL-Routing.sdf3/#OptFormalArgs line 19_14, 22_16; ../WebDSL-UI.sdf3/#OptFormalArgs line 28_30, 42_32, 47_40, 52_29, 444_51">OptFormalArgs</button>.<span class="cons_Constructor"><span id="OptFormalArgsNone_38_17" title="a definition with no references">OptFormalArgsNone</span></span> = &lt;&gt;

  <a href="../WebDSL-EntityDerive.sdf3/#OptCallArgs_16_65" id="OptCallArgs_40_3" title="a definition with a single reference">OptCallArgs</a>.<span class="cons_Constructor"><span id="CallArgs_40_15" title="a definition with no references">CallArgs</span></span> = &lt;<span class="cons_String">(</span> &lt;{<a href="../WebDSL-Action.sdf3/#Exp_34_3" id="Exp_40_31" title="a reference to a single-file definition">Exp</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;
  <a href="../WebDSL-EntityDerive.sdf3/#OptCallArgs_16_65" id="OptCallArgs_41_3" title="a definition with a single reference">OptCallArgs</a>.<span class="cons_Constructor"><span id="OptCallArgsNone_41_15" title="a definition with no references">OptCallArgsNone</span></span> = &lt;&gt;

<span class="keyword">context-free sorts</span>

  <a href="../webdsl-statix.sdf3/#Unit_32_3" id="Unit_45_3" title="a definition with a single reference">Unit</a> <button class="modal-open" id="Section_45_8" title="a definition with multiple references" data-urls="#Section line 56_6, 61_6, 67_6, 72_6, 78_6, 83_6, 89_6, 94_6">Section</button> <button class="modal-open" id="Definition_45_16" title="a definition with multiple references" data-urls="#Definition line 49_60, 55_8, 66_8, 77_8, 88_8">Definition</button> <a href="#EnumValue_120_9" id="EnumValue_45_27" title="a definition with a single reference">EnumValue</a>

<span class="keyword">syntax</span>

  <button class="modal-open" id="Section_49_3" title="a definition with multiple references" data-urls="#Section line 56_6, 61_6, 67_6, 72_6, 78_6, 83_6, 89_6, 94_6">Section</button><span class="keyword">-CF</span>.<span class="cons_Constructor"><span id="Section_49_14" title="a definition with no references">Section</span></span> = <span class="cons_Lit">"section"</span> <a href="../WebDSL-Lexical.sdf3/#SectionName_5_70" id="SectionName_49_34" title="a reference to a single-file definition">SectionName</a><span class="keyword">-CF LAYOUT</span>?<span class="keyword">-CF</span> <a href="#Definition_45_16" id="Definition_49_60" title="a reference to a single-file definition">Definition</a>*<span class="keyword">-CF</span>

<span class="keyword">context-free syntax</span>

  <a href="../webdsl-statix.sdf3/#Unit_32_3" id="Unit_53_3" title="a definition with a single reference">Unit</a>.<span class="cons_Constructor"><span id="ApplicationDefs_53_8" title="a definition with no references">ApplicationDefs</span></span> = &lt;
    <span class="cons_String">application</span> &lt;<a href="../WebDSL-Lexical.sdf3/#QId_5_3" id="QId_54_18" title="a reference to a single-file definition">QId</a>&gt;
      &lt;<a href="#Definition_45_16" id="Definition_55_8" title="a reference to a single-file definition">Definition</a>+&gt;
    &lt;<a href="#Section_45_8" id="Section_56_6" title="a reference to a single-file definition">Section</a>*&gt;
  &gt;

  <a href="../webdsl-statix.sdf3/#Unit_32_3" id="Unit_59_3" title="a definition with a single reference">Unit</a>.<span class="cons_Constructor"><span id="Application_59_8" title="a definition with no references">Application</span></span> = &lt;
    <span class="cons_String">application</span> &lt;<a href="../WebDSL-Lexical.sdf3/#QId_5_3" id="QId_60_18" title="a reference to a single-file definition">QId</a>&gt;
    &lt;<a href="#Section_45_8" id="Section_61_6" title="a reference to a single-file definition">Section</a>*&gt;
  &gt;

  <a href="../webdsl-statix.sdf3/#Unit_32_3" id="Unit_64_3" title="a definition with a single reference">Unit</a>.<span class="cons_Constructor"><span id="ModuleDefs_64_8" title="a definition with no references">ModuleDefs</span></span> = &lt;
    <span class="cons_String">module</span> &lt;<a href="../WebDSL-Lexical.sdf3/#ModuleName_23_3" id="ModuleName_65_13" title="a reference to a single-file definition">ModuleName</a>&gt;
      &lt;<a href="#Definition_45_16" id="Definition_66_8" title="a reference to a single-file definition">Definition</a>+&gt;
    &lt;<a href="#Section_45_8" id="Section_67_6" title="a reference to a single-file definition">Section</a>*&gt;
  &gt;

  <a href="../webdsl-statix.sdf3/#Unit_32_3" id="Unit_70_3" title="a definition with a single reference">Unit</a>.<span class="cons_Constructor"><span id="Module_70_8" title="a definition with no references">Module</span></span> = &lt;
    <span class="cons_String">module</span> &lt;<a href="../WebDSL-Lexical.sdf3/#ModuleName_23_3" id="ModuleName_71_13" title="a reference to a single-file definition">ModuleName</a>&gt;
    &lt;<a href="#Section_45_8" id="Section_72_6" title="a reference to a single-file definition">Section</a>*&gt;
  &gt;

  <a href="../webdsl-statix.sdf3/#Unit_32_3" id="Unit_75_3" title="a definition with a single reference">Unit</a>.<span class="cons_Constructor"><span id="BuiltInDefs_75_8" title="a definition with no references">BuiltInDefs</span></span> = &lt;
    <span class="cons_String">built-in</span>
      &lt;<a href="#Definition_45_16" id="Definition_77_8" title="a reference to a single-file definition">Definition</a>+&gt;
    &lt;<a href="#Section_45_8" id="Section_78_6" title="a reference to a single-file definition">Section</a>*&gt;
  &gt;

  <a href="../webdsl-statix.sdf3/#Unit_32_3" id="Unit_81_3" title="a definition with a single reference">Unit</a>.<span class="cons_Constructor"><span id="BuiltIn_81_8" title="a definition with no references">BuiltIn</span></span> = &lt;
    <span class="cons_String">built-in</span>
    &lt;<a href="#Section_45_8" id="Section_83_6" title="a reference to a single-file definition">Section</a>*&gt;
  &gt;

  <a href="../webdsl-statix.sdf3/#Unit_32_3" id="Unit_86_3" title="a definition with a single reference">Unit</a>.<span class="cons_Constructor"><span id="BuiltInLibraryDefs_86_8" title="a definition with no references">BuiltInLibraryDefs</span></span> = &lt;
    <span class="cons_String">built-in-library</span>
      &lt;<a href="#Definition_45_16" id="Definition_88_8" title="a reference to a single-file definition">Definition</a>+&gt;
    &lt;<a href="#Section_45_8" id="Section_89_6" title="a reference to a single-file definition">Section</a>*&gt;
  &gt;

  <a href="../webdsl-statix.sdf3/#Unit_32_3" id="Unit_92_3" title="a definition with a single reference">Unit</a>.<span class="cons_Constructor"><span id="BuiltInLibrary_92_8" title="a definition with no references">BuiltInLibrary</span></span> = &lt;
    <span class="cons_String">built-in-library</span>
    &lt;<a href="#Section_45_8" id="Section_94_6" title="a reference to a single-file definition">Section</a>*&gt;
  &gt;

  <a href="../webdsl-statix.sdf3/#Unit_32_3" id="Unit_97_3" title="a definition with a single reference">Unit</a>.<span class="cons_Constructor"><span id="EmptyUnit_97_8" title="a definition with no references">EmptyUnit</span></span> = &lt;&gt;

  <button class="modal-open" id="Definition_99_3" title="a definition with multiple references" data-urls="#Definition line 49_60, 55_8, 66_8, 77_8, 88_8">Definition</button>.<span class="cons_Constructor"><span id="Imports_99_14" title="a definition with no references">Imports</span></span> = &lt;
    <span class="cons_String">imports</span> &lt;<a href="#ImportName_107_3" id="ImportName_100_14" title="a reference to a single-file definition">ImportName</a>&gt;
  &gt;

  <button class="modal-open" id="Definition_103_3" title="a definition with multiple references" data-urls="#Definition line 49_60, 55_8, 66_8, 77_8, 88_8">Definition</button>.<span class="cons_Constructor"><span id="ImportsBuiltIn_103_14" title="a definition with no references">ImportsBuiltIn</span></span> = &lt;
    <span class="cons_String">imports</span> <span class="cons_String">built-in</span>
  &gt;

  <a href="#ImportName_100_14" id="ImportName_107_3" title="a definition with a single reference">ImportName</a> = <span class="cons_Lit">"built-in"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="Definition_111_3" title="a definition with multiple references" data-urls="#Definition line 49_60, 55_8, 66_8, 77_8, 88_8">Definition</button>.<span class="cons_Constructor"><span id="Description_111_14" title="a definition with no references">Description</span></span> = &lt;
    <span class="cons_String">description</span> <span class="cons_String">{</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Word_155_3" id="Word_112_20" title="a reference to a single-file definition">Word</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <button class="modal-open" id="Definition_114_3" title="a definition with multiple references" data-urls="#Definition line 49_60, 55_8, 66_8, 77_8, 88_8">Definition</button>.<span class="cons_Constructor"><span id="Note_114_14" title="a definition with no references">Note</span></span> = &lt;
    <span class="cons_String">note</span> <span class="cons_String">{</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Word_155_3" id="Word_115_13" title="a reference to a single-file definition">Word</a>*&gt; <span class="cons_String">}</span>
  &gt;

  <button class="modal-open" id="Definition_118_3" title="a definition with multiple references" data-urls="#Definition line 49_60, 55_8, 66_8, 77_8, 88_8">Definition</button>.<span class="cons_Constructor"><span id="Enum_118_14" title="a definition with no references">Enum</span></span> = &lt;
    <span class="cons_String">enum</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_119_11" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">{</span>
      &lt;{<a href="#EnumValue_45_27" id="EnumValue_120_9" title="a reference to a single-file definition">EnumValue</a> <span class="cons_Lit">","</span>}*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#EnumValue_120_9" id="EnumValue_123_3" title="a definition with a single reference">EnumValue</a>.<span class="cons_Constructor"><span id="EnumValue_123_13" title="a definition with no references">EnumValue</span></span> = &lt;&lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_123_27" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">(</span> &lt;<a href="../WebDSL-Lexical.sdf3/#String_69_3" id="String_123_34" title="a reference to a single-file definition">String</a>&gt; <span class="cons_String">)</span>&gt;

<span class="keyword">context-free sorts</span>

  <a href="#Action_131_16" id="Action_127_3" title="a definition with a single reference">Action</a> <span id="Statement_127_10" title="a definition with no references">Statement</span>

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="Definition_131_3" title="a definition with multiple references" data-urls="#Definition line 49_60, 55_8, 66_8, 77_8, 88_8">Definition</button> = <a href="#Action_127_3" id="Action_131_16" title="a reference to a single-file definition">Action</a>

</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
