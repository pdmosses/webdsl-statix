---
title: WebDSL-Search.sdf3
---

# `WebDSL-Search.sdf3`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-Search.sdf3]

[pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-Search.sdf3]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/syntax/WebDSL-Search.sdf3 "The source file on GitHub"

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
322
323
324
325
326
327
328
329
330
331
332
333
334
335
336
337
338
339
340
341
342
343
344
345
346
347
348
349
350
351
352
353
354
355
356
357
358
359
360
361
362
363
364
365
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix.sdf3#WebDSL-Search_359_372" id="WebDSL-Search_7_20" title="Referenced at ../webdsl-statix.sdf3 line 22">WebDSL-Search</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3#WebDSL-Action_7_20" id="WebDSL-Action_32_45" title="Defined at ../WebDSL-Action.sdf3 line 1">WebDSL-Action</a>
  <a href="../WebDSL-Core.sdf3#WebDSL-Core_7_18" id="WebDSL-Core_48_59" title="Defined at ../WebDSL-Core.sdf3 line 1">WebDSL-Core</a>
  <a href="../WebDSL-Lexical.sdf3#WebDSL-Lexical_7_21" id="WebDSL-Lexical_62_76" title="Defined at ../WebDSL-Lexical.sdf3 line 1">WebDSL-Lexical</a>
  <a href="../WebDSL-DataModel.sdf3#WebDSL-DataModel_7_23" id="WebDSL-DataModel_79_95" title="Defined at ../WebDSL-DataModel.sdf3 line 1">WebDSL-DataModel</a>

<span class="keyword">lexical sorts</span>

  <a href="#SA-Value_1928_1936" id="SA-Value_114_122" title="Referenced at line 77">SA-Value</a> <a href="#SearcherKW_9165_9175" id="SearcherKW_123_133" title="Referenced at line 273">SearcherKW</a> <a href="#SearchFieldId_8513_8526" id="SearchFieldId_134_147" title="Referenced at line 255">SearchFieldId</a> <span id="SEARCHERREF_148_159" title="Not referenced locally, nor via imports">SEARCHERREF</span>

<span class="keyword">context-free sorts</span>

  <a href="#FullTextAnalyzerBody_424_444" id="FullTextAnalyzerBody_183_203" title="Referenced at line 22">FullTextAnalyzerBody</a> <a href="#FullTextAnalyzerBodyDef_839_862" id="FullTextAnalyzerBodyDef_204_227" title="Referenced at line 38">FullTextAnalyzerBodyDef</a> <a href="#CharFilter_931_941" id="CharFilter_228_238" title="Referenced at line 42">CharFilter</a> <a href="#Tokenizer_949_958" id="Tokenizer_239_248" title="Referenced at line 43">Tokenizer</a>
  <a href="#TokenFilter_965_976" id="TokenFilter_251_262" title="Referenced at line 44">TokenFilter</a> <a href="#AnalyzerArgument_1319_1335" id="AnalyzerArgument_263_279" title="Referenced at line 58">AnalyzerArgument</a> <a href="#OptDefaultAnalyzer_381_399" id="OptDefaultAnalyzer_280_298" title="Referenced at line 21">OptDefaultAnalyzer</a> <a href="#OptAnalyzerArguments_11070_11090" id="OptAnalyzerArguments_299_319" title="Referenced at line 362">OptAnalyzerArguments</a>

