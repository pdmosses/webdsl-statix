---
title: webdsl-ui.stx
hide:
  - toc
---

# `webdsl-ui.stx`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/webdsl-ui.stx]

[pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/webdsl-ui.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/trans/static-semantics/webdsl-ui.stx "The source file on GitHub"

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
239
240
241
242
243
244
245
246
247
248
249
250
251
252
253
254
255
256
257
258
259
260
261
262
263
264
265
266
267
268
269
270
271
272
273
274
275
276
277
278
279
280
281
282
283
284
285
286
287
288
289
290
291
292
293
294
295
296
297
298
299
300
301
302
303
304
305
306
307
308
309
310
311
312
313
314
315
316
317
318
319
320
321
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-expand.stx#static-semantics/webdsl-ui_218_244" id="static-semantics/webdsl-ui_7_33" title="Referenced at ../webdsl-expand.stx line 11; ../webdsl-modules.stx line 5; ../webdsl.stx line 24; ../ui/actions.stx line 14; ../ui/ajax.stx line 8; ../ui/built-ins.stx line 9; ../ui/template-calls.stx line 15">static-semantics/webdsl-ui</a>

<span class="keyword">imports</span>
  <a href="../actions/functions.stx#static-semantics/actions/functions_7_41" id="static-semantics/actions/functions_45_79" title="Defined at ../actions/functions.stx line 1">static-semantics/actions/functions</a>

  <a href="../entities/annotations.stx#static-semantics/entities/annotations_7_44" id="static-semantics/entities/annotations_83_120" title="Defined at ../entities/annotations.stx line 1">static-semantics/entities/annotations</a>

  <a href="../types/built-ins.stx#static-semantics/types/built-ins_7_39" id="static-semantics/types/built-ins_124_156" title="Defined at ../types/built-ins.stx line 1">static-semantics/types/built-ins</a>

  <a href="../ui/actions.stx#static-semantics/ui/actions_7_34" id="static-semantics/ui/actions_160_187" title="Defined at ../ui/actions.stx line 1">static-semantics/ui/actions</a>
  <a href="../ui/ajax.stx#static-semantics/ui/ajax_7_31" id="static-semantics/ui/ajax_190_214" title="Defined at ../ui/ajax.stx line 1">static-semantics/ui/ajax</a>
  <a href="../ui/attributes.stx#static-semantics/ui/attributes_7_37" id="static-semantics/ui/attributes_217_247" title="Defined at ../ui/attributes.stx line 1">static-semantics/ui/attributes</a>
  <a href="../ui/built-ins.stx#static-semantics/ui/built-ins_7_36" id="static-semantics/ui/built-ins_250_279" title="Defined at ../ui/built-ins.stx line 1">static-semantics/ui/built-ins</a>
  <a href="../ui/template-calls.stx#static-semantics/ui/template-calls_7_41" id="static-semantics/ui/template-calls_282_316" title="Defined at ../ui/template-calls.stx line 1">static-semantics/ui/template-calls</a>

  <a href="../webdsl-actions.stx#static-semantics/webdsl-actions_7_38" id="static-semantics/webdsl-actions_320_351" title="Defined at ../webdsl-actions.stx line 1">static-semantics/webdsl-actions</a>
  <a href="../webdsl-types.stx#static-semantics/webdsl-types_7_36" id="static-semantics/webdsl-types_354_383" title="Defined at ../webdsl-types.stx line 1">static-semantics/webdsl-types</a>
  <a href="../webdsl.stx#static-semantics/webdsl_7_30" id="static-semantics/webdsl_386_409" title="Defined at ../webdsl.stx line 1">static-semantics/webdsl</a>

<span class="keyword">rules</span> <span class="layout">// unimplemented definitions</span>

  <a href="../webdsl.stx#defOk_15473_15478" id="defOk_449_454" title="Defined at ../webdsl.stx line 356">defOk</a>(_, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateDefinition_2725_2743" id="TemplateDefinition_458_476" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 101">TemplateDefinition</a>(<a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#Define_2783_2789" id="Define_477_483" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 102">Define</a>(_, <a href="#t_588_589" id="t_487_488" title="Referenced at line 22">t</a>, _, _, _))) :- <span class="keyword">false</span> | <span class="keyword">error</span> $[Could not desugar define to an email, template or page definition] @<a href="#t_487_488" id="t_588_589" title="Defined at line 22">t</a>.
  <a href="../webdsl.stx#defOk_15473_15478" id="defOk_593_598" title="Defined at ../webdsl.stx line 356">defOk</a>(_, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateDefinition_2725_2743" id="TemplateDefinition_602_620" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 101">TemplateDefinition</a>(<a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#LocalRedefine_3051_3064" id="LocalRedefine_621_634" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 106">LocalRedefine</a>(_, <a href="#t_722_723" id="t_638_639" title="Referenced at line 23">t</a>, _, _, _))) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[This definition is not yet implemented] @<a href="#t_638_639" id="t_722_723" title="Defined at line 23">t</a>.
  <a href="../webdsl.stx#defOk_15473_15478" id="defOk_727_732" title="Defined at ../webdsl.stx line 356">defOk</a>(_, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateDefinition_2725_2743" id="TemplateDefinition_736_754" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 101">TemplateDefinition</a>(<a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#DefineEmail_3594_3605" id="DefineEmail_755_766" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 112">DefineEmail</a>(_, <a href="#e_857_858" id="e_770_771" title="Referenced at line 24">e</a>, _, _, _))) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[Email definitions are not yet implemented] @<a href="#e_770_771" id="e_857_858" title="Defined at line 24">e</a>.

  <a href="../webdsl.stx#defOk_15473_15478" id="defOk_863_868" title="Defined at ../webdsl.stx line 356">defOk</a>(_, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateDefinition_2725_2743" id="TemplateDefinition_872_890" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 101">TemplateDefinition</a>(<a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#HTMLWrapper2TemplateDefinition_12272_12302" id="HTMLWrapper2TemplateDefinition_891_921" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 255">HTMLWrapper2TemplateDefinition</a>(_))) :- <span class="keyword">false</span> | <span class="keyword">error</span> $[Could not desugar to template definitions].
  <a href="../webdsl.stx#defOk_15473_15478" id="defOk_992_997" title="Defined at ../webdsl.stx line 356">defOk</a>(_, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateDefinition_2725_2743" id="TemplateDefinition_1001_1019" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 101">TemplateDefinition</a>(<a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#HTMLWrapperMultiple_12343_12362" id="HTMLWrapperMultiple_1020_1039" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 256">HTMLWrapperMultiple</a>(_))) :- <span class="keyword">false</span> | <span class="keyword">error</span> $[Could not desugar to template definitions].

<span class="keyword">rules</span> <span class="layout">// page definitions</span>

  <a href="../webdsl.stx#defOk_15473_15478" id="defOk_1138_1143" title="Defined at ../webdsl.stx line 356">defOk</a>(<a href="#s_1288_1289" id="s_1144_1145" title="Referenced at line 32, 34, 35, 39, 40">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateDefinition_2725_2743" id="TemplateDefinition_1147_1165" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 101">TemplateDefinition</a>(<a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#DefinePage_3344_3354" id="DefinePage_1166_1176" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 110">DefinePage</a>(<a href="#mods_1291_1295" id="mods_1177_1181" title="Referenced at line 32, 39, 40">mods</a>, <a href="#x_1619_1620" id="x_1183_1184" title="Referenced at line 39, 40">x</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#FormalArgs_1478_1488" id="FormalArgs_1186_1196" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 57">FormalArgs</a>(<a href="#fargs_1451_1456" id="fargs_1197_1202" title="Referenced at line 35, 36">fargs</a>), <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateArgs_2896_2908" id="TemplateArgs_1205_1217" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 103">TemplateArgs</a>(<a href="#targs_1302_1307" id="targs_1218_1223" title="Referenced at line 33, 33">targs</a>), <a href="#elements_1757_1765" id="elements_1226_1234" title="Referenced at line 41, 42">elements</a>))) :- {<a href="#fargTypes_1423_1432" id="fargTypes_1242_1251" title="Referenced at line 35, 36, 39">fargTypes</a> <a href="#s_page_1396_1402" id="s_page_1252_1258" title="Referenced at line 34, 34, 36, 37">s_page</a> <a href="#s_pha_1529_1534" id="s_pha_1259_1264" title="Referenced at line 37, 37, 38, 42">s_pha</a> <a href="#s_body_1563_1569" id="s_body_1265_1271" title="Referenced at line 38, 38, 42">s_body</a>}
    <a href="#pageModsOk_2025_2035" id="pageModsOk_1277_1287" title="Defined at line 48">pageModsOk</a>(<a href="#s_1144_1145" id="s_1288_1289" title="Defined at line 31">s</a>, <a href="#mods_1177_1181" id="mods_1291_1295" title="Defined at line 31">mods</a>),
    <a href="#targs_1218_1223" id="targs_1302_1307" title="Defined at line 31">targs</a> == [] | <span class="keyword">error</span> $[Template arguments are not allowed on page definitions] @<a href="#targs_1218_1223" id="targs_1381_1386" title="Defined at line 31">targs</a>,
    <span class="keyword">new</span> <a href="#s_page_1252_1258" id="s_page_1396_1402" title="Defined at line 31">s_page</a>, <a href="#s_page_1252_1258" id="s_page_1404_1410" title="Defined at line 31">s_page</a> -<a href="../webdsl.stx#F_1290_1291" id="F_1412_1413" title="Defined at ../webdsl.stx line 46">F</a>-&gt; <a href="#s_1144_1145" id="s_1416_1417" title="Defined at line 31">s</a>,
    <a href="#fargTypes_1242_1251" id="fargTypes_1423_1432" title="Defined at line 31">fargTypes</a> == <a href="../actions/functions.stx#typesOfArgs_6612_6623" id="typesOfArgs_1436_1447" title="Defined at ../actions/functions.stx line 138">typesOfArgs</a>(<a href="#s_1144_1145" id="s_1448_1449" title="Defined at line 31">s</a>, <a href="#fargs_1197_1202" id="fargs_1451_1456" title="Defined at line 31">fargs</a>),
    <a href="../webdsl.stx#declareParameters_14585_14602" id="declareParameters_1463_1480" title="Defined at ../webdsl.stx line 332">declareParameters</a>(<a href="#s_page_1252_1258" id="s_page_1481_1487" title="Defined at line 31">s_page</a>, <a href="../actions/functions.stx#zipArgTypes_6882_6893" id="zipArgTypes_1489_1500" title="Defined at ../actions/functions.stx line 145">zipArgTypes</a>(<a href="#fargs_1197_1202" id="fargs_1501_1506" title="Defined at line 31">fargs</a>, <a href="#fargTypes_1242_1251" id="fargTypes_1508_1517" title="Defined at line 31">fargTypes</a>)),
    <span class="keyword">new</span> <a href="#s_pha_1259_1264" id="s_pha_1529_1534" title="Defined at line 31">s_pha</a>, <a href="#s_pha_1259_1264" id="s_pha_1536_1541" title="Defined at line 31">s_pha</a> -<a href="../webdsl.stx#P_1226_1227" id="P_1543_1544" title="Defined at ../webdsl.stx line 45">P</a>-&gt; <a href="#s_page_1252_1258" id="s_page_1547_1553" title="Defined at line 31">s_page</a>,
    <span class="keyword">new</span> <a href="#s_body_1265_1271" id="s_body_1563_1569" title="Defined at line 31">s_body</a>, <a href="#s_body_1265_1271" id="s_body_1571_1577" title="Defined at line 31">s_body</a> -<a href="../webdsl.stx#P_1226_1227" id="P_1579_1580" title="Defined at ../webdsl.stx line 45">P</a>-&gt; <a href="#s_pha_1259_1264" id="s_pha_1583_1588" title="Defined at line 31">s_pha</a>,
    <a href="#optionallyDeclarePage_1838_1859" id="optionallyDeclarePage_1594_1615" title="Defined at line 44">optionallyDeclarePage</a>(<a href="#s_1144_1145" id="s_1616_1617" title="Defined at line 31">s</a>, <a href="#x_1183_1184" id="x_1619_1620" title="Defined at line 31">x</a>, <a href="#fargTypes_1242_1251" id="fargTypes_1622_1631" title="Defined at line 31">fargTypes</a>, <a href="../webdsl.stx#notB_18027_18031" id="notB_1633_1637" title="Defined at ../webdsl.stx line 432">notB</a>(<a href="#isOverrideB_4954_4965" id="isOverrideB_1638_1649" title="Defined at line 103">isOverrideB</a>(<a href="#mods_1177_1181" id="mods_1650_1654" title="Defined at line 31">mods</a>))),
    <a href="#overriddenElementExists_5123_5146" id="overriddenElementExists_1663_1686" title="Defined at line 108">overriddenElementExists</a>(<a href="#s_1144_1145" id="s_1687_1688" title="Defined at line 31">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#Page_3712_3716" id="Page_1690_1694" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 113">Page</a>(), <a href="#x_1183_1184" id="x_1698_1699" title="Defined at line 31">x</a>, <a href="../webdsl.stx#FALSE_844_849" id="FALSE_1701_1706" title="Defined at ../webdsl.stx line 35">FALSE</a>(), <a href="#isOverrideB_4954_4965" id="isOverrideB_1710_1721" title="Defined at line 103">isOverrideB</a>(<a href="#mods_1177_1181" id="mods_1722_1726" title="Defined at line 31">mods</a>)),
    <a href="#templateElementOrderOk_12296_12318" id="templateElementOrderOk_1734_1756" title="Defined at line 267">templateElementOrderOk</a>(<a href="#elements_1226_1234" id="elements_1757_1765" title="Defined at line 31">elements</a>, <a href="../webdsl.stx#FALSE_844_849" id="FALSE_1767_1772" title="Defined at ../webdsl.stx line 35">FALSE</a>(), <a href="../webdsl.stx#FALSE_844_849" id="FALSE_1776_1781" title="Defined at ../webdsl.stx line 35">FALSE</a>()),
    <a href="#templateElementsOk_7412_7430" id="templateElementsOk_1790_1808" title="Defined at line 142">templateElementsOk</a>(<a href="#s_body_1265_1271" id="s_body_1809_1815" title="Defined at line 31">s_body</a>, <a href="#s_pha_1259_1264" id="s_pha_1817_1822" title="Defined at line 31">s_pha</a>, <a href="#elements_1226_1234" id="elements_1824_1832" title="Defined at line 31">elements</a>).

  <a href="#optionallyDeclarePage_1594_1615" id="optionallyDeclarePage_1838_1859" title="Referenced at line 39, 45, 46">optionallyDeclarePage</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> * <span class="keyword">list</span>(<a href="../webdsl.stx#TYPE_669_673" id="TYPE_1884_1888" title="Defined at ../webdsl.stx line 29">TYPE</a>) * <a href="../webdsl.stx#BOOL_697_701" id="BOOL_1892_1896" title="Defined at ../webdsl.stx line 30">BOOL</a>
  <a href="#optionallyDeclarePage_1838_1859" id="optionallyDeclarePage_1899_1920" title="Defined at line 44">optionallyDeclarePage</a>(_, _, _, <a href="../webdsl.stx#FALSE_844_849" id="FALSE_1930_1935" title="Defined at ../webdsl.stx line 35">FALSE</a>()).
  <a href="#optionallyDeclarePage_1838_1859" id="optionallyDeclarePage_1942_1963" title="Defined at line 44">optionallyDeclarePage</a>(<a href="#s_2004_2005" id="s_1964_1965" title="Referenced at line 46">s</a>, <a href="#x_2007_2008" id="x_1967_1968" title="Referenced at line 46">x</a>, <a href="#fargTypes_2010_2019" id="fargTypes_1970_1979" title="Referenced at line 46">fargTypes</a>, <a href="../webdsl.stx#TRUE_828_832" id="TRUE_1981_1985" title="Defined at ../webdsl.stx line 34">TRUE</a>()) :- <a href="../webdsl.stx#declarePage_5982_5993" id="declarePage_1992_2003" title="Defined at ../webdsl.stx line 163">declarePage</a>(<a href="#s_1964_1965" id="s_2004_2005" title="Defined at line 46">s</a>, <a href="#x_1967_1968" id="x_2007_2008" title="Defined at line 46">x</a>, <a href="#fargTypes_1970_1979" id="fargTypes_2010_2019" title="Defined at line 46">fargTypes</a>).

  <a href="#pageModsOk_1277_1287" id="pageModsOk_2025_2035" title="Referenced at line 32">pageModsOk</a> <span class="keyword">maps</span> <a href="#pageModOk_2065_2074" id="pageModOk_2041_2050" title="Defined at line 49">pageModOk</a>(*, <span class="keyword">list</span>(*))
  <a href="#pageModOk_2041_2050" id="pageModOk_2065_2074" title="Referenced at line 48, 50, 51, 52, 53, 54">pageModOk</a> : <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#Modifier_243_251" id="Modifier_2085_2093" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 14">Modifier</a>
  <a href="#pageModOk_2065_2074" id="pageModOk_2096_2105" title="Defined at line 49">pageModOk</a>(_, _) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[This modifier is not yet implemented].
  <a href="#pageModOk_2065_2074" id="pageModOk_2182_2191" title="Defined at line 49">pageModOk</a>(_, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#AjaxTemplate_3753_3765" id="AjaxTemplate_2195_2207" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 115">AjaxTemplate</a>()) :- <span class="keyword">false</span> | <span class="keyword">error</span> $[A page cannot be an ajax template].
  <a href="#pageModOk_2065_2074" id="pageModOk_2268_2277" title="Defined at line 49">pageModOk</a>(_, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#WebService_4124_4134" id="WebService_2281_2291" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 128">WebService</a>()) :- <span class="keyword">false</span> | <span class="keyword">error</span> $[To define a webservice, use "webservice myWebservice(...) { ... }"].
  <a href="#pageModOk_2065_2074" id="pageModOk_2385_2394" title="Defined at line 49">pageModOk</a>(_, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateModOverride_4000_4019" id="TemplateModOverride_2398_2417" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 124">TemplateModOverride</a>()).
  <a href="#pageModOk_2065_2074" id="pageModOk_2424_2433" title="Defined at line 49">pageModOk</a>(_, <a href="../../../src-gen/statix/signatures/WebDSL-AccessControl-sig.stx#IgnoreAccessControl_2163_2182" id="IgnoreAccessControl_2437_2456" title="Defined at ../../../src-gen/statix/signatures/WebDSL-AccessControl-sig.stx line 57">IgnoreAccessControl</a>()).

<span class="keyword">rules</span> <span class="layout">// template definitions</span>

  <a href="../webdsl.stx#defOk_15473_15478" id="defOk_2495_2500" title="Defined at ../webdsl.stx line 356">defOk</a>(<a href="#s_2578_2579" id="s_2501_2502" title="Referenced at line 58">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateDefinition_2725_2743" id="TemplateDefinition_2504_2522" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 101">TemplateDefinition</a>(<a href="#td_2581_2583" id="td_2523_2525" title="Referenced at line 58">td</a>@<a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#DefineTemplate_3465_3479" id="DefineTemplate_2526_2540" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 111">DefineTemplate</a>(_, _, _, _, _))) :- <a href="#defineTemplateOk_2666_2682" id="defineTemplateOk_2561_2577" title="Defined at line 61">defineTemplateOk</a>(<a href="#s_2501_2502" id="s_2578_2579" title="Defined at line 58">s</a>, <a href="#td_2523_2525" id="td_2581_2583" title="Defined at line 58">td</a>).

  <span class="layout">// last BOOL defines if the template is top-level (TRUE) or nested (FALSE)</span>
  <a href="#defineTemplateOk_2561_2577" id="defineTemplateOk_2666_2682" title="Referenced at line 58, 62">defineTemplateOk</a> : <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateDefinition_220_238" id="TemplateDefinition_2693_2711" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 13">TemplateDefinition</a>
  <a href="#defineTemplateOk_2666_2682" id="defineTemplateOk_2714_2730" title="Defined at line 61">defineTemplateOk</a>(<a href="#s_2877_2878" id="s_2731_2732" title="Referenced at line 63, 64, 65, 66, 71, 72">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#DefineTemplate_3465_3479" id="DefineTemplate_2734_2748" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 111">DefineTemplate</a>(<a href="#mods_2880_2884" id="mods_2749_2753" title="Referenced at line 63, 71, 71, 72, 72">mods</a>, <a href="#t_3224_3225" id="t_2755_2756" title="Referenced at line 71, 72">t</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#FormalArgs_1478_1488" id="FormalArgs_2758_2768" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 57">FormalArgs</a>(<a href="#fargs_2958_2963" id="fargs_2769_2774" title="Referenced at line 65, 67">fargs</a>), <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateArgs_2896_2908" id="TemplateArgs_2777_2789" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 103">TemplateArgs</a>(<a href="#targs_3006_3011" id="targs_2790_2795" title="Referenced at line 66">targs</a>), <a href="#elements_3412_3420" id="elements_2798_2806" title="Referenced at line 73, 74">elements</a>)) :- {<a href="#fargTypes_2930_2939" id="fargTypes_2813_2822" title="Referenced at line 65, 67, 71">fargTypes</a> <a href="#targTypes_2970_2979" id="targTypes_2823_2832" title="Referenced at line 66, 68, 71">targTypes</a> <a href="#s_template_2895_2905" id="s_template_2833_2843" title="Referenced at line 64, 64, 67, 68, 69">s_template</a> <a href="#s_pha_3126_3131" id="s_pha_2844_2849" title="Referenced at line 69, 69, 70, 74">s_pha</a> <a href="#s_body_3164_3170" id="s_body_2850_2856" title="Referenced at line 70, 70, 74">s_body</a>}
    <a href="#templateModsOk_3493_3507" id="templateModsOk_2862_2876" title="Defined at line 76">templateModsOk</a>(<a href="#s_2731_2732" id="s_2877_2878" title="Defined at line 62">s</a>, <a href="#mods_2749_2753" id="mods_2880_2884" title="Defined at line 62">mods</a>),
    <span class="keyword">new</span> <a href="#s_template_2833_2843" id="s_template_2895_2905" title="Defined at line 62">s_template</a>, <a href="#s_template_2833_2843" id="s_template_2907_2917" title="Defined at line 62">s_template</a> -<a href="../webdsl.stx#F_1290_1291" id="F_2919_2920" title="Defined at ../webdsl.stx line 46">F</a>-&gt; <a href="#s_2731_2732" id="s_2923_2924" title="Defined at line 62">s</a>,
    <a href="#fargTypes_2813_2822" id="fargTypes_2930_2939" title="Defined at line 62">fargTypes</a> == <a href="../actions/functions.stx#typesOfArgs_6612_6623" id="typesOfArgs_2943_2954" title="Defined at ../actions/functions.stx line 138">typesOfArgs</a>(<a href="#s_2731_2732" id="s_2955_2956" title="Defined at line 62">s</a>, <a href="#fargs_2769_2774" id="fargs_2958_2963" title="Defined at line 62">fargs</a>),
    <a href="#targTypes_2823_2832" id="targTypes_2970_2979" title="Defined at line 62">targTypes</a> == <a href="#typesOfTemplateArgs_14627_14646" id="typesOfTemplateArgs_2983_3002" title="Defined at line 319">typesOfTemplateArgs</a>(<a href="#s_2731_2732" id="s_3003_3004" title="Defined at line 62">s</a>, <a href="#targs_2790_2795" id="targs_3006_3011" title="Defined at line 62">targs</a>),
    <a href="../webdsl.stx#declareParameters_14585_14602" id="declareParameters_3018_3035" title="Defined at ../webdsl.stx line 332">declareParameters</a>(<a href="#s_template_2833_2843" id="s_template_3036_3046" title="Defined at line 62">s_template</a>, <a href="../actions/functions.stx#zipArgTypes_6882_6893" id="zipArgTypes_3048_3059" title="Defined at ../actions/functions.stx line 145">zipArgTypes</a>(<a href="#fargs_2769_2774" id="fargs_3060_3065" title="Defined at line 62">fargs</a>, <a href="#fargTypes_2813_2822" id="fargTypes_3067_3076" title="Defined at line 62">fargTypes</a>)),
    <a href="#declTArgs_6382_6391" id="declTArgs_3084_3093" title="Defined at line 125">declTArgs</a>(<a href="#s_template_2833_2843" id="s_template_3094_3104" title="Defined at line 62">s_template</a>, <a href="#targTypes_2823_2832" id="targTypes_3106_3115" title="Defined at line 62">targTypes</a>),
    <span class="keyword">new</span> <a href="#s_pha_2844_2849" id="s_pha_3126_3131" title="Defined at line 62">s_pha</a>, <a href="#s_pha_2844_2849" id="s_pha_3133_3138" title="Defined at line 62">s_pha</a> -<a href="../webdsl.stx#P_1226_1227" id="P_3140_3141" title="Defined at ../webdsl.stx line 45">P</a>-&gt; <a href="#s_template_2833_2843" id="s_template_3144_3154" title="Defined at line 62">s_template</a>,
    <span class="keyword">new</span> <a href="#s_body_2850_2856" id="s_body_3164_3170" title="Defined at line 62">s_body</a>, <a href="#s_body_2850_2856" id="s_body_3172_3178" title="Defined at line 62">s_body</a> -<a href="../webdsl.stx#P_1226_1227" id="P_3180_3181" title="Defined at ../webdsl.stx line 45">P</a>-&gt; <a href="#s_pha_2844_2849" id="s_pha_3184_3189" title="Defined at line 62">s_pha</a>,
    <a href="#optionallyDeclareTemplate_5674_5699" id="optionallyDeclareTemplate_3195_3220" title="Defined at line 114">optionallyDeclareTemplate</a>(<a href="#s_2731_2732" id="s_3221_3222" title="Defined at line 62">s</a>, <a href="#t_2755_2756" id="t_3224_3225" title="Defined at line 62">t</a>, <a href="#fargTypes_2813_2822" id="fargTypes_3227_3236" title="Defined at line 62">fargTypes</a>, <a href="#targTypes_2823_2832" id="targTypes_3238_3247" title="Defined at line 62">targTypes</a>, <a href="#isAjaxTemplate_4777_4791" id="isAjaxTemplate_3249_3263" title="Defined at line 98">isAjaxTemplate</a>(<a href="#mods_2749_2753" id="mods_3264_3268" title="Defined at line 62">mods</a>), <a href="../webdsl.stx#notB_18027_18031" id="notB_3271_3275" title="Defined at ../webdsl.stx line 432">notB</a>(<a href="#isOverrideB_4954_4965" id="isOverrideB_3276_3287" title="Defined at line 103">isOverrideB</a>(<a href="#mods_2749_2753" id="mods_3288_3292" title="Defined at line 62">mods</a>))),
    <a href="#overriddenElementExists_5123_5146" id="overriddenElementExists_3301_3324" title="Defined at line 108">overriddenElementExists</a>(<a href="#s_2731_2732" id="s_3325_3326" title="Defined at line 62">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#Template_3781_3789" id="Template_3328_3336" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 116">Template</a>(), <a href="#t_2755_2756" id="t_3340_3341" title="Defined at line 62">t</a>, <a href="#isAjaxTemplate_4777_4791" id="isAjaxTemplate_3343_3357" title="Defined at line 98">isAjaxTemplate</a>(<a href="#mods_2749_2753" id="mods_3358_3362" title="Defined at line 62">mods</a>), <a href="#isOverrideB_4954_4965" id="isOverrideB_3365_3376" title="Defined at line 103">isOverrideB</a>(<a href="#mods_2749_2753" id="mods_3377_3381" title="Defined at line 62">mods</a>)),
    <a href="#templateElementOrderOk_12296_12318" id="templateElementOrderOk_3389_3411" title="Defined at line 267">templateElementOrderOk</a>(<a href="#elements_2798_2806" id="elements_3412_3420" title="Defined at line 62">elements</a>, <a href="../webdsl.stx#FALSE_844_849" id="FALSE_3422_3427" title="Defined at ../webdsl.stx line 35">FALSE</a>(), <a href="../webdsl.stx#FALSE_844_849" id="FALSE_3431_3436" title="Defined at ../webdsl.stx line 35">FALSE</a>()),
    <a href="#templateElementsOk_7412_7430" id="templateElementsOk_3445_3463" title="Defined at line 142">templateElementsOk</a>(<a href="#s_body_2850_2856" id="s_body_3464_3470" title="Defined at line 62">s_body</a>, <a href="#s_pha_2844_2849" id="s_pha_3472_3477" title="Defined at line 62">s_pha</a>, <a href="#elements_2798_2806" id="elements_3479_3487" title="Defined at line 62">elements</a>).

  <a href="#templateModsOk_2862_2876" id="templateModsOk_3493_3507" title="Referenced at line 63">templateModsOk</a> <span class="keyword">maps</span> <a href="#templateModOk_3541_3554" id="templateModOk_3513_3526" title="Defined at line 77">templateModOk</a>(*, <span class="keyword">list</span>(*))
  <a href="#templateModOk_3513_3526" id="templateModOk_3541_3554" title="Referenced at line 76, 78, 79, 80, 81, 82">templateModOk</a> : <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#Modifier_243_251" id="Modifier_3565_3573" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 14">Modifier</a>
  <a href="#templateModOk_3541_3554" id="templateModOk_3576_3589" title="Defined at line 77">templateModOk</a>(_, _) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[This modifier is not yet implemented].
  <a href="#templateModOk_3541_3554" id="templateModOk_3666_3679" title="Defined at line 77">templateModOk</a>(_, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#WebService_4124_4134" id="WebService_3683_3693" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 128">WebService</a>()) :- <span class="keyword">false</span> | <span class="keyword">error</span> $[To define a webservice, use "webservice myWebservice(...) { ... }"].
  <a href="#templateModOk_3541_3554" id="templateModOk_3787_3800" title="Defined at line 77">templateModOk</a>(_, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#AjaxTemplate_3753_3765" id="AjaxTemplate_3804_3816" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 115">AjaxTemplate</a>()).
  <a href="#templateModOk_3541_3554" id="templateModOk_3823_3836" title="Defined at line 77">templateModOk</a>(_, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateModOverride_4000_4019" id="TemplateModOverride_3840_3859" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 124">TemplateModOverride</a>()).
  <a href="#templateModOk_3541_3554" id="templateModOk_3866_3879" title="Defined at line 77">templateModOk</a>(_, <a href="../../../src-gen/statix/signatures/WebDSL-AccessControl-sig.stx#IgnoreAccessControl_2163_2182" id="IgnoreAccessControl_3883_3902" title="Defined at ../../../src-gen/statix/signatures/WebDSL-AccessControl-sig.stx line 57">IgnoreAccessControl</a>()).

  <a href="#nestedTemplateOk_3958_3974" id="nestedTemplateOk_3910_3926" title="Referenced at line 85, 183">nestedTemplateOk</a> : <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateDefinition_220_238" id="TemplateDefinition_3937_3955" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 13">TemplateDefinition</a>
  <a href="#nestedTemplateOk_3910_3926" id="nestedTemplateOk_3958_3974" title="Defined at line 84">nestedTemplateOk</a>(<a href="#s_4140_4141" id="s_3975_3976" title="Referenced at line 86, 87, 88, 91">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#DefineTemplate_3465_3479" id="DefineTemplate_3978_3992" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 111">DefineTemplate</a>(_, <a href="#t_4470_4471" id="t_3996_3997" title="Referenced at line 91, 92, 92">t</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#FormalArgs_1478_1488" id="FormalArgs_3999_4009" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 57">FormalArgs</a>(<a href="#fargs_4279_4284" id="fargs_4010_4015" title="Referenced at line 87, 89">fargs</a>), <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateArgs_2896_2908" id="TemplateArgs_4018_4030" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 103">TemplateArgs</a>(<a href="#targs_4327_4332" id="targs_4031_4036" title="Referenced at line 88">targs</a>), <a href="#elements_4696_4704" id="elements_4039_4047" title="Referenced at line 95, 96">elements</a>)) :- {<a href="#fargTypes_4251_4260" id="fargTypes_4054_4063" title="Referenced at line 87, 89, 92, 92">fargTypes</a> <a href="#targTypes_4291_4300" id="targTypes_4064_4073" title="Referenced at line 88, 90">targTypes</a> <a href="#sigs_4443_4447" id="sigs_4074_4078" title="Referenced at line 91, 92">sigs</a> <a href="#s_template_4112_4122" id="s_template_4079_4089" title="Referenced at line 86, 86, 89, 90, 93">s_template</a> <a href="#s_pha_4604_4609" id="s_pha_4090_4095" title="Referenced at line 93, 93, 94, 96">s_pha</a> <a href="#s_body_4642_4648" id="s_body_4096_4102" title="Referenced at line 94, 94, 96">s_body</a>}
    <span class="keyword">new</span> <a href="#s_template_4079_4089" id="s_template_4112_4122" title="Defined at line 85">s_template</a>, <a href="#s_template_4079_4089" id="s_template_4124_4134" title="Defined at line 85">s_template</a> -<a href="../webdsl.stx#P_1226_1227" id="P_4136_4137" title="Defined at ../webdsl.stx line 45">P</a>-&gt; <a href="#s_3975_3976" id="s_4140_4141" title="Defined at line 85">s</a>, <span class="layout">// use P edge label instead of F to get correct duplicate variable errors and resolve queries correctly</span>
    <a href="#fargTypes_4054_4063" id="fargTypes_4251_4260" title="Defined at line 85">fargTypes</a> == <a href="../actions/functions.stx#typesOfArgs_6612_6623" id="typesOfArgs_4264_4275" title="Defined at ../actions/functions.stx line 138">typesOfArgs</a>(<a href="#s_3975_3976" id="s_4276_4277" title="Defined at line 85">s</a>, <a href="#fargs_4010_4015" id="fargs_4279_4284" title="Defined at line 85">fargs</a>),
    <a href="#targTypes_4064_4073" id="targTypes_4291_4300" title="Defined at line 85">targTypes</a> == <a href="#typesOfTemplateArgs_14627_14646" id="typesOfTemplateArgs_4304_4323" title="Defined at line 319">typesOfTemplateArgs</a>(<a href="#s_3975_3976" id="s_4324_4325" title="Defined at line 85">s</a>, <a href="#targs_4031_4036" id="targs_4327_4332" title="Defined at line 85">targs</a>),
    <a href="../webdsl.stx#declareParameters_14585_14602" id="declareParameters_4339_4356" title="Defined at ../webdsl.stx line 332">declareParameters</a>(<a href="#s_template_4079_4089" id="s_template_4357_4367" title="Defined at line 85">s_template</a>, <a href="../actions/functions.stx#zipArgTypes_6882_6893" id="zipArgTypes_4369_4380" title="Defined at ../actions/functions.stx line 145">zipArgTypes</a>(<a href="#fargs_4010_4015" id="fargs_4381_4386" title="Defined at line 85">fargs</a>, <a href="#fargTypes_4054_4063" id="fargTypes_4388_4397" title="Defined at line 85">fargTypes</a>)),
    <a href="#declTArgs_6382_6391" id="declTArgs_4405_4414" title="Defined at line 125">declTArgs</a>(<a href="#s_template_4079_4089" id="s_template_4415_4425" title="Defined at line 85">s_template</a>, <a href="#targTypes_4064_4073" id="targTypes_4427_4436" title="Defined at line 85">targTypes</a>),
    <a href="#sigs_4074_4078" id="sigs_4443_4447" title="Defined at line 85">sigs</a> == <a href="../webdsl.stx#resolveTemplate_6355_6370" id="resolveTemplate_4451_4466" title="Defined at ../webdsl.stx line 169">resolveTemplate</a>(<a href="#s_3975_3976" id="s_4467_4468" title="Defined at line 85">s</a>, <a href="#t_3996_3997" id="t_4470_4471" title="Defined at line 85">t</a>),
    <a href="../actions/functions.stx#matchingSigs_10961_10973" id="matchingSigs_4478_4490" title="Defined at ../actions/functions.stx line 208">matchingSigs</a>(<a href="#fargTypes_4054_4063" id="fargTypes_4491_4500" title="Defined at line 85">fargTypes</a>, <a href="../actions/functions.stx#dropPaths_14818_14827" id="dropPaths_4502_4511" title="Defined at ../actions/functions.stx line 272">dropPaths</a>(<a href="#sigs_4074_4078" id="sigs_4512_4516" title="Defined at line 85">sigs</a>)) == [_] | <span class="keyword">error</span> $[No template [<a href="#t_3996_3997" id="t_4549_4550" title="Defined at line 85">t</a>] with argument types [<a href="#fargTypes_4054_4063" id="fargTypes_4573_4582" title="Defined at line 85">fargTypes</a>] exists] @<a href="#t_3996_3997" id="t_4593_4594" title="Defined at line 85">t</a>,
    <span class="keyword">new</span> <a href="#s_pha_4090_4095" id="s_pha_4604_4609" title="Defined at line 85">s_pha</a>, <a href="#s_pha_4090_4095" id="s_pha_4611_4616" title="Defined at line 85">s_pha</a> -<a href="../webdsl.stx#P_1226_1227" id="P_4618_4619" title="Defined at ../webdsl.stx line 45">P</a>-&gt; <a href="#s_template_4079_4089" id="s_template_4622_4632" title="Defined at line 85">s_template</a>,
    <span class="keyword">new</span> <a href="#s_body_4096_4102" id="s_body_4642_4648" title="Defined at line 85">s_body</a>, <a href="#s_body_4096_4102" id="s_body_4650_4656" title="Defined at line 85">s_body</a> -<a href="../webdsl.stx#P_1226_1227" id="P_4658_4659" title="Defined at ../webdsl.stx line 45">P</a>-&gt; <a href="#s_pha_4090_4095" id="s_pha_4662_4667" title="Defined at line 85">s_pha</a>,
    <a href="#templateElementOrderOk_12296_12318" id="templateElementOrderOk_4673_4695" title="Defined at line 267">templateElementOrderOk</a>(<a href="#elements_4039_4047" id="elements_4696_4704" title="Defined at line 85">elements</a>, <a href="../webdsl.stx#FALSE_844_849" id="FALSE_4706_4711" title="Defined at ../webdsl.stx line 35">FALSE</a>(), <a href="../webdsl.stx#FALSE_844_849" id="FALSE_4715_4720" title="Defined at ../webdsl.stx line 35">FALSE</a>()),
    <a href="#templateElementsOk_7412_7430" id="templateElementsOk_4729_4747" title="Defined at line 142">templateElementsOk</a>(<a href="#s_body_4096_4102" id="s_body_4748_4754" title="Defined at line 85">s_body</a>, <a href="#s_pha_4090_4095" id="s_pha_4756_4761" title="Defined at line 85">s_pha</a>, <a href="#elements_4039_4047" id="elements_4763_4771" title="Defined at line 85">elements</a>).

  <a href="#isAjaxTemplate_3249_3263" id="isAjaxTemplate_4777_4791" title="Referenced at line 71, 72, 99, 100, 100, 101">isAjaxTemplate</a> : <span class="keyword">list</span>(<a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#Modifier_243_251" id="Modifier_4799_4807" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 14">Modifier</a>) -&gt; <a href="../webdsl.stx#BOOL_697_701" id="BOOL_4812_4816" title="Defined at ../webdsl.stx line 30">BOOL</a>
  <a href="#isAjaxTemplate_4777_4791" id="isAjaxTemplate_4819_4833" title="Defined at line 98">isAjaxTemplate</a>([]) = <a href="../webdsl.stx#FALSE_844_849" id="FALSE_4840_4845" title="Defined at ../webdsl.stx line 35">FALSE</a>().
  <a href="#isAjaxTemplate_4777_4791" id="isAjaxTemplate_4851_4865" title="Defined at line 98">isAjaxTemplate</a>([_ | mods]) = <a href="#isAjaxTemplate_4777_4791" id="isAjaxTemplate_4880_4894" title="Defined at line 98">isAjaxTemplate</a>(<span id="mods_4895_4899" title="Not referenced locally, nor via imports">mods</span>).
  <a href="#isAjaxTemplate_4777_4791" id="isAjaxTemplate_4904_4918" title="Defined at line 98">isAjaxTemplate</a>([<a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#AjaxTemplate_3753_3765" id="AjaxTemplate_4920_4932" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 115">AjaxTemplate</a>() | _]) = <a href="../webdsl.stx#TRUE_828_832" id="TRUE_4943_4947" title="Defined at ../webdsl.stx line 34">TRUE</a>().

  <a href="#isOverrideB_1638_1649" id="isOverrideB_4954_4965" title="Referenced at line 39, 40, 71, 72, 104, 105, 105, 106">isOverrideB</a> : <span class="keyword">list</span>(<a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#Modifier_243_251" id="Modifier_4973_4981" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 14">Modifier</a>) -&gt; <a href="../webdsl.stx#BOOL_697_701" id="BOOL_4986_4990" title="Defined at ../webdsl.stx line 30">BOOL</a>
  <a href="#isOverrideB_4954_4965" id="isOverrideB_4993_5004" title="Defined at line 103">isOverrideB</a>([]) = <a href="../webdsl.stx#FALSE_844_849" id="FALSE_5011_5016" title="Defined at ../webdsl.stx line 35">FALSE</a>().
  <a href="#isOverrideB_4954_4965" id="isOverrideB_5022_5033" title="Defined at line 103">isOverrideB</a>([_ | <span id="mods_5039_5043" title="Not referenced locally, nor via imports">mods</span>]) = <a href="#isOverrideB_4954_4965" id="isOverrideB_5048_5059" title="Defined at line 103">isOverrideB</a>(mods).
  <a href="#isOverrideB_4954_4965" id="isOverrideB_5069_5080" title="Defined at line 103">isOverrideB</a>([<a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateModOverride_4000_4019" id="TemplateModOverride_5082_5101" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 124">TemplateModOverride</a>() | _]) = <a href="../webdsl.stx#TRUE_828_832" id="TRUE_5112_5116" title="Defined at ../webdsl.stx line 34">TRUE</a>().

  <a href="#overriddenElementExists_1663_1686" id="overriddenElementExists_5123_5146" title="Referenced at line 40, 72, 109, 110, 111, 112">overriddenElementExists</a> : <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#Modifier_243_251" id="Modifier_5157_5165" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 14">Modifier</a> * <span class="keyword">string</span> * <a href="../webdsl.stx#BOOL_697_701" id="BOOL_5177_5181" title="Defined at ../webdsl.stx line 30">BOOL</a> * <a href="../webdsl.stx#BOOL_697_701" id="BOOL_5184_5188" title="Defined at ../webdsl.stx line 30">BOOL</a>
  <a href="#overriddenElementExists_5123_5146" id="overriddenElementExists_5191_5214" title="Defined at line 108">overriddenElementExists</a>(_, _, _, _, <a href="../webdsl.stx#FALSE_844_849" id="FALSE_5227_5232" title="Defined at ../webdsl.stx line 35">FALSE</a>()).
  <a href="#overriddenElementExists_5123_5146" id="overriddenElementExists_5239_5262" title="Defined at line 108">overriddenElementExists</a>(<a href="#s_5303_5304" id="s_5263_5264" title="Referenced at line 110">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#Page_3712_3716" id="Page_5266_5270" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 113">Page</a>(), <a href="#p_5306_5307" id="p_5274_5275" title="Referenced at line 110, 110, 110">p</a>, _, <a href="../webdsl.stx#TRUE_828_832" id="TRUE_5280_5284" title="Defined at ../webdsl.stx line 34">TRUE</a>()) :- <a href="../webdsl.stx#resolvePage_7943_7954" id="resolvePage_5291_5302" title="Defined at ../webdsl.stx line 196">resolvePage</a>(<a href="#s_5263_5264" id="s_5303_5304" title="Defined at line 110">s</a>, <a href="#p_5274_5275" id="p_5306_5307" title="Defined at line 110">p</a>) == [(_, (_, _))] | <span class="keyword">error</span> $[Page [<a href="#p_5274_5275" id="p_5342_5343" title="Defined at line 110">p</a>] does not exist] @<a href="#p_5274_5275" id="p_5362_5363" title="Defined at line 110">p</a>.
  <a href="#overriddenElementExists_5123_5146" id="overriddenElementExists_5367_5390" title="Defined at line 108">overriddenElementExists</a>(<a href="#s_5451_5452" id="s_5391_5392" title="Referenced at line 111">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#Template_3781_3789" id="Template_5394_5402" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 116">Template</a>(), <a href="#t_5454_5455" id="t_5406_5407" title="Referenced at line 111, 111, 111">t</a>, <a href="../webdsl.stx#FALSE_844_849" id="FALSE_5409_5414" title="Defined at ../webdsl.stx line 35">FALSE</a>(), <a href="../webdsl.stx#TRUE_828_832" id="TRUE_5418_5422" title="Defined at ../webdsl.stx line 34">TRUE</a>()) :- <a href="../webdsl.stx#resolveTemplateNoAjax_7073_7094" id="resolveTemplateNoAjax_5429_5450" title="Defined at ../webdsl.stx line 183">resolveTemplateNoAjax</a>(<a href="#s_5391_5392" id="s_5451_5452" title="Defined at line 111">s</a>, <a href="#t_5406_5407" id="t_5454_5455" title="Defined at line 111">t</a>) == [(_, (_, _))] | <span class="keyword">error</span> $[Template [<a href="#t_5406_5407" id="t_5494_5495" title="Defined at line 111">t</a>] does not exist] @<a href="#t_5406_5407" id="t_5514_5515" title="Defined at line 111">t</a>.
  <a href="#overriddenElementExists_5123_5146" id="overriddenElementExists_5519_5542" title="Defined at line 108">overriddenElementExists</a>(<a href="#s_5600_5601" id="s_5543_5544" title="Referenced at line 112">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#Template_3781_3789" id="Template_5546_5554" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 116">Template</a>(), <a href="#t_5603_5604" id="t_5558_5559" title="Referenced at line 112, 112, 112">t</a>, <a href="../webdsl.stx#TRUE_828_832" id="TRUE_5561_5565" title="Defined at ../webdsl.stx line 34">TRUE</a>(), <a href="../webdsl.stx#TRUE_828_832" id="TRUE_5569_5573" title="Defined at ../webdsl.stx line 34">TRUE</a>()) :- <a href="../webdsl.stx#resolveAjaxTemplate_6492_6511" id="resolveAjaxTemplate_5580_5599" title="Defined at ../webdsl.stx line 172">resolveAjaxTemplate</a>(<a href="#s_5543_5544" id="s_5600_5601" title="Defined at line 112">s</a>, <a href="#t_5558_5559" id="t_5603_5604" title="Defined at line 112">t</a>) == [(_, (_, _))] | <span class="keyword">error</span> $[Ajax template [<a href="#t_5558_5559" id="t_5648_5649" title="Defined at line 112">t</a>] does not exist] @<a href="#t_5558_5559" id="t_5668_5669" title="Defined at line 112">t</a>.

  <a href="#optionallyDeclareTemplate_3195_3220" id="optionallyDeclareTemplate_5674_5699" title="Referenced at line 71, 115, 116">optionallyDeclareTemplate</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> * <span class="keyword">list</span>(<a href="../webdsl.stx#TYPE_669_673" id="TYPE_5724_5728" title="Defined at ../webdsl.stx line 29">TYPE</a>) * <span class="keyword">list</span>((<span class="keyword">string</span> * <span class="keyword">list</span>(<a href="../webdsl.stx#TYPE_669_673" id="TYPE_5752_5756" title="Defined at ../webdsl.stx line 29">TYPE</a>))) * <a href="../webdsl.stx#BOOL_697_701" id="BOOL_5762_5766" title="Defined at ../webdsl.stx line 30">BOOL</a> * <a href="../webdsl.stx#BOOL_697_701" id="BOOL_5769_5773" title="Defined at ../webdsl.stx line 30">BOOL</a>
  <a href="#optionallyDeclareTemplate_5674_5699" id="optionallyDeclareTemplate_5776_5801" title="Defined at line 114">optionallyDeclareTemplate</a>(_, _, _, _, _, <a href="../webdsl.stx#FALSE_844_849" id="FALSE_5817_5822" title="Defined at ../webdsl.stx line 35">FALSE</a>()).
  <a href="#optionallyDeclareTemplate_5674_5699" id="optionallyDeclareTemplate_5829_5854" title="Defined at line 114">optionallyDeclareTemplate</a>(<a href="#s_5913_5914" id="s_5855_5856" title="Referenced at line 116">s</a>, <a href="#t_5916_5917" id="t_5858_5859" title="Referenced at line 116">t</a>, <a href="#fargTypes_5919_5928" id="fargTypes_5861_5870" title="Referenced at line 116">fargTypes</a>, <a href="#targTypes_5930_5939" id="targTypes_5872_5881" title="Referenced at line 116">targTypes</a>, <a href="#ajax_5941_5945" id="ajax_5883_5887" title="Referenced at line 116">ajax</a>, <a href="../webdsl.stx#TRUE_828_832" id="TRUE_5889_5893" title="Defined at ../webdsl.stx line 34">TRUE</a>()) :- <a href="#declTemplate_5951_5963" id="declTemplate_5900_5912" title="Defined at line 118">declTemplate</a>(<a href="#s_5855_5856" id="s_5913_5914" title="Defined at line 116">s</a>, <a href="#t_5858_5859" id="t_5916_5917" title="Defined at line 116">t</a>, <a href="#fargTypes_5861_5870" id="fargTypes_5919_5928" title="Defined at line 116">fargTypes</a>, <a href="#targTypes_5872_5881" id="targTypes_5930_5939" title="Defined at line 116">targTypes</a>, <a href="#ajax_5883_5887" id="ajax_5941_5945" title="Defined at line 116">ajax</a>).

  <a href="#declTemplate_5900_5912" id="declTemplate_5951_5963" title="Referenced at line 116, 119, 128">declTemplate</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> * <span class="keyword">list</span>(<a href="../webdsl.stx#TYPE_669_673" id="TYPE_5988_5992" title="Defined at ../webdsl.stx line 29">TYPE</a>) * <span class="keyword">list</span>((<span class="keyword">string</span> * <span class="keyword">list</span>(<a href="../webdsl.stx#TYPE_669_673" id="TYPE_6016_6020" title="Defined at ../webdsl.stx line 29">TYPE</a>))) * <a href="../webdsl.stx#BOOL_697_701" id="BOOL_6026_6030" title="Defined at ../webdsl.stx line 30">BOOL</a>
  <a href="#declTemplate_5951_5963" id="declTemplate_6033_6045" title="Defined at line 118">declTemplate</a>(<a href="#s_6121_6122" id="s_6046_6047" title="Referenced at line 120, 121">s</a>, <a href="#t_6124_6125" id="t_6049_6050" title="Referenced at line 120, 121, 123, 123">t</a>, <a href="#fargTypes_6127_6136" id="fargTypes_6052_6061" title="Referenced at line 120, 122, 123">fargTypes</a>, <span id="targTypes_6063_6072" title="Not referenced locally, nor via imports">targTypes</span>, <a href="#ajax_6138_6142" id="ajax_6074_6078" title="Referenced at line 120">ajax</a>) :- {<a href="#result_6174_6180" id="result_6084_6090" title="Referenced at line 121, 122">result</a>}
    <a href="../webdsl.stx#declareTemplate_internal_5536_5560" id="declareTemplate_internal_6096_6120" title="Defined at ../webdsl.stx line 157">declareTemplate_internal</a>(<a href="#s_6046_6047" id="s_6121_6122" title="Defined at line 119">s</a>, <a href="#t_6049_6050" id="t_6124_6125" title="Defined at line 119">t</a>, <a href="#fargTypes_6052_6061" id="fargTypes_6127_6136" title="Defined at line 119">fargTypes</a>, <a href="#ajax_6074_6078" id="ajax_6138_6142" title="Defined at line 119">ajax</a>),
    <a href="../webdsl.stx#resolveTemplate_6355_6370" id="resolveTemplate_6149_6164" title="Defined at ../webdsl.stx line 169">resolveTemplate</a>(<a href="#s_6046_6047" id="s_6165_6166" title="Defined at line 119">s</a>, <a href="#t_6049_6050" id="t_6168_6169" title="Defined at line 119">t</a>) == <a href="#result_6084_6090" id="result_6174_6180" title="Defined at line 119">result</a>,
    <a href="#amountOfTemplateDeclsWithArgs_6645_6674" id="amountOfTemplateDeclsWithArgs_6186_6215" title="Defined at line 131">amountOfTemplateDeclsWithArgs</a>(<a href="#result_6084_6090" id="result_6216_6222" title="Defined at line 119">result</a>, <a href="#fargTypes_6052_6061" id="fargTypes_6224_6233" title="Defined at line 119">fargTypes</a>, 0) == 1
      | <span class="keyword">error</span> $[Multiple page/template definitions with name [<a href="#t_6049_6050" id="t_6305_6306" title="Defined at line 119">t</a>] and argument types [<a href="#fargTypes_6052_6061" id="fargTypes_6328_6337" title="Defined at line 119">fargTypes</a>]] @<a href="#t_6049_6050" id="t_6341_6342" title="Defined at line 119">t</a>. <span class="layout">// correct error message for tests</span>

  <a href="#declTArgs_3084_3093" id="declTArgs_6382_6391" title="Referenced at line 68, 90">declTArgs</a> <span class="keyword">maps</span> <a href="#declTArg_6420_6428" id="declTArg_6397_6405" title="Defined at line 126">declTArg</a>(*, <span class="keyword">list</span>(*))
  <a href="#declTArg_6397_6405" id="declTArg_6420_6428" title="Referenced at line 125, 127">declTArg</a> : <span class="keyword">scope</span> * (<span class="keyword">string</span> * <span class="keyword">list</span>(<a href="../webdsl.stx#TYPE_669_673" id="TYPE_6454_6458" title="Defined at ../webdsl.stx line 29">TYPE</a>))
  <a href="#declTArg_6420_6428" id="declTArg_6463_6471" title="Defined at line 126">declTArg</a>(<a href="#s_6510_6511" id="s_6472_6473" title="Referenced at line 128">s</a>, (<a href="#t_6513_6514" id="t_6476_6477" title="Referenced at line 128">t</a>, <a href="#argTypes_6516_6524" id="argTypes_6479_6487" title="Referenced at line 128">argTypes</a>)) :-
    <a href="#declTemplate_5951_5963" id="declTemplate_6497_6509" title="Defined at line 118">declTemplate</a>(<a href="#s_6472_6473" id="s_6510_6511" title="Defined at line 127">s</a>, <a href="#t_6476_6477" id="t_6513_6514" title="Defined at line 127">t</a>, <a href="#argTypes_6479_6487" id="argTypes_6516_6524" title="Defined at line 127">argTypes</a>, [], <a href="../webdsl.stx#FALSE_844_849" id="FALSE_6530_6535" title="Defined at ../webdsl.stx line 35">FALSE</a>()).

  <span class="layout">// helper function that results in the amount of template definitions with the given argument types</span>
  <a href="#amountOfTemplateDeclsWithArgs_6186_6215" id="amountOfTemplateDeclsWithArgs_6645_6674" title="Referenced at line 122, 132, 133, 133, 134, 134">amountOfTemplateDeclsWithArgs</a> : <span class="keyword">list</span>((<span class="keyword">path</span> *(<span class="keyword">string</span> * <a href="../webdsl.stx#TYPE_669_673" id="TYPE_6699_6703" title="Defined at ../webdsl.stx line 29">TYPE</a>))) * <span class="keyword">list</span>(<a href="../webdsl.stx#TYPE_669_673" id="TYPE_6714_6718" title="Defined at ../webdsl.stx line 29">TYPE</a>) * <span class="keyword">int</span> -&gt; <span class="keyword">int</span>
  <a href="#amountOfTemplateDeclsWithArgs_6645_6674" id="amountOfTemplateDeclsWithArgs_6735_6764" title="Defined at line 131">amountOfTemplateDeclsWithArgs</a>([], _, <span id="n_6772_6773" title="Not referenced locally, nor via imports">n</span>) = n.
  <a href="#amountOfTemplateDeclsWithArgs_6645_6674" id="amountOfTemplateDeclsWithArgs_6782_6811" title="Defined at line 131">amountOfTemplateDeclsWithArgs</a>([ (_, (_, <a href="../webdsl-types.stx#TEMPLATE_725_733" id="TEMPLATE_6822_6830" title="Defined at ../webdsl-types.stx line 29">TEMPLATE</a>(_, args, _))) | tail], args, <span id="n_6860_6861" title="Not referenced locally, nor via imports">n</span>) = <a href="#amountOfTemplateDeclsWithArgs_6645_6674" id="amountOfTemplateDeclsWithArgs_6865_6894" title="Defined at line 131">amountOfTemplateDeclsWithArgs</a>(<span id="tail_6895_6899" title="Not referenced locally, nor via imports">tail</span>, <span id="args_6901_6905" title="Not referenced locally, nor via imports">args</span>, <a href="#i_6913_6914" id="i_6907_6908" title="Referenced at line 133">i</a>) :- <a href="#i_6907_6908" id="i_6913_6914" title="Defined at line 133">i</a> #= n + 1.
  <a href="#amountOfTemplateDeclsWithArgs_6645_6674" id="amountOfTemplateDeclsWithArgs_6927_6956" title="Defined at line 131">amountOfTemplateDeclsWithArgs</a>([ _ | <span id="tail_6963_6967" title="Not referenced locally, nor via imports">tail</span>], <span id="args_6970_6974" title="Not referenced locally, nor via imports">args</span>, <span id="n_6976_6977" title="Not referenced locally, nor via imports">n</span>) = <a href="#amountOfTemplateDeclsWithArgs_6645_6674" id="amountOfTemplateDeclsWithArgs_6981_7010" title="Defined at line 131">amountOfTemplateDeclsWithArgs</a>(tail, args, n).

<span class="keyword">rules</span> <span class="layout">// template elements</span>

  <a href="#templateElementOk_7170_7187" id="templateElementOk_7058_7075" title="Referenced at line 139, 146, 149, 152, 154, 157, 160, 165, 169, 178, 183, 185, 190, 195, 200, 211, 224, 233, 241; ../webdsl-expand.stx line 24, 29; ../ui/actions.stx line 19, 20, 21, 62, 82, 85, 88, 91, 94; ../ui/ajax.stx line 13, 17, 21, 25, 29, 33, 37, 41; ../ui/template-calls.stx line 20, 75">templateElementOk</a> : <span class="keyword">scope</span> * <span class="keyword">scope</span> * <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateElement_256_271" id="TemplateElement_7102_7117" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 15">TemplateElement</a> <span class="layout">// TYPE argument is the return type in a function</span>
  <a href="#templateElementOk_7058_7075" id="templateElementOk_7170_7187" title="Defined at line 138">templateElementOk</a>(_, _, _, <a href="#e_7276_7277" id="e_7197_7198" title="Referenced at line 139">e</a>) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[This template element is not yet implemented] @<a href="#e_7197_7198" id="e_7276_7277" title="Defined at line 139">e</a>.

  <span class="layout">// the second scope (s_pha) is for declaring+resolving of placeholders and actions, which do not have to be declared before use</span>
  <a href="#templateElementsOk_1790_1808" id="templateElementsOk_7412_7430" title="Referenced at line 42, 74, 96, 143, 144, 147, 163, 180, 181, 188, 193, 198, 203, 254, 259; ../ui/actions.stx line 194; ../ui/ajax.stx line 15, 19, 23, 27; ../ui/template-calls.stx line 33, 78">templateElementsOk</a> : <span class="keyword">scope</span> * <span class="keyword">scope</span> * <span class="keyword">list</span>(<a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateElement_256_271" id="TemplateElement_7454_7469" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 15">TemplateElement</a>)
  <a href="#templateElementsOk_7412_7430" id="templateElementsOk_7473_7491" title="Defined at line 142">templateElementsOk</a>(_, _, []).
  <a href="#templateElementsOk_7412_7430" id="templateElementsOk_7505_7523" title="Defined at line 142">templateElementsOk</a>(<a href="#s_7592_7593" id="s_7524_7525" title="Referenced at line 145, 146">s</a>, <a href="#s_pha_7628_7633" id="s_pha_7527_7532" title="Referenced at line 146, 147">s_pha</a>, [<a href="#element_7635_7642" id="element_7535_7542" title="Referenced at line 146">element</a> | <a href="#tail_7683_7687" id="tail_7545_7549" title="Referenced at line 147">tail</a>]) :- {<a href="#s_next_7572_7578" id="s_next_7556_7562" title="Referenced at line 145, 145, 146, 147">s_next</a>}
    <span class="keyword">new</span> <a href="#s_next_7556_7562" id="s_next_7572_7578" title="Defined at line 144">s_next</a>, <a href="#s_next_7556_7562" id="s_next_7580_7586" title="Defined at line 144">s_next</a> -<a href="../webdsl.stx#P_1226_1227" id="P_7588_7589" title="Defined at ../webdsl.stx line 45">P</a>-&gt; <a href="#s_7524_7525" id="s_7592_7593" title="Defined at line 144">s</a>,
    <a href="#templateElementOk_7058_7075" id="templateElementOk_7599_7616" title="Defined at line 138">templateElementOk</a>(<a href="#s_7524_7525" id="s_7617_7618" title="Defined at line 144">s</a>, <a href="#s_next_7556_7562" id="s_next_7620_7626" title="Defined at line 144">s_next</a>, <a href="#s_pha_7527_7532" id="s_pha_7628_7633" title="Defined at line 144">s_pha</a>, <a href="#element_7535_7542" id="element_7635_7642" title="Defined at line 144">element</a>),
    <a href="#templateElementsOk_7412_7430" id="templateElementsOk_7649_7667" title="Defined at line 142">templateElementsOk</a>(<a href="#s_next_7556_7562" id="s_next_7668_7674" title="Defined at line 144">s_next</a>, <a href="#s_pha_7527_7532" id="s_pha_7676_7681" title="Defined at line 144">s_pha</a>, <a href="#tail_7545_7549" id="tail_7683_7687" title="Defined at line 144">tail</a>).

  <a href="#templateElementOk_7058_7075" id="templateElementOk_7693_7710" title="Defined at line 138">templateElementOk</a>(<a href="#s_7754_7755" id="s_7711_7712" title="Referenced at line 150">s</a>, _, _, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#Text_10824_10828" id="Text_7720_7724" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 229">Text</a>(<a href="#parts_7757_7762" id="parts_7725_7730" title="Referenced at line 150">parts</a>)) :-
    <a href="../webdsl-types.stx#stringPartsOk_2102_2115" id="stringPartsOk_7740_7753" title="Defined at ../webdsl-types.stx line 88">stringPartsOk</a>(<a href="#s_7711_7712" id="s_7754_7755" title="Defined at line 149">s</a>, <a href="#parts_7725_7730" id="parts_7757_7762" title="Defined at line 149">parts</a>).

  <a href="#templateElementOk_7058_7075" id="templateElementOk_7768_7785" title="Defined at line 138">templateElementOk</a>(<span id="s_7786_7787" title="Not referenced locally, nor via imports">s</span>, _, _,  <a href="../../../src-gen/statix/signatures/WebDSL-XML-sig.stx#XMLComment_737_747" id="XMLComment_7796_7806" title="Defined at ../../../src-gen/statix/signatures/WebDSL-XML-sig.stx line 31">XMLComment</a>(_)).

  <a href="#templateElementOk_7058_7075" id="templateElementOk_7815_7832" title="Defined at line 138">templateElementOk</a>(<a href="#s_7894_7895" id="s_7833_7834" title="Referenced at line 155">s</a>, _, _, <a href="../../../src-gen/statix/signatures/WebDSL-XML-sig.stx#XMLEmptyElement_481_496" id="XMLEmptyElement_7842_7857" title="Defined at ../../../src-gen/statix/signatures/WebDSL-XML-sig.stx line 28">XMLEmptyElement</a>(_, <a href="#attributes_7897_7907" id="attributes_7861_7871" title="Referenced at line 155">attributes</a>)) :-
    <a href="../ui/attributes.stx#attributesOk_879_891" id="attributesOk_7881_7893" title="Defined at ../ui/attributes.stx line 29">attributesOk</a>(<a href="#s_7833_7834" id="s_7894_7895" title="Defined at line 154">s</a>, <a href="#attributes_7861_7871" id="attributes_7897_7907" title="Defined at line 154">attributes</a>).

  <a href="#templateElementOk_7058_7075" id="templateElementOk_7913_7930" title="Defined at line 138">templateElementOk</a>(<a href="#s_8000_8001" id="s_7931_7932" title="Referenced at line 158">s</a>, _, _, <a href="../../../src-gen/statix/signatures/WebDSL-XML-sig.stx#XMLEmptyElementUnclosed_653_676" id="XMLEmptyElementUnclosed_7940_7963" title="Defined at ../../../src-gen/statix/signatures/WebDSL-XML-sig.stx line 30">XMLEmptyElementUnclosed</a>(_, <a href="#attributes_8003_8013" id="attributes_7967_7977" title="Referenced at line 158">attributes</a>)) :-
    <a href="../ui/attributes.stx#attributesOk_879_891" id="attributesOk_7987_7999" title="Defined at ../ui/attributes.stx line 29">attributesOk</a>(<a href="#s_7931_7932" id="s_8000_8001" title="Defined at line 157">s</a>, <a href="#attributes_7967_7977" id="attributes_8003_8013" title="Defined at line 157">attributes</a>).

  <a href="#templateElementOk_7058_7075" id="templateElementOk_8019_8036" title="Defined at line 138">templateElementOk</a>(<a href="#s_8212_8213" id="s_8037_8038" title="Referenced at line 162, 163">s</a>, _, <a href="#s_pha_8254_8259" id="s_pha_8043_8048" title="Referenced at line 163">s_pha</a>, <a href="../../../src-gen/statix/signatures/WebDSL-XML-sig.stx#XMLElement_551_561" id="XMLElement_8050_8060" title="Defined at ../../../src-gen/statix/signatures/WebDSL-XML-sig.stx line 29">XMLElement</a>(<a href="#openTagName_8118_8129" id="openTagName_8061_8072" title="Referenced at line 161">openTagName</a>, <a href="#attributes_8215_8225" id="attributes_8074_8084" title="Referenced at line 162">attributes</a>, <a href="#elements_8261_8269" id="elements_8086_8094" title="Referenced at line 163">elements</a>, <a href="#closeTagName_8133_8145" id="closeTagName_8096_8108" title="Referenced at line 161">closeTagName</a>)) :-
    <a href="#openTagName_8061_8072" id="openTagName_8118_8129" title="Defined at line 160">openTagName</a> == <a href="#closeTagName_8096_8108" id="closeTagName_8133_8145" title="Defined at line 160">closeTagName</a> | <span class="keyword">error</span> $[Opening and closing tag do not match],
    <a href="../ui/attributes.stx#attributesOk_879_891" id="attributesOk_8199_8211" title="Defined at ../ui/attributes.stx line 29">attributesOk</a>(<a href="#s_8037_8038" id="s_8212_8213" title="Defined at line 160">s</a>, <a href="#attributes_8074_8084" id="attributes_8215_8225" title="Defined at line 160">attributes</a>),
    <a href="#templateElementsOk_7412_7430" id="templateElementsOk_8232_8250" title="Defined at line 142">templateElementsOk</a>(<a href="#s_8037_8038" id="s_8251_8252" title="Defined at line 160">s</a>, <a href="#s_pha_8043_8048" id="s_pha_8254_8259" title="Defined at line 160">s_pha</a>, <a href="#elements_8086_8094" id="elements_8261_8269" title="Defined at line 160">elements</a>).

  <a href="#templateElementOk_7058_7075" id="templateElementOk_8275_8292" title="Defined at line 138">templateElementOk</a>(<a href="#s_8352_8353" id="s_8293_8294" title="Referenced at line 166, 167">s</a>, _, _, <a href="../../../src-gen/statix/signatures/WebDSL-JavaScript-sig.stx#JSElement_364_373" id="JSElement_8302_8311" title="Defined at ../../../src-gen/statix/signatures/WebDSL-JavaScript-sig.stx line 24">JSElement</a>(<a href="#attributes_8355_8365" id="attributes_8312_8322" title="Referenced at line 166">attributes</a>, <a href="#parts_8391_8396" id="parts_8324_8329" title="Referenced at line 167">parts</a>)) :-
    <a href="../ui/attributes.stx#attributesOk_879_891" id="attributesOk_8339_8351" title="Defined at ../ui/attributes.stx line 29">attributesOk</a>(<a href="#s_8293_8294" id="s_8352_8353" title="Defined at line 165">s</a>, <a href="#attributes_8312_8322" id="attributes_8355_8365" title="Defined at line 165">attributes</a>),
    <a href="#jsStringPartsOk_8532_8547" id="jsStringPartsOk_8372_8387" title="Defined at line 173">jsStringPartsOk</a>(<a href="#s_8293_8294" id="s_8388_8389" title="Defined at line 165">s</a>, <a href="#parts_8324_8329" id="parts_8391_8396" title="Defined at line 165">parts</a>).

  <a href="#templateElementOk_7058_7075" id="templateElementOk_8402_8419" title="Defined at line 138">templateElementOk</a>(<a href="#s_8482_8483" id="s_8420_8421" title="Referenced at line 170, 171">s</a>, _, _, <a href="../../../src-gen/statix/signatures/WebDSL-JavaScript-sig.stx#StyleElement_430_442" id="StyleElement_8429_8441" title="Defined at ../../../src-gen/statix/signatures/WebDSL-JavaScript-sig.stx line 25">StyleElement</a>(<a href="#attributes_8485_8495" id="attributes_8442_8452" title="Referenced at line 170">attributes</a>, <a href="#parts_8521_8526" id="parts_8454_8459" title="Referenced at line 171">parts</a>)) :-
    <a href="../ui/attributes.stx#attributesOk_879_891" id="attributesOk_8469_8481" title="Defined at ../ui/attributes.stx line 29">attributesOk</a>(<a href="#s_8420_8421" id="s_8482_8483" title="Defined at line 169">s</a>, <a href="#attributes_8442_8452" id="attributes_8485_8495" title="Defined at line 169">attributes</a>),
    <a href="#jsStringPartsOk_8532_8547" id="jsStringPartsOk_8502_8517" title="Defined at line 173">jsStringPartsOk</a>(<a href="#s_8420_8421" id="s_8518_8519" title="Defined at line 169">s</a>, <a href="#parts_8454_8459" id="parts_8521_8526" title="Defined at line 169">parts</a>).

  <a href="#jsStringPartsOk_8372_8387" id="jsStringPartsOk_8532_8547" title="Referenced at line 167, 171">jsStringPartsOk</a> <span class="keyword">maps</span> <a href="#jsStringPartOk_8582_8596" id="jsStringPartOk_8553_8567" title="Defined at line 174">jsStringPartOk</a>(*, <span class="keyword">list</span>(*))
  <a href="#jsStringPartOk_8553_8567" id="jsStringPartOk_8582_8596" title="Referenced at line 173, 175, 176">jsStringPartOk</a> : <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/WebDSL-JavaScript-sig.stx#JSPart_194_200" id="JSPart_8607_8613" title="Defined at ../../../src-gen/statix/signatures/WebDSL-JavaScript-sig.stx line 12">JSPart</a>
  <a href="#jsStringPartOk_8582_8596" id="jsStringPartOk_8616_8630" title="Defined at line 174">jsStringPartOk</a>(<span id="s_8631_8632" title="Not referenced locally, nor via imports">s</span>, <a href="../../../src-gen/statix/signatures/WebDSL-JavaScript-sig.stx#JSString_525_533" id="JSString_8634_8642" title="Defined at ../../../src-gen/statix/signatures/WebDSL-JavaScript-sig.stx line 27">JSString</a>(_)).
  <a href="#jsStringPartOk_8582_8596" id="jsStringPartOk_8650_8664" title="Defined at line 174">jsStringPartOk</a>(<a href="#s_8689_8690" id="s_8665_8666" title="Referenced at line 176">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-JavaScript-sig.stx#JSExp_499_504" id="JSExp_8668_8673" title="Defined at ../../../src-gen/statix/signatures/WebDSL-JavaScript-sig.stx line 26">JSExp</a>(<a href="#exp_8692_8695" id="exp_8674_8677" title="Referenced at line 176">exp</a>)) :- <a href="../webdsl-types.stx#typed_10475_10480" id="typed_8683_8688" title="Defined at ../webdsl-types.stx line 283">typed</a>(<a href="#s_8665_8666" id="s_8689_8690" title="Defined at line 176">s</a>, <a href="#exp_8674_8677" id="exp_8692_8695" title="Defined at line 176">exp</a>).

  <a href="#templateElementOk_7058_7075" id="templateElementOk_8701_8718" title="Defined at line 138">templateElementOk</a>(<a href="#s_8783_8784" id="s_8719_8720" title="Referenced at line 179, 179, 180, 181">s</a>, _, <a href="#s_pha_8873_8878" id="s_pha_8725_8730" title="Referenced at line 180, 181">s_pha</a>, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#IfTempl_5965_5972" id="IfTempl_8732_8739" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 163">IfTempl</a>(<a href="#c_8786_8787" id="c_8740_8741" title="Referenced at line 179, 179">c</a>, <a href="#then_8880_8884" id="then_8743_8747" title="Referenced at line 180">then</a>, <a href="#else_8920_8924" id="else_8749_8753" title="Referenced at line 181">else</a>)) :-
    <a href="../webdsl-types.stx#equalType_10645_10654" id="equalType_8763_8772" title="Defined at ../webdsl-types.stx line 289">equalType</a>(<a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_8773_8782" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_8719_8720" id="s_8783_8784" title="Defined at line 178">s</a>, <a href="#c_8740_8741" id="c_8786_8787" title="Defined at line 178">c</a>), <a href="../types/built-ins.stx#bool_2637_2641" id="bool_8790_8794" title="Defined at ../types/built-ins.stx line 72">bool</a>(<a href="#s_8719_8720" id="s_8795_8796" title="Defined at line 178">s</a>)) | <span class="keyword">error</span> $[Condition should be of type bool] @<a href="#c_8740_8741" id="c_8844_8845" title="Defined at line 178">c</a>,
    <a href="#templateElementsOk_7412_7430" id="templateElementsOk_8851_8869" title="Defined at line 142">templateElementsOk</a>(<a href="#s_8719_8720" id="s_8870_8871" title="Defined at line 178">s</a>, <a href="#s_pha_8725_8730" id="s_pha_8873_8878" title="Defined at line 178">s_pha</a>, <a href="#then_8743_8747" id="then_8880_8884" title="Defined at line 178">then</a>),
    <a href="#templateElementsOk_7412_7430" id="templateElementsOk_8891_8909" title="Defined at line 142">templateElementsOk</a>(<a href="#s_8719_8720" id="s_8910_8911" title="Defined at line 178">s</a>, <a href="#s_pha_8725_8730" id="s_pha_8913_8918" title="Defined at line 178">s_pha</a>, <a href="#else_8749_8753" id="else_8920_8924" title="Defined at line 178">else</a>).

  <a href="#templateElementOk_7058_7075" id="templateElementOk_8930_8947" title="Defined at line 138">templateElementOk</a>(<a href="#s_9018_9019" id="s_8948_8949" title="Referenced at line 183">s</a>, _,  _, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateDefinition2TemplateElement_4720_4754" id="TemplateDefinition2TemplateElement_8958_8992" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 140">TemplateDefinition2TemplateElement</a>(<a href="#td_9021_9023" id="td_8993_8995" title="Referenced at line 183">td</a>)) :- <a href="#nestedTemplateOk_3910_3926" id="nestedTemplateOk_9001_9017" title="Defined at line 84">nestedTemplateOk</a>(<a href="#s_8948_8949" id="s_9018_9019" title="Defined at line 183">s</a>, <a href="#td_8993_8995" id="td_9021_9023" title="Defined at line 183">td</a>).

  <a href="#templateElementOk_7058_7075" id="templateElementOk_9029_9046" title="Defined at line 138">templateElementOk</a>(<a href="#s_9117_9118" id="s_9047_9048" title="Referenced at line 186, 187, 188">s</a>, _, <a href="#s_pha_9191_9196" id="s_pha_9053_9058" title="Referenced at line 188">s_pha</a>, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#SubmitElem_8678_8688" id="SubmitElem_9060_9070" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 201">SubmitElem</a>(<a href="#a_9120_9121" id="a_9071_9072" title="Referenced at line 186">a</a>, <a href="#props_9157_9162" id="props_9074_9079" title="Referenced at line 187">props</a>, <a href="#elems_9198_9203" id="elems_9081_9086" title="Referenced at line 188">elems</a>)) :-
    <a href="../ui/actions.stx#actionCallOrInlineOk_2919_2939" id="actionCallOrInlineOk_9096_9116" title="Defined at ../ui/actions.stx line 70">actionCallOrInlineOk</a>(<a href="#s_9047_9048" id="s_9117_9118" title="Defined at line 185">s</a>, <a href="#a_9071_9072" id="a_9120_9121" title="Defined at line 185">a</a>),
    <a href="../ui/template-calls.stx#templatePropAssignmentsOk_4182_4207" id="templatePropAssignmentsOk_9128_9153" title="Defined at ../ui/template-calls.stx line 94">templatePropAssignmentsOk</a>(<a href="#s_9047_9048" id="s_9154_9155" title="Defined at line 185">s</a>, <a href="#props_9074_9079" id="props_9157_9162" title="Defined at line 185">props</a>),
    <a href="#templateElementsOk_7412_7430" id="templateElementsOk_9169_9187" title="Defined at line 142">templateElementsOk</a>(<a href="#s_9047_9048" id="s_9188_9189" title="Defined at line 185">s</a>, <a href="#s_pha_9053_9058" id="s_pha_9191_9196" title="Defined at line 185">s_pha</a>, <a href="#elems_9081_9086" id="elems_9198_9203" title="Defined at line 185">elems</a>).

  <a href="#templateElementOk_7058_7075" id="templateElementOk_9209_9226" title="Defined at line 138">templateElementOk</a>(<a href="#s_9301_9302" id="s_9227_9228" title="Referenced at line 191, 192, 193">s</a>, _, <a href="#s_pha_9375_9380" id="s_pha_9233_9238" title="Referenced at line 193">s_pha</a>, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#SubmitLinkElem_8874_8888" id="SubmitLinkElem_9240_9254" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 203">SubmitLinkElem</a>(<a href="#a_9304_9305" id="a_9255_9256" title="Referenced at line 191">a</a>, <a href="#props_9341_9346" id="props_9258_9263" title="Referenced at line 192">props</a>, <a href="#elems_9382_9387" id="elems_9265_9270" title="Referenced at line 193">elems</a>)) :-
    <a href="../ui/actions.stx#actionCallOrInlineOk_2919_2939" id="actionCallOrInlineOk_9280_9300" title="Defined at ../ui/actions.stx line 70">actionCallOrInlineOk</a>(<a href="#s_9227_9228" id="s_9301_9302" title="Defined at line 190">s</a>, <a href="#a_9255_9256" id="a_9304_9305" title="Defined at line 190">a</a>),
    <a href="../ui/template-calls.stx#templatePropAssignmentsOk_4182_4207" id="templatePropAssignmentsOk_9312_9337" title="Defined at ../ui/template-calls.stx line 94">templatePropAssignmentsOk</a>(<a href="#s_9227_9228" id="s_9338_9339" title="Defined at line 190">s</a>, <a href="#props_9258_9263" id="props_9341_9346" title="Defined at line 190">props</a>),
    <a href="#templateElementsOk_7412_7430" id="templateElementsOk_9353_9371" title="Defined at line 142">templateElementsOk</a>(<a href="#s_9227_9228" id="s_9372_9373" title="Defined at line 190">s</a>, <a href="#s_pha_9233_9238" id="s_pha_9375_9380" title="Defined at line 190">s_pha</a>, <a href="#elems_9265_9270" id="elems_9382_9387" title="Defined at line 190">elems</a>).

  <a href="#templateElementOk_7058_7075" id="templateElementOk_9393_9410" title="Defined at line 138">templateElementOk</a>(<a href="#s_9483_9484" id="s_9411_9412" title="Referenced at line 196, 197, 198">s</a>, _, <a href="#s_pha_9557_9562" id="s_pha_9417_9422" title="Referenced at line 198">s_pha</a>, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#DownloadLink_9072_9084" id="DownloadLink_9424_9436" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 205">DownloadLink</a>(<a href="#a_9486_9487" id="a_9437_9438" title="Referenced at line 196">a</a>, <a href="#props_9523_9528" id="props_9440_9445" title="Referenced at line 197">props</a>, <a href="#elems_9564_9569" id="elems_9447_9452" title="Referenced at line 198">elems</a>)) :-
    <a href="../ui/actions.stx#actionCallOrInlineOk_2919_2939" id="actionCallOrInlineOk_9462_9482" title="Defined at ../ui/actions.stx line 70">actionCallOrInlineOk</a>(<a href="#s_9411_9412" id="s_9483_9484" title="Defined at line 195">s</a>, <a href="#a_9437_9438" id="a_9486_9487" title="Defined at line 195">a</a>),
    <a href="../ui/template-calls.stx#templatePropAssignmentsOk_4182_4207" id="templatePropAssignmentsOk_9494_9519" title="Defined at ../ui/template-calls.stx line 94">templatePropAssignmentsOk</a>(<a href="#s_9411_9412" id="s_9520_9521" title="Defined at line 195">s</a>, <a href="#props_9440_9445" id="props_9523_9528" title="Defined at line 195">props</a>),
    <a href="#templateElementsOk_7412_7430" id="templateElementsOk_9535_9553" title="Defined at line 142">templateElementsOk</a>(<a href="#s_9411_9412" id="s_9554_9555" title="Defined at line 195">s</a>, <a href="#s_pha_9417_9422" id="s_pha_9557_9562" title="Defined at line 195">s_pha</a>, <a href="#elems_9447_9452" id="elems_9564_9569" title="Defined at line 195">elems</a>).

  <a href="#templateElementOk_7058_7075" id="templateElementOk_9575_9592" title="Defined at line 138">templateElementOk</a>(<a href="#s_9664_9665" id="s_9593_9594" title="Referenced at line 201, 202, 203">s</a>, _, <a href="#s_pha_9738_9743" id="s_pha_9599_9604" title="Referenced at line 203">s_pha</a>, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#OutputImage_9267_9278" id="OutputImage_9606_9617" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 207">OutputImage</a>(<a href="#a_9667_9668" id="a_9618_9619" title="Referenced at line 201">a</a>, <a href="#props_9704_9709" id="props_9621_9626" title="Referenced at line 202">props</a>, <a href="#elems_9745_9750" id="elems_9628_9633" title="Referenced at line 203">elems</a>)) :-
    <a href="../ui/actions.stx#actionCallOrInlineOk_2919_2939" id="actionCallOrInlineOk_9643_9663" title="Defined at ../ui/actions.stx line 70">actionCallOrInlineOk</a>(<a href="#s_9593_9594" id="s_9664_9665" title="Defined at line 200">s</a>, <a href="#a_9618_9619" id="a_9667_9668" title="Defined at line 200">a</a>),
    <a href="../ui/template-calls.stx#templatePropAssignmentsOk_4182_4207" id="templatePropAssignmentsOk_9675_9700" title="Defined at ../ui/template-calls.stx line 94">templatePropAssignmentsOk</a>(<a href="#s_9593_9594" id="s_9701_9702" title="Defined at line 200">s</a>, <a href="#props_9621_9626" id="props_9704_9709" title="Defined at line 200">props</a>),
    <a href="#templateElementsOk_7412_7430" id="templateElementsOk_9716_9734" title="Defined at line 142">templateElementsOk</a>(<a href="#s_9593_9594" id="s_9735_9736" title="Defined at line 200">s</a>, <a href="#s_pha_9599_9604" id="s_pha_9738_9743" title="Defined at line 200">s_pha</a>, <a href="#elems_9628_9633" id="elems_9745_9750" title="Defined at line 200">elems</a>).

<span class="keyword">rules</span> <span class="layout">// expressions</span>

  <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_9778_9787" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<span id="s_9788_9789" title="Not referenced locally, nor via imports">s</span>, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateName2Exp_12515_12531" id="TemplateName2Exp_9791_9807" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 259">TemplateName2Exp</a>(<a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateName_12483_12495" id="TemplateName_9808_9820" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 258">TemplateName</a>())) = <a href="../types/built-ins.stx#string_1822_1828" id="string_9827_9833" title="Defined at ../types/built-ins.stx line 48">string</a>(s). <span class="layout">// TO-DO: only allow this if inside a template</span>

<span class="keyword">rules</span> <span class="layout">// loops</span>

  <a href="#templateElementOk_7058_7075" id="templateElementOk_9904_9921" title="Defined at line 138">templateElementOk</a>(<a href="#s_10069_10070" id="s_9922_9923" title="Referenced at line 212, 213, 218, 221">s</a>, _, <a href="#s_pha_10380_10385" id="s_pha_9928_9933" title="Referenced at line 220, 221">s_pha</a>, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#For_5486_5489" id="For_9935_9938" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 157">For</a>(<a href="#x_10387_10388" id="x_9939_9940" title="Referenced at line 220, 222">x</a>, <a href="#srt_10072_10075" id="srt_9942_9945" title="Referenced at line 212">srt</a>, <a href="#exp_10108_10111" id="exp_9947_9950" title="Referenced at line 213, 217">exp</a>, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#OptFilterSome_5416_5429" id="OptFilterSome_9952_9965" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 155">OptFilterSome</a>(<a href="#f_10355_10356" id="f_9966_9967" title="Referenced at line 219">f</a>), <a href="#elems_10402_10407" id="elems_9970_9975" title="Referenced at line 220">elems</a>, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#ForSeparator_5872_5884" id="ForSeparator_9977_9989" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 161">ForSeparator</a>(<a href="#separatorElems_10436_10450" id="separatorElems_9990_10004" title="Referenced at line 221">separatorElems</a>))) :- {<a href="#s_for_10307_10312" id="s_for_10012_10017" title="Referenced at line 218, 218, 219, 220">s_for</a> <a href="#typeOfSort_10044_10054" id="typeOfSort_10018_10028" title="Referenced at line 212, 215, 216, 217, 220, 222">typeOfSort</a> <a href="#typeOfExp_10082_10091" id="typeOfExp_10029_10038" title="Referenced at line 213, 215, 216, 217">typeOfExp</a>}
    <a href="#typeOfSort_10018_10028" id="typeOfSort_10044_10054" title="Defined at line 211">typeOfSort</a> == <a href="../webdsl-types.stx#typeOfSort_5551_5561" id="typeOfSort_10058_10068" title="Defined at ../webdsl-types.stx line 160">typeOfSort</a>(<a href="#s_9922_9923" id="s_10069_10070" title="Defined at line 211">s</a>, <a href="#srt_9942_9945" id="srt_10072_10075" title="Defined at line 211">srt</a>),
    <a href="#typeOfExp_10029_10038" id="typeOfExp_10082_10091" title="Defined at line 211">typeOfExp</a> == <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_10095_10104" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_9922_9923" id="s_10105_10106" title="Defined at line 211">s</a>, <a href="#exp_9947_9950" id="exp_10108_10111" title="Defined at line 211">exp</a>),
    <a href="../webdsl.stx#or_17705_17707" id="or_10118_10120" title="Defined at ../webdsl.stx line 417">or</a>(
      <a href="../webdsl-types.stx#equalTypeB_10725_10735" id="equalTypeB_10128_10138" title="Defined at ../webdsl-types.stx line 292">equalTypeB</a>(<a href="../webdsl-types.stx#LIST_891_895" id="LIST_10139_10143" title="Defined at ../webdsl-types.stx line 35">LIST</a>(<a href="#typeOfSort_10018_10028" id="typeOfSort_10144_10154" title="Defined at line 211">typeOfSort</a>), <a href="#typeOfExp_10029_10038" id="typeOfExp_10157_10166" title="Defined at line 211">typeOfExp</a>),
      <a href="../webdsl-types.stx#equalTypeB_10725_10735" id="equalTypeB_10175_10185" title="Defined at ../webdsl-types.stx line 292">equalTypeB</a>(<a href="../webdsl-types.stx#SET_915_918" id="SET_10186_10189" title="Defined at ../webdsl-types.stx line 36">SET</a>(<a href="#typeOfSort_10018_10028" id="typeOfSort_10190_10200" title="Defined at line 211">typeOfSort</a>), <a href="#typeOfExp_10029_10038" id="typeOfExp_10203_10212" title="Defined at line 211">typeOfExp</a>)
    ) | <span class="keyword">error</span> $[Must be a list or set of type [<a href="#typeOfSort_10018_10028" id="typeOfSort_10261_10271" title="Defined at line 211">typeOfSort</a>], [<a href="#typeOfExp_10029_10038" id="typeOfExp_10275_10284" title="Defined at line 211">typeOfExp</a>] given] @<a href="#exp_9947_9950" id="exp_10294_10297" title="Defined at line 211">exp</a>,
    <span class="keyword">new</span> <a href="#s_for_10012_10017" id="s_for_10307_10312" title="Defined at line 211">s_for</a>, <a href="#s_for_10012_10017" id="s_for_10314_10319" title="Defined at line 211">s_for</a> -<a href="../webdsl.stx#P_1226_1227" id="P_10321_10322" title="Defined at ../webdsl.stx line 45">P</a>-&gt; <a href="#s_9922_9923" id="s_10325_10326" title="Defined at line 211">s</a>,
    <a href="../webdsl-actions.stx#forLoopFilterOk_8616_8631" id="forLoopFilterOk_10332_10347" title="Defined at ../webdsl-actions.stx line 206">forLoopFilterOk</a>(<a href="#s_for_10012_10017" id="s_for_10348_10353" title="Defined at line 211">s_for</a>, <a href="#f_9966_9967" id="f_10355_10356" title="Defined at line 211">f</a>),
    <a href="#forLoopOk_11673_11682" id="forLoopOk_10363_10372" title="Defined at line 250">forLoopOk</a>(<a href="#s_for_10012_10017" id="s_for_10373_10378" title="Defined at line 211">s_for</a>, <a href="#s_pha_9928_9933" id="s_pha_10380_10385" title="Defined at line 211">s_pha</a>, <a href="#x_9939_9940" id="x_10387_10388" title="Defined at line 211">x</a>, <a href="#typeOfSort_10018_10028" id="typeOfSort_10390_10400" title="Defined at line 211">typeOfSort</a>, <a href="#elems_9970_9975" id="elems_10402_10407" title="Defined at line 211">elems</a>),
    <a href="#separatorOk_11959_11970" id="separatorOk_10414_10425" title="Defined at line 256">separatorOk</a>(<a href="#s_9922_9923" id="s_10426_10427" title="Defined at line 211">s</a>, <a href="#s_pha_9928_9933" id="s_pha_10429_10434" title="Defined at line 211">s_pha</a>, <a href="#separatorElems_9990_10004" id="separatorElems_10436_10450" title="Defined at line 211">separatorElems</a>),
    @<a href="#x_9939_9940" id="x_10458_10459" title="Defined at line 211">x</a>.<span class="keyword">type</span> := <a href="#typeOfSort_10018_10028" id="typeOfSort_10468_10478" title="Defined at line 211">typeOfSort</a>.

  <a href="#templateElementOk_7058_7075" id="templateElementOk_10483_10500" title="Defined at line 138">templateElementOk</a>(<a href="#s_10640_10641" id="s_10501_10502" title="Referenced at line 225, 227, 230">s</a>, _, <a href="#s_pha_10768_10773" id="s_pha_10507_10512" title="Referenced at line 229, 230">s_pha</a>, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#ForInferred_5585_5596" id="ForInferred_10514_10525" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 158">ForInferred</a>(<a href="#x_10775_10776" id="x_10526_10527" title="Referenced at line 229, 231">x</a>, <a href="#exp_10643_10646" id="exp_10529_10532" title="Referenced at line 225">exp</a>, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#OptFilterSome_5416_5429" id="OptFilterSome_10534_10547" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 155">OptFilterSome</a>(<a href="#f_10743_10744" id="f_10548_10549" title="Referenced at line 228">f</a>), <a href="#elems_10781_10786" id="elems_10552_10557" title="Referenced at line 229">elems</a>, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#ForSeparator_5872_5884" id="ForSeparator_10559_10571" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 161">ForSeparator</a>(<a href="#separatorElems_10815_10829" id="separatorElems_10572_10586" title="Referenced at line 230">separatorElems</a>))) :- {<a href="#s_for_10695_10700" id="s_for_10594_10599" title="Referenced at line 227, 227, 228, 229">s_for</a> <a href="#typeOfExp_10617_10626" id="typeOfExp_10600_10609" title="Referenced at line 225, 226">typeOfExp</a> <a href="#t_10653_10654" id="t_10610_10611" title="Referenced at line 226, 229, 231">t</a>}
    <a href="#typeOfExp_10600_10609" id="typeOfExp_10617_10626" title="Defined at line 224">typeOfExp</a> == <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_10630_10639" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_10501_10502" id="s_10640_10641" title="Defined at line 224">s</a>, <a href="#exp_10529_10532" id="exp_10643_10646" title="Defined at line 224">exp</a>),
    <a href="#t_10610_10611" id="t_10653_10654" title="Defined at line 224">t</a> == <a href="../webdsl-types.stx#stripGenericType_9921_9937" id="stripGenericType_10658_10674" title="Defined at ../webdsl-types.stx line 267">stripGenericType</a>(<a href="#typeOfExp_10600_10609" id="typeOfExp_10675_10684" title="Defined at line 224">typeOfExp</a>),
    <span class="keyword">new</span> <a href="#s_for_10594_10599" id="s_for_10695_10700" title="Defined at line 224">s_for</a>, <a href="#s_for_10594_10599" id="s_for_10702_10707" title="Defined at line 224">s_for</a> -<a href="../webdsl.stx#P_1226_1227" id="P_10709_10710" title="Defined at ../webdsl.stx line 45">P</a>-&gt; <a href="#s_10501_10502" id="s_10713_10714" title="Defined at line 224">s</a>,
    <a href="../webdsl-actions.stx#forLoopFilterOk_8616_8631" id="forLoopFilterOk_10720_10735" title="Defined at ../webdsl-actions.stx line 206">forLoopFilterOk</a>(<a href="#s_for_10594_10599" id="s_for_10736_10741" title="Defined at line 224">s_for</a>, <a href="#f_10548_10549" id="f_10743_10744" title="Defined at line 224">f</a>),
    <a href="#forLoopOk_11673_11682" id="forLoopOk_10751_10760" title="Defined at line 250">forLoopOk</a>(<a href="#s_for_10594_10599" id="s_for_10761_10766" title="Defined at line 224">s_for</a>, <a href="#s_pha_10507_10512" id="s_pha_10768_10773" title="Defined at line 224">s_pha</a>, <a href="#x_10526_10527" id="x_10775_10776" title="Defined at line 224">x</a>, <a href="#t_10610_10611" id="t_10778_10779" title="Defined at line 224">t</a>, <a href="#elems_10552_10557" id="elems_10781_10786" title="Defined at line 224">elems</a>),
    <a href="#separatorOk_11959_11970" id="separatorOk_10793_10804" title="Defined at line 256">separatorOk</a>(<a href="#s_10501_10502" id="s_10805_10806" title="Defined at line 224">s</a>, <a href="#s_pha_10507_10512" id="s_pha_10808_10813" title="Defined at line 224">s_pha</a>, <a href="#separatorElems_10572_10586" id="separatorElems_10815_10829" title="Defined at line 224">separatorElems</a>),
    @<a href="#x_10526_10527" id="x_10837_10838" title="Defined at line 224">x</a>.<span class="keyword">type</span> := <a href="#t_10610_10611" id="t_10847_10848" title="Defined at line 224">t</a>.

  <a href="#templateElementOk_7058_7075" id="templateElementOk_10853_10870" title="Defined at line 138">templateElementOk</a>(<a href="#s_11006_11007" id="s_10871_10872" title="Referenced at line 234, 235, 238">s</a>, _, <a href="#s_pha_11096_11101" id="s_pha_10877_10882" title="Referenced at line 237, 238">s_pha</a>, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#ForAll_5685_5691" id="ForAll_10884_10890" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 159">ForAll</a>(<a href="#x_11103_11104" id="x_10891_10892" title="Referenced at line 237, 239">x</a>, <a href="#srt_11009_11012" id="srt_10894_10897" title="Referenced at line 234">srt</a>, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#OptFilterSome_5416_5429" id="OptFilterSome_10899_10912" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 155">OptFilterSome</a>(<a href="#f_11071_11072" id="f_10913_10914" title="Referenced at line 236">f</a>), <a href="#elems_11118_11123" id="elems_10917_10922" title="Referenced at line 237">elems</a>, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#ForSeparator_5872_5884" id="ForSeparator_10924_10936" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 161">ForSeparator</a>(<a href="#separatorElems_11152_11166" id="separatorElems_10937_10951" title="Referenced at line 238">separatorElems</a>))) :- {<a href="#s_for_11023_11028" id="s_for_10959_10964" title="Referenced at line 235, 235, 236, 237">s_for</a> <a href="#typeOfSort_10981_10991" id="typeOfSort_10965_10975" title="Referenced at line 234, 237, 239">typeOfSort</a>}
    <a href="#typeOfSort_10965_10975" id="typeOfSort_10981_10991" title="Defined at line 233">typeOfSort</a> == <a href="../webdsl-types.stx#typeOfSort_5551_5561" id="typeOfSort_10995_11005" title="Defined at ../webdsl-types.stx line 160">typeOfSort</a>(<a href="#s_10871_10872" id="s_11006_11007" title="Defined at line 233">s</a>, <a href="#srt_10894_10897" id="srt_11009_11012" title="Defined at line 233">srt</a>),
    <span class="keyword">new</span> <a href="#s_for_10959_10964" id="s_for_11023_11028" title="Defined at line 233">s_for</a>, <a href="#s_for_10959_10964" id="s_for_11030_11035" title="Defined at line 233">s_for</a> -<a href="../webdsl.stx#P_1226_1227" id="P_11037_11038" title="Defined at ../webdsl.stx line 45">P</a>-&gt; <a href="#s_10871_10872" id="s_11041_11042" title="Defined at line 233">s</a>,
    <a href="../webdsl-actions.stx#forLoopFilterOk_8616_8631" id="forLoopFilterOk_11048_11063" title="Defined at ../webdsl-actions.stx line 206">forLoopFilterOk</a>(<a href="#s_for_10959_10964" id="s_for_11064_11069" title="Defined at line 233">s_for</a>, <a href="#f_10913_10914" id="f_11071_11072" title="Defined at line 233">f</a>),
    <a href="#forLoopOk_11673_11682" id="forLoopOk_11079_11088" title="Defined at line 250">forLoopOk</a>(<a href="#s_for_10959_10964" id="s_for_11089_11094" title="Defined at line 233">s_for</a>, <a href="#s_pha_10877_10882" id="s_pha_11096_11101" title="Defined at line 233">s_pha</a>, <a href="#x_10891_10892" id="x_11103_11104" title="Defined at line 233">x</a>, <a href="#typeOfSort_10965_10975" id="typeOfSort_11106_11116" title="Defined at line 233">typeOfSort</a>, <a href="#elems_10917_10922" id="elems_11118_11123" title="Defined at line 233">elems</a>),
    <a href="#separatorOk_11959_11970" id="separatorOk_11130_11141" title="Defined at line 256">separatorOk</a>(<a href="#s_10871_10872" id="s_11142_11143" title="Defined at line 233">s</a>, <a href="#s_pha_10877_10882" id="s_pha_11145_11150" title="Defined at line 233">s_pha</a>, <a href="#separatorElems_10937_10951" id="separatorElems_11152_11166" title="Defined at line 233">separatorElems</a>),
    @<a href="#x_10891_10892" id="x_11174_11175" title="Defined at line 233">x</a>.<span class="keyword">type</span> := <a href="#typeOfSort_10965_10975" id="typeOfSort_11184_11194" title="Defined at line 233">typeOfSort</a>.

  <a href="#templateElementOk_7058_7075" id="templateElementOk_11199_11216" title="Defined at line 138">templateElementOk</a>(<a href="#s_11334_11335" id="s_11217_11218" title="Referenced at line 242, 243, 244, 245, 247">s</a>, _, <a href="#s_pha_11576_11581" id="s_pha_11223_11228" title="Referenced at line 246, 247">s_pha</a>, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#ForCount_5781_5789" id="ForCount_11230_11238" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 160">ForCount</a>(<a href="#x_11583_11584" id="x_11239_11240" title="Referenced at line 246, 248">x</a>, <a href="#fromExp_11365_11372" id="fromExp_11242_11249" title="Referenced at line 243">fromExp</a>, <a href="#toExp_11460_11465" id="toExp_11251_11256" title="Referenced at line 244">toExp</a>, <a href="#elems_11595_11600" id="elems_11258_11263" title="Referenced at line 246">elems</a>, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#ForSeparator_5872_5884" id="ForSeparator_11265_11277" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 161">ForSeparator</a>(<a href="#separatorElems_11629_11643" id="separatorElems_11278_11292" title="Referenced at line 247">separatorElems</a>))) :- {<a href="#s_for_11534_11539" id="s_for_11300_11305" title="Referenced at line 245, 245, 246">s_for</a> <a href="#intType_11319_11326" id="intType_11306_11313" title="Referenced at line 242, 243, 244, 246, 248">intType</a>}
    <a href="#intType_11306_11313" id="intType_11319_11326" title="Defined at line 241">intType</a> == <a href="../types/built-ins.stx#int_1638_1641" id="int_11330_11333" title="Defined at ../types/built-ins.stx line 41">int</a>(<a href="#s_11217_11218" id="s_11334_11335" title="Defined at line 241">s</a>),
    <a href="../webdsl-types.stx#equalType_10645_10654" id="equalType_11342_11351" title="Defined at ../webdsl-types.stx line 289">equalType</a>(<a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_11352_11361" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_11217_11218" id="s_11362_11363" title="Defined at line 241">s</a>, <a href="#fromExp_11242_11249" id="fromExp_11365_11372" title="Defined at line 241">fromExp</a>), <a href="#intType_11306_11313" id="intType_11375_11382" title="Defined at line 241">intType</a>) | <span class="keyword">error</span> $[From expression should have type Int],
    <a href="../webdsl-types.stx#equalType_10645_10654" id="equalType_11437_11446" title="Defined at ../webdsl-types.stx line 289">equalType</a>(<a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_11447_11456" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_11217_11218" id="s_11457_11458" title="Defined at line 241">s</a>, <a href="#toExp_11251_11256" id="toExp_11460_11465" title="Defined at line 241">toExp</a>)  , <a href="#intType_11306_11313" id="intType_11470_11477" title="Defined at line 241">intType</a>) | <span class="keyword">error</span> $[To expression should have type Int],
    <span class="keyword">new</span> <a href="#s_for_11300_11305" id="s_for_11534_11539" title="Defined at line 241">s_for</a>, <a href="#s_for_11300_11305" id="s_for_11541_11546" title="Defined at line 241">s_for</a> -<a href="../webdsl.stx#P_1226_1227" id="P_11548_11549" title="Defined at ../webdsl.stx line 45">P</a>-&gt; <a href="#s_11217_11218" id="s_11552_11553" title="Defined at line 241">s</a>,
    <a href="#forLoopOk_11673_11682" id="forLoopOk_11559_11568" title="Defined at line 250">forLoopOk</a>(<a href="#s_for_11300_11305" id="s_for_11569_11574" title="Defined at line 241">s_for</a>, <a href="#s_pha_11223_11228" id="s_pha_11576_11581" title="Defined at line 241">s_pha</a>, <a href="#x_11239_11240" id="x_11583_11584" title="Defined at line 241">x</a>, <a href="#intType_11306_11313" id="intType_11586_11593" title="Defined at line 241">intType</a>, <a href="#elems_11258_11263" id="elems_11595_11600" title="Defined at line 241">elems</a>),
    <a href="#separatorOk_11959_11970" id="separatorOk_11607_11618" title="Defined at line 256">separatorOk</a>(<a href="#s_11217_11218" id="s_11619_11620" title="Defined at line 241">s</a>, <a href="#s_pha_11223_11228" id="s_pha_11622_11627" title="Defined at line 241">s_pha</a>, <a href="#separatorElems_11278_11292" id="separatorElems_11629_11643" title="Defined at line 241">separatorElems</a>),
    @<a href="#x_11239_11240" id="x_11651_11652" title="Defined at line 241">x</a>.<span class="keyword">type</span> := <a href="#intType_11306_11313" id="intType_11661_11668" title="Defined at line 241">intType</a>.

  <a href="#forLoopOk_10363_10372" id="forLoopOk_11673_11682" title="Referenced at line 220, 229, 237, 246, 251">forLoopOk</a> : <span class="keyword">scope</span> * <span class="keyword">scope</span> * <span class="keyword">string</span> * <a href="../webdsl.stx#TYPE_669_673" id="TYPE_11710_11714" title="Defined at ../webdsl.stx line 29">TYPE</a> * <span class="keyword">list</span>(<a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateElement_256_271" id="TemplateElement_11722_11737" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 15">TemplateElement</a>)
  <a href="#forLoopOk_11673_11682" id="forLoopOk_11741_11750" title="Defined at line 250">forLoopOk</a>(<a href="#s_for_11796_11801" id="s_for_11751_11756" title="Referenced at line 252, 253, 254">s_for</a>, <a href="#s_pha_11941_11946" id="s_pha_11758_11763" title="Referenced at line 254">s_pha</a>, <a href="#x_11803_11804" id="x_11765_11766" title="Referenced at line 252, 253">x</a>, <a href="#t_11806_11807" id="t_11768_11769" title="Referenced at line 252">t</a>, <a href="#stmts_11948_11953" id="stmts_11771_11776" title="Referenced at line 254">stmts</a>) :-
    <a href="../webdsl.stx#declareVar_13281_13291" id="declareVar_11785_11795" title="Defined at ../webdsl.stx line 301">declareVar</a>(<a href="#s_for_11751_11756" id="s_for_11796_11801" title="Defined at line 251">s_for</a>, <a href="#x_11765_11766" id="x_11803_11804" title="Defined at line 251">x</a>, <a href="#t_11768_11769" id="t_11806_11807" title="Defined at line 251">t</a>),
    <a href="../entities/annotations.stx#declareAnnotation_758_775" id="declareAnnotation_11814_11831" title="Defined at ../entities/annotations.stx line 36">declareAnnotation</a>(<a href="#s_for_11751_11756" id="s_for_11832_11837" title="Defined at line 251">s_for</a>, <a href="#x_11765_11766" id="x_11839_11840" title="Defined at line 251">x</a>, <a href="../entities/annotations.stx#DERIVED_427_434" id="DERIVED_11842_11849" title="Defined at ../entities/annotations.stx line 22">DERIVED</a>()), <span class="layout">// abuse derived annotation to declare immutability of x</span>
    <a href="#templateElementsOk_7412_7430" id="templateElementsOk_11915_11933" title="Defined at line 142">templateElementsOk</a>(<a href="#s_for_11751_11756" id="s_for_11934_11939" title="Defined at line 251">s_for</a>, <a href="#s_pha_11758_11763" id="s_pha_11941_11946" title="Defined at line 251">s_pha</a>, <a href="#stmts_11771_11776" id="stmts_11948_11953" title="Defined at line 251">stmts</a>).

  <a href="#separatorOk_10414_10425" id="separatorOk_11959_11970" title="Referenced at line 221, 230, 238, 247, 257">separatorOk</a> : <span class="keyword">scope</span> * <span class="keyword">scope</span> * <span class="keyword">list</span>(<a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateElement_256_271" id="TemplateElement_11994_12009" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 15">TemplateElement</a>)
  <a href="#separatorOk_11959_11970" id="separatorOk_12013_12024" title="Defined at line 256">separatorOk</a>(<a href="#s_12097_12098" id="s_12025_12026" title="Referenced at line 258">s</a>, <a href="#s_pha_12136_12141" id="s_pha_12028_12033" title="Referenced at line 259">s_pha</a>, <a href="#elems_12143_12148" id="elems_12035_12040" title="Referenced at line 259">elems</a>) :- {<a href="#s_separator_12067_12078" id="s_separator_12046_12057" title="Referenced at line 258, 258, 259">s_separator</a>}
    <span class="keyword">new</span> <a href="#s_separator_12046_12057" id="s_separator_12067_12078" title="Defined at line 257">s_separator</a>, <a href="#s_separator_12046_12057" id="s_separator_12080_12091" title="Defined at line 257">s_separator</a> -<a href="../webdsl.stx#P_1226_1227" id="P_12093_12094" title="Defined at ../webdsl.stx line 45">P</a>-&gt; <a href="#s_12025_12026" id="s_12097_12098" title="Defined at line 257">s</a>,
    <a href="#templateElementsOk_7412_7430" id="templateElementsOk_12104_12122" title="Defined at line 142">templateElementsOk</a>(<a href="#s_separator_12046_12057" id="s_separator_12123_12134" title="Defined at line 257">s_separator</a>, <a href="#s_pha_12028_12033" id="s_pha_12136_12141" title="Defined at line 257">s_pha</a>, <a href="#elems_12035_12040" id="elems_12143_12148" title="Defined at line 257">elems</a>).

<span class="keyword">rules</span> <span class="layout">// enforce correct order of template elements</span>

  <span class="layout">// correct order:</span>
  <span class="layout">// 1. var decls</span>
  <span class="layout">// 2. init block</span>
  <span class="layout">// 3. other template elements</span>
  <a href="#templateElementOrderOk_1734_1756" id="templateElementOrderOk_12296_12318" title="Referenced at line 41, 73, 95, 268, 269, 271, 273, 275, 277">templateElementOrderOk</a> : <span class="keyword">list</span>(<a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateElement_256_271" id="TemplateElement_12326_12341" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 15">TemplateElement</a>) * <a href="../webdsl.stx#BOOL_697_701" id="BOOL_12345_12349" title="Defined at ../webdsl.stx line 30">BOOL</a> * <a href="../webdsl.stx#BOOL_697_701" id="BOOL_12352_12356" title="Defined at ../webdsl.stx line 30">BOOL</a>
  <a href="#templateElementOrderOk_12296_12318" id="templateElementOrderOk_12359_12381" title="Defined at line 267">templateElementOrderOk</a>([], _, _).
  <a href="#templateElementOrderOk_12296_12318" id="templateElementOrderOk_12395_12417" title="Defined at line 267">templateElementOrderOk</a>([<span id="x_12419_12420" title="Not referenced locally, nor via imports">x</span> | <span id="xs_12423_12425" title="Not referenced locally, nor via imports">xs</span>], _, _). <span class="layout">// TO-DO: verify if we want this check :- templateElementOrderOk(xs, TRUE(), TRUE()).</span>

  <a href="#templateElementOrderOk_12296_12318" id="templateElementOrderOk_12524_12546" title="Defined at line 267">templateElementOrderOk</a>([<a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TEVarDecl_4571_4580" id="TEVarDecl_12548_12557" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 137">TEVarDecl</a>(<a href="#v_12700_12701" id="v_12558_12559" title="Referenced at line 272">v</a>) | <a href="#xs_12730_12732" id="xs_12563_12565" title="Referenced at line 273">xs</a>], <a href="#varDeclsDone_12599_12611" id="varDeclsDone_12568_12580" title="Referenced at line 272, 273">varDeclsDone</a>, <a href="#initDone_12748_12756" id="initDone_12582_12590" title="Referenced at line 273">initDone</a>) :-
    <a href="#varDeclsDone_12568_12580" id="varDeclsDone_12599_12611" title="Defined at line 271">varDeclsDone</a> == <a href="../webdsl.stx#FALSE_844_849" id="FALSE_12615_12620" title="Defined at ../webdsl.stx line 35">FALSE</a>() | <span class="keyword">error</span> $[Variable declarations must be at the start of a page or template] @<a href="#v_12558_12559" id="v_12700_12701" title="Defined at line 271">v</a>,
    <a href="#templateElementOrderOk_12296_12318" id="templateElementOrderOk_12707_12729" title="Defined at line 267">templateElementOrderOk</a>(<a href="#xs_12563_12565" id="xs_12730_12732" title="Defined at line 271">xs</a>, <a href="#varDeclsDone_12568_12580" id="varDeclsDone_12734_12746" title="Defined at line 271">varDeclsDone</a>, <a href="#initDone_12582_12590" id="initDone_12748_12756" title="Defined at line 271">initDone</a>).

  <a href="#templateElementOrderOk_12296_12318" id="templateElementOrderOk_12762_12784" title="Defined at line 267">templateElementOrderOk</a>([<a href="#i_12941_12942" id="i_12786_12787" title="Referenced at line 276">i</a>@<a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#Init_4150_4154" id="Init_12788_12792" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 129">Init</a>(_) | <a href="#xs_12971_12973" id="xs_12798_12800" title="Referenced at line 277">xs</a>], _, <a href="#initDone_12823_12831" id="initDone_12806_12814" title="Referenced at line 276, 277">initDone</a>) :-
    <a href="#initDone_12806_12814" id="initDone_12823_12831" title="Defined at line 275">initDone</a> == <a href="../webdsl.stx#FALSE_844_849" id="FALSE_12835_12840" title="Defined at ../webdsl.stx line 35">FALSE</a>() | <span class="keyword">error</span> $[Init block must be between variable declarations and the rest of the page or template] @<a href="#i_12786_12787" id="i_12941_12942" title="Defined at line 275">i</a>,
    <a href="#templateElementOrderOk_12296_12318" id="templateElementOrderOk_12948_12970" title="Defined at line 267">templateElementOrderOk</a>(<a href="#xs_12798_12800" id="xs_12971_12973" title="Defined at line 275">xs</a>, <a href="../webdsl.stx#TRUE_828_832" id="TRUE_12975_12979" title="Defined at ../webdsl.stx line 34">TRUE</a>(), <a href="#initDone_12806_12814" id="initDone_12983_12991" title="Defined at line 275">initDone</a>).

<span class="keyword">rules</span> <span class="layout">// template var args</span>

  <a href="../actions/functions.stx#typeOfArg_6663_6672" id="typeOfArg_13025_13034" title="Defined at ../actions/functions.stx line 139">typeOfArg</a>(<a href="#s_13162_13163" id="s_13035_13036" title="Referenced at line 283">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#Arg_1442_1445" id="Arg_13038_13041" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 56">Arg</a>(_, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateVarArgSort_11323_11341" id="TemplateVarArgSort_13045_13063" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 239">TemplateVarArgSort</a>(<a href="#props_13172_13177" id="props_13064_13069" title="Referenced at line 283">props</a>))) = <a href="../webdsl-types.stx#LIST_891_895" id="LIST_13075_13079" title="Defined at ../webdsl-types.stx line 35">LIST</a>(<a href="../webdsl-types.stx#TEMPLATEVARARG_1090_1104" id="TEMPLATEVARARG_13080_13094" title="Defined at ../webdsl-types.stx line 43">TEMPLATEVARARG</a>(<a href="#ts_13129_13131" id="ts_13095_13097" title="Referenced at line 283">ts</a>, <a href="#s_arg_13118_13123" id="s_arg_13099_13104" title="Referenced at line 282, 283">s_arg</a>)) :-
    <span class="keyword">new</span> <a href="#s_arg_13099_13104" id="s_arg_13118_13123" title="Defined at line 281">s_arg</a>,
    <a href="#ts_13095_13097" id="ts_13129_13131" title="Defined at line 281">ts</a> == <a href="#typesOfTemplateVarArgProps_13183_13209" id="typesOfTemplateVarArgProps_13135_13161" title="Defined at line 285">typesOfTemplateVarArgProps</a>(<a href="#s_13035_13036" id="s_13162_13163" title="Defined at line 281">s</a>, <a href="#s_arg_13099_13104" id="s_arg_13165_13170" title="Defined at line 281">s_arg</a>, <a href="#props_13064_13069" id="props_13172_13177" title="Defined at line 281">props</a>).

  <a href="#typesOfTemplateVarArgProps_13135_13161" id="typesOfTemplateVarArgProps_13183_13209" title="Referenced at line 283">typesOfTemplateVarArgProps</a> <span class="keyword">maps</span> <a href="#typeOfTemplateVarArgProp_13267_13291" id="typeOfTemplateVarArgProp_13215_13239" title="Defined at line 286">typeOfTemplateVarArgProp</a>(*, *, <span class="keyword">list</span>(*)) = <span class="keyword">list</span>(*)
  <a href="#typeOfTemplateVarArgProp_13215_13239" id="typeOfTemplateVarArgProp_13267_13291" title="Referenced at line 285, 287">typeOfTemplateVarArgProp</a> : <span class="keyword">scope</span> * <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#FormalVarArg_876_888" id="FormalVarArg_13310_13322" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 47">FormalVarArg</a> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_13326_13330" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#typeOfTemplateVarArgProp_13267_13291" id="typeOfTemplateVarArgProp_13333_13357" title="Defined at line 286">typeOfTemplateVarArgProp</a>(<a href="#s_13417_13418" id="s_13358_13359" title="Referenced at line 288">s</a>, <a href="#s_arg_13441_13446" id="s_arg_13361_13366" title="Referenced at line 289, 290">s_arg</a>, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#FormalVarArg_11375_11387" id="FormalVarArg_13368_13380" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 240">FormalVarArg</a>(<a href="#x_13448_13449" id="x_13381_13382" title="Referenced at line 289, 290">x</a>, <a href="#srt_13420_13423" id="srt_13384_13387" title="Referenced at line 288">srt</a>)) = <a href="#t_13401_13402" id="t_13392_13393" title="Referenced at line 288, 289, 290">t</a> :-
    <a href="#t_13392_13393" id="t_13401_13402" title="Defined at line 287">t</a> == <a href="../webdsl-types.stx#typeOfSort_5551_5561" id="typeOfSort_13406_13416" title="Defined at ../webdsl-types.stx line 160">typeOfSort</a>(<a href="#s_13358_13359" id="s_13417_13418" title="Defined at line 287">s</a>, <a href="#srt_13384_13387" id="srt_13420_13423" title="Defined at line 287">srt</a>),
    <a href="../webdsl.stx#declareVar_13281_13291" id="declareVar_13430_13440" title="Defined at ../webdsl.stx line 301">declareVar</a>(<a href="#s_arg_13361_13366" id="s_arg_13441_13446" title="Defined at line 287">s_arg</a>, <a href="#x_13381_13382" id="x_13448_13449" title="Defined at line 287">x</a>, <a href="#t_13392_13393" id="t_13451_13452" title="Defined at line 287">t</a>),
    <a href="#optionallyDeclareTemplateElements_13510_13543" id="optionallyDeclareTemplateElements_13459_13492" title="Defined at line 292">optionallyDeclareTemplateElements</a>(<a href="#s_arg_13361_13366" id="s_arg_13493_13498" title="Defined at line 287">s_arg</a>, <a href="#x_13381_13382" id="x_13500_13501" title="Defined at line 287">x</a>, <a href="#t_13392_13393" id="t_13503_13504" title="Defined at line 287">t</a>).

  <a href="#optionallyDeclareTemplateElements_13459_13492" id="optionallyDeclareTemplateElements_13510_13543" title="Referenced at line 290, 293, 294">optionallyDeclareTemplateElements</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> * <a href="../webdsl.stx#TYPE_669_673" id="TYPE_13563_13567" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#optionallyDeclareTemplateElements_13510_13543" id="optionallyDeclareTemplateElements_13570_13603" title="Defined at line 292">optionallyDeclareTemplateElements</a>(_, _, _).
  <a href="#optionallyDeclareTemplateElements_13510_13543" id="optionallyDeclareTemplateElements_13616_13649" title="Defined at line 292">optionallyDeclareTemplateElements</a>(<a href="#s_arg_13703_13708" id="s_arg_13650_13655" title="Referenced at line 295">s_arg</a>, <a href="#x_13710_13711" id="x_13657_13658" title="Referenced at line 295">x</a>, <a href="../webdsl-types.stx#TEMPLATEELEMENTS_1195_1211" id="TEMPLATEELEMENTS_13660_13676" title="Defined at ../webdsl-types.stx line 47">TEMPLATEELEMENTS</a>()) :-
    <a href="../webdsl.stx#declareTemplate_5279_5294" id="declareTemplate_13687_13702" title="Defined at ../webdsl.stx line 151">declareTemplate</a>(<a href="#s_arg_13650_13655" id="s_arg_13703_13708" title="Defined at line 294">s_arg</a>, <a href="#x_13657_13658" id="x_13710_13711" title="Defined at line 294">x</a>, []).

  <a href="../webdsl-actions.stx#typeOfProperty_10792_10806" id="typeOfProperty_13721_13735" title="Defined at ../webdsl-actions.stx line 260">typeOfProperty</a>(<span id="s_13736_13737" title="Not referenced locally, nor via imports">s</span>, <a href="../webdsl-types.stx#TEMPLATEVARARG_1090_1104" id="TEMPLATEVARARG_13739_13753" title="Defined at ../webdsl-types.stx line 43">TEMPLATEVARARG</a>(_, <a href="#s_arg_13792_13797" id="s_arg_13757_13762" title="Referenced at line 298">s_arg</a>), <a href="#x_13799_13800" id="x_13765_13766" title="Referenced at line 298">x</a>) = <a href="#t_13805_13806" id="t_13770_13771" title="Referenced at line 298">t</a> :-
    <a href="../webdsl-types.stx#propertyType_9035_9047" id="propertyType_13779_13791" title="Defined at ../webdsl-types.stx line 244">propertyType</a>(<a href="#s_arg_13757_13762" id="s_arg_13792_13797" title="Defined at line 297">s_arg</a>, <a href="#x_13765_13766" id="x_13799_13800" title="Defined at line 297">x</a>) == <a href="#t_13770_13771" id="t_13805_13806" title="Defined at line 297">t</a>.

  <a href="../ui/template-calls.stx#templateCallOk_internal_804_827" id="templateCallOk_internal_13811_13834" title="Defined at ../ui/template-calls.stx line 30">templateCallOk_internal</a>(<a href="#s_13918_13919" id="s_13835_13836" title="Referenced at line 301">s</a>, <a href="#s_pha_14093_14098" id="s_pha_13838_13843" title="Referenced at line 303">s_pha</a>, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#MemberTemplateCall_11420_11438" id="MemberTemplateCall_13845_13863" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 241">MemberTemplateCall</a>(<a href="#x_13921_13922" id="x_13864_13865" title="Referenced at line 301, 301">x</a>, <a href="#tc_14100_14102" id="tc_13867_13869" title="Referenced at line 303">tc</a>), <a href="#ajax_14104_14108" id="ajax_13872_13876" title="Referenced at line 303">ajax</a>) :- { <a href="#s_arg_13945_13950" id="s_arg_13883_13888" title="Referenced at line 301, 302">s_arg</a> <a href="#s_resolve_14021_14030" id="s_resolve_13889_13898" title="Referenced at line 302, 302, 303">s_resolve</a> }
    <a href="../webdsl-types.stx#variableType_8830_8842" id="variableType_13905_13917" title="Defined at ../webdsl-types.stx line 239">variableType</a>(<a href="#s_13835_13836" id="s_13918_13919" title="Defined at line 300">s</a>, <a href="#x_13864_13865" id="x_13921_13922" title="Defined at line 300">x</a>) == <a href="../webdsl-types.stx#TEMPLATEVARARG_1090_1104" id="TEMPLATEVARARG_13927_13941" title="Defined at ../webdsl-types.stx line 43">TEMPLATEVARARG</a>(_, <a href="#s_arg_13883_13888" id="s_arg_13945_13950" title="Defined at line 300">s_arg</a>) | <span class="keyword">error</span> $[Variable [<a href="#x_13864_13865" id="x_13972_13973" title="Defined at line 300">x</a>] is not a template variable argument],
    <span class="keyword">new</span> <a href="#s_resolve_13889_13898" id="s_resolve_14021_14030" title="Defined at line 300">s_resolve</a>, <a href="#s_resolve_13889_13898" id="s_resolve_14032_14041" title="Defined at line 300">s_resolve</a> -<a href="../webdsl.stx#P_1226_1227" id="P_14043_14044" title="Defined at ../webdsl.stx line 45">P</a>-&gt; <a href="#s_arg_13883_13888" id="s_arg_14047_14052" title="Defined at line 300">s_arg</a>,
    <a href="../ui/template-calls.stx#templateCallOk_internal_804_827" id="templateCallOk_internal_14058_14081" title="Defined at ../ui/template-calls.stx line 30">templateCallOk_internal</a>(<a href="#s_resolve_13889_13898" id="s_resolve_14082_14091" title="Defined at line 300">s_resolve</a>, <a href="#s_pha_13838_13843" id="s_pha_14093_14098" title="Defined at line 300">s_pha</a>, <a href="#tc_13867_13869" id="tc_14100_14102" title="Defined at line 300">tc</a>, <a href="#ajax_13872_13876" id="ajax_14104_14108" title="Defined at line 300">ajax</a>).

  <a href="../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_14114_14129" title="Defined at ../webdsl.stx line 411">typeCompatibleB</a>(<a href="../webdsl-types.stx#TEMPLATEVARARG_1090_1104" id="TEMPLATEVARARG_14130_14144" title="Defined at ../webdsl-types.stx line 43">TEMPLATEVARARG</a>(<a href="#ts1_14210_14213" id="ts1_14145_14148" title="Referenced at line 306">ts1</a>, _), <a href="../webdsl-types.stx#TEMPLATEVARARG_1090_1104" id="TEMPLATEVARARG_14154_14168" title="Defined at ../webdsl-types.stx line 43">TEMPLATEVARARG</a>(<a href="#ts2_14215_14218" id="ts2_14169_14172" title="Referenced at line 306">ts2</a>, _)) = <a href="#b_14189_14190" id="b_14180_14181" title="Referenced at line 306">b</a> :-
    <a href="#b_14180_14181" id="b_14189_14190" title="Defined at line 305">b</a> == <a href="../webdsl.stx#typesCompatible_17112_17127" id="typesCompatible_14194_14209" title="Defined at ../webdsl.stx line 401">typesCompatible</a>(<a href="#ts1_14145_14148" id="ts1_14210_14213" title="Defined at line 305">ts1</a>, <a href="#ts2_14169_14172" id="ts2_14215_14218" title="Defined at line 305">ts2</a>).

<span class="keyword">rules</span> <span class="layout">// utils</span>

  <a href="#rootPageDefined_14275_14290" id="rootPageDefined_14240_14255" title="Referenced at line 311; ../webdsl-modules.stx line 23">rootPageDefined</a> : <span class="keyword">scope</span> * <span class="keyword">string</span>
  <a href="#rootPageDefined_14240_14255" id="rootPageDefined_14275_14290" title="Defined at line 310">rootPageDefined</a>(<a href="#s_14332_14333" id="s_14291_14292" title="Referenced at line 312">s</a>, <a href="#errorLoc_14405_14413" id="errorLoc_14294_14302" title="Referenced at line 312">errorLoc</a>) :- { <a href="#p_14360_14361" id="p_14309_14310" title="Referenced at line 312, 313">p</a> <a href="#ts_14363_14365" id="ts_14311_14313" title="Referenced at line 312, 313">ts</a> }
    <a href="../webdsl.stx#resolvePage_7943_7954" id="resolvePage_14320_14331" title="Defined at ../webdsl.stx line 196">resolvePage</a>(<a href="#s_14291_14292" id="s_14332_14333" title="Defined at line 311">s</a>, "root") == [(_, (_, <a href="../webdsl-types.stx#PAGE_624_628" id="PAGE_14355_14359" title="Defined at ../webdsl-types.stx line 26">PAGE</a>(<a href="#p_14309_14310" id="p_14360_14361" title="Defined at line 311">p</a>, <a href="#ts_14311_14313" id="ts_14363_14365" title="Defined at line 311">ts</a>)))|_] | <span class="keyword">error</span> $[No root page defined] @<a href="#errorLoc_14294_14302" id="errorLoc_14405_14413" title="Defined at line 311">errorLoc</a>,
    <a href="#noRootPageArguments_14450_14469" id="noRootPageArguments_14419_14438" title="Defined at line 315">noRootPageArguments</a>(<a href="#p_14309_14310" id="p_14439_14440" title="Defined at line 311">p</a>, <a href="#ts_14311_14313" id="ts_14442_14444" title="Defined at line 311">ts</a>).

  <a href="#noRootPageArguments_14419_14438" id="noRootPageArguments_14450_14469" title="Referenced at line 313, 316, 317">noRootPageArguments</a> : <span class="keyword">string</span> * <span class="keyword">list</span>(<a href="../webdsl.stx#TYPE_669_673" id="TYPE_14486_14490" title="Defined at ../webdsl.stx line 29">TYPE</a>)
  <a href="#noRootPageArguments_14450_14469" id="noRootPageArguments_14494_14513" title="Defined at line 315">noRootPageArguments</a>(_, []).
  <a href="#noRootPageArguments_14450_14469" id="noRootPageArguments_14524_14543" title="Defined at line 315">noRootPageArguments</a>(<a href="#p_14621_14622" id="p_14544_14545" title="Referenced at line 317">p</a>, [_ | _]) :- <span class="keyword">false</span> | <span class="keyword">error</span> $[Root page is not allowed to have parameters] @<a href="#p_14544_14545" id="p_14621_14622" title="Defined at line 317">p</a>.

  <a href="#typesOfTemplateArgs_2983_3002" id="typesOfTemplateArgs_14627_14646" title="Referenced at line 66, 88">typesOfTemplateArgs</a> <span class="keyword">maps</span> <a href="#typeOfTemplateArg_14694_14711" id="typeOfTemplateArg_14652_14669" title="Defined at line 320">typeOfTemplateArg</a>(*, <span class="keyword">list</span>(*)) = <span class="keyword">list</span>(*)
  <a href="#typeOfTemplateArg_14652_14669" id="typeOfTemplateArg_14694_14711" title="Referenced at line 319, 321">typeOfTemplateArg</a> : <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateArg_426_437" id="TemplateArg_14722_14733" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 24">TemplateArg</a> -&gt; (<span class="keyword">string</span> * <span class="keyword">list</span>(<a href="../webdsl.stx#TYPE_669_673" id="TYPE_14752_14756" title="Defined at ../webdsl.stx line 29">TYPE</a>))
  <a href="#typeOfTemplateArg_14694_14711" id="typeOfTemplateArg_14761_14778" title="Defined at line 320">typeOfTemplateArg</a>(s, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateArg_2994_3005" id="TemplateArg_14782_14793" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 105">TemplateArg</a>(x, <span id="argSorts_14797_14805" title="Not referenced locally, nor via imports">argSorts</span>)) = (<span id="x_14811_14812" title="Not referenced locally, nor via imports">x</span>, <a href="../webdsl-types.stx#typesOfSorts_5498_5510" id="typesOfSorts_14814_14826" title="Defined at ../webdsl-types.stx line 159">typesOfSorts</a>(<span id="s_14827_14828" title="Not referenced locally, nor via imports">s</span>, argSorts)).

</code></pre></td></tr></tbody></table></div>