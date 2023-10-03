---
title: WebDSL-UI.sdf3
---

# `WebDSL-UI.sdf3`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-UI.sdf3]

[pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-UI.sdf3]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/syntax/WebDSL-UI.sdf3 "The source file on GitHub"

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
366
367
368
369
370
371
372
373
374
375
376
377
378
379
380
381
382
383
384
385
386
387
388
389
390
391
392
393
394
395
396
397
398
399
400
401
402
403
404
405
406
407
408
409
410
411
412
413
414
415
416
417
418
419
420
421
422
423
424
425
426
427
428
429
430
431
432
433
434
435
436
437
438
439
440
441
442
443
444
445
446
447
448
449
450
451
452
453
454
455
456
457
458
459
460
461
462
463
464
465
466
467
468
469
470
471
472
473
474
475
476
477
478
479
480
481
482
483
484
485
486
487
488
489
490
491
492
493
494
495
496
497
498
499
500
501
502
503
504
505
506
507
508
509
510
511
512
513
514
515
516
517
518
519
520
521
522
523
524
525
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix.sdf3#WebDSL-UI_442_451" id="WebDSL-UI_7_16" title="Referenced at ../webdsl-statix.sdf3 line 27">WebDSL-UI</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3#WebDSL-Action_7_20" id="WebDSL-Action_28_41" title="Defined at ../WebDSL-Action.sdf3 line 1">WebDSL-Action</a>
  <a href="../WebDSL-Attributes.sdf3#WebDSL-Attributes_7_24" id="WebDSL-Attributes_44_61" title="Defined at ../WebDSL-Attributes.sdf3 line 1">WebDSL-Attributes</a>
  <a href="../WebDSL-Core.sdf3#WebDSL-Core_7_18" id="WebDSL-Core_64_75" title="Defined at ../WebDSL-Core.sdf3 line 1">WebDSL-Core</a>
  <a href="../WebDSL-Lexical.sdf3#WebDSL-Lexical_7_21" id="WebDSL-Lexical_78_92" title="Defined at ../WebDSL-Lexical.sdf3 line 1">WebDSL-Lexical</a>
  <a href="../WebDSL-XML.sdf3#WebDSL-XML_7_17" id="WebDSL-XML_95_105" title="Defined at ../WebDSL-XML.sdf3 line 1">WebDSL-XML</a>

<span class="keyword">template options</span>

  <span class="keyword">keyword</span> -/- [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\-\_]

<span class="keyword">context-free sorts</span>

  <a href="#TemplateDefinition_3037_3055" id="TemplateDefinition_178_196" title="Referenced at line 115">TemplateDefinition</a> <a href="#Modifier_2190_2198" id="Modifier_197_205" title="Referenced at line 77; ../WebDSL-Service.sdf3 line 17">Modifier</a> <a href="#TemplateElement_13813_13828" id="TemplateElement_206_221" title="Referenced at line 477">TemplateElement</a> <a href="#OptFilter_13538_13547" id="OptFilter_222_231" title="Referenced at line 472; ../WebDSL-Action.sdf3 line 309">OptFilter</a> <a href="#PageCall_7377_7385" id="PageCall_232_240" title="Referenced at line 289; ../WebDSL-Action.sdf3 line 77; ../WebDSL-Ajax.sdf3 line 49">PageCall</a> <a href="#TemplateCall_13228_13240" id="TemplateCall_241_253" title="Referenced at line 467; ../WebDSL-Ajax.sdf3 line 80">TemplateCall</a> <a href="#PropertyAssignment_9277_9295" id="PropertyAssignment_254_272" title="Referenced at line 347">PropertyAssignment</a>
  <a href="#TemplateArgExp_6367_6381" id="TemplateArgExp_275_289" title="Referenced at line 257">TemplateArgExp</a> <a href="#TemplateCaseAlt_5307_5322" id="TemplateCaseAlt_290_305" title="Referenced at line 209">TemplateCaseAlt</a> <a href="#TemplateTypeCaseAlt_5596_5615" id="TemplateTypeCaseAlt_306_325" title="Referenced at line 220">TemplateTypeCaseAlt</a> <a href="#OptTemplateArgs_1478_1493" id="OptTemplateArgs_326_341" title="Referenced at line 52">OptTemplateArgs</a> <a href="#TemplateArg_674_685" id="TemplateArg_342_353" title="Referenced at line 32">TemplateArg</a> <a href="#OptLocalRedefineArgs_912_932" id="OptLocalRedefineArgs_354_374" title="Referenced at line 36">OptLocalRedefineArgs</a>
  <a href="#LocalRedefineArg_1043_1059" id="LocalRedefineArg_377_393" title="Referenced at line 39">LocalRedefineArg</a>

<span class="keyword">lexical sorts</span>

  <a href="#SubmitProp_11364_11374" id="SubmitProp_412_422" title="Referenced at line 399">SubmitProp</a>

