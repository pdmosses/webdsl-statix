---
title: built-ins.stx
hide:
  - toc
---

# `built-ins.stx`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/types/built-ins.stx]

[pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/types/built-ins.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/trans/static-semantics/types/built-ins.stx "The source file on GitHub"

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
231
232
233
234
235
236
237
238
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../type-extensions.stx#static-semantics/types/built-ins_95_127" id="static-semantics/types/built-ins_7_39" title="Referenced at ../type-extensions.stx line 6; ../../webdsl-ac.stx line 8; ../../webdsl-actions.stx line 11; ../../webdsl-entities.stx line 10; ../../webdsl-expand.stx line 6; ../../webdsl-hql.stx line 4; ../../webdsl-native.stx line 6; ../../webdsl-regex.stx line 4; ../../webdsl-search.stx line 4; ../../webdsl-services.stx line 6; ../../webdsl-types.stx line 6; ../../webdsl-ui.stx line 8; ../../webdsl.stx line 8; ../../actions/binops.stx line 4; ../../actions/built-ins.stx line 4; ../../actions/emails.stx line 4; ../../actions/functions.stx line 4; ../../entities/annotations.stx line 4; ../../entities/built-ins.stx line 4; ../../entities/generated-functions.stx line 6; ../../ui/actions.stx line 8; ../../ui/ajax.stx line 4; ../../ui/attributes.stx line 4; ../../ui/built-ins.stx line 4; ../../ui/template-calls.stx line 8">static-semantics/types/built-ins</a>

<span class="keyword">imports</span>
  <a href="../../actions/functions.stx#static-semantics/actions/functions_7_41" id="static-semantics/actions/functions_51_85" title="Defined at ../../actions/functions.stx line 1">static-semantics/actions/functions</a>

  <a href="../../webdsl-actions.stx#static-semantics/webdsl-actions_7_38" id="static-semantics/webdsl-actions_89_120" title="Defined at ../../webdsl-actions.stx line 1">static-semantics/webdsl-actions</a>
  <a href="../../webdsl-built-ins.stx#static-semantics/webdsl-built-ins_7_40" id="static-semantics/webdsl-built-ins_123_156" title="Defined at ../../webdsl-built-ins.stx line 1">static-semantics/webdsl-built-ins</a>
  <a href="../../webdsl-entities.stx#static-semantics/webdsl-entities_7_39" id="static-semantics/webdsl-entities_159_191" title="Defined at ../../webdsl-entities.stx line 1">static-semantics/webdsl-entities</a>
  <a href="../../webdsl-native.stx#static-semantics/webdsl-native_7_37" id="static-semantics/webdsl-native_194_224" title="Defined at ../../webdsl-native.stx line 1">static-semantics/webdsl-native</a>
  <a href="../../webdsl-types.stx#static-semantics/webdsl-types_7_36" id="static-semantics/webdsl-types_227_256" title="Defined at ../../webdsl-types.stx line 1">static-semantics/webdsl-types</a>
  <a href="../../webdsl.stx#static-semantics/webdsl_7_30" id="static-semantics/webdsl_259_282" title="Defined at ../../webdsl.stx line 1">static-semantics/webdsl</a>

<span class="keyword">rules</span>

  <a href="#declareBuiltInType_331_349" id="declareBuiltInType_293_311" title="Referenced at line 16, 90, 91, 92, 95, 105, 110, 111, 112, 113">declareBuiltInType</a> : <span class="keyword">scope</span> * <span class="keyword">string</span>
  <a href="#declareBuiltInType_293_311" id="declareBuiltInType_331_349" title="Defined at line 15">declareBuiltInType</a>(<a href="#s_391_392" id="s_350_351" title="Referenced at line 17, 18, 19, 20, 21, 22">s</a>, <a href="#name_510_514" id="name_353_357" title="Referenced at line 19, 20, 21, 21, 22, 22">name</a>) :- {<a href="#s_type_431_437" id="s_type_363_369" title="Referenced at line 18, 18, 18, 19, 20, 21, 22">s_type</a> <a href="#s_object_412_420" id="s_object_370_378" title="Referenced at line 17, 18">s_object</a>}
    <a href="#object_2954_2960" id="object_384_390" title="Defined at line 84">object</a>(<a href="#s_350_351" id="s_391_392" title="Defined at line 16">s</a>) == <a href="../../webdsl-types.stx#BUILTINTYPE_1001_1012" id="BUILTINTYPE_397_408" title="Defined at ../../webdsl-types.stx line 40">BUILTINTYPE</a>(_, <a href="#s_object_370_378" id="s_object_412_420" title="Defined at line 16">s_object</a>),
    <span class="keyword">new</span> <a href="#s_type_363_369" id="s_type_431_437" title="Defined at line 16">s_type</a>, <a href="#s_type_363_369" id="s_type_439_445" title="Defined at line 16">s_type</a> -<a href="../../webdsl.stx#INHERIT_1445_1452" id="INHERIT_447_454" title="Defined at ../../webdsl.stx line 48">INHERIT</a>-&gt; <a href="#s_object_370_378" id="s_object_457_465" title="Defined at line 16">s_object</a>, <a href="#s_type_363_369" id="s_type_467_473" title="Defined at line 16">s_type</a> -<a href="../../webdsl.stx#DEF_1498_1501" id="DEF_475_478" title="Defined at ../../webdsl.stx line 49">DEF</a>-&gt; <a href="#s_350_351" id="s_481_482" title="Defined at line 16">s</a>,
    <a href="../../webdsl.stx#declareExtendScope_4401_4419" id="declareExtendScope_488_506" title="Defined at ../../webdsl.stx line 133">declareExtendScope</a>(<a href="#s_350_351" id="s_507_508" title="Defined at line 16">s</a>, <a href="#name_353_357" id="name_510_514" title="Defined at line 16">name</a>, <a href="#s_type_363_369" id="s_type_516_522" title="Defined at line 16">s_type</a>), <span class="layout">// declare s_type to be linked to type name</span>
    <a href="../../webdsl-entities.stx#extendScopes_2356_2368" id="extendScopes_573_585" title="Defined at ../../webdsl-entities.stx line 56">extendScopes</a>(<a href="../../webdsl.stx#resolveExtendScope_4524_4542" id="resolveExtendScope_586_604" title="Defined at ../../webdsl.stx line 137">resolveExtendScope</a>(<a href="#s_350_351" id="s_605_606" title="Defined at line 16">s</a>, <a href="#name_353_357" id="name_608_612" title="Defined at line 16">name</a>), <a href="#s_type_363_369" id="s_type_615_621" title="Defined at line 16">s_type</a>),
    <a href="../../webdsl.stx#declareType_3123_3134" id="declareType_628_639" title="Defined at ../../webdsl.stx line 100">declareType</a>(<a href="#s_350_351" id="s_640_641" title="Defined at line 16">s</a>, <a href="#name_353_357" id="name_643_647" title="Defined at line 16">name</a>, <a href="../../webdsl-types.stx#BUILTINTYPE_1001_1012" id="BUILTINTYPE_649_660" title="Defined at ../../webdsl-types.stx line 40">BUILTINTYPE</a>(<a href="#name_353_357" id="name_661_665" title="Defined at line 16">name</a>, <a href="#s_type_363_369" id="s_type_667_673" title="Defined at line 16">s_type</a>)),
    <a href="../../webdsl.stx#declareVar_13281_13291" id="declareVar_681_691" title="Defined at ../../webdsl.stx line 301">declareVar</a>(<a href="#s_350_351" id="s_692_693" title="Defined at line 16">s</a>, <a href="#name_353_357" id="name_695_699" title="Defined at line 16">name</a>, <a href="../../webdsl-types.stx#STATICBUILTINTYPE_1042_1059" id="STATICBUILTINTYPE_701_718" title="Defined at ../../webdsl-types.stx line 41">STATICBUILTINTYPE</a>(<a href="#name_353_357" id="name_719_723" title="Defined at line 16">name</a>, <a href="#s_type_363_369" id="s_type_725_731" title="Defined at line 16">s_type</a>)). <span class="layout">// declare class name as global variable that refers to the static scope</span>

  <a href="#declareBuiltInSubType_861_882" id="declareBuiltInSubType_811_832" title="Referenced at line 25, 96, 97, 98, 99, 100, 101, 102, 106, 107">declareBuiltInSubType</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> * <span class="keyword">string</span>
  <a href="#declareBuiltInSubType_811_832" id="declareBuiltInSubType_861_882" title="Defined at line 24">declareBuiltInSubType</a>(<a href="#s_933_934" id="s_883_884" title="Referenced at line 26, 27, 29, 30, 31, 32">s</a>, <a href="#sub_1123_1126" id="sub_886_889" title="Referenced at line 28, 29, 30, 31, 31, 32, 32">sub</a>, <a href="#super_936_941" id="super_891_896" title="Referenced at line 26, 26">super</a>) :- {<a href="#s_sub_983_988" id="s_sub_902_907" title="Referenced at line 27, 27, 27, 28, 29, 30, 31, 32">s_sub</a> <a href="#s_super_965_972" id="s_super_908_915" title="Referenced at line 26, 27">s_super</a>}
    <a href="#builtInType_1374_1385" id="builtInType_921_932" title="Defined at line 34">builtInType</a>(<a href="#s_883_884" id="s_933_934" title="Defined at line 25">s</a>, <a href="#super_891_896" id="super_936_941" title="Defined at line 25">super</a>) == <a href="../../webdsl-types.stx#BUILTINTYPE_1001_1012" id="BUILTINTYPE_946_957" title="Defined at ../../webdsl-types.stx line 40">BUILTINTYPE</a>(<a href="#super_891_896" id="super_958_963" title="Defined at line 25">super</a>, <a href="#s_super_908_915" id="s_super_965_972" title="Defined at line 25">s_super</a>),
    <span class="keyword">new</span> <a href="#s_sub_902_907" id="s_sub_983_988" title="Defined at line 25">s_sub</a>, <a href="#s_sub_902_907" id="s_sub_990_995" title="Defined at line 25">s_sub</a> -<a href="../../webdsl.stx#INHERIT_1445_1452" id="INHERIT_997_1004" title="Defined at ../../webdsl.stx line 48">INHERIT</a>-&gt; <a href="#s_super_908_915" id="s_super_1007_1014" title="Defined at line 25">s_super</a>, <a href="#s_sub_902_907" id="s_sub_1016_1021" title="Defined at line 25">s_sub</a> -<a href="../../webdsl.stx#DEF_1498_1501" id="DEF_1023_1026" title="Defined at ../../webdsl.stx line 49">DEF</a>-&gt; <a href="#s_883_884" id="s_1029_1030" title="Defined at line 25">s</a>,
    <a href="../../webdsl-entities.stx#noCircularInheritance_3354_3375" id="noCircularInheritance_1036_1057" title="Defined at ../../webdsl-entities.stx line 76">noCircularInheritance</a>(<a href="#s_sub_902_907" id="s_sub_1058_1063" title="Defined at line 25">s_sub</a>) | <span class="keyword">error</span> $[Circular inheritance detected in built-in type [<a href="#sub_886_889" id="sub_1123_1126" title="Defined at line 25">sub</a>]],
    <a href="../../webdsl.stx#declareExtendScope_4401_4419" id="declareExtendScope_1134_1152" title="Defined at ../../webdsl.stx line 133">declareExtendScope</a>(<a href="#s_883_884" id="s_1153_1154" title="Defined at line 25">s</a>, <a href="#sub_886_889" id="sub_1156_1159" title="Defined at line 25">sub</a>, <a href="#s_sub_902_907" id="s_sub_1161_1166" title="Defined at line 25">s_sub</a>), <span class="layout">// declare s_type to be linked to type name</span>
    <a href="../../webdsl-entities.stx#extendScopes_2356_2368" id="extendScopes_1217_1229" title="Defined at ../../webdsl-entities.stx line 56">extendScopes</a>(<a href="../../webdsl.stx#resolveExtendScope_4524_4542" id="resolveExtendScope_1230_1248" title="Defined at ../../webdsl.stx line 137">resolveExtendScope</a>(<a href="#s_883_884" id="s_1249_1250" title="Defined at line 25">s</a>, <a href="#sub_886_889" id="sub_1252_1255" title="Defined at line 25">sub</a>), <a href="#s_sub_902_907" id="s_sub_1258_1263" title="Defined at line 25">s_sub</a>),
    <a href="../../webdsl.stx#declareType_3123_3134" id="declareType_1270_1281" title="Defined at ../../webdsl.stx line 100">declareType</a>(<a href="#s_883_884" id="s_1282_1283" title="Defined at line 25">s</a>, <a href="#sub_886_889" id="sub_1285_1288" title="Defined at line 25">sub</a>, <a href="../../webdsl-types.stx#BUILTINTYPE_1001_1012" id="BUILTINTYPE_1290_1301" title="Defined at ../../webdsl-types.stx line 40">BUILTINTYPE</a>(<a href="#sub_886_889" id="sub_1302_1305" title="Defined at line 25">sub</a>, <a href="#s_sub_902_907" id="s_sub_1307_1312" title="Defined at line 25">s_sub</a>)),
    <a href="../../webdsl.stx#declareVar_13281_13291" id="declareVar_1320_1330" title="Defined at ../../webdsl.stx line 301">declareVar</a>(<a href="#s_883_884" id="s_1331_1332" title="Defined at line 25">s</a>, <a href="#sub_886_889" id="sub_1334_1337" title="Defined at line 25">sub</a>, <a href="../../webdsl-types.stx#STATICBUILTINTYPE_1042_1059" id="STATICBUILTINTYPE_1339_1356" title="Defined at ../../webdsl-types.stx line 41">STATICBUILTINTYPE</a>(<a href="#sub_886_889" id="sub_1357_1360" title="Defined at line 25">sub</a>, <a href="#s_sub_902_907" id="s_sub_1362_1367" title="Defined at line 25">s_sub</a>)).

  <a href="#builtInType_921_932" id="builtInType_1374_1385" title="Referenced at line 26, 35, 42, 44, 46, 49, 51, 53, 55, 57, 59, 61, 63, 66, 68, 70, 73, 75, 77, 79; ../type-extensions.stx line 16">builtInType</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> -&gt; <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_1406_1410" title="Defined at ../../webdsl.stx line 29">TYPE</a>
  <a href="#builtInType_1374_1385" id="builtInType_1413_1424" title="Defined at line 34">builtInType</a>(<a href="#s_1462_1463" id="s_1425_1426" title="Referenced at line 36">s</a>, <a href="#name_1465_1469" id="name_1428_1432" title="Referenced at line 36, 36, 37, 37">name</a>) = <a href="#t_1549_1550" id="t_1436_1437" title="Referenced at line 37">t</a> :- {<a href="#ts_1474_1476" id="ts_1442_1444" title="Referenced at line 36, 36, 37, 37">ts</a>}
    <a href="../../webdsl.stx#resolveType_3324_3335" id="resolveType_1450_1461" title="Defined at ../../webdsl.stx line 105">resolveType</a>(<a href="#s_1425_1426" id="s_1462_1463" title="Defined at line 35">s</a>, <a href="#name_1428_1432" id="name_1465_1469" title="Defined at line 35">name</a>) == <a href="#ts_1442_1444" id="ts_1474_1476" title="Defined at line 35">ts</a> | <span class="keyword">error</span> $[Built-in type [<a href="#name_1428_1432" id="name_1502_1506" title="Defined at line 35">name</a>] does not exist [<a href="#ts_1442_1444" id="ts_1524_1526" title="Defined at line 35">ts</a>]],
    <a href="#ts_1442_1444" id="ts_1534_1536" title="Defined at line 35">ts</a> == [(_, (_, <a href="#t_1436_1437" id="t_1549_1550" title="Defined at line 35">t</a>@<a href="../../webdsl-types.stx#BUILTINTYPE_1001_1012" id="BUILTINTYPE_1551_1562" title="Defined at ../../webdsl-types.stx line 40">BUILTINTYPE</a>(<a href="#name_1428_1432" id="name_1563_1567" title="Defined at line 35">name</a>, _)))] | <span class="keyword">error</span> $[Built-in type [<a href="#name_1428_1432" id="name_1600_1604" title="Defined at line 35">name</a>] does not exist [<a href="#ts_1442_1444" id="ts_1622_1624" title="Defined at line 35">ts</a>]].

<span class="keyword">rules</span>

  <a href="#int_1662_1665" id="int_1638_1641" title="Referenced at line 42, 117, 147, 168, 172, 175, 179, 183, 186, 187, 202, 207; ../../webdsl-actions.stx line 193, 305; ../../webdsl-hql.stx line 60, 61, 62, 63, 64, 116, 119; ../../webdsl-search.stx line 38; ../../webdsl-types.stx line 69, 162; ../../webdsl-ui.stx line 242; ../../actions/built-ins.stx line 17; ../../actions/functions.stx line 72, 73, 74, 75, 76, 77; ../../entities/built-ins.stx line 22; ../../ui/actions.stx line 176">int</a>   : <span class="keyword">scope</span> -&gt; <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_1655_1659" title="Defined at ../../webdsl.stx line 29">TYPE</a>
  <a href="#int_1638_1641" id="int_1662_1665" title="Defined at line 41">int</a>(<span id="s_1666_1667" title="Not referenced locally, nor via imports">s</span>)   = <a href="#builtInType_1374_1385" id="builtInType_1673_1684" title="Defined at line 34">builtInType</a>(s, "Int").
  <a href="#float_1722_1727" id="float_1698_1703" title="Referenced at line 44, 119; ../../webdsl-hql.stx line 59; ../../webdsl-types.stx line 77, 163; ../../actions/built-ins.stx line 18">float</a> : <span class="keyword">scope</span> -&gt; <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_1715_1719" title="Defined at ../../webdsl.stx line 29">TYPE</a>
  <a href="#float_1698_1703" id="float_1722_1727" title="Defined at line 43">float</a>(<span id="s_1728_1729" title="Not referenced locally, nor via imports">s</span>) = <a href="#builtInType_1374_1385" id="builtInType_1733_1744" title="Defined at line 34">builtInType</a>(s, "Float").
  <a href="#long_1784_1788" id="long_1760_1764" title="Referenced at line 46; ../../webdsl-types.stx line 73, 164">long</a>  : <span class="keyword">scope</span> -&gt; <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_1777_1781" title="Defined at ../../webdsl.stx line 29">TYPE</a>
  <a href="#long_1760_1764" id="long_1784_1788" title="Defined at line 45">long</a>(<span id="s_1789_1790" title="Not referenced locally, nor via imports">s</span>)  = <a href="#builtInType_1374_1385" id="builtInType_1795_1806" title="Defined at line 34">builtInType</a>(s, "Long").

  <a href="#string_1852_1858" id="string_1822_1828" title="Referenced at line 49, 118, 193, 196, 232; ../../webdsl-entities.stx line 96; ../../webdsl-regex.stx line 15, 20, 24, 25, 29, 30, 30, 34, 35, 35; ../../webdsl-search.stx line 24, 27, 41, 44; ../../webdsl-types.stx line 81, 166; ../../webdsl-ui.stx line 207; ../../actions/built-ins.stx line 15; ../../entities/annotations.stx line 97, 199; ../../entities/built-ins.stx line 21, 23, 28, 41; ../../entities/generated-functions.stx line 48; ../../ui/actions.stx line 68, 113, 116; ../../ui/ajax.stx line 18, 26, 34, 42, 69, 77, 81, 94; ../../ui/attributes.stx line 52, 54, 55, 62, 64, 65; ../../ui/built-ins.stx line 33, 35, 36, 36, 37, 38, 39, 41, 43, 47; ../../ui/template-calls.stx line 70, 109">string</a>      : <span class="keyword">scope</span> -&gt; <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_1845_1849" title="Defined at ../../webdsl.stx line 29">TYPE</a>
  <a href="#string_1822_1828" id="string_1852_1858" title="Defined at line 48">string</a>(<span id="s_1859_1860" title="Not referenced locally, nor via imports">s</span>)       = <a href="#builtInType_1374_1385" id="builtInType_1870_1881" title="Defined at line 34">builtInType</a>(s, "String").
  <a href="#secret_1928_1934" id="secret_1898_1904" title="Referenced at line 51; ../../webdsl-types.stx line 167">secret</a>      : <span class="keyword">scope</span> -&gt; <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_1921_1925" title="Defined at ../../webdsl.stx line 29">TYPE</a>
  <a href="#secret_1898_1904" id="secret_1928_1934" title="Defined at line 50">secret</a>(s)       = <a href="#builtInType_1374_1385" id="builtInType_1946_1957" title="Defined at line 34">builtInType</a>(<span id="s_1958_1959" title="Not referenced locally, nor via imports">s</span>, "Secret").
  <a href="#email_2004_2009" id="email_1974_1979" title="Referenced at line 53; ../../webdsl-types.stx line 168">email</a>       : <span class="keyword">scope</span> -&gt; <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_1997_2001" title="Defined at ../../webdsl.stx line 29">TYPE</a>
  <a href="#email_1974_1979" id="email_2004_2009" title="Defined at line 52">email</a>(<span id="s_2010_2011" title="Not referenced locally, nor via imports">s</span>)        = <a href="#builtInType_1374_1385" id="builtInType_2022_2033" title="Defined at line 34">builtInType</a>(s, "Email").
  <a href="#url_2079_2082" id="url_2049_2052" title="Referenced at line 55; ../../webdsl-types.stx line 169; ../../actions/built-ins.stx line 23; ../../ui/built-ins.stx line 17, 33">url</a>         : <span class="keyword">scope</span> -&gt; <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_2072_2076" title="Defined at ../../webdsl.stx line 29">TYPE</a>
  <a href="#url_2049_2052" id="url_2079_2082" title="Defined at line 54">url</a>(s)          = <a href="#builtInType_1374_1385" id="builtInType_2097_2108" title="Defined at line 34">builtInType</a>(<span id="s_2109_2110" title="Not referenced locally, nor via imports">s</span>, "URL").
  <a href="#wikitext_2152_2160" id="wikitext_2122_2130" title="Referenced at line 57; ../../webdsl-types.stx line 170">wikitext</a>    : <span class="keyword">scope</span> -&gt; <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_2145_2149" title="Defined at ../../webdsl.stx line 29">TYPE</a>
  <a href="#wikitext_2122_2130" id="wikitext_2152_2160" title="Defined at line 56">wikitext</a>(s)     = <a href="#builtInType_1374_1385" id="builtInType_2170_2181" title="Defined at line 34">builtInType</a>(<span id="s_2182_2183" title="Not referenced locally, nor via imports">s</span>, "WikiText").
  <a href="#text_2230_2234" id="text_2200_2204" title="Referenced at line 59; ../../webdsl-types.stx line 171; ../../entities/built-ins.stx line 32, 38">text</a>        : <span class="keyword">scope</span> -&gt; <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_2223_2227" title="Defined at ../../webdsl.stx line 29">TYPE</a>
  <a href="#text_2200_2204" id="text_2230_2234" title="Defined at line 58">text</a>(<span id="s_2235_2236" title="Not referenced locally, nor via imports">s</span>)         = <a href="#builtInType_1374_1385" id="builtInType_2248_2259" title="Defined at line 34">builtInType</a>(s, "Text").
  <a href="#patch_2304_2309" id="patch_2274_2279" title="Referenced at line 61; ../../webdsl-types.stx line 172">patch</a>       : <span class="keyword">scope</span> -&gt; <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_2297_2301" title="Defined at ../../webdsl.stx line 29">TYPE</a>
  <a href="#patch_2274_2279" id="patch_2304_2309" title="Defined at line 60">patch</a>(s)        = <a href="#builtInType_1374_1385" id="builtInType_2322_2333" title="Defined at line 34">builtInType</a>(<span id="s_2334_2335" title="Not referenced locally, nor via imports">s</span>, "Patch").
  <a href="#placeholder_2379_2390" id="placeholder_2349_2360" title="Referenced at line 63; ../../webdsl-types.stx line 173; ../../webdsl.stx line 278">placeholder</a> : <span class="keyword">scope</span> -&gt; <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_2372_2376" title="Defined at ../../webdsl.stx line 29">TYPE</a>
  <a href="#placeholder_2349_2360" id="placeholder_2379_2390" title="Defined at line 62">placeholder</a>(s)  = <a href="#builtInType_1374_1385" id="builtInType_2397_2408" title="Defined at line 34">builtInType</a>(<span id="s_2409_2410" title="Not referenced locally, nor via imports">s</span>, "Placeholder").

  <a href="#date_2458_2462" id="date_2431_2435" title="Referenced at line 66; ../../webdsl-types.stx line 175; ../../actions/built-ins.stx line 14">date</a>     : <span class="keyword">scope</span> -&gt; <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_2451_2455" title="Defined at ../../webdsl.stx line 29">TYPE</a>
  <a href="#date_2431_2435" id="date_2458_2462" title="Defined at line 65">date</a>(s)     = <a href="#builtInType_1374_1385" id="builtInType_2472_2483" title="Defined at line 34">builtInType</a>(<span id="s_2484_2485" title="Not referenced locally, nor via imports">s</span>, "Date").
  <a href="#datetime_2525_2533" id="datetime_2498_2506" title="Referenced at line 68; ../../webdsl-types.stx line 176; ../../actions/built-ins.stx line 13; ../../entities/built-ins.stx line 24, 25, 37">datetime</a> : <span class="keyword">scope</span> -&gt; <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_2518_2522" title="Defined at ../../webdsl.stx line 29">TYPE</a>
  <a href="#datetime_2498_2506" id="datetime_2525_2533" title="Defined at line 67">datetime</a>(<span id="s_2534_2535" title="Not referenced locally, nor via imports">s</span>) = <a href="#builtInType_1374_1385" id="builtInType_2539_2550" title="Defined at line 34">builtInType</a>(s, "DateTime").
  <a href="#time_2596_2600" id="time_2569_2573" title="Referenced at line 70; ../../webdsl-types.stx line 177; ../../actions/built-ins.stx line 16">time</a>     : <span class="keyword">scope</span> -&gt; <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_2589_2593" title="Defined at ../../webdsl.stx line 29">TYPE</a>
  <a href="#time_2569_2573" id="time_2596_2600" title="Defined at line 69">time</a>(s)     = <a href="#builtInType_1374_1385" id="builtInType_2610_2621" title="Defined at line 34">builtInType</a>(<span id="s_2622_2623" title="Not referenced locally, nor via imports">s</span>, "Time").

  <a href="#bool_2661_2665" id="bool_2637_2641" title="Referenced at line 73; ../../webdsl-ac.stx line 22, 40, 43, 83, 99, 110, 126, 130, 191; ../../webdsl-actions.stx line 150, 158, 210, 315, 319; ../../webdsl-regex.stx line 14, 19; ../../webdsl-types.stx line 54, 58, 180, 212; ../../webdsl-ui.stx line 179; ../../actions/binops.stx line 60, 68, 76, 84, 92, 99, 106, 117, 127, 136; ../../actions/built-ins.stx line 21; ../../actions/emails.stx line 10; ../../entities/annotations.stx line 198; ../../entities/built-ins.stx line 39, 40; ../../entities/generated-functions.stx line 28; ../../ui/attributes.stx line 36, 40">bool</a>  : <span class="keyword">scope</span> -&gt; <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_2654_2658" title="Defined at ../../webdsl.stx line 29">TYPE</a>
  <a href="#bool_2637_2641" id="bool_2661_2665" title="Defined at line 72">bool</a>(<span id="s_2666_2667" title="Not referenced locally, nor via imports">s</span>)  = <a href="#builtInType_1374_1385" id="builtInType_2672_2683" title="Defined at line 34">builtInType</a>(s, "Bool").
  <a href="#uuid_2722_2726" id="uuid_2698_2702" title="Referenced at line 75; ../../webdsl-types.stx line 182; ../../actions/built-ins.stx line 19; ../../entities/built-ins.stx line 20, 42; ../../entities/generated-functions.stx line 25">uuid</a>  : <span class="keyword">scope</span> -&gt; <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_2715_2719" title="Defined at ../../webdsl.stx line 29">TYPE</a>
  <a href="#uuid_2698_2702" id="uuid_2722_2726" title="Defined at line 74">uuid</a>(s)  = <a href="#builtInType_1374_1385" id="builtInType_2733_2744" title="Defined at line 34">builtInType</a>(<span id="s_2745_2746" title="Not referenced locally, nor via imports">s</span>, "UUID").
  <a href="#file_2783_2787" id="file_2759_2763" title="Referenced at line 77; ../../webdsl-types.stx line 184">file</a>  : <span class="keyword">scope</span> -&gt; <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_2776_2780" title="Defined at ../../webdsl.stx line 29">TYPE</a>
  <a href="#file_2759_2763" id="file_2783_2787" title="Defined at line 76">file</a>(<span id="s_2788_2789" title="Not referenced locally, nor via imports">s</span>)  = <a href="#builtInType_1374_1385" id="builtInType_2794_2805" title="Defined at line 34">builtInType</a>(s, "File").
  <a href="#image_2844_2849" id="image_2820_2825" title="Referenced at line 79, 136; ../../webdsl-types.stx line 185">image</a> : <span class="keyword">scope</span> -&gt; <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_2837_2841" title="Defined at ../../webdsl.stx line 29">TYPE</a>
  <a href="#image_2820_2825" id="image_2844_2849" title="Defined at line 78">image</a>(s) = <a href="#builtInType_1374_1385" id="builtInType_2855_2866" title="Defined at line 34">builtInType</a>(<span id="s_2867_2868" title="Not referenced locally, nor via imports">s</span>, "Image").

  <a href="#entity_2908_2914" id="entity_2883_2889" title="Referenced at line 82, 230; ../../webdsl-ac.stx line 23, 42; ../../webdsl-entities.stx line 35, 94; ../../webdsl-expand.stx line 32, 72; ../../webdsl-types.stx line 237; ../../actions/built-ins.stx line 24">entity</a> : <span class="keyword">scope</span> -&gt; <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_2901_2905" title="Defined at ../../webdsl.stx line 29">TYPE</a>
  <a href="#entity_2883_2889" id="entity_2908_2914" title="Defined at line 81">entity</a>(<span id="s_2915_2916" title="Not referenced locally, nor via imports">s</span>) = <a href="../../webdsl-types.stx#definedTypeNoRef_8308_8324" id="definedTypeNoRef_2920_2936" title="Defined at ../../webdsl-types.stx line 228">definedTypeNoRef</a>(s, "Entity").

  <a href="#object_384_390" id="object_2954_2960" title="Referenced at line 17, 85; ../../webdsl-native.stx line 23; ../../webdsl-services.stx line 19; ../../actions/built-ins.stx line 22; ../../ui/built-ins.stx line 16, 24, 25">object</a> : <span class="keyword">scope</span> -&gt; <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_2972_2976" title="Defined at ../../webdsl.stx line 29">TYPE</a>
  <a href="#object_2954_2960" id="object_2979_2985" title="Defined at line 84">object</a>(s) = <a href="../../webdsl-types.stx#definedTypeNoRef_8308_8324" id="definedTypeNoRef_2991_3007" title="Defined at ../../webdsl-types.stx line 228">definedTypeNoRef</a>(<span id="s_3008_3009" title="Not referenced locally, nor via imports">s</span>, "Object").

  <a href="#declareTypeBuiltIns_3055_3074" id="declareTypeBuiltIns_3025_3044" title="Referenced at line 88; ../../webdsl.stx line 381">declareTypeBuiltIns</a> : <span class="keyword">scope</span>
  <a href="#declareTypeBuiltIns_3025_3044" id="declareTypeBuiltIns_3055_3074" title="Defined at line 87">declareTypeBuiltIns</a>(<a href="#s_3125_3126" id="s_3075_3076" title="Referenced at line 90, 91, 92, 95, 96, 97, 98, 99, 100, 101, 102, 105, 106, 107, 110, 111, 112, 113">s</a>) :-
    <span class="layout">// numeric types</span>
    <a href="#declareBuiltInType_293_311" id="declareBuiltInType_3106_3124" title="Defined at line 15">declareBuiltInType</a>(<a href="#s_3075_3076" id="s_3125_3126" title="Defined at line 88">s</a>, "Int"),
    <a href="#declareBuiltInType_293_311" id="declareBuiltInType_3140_3158" title="Defined at line 15">declareBuiltInType</a>(<a href="#s_3075_3076" id="s_3159_3160" title="Defined at line 88">s</a>, "Float"),
    <a href="#declareBuiltInType_293_311" id="declareBuiltInType_3176_3194" title="Defined at line 15">declareBuiltInType</a>(<a href="#s_3075_3076" id="s_3195_3196" title="Defined at line 88">s</a>, "Long"),

    <span class="layout">// string types</span>
    <a href="#declareBuiltInType_293_311" id="declareBuiltInType_3232_3250" title="Defined at line 15">declareBuiltInType</a>(<a href="#s_3075_3076" id="s_3251_3252" title="Defined at line 88">s</a>, "String"),
    <a href="#declareBuiltInSubType_811_832" id="declareBuiltInSubType_3269_3290" title="Defined at line 24">declareBuiltInSubType</a>(<a href="#s_3075_3076" id="s_3291_3292" title="Defined at line 88">s</a>, "Secret", "String"),
    <a href="#declareBuiltInSubType_811_832" id="declareBuiltInSubType_3319_3340" title="Defined at line 24">declareBuiltInSubType</a>(<a href="#s_3075_3076" id="s_3341_3342" title="Defined at line 88">s</a>, "Email", "String"),
    <a href="#declareBuiltInSubType_811_832" id="declareBuiltInSubType_3368_3389" title="Defined at line 24">declareBuiltInSubType</a>(<a href="#s_3075_3076" id="s_3390_3391" title="Defined at line 88">s</a>, "URL", "String"),
    <a href="#declareBuiltInSubType_811_832" id="declareBuiltInSubType_3415_3436" title="Defined at line 24">declareBuiltInSubType</a>(<a href="#s_3075_3076" id="s_3437_3438" title="Defined at line 88">s</a>, "WikiText", "String"),
    <a href="#declareBuiltInSubType_811_832" id="declareBuiltInSubType_3467_3488" title="Defined at line 24">declareBuiltInSubType</a>(<a href="#s_3075_3076" id="s_3489_3490" title="Defined at line 88">s</a>, "Text", "String"),
    <a href="#declareBuiltInSubType_811_832" id="declareBuiltInSubType_3515_3536" title="Defined at line 24">declareBuiltInSubType</a>(<a href="#s_3075_3076" id="s_3537_3538" title="Defined at line 88">s</a>, "Patch", "String"),
    <a href="#declareBuiltInSubType_811_832" id="declareBuiltInSubType_3564_3585" title="Defined at line 24">declareBuiltInSubType</a>(<a href="#s_3075_3076" id="s_3586_3587" title="Defined at line 88">s</a>, "Placeholder", "String"),

    <span class="layout">// date types</span>
    <a href="#declareBuiltInType_293_311" id="declareBuiltInType_3638_3656" title="Defined at line 15">declareBuiltInType</a>(<a href="#s_3075_3076" id="s_3657_3658" title="Defined at line 88">s</a>, "DateTime"),
    <a href="#declareBuiltInSubType_811_832" id="declareBuiltInSubType_3677_3698" title="Defined at line 24">declareBuiltInSubType</a>(<a href="#s_3075_3076" id="s_3699_3700" title="Defined at line 88">s</a>, "Date", "DateTime"),
    <a href="#declareBuiltInSubType_811_832" id="declareBuiltInSubType_3727_3748" title="Defined at line 24">declareBuiltInSubType</a>(<a href="#s_3075_3076" id="s_3749_3750" title="Defined at line 88">s</a>, "Time", "DateTime"),

    <span class="layout">// misc</span>
    <a href="#declareBuiltInType_293_311" id="declareBuiltInType_3790_3808" title="Defined at line 15">declareBuiltInType</a>(<a href="#s_3075_3076" id="s_3809_3810" title="Defined at line 88">s</a>, "Bool"),
    <a href="#declareBuiltInType_293_311" id="declareBuiltInType_3825_3843" title="Defined at line 15">declareBuiltInType</a>(<a href="#s_3075_3076" id="s_3844_3845" title="Defined at line 88">s</a>, "UUID"),
    <a href="#declareBuiltInType_293_311" id="declareBuiltInType_3860_3878" title="Defined at line 15">declareBuiltInType</a>(<a href="#s_3075_3076" id="s_3879_3880" title="Defined at line 88">s</a>, "File"),
    <a href="#declareBuiltInType_293_311" id="declareBuiltInType_3895_3913" title="Defined at line 15">declareBuiltInType</a>(<a href="#s_3075_3076" id="s_3914_3915" title="Defined at line 88">s</a>, "Image").

  <a href="#declareTypeBuiltInFunctions_3968_3995" id="declareTypeBuiltInFunctions_3930_3957" title="Referenced at line 116; ../../webdsl.stx line 382">declareTypeBuiltInFunctions</a> : <span class="keyword">scope</span>
  <a href="#declareTypeBuiltInFunctions_3930_3957" id="declareTypeBuiltInFunctions_3968_3995" title="Defined at line 115">declareTypeBuiltInFunctions</a>(<a href="#s_4065_4066" id="s_3996_3997" title="Referenced at line 117, 118, 119, 121, 124, 130, 131, 136, 138">s</a>) :- {<a href="#int_4054_4057" id="int_4003_4006" title="Referenced at line 117, 132, 132, 133, 133, 133, 133, 134, 135, 139, 140, 141">int</a> <a href="#string_4073_4079" id="string_4007_4013" title="Referenced at line 118, 126, 127, 128">string</a> <a href="#float_4098_4103" id="float_4014_4019" title="Referenced at line 119, 122, 142, 143">float</a> <a href="#s_int_4126_4131" id="s_int_4020_4025" title="Referenced at line 121, 121, 122">s_int</a> <a href="#s_file_4251_4257" id="s_file_4026_4032" title="Referenced at line 124, 124, 125, 126, 127, 128, 130">s_file</a> <a href="#s_image_4746_4753" id="s_image_4033_4040" title="Referenced at line 131, 131, 132, 133, 134, 135, 136">s_image</a> <a href="#s_float_5275_5282" id="s_float_4041_4048" title="Referenced at line 138, 138, 139, 140, 141, 142, 143">s_float</a>}
    <a href="#int_4003_4006" id="int_4054_4057" title="Defined at line 116">int</a> == <a href="#int_1638_1641" id="int_4061_4064" title="Defined at line 41">int</a>(<a href="#s_3996_3997" id="s_4065_4066" title="Defined at line 116">s</a>),
    <a href="#string_4007_4013" id="string_4073_4079" title="Defined at line 116">string</a> == <a href="#string_1822_1828" id="string_4083_4089" title="Defined at line 48">string</a>(<a href="#s_3996_3997" id="s_4090_4091" title="Defined at line 116">s</a>),
    <a href="#float_4014_4019" id="float_4098_4103" title="Defined at line 116">float</a> == <a href="#float_1698_1703" id="float_4107_4112" title="Defined at line 43">float</a>(<a href="#s_3996_3997" id="s_4113_4114" title="Defined at line 116">s</a>),

    <span class="keyword">new</span> <a href="#s_int_4020_4025" id="s_int_4126_4131" title="Defined at line 116">s_int</a>, <a href="../../webdsl.stx#declareExtendScope_4401_4419" id="declareExtendScope_4133_4151" title="Defined at ../../webdsl.stx line 133">declareExtendScope</a>(<a href="#s_3996_3997" id="s_4152_4153" title="Defined at line 116">s</a>, "Int", <a href="#s_int_4020_4025" id="s_int_4162_4167" title="Defined at line 116">s_int</a>),
    <a href="../../webdsl-built-ins.stx#declBuiltInFunctionEntity_294_319" id="declBuiltInFunctionEntity_4174_4199" title="Defined at ../../webdsl-built-ins.stx line 13">declBuiltInFunctionEntity</a>(<a href="#s_int_4020_4025" id="s_int_4200_4205" title="Defined at line 116">s_int</a>, "floatValue", [], <a href="#float_4014_4019" id="float_4225_4230" title="Defined at line 116">float</a>, <a href="../../webdsl.stx#FALSE_844_849" id="FALSE_4232_4237" title="Defined at ../../webdsl.stx line 35">FALSE</a>()),

    <span class="keyword">new</span> <a href="#s_file_4026_4032" id="s_file_4251_4257" title="Defined at line 116">s_file</a>, <a href="../../webdsl.stx#declareExtendScope_4401_4419" id="declareExtendScope_4259_4277" title="Defined at ../../webdsl.stx line 133">declareExtendScope</a>(<a href="#s_3996_3997" id="s_4278_4279" title="Defined at line 116">s</a>, "File", <a href="#s_file_4026_4032" id="s_file_4289_4295" title="Defined at line 116">s_file</a>),
    <a href="../../webdsl-built-ins.stx#declBuiltInFunctionEntity_294_319" id="declBuiltInFunctionEntity_4302_4327" title="Defined at ../../webdsl-built-ins.stx line 13">declBuiltInFunctionEntity</a>(<a href="#s_file_4026_4032" id="s_file_4328_4334" title="Defined at line 116">s_file</a>, "download"           , []      , <a href="../../webdsl-types.stx#VOID_1167_1171" id="VOID_4369_4373" title="Defined at ../../webdsl-types.stx line 46">VOID</a>(), <a href="../../webdsl.stx#FALSE_844_849" id="FALSE_4377_4382" title="Defined at ../../webdsl.stx line 35">FALSE</a>()),
    <a href="../../webdsl-built-ins.stx#declBuiltInFunctionEntity_294_319" id="declBuiltInFunctionEntity_4391_4416" title="Defined at ../../webdsl-built-ins.stx line 13">declBuiltInFunctionEntity</a>(<a href="#s_file_4026_4032" id="s_file_4417_4423" title="Defined at line 116">s_file</a>, "download"           , [<a href="#string_4007_4013" id="string_4449_4455" title="Defined at line 116">string</a>], <a href="../../webdsl-types.stx#VOID_1167_1171" id="VOID_4458_4462" title="Defined at ../../webdsl-types.stx line 46">VOID</a>(), <a href="../../webdsl.stx#FALSE_844_849" id="FALSE_4466_4471" title="Defined at ../../webdsl.stx line 35">FALSE</a>()),
    <a href="../../webdsl-built-ins.stx#declBuiltInFunctionEntity_294_319" id="declBuiltInFunctionEntity_4480_4505" title="Defined at ../../webdsl-built-ins.stx line 13">declBuiltInFunctionEntity</a>(<a href="#s_file_4026_4032" id="s_file_4506_4512" title="Defined at line 116">s_file</a>, "fileName"           , []      , <a href="#string_4007_4013" id="string_4547_4553" title="Defined at line 116">string</a>, <a href="../../webdsl.stx#FALSE_844_849" id="FALSE_4555_4560" title="Defined at ../../webdsl.stx line 35">FALSE</a>()),
    <a href="../../webdsl-built-ins.stx#declBuiltInFunctionEntity_294_319" id="declBuiltInFunctionEntity_4569_4594" title="Defined at ../../webdsl-built-ins.stx line 13">declBuiltInFunctionEntity</a>(<a href="#s_file_4026_4032" id="s_file_4595_4601" title="Defined at line 116">s_file</a>, "fileNameForDownload", []      , <a href="#string_4007_4013" id="string_4636_4642" title="Defined at line 116">string</a>, <a href="../../webdsl.stx#FALSE_844_849" id="FALSE_4644_4649" title="Defined at ../../webdsl.stx line 35">FALSE</a>()),

    <a href="../../webdsl.stx#declareExtendScope_4401_4419" id="declareExtendScope_4659_4677" title="Defined at ../../webdsl.stx line 133">declareExtendScope</a>(<a href="#s_3996_3997" id="s_4678_4679" title="Defined at line 116">s</a>, "Image", <a href="#s_file_4026_4032" id="s_file_4690_4696" title="Defined at line 116">s_file</a>), <span class="layout">// also expose file functions to image</span>
    <span class="keyword">new</span> <a href="#s_image_4033_4040" id="s_image_4746_4753" title="Defined at line 116">s_image</a>, <a href="../../webdsl.stx#declareExtendScope_4401_4419" id="declareExtendScope_4755_4773" title="Defined at ../../webdsl.stx line 133">declareExtendScope</a>(<a href="#s_3996_3997" id="s_4774_4775" title="Defined at line 116">s</a>, "Image", <a href="#s_image_4033_4040" id="s_image_4786_4793" title="Defined at line 116">s_image</a>),
    <a href="../../webdsl-built-ins.stx#declBuiltInFunctionEntity_294_319" id="declBuiltInFunctionEntity_4800_4825" title="Defined at ../../webdsl-built-ins.stx line 13">declBuiltInFunctionEntity</a>(<a href="#s_image_4033_4040" id="s_image_4826_4833" title="Defined at line 116">s_image</a>, "resize"   , [<a href="#int_4003_4006" id="int_4849_4852" title="Defined at line 116">int</a>, <a href="#int_4003_4006" id="int_4854_4857" title="Defined at line 116">int</a>]          , <a href="../../webdsl-types.stx#VOID_1167_1171" id="VOID_4870_4874" title="Defined at ../../webdsl-types.stx line 46">VOID</a>()  , <a href="../../webdsl.stx#FALSE_844_849" id="FALSE_4880_4885" title="Defined at ../../webdsl.stx line 35">FALSE</a>()),
    <a href="../../webdsl-built-ins.stx#declBuiltInFunctionEntity_294_319" id="declBuiltInFunctionEntity_4894_4919" title="Defined at ../../webdsl-built-ins.stx line 13">declBuiltInFunctionEntity</a>(<a href="#s_image_4033_4040" id="s_image_4920_4927" title="Defined at line 116">s_image</a>, "crop"     , [<a href="#int_4003_4006" id="int_4943_4946" title="Defined at line 116">int</a>, <a href="#int_4003_4006" id="int_4948_4951" title="Defined at line 116">int</a>, <a href="#int_4003_4006" id="int_4953_4956" title="Defined at line 116">int</a>, <a href="#int_4003_4006" id="int_4958_4961" title="Defined at line 116">int</a>], <a href="../../webdsl-types.stx#VOID_1167_1171" id="VOID_4964_4968" title="Defined at ../../webdsl-types.stx line 46">VOID</a>()  , <a href="../../webdsl.stx#FALSE_844_849" id="FALSE_4974_4979" title="Defined at ../../webdsl.stx line 35">FALSE</a>()),
    <a href="../../webdsl-built-ins.stx#declBuiltInFunctionEntity_294_319" id="declBuiltInFunctionEntity_4988_5013" title="Defined at ../../webdsl-built-ins.stx line 13">declBuiltInFunctionEntity</a>(<a href="#s_image_4033_4040" id="s_image_5014_5021" title="Defined at line 116">s_image</a>, "getWidth" , []                  , <a href="#int_4003_4006" id="int_5058_5061" title="Defined at line 116">int</a>     , <a href="../../webdsl.stx#FALSE_844_849" id="FALSE_5068_5073" title="Defined at ../../webdsl.stx line 35">FALSE</a>()),
    <a href="../../webdsl-built-ins.stx#declBuiltInFunctionEntity_294_319" id="declBuiltInFunctionEntity_5082_5107" title="Defined at ../../webdsl-built-ins.stx line 13">declBuiltInFunctionEntity</a>(<a href="#s_image_4033_4040" id="s_image_5108_5115" title="Defined at line 116">s_image</a>, "getHeight", []                  , <a href="#int_4003_4006" id="int_5152_5155" title="Defined at line 116">int</a>     , <a href="../../webdsl.stx#FALSE_844_849" id="FALSE_5162_5167" title="Defined at ../../webdsl.stx line 35">FALSE</a>()),
    <a href="../../webdsl-built-ins.stx#declBuiltInFunctionEntity_294_319" id="declBuiltInFunctionEntity_5176_5201" title="Defined at ../../webdsl-built-ins.stx line 13">declBuiltInFunctionEntity</a>(<a href="#s_image_4033_4040" id="s_image_5202_5209" title="Defined at line 116">s_image</a>, "clone"    , []                  , <a href="#image_2820_2825" id="image_5246_5251" title="Defined at line 78">image</a>(<a href="#s_3996_3997" id="s_5252_5253" title="Defined at line 116">s</a>), <a href="../../webdsl.stx#FALSE_844_849" id="FALSE_5256_5261" title="Defined at ../../webdsl.stx line 35">FALSE</a>()),

    <span class="keyword">new</span> <a href="#s_float_4041_4048" id="s_float_5275_5282" title="Defined at line 116">s_float</a>, <a href="../../webdsl.stx#declareExtendScope_4401_4419" id="declareExtendScope_5284_5302" title="Defined at ../../webdsl.stx line 133">declareExtendScope</a>(<a href="#s_3996_3997" id="s_5303_5304" title="Defined at line 116">s</a>, "Float", <a href="#s_float_4041_4048" id="s_float_5315_5322" title="Defined at line 116">s_float</a>),
    <a href="../../webdsl-built-ins.stx#declBuiltInFunctionEntity_294_319" id="declBuiltInFunctionEntity_5329_5354" title="Defined at ../../webdsl-built-ins.stx line 13">declBuiltInFunctionEntity</a>(<a href="#s_float_4041_4048" id="s_float_5355_5362" title="Defined at line 116">s_float</a>, "round" , [], <a href="#int_4003_4006" id="int_5378_5381" title="Defined at line 116">int</a>, <a href="../../webdsl.stx#FALSE_844_849" id="FALSE_5383_5388" title="Defined at ../../webdsl.stx line 35">FALSE</a>()),
    <a href="../../webdsl-built-ins.stx#declBuiltInFunctionEntity_294_319" id="declBuiltInFunctionEntity_5397_5422" title="Defined at ../../webdsl-built-ins.stx line 13">declBuiltInFunctionEntity</a>(<a href="#s_float_4041_4048" id="s_float_5423_5430" title="Defined at line 116">s_float</a>, "floor" , [], <a href="#int_4003_4006" id="int_5446_5449" title="Defined at line 116">int</a>, <a href="../../webdsl.stx#FALSE_844_849" id="FALSE_5451_5456" title="Defined at ../../webdsl.stx line 35">FALSE</a>()),
    <a href="../../webdsl-built-ins.stx#declBuiltInFunctionEntity_294_319" id="declBuiltInFunctionEntity_5465_5490" title="Defined at ../../webdsl-built-ins.stx line 13">declBuiltInFunctionEntity</a>(<a href="#s_float_4041_4048" id="s_float_5491_5498" title="Defined at line 116">s_float</a>, "ceil"  , [], <a href="#int_4003_4006" id="int_5514_5517" title="Defined at line 116">int</a>, <a href="../../webdsl.stx#FALSE_844_849" id="FALSE_5519_5524" title="Defined at ../../webdsl.stx line 35">FALSE</a>()),
    <a href="../../webdsl-built-ins.stx#declBuiltInFunctionEntity_294_319" id="declBuiltInFunctionEntity_5533_5558" title="Defined at ../../webdsl-built-ins.stx line 13">declBuiltInFunctionEntity</a>(<a href="#s_float_4041_4048" id="s_float_5559_5566" title="Defined at line 116">s_float</a>, "log"   , [], <a href="#float_4014_4019" id="float_5582_5587" title="Defined at line 116">float</a>, <a href="../../webdsl.stx#FALSE_844_849" id="FALSE_5589_5594" title="Defined at ../../webdsl.stx line 35">FALSE</a>()),
    <a href="../../webdsl-built-ins.stx#declBuiltInFunctionEntity_294_319" id="declBuiltInFunctionEntity_5603_5628" title="Defined at ../../webdsl-built-ins.stx line 13">declBuiltInFunctionEntity</a>(<a href="#s_float_4041_4048" id="s_float_5629_5636" title="Defined at line 116">s_float</a>, "log2"  , [], <a href="#float_4014_4019" id="float_5652_5657" title="Defined at line 116">float</a>, <a href="../../webdsl.stx#FALSE_844_849" id="FALSE_5659_5664" title="Defined at ../../webdsl.stx line 35">FALSE</a>()).

<span class="keyword">rules</span> <span class="layout">// built-in functions and properties for built-in generic type List</span>

  <a href="../../webdsl-actions.stx#typeOfProperty_10792_10806" id="typeOfProperty_5747_5761" title="Defined at ../../webdsl-actions.stx line 260">typeOfProperty</a>(s, <a href="../../webdsl-types.stx#LIST_891_895" id="LIST_5765_5769" title="Defined at ../../webdsl-types.stx line 35">LIST</a>(<span id="t_5770_5771" title="Not referenced locally, nor via imports">t</span>), "length") = <a href="#int_1638_1641" id="int_5786_5789" title="Defined at line 41">int</a>(<span id="s_5790_5791" title="Not referenced locally, nor via imports">s</span>).
  <a href="../../webdsl-actions.stx#typeOfProperty_10792_10806" id="typeOfProperty_5796_5810" title="Defined at ../../webdsl-actions.stx line 260">typeOfProperty</a>(<span id="s_5811_5812" title="Not referenced locally, nor via imports">s</span>, <a href="../../webdsl-types.stx#LIST_891_895" id="LIST_5814_5818" title="Defined at ../../webdsl-types.stx line 35">LIST</a>(t), "first") = <span id="t_5834_5835" title="Not referenced locally, nor via imports">t</span>.
  <a href="../../webdsl-actions.stx#typeOfProperty_10792_10806" id="typeOfProperty_5839_5853" title="Defined at ../../webdsl-actions.stx line 260">typeOfProperty</a>(<span id="s_5854_5855" title="Not referenced locally, nor via imports">s</span>, <a href="../../webdsl-types.stx#LIST_891_895" id="LIST_5857_5861" title="Defined at ../../webdsl-types.stx line 35">LIST</a>(t), "last") = <span id="t_5876_5877" title="Not referenced locally, nor via imports">t</span>.

  <a href="../../actions/functions.stx#typeOfCall_1322_1332" id="typeOfCall_5882_5892" title="Defined at ../../actions/functions.stx line 41">typeOfCall</a>(<a href="#s_5960_5961" id="s_5893_5894" title="Referenced at line 152">s</a>, <a href="../../webdsl-types.stx#LIST_891_895" id="LIST_5896_5900" title="Defined at ../../webdsl-types.stx line 35">LIST</a>(<a href="#t_5969_5970" id="t_5901_5902" title="Referenced at line 152">t</a>), "add", [<a href="#arg_5963_5966" id="arg_5913_5916" title="Referenced at line 152">arg</a>]) = <a href="../../webdsl-types.stx#VOID_1167_1171" id="VOID_5921_5925" title="Defined at ../../webdsl-types.stx line 46">VOID</a>() :-
    <a href="../../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_5935_5949" title="Defined at ../../webdsl.stx line 408">typeCompatible</a>(<a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_5950_5959" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_5893_5894" id="s_5960_5961" title="Defined at line 151">s</a>, <a href="#arg_5913_5916" id="arg_5963_5966" title="Defined at line 151">arg</a>), <a href="#t_5901_5902" id="t_5969_5970" title="Defined at line 151">t</a>) | <span class="keyword">error</span> $[No function 'add' with compatible argument types found].

  <a href="../../actions/functions.stx#typeOfCall_1322_1332" id="typeOfCall_6042_6052" title="Defined at ../../actions/functions.stx line 41">typeOfCall</a>(<a href="#s_6123_6124" id="s_6053_6054" title="Referenced at line 155">s</a>, <a href="../../webdsl-types.stx#LIST_891_895" id="LIST_6056_6060" title="Defined at ../../webdsl-types.stx line 35">LIST</a>(<a href="#t_6132_6133" id="t_6061_6062" title="Referenced at line 155">t</a>), "remove", [<a href="#arg_6126_6129" id="arg_6076_6079" title="Referenced at line 155">arg</a>]) = <a href="../../webdsl-types.stx#VOID_1167_1171" id="VOID_6084_6088" title="Defined at ../../webdsl-types.stx line 46">VOID</a>() :-
    <a href="../../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_6098_6112" title="Defined at ../../webdsl.stx line 408">typeCompatible</a>(<a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_6113_6122" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_6053_6054" id="s_6123_6124" title="Defined at line 154">s</a>, <a href="#arg_6076_6079" id="arg_6126_6129" title="Defined at line 154">arg</a>), <a href="#t_6061_6062" id="t_6132_6133" title="Defined at line 154">t</a>) | <span class="keyword">error</span> $[No function 'remove' with compatible argument types found].

  <a href="../../actions/functions.stx#typeOfCall_1322_1332" id="typeOfCall_6208_6218" title="Defined at ../../actions/functions.stx line 41">typeOfCall</a>(<span id="s_6219_6220" title="Not referenced locally, nor via imports">s</span>, <a href="../../webdsl-types.stx#LIST_891_895" id="LIST_6222_6226" title="Defined at ../../webdsl-types.stx line 35">LIST</a>(_), "clear", []) = <a href="../../webdsl-types.stx#VOID_1167_1171" id="VOID_6246_6250" title="Defined at ../../webdsl-types.stx line 46">VOID</a>().

  <a href="../../actions/functions.stx#typeOfCall_1322_1332" id="typeOfCall_6257_6267" title="Defined at ../../actions/functions.stx line 41">typeOfCall</a>(<a href="#s_6343_6344" id="s_6268_6269" title="Referenced at line 160">s</a>, rt@<a href="../../webdsl-types.stx#LIST_891_895" id="LIST_6274_6278" title="Defined at ../../webdsl-types.stx line 35">LIST</a>(<a href="#t_6396_6397" id="t_6279_6280" title="Referenced at line 162, 163">t</a>), "addAll", [<a href="#arg_6346_6349" id="arg_6294_6297" title="Referenced at line 160">arg</a>]) = <span id="rt_6302_6304" title="Not referenced locally, nor via imports">rt</span> :- {<a href="#argType_6322_6329" id="argType_6309_6316" title="Referenced at line 160, 162, 163">argType</a>}
    <a href="#argType_6309_6316" id="argType_6322_6329" title="Defined at line 159">argType</a> == <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_6333_6342" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_6268_6269" id="s_6343_6344" title="Defined at line 159">s</a>, <a href="#arg_6294_6297" id="arg_6346_6349" title="Defined at line 159">arg</a>),
    <a href="../../webdsl.stx#or_17705_17707" id="or_6356_6358" title="Defined at ../../webdsl.stx line 417">or</a>(
      <a href="../../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_6366_6381" title="Defined at ../../webdsl.stx line 411">typeCompatibleB</a>(<a href="#argType_6309_6316" id="argType_6382_6389" title="Defined at line 159">argType</a>, <a href="../../webdsl-types.stx#LIST_891_895" id="LIST_6391_6395" title="Defined at ../../webdsl-types.stx line 35">LIST</a>(<a href="#t_6279_6280" id="t_6396_6397" title="Defined at line 159">t</a>)),
      <a href="../../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_6407_6422" title="Defined at ../../webdsl.stx line 411">typeCompatibleB</a>(<a href="#argType_6309_6316" id="argType_6423_6430" title="Defined at line 159">argType</a>, <a href="../../webdsl-types.stx#SET_915_918" id="SET_6432_6435" title="Defined at ../../webdsl-types.stx line 36">SET</a>(<a href="#t_6279_6280" id="t_6436_6437" title="Defined at line 159">t</a>))
    ).

  <a href="../../actions/functions.stx#typeOfCall_1322_1332" id="typeOfCall_6450_6460" title="Defined at ../../actions/functions.stx line 41">typeOfCall</a>(<span id="s_6461_6462" title="Not referenced locally, nor via imports">s</span>, <a href="../../webdsl-types.stx#LIST_891_895" id="LIST_6464_6468" title="Defined at ../../webdsl-types.stx line 35">LIST</a>(t), "set", []) = <a href="../../webdsl-types.stx#SET_915_918" id="SET_6486_6489" title="Defined at ../../webdsl-types.stx line 36">SET</a>(<span id="t_6490_6491" title="Not referenced locally, nor via imports">t</span>).

  <a href="../../actions/functions.stx#typeOfCall_1322_1332" id="typeOfCall_6497_6507" title="Defined at ../../actions/functions.stx line 41">typeOfCall</a>(s, <a href="../../webdsl-types.stx#LIST_891_895" id="LIST_6511_6515" title="Defined at ../../webdsl-types.stx line 35">LIST</a>(<a href="#t_6588_6589" id="t_6516_6517" title="Referenced at line 169">t</a>), "indexOf", [<a href="#arg_6582_6585" id="arg_6532_6535" title="Referenced at line 169">arg</a>]) = <a href="#int_1638_1641" id="int_6540_6543" title="Defined at line 41">int</a>(<a href="#s_6579_6580" id="s_6544_6545" title="Referenced at line 169">s</a>) :-
    <a href="../../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_6554_6568" title="Defined at ../../webdsl.stx line 408">typeCompatible</a>(<a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_6569_6578" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_6544_6545" id="s_6579_6580" title="Defined at line 168">s</a>, <a href="#arg_6532_6535" id="arg_6582_6585" title="Defined at line 168">arg</a>), <a href="#t_6516_6517" id="t_6588_6589" title="Defined at line 168">t</a>).

  <a href="../../actions/functions.stx#typeOfCall_1322_1332" id="typeOfCall_6595_6605" title="Defined at ../../actions/functions.stx line 41">typeOfCall</a>(<a href="#s_6668_6669" id="s_6606_6607" title="Referenced at line 172, 172">s</a>, <a href="../../webdsl-types.stx#LIST_891_895" id="LIST_6609_6613" title="Defined at ../../webdsl-types.stx line 35">LIST</a>(t), "get", [<a href="#arg_6671_6674" id="arg_6626_6629" title="Referenced at line 172">arg</a>]) = <span id="t_6634_6635" title="Not referenced locally, nor via imports">t</span> :-
    <a href="../../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_6643_6657" title="Defined at ../../webdsl.stx line 408">typeCompatible</a>(<a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_6658_6667" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_6606_6607" id="s_6668_6669" title="Defined at line 171">s</a>, <a href="#arg_6626_6629" id="arg_6671_6674" title="Defined at line 171">arg</a>), <a href="#int_1638_1641" id="int_6677_6680" title="Defined at line 41">int</a>(<a href="#s_6606_6607" id="s_6681_6682" title="Defined at line 171">s</a>)).

  <a href="../../actions/functions.stx#typeOfCall_1322_1332" id="typeOfCall_6689_6699" title="Defined at ../../actions/functions.stx line 41">typeOfCall</a>(<a href="#s_6774_6775" id="s_6700_6701" title="Referenced at line 175, 175, 176">s</a>, <a href="../../webdsl-types.stx#LIST_891_895" id="LIST_6703_6707" title="Defined at ../../webdsl-types.stx line 35">LIST</a>(<a href="#t_6832_6833" id="t_6708_6709" title="Referenced at line 176">t</a>), "set", [<a href="#arg1_6777_6781" id="arg1_6720_6724" title="Referenced at line 175">arg1</a>, <a href="#arg2_6825_6829" id="arg2_6726_6730" title="Referenced at line 176">arg2</a>]) = <a href="../../webdsl-types.stx#VOID_1167_1171" id="VOID_6735_6739" title="Defined at ../../webdsl-types.stx line 46">VOID</a>() :-
    <a href="../../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_6749_6763" title="Defined at ../../webdsl.stx line 408">typeCompatible</a>(<a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_6764_6773" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_6700_6701" id="s_6774_6775" title="Defined at line 174">s</a>, <a href="#arg1_6720_6724" id="arg1_6777_6781" title="Defined at line 174">arg1</a>), <a href="#int_1638_1641" id="int_6784_6787" title="Defined at line 41">int</a>(<a href="#s_6700_6701" id="s_6788_6789" title="Defined at line 174">s</a>)),
    <a href="../../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_6797_6811" title="Defined at ../../webdsl.stx line 408">typeCompatible</a>(<a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_6812_6821" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_6700_6701" id="s_6822_6823" title="Defined at line 174">s</a>, <a href="#arg2_6726_6730" id="arg2_6825_6829" title="Defined at line 174">arg2</a>), <a href="#t_6708_6709" id="t_6832_6833" title="Defined at line 174">t</a>).

  <a href="../../actions/functions.stx#typeOfCall_1322_1332" id="typeOfCall_6839_6849" title="Defined at ../../actions/functions.stx line 41">typeOfCall</a>(<a href="#s_6927_6928" id="s_6850_6851" title="Referenced at line 179, 179, 180">s</a>, <a href="../../webdsl-types.stx#LIST_891_895" id="LIST_6853_6857" title="Defined at ../../webdsl-types.stx line 35">LIST</a>(<a href="#t_6985_6986" id="t_6858_6859" title="Referenced at line 180">t</a>), "insert", [<a href="#arg1_6930_6934" id="arg1_6873_6877" title="Referenced at line 179">arg1</a>, <a href="#arg2_6978_6982" id="arg2_6879_6883" title="Referenced at line 180">arg2</a>]) = <a href="../../webdsl-types.stx#VOID_1167_1171" id="VOID_6888_6892" title="Defined at ../../webdsl-types.stx line 46">VOID</a>() :-
    <a href="../../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_6902_6916" title="Defined at ../../webdsl.stx line 408">typeCompatible</a>(<a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_6917_6926" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_6850_6851" id="s_6927_6928" title="Defined at line 178">s</a>, <a href="#arg1_6873_6877" id="arg1_6930_6934" title="Defined at line 178">arg1</a>), <a href="#int_1638_1641" id="int_6937_6940" title="Defined at line 41">int</a>(<a href="#s_6850_6851" id="s_6941_6942" title="Defined at line 178">s</a>)),
    <a href="../../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_6950_6964" title="Defined at ../../webdsl.stx line 408">typeCompatible</a>(<a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_6965_6974" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_6850_6851" id="s_6975_6976" title="Defined at line 178">s</a>, <a href="#arg2_6879_6883" id="arg2_6978_6982" title="Defined at line 178">arg2</a>), <a href="#t_6858_6859" id="t_6985_6986" title="Defined at line 178">t</a>).

  <a href="../../actions/functions.stx#typeOfCall_1322_1332" id="typeOfCall_6992_7002" title="Defined at ../../actions/functions.stx line 41">typeOfCall</a>(<a href="#s_7075_7076" id="s_7003_7004" title="Referenced at line 183, 183">s</a>, <a href="../../webdsl-types.stx#LIST_891_895" id="LIST_7006_7010" title="Defined at ../../webdsl-types.stx line 35">LIST</a>(<span id="t_7011_7012" title="Not referenced locally, nor via imports">t</span>), "removeAt", [<a href="#arg_7078_7081" id="arg_7028_7031" title="Referenced at line 183">arg</a>]) = <a href="../../webdsl-types.stx#VOID_1167_1171" id="VOID_7036_7040" title="Defined at ../../webdsl-types.stx line 46">VOID</a>() :-
    <a href="../../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_7050_7064" title="Defined at ../../webdsl.stx line 408">typeCompatible</a>(<a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_7065_7074" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_7003_7004" id="s_7075_7076" title="Defined at line 182">s</a>, <a href="#arg_7028_7031" id="arg_7078_7081" title="Defined at line 182">arg</a>), <a href="#int_1638_1641" id="int_7084_7087" title="Defined at line 41">int</a>(<a href="#s_7003_7004" id="s_7088_7089" title="Defined at line 182">s</a>)).

  <a href="../../actions/functions.stx#typeOfCall_1322_1332" id="typeOfCall_7096_7106" title="Defined at ../../actions/functions.stx line 41">typeOfCall</a>(<a href="#s_7184_7185" id="s_7107_7108" title="Referenced at line 186, 186, 187, 187">s</a>, lt@<a href="../../webdsl-types.stx#LIST_891_895" id="LIST_7113_7117" title="Defined at ../../webdsl-types.stx line 35">LIST</a>(_), "subList", [<a href="#arg1_7187_7191" id="arg1_7134_7138" title="Referenced at line 186">arg1</a>, <a href="#arg2_7235_7239" id="arg2_7140_7144" title="Referenced at line 187">arg2</a>]) = <span id="lt_7149_7151" title="Not referenced locally, nor via imports">lt</span> :-
    <a href="../../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_7159_7173" title="Defined at ../../webdsl.stx line 408">typeCompatible</a>(<a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_7174_7183" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_7107_7108" id="s_7184_7185" title="Defined at line 185">s</a>, <a href="#arg1_7134_7138" id="arg1_7187_7191" title="Defined at line 185">arg1</a>), <a href="#int_1638_1641" id="int_7194_7197" title="Defined at line 41">int</a>(<a href="#s_7107_7108" id="s_7198_7199" title="Defined at line 185">s</a>)),
    <a href="../../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_7207_7221" title="Defined at ../../webdsl.stx line 408">typeCompatible</a>(<a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_7222_7231" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_7107_7108" id="s_7232_7233" title="Defined at line 185">s</a>, <a href="#arg2_7140_7144" id="arg2_7235_7239" title="Defined at line 185">arg2</a>), <a href="#int_1638_1641" id="int_7242_7245" title="Defined at line 41">int</a>(<a href="#s_7107_7108" id="s_7246_7247" title="Defined at line 185">s</a>)).

  <a href="../../actions/functions.stx#typeOfCall_1322_1332" id="typeOfCall_7254_7264" title="Defined at ../../actions/functions.stx line 41">typeOfCall</a>(<span id="s_7265_7266" title="Not referenced locally, nor via imports">s</span>, <a href="../../webdsl-types.stx#LIST_891_895" id="LIST_7268_7272" title="Defined at ../../webdsl-types.stx line 35">LIST</a>(t), "random", []) = <span id="t_7293_7294" title="Not referenced locally, nor via imports">t</span>.

