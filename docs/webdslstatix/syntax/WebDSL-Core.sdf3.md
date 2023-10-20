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
<td class="code"><pre><code><span class="keyword">module</span> <a href="../WebDSL-AccessControl.sdf3/#WebDSL-Core_55_66" id="WebDSL-Core_7_18" title="Referenced at ../WebDSL-AccessControl.sdf3 line 5; ../WebDSL-Action.sdf3 line 4; ../WebDSL-Ajax.sdf3 line 7; ../WebDSL-Attributes.sdf3 line 6; ../WebDSL-DataModel.sdf3 line 5; ../WebDSL-DataValidation.sdf3 line 8; ../WebDSL-Dispatch.sdf3 line 5; ../WebDSL-EntityDerive.sdf3 line 5; ../WebDSL-Exception.sdf3 line 5; ../WebDSL-Expand.sdf3 line 6; ../WebDSL-Generated.sdf3 line 4; ../WebDSL-Native.sdf3 line 4; ../WebDSL-Prefetch.sdf3 line 5; ../WebDSL-Routing.sdf3 line 4; ../WebDSL-Search.sdf3 line 5; ../WebDSL-Service.sdf3 line 5; ../webdsl-statix.sdf3 line 8; ../WebDSL-Test.sdf3 line 6; ../WebDSL-TimeInterval.sdf3 line 5; ../WebDSL-Type.sdf3 line 8; ../WebDSL-UI.sdf3 line 6">WebDSL-Core</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3/#WebDSL-Action_7_20" id="WebDSL-Action_30_43" title="Defined at ../WebDSL-Action.sdf3 line 1">WebDSL-Action</a>
  <a href="../WebDSL-DataModel.sdf3/#WebDSL-DataModel_7_23" id="WebDSL-DataModel_46_62" title="Defined at ../WebDSL-DataModel.sdf3 line 1">WebDSL-DataModel</a>
  <a href="../WebDSL-Lexical.sdf3/#WebDSL-Lexical_7_21" id="WebDSL-Lexical_65_79" title="Defined at ../WebDSL-Lexical.sdf3 line 1">WebDSL-Lexical</a>

<span class="keyword">context-free sorts</span>

  <a href="#FormalArg_1065_1074" id="FormalArg_103_112" title="Referenced at line 37; ../WebDSL-AccessControl.sdf3 line 54, 103; ../WebDSL-Dispatch.sdf3 line 33; ../WebDSL-Service.sdf3 line 17; ../WebDSL-UI.sdf3 line 36, 271">FormalArg</a> <a href="../WebDSL-AccessControl.sdf3/#OptFormalArgs_743_756" id="OptFormalArgs_113_126" title="Referenced at ../WebDSL-AccessControl.sdf3 line 37, 46, 84; ../WebDSL-Action.sdf3 line 18, 34; ../WebDSL-Dispatch.sdf3 line 24; ../WebDSL-EntityDerive.sdf3 line 18; ../WebDSL-Routing.sdf3 line 19, 22; ../WebDSL-UI.sdf3 line 28, 42, 47, 52, 444">OptFormalArgs</a> <a href="#FunctionSortParams_492_510" id="FunctionSortParams_127_145" title="Referenced at line 20">FunctionSortParams</a> <a href="#FunctionSortParam_726_743" id="FunctionSortParam_146_163" title="Referenced at line 29">FunctionSortParam</a> <a href="#FunctionSortReturn_513_531" id="FunctionSortReturn_164_182" title="Referenced at line 20">FunctionSortReturn</a> <a href="../WebDSL-EntityDerive.sdf3/#OptCallArgs_295_306" id="OptCallArgs_183_194" title="Referenced at ../WebDSL-EntityDerive.sdf3 line 16">OptCallArgs</a> <a href="#Sort_313_317" id="Sort_195_199" title="Referenced at line 15, 16, 17, 18, 19, 31, 32, 33, 36; ../WebDSL-Action.sdf3 line 21, 35, 36, 37, 80, 83, 128, 150, 156, 239, 240, 252, 253, 308, 310, 311, 313, 315; ../WebDSL-DataModel.sdf3 line 48, 51, 54, 57, 66, 69, 72, 75, 91, 94; ../WebDSL-Dispatch.sdf3 line 27; ../WebDSL-Exception.sdf3 line 29">Sort</a>

