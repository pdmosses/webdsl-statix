---
title: WebDSL-DataModel.sdf3
---

# `WebDSL-DataModel.sdf3`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-DataModel.sdf3]

[pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-DataModel.sdf3]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/syntax/WebDSL-DataModel.sdf3 "The source file on GitHub"

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
132
133
134
135
136
137
138
139
140
141
142
143
144
145
146
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix.sdf3#WebDSL-DataModel_119_135" id="WebDSL-DataModel_7_23" title="Referenced at ../webdsl-statix.sdf3 line 9">WebDSL-DataModel</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3#WebDSL-Action_7_20" id="WebDSL-Action_35_48" title="Defined at ../WebDSL-Action.sdf3 line 1">WebDSL-Action</a>
  <a href="../WebDSL-Core.sdf3#WebDSL-Core_7_18" id="WebDSL-Core_51_62" title="Defined at ../WebDSL-Core.sdf3 line 1">WebDSL-Core</a>
  <a href="../WebDSL-Lexical.sdf3#WebDSL-Lexical_7_21" id="WebDSL-Lexical_65_79" title="Defined at ../WebDSL-Lexical.sdf3 line 1">WebDSL-Lexical</a>

<span class="keyword">context-free sorts</span>

  <a href="#EntityBodyDeclaration_585_606" id="EntityBodyDeclaration_103_124" title="Referenced at line 37">EntityBodyDeclaration</a>

<span class="keyword">context-free syntax</span>

  <span id="Definition_149_159" title="Not referenced locally, nor via imports">Definition</span>.<span class="cons_Constructor"><span id="Entity_160_166" title="Not referenced locally, nor via imports">Entity</span></span> = &lt;
    <span class="cons_String">entity</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_183_185" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">:</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_190_192" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#EntityBodyDeclaration_103_124" id="EntityBodyDeclaration_203_224" title="Defined at line 10, 90, 93, 96">EntityBodyDeclaration</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <span id="Definition_239_249" title="Not referenced locally, nor via imports">Definition</span>.<span class="cons_Constructor"><span id="EntityNoSuper_250_263" title="Not referenced locally, nor via imports">EntityNoSuper</span></span> = &lt;
    <span class="cons_String">entity</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_280_282" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#EntityBodyDeclaration_103_124" id="EntityBodyDeclaration_293_314" title="Defined at line 10, 90, 93, 96">EntityBodyDeclaration</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <span id="Definition_329_339" title="Not referenced locally, nor via imports">Definition</span>.<span class="cons_Constructor"><span id="SessionEntity_340_353" title="Not referenced locally, nor via imports">SessionEntity</span></span> = &lt;
    <span class="cons_String">session</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_371_373" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#EntityBodyDeclaration_103_124" id="EntityBodyDeclaration_384_405" title="Defined at line 10, 90, 93, 96">EntityBodyDeclaration</a>*&gt;
    <span class="cons_String">}</span>
  &gt;

  <span id="Definition_421_431" title="Not referenced locally, nor via imports">Definition</span>.<span class="cons_Constructor"><span id="ExtendEntity_432_444" title="Not referenced locally, nor via imports">ExtendEntity</span></span> = &lt;
    <span class="cons_String">extend</span> <span class="cons_String">entity</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_468_470" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#EntityBodyDeclaration_103_124" id="EntityBodyDeclaration_481_502" title="Defined at line 10, 90, 93, 96">EntityBodyDeclaration</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <span id="Definition_517_527" title="Not referenced locally, nor via imports">Definition</span>.<span class="cons_Constructor"><span id="ExtendSessionEntity_528_547" title="Not referenced locally, nor via imports">ExtendSessionEntity</span></span> = &lt;
    <span class="cons_String">extend</span> <span class="cons_String">session</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_572_574" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#EntityBodyDeclaration_103_124" id="EntityBodyDeclaration_585_606" title="Defined at line 10, 90, 93, 96">EntityBodyDeclaration</a>*&gt;
    <span class="cons_String">}</span>
  &gt;