<span class="keyword">rules</span> <span class="layout">// built-in functions specifically for lists of strings</span>

  <a href="../../actions/functions.stx#typeOfCall_1322_1332" id="typeOfCall_7362_7372" title="Defined at ../../actions/functions.stx line 41">typeOfCall</a>(s, <a href="../../webdsl-types.stx#LIST_891_895" id="LIST_7376_7380" title="Defined at ../../webdsl-types.stx line 35">LIST</a>(<a href="../../webdsl-types.stx#BUILTINTYPE_1001_1012" id="BUILTINTYPE_7381_7392" title="Defined at ../../webdsl-types.stx line 40">BUILTINTYPE</a>("String", _)), "concat", []) = <a href="#string_1822_1828" id="string_7424_7430" title="Defined at line 48">string</a>(<span id="s_7431_7432" title="Not referenced locally, nor via imports">s</span>).

  <a href="../../actions/functions.stx#typeOfCall_1322_1332" id="typeOfCall_7438_7448" title="Defined at ../../actions/functions.stx line 41">typeOfCall</a>(<a href="#s_7540_7541" id="s_7449_7450" title="Referenced at line 196, 197">s</a>, <a href="../../webdsl-types.stx#LIST_891_895" id="LIST_7452_7456" title="Defined at ../../webdsl-types.stx line 35">LIST</a>(<a href="../../webdsl-types.stx#BUILTINTYPE_1001_1012" id="BUILTINTYPE_7457_7468" title="Defined at ../../webdsl-types.stx line 40">BUILTINTYPE</a>("String", _)), "concat", [<a href="#arg_7566_7569" id="arg_7495_7498" title="Referenced at line 197, 198">arg</a>]) = <a href="#string_7523_7529" id="string_7503_7509" title="Referenced at line 196, 198">string</a> :- { <a href="#t_7548_7549" id="t_7515_7516" title="Referenced at line 197, 198, 198">t</a> }
    <a href="#string_7503_7509" id="string_7523_7529" title="Defined at line 195">string</a> == <a href="#string_1822_1828" id="string_7533_7539" title="Defined at line 48">string</a>(<a href="#s_7449_7450" id="s_7540_7541" title="Defined at line 195">s</a>),
    <a href="#t_7515_7516" id="t_7548_7549" title="Defined at line 195">t</a> == <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_7553_7562" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_7449_7450" id="s_7563_7564" title="Defined at line 195">s</a>, <a href="#arg_7495_7498" id="arg_7566_7569" title="Defined at line 195">arg</a>),
    <a href="../../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_7576_7590" title="Defined at ../../webdsl.stx line 408">typeCompatible</a>(<a href="#t_7515_7516" id="t_7591_7592" title="Defined at line 195">t</a>, <a href="#string_7503_7509" id="string_7594_7600" title="Defined at line 195">string</a>) | <span class="keyword">error</span> $[Concatenation separator type must be compatible with String, [<a href="#t_7515_7516" id="t_7674_7675" title="Defined at line 195">t</a>] given] @<a href="#arg_7495_7498" id="arg_7685_7688" title="Defined at line 195">arg</a>.

