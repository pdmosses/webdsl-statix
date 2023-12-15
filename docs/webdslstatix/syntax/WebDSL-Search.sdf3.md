---
title: WebDSL-Search.sdf3
hide:
  - toc
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
<td class="code"><pre><code><span class="keyword">module</span> <button class="modal-open" id="WebDSL-Search_1_8" title="Multi-file references" data-urls="../WebDSL-Action.sdf3/#WebDSL-Search_7_3 line 7; ../webdsl-statix.sdf3/#WebDSL-Search_22_3 line 22">WebDSL-Search</button>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3/#WebDSL-Action_1_8" id="WebDSL-Action_4_3" title="Defined at ../WebDSL-Action.sdf3 line 1">WebDSL-Action</a>
  <a href="../WebDSL-Core.sdf3/#WebDSL-Core_1_8" id="WebDSL-Core_5_3" title="Defined at ../WebDSL-Core.sdf3 line 1">WebDSL-Core</a>
  <a href="../WebDSL-Lexical.sdf3/#WebDSL-Lexical_1_8" id="WebDSL-Lexical_6_3" title="Defined at ../WebDSL-Lexical.sdf3 line 1">WebDSL-Lexical</a>
  <a href="../WebDSL-DataModel.sdf3/#WebDSL-DataModel_1_8" id="WebDSL-DataModel_7_3" title="Defined at ../WebDSL-DataModel.sdf3 line 1">WebDSL-DataModel</a>

<span class="keyword">lexical sorts</span>

  <a href="#SA-Value_77_52" id="SA-Value_11_3" title="Referenced at line 77">SA-Value</a> <a href="#SearcherKW_272_15" id="SearcherKW_11_12" title="Referenced at line 272, 273">SearcherKW</a> <a href="#SearchFieldId_254_37" id="SearchFieldId_11_23" title="Referenced at line 254, 255">SearchFieldId</a> <span id="SEARCHERREF_11_37" title="Not referenced">SEARCHERREF</span>

<span class="keyword">context-free sorts</span>

  <a href="#FullTextAnalyzerBody_22_8" id="FullTextAnalyzerBody_15_3" title="Referenced at line 22">FullTextAnalyzerBody</a> <a href="#FullTextAnalyzerBodyDef_31_6" id="FullTextAnalyzerBodyDef_15_24" title="Referenced at line 31, 35, 38">FullTextAnalyzerBodyDef</a> <a href="#CharFilter_42_6" id="CharFilter_15_48" title="Referenced at line 42">CharFilter</a> <a href="#Tokenizer_43_6" id="Tokenizer_15_59" title="Referenced at line 43">Tokenizer</a>
  <a href="#TokenFilter_44_6" id="TokenFilter_16_3" title="Referenced at line 44">TokenFilter</a> <a href="#AnalyzerArgument_58_49" id="AnalyzerArgument_16_15" title="Referenced at line 58">AnalyzerArgument</a> <a href="#OptDefaultAnalyzer_21_6" id="OptDefaultAnalyzer_16_32" title="Referenced at line 21">OptDefaultAnalyzer</a> <a href="#OptAnalyzerArguments_48_25" id="OptAnalyzerArguments_16_51" title="Referenced at line 48, 51, 54, 361, 362">OptAnalyzerArguments</a>