<span class="keyword">context-free syntax</span>

  <span id="Definition_344_354" title="Not referenced locally, nor via imports">Definition</span>.<span class="cons_Constructor"><span id="FullTextAnalyzer_355_371" title="Not referenced locally, nor via imports">FullTextAnalyzer</span></span> = &lt;
    &lt;<a href="#OptDefaultAnalyzer_280_298" id="OptDefaultAnalyzer_381_399" title="Defined at line 16, 26, 27, 28">OptDefaultAnalyzer</a>&gt; <span class="cons_String">analyzer</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_411_413" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#FullTextAnalyzerBody_183_203" id="FullTextAnalyzerBody_424_444" title="Defined at line 15, 30, 33">FullTextAnalyzerBody</a>&gt;
    <span class="cons_String">}</span>
  &gt;

  <a href="#OptDefaultAnalyzer_381_399" id="OptDefaultAnalyzer_459_477" title="Referenced at line 21">OptDefaultAnalyzer</a>.<span class="cons_Constructor"><span id="NonDefaultAnalyzer_478_496" title="Not referenced locally, nor via imports">NonDefaultAnalyzer</span></span>     = &lt;&gt;
  <a href="#OptDefaultAnalyzer_381_399" id="OptDefaultAnalyzer_508_526" title="Referenced at line 21">OptDefaultAnalyzer</a>.<span class="cons_Constructor"><span id="DefaultAnalyzer_527_542" title="Not referenced locally, nor via imports">DefaultAnalyzer</span></span>        = &lt;<span class="cons_String">default</span>&gt;
  <a href="#OptDefaultAnalyzer_381_399" id="OptDefaultAnalyzer_564_582" title="Referenced at line 21">OptDefaultAnalyzer</a>.<span class="cons_Constructor"><span id="DefaultBuiltInAnalyzer_583_605" title="Not referenced locally, nor via imports">DefaultBuiltInAnalyzer</span></span> = &lt;<span class="cons_String">default_builtin_analyzer</span>&gt;

  <a href="#FullTextAnalyzerBody_424_444" id="FullTextAnalyzerBody_638_658" title="Referenced at line 22">FullTextAnalyzerBody</a>.<span class="cons_Constructor"><span id="FullTextAnalyzerBody_659_679" title="Not referenced locally, nor via imports">FullTextAnalyzerBody</span></span> = &lt;
    &lt;<a href="#FullTextAnalyzerBodyDef_204_227" id="FullTextAnalyzerBodyDef_689_712" title="Defined at line 15, 41">FullTextAnalyzerBodyDef</a>&gt;
  &gt;
  <a href="#FullTextAnalyzerBody_424_444" id="FullTextAnalyzerBody_720_740" title="Referenced at line 22">FullTextAnalyzerBody</a>.<span class="cons_Constructor"><span id="DualFullTextAnalyzerBody_741_765" title="Not referenced locally, nor via imports">DualFullTextAnalyzerBody</span></span> = &lt;
    <span class="cons_String">index</span> <span class="cons_String">{</span>
      &lt;<a href="#FullTextAnalyzerBodyDef_204_227" id="FullTextAnalyzerBodyDef_789_812" title="Defined at line 15, 41">FullTextAnalyzerBodyDef</a>&gt;
    <span class="cons_String">}</span>
    <span class="cons_String">query</span> <span class="cons_String">{</span>
      &lt;<a href="#FullTextAnalyzerBodyDef_204_227" id="FullTextAnalyzerBodyDef_839_862" title="Defined at line 15, 41">FullTextAnalyzerBodyDef</a>&gt;
    <span class="cons_String">}</span>&gt;

  <a href="#FullTextAnalyzerBodyDef_839_862" id="FullTextAnalyzerBodyDef_874_897" title="Referenced at line 38">FullTextAnalyzerBodyDef</a>.<span class="cons_Constructor"><span id="FullTextAnalyzerBodyDef_898_921" title="Not referenced locally, nor via imports">FullTextAnalyzerBodyDef</span></span> = &lt;
    &lt;<a href="#CharFilter_228_238" id="CharFilter_931_941" title="Defined at line 15, 47, 361">CharFilter</a>*&gt;
    &lt;<a href="#Tokenizer_239_248" id="Tokenizer_949_958" title="Defined at line 15, 50">Tokenizer</a>&gt;
    &lt;<a href="#TokenFilter_251_262" id="TokenFilter_965_976" title="Defined at line 16, 53, 362">TokenFilter</a>*&gt;
  &gt;

  <a href="#CharFilter_931_941" id="CharFilter_986_996" title="Referenced at line 42">CharFilter</a>.<span class="cons_Constructor"><span id="CharFilter_997_1007" title="Not referenced locally, nor via imports">CharFilter</span></span> = &lt;
    <span class="cons_String">char</span> <span class="cons_String">filter</span> <span class="cons_String">=</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_1031_1033" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; &lt;<a href="#OptAnalyzerArguments_299_319" id="OptAnalyzerArguments_1036_1056" title="Defined at line 16, 57, 58">OptAnalyzerArguments</a>&gt;
  &gt;
  <a href="#Tokenizer_949_958" id="Tokenizer_1064_1073" title="Referenced at line 43">Tokenizer</a>.<span class="cons_Constructor"><span id="Tokenizer_1074_1083" title="Not referenced locally, nor via imports">Tokenizer</span></span> = &lt;
    <span class="cons_String">tokenizer</span> <span class="cons_String">=</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_1105_1107" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; &lt;<a href="#OptAnalyzerArguments_299_319" id="OptAnalyzerArguments_1110_1130" title="Defined at line 16, 57, 58">OptAnalyzerArguments</a>&gt;
  &gt;
  <a href="#TokenFilter_965_976" id="TokenFilter_1138_1149" title="Referenced at line 44">TokenFilter</a>.<span class="cons_Constructor"><span id="TokenFilter_1150_1161" title="Not referenced locally, nor via imports">TokenFilter</span></span> = &lt;
    <span class="cons_String">token</span> <span class="cons_String">filter</span> <span class="cons_String">=</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_1186_1188" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; &lt;<a href="#OptAnalyzerArguments_299_319" id="OptAnalyzerArguments_1191_1211" title="Defined at line 16, 57, 58">OptAnalyzerArguments</a>&gt;
  &gt;

  <a href="#OptAnalyzerArguments_11070_11090" id="OptAnalyzerArguments_1220_1240" title="Referenced at line 362">OptAnalyzerArguments</a>.<span class="cons_Constructor"><span id="OptAnalyzerArgumentsNone_1241_1265" title="Not referenced locally, nor via imports">OptAnalyzerArgumentsNone</span></span> = &lt;&gt;
  <a href="#OptAnalyzerArguments_11070_11090" id="OptAnalyzerArguments_1273_1293" title="Referenced at line 362">OptAnalyzerArguments</a>.<span class="cons_Constructor"><span id="AnalyzerArguments_1294_1311" title="Not referenced locally, nor via imports">AnalyzerArguments</span></span> = &lt;<span class="cons_String">(</span> &lt;{<a href="#AnalyzerArgument_263_279" id="AnalyzerArgument_1319_1335" title="Defined at line 16, 60">AnalyzerArgument</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;

  <a href="#AnalyzerArgument_1319_1335" id="AnalyzerArgument_1349_1365" title="Referenced at line 58">AnalyzerArgument</a>.<span class="cons_Constructor"><span id="AnalyzerArgument_1366_1382" title="Not referenced locally, nor via imports">AnalyzerArgument</span></span> = &lt;&lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_1387_1389" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">=</span> &lt;<a href="../WebDSL-Lexical.sdf3#String_1591_1597" id="String_1394_1400" title="Defined at ../WebDSL-Lexical.sdf3 line 69, 75">String</a>&gt;&gt;

<span class="keyword">context-free sorts</span>

  <a href="#SearchableAnno_1723_1737" id="SearchableAnno_1426_1440" title="Referenced at line 71">SearchableAnno</a> <a href="#SearchNamespaceAnno_1753_1772" id="SearchNamespaceAnno_1441_1460" title="Referenced at line 72">SearchNamespaceAnno</a> <a href="#SA-Argument_1854_1865" id="SA-Argument_1461_1472" title="Referenced at line 75">SA-Argument</a> <a href="#OptSAArguments_1564_1578" id="OptSAArguments_1473_1487" title="Referenced at line 68">OptSAArguments</a> <a href="#SA-Key_1917_1923" id="SA-Key_1488_1494" title="Referenced at line 77">SA-Key</a>

<span class="keyword">context-free syntax</span>

  <a href="#SearchableAnno_1723_1737" id="SearchableAnno_1519_1533" title="Referenced at line 71">SearchableAnno</a>.<span class="cons_Constructor"><span id="SearchableAnno_1534_1548" title="Not referenced locally, nor via imports">SearchableAnno</span></span> = &lt;<span class="cons_String">searchable</span> &lt;<a href="#OptSAArguments_1473_1487" id="OptSAArguments_1564_1578" title="Defined at line 64, 74, 75">OptSAArguments</a>&gt;&gt;
  <a href="#SearchNamespaceAnno_1753_1772" id="SearchNamespaceAnno_1583_1602" title="Referenced at line 72">SearchNamespaceAnno</a>.<span class="cons_Constructor"><span id="SearchNamespaceAnno_1603_1622" title="Not referenced locally, nor via imports">SearchNamespaceAnno</span></span> = &lt;<span class="cons_String">search</span> <span class="cons_String">namespace</span>&gt;
  <span id="Annotation_1646_1656" title="Not referenced locally, nor via imports">Annotation</span>.<span class="cons_Constructor"><span id="SearchableAnnoBoost_1657_1676" title="Not referenced locally, nor via imports">SearchableAnnoBoost</span></span> = &lt;&lt;<a href="#SearchableAnno_1426_1440" id="SearchableAnno_1681_1695" title="Defined at line 64, 68">SearchableAnno</a>&gt; <span class="cons_String">^</span> &lt;<a href="../WebDSL-Lexical.sdf3#Float_915_920" id="Float_1700_1705" title="Defined at ../WebDSL-Lexical.sdf3 line 44, 50, 55">Float</a>&gt;&gt;
  <span id="Annotation_1710_1720" title="Not referenced locally, nor via imports">Annotation</span> = <a href="#SearchableAnno_1426_1440" id="SearchableAnno_1723_1737" title="Defined at line 64, 68">SearchableAnno</a>
  <span id="Annotation_1740_1750" title="Not referenced locally, nor via imports">Annotation</span> = <a href="#SearchNamespaceAnno_1441_1460" id="SearchNamespaceAnno_1753_1772" title="Defined at line 64, 69">SearchNamespaceAnno</a>

  <a href="#OptSAArguments_1564_1578" id="OptSAArguments_1776_1790" title="Referenced at line 68">OptSAArguments</a>.<span class="cons_Constructor"><span id="OptSAArgumentsNone_1791_1809" title="Not referenced locally, nor via imports">OptSAArgumentsNone</span></span> = &lt;&gt;
  <a href="#OptSAArguments_1564_1578" id="OptSAArguments_1817_1831" title="Referenced at line 68">OptSAArguments</a>.<span class="cons_Constructor"><span id="OptSAArguments_1832_1846" title="Not referenced locally, nor via imports">OptSAArguments</span></span> = &lt;<span class="cons_String">(</span> &lt;{<a href="#SA-Argument_1461_1472" id="SA-Argument_1854_1865" title="Defined at line 64, 77, 78, 79, 80, 81">SA-Argument</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;

  <a href="#SA-Argument_1854_1865" id="SA-Argument_1879_1890" title="Referenced at line 75">SA-Argument</a>.<span class="cons_Constructor"><span id="SA-Argument_1891_1902" title="Not referenced locally, nor via imports">SA-Argument</span></span>           = &lt;&lt;<a href="#SA-Key_1488_1494" id="SA-Key_1917_1923" title="Defined at line 64, 83, 84, 85, 86, 87">SA-Key</a>&gt; <span class="cons_String">=</span> &lt;<a href="#SA-Value_114_122" id="SA-Value_1928_1936" title="Defined at line 11, 157, 158, 159">SA-Value</a>&gt;&gt;
  <a href="#SA-Argument_1854_1865" id="SA-Argument_1941_1952" title="Referenced at line 75">SA-Argument</a>.<span class="cons_Constructor"><span id="Autocomplete-Argument_1953_1974" title="Not referenced locally, nor via imports">Autocomplete-Argument</span></span> = &lt;<span class="cons_String">autocomplete</span>&gt;
  <a href="#SA-Argument_1854_1865" id="SA-Argument_1994_2005" title="Referenced at line 75">SA-Argument</a>.<span class="cons_Constructor"><span id="Spellcheck-Argument_2006_2025" title="Not referenced locally, nor via imports">Spellcheck-Argument</span></span>   = &lt;<span class="cons_String">spellcheck</span>&gt;
  <a href="#SA-Argument_1854_1865" id="SA-Argument_2045_2056" title="Referenced at line 75">SA-Argument</a>.<span class="cons_Constructor"><span id="Numeric-Argument_2057_2073" title="Not referenced locally, nor via imports">Numeric-Argument</span></span>      = &lt;<span class="cons_String">numeric</span>&gt;
  <a href="#SA-Argument_1854_1865" id="SA-Argument_2093_2104" title="Referenced at line 75">SA-Argument</a>.<span class="cons_Constructor"><span id="DefaultSF-Argument_2105_2123" title="Not referenced locally, nor via imports">DefaultSF-Argument</span></span>    = &lt;<span class="cons_String">default</span>&gt;

  <a href="#SA-Key_1917_1923" id="SA-Key_2142_2148" title="Referenced at line 77">SA-Key</a>.<span class="cons_Constructor"><span id="SAKeyAnalyzer_2149_2162" title="Not referenced locally, nor via imports">SAKeyAnalyzer</span></span>  = &lt;<span class="cons_String">analyzer</span>&gt;
  <a href="#SA-Key_1917_1923" id="SA-Key_2179_2185" title="Referenced at line 77">SA-Key</a>.<span class="cons_Constructor"><span id="SAKeyName_2186_2195" title="Not referenced locally, nor via imports">SAKeyName</span></span>      = &lt;<span class="cons_String">name</span>&gt;
  <a href="#SA-Key_1917_1923" id="SA-Key_2212_2218" title="Referenced at line 77">SA-Key</a>.<span class="cons_Constructor"><span id="SAKeyBoost_2219_2229" title="Not referenced locally, nor via imports">SAKeyBoost</span></span>     = &lt;<span class="cons_String">boost</span>&gt;
  <a href="#SA-Key_1917_1923" id="SA-Key_2246_2252" title="Referenced at line 77">SA-Key</a>.<span class="cons_Constructor"><span id="SAKeySubclass_2253_2266" title="Not referenced locally, nor via imports">SAKeySubclass</span></span>  = &lt;<span class="cons_String">subclass</span>&gt;
  <a href="#SA-Key_1917_1923" id="SA-Key_2283_2289" title="Referenced at line 77">SA-Key</a>.<span class="cons_Constructor"><span id="SAKeyDepth_2290_2300" title="Not referenced locally, nor via imports">SAKeyDepth</span></span>     = &lt;<span class="cons_String">depth</span>&gt;

<span class="keyword">context-free sorts</span>

  <a href="#SearchMappingContent_10769_10789" id="SearchMappingContent_2338_2358" title="Referenced at line 358">SearchMappingContent</a> <a href="#MappingPart_3234_3245" id="MappingPart_2359_2370" title="Referenced at line 123">MappingPart</a> <a href="#OptDefaultSearchField_3199_3220" id="OptDefaultSearchField_2371_2392" title="Referenced at line 123">OptDefaultSearchField</a> <a href="#SearchMappingAnnoPart_3494_3515" id="SearchMappingAnnoPart_2393_2414" title="Referenced at line 130">SearchMappingAnnoPart</a>

<span class="keyword">context-free syntax</span>

  <span id="Definition_2439_2449" title="Not referenced locally, nor via imports">Definition</span>.<span class="cons_Constructor"><span id="SearchMapping_2450_2463" title="Not referenced locally, nor via imports">SearchMapping</span></span> = &lt;
    <span class="cons_String">search</span> <span class="cons_String">mapping</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_2488_2490" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#SearchMappingContent_2338_2358" id="SearchMappingContent_2501_2521" title="Defined at line 91, 107, 110, 113, 116, 119, 122">SearchMappingContent</a>*&gt;
    <span class="cons_String">}</span>
  &gt;

  <span id="EntityBodyDeclaration_2537_2558" title="Not referenced locally, nor via imports">EntityBodyDeclaration</span>.<span class="cons_Constructor"><span id="SearchMappingEmbedded_2559_2580" title="Not referenced locally, nor via imports">SearchMappingEmbedded</span></span> = &lt;
    <span class="cons_String">search</span> <span class="cons_String">mapping</span> <span class="cons_String">{</span>
      &lt;<a href="#SearchMappingContent_2338_2358" id="SearchMappingContent_2613_2633" title="Defined at line 91, 107, 110, 113, 116, 119, 122">SearchMappingContent</a>*&gt;
    <span class="cons_String">}</span>
  &gt;

  <a href="#SearchMappingContent_10769_10789" id="SearchMappingContent_2649_2669" title="Referenced at line 358">SearchMappingContent</a>.<span class="cons_Constructor"><span id="SearchNamespaceMapping_2670_2692" title="Not referenced locally, nor via imports">SearchNamespaceMapping</span></span> = &lt;
    <span class="cons_String">namespace</span> <span class="cons_String">by</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_2715_2717" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt;
  &gt;
  <a href="#SearchMappingContent_10769_10789" id="SearchMappingContent_2725_2745" title="Referenced at line 358">SearchMappingContent</a>.<span class="cons_Constructor"><span id="SearchNamespaceMappingAlt_2746_2771" title="Not referenced locally, nor via imports">SearchNamespaceMappingAlt</span></span> = &lt;
    <span class="cons_String">namespace</span> <span class="cons_String">by</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_2794_2796" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">;</span>
  &gt;
  <a href="#SearchMappingContent_10769_10789" id="SearchMappingContent_2806_2826" title="Referenced at line 358">SearchMappingContent</a>.<span class="cons_Constructor"><span id="SearchFieldMapping_2827_2845" title="Not referenced locally, nor via imports">SearchFieldMapping</span></span> = &lt;
    &lt;<a href="#OptDefaultSearchField_2371_2392" id="OptDefaultSearchField_2855_2876" title="Defined at line 91, 138, 139">OptDefaultSearchField</a>&gt; &lt;<a href="#SearchMappingId_3944_3959" id="SearchMappingId_2879_2894" title="Defined at line 143, 147, 148, 149, 150, 151, 152, 153, 154, 155">SearchMappingId</a>&gt; &lt;<a href="#MappingPart_2359_2370" id="MappingPart_2897_2908" title="Defined at line 91, 126, 127, 128, 129, 130, 131, 132, 133">MappingPart</a>*&gt;
  &gt;
  <a href="#SearchMappingContent_10769_10789" id="SearchMappingContent_2917_2937" title="Referenced at line 358">SearchMappingContent</a>.<span class="cons_Constructor"><span id="SearchFieldMappingAlt_2938_2959" title="Not referenced locally, nor via imports">SearchFieldMappingAlt</span></span> = &lt;
    &lt;<a href="#OptDefaultSearchField_2371_2392" id="OptDefaultSearchField_2969_2990" title="Defined at line 91, 138, 139">OptDefaultSearchField</a>&gt; &lt;<a href="#SearchMappingId_3944_3959" id="SearchMappingId_2993_3008" title="Defined at line 143, 147, 148, 149, 150, 151, 152, 153, 154, 155">SearchMappingId</a>&gt; &lt;<a href="#MappingPart_2359_2370" id="MappingPart_3011_3022" title="Defined at line 91, 126, 127, 128, 129, 130, 131, 132, 133">MappingPart</a>*&gt; <span class="cons_String">;</span>
  &gt;
  <a href="#SearchMappingContent_10769_10789" id="SearchMappingContent_3033_3053" title="Referenced at line 358">SearchMappingContent</a>.<span class="cons_Constructor"><span id="SearchFieldMappingIndex_3054_3077" title="Not referenced locally, nor via imports">SearchFieldMappingIndex</span></span> = &lt;
    &lt;<a href="#OptDefaultSearchField_2371_2392" id="OptDefaultSearchField_3087_3108" title="Defined at line 91, 138, 139">OptDefaultSearchField</a>&gt; <span class="cons_String">index</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_3117_3119" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; &lt;<a href="#MappingPart_2359_2370" id="MappingPart_3122_3133" title="Defined at line 91, 126, 127, 128, 129, 130, 131, 132, 133">MappingPart</a>*&gt;
  &gt;
  <a href="#SearchMappingContent_10769_10789" id="SearchMappingContent_3142_3162" title="Referenced at line 358">SearchMappingContent</a>.<span class="cons_Constructor"><span id="SearchFieldMappingIndexAlt_3163_3189" title="Not referenced locally, nor via imports">SearchFieldMappingIndexAlt</span></span> = &lt;
    &lt;<a href="#OptDefaultSearchField_2371_2392" id="OptDefaultSearchField_3199_3220" title="Defined at line 91, 138, 139">OptDefaultSearchField</a>&gt; <span class="cons_String">index</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_3229_3231" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; &lt;<a href="#MappingPart_2359_2370" id="MappingPart_3234_3245" title="Defined at line 91, 126, 127, 128, 129, 130, 131, 132, 133">MappingPart</a>*&gt; <span class="cons_String">;</span>
  &gt;

  <a href="#MappingPart_3234_3245" id="MappingPart_3257_3268" title="Referenced at line 123">MappingPart</a>.<span class="cons_Constructor"><span id="FieldName_3269_3278" title="Not referenced locally, nor via imports">FieldName</span></span>         = &lt;<span class="cons_String">as</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_3294_3296" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt;&gt;
  <a href="#MappingPart_3234_3245" id="MappingPart_3301_3312" title="Referenced at line 123">MappingPart</a>.<span class="cons_Constructor"><span id="AnalyzerName_3313_3325" title="Not referenced locally, nor via imports">AnalyzerName</span></span>      = &lt;<span class="cons_String">using</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_3341_3343" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt;&gt;
  <a href="#MappingPart_3234_3245" id="MappingPart_3348_3359" title="Referenced at line 123">MappingPart</a>.<span class="cons_Constructor"><span id="BoostAlt_3360_3368" title="Not referenced locally, nor via imports">BoostAlt</span></span>          = &lt;<span class="cons_String">boosted</span> <span class="cons_String">to</span> &lt;<a href="../WebDSL-Lexical.sdf3#Float_915_920" id="Float_3393_3398" title="Defined at ../WebDSL-Lexical.sdf3 line 44, 50, 55">Float</a>&gt;&gt;
  <a href="#MappingPart_3234_3245" id="MappingPart_3403_3414" title="Referenced at line 123">MappingPart</a>.<span class="cons_Constructor"><span id="TargetEntity_3415_3427" title="Not referenced locally, nor via imports">TargetEntity</span></span>      = &lt;<span class="cons_String">for</span> <span class="cons_String">subclass</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_3450_3452" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt;&gt;
  <a href="#MappingPart_3234_3245" id="MappingPart_3457_3468" title="Referenced at line 123">MappingPart</a>.<span class="cons_Constructor"><span id="SearchMappingAnno_3469_3486" title="Not referenced locally, nor via imports">SearchMappingAnno</span></span> = &lt;<span class="cons_String">(</span> &lt;{<a href="#SearchMappingAnnoPart_2393_2414" id="SearchMappingAnnoPart_3494_3515" title="Defined at line 91, 135, 136">SearchMappingAnnoPart</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;
  <a href="#MappingPart_3234_3245" id="MappingPart_3528_3539" title="Referenced at line 123">MappingPart</a>.<span class="cons_Constructor"><span id="EmbeddedDepth_3540_3553" title="Not referenced locally, nor via imports">EmbeddedDepth</span></span>     = &lt;<span class="cons_String">depth</span> &lt;<a href="../WebDSL-Lexical.sdf3#Int_906_909" id="Int_3568_3571" title="Defined at ../WebDSL-Lexical.sdf3 line 44, 48">Int</a>&gt;&gt;
  <a href="#MappingPart_3234_3245" id="MappingPart_3576_3587" title="Referenced at line 123">MappingPart</a>.<span class="cons_Constructor"><span id="EmbeddedDepthAlt_3588_3604" title="Not referenced locally, nor via imports">EmbeddedDepthAlt</span></span>  = &lt;<span class="cons_String">with</span> <span class="cons_String">depth</span> &lt;<a href="../WebDSL-Lexical.sdf3#Int_906_909" id="Int_3621_3624" title="Defined at ../WebDSL-Lexical.sdf3 line 44, 48">Int</a>&gt;&gt;
  <a href="#MappingPart_3234_3245" id="MappingPart_3629_3640" title="Referenced at line 123">MappingPart</a>.<span class="cons_Constructor"><span id="Boost_3641_3646" title="Not referenced locally, nor via imports">Boost</span></span>             = &lt;<span class="cons_String">^</span> &lt;<a href="../WebDSL-Lexical.sdf3#Float_915_920" id="Float_3665_3670" title="Defined at ../WebDSL-Lexical.sdf3 line 44, 50, 55">Float</a>&gt;&gt;

  <a href="#SearchMappingAnnoPart_3494_3515" id="SearchMappingAnnoPart_3676_3697" title="Referenced at line 130">SearchMappingAnnoPart</a>.<span class="cons_Constructor"><span id="SearchMappingAnnoSpellCheck_3698_3725" title="Not referenced locally, nor via imports">SearchMappingAnnoSpellCheck</span></span>   = &lt;<span class="cons_String">spellcheck</span>&gt;
  <a href="#SearchMappingAnnoPart_3494_3515" id="SearchMappingAnnoPart_3745_3766" title="Referenced at line 130">SearchMappingAnnoPart</a>.<span class="cons_Constructor"><span id="SearchMappingAnnoAutoComplete_3767_3796" title="Not referenced locally, nor via imports">SearchMappingAnnoAutoComplete</span></span> = &lt;<span class="cons_String">autocomplete</span>&gt;

  <a href="#OptDefaultSearchField_3199_3220" id="OptDefaultSearchField_3817_3838" title="Referenced at line 123">OptDefaultSearchField</a>.<span class="cons_Constructor"><span id="OptDefaultSearchFieldNone_3839_3864" title="Not referenced locally, nor via imports">OptDefaultSearchFieldNone</span></span> = &lt;&gt;
  <a href="#OptDefaultSearchField_3199_3220" id="OptDefaultSearchField_3872_3893" title="Referenced at line 123">OptDefaultSearchField</a>.<span class="cons_Constructor"><span id="DefaultSearchField_3894_3912" title="Not referenced locally, nor via imports">DefaultSearchField</span></span>        = &lt;<span class="cons_String">+</span>&gt;

<span class="keyword">lexical sorts</span>

  <a href="#SearchMappingId_2993_3008" id="SearchMappingId_3944_3959" title="Referenced at line 117">SearchMappingId</a>

<span class="keyword">lexical syntax</span>

  <a href="#SearchMappingId_2993_3008" id="SearchMappingId_3979_3994" title="Referenced at line 117">SearchMappingId</a> = <a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_3997_3999" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>
  <a href="#SearchMappingId_2993_3008" id="SearchMappingId_4002_4017" title="Referenced at line 117">SearchMappingId</a> = <span class="cons_Lit">"as"</span> {<span class="keyword">reject</span>}
  <a href="#SearchMappingId_2993_3008" id="SearchMappingId_4036_4051" title="Referenced at line 117">SearchMappingId</a> = <span class="cons_Lit">"using"</span> {<span class="keyword">reject</span>}
  <a href="#SearchMappingId_2993_3008" id="SearchMappingId_4073_4088" title="Referenced at line 117">SearchMappingId</a> = <span class="cons_Lit">"boosted"</span> {<span class="keyword">reject</span>}
  <a href="#SearchMappingId_2993_3008" id="SearchMappingId_4112_4127" title="Referenced at line 117">SearchMappingId</a> = <span class="cons_Lit">"by"</span> {<span class="keyword">reject</span>}
  <a href="#SearchMappingId_2993_3008" id="SearchMappingId_4146_4161" title="Referenced at line 117">SearchMappingId</a> = <span class="cons_Lit">"with"</span> {<span class="keyword">reject</span>}
  <a href="#SearchMappingId_2993_3008" id="SearchMappingId_4182_4197" title="Referenced at line 117">SearchMappingId</a> = <span class="cons_Lit">"index"</span> {<span class="keyword">reject</span>}
  <a href="#SearchMappingId_2993_3008" id="SearchMappingId_4219_4234" title="Referenced at line 117">SearchMappingId</a> = <span class="cons_Lit">"depth"</span> {<span class="keyword">reject</span>}
  <a href="#SearchMappingId_2993_3008" id="SearchMappingId_4256_4271" title="Referenced at line 117">SearchMappingId</a> = <span class="cons_Lit">"for"</span> {<span class="keyword">reject</span>}

  <a href="#SA-Value_1928_1936" id="SA-Value_4292_4300" title="Referenced at line 77">SA-Value</a> = <a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_4303_4305" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>
  <a href="#SA-Value_1928_1936" id="SA-Value_4308_4316" title="Referenced at line 77">SA-Value</a> = <a href="../WebDSL-Lexical.sdf3#Float_915_920" id="Float_4319_4324" title="Defined at ../WebDSL-Lexical.sdf3 line 44, 50, 55">Float</a>
  <a href="#SA-Value_1928_1936" id="SA-Value_4327_4335" title="Referenced at line 77">SA-Value</a> = <a href="../WebDSL-Lexical.sdf3#Int_906_909" id="Int_4338_4341" title="Defined at ../WebDSL-Lexical.sdf3 line 44, 48">Int</a>

<span class="keyword">context-free sorts</span>

  <a href="#SearcherDef_7457_7468" id="SearcherDef_4365_4376" title="Referenced at line 233">SearcherDef</a> <a href="#SearcherPart_5011_5023" id="SearcherPart_4377_4389" title="Referenced at line 173">SearcherPart</a> <a href="#QueryDef_5078_5086" id="QueryDef_4390_4398" title="Referenced at line 175">QueryDef</a> <a href="#Offset_5104_5110" id="Offset_4399_4405" title="Referenced at line 176">Offset</a> <a href="#MaxResults_8718_8728" id="MaxResults_4406_4416" title="Referenced at line 259">MaxResults</a> <a href="#SortBy_5156_5162" id="SortBy_4417_4423" title="Referenced at line 178">SortBy</a> <a href="#ConstraintFilter_5044_5060" id="ConstraintFilter_4424_4440" title="Referenced at line 174">ConstraintFilter</a> <a href="#FacetDef_5180_5188" id="FacetDef_4441_4449" title="Referenced at line 179">FacetDef</a> <a href="#SearchAttributes_5206_5222" id="SearchAttributes_4450_4466" title="Referenced at line 180">SearchAttributes</a>
  <a href="#NamespaceConstraint_8679_8698" id="NamespaceConstraint_4469_4488" title="Referenced at line 258">NamespaceConstraint</a> <a href="#SearchAttribute_5738_5753" id="SearchAttribute_4489_4504" title="Referenced at line 190">SearchAttribute</a> <a href="#FacetExp_5678_5686" id="FacetExp_4505_4513" title="Referenced at line 189">FacetExp</a> <a href="#FilterConstraint_5560_5576" id="FilterConstraint_4514_4530" title="Referenced at line 187">FilterConstraint</a> <a href="#FieldsConstraint_9435_9451" id="FieldsConstraint_4531_4547" title="Referenced at line 281">FieldsConstraint</a> <a href="#QuerySearchField_6396_6412" id="QuerySearchField_4548_4564" title="Referenced at line 209">QuerySearchField</a> <a href="#QueryConstraint_6684_6699" id="QueryConstraint_4565_4580" title="Referenced at line 214">QueryConstraint</a>
  <a href="#QueryBoost_9297_9307" id="QueryBoost_4583_4593" title="Referenced at line 277">QueryBoost</a> <a href="#MatchGroup_6623_6633" id="MatchGroup_4594_4604" title="Referenced at line 213">MatchGroup</a> <a href="#QueryExp_6917_6925" id="QueryExp_4605_4613" title="Referenced at line 219">QueryExp</a> <a href="#Slop_9491_9495" id="Slop_4614_4618" title="Referenced at line 283">Slop</a> <a href="#Range_11526_11531" id="Range_4619_4624" title="Referenced at line 365">Range</a> <a href="#ExpOrWildCard_7151_7164" id="ExpOrWildCard_4625_4638" title="Referenced at line 223">ExpOrWildCard</a> <a href="#RangeOpen_7120_7129" id="RangeOpen_4639_4648" title="Referenced at line 223">RangeOpen</a> <a href="#RangeClose_7167_7177" id="RangeClose_4649_4659" title="Referenced at line 223">RangeClose</a> <a href="#BoolOp_9697_9703" id="BoolOp_4660_4666" title="Referenced at line 294">BoolOp</a> <a href="#QueryTerm_9716_9725" id="QueryTerm_4667_4676" title="Referenced at line 295">QueryTerm</a> <a href="#SortExp_5409_5416" id="SortExp_4677_4684" title="Referenced at line 185">SortExp</a> <a href="#Direction_9550_9559" id="Direction_4685_4694" title="Referenced at line 285">Direction</a>
  <a href="#Highlight_7867_7876" id="Highlight_4697_4706" title="Referenced at line 243">Highlight</a> <a href="#RetrievalExp_9032_9044" id="RetrievalExp_4707_4719" title="Referenced at line 268">RetrievalExp</a> <a href="#SuggestType_8211_8222" id="SuggestType_4720_4731" title="Referenced at line 248">SuggestType</a> <a href="#SearchField_11509_11520" id="SearchField_4732_4743" title="Referenced at line 365">SearchField</a> <a href="#PlainField_8531_8541" id="PlainField_4744_4754" title="Referenced at line 255">PlainField</a> <a href="#SuggestionPart_8225_8239" id="SuggestionPart_4755_4769" title="Referenced at line 248">SuggestionPart</a> <a href="#OptQueryBoost_6477_6490" id="OptQueryBoost_4770_4783" title="Referenced at line 210">OptQueryBoost</a> <a href="#OptBoolOp_6956_6965" id="OptBoolOp_4784_4793" title="Referenced at line 220">OptBoolOp</a>
  <a href="#OptFieldsConstraint_6662_6681" id="OptFieldsConstraint_4796_4815" title="Referenced at line 214">OptFieldsConstraint</a> <a href="#OptSlop_6978_6985" id="OptSlop_4816_4823" title="Referenced at line 220">OptSlop</a> <a href="#OptDirection_7515_7527" id="OptDirection_4824_4836" title="Referenced at line 235">OptDirection</a> <a href="#GroupDef_6870_6878" id="GroupDef_4837_4845" title="Referenced at line 218">GroupDef</a>

<span class="keyword">context-free syntax</span>

  <a href="#Exp_11387_11390" id="Exp_4870_4873" title="Referenced at line 364">Exp</a>.<span class="cons_Constructor"><a href="../WebDSL-Action.sdf3#SearcherDef_8469_8480" id="SearcherDef_4874_4885" title="Referenced at ../WebDSL-Action.sdf3 line 386">SearcherDef</a></span> = <a href="#SearcherDef_4365_4376" id="SearcherDef_4888_4899" title="Defined at line 163, 172, 173">SearcherDef</a>
  <a href="#SearcherDef_7457_7468" id="SearcherDef_4902_4913" title="Referenced at line 233">SearcherDef</a>.<span class="cons_Constructor"><span id="SearcherInit_4914_4926" title="Not referenced locally, nor via imports">SearcherInit</span></span> = &lt;<span class="cons_String">search</span> &lt;<a href="../WebDSL-Lexical.sdf3#SimpleSortLex_3805_3818" id="SimpleSortLex_4938_4951" title="Defined at ../WebDSL-Lexical.sdf3 line 167, 171">SimpleSortLex</a>&gt; &lt;<a href="#SearcherPart_4377_4389" id="SearcherPart_4954_4966" title="Defined at line 163, 174, 175, 176, 177, 178, 179, 180, 181">SearcherPart</a>*&gt;&gt;
  <a href="#SearcherDef_7457_7468" id="SearcherDef_4972_4983" title="Referenced at line 233">SearcherDef</a>.<span class="cons_Constructor"><span id="SearcherRefMod_4984_4998" title="Not referenced locally, nor via imports">SearcherRefMod</span></span> = &lt;<span class="cons_String">~</span> &lt;<a href="#Exp_4870_4873" id="Exp_5005_5008" title="Defined at line 171, 251">Exp</a>&gt; &lt;<a href="#SearcherPart_4377_4389" id="SearcherPart_5011_5023" title="Defined at line 163, 174, 175, 176, 177, 178, 179, 180, 181">SearcherPart</a>+&gt;&gt;
  <a href="#SearcherPart_5011_5023" id="SearcherPart_5029_5041" title="Referenced at line 173">SearcherPart</a> = <a href="#ConstraintFilter_4424_4440" id="ConstraintFilter_5044_5060" title="Defined at line 163, 186, 187">ConstraintFilter</a>
  <a href="#SearcherPart_5011_5023" id="SearcherPart_5063_5075" title="Referenced at line 173">SearcherPart</a> = <a href="#QueryDef_4390_4398" id="QueryDef_5078_5086" title="Defined at line 163, 182">QueryDef</a>
  <a href="#SearcherPart_5011_5023" id="SearcherPart_5089_5101" title="Referenced at line 173">SearcherPart</a> = <a href="#Offset_4399_4405" id="Offset_5104_5110" title="Defined at line 163, 183">Offset</a>
  <a href="#SearcherPart_5011_5023" id="SearcherPart_5113_5125" title="Referenced at line 173">SearcherPart</a> = <a href="#MaxResults_4406_4416" id="MaxResults_5128_5138" title="Defined at line 163, 184">MaxResults</a>
  <a href="#SearcherPart_5011_5023" id="SearcherPart_5141_5153" title="Referenced at line 173">SearcherPart</a> = <a href="#SortBy_4417_4423" id="SortBy_5156_5162" title="Defined at line 163, 185">SortBy</a>
  <a href="#SearcherPart_5011_5023" id="SearcherPart_5165_5177" title="Referenced at line 173">SearcherPart</a> = <a href="#FacetDef_4441_4449" id="FacetDef_5180_5188" title="Defined at line 163, 188, 189">FacetDef</a>
  <a href="#SearcherPart_5011_5023" id="SearcherPart_5191_5203" title="Referenced at line 173">SearcherPart</a> = <a href="#SearchAttributes_4450_4466" id="SearchAttributes_5206_5222" title="Defined at line 163, 190">SearchAttributes</a>
  <a href="#SearcherPart_5011_5023" id="SearcherPart_5225_5237" title="Referenced at line 173">SearcherPart</a> = <a href="#NamespaceConstraint_4469_4488" id="NamespaceConstraint_5240_5259" title="Defined at line 164, 191">NamespaceConstraint</a>
  <a href="#QueryDef_5078_5086" id="QueryDef_5262_5270" title="Referenced at line 175">QueryDef</a>.<span class="cons_Constructor"><span id="QueryDef_5271_5279" title="Not referenced locally, nor via imports">QueryDef</span></span> = &lt;<span class="cons_String">matching</span> &lt;<a href="#MatchGroup_4594_4604" id="MatchGroup_5293_5303" title="Defined at line 165, 213, 214, 215">MatchGroup</a>+&gt;&gt;
  <a href="#Offset_5104_5110" id="Offset_5309_5315" title="Referenced at line 176">Offset</a>.<span class="cons_Constructor"><span id="Start_5316_5321" title="Not referenced locally, nor via imports">Start</span></span> = &lt;<span class="cons_String">offset</span> &lt;<a href="#Exp_4870_4873" id="Exp_5333_5336" title="Defined at line 171, 251">Exp</a>&gt;&gt;
  <a href="#MaxResults_8718_8728" id="MaxResults_5341_5351" title="Referenced at line 259">MaxResults</a>.<span class="cons_Constructor"><span id="MaxResults_5352_5362" title="Not referenced locally, nor via imports">MaxResults</span></span> = &lt;<span class="cons_String">limit</span> &lt;<a href="#Exp_4870_4873" id="Exp_5373_5376" title="Defined at line 171, 251">Exp</a>&gt;&gt;
  <a href="#SortBy_5156_5162" id="SortBy_5381_5387" title="Referenced at line 178">SortBy</a>.<span class="cons_Constructor"><span id="SortBy_5388_5394" title="Not referenced locally, nor via imports">SortBy</span></span> = &lt;<span class="cons_String">order</span> <span class="cons_String">by</span> &lt;{<a href="#SortExp_4677_4684" id="SortExp_5409_5416" title="Defined at line 165, 235">SortExp</a> <span class="cons_Lit">","</span>}+&gt;&gt;
  <a href="#ConstraintFilter_5044_5060" id="ConstraintFilter_5427_5443" title="Referenced at line 174">ConstraintFilter</a>.<span class="cons_Constructor"><span id="ConstraintFilter_5444_5460" title="Not referenced locally, nor via imports">ConstraintFilter</span></span> = &lt;<span class="cons_String">with</span> <span class="cons_String">filter</span> &lt;{<a href="#FilterConstraint_4514_4530" id="FilterConstraint_5478_5494" title="Defined at line 164, 208">FilterConstraint</a> <span class="cons_Lit">","</span>}+&gt;&gt;
  <a href="#ConstraintFilter_5044_5060" id="ConstraintFilter_5505_5521" title="Referenced at line 174">ConstraintFilter</a>.<span class="cons_Constructor"><span id="ConstraintFilterAlt_5522_5541" title="Not referenced locally, nor via imports">ConstraintFilterAlt</span></span> = &lt;<span class="cons_String">with</span> <span class="cons_String">filters</span> &lt;{<a href="#FilterConstraint_4514_4530" id="FilterConstraint_5560_5576" title="Defined at line 164, 208">FilterConstraint</a> <span class="cons_Lit">","</span>}+&gt;&gt;
  <a href="#FacetDef_5180_5188" id="FacetDef_5587_5595" title="Referenced at line 179">FacetDef</a>.<span class="cons_Constructor"><span id="FacetDef_5596_5604" title="Not referenced locally, nor via imports">FacetDef</span></span> = &lt;<span class="cons_String">with</span> <span class="cons_String">facet</span> &lt;{<a href="#FacetExp_4505_4513" id="FacetExp_5621_5629" title="Defined at line 164, 206, 207, 364, 365">FacetExp</a> <span class="cons_Lit">","</span>}+&gt;&gt;
  <a href="#FacetDef_5180_5188" id="FacetDef_5640_5648" title="Referenced at line 179">FacetDef</a>.<span class="cons_Constructor"><span id="FacetDefAlt_5649_5660" title="Not referenced locally, nor via imports">FacetDefAlt</span></span> = &lt;<span class="cons_String">with</span> <span class="cons_String">facets</span> &lt;{<a href="#FacetExp_4505_4513" id="FacetExp_5678_5686" title="Defined at line 164, 206, 207, 364, 365">FacetExp</a> <span class="cons_Lit">","</span>}+&gt;&gt;
  <a href="#SearchAttributes_5206_5222" id="SearchAttributes_5697_5713" title="Referenced at line 180">SearchAttributes</a>.<span class="cons_Constructor"><span id="SearchAttributes_5714_5730" title="Not referenced locally, nor via imports">SearchAttributes</span></span> = &lt;<span class="cons_String">[</span> &lt;{<a href="#SearchAttribute_4489_4504" id="SearchAttribute_5738_5753" title="Defined at line 164, 192, 193, 194, 195">SearchAttribute</a> <span class="cons_Lit">","</span>}+&gt; <span class="cons_String">]</span>&gt;
  <a href="#NamespaceConstraint_8679_8698" id="NamespaceConstraint_5766_5785" title="Referenced at line 258">NamespaceConstraint</a>.<span class="cons_Constructor"><span id="NamespaceConstraint_5786_5805" title="Not referenced locally, nor via imports">NamespaceConstraint</span></span> = &lt;<span class="cons_String">in</span> <span class="cons_String">namespace</span> &lt;<a href="#Exp_4870_4873" id="Exp_5823_5826" title="Defined at line 171, 251">Exp</a>&gt;&gt;
  <a href="#SearchAttribute_5738_5753" id="SearchAttribute_5831_5846" title="Referenced at line 190">SearchAttribute</a>.<span class="cons_Constructor"><span id="NoLucene_5847_5855" title="Not referenced locally, nor via imports">NoLucene</span></span> = &lt;<span class="cons_String">no</span> <span class="cons_String">lucene</span>&gt;
  <a href="#SearchAttribute_5738_5753" id="SearchAttribute_5872_5887" title="Referenced at line 190">SearchAttribute</a>.<span class="cons_Constructor"><span id="Lucene_5888_5894" title="Not referenced locally, nor via imports">Lucene</span></span> = &lt;<span class="cons_String">lucene</span>&gt;
  <a href="#SearchAttribute_5738_5753" id="SearchAttribute_5908_5923" title="Referenced at line 190">SearchAttribute</a>.<span class="cons_Constructor"><span id="DefaultAnd_5924_5934" title="Not referenced locally, nor via imports">DefaultAnd</span></span> = &lt;<span class="cons_String">strict</span> <span class="cons_String">matching</span>&gt;
  <a href="#SearchAttribute_5738_5753" id="SearchAttribute_5957_5972" title="Referenced at line 190">SearchAttribute</a>.<span class="cons_Constructor"><span id="DefaultOr_5973_5982" title="Not referenced locally, nor via imports">DefaultOr</span></span> = &lt;<span class="cons_String">loose</span> <span class="cons_String">matching</span>&gt;

<span class="keyword">lexical syntax</span>

  <span id="VarId_6021_6026" title="Not referenced locally, nor via imports">VarId</span> = <span class="cons_Lit">"nolucene"</span> {<span class="keyword">reject</span>}
  <span id="VarId_6051_6056" title="Not referenced locally, nor via imports">VarId</span> = <span class="cons_Lit">"lucene"</span> {<span class="keyword">reject</span>}
  <span id="VarId_6079_6084" title="Not referenced locally, nor via imports">VarId</span> = <span class="cons_Lit">"strictmatching"</span> {<span class="keyword">reject</span>}
  <span id="VarId_6115_6120" title="Not referenced locally, nor via imports">VarId</span> = <span class="cons_Lit">"loosematching"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free syntax</span>

  <a href="#FacetExp_5678_5686" id="FacetExp_6172_6180" title="Referenced at line 189">FacetExp</a>.<span class="cons_Constructor"><span id="DiscreteFacetDef_6181_6197" title="Not referenced locally, nor via imports">DiscreteFacetDef</span></span> = &lt;&lt;<a href="#SearchField_4732_4743" id="SearchField_6202_6213" title="Defined at line 166, 252, 253">SearchField</a>&gt; <span class="cons_String">(</span> &lt;<a href="#Exp_4870_4873" id="Exp_6218_6221" title="Defined at line 171, 251">Exp</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#FacetExp_5678_5686" id="FacetExp_6228_6236" title="Referenced at line 189">FacetExp</a>.<span class="cons_Constructor"><span id="RangeFacetDef_6237_6250" title="Not referenced locally, nor via imports">RangeFacetDef</span></span> = &lt;&lt;<a href="#SearchField_4732_4743" id="SearchField_6255_6266" title="Defined at line 166, 252, 253">SearchField</a>&gt; <span class="cons_String">(</span> &lt;{<a href="#Range_4619_4624" id="Range_6272_6277" title="Defined at line 165, 222, 223">Range</a> <span class="cons_Lit">","</span>}+&gt; <span class="cons_String">)</span>&gt;
  <a href="#FilterConstraint_5560_5576" id="FilterConstraint_6290_6306" title="Referenced at line 187">FilterConstraint</a>.<span class="cons_Constructor"><span id="FieldFilterConstraint_6307_6328" title="Not referenced locally, nor via imports">FieldFilterConstraint</span></span> = &lt;&lt;<a href="#SearchField_4732_4743" id="SearchField_6333_6344" title="Defined at line 166, 252, 253">SearchField</a>&gt; <span class="cons_String">:</span> &lt;<a href="#Exp_4870_4873" id="Exp_6349_6352" title="Defined at line 171, 251">Exp</a>&gt;&gt;
  <a href="#FieldsConstraint_9435_9451" id="FieldsConstraint_6357_6373" title="Referenced at line 281">FieldsConstraint</a>.<span class="cons_Constructor"><span id="FieldsConstraint_6374_6390" title="Not referenced locally, nor via imports">FieldsConstraint</span></span> = &lt;&lt;{<a href="#QuerySearchField_4548_4564" id="QuerySearchField_6396_6412" title="Defined at line 164, 210">QuerySearchField</a> <span class="cons_Lit">","</span>}+&gt; <span class="cons_String">:</span>&gt;
  <a href="#QuerySearchField_6396_6412" id="QuerySearchField_6425_6441" title="Referenced at line 209">QuerySearchField</a>.<span class="cons_Constructor"><span id="QuerySearchField_6442_6458" title="Not referenced locally, nor via imports">QuerySearchField</span></span> = &lt;&lt;<a href="#SearchField_4732_4743" id="SearchField_6463_6474" title="Defined at line 166, 252, 253">SearchField</a>&gt; &lt;<a href="#OptQueryBoost_4770_4783" id="OptQueryBoost_6477_6490" title="Defined at line 166, 276, 277">OptQueryBoost</a>&gt;&gt;
  <a href="#QueryConstraint_6684_6699" id="QueryConstraint_6495_6510" title="Referenced at line 214">QueryConstraint</a>.<span class="cons_Constructor"><span id="QueryConstraint_6511_6526" title="Not referenced locally, nor via imports">QueryConstraint</span></span> = &lt;&lt;{<a href="#QueryExp_4605_4613" id="QueryExp_6532_6540" title="Defined at line 165, 216, 217, 218">QueryExp</a> <span class="cons_Lit">","</span>}+&gt;&gt;
  <a href="#QueryBoost_9297_9307" id="QueryBoost_6551_6561" title="Referenced at line 277">QueryBoost</a>.<span class="cons_Constructor"><span id="QueryBoost_6562_6572" title="Not referenced locally, nor via imports">QueryBoost</span></span> = &lt;<span class="cons_String">^</span> &lt;<a href="#Exp_4870_4873" id="Exp_6579_6582" title="Defined at line 171, 251">Exp</a>&gt;&gt;
  <a href="#MatchGroup_6623_6633" id="MatchGroup_6587_6597" title="Referenced at line 213">MatchGroup</a>.<span class="cons_Constructor"><span id="Clause_6598_6604" title="Not referenced locally, nor via imports">Clause</span></span> = &lt;&lt;<a href="#OptBoolOp_4784_4793" id="OptBoolOp_6609_6618" title="Defined at line 166, 278, 279">OptBoolOp</a>&gt; <span class="cons_String">(</span> &lt;<a href="#MatchGroup_4594_4604" id="MatchGroup_6623_6633" title="Defined at line 165, 213, 214, 215">MatchGroup</a>+&gt; <span class="cons_String">)</span>&gt;
  <a href="#MatchGroup_6623_6633" id="MatchGroup_6641_6651" title="Referenced at line 213">MatchGroup</a>.<span class="cons_Constructor"><span id="Query_6652_6657" title="Not referenced locally, nor via imports">Query</span></span> = &lt;&lt;<a href="#OptFieldsConstraint_4796_4815" id="OptFieldsConstraint_6662_6681" title="Defined at line 167, 280, 281">OptFieldsConstraint</a>&gt; &lt;<a href="#QueryConstraint_4565_4580" id="QueryConstraint_6684_6699" title="Defined at line 164, 211">QueryConstraint</a>&gt;&gt;
  <a href="#MatchGroup_6623_6633" id="MatchGroup_6704_6714" title="Referenced at line 213">MatchGroup</a>.<span class="cons_Constructor"><span id="MatchAllQuery_6715_6728" title="Not referenced locally, nor via imports">MatchAllQuery</span></span> = &lt;<span class="cons_String">*</span> <span class="cons_String">:</span> <span class="cons_String">*</span>&gt;
  <a href="#QueryExp_6917_6925" id="QueryExp_6741_6749" title="Referenced at line 219">QueryExp</a>.<span class="cons_Constructor"><span id="TermDef_6750_6757" title="Not referenced locally, nor via imports">TermDef</span></span> = &lt;&lt;<a href="#OptBoolOp_4784_4793" id="OptBoolOp_6762_6771" title="Defined at line 166, 278, 279">OptBoolOp</a>&gt; &lt;<a href="#QueryTerm_4667_4676" id="QueryTerm_6774_6783" title="Defined at line 165, 232, 233, 272, 273, 274">QueryTerm</a>&gt; &lt;<a href="#OptSlop_4816_4823" id="OptSlop_6786_6793" title="Defined at line 167, 282, 283">OptSlop</a>&gt;&gt;
  <a href="#QueryExp_6917_6925" id="QueryExp_6798_6806" title="Referenced at line 219">QueryExp</a>.<span class="cons_Constructor"><span id="RangeDef_6807_6815" title="Not referenced locally, nor via imports">RangeDef</span></span> = &lt;&lt;<a href="#OptBoolOp_4784_4793" id="OptBoolOp_6820_6829" title="Defined at line 166, 278, 279">OptBoolOp</a>&gt; &lt;<a href="#Range_4619_4624" id="Range_6832_6837" title="Defined at line 165, 222, 223">Range</a>&gt;&gt;
  <a href="#QueryExp_6917_6925" id="QueryExp_6842_6850" title="Referenced at line 219">QueryExp</a>.<span class="cons_Constructor"><span id="QueryExpGroupDef_6851_6867" title="Not referenced locally, nor via imports">QueryExpGroupDef</span></span> = <a href="#GroupDef_4837_4845" id="GroupDef_6870_6878" title="Defined at line 167, 219, 220">GroupDef</a>
  <a href="#GroupDef_6870_6878" id="GroupDef_6881_6889" title="Referenced at line 218">GroupDef</a>.<span class="cons_Constructor"><span id="GroupDef_6890_6898" title="Not referenced locally, nor via imports">GroupDef</span></span> = &lt;&lt;<a href="#OptBoolOp_4784_4793" id="OptBoolOp_6903_6912" title="Defined at line 166, 278, 279">OptBoolOp</a>&gt; <span class="cons_String">(</span> &lt;<a href="#QueryExp_4605_4613" id="QueryExp_6917_6925" title="Defined at line 165, 216, 217, 218">QueryExp</a>+&gt; <span class="cons_String">)</span> &lt;<a href="#OptSlop_4816_4823" id="OptSlop_6931_6938" title="Defined at line 167, 282, 283">OptSlop</a>&gt;&gt;
  <a href="#GroupDef_6870_6878" id="GroupDef_6943_6951" title="Referenced at line 218">GroupDef</a> = &lt;&lt;<a href="#OptBoolOp_4784_4793" id="OptBoolOp_6956_6965" title="Defined at line 166, 278, 279">OptBoolOp</a>&gt; <span class="cons_String">(</span> &lt;<a href="#Exp_4870_4873" id="Exp_6970_6973" title="Defined at line 171, 251">Exp</a>&gt; <span class="cons_String">)</span> &lt;<a href="#OptSlop_4816_4823" id="OptSlop_6978_6985" title="Defined at line 167, 282, 283">OptSlop</a>&gt;&gt; {<span class="keyword">reject</span>}
  <a href="#Slop_9491_9495" id="Slop_6999_7003" title="Referenced at line 283">Slop</a>.<span class="cons_Constructor"><span id="Slop_7004_7008" title="Not referenced locally, nor via imports">Slop</span></span> = &lt;<span class="cons_String">~</span> &lt;<a href="#Exp_4870_4873" id="Exp_7015_7018" title="Defined at line 171, 251">Exp</a>&gt;&gt;
  <a href="#Range_11526_11531" id="Range_7023_7028" title="Referenced at line 365">Range</a>.<span class="cons_Constructor"><span id="Range_7029_7034" title="Not referenced locally, nor via imports">Range</span></span> = &lt;&lt;<a href="#RangeOpen_4639_4648" id="RangeOpen_7039_7048" title="Defined at line 165, 226, 228">RangeOpen</a>&gt; &lt;<a href="#ExpOrWildCard_4625_4638" id="ExpOrWildCard_7051_7064" title="Defined at line 165, 224, 225">ExpOrWildCard</a>&gt; <span class="cons_String">to</span> &lt;<a href="#ExpOrWildCard_4625_4638" id="ExpOrWildCard_7070_7083" title="Defined at line 165, 224, 225">ExpOrWildCard</a>&gt; &lt;<a href="#RangeClose_4649_4659" id="RangeClose_7086_7096" title="Defined at line 165, 227, 229">RangeClose</a>&gt;&gt;
  <a href="#Range_11526_11531" id="Range_7101_7106" title="Referenced at line 365">Range</a>.<span class="cons_Constructor"><span id="RangeAlt_7107_7115" title="Not referenced locally, nor via imports">RangeAlt</span></span> = &lt;&lt;<a href="#RangeOpen_4639_4648" id="RangeOpen_7120_7129" title="Defined at line 165, 226, 228">RangeOpen</a>&gt; &lt;<a href="#ExpOrWildCard_4625_4638" id="ExpOrWildCard_7132_7145" title="Defined at line 165, 224, 225">ExpOrWildCard</a>&gt; <span class="cons_String">TO</span> &lt;<a href="#ExpOrWildCard_4625_4638" id="ExpOrWildCard_7151_7164" title="Defined at line 165, 224, 225">ExpOrWildCard</a>&gt; &lt;<a href="#RangeClose_4649_4659" id="RangeClose_7167_7177" title="Defined at line 165, 227, 229">RangeClose</a>&gt;&gt;
  <a href="#ExpOrWildCard_7151_7164" id="ExpOrWildCard_7182_7195" title="Referenced at line 223">ExpOrWildCard</a> = <a href="#Exp_4870_4873" id="Exp_7198_7201" title="Defined at line 171, 251">Exp</a>
  <a href="#ExpOrWildCard_7151_7164" id="ExpOrWildCard_7204_7217" title="Referenced at line 223">ExpOrWildCard</a>.<span class="cons_Constructor"><span id="WildCard_7218_7226" title="Not referenced locally, nor via imports">WildCard</span></span> = &lt;<span class="cons_String">*</span>&gt;
  <a href="#RangeOpen_7120_7129" id="RangeOpen_7235_7244" title="Referenced at line 223">RangeOpen</a>.<span class="cons_Constructor"><span id="ExcludingOpen_7245_7258" title="Not referenced locally, nor via imports">ExcludingOpen</span></span> = &lt;<span class="cons_String">{</span>&gt;
  <a href="#RangeClose_7167_7177" id="RangeClose_7267_7277" title="Referenced at line 223">RangeClose</a>.<span class="cons_Constructor"><span id="ExcludingClose_7278_7292" title="Not referenced locally, nor via imports">ExcludingClose</span></span> = &lt;<span class="cons_String">}</span>&gt;
  <a href="#RangeOpen_7120_7129" id="RangeOpen_7301_7310" title="Referenced at line 223">RangeOpen</a>.<span class="cons_Constructor"><span id="IncludingOpen_7311_7324" title="Not referenced locally, nor via imports">IncludingOpen</span></span> = &lt;<span class="cons_String">[</span>&gt;
  <a href="#RangeClose_7167_7177" id="RangeClose_7333_7343" title="Referenced at line 223">RangeClose</a>.<span class="cons_Constructor"><span id="IncludingClose_7344_7358" title="Not referenced locally, nor via imports">IncludingClose</span></span> = &lt;<span class="cons_String">]</span>&gt;
  <a href="#BoolOp_9697_9703" id="BoolOp_7367_7373" title="Referenced at line 294">BoolOp</a>.<span class="cons_Constructor"><span id="Must_7374_7378" title="Not referenced locally, nor via imports">Must</span></span> = &lt;<span class="cons_String">+</span>&gt;
  <a href="#BoolOp_9697_9703" id="BoolOp_7387_7393" title="Referenced at line 294">BoolOp</a>.<span class="cons_Constructor"><span id="MustNot_7394_7401" title="Not referenced locally, nor via imports">MustNot</span></span> = &lt;<span class="cons_String">-</span>&gt;
  <a href="#QueryTerm_9716_9725" id="QueryTerm_7410_7419" title="Referenced at line 295">QueryTerm</a>.<span class="cons_Constructor"><a href="#QueryTermExp_9639_9651" id="QueryTermExp_7420_7432" title="Referenced at line 290">QueryTermExp</a></span> = &lt;&lt;<a href="#Exp_4870_4873" id="Exp_7437_7440" title="Defined at line 171, 251">Exp</a>&gt;&gt;
  <a href="#QueryTerm_9716_9725" id="QueryTerm_7445_7454" title="Referenced at line 295">QueryTerm</a> = <a href="#SearcherDef_4365_4376" id="SearcherDef_7457_7468" title="Defined at line 163, 172, 173">SearcherDef</a> {<span class="keyword">reject</span>}

  <a href="#SortExp_5409_5416" id="SortExp_7481_7488" title="Referenced at line 185">SortExp</a>.<span class="cons_Constructor"><span id="SortDef_7489_7496" title="Not referenced locally, nor via imports">SortDef</span></span> = &lt;&lt;<a href="#SearchField_4732_4743" id="SearchField_7501_7512" title="Defined at line 166, 252, 253">SearchField</a>&gt; &lt;<a href="#OptDirection_4824_4836" id="OptDirection_7515_7527" title="Defined at line 167, 284, 285">OptDirection</a>&gt;&gt;
  <a href="#Direction_9550_9559" id="Direction_7532_7541" title="Referenced at line 285">Direction</a>.<span class="cons_Constructor"><span id="AscendingAbbr_7542_7555" title="Not referenced locally, nor via imports">AscendingAbbr</span></span> = &lt;<span class="cons_String">asc</span>&gt;
  <a href="#Direction_9550_9559" id="Direction_7566_7575" title="Referenced at line 285">Direction</a>.<span class="cons_Constructor"><span id="Ascending_7576_7585" title="Not referenced locally, nor via imports">Ascending</span></span> = &lt;<span class="cons_String">ascending</span>&gt;
  <a href="#Direction_9550_9559" id="Direction_7602_7611" title="Referenced at line 285">Direction</a>.<span class="cons_Constructor"><span id="DescendingAbbr_7612_7626" title="Not referenced locally, nor via imports">DescendingAbbr</span></span> = &lt;<span class="cons_String">desc</span>&gt;
  <a href="#Direction_9550_9559" id="Direction_7638_7647" title="Referenced at line 285">Direction</a>.<span class="cons_Constructor"><span id="Descending_7648_7658" title="Not referenced locally, nor via imports">Descending</span></span> = &lt;<span class="cons_String">descending</span>&gt;
  <a href="#Highlight_7867_7876" id="Highlight_7676_7685" title="Referenced at line 243">Highlight</a>.<span class="cons_Constructor"><span id="NormalHighlight_7686_7701" title="Not referenced locally, nor via imports">NormalHighlight</span></span> = &lt;<span class="cons_String">highlight</span>&gt;
  <a href="#Highlight_7867_7876" id="Highlight_7718_7727" title="Referenced at line 243">Highlight</a>.<span class="cons_Constructor"><span id="HTMLHighlight_7728_7741" title="Not referenced locally, nor via imports">HTMLHighlight</span></span> = &lt;<span class="cons_String">highlightHTML</span>&gt;
  <a href="#RetrievalExp_9032_9044" id="RetrievalExp_7762_7774" title="Referenced at line 268">RetrievalExp</a>.<span class="cons_Constructor"><span id="Highlight_7775_7784" title="Not referenced locally, nor via imports">Highlight</span></span> = &lt;&lt;<a href="#Highlight_4697_4706" id="Highlight_7789_7798" title="Defined at line 166, 240, 241">Highlight</a>&gt; &lt;<a href="#SearchField_4732_4743" id="SearchField_7801_7812" title="Defined at line 166, 252, 253">SearchField</a>&gt; <span class="cons_String">:</span> &lt;<a href="#Exp_4870_4873" id="Exp_7817_7820" title="Defined at line 171, 251">Exp</a>&gt; <span class="cons_String">from</span> &lt;<a href="#Exp_4870_4873" id="Exp_7828_7831" title="Defined at line 171, 251">Exp</a>&gt;&gt;
  <a href="#RetrievalExp_9032_9044" id="RetrievalExp_7836_7848" title="Referenced at line 268">RetrievalExp</a>.<span class="cons_Constructor"><span id="HighlightTags_7849_7862" title="Not referenced locally, nor via imports">HighlightTags</span></span> = &lt;&lt;<a href="#Highlight_4697_4706" id="Highlight_7867_7876" title="Defined at line 166, 240, 241">Highlight</a>&gt; &lt;<a href="#SearchField_4732_4743" id="SearchField_7879_7890" title="Defined at line 166, 252, 253">SearchField</a>&gt; <span class="cons_String">:</span> &lt;<a href="#Exp_4870_4873" id="Exp_7895_7898" title="Defined at line 171, 251">Exp</a>&gt; <span class="cons_String">from</span> &lt;<a href="#Exp_4870_4873" id="Exp_7906_7909" title="Defined at line 171, 251">Exp</a>&gt; <span class="cons_String">with</span> <span class="cons_String">tags</span> <span class="cons_String">(</span> &lt;<a href="#Exp_4870_4873" id="Exp_7924_7927" title="Defined at line 171, 251">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="#Exp_4870_4873" id="Exp_7932_7935" title="Defined at line 171, 251">Exp</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#RetrievalExp_9032_9044" id="RetrievalExp_7942_7954" title="Referenced at line 268">RetrievalExp</a>.<span class="cons_Constructor"><span id="SearchResults_7955_7968" title="Not referenced locally, nor via imports">SearchResults</span></span> = &lt;<span class="cons_String">results</span> <span class="cons_String">from</span> &lt;<a href="#Exp_4870_4873" id="Exp_7986_7989" title="Defined at line 171, 251">Exp</a>&gt;&gt;
  <a href="#RetrievalExp_9032_9044" id="RetrievalExp_7994_8006" title="Referenced at line 268">RetrievalExp</a>.<span class="cons_Constructor"><span id="FacetResults_8007_8019" title="Not referenced locally, nor via imports">FacetResults</span></span> = &lt;&lt;<a href="#SearchField_4732_4743" id="SearchField_8024_8035" title="Defined at line 166, 252, 253">SearchField</a>&gt; <span class="cons_String">facets</span> <span class="cons_String">from</span> &lt;<a href="#Exp_4870_4873" id="Exp_8050_8053" title="Defined at line 171, 251">Exp</a>&gt;&gt;
  <a href="#RetrievalExp_9032_9044" id="RetrievalExp_8058_8070" title="Referenced at line 268">RetrievalExp</a>.<span class="cons_Constructor"><a href="#SearchResultsSize_9045_9062" id="SearchResultsSize_8071_8088" title="Referenced at line 268">SearchResultsSize</a></span> = &lt;<span class="cons_String">count</span> <span class="cons_String">from</span> &lt;<a href="#Exp_4870_4873" id="Exp_8104_8107" title="Defined at line 171, 251">Exp</a>&gt;&gt;
  <a href="#RetrievalExp_9032_9044" id="RetrievalExp_8112_8124" title="Referenced at line 268">RetrievalExp</a>.<span class="cons_Constructor"><span id="SearchTimeString_8125_8141" title="Not referenced locally, nor via imports">SearchTimeString</span></span> = &lt;<span class="cons_String">searchtime</span> <span class="cons_String">from</span> &lt;<a href="#Exp_4870_4873" id="Exp_8162_8165" title="Defined at line 171, 251">Exp</a>&gt;&gt;
  <a href="#RetrievalExp_9032_9044" id="RetrievalExp_8170_8182" title="Referenced at line 268">RetrievalExp</a>.<span class="cons_Constructor"><span id="Suggest_8183_8190" title="Not referenced locally, nor via imports">Suggest</span></span> = &lt;&lt;<a href="../WebDSL-Lexical.sdf3#SimpleSortLex_3805_3818" id="SimpleSortLex_8195_8208" title="Defined at ../WebDSL-Lexical.sdf3 line 167, 171">SimpleSortLex</a>&gt; &lt;<a href="#SuggestType_4720_4731" id="SuggestType_8211_8222" title="Defined at line 166, 249, 250">SuggestType</a>&gt; &lt;<a href="#SuggestionPart_4755_4769" id="SuggestionPart_8225_8239" title="Defined at line 166, 256, 257, 258, 259">SuggestionPart</a>+&gt;&gt;
  <a href="#SuggestType_8211_8222" id="SuggestType_8245_8256" title="Referenced at line 248">SuggestType</a>.<span class="cons_Constructor"><span id="AutoComplete_8257_8269" title="Not referenced locally, nor via imports">AutoComplete</span></span> = &lt;<span class="cons_String">completions</span>&gt;
  <a href="#SuggestType_8211_8222" id="SuggestType_8288_8299" title="Referenced at line 248">SuggestType</a>.<span class="cons_Constructor"><span id="SpellCheck_8300_8310" title="Not referenced locally, nor via imports">SpellCheck</span></span> = &lt;<span class="cons_String">corrections</span>&gt;
  <a href="#Exp_11387_11390" id="Exp_8329_8332" title="Referenced at line 364">Exp</a>.<span class="cons_Constructor"><a href="../WebDSL-Action.sdf3#RetrievalExp_8249_8261" id="RetrievalExp_8333_8345" title="Referenced at ../WebDSL-Action.sdf3 line 374">RetrievalExp</a></span> = <a href="#RetrievalExp_4707_4719" id="RetrievalExp_8348_8360" title="Defined at line 166, 242, 243, 244, 245, 246, 247, 248, 363">RetrievalExp</a>
  <a href="#SearchField_11509_11520" id="SearchField_8363_8374" title="Referenced at line 365">SearchField</a>.<span class="cons_Constructor"><span id="SearchFieldExp_8375_8389" title="Not referenced locally, nor via imports">SearchFieldExp</span></span> = &lt;<span class="cons_String">~</span> &lt;<a href="#Exp_4870_4873" id="Exp_8396_8399" title="Defined at line 171, 251">Exp</a>&gt;&gt;
  <a href="#SearchField_11509_11520" id="SearchField_8404_8415" title="Referenced at line 365">SearchField</a> = <a href="#PlainField_4744_4754" id="PlainField_8418_8428" title="Defined at line 166, 254, 255">PlainField</a>
  <a href="#PlainField_8531_8541" id="PlainField_8431_8441" title="Referenced at line 255">PlainField</a>.<span class="cons_Constructor"><span id="SearchFieldPlainBase_8442_8462" title="Not referenced locally, nor via imports">SearchFieldPlainBase</span></span> = <a href="#SearchFieldId_134_147" id="SearchFieldId_8465_8478" title="Defined at line 11, 299, 300">SearchFieldId</a>
  <a href="#PlainField_8531_8541" id="PlainField_8481_8491" title="Referenced at line 255">PlainField</a>.<span class="cons_Constructor"><span id="SearchFieldPlain_8492_8508" title="Not referenced locally, nor via imports">SearchFieldPlain</span></span> = &lt;&lt;<a href="#SearchFieldId_134_147" id="SearchFieldId_8513_8526" title="Defined at line 11, 299, 300">SearchFieldId</a>&gt; <span class="cons_String">.</span> &lt;<a href="#PlainField_4744_4754" id="PlainField_8531_8541" title="Defined at line 166, 254, 255">PlainField</a>&gt;&gt;
  <a href="#SuggestionPart_8225_8239" id="SuggestionPart_8546_8560" title="Referenced at line 248">SuggestionPart</a>.<span class="cons_Constructor"><span id="Similarity_8561_8571" title="Not referenced locally, nor via imports">Similarity</span></span> = &lt;<span class="cons_String">similarity</span> &lt;<a href="#Exp_4870_4873" id="Exp_8587_8590" title="Defined at line 171, 251">Exp</a>&gt;&gt;
  <a href="#SuggestionPart_8225_8239" id="SuggestionPart_8595_8609" title="Referenced at line 248">SuggestionPart</a>.<span class="cons_Constructor"><span id="SuggestTerm_8610_8621" title="Not referenced locally, nor via imports">SuggestTerm</span></span> = &lt;<span class="cons_String">matching</span> &lt;<a href="#FieldsConstraint_4531_4547" id="FieldsConstraint_8635_8651" title="Defined at line 164, 209">FieldsConstraint</a>&gt; &lt;<a href="#Exp_4870_4873" id="Exp_8654_8657" title="Defined at line 171, 251">Exp</a>&gt;&gt;
  <a href="#SuggestionPart_8225_8239" id="SuggestionPart_8662_8676" title="Referenced at line 248">SuggestionPart</a> = <a href="#NamespaceConstraint_4469_4488" id="NamespaceConstraint_8679_8698" title="Defined at line 164, 191">NamespaceConstraint</a>
  <a href="#SuggestionPart_8225_8239" id="SuggestionPart_8701_8715" title="Referenced at line 248">SuggestionPart</a> = <a href="#MaxResults_4406_4416" id="MaxResults_8718_8728" title="Defined at line 163, 184">MaxResults</a>

<span class="keyword">context-free priorities</span>

  <a href="#RetrievalExp_4707_4719" id="RetrievalExp_8757_8769" title="Defined at line 166, 242, 243, 244, 245, 246, 247, 248, 363">RetrievalExp</a>.<span class="cons_Constructor"><a href="#SearchResultsSize_8071_8088" id="SearchResultsSize_8770_8787" title="Defined at line 246">SearchResultsSize</a></span> &lt;2&gt; .&gt; <a href="#Exp_4870_4873" id="Exp_8795_8798" title="Defined at line 171, 251">Exp</a>.<span class="cons_Constructor"><a href="../WebDSL-Action.sdf3#Eq_5667_5669" id="Eq_8799_8801" title="Defined at ../WebDSL-Action.sdf3 line 281">Eq</a></span>,
  <a href="#RetrievalExp_4707_4719" id="RetrievalExp_8805_8817" title="Defined at line 166, 242, 243, 244, 245, 246, 247, 248, 363">RetrievalExp</a>.<span class="cons_Constructor"><a href="#SearchResultsSize_8071_8088" id="SearchResultsSize_8818_8835" title="Defined at line 246">SearchResultsSize</a></span> &lt;2&gt; .&gt; <a href="#Exp_4870_4873" id="Exp_8843_8846" title="Defined at line 171, 251">Exp</a>.<span class="cons_Constructor"><a href="../WebDSL-Action.sdf3#NotEq_5702_5707" id="NotEq_8847_8852" title="Defined at ../WebDSL-Action.sdf3 line 282">NotEq</a></span>,
  <a href="#RetrievalExp_4707_4719" id="RetrievalExp_8856_8868" title="Defined at line 166, 242, 243, 244, 245, 246, 247, 248, 363">RetrievalExp</a>.<span class="cons_Constructor"><a href="#SearchResultsSize_8071_8088" id="SearchResultsSize_8869_8886" title="Defined at line 246">SearchResultsSize</a></span> &lt;2&gt; .&gt; <a href="#Exp_4870_4873" id="Exp_8894_8897" title="Defined at line 171, 251">Exp</a>.<span class="cons_Constructor"><a href="../WebDSL-Action.sdf3#LargerThan_5740_5750" id="LargerThan_8898_8908" title="Defined at ../WebDSL-Action.sdf3 line 283">LargerThan</a></span>,
  <a href="#RetrievalExp_4707_4719" id="RetrievalExp_8912_8924" title="Defined at line 166, 242, 243, 244, 245, 246, 247, 248, 363">RetrievalExp</a>.<span class="cons_Constructor"><a href="#SearchResultsSize_8071_8088" id="SearchResultsSize_8925_8942" title="Defined at line 246">SearchResultsSize</a></span> &lt;2&gt; .&gt; <a href="#Exp_4870_4873" id="Exp_8950_8953" title="Defined at line 171, 251">Exp</a>.<span class="cons_Constructor"><a href="../WebDSL-Action.sdf3#LargerThanOrEqual_5783_5800" id="LargerThanOrEqual_8954_8971" title="Defined at ../WebDSL-Action.sdf3 line 284">LargerThanOrEqual</a></span>,
  <a href="#RetrievalExp_4707_4719" id="RetrievalExp_8975_8987" title="Defined at line 166, 242, 243, 244, 245, 246, 247, 248, 363">RetrievalExp</a>.<span class="cons_Constructor"><a href="#SearchResultsSize_8071_8088" id="SearchResultsSize_8988_9005" title="Defined at line 246">SearchResultsSize</a></span> &lt;2&gt; .&gt; <a href="#Exp_4870_4873" id="Exp_9013_9016" title="Defined at line 171, 251">Exp</a>.<span class="cons_Constructor"><a href="../WebDSL-Action.sdf3#SmallerThan_5834_5845" id="SmallerThan_9017_9028" title="Defined at ../WebDSL-Action.sdf3 line 285">SmallerThan</a></span>,
  <a href="#RetrievalExp_4707_4719" id="RetrievalExp_9032_9044" title="Defined at line 166, 242, 243, 244, 245, 246, 247, 248, 363">RetrievalExp</a>.<span class="cons_Constructor"><a href="#SearchResultsSize_8071_8088" id="SearchResultsSize_9045_9062" title="Defined at line 246">SearchResultsSize</a></span> &lt;2&gt; .&gt; <a href="#Exp_4870_4873" id="Exp_9070_9073" title="Defined at line 171, 251">Exp</a>.<span class="cons_Constructor"><a href="../WebDSL-Action.sdf3#SmallerThanOrEqual_5878_5896" id="SmallerThanOrEqual_9074_9092" title="Defined at ../WebDSL-Action.sdf3 line 286">SmallerThanOrEqual</a></span>

<span class="keyword">context-free syntax</span>

  <a href="#QueryTerm_9716_9725" id="QueryTerm_9117_9126" title="Referenced at line 295">QueryTerm</a> = <a href="#SearcherKW_123_133" id="SearcherKW_9129_9139" title="Defined at line 11, 302, 303, 304, 305, 306, 307">SearcherKW</a> {<span class="keyword">reject</span>}
  <a href="#QueryTerm_9716_9725" id="QueryTerm_9151_9160" title="Referenced at line 295">QueryTerm</a> = &lt;&lt;<a href="#SearcherKW_123_133" id="SearcherKW_9165_9175" title="Defined at line 11, 302, 303, 304, 305, 306, 307">SearcherKW</a>&gt; <span class="cons_String">(</span> &lt;<a href="#Exp_4870_4873" id="Exp_9180_9183" title="Defined at line 171, 251">Exp</a>&gt; <span class="cons_String">)</span>&gt; {<span class="keyword">reject</span>}
  <a href="#QueryTerm_9716_9725" id="QueryTerm_9199_9208" title="Referenced at line 295">QueryTerm</a> = &lt;<span class="cons_String">[</span> &lt;{<a href="#Exp_4870_4873" id="Exp_9216_9219" title="Defined at line 171, 251">Exp</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">]</span>&gt; {<span class="keyword">reject</span>}

  <a href="#OptQueryBoost_6477_6490" id="OptQueryBoost_9242_9255" title="Referenced at line 210">OptQueryBoost</a>.<span class="cons_Constructor"><span id="OptQueryBoostNone_9256_9273" title="Not referenced locally, nor via imports">OptQueryBoostNone</span></span> = &lt;&gt;
  <a href="#OptQueryBoost_6477_6490" id="OptQueryBoost_9281_9294" title="Referenced at line 210">OptQueryBoost</a> = <a href="#QueryBoost_4583_4593" id="QueryBoost_9297_9307" title="Defined at line 165, 212">QueryBoost</a>
  <a href="#OptBoolOp_6956_6965" id="OptBoolOp_9310_9319" title="Referenced at line 220">OptBoolOp</a>.<span class="cons_Constructor"><span id="OptBoolOpNone_9320_9333" title="Not referenced locally, nor via imports">OptBoolOpNone</span></span> = &lt;&gt;
  <a href="#OptBoolOp_6956_6965" id="OptBoolOp_9341_9350" title="Referenced at line 220">OptBoolOp</a> = <a href="#BoolOp_4660_4666" id="BoolOp_9353_9359" title="Defined at line 165, 230, 231">BoolOp</a>
  <a href="#OptFieldsConstraint_6662_6681" id="OptFieldsConstraint_9362_9381" title="Referenced at line 214">OptFieldsConstraint</a>.<span class="cons_Constructor"><span id="OptFieldsConstraintNone_9382_9405" title="Not referenced locally, nor via imports">OptFieldsConstraintNone</span></span> = &lt;&gt;
  <a href="#OptFieldsConstraint_6662_6681" id="OptFieldsConstraint_9413_9432" title="Referenced at line 214">OptFieldsConstraint</a> = <a href="#FieldsConstraint_4531_4547" id="FieldsConstraint_9435_9451" title="Defined at line 164, 209">FieldsConstraint</a>
  <a href="#OptSlop_6978_6985" id="OptSlop_9454_9461" title="Referenced at line 220">OptSlop</a>.<span class="cons_Constructor"><span id="OptSlopNone_9462_9473" title="Not referenced locally, nor via imports">OptSlopNone</span></span> = &lt;&gt;
  <a href="#OptSlop_6978_6985" id="OptSlop_9481_9488" title="Referenced at line 220">OptSlop</a> = <a href="#Slop_4614_4618" id="Slop_9491_9495" title="Defined at line 165, 221">Slop</a>
  <a href="#OptDirection_7515_7527" id="OptDirection_9498_9510" title="Referenced at line 235">OptDirection</a>.<span class="cons_Constructor"><span id="OptDirectionNone_9511_9527" title="Not referenced locally, nor via imports">OptDirectionNone</span></span> = &lt;&gt;
  <a href="#OptDirection_7515_7527" id="OptDirection_9535_9547" title="Referenced at line 235">OptDirection</a> = <a href="#Direction_4685_4694" id="Direction_9550_9559" title="Defined at line 165, 236, 237, 238, 239">Direction</a>

<span class="keyword">context-free priorities</span>

  <a href="#QueryTerm_4667_4676" id="QueryTerm_9588_9597" title="Defined at line 165, 232, 233, 272, 273, 274">QueryTerm</a>.<span class="cons_Constructor"><a href="#QueryTermExp_7420_7432" id="QueryTermExp_9598_9610" title="Defined at line 232">QueryTermExp</a></span> &lt;0&gt; .&gt; <a href="#Exp_4870_4873" id="Exp_9618_9621" title="Defined at line 171, 251">Exp</a>.<span class="cons_Constructor"><a href="../WebDSL-Action.sdf3#Sub_7446_7449" id="Sub_9622_9625" title="Defined at ../WebDSL-Action.sdf3 line 327">Sub</a></span>,
  <a href="#QueryTerm_4667_4676" id="QueryTerm_9629_9638" title="Defined at line 165, 232, 233, 272, 273, 274">QueryTerm</a>.<span class="cons_Constructor"><a href="#QueryTermExp_7420_7432" id="QueryTermExp_9639_9651" title="Defined at line 232">QueryTermExp</a></span> &lt;0&gt; .&gt; <a href="#Exp_4870_4873" id="Exp_9659_9662" title="Defined at line 171, 251">Exp</a>.<span class="cons_Constructor"><a href="../WebDSL-Action.sdf3#Add_7411_7414" id="Add_9663_9666" title="Defined at ../WebDSL-Action.sdf3 line 326">Add</a></span>

<span class="keyword">context-free restrictions</span>

  <a href="#BoolOp_4660_4666" id="BoolOp_9697_9703" title="Defined at line 165, 230, 231">BoolOp</a> -/- [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]
  <a href="#QueryTerm_4667_4676" id="QueryTerm_9716_9725" title="Defined at line 165, 232, 233, 272, 273, 274">QueryTerm</a> -/- [\(]

<span class="keyword">lexical syntax</span>

  <a href="#SearchFieldId_8513_8526" id="SearchFieldId_9754_9767" title="Referenced at line 255">SearchFieldId</a> = <a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_9770_9772" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>
  <a href="#SearchFieldId_8513_8526" id="SearchFieldId_9775_9788" title="Referenced at line 255">SearchFieldId</a> = <span class="cons_Lit">"_id"</span>
  <span id="SEARCHERREF_9799_9810" title="Not referenced locally, nor via imports">SEARCHERREF</span> = <a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_9813_9815" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>
  <a href="#SearcherKW_9165_9175" id="SearcherKW_9818_9828" title="Referenced at line 273">SearcherKW</a> = <span class="cons_Lit">"limit"</span>
  <a href="#SearcherKW_9165_9175" id="SearcherKW_9841_9851" title="Referenced at line 273">SearcherKW</a> = <span class="cons_Lit">"offset"</span>
  <a href="#SearcherKW_9165_9175" id="SearcherKW_9865_9875" title="Referenced at line 273">SearcherKW</a> = <span class="cons_Lit">"with"</span>
  <a href="#SearcherKW_9165_9175" id="SearcherKW_9887_9897" title="Referenced at line 273">SearcherKW</a> = <span class="cons_Lit">"order"</span>
  <a href="#SearcherKW_9165_9175" id="SearcherKW_9910_9920" title="Referenced at line 273">SearcherKW</a> = <span class="cons_Lit">"in"</span>
  <a href="#SearcherKW_9165_9175" id="SearcherKW_9930_9940" title="Referenced at line 273">SearcherKW</a> = <span class="cons_Lit">"matching"</span>

<span class="keyword">lexical restrictions</span>

  <span class="cons_Lit">"as"</span>
  <span class="cons_Lit">"asc"</span>
  <span class="cons_Lit">"ascending"</span>
  <span class="cons_Lit">"analyzer"</span>
  <span class="cons_Lit">"autocomplete"</span>
  <span class="cons_Lit">"boost"</span>
  <span class="cons_Lit">"boosted"</span>
  <span class="cons_Lit">"by"</span> -/- [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]
  <span class="cons_Lit">"desc"</span>
  <span class="cons_Lit">"descending"</span>
  <span class="cons_Lit">"default"</span>
  <span class="cons_Lit">"default_builtin_analyzer"</span>
  <span class="cons_Lit">"depth"</span>
  <span class="cons_Lit">"extend"</span>
  <span class="cons_Lit">"for"</span> -/- [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]
  <span class="cons_Lit">"facet"</span>
  <span class="cons_Lit">"facets"</span>
  <span class="cons_Lit">"from"</span>
  <span class="cons_Lit">"get"</span>
  <span class="cons_Lit">"highlight"</span>
  <span class="cons_Lit">"index"</span>
  <span class="cons_Lit">"limit"</span> -/- [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]
  <span class="cons_Lit">"matching"</span>
  <span class="cons_Lit">"name"</span>
  <span class="cons_Lit">"namespace"</span>
  <span class="cons_Lit">"nolucene"</span>
  <span class="cons_Lit">"on"</span>
  <span class="cons_Lit">"query"</span> -/- [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]
  <span class="cons_Lit">"results"</span>
  <span class="cons_Lit">"search"</span>
  <span class="cons_Lit">"sort"</span>
  <span class="cons_Lit">"spellcheck"</span>
  <span class="cons_Lit">"start"</span>
  <span class="cons_Lit">"subclass"</span> -/- [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]
  <span class="cons_Lit">"using"</span>
  <span class="cons_Lit">"with"</span>
  <span class="cons_Lit">"where"</span> -/- [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]

<span class="keyword">context-free syntax</span>

  <span id="EntityBodyDeclaration_10516_10537" title="Not referenced locally, nor via imports">EntityBodyDeclaration</span>.<span class="cons_Constructor"><span id="SearchMappingEmbeddedDepr_10538_10563" title="Not referenced locally, nor via imports">SearchMappingEmbeddedDepr</span></span> = &lt;
    <span class="cons_String">searchmapping</span> <span class="cons_String">{</span>
      &lt;<a href="#SearchMappingContent_2338_2358" id="SearchMappingContent_10595_10615" title="Defined at line 91, 107, 110, 113, 116, 119, 122">SearchMappingContent</a>*&gt;
    <span class="cons_String">}</span>
  &gt; {<span class="keyword">deprecated</span>("keyword `searchmapping` is replaced with `search mapping`")}
  <span id="Definition_10704_10714" title="Not referenced locally, nor via imports">Definition</span>.<span class="cons_Constructor"><span id="SearchMappingDepr_10715_10732" title="Not referenced locally, nor via imports">SearchMappingDepr</span></span> = &lt;
    <span class="cons_String">searchmapping</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_10756_10758" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#SearchMappingContent_2338_2358" id="SearchMappingContent_10769_10789" title="Defined at line 91, 107, 110, 113, 116, 119, 122">SearchMappingContent</a>*&gt;
    <span class="cons_String">}</span>
  &gt; {<span class="keyword">deprecated</span>("keyword `searchmapping` is replaced with `search mapping`")}
  <a href="#CharFilter_931_941" id="CharFilter_10878_10888" title="Referenced at line 42">CharFilter</a>.<span class="cons_Constructor"><span id="CharFilterDepr_10889_10903" title="Not referenced locally, nor via imports">CharFilterDepr</span></span> = &lt;<span class="cons_String">charfilter</span> <span class="cons_String">=</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_10921_10923" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; &lt;<a href="#OptAnalyzerArguments_299_319" id="OptAnalyzerArguments_10926_10946" title="Defined at line 16, 57, 58">OptAnalyzerArguments</a>&gt;&gt; {<span class="keyword">deprecated</span>("keyword `charfilter` is replaced with `char filter`")}
  <a href="#TokenFilter_965_976" id="TokenFilter_11019_11030" title="Referenced at line 44">TokenFilter</a>.<span class="cons_Constructor"><span id="TokenFilterDepr_11031_11046" title="Not referenced locally, nor via imports">TokenFilterDepr</span></span> = &lt;<span class="cons_String">tokenfilter</span> <span class="cons_String">=</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_11065_11067" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; &lt;<a href="#OptAnalyzerArguments_299_319" id="OptAnalyzerArguments_11070_11090" title="Defined at line 16, 57, 58">OptAnalyzerArguments</a>&gt;&gt; {<span class="keyword">deprecated</span>("keyword `tokenfilter` is replaced with `token filter`")}
  <a href="#RetrievalExp_9032_9044" id="RetrievalExp_11165_11177" title="Referenced at line 268">RetrievalExp</a>.<span class="cons_Constructor"><span id="AllFacetResults_11178_11193" title="Not referenced locally, nor via imports">AllFacetResults</span></span> = &lt;<span class="cons_String">all</span> &lt;<a href="#SearchField_4732_4743" id="SearchField_11202_11213" title="Defined at line 166, 252, 253">SearchField</a>&gt; <span class="cons_String">facets</span> <span class="cons_String">from</span> &lt;<a href="#Exp_4870_4873" id="Exp_11228_11231" title="Defined at line 171, 251">Exp</a>&gt;&gt; {<span class="keyword">deprecated</span>("the `all` keyword has been deprecated and has no effect on facet retrieval anymore")}
  <a href="#FacetExp_5678_5686" id="FacetExp_11335_11343" title="Referenced at line 189">FacetExp</a>.<span class="cons_Constructor"><span id="DiscreteFacetDefDepr_11344_11364" title="Not referenced locally, nor via imports">DiscreteFacetDefDepr</span></span> = &lt;<span class="cons_String">(</span> &lt;<a href="#SearchField_4732_4743" id="SearchField_11371_11382" title="Defined at line 166, 252, 253">SearchField</a>&gt; <span class="cons_String">,</span> &lt;<a href="#Exp_4870_4873" id="Exp_11387_11390" title="Defined at line 171, 251">Exp</a>&gt; <span class="cons_String">)</span>&gt; {<span class="keyword">deprecated</span>("the notation: (field,topN) has been replaced with field(topN) ")}
  <a href="#FacetExp_5678_5686" id="FacetExp_11476_11484" title="Referenced at line 189">FacetExp</a>.<span class="cons_Constructor"><span id="RangeFacetDefDepr_11485_11502" title="Not referenced locally, nor via imports">RangeFacetDefDepr</span></span> = &lt;<span class="cons_String">(</span> &lt;<a href="#SearchField_4732_4743" id="SearchField_11509_11520" title="Defined at line 166, 252, 253">SearchField</a>&gt; <span class="cons_String">:</span> &lt;{<a href="#Range_4619_4624" id="Range_11526_11531" title="Defined at line 165, 222, 223">Range</a> <span class="cons_Lit">","</span>}+&gt; <span class="cons_String">)</span>&gt; {<span class="keyword">deprecated</span>("the notation: (field:[min to max], ...) has been replaced with field([min to max], ...) ")}

</code></pre></td></tr></tbody></table></div>