<span class="keyword">context-free restrictions</span>

  <span class="cons_Lit">"cache"</span> -/- [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_]

<span class="keyword">context-free syntax</span>

  <span id="Definition_699_709" title="Not referenced locally, nor via imports">Definition</span>.<span class="cons_Constructor"><span id="GlobalVarDecl_710_723" title="Not referenced locally, nor via imports">GlobalVarDecl</span></span> = &lt;
    <span class="cons_String">var</span> &lt;<a href="../WebDSL-Action.sdf3#VarId_1099_1104" id="VarId_737_742" title="Defined at ../WebDSL-Action.sdf3 line 41, 61, 206, 244, 245, 264, 265, 294, 295, 296">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="../WebDSL-Core.sdf3#Sort_195_199" id="Sort_747_751" title="Defined at ../WebDSL-Core.sdf3 line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>&gt;
  &gt;
  <span id="Definition_759_769" title="Not referenced locally, nor via imports">Definition</span>.<span class="cons_Constructor"><span id="GlobalVarDeclDepr_770_787" title="Not referenced locally, nor via imports">GlobalVarDeclDepr</span></span> = &lt;
    <span class="cons_String">var</span> &lt;<a href="../WebDSL-Action.sdf3#VarId_1099_1104" id="VarId_801_806" title="Defined at ../WebDSL-Action.sdf3 line 41, 61, 206, 244, 245, 264, 265, 294, 295, 296">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="../WebDSL-Core.sdf3#Sort_195_199" id="Sort_811_815" title="Defined at ../WebDSL-Core.sdf3 line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>&gt; <span class="cons_String">;</span>
  &gt; {<span class="keyword">deprecated</span>("remove ;")}
  <span id="Definition_850_860" title="Not referenced locally, nor via imports">Definition</span>.<span class="cons_Constructor"><span id="GlobalVarDeclInit_861_878" title="Not referenced locally, nor via imports">GlobalVarDeclInit</span></span> = &lt;
    <span class="cons_String">var</span> &lt;<a href="../WebDSL-Action.sdf3#VarId_1099_1104" id="VarId_892_897" title="Defined at ../WebDSL-Action.sdf3 line 41, 61, 206, 244, 245, 264, 265, 294, 295, 296">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="../WebDSL-Core.sdf3#Sort_195_199" id="Sort_902_906" title="Defined at ../WebDSL-Core.sdf3 line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>&gt; <span class="cons_String">:=</span> &lt;<a href="../WebDSL-Action.sdf3#Exp_757_760" id="Exp_912_915" title="Defined at ../WebDSL-Action.sdf3 line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;
  &gt;
  <span id="Definition_923_933" title="Not referenced locally, nor via imports">Definition</span>.<span class="cons_Constructor"><span id="GlobalVarDeclInitDepr_934_955" title="Not referenced locally, nor via imports">GlobalVarDeclInitDepr</span></span> = &lt;
    <span class="cons_String">var</span> &lt;<a href="../WebDSL-Action.sdf3#VarId_1099_1104" id="VarId_969_974" title="Defined at ../WebDSL-Action.sdf3 line 41, 61, 206, 244, 245, 264, 265, 294, 295, 296">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="../WebDSL-Core.sdf3#Sort_195_199" id="Sort_979_983" title="Defined at ../WebDSL-Core.sdf3 line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>&gt; <span class="cons_String">:=</span> &lt;<a href="../WebDSL-Action.sdf3#Exp_757_760" id="Exp_989_992" title="Defined at ../WebDSL-Action.sdf3 line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">;</span>
  &gt; {<span class="keyword">deprecated</span>("remove ;")}
  <span id="Definition_1027_1037" title="Not referenced locally, nor via imports">Definition</span>.<span class="cons_Constructor"><span id="GlobalVarDeclInitInferred_1038_1063" title="Not referenced locally, nor via imports">GlobalVarDeclInitInferred</span></span> = &lt;
    <span class="cons_String">var</span> &lt;<a href="../WebDSL-Action.sdf3#VarId_1099_1104" id="VarId_1077_1082" title="Defined at ../WebDSL-Action.sdf3 line 41, 61, 206, 244, 245, 264, 265, 294, 295, 296">VarId</a>&gt; <span class="cons_String">:=</span> &lt;<a href="../WebDSL-Action.sdf3#Exp_757_760" id="Exp_1088_1091" title="Defined at ../WebDSL-Action.sdf3 line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;
  &gt;
  <span id="Definition_1099_1109" title="Not referenced locally, nor via imports">Definition</span>.<span class="cons_Constructor"><span id="GlobalVarDeclInitInferredDepr_1110_1139" title="Not referenced locally, nor via imports">GlobalVarDeclInitInferredDepr</span></span> = &lt;
    <span class="cons_String">var</span> &lt;<a href="../WebDSL-Action.sdf3#VarId_1099_1104" id="VarId_1153_1158" title="Defined at ../WebDSL-Action.sdf3 line 41, 61, 206, 244, 245, 264, 265, 294, 295, 296">VarId</a>&gt; <span class="cons_String">:=</span> &lt;<a href="../WebDSL-Action.sdf3#Exp_757_760" id="Exp_1164_1167" title="Defined at ../WebDSL-Action.sdf3 line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">;</span>
  &gt; {<span class="keyword">deprecated</span>("remove ;")}
  <span id="Definition_1202_1212" title="Not referenced locally, nor via imports">Definition</span>.<span class="cons_Constructor"><span id="RequestVarDecl_1213_1227" title="Not referenced locally, nor via imports">RequestVarDecl</span></span> = &lt;
    <span class="cons_String">request</span> <span class="cons_String">var</span> &lt;<a href="../WebDSL-Action.sdf3#VarId_1099_1104" id="VarId_1249_1254" title="Defined at ../WebDSL-Action.sdf3 line 41, 61, 206, 244, 245, 264, 265, 294, 295, 296">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="../WebDSL-Core.sdf3#Sort_195_199" id="Sort_1259_1263" title="Defined at ../WebDSL-Core.sdf3 line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>&gt;
  &gt;
  <span id="Definition_1271_1281" title="Not referenced locally, nor via imports">Definition</span>.<span class="cons_Constructor"><span id="RequestVarDeclDepr_1282_1300" title="Not referenced locally, nor via imports">RequestVarDeclDepr</span></span> = &lt;
    <span class="cons_String">request</span> <span class="cons_String">var</span> &lt;<a href="../WebDSL-Action.sdf3#VarId_1099_1104" id="VarId_1322_1327" title="Defined at ../WebDSL-Action.sdf3 line 41, 61, 206, 244, 245, 264, 265, 294, 295, 296">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="../WebDSL-Core.sdf3#Sort_195_199" id="Sort_1332_1336" title="Defined at ../WebDSL-Core.sdf3 line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>&gt; <span class="cons_String">;</span>
  &gt; {<span class="keyword">deprecated</span>("remove ;")}
  <span id="Definition_1371_1381" title="Not referenced locally, nor via imports">Definition</span>.<span class="cons_Constructor"><span id="RequestVarDeclInit_1382_1400" title="Not referenced locally, nor via imports">RequestVarDeclInit</span></span> = &lt;
    <span class="cons_String">request</span> <span class="cons_String">var</span> &lt;<a href="../WebDSL-Action.sdf3#VarId_1099_1104" id="VarId_1422_1427" title="Defined at ../WebDSL-Action.sdf3 line 41, 61, 206, 244, 245, 264, 265, 294, 295, 296">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="../WebDSL-Core.sdf3#Sort_195_199" id="Sort_1432_1436" title="Defined at ../WebDSL-Core.sdf3 line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>&gt; <span class="cons_String">:=</span> &lt;<a href="../WebDSL-Action.sdf3#Exp_757_760" id="Exp_1442_1445" title="Defined at ../WebDSL-Action.sdf3 line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;
  &gt;
  <span id="Definition_1453_1463" title="Not referenced locally, nor via imports">Definition</span>.<span class="cons_Constructor"><span id="RequestVarDeclInitDepr_1464_1486" title="Not referenced locally, nor via imports">RequestVarDeclInitDepr</span></span> = &lt;
    <span class="cons_String">request</span> <span class="cons_String">var</span> &lt;<a href="../WebDSL-Action.sdf3#VarId_1099_1104" id="VarId_1508_1513" title="Defined at ../WebDSL-Action.sdf3 line 41, 61, 206, 244, 245, 264, 265, 294, 295, 296">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="../WebDSL-Core.sdf3#Sort_195_199" id="Sort_1518_1522" title="Defined at ../WebDSL-Core.sdf3 line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>&gt; <span class="cons_String">:=</span> &lt;<a href="../WebDSL-Action.sdf3#Exp_757_760" id="Exp_1528_1531" title="Defined at ../WebDSL-Action.sdf3 line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">;</span>
  &gt; {<span class="keyword">deprecated</span>("remove ;")}
  <span id="Definition_1566_1576" title="Not referenced locally, nor via imports">Definition</span>.<span class="cons_Constructor"><span id="RequestVarDeclInitInferred_1577_1603" title="Not referenced locally, nor via imports">RequestVarDeclInitInferred</span></span> = &lt;
    <span class="cons_String">request</span> <span class="cons_String">var</span> &lt;<a href="../WebDSL-Action.sdf3#VarId_1099_1104" id="VarId_1625_1630" title="Defined at ../WebDSL-Action.sdf3 line 41, 61, 206, 244, 245, 264, 265, 294, 295, 296">VarId</a>&gt; <span class="cons_String">:=</span> &lt;<a href="../WebDSL-Action.sdf3#Exp_757_760" id="Exp_1636_1639" title="Defined at ../WebDSL-Action.sdf3 line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;
  &gt;
  <span id="Definition_1647_1657" title="Not referenced locally, nor via imports">Definition</span>.<span class="cons_Constructor"><span id="RequestVarDeclInitInferredDepr_1658_1688" title="Not referenced locally, nor via imports">RequestVarDeclInitInferredDepr</span></span> = &lt;
    <span class="cons_String">request</span> <span class="cons_String">var</span> &lt;<a href="../WebDSL-Action.sdf3#VarId_1099_1104" id="VarId_1710_1715" title="Defined at ../WebDSL-Action.sdf3 line 41, 61, 206, 244, 245, 264, 265, 294, 295, 296">VarId</a>&gt; <span class="cons_String">:=</span> &lt;<a href="../WebDSL-Action.sdf3#Exp_757_760" id="Exp_1721_1724" title="Defined at ../WebDSL-Action.sdf3 line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">;</span>
  &gt; {<span class="keyword">deprecated</span>("remove ;")}

