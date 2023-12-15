---
title: WebDSL-AccessControl.sdf3
hide:
  - toc
---

# `WebDSL-AccessControl.sdf3`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-AccessControl.sdf3]

[pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-AccessControl.sdf3]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/syntax/WebDSL-AccessControl.sdf3 "The source file on GitHub"

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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix.sdf3/#WebDSL-AccessControl_4_3" id="WebDSL-AccessControl_1_8" title="Referenced at ../webdsl-statix.sdf3 line 4">WebDSL-AccessControl</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3/#WebDSL-Action_1_8" id="WebDSL-Action_4_3" title="Defined at ../WebDSL-Action.sdf3 line 1">WebDSL-Action</a>
  <a href="../WebDSL-Core.sdf3/#WebDSL-Core_1_8" id="WebDSL-Core_5_3" title="Defined at ../WebDSL-Core.sdf3 line 1">WebDSL-Core</a>
  <a href="../WebDSL-DataModel.sdf3/#WebDSL-DataModel_1_8" id="WebDSL-DataModel_6_3" title="Defined at ../WebDSL-DataModel.sdf3 line 1">WebDSL-DataModel</a>
  <a href="../WebDSL-Lexical.sdf3/#WebDSL-Lexical_1_8" id="WebDSL-Lexical_7_3" title="Defined at ../WebDSL-Lexical.sdf3 line 1">WebDSL-Lexical</a>
  <a href="../WebDSL-UI.sdf3/#WebDSL-UI_1_8" id="WebDSL-UI_8_3" title="Defined at ../WebDSL-UI.sdf3 line 1">WebDSL-UI</a>

<span class="keyword">context-free sorts</span>

  <span class="layout">// Optional sorts</span>
  <a href="#OptMatchArgs_61_43" id="OptMatchArgs_13_3" title="Referenced at line 61">OptMatchArgs</a> <a href="#OptId_27_27" id="OptId_13_16" title="Referenced at line 27, 31">OptId</a> <a href="#OptWildCardArg_22_39" id="OptWildCardArg_13_22" title="Referenced at line 22, 72, 103">OptWildCardArg</a>

  <span class="layout">// Access control sorts</span>
  <a href="#AccessControlDefinition_28_8" id="AccessControlDefinition_16_3" title="Referenced at line 28, 32">AccessControlDefinition</a> <a href="#AccessControlRule_58_34" id="AccessControlRule_16_27" title="Referenced at line 58, 62">AccessControlRule</a> <a href="#AccessControlPointcutElement_55_9" id="AccessControlPointcutElement_16_45" title="Referenced at line 55">AccessControlPointcutElement</a>
  <a href="#AccessControlImportRulesArg_92_29" id="AccessControlImportRulesArg_17_3" title="Referenced at line 92">AccessControlImportRulesArg</a> <a href="#PolicyExp_76_28" id="PolicyExp_17_31" title="Referenced at line 76, 79, 80, 81, 126, 127">PolicyExp</a> <a href="#MatchName_61_31" id="MatchName_17_41" title="Referenced at line 61, 72">MatchName</a>

<span class="keyword">syntax</span>

  <a href="#MatchName_61_31" id="MatchName_21_3" title="Referenced at line 61, 72">MatchName</a><span class="keyword">-CF</span>.<span class="cons_Constructor"><span id="MatchNameWildCard_21_16" title="Not referenced">MatchNameWildCard</span></span> = <span class="cons_Lit">"*"</span>
  <a href="#MatchName_61_31" id="MatchName_22_3" title="Referenced at line 61, 72">MatchName</a><span class="keyword">-CF</span>.<span class="cons_Constructor"><span id="MatchName_22_16" title="Not referenced">MatchName</span></span> = <a href="../WebDSL-Lexical.sdf3/#PageId_5_52" id="PageId_22_28" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 17">PageId</a><span class="keyword">-LEX</span> <a href="#OptWildCardArg_13_22" id="OptWildCardArg_22_39" title="Defined at line 13, 109, 110">OptWildCardArg</a><span class="keyword">-CF</span>