<span class="keyword">context-free syntax</span>

  <span id="Definition_20_3" title="Not referenced">Definition</span>.<span class="cons_Constructor"><span id="FullTextAnalyzer_20_14" title="Not referenced">FullTextAnalyzer</span></span> = &lt;
    &lt;<a href="#OptDefaultAnalyzer_16_32" id="OptDefaultAnalyzer_21_6" title="Defined at line 16, 26, 27, 28">OptDefaultAnalyzer</a>&gt; <span class="cons_String">analyzer</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_21_36" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#FullTextAnalyzerBody_15_3" id="FullTextAnalyzerBody_22_8" title="Defined at line 15, 30, 33">FullTextAnalyzerBody</a>&gt;
    <span class="cons_String">}</span>
  &gt;

  <a href="#OptDefaultAnalyzer_21_6" id="OptDefaultAnalyzer_26_3" title="Referenced at line 21">OptDefaultAnalyzer</a>.<span class="cons_Constructor"><span id="NonDefaultAnalyzer_26_22" title="Not referenced">NonDefaultAnalyzer</span></span>     = &lt;&gt;
  <a href="#OptDefaultAnalyzer_21_6" id="OptDefaultAnalyzer_27_3" title="Referenced at line 21">OptDefaultAnalyzer</a>.<span class="cons_Constructor"><span id="DefaultAnalyzer_27_22" title="Not referenced">DefaultAnalyzer</span></span>        = &lt;<span class="cons_String">default</span>&gt;
  <a href="#OptDefaultAnalyzer_21_6" id="OptDefaultAnalyzer_28_3" title="Referenced at line 21">OptDefaultAnalyzer</a>.<span class="cons_Constructor"><span id="DefaultBuiltInAnalyzer_28_22" title="Not referenced">DefaultBuiltInAnalyzer</span></span> = &lt;<span class="cons_String">default_builtin_analyzer</span>&gt;

  <a href="#FullTextAnalyzerBody_22_8" id="FullTextAnalyzerBody_30_3" title="Referenced at line 22">FullTextAnalyzerBody</a>.<span class="cons_Constructor"><span id="FullTextAnalyzerBody_30_24" title="Not referenced">FullTextAnalyzerBody</span></span> = &lt;
    &lt;<a href="#FullTextAnalyzerBodyDef_15_24" id="FullTextAnalyzerBodyDef_31_6" title="Defined at line 15, 41">FullTextAnalyzerBodyDef</a>&gt;
  &gt;
  <a href="#FullTextAnalyzerBody_22_8" id="FullTextAnalyzerBody_33_3" title="Referenced at line 22">FullTextAnalyzerBody</a>.<span class="cons_Constructor"><span id="DualFullTextAnalyzerBody_33_24" title="Not referenced">DualFullTextAnalyzerBody</span></span> = &lt;
    <span class="cons_String">index</span> <span class="cons_String">{</span>
      &lt;<a href="#FullTextAnalyzerBodyDef_15_24" id="FullTextAnalyzerBodyDef_35_8" title="Defined at line 15, 41">FullTextAnalyzerBodyDef</a>&gt;
    <span class="cons_String">}</span>
    <span class="cons_String">query</span> <span class="cons_String">{</span>
      &lt;<a href="#FullTextAnalyzerBodyDef_15_24" id="FullTextAnalyzerBodyDef_38_8" title="Defined at line 15, 41">FullTextAnalyzerBodyDef</a>&gt;
    <span class="cons_String">}</span>&gt;

  <a href="#FullTextAnalyzerBodyDef_31_6" id="FullTextAnalyzerBodyDef_41_3" title="Referenced at line 31, 35, 38">FullTextAnalyzerBodyDef</a>.<span class="cons_Constructor"><span id="FullTextAnalyzerBodyDef_41_27" title="Not referenced">FullTextAnalyzerBodyDef</span></span> = &lt;
    &lt;<a href="#CharFilter_15_48" id="CharFilter_42_6" title="Defined at line 15, 47, 361">CharFilter</a>*&gt;
    &lt;<a href="#Tokenizer_15_59" id="Tokenizer_43_6" title="Defined at line 15, 50">Tokenizer</a>&gt;
    &lt;<a href="#TokenFilter_16_3" id="TokenFilter_44_6" title="Defined at line 16, 53, 362">TokenFilter</a>*&gt;
  &gt;

  <a href="#CharFilter_42_6" id="CharFilter_47_3" title="Referenced at line 42">CharFilter</a>.<span class="cons_Constructor"><span id="CharFilter_47_14" title="Not referenced">CharFilter</span></span> = &lt;
    <span class="cons_String">char</span> <span class="cons_String">filter</span> <span class="cons_String">=</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_48_20" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; &lt;<a href="#OptAnalyzerArguments_16_51" id="OptAnalyzerArguments_48_25" title="Defined at line 16, 57, 58">OptAnalyzerArguments</a>&gt;
  &gt;
  <a href="#Tokenizer_43_6" id="Tokenizer_50_3" title="Referenced at line 43">Tokenizer</a>.<span class="cons_Constructor"><span id="Tokenizer_50_13" title="Not referenced">Tokenizer</span></span> = &lt;
    <span class="cons_String">tokenizer</span> <span class="cons_String">=</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_51_18" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; &lt;<a href="#OptAnalyzerArguments_16_51" id="OptAnalyzerArguments_51_23" title="Defined at line 16, 57, 58">OptAnalyzerArguments</a>&gt;
  &gt;
  <a href="#TokenFilter_44_6" id="TokenFilter_53_3" title="Referenced at line 44">TokenFilter</a>.<span class="cons_Constructor"><span id="TokenFilter_53_15" title="Not referenced">TokenFilter</span></span> = &lt;
    <span class="cons_String">token</span> <span class="cons_String">filter</span> <span class="cons_String">=</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_54_21" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; &lt;<a href="#OptAnalyzerArguments_16_51" id="OptAnalyzerArguments_54_26" title="Defined at line 16, 57, 58">OptAnalyzerArguments</a>&gt;
  &gt;

  <a href="#OptAnalyzerArguments_48_25" id="OptAnalyzerArguments_57_3" title="Referenced at line 48, 51, 54, 361, 362">OptAnalyzerArguments</a>.<span class="cons_Constructor"><span id="OptAnalyzerArgumentsNone_57_24" title="Not referenced">OptAnalyzerArgumentsNone</span></span> = &lt;&gt;
  <a href="#OptAnalyzerArguments_48_25" id="OptAnalyzerArguments_58_3" title="Referenced at line 48, 51, 54, 361, 362">OptAnalyzerArguments</a>.<span class="cons_Constructor"><span id="AnalyzerArguments_58_24" title="Not referenced">AnalyzerArguments</span></span> = &lt;<span class="cons_String">(</span> &lt;{<a href="#AnalyzerArgument_16_15" id="AnalyzerArgument_58_49" title="Defined at line 16, 60">AnalyzerArgument</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;

  <a href="#AnalyzerArgument_58_49" id="AnalyzerArgument_60_3" title="Referenced at line 58">AnalyzerArgument</a>.<span class="cons_Constructor"><span id="AnalyzerArgument_60_20" title="Not referenced">AnalyzerArgument</span></span> = &lt;&lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_60_41" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">=</span> &lt;<a href="../WebDSL-Lexical.sdf3/#String_69_3" id="String_60_48" title="Defined at ../WebDSL-Lexical.sdf3 line 69, 75">String</a>&gt;&gt;

<span class="keyword">context-free sorts</span>

  <a href="#SearchableAnno_70_38" id="SearchableAnno_64_3" title="Referenced at line 70, 71">SearchableAnno</a> <a href="#SearchNamespaceAnno_72_16" id="SearchNamespaceAnno_64_18" title="Referenced at line 72">SearchNamespaceAnno</a> <a href="#SA-Argument_75_40" id="SA-Argument_64_38" title="Referenced at line 75">SA-Argument</a> <a href="#OptSAArguments_68_48" id="OptSAArguments_64_50" title="Referenced at line 68">OptSAArguments</a> <a href="#SA-Key_77_41" id="SA-Key_64_65" title="Referenced at line 77">SA-Key</a>

<span class="keyword">context-free syntax</span>

  <a href="#SearchableAnno_70_38" id="SearchableAnno_68_3" title="Referenced at line 70, 71">SearchableAnno</a>.<span class="cons_Constructor"><span id="SearchableAnno_68_18" title="Not referenced">SearchableAnno</span></span> = &lt;<span class="cons_String">searchable</span> &lt;<a href="#OptSAArguments_64_50" id="OptSAArguments_68_48" title="Defined at line 64, 74, 75">OptSAArguments</a>&gt;&gt;
  <a href="#SearchNamespaceAnno_72_16" id="SearchNamespaceAnno_69_3" title="Referenced at line 72">SearchNamespaceAnno</a>.<span class="cons_Constructor"><span id="SearchNamespaceAnno_69_23" title="Not referenced">SearchNamespaceAnno</span></span> = &lt;<span class="cons_String">search</span> <span class="cons_String">namespace</span>&gt;
  <span id="Annotation_70_3" title="Not referenced">Annotation</span>.<span class="cons_Constructor"><span id="SearchableAnnoBoost_70_14" title="Not referenced">SearchableAnnoBoost</span></span> = &lt;&lt;<a href="#SearchableAnno_64_3" id="SearchableAnno_70_38" title="Defined at line 64, 68">SearchableAnno</a>&gt; <span class="cons_String">^</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Float_44_13" id="Float_70_57" title="Defined at ../WebDSL-Lexical.sdf3 line 44, 50, 55">Float</a>&gt;&gt;
  <span id="Annotation_71_3" title="Not referenced">Annotation</span> = <a href="#SearchableAnno_64_3" id="SearchableAnno_71_16" title="Defined at line 64, 68">SearchableAnno</a>
  <span id="Annotation_72_3" title="Not referenced">Annotation</span> = <a href="#SearchNamespaceAnno_64_18" id="SearchNamespaceAnno_72_16" title="Defined at line 64, 69">SearchNamespaceAnno</a>

  <a href="#OptSAArguments_68_48" id="OptSAArguments_74_3" title="Referenced at line 68">OptSAArguments</a>.<span class="cons_Constructor"><span id="OptSAArgumentsNone_74_18" title="Not referenced">OptSAArgumentsNone</span></span> = &lt;&gt;
  <a href="#OptSAArguments_68_48" id="OptSAArguments_75_3" title="Referenced at line 68">OptSAArguments</a>.<span class="cons_Constructor"><span id="OptSAArguments_75_18" title="Not referenced">OptSAArguments</span></span> = &lt;<span class="cons_String">(</span> &lt;{<a href="#SA-Argument_64_38" id="SA-Argument_75_40" title="Defined at line 64, 77, 78, 79, 80, 81">SA-Argument</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;

  <a href="#SA-Argument_75_40" id="SA-Argument_77_3" title="Referenced at line 75">SA-Argument</a>.<span class="cons_Constructor"><span id="SA-Argument_77_15" title="Not referenced">SA-Argument</span></span>           = &lt;&lt;<a href="#SA-Key_64_65" id="SA-Key_77_41" title="Defined at line 64, 83, 84, 85, 86, 87">SA-Key</a>&gt; <span class="cons_String">=</span> &lt;<a href="#SA-Value_11_3" id="SA-Value_77_52" title="Defined at line 11, 157, 158, 159">SA-Value</a>&gt;&gt;
  <a href="#SA-Argument_75_40" id="SA-Argument_78_3" title="Referenced at line 75">SA-Argument</a>.<span class="cons_Constructor"><span id="Autocomplete-Argument_78_15" title="Not referenced">Autocomplete-Argument</span></span> = &lt;<span class="cons_String">autocomplete</span>&gt;
  <a href="#SA-Argument_75_40" id="SA-Argument_79_3" title="Referenced at line 75">SA-Argument</a>.<span class="cons_Constructor"><span id="Spellcheck-Argument_79_15" title="Not referenced">Spellcheck-Argument</span></span>   = &lt;<span class="cons_String">spellcheck</span>&gt;
  <a href="#SA-Argument_75_40" id="SA-Argument_80_3" title="Referenced at line 75">SA-Argument</a>.<span class="cons_Constructor"><span id="Numeric-Argument_80_15" title="Not referenced">Numeric-Argument</span></span>      = &lt;<span class="cons_String">numeric</span>&gt;
  <a href="#SA-Argument_75_40" id="SA-Argument_81_3" title="Referenced at line 75">SA-Argument</a>.<span class="cons_Constructor"><span id="DefaultSF-Argument_81_15" title="Not referenced">DefaultSF-Argument</span></span>    = &lt;<span class="cons_String">default</span>&gt;

  <a href="#SA-Key_77_41" id="SA-Key_83_3" title="Referenced at line 77">SA-Key</a>.<span class="cons_Constructor"><span id="SAKeyAnalyzer_83_10" title="Not referenced">SAKeyAnalyzer</span></span>  = &lt;<span class="cons_String">analyzer</span>&gt;
  <a href="#SA-Key_77_41" id="SA-Key_84_3" title="Referenced at line 77">SA-Key</a>.<span class="cons_Constructor"><span id="SAKeyName_84_10" title="Not referenced">SAKeyName</span></span>      = &lt;<span class="cons_String">name</span>&gt;
  <a href="#SA-Key_77_41" id="SA-Key_85_3" title="Referenced at line 77">SA-Key</a>.<span class="cons_Constructor"><span id="SAKeyBoost_85_10" title="Not referenced">SAKeyBoost</span></span>     = &lt;<span class="cons_String">boost</span>&gt;
  <a href="#SA-Key_77_41" id="SA-Key_86_3" title="Referenced at line 77">SA-Key</a>.<span class="cons_Constructor"><span id="SAKeySubclass_86_10" title="Not referenced">SAKeySubclass</span></span>  = &lt;<span class="cons_String">subclass</span>&gt;
  <a href="#SA-Key_77_41" id="SA-Key_87_3" title="Referenced at line 77">SA-Key</a>.<span class="cons_Constructor"><span id="SAKeyDepth_87_10" title="Not referenced">SAKeyDepth</span></span>     = &lt;<span class="cons_String">depth</span>&gt;

<span class="keyword">context-free sorts</span>

  <a href="#SearchMappingContent_97_8" id="SearchMappingContent_91_3" title="Referenced at line 97, 103, 353, 358">SearchMappingContent</a> <a href="#MappingPart_114_48" id="MappingPart_91_24" title="Referenced at line 114, 117, 120, 123">MappingPart</a> <a href="#OptDefaultSearchField_114_6" id="OptDefaultSearchField_91_36" title="Referenced at line 114, 117, 120, 123">OptDefaultSearchField</a> <a href="#SearchMappingAnnoPart_130_40" id="SearchMappingAnnoPart_91_58" title="Referenced at line 130">SearchMappingAnnoPart</a>

<span class="keyword">context-free syntax</span>

  <span id="Definition_95_3" title="Not referenced">Definition</span>.<span class="cons_Constructor"><span id="SearchMapping_95_14" title="Not referenced">SearchMapping</span></span> = &lt;
    <span class="cons_String">search</span> <span class="cons_String">mapping</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_96_21" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#SearchMappingContent_91_3" id="SearchMappingContent_97_8" title="Defined at line 91, 107, 110, 113, 116, 119, 122">SearchMappingContent</a>*&gt;
    <span class="cons_String">}</span>
  &gt;

  <span id="EntityBodyDeclaration_101_3" title="Not referenced">EntityBodyDeclaration</span>.<span class="cons_Constructor"><span id="SearchMappingEmbedded_101_25" title="Not referenced">SearchMappingEmbedded</span></span> = &lt;
    <span class="cons_String">search</span> <span class="cons_String">mapping</span> <span class="cons_String">{</span>
      &lt;<a href="#SearchMappingContent_91_3" id="SearchMappingContent_103_8" title="Defined at line 91, 107, 110, 113, 116, 119, 122">SearchMappingContent</a>*&gt;
    <span class="cons_String">}</span>
  &gt;

  <a href="#SearchMappingContent_97_8" id="SearchMappingContent_107_3" title="Referenced at line 97, 103, 353, 358">SearchMappingContent</a>.<span class="cons_Constructor"><span id="SearchNamespaceMapping_107_24" title="Not referenced">SearchNamespaceMapping</span></span> = &lt;
    <span class="cons_String">namespace</span> <span class="cons_String">by</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_108_19" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt;
  &gt;
  <a href="#SearchMappingContent_97_8" id="SearchMappingContent_110_3" title="Referenced at line 97, 103, 353, 358">SearchMappingContent</a>.<span class="cons_Constructor"><span id="SearchNamespaceMappingAlt_110_24" title="Not referenced">SearchNamespaceMappingAlt</span></span> = &lt;
    <span class="cons_String">namespace</span> <span class="cons_String">by</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_111_19" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">;</span>
  &gt;
  <a href="#SearchMappingContent_97_8" id="SearchMappingContent_113_3" title="Referenced at line 97, 103, 353, 358">SearchMappingContent</a>.<span class="cons_Constructor"><span id="SearchFieldMapping_113_24" title="Not referenced">SearchFieldMapping</span></span> = &lt;
    &lt;<a href="#OptDefaultSearchField_91_36" id="OptDefaultSearchField_114_6" title="Defined at line 91, 138, 139">OptDefaultSearchField</a>&gt; &lt;<a href="#SearchMappingId_143_3" id="SearchMappingId_114_30" title="Defined at line 143, 147, 148, 149, 150, 151, 152, 153, 154, 155">SearchMappingId</a>&gt; &lt;<a href="#MappingPart_91_24" id="MappingPart_114_48" title="Defined at line 91, 126, 127, 128, 129, 130, 131, 132, 133">MappingPart</a>*&gt;
  &gt;
  <a href="#SearchMappingContent_97_8" id="SearchMappingContent_116_3" title="Referenced at line 97, 103, 353, 358">SearchMappingContent</a>.<span class="cons_Constructor"><span id="SearchFieldMappingAlt_116_24" title="Not referenced">SearchFieldMappingAlt</span></span> = &lt;
    &lt;<a href="#OptDefaultSearchField_91_36" id="OptDefaultSearchField_117_6" title="Defined at line 91, 138, 139">OptDefaultSearchField</a>&gt; &lt;<a href="#SearchMappingId_143_3" id="SearchMappingId_117_30" title="Defined at line 143, 147, 148, 149, 150, 151, 152, 153, 154, 155">SearchMappingId</a>&gt; &lt;<a href="#MappingPart_91_24" id="MappingPart_117_48" title="Defined at line 91, 126, 127, 128, 129, 130, 131, 132, 133">MappingPart</a>*&gt; <span class="cons_String">;</span>
  &gt;
  <a href="#SearchMappingContent_97_8" id="SearchMappingContent_119_3" title="Referenced at line 97, 103, 353, 358">SearchMappingContent</a>.<span class="cons_Constructor"><span id="SearchFieldMappingIndex_119_24" title="Not referenced">SearchFieldMappingIndex</span></span> = &lt;
    &lt;<a href="#OptDefaultSearchField_91_36" id="OptDefaultSearchField_120_6" title="Defined at line 91, 138, 139">OptDefaultSearchField</a>&gt; <span class="cons_String">index</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_120_36" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; &lt;<a href="#MappingPart_91_24" id="MappingPart_120_41" title="Defined at line 91, 126, 127, 128, 129, 130, 131, 132, 133">MappingPart</a>*&gt;
  &gt;
  <a href="#SearchMappingContent_97_8" id="SearchMappingContent_122_3" title="Referenced at line 97, 103, 353, 358">SearchMappingContent</a>.<span class="cons_Constructor"><span id="SearchFieldMappingIndexAlt_122_24" title="Not referenced">SearchFieldMappingIndexAlt</span></span> = &lt;
    &lt;<a href="#OptDefaultSearchField_91_36" id="OptDefaultSearchField_123_6" title="Defined at line 91, 138, 139">OptDefaultSearchField</a>&gt; <span class="cons_String">index</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_123_36" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; &lt;<a href="#MappingPart_91_24" id="MappingPart_123_41" title="Defined at line 91, 126, 127, 128, 129, 130, 131, 132, 133">MappingPart</a>*&gt; <span class="cons_String">;</span>
  &gt;

  <a href="#MappingPart_114_48" id="MappingPart_126_3" title="Referenced at line 114, 117, 120, 123">MappingPart</a>.<span class="cons_Constructor"><span id="FieldName_126_15" title="Not referenced">FieldName</span></span>         = &lt;<span class="cons_String">as</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_126_40" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt;&gt;
  <a href="#MappingPart_114_48" id="MappingPart_127_3" title="Referenced at line 114, 117, 120, 123">MappingPart</a>.<span class="cons_Constructor"><span id="AnalyzerName_127_15" title="Not referenced">AnalyzerName</span></span>      = &lt;<span class="cons_String">using</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_127_43" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt;&gt;
  <a href="#MappingPart_114_48" id="MappingPart_128_3" title="Referenced at line 114, 117, 120, 123">MappingPart</a>.<span class="cons_Constructor"><span id="BoostAlt_128_15" title="Not referenced">BoostAlt</span></span>          = &lt;<span class="cons_String">boosted</span> <span class="cons_String">to</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Float_44_13" id="Float_128_48" title="Defined at ../WebDSL-Lexical.sdf3 line 44, 50, 55">Float</a>&gt;&gt;
  <a href="#MappingPart_114_48" id="MappingPart_129_3" title="Referenced at line 114, 117, 120, 123">MappingPart</a>.<span class="cons_Constructor"><span id="TargetEntity_129_15" title="Not referenced">TargetEntity</span></span>      = &lt;<span class="cons_String">for</span> <span class="cons_String">subclass</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_129_50" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt;&gt;
  <a href="#MappingPart_114_48" id="MappingPart_130_3" title="Referenced at line 114, 117, 120, 123">MappingPart</a>.<span class="cons_Constructor"><span id="SearchMappingAnno_130_15" title="Not referenced">SearchMappingAnno</span></span> = &lt;<span class="cons_String">(</span> &lt;{<a href="#SearchMappingAnnoPart_91_58" id="SearchMappingAnnoPart_130_40" title="Defined at line 91, 135, 136">SearchMappingAnnoPart</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;
  <a href="#MappingPart_114_48" id="MappingPart_131_3" title="Referenced at line 114, 117, 120, 123">MappingPart</a>.<span class="cons_Constructor"><span id="EmbeddedDepth_131_15" title="Not referenced">EmbeddedDepth</span></span>     = &lt;<span class="cons_String">depth</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Int_44_4" id="Int_131_43" title="Defined at ../WebDSL-Lexical.sdf3 line 44, 48">Int</a>&gt;&gt;
  <a href="#MappingPart_114_48" id="MappingPart_132_3" title="Referenced at line 114, 117, 120, 123">MappingPart</a>.<span class="cons_Constructor"><span id="EmbeddedDepthAlt_132_15" title="Not referenced">EmbeddedDepthAlt</span></span>  = &lt;<span class="cons_String">with</span> <span class="cons_String">depth</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Int_44_4" id="Int_132_48" title="Defined at ../WebDSL-Lexical.sdf3 line 44, 48">Int</a>&gt;&gt;
  <a href="#MappingPart_114_48" id="MappingPart_133_3" title="Referenced at line 114, 117, 120, 123">MappingPart</a>.<span class="cons_Constructor"><span id="Boost_133_15" title="Not referenced">Boost</span></span>             = &lt;<span class="cons_String">^</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Float_44_13" id="Float_133_39" title="Defined at ../WebDSL-Lexical.sdf3 line 44, 50, 55">Float</a>&gt;&gt;

  <a href="#SearchMappingAnnoPart_130_40" id="SearchMappingAnnoPart_135_3" title="Referenced at line 130">SearchMappingAnnoPart</a>.<span class="cons_Constructor"><span id="SearchMappingAnnoSpellCheck_135_25" title="Not referenced">SearchMappingAnnoSpellCheck</span></span>   = &lt;<span class="cons_String">spellcheck</span>&gt;
  <a href="#SearchMappingAnnoPart_130_40" id="SearchMappingAnnoPart_136_3" title="Referenced at line 130">SearchMappingAnnoPart</a>.<span class="cons_Constructor"><span id="SearchMappingAnnoAutoComplete_136_25" title="Not referenced">SearchMappingAnnoAutoComplete</span></span> = &lt;<span class="cons_String">autocomplete</span>&gt;

  <a href="#OptDefaultSearchField_114_6" id="OptDefaultSearchField_138_3" title="Referenced at line 114, 117, 120, 123">OptDefaultSearchField</a>.<span class="cons_Constructor"><span id="OptDefaultSearchFieldNone_138_25" title="Not referenced">OptDefaultSearchFieldNone</span></span> = &lt;&gt;
  <a href="#OptDefaultSearchField_114_6" id="OptDefaultSearchField_139_3" title="Referenced at line 114, 117, 120, 123">OptDefaultSearchField</a>.<span class="cons_Constructor"><span id="DefaultSearchField_139_25" title="Not referenced">DefaultSearchField</span></span>        = &lt;<span class="cons_String">+</span>&gt;

<span class="keyword">lexical sorts</span>

  <a href="#SearchMappingId_114_30" id="SearchMappingId_143_3" title="Referenced at line 114, 117">SearchMappingId</a>

<span class="keyword">lexical syntax</span>

  <a href="#SearchMappingId_114_30" id="SearchMappingId_147_3" title="Referenced at line 114, 117">SearchMappingId</a> = <a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_147_21" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>
  <a href="#SearchMappingId_114_30" id="SearchMappingId_148_3" title="Referenced at line 114, 117">SearchMappingId</a> = <span class="cons_Lit">"as"</span> {<span class="keyword">reject</span>}
  <a href="#SearchMappingId_114_30" id="SearchMappingId_149_3" title="Referenced at line 114, 117">SearchMappingId</a> = <span class="cons_Lit">"using"</span> {<span class="keyword">reject</span>}
  <a href="#SearchMappingId_114_30" id="SearchMappingId_150_3" title="Referenced at line 114, 117">SearchMappingId</a> = <span class="cons_Lit">"boosted"</span> {<span class="keyword">reject</span>}
  <a href="#SearchMappingId_114_30" id="SearchMappingId_151_3" title="Referenced at line 114, 117">SearchMappingId</a> = <span class="cons_Lit">"by"</span> {<span class="keyword">reject</span>}
  <a href="#SearchMappingId_114_30" id="SearchMappingId_152_3" title="Referenced at line 114, 117">SearchMappingId</a> = <span class="cons_Lit">"with"</span> {<span class="keyword">reject</span>}
  <a href="#SearchMappingId_114_30" id="SearchMappingId_153_3" title="Referenced at line 114, 117">SearchMappingId</a> = <span class="cons_Lit">"index"</span> {<span class="keyword">reject</span>}
  <a href="#SearchMappingId_114_30" id="SearchMappingId_154_3" title="Referenced at line 114, 117">SearchMappingId</a> = <span class="cons_Lit">"depth"</span> {<span class="keyword">reject</span>}
  <a href="#SearchMappingId_114_30" id="SearchMappingId_155_3" title="Referenced at line 114, 117">SearchMappingId</a> = <span class="cons_Lit">"for"</span> {<span class="keyword">reject</span>}

  <a href="#SA-Value_77_52" id="SA-Value_157_3" title="Referenced at line 77">SA-Value</a> = <a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_157_14" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>
  <a href="#SA-Value_77_52" id="SA-Value_158_3" title="Referenced at line 77">SA-Value</a> = <a href="../WebDSL-Lexical.sdf3/#Float_44_13" id="Float_158_14" title="Defined at ../WebDSL-Lexical.sdf3 line 44, 50, 55">Float</a>
  <a href="#SA-Value_77_52" id="SA-Value_159_3" title="Referenced at line 77">SA-Value</a> = <a href="../WebDSL-Lexical.sdf3/#Int_44_4" id="Int_159_14" title="Defined at ../WebDSL-Lexical.sdf3 line 44, 48">Int</a>

<span class="keyword">context-free sorts</span>

  <a href="#SearcherDef_171_21" id="SearcherDef_163_3" title="Referenced at line 171, 233">SearcherDef</a> <a href="#SearcherPart_172_55" id="SearcherPart_163_15" title="Referenced at line 172, 173">SearcherPart</a> <a href="#QueryDef_175_18" id="QueryDef_163_28" title="Referenced at line 175">QueryDef</a> <a href="#Offset_176_18" id="Offset_163_37" title="Referenced at line 176">Offset</a> <a href="#MaxResults_177_18" id="MaxResults_163_44" title="Referenced at line 177, 259">MaxResults</a> <a href="#SortBy_178_18" id="SortBy_163_55" title="Referenced at line 178">SortBy</a> <a href="#ConstraintFilter_174_18" id="ConstraintFilter_163_62" title="Referenced at line 174">ConstraintFilter</a> <a href="#FacetDef_179_18" id="FacetDef_163_79" title="Referenced at line 179">FacetDef</a> <a href="#SearchAttributes_180_18" id="SearchAttributes_163_88" title="Referenced at line 180">SearchAttributes</a>
  <a href="#NamespaceConstraint_181_18" id="NamespaceConstraint_164_3" title="Referenced at line 181, 258">NamespaceConstraint</a> <a href="#SearchAttribute_190_44" id="SearchAttribute_164_23" title="Referenced at line 190">SearchAttribute</a> <a href="#FacetExp_188_37" id="FacetExp_164_39" title="Referenced at line 188, 189">FacetExp</a> <a href="#FilterConstraint_186_54" id="FilterConstraint_164_48" title="Referenced at line 186, 187">FilterConstraint</a> <a href="#FieldsConstraint_257_43" id="FieldsConstraint_164_65" title="Referenced at line 257, 281">FieldsConstraint</a> <a href="#QuerySearchField_209_42" id="QuerySearchField_164_82" title="Referenced at line 209">QuerySearchField</a> <a href="#QueryConstraint_214_46" id="QueryConstraint_164_99" title="Referenced at line 214">QueryConstraint</a>
  <a href="#QueryBoost_277_19" id="QueryBoost_165_3" title="Referenced at line 277">QueryBoost</a> <a href="#MatchGroup_182_34" id="MatchGroup_165_14" title="Referenced at line 182, 213">MatchGroup</a> <a href="#QueryExp_211_40" id="QueryExp_165_25" title="Referenced at line 211, 219">QueryExp</a> <a href="#Slop_283_13" id="Slop_165_34" title="Referenced at line 283">Slop</a> <a href="#Range_207_47" id="Range_165_39" title="Referenced at line 207, 217, 365">Range</a> <a href="#ExpOrWildCard_222_31" id="ExpOrWildCard_165_45" title="Referenced at line 222, 223">ExpOrWildCard</a> <a href="#RangeOpen_222_19" id="RangeOpen_165_59" title="Referenced at line 222, 223">RangeOpen</a> <a href="#RangeClose_222_66" id="RangeClose_165_69" title="Referenced at line 222, 223">RangeClose</a> <a href="#BoolOp_279_15" id="BoolOp_165_80" title="Referenced at line 279, 294">BoolOp</a> <a href="#QueryTerm_216_36" id="QueryTerm_165_87" title="Referenced at line 216, 289, 290, 295">QueryTerm</a> <a href="#SortExp_185_31" id="SortExp_165_97" title="Referenced at line 185">SortExp</a> <a href="#Direction_285_18" id="Direction_165_105" title="Referenced at line 285">Direction</a>
  <a href="#Highlight_242_30" id="Highlight_166_3" title="Referenced at line 242, 243">Highlight</a> <a href="#RetrievalExp_251_22" id="RetrievalExp_166_13" title="Referenced at line 251, 263, 264, 265, 266, 267, 268">RetrievalExp</a> <a href="#SuggestType_248_44" id="SuggestType_166_26" title="Referenced at line 248">SuggestType</a> <a href="#SearchField_206_33" id="SearchField_166_38" title="Referenced at line 206, 207, 208, 210, 235, 242, 243, 245, 363, 364, 365">SearchField</a> <a href="#PlainField_253_17" id="PlainField_166_50" title="Referenced at line 253, 255">PlainField</a> <a href="#SuggestionPart_248_58" id="SuggestionPart_166_61" title="Referenced at line 248">SuggestionPart</a> <a href="#OptQueryBoost_210_55" id="OptQueryBoost_166_76" title="Referenced at line 210">OptQueryBoost</a> <a href="#OptBoolOp_213_25" id="OptBoolOp_166_90" title="Referenced at line 213, 216, 217, 219, 220">OptBoolOp</a>
  <a href="#OptFieldsConstraint_214_24" id="OptFieldsConstraint_167_3" title="Referenced at line 214">OptFieldsConstraint</a> <a href="#OptSlop_216_48" id="OptSlop_167_23" title="Referenced at line 216, 219, 220">OptSlop</a> <a href="#OptDirection_235_37" id="OptDirection_167_31" title="Referenced at line 235">OptDirection</a> <a href="#GroupDef_218_31" id="GroupDef_167_44" title="Referenced at line 218">GroupDef</a>

<span class="keyword">context-free syntax</span>

  <a href="#Exp_173_36" id="Exp_171_3" title="Referenced at line 173, 183, 184, 191, 206, 208, 212, 220, 221, 224, 232, 242, 243, 244, 245, 246, 247, 252, 256, 257, 263, 264, 265, 266, 267, 268, 273, 274, 289, 290, 363, 364">Exp</a>.<span class="cons_Constructor"><a href="../WebDSL-Action.sdf3/#SearcherDef_386_9" id="SearcherDef_171_7" title="Referenced at ../WebDSL-Action.sdf3 line 386">SearcherDef</a></span> = <a href="#SearcherDef_163_3" id="SearcherDef_171_21" title="Defined at line 163, 172, 173">SearcherDef</a>
  <a href="#SearcherDef_171_21" id="SearcherDef_172_3" title="Referenced at line 171, 233">SearcherDef</a>.<span class="cons_Constructor"><span id="SearcherInit_172_15" title="Not referenced">SearcherInit</span></span> = &lt;<span class="cons_String">search</span> &lt;<a href="../WebDSL-Lexical.sdf3/#SimpleSortLex_167_3" id="SimpleSortLex_172_39" title="Defined at ../WebDSL-Lexical.sdf3 line 167, 171">SimpleSortLex</a>&gt; &lt;<a href="#SearcherPart_163_15" id="SearcherPart_172_55" title="Defined at line 163, 174, 175, 176, 177, 178, 179, 180, 181">SearcherPart</a>*&gt;&gt;
  <a href="#SearcherDef_171_21" id="SearcherDef_173_3" title="Referenced at line 171, 233">SearcherDef</a>.<span class="cons_Constructor"><span id="SearcherRefMod_173_15" title="Not referenced">SearcherRefMod</span></span> = &lt;<span class="cons_String">~</span> &lt;<a href="#Exp_171_3" id="Exp_173_36" title="Defined at line 171, 251">Exp</a>&gt; &lt;<a href="#SearcherPart_163_15" id="SearcherPart_173_42" title="Defined at line 163, 174, 175, 176, 177, 178, 179, 180, 181">SearcherPart</a>+&gt;&gt;
  <a href="#SearcherPart_172_55" id="SearcherPart_174_3" title="Referenced at line 172, 173">SearcherPart</a> = <a href="#ConstraintFilter_163_62" id="ConstraintFilter_174_18" title="Defined at line 163, 186, 187">ConstraintFilter</a>
  <a href="#SearcherPart_172_55" id="SearcherPart_175_3" title="Referenced at line 172, 173">SearcherPart</a> = <a href="#QueryDef_163_28" id="QueryDef_175_18" title="Defined at line 163, 182">QueryDef</a>
  <a href="#SearcherPart_172_55" id="SearcherPart_176_3" title="Referenced at line 172, 173">SearcherPart</a> = <a href="#Offset_163_37" id="Offset_176_18" title="Defined at line 163, 183">Offset</a>
  <a href="#SearcherPart_172_55" id="SearcherPart_177_3" title="Referenced at line 172, 173">SearcherPart</a> = <a href="#MaxResults_163_44" id="MaxResults_177_18" title="Defined at line 163, 184">MaxResults</a>
  <a href="#SearcherPart_172_55" id="SearcherPart_178_3" title="Referenced at line 172, 173">SearcherPart</a> = <a href="#SortBy_163_55" id="SortBy_178_18" title="Defined at line 163, 185">SortBy</a>
  <a href="#SearcherPart_172_55" id="SearcherPart_179_3" title="Referenced at line 172, 173">SearcherPart</a> = <a href="#FacetDef_163_79" id="FacetDef_179_18" title="Defined at line 163, 188, 189">FacetDef</a>
  <a href="#SearcherPart_172_55" id="SearcherPart_180_3" title="Referenced at line 172, 173">SearcherPart</a> = <a href="#SearchAttributes_163_88" id="SearchAttributes_180_18" title="Defined at line 163, 190">SearchAttributes</a>
  <a href="#SearcherPart_172_55" id="SearcherPart_181_3" title="Referenced at line 172, 173">SearcherPart</a> = <a href="#NamespaceConstraint_164_3" id="NamespaceConstraint_181_18" title="Defined at line 164, 191">NamespaceConstraint</a>
  <a href="#QueryDef_175_18" id="QueryDef_182_3" title="Referenced at line 175">QueryDef</a>.<span class="cons_Constructor"><span id="QueryDef_182_12" title="Not referenced">QueryDef</span></span> = &lt;<span class="cons_String">matching</span> &lt;<a href="#MatchGroup_165_14" id="MatchGroup_182_34" title="Defined at line 165, 213, 214, 215">MatchGroup</a>+&gt;&gt;
  <a href="#Offset_176_18" id="Offset_183_3" title="Referenced at line 176">Offset</a>.<span class="cons_Constructor"><span id="Start_183_10" title="Not referenced">Start</span></span> = &lt;<span class="cons_String">offset</span> &lt;<a href="#Exp_171_3" id="Exp_183_27" title="Defined at line 171, 251">Exp</a>&gt;&gt;
  <a href="#MaxResults_177_18" id="MaxResults_184_3" title="Referenced at line 177, 259">MaxResults</a>.<span class="cons_Constructor"><span id="MaxResults_184_14" title="Not referenced">MaxResults</span></span> = &lt;<span class="cons_String">limit</span> &lt;<a href="#Exp_171_3" id="Exp_184_35" title="Defined at line 171, 251">Exp</a>&gt;&gt;
  <a href="#SortBy_178_18" id="SortBy_185_3" title="Referenced at line 178">SortBy</a>.<span class="cons_Constructor"><span id="SortBy_185_10" title="Not referenced">SortBy</span></span> = &lt;<span class="cons_String">order</span> <span class="cons_String">by</span> &lt;{<a href="#SortExp_165_97" id="SortExp_185_31" title="Defined at line 165, 235">SortExp</a> <span class="cons_Lit">","</span>}+&gt;&gt;
  <a href="#ConstraintFilter_174_18" id="ConstraintFilter_186_3" title="Referenced at line 174">ConstraintFilter</a>.<span class="cons_Constructor"><span id="ConstraintFilter_186_20" title="Not referenced">ConstraintFilter</span></span> = &lt;<span class="cons_String">with</span> <span class="cons_String">filter</span> &lt;{<a href="#FilterConstraint_164_48" id="FilterConstraint_186_54" title="Defined at line 164, 208">FilterConstraint</a> <span class="cons_Lit">","</span>}+&gt;&gt;
  <a href="#ConstraintFilter_174_18" id="ConstraintFilter_187_3" title="Referenced at line 174">ConstraintFilter</a>.<span class="cons_Constructor"><span id="ConstraintFilterAlt_187_20" title="Not referenced">ConstraintFilterAlt</span></span> = &lt;<span class="cons_String">with</span> <span class="cons_String">filters</span> &lt;{<a href="#FilterConstraint_164_48" id="FilterConstraint_187_58" title="Defined at line 164, 208">FilterConstraint</a> <span class="cons_Lit">","</span>}+&gt;&gt;
  <a href="#FacetDef_179_18" id="FacetDef_188_3" title="Referenced at line 179">FacetDef</a>.<span class="cons_Constructor"><span id="FacetDef_188_12" title="Not referenced">FacetDef</span></span> = &lt;<span class="cons_String">with</span> <span class="cons_String">facet</span> &lt;{<a href="#FacetExp_164_39" id="FacetExp_188_37" title="Defined at line 164, 206, 207, 364, 365">FacetExp</a> <span class="cons_Lit">","</span>}+&gt;&gt;
  <a href="#FacetDef_179_18" id="FacetDef_189_3" title="Referenced at line 179">FacetDef</a>.<span class="cons_Constructor"><span id="FacetDefAlt_189_12" title="Not referenced">FacetDefAlt</span></span> = &lt;<span class="cons_String">with</span> <span class="cons_String">facets</span> &lt;{<a href="#FacetExp_164_39" id="FacetExp_189_41" title="Defined at line 164, 206, 207, 364, 365">FacetExp</a> <span class="cons_Lit">","</span>}+&gt;&gt;
  <a href="#SearchAttributes_180_18" id="SearchAttributes_190_3" title="Referenced at line 180">SearchAttributes</a>.<span class="cons_Constructor"><span id="SearchAttributes_190_20" title="Not referenced">SearchAttributes</span></span> = &lt;<span class="cons_String">[</span> &lt;{<a href="#SearchAttribute_164_23" id="SearchAttribute_190_44" title="Defined at line 164, 192, 193, 194, 195">SearchAttribute</a> <span class="cons_Lit">","</span>}+&gt; <span class="cons_String">]</span>&gt;
  <a href="#NamespaceConstraint_181_18" id="NamespaceConstraint_191_3" title="Referenced at line 181, 258">NamespaceConstraint</a>.<span class="cons_Constructor"><span id="NamespaceConstraint_191_23" title="Not referenced">NamespaceConstraint</span></span> = &lt;<span class="cons_String">in</span> <span class="cons_String">namespace</span> &lt;<a href="#Exp_171_3" id="Exp_191_60" title="Defined at line 171, 251">Exp</a>&gt;&gt;
  <a href="#SearchAttribute_190_44" id="SearchAttribute_192_3" title="Referenced at line 190">SearchAttribute</a>.<span class="cons_Constructor"><span id="NoLucene_192_19" title="Not referenced">NoLucene</span></span> = &lt;<span class="cons_String">no</span> <span class="cons_String">lucene</span>&gt;
  <a href="#SearchAttribute_190_44" id="SearchAttribute_193_3" title="Referenced at line 190">SearchAttribute</a>.<span class="cons_Constructor"><span id="Lucene_193_19" title="Not referenced">Lucene</span></span> = &lt;<span class="cons_String">lucene</span>&gt;
  <a href="#SearchAttribute_190_44" id="SearchAttribute_194_3" title="Referenced at line 190">SearchAttribute</a>.<span class="cons_Constructor"><span id="DefaultAnd_194_19" title="Not referenced">DefaultAnd</span></span> = &lt;<span class="cons_String">strict</span> <span class="cons_String">matching</span>&gt;
  <a href="#SearchAttribute_190_44" id="SearchAttribute_195_3" title="Referenced at line 190">SearchAttribute</a>.<span class="cons_Constructor"><span id="DefaultOr_195_19" title="Not referenced">DefaultOr</span></span> = &lt;<span class="cons_String">loose</span> <span class="cons_String">matching</span>&gt;

<span class="keyword">lexical syntax</span>

  <span id="VarId_199_3" title="Not referenced">VarId</span> = <span class="cons_Lit">"nolucene"</span> {<span class="keyword">reject</span>}
  <span id="VarId_200_3" title="Not referenced">VarId</span> = <span class="cons_Lit">"lucene"</span> {<span class="keyword">reject</span>}
  <span id="VarId_201_3" title="Not referenced">VarId</span> = <span class="cons_Lit">"strictmatching"</span> {<span class="keyword">reject</span>}
  <span id="VarId_202_3" title="Not referenced">VarId</span> = <span class="cons_Lit">"loosematching"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free syntax</span>

  <a href="#FacetExp_188_37" id="FacetExp_206_3" title="Referenced at line 188, 189">FacetExp</a>.<span class="cons_Constructor"><span id="DiscreteFacetDef_206_12" title="Not referenced">DiscreteFacetDef</span></span> = &lt;&lt;<a href="#SearchField_166_38" id="SearchField_206_33" title="Defined at line 166, 252, 253">SearchField</a>&gt; <span class="cons_String">(</span> &lt;<a href="#Exp_171_3" id="Exp_206_49" title="Defined at line 171, 251">Exp</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#FacetExp_188_37" id="FacetExp_207_3" title="Referenced at line 188, 189">FacetExp</a>.<span class="cons_Constructor"><span id="RangeFacetDef_207_12" title="Not referenced">RangeFacetDef</span></span> = &lt;&lt;<a href="#SearchField_166_38" id="SearchField_207_30" title="Defined at line 166, 252, 253">SearchField</a>&gt; <span class="cons_String">(</span> &lt;{<a href="#Range_165_39" id="Range_207_47" title="Defined at line 165, 222, 223">Range</a> <span class="cons_Lit">","</span>}+&gt; <span class="cons_String">)</span>&gt;
  <a href="#FilterConstraint_186_54" id="FilterConstraint_208_3" title="Referenced at line 186, 187">FilterConstraint</a>.<span class="cons_Constructor"><span id="FieldFilterConstraint_208_20" title="Not referenced">FieldFilterConstraint</span></span> = &lt;&lt;<a href="#SearchField_166_38" id="SearchField_208_46" title="Defined at line 166, 252, 253">SearchField</a>&gt; <span class="cons_String">:</span> &lt;<a href="#Exp_171_3" id="Exp_208_62" title="Defined at line 171, 251">Exp</a>&gt;&gt;
  <a href="#FieldsConstraint_257_43" id="FieldsConstraint_209_3" title="Referenced at line 257, 281">FieldsConstraint</a>.<span class="cons_Constructor"><span id="FieldsConstraint_209_20" title="Not referenced">FieldsConstraint</span></span> = &lt;&lt;{<a href="#QuerySearchField_164_82" id="QuerySearchField_209_42" title="Defined at line 164, 210">QuerySearchField</a> <span class="cons_Lit">","</span>}+&gt; <span class="cons_String">:</span>&gt;
  <a href="#QuerySearchField_209_42" id="QuerySearchField_210_3" title="Referenced at line 209">QuerySearchField</a>.<span class="cons_Constructor"><span id="QuerySearchField_210_20" title="Not referenced">QuerySearchField</span></span> = &lt;&lt;<a href="#SearchField_166_38" id="SearchField_210_41" title="Defined at line 166, 252, 253">SearchField</a>&gt; &lt;<a href="#OptQueryBoost_166_76" id="OptQueryBoost_210_55" title="Defined at line 166, 276, 277">OptQueryBoost</a>&gt;&gt;
  <a href="#QueryConstraint_214_46" id="QueryConstraint_211_3" title="Referenced at line 214">QueryConstraint</a>.<span class="cons_Constructor"><span id="QueryConstraint_211_19" title="Not referenced">QueryConstraint</span></span> = &lt;&lt;{<a href="#QueryExp_165_25" id="QueryExp_211_40" title="Defined at line 165, 216, 217, 218">QueryExp</a> <span class="cons_Lit">","</span>}+&gt;&gt;
  <a href="#QueryBoost_277_19" id="QueryBoost_212_3" title="Referenced at line 277">QueryBoost</a>.<span class="cons_Constructor"><span id="QueryBoost_212_14" title="Not referenced">QueryBoost</span></span> = &lt;<span class="cons_String">^</span> &lt;<a href="#Exp_171_3" id="Exp_212_31" title="Defined at line 171, 251">Exp</a>&gt;&gt;
  <a href="#MatchGroup_182_34" id="MatchGroup_213_3" title="Referenced at line 182, 213">MatchGroup</a>.<span class="cons_Constructor"><span id="Clause_213_14" title="Not referenced">Clause</span></span> = &lt;&lt;<a href="#OptBoolOp_166_90" id="OptBoolOp_213_25" title="Defined at line 166, 278, 279">OptBoolOp</a>&gt; <span class="cons_String">(</span> &lt;<a href="#MatchGroup_165_14" id="MatchGroup_213_39" title="Defined at line 165, 213, 214, 215">MatchGroup</a>+&gt; <span class="cons_String">)</span>&gt;
  <a href="#MatchGroup_182_34" id="MatchGroup_214_3" title="Referenced at line 182, 213">MatchGroup</a>.<span class="cons_Constructor"><span id="Query_214_14" title="Not referenced">Query</span></span> = &lt;&lt;<a href="#OptFieldsConstraint_167_3" id="OptFieldsConstraint_214_24" title="Defined at line 167, 280, 281">OptFieldsConstraint</a>&gt; &lt;<a href="#QueryConstraint_164_99" id="QueryConstraint_214_46" title="Defined at line 164, 211">QueryConstraint</a>&gt;&gt;
  <a href="#MatchGroup_182_34" id="MatchGroup_215_3" title="Referenced at line 182, 213">MatchGroup</a>.<span class="cons_Constructor"><span id="MatchAllQuery_215_14" title="Not referenced">MatchAllQuery</span></span> = &lt;<span class="cons_String">*</span> <span class="cons_String">:</span> <span class="cons_String">*</span>&gt;
  <a href="#QueryExp_211_40" id="QueryExp_216_3" title="Referenced at line 211, 219">QueryExp</a>.<span class="cons_Constructor"><span id="TermDef_216_12" title="Not referenced">TermDef</span></span> = &lt;&lt;<a href="#OptBoolOp_166_90" id="OptBoolOp_216_24" title="Defined at line 166, 278, 279">OptBoolOp</a>&gt; &lt;<a href="#QueryTerm_165_87" id="QueryTerm_216_36" title="Defined at line 165, 232, 233, 272, 273, 274">QueryTerm</a>&gt; &lt;<a href="#OptSlop_167_23" id="OptSlop_216_48" title="Defined at line 167, 282, 283">OptSlop</a>&gt;&gt;
  <a href="#QueryExp_211_40" id="QueryExp_217_3" title="Referenced at line 211, 219">QueryExp</a>.<span class="cons_Constructor"><span id="RangeDef_217_12" title="Not referenced">RangeDef</span></span> = &lt;&lt;<a href="#OptBoolOp_166_90" id="OptBoolOp_217_25" title="Defined at line 166, 278, 279">OptBoolOp</a>&gt; &lt;<a href="#Range_165_39" id="Range_217_37" title="Defined at line 165, 222, 223">Range</a>&gt;&gt;
  <a href="#QueryExp_211_40" id="QueryExp_218_3" title="Referenced at line 211, 219">QueryExp</a>.<span class="cons_Constructor"><span id="QueryExpGroupDef_218_12" title="Not referenced">QueryExpGroupDef</span></span> = <a href="#GroupDef_167_44" id="GroupDef_218_31" title="Defined at line 167, 219, 220">GroupDef</a>
  <a href="#GroupDef_218_31" id="GroupDef_219_3" title="Referenced at line 218">GroupDef</a>.<span class="cons_Constructor"><span id="GroupDef_219_12" title="Not referenced">GroupDef</span></span> = &lt;&lt;<a href="#OptBoolOp_166_90" id="OptBoolOp_219_25" title="Defined at line 166, 278, 279">OptBoolOp</a>&gt; <span class="cons_String">(</span> &lt;<a href="#QueryExp_165_25" id="QueryExp_219_39" title="Defined at line 165, 216, 217, 218">QueryExp</a>+&gt; <span class="cons_String">)</span> &lt;<a href="#OptSlop_167_23" id="OptSlop_219_53" title="Defined at line 167, 282, 283">OptSlop</a>&gt;&gt;
  <a href="#GroupDef_218_31" id="GroupDef_220_3" title="Referenced at line 218">GroupDef</a> = &lt;&lt;<a href="#OptBoolOp_166_90" id="OptBoolOp_220_16" title="Defined at line 166, 278, 279">OptBoolOp</a>&gt; <span class="cons_String">(</span> &lt;<a href="#Exp_171_3" id="Exp_220_30" title="Defined at line 171, 251">Exp</a>&gt; <span class="cons_String">)</span> &lt;<a href="#OptSlop_167_23" id="OptSlop_220_38" title="Defined at line 167, 282, 283">OptSlop</a>&gt;&gt; {<span class="keyword">reject</span>}
  <a href="#Slop_283_13" id="Slop_221_3" title="Referenced at line 283">Slop</a>.<span class="cons_Constructor"><span id="Slop_221_8" title="Not referenced">Slop</span></span> = &lt;<span class="cons_String">~</span> &lt;<a href="#Exp_171_3" id="Exp_221_19" title="Defined at line 171, 251">Exp</a>&gt;&gt;
  <a href="#Range_207_47" id="Range_222_3" title="Referenced at line 207, 217, 365">Range</a>.<span class="cons_Constructor"><span id="Range_222_9" title="Not referenced">Range</span></span> = &lt;&lt;<a href="#RangeOpen_165_59" id="RangeOpen_222_19" title="Defined at line 165, 226, 228">RangeOpen</a>&gt; &lt;<a href="#ExpOrWildCard_165_45" id="ExpOrWildCard_222_31" title="Defined at line 165, 224, 225">ExpOrWildCard</a>&gt; <span class="cons_String">to</span> &lt;<a href="#ExpOrWildCard_165_45" id="ExpOrWildCard_222_50" title="Defined at line 165, 224, 225">ExpOrWildCard</a>&gt; &lt;<a href="#RangeClose_165_69" id="RangeClose_222_66" title="Defined at line 165, 227, 229">RangeClose</a>&gt;&gt;
  <a href="#Range_207_47" id="Range_223_3" title="Referenced at line 207, 217, 365">Range</a>.<span class="cons_Constructor"><span id="RangeAlt_223_9" title="Not referenced">RangeAlt</span></span> = &lt;&lt;<a href="#RangeOpen_165_59" id="RangeOpen_223_22" title="Defined at line 165, 226, 228">RangeOpen</a>&gt; &lt;<a href="#ExpOrWildCard_165_45" id="ExpOrWildCard_223_34" title="Defined at line 165, 224, 225">ExpOrWildCard</a>&gt; <span class="cons_String">TO</span> &lt;<a href="#ExpOrWildCard_165_45" id="ExpOrWildCard_223_53" title="Defined at line 165, 224, 225">ExpOrWildCard</a>&gt; &lt;<a href="#RangeClose_165_69" id="RangeClose_223_69" title="Defined at line 165, 227, 229">RangeClose</a>&gt;&gt;
  <a href="#ExpOrWildCard_222_31" id="ExpOrWildCard_224_3" title="Referenced at line 222, 223">ExpOrWildCard</a> = <a href="#Exp_171_3" id="Exp_224_19" title="Defined at line 171, 251">Exp</a>
  <a href="#ExpOrWildCard_222_31" id="ExpOrWildCard_225_3" title="Referenced at line 222, 223">ExpOrWildCard</a>.<span class="cons_Constructor"><span id="WildCard_225_17" title="Not referenced">WildCard</span></span> = &lt;<span class="cons_String">*</span>&gt;
  <a href="#RangeOpen_222_19" id="RangeOpen_226_3" title="Referenced at line 222, 223">RangeOpen</a>.<span class="cons_Constructor"><span id="ExcludingOpen_226_13" title="Not referenced">ExcludingOpen</span></span> = &lt;<span class="cons_String">{</span>&gt;
  <a href="#RangeClose_222_66" id="RangeClose_227_3" title="Referenced at line 222, 223">RangeClose</a>.<span class="cons_Constructor"><span id="ExcludingClose_227_14" title="Not referenced">ExcludingClose</span></span> = &lt;<span class="cons_String">}</span>&gt;
  <a href="#RangeOpen_222_19" id="RangeOpen_228_3" title="Referenced at line 222, 223">RangeOpen</a>.<span class="cons_Constructor"><span id="IncludingOpen_228_13" title="Not referenced">IncludingOpen</span></span> = &lt;<span class="cons_String">[</span>&gt;
  <a href="#RangeClose_222_66" id="RangeClose_229_3" title="Referenced at line 222, 223">RangeClose</a>.<span class="cons_Constructor"><span id="IncludingClose_229_14" title="Not referenced">IncludingClose</span></span> = &lt;<span class="cons_String">]</span>&gt;
  <a href="#BoolOp_279_15" id="BoolOp_230_3" title="Referenced at line 279, 294">BoolOp</a>.<span class="cons_Constructor"><span id="Must_230_10" title="Not referenced">Must</span></span> = &lt;<span class="cons_String">+</span>&gt;
  <a href="#BoolOp_279_15" id="BoolOp_231_3" title="Referenced at line 279, 294">BoolOp</a>.<span class="cons_Constructor"><span id="MustNot_231_10" title="Not referenced">MustNot</span></span> = &lt;<span class="cons_String">-</span>&gt;
  <a href="#QueryTerm_216_36" id="QueryTerm_232_3" title="Referenced at line 216, 289, 290, 295">QueryTerm</a>.<span class="cons_Constructor"><a href="#QueryTermExp_289_13" id="QueryTermExp_232_13" title="Referenced at line 289, 290">QueryTermExp</a></span> = &lt;&lt;<a href="#Exp_171_3" id="Exp_232_30" title="Defined at line 171, 251">Exp</a>&gt;&gt;
  <a href="#QueryTerm_216_36" id="QueryTerm_233_3" title="Referenced at line 216, 289, 290, 295">QueryTerm</a> = <a href="#SearcherDef_163_3" id="SearcherDef_233_15" title="Defined at line 163, 172, 173">SearcherDef</a> {<span class="keyword">reject</span>}

  <a href="#SortExp_185_31" id="SortExp_235_3" title="Referenced at line 185">SortExp</a>.<span class="cons_Constructor"><span id="SortDef_235_11" title="Not referenced">SortDef</span></span> = &lt;&lt;<a href="#SearchField_166_38" id="SearchField_235_23" title="Defined at line 166, 252, 253">SearchField</a>&gt; &lt;<a href="#OptDirection_167_31" id="OptDirection_235_37" title="Defined at line 167, 284, 285">OptDirection</a>&gt;&gt;
  <a href="#Direction_285_18" id="Direction_236_3" title="Referenced at line 285">Direction</a>.<span class="cons_Constructor"><span id="AscendingAbbr_236_13" title="Not referenced">AscendingAbbr</span></span> = &lt;<span class="cons_String">asc</span>&gt;
  <a href="#Direction_285_18" id="Direction_237_3" title="Referenced at line 285">Direction</a>.<span class="cons_Constructor"><span id="Ascending_237_13" title="Not referenced">Ascending</span></span> = &lt;<span class="cons_String">ascending</span>&gt;
  <a href="#Direction_285_18" id="Direction_238_3" title="Referenced at line 285">Direction</a>.<span class="cons_Constructor"><span id="DescendingAbbr_238_13" title="Not referenced">DescendingAbbr</span></span> = &lt;<span class="cons_String">desc</span>&gt;
  <a href="#Direction_285_18" id="Direction_239_3" title="Referenced at line 285">Direction</a>.<span class="cons_Constructor"><span id="Descending_239_13" title="Not referenced">Descending</span></span> = &lt;<span class="cons_String">descending</span>&gt;
  <a href="#Highlight_242_30" id="Highlight_240_3" title="Referenced at line 242, 243">Highlight</a>.<span class="cons_Constructor"><span id="NormalHighlight_240_13" title="Not referenced">NormalHighlight</span></span> = &lt;<span class="cons_String">highlight</span>&gt;
  <a href="#Highlight_242_30" id="Highlight_241_3" title="Referenced at line 242, 243">Highlight</a>.<span class="cons_Constructor"><span id="HTMLHighlight_241_13" title="Not referenced">HTMLHighlight</span></span> = &lt;<span class="cons_String">highlightHTML</span>&gt;
  <a href="#RetrievalExp_251_22" id="RetrievalExp_242_3" title="Referenced at line 251, 263, 264, 265, 266, 267, 268">RetrievalExp</a>.<span class="cons_Constructor"><span id="Highlight_242_16" title="Not referenced">Highlight</span></span> = &lt;&lt;<a href="#Highlight_166_3" id="Highlight_242_30" title="Defined at line 166, 240, 241">Highlight</a>&gt; &lt;<a href="#SearchField_166_38" id="SearchField_242_42" title="Defined at line 166, 252, 253">SearchField</a>&gt; <span class="cons_String">:</span> &lt;<a href="#Exp_171_3" id="Exp_242_58" title="Defined at line 171, 251">Exp</a>&gt; <span class="cons_String">from</span> &lt;<a href="#Exp_171_3" id="Exp_242_69" title="Defined at line 171, 251">Exp</a>&gt;&gt;
  <a href="#RetrievalExp_251_22" id="RetrievalExp_243_3" title="Referenced at line 251, 263, 264, 265, 266, 267, 268">RetrievalExp</a>.<span class="cons_Constructor"><span id="HighlightTags_243_16" title="Not referenced">HighlightTags</span></span> = &lt;&lt;<a href="#Highlight_166_3" id="Highlight_243_34" title="Defined at line 166, 240, 241">Highlight</a>&gt; &lt;<a href="#SearchField_166_38" id="SearchField_243_46" title="Defined at line 166, 252, 253">SearchField</a>&gt; <span class="cons_String">:</span> &lt;<a href="#Exp_171_3" id="Exp_243_62" title="Defined at line 171, 251">Exp</a>&gt; <span class="cons_String">from</span> &lt;<a href="#Exp_171_3" id="Exp_243_73" title="Defined at line 171, 251">Exp</a>&gt; <span class="cons_String">with</span> <span class="cons_String">tags</span> <span class="cons_String">(</span> &lt;<a href="#Exp_171_3" id="Exp_243_91" title="Defined at line 171, 251">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="#Exp_171_3" id="Exp_243_99" title="Defined at line 171, 251">Exp</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#RetrievalExp_251_22" id="RetrievalExp_244_3" title="Referenced at line 251, 263, 264, 265, 266, 267, 268">RetrievalExp</a>.<span class="cons_Constructor"><span id="SearchResults_244_16" title="Not referenced">SearchResults</span></span> = &lt;<span class="cons_String">results</span> <span class="cons_String">from</span> &lt;<a href="#Exp_171_3" id="Exp_244_47" title="Defined at line 171, 251">Exp</a>&gt;&gt;
  <a href="#RetrievalExp_251_22" id="RetrievalExp_245_3" title="Referenced at line 251, 263, 264, 265, 266, 267, 268">RetrievalExp</a>.<span class="cons_Constructor"><span id="FacetResults_245_16" title="Not referenced">FacetResults</span></span> = &lt;&lt;<a href="#SearchField_166_38" id="SearchField_245_33" title="Defined at line 166, 252, 253">SearchField</a>&gt; <span class="cons_String">facets</span> <span class="cons_String">from</span> &lt;<a href="#Exp_171_3" id="Exp_245_59" title="Defined at line 171, 251">Exp</a>&gt;&gt;
  <a href="#RetrievalExp_251_22" id="RetrievalExp_246_3" title="Referenced at line 251, 263, 264, 265, 266, 267, 268">RetrievalExp</a>.<span class="cons_Constructor"><a href="#SearchResultsSize_263_16" id="SearchResultsSize_246_16" title="Referenced at line 263, 264, 265, 266, 267, 268">SearchResultsSize</a></span> = &lt;<span class="cons_String">count</span> <span class="cons_String">from</span> &lt;<a href="#Exp_171_3" id="Exp_246_49" title="Defined at line 171, 251">Exp</a>&gt;&gt;
  <a href="#RetrievalExp_251_22" id="RetrievalExp_247_3" title="Referenced at line 251, 263, 264, 265, 266, 267, 268">RetrievalExp</a>.<span class="cons_Constructor"><span id="SearchTimeString_247_16" title="Not referenced">SearchTimeString</span></span> = &lt;<span class="cons_String">searchtime</span> <span class="cons_String">from</span> &lt;<a href="#Exp_171_3" id="Exp_247_53" title="Defined at line 171, 251">Exp</a>&gt;&gt;
  <a href="#RetrievalExp_251_22" id="RetrievalExp_248_3" title="Referenced at line 251, 263, 264, 265, 266, 267, 268">RetrievalExp</a>.<span class="cons_Constructor"><span id="Suggest_248_16" title="Not referenced">Suggest</span></span> = &lt;&lt;<a href="../WebDSL-Lexical.sdf3/#SimpleSortLex_167_3" id="SimpleSortLex_248_28" title="Defined at ../WebDSL-Lexical.sdf3 line 167, 171">SimpleSortLex</a>&gt; &lt;<a href="#SuggestType_166_26" id="SuggestType_248_44" title="Defined at line 166, 249, 250">SuggestType</a>&gt; &lt;<a href="#SuggestionPart_166_61" id="SuggestionPart_248_58" title="Defined at line 166, 256, 257, 258, 259">SuggestionPart</a>+&gt;&gt;
  <a href="#SuggestType_248_44" id="SuggestType_249_3" title="Referenced at line 248">SuggestType</a>.<span class="cons_Constructor"><span id="AutoComplete_249_15" title="Not referenced">AutoComplete</span></span> = &lt;<span class="cons_String">completions</span>&gt;
  <a href="#SuggestType_248_44" id="SuggestType_250_3" title="Referenced at line 248">SuggestType</a>.<span class="cons_Constructor"><span id="SpellCheck_250_15" title="Not referenced">SpellCheck</span></span> = &lt;<span class="cons_String">corrections</span>&gt;
  <a href="#Exp_173_36" id="Exp_251_3" title="Referenced at line 173, 183, 184, 191, 206, 208, 212, 220, 221, 224, 232, 242, 243, 244, 245, 246, 247, 252, 256, 257, 263, 264, 265, 266, 267, 268, 273, 274, 289, 290, 363, 364">Exp</a>.<span class="cons_Constructor"><a href="../WebDSL-Action.sdf3/#RetrievalExp_374_15" id="RetrievalExp_251_7" title="Referenced at ../WebDSL-Action.sdf3 line 374">RetrievalExp</a></span> = <a href="#RetrievalExp_166_13" id="RetrievalExp_251_22" title="Defined at line 166, 242, 243, 244, 245, 246, 247, 248, 363">RetrievalExp</a>
  <a href="#SearchField_206_33" id="SearchField_252_3" title="Referenced at line 206, 207, 208, 210, 235, 242, 243, 245, 363, 364, 365">SearchField</a>.<span class="cons_Constructor"><span id="SearchFieldExp_252_15" title="Not referenced">SearchFieldExp</span></span> = &lt;<span class="cons_String">~</span> &lt;<a href="#Exp_171_3" id="Exp_252_36" title="Defined at line 171, 251">Exp</a>&gt;&gt;
  <a href="#SearchField_206_33" id="SearchField_253_3" title="Referenced at line 206, 207, 208, 210, 235, 242, 243, 245, 363, 364, 365">SearchField</a> = <a href="#PlainField_166_50" id="PlainField_253_17" title="Defined at line 166, 254, 255">PlainField</a>
  <a href="#PlainField_253_17" id="PlainField_254_3" title="Referenced at line 253, 255">PlainField</a>.<span class="cons_Constructor"><span id="SearchFieldPlainBase_254_14" title="Not referenced">SearchFieldPlainBase</span></span> = <a href="#SearchFieldId_11_23" id="SearchFieldId_254_37" title="Defined at line 11, 299, 300">SearchFieldId</a>
  <a href="#PlainField_253_17" id="PlainField_255_3" title="Referenced at line 253, 255">PlainField</a>.<span class="cons_Constructor"><span id="SearchFieldPlain_255_14" title="Not referenced">SearchFieldPlain</span></span> = &lt;&lt;<a href="#SearchFieldId_11_23" id="SearchFieldId_255_35" title="Defined at line 11, 299, 300">SearchFieldId</a>&gt; <span class="cons_String">.</span> &lt;<a href="#PlainField_166_50" id="PlainField_255_53" title="Defined at line 166, 254, 255">PlainField</a>&gt;&gt;
  <a href="#SuggestionPart_248_58" id="SuggestionPart_256_3" title="Referenced at line 248">SuggestionPart</a>.<span class="cons_Constructor"><span id="Similarity_256_18" title="Not referenced">Similarity</span></span> = &lt;<span class="cons_String">similarity</span> &lt;<a href="#Exp_171_3" id="Exp_256_44" title="Defined at line 171, 251">Exp</a>&gt;&gt;
  <a href="#SuggestionPart_248_58" id="SuggestionPart_257_3" title="Referenced at line 248">SuggestionPart</a>.<span class="cons_Constructor"><span id="SuggestTerm_257_18" title="Not referenced">SuggestTerm</span></span> = &lt;<span class="cons_String">matching</span> &lt;<a href="#FieldsConstraint_164_65" id="FieldsConstraint_257_43" title="Defined at line 164, 209">FieldsConstraint</a>&gt; &lt;<a href="#Exp_171_3" id="Exp_257_62" title="Defined at line 171, 251">Exp</a>&gt;&gt;
  <a href="#SuggestionPart_248_58" id="SuggestionPart_258_3" title="Referenced at line 248">SuggestionPart</a> = <a href="#NamespaceConstraint_164_3" id="NamespaceConstraint_258_20" title="Defined at line 164, 191">NamespaceConstraint</a>
  <a href="#SuggestionPart_248_58" id="SuggestionPart_259_3" title="Referenced at line 248">SuggestionPart</a> = <a href="#MaxResults_163_44" id="MaxResults_259_20" title="Defined at line 163, 184">MaxResults</a>

<span class="keyword">context-free priorities</span>

  <a href="#RetrievalExp_166_13" id="RetrievalExp_263_3" title="Defined at line 166, 242, 243, 244, 245, 246, 247, 248, 363">RetrievalExp</a>.<span class="cons_Constructor"><a href="#SearchResultsSize_246_16" id="SearchResultsSize_263_16" title="Defined at line 246">SearchResultsSize</a></span> &lt;2&gt; .&gt; <a href="#Exp_171_3" id="Exp_263_41" title="Defined at line 171, 251">Exp</a>.<span class="cons_Constructor"><a href="../WebDSL-Action.sdf3/#Eq_281_7" id="Eq_263_45" title="Defined at ../WebDSL-Action.sdf3 line 281">Eq</a></span>,
  <a href="#RetrievalExp_166_13" id="RetrievalExp_264_3" title="Defined at line 166, 242, 243, 244, 245, 246, 247, 248, 363">RetrievalExp</a>.<span class="cons_Constructor"><a href="#SearchResultsSize_246_16" id="SearchResultsSize_264_16" title="Defined at line 246">SearchResultsSize</a></span> &lt;2&gt; .&gt; <a href="#Exp_171_3" id="Exp_264_41" title="Defined at line 171, 251">Exp</a>.<span class="cons_Constructor"><a href="../WebDSL-Action.sdf3/#NotEq_282_7" id="NotEq_264_45" title="Defined at ../WebDSL-Action.sdf3 line 282">NotEq</a></span>,
  <a href="#RetrievalExp_166_13" id="RetrievalExp_265_3" title="Defined at line 166, 242, 243, 244, 245, 246, 247, 248, 363">RetrievalExp</a>.<span class="cons_Constructor"><a href="#SearchResultsSize_246_16" id="SearchResultsSize_265_16" title="Defined at line 246">SearchResultsSize</a></span> &lt;2&gt; .&gt; <a href="#Exp_171_3" id="Exp_265_41" title="Defined at line 171, 251">Exp</a>.<span class="cons_Constructor"><a href="../WebDSL-Action.sdf3/#LargerThan_283_7" id="LargerThan_265_45" title="Defined at ../WebDSL-Action.sdf3 line 283">LargerThan</a></span>,
  <a href="#RetrievalExp_166_13" id="RetrievalExp_266_3" title="Defined at line 166, 242, 243, 244, 245, 246, 247, 248, 363">RetrievalExp</a>.<span class="cons_Constructor"><a href="#SearchResultsSize_246_16" id="SearchResultsSize_266_16" title="Defined at line 246">SearchResultsSize</a></span> &lt;2&gt; .&gt; <a href="#Exp_171_3" id="Exp_266_41" title="Defined at line 171, 251">Exp</a>.<span class="cons_Constructor"><a href="../WebDSL-Action.sdf3/#LargerThanOrEqual_284_7" id="LargerThanOrEqual_266_45" title="Defined at ../WebDSL-Action.sdf3 line 284">LargerThanOrEqual</a></span>,
  <a href="#RetrievalExp_166_13" id="RetrievalExp_267_3" title="Defined at line 166, 242, 243, 244, 245, 246, 247, 248, 363">RetrievalExp</a>.<span class="cons_Constructor"><a href="#SearchResultsSize_246_16" id="SearchResultsSize_267_16" title="Defined at line 246">SearchResultsSize</a></span> &lt;2&gt; .&gt; <a href="#Exp_171_3" id="Exp_267_41" title="Defined at line 171, 251">Exp</a>.<span class="cons_Constructor"><a href="../WebDSL-Action.sdf3/#SmallerThan_285_7" id="SmallerThan_267_45" title="Defined at ../WebDSL-Action.sdf3 line 285">SmallerThan</a></span>,
  <a href="#RetrievalExp_166_13" id="RetrievalExp_268_3" title="Defined at line 166, 242, 243, 244, 245, 246, 247, 248, 363">RetrievalExp</a>.<span class="cons_Constructor"><a href="#SearchResultsSize_246_16" id="SearchResultsSize_268_16" title="Defined at line 246">SearchResultsSize</a></span> &lt;2&gt; .&gt; <a href="#Exp_171_3" id="Exp_268_41" title="Defined at line 171, 251">Exp</a>.<span class="cons_Constructor"><a href="../WebDSL-Action.sdf3/#SmallerThanOrEqual_286_7" id="SmallerThanOrEqual_268_45" title="Defined at ../WebDSL-Action.sdf3 line 286">SmallerThanOrEqual</a></span>

<span class="keyword">context-free syntax</span>

  <a href="#QueryTerm_216_36" id="QueryTerm_272_3" title="Referenced at line 216, 289, 290, 295">QueryTerm</a> = <a href="#SearcherKW_11_12" id="SearcherKW_272_15" title="Defined at line 11, 302, 303, 304, 305, 306, 307">SearcherKW</a> {<span class="keyword">reject</span>}
  <a href="#QueryTerm_216_36" id="QueryTerm_273_3" title="Referenced at line 216, 289, 290, 295">QueryTerm</a> = &lt;&lt;<a href="#SearcherKW_11_12" id="SearcherKW_273_17" title="Defined at line 11, 302, 303, 304, 305, 306, 307">SearcherKW</a>&gt; <span class="cons_String">(</span> &lt;<a href="#Exp_171_3" id="Exp_273_32" title="Defined at line 171, 251">Exp</a>&gt; <span class="cons_String">)</span>&gt; {<span class="keyword">reject</span>}
  <a href="#QueryTerm_216_36" id="QueryTerm_274_3" title="Referenced at line 216, 289, 290, 295">QueryTerm</a> = &lt;<span class="cons_String">[</span> &lt;{<a href="#Exp_171_3" id="Exp_274_20" title="Defined at line 171, 251">Exp</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">]</span>&gt; {<span class="keyword">reject</span>}

  <a href="#OptQueryBoost_210_55" id="OptQueryBoost_276_3" title="Referenced at line 210">OptQueryBoost</a>.<span class="cons_Constructor"><span id="OptQueryBoostNone_276_17" title="Not referenced">OptQueryBoostNone</span></span> = &lt;&gt;
  <a href="#OptQueryBoost_210_55" id="OptQueryBoost_277_3" title="Referenced at line 210">OptQueryBoost</a> = <a href="#QueryBoost_165_3" id="QueryBoost_277_19" title="Defined at line 165, 212">QueryBoost</a>
  <a href="#OptBoolOp_213_25" id="OptBoolOp_278_3" title="Referenced at line 213, 216, 217, 219, 220">OptBoolOp</a>.<span class="cons_Constructor"><span id="OptBoolOpNone_278_13" title="Not referenced">OptBoolOpNone</span></span> = &lt;&gt;
  <a href="#OptBoolOp_213_25" id="OptBoolOp_279_3" title="Referenced at line 213, 216, 217, 219, 220">OptBoolOp</a> = <a href="#BoolOp_165_80" id="BoolOp_279_15" title="Defined at line 165, 230, 231">BoolOp</a>
  <a href="#OptFieldsConstraint_214_24" id="OptFieldsConstraint_280_3" title="Referenced at line 214">OptFieldsConstraint</a>.<span class="cons_Constructor"><span id="OptFieldsConstraintNone_280_23" title="Not referenced">OptFieldsConstraintNone</span></span> = &lt;&gt;
  <a href="#OptFieldsConstraint_214_24" id="OptFieldsConstraint_281_3" title="Referenced at line 214">OptFieldsConstraint</a> = <a href="#FieldsConstraint_164_65" id="FieldsConstraint_281_25" title="Defined at line 164, 209">FieldsConstraint</a>
  <a href="#OptSlop_216_48" id="OptSlop_282_3" title="Referenced at line 216, 219, 220">OptSlop</a>.<span class="cons_Constructor"><span id="OptSlopNone_282_11" title="Not referenced">OptSlopNone</span></span> = &lt;&gt;
  <a href="#OptSlop_216_48" id="OptSlop_283_3" title="Referenced at line 216, 219, 220">OptSlop</a> = <a href="#Slop_165_34" id="Slop_283_13" title="Defined at line 165, 221">Slop</a>
  <a href="#OptDirection_235_37" id="OptDirection_284_3" title="Referenced at line 235">OptDirection</a>.<span class="cons_Constructor"><span id="OptDirectionNone_284_16" title="Not referenced">OptDirectionNone</span></span> = &lt;&gt;
  <a href="#OptDirection_235_37" id="OptDirection_285_3" title="Referenced at line 235">OptDirection</a> = <a href="#Direction_165_105" id="Direction_285_18" title="Defined at line 165, 236, 237, 238, 239">Direction</a>

<span class="keyword">context-free priorities</span>

  <a href="#QueryTerm_165_87" id="QueryTerm_289_3" title="Defined at line 165, 232, 233, 272, 273, 274">QueryTerm</a>.<span class="cons_Constructor"><a href="#QueryTermExp_232_13" id="QueryTermExp_289_13" title="Defined at line 232">QueryTermExp</a></span> &lt;0&gt; .&gt; <a href="#Exp_171_3" id="Exp_289_33" title="Defined at line 171, 251">Exp</a>.<span class="cons_Constructor"><a href="../WebDSL-Action.sdf3/#Sub_327_7" id="Sub_289_37" title="Defined at ../WebDSL-Action.sdf3 line 327">Sub</a></span>,
  <a href="#QueryTerm_165_87" id="QueryTerm_290_3" title="Defined at line 165, 232, 233, 272, 273, 274">QueryTerm</a>.<span class="cons_Constructor"><a href="#QueryTermExp_232_13" id="QueryTermExp_290_13" title="Defined at line 232">QueryTermExp</a></span> &lt;0&gt; .&gt; <a href="#Exp_171_3" id="Exp_290_33" title="Defined at line 171, 251">Exp</a>.<span class="cons_Constructor"><a href="../WebDSL-Action.sdf3/#Add_326_7" id="Add_290_37" title="Defined at ../WebDSL-Action.sdf3 line 326">Add</a></span>

<span class="keyword">context-free restrictions</span>

  <a href="#BoolOp_165_80" id="BoolOp_294_3" title="Defined at line 165, 230, 231">BoolOp</a> -/- [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]
  <a href="#QueryTerm_165_87" id="QueryTerm_295_3" title="Defined at line 165, 232, 233, 272, 273, 274">QueryTerm</a> -/- [\(]

<span class="keyword">lexical syntax</span>

  <a href="#SearchFieldId_254_37" id="SearchFieldId_299_3" title="Referenced at line 254, 255">SearchFieldId</a> = <a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_299_19" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>
  <a href="#SearchFieldId_254_37" id="SearchFieldId_300_3" title="Referenced at line 254, 255">SearchFieldId</a> = <span class="cons_Lit">"_id"</span>
  <span id="SEARCHERREF_301_3" title="Not referenced">SEARCHERREF</span> = <a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_301_17" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>
  <a href="#SearcherKW_272_15" id="SearcherKW_302_3" title="Referenced at line 272, 273">SearcherKW</a> = <span class="cons_Lit">"limit"</span>
  <a href="#SearcherKW_272_15" id="SearcherKW_303_3" title="Referenced at line 272, 273">SearcherKW</a> = <span class="cons_Lit">"offset"</span>
  <a href="#SearcherKW_272_15" id="SearcherKW_304_3" title="Referenced at line 272, 273">SearcherKW</a> = <span class="cons_Lit">"with"</span>
  <a href="#SearcherKW_272_15" id="SearcherKW_305_3" title="Referenced at line 272, 273">SearcherKW</a> = <span class="cons_Lit">"order"</span>
  <a href="#SearcherKW_272_15" id="SearcherKW_306_3" title="Referenced at line 272, 273">SearcherKW</a> = <span class="cons_Lit">"in"</span>
  <a href="#SearcherKW_272_15" id="SearcherKW_307_3" title="Referenced at line 272, 273">SearcherKW</a> = <span class="cons_Lit">"matching"</span>

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

  <span id="EntityBodyDeclaration_351_3" title="Not referenced">EntityBodyDeclaration</span>.<span class="cons_Constructor"><span id="SearchMappingEmbeddedDepr_351_25" title="Not referenced">SearchMappingEmbeddedDepr</span></span> = &lt;
    <span class="cons_String">searchmapping</span> <span class="cons_String">{</span>
      &lt;<a href="#SearchMappingContent_91_3" id="SearchMappingContent_353_8" title="Defined at line 91, 107, 110, 113, 116, 119, 122">SearchMappingContent</a>*&gt;
    <span class="cons_String">}</span>
  &gt; {<span class="keyword">deprecated</span>("keyword `searchmapping` is replaced with `search mapping`")}
  <span id="Definition_356_3" title="Not referenced">Definition</span>.<span class="cons_Constructor"><span id="SearchMappingDepr_356_14" title="Not referenced">SearchMappingDepr</span></span> = &lt;
    <span class="cons_String">searchmapping</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_357_20" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#SearchMappingContent_91_3" id="SearchMappingContent_358_8" title="Defined at line 91, 107, 110, 113, 116, 119, 122">SearchMappingContent</a>*&gt;
    <span class="cons_String">}</span>
  &gt; {<span class="keyword">deprecated</span>("keyword `searchmapping` is replaced with `search mapping`")}
  <a href="#CharFilter_42_6" id="CharFilter_361_3" title="Referenced at line 42">CharFilter</a>.<span class="cons_Constructor"><span id="CharFilterDepr_361_14" title="Not referenced">CharFilterDepr</span></span> = &lt;<span class="cons_String">charfilter</span> <span class="cons_String">=</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_361_46" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; &lt;<a href="#OptAnalyzerArguments_16_51" id="OptAnalyzerArguments_361_51" title="Defined at line 16, 57, 58">OptAnalyzerArguments</a>&gt;&gt; {<span class="keyword">deprecated</span>("keyword `charfilter` is replaced with `char filter`")}
  <a href="#TokenFilter_44_6" id="TokenFilter_362_3" title="Referenced at line 44">TokenFilter</a>.<span class="cons_Constructor"><span id="TokenFilterDepr_362_15" title="Not referenced">TokenFilterDepr</span></span> = &lt;<span class="cons_String">tokenfilter</span> <span class="cons_String">=</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_362_49" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; &lt;<a href="#OptAnalyzerArguments_16_51" id="OptAnalyzerArguments_362_54" title="Defined at line 16, 57, 58">OptAnalyzerArguments</a>&gt;&gt; {<span class="keyword">deprecated</span>("keyword `tokenfilter` is replaced with `token filter`")}
  <a href="#RetrievalExp_251_22" id="RetrievalExp_363_3" title="Referenced at line 251, 263, 264, 265, 266, 267, 268">RetrievalExp</a>.<span class="cons_Constructor"><span id="AllFacetResults_363_16" title="Not referenced">AllFacetResults</span></span> = &lt;<span class="cons_String">all</span> &lt;<a href="#SearchField_166_38" id="SearchField_363_40" title="Defined at line 166, 252, 253">SearchField</a>&gt; <span class="cons_String">facets</span> <span class="cons_String">from</span> &lt;<a href="#Exp_171_3" id="Exp_363_66" title="Defined at line 171, 251">Exp</a>&gt;&gt; {<span class="keyword">deprecated</span>("the `all` keyword has been deprecated and has no effect on facet retrieval anymore")}
  <a href="#FacetExp_188_37" id="FacetExp_364_3" title="Referenced at line 188, 189">FacetExp</a>.<span class="cons_Constructor"><span id="DiscreteFacetDefDepr_364_12" title="Not referenced">DiscreteFacetDefDepr</span></span> = &lt;<span class="cons_String">(</span> &lt;<a href="#SearchField_166_38" id="SearchField_364_39" title="Defined at line 166, 252, 253">SearchField</a>&gt; <span class="cons_String">,</span> &lt;<a href="#Exp_171_3" id="Exp_364_55" title="Defined at line 171, 251">Exp</a>&gt; <span class="cons_String">)</span>&gt; {<span class="keyword">deprecated</span>("the notation: (field,topN) has been replaced with field(topN) ")}
  <a href="#FacetExp_188_37" id="FacetExp_365_3" title="Referenced at line 188, 189">FacetExp</a>.<span class="cons_Constructor"><span id="RangeFacetDefDepr_365_12" title="Not referenced">RangeFacetDefDepr</span></span> = &lt;<span class="cons_String">(</span> &lt;<a href="#SearchField_166_38" id="SearchField_365_36" title="Defined at line 166, 252, 253">SearchField</a>&gt; <span class="cons_String">:</span> &lt;{<a href="#Range_165_39" id="Range_365_53" title="Defined at line 165, 222, 223">Range</a> <span class="cons_Lit">","</span>}+&gt; <span class="cons_String">)</span>&gt; {<span class="keyword">deprecated</span>("the notation: (field:[min to max], ...) has been replaced with field([min to max], ...) ")}

</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