<span class="keyword">rules</span> <span class="layout">// built-in functions and properties for built-in generic type Set</span>

  <a href="../../webdsl-actions.stx#typeOfProperty_10792_10806" id="typeOfProperty_7767_7781" title="Defined at ../../webdsl-actions.stx line 260">typeOfProperty</a>(s, <a href="../../webdsl-types.stx#SET_915_918" id="SET_7785_7788" title="Defined at ../../webdsl-types.stx line 36">SET</a>(<span id="t_7789_7790" title="Not referenced locally, nor via imports">t</span>), "length") = <a href="#int_1638_1641" id="int_7805_7808" title="Defined at line 41">int</a>(<span id="s_7809_7810" title="Not referenced locally, nor via imports">s</span>).
  <a href="../../webdsl-actions.stx#typeOfProperty_10792_10806" id="typeOfProperty_7815_7829" title="Defined at ../../webdsl-actions.stx line 260">typeOfProperty</a>(<span id="s_7830_7831" title="Not referenced locally, nor via imports">s</span>, <a href="../../webdsl-types.stx#SET_915_918" id="SET_7833_7836" title="Defined at ../../webdsl-types.stx line 36">SET</a>(t), "first") = <span id="t_7852_7853" title="Not referenced locally, nor via imports">t</span>.
  <a href="../../webdsl-actions.stx#typeOfProperty_10792_10806" id="typeOfProperty_7857_7871" title="Defined at ../../webdsl-actions.stx line 260">typeOfProperty</a>(<span id="s_7872_7873" title="Not referenced locally, nor via imports">s</span>, <a href="../../webdsl-types.stx#SET_915_918" id="SET_7875_7878" title="Defined at ../../webdsl-types.stx line 36">SET</a>(t), "last") = <span id="t_7893_7894" title="Not referenced locally, nor via imports">t</span>.

  <a href="../../actions/functions.stx#typeOfCall_1322_1332" id="typeOfCall_7899_7909" title="Defined at ../../actions/functions.stx line 41">typeOfCall</a>(<a href="#s_7971_7972" id="s_7910_7911" title="Referenced at line 207, 207">s</a>, <a href="../../webdsl-types.stx#SET_915_918" id="SET_7913_7916" title="Defined at ../../webdsl-types.stx line 36">SET</a>(t), "get", [<a href="#arg_7974_7977" id="arg_7929_7932" title="Referenced at line 207">arg</a>]) = <span id="t_7937_7938" title="Not referenced locally, nor via imports">t</span> :-
    <a href="../../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_7946_7960" title="Defined at ../../webdsl.stx line 408">typeCompatible</a>(<a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_7961_7970" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_7910_7911" id="s_7971_7972" title="Defined at line 206">s</a>, <a href="#arg_7929_7932" id="arg_7974_7977" title="Defined at line 206">arg</a>), <a href="#int_1638_1641" id="int_7980_7983" title="Defined at line 41">int</a>(<a href="#s_7910_7911" id="s_7984_7985" title="Defined at line 206">s</a>)).

  <a href="../../actions/functions.stx#typeOfCall_1322_1332" id="typeOfCall_7992_8002" title="Defined at ../../actions/functions.stx line 41">typeOfCall</a>(<a href="#s_8069_8070" id="s_8003_8004" title="Referenced at line 210">s</a>, <a href="../../webdsl-types.stx#SET_915_918" id="SET_8006_8009" title="Defined at ../../webdsl-types.stx line 36">SET</a>(<a href="#t_8078_8079" id="t_8010_8011" title="Referenced at line 210">t</a>), "add", [<a href="#arg_8072_8075" id="arg_8022_8025" title="Referenced at line 210">arg</a>]) = <a href="../../webdsl-types.stx#VOID_1167_1171" id="VOID_8030_8034" title="Defined at ../../webdsl-types.stx line 46">VOID</a>() :-
    <a href="../../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_8044_8058" title="Defined at ../../webdsl.stx line 408">typeCompatible</a>(<a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_8059_8068" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_8003_8004" id="s_8069_8070" title="Defined at line 209">s</a>, <a href="#arg_8022_8025" id="arg_8072_8075" title="Defined at line 209">arg</a>), <a href="#t_8010_8011" id="t_8078_8079" title="Defined at line 209">t</a>).

  <a href="../../actions/functions.stx#typeOfCall_1322_1332" id="typeOfCall_8085_8095" title="Defined at ../../actions/functions.stx line 41">typeOfCall</a>(<a href="#s_8165_8166" id="s_8096_8097" title="Referenced at line 213">s</a>, <a href="../../webdsl-types.stx#SET_915_918" id="SET_8099_8102" title="Defined at ../../webdsl-types.stx line 36">SET</a>(<a href="#t_8174_8175" id="t_8103_8104" title="Referenced at line 213">t</a>), "remove", [<a href="#arg_8168_8171" id="arg_8118_8121" title="Referenced at line 213">arg</a>]) = <a href="../../webdsl-types.stx#VOID_1167_1171" id="VOID_8126_8130" title="Defined at ../../webdsl-types.stx line 46">VOID</a>() :-
    <a href="../../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_8140_8154" title="Defined at ../../webdsl.stx line 408">typeCompatible</a>(<a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_8155_8164" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_8096_8097" id="s_8165_8166" title="Defined at line 212">s</a>, <a href="#arg_8118_8121" id="arg_8168_8171" title="Defined at line 212">arg</a>), <a href="#t_8103_8104" id="t_8174_8175" title="Defined at line 212">t</a>).

  <a href="../../actions/functions.stx#typeOfCall_1322_1332" id="typeOfCall_8181_8191" title="Defined at ../../actions/functions.stx line 41">typeOfCall</a>(<span id="s_8192_8193" title="Not referenced locally, nor via imports">s</span>, <a href="../../webdsl-types.stx#SET_915_918" id="SET_8195_8198" title="Defined at ../../webdsl-types.stx line 36">SET</a>(_), "clear", []) = <a href="../../webdsl-types.stx#VOID_1167_1171" id="VOID_8218_8222" title="Defined at ../../webdsl-types.stx line 46">VOID</a>().

  <a href="../../actions/functions.stx#typeOfCall_1322_1332" id="typeOfCall_8229_8239" title="Defined at ../../actions/functions.stx line 41">typeOfCall</a>(<a href="#s_8314_8315" id="s_8240_8241" title="Referenced at line 218">s</a>, rt@<a href="../../webdsl-types.stx#SET_915_918" id="SET_8246_8249" title="Defined at ../../webdsl-types.stx line 36">SET</a>(<a href="#t_8367_8368" id="t_8250_8251" title="Referenced at line 220, 221">t</a>), "addAll", [<a href="#arg_8317_8320" id="arg_8265_8268" title="Referenced at line 218">arg</a>]) = <span id="rt_8273_8275" title="Not referenced locally, nor via imports">rt</span> :- {<a href="#argType_8293_8300" id="argType_8280_8287" title="Referenced at line 218, 220, 221">argType</a>}
    <a href="#argType_8280_8287" id="argType_8293_8300" title="Defined at line 217">argType</a> == <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_8304_8313" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_8240_8241" id="s_8314_8315" title="Defined at line 217">s</a>, <a href="#arg_8265_8268" id="arg_8317_8320" title="Defined at line 217">arg</a>),
    <a href="../../webdsl.stx#or_17705_17707" id="or_8327_8329" title="Defined at ../../webdsl.stx line 417">or</a>(
      <a href="../../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_8337_8352" title="Defined at ../../webdsl.stx line 411">typeCompatibleB</a>(<a href="#argType_8280_8287" id="argType_8353_8360" title="Defined at line 217">argType</a>, <a href="../../webdsl-types.stx#LIST_891_895" id="LIST_8362_8366" title="Defined at ../../webdsl-types.stx line 35">LIST</a>(<a href="#t_8250_8251" id="t_8367_8368" title="Defined at line 217">t</a>)),
      <a href="../../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_8378_8393" title="Defined at ../../webdsl.stx line 411">typeCompatibleB</a>(<a href="#argType_8280_8287" id="argType_8394_8401" title="Defined at line 217">argType</a>, <a href="../../webdsl-types.stx#SET_915_918" id="SET_8403_8406" title="Defined at ../../webdsl-types.stx line 36">SET</a>(<a href="#t_8250_8251" id="t_8407_8408" title="Defined at line 217">t</a>))
    ).

  <a href="../../actions/functions.stx#typeOfCall_1322_1332" id="typeOfCall_8421_8431" title="Defined at ../../actions/functions.stx line 41">typeOfCall</a>(<span id="s_8432_8433" title="Not referenced locally, nor via imports">s</span>, <a href="../../webdsl-types.stx#SET_915_918" id="SET_8435_8438" title="Defined at ../../webdsl-types.stx line 36">SET</a>(t), "list", []) = <a href="../../webdsl-types.stx#LIST_891_895" id="LIST_8457_8461" title="Defined at ../../webdsl-types.stx line 35">LIST</a>(<span id="t_8462_8463" title="Not referenced locally, nor via imports">t</span>).

  <a href="../../actions/functions.stx#typeOfCall_1322_1332" id="typeOfCall_8469_8479" title="Defined at ../../actions/functions.stx line 41">typeOfCall</a>(<span id="s_8480_8481" title="Not referenced locally, nor via imports">s</span>, <a href="../../webdsl-types.stx#SET_915_918" id="SET_8483_8486" title="Defined at ../../webdsl-types.stx line 36">SET</a>(t), "random", []) = <span id="t_8507_8508" title="Not referenced locally, nor via imports">t</span>.

