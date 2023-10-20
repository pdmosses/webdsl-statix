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
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix.sdf3/#WebDSL-AccessControl_32_52" id="WebDSL-AccessControl_7_27" title="Referenced at ../webdsl-statix.sdf3 line 4">WebDSL-AccessControl</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3/#WebDSL-Action_7_20" id="WebDSL-Action_39_52" title="Defined at ../WebDSL-Action.sdf3 line 1">WebDSL-Action</a>
  <a href="../WebDSL-Core.sdf3/#WebDSL-Core_7_18" id="WebDSL-Core_55_66" title="Defined at ../WebDSL-Core.sdf3 line 1">WebDSL-Core</a>
  <a href="../WebDSL-DataModel.sdf3/#WebDSL-DataModel_7_23" id="WebDSL-DataModel_69_85" title="Defined at ../WebDSL-DataModel.sdf3 line 1">WebDSL-DataModel</a>
  <a href="../WebDSL-Lexical.sdf3/#WebDSL-Lexical_7_21" id="WebDSL-Lexical_88_102" title="Defined at ../WebDSL-Lexical.sdf3 line 1">WebDSL-Lexical</a>
  <a href="../WebDSL-UI.sdf3/#WebDSL-UI_7_16" id="WebDSL-UI_105_114" title="Defined at ../WebDSL-UI.sdf3 line 1">WebDSL-UI</a>

<span class="keyword">context-free sorts</span>

  <span class="layout">// Optional sorts</span>
  <a href="#OptMatchArgs_1380_1392" id="OptMatchArgs_158_170" title="Referenced at line 61">OptMatchArgs</a> <a href="#OptId_532_537" id="OptId_171_176" title="Referenced at line 27, 31">OptId</a> <a href="#OptWildCardArg_428_442" id="OptWildCardArg_177_191" title="Referenced at line 22, 72, 103">OptWildCardArg</a>

  <span class="layout">// Access control sorts</span>
  <a href="#AccessControlDefinition_546_569" id="AccessControlDefinition_221_244" title="Referenced at line 28, 32">AccessControlDefinition</a> <a href="#AccessControlRule_1277_1294" id="AccessControlRule_245_262" title="Referenced at line 58, 62">AccessControlRule</a> <a href="#AccessControlPointcutElement_1198_1226" id="AccessControlPointcutElement_263_291" title="Referenced at line 55">AccessControlPointcutElement</a>
  <a href="#AccessControlImportRulesArg_2142_2169" id="AccessControlImportRulesArg_294_321" title="Referenced at line 92">AccessControlImportRulesArg</a> <a href="#PolicyExp_1717_1726" id="PolicyExp_322_331" title="Referenced at line 76, 79, 80, 81, 126, 127">PolicyExp</a> <a href="#MatchName_1368_1377" id="MatchName_332_341" title="Referenced at line 61, 72">MatchName</a>

<span class="keyword">syntax</span>

  <a href="#MatchName_1368_1377" id="MatchName_353_362" title="Referenced at line 61, 72">MatchName</a><span class="keyword">-CF</span>.<span class="cons_Constructor"><span id="MatchNameWildCard_366_383" title="Not referenced locally, nor via imports">MatchNameWildCard</span></span> = <span class="cons_Lit">"*"</span>
  <a href="#MatchName_1368_1377" id="MatchName_392_401" title="Referenced at line 61, 72">MatchName</a><span class="keyword">-CF</span>.<span class="cons_Constructor"><span id="MatchName_405_414" title="Not referenced locally, nor via imports">MatchName</span></span> = <a href="../WebDSL-Lexical.sdf3/#PageId_89_95" id="PageId_417_423" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 17">PageId</a><span class="keyword">-LEX</span> <a href="#OptWildCardArg_177_191" id="OptWildCardArg_428_442" title="Defined at line 13, 109, 110">OptWildCardArg</a><span class="keyword">-CF</span>