<span class="keyword">context-free syntax</span> <span class="layout">%% Types</span>

  <a href="#Sort_313_317" id="Sort_233_237" title="Referenced at line 15, 16, 17, 18, 19, 31, 32, 33, 36; ../WebDSL-Action.sdf3 line 21, 35, 36, 37, 80, 83, 128, 150, 156, 239, 240, 252, 253, 308, 310, 311, 313, 315; ../WebDSL-DataModel.sdf3 line 48, 51, 54, 57, 66, 69, 72, 75, 91, 94; ../WebDSL-Dispatch.sdf3 line 27; ../WebDSL-Exception.sdf3 line 29">Sort</a>.<span class="cons_Constructor"><span id="SimpleSort_238_248" title="Not referenced locally, nor via imports">SimpleSort</span></span> = &lt;&lt;<a href="#SimpleSortLex_553_566" id="SimpleSortLex_253_266" title="Defined at line 24">SimpleSortLex</a>&gt;&gt;
  <a href="#Sort_313_317" id="Sort_271_275" title="Referenced at line 15, 16, 17, 18, 19, 31, 32, 33, 36; ../WebDSL-Action.sdf3 line 21, 35, 36, 37, 80, 83, 128, 150, 156, 239, 240, 252, 253, 308, 310, 311, 313, 315; ../WebDSL-DataModel.sdf3 line 48, 51, 54, 57, 66, 69, 72, 75, 91, 94; ../WebDSL-Dispatch.sdf3 line 27; ../WebDSL-Exception.sdf3 line 29">Sort</a>.<span class="cons_Constructor"><span id="GenericSort_276_287" title="Not referenced locally, nor via imports">GenericSort</span></span> = &lt;&lt;<a href="../WebDSL-Lexical.sdf3/#GenericSortLex_3819_3833" id="GenericSortLex_292_306" title="Defined at ../WebDSL-Lexical.sdf3 line 167, 172, 173">GenericSortLex</a>&gt; \&lt; &lt;{<a href="#Sort_195_199" id="Sort_313_317" title="Defined at line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a> <span class="cons_Lit">","</span>}+&gt; \&gt;&gt;
  <a href="#Sort_313_317" id="Sort_331_335" title="Referenced at line 15, 16, 17, 18, 19, 31, 32, 33, 36; ../WebDSL-Action.sdf3 line 21, 35, 36, 37, 80, 83, 128, 150, 156, 239, 240, 252, 253, 308, 310, 311, 313, 315; ../WebDSL-DataModel.sdf3 line 48, 51, 54, 57, 66, 69, 72, 75, 91, 94; ../WebDSL-Dispatch.sdf3 line 27; ../WebDSL-Exception.sdf3 line 29">Sort</a>.<span class="cons_Constructor"><span id="ListSort_336_344" title="Not referenced locally, nor via imports">ListSort</span></span> = &lt;<span class="cons_String">[</span> &lt;<a href="#Sort_195_199" id="Sort_351_355" title="Defined at line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>&gt; <span class="cons_String">]</span>&gt;
  <a href="#Sort_313_317" id="Sort_362_366" title="Referenced at line 15, 16, 17, 18, 19, 31, 32, 33, 36; ../WebDSL-Action.sdf3 line 21, 35, 36, 37, 80, 83, 128, 150, 156, 239, 240, 252, 253, 308, 310, 311, 313, 315; ../WebDSL-DataModel.sdf3 line 48, 51, 54, 57, 66, 69, 72, 75, 91, 94; ../WebDSL-Dispatch.sdf3 line 27; ../WebDSL-Exception.sdf3 line 29">Sort</a>.<span class="cons_Constructor"><span id="SetSort_367_374" title="Not referenced locally, nor via imports">SetSort</span></span> = &lt;<span class="cons_String">{</span> &lt;<a href="#Sort_195_199" id="Sort_381_385" title="Defined at line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>&gt; <span class="cons_String">}</span>&gt;
  <a href="#Sort_313_317" id="Sort_392_396" title="Referenced at line 15, 16, 17, 18, 19, 31, 32, 33, 36; ../WebDSL-Action.sdf3 line 21, 35, 36, 37, 80, 83, 128, 150, 156, 239, 240, 252, 253, 308, 310, 311, 313, 315; ../WebDSL-DataModel.sdf3 line 48, 51, 54, 57, 66, 69, 72, 75, 91, 94; ../WebDSL-Dispatch.sdf3 line 27; ../WebDSL-Exception.sdf3 line 29">Sort</a>.<span class="cons_Constructor"><span id="RefSort_397_404" title="Not referenced locally, nor via imports">RefSort</span></span> = &lt;<span class="cons_String">ref</span> &lt;<a href="#Sort_195_199" id="Sort_413_417" title="Defined at line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>&gt;&gt;
  <a href="#Sort_313_317" id="Sort_422_426" title="Referenced at line 15, 16, 17, 18, 19, 31, 32, 33, 36; ../WebDSL-Action.sdf3 line 21, 35, 36, 37, 80, 83, 128, 150, 156, 239, 240, 252, 253, 308, 310, 311, 313, 315; ../WebDSL-DataModel.sdf3 line 48, 51, 54, 57, 66, 69, 72, 75, 91, 94; ../WebDSL-Dispatch.sdf3 line 27; ../WebDSL-Exception.sdf3 line 29">Sort</a>.<span class="cons_Constructor"><span id="RefSortAlt_427_437" title="Not referenced locally, nor via imports">RefSortAlt</span></span> = &lt;<span class="cons_String">Ref</span> \&lt; &lt;<a href="#Sort_195_199" id="Sort_449_453" title="Defined at line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>&gt; \&gt;&gt;
  <a href="#Sort_313_317" id="Sort_461_465" title="Referenced at line 15, 16, 17, 18, 19, 31, 32, 33, 36; ../WebDSL-Action.sdf3 line 21, 35, 36, 37, 80, 83, 128, 150, 156, 239, 240, 252, 253, 308, 310, 311, 313, 315; ../WebDSL-DataModel.sdf3 line 48, 51, 54, 57, 66, 69, 72, 75, 91, 94; ../WebDSL-Dispatch.sdf3 line 27; ../WebDSL-Exception.sdf3 line 29">Sort</a>.<span class="cons_Constructor"><span id="FunctionSort_466_478" title="Not referenced locally, nor via imports">FunctionSort</span></span> = &lt;<span class="cons_String">function</span> &lt;<a href="#FunctionSortParams_127_145" id="FunctionSortParams_492_510" title="Defined at line 10, 29, 30">FunctionSortParams</a>&gt; &lt;<a href="#FunctionSortReturn_164_182" id="FunctionSortReturn_513_531" title="Defined at line 10, 33, 34">FunctionSortReturn</a>&gt;&gt;

<span class="keyword">lexical syntax</span>

  <a href="#SimpleSortLex_253_266" id="SimpleSortLex_553_566" title="Referenced at line 14; ../WebDSL-Prefetch.sdf3 line 31, 74">SimpleSortLex</a> = <span class="cons_Lit">"function"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free syntax</span>

  <span class="layout">%% function type; optionally specify (named) args and return type</span>
  <a href="#FunctionSortParams_492_510" id="FunctionSortParams_681_699" title="Referenced at line 20">FunctionSortParams</a>.<span class="cons_Constructor"><span id="FunctionSortParams_700_718" title="Not referenced locally, nor via imports">FunctionSortParams</span></span> = &lt;<span class="cons_String">(</span> &lt;{<a href="#FunctionSortParam_146_163" id="FunctionSortParam_726_743" title="Defined at line 10, 31, 32">FunctionSortParam</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;
  <a href="#FunctionSortParams_492_510" id="FunctionSortParams_756_774" title="Referenced at line 20">FunctionSortParams</a>.<span class="cons_Constructor"><span id="FunctionSortParamsNone_775_797" title="Not referenced locally, nor via imports">FunctionSortParamsNone</span></span> = &lt;&gt;
  <a href="#FunctionSortParam_726_743" id="FunctionSortParam_805_822" title="Referenced at line 29">FunctionSortParam</a>.<span class="cons_Constructor"><span id="UnnamedArg_823_833" title="Not referenced locally, nor via imports">UnnamedArg</span></span> = <a href="#Sort_195_199" id="Sort_836_840" title="Defined at line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>
  <a href="#FunctionSortParam_726_743" id="FunctionSortParam_843_860" title="Referenced at line 29">FunctionSortParam</a>.<span class="cons_Constructor"><span id="NamedArg_861_869" title="Not referenced locally, nor via imports">NamedArg</span></span> = &lt;&lt;<a href="../WebDSL-Lexical.sdf3/#VarId_55_60" id="VarId_874_879" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 12">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="#Sort_195_199" id="Sort_884_888" title="Defined at line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>&gt;&gt;
  <a href="#FunctionSortReturn_513_531" id="FunctionSortReturn_893_911" title="Referenced at line 20">FunctionSortReturn</a>.<span class="cons_Constructor"><span id="FunctionSortReturn_912_930" title="Not referenced locally, nor via imports">FunctionSortReturn</span></span> = &lt;<span class="cons_String">:</span> &lt;<a href="#Sort_195_199" id="Sort_937_941" title="Defined at line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>&gt;&gt;
  <a href="#FunctionSortReturn_513_531" id="FunctionSortReturn_946_964" title="Referenced at line 20">FunctionSortReturn</a>.<span class="cons_Constructor"><span id="FunctionSortReturnNone_965_987" title="Not referenced locally, nor via imports">FunctionSortReturnNone</span></span> = &lt;&gt;

  <a href="#FormalArg_1065_1074" id="FormalArg_996_1005" title="Referenced at line 37; ../WebDSL-AccessControl.sdf3 line 54, 103; ../WebDSL-Dispatch.sdf3 line 33; ../WebDSL-Service.sdf3 line 17; ../WebDSL-UI.sdf3 line 36, 271">FormalArg</a>.<span class="cons_Constructor"><span id="Arg_1006_1009" title="Not referenced locally, nor via imports">Arg</span></span> = &lt;&lt;<a href="../WebDSL-Lexical.sdf3/#VarId_55_60" id="VarId_1014_1019" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 12">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="#Sort_195_199" id="Sort_1024_1028" title="Defined at line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>&gt;&gt;
  <a href="../WebDSL-AccessControl.sdf3/#OptFormalArgs_743_756" id="OptFormalArgs_1033_1046" title="Referenced at ../WebDSL-AccessControl.sdf3 line 37, 46, 84; ../WebDSL-Action.sdf3 line 18, 34; ../WebDSL-Dispatch.sdf3 line 24; ../WebDSL-EntityDerive.sdf3 line 18; ../WebDSL-Routing.sdf3 line 19, 22; ../WebDSL-UI.sdf3 line 28, 42, 47, 52, 444">OptFormalArgs</a>.<span class="cons_Constructor"><span id="FormalArgs_1047_1057" title="Not referenced locally, nor via imports">FormalArgs</span></span> = &lt;<span class="cons_String">(</span> &lt;{<a href="#FormalArg_103_112" id="FormalArg_1065_1074" title="Defined at line 10, 36">FormalArg</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;
  <a href="../WebDSL-AccessControl.sdf3/#OptFormalArgs_743_756" id="OptFormalArgs_1087_1100" title="Referenced at ../WebDSL-AccessControl.sdf3 line 37, 46, 84; ../WebDSL-Action.sdf3 line 18, 34; ../WebDSL-Dispatch.sdf3 line 24; ../WebDSL-EntityDerive.sdf3 line 18; ../WebDSL-Routing.sdf3 line 19, 22; ../WebDSL-UI.sdf3 line 28, 42, 47, 52, 444">OptFormalArgs</a>.<span class="cons_Constructor"><span id="OptFormalArgsNone_1101_1118" title="Not referenced locally, nor via imports">OptFormalArgsNone</span></span> = &lt;&gt;

  <a href="../WebDSL-EntityDerive.sdf3/#OptCallArgs_295_306" id="OptCallArgs_1127_1138" title="Referenced at ../WebDSL-EntityDerive.sdf3 line 16">OptCallArgs</a>.<span class="cons_Constructor"><span id="CallArgs_1139_1147" title="Not referenced locally, nor via imports">CallArgs</span></span> = &lt;<span class="cons_String">(</span> &lt;{<a href="../WebDSL-Action.sdf3/#Exp_757_760" id="Exp_1155_1158" title="Defined at ../WebDSL-Action.sdf3 line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;
  <a href="../WebDSL-EntityDerive.sdf3/#OptCallArgs_295_306" id="OptCallArgs_1171_1182" title="Referenced at ../WebDSL-EntityDerive.sdf3 line 16">OptCallArgs</a>.<span class="cons_Constructor"><span id="OptCallArgsNone_1183_1198" title="Not referenced locally, nor via imports">OptCallArgsNone</span></span> = &lt;&gt;

<span class="keyword">context-free sorts</span>

  <a href="../webdsl-statix.sdf3/#Unit_496_500" id="Unit_1227_1231" title="Referenced at ../webdsl-statix.sdf3 line 32">Unit</a> <a href="#Section_1440_1447" id="Section_1232_1239" title="Referenced at line 56, 61, 67, 72, 78, 83, 89, 94">Section</a> <a href="#Definition_1329_1339" id="Definition_1240_1250" title="Referenced at line 49, 55, 66, 77, 88">Definition</a> <a href="#EnumValue_2302_2311" id="EnumValue_1251_1260" title="Referenced at line 120">EnumValue</a>

<span class="keyword">syntax</span>

  <a href="#Section_1440_1447" id="Section_1272_1279" title="Referenced at line 56, 61, 67, 72, 78, 83, 89, 94">Section</a><span class="keyword">-CF</span>.<span class="cons_Constructor"><span id="Section_1283_1290" title="Not referenced locally, nor via imports">Section</span></span> = <span class="cons_Lit">"section"</span> <a href="../WebDSL-Lexical.sdf3/#SectionName_107_118" id="SectionName_1303_1314" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 19">SectionName</a><span class="keyword">-CF LAYOUT</span>?<span class="keyword">-CF</span> <a href="#Definition_1240_1250" id="Definition_1329_1339" title="Defined at line 45, 99, 103, 111, 114, 118, 131">Definition</a>*<span class="keyword">-CF</span>

<span class="keyword">context-free syntax</span>

  <a href="../webdsl-statix.sdf3/#Unit_496_500" id="Unit_1368_1372" title="Referenced at ../webdsl-statix.sdf3 line 32">Unit</a>.<span class="cons_Constructor"><span id="ApplicationDefs_1373_1388" title="Not referenced locally, nor via imports">ApplicationDefs</span></span> = &lt;
    <span class="cons_String">application</span> &lt;<a href="../WebDSL-Lexical.sdf3/#QId_40_43" id="QId_1410_1413" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 9, 10">QId</a>&gt;
      &lt;<a href="#Definition_1240_1250" id="Definition_1422_1432" title="Defined at line 45, 99, 103, 111, 114, 118, 131">Definition</a>+&gt;
    &lt;<a href="#Section_1232_1239" id="Section_1440_1447" title="Defined at line 45, 49">Section</a>*&gt;
  &gt;

  <a href="../webdsl-statix.sdf3/#Unit_496_500" id="Unit_1457_1461" title="Referenced at ../webdsl-statix.sdf3 line 32">Unit</a>.<span class="cons_Constructor"><span id="Application_1462_1473" title="Not referenced locally, nor via imports">Application</span></span> = &lt;
    <span class="cons_String">application</span> &lt;<a href="../WebDSL-Lexical.sdf3/#QId_40_43" id="QId_1495_1498" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 9, 10">QId</a>&gt;
    &lt;<a href="#Section_1232_1239" id="Section_1505_1512" title="Defined at line 45, 49">Section</a>*&gt;
  &gt;

  <a href="../webdsl-statix.sdf3/#Unit_496_500" id="Unit_1522_1526" title="Referenced at ../webdsl-statix.sdf3 line 32">Unit</a>.<span class="cons_Constructor"><span id="ModuleDefs_1527_1537" title="Not referenced locally, nor via imports">ModuleDefs</span></span> = &lt;
    <span class="cons_String">module</span> &lt;<a href="../WebDSL-Lexical.sdf3/#ModuleName_459_469" id="ModuleName_1554_1564" title="Defined at ../WebDSL-Lexical.sdf3 line 23, 33">ModuleName</a>&gt;
      &lt;<a href="#Definition_1240_1250" id="Definition_1573_1583" title="Defined at line 45, 99, 103, 111, 114, 118, 131">Definition</a>+&gt;
    &lt;<a href="#Section_1232_1239" id="Section_1591_1598" title="Defined at line 45, 49">Section</a>*&gt;
  &gt;

  <a href="../webdsl-statix.sdf3/#Unit_496_500" id="Unit_1608_1612" title="Referenced at ../webdsl-statix.sdf3 line 32">Unit</a>.<span class="cons_Constructor"><span id="Module_1613_1619" title="Not referenced locally, nor via imports">Module</span></span> = &lt;
    <span class="cons_String">module</span> &lt;<a href="../WebDSL-Lexical.sdf3/#ModuleName_459_469" id="ModuleName_1636_1646" title="Defined at ../WebDSL-Lexical.sdf3 line 23, 33">ModuleName</a>&gt;
    &lt;<a href="#Section_1232_1239" id="Section_1653_1660" title="Defined at line 45, 49">Section</a>*&gt;
  &gt;

  <a href="../webdsl-statix.sdf3/#Unit_496_500" id="Unit_1670_1674" title="Referenced at ../webdsl-statix.sdf3 line 32">Unit</a>.<span class="cons_Constructor"><span id="BuiltInDefs_1675_1686" title="Not referenced locally, nor via imports">BuiltInDefs</span></span> = &lt;
    <span class="cons_String">built-in</span>
      &lt;<a href="#Definition_1240_1250" id="Definition_1711_1721" title="Defined at line 45, 99, 103, 111, 114, 118, 131">Definition</a>+&gt;
    &lt;<a href="#Section_1232_1239" id="Section_1729_1736" title="Defined at line 45, 49">Section</a>*&gt;
  &gt;

  <a href="../webdsl-statix.sdf3/#Unit_496_500" id="Unit_1746_1750" title="Referenced at ../webdsl-statix.sdf3 line 32">Unit</a>.<span class="cons_Constructor"><span id="BuiltIn_1751_1758" title="Not referenced locally, nor via imports">BuiltIn</span></span> = &lt;
    <span class="cons_String">built-in</span>
    &lt;<a href="#Section_1232_1239" id="Section_1781_1788" title="Defined at line 45, 49">Section</a>*&gt;
  &gt;

  <a href="../webdsl-statix.sdf3/#Unit_496_500" id="Unit_1798_1802" title="Referenced at ../webdsl-statix.sdf3 line 32">Unit</a>.<span class="cons_Constructor"><span id="BuiltInLibraryDefs_1803_1821" title="Not referenced locally, nor via imports">BuiltInLibraryDefs</span></span> = &lt;
    <span class="cons_String">built-in-library</span>
      &lt;<a href="#Definition_1240_1250" id="Definition_1854_1864" title="Defined at line 45, 99, 103, 111, 114, 118, 131">Definition</a>+&gt;
    &lt;<a href="#Section_1232_1239" id="Section_1872_1879" title="Defined at line 45, 49">Section</a>*&gt;
  &gt;

  <a href="../webdsl-statix.sdf3/#Unit_496_500" id="Unit_1889_1893" title="Referenced at ../webdsl-statix.sdf3 line 32">Unit</a>.<span class="cons_Constructor"><span id="BuiltInLibrary_1894_1908" title="Not referenced locally, nor via imports">BuiltInLibrary</span></span> = &lt;
    <span class="cons_String">built-in-library</span>
    &lt;<a href="#Section_1232_1239" id="Section_1939_1946" title="Defined at line 45, 49">Section</a>*&gt;
  &gt;

  <a href="../webdsl-statix.sdf3/#Unit_496_500" id="Unit_1956_1960" title="Referenced at ../webdsl-statix.sdf3 line 32">Unit</a>.<span class="cons_Constructor"><span id="EmptyUnit_1961_1970" title="Not referenced locally, nor via imports">EmptyUnit</span></span> = &lt;&gt;

  <a href="#Definition_1329_1339" id="Definition_1979_1989" title="Referenced at line 49, 55, 66, 77, 88">Definition</a>.<span class="cons_Constructor"><span id="Imports_1990_1997" title="Not referenced locally, nor via imports">Imports</span></span> = &lt;
    <span class="cons_String">imports</span> &lt;<a href="#ImportName_2092_2102" id="ImportName_2015_2025" title="Defined at line 107">ImportName</a>&gt;
  &gt;

  <a href="#Definition_1329_1339" id="Definition_2034_2044" title="Referenced at line 49, 55, 66, 77, 88">Definition</a>.<span class="cons_Constructor"><span id="ImportsBuiltIn_2045_2059" title="Not referenced locally, nor via imports">ImportsBuiltIn</span></span> = &lt;
    <span class="cons_String">imports</span> <span class="cons_String">built-in</span>
  &gt;

  <a href="#ImportName_2015_2025" id="ImportName_2092_2102" title="Referenced at line 100">ImportName</a> = <span class="cons_Lit">"built-in"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free syntax</span>

  <a href="#Definition_1329_1339" id="Definition_2149_2159" title="Referenced at line 49, 55, 66, 77, 88">Definition</a>.<span class="cons_Constructor"><span id="Description_2160_2171" title="Not referenced locally, nor via imports">Description</span></span> = &lt;
    <span class="cons_String">description</span> <span class="cons_String">{</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Word_3693_3697" id="Word_2195_2199" title="Defined at ../WebDSL-Lexical.sdf3 line 155, 159">Word</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#Definition_1329_1339" id="Definition_2210_2220" title="Referenced at line 49, 55, 66, 77, 88">Definition</a>.<span class="cons_Constructor"><span id="Note_2221_2225" title="Not referenced locally, nor via imports">Note</span></span> = &lt;
    <span class="cons_String">note</span> <span class="cons_String">{</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Word_3693_3697" id="Word_2242_2246" title="Defined at ../WebDSL-Lexical.sdf3 line 155, 159">Word</a>*&gt; <span class="cons_String">}</span>
  &gt;

  <a href="#Definition_1329_1339" id="Definition_2258_2268" title="Referenced at line 49, 55, 66, 77, 88">Definition</a>.<span class="cons_Constructor"><span id="Enum_2269_2273" title="Not referenced locally, nor via imports">Enum</span></span> = &lt;
    <span class="cons_String">enum</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_86_88" id="Id_2288_2290" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">{</span>
      &lt;{<a href="#EnumValue_1251_1260" id="EnumValue_2302_2311" title="Defined at line 45, 123">EnumValue</a> <span class="cons_Lit">","</span>}*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#EnumValue_2302_2311" id="EnumValue_2331_2340" title="Referenced at line 120">EnumValue</a>.<span class="cons_Constructor"><span id="EnumValue_2341_2350" title="Not referenced locally, nor via imports">EnumValue</span></span> = &lt;&lt;<a href="../WebDSL-Lexical.sdf3/#Id_86_88" id="Id_2355_2357" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">(</span> &lt;<a href="../WebDSL-Lexical.sdf3/#String_1591_1597" id="String_2362_2368" title="Defined at ../WebDSL-Lexical.sdf3 line 69, 75">String</a>&gt; <span class="cons_String">)</span>&gt;

<span class="keyword">context-free sorts</span>

  <a href="#Action_2450_2456" id="Action_2396_2402" title="Referenced at line 131">Action</a> <span id="Statement_2403_2412" title="Not referenced locally, nor via imports">Statement</span>

<span class="keyword">context-free syntax</span>

  <a href="#Definition_1329_1339" id="Definition_2437_2447" title="Referenced at line 49, 55, 66, 77, 88">Definition</a> = <a href="#Action_2396_2402" id="Action_2450_2456" title="Defined at line 127">Action</a>

</code></pre></td></tr></tbody></table></div>