<span class="keyword">context-free syntax</span>

  <span id="Definition_447_457" title="Not referenced locally, nor via imports">Definition</span>.<span class="cons_Constructor"><span id="TemplateDefinition_458_476" title="Not referenced locally, nor via imports">TemplateDefinition</span></span> = <a href="#TemplateDefinition_178_196" id="TemplateDefinition_479_497" title="Defined at line 16, 27, 35, 41, 46, 51, 498, 499">TemplateDefinition</a>
  <a href="#TemplateDefinition_3037_3055" id="TemplateDefinition_500_518" title="Referenced at line 115">TemplateDefinition</a>.<span class="cons_Constructor"><span id="Define_519_525" title="Not referenced locally, nor via imports">Define</span></span> = &lt;
    <span class="cons_String">define</span> &lt;<a href="#Modifier_197_205" id="Modifier_542_550" title="Defined at line 16, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">Modifier</a>*&gt; &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_554_556" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; &lt;<a href="../WebDSL-Core.sdf3#OptFormalArgs_113_126" id="OptFormalArgs_559_572" title="Defined at ../WebDSL-Core.sdf3 line 10, 37, 38">OptFormalArgs</a>&gt; &lt;<a href="#OptTemplateArgs_326_341" id="OptTemplateArgs_575_590" title="Defined at line 17, 32, 33">OptTemplateArgs</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_206_221" id="TemplateElement_601_616" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#OptTemplateArgs_1478_1493" id="OptTemplateArgs_631_646" title="Referenced at line 52">OptTemplateArgs</a>.<span class="cons_Constructor"><span id="TemplateArgs_647_659" title="Not referenced locally, nor via imports">TemplateArgs</span></span> = &lt;<span class="cons_String">requires</span> &lt;{<a href="#TemplateArg_342_353" id="TemplateArg_674_685" title="Defined at line 17, 34">TemplateArg</a> <span class="cons_Lit">","</span>}*&gt;&gt;
  <a href="#OptTemplateArgs_1478_1493" id="OptTemplateArgs_696_711" title="Referenced at line 52">OptTemplateArgs</a>.<span class="cons_Constructor"><span id="OptTemplateArgsNone_712_731" title="Not referenced locally, nor via imports">OptTemplateArgsNone</span></span> = &lt;&gt;
  <a href="#TemplateArg_674_685" id="TemplateArg_739_750" title="Referenced at line 32">TemplateArg</a>.<span class="cons_Constructor"><span id="TemplateArg_751_762" title="Not referenced locally, nor via imports">TemplateArg</span></span> = &lt;&lt;<a href="#TemplateId_2229_2239" id="TemplateId_767_777" title="Defined at line 81, 82, 120, 121, 202, 203, 232, 233, 354, 355, 356, 357, 358, 359, 508">TemplateId</a>&gt; <span class="cons_String">(</span> &lt;{<a href="#Sort_13078_13082" id="Sort_783_787" title="Defined at line 464">Sort</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;
  <a href="#TemplateDefinition_3037_3055" id="TemplateDefinition_800_818" title="Referenced at line 115">TemplateDefinition</a>.<span class="cons_Constructor"><span id="LocalRedefine_819_832" title="Not referenced locally, nor via imports">LocalRedefine</span></span> = &lt;
    <span class="cons_String">define</span> &lt;<a href="#Modifier_197_205" id="Modifier_849_857" title="Defined at line 16, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">Modifier</a>*&gt; &lt;<a href="#TemplateId_2229_2239" id="TemplateId_861_871" title="Defined at line 81, 82, 120, 121, 202, 203, 232, 233, 354, 355, 356, 357, 358, 359, 508">TemplateId</a>&gt; <span class="cons_String">(</span> &lt;{<a href="../WebDSL-Core.sdf3#FormalArg_103_112" id="FormalArg_877_886" title="Defined at ../WebDSL-Core.sdf3 line 10, 36">FormalArg</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span> <span class="cons_String">=</span> &lt;<a href="#TemplateId_2229_2239" id="TemplateId_899_909" title="Defined at line 81, 82, 120, 121, 202, 203, 232, 233, 354, 355, 356, 357, 358, 359, 508">TemplateId</a>&gt; &lt;<a href="#OptLocalRedefineArgs_354_374" id="OptLocalRedefineArgs_912_932" title="Defined at line 17, 38, 39">OptLocalRedefineArgs</a>&gt;
  &gt;
  <a href="#OptLocalRedefineArgs_912_932" id="OptLocalRedefineArgs_940_960" title="Referenced at line 36">OptLocalRedefineArgs</a>.<span class="cons_Constructor"><span id="OptLocalRedefineArgsNone_961_985" title="Not referenced locally, nor via imports">OptLocalRedefineArgsNone</span></span> = &lt;&gt;
  <a href="#OptLocalRedefineArgs_912_932" id="OptLocalRedefineArgs_993_1013" title="Referenced at line 36">OptLocalRedefineArgs</a>.<span class="cons_Constructor"><span id="LocalRedefineArgs_1014_1031" title="Not referenced locally, nor via imports">LocalRedefineArgs</span></span> = &lt;<span class="cons_String">(</span> <span class="cons_String">*</span> <span class="cons_String">,</span> &lt;{<a href="#LocalRedefineArg_377_393" id="LocalRedefineArg_1043_1059" title="Defined at line 18, 40">LocalRedefineArg</a> <span class="cons_Lit">","</span>}+&gt; <span class="cons_String">)</span>&gt;
  <a href="#LocalRedefineArg_1043_1059" id="LocalRedefineArg_1072_1088" title="Referenced at line 39">LocalRedefineArg</a>.<span class="cons_Constructor"><span id="LocalRedefineArg_1089_1105" title="Not referenced locally, nor via imports">LocalRedefineArg</span></span> = <a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_1108_1110" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>
  <a href="#TemplateDefinition_3037_3055" id="TemplateDefinition_1113_1131" title="Referenced at line 115">TemplateDefinition</a>.<span class="cons_Constructor"><span id="DefinePage_1132_1142" title="Not referenced locally, nor via imports">DefinePage</span></span> = &lt;
    &lt;<a href="#Modifier_197_205" id="Modifier_1152_1160" title="Defined at line 16, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">Modifier</a>*&gt; <span class="cons_String">page</span> &lt;<a href="../WebDSL-Lexical.sdf3#PageId_89_95" id="PageId_1169_1175" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 17">PageId</a>&gt; &lt;<a href="../WebDSL-Core.sdf3#OptFormalArgs_113_126" id="OptFormalArgs_1178_1191" title="Defined at ../WebDSL-Core.sdf3 line 10, 37, 38">OptFormalArgs</a>&gt; &lt;<a href="#OptTemplateArgs_326_341" id="OptTemplateArgs_1194_1209" title="Defined at line 17, 32, 33">OptTemplateArgs</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_206_221" id="TemplateElement_1220_1235" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateDefinition_3037_3055" id="TemplateDefinition_1250_1268" title="Referenced at line 115">TemplateDefinition</a>.<span class="cons_Constructor"><span id="DefineTemplate_1269_1283" title="Not referenced locally, nor via imports">DefineTemplate</span></span> = &lt;
    &lt;<a href="#Modifier_197_205" id="Modifier_1293_1301" title="Defined at line 16, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">Modifier</a>*&gt; <span class="cons_String">template</span> &lt;<a href="#TemplateId_2229_2239" id="TemplateId_1314_1324" title="Defined at line 81, 82, 120, 121, 202, 203, 232, 233, 354, 355, 356, 357, 358, 359, 508">TemplateId</a>&gt; &lt;<a href="../WebDSL-Core.sdf3#OptFormalArgs_113_126" id="OptFormalArgs_1327_1340" title="Defined at ../WebDSL-Core.sdf3 line 10, 37, 38">OptFormalArgs</a>&gt; &lt;<a href="#OptTemplateArgs_326_341" id="OptTemplateArgs_1343_1358" title="Defined at line 17, 32, 33">OptTemplateArgs</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_206_221" id="TemplateElement_1369_1384" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateDefinition_3037_3055" id="TemplateDefinition_1399_1417" title="Referenced at line 115">TemplateDefinition</a>.<span class="cons_Constructor"><span id="DefineEmail_1418_1429" title="Not referenced locally, nor via imports">DefineEmail</span></span> = &lt;
    &lt;<a href="#Modifier_197_205" id="Modifier_1439_1447" title="Defined at line 16, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">Modifier</a>*&gt; <span class="cons_String">email</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_1457_1459" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; &lt;<a href="../WebDSL-Core.sdf3#OptFormalArgs_113_126" id="OptFormalArgs_1462_1475" title="Defined at ../WebDSL-Core.sdf3 line 10, 37, 38">OptFormalArgs</a>&gt; &lt;<a href="#OptTemplateArgs_326_341" id="OptTemplateArgs_1478_1493" title="Defined at line 17, 32, 33">OptTemplateArgs</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_206_221" id="TemplateElement_1504_1519" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#Modifier_2190_2198" id="Modifier_1534_1542" title="Referenced at line 77; ../WebDSL-Service.sdf3 line 17">Modifier</a>.<span class="cons_Constructor"><span id="Page_1543_1547" title="Not referenced locally, nor via imports">Page</span></span> = &lt;<span class="cons_String">page</span>&gt;
  <a href="#Modifier_2190_2198" id="Modifier_1559_1567" title="Referenced at line 77; ../WebDSL-Service.sdf3 line 17">Modifier</a>.<span class="cons_Constructor"><span id="Email_1568_1573" title="Not referenced locally, nor via imports">Email</span></span> = &lt;<span class="cons_String">email</span>&gt;
  <a href="#Modifier_2190_2198" id="Modifier_1586_1594" title="Referenced at line 77; ../WebDSL-Service.sdf3 line 17">Modifier</a>.<span class="cons_Constructor"><span id="AjaxTemplate_1595_1607" title="Not referenced locally, nor via imports">AjaxTemplate</span></span> = &lt;<span class="cons_String">ajax</span>&gt;
  <a href="#Modifier_2190_2198" id="Modifier_1619_1627" title="Referenced at line 77; ../WebDSL-Service.sdf3 line 17">Modifier</a>.<span class="cons_Constructor"><span id="Template_1628_1636" title="Not referenced locally, nor via imports">Template</span></span> = &lt;<span class="cons_String">template</span>&gt;
  <a href="#Modifier_2190_2198" id="Modifier_1652_1660" title="Referenced at line 77; ../WebDSL-Service.sdf3 line 17">Modifier</a>.<span class="cons_Constructor"><span id="Feed_1661_1665" title="Not referenced locally, nor via imports">Feed</span></span> = &lt;<span class="cons_String">feed</span>&gt;
  <a href="#Modifier_2190_2198" id="Modifier_1677_1685" title="Referenced at line 77; ../WebDSL-Service.sdf3 line 17">Modifier</a>.<span class="cons_Constructor"><span id="Local_1686_1691" title="Not referenced locally, nor via imports">Local</span></span> = &lt;<span class="cons_String">local</span>&gt;
  <a href="#Modifier_2190_2198" id="Modifier_1704_1712" title="Referenced at line 77; ../WebDSL-Service.sdf3 line 17">Modifier</a>.<span class="cons_Constructor"><span id="NoSpan_1713_1719" title="Not referenced locally, nor via imports">NoSpan</span></span> = &lt;<span class="cons_String">no-span</span>&gt;
  <a href="#Modifier_2190_2198" id="Modifier_1734_1742" title="Referenced at line 77; ../WebDSL-Service.sdf3 line 17">Modifier</a>.<span class="cons_Constructor"><span id="TemplateModSpan_1743_1758" title="Not referenced locally, nor via imports">TemplateModSpan</span></span> = &lt;<span class="cons_String">span</span>&gt;
  <a href="#Modifier_2190_2198" id="Modifier_1770_1778" title="Referenced at line 77; ../WebDSL-Service.sdf3 line 17">Modifier</a>.<span class="cons_Constructor"><span id="TemplateModInline_1779_1796" title="Not referenced locally, nor via imports">TemplateModInline</span></span> = &lt;<span class="cons_String">inline</span>&gt;
  <a href="#Modifier_2190_2198" id="Modifier_1810_1818" title="Referenced at line 77; ../WebDSL-Service.sdf3 line 17">Modifier</a>.<span class="cons_Constructor"><span id="TempateModSecure_1819_1835" title="Not referenced locally, nor via imports">TempateModSecure</span></span> = &lt;<span class="cons_String">secure</span>&gt;
  <a href="#Modifier_2190_2198" id="Modifier_1849_1857" title="Referenced at line 77; ../WebDSL-Service.sdf3 line 17">Modifier</a>.<span class="cons_Constructor"><span id="TemplateModNotSecure_1858_1878" title="Not referenced locally, nor via imports">TemplateModNotSecure</span></span> = &lt;<span class="cons_String">not-secure</span>&gt;
  <a href="#Modifier_2190_2198" id="Modifier_1896_1904" title="Referenced at line 77; ../WebDSL-Service.sdf3 line 17">Modifier</a>.<span class="cons_Constructor"><span id="TemplateModOverride_1905_1924" title="Not referenced locally, nor via imports">TemplateModOverride</span></span> = &lt;<span class="cons_String">override</span>&gt;
  <a href="#Modifier_2190_2198" id="Modifier_1940_1948" title="Referenced at line 77; ../WebDSL-Service.sdf3 line 17">Modifier</a>.<span class="cons_Constructor"><span id="TemplateDeprecated_1949_1967" title="Not referenced locally, nor via imports">TemplateDeprecated</span></span> = &lt;<span class="cons_String">deprecated</span>&gt;
  <a href="#Modifier_2190_2198" id="Modifier_1985_1993" title="Referenced at line 77; ../WebDSL-Service.sdf3 line 17">Modifier</a>.<span class="cons_Constructor"><span id="ExpireCache_1994_2005" title="Not referenced locally, nor via imports">ExpireCache</span></span> = &lt;<span class="cons_String">expire-cache</span>&gt;
  <a href="#Modifier_2190_2198" id="Modifier_2025_2033" title="Referenced at line 77; ../WebDSL-Service.sdf3 line 17">Modifier</a>.<span class="cons_Constructor"><span id="ReadOnlyPage_2034_2046" title="Not referenced locally, nor via imports">ReadOnlyPage</span></span> = &lt;<span class="cons_String">read-only</span>&gt;
  <a href="#Modifier_2190_2198" id="Modifier_2063_2071" title="Referenced at line 77; ../WebDSL-Service.sdf3 line 17">Modifier</a>.<span class="cons_Constructor"><span id="WebService_2072_2082" title="Not referenced locally, nor via imports">WebService</span></span> = &lt;<span class="cons_String">service</span>&gt;
  <a href="#TemplateElement_13813_13828" id="TemplateElement_2097_2112" title="Referenced at line 477">TemplateElement</a>.<span class="cons_Constructor"><span id="Init_2113_2117" title="Not referenced locally, nor via imports">Init</span></span> = &lt;
    <span class="cons_String">init</span> &lt;<a href="../WebDSL-Action.sdf3#Block_145_150" id="Block_2132_2137" title="Defined at ../WebDSL-Action.sdf3 line 13, 45">Block</a>&gt;
  &gt;
  <a href="#TemplateElement_13813_13828" id="TemplateElement_2145_2160" title="Referenced at line 477">TemplateElement</a> = <a href="#Action_12445_12451" id="Action_2163_2169" title="Defined at line 444">Action</a>

  <a href="#TemplateCall_13228_13240" id="TemplateCall_2173_2185" title="Referenced at line 467; ../WebDSL-Ajax.sdf3 line 80">TemplateCall</a> = &lt;&lt;<a href="#Modifier_197_205" id="Modifier_2190_2198" title="Defined at line 16, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">Modifier</a>&gt;&gt; {<span class="keyword">reject</span>}

<span class="keyword">lexical syntax</span>

  <a href="#TemplateId_12687_12697" id="TemplateId_2229_2239" title="Referenced at line 447">TemplateId</a> = <span class="cons_Lit">"template"</span> {<span class="keyword">reject</span>}
  <a href="#TemplateId_12687_12697" id="TemplateId_2264_2274" title="Referenced at line 447">TemplateId</a> = <span class="cons_Lit">"define"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free sorts</span>

  <a href="#VarDecl_3004_3011" id="VarDecl_2318_2325" title="Referenced at line 113">VarDecl</a>

<span class="keyword">context-free syntax</span>

  <a href="#VarDecl_3004_3011" id="VarDecl_2350_2357" title="Referenced at line 113">VarDecl</a>.<span class="cons_Constructor"><span id="TemplateVarDecl_2358_2373" title="Not referenced locally, nor via imports">TemplateVarDecl</span></span> = &lt;
    <span class="cons_String">var</span> &lt;<a href="#VarId_14717_14722" id="VarId_2387_2392" title="Defined at line 521">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="#Sort_13078_13082" id="Sort_2397_2401" title="Defined at line 464">Sort</a>&gt;
  &gt;
  <a href="#VarDecl_3004_3011" id="VarDecl_2409_2416" title="Referenced at line 113">VarDecl</a>.<span class="cons_Constructor"><span id="TemplateVarDeclDepr_2417_2436" title="Not referenced locally, nor via imports">TemplateVarDeclDepr</span></span> = &lt;
    <span class="cons_String">var</span> &lt;<a href="#VarId_14717_14722" id="VarId_2450_2455" title="Defined at line 521">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="#Sort_13078_13082" id="Sort_2460_2464" title="Defined at line 464">Sort</a>&gt; <span class="cons_String">;</span>
  &gt; {<span class="keyword">deprecated</span>("remove ;")}
  <a href="#VarDecl_3004_3011" id="VarDecl_2499_2506" title="Referenced at line 113">VarDecl</a>.<span class="cons_Constructor"><span id="TemplateVarDeclInit_2507_2526" title="Not referenced locally, nor via imports">TemplateVarDeclInit</span></span> = &lt;
    <span class="cons_String">var</span> &lt;<a href="#VarId_14717_14722" id="VarId_2540_2545" title="Defined at line 521">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="#Sort_13078_13082" id="Sort_2550_2554" title="Defined at line 464">Sort</a>&gt; <span class="cons_String">:=</span> &lt;<a href="#Exp_13248_13251" id="Exp_2560_2563" title="Defined at line 469, 517">Exp</a>&gt;
  &gt;
  <a href="#VarDecl_3004_3011" id="VarDecl_2571_2578" title="Referenced at line 113">VarDecl</a>.<span class="cons_Constructor"><span id="TemplateVarDeclInitDepr_2579_2602" title="Not referenced locally, nor via imports">TemplateVarDeclInitDepr</span></span> = &lt;
    <span class="cons_String">var</span> &lt;<a href="#VarId_14717_14722" id="VarId_2616_2621" title="Defined at line 521">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="#Sort_13078_13082" id="Sort_2626_2630" title="Defined at line 464">Sort</a>&gt; <span class="cons_String">:=</span> &lt;<a href="#Exp_13248_13251" id="Exp_2636_2639" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">;</span>
  &gt; {<span class="keyword">deprecated</span>("remove ;")}
  <a href="#VarDecl_3004_3011" id="VarDecl_2674_2681" title="Referenced at line 113">VarDecl</a>.<span class="cons_Constructor"><span id="TemplateVarDeclInitInferred_2682_2709" title="Not referenced locally, nor via imports">TemplateVarDeclInitInferred</span></span> = &lt;
    <span class="cons_String">var</span> &lt;<a href="#VarId_14717_14722" id="VarId_2723_2728" title="Defined at line 521">VarId</a>&gt; <span class="cons_String">:=</span> &lt;<a href="#Exp_13248_13251" id="Exp_2734_2737" title="Defined at line 469, 517">Exp</a>&gt;
  &gt;
  <a href="#VarDecl_3004_3011" id="VarDecl_2745_2752" title="Referenced at line 113">VarDecl</a>.<span class="cons_Constructor"><span id="TemplateVarDeclInitInferredDepr_2753_2784" title="Not referenced locally, nor via imports">TemplateVarDeclInitInferredDepr</span></span> = &lt;
    <span class="cons_String">var</span> &lt;<a href="#VarId_14717_14722" id="VarId_2798_2803" title="Defined at line 521">VarId</a>&gt; <span class="cons_String">:=</span> &lt;<a href="#Exp_13248_13251" id="Exp_2809_2812" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">;</span>
  &gt; {<span class="keyword">deprecated</span>("remove ;")}
  <a href="#TemplateElement_13813_13828" id="TemplateElement_2847_2862" title="Referenced at line 477">TemplateElement</a>.<span class="cons_Constructor"><span id="TEVarDecl_2863_2872" title="Not referenced locally, nor via imports">TEVarDecl</span></span> = <a href="#VarDecl_2318_2325" id="VarDecl_2875_2882" title="Defined at line 86, 90, 93, 96, 99, 102, 105">VarDecl</a>
  <a href="#TemplateElement_13813_13828" id="TemplateElement_2885_2900" title="Referenced at line 477">TemplateElement</a>.<span class="cons_Constructor"><span id="RequestScopeTemplate_2901_2921" title="Not referenced locally, nor via imports">RequestScopeTemplate</span></span> = &lt;
    <span class="cons_String">request</span> &lt;<a href="#VarDecl_2318_2325" id="VarDecl_2939_2946" title="Defined at line 86, 90, 93, 96, 99, 102, 105">VarDecl</a>&gt;
  &gt;
  <a href="#TemplateElement_13813_13828" id="TemplateElement_2954_2969" title="Referenced at line 477">TemplateElement</a>.<span class="cons_Constructor"><span id="LocalScopeTemplate_2970_2988" title="Not referenced locally, nor via imports">LocalScopeTemplate</span></span> = &lt;
    <span class="cons_String">local</span> &lt;<a href="#VarDecl_2318_2325" id="VarDecl_3004_3011" title="Defined at line 86, 90, 93, 96, 99, 102, 105">VarDecl</a>&gt;
  &gt;
  <a href="#TemplateElement_13813_13828" id="TemplateElement_3019_3034" title="Referenced at line 477">TemplateElement</a> = <a href="#TemplateDefinition_178_196" id="TemplateDefinition_3037_3055" title="Defined at line 16, 27, 35, 41, 46, 51, 498, 499">TemplateDefinition</a>
  <a href="#TemplateElement_13813_13828" id="TemplateElement_3058_3073" title="Referenced at line 477">TemplateElement</a> = <a href="#TemplateCall_241_253" id="TemplateCall_3076_3088" title="Defined at line 16, 77, 254, 275, 436, 451, 452, 453, 454, 455, 456, 466">TemplateCall</a>

<span class="keyword">lexical syntax</span>

  <a href="#TemplateId_12687_12697" id="TemplateId_3108_3118" title="Referenced at line 447">TemplateId</a> = <span class="cons_Lit">"request"</span> {<span class="keyword">reject</span>}
  <a href="#TemplateId_12687_12697" id="TemplateId_3142_3152" title="Referenced at line 447">TemplateId</a> = <span class="cons_Lit">"local"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free sorts</span>

  <a href="#Filter_3895_3901" id="Filter_3195_3201" title="Referenced at line 142; ../WebDSL-Action.sdf3 line 316">Filter</a> <a href="#OrderExp_3607_3615" id="OrderExp_3202_3210" title="Referenced at line 135">OrderExp</a> <a href="#Limit_3624_3629" id="Limit_3211_3216" title="Referenced at line 135">Limit</a>

<span class="keyword">context-free syntax</span>

  <a href="#Filter_3895_3901" id="Filter_3241_3247" title="Referenced at line 142; ../WebDSL-Action.sdf3 line 316">Filter</a>.<span class="cons_Constructor"><span id="FilterNoOrderByNoLimit_3248_3270" title="Not referenced locally, nor via imports">FilterNoOrderByNoLimit</span></span> = &lt;<span class="cons_String">where</span> &lt;<a href="#Exp_13248_13251" id="Exp_3281_3284" title="Defined at line 469, 517">Exp</a>&gt;&gt;
  <a href="#Filter_3895_3901" id="Filter_3289_3295" title="Referenced at line 142; ../WebDSL-Action.sdf3 line 316">Filter</a>.<span class="cons_Constructor"><span id="FilterNoWhereNoLimit_3296_3316" title="Not referenced locally, nor via imports">FilterNoWhereNoLimit</span></span> = &lt;<span class="cons_String">order</span> <span class="cons_String">by</span> &lt;{<a href="#OrderExp_3202_3210" id="OrderExp_3331_3339" title="Defined at line 125, 136, 137, 138">OrderExp</a> <span class="cons_Lit">","</span>}+&gt;&gt;
  <a href="#Filter_3895_3901" id="Filter_3350_3356" title="Referenced at line 142; ../WebDSL-Action.sdf3 line 316">Filter</a>.<span class="cons_Constructor"><span id="FilterNoLimit_3357_3370" title="Not referenced locally, nor via imports">FilterNoLimit</span></span> = &lt;<span class="cons_String">where</span> &lt;<a href="#Exp_13248_13251" id="Exp_3381_3384" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">order</span> <span class="cons_String">by</span> &lt;{<a href="#OrderExp_3202_3210" id="OrderExp_3397_3405" title="Defined at line 125, 136, 137, 138">OrderExp</a> <span class="cons_Lit">","</span>}+&gt;&gt;
  <a href="#Filter_3895_3901" id="Filter_3416_3422" title="Referenced at line 142; ../WebDSL-Action.sdf3 line 316">Filter</a>.<span class="cons_Constructor"><span id="FilterNoOrderBy_3423_3438" title="Not referenced locally, nor via imports">FilterNoOrderBy</span></span> = &lt;<span class="cons_String">where</span> &lt;<a href="#Exp_13248_13251" id="Exp_3449_3452" title="Defined at line 469, 517">Exp</a>&gt; &lt;<a href="#Limit_3211_3216" id="Limit_3455_3460" title="Defined at line 125, 139, 140, 141">Limit</a>&gt;&gt;
  <a href="#Filter_3895_3901" id="Filter_3465_3471" title="Referenced at line 142; ../WebDSL-Action.sdf3 line 316">Filter</a>.<span class="cons_Constructor"><span id="FilterNoWhere_3472_3485" title="Not referenced locally, nor via imports">FilterNoWhere</span></span> = &lt;<span class="cons_String">order</span> <span class="cons_String">by</span> &lt;{<a href="#OrderExp_3202_3210" id="OrderExp_3500_3508" title="Defined at line 125, 136, 137, 138">OrderExp</a> <span class="cons_Lit">","</span>}+&gt; &lt;<a href="#Limit_3211_3216" id="Limit_3517_3522" title="Defined at line 125, 139, 140, 141">Limit</a>&gt;&gt;
  <a href="#Filter_3895_3901" id="Filter_3527_3533" title="Referenced at line 142; ../WebDSL-Action.sdf3 line 316">Filter</a>.<span class="cons_Constructor"><span id="FilterNoWhereNoOrderBy_3534_3556" title="Not referenced locally, nor via imports">FilterNoWhereNoOrderBy</span></span> = <a href="#Limit_3211_3216" id="Limit_3559_3564" title="Defined at line 125, 139, 140, 141">Limit</a>
  <a href="#Filter_3895_3901" id="Filter_3567_3573" title="Referenced at line 142; ../WebDSL-Action.sdf3 line 316">Filter</a>.<span class="cons_Constructor"><span id="Filter_3574_3580" title="Not referenced locally, nor via imports">Filter</span></span> = &lt;<span class="cons_String">where</span> &lt;<a href="#Exp_13248_13251" id="Exp_3591_3594" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">order</span> <span class="cons_String">by</span> &lt;{<a href="#OrderExp_3202_3210" id="OrderExp_3607_3615" title="Defined at line 125, 136, 137, 138">OrderExp</a> <span class="cons_Lit">","</span>}+&gt; &lt;<a href="#Limit_3211_3216" id="Limit_3624_3629" title="Defined at line 125, 139, 140, 141">Limit</a>&gt;&gt;
  <a href="#OrderExp_3607_3615" id="OrderExp_3634_3642" title="Referenced at line 135">OrderExp</a>.<span class="cons_Constructor"><span id="OrderNonSpecific_3643_3659" title="Not referenced locally, nor via imports">OrderNonSpecific</span></span> = <a href="#Exp_13248_13251" id="Exp_3662_3665" title="Defined at line 469, 517">Exp</a>
  <a href="#OrderExp_3607_3615" id="OrderExp_3668_3676" title="Referenced at line 135">OrderExp</a>.<span class="cons_Constructor"><span id="OrderAscending_3677_3691" title="Not referenced locally, nor via imports">OrderAscending</span></span> = &lt;&lt;<a href="#Exp_13248_13251" id="Exp_3696_3699" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">asc</span>&gt;
  <a href="#OrderExp_3607_3615" id="OrderExp_3708_3716" title="Referenced at line 135">OrderExp</a>.<span class="cons_Constructor"><span id="OrderDescending_3717_3732" title="Not referenced locally, nor via imports">OrderDescending</span></span> = &lt;&lt;<a href="#Exp_13248_13251" id="Exp_3737_3740" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">desc</span>&gt;
  <a href="#Limit_3624_3629" id="Limit_3750_3755" title="Referenced at line 135">Limit</a>.<span class="cons_Constructor"><span id="Limit_3756_3761" title="Not referenced locally, nor via imports">Limit</span></span> = &lt;<span class="cons_String">limit</span> &lt;<a href="#Exp_13248_13251" id="Exp_3772_3775" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">offset</span> &lt;<a href="#Exp_13248_13251" id="Exp_3785_3788" title="Defined at line 469, 517">Exp</a>&gt;&gt;
  <a href="#Limit_3624_3629" id="Limit_3793_3798" title="Referenced at line 135">Limit</a>.<span class="cons_Constructor"><span id="LimitNoOffset_3799_3812" title="Not referenced locally, nor via imports">LimitNoOffset</span></span> = &lt;<span class="cons_String">limit</span> &lt;<a href="#Exp_13248_13251" id="Exp_3823_3826" title="Defined at line 469, 517">Exp</a>&gt;&gt;
  <a href="#Limit_3624_3629" id="Limit_3831_3836" title="Referenced at line 135">Limit</a>.<span class="cons_Constructor"><span id="LimitNoLimit_3837_3849" title="Not referenced locally, nor via imports">LimitNoLimit</span></span> = &lt;<span class="cons_String">offset</span> &lt;<a href="#Exp_13248_13251" id="Exp_3861_3864" title="Defined at line 469, 517">Exp</a>&gt;&gt;
  <a href="#OptFilter_13538_13547" id="OptFilter_3869_3878" title="Referenced at line 472; ../WebDSL-Action.sdf3 line 309">OptFilter</a>.<span class="cons_Constructor"><span id="OptFilterSome_3879_3892" title="Not referenced locally, nor via imports">OptFilterSome</span></span> = <a href="#Filter_3195_3201" id="Filter_3895_3901" title="Defined at line 125, 129, 130, 131, 132, 133, 134, 135">Filter</a>
  <a href="#OptFilter_13538_13547" id="OptFilter_3904_3913" title="Referenced at line 472; ../WebDSL-Action.sdf3 line 309">OptFilter</a>.<span class="cons_Constructor"><span id="OptFilterNone_3914_3927" title="Not referenced locally, nor via imports">OptFilterNone</span></span> = &lt;&gt;

<span class="keyword">context-free sorts</span>

  <a href="#ForSeparator_4504_4516" id="ForSeparator_3956_3968" title="Referenced at line 169">ForSeparator</a> <a href="#ElseIfTempl_4927_4938" id="ElseIfTempl_3969_3980" title="Referenced at line 189">ElseIfTempl</a> <a href="#OptElseTempl_4942_4954" id="OptElseTempl_3981_3993" title="Referenced at line 189">OptElseTempl</a>

<span class="keyword">context-free syntax</span>

  <a href="#TemplateElement_13813_13828" id="TemplateElement_4018_4033" title="Referenced at line 477">TemplateElement</a>.<span class="cons_Constructor"><span id="For_4034_4037" title="Not referenced locally, nor via imports">For</span></span> = &lt;
    <span class="cons_String">for</span> <span class="cons_String">(</span> &lt;<a href="#VarId_14717_14722" id="VarId_4053_4058" title="Defined at line 521">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="#Sort_13078_13082" id="Sort_4063_4067" title="Defined at line 464">Sort</a>&gt; <span class="cons_String">in</span> &lt;<a href="#Exp_13248_13251" id="Exp_4073_4076" title="Defined at line 469, 517">Exp</a>&gt; &lt;<a href="#OptFilter_222_231" id="OptFilter_4079_4088" title="Defined at line 16, 142, 143">OptFilter</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_206_221" id="TemplateElement_4101_4116" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt;
    <span class="cons_String">}</span> &lt;<a href="#ForSeparator_3956_3968" id="ForSeparator_4126_4138" title="Defined at line 147, 171, 172">ForSeparator</a>&gt;
  &gt;
  <a href="#TemplateElement_13813_13828" id="TemplateElement_4146_4161" title="Referenced at line 477">TemplateElement</a>.<span class="cons_Constructor"><span id="ForInferred_4162_4173" title="Not referenced locally, nor via imports">ForInferred</span></span> = &lt;
    <span class="cons_String">for</span> <span class="cons_String">(</span> &lt;<a href="#VarId_14717_14722" id="VarId_4189_4194" title="Defined at line 521">VarId</a>&gt; <span class="cons_String">in</span> &lt;<a href="#Exp_13248_13251" id="Exp_4200_4203" title="Defined at line 469, 517">Exp</a>&gt; &lt;<a href="#OptFilter_222_231" id="OptFilter_4206_4215" title="Defined at line 16, 142, 143">OptFilter</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_206_221" id="TemplateElement_4228_4243" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt;
    <span class="cons_String">}</span> &lt;<a href="#ForSeparator_3956_3968" id="ForSeparator_4253_4265" title="Defined at line 147, 171, 172">ForSeparator</a>&gt;
  &gt;
  <a href="#TemplateElement_13813_13828" id="TemplateElement_4273_4288" title="Referenced at line 477">TemplateElement</a>.<span class="cons_Constructor"><span id="ForAll_4289_4295" title="Not referenced locally, nor via imports">ForAll</span></span> = &lt;
    <span class="cons_String">for</span> <span class="cons_String">(</span> &lt;<a href="#VarId_14717_14722" id="VarId_4311_4316" title="Defined at line 521">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="#Sort_13078_13082" id="Sort_4321_4325" title="Defined at line 464">Sort</a>&gt; &lt;<a href="#OptFilter_222_231" id="OptFilter_4328_4337" title="Defined at line 16, 142, 143">OptFilter</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_206_221" id="TemplateElement_4350_4365" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt;
    <span class="cons_String">}</span> &lt;<a href="#ForSeparator_3956_3968" id="ForSeparator_4375_4387" title="Defined at line 147, 171, 172">ForSeparator</a>&gt;
  &gt;
  <a href="#TemplateElement_13813_13828" id="TemplateElement_4395_4410" title="Referenced at line 477">TemplateElement</a>.<span class="cons_Constructor"><span id="ForCount_4411_4419" title="Not referenced locally, nor via imports">ForCount</span></span> = &lt;
    <span class="cons_String">for</span> <span class="cons_String">(</span> &lt;<a href="#VarId_14717_14722" id="VarId_4435_4440" title="Defined at line 521">VarId</a>&gt; <span class="cons_String">:</span> <span class="cons_String">Int</span> <span class="cons_String">from</span> &lt;<a href="#Exp_13248_13251" id="Exp_4454_4457" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">to</span> &lt;<a href="#Exp_13248_13251" id="Exp_4463_4466" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_206_221" id="TemplateElement_4479_4494" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt;
    <span class="cons_String">}</span> &lt;<a href="#ForSeparator_3956_3968" id="ForSeparator_4504_4516" title="Defined at line 147, 171, 172">ForSeparator</a>&gt;
  &gt;
  <a href="#ForSeparator_4504_4516" id="ForSeparator_4524_4536" title="Referenced at line 169">ForSeparator</a>.<span class="cons_Constructor"><span id="ForSeparator_4537_4549" title="Not referenced locally, nor via imports">ForSeparator</span></span> = &lt;<span class="cons_String">separated-by</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_206_221" id="TemplateElement_4569_4584" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt; <span class="cons_String">}</span>&gt;
  <a href="#ForSeparator_4504_4516" id="ForSeparator_4592_4604" title="Referenced at line 169">ForSeparator</a>.<span class="cons_Constructor"><span id="ForSeparatorNone_4605_4621" title="Not referenced locally, nor via imports">ForSeparatorNone</span></span> = &lt;&gt;

  <a href="#TemplateElement_13813_13828" id="TemplateElement_4630_4645" title="Referenced at line 477">TemplateElement</a>.<span class="cons_Constructor"><span id="IfTempl_4646_4653" title="Not referenced locally, nor via imports">IfTempl</span></span> = &lt;
    <span class="cons_String">if</span> <span class="cons_String">(</span> &lt;<a href="#Exp_13248_13251" id="Exp_4668_4671" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_206_221" id="TemplateElement_4684_4699" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt;
    <span class="cons_String">}</span> <span class="cons_String">else</span> <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_206_221" id="TemplateElement_4722_4737" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateElement_13813_13828" id="TemplateElement_4752_4767" title="Referenced at line 477">TemplateElement</a>.<span class="cons_Constructor"><span id="IfNoElseTempl_4768_4781" title="Not referenced locally, nor via imports">IfNoElseTempl</span></span> = &lt;
    <span class="cons_String">if</span> <span class="cons_String">(</span> &lt;<a href="#Exp_13248_13251" id="Exp_4796_4799" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_206_221" id="TemplateElement_4812_4827" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateElement_13813_13828" id="TemplateElement_4842_4857" title="Referenced at line 477">TemplateElement</a>.<span class="cons_Constructor"><span id="IfElseIfTempl_4858_4871" title="Not referenced locally, nor via imports">IfElseIfTempl</span></span> = &lt;
    <span class="cons_String">if</span> <span class="cons_String">(</span> &lt;<a href="#Exp_13248_13251" id="Exp_4886_4889" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_206_221" id="TemplateElement_4902_4917" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt;
    <span class="cons_String">}</span> &lt;<a href="#ElseIfTempl_3969_3980" id="ElseIfTempl_4927_4938" title="Defined at line 147, 196">ElseIfTempl</a>+&gt; &lt;<a href="#OptElseTempl_3981_3993" id="OptElseTempl_4942_4954" title="Defined at line 147, 191, 192">OptElseTempl</a>&gt;
  &gt;
  <a href="#OptElseTempl_4942_4954" id="OptElseTempl_4962_4974" title="Referenced at line 189">OptElseTempl</a>.<span class="cons_Constructor"><span id="OptElseTemplNone_4975_4991" title="Not referenced locally, nor via imports">OptElseTemplNone</span></span> = &lt;&gt;
  <a href="#OptElseTempl_4942_4954" id="OptElseTempl_4999_5011" title="Referenced at line 189">OptElseTempl</a>.<span class="cons_Constructor"><span id="ElseTempl_5012_5021" title="Not referenced locally, nor via imports">ElseTempl</span></span> = &lt;<span class="cons_String">else</span> <span class="cons_String">{</span>
    &lt;<a href="#TemplateElement_206_221" id="TemplateElement_5037_5052" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt;
  <span class="cons_String">}</span>&gt;

  <a href="#ElseIfTempl_4927_4938" id="ElseIfTempl_5063_5074" title="Referenced at line 189">ElseIfTempl</a>.<span class="cons_Constructor"><span id="ElseIfTempl_5075_5086" title="Not referenced locally, nor via imports">ElseIfTempl</span></span> = &lt;<span class="cons_String">else</span> <span class="cons_String">if</span> <span class="cons_String">(</span> &lt;<a href="#Exp_13248_13251" id="Exp_5101_5104" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span>
    &lt;<a href="#TemplateElement_206_221" id="TemplateElement_5115_5130" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt;
  <span class="cons_String">}</span>&gt;

<span class="keyword">lexical syntax</span>

  <a href="#TemplateId_12687_12697" id="TemplateId_5157_5167" title="Referenced at line 447">TemplateId</a> = <span class="cons_Lit">"if"</span> {<span class="keyword">reject</span>}
  <a href="#TemplateId_12687_12697" id="TemplateId_5186_5196" title="Referenced at line 447">TemplateId</a> = <span class="cons_Lit">"else"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free syntax</span>

  <a href="#TemplateElement_13813_13828" id="TemplateElement_5239_5254" title="Referenced at line 477">TemplateElement</a>.<span class="cons_Constructor"><span id="TemplateCase_5255_5267" title="Not referenced locally, nor via imports">TemplateCase</span></span> = &lt;
    <span class="cons_String">case</span> <span class="cons_String">(</span> &lt;{<a href="#Exp_13248_13251" id="Exp_5285_5288" title="Defined at line 469, 517">Exp</a> <span class="cons_Lit">","</span>}+&gt; <span class="cons_String">)</span> <span class="cons_String">{</span>
      &lt;<a href="#TemplateCaseAlt_290_305" id="TemplateCaseAlt_5307_5322" title="Defined at line 17, 212, 215">TemplateCaseAlt</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateCaseAlt_5307_5322" id="TemplateCaseAlt_5337_5352" title="Referenced at line 209">TemplateCaseAlt</a>.<span class="cons_Constructor"><span id="TemplateCaseAlt_5353_5368" title="Not referenced locally, nor via imports">TemplateCaseAlt</span></span> = &lt;
    &lt;<a href="#TemplateCaseAltExps_5907_5926" id="TemplateCaseAltExps_5378_5397" title="Defined at line 237, 241, 242">TemplateCaseAltExps</a>&gt; <span class="cons_String">{</span> &lt;<a href="#TemplateElement_206_221" id="TemplateElement_5402_5417" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateCaseAlt_5307_5322" id="TemplateCaseAlt_5428_5443" title="Referenced at line 209">TemplateCaseAlt</a>.<span class="cons_Constructor"><span id="TemplateCaseAltDefault_5444_5466" title="Not referenced locally, nor via imports">TemplateCaseAltDefault</span></span> = &lt;
    <span class="cons_String">default</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_206_221" id="TemplateElement_5486_5501" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateElement_13813_13828" id="TemplateElement_5512_5527" title="Referenced at line 477">TemplateElement</a>.<span class="cons_Constructor"><a href="#TemplateTypeCase_6092_6108" id="TemplateTypeCase_5528_5544" title="Referenced at line 246">TemplateTypeCase</a></span> = &lt;
    <span class="cons_String">typecase</span> <span class="cons_String">(</span> &lt;<a href="#Exp_13248_13251" id="Exp_5565_5568" title="Defined at line 469, 517">Exp</a>&gt; &lt;<a href="../WebDSL-Action.sdf3#OptTypeAlias_1884_1896" id="OptTypeAlias_5571_5583" title="Defined at ../WebDSL-Action.sdf3 line 91, 125, 126">OptTypeAlias</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span>
      &lt;<a href="#TemplateTypeCaseAlt_306_325" id="TemplateTypeCaseAlt_5596_5615" title="Defined at line 17, 223, 226">TemplateTypeCaseAlt</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateTypeCaseAlt_5596_5615" id="TemplateTypeCaseAlt_5630_5649" title="Referenced at line 220">TemplateTypeCaseAlt</a>.<span class="cons_Constructor"><span id="TemplateTypeCaseAlt_5650_5669" title="Not referenced locally, nor via imports">TemplateTypeCaseAlt</span></span> = &lt;
    &lt;<a href="#Sort_13078_13082" id="Sort_5679_5683" title="Defined at line 464">Sort</a>&gt; <span class="cons_String">{</span> &lt;<a href="#TemplateElement_206_221" id="TemplateElement_5688_5703" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateTypeCaseAlt_5596_5615" id="TemplateTypeCaseAlt_5714_5733" title="Referenced at line 220">TemplateTypeCaseAlt</a>.<span class="cons_Constructor"><span id="TemplateTypeCaseDefault_5734_5757" title="Not referenced locally, nor via imports">TemplateTypeCaseDefault</span></span> = &lt;
    <span class="cons_String">default</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_206_221" id="TemplateElement_5777_5792" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;

<span class="keyword">lexical syntax</span>

  <a href="#TemplateId_12687_12697" id="TemplateId_5820_5830" title="Referenced at line 447">TemplateId</a> = <span class="cons_Lit">"case"</span> {<span class="keyword">reject</span>}
  <a href="#TemplateId_12687_12697" id="TemplateId_5851_5861" title="Referenced at line 447">TemplateId</a> = <span class="cons_Lit">"typecase"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free sorts</span>

  <a href="#TemplateCaseAltExps_5378_5397" id="TemplateCaseAltExps_5907_5926" title="Referenced at line 213">TemplateCaseAltExps</a>

<span class="keyword">context-free syntax</span>

  <a href="#TemplateCaseAltExps_5378_5397" id="TemplateCaseAltExps_5951_5970" title="Referenced at line 213">TemplateCaseAltExps</a>.<span class="cons_Constructor"><span id="TemplateCaseExps_5971_5987" title="Not referenced locally, nor via imports">TemplateCaseExps</span></span> = &lt;&lt;{<a href="#Exp_13248_13251" id="Exp_5993_5996" title="Defined at line 469, 517">Exp</a> <span class="cons_Lit">","</span>}+&gt;&gt;
  <a href="#TemplateCaseAltExps_5378_5397" id="TemplateCaseAltExps_6007_6026" title="Referenced at line 213">TemplateCaseAltExps</a> = &lt;<span class="cons_String">default</span>&gt; {<span class="keyword">reject</span>}

<span class="keyword">context-free priorities</span>

  <a href="#TemplateElement_206_221" id="TemplateElement_6076_6091" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>.<span class="cons_Constructor"><a href="#TemplateTypeCase_5528_5544" id="TemplateTypeCase_6092_6108" title="Defined at line 218">TemplateTypeCase</a></span> &lt;2&gt; .&gt; <a href="#Exp_13248_13251" id="Exp_6116_6119" title="Defined at line 469, 517">Exp</a>.<span class="cons_Constructor"><a href="../WebDSL-Action.sdf3#Cast_5158_5162" id="Cast_6120_6124" title="Defined at ../WebDSL-Action.sdf3 line 253">Cast</a></span>

<span class="keyword">context-free sorts</span>

  <a href="#OptTCallArgs_6280_6292" id="OptTCallArgs_6148_6160" title="Referenced at line 255">OptTCallArgs</a> <a href="#OptTCallPropAssigns_6295_6314" id="OptTCallPropAssigns_6161_6180" title="Referenced at line 255">OptTCallPropAssigns</a> <a href="#TemplateBody_6317_6329" id="TemplateBody_6181_6193" title="Referenced at line 255">TemplateBody</a> <a href="#ArgDefine_6792_6801" id="ArgDefine_6194_6203" title="Referenced at line 268">ArgDefine</a>

<span class="keyword">context-free syntax</span>

  <a href="#TemplateCall_13228_13240" id="TemplateCall_6228_6240" title="Referenced at line 467; ../WebDSL-Ajax.sdf3 line 80">TemplateCall</a>.<span class="cons_Constructor"><span id="TemplateCall_6241_6253" title="Not referenced locally, nor via imports">TemplateCall</span></span> = &lt;
    &lt;<a href="#TemplateCallId_12079_12093" id="TemplateCallId_6263_6277" title="Defined at line 432, 446, 447">TemplateCallId</a>&gt; &lt;<a href="#OptTCallArgs_6148_6160" id="OptTCallArgs_6280_6292" title="Defined at line 250, 257, 258">OptTCallArgs</a>&gt; &lt;<a href="#OptTCallPropAssigns_6161_6180" id="OptTCallPropAssigns_6295_6314" title="Defined at line 250, 261, 262">OptTCallPropAssigns</a>&gt; &lt;<a href="#TemplateBody_6181_6193" id="TemplateBody_6317_6329" title="Defined at line 250, 263, 266, 267">TemplateBody</a>&gt;
  &gt;
  <a href="#OptTCallArgs_6280_6292" id="OptTCallArgs_6337_6349" title="Referenced at line 255">OptTCallArgs</a>.<span class="cons_Constructor"><span id="TCallArgs_6350_6359" title="Not referenced locally, nor via imports">TCallArgs</span></span> = &lt;<span class="cons_String">(</span> &lt;{<a href="#TemplateArgExp_275_289" id="TemplateArgExp_6367_6381" title="Defined at line 17, 259, 260">TemplateArgExp</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;
  <a href="#OptTCallArgs_6280_6292" id="OptTCallArgs_6394_6406" title="Referenced at line 255">OptTCallArgs</a>.<span class="cons_Constructor"><span id="OptTCallArgsNone_6407_6423" title="Not referenced locally, nor via imports">OptTCallArgsNone</span></span> = &lt;&gt;
  <a href="#TemplateArgExp_6367_6381" id="TemplateArgExp_6431_6445" title="Referenced at line 257">TemplateArgExp</a>.<span class="cons_Constructor"><span id="Exp_6446_6449" title="Not referenced locally, nor via imports">Exp</span></span> = <a href="#Exp_13248_13251" id="Exp_6452_6455" title="Defined at line 469, 517">Exp</a>
  <a href="#TemplateArgExp_6367_6381" id="TemplateArgExp_6458_6472" title="Referenced at line 257">TemplateArgExp</a>.<span class="cons_Constructor"><span id="TemplateElementsArgument_6473_6497" title="Not referenced locally, nor via imports">TemplateElementsArgument</span></span> = &lt;<span class="cons_String">{</span> &lt;<a href="#TemplateElement_206_221" id="TemplateElement_6504_6519" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt; <span class="cons_String">}</span>&gt;
  <a href="#OptTCallPropAssigns_6295_6314" id="OptTCallPropAssigns_6527_6546" title="Referenced at line 255">OptTCallPropAssigns</a>.<span class="cons_Constructor"><span id="TCallPropAssigns_6547_6563" title="Not referenced locally, nor via imports">TCallPropAssigns</span></span> = &lt;<span class="cons_String">[</span> &lt;{<a href="#PropertyAssignment_254_272" id="PropertyAssignment_6571_6589" title="Defined at line 16, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380">PropertyAssignment</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">]</span>&gt;
  <a href="#OptTCallPropAssigns_6295_6314" id="OptTCallPropAssigns_6602_6621" title="Referenced at line 255">OptTCallPropAssigns</a>.<span class="cons_Constructor"><span id="OptTCallPropAssignsNone_6622_6645" title="Not referenced locally, nor via imports">OptTCallPropAssignsNone</span></span> = &lt;&gt;
  <a href="#TemplateBody_6317_6329" id="TemplateBody_6653_6665" title="Referenced at line 255">TemplateBody</a>.<span class="cons_Constructor"><span id="TemplateBody_6666_6678" title="Not referenced locally, nor via imports">TemplateBody</span></span> = &lt;<span class="cons_String">{</span>
    &lt;<a href="#TemplateElement_206_221" id="TemplateElement_6689_6704" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt;
  <span class="cons_String">}</span>&gt;
  <a href="#TemplateBody_6317_6329" id="TemplateBody_6714_6726" title="Referenced at line 255">TemplateBody</a>.<span class="cons_Constructor"><span id="TemplateBodyNone_6727_6743" title="Not referenced locally, nor via imports">TemplateBodyNone</span></span> = &lt;&gt;
  <a href="#TemplateBody_6317_6329" id="TemplateBody_6751_6763" title="Referenced at line 255">TemplateBody</a>.<span class="cons_Constructor"><span id="TemplateWith_6764_6776" title="Not referenced locally, nor via imports">TemplateWith</span></span> = &lt;<span class="cons_String">with</span> <span class="cons_String">{</span>
    &lt;<a href="#ArgDefine_6194_6203" id="ArgDefine_6792_6801" title="Defined at line 250, 270">ArgDefine</a>*&gt;
  <span class="cons_String">}</span>&gt;
  <a href="#ArgDefine_6792_6801" id="ArgDefine_6811_6820" title="Referenced at line 268">ArgDefine</a>.<span class="cons_Constructor"><span id="ArgDefine_6821_6830" title="Not referenced locally, nor via imports">ArgDefine</span></span> = &lt;
    &lt;<a href="#TemplateCallId_12079_12093" id="TemplateCallId_6840_6854" title="Defined at line 432, 446, 447">TemplateCallId</a>&gt; <span class="cons_String">(</span> &lt;{<a href="../WebDSL-Core.sdf3#FormalArg_103_112" id="FormalArg_6860_6869" title="Defined at ../WebDSL-Core.sdf3 line 10, 36">FormalArg</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span> <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_206_221" id="TemplateElement_6888_6903" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateCall_13228_13240" id="TemplateCall_6918_6930" title="Referenced at line 467; ../WebDSL-Ajax.sdf3 line 80">TemplateCall</a> = &lt;<span class="cons_String">with</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_206_221" id="TemplateElement_6942_6957" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt; <span class="cons_String">}</span>&gt; {<span class="keyword">reject</span>}

<span class="keyword">context-free syntax</span>

  <a href="#TemplateElement_13813_13828" id="TemplateElement_6996_7011" title="Referenced at line 477">TemplateElement</a>.<span class="cons_Constructor"><span id="NavigateCallParenthesesNoProps_7012_7042" title="Not referenced locally, nor via imports">NavigateCallParenthesesNoProps</span></span> = &lt;
    <span class="cons_String">navigate</span> <span class="cons_String">(</span> &lt;<a href="#PageCall_232_240" id="PageCall_7063_7071" title="Defined at line 16, 291">PageCall</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_206_221" id="TemplateElement_7078_7093" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateElement_13813_13828" id="TemplateElement_7104_7119" title="Referenced at line 477">TemplateElement</a>.<span class="cons_Constructor"><span id="NavigateCallParentheses_7120_7143" title="Not referenced locally, nor via imports">NavigateCallParentheses</span></span> = &lt;
    <span class="cons_String">navigate</span> <span class="cons_String">(</span> &lt;<a href="#PageCall_232_240" id="PageCall_7164_7172" title="Defined at line 16, 291">PageCall</a>&gt; <span class="cons_String">)</span> <span class="cons_String">[</span> &lt;{<a href="#PropertyAssignment_254_272" id="PropertyAssignment_7180_7198" title="Defined at line 16, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380">PropertyAssignment</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">]</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_206_221" id="TemplateElement_7211_7226" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateElement_13813_13828" id="TemplateElement_7237_7252" title="Referenced at line 477">TemplateElement</a>.<span class="cons_Constructor"><span id="NavigateCallNoProps_7253_7272" title="Not referenced locally, nor via imports">NavigateCallNoProps</span></span> = &lt;
    <span class="cons_String">navigate</span> &lt;<a href="#PageCall_232_240" id="PageCall_7291_7299" title="Defined at line 16, 291">PageCall</a>&gt; <span class="cons_String">{</span> &lt;<a href="#TemplateElement_206_221" id="TemplateElement_7304_7319" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateElement_13813_13828" id="TemplateElement_7330_7345" title="Referenced at line 477">TemplateElement</a>.<span class="cons_Constructor"><span id="NavigateCall_7346_7358" title="Not referenced locally, nor via imports">NavigateCall</span></span> = &lt;
    <span class="cons_String">navigate</span> &lt;<a href="#PageCall_232_240" id="PageCall_7377_7385" title="Defined at line 16, 291">PageCall</a>&gt; <span class="cons_String">[</span> &lt;{<a href="#PropertyAssignment_254_272" id="PropertyAssignment_7391_7409" title="Defined at line 16, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380">PropertyAssignment</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">]</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_206_221" id="TemplateElement_7422_7437" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#PageCall_7377_7385" id="PageCall_7448_7456" title="Referenced at line 289; ../WebDSL-Action.sdf3 line 77; ../WebDSL-Ajax.sdf3 line 49">PageCall</a>.<span class="cons_Constructor"><span id="PageCall_7457_7465" title="Not referenced locally, nor via imports">PageCall</span></span> = &lt;
    &lt;<a href="../WebDSL-Lexical.sdf3#PageId_89_95" id="PageId_7475_7481" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 17">PageId</a>&gt; <span class="cons_String">(</span> &lt;{<a href="#Exp_13248_13251" id="Exp_7487_7490" title="Defined at line 469, 517">Exp</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>
  &gt;

<span class="keyword">context-free sorts</span>

  <a href="#ActionCallOrInline_10901_10919" id="ActionCallOrInline_7527_7545" title="Referenced at line 382">ActionCallOrInline</a>

<span class="keyword">context-free syntax</span>

  <a href="#TemplateElement_13813_13828" id="TemplateElement_7570_7585" title="Referenced at line 477">TemplateElement</a>.<span class="cons_Constructor"><span id="SubmitActionNoProps_7586_7605" title="Not referenced locally, nor via imports">SubmitActionNoProps</span></span> = &lt;
    <span class="cons_String">action</span> <span class="cons_String">(</span> &lt;<a href="#Exp_13248_13251" id="Exp_7624_7627" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="#ActionCallOrInline_7527_7545" id="ActionCallOrInline_7632_7650" title="Defined at line 297, 349, 350">ActionCallOrInline</a>&gt; <span class="cons_String">)</span>
  &gt;
  <a href="#TemplateElement_13813_13828" id="TemplateElement_7660_7675" title="Referenced at line 477">TemplateElement</a>.<span class="cons_Constructor"><span id="SubmitAction_7676_7688" title="Not referenced locally, nor via imports">SubmitAction</span></span> = &lt;
    <span class="cons_String">action</span> <span class="cons_String">(</span> &lt;<a href="#Exp_13248_13251" id="Exp_7707_7710" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="#ActionCallOrInline_7527_7545" id="ActionCallOrInline_7715_7733" title="Defined at line 297, 349, 350">ActionCallOrInline</a>&gt; <span class="cons_String">)</span> <span class="cons_String">[</span> &lt;{<a href="#PropertyAssignment_254_272" id="PropertyAssignment_7741_7759" title="Defined at line 16, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380">PropertyAssignment</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">]</span>
  &gt;
  <a href="#TemplateElement_13813_13828" id="TemplateElement_7775_7790" title="Referenced at line 477">TemplateElement</a>.<span class="cons_Constructor"><span id="SubmitLinkActionNoProps_7791_7814" title="Not referenced locally, nor via imports">SubmitLinkActionNoProps</span></span> = &lt;
    <span class="cons_String">actionLink</span> <span class="cons_String">(</span> &lt;<a href="#Exp_13248_13251" id="Exp_7837_7840" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="#ActionCallOrInline_7527_7545" id="ActionCallOrInline_7845_7863" title="Defined at line 297, 349, 350">ActionCallOrInline</a>&gt; <span class="cons_String">)</span>
  &gt;
  <a href="#TemplateElement_13813_13828" id="TemplateElement_7873_7888" title="Referenced at line 477">TemplateElement</a>.<span class="cons_Constructor"><span id="SubmitLinkAction_7889_7905" title="Not referenced locally, nor via imports">SubmitLinkAction</span></span> = &lt;
    <span class="cons_String">actionLink</span> <span class="cons_String">(</span> &lt;<a href="#Exp_13248_13251" id="Exp_7928_7931" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="#ActionCallOrInline_7527_7545" id="ActionCallOrInline_7936_7954" title="Defined at line 297, 349, 350">ActionCallOrInline</a>&gt; <span class="cons_String">)</span> <span class="cons_String">[</span> &lt;{<a href="#PropertyAssignment_254_272" id="PropertyAssignment_7962_7980" title="Defined at line 16, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380">PropertyAssignment</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">]</span>
  &gt;
  <a href="#TemplateElement_13813_13828" id="TemplateElement_7996_8011" title="Referenced at line 477">TemplateElement</a>.<span class="cons_Constructor"><span id="SubmitNoProps_8012_8025" title="Not referenced locally, nor via imports">SubmitNoProps</span></span> = &lt;
    <span class="cons_String">submit</span> <span class="cons_String">(</span> &lt;<a href="#Exp_13248_13251" id="Exp_8044_8047" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="#ActionCallOrInline_7527_7545" id="ActionCallOrInline_8052_8070" title="Defined at line 297, 349, 350">ActionCallOrInline</a>&gt; <span class="cons_String">)</span>
  &gt;
  <a href="#TemplateElement_13813_13828" id="TemplateElement_8080_8095" title="Referenced at line 477">TemplateElement</a>.<span class="cons_Constructor"><span id="Submit_8096_8102" title="Not referenced locally, nor via imports">Submit</span></span> = &lt;
    <span class="cons_String">submit</span> <span class="cons_String">(</span> &lt;<a href="#Exp_13248_13251" id="Exp_8121_8124" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="#ActionCallOrInline_7527_7545" id="ActionCallOrInline_8129_8147" title="Defined at line 297, 349, 350">ActionCallOrInline</a>&gt; <span class="cons_String">)</span> <span class="cons_String">[</span> &lt;{<a href="#PropertyAssignment_254_272" id="PropertyAssignment_8155_8173" title="Defined at line 16, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380">PropertyAssignment</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">]</span>
  &gt;
  <a href="#TemplateElement_13813_13828" id="TemplateElement_8189_8204" title="Referenced at line 477">TemplateElement</a>.<span class="cons_Constructor"><span id="SubmitLinkNoProps_8205_8222" title="Not referenced locally, nor via imports">SubmitLinkNoProps</span></span> = &lt;
    <span class="cons_String">submitlink</span> <span class="cons_String">(</span> &lt;<a href="#Exp_13248_13251" id="Exp_8245_8248" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="#ActionCallOrInline_7527_7545" id="ActionCallOrInline_8253_8271" title="Defined at line 297, 349, 350">ActionCallOrInline</a>&gt; <span class="cons_String">)</span>
  &gt;
  <a href="#TemplateElement_13813_13828" id="TemplateElement_8281_8296" title="Referenced at line 477">TemplateElement</a>.<span class="cons_Constructor"><span id="SubmitLink_8297_8307" title="Not referenced locally, nor via imports">SubmitLink</span></span> = &lt;
    <span class="cons_String">submitlink</span> <span class="cons_String">(</span> &lt;<a href="#Exp_13248_13251" id="Exp_8330_8333" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="#ActionCallOrInline_7527_7545" id="ActionCallOrInline_8338_8356" title="Defined at line 297, 349, 350">ActionCallOrInline</a>&gt; <span class="cons_String">)</span> <span class="cons_String">[</span> &lt;{<a href="#PropertyAssignment_254_272" id="PropertyAssignment_8364_8382" title="Defined at line 16, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380">PropertyAssignment</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">]</span>
  &gt;
  <a href="#TemplateElement_13813_13828" id="TemplateElement_8398_8413" title="Referenced at line 477">TemplateElement</a>.<span class="cons_Constructor"><span id="SubmitElemNoProps_8414_8431" title="Not referenced locally, nor via imports">SubmitElemNoProps</span></span> = &lt;
    <span class="cons_String">submit</span> &lt;<a href="#ActionCallOrInline_7527_7545" id="ActionCallOrInline_8448_8466" title="Defined at line 297, 349, 350">ActionCallOrInline</a>&gt; <span class="cons_String">{</span> &lt;<a href="#TemplateElement_206_221" id="TemplateElement_8471_8486" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateElement_13813_13828" id="TemplateElement_8497_8512" title="Referenced at line 477">TemplateElement</a>.<span class="cons_Constructor"><span id="SubmitElem_8513_8523" title="Not referenced locally, nor via imports">SubmitElem</span></span> = &lt;
    <span class="cons_String">submit</span> &lt;<a href="#ActionCallOrInline_7527_7545" id="ActionCallOrInline_8540_8558" title="Defined at line 297, 349, 350">ActionCallOrInline</a>&gt; <span class="cons_String">[</span> &lt;{<a href="#PropertyAssignment_254_272" id="PropertyAssignment_8564_8582" title="Defined at line 16, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380">PropertyAssignment</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">]</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_206_221" id="TemplateElement_8595_8610" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateElement_13813_13828" id="TemplateElement_8621_8636" title="Referenced at line 477">TemplateElement</a>.<span class="cons_Constructor"><span id="SubmitLinkElemNoProps_8637_8658" title="Not referenced locally, nor via imports">SubmitLinkElemNoProps</span></span> = &lt;
    <span class="cons_String">submitlink</span> &lt;<a href="#ActionCallOrInline_7527_7545" id="ActionCallOrInline_8679_8697" title="Defined at line 297, 349, 350">ActionCallOrInline</a>&gt; <span class="cons_String">{</span> &lt;<a href="#TemplateElement_206_221" id="TemplateElement_8702_8717" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateElement_13813_13828" id="TemplateElement_8728_8743" title="Referenced at line 477">TemplateElement</a>.<span class="cons_Constructor"><span id="SubmitLinkElem_8744_8758" title="Not referenced locally, nor via imports">SubmitLinkElem</span></span> = &lt;
    <span class="cons_String">submitlink</span> &lt;<a href="#ActionCallOrInline_7527_7545" id="ActionCallOrInline_8779_8797" title="Defined at line 297, 349, 350">ActionCallOrInline</a>&gt; <span class="cons_String">[</span> &lt;{<a href="#PropertyAssignment_254_272" id="PropertyAssignment_8803_8821" title="Defined at line 16, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380">PropertyAssignment</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">]</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_206_221" id="TemplateElement_8834_8849" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateElement_13813_13828" id="TemplateElement_8860_8875" title="Referenced at line 477">TemplateElement</a>.<span class="cons_Constructor"><span id="DownloadLinkNoProps_8876_8895" title="Not referenced locally, nor via imports">DownloadLinkNoProps</span></span> = &lt;
    <span class="cons_String">downloadlink</span> &lt;<a href="#ActionCallOrInline_7527_7545" id="ActionCallOrInline_8918_8936" title="Defined at line 297, 349, 350">ActionCallOrInline</a>&gt; <span class="cons_String">{</span> &lt;<a href="#TemplateElement_206_221" id="TemplateElement_8941_8956" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateElement_13813_13828" id="TemplateElement_8967_8982" title="Referenced at line 477">TemplateElement</a>.<span class="cons_Constructor"><span id="DownloadLink_8983_8995" title="Not referenced locally, nor via imports">DownloadLink</span></span> = &lt;
    <span class="cons_String">downloadlink</span> &lt;<a href="#ActionCallOrInline_7527_7545" id="ActionCallOrInline_9018_9036" title="Defined at line 297, 349, 350">ActionCallOrInline</a>&gt; <span class="cons_String">[</span> &lt;{<a href="#PropertyAssignment_254_272" id="PropertyAssignment_9042_9060" title="Defined at line 16, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380">PropertyAssignment</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">]</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_206_221" id="TemplateElement_9073_9088" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateElement_13813_13828" id="TemplateElement_9099_9114" title="Referenced at line 477">TemplateElement</a>.<span class="cons_Constructor"><span id="OutputImageNoProps_9115_9133" title="Not referenced locally, nor via imports">OutputImageNoProps</span></span> = &lt;
    <span class="cons_String">outputimage</span> &lt;<a href="#ActionCallOrInline_7527_7545" id="ActionCallOrInline_9155_9173" title="Defined at line 297, 349, 350">ActionCallOrInline</a>&gt; <span class="cons_String">{</span> &lt;<a href="#TemplateElement_206_221" id="TemplateElement_9178_9193" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateElement_13813_13828" id="TemplateElement_9204_9219" title="Referenced at line 477">TemplateElement</a>.<span class="cons_Constructor"><span id="OutputImage_9220_9231" title="Not referenced locally, nor via imports">OutputImage</span></span> = &lt;
    <span class="cons_String">outputimage</span> &lt;<a href="#ActionCallOrInline_7527_7545" id="ActionCallOrInline_9253_9271" title="Defined at line 297, 349, 350">ActionCallOrInline</a>&gt; <span class="cons_String">[</span> &lt;{<a href="#PropertyAssignment_254_272" id="PropertyAssignment_9277_9295" title="Defined at line 16, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380">PropertyAssignment</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">]</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_206_221" id="TemplateElement_9308_9323" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#ActionCallOrInline_10901_10919" id="ActionCallOrInline_9334_9352" title="Referenced at line 382">ActionCallOrInline</a>.<span class="cons_Constructor"><span id="ActionCall_9353_9363" title="Not referenced locally, nor via imports">ActionCall</span></span> = <a href="../WebDSL-Action.sdf3#ThisCall_1590_1598" id="ThisCall_9366_9374" title="Defined at ../WebDSL-Action.sdf3 line 77, 179, 250, 406, 407, 408, 409, 411, 412">ThisCall</a>
  <a href="#ActionCallOrInline_10901_10919" id="ActionCallOrInline_9377_9395" title="Referenced at line 382">ActionCallOrInline</a>.<span class="cons_Constructor"><span id="InlineAction_9396_9408" title="Not referenced locally, nor via imports">InlineAction</span></span> = &lt;<span class="cons_String">action</span> &lt;<a href="../WebDSL-Action.sdf3#Block_145_150" id="Block_9420_9425" title="Defined at ../WebDSL-Action.sdf3 line 13, 45">Block</a>&gt;&gt;

<span class="keyword">lexical syntax</span>

  <a href="#TemplateId_12687_12697" id="TemplateId_9447_9457" title="Referenced at line 447">TemplateId</a> = <span class="cons_Lit">"action"</span> {<span class="keyword">reject</span>}
  <a href="#TemplateId_12687_12697" id="TemplateId_9480_9490" title="Referenced at line 447">TemplateId</a> = <span class="cons_Lit">"actionLink"</span> {<span class="keyword">reject</span>}
  <a href="#TemplateId_12687_12697" id="TemplateId_9517_9527" title="Referenced at line 447">TemplateId</a> = <span class="cons_Lit">"submit"</span> {<span class="keyword">reject</span>}
  <a href="#TemplateId_12687_12697" id="TemplateId_9550_9560" title="Referenced at line 447">TemplateId</a> = <span class="cons_Lit">"submitlink"</span> {<span class="keyword">reject</span>}
  <a href="#TemplateId_12687_12697" id="TemplateId_9587_9597" title="Referenced at line 447">TemplateId</a> = <span class="cons_Lit">"downloadlink"</span> {<span class="keyword">reject</span>}
  <a href="#TemplateId_12687_12697" id="TemplateId_9626_9636" title="Referenced at line 447">TemplateId</a> = <span class="cons_Lit">"outputimage"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free sorts</span>

  <a href="#ActionCallOrInlineOrExp_11171_11194" id="ActionCallOrInlineOrExp_9685_9708" title="Referenced at line 388">ActionCallOrInlineOrExp</a> <a href="#PropertySubmitMultiple_10731_10753" id="PropertySubmitMultiple_9709_9731" title="Referenced at line 380">PropertySubmitMultiple</a> <a href="#PropertySubmitExp_10970_10987" id="PropertySubmitExp_9732_9749" title="Referenced at line 383">PropertySubmitExp</a>

<span class="keyword">context-free syntax</span>

  <a href="#PropertyAssignment_9277_9295" id="PropertyAssignment_9774_9792" title="Referenced at line 347">PropertyAssignment</a>.<span class="cons_Constructor"><span id="PropertySubmitColon_9793_9812" title="Not referenced locally, nor via imports">PropertySubmitColon</span></span> = &lt;&lt;<a href="#SubmitProp_412_422" id="SubmitProp_9817_9827" title="Defined at line 22, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428">SubmitProp</a>&gt; <span class="cons_String">:</span> &lt;<a href="#ActionCallOrInlineOrExp_9685_9708" id="ActionCallOrInlineOrExp_9832_9855" title="Defined at line 363, 382, 383">ActionCallOrInlineOrExp</a>&gt;&gt;
  <a href="#PropertyAssignment_9277_9295" id="PropertyAssignment_9860_9878" title="Referenced at line 347">PropertyAssignment</a>.<span class="cons_Constructor"><span id="PropertySubmitAssign_9879_9899" title="Not referenced locally, nor via imports">PropertySubmitAssign</span></span> = &lt;&lt;<a href="#SubmitProp_412_422" id="SubmitProp_9904_9914" title="Defined at line 22, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428">SubmitProp</a>&gt; <span class="cons_String">:=</span> &lt;<a href="#ActionCallOrInlineOrExp_9685_9708" id="ActionCallOrInlineOrExp_9920_9943" title="Defined at line 363, 382, 383">ActionCallOrInlineOrExp</a>&gt;&gt;
  <a href="#PropertyAssignment_9277_9295" id="PropertyAssignment_9948_9966" title="Referenced at line 347">PropertyAssignment</a>.<span class="cons_Constructor"><span id="PropertySubmit_9967_9981" title="Not referenced locally, nor via imports">PropertySubmit</span></span> = &lt;&lt;<a href="#SubmitProp_412_422" id="SubmitProp_9986_9996" title="Defined at line 22, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428">SubmitProp</a>&gt; <span class="cons_String">=</span> &lt;<a href="#ActionCallOrInlineOrExp_9685_9708" id="ActionCallOrInlineOrExp_10001_10024" title="Defined at line 363, 382, 383">ActionCallOrInlineOrExp</a>&gt;&gt;
  <a href="#PropertyAssignment_9277_9295" id="PropertyAssignment_10029_10047" title="Referenced at line 347">PropertyAssignment</a>.<span class="cons_Constructor"><span id="PropertyAssignmentColon_10048_10071" title="Not referenced locally, nor via imports">PropertyAssignmentColon</span></span> = &lt;&lt;<a href="#PropertyAssignmentId_11265_11285" id="PropertyAssignmentId_10076_10096" title="Defined at line 394, 398, 399">PropertyAssignmentId</a>&gt; <span class="cons_String">:</span> &lt;<a href="#Exp_13248_13251" id="Exp_10101_10104" title="Defined at line 469, 517">Exp</a>&gt;&gt;
  <a href="#PropertyAssignment_9277_9295" id="PropertyAssignment_10109_10127" title="Referenced at line 347">PropertyAssignment</a>.<span class="cons_Constructor"><span id="PropertyAssignmentAssign_10128_10152" title="Not referenced locally, nor via imports">PropertyAssignmentAssign</span></span> = &lt;&lt;<a href="#PropertyAssignmentId_11265_11285" id="PropertyAssignmentId_10157_10177" title="Defined at line 394, 398, 399">PropertyAssignmentId</a>&gt; <span class="cons_String">:=</span> &lt;<a href="#Exp_13248_13251" id="Exp_10183_10186" title="Defined at line 469, 517">Exp</a>&gt;&gt;
  <a href="#PropertyAssignment_9277_9295" id="PropertyAssignment_10191_10209" title="Referenced at line 347">PropertyAssignment</a>.<span class="cons_Constructor"><span id="PropertyAssignment_10210_10228" title="Not referenced locally, nor via imports">PropertyAssignment</span></span> = &lt;&lt;<a href="#PropertyAssignmentId_11265_11285" id="PropertyAssignmentId_10233_10253" title="Defined at line 394, 398, 399">PropertyAssignmentId</a>&gt; <span class="cons_String">=</span> &lt;<a href="#Exp_13248_13251" id="Exp_10258_10261" title="Defined at line 469, 517">Exp</a>&gt;&gt;
  <a href="#PropertyAssignment_9277_9295" id="PropertyAssignment_10266_10284" title="Referenced at line 347">PropertyAssignment</a>.<span class="cons_Constructor"><span id="TemplateCallPropertyAjax_10285_10309" title="Not referenced locally, nor via imports">TemplateCallPropertyAjax</span></span> = &lt;<span class="cons_String">ajax</span>&gt;
  <a href="#PropertyAssignment_9277_9295" id="PropertyAssignment_10321_10339" title="Referenced at line 347">PropertyAssignment</a>.<span class="cons_Constructor"><span id="TemplateCallPropertyNoLoadingFeedback_10340_10377" title="Not referenced locally, nor via imports">TemplateCallPropertyNoLoadingFeedback</span></span> = &lt;<span class="cons_String">no</span> <span class="cons_String">loading</span> <span class="cons_String">feedback</span>&gt;
  <a href="#PropertyAssignment_9277_9295" id="PropertyAssignment_10404_10422" title="Referenced at line 347">PropertyAssignment</a>.<span class="cons_Constructor"><span id="TemplateCallPropertySecure_10423_10449" title="Not referenced locally, nor via imports">TemplateCallPropertySecure</span></span> = &lt;<span class="cons_String">secure</span>&gt;
  <a href="#PropertyAssignment_9277_9295" id="PropertyAssignment_10463_10481" title="Referenced at line 347">PropertyAssignment</a>.<span class="cons_Constructor"><span id="TemplateCallPropertyIgnoreValidation_10482_10518" title="Not referenced locally, nor via imports">TemplateCallPropertyIgnoreValidation</span></span> = &lt;<span class="cons_String">ignore-validation</span>&gt;
  <a href="#PropertyAssignment_9277_9295" id="PropertyAssignment_10543_10561" title="Referenced at line 347">PropertyAssignment</a>.<span class="cons_Constructor"><span id="TemplateCallPropertyNotSecure_10562_10591" title="Not referenced locally, nor via imports">TemplateCallPropertyNotSecure</span></span> = &lt;<span class="cons_String">not-secure</span>&gt;
  <a href="#PropertyAssignment_9277_9295" id="PropertyAssignment_10609_10627" title="Referenced at line 347">PropertyAssignment</a>.<span class="cons_Constructor"><span id="TemplateCallPropertyNotNull_10628_10655" title="Not referenced locally, nor via imports">TemplateCallPropertyNotNull</span></span> = &lt;<span class="cons_String">not</span> <span class="cons_String">null</span>&gt;
  <a href="#PropertyAssignment_9277_9295" id="PropertyAssignment_10671_10689" title="Referenced at line 347">PropertyAssignment</a> = <a href="../WebDSL-XML.sdf3#CommonAttribute_1497_1512" id="CommonAttribute_10692_10707" title="Defined at ../WebDSL-XML.sdf3 line 72, 78, 79, 80">CommonAttribute</a>
  <a href="#PropertyAssignment_9277_9295" id="PropertyAssignment_10710_10728" title="Referenced at line 347">PropertyAssignment</a> = <a href="#PropertySubmitMultiple_9709_9731" id="PropertySubmitMultiple_10731_10753" title="Defined at line 363, 381, 388">PropertySubmitMultiple</a>
  <a href="#PropertySubmitMultiple_10731_10753" id="PropertySubmitMultiple_10756_10778" title="Referenced at line 380">PropertySubmitMultiple</a>.<span class="cons_Constructor"><span id="PropertySubmitMultiple_10779_10801" title="Not referenced locally, nor via imports">PropertySubmitMultiple</span></span> = &lt;&lt;<a href="#SubmitProp_412_422" id="SubmitProp_10806_10816" title="Defined at line 22, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428">SubmitProp</a>&gt; <span class="cons_String">=</span> &lt;{<a href="#ActionCallOrInlineOrExp_9685_9708" id="ActionCallOrInlineOrExp_10822_10845" title="Defined at line 363, 382, 383">ActionCallOrInlineOrExp</a> <span class="cons_Lit">";"</span>}+&gt;&gt;
  <a href="#ActionCallOrInlineOrExp_11171_11194" id="ActionCallOrInlineOrExp_10856_10879" title="Referenced at line 388">ActionCallOrInlineOrExp</a>.<span class="cons_Constructor"><span id="ActionCallOrInline_10880_10898" title="Not referenced locally, nor via imports">ActionCallOrInline</span></span> = <a href="#ActionCallOrInline_7527_7545" id="ActionCallOrInline_10901_10919" title="Defined at line 297, 349, 350">ActionCallOrInline</a>
  <a href="#ActionCallOrInlineOrExp_11171_11194" id="ActionCallOrInlineOrExp_10922_10945" title="Referenced at line 388">ActionCallOrInlineOrExp</a>.<span class="cons_Constructor"><span id="ActionCallOrInlineExp_10946_10967" title="Not referenced locally, nor via imports">ActionCallOrInlineExp</span></span> = <a href="#PropertySubmitExp_9732_9749" id="PropertySubmitExp_10970_10987" title="Defined at line 363, 384, 390">PropertySubmitExp</a>
  <a href="#PropertySubmitExp_10970_10987" id="PropertySubmitExp_10990_11007" title="Referenced at line 383">PropertySubmitExp</a>.<span class="cons_Constructor"><span id="PropertySubmitExp_11008_11025" title="Not referenced locally, nor via imports">PropertySubmitExp</span></span> = <a href="#Exp_13248_13251" id="Exp_11028_11031" title="Defined at line 469, 517">Exp</a>
  <a href="#TemplateElement_13813_13828" id="TemplateElement_11034_11049" title="Referenced at line 477">TemplateElement</a> = <a href="../WebDSL-Action.sdf3#OutputShorthand_5265_5280" id="OutputShorthand_11052_11067" title="Defined at ../WebDSL-Action.sdf3 line 258">OutputShorthand</a>

  <span class="layout">// require at least two actions to get this constructor</span>
  <a href="#PropertySubmitMultiple_10731_10753" id="PropertySubmitMultiple_11129_11151" title="Referenced at line 380">PropertySubmitMultiple</a> = &lt;&lt;<a href="#SubmitProp_412_422" id="SubmitProp_11156_11166" title="Defined at line 22, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428">SubmitProp</a>&gt; <span class="cons_String">=</span> &lt;<a href="#ActionCallOrInlineOrExp_9685_9708" id="ActionCallOrInlineOrExp_11171_11194" title="Defined at line 363, 382, 383">ActionCallOrInlineOrExp</a>&gt;&gt; {<span class="keyword">reject</span>}

  <a href="#PropertySubmitExp_10970_10987" id="PropertySubmitExp_11209_11226" title="Referenced at line 383">PropertySubmitExp</a> = <a href="../WebDSL-Action.sdf3#ThisCall_1590_1598" id="ThisCall_11229_11237" title="Defined at ../WebDSL-Action.sdf3 line 77, 179, 250, 406, 407, 408, 409, 411, 412">ThisCall</a> {<span class="keyword">reject</span>}

<span class="keyword">lexical sorts</span>

  <a href="#PropertyAssignmentId_10233_10253" id="PropertyAssignmentId_11265_11285" title="Referenced at line 372">PropertyAssignmentId</a>

<span class="keyword">lexical syntax</span>

  <a href="#PropertyAssignmentId_10233_10253" id="PropertyAssignmentId_11305_11325" title="Referenced at line 372">PropertyAssignmentId</a> = <a href="../WebDSL-Lexical.sdf3#ExtendedId_96_106" id="ExtendedId_11328_11338" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 18">ExtendedId</a>
  <a href="#PropertyAssignmentId_10233_10253" id="PropertyAssignmentId_11341_11361" title="Referenced at line 372">PropertyAssignmentId</a> = <a href="#SubmitProp_412_422" id="SubmitProp_11364_11374" title="Defined at line 22, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428">SubmitProp</a> {<span class="keyword">reject</span>}

<span class="keyword">syntax</span>

  <a href="#TemplateElement_13813_13828" id="TemplateElement_11395_11410" title="Referenced at line 477">TemplateElement</a><span class="keyword">-CF</span>.<span class="cons_Constructor"><span id="Text_11414_11418" title="Not referenced locally, nor via imports">Text</span></span> = <span class="cons_Lit">"\""</span> <a href="../WebDSL-Action.sdf3#StringPart_5492_5502" id="StringPart_11426_11436" title="Defined at ../WebDSL-Action.sdf3 line 269">StringPart</a><span class="keyword">-CF</span>* <span class="cons_Lit">"\""</span>

<span class="keyword">lexical syntax</span>

  <a href="#SubmitProp_11364_11374" id="SubmitProp_11465_11475" title="Referenced at line 399">SubmitProp</a> = <span class="cons_Lit">"onabort"</span>
  <a href="#SubmitProp_11364_11374" id="SubmitProp_11490_11500" title="Referenced at line 399">SubmitProp</a> = <span class="cons_Lit">"onblur"</span>
  <a href="#SubmitProp_11364_11374" id="SubmitProp_11514_11524" title="Referenced at line 399">SubmitProp</a> = <span class="cons_Lit">"onchange"</span>
  <a href="#SubmitProp_11364_11374" id="SubmitProp_11540_11550" title="Referenced at line 399">SubmitProp</a> = <span class="cons_Lit">"onclick"</span>
  <a href="#SubmitProp_11364_11374" id="SubmitProp_11565_11575" title="Referenced at line 399">SubmitProp</a> = <span class="cons_Lit">"ondblclick"</span>
  <a href="#SubmitProp_11364_11374" id="SubmitProp_11593_11603" title="Referenced at line 399">SubmitProp</a> = <span class="cons_Lit">"onerror"</span>
  <a href="#SubmitProp_11364_11374" id="SubmitProp_11618_11628" title="Referenced at line 399">SubmitProp</a> = <span class="cons_Lit">"onfocus"</span>
  <a href="#SubmitProp_11364_11374" id="SubmitProp_11643_11653" title="Referenced at line 399">SubmitProp</a> = <span class="cons_Lit">"onkeydown"</span>
  <a href="#SubmitProp_11364_11374" id="SubmitProp_11670_11680" title="Referenced at line 399">SubmitProp</a> = <span class="cons_Lit">"onkeypress"</span>
  <a href="#SubmitProp_11364_11374" id="SubmitProp_11698_11708" title="Referenced at line 399">SubmitProp</a> = <span class="cons_Lit">"onkeyup"</span>
  <a href="#SubmitProp_11364_11374" id="SubmitProp_11723_11733" title="Referenced at line 399">SubmitProp</a> = <span class="cons_Lit">"onload"</span>
  <a href="#SubmitProp_11364_11374" id="SubmitProp_11747_11757" title="Referenced at line 399">SubmitProp</a> = <span class="cons_Lit">"onmousedown"</span>
  <a href="#SubmitProp_11364_11374" id="SubmitProp_11776_11786" title="Referenced at line 399">SubmitProp</a> = <span class="cons_Lit">"onmousemove"</span>
  <a href="#SubmitProp_11364_11374" id="SubmitProp_11805_11815" title="Referenced at line 399">SubmitProp</a> = <span class="cons_Lit">"onmouseout"</span>
  <a href="#SubmitProp_11364_11374" id="SubmitProp_11833_11843" title="Referenced at line 399">SubmitProp</a> = <span class="cons_Lit">"onmouseover"</span>
  <a href="#SubmitProp_11364_11374" id="SubmitProp_11862_11872" title="Referenced at line 399">SubmitProp</a> = <span class="cons_Lit">"onmouseup"</span>
  <a href="#SubmitProp_11364_11374" id="SubmitProp_11889_11899" title="Referenced at line 399">SubmitProp</a> = <span class="cons_Lit">"onreset"</span>
  <a href="#SubmitProp_11364_11374" id="SubmitProp_11914_11924" title="Referenced at line 399">SubmitProp</a> = <span class="cons_Lit">"onresize"</span>
  <a href="#SubmitProp_11364_11374" id="SubmitProp_11940_11950" title="Referenced at line 399">SubmitProp</a> = <span class="cons_Lit">"onselect"</span>
  <a href="#SubmitProp_11364_11374" id="SubmitProp_11966_11976" title="Referenced at line 399">SubmitProp</a> = <span class="cons_Lit">"onsubmit"</span>
  <a href="#SubmitProp_11364_11374" id="SubmitProp_11992_12002" title="Referenced at line 399">SubmitProp</a> = <span class="cons_Lit">"onunload"</span>
  <a href="#SubmitProp_11364_11374" id="SubmitProp_12018_12028" title="Referenced at line 399">SubmitProp</a> = <span class="cons_Lit">"oninput"</span>

<span class="keyword">context-free sorts</span>

  <a href="#ActionModifier_12470_12484" id="ActionModifier_12064_12078" title="Referenced at line 444">ActionModifier</a> <a href="#TemplateCallId_6840_6854" id="TemplateCallId_12079_12093" title="Referenced at line 271">TemplateCallId</a>

<span class="keyword">context-free syntax</span>

  <a href="#TemplateCall_13228_13240" id="TemplateCall_12118_12130" title="Referenced at line 467; ../WebDSL-Ajax.sdf3 line 80">TemplateCall</a> = &lt;<span class="cons_String">separated-by</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_206_221" id="TemplateElement_12150_12165" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt; <span class="cons_String">}</span>&gt; {<span class="keyword">reject</span>}
  <span id="Definition_12182_12192" title="Not referenced locally, nor via imports">Definition</span>.<span class="cons_Constructor"><span id="GlobalInit_12193_12203" title="Not referenced locally, nor via imports">GlobalInit</span></span> = &lt;
    <span class="cons_String">init</span> &lt;<a href="../WebDSL-Action.sdf3#Block_145_150" id="Block_12218_12223" title="Defined at ../WebDSL-Action.sdf3 line 13, 45">Block</a>&gt;
  &gt;
  <a href="#TemplateElement_13813_13828" id="TemplateElement_12231_12246" title="Referenced at line 477">TemplateElement</a>.<span class="cons_Constructor"><span id="DataBindAction_12247_12261" title="Not referenced locally, nor via imports">DataBindAction</span></span> = &lt;<span class="cons_String">databind</span> &lt;<a href="../WebDSL-Action.sdf3#Block_145_150" id="Block_12275_12280" title="Defined at ../WebDSL-Action.sdf3 line 13, 45">Block</a>&gt;&gt;
  <a href="#TemplateElement_13813_13828" id="TemplateElement_12285_12300" title="Referenced at line 477">TemplateElement</a>.<span class="cons_Constructor"><span id="RenderAction_12301_12313" title="Not referenced locally, nor via imports">RenderAction</span></span> = &lt;<span class="cons_String">render</span> &lt;<a href="../WebDSL-Action.sdf3#Block_145_150" id="Block_12325_12330" title="Defined at ../WebDSL-Action.sdf3 line 13, 45">Block</a>&gt;&gt;
  <a href="#TemplateElement_13813_13828" id="TemplateElement_12335_12350" title="Referenced at line 477">TemplateElement</a>.<span class="cons_Constructor"><span id="AllPhasesAction_12351_12366" title="Not referenced locally, nor via imports">AllPhasesAction</span></span> = &lt;<span class="cons_String">allphases</span> &lt;<a href="../WebDSL-Action.sdf3#Block_145_150" id="Block_12381_12386" title="Defined at ../WebDSL-Action.sdf3 line 13, 45">Block</a>&gt;&gt;
  <a href="#TemplateElement_13813_13828" id="TemplateElement_12391_12406" title="Referenced at line 477">TemplateElement</a>.<span class="cons_Constructor"><span id="ValidateAction_12407_12421" title="Not referenced locally, nor via imports">ValidateAction</span></span> = &lt;<span class="cons_String">validate</span> &lt;<a href="../WebDSL-Action.sdf3#Block_145_150" id="Block_12435_12440" title="Defined at ../WebDSL-Action.sdf3 line 13, 45">Block</a>&gt;&gt;
  <a href="#Action_2163_2169" id="Action_12445_12451" title="Referenced at line 75">Action</a>.<span class="cons_Constructor"><span id="Action_12452_12458" title="Not referenced locally, nor via imports">Action</span></span> = &lt;<span class="cons_String">action</span> &lt;<a href="#ActionModifier_12064_12078" id="ActionModifier_12470_12484" title="Defined at line 432, 445">ActionModifier</a>*&gt; &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_12488_12490" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; &lt;<a href="../WebDSL-Core.sdf3#OptFormalArgs_113_126" id="OptFormalArgs_12493_12506" title="Defined at ../WebDSL-Core.sdf3 line 10, 37, 38">OptFormalArgs</a>&gt; &lt;<a href="../WebDSL-Action.sdf3#Block_145_150" id="Block_12509_12514" title="Defined at ../WebDSL-Action.sdf3 line 13, 45">Block</a>&gt;&gt;
  <a href="#ActionModifier_12470_12484" id="ActionModifier_12519_12533" title="Referenced at line 444">ActionModifier</a>.<span class="cons_Constructor"><span id="ActionModifierIgnoreValidation_12534_12564" title="Not referenced locally, nor via imports">ActionModifierIgnoreValidation</span></span> = &lt;<span class="cons_String">ignore-validation</span>&gt;
  <a href="#TemplateCallId_6840_6854" id="TemplateCallId_12589_12603" title="Referenced at line 271">TemplateCallId</a>.<span class="cons_Constructor"><span id="QualifiedElementsCall_12604_12625" title="Not referenced locally, nor via imports">QualifiedElementsCall</span></span> = &lt;&lt;<a href="#TemplateId_2229_2239" id="TemplateId_12630_12640" title="Defined at line 81, 82, 120, 121, 202, 203, 232, 233, 354, 355, 356, 357, 358, 359, 508">TemplateId</a>&gt; <span class="cons_String">.elements</span>&gt;
  <a href="#TemplateCallId_6840_6854" id="TemplateCallId_12655_12669" title="Referenced at line 271">TemplateCallId</a>.<span class="cons_Constructor"><span id="TemplateCallId_12670_12684" title="Not referenced locally, nor via imports">TemplateCallId</span></span> = <a href="#TemplateId_2229_2239" id="TemplateId_12687_12697" title="Defined at line 81, 82, 120, 121, 202, 203, 232, 233, 354, 355, 356, 357, 358, 359, 508">TemplateId</a>

<span class="keyword">context-free syntax</span> <span class="layout">// reject rules</span>

  <a href="#TemplateCall_13228_13240" id="TemplateCall_12738_12750" title="Referenced at line 467; ../WebDSL-Ajax.sdf3 line 80">TemplateCall</a> = &lt;<span class="cons_String">init</span> &lt;<a href="../WebDSL-Action.sdf3#Block_145_150" id="Block_12760_12765" title="Defined at ../WebDSL-Action.sdf3 line 13, 45">Block</a>&gt;&gt; {<span class="keyword">reject</span>}
  <a href="#TemplateCall_13228_13240" id="TemplateCall_12779_12791" title="Referenced at line 467; ../WebDSL-Ajax.sdf3 line 80">TemplateCall</a> = &lt;<span class="cons_String">databind</span> &lt;<a href="../WebDSL-Action.sdf3#Block_145_150" id="Block_12805_12810" title="Defined at ../WebDSL-Action.sdf3 line 13, 45">Block</a>&gt;&gt; {<span class="keyword">reject</span>}
  <a href="#TemplateCall_13228_13240" id="TemplateCall_12824_12836" title="Referenced at line 467; ../WebDSL-Ajax.sdf3 line 80">TemplateCall</a> = &lt;<span class="cons_String">render</span> &lt;<a href="../WebDSL-Action.sdf3#Block_145_150" id="Block_12848_12853" title="Defined at ../WebDSL-Action.sdf3 line 13, 45">Block</a>&gt;&gt; {<span class="keyword">reject</span>}
  <a href="#TemplateCall_13228_13240" id="TemplateCall_12867_12879" title="Referenced at line 467; ../WebDSL-Ajax.sdf3 line 80">TemplateCall</a> = &lt;<span class="cons_String">allphases</span> &lt;<a href="../WebDSL-Action.sdf3#Block_145_150" id="Block_12894_12899" title="Defined at ../WebDSL-Action.sdf3 line 13, 45">Block</a>&gt;&gt; {<span class="keyword">reject</span>}
  <a href="#TemplateCall_13228_13240" id="TemplateCall_12913_12925" title="Referenced at line 467; ../WebDSL-Ajax.sdf3 line 80">TemplateCall</a> = &lt;<span class="cons_String">action</span>&gt; {<span class="keyword">reject</span>}
  <a href="#TemplateCall_13228_13240" id="TemplateCall_12948_12960" title="Referenced at line 467; ../WebDSL-Ajax.sdf3 line 80">TemplateCall</a> = &lt;<span class="cons_String">validate</span> &lt;<a href="../WebDSL-Action.sdf3#Block_145_150" id="Block_12974_12979" title="Defined at ../WebDSL-Action.sdf3 line 13, 45">Block</a>&gt;&gt; {<span class="keyword">reject</span>}

<span class="keyword">context-free sorts</span>

  <a href="#FormalVarArg_13109_13121" id="FormalVarArg_13014_13026" title="Referenced at line 464">FormalVarArg</a> <a href="#ExpVarArg_13651_13660" id="ExpVarArg_13027_13036" title="Referenced at line 473">ExpVarArg</a> <a href="#ExpOrTemplateArg_13862_13878" id="ExpOrTemplateArg_13037_13053" title="Referenced at line 481">ExpOrTemplateArg</a>

<span class="keyword">context-free syntax</span>

  <a href="#Sort_13531_13535" id="Sort_13078_13082" title="Referenced at line 472; ../WebDSL-Prefetch.sdf3 line 40">Sort</a>.<span class="cons_Constructor"><span id="TemplateVarArgSort_13083_13101" title="Not referenced locally, nor via imports">TemplateVarArgSort</span></span> = &lt;<span class="cons_String">[</span> &lt;{<a href="#FormalVarArg_13014_13026" id="FormalVarArg_13109_13121" title="Defined at line 460, 465">FormalVarArg</a> <span class="cons_Lit">","</span>}+&gt; <span class="cons_String">]</span>&gt;
  <a href="#FormalVarArg_13109_13121" id="FormalVarArg_13134_13146" title="Referenced at line 464">FormalVarArg</a>.<span class="cons_Constructor"><span id="FormalVarArg_13147_13159" title="Not referenced locally, nor via imports">FormalVarArg</span></span> = &lt;&lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_13164_13166" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">:</span> &lt;<a href="#Sort_13078_13082" id="Sort_13171_13175" title="Defined at line 464">Sort</a>&gt;&gt;
  <a href="#TemplateCall_13228_13240" id="TemplateCall_13180_13192" title="Referenced at line 467; ../WebDSL-Ajax.sdf3 line 80">TemplateCall</a>.<span class="cons_Constructor"><span id="MemberTemplateCall_13193_13211" title="Not referenced locally, nor via imports">MemberTemplateCall</span></span> = &lt;
    &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_13221_13223" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">.</span> &lt;<a href="#TemplateCall_241_253" id="TemplateCall_13228_13240" title="Defined at line 16, 77, 254, 275, 436, 451, 452, 453, 454, 455, 456, 466">TemplateCall</a>&gt;
  &gt;
  <a href="#Exp_13899_13902" id="Exp_13248_13251" title="Referenced at line 481; ../WebDSL-Ajax.sdf3 line 110; ../WebDSL-Attributes.sdf3 line 20; ../WebDSL-DataValidation.sdf3 line 30; ../WebDSL-Dispatch.sdf3 line 46; ../WebDSL-EntityDerive.sdf3 line 15; ../WebDSL-Exception.sdf3 line 19; ../WebDSL-JavaScript.sdf3 line 28; ../WebDSL-Service.sdf3 line 30">Exp</a>.<span class="cons_Constructor"><span id="TemplateVarArgExp_13252_13269" title="Not referenced locally, nor via imports">TemplateVarArgExp</span></span> = &lt;<span class="cons_String">[</span> &lt;{<a href="#ExpVarArg_13027_13036" id="ExpVarArg_13277_13286" title="Defined at line 460, 470, 471, 472, 473, 474">ExpVarArg</a> <span class="cons_Lit">","</span>}+&gt; <span class="cons_String">]</span>&gt;
  <a href="#ExpVarArg_13651_13660" id="ExpVarArg_13299_13308" title="Referenced at line 473">ExpVarArg</a>.<span class="cons_Constructor"><span id="ExpVarArgFor_13309_13321" title="Not referenced locally, nor via imports">ExpVarArgFor</span></span> = &lt;<span class="cons_String">for</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_13332_13334" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">:</span> &lt;<a href="#Sort_13078_13082" id="Sort_13339_13343" title="Defined at line 464">Sort</a>&gt; <span class="cons_String">in</span> &lt;<a href="#Exp_13248_13251" id="Exp_13349_13352" title="Defined at line 469, 517">Exp</a>&gt; &lt;<a href="#OptFilter_222_231" id="OptFilter_13355_13364" title="Defined at line 16, 142, 143">OptFilter</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span> &lt;{<a href="#ExpVarArg_13027_13036" id="ExpVarArg_13372_13381" title="Defined at line 460, 470, 471, 472, 473, 474">ExpVarArg</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">}</span>&gt;
  <a href="#ExpVarArg_13651_13660" id="ExpVarArg_13394_13403" title="Referenced at line 473">ExpVarArg</a>.<span class="cons_Constructor"><span id="ExpVarArgForInferred_13404_13424" title="Not referenced locally, nor via imports">ExpVarArgForInferred</span></span> = &lt;<span class="cons_String">for</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_13435_13437" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">in</span> &lt;<a href="#Exp_13248_13251" id="Exp_13443_13446" title="Defined at line 469, 517">Exp</a>&gt; &lt;<a href="#OptFilter_222_231" id="OptFilter_13449_13458" title="Defined at line 16, 142, 143">OptFilter</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span> &lt;{<a href="#ExpVarArg_13027_13036" id="ExpVarArg_13466_13475" title="Defined at line 460, 470, 471, 472, 473, 474">ExpVarArg</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">}</span>&gt;
  <a href="#ExpVarArg_13651_13660" id="ExpVarArg_13488_13497" title="Referenced at line 473">ExpVarArg</a>.<span class="cons_Constructor"><span id="ExpVarArgForAll_13498_13513" title="Not referenced locally, nor via imports">ExpVarArgForAll</span></span> = &lt;<span class="cons_String">for</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_13524_13526" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">:</span> &lt;<a href="#Sort_13078_13082" id="Sort_13531_13535" title="Defined at line 464">Sort</a>&gt; &lt;<a href="#OptFilter_222_231" id="OptFilter_13538_13547" title="Defined at line 16, 142, 143">OptFilter</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span> &lt;{<a href="#ExpVarArg_13027_13036" id="ExpVarArg_13555_13564" title="Defined at line 460, 470, 471, 472, 473, 474">ExpVarArg</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">}</span>&gt;
  <a href="#ExpVarArg_13651_13660" id="ExpVarArg_13577_13586" title="Referenced at line 473">ExpVarArg</a>.<span class="cons_Constructor"><span id="ExpVarArgForCount_13587_13604" title="Not referenced locally, nor via imports">ExpVarArgForCount</span></span> = &lt;<span class="cons_String">for</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_13615_13617" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">:</span> <span class="cons_String">Int</span> <span class="cons_String">from</span> &lt;<a href="#Exp_13248_13251" id="Exp_13631_13634" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">to</span> &lt;<a href="#Exp_13248_13251" id="Exp_13640_13643" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span> &lt;{<a href="#ExpVarArg_13027_13036" id="ExpVarArg_13651_13660" title="Defined at line 460, 470, 471, 472, 473, 474">ExpVarArg</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">}</span>&gt;
  <a href="#ExpVarArg_13651_13660" id="ExpVarArg_13673_13682" title="Referenced at line 473">ExpVarArg</a>.<span class="cons_Constructor"><span id="ExpVarArg_13683_13692" title="Not referenced locally, nor via imports">ExpVarArg</span></span> = &lt;<span class="cons_String">(</span> &lt;{<a href="#ExpOrTemplateArg_13037_13053" id="ExpOrTemplateArg_13700_13716" title="Defined at line 460, 476, 477">ExpOrTemplateArg</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;

  <a href="#ExpOrTemplateArg_13862_13878" id="ExpOrTemplateArg_13730_13746" title="Referenced at line 481">ExpOrTemplateArg</a>.<span class="cons_Constructor"><a href="#ExpVarArgExp_13879_13891" id="ExpVarArgExp_13747_13759" title="Referenced at line 481">ExpVarArgExp</a></span> = &lt;&lt;<a href="#Exp_13248_13251" id="Exp_13764_13767" title="Defined at line 469, 517">Exp</a>&gt;&gt;
  <a href="#ExpOrTemplateArg_13862_13878" id="ExpOrTemplateArg_13772_13788" title="Referenced at line 481">ExpOrTemplateArg</a>.<span class="cons_Constructor"><span id="ExpVarArgElements_13789_13806" title="Not referenced locally, nor via imports">ExpVarArgElements</span></span> = &lt;<span class="cons_String">{</span> &lt;<a href="#TemplateElement_206_221" id="TemplateElement_13813_13828" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt; <span class="cons_String">}</span>&gt;

<span class="keyword">context-free priorities</span>

  <a href="#ExpOrTemplateArg_13037_13053" id="ExpOrTemplateArg_13862_13878" title="Defined at line 460, 476, 477">ExpOrTemplateArg</a>.<span class="cons_Constructor"><a href="#ExpVarArgExp_13747_13759" id="ExpVarArgExp_13879_13891" title="Defined at line 476">ExpVarArgExp</a></span> &lt;0&gt; .&gt; <a href="#Exp_13248_13251" id="Exp_13899_13902" title="Defined at line 469, 517">Exp</a>.<span class="cons_Constructor"><a href="../WebDSL-Action.sdf3#SetCreation_4762_4773" id="SetCreation_13903_13914" title="Defined at ../WebDSL-Action.sdf3 line 238">SetCreation</a></span>

<span class="keyword">context-free sorts</span>

  <a href="#HTMLWrapper_14350_14361" id="HTMLWrapper_13938_13949" title="Referenced at line 498">HTMLWrapper</a> <a href="#HTMLWrapperAssigns_14508_14526" id="HTMLWrapperAssigns_13950_13968" title="Referenced at line 504">HTMLWrapperAssigns</a> <a href="#HTMLWrapperBody_14432_14447" id="HTMLWrapperBody_13969_13984" title="Referenced at line 501">HTMLWrapperBody</a> <a href="#HTMLWrapperAssign_14138_14155" id="HTMLWrapperAssign_13985_14002" title="Referenced at line 492">HTMLWrapperAssign</a>

<span class="keyword">context-free syntax</span>

  <a href="#HTMLWrapper_14350_14361" id="HTMLWrapper_14027_14038" title="Referenced at line 498">HTMLWrapper</a>.<span class="cons_Constructor"><span id="HTMLWrapper_14039_14050" title="Not referenced locally, nor via imports">HTMLWrapper</span></span> = &lt;
    <span class="cons_String">htmlwrapper</span> &lt;<a href="#HTMLWrapperBody_13969_13984" id="HTMLWrapperBody_14072_14087" title="Defined at line 485, 504">HTMLWrapperBody</a>&gt;
  &gt;
  <a href="#HTMLWrapperAssigns_14508_14526" id="HTMLWrapperAssigns_14095_14113" title="Referenced at line 504">HTMLWrapperAssigns</a>.<span class="cons_Constructor"><span id="HTMLWrapperAssigns_14114_14132" title="Not referenced locally, nor via imports">HTMLWrapperAssigns</span></span> = &lt;<span class="cons_String">[</span>&lt;<a href="#HTMLWrapperAssign_13985_14002" id="HTMLWrapperAssign_14138_14155" title="Defined at line 485, 495, 496">HTMLWrapperAssign</a>*&gt; <span class="cons_String">]</span>&gt;
  <a href="#HTMLWrapperAssigns_14508_14526" id="HTMLWrapperAssigns_14163_14181" title="Referenced at line 504">HTMLWrapperAssigns</a>.<span class="cons_Constructor"><span id="HTMLWrapperAssignsNone_14182_14204" title="Not referenced locally, nor via imports">HTMLWrapperAssignsNone</span></span> = &lt;&gt;

  <a href="#HTMLWrapperAssign_14138_14155" id="HTMLWrapperAssign_14213_14230" title="Referenced at line 492">HTMLWrapperAssign</a>.<span class="cons_Constructor"><span id="HTMLWrapperAssign_14231_14248" title="Not referenced locally, nor via imports">HTMLWrapperAssign</span></span> = &lt;&lt;<a href="../WebDSL-Attributes.sdf3#Attribute_200_209" id="Attribute_14253_14262" title="Defined at ../WebDSL-Attributes.sdf3 line 11, 44">Attribute</a>&gt;&gt;
  <a href="#HTMLWrapperAssign_14138_14155" id="HTMLWrapperAssign_14267_14284" title="Referenced at line 492">HTMLWrapperAssign</a>.<span class="cons_Constructor"><span id="HTMLWrapperAssignComma_14285_14307" title="Not referenced locally, nor via imports">HTMLWrapperAssignComma</span></span> = &lt;&lt;<a href="../WebDSL-Attributes.sdf3#Attribute_200_209" id="Attribute_14312_14321" title="Defined at ../WebDSL-Attributes.sdf3 line 11, 44">Attribute</a>&gt; <span class="cons_String">,</span>&gt;

  <a href="#TemplateDefinition_3037_3055" id="TemplateDefinition_14329_14347" title="Referenced at line 115">TemplateDefinition</a> = <a href="#HTMLWrapper_13938_13949" id="HTMLWrapper_14350_14361" title="Defined at line 485, 489">HTMLWrapper</a>
  <a href="#TemplateDefinition_3037_3055" id="TemplateDefinition_14364_14382" title="Referenced at line 115">TemplateDefinition</a>.<span class="cons_Constructor"><span id="HTMLWrapperMultiple_14383_14402" title="Not referenced locally, nor via imports">HTMLWrapperMultiple</span></span> = &lt;
    <span class="cons_String">htmlwrapper</span> <span class="cons_String">{</span>
      &lt;<a href="#HTMLWrapperBody_13969_13984" id="HTMLWrapperBody_14432_14447" title="Defined at line 485, 504">HTMLWrapperBody</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#HTMLWrapperBody_14432_14447" id="HTMLWrapperBody_14462_14477" title="Referenced at line 501">HTMLWrapperBody</a>.<span class="cons_Constructor"><span id="HTMLWrapperBody_14478_14493" title="Not referenced locally, nor via imports">HTMLWrapperBody</span></span> = &lt;&lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_14498_14500" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_14503_14505" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; &lt;<a href="#HTMLWrapperAssigns_13950_13968" id="HTMLWrapperAssigns_14508_14526" title="Defined at line 485, 492, 493">HTMLWrapperAssigns</a>&gt;&gt;

<span class="keyword">lexical syntax</span>

  <a href="#TemplateId_12687_12697" id="TemplateId_14548_14558" title="Referenced at line 447">TemplateId</a> = <span class="cons_Lit">"htmlwrapper"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free sorts</span>

  <a href="#TemplateName_14769_14781" id="TemplateName_14607_14619" title="Referenced at line 525">TemplateName</a>

<span class="keyword">context-free syntax</span>

  <a href="#TemplateName_14769_14781" id="TemplateName_14644_14656" title="Referenced at line 525">TemplateName</a>.<span class="cons_Constructor"><span id="TemplateName_14657_14669" title="Not referenced locally, nor via imports">TemplateName</span></span> = &lt;<span class="cons_String">id</span>&gt;
  <a href="#Exp_13899_13902" id="Exp_14679_14682" title="Referenced at line 481; ../WebDSL-Ajax.sdf3 line 110; ../WebDSL-Attributes.sdf3 line 20; ../WebDSL-DataValidation.sdf3 line 30; ../WebDSL-Dispatch.sdf3 line 46; ../WebDSL-EntityDerive.sdf3 line 15; ../WebDSL-Exception.sdf3 line 19; ../WebDSL-JavaScript.sdf3 line 28; ../WebDSL-Service.sdf3 line 30">Exp</a> = <a href="#TemplateName_14607_14619" id="TemplateName_14685_14697" title="Defined at line 512, 516">TemplateName</a>

<span class="keyword">lexical syntax</span>

  <a href="#VarId_4435_4440" id="VarId_14717_14722" title="Referenced at line 167; ../WebDSL-Exception.sdf3 line 29; ../WebDSL-Prefetch.sdf3 line 65">VarId</a> = <span class="cons_Lit">"id"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free restrictions</span>

  <a href="#TemplateName_14607_14619" id="TemplateName_14769_14781" title="Defined at line 512, 516">TemplateName</a> -/- [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_]

</code></pre></td></tr></tbody></table></div>