<span class="keyword">context-free syntax</span>

  <span id="Section_26_3" title="Not referenced">Section</span>.<span class="cons_Constructor"><span id="AccessControlDefinition_26_11" title="Not referenced">AccessControlDefinition</span></span> = &lt;
    <span class="cons_String">access</span> <span class="cons_String">control</span> <span class="cons_String">rules</span> &lt;<a href="#OptId_13_16" id="OptId_27_27" title="Defined at line 13, 106, 107">OptId</a>&gt;
      &lt;<a href="#AccessControlDefinition_16_3" id="AccessControlDefinition_28_8" title="Defined at line 16, 45, 50, 53, 58">AccessControlDefinition</a>*&gt;
  &gt;
  <span id="Section_30_3" title="Not referenced">Section</span>.<span class="cons_Constructor"><span id="AccessControlDefinitionAlt_30_11" title="Not referenced">AccessControlDefinitionAlt</span></span> = &lt;
    <span class="cons_String">access</span> <span class="cons_String">control</span> <span class="cons_String">rules</span> <span class="cons_String">{</span> &lt;<a href="#OptId_13_16" id="OptId_31_29" title="Defined at line 13, 106, 107">OptId</a>&gt;
      &lt;<a href="#AccessControlDefinition_16_3" id="AccessControlDefinition_32_8" title="Defined at line 16, 45, 50, 53, 58">AccessControlDefinition</a>*&gt;
    <span class="cons_String">}</span>
  &gt;

  <span id="Definition_36_3" title="Not referenced">Definition</span>.<span class="cons_Constructor"><span id="Predicate_36_14" title="Not referenced">Predicate</span></span> = &lt;
    <span class="cons_String">predicate</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_37_16" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; &lt;<a href="../WebDSL-Core.sdf3/#OptFormalArgs_10_13" id="OptFormalArgs_37_21" title="Defined at ../WebDSL-Core.sdf3 line 10, 37, 38">OptFormalArgs</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="../WebDSL-Action.sdf3/#Exp_34_3" id="Exp_38_8" title="Defined at ../WebDSL-Action.sdf3 line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;
    <span class="cons_String">}</span>
  &gt;
  <span id="Definition_41_3" title="Not referenced">Definition</span>.<span class="cons_Constructor"><span id="AccessControlPrincipalDef_41_14" title="Not referenced">AccessControlPrincipalDef</span></span> = &lt;
    <span class="cons_String">principal</span> <span class="cons_String">is</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_42_19" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">with</span> <span class="cons_String">credentials</span> &lt;{<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_42_42" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a> <span class="cons_Lit">","</span>}+&gt;
  &gt;

  <a href="#AccessControlDefinition_28_8" id="AccessControlDefinition_45_3" title="Referenced at line 28, 32">AccessControlDefinition</a>.<span class="cons_Constructor"><span id="PredicateAc_45_27" title="Not referenced">PredicateAc</span></span> = &lt;
    <span class="cons_String">predicate</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_46_16" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; &lt;<a href="../WebDSL-Core.sdf3/#OptFormalArgs_10_13" id="OptFormalArgs_46_21" title="Defined at ../WebDSL-Core.sdf3 line 10, 37, 38">OptFormalArgs</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="../WebDSL-Action.sdf3/#Exp_34_3" id="Exp_47_8" title="Defined at ../WebDSL-Action.sdf3 line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#AccessControlDefinition_28_8" id="AccessControlDefinition_50_3" title="Referenced at line 28, 32">AccessControlDefinition</a>.<span class="cons_Constructor"><span id="AccessControlPrincipalAcDef_50_27" title="Not referenced">AccessControlPrincipalAcDef</span></span> = &lt;
    <span class="cons_String">principal</span> <span class="cons_String">is</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_51_19" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">with</span> <span class="cons_String">credentials</span> &lt;{<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_51_42" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a> <span class="cons_Lit">","</span>}+&gt;
  &gt;
  <a href="#AccessControlDefinition_28_8" id="AccessControlDefinition_53_3" title="Referenced at line 28, 32">AccessControlDefinition</a>.<span class="cons_Constructor"><span id="AccessControlPointcut_53_27" title="Not referenced">AccessControlPointcut</span></span> = &lt;
    <span class="cons_String">pointcut</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_54_15" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">(</span> &lt;{<a href="../WebDSL-Core.sdf3/#FormalArg_10_3" id="FormalArg_54_23" title="Defined at ../WebDSL-Core.sdf3 line 10, 36">FormalArg</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span> <span class="cons_String">{</span>
      &lt;{<a href="#AccessControlPointcutElement_16_45" id="AccessControlPointcutElement_55_9" title="Defined at line 16, 71">AccessControlPointcutElement</a> <span class="cons_Lit">","</span>}*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#AccessControlDefinition_28_8" id="AccessControlDefinition_58_3" title="Referenced at line 28, 32">AccessControlDefinition</a>.<span class="cons_Constructor"><span id="Rule_58_27" title="Not referenced">Rule</span></span> = <a href="#AccessControlRule_16_27" id="AccessControlRule_58_34" title="Defined at line 16, 60, 65">AccessControlRule</a>

  <a href="#AccessControlRule_58_34" id="AccessControlRule_60_3" title="Referenced at line 58, 62">AccessControlRule</a>.<span class="cons_Constructor"><span id="AccessControlRule_60_21" title="Not referenced">AccessControlRule</span></span> = &lt;
    <span class="cons_String">rule</span> &lt;<a href="#AccessControlType_114_3" id="AccessControlType_61_11" title="Defined at line 114, 118, 119, 120, 121, 122">AccessControlType</a>&gt; &lt;<a href="#MatchName_17_41" id="MatchName_61_31" title="Defined at line 17, 21, 22">MatchName</a>&gt; &lt;<a href="#OptMatchArgs_13_3" id="OptMatchArgs_61_43" title="Defined at line 13, 103, 104">OptMatchArgs</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="../WebDSL-Action.sdf3/#Exp_34_3" id="Exp_62_8" title="Defined at ../WebDSL-Action.sdf3 line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; &lt;<a href="#AccessControlRule_16_27" id="AccessControlRule_62_14" title="Defined at line 16, 60, 65">AccessControlRule</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#AccessControlRule_58_34" id="AccessControlRule_65_3" title="Referenced at line 58, 62">AccessControlRule</a>.<span class="cons_Constructor"><span id="SpecialAccessControlRule_65_21" title="Not referenced">SpecialAccessControlRule</span></span> = &lt;
    <span class="cons_String">rule</span> <span class="cons_String">logsql</span> <span class="cons_String">{</span>
      &lt;<a href="../WebDSL-Action.sdf3/#Exp_34_3" id="Exp_67_8" title="Defined at ../WebDSL-Action.sdf3 line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;
    <span class="cons_String">}</span>
  &gt;

  <a href="#AccessControlPointcutElement_55_9" id="AccessControlPointcutElement_71_3" title="Referenced at line 55">AccessControlPointcutElement</a>.<span class="cons_Constructor"><span id="AccessControlPointcutElement_71_32" title="Not referenced">AccessControlPointcutElement</span></span> = &lt;
    &lt;<a href="#AccessControlType_114_3" id="AccessControlType_72_6" title="Defined at line 114, 118, 119, 120, 121, 122">AccessControlType</a>&gt; &lt;<a href="#MatchName_17_41" id="MatchName_72_26" title="Defined at line 17, 21, 22">MatchName</a>&gt; <span class="cons_String">(</span> &lt;{<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_72_41" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a> <span class="cons_Lit">","</span>}*&gt; &lt;<a href="#OptWildCardArg_13_22" id="OptWildCardArg_72_52" title="Defined at line 13, 109, 110">OptWildCardArg</a>&gt; <span class="cons_String">)</span>
  &gt;

  <span id="Section_75_3" title="Not referenced">Section</span>.<span class="cons_Constructor"><span id="ACPolicy_75_11" title="Not referenced">ACPolicy</span></span> = &lt;
    <span class="cons_String">access</span> <span class="cons_String">control</span> <span class="cons_String">policy</span> &lt;<a href="#PolicyExp_17_31" id="PolicyExp_76_28" title="Defined at line 17, 78, 79, 80, 81">PolicyExp</a>&gt;
  &gt;
  <a href="#PolicyExp_76_28" id="PolicyExp_78_3" title="Referenced at line 76, 79, 80, 81, 126, 127">PolicyExp</a>.<span class="cons_Constructor"><span id="Name_78_13" title="Not referenced">Name</span></span> = <a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_78_20" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>
  <a href="#PolicyExp_76_28" id="PolicyExp_79_3" title="Referenced at line 76, 79, 80, 81, 126, 127">PolicyExp</a> = &lt;<span class="cons_String">(</span> &lt;<a href="#PolicyExp_17_31" id="PolicyExp_79_19" title="Defined at line 17, 78, 79, 80, 81">PolicyExp</a>&gt; <span class="cons_String">)</span>&gt; {<span class="keyword">bracket</span>}
  <a href="#PolicyExp_76_28" id="PolicyExp_80_3" title="Referenced at line 76, 79, 80, 81, 126, 127">PolicyExp</a>.<span class="cons_Constructor"><a href="#PolicyAnd_126_20" id="PolicyAnd_80_13" title="Referenced at line 126">PolicyAnd</a></span> = &lt;&lt;<a href="#PolicyExp_17_31" id="PolicyExp_80_27" title="Defined at line 17, 78, 79, 80, 81">PolicyExp</a>&gt; <span class="cons_String">AND</span> &lt;<a href="#PolicyExp_17_31" id="PolicyExp_80_43" title="Defined at line 17, 78, 79, 80, 81">PolicyExp</a>&gt;&gt;
  <a href="#PolicyExp_76_28" id="PolicyExp_81_3" title="Referenced at line 76, 79, 80, 81, 126, 127">PolicyExp</a>.<span class="cons_Constructor"><a href="#PolicyOr_127_20" id="PolicyOr_81_13" title="Referenced at line 127">PolicyOr</a></span> = &lt;&lt;<a href="#PolicyExp_17_31" id="PolicyExp_81_26" title="Defined at line 17, 78, 79, 80, 81">PolicyExp</a>&gt; <span class="cons_String">OR</span> &lt;<a href="#PolicyExp_17_31" id="PolicyExp_81_41" title="Defined at line 17, 78, 79, 80, 81">PolicyExp</a>&gt;&gt;

  <span id="EntityBodyDeclaration_83_3" title="Not referenced">EntityBodyDeclaration</span>.<span class="cons_Constructor"><span id="PredicateInEntity_83_25" title="Not referenced">PredicateInEntity</span></span> = &lt;
    <span class="cons_String">predicate</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_84_16" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; &lt;<a href="../WebDSL-Core.sdf3/#OptFormalArgs_10_13" id="OptFormalArgs_84_21" title="Defined at ../WebDSL-Core.sdf3 line 10, 37, 38">OptFormalArgs</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="../WebDSL-Action.sdf3/#Exp_34_3" id="Exp_85_8" title="Defined at ../WebDSL-Action.sdf3 line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;
    <span class="cons_String">}</span>
  &gt;

  <span id="Modifier_89_3" title="Not referenced">Modifier</span>.<span class="cons_Constructor"><span id="IgnoreAccessControl_89_12" title="Not referenced">IgnoreAccessControl</span></span> = &lt;<span class="cons_String">ignore-access-control</span>&gt;

  <span id="TemplateElement_91_3" title="Not referenced">TemplateElement</span>.<span class="cons_Constructor"><span id="AccessControlImportRules_91_19" title="Not referenced">AccessControlImportRules</span></span> = &lt;
    <span class="cons_String">apply</span> <span class="cons_String">ac</span> <span class="cons_String">rules</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_92_21" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">(</span> &lt;{<a href="#AccessControlImportRulesArg_17_3" id="AccessControlImportRulesArg_92_29" title="Defined at line 17, 101">AccessControlImportRulesArg</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>
  &gt;

<span class="keyword">lexical syntax</span>

  <span id="TemplateId_97_3" title="Not referenced">TemplateId</span> = <span class="cons_Lit">"rules"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free syntax</span>

  <a href="#AccessControlImportRulesArg_92_29" id="AccessControlImportRulesArg_101_3" title="Referenced at line 92">AccessControlImportRulesArg</a>.<span class="cons_Constructor"><span id="ACVar_101_31" title="Not referenced">ACVar</span></span> = <a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_101_39" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>

  <a href="#OptMatchArgs_61_43" id="OptMatchArgs_103_3" title="Referenced at line 61">OptMatchArgs</a>.<span class="cons_Constructor"><span id="MatchArgs_103_16" title="Not referenced">MatchArgs</span></span> = &lt;<span class="cons_String">(</span> &lt;{<a href="../WebDSL-Core.sdf3/#FormalArg_10_3" id="FormalArg_103_33" title="Defined at ../WebDSL-Core.sdf3 line 10, 36">FormalArg</a> <span class="cons_Lit">","</span>}*&gt; &lt;<a href="#OptWildCardArg_13_22" id="OptWildCardArg_103_51" title="Defined at line 13, 109, 110">OptWildCardArg</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#OptMatchArgs_61_43" id="OptMatchArgs_104_3" title="Referenced at line 61">OptMatchArgs</a>.<span class="cons_Constructor"><span id="OptMatchArgsNone_104_16" title="Not referenced">OptMatchArgsNone</span></span> = &lt;&gt;

  <a href="#OptId_27_27" id="OptId_106_3" title="Referenced at line 27, 31">OptId</a>.<span class="cons_Constructor"><span id="Id_106_9" title="Not referenced">Id</span></span> = <a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_106_14" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>
  <a href="#OptId_27_27" id="OptId_107_3" title="Referenced at line 27, 31">OptId</a>.<span class="cons_Constructor"><span id="OptIdNone_107_9" title="Not referenced">OptIdNone</span></span> = &lt;&gt;

  <a href="#OptWildCardArg_22_39" id="OptWildCardArg_109_3" title="Referenced at line 22, 72, 103">OptWildCardArg</a>.<span class="cons_Constructor"><span id="WildCardArg_109_18" title="Not referenced">WildCardArg</span></span> = &lt;<span class="cons_String">*</span>&gt;
  <a href="#OptWildCardArg_22_39" id="OptWildCardArg_110_3" title="Referenced at line 22, 72, 103">OptWildCardArg</a>.<span class="cons_Constructor"><span id="OptWildCardArgNone_110_18" title="Not referenced">OptWildCardArgNone</span></span> = &lt;&gt;

<span class="keyword">context-free sorts</span>

  <a href="#AccessControlType_61_11" id="AccessControlType_114_3" title="Referenced at line 61, 72">AccessControlType</a>

<span class="keyword">context-free syntax</span>

  <a href="#AccessControlType_61_11" id="AccessControlType_118_3" title="Referenced at line 61, 72">AccessControlType</a>.<span class="cons_Constructor"><span id="ACTypePage_118_21" title="Not referenced">ACTypePage</span></span>          = &lt;<span class="cons_String">page</span>&gt;
  <a href="#AccessControlType_61_11" id="AccessControlType_119_3" title="Referenced at line 61, 72">AccessControlType</a>.<span class="cons_Constructor"><span id="ACTypeAction_119_21" title="Not referenced">ACTypeAction</span></span>        = &lt;<span class="cons_String">action</span>&gt;
  <a href="#AccessControlType_61_11" id="AccessControlType_120_3" title="Referenced at line 61, 72">AccessControlType</a>.<span class="cons_Constructor"><span id="ACTypeTemplate_120_21" title="Not referenced">ACTypeTemplate</span></span>      = &lt;<span class="cons_String">template</span>&gt;
  <a href="#AccessControlType_61_11" id="AccessControlType_121_3" title="Referenced at line 61, 72">AccessControlType</a>.<span class="cons_Constructor"><span id="ACTypeAjaxTemplate_121_21" title="Not referenced">ACTypeAjaxTemplate</span></span>  = &lt;<span class="cons_String">ajaxtemplate</span>&gt;
  <a href="#AccessControlType_61_11" id="AccessControlType_122_3" title="Referenced at line 61, 72">AccessControlType</a>.<span class="cons_Constructor"><span id="ACTypePointcut_122_21" title="Not referenced">ACTypePointcut</span></span>      = &lt;<span class="cons_String">pointcut</span>&gt;

<span class="keyword">context-free priorities</span>

  {<span class="keyword">left</span>: <a href="#PolicyExp_17_31" id="PolicyExp_126_10" title="Defined at line 17, 78, 79, 80, 81">PolicyExp</a>.<span class="cons_Constructor"><a href="#PolicyAnd_80_13" id="PolicyAnd_126_20" title="Defined at line 80">PolicyAnd</a></span>} &gt;
  {<span class="keyword">left</span>: <a href="#PolicyExp_17_31" id="PolicyExp_127_10" title="Defined at line 17, 78, 79, 80, 81">PolicyExp</a>.<span class="cons_Constructor"><a href="#PolicyOr_81_13" id="PolicyOr_127_20" title="Defined at line 81">PolicyOr</a></span>}

</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