<span class="keyword">context-free syntax</span>

  <span id="Section_470_477" title="Not referenced locally, nor via imports">Section</span>.<span class="cons_Constructor"><span id="AccessControlDefinition_478_501" title="Not referenced locally, nor via imports">AccessControlDefinition</span></span> = &lt;
    <span class="cons_String">access</span> <span class="cons_String">control</span> <span class="cons_String">rules</span> &lt;<a href="#OptId_171_176" id="OptId_532_537" title="Defined at line 13, 106, 107">OptId</a>&gt;
      &lt;<a href="#AccessControlDefinition_221_244" id="AccessControlDefinition_546_569" title="Defined at line 16, 45, 50, 53, 58">AccessControlDefinition</a>*&gt;
  &gt;
  <span id="Section_578_585" title="Not referenced locally, nor via imports">Section</span>.<span class="cons_Constructor"><span id="AccessControlDefinitionAlt_586_612" title="Not referenced locally, nor via imports">AccessControlDefinitionAlt</span></span> = &lt;
    <span class="cons_String">access</span> <span class="cons_String">control</span> <span class="cons_String">rules</span> <span class="cons_String">{</span> &lt;<a href="#OptId_171_176" id="OptId_645_650" title="Defined at line 13, 106, 107">OptId</a>&gt;
      &lt;<a href="#AccessControlDefinition_221_244" id="AccessControlDefinition_659_682" title="Defined at line 16, 45, 50, 53, 58">AccessControlDefinition</a>*&gt;
    <span class="cons_String">}</span>
  &gt;

  <span id="Definition_698_708" title="Not referenced locally, nor via imports">Definition</span>.<span class="cons_Constructor"><span id="Predicate_709_718" title="Not referenced locally, nor via imports">Predicate</span></span> = &lt;
    <span class="cons_String">predicate</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_86_88" id="Id_738_740" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; &lt;<a href="../WebDSL-Core.sdf3/#OptFormalArgs_113_126" id="OptFormalArgs_743_756" title="Defined at ../WebDSL-Core.sdf3 line 10, 37, 38">OptFormalArgs</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="../WebDSL-Action.sdf3/#Exp_757_760" id="Exp_767_770" title="Defined at ../WebDSL-Action.sdf3 line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;
    <span class="cons_String">}</span>
  &gt;
  <span id="Definition_784_794" title="Not referenced locally, nor via imports">Definition</span>.<span class="cons_Constructor"><span id="AccessControlPrincipalDef_795_820" title="Not referenced locally, nor via imports">AccessControlPrincipalDef</span></span> = &lt;
    <span class="cons_String">principal</span> <span class="cons_String">is</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_86_88" id="Id_843_845" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">with</span> <span class="cons_String">credentials</span> &lt;{<a href="../WebDSL-Lexical.sdf3/#Id_86_88" id="Id_866_868" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a> <span class="cons_Lit">","</span>}+&gt;
  &gt;

  <a href="#AccessControlDefinition_546_569" id="AccessControlDefinition_883_906" title="Referenced at line 28, 32">AccessControlDefinition</a>.<span class="cons_Constructor"><span id="PredicateAc_907_918" title="Not referenced locally, nor via imports">PredicateAc</span></span> = &lt;
    <span class="cons_String">predicate</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_86_88" id="Id_938_940" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; &lt;<a href="../WebDSL-Core.sdf3/#OptFormalArgs_113_126" id="OptFormalArgs_943_956" title="Defined at ../WebDSL-Core.sdf3 line 10, 37, 38">OptFormalArgs</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="../WebDSL-Action.sdf3/#Exp_757_760" id="Exp_967_970" title="Defined at ../WebDSL-Action.sdf3 line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#AccessControlDefinition_546_569" id="AccessControlDefinition_984_1007" title="Referenced at line 28, 32">AccessControlDefinition</a>.<span class="cons_Constructor"><span id="AccessControlPrincipalAcDef_1008_1035" title="Not referenced locally, nor via imports">AccessControlPrincipalAcDef</span></span> = &lt;
    <span class="cons_String">principal</span> <span class="cons_String">is</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_86_88" id="Id_1058_1060" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">with</span> <span class="cons_String">credentials</span> &lt;{<a href="../WebDSL-Lexical.sdf3/#Id_86_88" id="Id_1081_1083" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a> <span class="cons_Lit">","</span>}+&gt;
  &gt;
  <a href="#AccessControlDefinition_546_569" id="AccessControlDefinition_1097_1120" title="Referenced at line 28, 32">AccessControlDefinition</a>.<span class="cons_Constructor"><span id="AccessControlPointcut_1121_1142" title="Not referenced locally, nor via imports">AccessControlPointcut</span></span> = &lt;
    <span class="cons_String">pointcut</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_86_88" id="Id_1161_1163" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">(</span> &lt;{<a href="../WebDSL-Core.sdf3/#FormalArg_103_112" id="FormalArg_1169_1178" title="Defined at ../WebDSL-Core.sdf3 line 10, 36">FormalArg</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span> <span class="cons_String">{</span>
      &lt;{<a href="#AccessControlPointcutElement_263_291" id="AccessControlPointcutElement_1198_1226" title="Defined at line 16, 71">AccessControlPointcutElement</a> <span class="cons_Lit">","</span>}*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#AccessControlDefinition_546_569" id="AccessControlDefinition_1246_1269" title="Referenced at line 28, 32">AccessControlDefinition</a>.<span class="cons_Constructor"><span id="Rule_1270_1274" title="Not referenced locally, nor via imports">Rule</span></span> = <a href="#AccessControlRule_245_262" id="AccessControlRule_1277_1294" title="Defined at line 16, 60, 65">AccessControlRule</a>

  <a href="#AccessControlRule_1277_1294" id="AccessControlRule_1298_1315" title="Referenced at line 58, 62">AccessControlRule</a>.<span class="cons_Constructor"><span id="AccessControlRule_1316_1333" title="Not referenced locally, nor via imports">AccessControlRule</span></span> = &lt;
    <span class="cons_String">rule</span> &lt;<a href="#AccessControlType_2542_2559" id="AccessControlType_1348_1365" title="Defined at line 114, 118, 119, 120, 121, 122">AccessControlType</a>&gt; &lt;<a href="#MatchName_332_341" id="MatchName_1368_1377" title="Defined at line 17, 21, 22">MatchName</a>&gt; &lt;<a href="#OptMatchArgs_158_170" id="OptMatchArgs_1380_1392" title="Defined at line 13, 103, 104">OptMatchArgs</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="../WebDSL-Action.sdf3/#Exp_757_760" id="Exp_1403_1406" title="Defined at ../WebDSL-Action.sdf3 line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; &lt;<a href="#AccessControlRule_245_262" id="AccessControlRule_1409_1426" title="Defined at line 16, 60, 65">AccessControlRule</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#AccessControlRule_1277_1294" id="AccessControlRule_1441_1458" title="Referenced at line 58, 62">AccessControlRule</a>.<span class="cons_Constructor"><span id="SpecialAccessControlRule_1459_1483" title="Not referenced locally, nor via imports">SpecialAccessControlRule</span></span> = &lt;
    <span class="cons_String">rule</span> <span class="cons_String">logsql</span> <span class="cons_String">{</span>
      &lt;<a href="../WebDSL-Action.sdf3/#Exp_757_760" id="Exp_1513_1516" title="Defined at ../WebDSL-Action.sdf3 line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;
    <span class="cons_String">}</span>
  &gt;

  <a href="#AccessControlPointcutElement_1198_1226" id="AccessControlPointcutElement_1531_1559" title="Referenced at line 55">AccessControlPointcutElement</a>.<span class="cons_Constructor"><span id="AccessControlPointcutElement_1560_1588" title="Not referenced locally, nor via imports">AccessControlPointcutElement</span></span> = &lt;
    &lt;<a href="#AccessControlType_2542_2559" id="AccessControlType_1598_1615" title="Defined at line 114, 118, 119, 120, 121, 122">AccessControlType</a>&gt; &lt;<a href="#MatchName_332_341" id="MatchName_1618_1627" title="Defined at line 17, 21, 22">MatchName</a>&gt; <span class="cons_String">(</span> &lt;{<a href="../WebDSL-Lexical.sdf3/#Id_86_88" id="Id_1633_1635" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a> <span class="cons_Lit">","</span>}*&gt; &lt;<a href="#OptWildCardArg_177_191" id="OptWildCardArg_1644_1658" title="Defined at line 13, 109, 110">OptWildCardArg</a>&gt; <span class="cons_String">)</span>
  &gt;

  <span id="Section_1669_1676" title="Not referenced locally, nor via imports">Section</span>.<span class="cons_Constructor"><span id="ACPolicy_1677_1685" title="Not referenced locally, nor via imports">ACPolicy</span></span> = &lt;
    <span class="cons_String">access</span> <span class="cons_String">control</span> <span class="cons_String">policy</span> &lt;<a href="#PolicyExp_322_331" id="PolicyExp_1717_1726" title="Defined at line 17, 78, 79, 80, 81">PolicyExp</a>&gt;
  &gt;
  <a href="#PolicyExp_1717_1726" id="PolicyExp_1734_1743" title="Referenced at line 76, 79, 80, 81, 126, 127">PolicyExp</a>.<span class="cons_Constructor"><span id="Name_1744_1748" title="Not referenced locally, nor via imports">Name</span></span> = <a href="../WebDSL-Lexical.sdf3/#Id_86_88" id="Id_1751_1753" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>
  <a href="#PolicyExp_1717_1726" id="PolicyExp_1756_1765" title="Referenced at line 76, 79, 80, 81, 126, 127">PolicyExp</a> = &lt;<span class="cons_String">(</span> &lt;<a href="#PolicyExp_322_331" id="PolicyExp_1772_1781" title="Defined at line 17, 78, 79, 80, 81">PolicyExp</a>&gt; <span class="cons_String">)</span>&gt; {<span class="keyword">bracket</span>}
  <a href="#PolicyExp_1717_1726" id="PolicyExp_1798_1807" title="Referenced at line 76, 79, 80, 81, 126, 127">PolicyExp</a>.<span class="cons_Constructor"><a href="#PolicyAnd_2890_2899" id="PolicyAnd_1808_1817" title="Referenced at line 126">PolicyAnd</a></span> = &lt;&lt;<a href="#PolicyExp_322_331" id="PolicyExp_1822_1831" title="Defined at line 17, 78, 79, 80, 81">PolicyExp</a>&gt; <span class="cons_String">AND</span> &lt;<a href="#PolicyExp_322_331" id="PolicyExp_1838_1847" title="Defined at line 17, 78, 79, 80, 81">PolicyExp</a>&gt;&gt;
  <a href="#PolicyExp_1717_1726" id="PolicyExp_1852_1861" title="Referenced at line 76, 79, 80, 81, 126, 127">PolicyExp</a>.<span class="cons_Constructor"><a href="#PolicyOr_2922_2930" id="PolicyOr_1862_1870" title="Referenced at line 127">PolicyOr</a></span> = &lt;&lt;<a href="#PolicyExp_322_331" id="PolicyExp_1875_1884" title="Defined at line 17, 78, 79, 80, 81">PolicyExp</a>&gt; <span class="cons_String">OR</span> &lt;<a href="#PolicyExp_322_331" id="PolicyExp_1890_1899" title="Defined at line 17, 78, 79, 80, 81">PolicyExp</a>&gt;&gt;

  <span id="EntityBodyDeclaration_1905_1926" title="Not referenced locally, nor via imports">EntityBodyDeclaration</span>.<span class="cons_Constructor"><span id="PredicateInEntity_1927_1944" title="Not referenced locally, nor via imports">PredicateInEntity</span></span> = &lt;
    <span class="cons_String">predicate</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_86_88" id="Id_1964_1966" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; &lt;<a href="../WebDSL-Core.sdf3/#OptFormalArgs_113_126" id="OptFormalArgs_1969_1982" title="Defined at ../WebDSL-Core.sdf3 line 10, 37, 38">OptFormalArgs</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="../WebDSL-Action.sdf3/#Exp_757_760" id="Exp_1993_1996" title="Defined at ../WebDSL-Action.sdf3 line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;
    <span class="cons_String">}</span>
  &gt;

  <span id="Modifier_2011_2019" title="Not referenced locally, nor via imports">Modifier</span>.<span class="cons_Constructor"><span id="IgnoreAccessControl_2020_2039" title="Not referenced locally, nor via imports">IgnoreAccessControl</span></span> = &lt;<span class="cons_String">ignore-access-control</span>&gt;

  <span id="TemplateElement_2069_2084" title="Not referenced locally, nor via imports">TemplateElement</span>.<span class="cons_Constructor"><span id="AccessControlImportRules_2085_2109" title="Not referenced locally, nor via imports">AccessControlImportRules</span></span> = &lt;
    <span class="cons_String">apply</span> <span class="cons_String">ac</span> <span class="cons_String">rules</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_86_88" id="Id_2134_2136" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">(</span> &lt;{<a href="#AccessControlImportRulesArg_294_321" id="AccessControlImportRulesArg_2142_2169" title="Defined at line 17, 101">AccessControlImportRulesArg</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>
  &gt;

<span class="keyword">lexical syntax</span>

  <span id="TemplateId_2202_2212" title="Not referenced locally, nor via imports">TemplateId</span> = <span class="cons_Lit">"rules"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free syntax</span>

  <a href="#AccessControlImportRulesArg_2142_2169" id="AccessControlImportRulesArg_2256_2283" title="Referenced at line 92">AccessControlImportRulesArg</a>.<span class="cons_Constructor"><span id="ACVar_2284_2289" title="Not referenced locally, nor via imports">ACVar</span></span> = <a href="../WebDSL-Lexical.sdf3/#Id_86_88" id="Id_2292_2294" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>

  <a href="#OptMatchArgs_1380_1392" id="OptMatchArgs_2298_2310" title="Referenced at line 61">OptMatchArgs</a>.<span class="cons_Constructor"><span id="MatchArgs_2311_2320" title="Not referenced locally, nor via imports">MatchArgs</span></span> = &lt;<span class="cons_String">(</span> &lt;{<a href="../WebDSL-Core.sdf3/#FormalArg_103_112" id="FormalArg_2328_2337" title="Defined at ../WebDSL-Core.sdf3 line 10, 36">FormalArg</a> <span class="cons_Lit">","</span>}*&gt; &lt;<a href="#OptWildCardArg_177_191" id="OptWildCardArg_2346_2360" title="Defined at line 13, 109, 110">OptWildCardArg</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#OptMatchArgs_1380_1392" id="OptMatchArgs_2367_2379" title="Referenced at line 61">OptMatchArgs</a>.<span class="cons_Constructor"><span id="OptMatchArgsNone_2380_2396" title="Not referenced locally, nor via imports">OptMatchArgsNone</span></span> = &lt;&gt;

  <a href="#OptId_532_537" id="OptId_2405_2410" title="Referenced at line 27, 31">OptId</a>.<span class="cons_Constructor"><span id="Id_2411_2413" title="Not referenced locally, nor via imports">Id</span></span> = <a href="../WebDSL-Lexical.sdf3/#Id_86_88" id="Id_2416_2418" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>
  <a href="#OptId_532_537" id="OptId_2421_2426" title="Referenced at line 27, 31">OptId</a>.<span class="cons_Constructor"><span id="OptIdNone_2427_2436" title="Not referenced locally, nor via imports">OptIdNone</span></span> = &lt;&gt;

  <a href="#OptWildCardArg_428_442" id="OptWildCardArg_2445_2459" title="Referenced at line 22, 72, 103">OptWildCardArg</a>.<span class="cons_Constructor"><span id="WildCardArg_2460_2471" title="Not referenced locally, nor via imports">WildCardArg</span></span> = &lt;<span class="cons_String">*</span>&gt;
  <a href="#OptWildCardArg_428_442" id="OptWildCardArg_2480_2494" title="Referenced at line 22, 72, 103">OptWildCardArg</a>.<span class="cons_Constructor"><span id="OptWildCardArgNone_2495_2513" title="Not referenced locally, nor via imports">OptWildCardArgNone</span></span> = &lt;&gt;

<span class="keyword">context-free sorts</span>

  <a href="#AccessControlType_1348_1365" id="AccessControlType_2542_2559" title="Referenced at line 61, 72">AccessControlType</a>

<span class="keyword">context-free syntax</span>

  <a href="#AccessControlType_1348_1365" id="AccessControlType_2584_2601" title="Referenced at line 61, 72">AccessControlType</a>.<span class="cons_Constructor"><span id="ACTypePage_2602_2612" title="Not referenced locally, nor via imports">ACTypePage</span></span>          = &lt;<span class="cons_String">page</span>&gt;
  <a href="#AccessControlType_1348_1365" id="AccessControlType_2633_2650" title="Referenced at line 61, 72">AccessControlType</a>.<span class="cons_Constructor"><span id="ACTypeAction_2651_2663" title="Not referenced locally, nor via imports">ACTypeAction</span></span>        = &lt;<span class="cons_String">action</span>&gt;
  <a href="#AccessControlType_1348_1365" id="AccessControlType_2684_2701" title="Referenced at line 61, 72">AccessControlType</a>.<span class="cons_Constructor"><span id="ACTypeTemplate_2702_2716" title="Not referenced locally, nor via imports">ACTypeTemplate</span></span>      = &lt;<span class="cons_String">template</span>&gt;
  <a href="#AccessControlType_1348_1365" id="AccessControlType_2737_2754" title="Referenced at line 61, 72">AccessControlType</a>.<span class="cons_Constructor"><span id="ACTypeAjaxTemplate_2755_2773" title="Not referenced locally, nor via imports">ACTypeAjaxTemplate</span></span>  = &lt;<span class="cons_String">ajaxtemplate</span>&gt;
  <a href="#AccessControlType_1348_1365" id="AccessControlType_2794_2811" title="Referenced at line 61, 72">AccessControlType</a>.<span class="cons_Constructor"><span id="ACTypePointcut_2812_2826" title="Not referenced locally, nor via imports">ACTypePointcut</span></span>      = &lt;<span class="cons_String">pointcut</span>&gt;

<span class="keyword">context-free priorities</span>

  {<span class="keyword">left</span>: <a href="#PolicyExp_322_331" id="PolicyExp_2880_2889" title="Defined at line 17, 78, 79, 80, 81">PolicyExp</a>.<span class="cons_Constructor"><a href="#PolicyAnd_1808_1817" id="PolicyAnd_2890_2899" title="Defined at line 80">PolicyAnd</a></span>} &gt;
  {<span class="keyword">left</span>: <a href="#PolicyExp_322_331" id="PolicyExp_2912_2921" title="Defined at line 17, 78, 79, 80, 81">PolicyExp</a>.<span class="cons_Constructor"><a href="#PolicyOr_1862_1870" id="PolicyOr_2922_2930" title="Defined at line 81">PolicyOr</a></span>}

</code></pre></td></tr></tbody></table></div>