<span class="keyword">context-free sorts</span>

  <a href="#OptPropAnnos_1995_2007" id="OptPropAnnos_1780_1792" title="Referenced at line 94">OptPropAnnos</a> <a href="#PropKind_1977_1985" id="PropKind_1793_1801" title="Referenced at line 94">PropKind</a>

<span class="keyword">context-free syntax</span>

  <a href="#EntityBodyDeclaration_585_606" id="EntityBodyDeclaration_1826_1847" title="Referenced at line 37">EntityBodyDeclaration</a>.<span class="cons_Constructor"><span id="Property_1848_1856" title="Not referenced locally, nor via imports">Property</span></span> = &lt;
    &lt;<a href="../WebDSL-Action.sdf3#PropertyId_4036_4046" id="PropertyId_1866_1876" title="Defined at ../WebDSL-Action.sdf3 line 207">PropertyId</a>&gt; &lt;<a href="#PropKind_1793_1801" id="PropKind_1879_1887" title="Defined at line 86, 101, 102, 103, 104">PropKind</a>&gt; &lt;<a href="../WebDSL-Core.sdf3#Sort_195_199" id="Sort_1890_1894" title="Defined at ../WebDSL-Core.sdf3 line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>&gt; &lt;<a href="#OptPropAnnos_1780_1792" id="OptPropAnnos_1897_1909" title="Defined at line 86, 99, 100">OptPropAnnos</a>&gt;
  &gt;
  <a href="#EntityBodyDeclaration_585_606" id="EntityBodyDeclaration_1917_1938" title="Referenced at line 37">EntityBodyDeclaration</a>.<span class="cons_Constructor"><span id="DerivedProperty_1939_1954" title="Not referenced locally, nor via imports">DerivedProperty</span></span> = &lt;
    &lt;<a href="../WebDSL-Action.sdf3#PropertyId_4036_4046" id="PropertyId_1964_1974" title="Defined at ../WebDSL-Action.sdf3 line 207">PropertyId</a>&gt; &lt;<a href="#PropKind_1793_1801" id="PropKind_1977_1985" title="Defined at line 86, 101, 102, 103, 104">PropKind</a>&gt; &lt;<a href="../WebDSL-Core.sdf3#Sort_195_199" id="Sort_1988_1992" title="Defined at ../WebDSL-Core.sdf3 line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>&gt; &lt;<a href="#OptPropAnnos_1780_1792" id="OptPropAnnos_1995_2007" title="Defined at line 86, 99, 100">OptPropAnnos</a>&gt; <span class="cons_String">:=</span> &lt;<a href="../WebDSL-Action.sdf3#Exp_757_760" id="Exp_2013_2016" title="Defined at ../WebDSL-Action.sdf3 line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;
  &gt;
  <a href="#EntityBodyDeclaration_585_606" id="EntityBodyDeclaration_2024_2045" title="Referenced at line 37">EntityBodyDeclaration</a>.<span class="cons_Constructor"><span id="CachedEntity_2046_2058" title="Not referenced locally, nor via imports">CachedEntity</span></span> = &lt;
    <span class="cons_String">cache</span>
  &gt;
  <a href="#OptPropAnnos_1995_2007" id="OptPropAnnos_2079_2091" title="Referenced at line 94">OptPropAnnos</a>.<span class="cons_Constructor"><span id="PropAnnos_2092_2101" title="Not referenced locally, nor via imports">PropAnnos</span></span> = &lt;<span class="cons_String">(</span> &lt;{<a href="#Annotation_2288_2298" id="Annotation_2109_2119" title="Defined at line 108, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133">Annotation</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;
  <a href="#OptPropAnnos_1995_2007" id="OptPropAnnos_2132_2144" title="Referenced at line 94">OptPropAnnos</a>.<span class="cons_Constructor"><span id="OptPropAnnosNone_2145_2161" title="Not referenced locally, nor via imports">OptPropAnnosNone</span></span> = &lt;&gt;
  <a href="#PropKind_1977_1985" id="PropKind_2169_2177" title="Referenced at line 94">PropKind</a>.<span class="cons_Constructor"><span id="Simple_2178_2184" title="Not referenced locally, nor via imports">Simple</span></span> = &lt;<span class="cons_String">::</span>&gt;
  <a href="#PropKind_1977_1985" id="PropKind_2194_2202" title="Referenced at line 94">PropKind</a>.<span class="cons_Constructor"><span id="Ref_2203_2206" title="Not referenced locally, nor via imports">Ref</span></span> = &lt;<span class="cons_String">-</span>\&gt;&gt;
  <a href="#PropKind_1977_1985" id="PropKind_2217_2225" title="Referenced at line 94">PropKind</a>.<span class="cons_Constructor"><span id="Comp_2226_2230" title="Not referenced locally, nor via imports">Comp</span></span> = &lt;\&lt;\&gt;&gt;
  <a href="#PropKind_1977_1985" id="PropKind_2242_2250" title="Referenced at line 94">PropKind</a>.<span class="cons_Constructor"><span id="AnyProp_2251_2258" title="Not referenced locally, nor via imports">AnyProp</span></span> = &lt;<span class="cons_String">:</span>&gt;

<span class="keyword">context-free sorts</span>

  <a href="#Annotation_2109_2119" id="Annotation_2288_2298" title="Referenced at line 99; ../WebDSL-Type.sdf3 line 21">Annotation</a>

<span class="keyword">context-free syntax</span>

  <a href="#Annotation_2109_2119" id="Annotation_2323_2333" title="Referenced at line 99; ../WebDSL-Type.sdf3 line 21">Annotation</a>.<span class="cons_Constructor"><span id="SimpleAnno_2334_2344" title="Not referenced locally, nor via imports">SimpleAnno</span></span> = <a href="#AnnotationId_3332_3344" id="AnnotationId_2347_2359" title="Defined at line 137, 141, 142, 143, 144, 145, 146">AnnotationId</a>
  <a href="#Annotation_2109_2119" id="Annotation_2362_2372" title="Referenced at line 99; ../WebDSL-Type.sdf3 line 21">Annotation</a>.<span class="cons_Constructor"><span id="TransientAnno_2373_2386" title="Not referenced locally, nor via imports">TransientAnno</span></span> = &lt;<span class="cons_String">transient</span>&gt;
  <a href="#Annotation_2109_2119" id="Annotation_2403_2413" title="Referenced at line 99; ../WebDSL-Type.sdf3 line 21">Annotation</a>.<span class="cons_Constructor"><span id="IdAnno_2414_2420" title="Not referenced locally, nor via imports">IdAnno</span></span> = &lt;<span class="cons_String">id</span>&gt;
  <a href="#Annotation_2109_2119" id="Annotation_2430_2440" title="Referenced at line 99; ../WebDSL-Type.sdf3 line 21">Annotation</a>.<span class="cons_Constructor"><span id="NameAnno_2441_2449" title="Not referenced locally, nor via imports">NameAnno</span></span> = &lt;<span class="cons_String">name</span>&gt;
  <a href="#Annotation_2109_2119" id="Annotation_2461_2471" title="Referenced at line 99; ../WebDSL-Type.sdf3 line 21">Annotation</a>.<span class="cons_Constructor"><span id="CacheAnno_2472_2481" title="Not referenced locally, nor via imports">CacheAnno</span></span> = &lt;<span class="cons_String">cache</span>&gt;
  <a href="#Annotation_2109_2119" id="Annotation_2494_2504" title="Referenced at line 99; ../WebDSL-Type.sdf3 line 21">Annotation</a>.<span class="cons_Constructor"><span id="InverseAnno_2505_2516" title="Not referenced locally, nor via imports">InverseAnno</span></span> = &lt;<span class="cons_String">inverse</span> <span class="cons_String">=</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_2531_2533" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">.</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_2538_2540" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt;&gt;
  <a href="#Annotation_2109_2119" id="Annotation_2545_2555" title="Referenced at line 99; ../WebDSL-Type.sdf3 line 21">Annotation</a>.<span class="cons_Constructor"><span id="IncompleteInverseAnno_2556_2577" title="Not referenced locally, nor via imports">IncompleteInverseAnno</span></span> = &lt;<span class="cons_String">inverse</span> <span class="cons_String">=</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_2592_2594" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt;&gt;
  <a href="#Annotation_2109_2119" id="Annotation_2599_2609" title="Referenced at line 99; ../WebDSL-Type.sdf3 line 21">Annotation</a>.<span class="cons_Constructor"><span id="InverseSlaveAnno_2610_2626" title="Not referenced locally, nor via imports">InverseSlaveAnno</span></span> = &lt;<span class="cons_String">inverseSlave</span> <span class="cons_String">=</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_2646_2648" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">.</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_2653_2655" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt;&gt;
  <a href="#Annotation_2109_2119" id="Annotation_2660_2670" title="Referenced at line 99; ../WebDSL-Type.sdf3 line 21">Annotation</a>.<span class="cons_Constructor"><span id="InverseReferenceOnlyAnno_2671_2695" title="Not referenced locally, nor via imports">InverseReferenceOnlyAnno</span></span> = &lt;<span class="cons_String">inverse-reference-only</span>&gt;
  <a href="#Annotation_2109_2119" id="Annotation_2725_2735" title="Referenced at line 99; ../WebDSL-Type.sdf3 line 21">Annotation</a>.<span class="cons_Constructor"><span id="InlineAnno_2736_2746" title="Not referenced locally, nor via imports">InlineAnno</span></span> = &lt;<span class="cons_String">inline</span> <span class="cons_String">(</span> &lt;{<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_2761_2763" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;
  <a href="#Annotation_2109_2119" id="Annotation_2776_2786" title="Referenced at line 99; ../WebDSL-Type.sdf3 line 21">Annotation</a>.<span class="cons_Constructor"><span id="SelectAnno_2787_2797" title="Not referenced locally, nor via imports">SelectAnno</span></span> = &lt;<span class="cons_String">select</span> <span class="cons_String">=</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_2811_2813" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt;&gt;
  <a href="#Annotation_2109_2119" id="Annotation_2818_2828" title="Referenced at line 99; ../WebDSL-Type.sdf3 line 21">Annotation</a>.<span class="cons_Constructor"><span id="NotNullAnno_2829_2840" title="Not referenced locally, nor via imports">NotNullAnno</span></span> = &lt;<span class="cons_String">not</span> <span class="cons_String">null</span>&gt;
  <a href="#Annotation_2109_2119" id="Annotation_2856_2866" title="Referenced at line 99; ../WebDSL-Type.sdf3 line 21">Annotation</a>.<span class="cons_Constructor"><span id="NotEmptyAnno_2867_2879" title="Not referenced locally, nor via imports">NotEmptyAnno</span></span> = &lt;<span class="cons_String">not</span> <span class="cons_String">empty</span>&gt;
  <a href="#Annotation_2109_2119" id="Annotation_2896_2906" title="Referenced at line 99; ../WebDSL-Type.sdf3 line 21">Annotation</a>.<span class="cons_Constructor"><span id="AllowedAnno_2907_2918" title="Not referenced locally, nor via imports">AllowedAnno</span></span> = &lt;<span class="cons_String">allowed</span> <span class="cons_String">=</span> &lt;<a href="../WebDSL-Action.sdf3#Exp_757_760" id="Exp_2933_2936" title="Defined at ../WebDSL-Action.sdf3 line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;&gt;
  <a href="#Annotation_2109_2119" id="Annotation_2941_2951" title="Referenced at line 99; ../WebDSL-Type.sdf3 line 21">Annotation</a>.<span class="cons_Constructor"><span id="DefaultAnno_2952_2963" title="Not referenced locally, nor via imports">DefaultAnno</span></span> = &lt;<span class="cons_String">default</span> <span class="cons_String">=</span> &lt;<a href="../WebDSL-Action.sdf3#Exp_757_760" id="Exp_2978_2981" title="Defined at ../WebDSL-Action.sdf3 line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;&gt;
  <a href="#Annotation_2109_2119" id="Annotation_2986_2996" title="Referenced at line 99; ../WebDSL-Type.sdf3 line 21">Annotation</a>.<span class="cons_Constructor"><span id="LengthAnno_2997_3007" title="Not referenced locally, nor via imports">LengthAnno</span></span> = &lt;<span class="cons_String">length</span> <span class="cons_String">=</span> &lt;<a href="../WebDSL-Lexical.sdf3#Int_906_909" id="Int_3021_3024" title="Defined at ../WebDSL-Lexical.sdf3 line 44, 48">Int</a>&gt;&gt;
  <a href="#Annotation_2109_2119" id="Annotation_3029_3039" title="Referenced at line 99; ../WebDSL-Type.sdf3 line 21">Annotation</a>.<span class="cons_Constructor"><span id="FormatAnno_3040_3050" title="Not referenced locally, nor via imports">FormatAnno</span></span> = &lt;<span class="cons_String">format</span> <span class="cons_String">=</span> &lt;<a href="../WebDSL-Lexical.sdf3#String_1591_1597" id="String_3064_3070" title="Defined at ../WebDSL-Lexical.sdf3 line 69, 75">String</a>&gt;&gt;
  <a href="#Annotation_2109_2119" id="Annotation_3075_3085" title="Referenced at line 99; ../WebDSL-Type.sdf3 line 21">Annotation</a>.<span class="cons_Constructor"><span id="IndexEmptyAnno_3086_3100" title="Not referenced locally, nor via imports">IndexEmptyAnno</span></span> = &lt;<span class="cons_String">index</span> <span class="cons_String">(</span> <span class="cons_String">)</span>&gt;
  <a href="#Annotation_2109_2119" id="Annotation_3117_3127" title="Referenced at line 99; ../WebDSL-Type.sdf3 line 21">Annotation</a>.<span class="cons_Constructor"><span id="IndexAnno_3128_3137" title="Not referenced locally, nor via imports">IndexAnno</span></span> = &lt;<span class="cons_String">index</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-Lexical.sdf3#Int_906_909" id="Int_3150_3153" title="Defined at ../WebDSL-Lexical.sdf3 line 44, 48">Int</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#Annotation_2109_2119" id="Annotation_3160_3170" title="Referenced at line 99; ../WebDSL-Type.sdf3 line 21">Annotation</a>.<span class="cons_Constructor"><span id="CollationAnno_3171_3184" title="Not referenced locally, nor via imports">CollationAnno</span></span> = &lt;<span class="cons_String">collation</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_3201_3203" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#Annotation_2109_2119" id="Annotation_3210_3220" title="Referenced at line 99; ../WebDSL-Type.sdf3 line 21">Annotation</a>.<span class="cons_Constructor"><span id="IdErrorAnno_3221_3232" title="Not referenced locally, nor via imports">IdErrorAnno</span></span> = &lt;<span class="cons_String">iderror</span> <span class="cons_String">=</span> &lt;<a href="../WebDSL-Lexical.sdf3#String_1591_1597" id="String_3247_3253" title="Defined at ../WebDSL-Lexical.sdf3 line 69, 75">String</a>&gt;&gt;
  <a href="#Annotation_2109_2119" id="Annotation_3258_3268" title="Referenced at line 99; ../WebDSL-Type.sdf3 line 21">Annotation</a>.<span class="cons_Constructor"><span id="IdEmptyErrorAnno_3269_3285" title="Not referenced locally, nor via imports">IdEmptyErrorAnno</span></span> = &lt;<span class="cons_String">idemptyerror</span> <span class="cons_String">=</span> &lt;<a href="../WebDSL-Lexical.sdf3#String_1591_1597" id="String_3305_3311" title="Defined at ../WebDSL-Lexical.sdf3 line 69, 75">String</a>&gt;&gt;

<span class="keyword">lexical sorts</span>

  <a href="#AnnotationId_2347_2359" id="AnnotationId_3332_3344" title="Referenced at line 112">AnnotationId</a>

<span class="keyword">lexical syntax</span>

  <a href="#AnnotationId_2347_2359" id="AnnotationId_3364_3376" title="Referenced at line 112">AnnotationId</a> = <a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_3379_3381" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>
  <a href="#AnnotationId_2347_2359" id="AnnotationId_3384_3396" title="Referenced at line 112">AnnotationId</a> = <span class="cons_Lit">"searchable"</span> {<span class="keyword">reject</span>}
  <a href="#AnnotationId_2347_2359" id="AnnotationId_3423_3435" title="Referenced at line 112">AnnotationId</a> = <span class="cons_Lit">"transient"</span> {<span class="keyword">reject</span>}
  <a href="#AnnotationId_2347_2359" id="AnnotationId_3461_3473" title="Referenced at line 112">AnnotationId</a> = <span class="cons_Lit">"id"</span> {<span class="keyword">reject</span>}
  <a href="#AnnotationId_2347_2359" id="AnnotationId_3492_3504" title="Referenced at line 112">AnnotationId</a> = <span class="cons_Lit">"name"</span> {<span class="keyword">reject</span>}
  <a href="#AnnotationId_2347_2359" id="AnnotationId_3525_3537" title="Referenced at line 112">AnnotationId</a> = <span class="cons_Lit">"cache"</span> {<span class="keyword">reject</span>}

</code></pre></td></tr></tbody></table></div>