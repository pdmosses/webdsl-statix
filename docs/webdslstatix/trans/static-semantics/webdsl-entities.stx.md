---
title: webdsl-entities.stx
hide:
  - toc
---

# `webdsl-entities.stx`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/webdsl-entities.stx]

[pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/webdsl-entities.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/trans/static-semantics/webdsl-entities.stx "The source file on GitHub"

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
147
148
149
150
151
152
153
154
155
156
157
158
159
160
161
162
163
164
165
166
167
168
169
170
171
172
173
174
175
176
177
178
179
180
181
182
183
184
185
186
187
188
189
190
191
192
193
194
195
196
197
198
199
200
201
202
203
204
205
206
207
208
209
210
211
212
213
214
215
216
217
218
219
220
221
222
223
224
225
226
227
228
229
230
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-ac.stx#static-semantics/webdsl-entities_268_300" id="static-semantics/webdsl-entities_7_39" title="Referenced at ../webdsl-ac.stx line 14; ../webdsl-actions.stx line 13; ../webdsl-native.stx line 9; ../webdsl.stx line 15; ../actions/functions.stx line 7; ../entities/annotations.stx line 7; ../entities/built-ins.stx line 8; ../types/built-ins.stx line 8; ../types/type-extensions.stx line 8">static-semantics/webdsl-entities</a>

<span class="keyword">imports</span>
  <a href="../actions/functions.stx#static-semantics/actions/functions_7_41" id="static-semantics/actions/functions_51_85" title="Defined at ../actions/functions.stx line 1">static-semantics/actions/functions</a>

  <a href="../entities/annotations.stx#static-semantics/entities/annotations_7_44" id="static-semantics/entities/annotations_89_126" title="Defined at ../entities/annotations.stx line 1">static-semantics/entities/annotations</a>
  <a href="../entities/built-ins.stx#static-semantics/entities/built-ins_7_42" id="static-semantics/entities/built-ins_129_164" title="Defined at ../entities/built-ins.stx line 1">static-semantics/entities/built-ins</a>
  <a href="../entities/generated-functions.stx#static-semantics/entities/generated-functions_7_52" id="static-semantics/entities/generated-functions_167_212" title="Defined at ../entities/generated-functions.stx line 1">static-semantics/entities/generated-functions</a>

  <a href="../types/built-ins.stx#static-semantics/types/built-ins_7_39" id="static-semantics/types/built-ins_216_248" title="Defined at ../types/built-ins.stx line 1">static-semantics/types/built-ins</a>

  <a href="../webdsl-actions.stx#static-semantics/webdsl-actions_7_38" id="static-semantics/webdsl-actions_252_283" title="Defined at ../webdsl-actions.stx line 1">static-semantics/webdsl-actions</a>
  <a href="../webdsl-types.stx#static-semantics/webdsl-types_7_36" id="static-semantics/webdsl-types_286_315" title="Defined at ../webdsl-types.stx line 1">static-semantics/webdsl-types</a>
  <a href="../webdsl.stx#static-semantics/webdsl_7_30" id="static-semantics/webdsl_318_341" title="Defined at ../webdsl.stx line 1">static-semantics/webdsl</a>

<span class="keyword">rules</span> <span class="layout">// unimplemented</span>

  <a href="../webdsl.stx#stmtOk_15783_15789" id="stmtOk_369_375" title="Defined at ../webdsl.stx line 361">stmtOk</a>(_, _, <a href="../../../src-gen/statix/signatures/WebDSL-EntityDerive-sig.stx#ForeachStatementEntityDerive_639_667" id="ForeachStatementEntityDerive_382_410" title="Defined at ../../../src-gen/statix/signatures/WebDSL-EntityDerive-sig.stx line 25">ForeachStatementEntityDerive</a>(_, _), _) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[This statement is not yet implemented].

<span class="keyword">rules</span> <span class="layout">// entity declaration</span>

  <span class="layout">// entity x : super { ... }</span>
  <a href="../webdsl.stx#defOk_15473_15478" id="defOk_552_557" title="Defined at ../webdsl.stx line 356">defOk</a>(<a href="#s_647_648" id="s_558_559" title="Referenced at line 24, 25, 27, 28">s</a>, <a href="#e_900_901" id="e_561_562" title="Referenced at line 26">e</a>@<a href="../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#Entity_462_468" id="Entity_563_569" title="Defined at ../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 26">Entity</a>(<a href="#x_931_932" id="x_570_571" title="Referenced at line 27, 28, 28">x</a>, <a href="#super_650_655" id="super_573_578" title="Referenced at line 24, 24, 24, 31">super</a>, <a href="#bodydecs_934_942" id="bodydecs_580_588" title="Referenced at line 27">bodydecs</a>)) :- {<a href="#s_entity_763_771" id="s_entity_595_603" title="Referenced at line 25, 25, 25, 26, 27, 28, 29, 30">s_entity</a> <a href="#super'_666_672" id="super'_604_610" title="Referenced at line 24, 31">super'</a> <a href="#s_super_694_701" id="s_super_611_618" title="Referenced at line 24, 25">s_super</a> <a href="#superType_674_683" id="superType_619_628" title="Referenced at line 24, 29">superType</a> }
    <a href="../webdsl.stx#resolveType_3324_3335" id="resolveType_635_646" title="Defined at ../webdsl.stx line 105">resolveType</a>(<a href="#s_558_559" id="s_647_648" title="Defined at line 23">s</a>, <a href="#super_573_578" id="super_650_655" title="Defined at line 23">super</a>) == [(_, (<a href="#super'_604_610" id="super'_666_672" title="Defined at line 23">super'</a>, <a href="#superType_619_628" id="superType_674_683" title="Defined at line 23">superType</a>@<a href="../webdsl-types.stx#ENTITY_444_450" id="ENTITY_684_690" title="Defined at ../webdsl-types.stx line 20">ENTITY</a>(_, <a href="#s_super_611_618" id="s_super_694_701" title="Defined at line 23">s_super</a>)))] | <span class="keyword">error</span> $[Entity [<a href="#super_573_578" id="super_724_729" title="Defined at line 23">super</a>] is not defined] @<a href="#super_573_578" id="super_748_753" title="Defined at line 23">super</a>,
    <span class="keyword">new</span> <a href="#s_entity_595_603" id="s_entity_763_771" title="Defined at line 23">s_entity</a>, <a href="#s_entity_595_603" id="s_entity_773_781" title="Defined at line 23">s_entity</a> -<a href="../webdsl.stx#INHERIT_1445_1452" id="INHERIT_783_790" title="Defined at ../webdsl.stx line 48">INHERIT</a>-&gt; <a href="#s_super_611_618" id="s_super_793_800" title="Defined at line 23">s_super</a>, <a href="#s_entity_595_603" id="s_entity_802_810" title="Defined at line 23">s_entity</a> -<a href="../webdsl.stx#DEF_1498_1501" id="DEF_812_815" title="Defined at ../webdsl.stx line 49">DEF</a>-&gt; <a href="#s_558_559" id="s_818_819" title="Defined at line 23">s</a>,
    <a href="#noCircularInheritance_3354_3375" id="noCircularInheritance_825_846" title="Defined at line 76">noCircularInheritance</a>(<a href="#s_entity_595_603" id="s_entity_847_855" title="Defined at line 23">s_entity</a>) | <span class="keyword">error</span> $[Circular inhertitance detected] @<a href="#e_561_562" id="e_900_901" title="Defined at line 23">e</a>,
    <a href="#declEntity_1868_1878" id="declEntity_907_917" title="Defined at line 47">declEntity</a>(<a href="#s_558_559" id="s_918_919" title="Defined at line 23">s</a>, <a href="#s_entity_595_603" id="s_entity_921_929" title="Defined at line 23">s_entity</a>, <a href="#x_570_571" id="x_931_932" title="Defined at line 23">x</a>, <a href="#bodydecs_580_588" id="bodydecs_934_942" title="Defined at line 23">bodydecs</a>),
    <a href="../webdsl.stx#declareVar_13281_13291" id="declareVar_949_959" title="Defined at ../webdsl.stx line 301">declareVar</a>(<a href="#s_558_559" id="s_960_961" title="Defined at line 23">s</a>, <a href="#x_570_571" id="x_963_964" title="Defined at line 23">x</a>, <a href="../webdsl-types.stx#STATICENTITY_486_498" id="STATICENTITY_966_978" title="Defined at ../webdsl-types.stx line 21">STATICENTITY</a>(<a href="#x_570_571" id="x_979_980" title="Defined at line 23">x</a>, <a href="#s_entity_595_603" id="s_entity_982_990" title="Defined at line 23">s_entity</a>)), <span class="layout">// declare entity_name as global variable that refers to the static scope</span>
    <a href="#declSuperVar_3729_3741" id="declSuperVar_1072_1084" title="Defined at line 88">declSuperVar</a>(<a href="#s_entity_595_603" id="s_entity_1085_1093" title="Defined at line 23">s_entity</a>, <a href="#superType_619_628" id="superType_1095_1104" title="Defined at line 23">superType</a>),
    <a href="../entities/annotations.stx#declareEntityAnnotation_2063_2086" id="declareEntityAnnotation_1111_1134" title="Defined at ../entities/annotations.stx line 66">declareEntityAnnotation</a>(<a href="#s_entity_595_603" id="s_entity_1135_1143" title="Defined at line 23">s_entity</a>, <a href="../entities/annotations.stx#SUBENTITY_552_561" id="SUBENTITY_1145_1154" title="Defined at ../entities/annotations.stx line 27">SUBENTITY</a>()),
    @<a href="#super_573_578" id="super_1164_1169" title="Defined at line 23">super</a>.<span class="keyword">ref</span> := <a href="#super'_604_610" id="super'_1177_1183" title="Defined at line 23">super'</a>.

  <span class="layout">// entity x { ... }</span>
  <a href="../webdsl.stx#defOk_15473_15478" id="defOk_1210_1215" title="Defined at ../webdsl.stx line 356">defOk</a>(<a href="#s_1280_1281" id="s_1216_1217" title="Referenced at line 35, 36, 37, 38">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#EntityNoSuper_527_540" id="EntityNoSuper_1219_1232" title="Defined at ../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 27">EntityNoSuper</a>(<a href="#x_1400_1401" id="x_1233_1234" title="Referenced at line 37, 38, 38">x</a>, <a href="#bodydecs_1403_1411" id="bodydecs_1236_1244" title="Referenced at line 37">bodydecs</a>)) :- {<a href="#s_entity_1314_1322" id="s_entity_1251_1259" title="Referenced at line 36, 36, 36, 37, 38">s_entity</a> <a href="#s_super_1296_1303" id="s_super_1260_1267" title="Referenced at line 35, 36">s_super</a>}
    <a href="../types/built-ins.stx#entity_2883_2889" id="entity_1273_1279" title="Defined at ../types/built-ins.stx line 81">entity</a>(<a href="#s_1216_1217" id="s_1280_1281" title="Defined at line 34">s</a>) == <a href="../webdsl-types.stx#ENTITY_444_450" id="ENTITY_1286_1292" title="Defined at ../webdsl-types.stx line 20">ENTITY</a>(_, <a href="#s_super_1260_1267" id="s_super_1296_1303" title="Defined at line 34">s_super</a>),
    <span class="keyword">new</span> <a href="#s_entity_1251_1259" id="s_entity_1314_1322" title="Defined at line 34">s_entity</a>, <a href="#s_entity_1251_1259" id="s_entity_1324_1332" title="Defined at line 34">s_entity</a> -<a href="../webdsl.stx#INHERIT_1445_1452" id="INHERIT_1334_1341" title="Defined at ../webdsl.stx line 48">INHERIT</a>-&gt; <a href="#s_super_1260_1267" id="s_super_1344_1351" title="Defined at line 34">s_super</a>, <a href="#s_entity_1251_1259" id="s_entity_1353_1361" title="Defined at line 34">s_entity</a> -<a href="../webdsl.stx#DEF_1498_1501" id="DEF_1363_1366" title="Defined at ../webdsl.stx line 49">DEF</a>-&gt; <a href="#s_1216_1217" id="s_1369_1370" title="Defined at line 34">s</a>,
    <a href="#declEntity_1868_1878" id="declEntity_1376_1386" title="Defined at line 47">declEntity</a>(<a href="#s_1216_1217" id="s_1387_1388" title="Defined at line 34">s</a>, <a href="#s_entity_1251_1259" id="s_entity_1390_1398" title="Defined at line 34">s_entity</a>, <a href="#x_1233_1234" id="x_1400_1401" title="Defined at line 34">x</a>, <a href="#bodydecs_1236_1244" id="bodydecs_1403_1411" title="Defined at line 34">bodydecs</a>),
    <a href="../webdsl.stx#declareVar_13281_13291" id="declareVar_1418_1428" title="Defined at ../webdsl.stx line 301">declareVar</a>(<a href="#s_1216_1217" id="s_1429_1430" title="Defined at line 34">s</a>, <a href="#x_1233_1234" id="x_1432_1433" title="Defined at line 34">x</a>, <a href="../webdsl-types.stx#STATICENTITY_486_498" id="STATICENTITY_1435_1447" title="Defined at ../webdsl-types.stx line 21">STATICENTITY</a>(<a href="#x_1233_1234" id="x_1448_1449" title="Defined at line 34">x</a>, <a href="#s_entity_1251_1259" id="s_entity_1451_1459" title="Defined at line 34">s_entity</a>)). <span class="layout">// declare entity_name as global variable that refers to the static scope</span>

  <span class="layout">// session x { ... }</span>
  <a href="../webdsl.stx#defOk_15473_15478" id="defOk_1563_1568" title="Defined at ../webdsl.stx line 356">defOk</a>(<a href="#s_1648_1649" id="s_1569_1570" title="Referenced at line 42, 43, 44">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#SessionEntity_594_607" id="SessionEntity_1572_1585" title="Defined at ../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 28">SessionEntity</a>(<a href="#x_1679_1680" id="x_1586_1587" title="Referenced at line 43, 44, 44">x</a>, <a href="#bodydecs_1682_1690" id="bodydecs_1589_1597" title="Referenced at line 43">bodydecs</a>)) :- {<a href="#s_entity_1622_1630" id="s_entity_1604_1612" title="Referenced at line 42, 42, 43, 44, 45">s_entity</a>}
    <span class="keyword">new</span> <a href="#s_entity_1604_1612" id="s_entity_1622_1630" title="Defined at line 41">s_entity</a>, <a href="#s_entity_1604_1612" id="s_entity_1632_1640" title="Defined at line 41">s_entity</a> -<a href="../webdsl.stx#DEF_1498_1501" id="DEF_1642_1645" title="Defined at ../webdsl.stx line 49">DEF</a>-&gt; <a href="#s_1569_1570" id="s_1648_1649" title="Defined at line 41">s</a>,
    <a href="#declEntity_1868_1878" id="declEntity_1655_1665" title="Defined at line 47">declEntity</a>(<a href="#s_1569_1570" id="s_1666_1667" title="Defined at line 41">s</a>, <a href="#s_entity_1604_1612" id="s_entity_1669_1677" title="Defined at line 41">s_entity</a>, <a href="#x_1586_1587" id="x_1679_1680" title="Defined at line 41">x</a>, <a href="#bodydecs_1589_1597" id="bodydecs_1682_1690" title="Defined at line 41">bodydecs</a>),
    <a href="../webdsl.stx#declareVar_13281_13291" id="declareVar_1697_1707" title="Defined at ../webdsl.stx line 301">declareVar</a>(<a href="#s_1569_1570" id="s_1708_1709" title="Defined at line 41">s</a>, <a href="#x_1586_1587" id="x_1711_1712" title="Defined at line 41">x</a>, <a href="../webdsl-types.stx#ENTITY_444_450" id="ENTITY_1714_1720" title="Defined at ../webdsl-types.stx line 20">ENTITY</a>(<a href="#x_1586_1587" id="x_1721_1722" title="Defined at line 41">x</a>, <a href="#s_entity_1604_1612" id="s_entity_1724_1732" title="Defined at line 41">s_entity</a>)), <span class="layout">// session entities only have one instance and don't have a static scope</span>
    <a href="../entities/annotations.stx#declareEntityAnnotation_2063_2086" id="declareEntityAnnotation_1813_1836" title="Defined at ../entities/annotations.stx line 66">declareEntityAnnotation</a>(<a href="#s_entity_1604_1612" id="s_entity_1837_1845" title="Defined at line 41">s_entity</a>, <a href="../entities/annotations.stx#SESSIONENTITY_521_534" id="SESSIONENTITY_1847_1860" title="Defined at ../entities/annotations.stx line 26">SESSIONENTITY</a>()).

  <a href="#declEntity_907_917" id="declEntity_1868_1878" title="Referenced at line 27, 37, 43, 48">declEntity</a> : <span class="keyword">scope</span> * <span class="keyword">scope</span> * <span class="keyword">string</span> * <span class="keyword">list</span>(<a href="../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#EntityBodyDeclaration_164_185" id="EntityBodyDeclaration_1911_1932" title="Defined at ../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 11">EntityBodyDeclaration</a>)
  <a href="#declEntity_1868_1878" id="declEntity_1936_1946" title="Defined at line 47">declEntity</a>(<a href="#s_2024_2025" id="s_1947_1948" title="Referenced at line 49, 50, 52">s</a>, <a href="#s_entity_2040_2048" id="s_entity_1950_1958" title="Referenced at line 49, 50, 51, 53, 54">s_entity</a>, <a href="#entity_name_2027_2038" id="entity_name_1960_1971" title="Referenced at line 49, 50, 51, 52, 54">entity_name</a>, <a href="#bodydecs_2342_2350" id="bodydecs_1973_1981" title="Referenced at line 54">bodydecs</a>) :- { <a href="#entityType_2171_2181" id="entityType_1988_1998" title="Referenced at line 51, 52, 53">entityType</a> }
    <a href="../webdsl.stx#declareExtendScope_4401_4419" id="declareExtendScope_2005_2023" title="Defined at ../webdsl.stx line 133">declareExtendScope</a>(<a href="#s_1947_1948" id="s_2024_2025" title="Defined at line 48">s</a>, <a href="#entity_name_1960_1971" id="entity_name_2027_2038" title="Defined at line 48">entity_name</a>, <a href="#s_entity_1950_1958" id="s_entity_2040_2048" title="Defined at line 48">s_entity</a>), <span class="layout">// declare entity_scope to be linked to entity_name</span>
    <a href="#extendScopes_2356_2368" id="extendScopes_2107_2119" title="Defined at line 56">extendScopes</a>(<a href="../webdsl.stx#resolveExtendScope_4524_4542" id="resolveExtendScope_2120_2138" title="Defined at ../webdsl.stx line 137">resolveExtendScope</a>(<a href="#s_1947_1948" id="s_2139_2140" title="Defined at line 48">s</a>, <a href="#entity_name_1960_1971" id="entity_name_2142_2153" title="Defined at line 48">entity_name</a>), <a href="#s_entity_1950_1958" id="s_entity_2156_2164" title="Defined at line 48">s_entity</a>),
    <a href="#entityType_1988_1998" id="entityType_2171_2181" title="Defined at line 48">entityType</a> == <a href="../webdsl-types.stx#ENTITY_444_450" id="ENTITY_2185_2191" title="Defined at ../webdsl-types.stx line 20">ENTITY</a>(<a href="#entity_name_1960_1971" id="entity_name_2192_2203" title="Defined at line 48">entity_name</a>, <a href="#s_entity_1950_1958" id="s_entity_2205_2213" title="Defined at line 48">s_entity</a>),
    <a href="../webdsl.stx#declareType_3123_3134" id="declareType_2220_2231" title="Defined at ../webdsl.stx line 100">declareType</a>(<a href="#s_1947_1948" id="s_2232_2233" title="Defined at line 48">s</a>, <a href="#entity_name_1960_1971" id="entity_name_2235_2246" title="Defined at line 48">entity_name</a>, <a href="#entityType_1988_1998" id="entityType_2248_2258" title="Defined at line 48">entityType</a>),
    <a href="#declThisVar_3555_3566" id="declThisVar_2265_2276" title="Defined at line 83">declThisVar</a>(<a href="#s_entity_1950_1958" id="s_entity_2277_2285" title="Defined at line 48">s_entity</a>, <a href="#entityType_1988_1998" id="entityType_2287_2297" title="Defined at line 48">entityType</a>),
    <a href="#declEntityBody_4597_4611" id="declEntityBody_2304_2318" title="Defined at line 109">declEntityBody</a>(<a href="#s_entity_1950_1958" id="s_entity_2319_2327" title="Defined at line 48">s_entity</a>, <a href="#entity_name_1960_1971" id="entity_name_2329_2340" title="Defined at line 48">entity_name</a>, <a href="#bodydecs_1973_1981" id="bodydecs_2342_2350" title="Defined at line 48">bodydecs</a>).

  <a href="#extendScopes_2107_2119" id="extendScopes_2356_2368" title="Referenced at line 50, 73; ../webdsl-ac.stx line 28, 86; ../webdsl-native.stx line 41, 54; ../types/built-ins.stx line 20, 30; ../types/type-extensions.stx line 19">extendScopes</a> <span class="keyword">maps</span> <a href="#extendScope_2400_2411" id="extendScope_2374_2385" title="Defined at line 57">extendScope</a>(<span class="keyword">list</span>(*), *)
  <a href="#extendScope_2374_2385" id="extendScope_2400_2411" title="Referenced at line 56, 58, 59">extendScope</a> : (<span class="keyword">path</span> * (<span class="keyword">string</span> * <span class="keyword">scope</span>)) * <span class="keyword">scope</span>
  <a href="#extendScope_2400_2411" id="extendScope_2450_2461" title="Defined at line 57">extendScope</a>((_, (_, s)), <span id="s_2475_2476" title="Not referenced locally, nor via imports">s</span>). <span class="layout">// Do not inherit own scope</span>
  <a href="#extendScope_2400_2411" id="extendScope_2509_2520" title="Defined at line 57">extendScope</a>((_, (_, <a href="#s'_2557_2559" id="s'_2529_2531" title="Referenced at line 60">s'</a>)), <a href="#s_2545_2546" id="s_2535_2536" title="Referenced at line 60">s</a>) :-
    <a href="#s_2535_2536" id="s_2545_2546" title="Defined at line 59">s</a> -<a href="../webdsl.stx#EXTEND_1385_1391" id="EXTEND_2548_2554" title="Defined at ../webdsl.stx line 47">EXTEND</a>-&gt; <a href="#s'_2529_2531" id="s'_2557_2559" title="Defined at line 59">s'</a>.

  <span class="layout">// extend entity x { ... }</span>
  <a href="../webdsl.stx#defOk_15473_15478" id="defOk_2593_2598" title="Defined at ../webdsl.stx line 356">defOk</a>(<a href="#s_global_2656_2664" id="s_global_2599_2607" title="Referenced at line 63">s_global</a>, <a href="../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#ExtendEntity_661_673" id="ExtendEntity_2609_2621" title="Defined at ../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 29">ExtendEntity</a>(<a href="#x_2666_2667" id="x_2622_2623" title="Referenced at line 63">x</a>, <a href="#bodydecs_2669_2677" id="bodydecs_2625_2633" title="Referenced at line 63">bodydecs</a>)) :- <a href="#declExtendEntity_2808_2824" id="declExtendEntity_2639_2655" title="Defined at line 68">declExtendEntity</a>(<a href="#s_global_2599_2607" id="s_global_2656_2664" title="Defined at line 63">s_global</a>, <a href="#x_2622_2623" id="x_2666_2667" title="Defined at line 63">x</a>, <a href="#bodydecs_2625_2633" id="bodydecs_2669_2677" title="Defined at line 63">bodydecs</a>).

  <span class="layout">// extend session { ... }</span>
  <a href="../webdsl.stx#defOk_15473_15478" id="defOk_2711_2716" title="Defined at ../webdsl.stx line 356">defOk</a>(<a href="#s_global_2781_2789" id="s_global_2717_2725" title="Referenced at line 66">s_global</a>, <a href="../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#ExtendSessionEntity_727_746" id="ExtendSessionEntity_2727_2746" title="Defined at ../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 30">ExtendSessionEntity</a>(<a href="#x_2791_2792" id="x_2747_2748" title="Referenced at line 66">x</a>, <a href="#bodydecs_2794_2802" id="bodydecs_2750_2758" title="Referenced at line 66">bodydecs</a>)) :- <a href="#declExtendEntity_2808_2824" id="declExtendEntity_2764_2780" title="Defined at line 68">declExtendEntity</a>(<a href="#s_global_2717_2725" id="s_global_2781_2789" title="Defined at line 66">s_global</a>, <a href="#x_2747_2748" id="x_2791_2792" title="Defined at line 66">x</a>, <a href="#bodydecs_2750_2758" id="bodydecs_2794_2802" title="Defined at line 66">bodydecs</a>).

  <a href="#declExtendEntity_2639_2655" id="declExtendEntity_2808_2824" title="Referenced at line 63, 66, 69">declExtendEntity</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> * <span class="keyword">list</span>(<a href="../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#EntityBodyDeclaration_164_185" id="EntityBodyDeclaration_2849_2870" title="Defined at ../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 11">EntityBodyDeclaration</a>)
  <a href="#declExtendEntity_2808_2824" id="declExtendEntity_2874_2890" title="Defined at line 68">declExtendEntity</a>(<a href="#s_2968_2969" id="s_2891_2892" title="Referenced at line 70, 71, 72, 73">s</a>, <a href="#entity_name_2971_2982" id="entity_name_2894_2905" title="Referenced at line 70, 70, 72, 73, 74">entity_name</a>, <a href="#bodydecs_3340_3348" id="bodydecs_2907_2915" title="Referenced at line 74">bodydecs</a>) :- {<a href="#s_extend_entity_3068_3083" id="s_extend_entity_2921_2936" title="Referenced at line 71, 71, 72, 73, 74">s_extend_entity</a> <span id="entity_scopes_2937_2950" title="Not referenced locally, nor via imports">entity_scopes</span>}
    <a href="../webdsl.stx#resolveType_3324_3335" id="resolveType_2956_2967" title="Defined at ../webdsl.stx line 105">resolveType</a>(<a href="#s_2891_2892" id="s_2968_2969" title="Defined at line 69">s</a>, <a href="#entity_name_2894_2905" id="entity_name_2971_2982" title="Defined at line 69">entity_name</a>) == [(_, (_, <a href="../webdsl-types.stx#ENTITY_444_450" id="ENTITY_2996_3002" title="Defined at ../webdsl-types.stx line 20">ENTITY</a>(_, _)))] | <span class="keyword">error</span> $[Entity [<a href="#entity_name_2894_2905" id="entity_name_3030_3041" title="Defined at line 69">entity_name</a>] is not defined],
    <span class="keyword">new</span> <a href="#s_extend_entity_2921_2936" id="s_extend_entity_3068_3083" title="Defined at line 69">s_extend_entity</a>, <a href="#s_extend_entity_2921_2936" id="s_extend_entity_3085_3100" title="Defined at line 69">s_extend_entity</a> -<a href="../webdsl.stx#DEF_1498_1501" id="DEF_3102_3105" title="Defined at ../webdsl.stx line 49">DEF</a>-&gt; <a href="#s_2891_2892" id="s_3108_3109" title="Defined at line 69">s</a>,
    <a href="../webdsl.stx#declareExtendScope_4401_4419" id="declareExtendScope_3115_3133" title="Defined at ../webdsl.stx line 133">declareExtendScope</a>(<a href="#s_2891_2892" id="s_3134_3135" title="Defined at line 69">s</a>, <a href="#entity_name_2894_2905" id="entity_name_3137_3148" title="Defined at line 69">entity_name</a>, <a href="#s_extend_entity_2921_2936" id="s_extend_entity_3150_3165" title="Defined at line 69">s_extend_entity</a>), <span class="layout">// declare entity_scope to be linked to entity_name</span>
    <a href="#extendScopes_2356_2368" id="extendScopes_3224_3236" title="Defined at line 56">extendScopes</a>(<a href="../webdsl.stx#resolveExtendScope_4524_4542" id="resolveExtendScope_3237_3255" title="Defined at ../webdsl.stx line 137">resolveExtendScope</a>(<a href="#s_2891_2892" id="s_3256_3257" title="Defined at line 69">s</a>, <a href="#entity_name_2894_2905" id="entity_name_3259_3270" title="Defined at line 69">entity_name</a>), <a href="#s_extend_entity_2921_2936" id="s_extend_entity_3273_3288" title="Defined at line 69">s_extend_entity</a>),
    <a href="#declEntityBody_4597_4611" id="declEntityBody_3295_3309" title="Defined at line 109">declEntityBody</a>(<a href="#s_extend_entity_2921_2936" id="s_extend_entity_3310_3325" title="Defined at line 69">s_extend_entity</a>, <a href="#entity_name_2894_2905" id="entity_name_3327_3338" title="Defined at line 69">entity_name</a>, <a href="#bodydecs_2907_2915" id="bodydecs_3340_3348" title="Defined at line 69">bodydecs</a>).

  <a href="#noCircularInheritance_825_846" id="noCircularInheritance_3354_3375" title="Referenced at line 26, 77; ../webdsl-native.stx line 44; ../types/built-ins.stx line 28">noCircularInheritance</a> : <span class="keyword">scope</span>
  <a href="#noCircularInheritance_3354_3375" id="noCircularInheritance_3386_3407" title="Defined at line 76">noCircularInheritance</a>(<a href="#s_ent_3469_3474" id="s_ent_3408_3413" title="Referenced at line 78, 80">s_ent</a>) :- {<a href="#res_3532_3535" id="res_3419_3422" title="Referenced at line 80, 81">res</a>}
    <span class="keyword">query</span> () <span class="keyword">filter</span> <a href="../webdsl.stx#INHERIT_1445_1452" id="INHERIT_3444_3451" title="Defined at ../webdsl.stx line 48">INHERIT</a>+ <span class="keyword">and</span> { <a href="#s_3464_3465" id="s_3459_3460" title="Referenced at line 78">s</a> :- <a href="#s_3459_3460" id="s_3464_3465" title="Defined at line 78">s</a> == <a href="#s_ent_3408_3413" id="s_ent_3469_3474" title="Defined at line 77">s_ent</a> }
             <span class="keyword">min</span> $ &lt; <a href="../webdsl.stx#INHERIT_1445_1452" id="INHERIT_3498_3505" title="Defined at ../webdsl.stx line 48">INHERIT</a>
             <span class="keyword">in</span> <a href="#s_ent_3408_3413" id="s_ent_3522_3527" title="Defined at line 77">s_ent</a> |-&gt; <a href="#res_3419_3422" id="res_3532_3535" title="Defined at line 77">res</a>,
    <a href="#res_3419_3422" id="res_3541_3544" title="Defined at line 77">res</a> == [].

  <a href="#declThisVar_2265_2276" id="declThisVar_3555_3566" title="Referenced at line 53, 84">declThisVar</a> : <span class="keyword">scope</span> * <a href="../webdsl.stx#TYPE_669_673" id="TYPE_3577_3581" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#declThisVar_3555_3566" id="declThisVar_3584_3595" title="Defined at line 83">declThisVar</a>(<a href="#s_ent_3624_3629" id="s_ent_3596_3601" title="Referenced at line 85, 86">s_ent</a>, <a href="#t_3639_3640" id="t_3603_3604" title="Referenced at line 85">t</a>) :-
    <a href="../webdsl.stx#declareVar_13281_13291" id="declareVar_3613_3623" title="Defined at ../webdsl.stx line 301">declareVar</a>(<a href="#s_ent_3596_3601" id="s_ent_3624_3629" title="Defined at line 84">s_ent</a>, "this", <a href="#t_3603_3604" id="t_3639_3640" title="Defined at line 84">t</a>),
    <a href="../entities/annotations.stx#declareAnnotation_758_775" id="declareAnnotation_3647_3664" title="Defined at ../entities/annotations.stx line 36">declareAnnotation</a>(<a href="#s_ent_3596_3601" id="s_ent_3665_3670" title="Defined at line 84">s_ent</a>, "this", <a href="../entities/annotations.stx#DERIVED_427_434" id="DERIVED_3680_3687" title="Defined at ../entities/annotations.stx line 22">DERIVED</a>()). <span class="layout">// prevent mutability of this var</span>

  <a href="#declSuperVar_1072_1084" id="declSuperVar_3729_3741" title="Referenced at line 29, 89">declSuperVar</a> : <span class="keyword">scope</span> * <a href="../webdsl.stx#TYPE_669_673" id="TYPE_3752_3756" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#declSuperVar_3729_3741" id="declSuperVar_3759_3771" title="Defined at line 88">declSuperVar</a>(<a href="#s_ent_3800_3805" id="s_ent_3772_3777" title="Referenced at line 90, 91">s_ent</a>, <a href="#t_3816_3817" id="t_3779_3780" title="Referenced at line 90">t</a>) :-
    <a href="../webdsl.stx#declareVar_13281_13291" id="declareVar_3789_3799" title="Defined at ../webdsl.stx line 301">declareVar</a>(<a href="#s_ent_3772_3777" id="s_ent_3800_3805" title="Defined at line 89">s_ent</a>, "super", <a href="#t_3779_3780" id="t_3816_3817" title="Defined at line 89">t</a>),
    <a href="../entities/annotations.stx#declareAnnotation_758_775" id="declareAnnotation_3824_3841" title="Defined at ../entities/annotations.stx line 36">declareAnnotation</a>(<a href="#s_ent_3772_3777" id="s_ent_3842_3847" title="Defined at line 89">s_ent</a>, "super", <a href="../entities/annotations.stx#DERIVED_427_434" id="DERIVED_3858_3865" title="Defined at ../entities/annotations.stx line 22">DERIVED</a>()). <span class="layout">// prevent mutability of super var</span>

  <a href="../webdsl.stx#defOk_15473_15478" id="defOk_3908_3913" title="Defined at ../webdsl.stx line 356">defOk</a>(<a href="#s_3971_3972" id="s_3914_3915" title="Referenced at line 94, 95, 96, 98, 99">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#Enum_2305_2309" id="Enum_3917_3921" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 75">Enum</a>(<a href="#e_4124_4125" id="e_3922_3923" title="Referenced at line 97, 98">e</a>, <a href="#values_4189_4195" id="values_3925_3931" title="Referenced at line 99">values</a>)) :- { <a href="#s_entity_4005_4013" id="s_entity_3939_3947" title="Referenced at line 95, 95, 95, 96, 97">s_entity</a> <a href="#s_super_3987_3994" id="s_super_3948_3955" title="Referenced at line 94, 95">s_super</a> <a href="#t_4112_4113" id="t_3956_3957" title="Referenced at line 97, 98, 99">t</a> }
    <a href="../types/built-ins.stx#entity_2883_2889" id="entity_3964_3970" title="Defined at ../types/built-ins.stx line 81">entity</a>(<a href="#s_3914_3915" id="s_3971_3972" title="Defined at line 93">s</a>) == <a href="../webdsl-types.stx#ENTITY_444_450" id="ENTITY_3977_3983" title="Defined at ../webdsl-types.stx line 20">ENTITY</a>(_, <a href="#s_super_3948_3955" id="s_super_3987_3994" title="Defined at line 93">s_super</a>),
    <span class="keyword">new</span> <a href="#s_entity_3939_3947" id="s_entity_4005_4013" title="Defined at line 93">s_entity</a>, <a href="#s_entity_3939_3947" id="s_entity_4015_4023" title="Defined at line 93">s_entity</a> -<a href="../webdsl.stx#INHERIT_1445_1452" id="INHERIT_4025_4032" title="Defined at ../webdsl.stx line 48">INHERIT</a>-&gt; <a href="#s_super_3948_3955" id="s_super_4035_4042" title="Defined at line 93">s_super</a>, <a href="#s_entity_3939_3947" id="s_entity_4044_4052" title="Defined at line 93">s_entity</a> -<a href="../webdsl.stx#DEF_1498_1501" id="DEF_4054_4057" title="Defined at ../webdsl.stx line 49">DEF</a>-&gt; <a href="#s_3914_3915" id="s_4060_4061" title="Defined at line 93">s</a>,
    <a href="../webdsl.stx#declareVar_13281_13291" id="declareVar_4067_4077" title="Defined at ../webdsl.stx line 301">declareVar</a>(<a href="#s_entity_3939_3947" id="s_entity_4078_4086" title="Defined at line 93">s_entity</a>, "name", <a href="../types/built-ins.stx#string_1822_1828" id="string_4096_4102" title="Defined at ../types/built-ins.stx line 48">string</a>(<a href="#s_3914_3915" id="s_4103_4104" title="Defined at line 93">s</a>)),
    <a href="#t_3956_3957" id="t_4112_4113" title="Defined at line 93">t</a> == <a href="../webdsl-types.stx#ENTITY_444_450" id="ENTITY_4117_4123" title="Defined at ../webdsl-types.stx line 20">ENTITY</a>(<a href="#e_3922_3923" id="e_4124_4125" title="Defined at line 93">e</a>, <a href="#s_entity_3939_3947" id="s_entity_4127_4135" title="Defined at line 93">s_entity</a>),
    <a href="../webdsl.stx#declareType_3123_3134" id="declareType_4142_4153" title="Defined at ../webdsl.stx line 100">declareType</a>(<a href="#s_3914_3915" id="s_4154_4155" title="Defined at line 93">s</a>, <a href="#e_3922_3923" id="e_4157_4158" title="Defined at line 93">e</a>, <a href="#t_3956_3957" id="t_4160_4161" title="Defined at line 93">t</a>),
    <a href="#declareEnumValues_4204_4221" id="declareEnumValues_4168_4185" title="Defined at line 101">declareEnumValues</a>(<a href="#s_3914_3915" id="s_4186_4187" title="Defined at line 93">s</a>, <a href="#values_3925_3931" id="values_4189_4195" title="Defined at line 93">values</a>, <a href="#t_3956_3957" id="t_4197_4198" title="Defined at line 93">t</a>).

  <a href="#declareEnumValues_4168_4185" id="declareEnumValues_4204_4221" title="Referenced at line 99">declareEnumValues</a> <span class="keyword">maps</span> <a href="#declareEnumValue_4261_4277" id="declareEnumValue_4227_4243" title="Defined at line 102">declareEnumValue</a>(*, <span class="keyword">list</span>(*), *)
  <a href="#declareEnumValue_4227_4243" id="declareEnumValue_4261_4277" title="Referenced at line 101, 103">declareEnumValue</a> : <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#EnumValue_325_334" id="EnumValue_4288_4297" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 21">EnumValue</a> * <a href="../webdsl.stx#TYPE_669_673" id="TYPE_4300_4304" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#declareEnumValue_4261_4277" id="declareEnumValue_4307_4323" title="Defined at line 102">declareEnumValue</a>(<a href="#s_4361_4362" id="s_4324_4325" title="Referenced at line 103">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#EnumValue_2351_2360" id="EnumValue_4327_4336" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 76">EnumValue</a>(<a href="#v_4364_4365" id="v_4337_4338" title="Referenced at line 103">v</a>, _), <a href="#t_4367_4368" id="t_4344_4345" title="Referenced at line 103">t</a>) :- <a href="../webdsl.stx#declareVar_13281_13291" id="declareVar_4350_4360" title="Defined at ../webdsl.stx line 301">declareVar</a>(<a href="#s_4324_4325" id="s_4361_4362" title="Defined at line 103">s</a>, <a href="#v_4337_4338" id="v_4364_4365" title="Defined at line 103">v</a>, <a href="#t_4344_4345" id="t_4367_4368" title="Defined at line 103">t</a>).

<span class="keyword">rules</span> <span class="layout">// entity body declaration</span>

  <a href="#declEntityBodyDeclaration_4477_4502" id="declEntityBodyDeclaration_4408_4433" title="Referenced at line 108, 109, 112, 113, 114, 119, 129, 173; ../webdsl-ac.stx line 186">declEntityBodyDeclaration</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> * <a href="../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#EntityBodyDeclaration_164_185" id="EntityBodyDeclaration_4453_4474" title="Defined at ../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 11">EntityBodyDeclaration</a>
  <a href="#declEntityBodyDeclaration_4408_4433" id="declEntityBodyDeclaration_4477_4502" title="Defined at line 107">declEntityBodyDeclaration</a>(_, _, _) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[This entity body declaration is not yet implemented].
  <a href="#declEntityBody_2304_2318" id="declEntityBody_4597_4611" title="Referenced at line 54, 74">declEntityBody</a> <span class="keyword">maps</span> <a href="#declEntityBodyDeclaration_4408_4433" id="declEntityBodyDeclaration_4617_4642" title="Defined at line 107">declEntityBodyDeclaration</a>(*, *, <span class="keyword">list</span>(*))

  <span class="layout">// entity function</span>
  <a href="#declEntityBodyDeclaration_4408_4433" id="declEntityBodyDeclaration_4682_4707" title="Defined at line 107">declEntityBodyDeclaration</a>(<a href="#s_4753_4754" id="s_4708_4709" title="Referenced at line 112">s</a>, _, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#EntityFunction_1639_1653" id="EntityFunction_4714_4728" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 73">EntityFunction</a>(<a href="#f_4756_4757" id="f_4729_4730" title="Referenced at line 112">f</a>)) :- <a href="../actions/functions.stx#entityFunctionOk_4434_4450" id="entityFunctionOk_4736_4752" title="Defined at ../actions/functions.stx line 104">entityFunctionOk</a>(<a href="#s_4708_4709" id="s_4753_4754" title="Defined at line 112">s</a>, <a href="#f_4729_4730" id="f_4756_4757" title="Defined at line 112">f</a>, <a href="../webdsl.stx#FALSE_844_849" id="FALSE_4759_4764" title="Defined at ../webdsl.stx line 35">FALSE</a>()).
  <a href="#declEntityBodyDeclaration_4408_4433" id="declEntityBodyDeclaration_4771_4796" title="Defined at line 107">declEntityBodyDeclaration</a>(<a href="#s_4848_4849" id="s_4797_4798" title="Referenced at line 113">s</a>, _, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#StaticEntityFunction_1804_1824" id="StaticEntityFunction_4803_4823" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 76">StaticEntityFunction</a>(<a href="#f_4851_4852" id="f_4824_4825" title="Referenced at line 113">f</a>)) :- <a href="../actions/functions.stx#entityFunctionOk_4434_4450" id="entityFunctionOk_4831_4847" title="Defined at ../actions/functions.stx line 104">entityFunctionOk</a>(<a href="#s_4797_4798" id="s_4848_4849" title="Defined at line 113">s</a>, <a href="#f_4824_4825" id="f_4851_4852" title="Defined at line 113">f</a>, <a href="../webdsl.stx#TRUE_828_832" id="TRUE_4854_4858" title="Defined at ../webdsl.stx line 34">TRUE</a>()).
  <a href="#declEntityBodyDeclaration_4408_4433" id="declEntityBodyDeclaration_4865_4890" title="Defined at line 107">declEntityBodyDeclaration</a>(<a href="#s_4935_4936" id="s_4891_4892" title="Referenced at line 115, 116">s</a>, _, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#CachedFunction_1694_1708" id="CachedFunction_4897_4911" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 74">CachedFunction</a>(<a href="#f_4938_4939" id="f_4912_4913" title="Referenced at line 115, 116">f</a>)) :-
    <a href="../actions/functions.stx#canBeCached_5535_5546" id="canBeCached_4923_4934" title="Defined at ../actions/functions.stx line 122">canBeCached</a>(<a href="#s_4891_4892" id="s_4935_4936" title="Defined at line 114">s</a>, <a href="#f_4912_4913" id="f_4938_4939" title="Defined at line 114">f</a>),
    <a href="../actions/functions.stx#entityFunctionOk_4434_4450" id="entityFunctionOk_4946_4962" title="Defined at ../actions/functions.stx line 104">entityFunctionOk</a>(<a href="#s_4891_4892" id="s_4963_4964" title="Defined at line 114">s</a>, <a href="#f_4912_4913" id="f_4966_4967" title="Defined at line 114">f</a>, <a href="../webdsl.stx#FALSE_844_849" id="FALSE_4969_4974" title="Defined at ../webdsl.stx line 35">FALSE</a>()).

  <span class="layout">// entity property</span>
  <a href="#declEntityBodyDeclaration_4408_4433" id="declEntityBodyDeclaration_5003_5028" title="Defined at line 107">declEntityBodyDeclaration</a>(<a href="#s_5125_5126" id="s_5029_5030" title="Referenced at line 120, 125, 126">s</a>, <a href="#ent_5470_5473" id="ent_5032_5035" title="Referenced at line 125">ent</a>, <a href="../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#Property_1478_1486" id="Property_5037_5045" title="Defined at ../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 43">Property</a>(<a href="#x_5475_5476" id="x_5046_5047" title="Referenced at line 125, 126">x</a>, <a href="#propkind_5423_5431" id="propkind_5049_5057" title="Referenced at line 124">propkind</a>, <a href="#sort_5128_5132" id="sort_5059_5063" title="Referenced at line 120, 121, 121, 122, 123, 124">sort</a>, <a href="../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#PropAnnos_1700_1709" id="PropAnnos_5065_5074" title="Defined at ../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 46">PropAnnos</a>(<a href="#annos_5523_5528" id="annos_5075_5080" title="Referenced at line 126">annos</a>))) :- {<a href="#sortType_5102_5110" id="sortType_5088_5096" title="Referenced at line 120, 121, 122, 123, 124, 125, 126">sortType</a>}
    <a href="#sortType_5088_5096" id="sortType_5102_5110" title="Defined at line 119">sortType</a> == <a href="../webdsl-types.stx#typeOfSort_5551_5561" id="typeOfSort_5114_5124" title="Defined at ../webdsl-types.stx line 160">typeOfSort</a>(<a href="#s_5029_5030" id="s_5125_5126" title="Defined at line 119">s</a>, <a href="#sort_5059_5063" id="sort_5128_5132" title="Defined at line 119">sort</a>),
    <a href="../webdsl-types.stx#inequalType_10560_10571" id="inequalType_5139_5150" title="Defined at ../webdsl-types.stx line 286">inequalType</a>(<a href="#sortType_5088_5096" id="sortType_5151_5159" title="Defined at line 119">sortType</a>, <a href="../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_5161_5168" title="Defined at ../webdsl-types.stx line 49">UNTYPED</a>()) | <span class="keyword">error</span> $[Cannot resolve type [<a href="#sort_5059_5063" id="sort_5203_5207" title="Defined at line 119">sort</a>]] @<a href="#sort_5059_5063" id="sort_5211_5215" title="Defined at line 119">sort</a>,
    <a href="../webdsl-types.stx#inequalType_10560_10571" id="inequalType_5221_5232" title="Defined at ../webdsl-types.stx line 286">inequalType</a>(<a href="#sortType_5088_5096" id="sortType_5233_5241" title="Defined at line 119">sortType</a>, <a href="../webdsl-types.stx#VOID_1167_1171" id="VOID_5243_5247" title="Defined at ../webdsl-types.stx line 46">VOID</a>()) | <span class="keyword">error</span> $[Property type 'Void' not allowed] @<a href="#sort_5059_5063" id="sort_5296_5300" title="Defined at line 119">sort</a>,
    <a href="../webdsl-types.stx#inequalType_10560_10571" id="inequalType_5306_5317" title="Defined at ../webdsl-types.stx line 286">inequalType</a>(<a href="#sortType_5088_5096" id="sortType_5318_5326" title="Defined at line 119">sortType</a>, <a href="../webdsl-types.stx#REF_939_942" id="REF_5328_5331" title="Defined at ../webdsl-types.stx line 37">REF</a>(_)) | <span class="keyword">error</span> $[Reference type is not allowed in property] @<a href="#sort_5059_5063" id="sort_5390_5394" title="Defined at line 119">sort</a>,
    <a href="#isValidTypeForPropKind_6601_6623" id="isValidTypeForPropKind_5400_5422" title="Defined at line 150">isValidTypeForPropKind</a>(<a href="#propkind_5049_5057" id="propkind_5423_5431" title="Defined at line 119">propkind</a>, <a href="#sort_5059_5063" id="sort_5433_5437" title="Defined at line 119">sort</a>, <a href="#sortType_5088_5096" id="sortType_5439_5447" title="Defined at line 119">sortType</a>),
    <a href="#declProperty_6121_6133" id="declProperty_5454_5466" title="Defined at line 139">declProperty</a>(<a href="#s_5029_5030" id="s_5467_5468" title="Defined at line 119">s</a>, <a href="#ent_5032_5035" id="ent_5470_5473" title="Defined at line 119">ent</a>, <a href="#x_5046_5047" id="x_5475_5476" title="Defined at line 119">x</a>, <a href="#sortType_5088_5096" id="sortType_5478_5486" title="Defined at line 119">sortType</a>),
    <a href="../entities/annotations.stx#annotationsOk_2347_2360" id="annotationsOk_5493_5506" title="Defined at ../entities/annotations.stx line 75">annotationsOk</a>(<a href="#s_5029_5030" id="s_5507_5508" title="Defined at line 119">s</a>, <a href="#x_5046_5047" id="x_5510_5511" title="Defined at line 119">x</a>, <a href="#sortType_5088_5096" id="sortType_5513_5521" title="Defined at line 119">sortType</a>, <a href="#annos_5075_5080" id="annos_5523_5528" title="Defined at line 119">annos</a>).

  <span class="layout">// derived entity property</span>
  <a href="#declEntityBodyDeclaration_4408_4433" id="declEntityBodyDeclaration_5563_5588" title="Defined at line 107">declEntityBodyDeclaration</a>(<a href="#s_5722_5723" id="s_5589_5590" title="Referenced at line 130, 132, 134, 135, 136">s</a>, <a href="#ent_5958_5961" id="ent_5592_5595" title="Referenced at line 134">ent</a>, <a href="../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#DerivedProperty_1562_1577" id="DerivedProperty_5597_5612" title="Defined at ../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 44">DerivedProperty</a>(<a href="#x_5894_5895" id="x_5613_5614" title="Referenced at line 133, 134, 135, 136">x</a>, <span id="propkind_5616_5624" title="Not referenced locally, nor via imports">propkind</span>, <a href="#sort_5725_5729" id="sort_5626_5630" title="Referenced at line 130">sort</a>, <a href="../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#PropAnnos_1700_1709" id="PropAnnos_5632_5641" title="Defined at ../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 46">PropAnnos</a>(<a href="#annos_6051_6056" id="annos_5642_5647" title="Referenced at line 136">annos</a>), <a href="#exp_5800_5803" id="exp_5650_5653" title="Referenced at line 132, 133">exp</a>)) :- { <a href="#sortType_5699_5707" id="sortType_5661_5669" title="Referenced at line 130, 131, 133, 134, 136">sortType</a> <a href="#sortTypeString_5736_5750" id="sortTypeString_5670_5684" title="Referenced at line 131, 133">sortTypeString</a> <a href="#expType_5776_5783" id="expType_5685_5692" title="Referenced at line 132, 133">expType</a> }
    <a href="#sortType_5661_5669" id="sortType_5699_5707" title="Defined at line 129">sortType</a> == <a href="../webdsl-types.stx#typeOfSort_5551_5561" id="typeOfSort_5711_5721" title="Defined at ../webdsl-types.stx line 160">typeOfSort</a>(<a href="#s_5589_5590" id="s_5722_5723" title="Defined at line 129">s</a>, <a href="#sort_5626_5630" id="sort_5725_5729" title="Defined at line 129">sort</a>),
    <a href="#sortTypeString_5670_5684" id="sortTypeString_5736_5750" title="Defined at line 129">sortTypeString</a> == <a href="../webdsl-types.stx#ppType_10827_10833" id="ppType_5754_5760" title="Defined at ../webdsl-types.stx line 298">ppType</a>(<a href="#sortType_5661_5669" id="sortType_5761_5769" title="Defined at line 129">sortType</a>),
    <a href="#expType_5685_5692" id="expType_5776_5783" title="Defined at line 129">expType</a> == <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_5787_5796" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_5589_5590" id="s_5797_5798" title="Defined at line 129">s</a>, <a href="#exp_5650_5653" id="exp_5800_5803" title="Defined at line 129">exp</a>),
    <a href="../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_5810_5824" title="Defined at ../webdsl.stx line 408">typeCompatible</a>(<a href="#expType_5685_5692" id="expType_5825_5832" title="Defined at line 129">expType</a>, <a href="#sortType_5661_5669" id="sortType_5834_5842" title="Defined at line 129">sortType</a>) | <span class="keyword">error</span> $[The expression of the derived property [<a href="#x_5613_5614" id="x_5894_5895" title="Defined at line 129">x</a>] should have type [<a href="#sortTypeString_5670_5684" id="sortTypeString_5915_5929" title="Defined at line 129">sortTypeString</a>]] @<a href="#exp_5650_5653" id="exp_5933_5936" title="Defined at line 129">exp</a>,
    <a href="#declProperty_6121_6133" id="declProperty_5942_5954" title="Defined at line 139">declProperty</a>(<a href="#s_5589_5590" id="s_5955_5956" title="Defined at line 129">s</a>, <a href="#ent_5592_5595" id="ent_5958_5961" title="Defined at line 129">ent</a>, <a href="#x_5613_5614" id="x_5963_5964" title="Defined at line 129">x</a>, <a href="#sortType_5661_5669" id="sortType_5966_5974" title="Defined at line 129">sortType</a>),
    <a href="../entities/annotations.stx#declareAnnotation_758_775" id="declareAnnotation_5981_5998" title="Defined at ../entities/annotations.stx line 36">declareAnnotation</a>(<a href="#s_5589_5590" id="s_5999_6000" title="Defined at line 129">s</a>, <a href="#x_5613_5614" id="x_6002_6003" title="Defined at line 129">x</a>, <a href="../entities/annotations.stx#DERIVED_427_434" id="DERIVED_6005_6012" title="Defined at ../entities/annotations.stx line 22">DERIVED</a>()),
    <a href="../entities/annotations.stx#annotationsOk_2347_2360" id="annotationsOk_6021_6034" title="Defined at ../entities/annotations.stx line 75">annotationsOk</a>(<a href="#s_5589_5590" id="s_6035_6036" title="Defined at line 129">s</a>, <a href="#x_5613_5614" id="x_6038_6039" title="Defined at line 129">x</a>, <a href="#sortType_5661_5669" id="sortType_6041_6049" title="Defined at line 129">sortType</a>, <a href="#annos_5642_5647" id="annos_6051_6056" title="Defined at line 129">annos</a>).

  <span id="declProperties_6062_6076" title="Not referenced locally, nor via imports">declProperties</span> <span class="keyword">maps</span> <a href="#declProperty_6121_6133" id="declProperty_6082_6094" title="Defined at line 139">declProperty</a>(*, *, <span class="keyword">list</span>(*), <span class="keyword">list</span>(*))
  <a href="#declProperty_5454_5466" id="declProperty_6121_6133" title="Referenced at line 125, 134, 138, 140; ../webdsl-ac.stx line 82, 83">declProperty</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> * <span class="keyword">string</span> * <a href="../webdsl.stx#TYPE_669_673" id="TYPE_6162_6166" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#declProperty_6121_6133" id="declProperty_6169_6181" title="Defined at line 139">declProperty</a>(<a href="#s_6247_6248" id="s_6182_6183" title="Referenced at line 142, 143, 144">s</a>, <a href="#ent_6336_6339" id="ent_6185_6188" title="Referenced at line 143">ent</a>, <a href="#x_6228_6229" id="x_6190_6191" title="Referenced at line 141, 142, 143, 143, 143, 144, 144, 144">x</a>, <a href="#sortType_6253_6261" id="sortType_6193_6201" title="Referenced at line 142">sortType</a>) :-
    <a href="#validPropertyName_6471_6488" id="validPropertyName_6210_6227" title="Defined at line 146">validPropertyName</a>(<a href="#x_6190_6191" id="x_6228_6229" title="Defined at line 140">x</a>),
    <a href="../webdsl.stx#declareVar_13281_13291" id="declareVar_6236_6246" title="Defined at ../webdsl.stx line 301">declareVar</a>(<a href="#s_6182_6183" id="s_6247_6248" title="Defined at line 140">s</a>, <a href="#x_6190_6191" id="x_6250_6251" title="Defined at line 140">x</a>, <a href="#sortType_6193_6201" id="sortType_6253_6261" title="Defined at line 140">sortType</a>),
    <a href="../webdsl.stx#resolveLocalProperty_14098_14118" id="resolveLocalProperty_6268_6288" title="Defined at ../webdsl.stx line 320">resolveLocalProperty</a>(<a href="#s_6182_6183" id="s_6289_6290" title="Defined at line 140">s</a>, <a href="#x_6190_6191" id="x_6292_6293" title="Defined at line 140">x</a>) == [_] | <span class="keyword">error</span> $[Property [<a href="#x_6190_6191" id="x_6322_6323" title="Defined at line 140">x</a>] of entity [<a href="#ent_6185_6188" id="ent_6336_6339" title="Defined at line 140">ent</a>] is defined multiple times] @<a href="#x_6190_6191" id="x_6369_6370" title="Defined at line 140">x</a>,
    <a href="../webdsl-actions.stx#noDuplicateVarDefsInSuper_3785_3810" id="noDuplicateVarDefsInSuper_6376_6401" title="Defined at ../webdsl-actions.stx line 92">noDuplicateVarDefsInSuper</a>(<a href="#s_6182_6183" id="s_6402_6403" title="Defined at line 140">s</a>, <a href="#x_6190_6191" id="x_6405_6406" title="Defined at line 140">x</a>) | <span class="keyword">error</span> $[Cannot override existing entity property [<a href="#x_6190_6191" id="x_6460_6461" title="Defined at line 140">x</a>]] @<a href="#x_6190_6191" id="x_6465_6466" title="Defined at line 140">x</a>.

  <a href="#validPropertyName_6210_6227" id="validPropertyName_6471_6488" title="Referenced at line 141, 147">validPropertyName</a> : <span class="keyword">string</span>
  <a href="#validPropertyName_6471_6488" id="validPropertyName_6500_6517" title="Defined at line 146">validPropertyName</a>(<a href="#x_6528_6529" id="x_6518_6519" title="Referenced at line 148, 148, 148">x</a>) :-
    <a href="#x_6518_6519" id="x_6528_6529" title="Defined at line 147">x</a> != "class" | <span class="keyword">error</span> $[Cannot use the reserved property name [<a href="#x_6518_6519" id="x_6590_6591" title="Defined at line 147">x</a>]] @<a href="#x_6518_6519" id="x_6595_6596" title="Defined at line 147">x</a>.

  <a href="#isValidTypeForPropKind_5400_5422" id="isValidTypeForPropKind_6601_6623" title="Referenced at line 124, 151, 154, 155, 156, 157, 160, 161, 162, 163, 166, 167, 168, 169">isValidTypeForPropKind</a> : <a href="../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#PropKind_207_215" id="PropKind_6626_6634" title="Defined at ../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 13">PropKind</a> * <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#Sort_280_284" id="Sort_6637_6641" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 17">Sort</a> * <a href="../webdsl.stx#TYPE_669_673" id="TYPE_6644_6648" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#isValidTypeForPropKind_6601_6623" id="isValidTypeForPropKind_6651_6673" title="Defined at line 150">isValidTypeForPropKind</a>(<a href="../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#Simple_1785_1791" id="Simple_6674_6680" title="Defined at ../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 48">Simple</a>(), <a href="#sort_6764_6768" id="sort_6684_6688" title="Referenced at line 152">sort</a>, <a href="#sortType_6721_6729" id="sortType_6690_6698" title="Referenced at line 152">sortType</a>) :-
    <a href="../webdsl-types.stx#isBuiltInType_7290_7303" id="isBuiltInType_6707_6720" title="Defined at ../webdsl-types.stx line 198">isBuiltInType</a>(<a href="#sortType_6690_6698" id="sortType_6721_6729" title="Defined at line 151">sortType</a>) | <span class="keyword">error</span> $[Expected simple type] @<a href="#sort_6684_6688" id="sort_6764_6768" title="Defined at line 151">sort</a>.

  <a href="#isValidTypeForPropKind_6601_6623" id="isValidTypeForPropKind_6773_6795" title="Defined at line 150">isValidTypeForPropKind</a>(<a href="../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#Ref_1807_1810" id="Ref_6796_6799" title="Defined at ../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 49">Ref</a>(), _, <a href="../webdsl-types.stx#ENTITY_444_450" id="ENTITY_6806_6812" title="Defined at ../webdsl-types.stx line 20">ENTITY</a>(_, _)).
  <a href="#isValidTypeForPropKind_6601_6623" id="isValidTypeForPropKind_6823_6845" title="Defined at line 150">isValidTypeForPropKind</a>(<a href="../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#Ref_1807_1810" id="Ref_6846_6849" title="Defined at ../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 49">Ref</a>(), _, <a href="../webdsl-types.stx#LIST_891_895" id="LIST_6856_6860" title="Defined at ../webdsl-types.stx line 35">LIST</a>(<a href="../webdsl-types.stx#ENTITY_444_450" id="ENTITY_6861_6867" title="Defined at ../webdsl-types.stx line 20">ENTITY</a>(_, _))).
  <a href="#isValidTypeForPropKind_6601_6623" id="isValidTypeForPropKind_6879_6901" title="Defined at line 150">isValidTypeForPropKind</a>(<a href="../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#Ref_1807_1810" id="Ref_6902_6905" title="Defined at ../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 49">Ref</a>(), _, <a href="../webdsl-types.stx#SET_915_918" id="SET_6912_6915" title="Defined at ../webdsl-types.stx line 36">SET</a>(<a href="../webdsl-types.stx#ENTITY_444_450" id="ENTITY_6916_6922" title="Defined at ../webdsl-types.stx line 20">ENTITY</a>(_, _))).
  <a href="#isValidTypeForPropKind_6601_6623" id="isValidTypeForPropKind_6934_6956" title="Defined at line 150">isValidTypeForPropKind</a>(<a href="../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#Ref_1807_1810" id="Ref_6957_6960" title="Defined at ../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 49">Ref</a>(), <a href="#sort_7041_7045" id="sort_6964_6968" title="Referenced at line 158">sort</a>, _) :-
    <span class="keyword">false</span> | <span class="keyword">error</span> $[Expected: Reference type or Composite type] @<a href="#sort_6964_6968" id="sort_7041_7045" title="Defined at line 157">sort</a>. <span class="layout">// correct error message for tests</span>

  <a href="#isValidTypeForPropKind_6601_6623" id="isValidTypeForPropKind_7085_7107" title="Defined at line 150">isValidTypeForPropKind</a>(<a href="../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#Comp_1826_1830" id="Comp_7108_7112" title="Defined at ../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 50">Comp</a>(), _, <a href="../webdsl-types.stx#ENTITY_444_450" id="ENTITY_7119_7125" title="Defined at ../webdsl-types.stx line 20">ENTITY</a>(_, _)).
  <a href="#isValidTypeForPropKind_6601_6623" id="isValidTypeForPropKind_7136_7158" title="Defined at line 150">isValidTypeForPropKind</a>(<a href="../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#Comp_1826_1830" id="Comp_7159_7163" title="Defined at ../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 50">Comp</a>(), _, <a href="../webdsl-types.stx#LIST_891_895" id="LIST_7170_7174" title="Defined at ../webdsl-types.stx line 35">LIST</a>(<a href="../webdsl-types.stx#ENTITY_444_450" id="ENTITY_7175_7181" title="Defined at ../webdsl-types.stx line 20">ENTITY</a>(_, _))).
  <a href="#isValidTypeForPropKind_6601_6623" id="isValidTypeForPropKind_7193_7215" title="Defined at line 150">isValidTypeForPropKind</a>(<a href="../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#Comp_1826_1830" id="Comp_7216_7220" title="Defined at ../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 50">Comp</a>(), _, <a href="../webdsl-types.stx#SET_915_918" id="SET_7227_7230" title="Defined at ../webdsl-types.stx line 36">SET</a>(<a href="../webdsl-types.stx#ENTITY_444_450" id="ENTITY_7231_7237" title="Defined at ../webdsl-types.stx line 20">ENTITY</a>(_, _))).
  <a href="#isValidTypeForPropKind_6601_6623" id="isValidTypeForPropKind_7249_7271" title="Defined at line 150">isValidTypeForPropKind</a>(<a href="../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#Comp_1826_1830" id="Comp_7272_7276" title="Defined at ../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 50">Comp</a>(), <a href="#sort_7357_7361" id="sort_7280_7284" title="Referenced at line 164">sort</a>, _) :-
    <span class="keyword">false</span> | <span class="keyword">error</span> $[Expected: Reference type or Composite type] @<a href="#sort_7280_7284" id="sort_7357_7361" title="Defined at line 163">sort</a>. <span class="layout">// correct error message for tests</span>

  <a href="#isValidTypeForPropKind_6601_6623" id="isValidTypeForPropKind_7401_7423" title="Defined at line 150">isValidTypeForPropKind</a>(<a href="../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#AnyProp_1846_1853" id="AnyProp_7424_7431" title="Defined at ../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 51">AnyProp</a>(), _, <a href="../webdsl-types.stx#ENTITY_444_450" id="ENTITY_7438_7444" title="Defined at ../webdsl-types.stx line 20">ENTITY</a>(_, _)).
  <a href="#isValidTypeForPropKind_6601_6623" id="isValidTypeForPropKind_7455_7477" title="Defined at line 150">isValidTypeForPropKind</a>(<a href="../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#AnyProp_1846_1853" id="AnyProp_7478_7485" title="Defined at ../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 51">AnyProp</a>(), _, <a href="../webdsl-types.stx#LIST_891_895" id="LIST_7492_7496" title="Defined at ../webdsl-types.stx line 35">LIST</a>(<a href="../webdsl-types.stx#ENTITY_444_450" id="ENTITY_7497_7503" title="Defined at ../webdsl-types.stx line 20">ENTITY</a>(_, _))).
  <a href="#isValidTypeForPropKind_6601_6623" id="isValidTypeForPropKind_7515_7537" title="Defined at line 150">isValidTypeForPropKind</a>(<a href="../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#AnyProp_1846_1853" id="AnyProp_7538_7545" title="Defined at ../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 51">AnyProp</a>(), _, <a href="../webdsl-types.stx#SET_915_918" id="SET_7552_7555" title="Defined at ../webdsl-types.stx line 36">SET</a>(<a href="../webdsl-types.stx#ENTITY_444_450" id="ENTITY_7556_7562" title="Defined at ../webdsl-types.stx line 20">ENTITY</a>(_, _))).
  <a href="#isValidTypeForPropKind_6601_6623" id="isValidTypeForPropKind_7574_7596" title="Defined at line 150">isValidTypeForPropKind</a>(<a href="../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#AnyProp_1846_1853" id="AnyProp_7597_7604" title="Defined at ../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 51">AnyProp</a>(), <a href="#sort_7737_7741" id="sort_7608_7612" title="Referenced at line 170">sort</a>, <a href="#sortType_7645_7653" id="sortType_7614_7622" title="Referenced at line 170">sortType</a>) :-
    <a href="../webdsl-types.stx#isBuiltInType_7290_7303" id="isBuiltInType_7631_7644" title="Defined at ../webdsl-types.stx line 198">isBuiltInType</a>(<a href="#sortType_7614_7622" id="sortType_7645_7653" title="Defined at line 169">sortType</a>) | <span class="keyword">error</span> $[Expected simple type or entity type or a collection of an entity type] @<a href="#sort_7608_7612" id="sort_7737_7741" title="Defined at line 169">sort</a>.

  <span class="layout">// validation</span>
  <a href="#declEntityBodyDeclaration_4408_4433" id="declEntityBodyDeclaration_7762_7787" title="Defined at line 107">declEntityBodyDeclaration</a>(<a href="#s_7849_7850" id="s_7788_7789" title="Referenced at line 173">s</a>, _, <a href="../../../src-gen/statix/signatures/WebDSL-DataValidation-sig.stx#ValidateEntity_516_530" id="ValidateEntity_7794_7808" title="Defined at ../../../src-gen/statix/signatures/WebDSL-DataValidation-sig.stx line 24">ValidateEntity</a>(<a href="#validateExp_7852_7863" id="validateExp_7809_7820" title="Referenced at line 173">validateExp</a>, <a href="#messageExp_7865_7875" id="messageExp_7822_7832" title="Referenced at line 173">messageExp</a>)) :- <a href="../entities/annotations.stx#validateOk_8996_9006" id="validateOk_7838_7848" title="Defined at ../entities/annotations.stx line 194">validateOk</a>(<a href="#s_7788_7789" id="s_7849_7850" title="Defined at line 173">s</a>, <a href="#validateExp_7809_7820" id="validateExp_7852_7863" title="Defined at line 173">validateExp</a>, <a href="#messageExp_7822_7832" id="messageExp_7865_7875" title="Defined at line 173">messageExp</a>).

<span class="keyword">rules</span> <span class="layout">// entity resolving</span>

  <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_7908_7917" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_7985_7986" id="s_7918_7919" title="Referenced at line 178, 180">s</a>, <a href="#exp_8072_8075" id="exp_7921_7924" title="Referenced at line 181">exp</a>@<a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#ObjectCreation_3847_3861" id="ObjectCreation_7925_7939" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 124">ObjectCreation</a>(<a href="#x_7988_7989" id="x_7940_7941" title="Referenced at line 178">x</a>, <a href="#prop_assignments_8048_8064" id="prop_assignments_7943_7959" title="Referenced at line 180">prop_assignments</a>)) = <a href="#e_7994_7995" id="e_7964_7965" title="Referenced at line 178, 179, 180, 181">e</a> :-
    <a href="../webdsl-types.stx#definedType_7911_7922" id="definedType_7973_7984" title="Defined at ../webdsl-types.stx line 218">definedType</a>(<a href="#s_7918_7919" id="s_7985_7986" title="Defined at line 177">s</a>, <a href="#x_7940_7941" id="x_7988_7989" title="Defined at line 177">x</a>) == <a href="#e_7964_7965" id="e_7994_7995" title="Defined at line 177">e</a>,
    <a href="#e_7964_7965" id="e_8001_8002" title="Defined at line 177">e</a> == <a href="../webdsl-types.stx#ENTITY_444_450" id="ENTITY_8006_8012" title="Defined at ../webdsl-types.stx line 20">ENTITY</a>(_, _),
    <a href="#propAssignmentsOk_8424_8441" id="propAssignmentsOk_8024_8041" title="Defined at line 193">propAssignmentsOk</a>(<a href="#s_7918_7919" id="s_8042_8043" title="Defined at line 177">s</a>, <a href="#e_7964_7965" id="e_8045_8046" title="Defined at line 177">e</a>, <a href="#prop_assignments_7943_7959" id="prop_assignments_8048_8064" title="Defined at line 177">prop_assignments</a>),
    @<a href="#exp_7921_7924" id="exp_8072_8075" title="Defined at line 177">exp</a>.<span class="keyword">type</span> := <a href="#e_7964_7965" id="e_8084_8085" title="Defined at line 177">e</a>.

  <a href="#typeOfThis_8119_8129" id="typeOfThis_8090_8100" title="Referenced at line 184, 187; ../entities/annotations.stx line 114, 129, 142">typeOfThis</a> : <span class="keyword">scope</span> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_8112_8116" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#typeOfThis_8090_8100" id="typeOfThis_8119_8129" title="Defined at line 183">typeOfThis</a>(<a href="#s_ent_8159_8164" id="s_ent_8130_8135" title="Referenced at line 185">s_ent</a>) = <a href="#t_8186_8187" id="t_8139_8140" title="Referenced at line 185">t</a> :-
    <a href="../webdsl.stx#resolveVar_13466_13476" id="resolveVar_8148_8158" title="Defined at ../webdsl.stx line 306">resolveVar</a>(<a href="#s_ent_8130_8135" id="s_ent_8159_8164" title="Defined at line 184">s_ent</a>, "this") == [(_, (_, <a href="#t_8139_8140" id="t_8186_8187" title="Defined at line 184">t</a>))] | <span class="keyword">error</span> $[Variable "this" not defined].

  <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_8234_8243" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(s, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#This_3724_3728" id="This_8247_8251" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 119">This</a>(_)) = <a href="#typeOfThis_8090_8100" id="typeOfThis_8258_8268" title="Defined at line 183">typeOfThis</a>(<span id="s_8269_8270" title="Not referenced locally, nor via imports">s</span>).

  <a href="../webdsl-actions.stx#typeOfProperty_10792_10806" id="typeOfProperty_8276_8290" title="Defined at ../webdsl-actions.stx line 260">typeOfProperty</a>(_, _, "this") = <a href="../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_8307_8314" title="Defined at ../webdsl-types.stx line 49">UNTYPED</a>() :-
    <span class="keyword">false</span> | <span class="keyword">error</span> $[This is only accessible from within the entity].

  <span class="layout">// object creation properties</span>
  <a href="#propAssignmentsOk_8024_8041" id="propAssignmentsOk_8424_8441" title="Referenced at line 180">propAssignmentsOk</a> <span class="keyword">maps</span> <a href="#propAssignmentOk_8481_8497" id="propAssignmentOk_8447_8463" title="Defined at line 194">propAssignmentOk</a>(*, *, <span class="keyword">list</span>(*))
  <a href="#propAssignmentOk_8447_8463" id="propAssignmentOk_8481_8497" title="Referenced at line 193, 195, 196">propAssignmentOk</a> : <span class="keyword">scope</span> * <a href="../webdsl.stx#TYPE_669_673" id="TYPE_8508_8512" title="Defined at ../webdsl.stx line 29">TYPE</a> * <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#PropAssignment_412_426" id="PropAssignment_8515_8529" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 26">PropAssignment</a>
  <a href="#propAssignmentOk_8481_8497" id="propAssignmentOk_8532_8548" title="Defined at line 194">propAssignmentOk</a>(_, _, _) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[This property assignment is not yet implemented].
  <a href="#propAssignmentOk_8481_8497" id="propAssignmentOk_8639_8655" title="Defined at line 194">propAssignmentOk</a>(<a href="#s_8774_8775" id="s_8656_8657" title="Referenced at line 197, 199">s</a>, <a href="#ent_8777_8780" id="ent_8659_8662" title="Referenced at line 197">ent</a>@<a href="../webdsl-types.stx#ENTITY_444_450" id="ENTITY_8663_8669" title="Defined at ../webdsl-types.stx line 20">ENTITY</a>(<a href="#e_8815_8816" id="e_8670_8671" title="Referenced at line 197">e</a>, <a href="#s_ent_8866_8871" id="s_ent_8673_8678" title="Referenced at line 198">s_ent</a>), <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#PropAssignment_3912_3926" id="PropAssignment_8681_8695" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 125">PropAssignment</a>(<a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#ObjectPropertyAssignment_4045_4069" id="ObjectPropertyAssignment_8696_8720" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 127">ObjectPropertyAssignment</a>(<a href="#x_8782_8783" id="x_8721_8722" title="Referenced at line 197, 197, 198">x</a>, <a href="#exp_8987_8990" id="exp_8724_8727" title="Referenced at line 199">exp</a>))) :- { <a href="#propType_8788_8796" id="propType_8736_8744" title="Referenced at line 197, 200, 200">propType</a> <a href="#expType_8995_9002" id="expType_8745_8752" title="Referenced at line 199, 200, 200">expType</a> }
    <a href="../webdsl-actions.stx#typeOfProperty_10792_10806" id="typeOfProperty_8759_8773" title="Defined at ../webdsl-actions.stx line 260">typeOfProperty</a>(<a href="#s_8656_8657" id="s_8774_8775" title="Defined at line 196">s</a>, <a href="#ent_8659_8662" id="ent_8777_8780" title="Defined at line 196">ent</a>, <a href="#x_8721_8722" id="x_8782_8783" title="Defined at line 196">x</a>) == <a href="#propType_8736_8744" id="propType_8788_8796" title="Defined at line 196">propType</a> | <span class="keyword">error</span> $[Entity [<a href="#e_8670_8671" id="e_8815_8816" title="Defined at line 196">e</a>] does not contain a property [<a href="#x_8721_8722" id="x_8847_8848" title="Defined at line 196">x</a>]],
    <a href="../entities/annotations.stx#isMutable_10488_10497" id="isMutable_8856_8865" title="Defined at ../entities/annotations.stx line 226">isMutable</a>(<a href="#s_ent_8673_8678" id="s_ent_8866_8871" title="Defined at line 196">s_ent</a>, <a href="#x_8721_8722" id="x_8873_8874" title="Defined at line 196">x</a>) | <span class="keyword">error</span> $[Assignment to derived property is not allowed.], <span class="layout">// correct error message for tests</span>
    <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_8974_8983" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_8656_8657" id="s_8984_8985" title="Defined at line 196">s</a>, <a href="#exp_8724_8727" id="exp_8987_8990" title="Defined at line 196">exp</a>) == <a href="#expType_8745_8752" id="expType_8995_9002" title="Defined at line 196">expType</a>,
    <a href="../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_9008_9022" title="Defined at ../webdsl.stx line 408">typeCompatible</a>(<a href="#expType_8745_8752" id="expType_9023_9030" title="Defined at line 196">expType</a>, <a href="#propType_8736_8744" id="propType_9032_9040" title="Defined at line 196">propType</a>) | <span class="keyword">error</span> $[Type of expression [<a href="#expType_8745_8752" id="expType_9072_9079" title="Defined at line 196">expType</a>] is incompatible with type of entity property [<a href="#propType_8736_8744" id="propType_9127_9135" title="Defined at line 196">propType</a>]].

<span class="keyword">rules</span> <span class="layout">// subtyping</span>

  <a href="../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_9162_9177" title="Defined at ../webdsl.stx line 411">typeCompatibleB</a>(<a href="../webdsl-types.stx#ENTITY_444_450" id="ENTITY_9178_9184" title="Defined at ../webdsl-types.stx line 20">ENTITY</a>(_, s_sub), <a href="../webdsl-types.stx#ENTITY_444_450" id="ENTITY_9196_9202" title="Defined at ../webdsl-types.stx line 20">ENTITY</a>(_, s_super)) = <a href="#inherits_9247_9255" id="inherits_9218_9226" title="Defined at line 206">inherits</a>(<span id="s_sub_9227_9232" title="Not referenced locally, nor via imports">s_sub</span>, <span id="s_super_9234_9241" title="Not referenced locally, nor via imports">s_super</span>).

  <a href="#inherits_9218_9226" id="inherits_9247_9255" title="Referenced at line 204, 207; ../webdsl-native.stx line 15">inherits</a> : <span class="keyword">scope</span> * <span class="keyword">scope</span> -&gt; <a href="../webdsl.stx#BOOL_697_701" id="BOOL_9275_9279" title="Defined at ../webdsl.stx line 30">BOOL</a>
  <a href="#inherits_9247_9255" id="inherits_9282_9290" title="Defined at line 206">inherits</a>(<a href="#s_sub_9451_9456" id="s_sub_9291_9296" title="Referenced at line 211">s_sub</a>, <a href="#s_super_9396_9403" id="s_super_9298_9305" title="Referenced at line 209">s_super</a>) = <a href="#nonEmptyPathScopeList_9468_9489" id="nonEmptyPathScopeList_9309_9330" title="Defined at line 213">nonEmptyPathScopeList</a>(<a href="#ps_9461_9463" id="ps_9331_9333" title="Referenced at line 211">ps</a>) :-
    <span class="keyword">query</span> () <span class="keyword">filter</span> <a href="../webdsl.stx#INHERIT_1445_1452" id="INHERIT_9358_9365" title="Defined at ../webdsl.stx line 48">INHERIT</a>*
             <span class="keyword">and</span> { <a href="#s_9391_9392" id="s_9386_9387" title="Referenced at line 209">s</a> :- <a href="#s_9386_9387" id="s_9391_9392" title="Defined at line 209">s</a> == <a href="#s_super_9298_9305" id="s_super_9396_9403" title="Defined at line 207">s_super</a> }
             <span class="keyword">min</span> $ &lt; <a href="../webdsl.stx#INHERIT_1445_1452" id="INHERIT_9427_9434" title="Defined at ../webdsl.stx line 48">INHERIT</a>
             <span class="keyword">in</span> <a href="#s_sub_9291_9296" id="s_sub_9451_9456" title="Defined at line 207">s_sub</a> |-&gt; <a href="#ps_9331_9333" id="ps_9461_9463" title="Defined at line 207">ps</a>.

  <a href="#nonEmptyPathScopeList_9309_9330" id="nonEmptyPathScopeList_9468_9489" title="Referenced at line 207, 214, 215, 226">nonEmptyPathScopeList</a> : <span class="keyword">list</span>((<span class="keyword">path</span> * <span class="keyword">scope</span>)) -&gt; <a href="../webdsl.stx#BOOL_697_701" id="BOOL_9516_9520" title="Defined at ../webdsl.stx line 30">BOOL</a>
  <a href="#nonEmptyPathScopeList_9468_9489" id="nonEmptyPathScopeList_9523_9544" title="Defined at line 213">nonEmptyPathScopeList</a>(_)       = <a href="../webdsl.stx#FALSE_844_849" id="FALSE_9556_9561" title="Defined at ../webdsl.stx line 35">FALSE</a>().
  <a href="#nonEmptyPathScopeList_9468_9489" id="nonEmptyPathScopeList_9567_9588" title="Defined at line 213">nonEmptyPathScopeList</a>([(_,_)]) = <a href="../webdsl.stx#TRUE_828_832" id="TRUE_9600_9604" title="Defined at ../webdsl.stx line 34">TRUE</a>().

  <a href="#inheritEdgesAmount_9655_9673" id="inheritEdgesAmount_9611_9629" title="Referenced at line 218; ../actions/functions.stx line 231">inheritEdgesAmount</a> : <span class="keyword">scope</span> * <span class="keyword">scope</span> -&gt; <span class="keyword">int</span>
  <a href="#inheritEdgesAmount_9611_9629" id="inheritEdgesAmount_9655_9673" title="Defined at line 217">inheritEdgesAmount</a>(<a href="#s_sub_9809_9814" id="s_sub_9674_9679" title="Referenced at line 221">s_sub</a>, <a href="#s_super_9754_9761" id="s_super_9681_9688" title="Referenced at line 219">s_super</a>) = <a href="../webdsl.stx#pathLength_18480_18490" id="pathLength_9692_9702" title="Defined at ../webdsl.stx line 450">pathLength</a>(<a href="#p_9821_9822" id="p_9703_9704" title="Referenced at line 221">p</a>) :-
    <span class="keyword">query</span> () <span class="keyword">filter</span> <a href="../webdsl.stx#INHERIT_1445_1452" id="INHERIT_9729_9736" title="Defined at ../webdsl.stx line 48">INHERIT</a>* <span class="keyword">and</span> { <a href="#s_9749_9750" id="s_9744_9745" title="Referenced at line 219">s</a> :- <a href="#s_9744_9745" id="s_9749_9750" title="Defined at line 219">s</a> == <a href="#s_super_9681_9688" id="s_super_9754_9761" title="Defined at line 218">s_super</a> }
             <span class="keyword">min</span> $ &lt; <a href="../webdsl.stx#INHERIT_1445_1452" id="INHERIT_9785_9792" title="Defined at ../webdsl.stx line 48">INHERIT</a>
             <span class="keyword">in</span> <a href="#s_sub_9674_9679" id="s_sub_9809_9814" title="Defined at line 218">s_sub</a> |-&gt; [(<a href="#p_9703_9704" id="p_9821_9822" title="Defined at line 218">p</a>, _)].

<span class="keyword">rules</span> <span class="layout">// extension</span>

  <a href="#extends_9886_9893" id="extends_9852_9859" title="Referenced at line 226">extends</a> : <span class="keyword">scope</span> * <span class="keyword">scope</span> -&gt; <a href="../webdsl.stx#BOOL_697_701" id="BOOL_9879_9883" title="Defined at ../webdsl.stx line 30">BOOL</a>
  <a href="#extends_9852_9859" id="extends_9886_9893" title="Defined at line 225">extends</a>(<a href="#s_extending_10098_10109" id="s_extending_9894_9905" title="Referenced at line 230">s_extending</a>, <a href="#s_10019_10020" id="s_9907_9908" title="Referenced at line 228">s</a>) = <a href="#nonEmptyPathScopeList_9468_9489" id="nonEmptyPathScopeList_9912_9933" title="Defined at line 213">nonEmptyPathScopeList</a>(<a href="#ps_10114_10116" id="ps_9934_9936" title="Referenced at line 230">ps</a>) :-
    <span class="keyword">query</span> () <span class="keyword">filter</span> <a href="../webdsl.stx#EXTEND_1385_1391" id="EXTEND_9961_9967" title="Defined at ../webdsl.stx line 47">EXTEND</a>? (<a href="../webdsl.stx#INHERIT_1445_1452" id="INHERIT_9970_9977" title="Defined at ../webdsl.stx line 48">INHERIT</a> <a href="../webdsl.stx#EXTEND_1385_1391" id="EXTEND_9978_9984" title="Defined at ../webdsl.stx line 47">EXTEND</a>?)*
             <span class="keyword">and</span> { <a href="#s'_10013_10015" id="s'_10007_10009" title="Referenced at line 228">s'</a> :- <a href="#s'_10007_10009" id="s'_10013_10015" title="Defined at line 228">s'</a> == <a href="#s_9907_9908" id="s_10019_10020" title="Defined at line 226">s</a> }
             <span class="keyword">min</span> $ &lt; <a href="../webdsl.stx#EXTEND_1385_1391" id="EXTEND_10044_10050" title="Defined at ../webdsl.stx line 47">EXTEND</a>, $ &lt; <a href="../webdsl.stx#INHERIT_1445_1452" id="INHERIT_10056_10063" title="Defined at ../webdsl.stx line 48">INHERIT</a>, <a href="../webdsl.stx#EXTEND_1385_1391" id="EXTEND_10065_10071" title="Defined at ../webdsl.stx line 47">EXTEND</a> &lt; <a href="../webdsl.stx#INHERIT_1445_1452" id="INHERIT_10074_10081" title="Defined at ../webdsl.stx line 48">INHERIT</a>
             <span class="keyword">in</span> <a href="#s_extending_9894_9905" id="s_extending_10098_10109" title="Defined at line 226">s_extending</a> |-&gt; <a href="#ps_9934_9936" id="ps_10114_10116" title="Defined at line 226">ps</a>.

</code></pre></td></tr></tbody></table></div>