<span class="keyword">rules</span> <span class="layout">// built-in properties for built-in generic type Ref</span>

  <a href="../../actions/functions.stx#typeOfCall_1322_1332" id="typeOfCall_8573_8583" title="Defined at ../../actions/functions.stx line 41">typeOfCall</a>(s, <a href="../../webdsl-types.stx#REF_939_942" id="REF_8587_8590" title="Defined at ../../webdsl-types.stx line 37">REF</a>(<span id="t_8591_8592" title="Not referenced locally, nor via imports">t</span>), "getEntity", []) = <a href="#entity_2883_2889" id="entity_8614_8620" title="Defined at line 81">entity</a>(<span id="s_8621_8622" title="Not referenced locally, nor via imports">s</span>).

  <a href="../../actions/functions.stx#typeOfCall_1322_1332" id="typeOfCall_8628_8638" title="Defined at ../../actions/functions.stx line 41">typeOfCall</a>(s, <a href="../../webdsl-types.stx#REF_939_942" id="REF_8642_8645" title="Defined at ../../webdsl-types.stx line 37">REF</a>(<span id="t_8646_8647" title="Not referenced locally, nor via imports">t</span>), "getValidationErrors", []) = <a href="../../webdsl-types.stx#LIST_891_895" id="LIST_8679_8683" title="Defined at ../../webdsl-types.stx line 35">LIST</a>(<a href="#string_1822_1828" id="string_8684_8690" title="Defined at line 48">string</a>(<span id="s_8691_8692" title="Not referenced locally, nor via imports">s</span>)).

  <a href="../../actions/functions.stx#typeOfCall_1322_1332" id="typeOfCall_8699_8709" title="Defined at ../../actions/functions.stx line 41">typeOfCall</a>(<span id="s_8710_8711" title="Not referenced locally, nor via imports">s</span>, <a href="../../webdsl-types.stx#REF_939_942" id="REF_8713_8716" title="Defined at ../../webdsl-types.stx line 37">REF</a>(<a href="../../webdsl-types.stx#LIST_891_895" id="LIST_8717_8721" title="Defined at ../../webdsl-types.stx line 35">LIST</a>(t)), "getAllowed", []) = <a href="../../webdsl-types.stx#LIST_891_895" id="LIST_8747_8751" title="Defined at ../../webdsl-types.stx line 35">LIST</a>(<span id="t_8752_8753" title="Not referenced locally, nor via imports">t</span>).
  <a href="../../actions/functions.stx#typeOfCall_1322_1332" id="typeOfCall_8758_8768" title="Defined at ../../actions/functions.stx line 41">typeOfCall</a>(<span id="s_8769_8770" title="Not referenced locally, nor via imports">s</span>, <a href="../../webdsl-types.stx#REF_939_942" id="REF_8772_8775" title="Defined at ../../webdsl-types.stx line 37">REF</a>(<a href="../../webdsl-types.stx#SET_915_918" id="SET_8776_8779" title="Defined at ../../webdsl-types.stx line 36">SET</a>(t)) , "getAllowed", []) = <a href="../../webdsl-types.stx#LIST_891_895" id="LIST_8806_8810" title="Defined at ../../webdsl-types.stx line 35">LIST</a>(<span id="t_8811_8812" title="Not referenced locally, nor via imports">t</span>).
  <a href="../../actions/functions.stx#typeOfCall_1322_1332" id="typeOfCall_8817_8827" title="Defined at ../../actions/functions.stx line 41">typeOfCall</a>(<span id="s_8828_8829" title="Not referenced locally, nor via imports">s</span>, <a href="../../webdsl-types.stx#REF_939_942" id="REF_8831_8834" title="Defined at ../../webdsl-types.stx line 37">REF</a>(t)      , "getAllowed", []) = <a href="../../webdsl-types.stx#LIST_891_895" id="LIST_8865_8869" title="Defined at ../../webdsl-types.stx line 35">LIST</a>(<span id="t_8870_8871" title="Not referenced locally, nor via imports">t</span>).

  <a href="../../actions/functions.stx#typeOfCall_1322_1332" id="typeOfCall_8877_8887" title="Defined at ../../actions/functions.stx line 41">typeOfCall</a>(s, <a href="../../webdsl-types.stx#REF_939_942" id="REF_8891_8894" title="Defined at ../../webdsl-types.stx line 37">REF</a>(<span id="t_8895_8896" title="Not referenced locally, nor via imports">t</span>), "getReflectionProperty", []) = <a href="../../webdsl-types.stx#definedTypeIfExists_8506_8525" id="definedTypeIfExists_8930_8949" title="Defined at ../../webdsl-types.stx line 232">definedTypeIfExists</a>(<span id="s_8950_8951" title="Not referenced locally, nor via imports">s</span>, "ReflectionProperty").

</code></pre></td></tr></tbody></table></div>