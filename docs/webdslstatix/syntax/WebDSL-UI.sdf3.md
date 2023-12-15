---
title: WebDSL-UI.sdf3
hide:
  - toc
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
<td class="code"><pre><code><span class="keyword">module</span> <button class="modal-open" id="WebDSL-UI_1_8" title="Multi-file references" data-urls="../HQL.sdf3/#WebDSL-UI_7_3 line 7; ../WebDSL-AccessControl.sdf3/#WebDSL-UI_8_3 line 8; ../WebDSL-Action.sdf3/#WebDSL-UI_8_3 line 8; ../WebDSL-Ajax.sdf3/#WebDSL-UI_6_3 line 6; ../WebDSL-Attributes.sdf3/#WebDSL-UI_7_3 line 7; ../WebDSL-DataValidation.sdf3/#WebDSL-UI_6_3 line 6; ../WebDSL-Dispatch.sdf3/#WebDSL-UI_7_3 line 7; ../WebDSL-EntityDerive.sdf3/#WebDSL-UI_7_3 line 7; ../WebDSL-Exception.sdf3/#WebDSL-UI_7_3 line 7; ../WebDSL-Expand.sdf3/#WebDSL-UI_7_3 line 7; ../WebDSL-JavaScript.sdf3/#WebDSL-UI_6_3 line 6; ../WebDSL-Prefetch.sdf3/#WebDSL-UI_7_3 line 7; ../WebDSL-Service.sdf3/#WebDSL-UI_7_3 line 7; ../webdsl-statix.sdf3/#WebDSL-UI_27_3 line 27; ../WebDSL-XML.sdf3/#WebDSL-UI_5_3 line 5">WebDSL-UI</button>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3/#WebDSL-Action_1_8" id="WebDSL-Action_4_3" title="Defined at ../WebDSL-Action.sdf3 line 1">WebDSL-Action</a>
  <a href="../WebDSL-Attributes.sdf3/#WebDSL-Attributes_1_8" id="WebDSL-Attributes_5_3" title="Defined at ../WebDSL-Attributes.sdf3 line 1">WebDSL-Attributes</a>
  <a href="../WebDSL-Core.sdf3/#WebDSL-Core_1_8" id="WebDSL-Core_6_3" title="Defined at ../WebDSL-Core.sdf3 line 1">WebDSL-Core</a>
  <a href="../WebDSL-Lexical.sdf3/#WebDSL-Lexical_1_8" id="WebDSL-Lexical_7_3" title="Defined at ../WebDSL-Lexical.sdf3 line 1">WebDSL-Lexical</a>
  <a href="../WebDSL-XML.sdf3/#WebDSL-XML_1_8" id="WebDSL-XML_8_3" title="Defined at ../WebDSL-XML.sdf3 line 1">WebDSL-XML</a>

<span class="keyword">template options</span>

  <span class="keyword">keyword</span> -/- [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\-\_]

<span class="keyword">context-free sorts</span>

  <a href="#TemplateDefinition_26_35" id="TemplateDefinition_16_3" title="Referenced at line 26, 115">TemplateDefinition</a> <button class="modal-open" id="Modifier_16_22" title="Multi-file references" data-urls="#Modifier_28_13 line 28, 36, 42, 47, 52, 77; ../WebDSL-Service.sdf3/#Modifier_17_14 line 17">Modifier</button> <a href="#TemplateElement_29_8" id="TemplateElement_16_31" title="Referenced at line 29, 43, 48, 53, 153, 158, 163, 168, 171, 176, 178, 183, 188, 193, 197, 213, 216, 224, 227, 246, 260, 264, 272, 275, 280, 283, 286, 289, 326, 329, 332, 335, 338, 341, 344, 347, 436, 477">TemplateElement</a> <button class="modal-open" id="OptFilter_16_47" title="Multi-file references" data-urls="#OptFilter_152_38 line 152, 157, 162, 470, 471, 472; ../WebDSL-Action.sdf3/#OptFilter_150_38 line 150, 153, 156, 308, 309">OptFilter</button> <button class="modal-open" id="PageCall_16_57" title="Multi-file references" data-urls="#PageCall_280_17 line 280, 283, 286, 289; ../WebDSL-Action.sdf3/#PageCall_71_11 line 71, 74, 77; ../WebDSL-Ajax.sdf3/#PageCall_25_45 line 25, 49">PageCall</button> <button class="modal-open" id="TemplateCall_16_66" title="Multi-file references" data-urls="#TemplateCall_116_21 line 116, 467; ../WebDSL-Ajax.sdf3/#TemplateCall_20_49 line 20, 33, 47, 77, 78, 79, 80">TemplateCall</button> <a href="#PropertyAssignment_261_47" id="PropertyAssignment_16_79" title="Referenced at line 261, 283, 289, 305, 311, 317, 323, 329, 335, 341, 347">PropertyAssignment</a>
  <a href="#TemplateArgExp_257_33" id="TemplateArgExp_17_3" title="Referenced at line 257">TemplateArgExp</a> <a href="#TemplateCaseAlt_209_8" id="TemplateCaseAlt_17_18" title="Referenced at line 209">TemplateCaseAlt</a> <a href="#TemplateTypeCaseAlt_220_8" id="TemplateTypeCaseAlt_17_34" title="Referenced at line 220">TemplateTypeCaseAlt</a> <a href="#OptTemplateArgs_28_46" id="OptTemplateArgs_17_54" title="Referenced at line 28, 42, 47, 52">OptTemplateArgs</a> <a href="#TemplateArg_32_46" id="TemplateArg_17_70" title="Referenced at line 32">TemplateArg</a> <a href="#OptLocalRedefineArgs_36_76" id="OptLocalRedefineArgs_17_82" title="Referenced at line 36">OptLocalRedefineArgs</a>
  <a href="#LocalRedefineArg_39_53" id="LocalRedefineArg_18_3" title="Referenced at line 39">LocalRedefineArg</a>

<span class="keyword">lexical sorts</span>

  <a href="#SubmitProp_367_46" id="SubmitProp_22_3" title="Referenced at line 367, 368, 369, 381, 388, 399">SubmitProp</a>

<span class="keyword">context-free syntax</span>

  <span id="Definition_26_3" title="Not referenced">Definition</span>.<span class="cons_Constructor"><span id="TemplateDefinition_26_14" title="Not referenced">TemplateDefinition</span></span> = <a href="#TemplateDefinition_16_3" id="TemplateDefinition_26_35" title="Defined at line 16, 27, 35, 41, 46, 51, 498, 499">TemplateDefinition</a>
  <a href="#TemplateDefinition_26_35" id="TemplateDefinition_27_3" title="Referenced at line 26, 115">TemplateDefinition</a>.<span class="cons_Constructor"><span id="Define_27_22" title="Not referenced">Define</span></span> = &lt;
    <span class="cons_String">define</span> &lt;<a href="#Modifier_16_22" id="Modifier_28_13" title="Defined at line 16, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">Modifier</a>*&gt; &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_28_25" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; &lt;<a href="../WebDSL-Core.sdf3/#OptFormalArgs_10_13" id="OptFormalArgs_28_30" title="Defined at ../WebDSL-Core.sdf3 line 10, 37, 38">OptFormalArgs</a>&gt; &lt;<a href="#OptTemplateArgs_17_54" id="OptTemplateArgs_28_46" title="Defined at line 17, 32, 33">OptTemplateArgs</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_16_31" id="TemplateElement_29_8" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#OptTemplateArgs_28_46" id="OptTemplateArgs_32_3" title="Referenced at line 28, 42, 47, 52">OptTemplateArgs</a>.<span class="cons_Constructor"><span id="TemplateArgs_32_19" title="Not referenced">TemplateArgs</span></span> = &lt;<span class="cons_String">requires</span> &lt;{<a href="#TemplateArg_17_70" id="TemplateArg_32_46" title="Defined at line 17, 34">TemplateArg</a> <span class="cons_Lit">","</span>}*&gt;&gt;
  <a href="#OptTemplateArgs_28_46" id="OptTemplateArgs_33_3" title="Referenced at line 28, 42, 47, 52">OptTemplateArgs</a>.<span class="cons_Constructor"><span id="OptTemplateArgsNone_33_19" title="Not referenced">OptTemplateArgsNone</span></span> = &lt;&gt;
  <a href="#TemplateArg_32_46" id="TemplateArg_34_3" title="Referenced at line 32">TemplateArg</a>.<span class="cons_Constructor"><span id="TemplateArg_34_15" title="Not referenced">TemplateArg</span></span> = &lt;&lt;<a href="#TemplateId_81_3" id="TemplateId_34_31" title="Defined at line 81, 82, 120, 121, 202, 203, 232, 233, 354, 355, 356, 357, 358, 359, 508">TemplateId</a>&gt; <span class="cons_String">(</span> &lt;{<a href="#Sort_464_3" id="Sort_34_47" title="Defined at line 464">Sort</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;
  <a href="#TemplateDefinition_26_35" id="TemplateDefinition_35_3" title="Referenced at line 26, 115">TemplateDefinition</a>.<span class="cons_Constructor"><span id="LocalRedefine_35_22" title="Not referenced">LocalRedefine</span></span> = &lt;
    <span class="cons_String">define</span> &lt;<a href="#Modifier_16_22" id="Modifier_36_13" title="Defined at line 16, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">Modifier</a>*&gt; &lt;<a href="#TemplateId_81_3" id="TemplateId_36_25" title="Defined at line 81, 82, 120, 121, 202, 203, 232, 233, 354, 355, 356, 357, 358, 359, 508">TemplateId</a>&gt; <span class="cons_String">(</span> &lt;{<a href="../WebDSL-Core.sdf3/#FormalArg_10_3" id="FormalArg_36_41" title="Defined at ../WebDSL-Core.sdf3 line 10, 36">FormalArg</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span> <span class="cons_String">=</span> &lt;<a href="#TemplateId_81_3" id="TemplateId_36_63" title="Defined at line 81, 82, 120, 121, 202, 203, 232, 233, 354, 355, 356, 357, 358, 359, 508">TemplateId</a>&gt; &lt;<a href="#OptLocalRedefineArgs_17_82" id="OptLocalRedefineArgs_36_76" title="Defined at line 17, 38, 39">OptLocalRedefineArgs</a>&gt;
  &gt;
  <a href="#OptLocalRedefineArgs_36_76" id="OptLocalRedefineArgs_38_3" title="Referenced at line 36">OptLocalRedefineArgs</a>.<span class="cons_Constructor"><span id="OptLocalRedefineArgsNone_38_24" title="Not referenced">OptLocalRedefineArgsNone</span></span> = &lt;&gt;
  <a href="#OptLocalRedefineArgs_36_76" id="OptLocalRedefineArgs_39_3" title="Referenced at line 36">OptLocalRedefineArgs</a>.<span class="cons_Constructor"><span id="LocalRedefineArgs_39_24" title="Not referenced">LocalRedefineArgs</span></span> = &lt;<span class="cons_String">(</span> <span class="cons_String">*</span> <span class="cons_String">,</span> &lt;{<a href="#LocalRedefineArg_18_3" id="LocalRedefineArg_39_53" title="Defined at line 18, 40">LocalRedefineArg</a> <span class="cons_Lit">","</span>}+&gt; <span class="cons_String">)</span>&gt;
  <a href="#LocalRedefineArg_39_53" id="LocalRedefineArg_40_3" title="Referenced at line 39">LocalRedefineArg</a>.<span class="cons_Constructor"><span id="LocalRedefineArg_40_20" title="Not referenced">LocalRedefineArg</span></span> = <a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_40_39" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>
  <a href="#TemplateDefinition_26_35" id="TemplateDefinition_41_3" title="Referenced at line 26, 115">TemplateDefinition</a>.<span class="cons_Constructor"><span id="DefinePage_41_22" title="Not referenced">DefinePage</span></span> = &lt;
    &lt;<a href="#Modifier_16_22" id="Modifier_42_6" title="Defined at line 16, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">Modifier</a>*&gt; <span class="cons_String">page</span> &lt;<a href="../WebDSL-Lexical.sdf3/#PageId_5_52" id="PageId_42_23" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 17">PageId</a>&gt; &lt;<a href="../WebDSL-Core.sdf3/#OptFormalArgs_10_13" id="OptFormalArgs_42_32" title="Defined at ../WebDSL-Core.sdf3 line 10, 37, 38">OptFormalArgs</a>&gt; &lt;<a href="#OptTemplateArgs_17_54" id="OptTemplateArgs_42_48" title="Defined at line 17, 32, 33">OptTemplateArgs</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_16_31" id="TemplateElement_43_8" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateDefinition_26_35" id="TemplateDefinition_46_3" title="Referenced at line 26, 115">TemplateDefinition</a>.<span class="cons_Constructor"><span id="DefineTemplate_46_22" title="Not referenced">DefineTemplate</span></span> = &lt;
    &lt;<a href="#Modifier_16_22" id="Modifier_47_6" title="Defined at line 16, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">Modifier</a>*&gt; <span class="cons_String">template</span> &lt;<a href="#TemplateId_81_3" id="TemplateId_47_27" title="Defined at line 81, 82, 120, 121, 202, 203, 232, 233, 354, 355, 356, 357, 358, 359, 508">TemplateId</a>&gt; &lt;<a href="../WebDSL-Core.sdf3/#OptFormalArgs_10_13" id="OptFormalArgs_47_40" title="Defined at ../WebDSL-Core.sdf3 line 10, 37, 38">OptFormalArgs</a>&gt; &lt;<a href="#OptTemplateArgs_17_54" id="OptTemplateArgs_47_56" title="Defined at line 17, 32, 33">OptTemplateArgs</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_16_31" id="TemplateElement_48_8" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateDefinition_26_35" id="TemplateDefinition_51_3" title="Referenced at line 26, 115">TemplateDefinition</a>.<span class="cons_Constructor"><span id="DefineEmail_51_22" title="Not referenced">DefineEmail</span></span> = &lt;
    &lt;<a href="#Modifier_16_22" id="Modifier_52_6" title="Defined at line 16, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">Modifier</a>*&gt; <span class="cons_String">email</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_52_24" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; &lt;<a href="../WebDSL-Core.sdf3/#OptFormalArgs_10_13" id="OptFormalArgs_52_29" title="Defined at ../WebDSL-Core.sdf3 line 10, 37, 38">OptFormalArgs</a>&gt; &lt;<a href="#OptTemplateArgs_17_54" id="OptTemplateArgs_52_45" title="Defined at line 17, 32, 33">OptTemplateArgs</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_16_31" id="TemplateElement_53_8" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <button class="modal-open" id="Modifier_56_3" title="Multi-file references" data-urls="#Modifier_28_13 line 28, 36, 42, 47, 52, 77; ../WebDSL-Service.sdf3/#Modifier_17_14 line 17">Modifier</button>.<span class="cons_Constructor"><span id="Page_56_12" title="Not referenced">Page</span></span> = &lt;<span class="cons_String">page</span>&gt;
  <button class="modal-open" id="Modifier_57_3" title="Multi-file references" data-urls="#Modifier_28_13 line 28, 36, 42, 47, 52, 77; ../WebDSL-Service.sdf3/#Modifier_17_14 line 17">Modifier</button>.<span class="cons_Constructor"><span id="Email_57_12" title="Not referenced">Email</span></span> = &lt;<span class="cons_String">email</span>&gt;
  <button class="modal-open" id="Modifier_58_3" title="Multi-file references" data-urls="#Modifier_28_13 line 28, 36, 42, 47, 52, 77; ../WebDSL-Service.sdf3/#Modifier_17_14 line 17">Modifier</button>.<span class="cons_Constructor"><span id="AjaxTemplate_58_12" title="Not referenced">AjaxTemplate</span></span> = &lt;<span class="cons_String">ajax</span>&gt;
  <button class="modal-open" id="Modifier_59_3" title="Multi-file references" data-urls="#Modifier_28_13 line 28, 36, 42, 47, 52, 77; ../WebDSL-Service.sdf3/#Modifier_17_14 line 17">Modifier</button>.<span class="cons_Constructor"><span id="Template_59_12" title="Not referenced">Template</span></span> = &lt;<span class="cons_String">template</span>&gt;
  <button class="modal-open" id="Modifier_60_3" title="Multi-file references" data-urls="#Modifier_28_13 line 28, 36, 42, 47, 52, 77; ../WebDSL-Service.sdf3/#Modifier_17_14 line 17">Modifier</button>.<span class="cons_Constructor"><span id="Feed_60_12" title="Not referenced">Feed</span></span> = &lt;<span class="cons_String">feed</span>&gt;
  <button class="modal-open" id="Modifier_61_3" title="Multi-file references" data-urls="#Modifier_28_13 line 28, 36, 42, 47, 52, 77; ../WebDSL-Service.sdf3/#Modifier_17_14 line 17">Modifier</button>.<span class="cons_Constructor"><span id="Local_61_12" title="Not referenced">Local</span></span> = &lt;<span class="cons_String">local</span>&gt;
  <button class="modal-open" id="Modifier_62_3" title="Multi-file references" data-urls="#Modifier_28_13 line 28, 36, 42, 47, 52, 77; ../WebDSL-Service.sdf3/#Modifier_17_14 line 17">Modifier</button>.<span class="cons_Constructor"><span id="NoSpan_62_12" title="Not referenced">NoSpan</span></span> = &lt;<span class="cons_String">no-span</span>&gt;
  <button class="modal-open" id="Modifier_63_3" title="Multi-file references" data-urls="#Modifier_28_13 line 28, 36, 42, 47, 52, 77; ../WebDSL-Service.sdf3/#Modifier_17_14 line 17">Modifier</button>.<span class="cons_Constructor"><span id="TemplateModSpan_63_12" title="Not referenced">TemplateModSpan</span></span> = &lt;<span class="cons_String">span</span>&gt;
  <button class="modal-open" id="Modifier_64_3" title="Multi-file references" data-urls="#Modifier_28_13 line 28, 36, 42, 47, 52, 77; ../WebDSL-Service.sdf3/#Modifier_17_14 line 17">Modifier</button>.<span class="cons_Constructor"><span id="TemplateModInline_64_12" title="Not referenced">TemplateModInline</span></span> = &lt;<span class="cons_String">inline</span>&gt;
  <button class="modal-open" id="Modifier_65_3" title="Multi-file references" data-urls="#Modifier_28_13 line 28, 36, 42, 47, 52, 77; ../WebDSL-Service.sdf3/#Modifier_17_14 line 17">Modifier</button>.<span class="cons_Constructor"><span id="TempateModSecure_65_12" title="Not referenced">TempateModSecure</span></span> = &lt;<span class="cons_String">secure</span>&gt;
  <button class="modal-open" id="Modifier_66_3" title="Multi-file references" data-urls="#Modifier_28_13 line 28, 36, 42, 47, 52, 77; ../WebDSL-Service.sdf3/#Modifier_17_14 line 17">Modifier</button>.<span class="cons_Constructor"><span id="TemplateModNotSecure_66_12" title="Not referenced">TemplateModNotSecure</span></span> = &lt;<span class="cons_String">not-secure</span>&gt;
  <button class="modal-open" id="Modifier_67_3" title="Multi-file references" data-urls="#Modifier_28_13 line 28, 36, 42, 47, 52, 77; ../WebDSL-Service.sdf3/#Modifier_17_14 line 17">Modifier</button>.<span class="cons_Constructor"><span id="TemplateModOverride_67_12" title="Not referenced">TemplateModOverride</span></span> = &lt;<span class="cons_String">override</span>&gt;
  <button class="modal-open" id="Modifier_68_3" title="Multi-file references" data-urls="#Modifier_28_13 line 28, 36, 42, 47, 52, 77; ../WebDSL-Service.sdf3/#Modifier_17_14 line 17">Modifier</button>.<span class="cons_Constructor"><span id="TemplateDeprecated_68_12" title="Not referenced">TemplateDeprecated</span></span> = &lt;<span class="cons_String">deprecated</span>&gt;
  <button class="modal-open" id="Modifier_69_3" title="Multi-file references" data-urls="#Modifier_28_13 line 28, 36, 42, 47, 52, 77; ../WebDSL-Service.sdf3/#Modifier_17_14 line 17">Modifier</button>.<span class="cons_Constructor"><span id="ExpireCache_69_12" title="Not referenced">ExpireCache</span></span> = &lt;<span class="cons_String">expire-cache</span>&gt;
  <button class="modal-open" id="Modifier_70_3" title="Multi-file references" data-urls="#Modifier_28_13 line 28, 36, 42, 47, 52, 77; ../WebDSL-Service.sdf3/#Modifier_17_14 line 17">Modifier</button>.<span class="cons_Constructor"><span id="ReadOnlyPage_70_12" title="Not referenced">ReadOnlyPage</span></span> = &lt;<span class="cons_String">read-only</span>&gt;
  <button class="modal-open" id="Modifier_71_3" title="Multi-file references" data-urls="#Modifier_28_13 line 28, 36, 42, 47, 52, 77; ../WebDSL-Service.sdf3/#Modifier_17_14 line 17">Modifier</button>.<span class="cons_Constructor"><span id="WebService_71_12" title="Not referenced">WebService</span></span> = &lt;<span class="cons_String">service</span>&gt;
  <a href="#TemplateElement_29_8" id="TemplateElement_72_3" title="Referenced at line 29, 43, 48, 53, 153, 158, 163, 168, 171, 176, 178, 183, 188, 193, 197, 213, 216, 224, 227, 246, 260, 264, 272, 275, 280, 283, 286, 289, 326, 329, 332, 335, 338, 341, 344, 347, 436, 477">TemplateElement</a>.<span class="cons_Constructor"><span id="Init_72_19" title="Not referenced">Init</span></span> = &lt;
    <span class="cons_String">init</span> &lt;<a href="../WebDSL-Action.sdf3/#Block_13_11" id="Block_73_11" title="Defined at ../WebDSL-Action.sdf3 line 13, 45">Block</a>&gt;
  &gt;
  <a href="#TemplateElement_29_8" id="TemplateElement_75_3" title="Referenced at line 29, 43, 48, 53, 153, 158, 163, 168, 171, 176, 178, 183, 188, 193, 197, 213, 216, 224, 227, 246, 260, 264, 272, 275, 280, 283, 286, 289, 326, 329, 332, 335, 338, 341, 344, 347, 436, 477">TemplateElement</a> = <a href="#Action_444_3" id="Action_75_21" title="Defined at line 444">Action</a>

  <button class="modal-open" id="TemplateCall_77_3" title="Multi-file references" data-urls="#TemplateCall_116_21 line 116, 467; ../WebDSL-Ajax.sdf3/#TemplateCall_20_49 line 20, 33, 47, 77, 78, 79, 80">TemplateCall</button> = &lt;&lt;<a href="#Modifier_16_22" id="Modifier_77_20" title="Defined at line 16, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">Modifier</a>&gt;&gt; {<span class="keyword">reject</span>}

<span class="keyword">lexical syntax</span>

  <a href="#TemplateId_34_31" id="TemplateId_81_3" title="Referenced at line 34, 36, 47, 446, 447">TemplateId</a> = <span class="cons_Lit">"template"</span> {<span class="keyword">reject</span>}
  <a href="#TemplateId_34_31" id="TemplateId_82_3" title="Referenced at line 34, 36, 47, 446, 447">TemplateId</a> = <span class="cons_Lit">"define"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free sorts</span>

  <a href="#VarDecl_108_31" id="VarDecl_86_3" title="Referenced at line 108, 110, 113">VarDecl</a>

<span class="keyword">context-free syntax</span>

  <a href="#VarDecl_108_31" id="VarDecl_90_3" title="Referenced at line 108, 110, 113">VarDecl</a>.<span class="cons_Constructor"><span id="TemplateVarDecl_90_11" title="Not referenced">TemplateVarDecl</span></span> = &lt;
    <span class="cons_String">var</span> &lt;<a href="#VarId_521_3" id="VarId_91_10" title="Defined at line 521">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="#Sort_464_3" id="Sort_91_20" title="Defined at line 464">Sort</a>&gt;
  &gt;
  <a href="#VarDecl_108_31" id="VarDecl_93_3" title="Referenced at line 108, 110, 113">VarDecl</a>.<span class="cons_Constructor"><span id="TemplateVarDeclDepr_93_11" title="Not referenced">TemplateVarDeclDepr</span></span> = &lt;
    <span class="cons_String">var</span> &lt;<a href="#VarId_521_3" id="VarId_94_10" title="Defined at line 521">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="#Sort_464_3" id="Sort_94_20" title="Defined at line 464">Sort</a>&gt; <span class="cons_String">;</span>
  &gt; {<span class="keyword">deprecated</span>("remove ;")}
  <a href="#VarDecl_108_31" id="VarDecl_96_3" title="Referenced at line 108, 110, 113">VarDecl</a>.<span class="cons_Constructor"><span id="TemplateVarDeclInit_96_11" title="Not referenced">TemplateVarDeclInit</span></span> = &lt;
    <span class="cons_String">var</span> &lt;<a href="#VarId_521_3" id="VarId_97_10" title="Defined at line 521">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="#Sort_464_3" id="Sort_97_20" title="Defined at line 464">Sort</a>&gt; <span class="cons_String">:=</span> &lt;<a href="#Exp_469_3" id="Exp_97_30" title="Defined at line 469, 517">Exp</a>&gt;
  &gt;
  <a href="#VarDecl_108_31" id="VarDecl_99_3" title="Referenced at line 108, 110, 113">VarDecl</a>.<span class="cons_Constructor"><span id="TemplateVarDeclInitDepr_99_11" title="Not referenced">TemplateVarDeclInitDepr</span></span> = &lt;
    <span class="cons_String">var</span> &lt;<a href="#VarId_521_3" id="VarId_100_10" title="Defined at line 521">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="#Sort_464_3" id="Sort_100_20" title="Defined at line 464">Sort</a>&gt; <span class="cons_String">:=</span> &lt;<a href="#Exp_469_3" id="Exp_100_30" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">;</span>
  &gt; {<span class="keyword">deprecated</span>("remove ;")}
  <a href="#VarDecl_108_31" id="VarDecl_102_3" title="Referenced at line 108, 110, 113">VarDecl</a>.<span class="cons_Constructor"><span id="TemplateVarDeclInitInferred_102_11" title="Not referenced">TemplateVarDeclInitInferred</span></span> = &lt;
    <span class="cons_String">var</span> &lt;<a href="#VarId_521_3" id="VarId_103_10" title="Defined at line 521">VarId</a>&gt; <span class="cons_String">:=</span> &lt;<a href="#Exp_469_3" id="Exp_103_21" title="Defined at line 469, 517">Exp</a>&gt;
  &gt;
  <a href="#VarDecl_108_31" id="VarDecl_105_3" title="Referenced at line 108, 110, 113">VarDecl</a>.<span class="cons_Constructor"><span id="TemplateVarDeclInitInferredDepr_105_11" title="Not referenced">TemplateVarDeclInitInferredDepr</span></span> = &lt;
    <span class="cons_String">var</span> &lt;<a href="#VarId_521_3" id="VarId_106_10" title="Defined at line 521">VarId</a>&gt; <span class="cons_String">:=</span> &lt;<a href="#Exp_469_3" id="Exp_106_21" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">;</span>
  &gt; {<span class="keyword">deprecated</span>("remove ;")}
  <a href="#TemplateElement_29_8" id="TemplateElement_108_3" title="Referenced at line 29, 43, 48, 53, 153, 158, 163, 168, 171, 176, 178, 183, 188, 193, 197, 213, 216, 224, 227, 246, 260, 264, 272, 275, 280, 283, 286, 289, 326, 329, 332, 335, 338, 341, 344, 347, 436, 477">TemplateElement</a>.<span class="cons_Constructor"><span id="TEVarDecl_108_19" title="Not referenced">TEVarDecl</span></span> = <a href="#VarDecl_86_3" id="VarDecl_108_31" title="Defined at line 86, 90, 93, 96, 99, 102, 105">VarDecl</a>
  <a href="#TemplateElement_29_8" id="TemplateElement_109_3" title="Referenced at line 29, 43, 48, 53, 153, 158, 163, 168, 171, 176, 178, 183, 188, 193, 197, 213, 216, 224, 227, 246, 260, 264, 272, 275, 280, 283, 286, 289, 326, 329, 332, 335, 338, 341, 344, 347, 436, 477">TemplateElement</a>.<span class="cons_Constructor"><span id="RequestScopeTemplate_109_19" title="Not referenced">RequestScopeTemplate</span></span> = &lt;
    <span class="cons_String">request</span> &lt;<a href="#VarDecl_86_3" id="VarDecl_110_14" title="Defined at line 86, 90, 93, 96, 99, 102, 105">VarDecl</a>&gt;
  &gt;
  <a href="#TemplateElement_29_8" id="TemplateElement_112_3" title="Referenced at line 29, 43, 48, 53, 153, 158, 163, 168, 171, 176, 178, 183, 188, 193, 197, 213, 216, 224, 227, 246, 260, 264, 272, 275, 280, 283, 286, 289, 326, 329, 332, 335, 338, 341, 344, 347, 436, 477">TemplateElement</a>.<span class="cons_Constructor"><span id="LocalScopeTemplate_112_19" title="Not referenced">LocalScopeTemplate</span></span> = &lt;
    <span class="cons_String">local</span> &lt;<a href="#VarDecl_86_3" id="VarDecl_113_12" title="Defined at line 86, 90, 93, 96, 99, 102, 105">VarDecl</a>&gt;
  &gt;
  <a href="#TemplateElement_29_8" id="TemplateElement_115_3" title="Referenced at line 29, 43, 48, 53, 153, 158, 163, 168, 171, 176, 178, 183, 188, 193, 197, 213, 216, 224, 227, 246, 260, 264, 272, 275, 280, 283, 286, 289, 326, 329, 332, 335, 338, 341, 344, 347, 436, 477">TemplateElement</a> = <a href="#TemplateDefinition_16_3" id="TemplateDefinition_115_21" title="Defined at line 16, 27, 35, 41, 46, 51, 498, 499">TemplateDefinition</a>
  <a href="#TemplateElement_29_8" id="TemplateElement_116_3" title="Referenced at line 29, 43, 48, 53, 153, 158, 163, 168, 171, 176, 178, 183, 188, 193, 197, 213, 216, 224, 227, 246, 260, 264, 272, 275, 280, 283, 286, 289, 326, 329, 332, 335, 338, 341, 344, 347, 436, 477">TemplateElement</a> = <a href="#TemplateCall_16_66" id="TemplateCall_116_21" title="Defined at line 16, 77, 254, 275, 436, 451, 452, 453, 454, 455, 456, 466">TemplateCall</a>

<span class="keyword">lexical syntax</span>

  <a href="#TemplateId_34_31" id="TemplateId_120_3" title="Referenced at line 34, 36, 47, 446, 447">TemplateId</a> = <span class="cons_Lit">"request"</span> {<span class="keyword">reject</span>}
  <a href="#TemplateId_34_31" id="TemplateId_121_3" title="Referenced at line 34, 36, 47, 446, 447">TemplateId</a> = <span class="cons_Lit">"local"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free sorts</span>

  <button class="modal-open" id="Filter_125_3" title="Multi-file references" data-urls="#Filter_142_29 line 142; ../WebDSL-Action.sdf3/#Filter_311_75 line 311, 312, 315, 316">Filter</button> <a href="#OrderExp_130_45" id="OrderExp_125_10" title="Referenced at line 130, 131, 133, 135">OrderExp</a> <a href="#Limit_132_42" id="Limit_125_19" title="Referenced at line 132, 133, 134, 135">Limit</a>

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="Filter_129_3" title="Multi-file references" data-urls="#Filter_142_29 line 142; ../WebDSL-Action.sdf3/#Filter_311_75 line 311, 312, 315, 316">Filter</button>.<span class="cons_Constructor"><span id="FilterNoOrderByNoLimit_129_10" title="Not referenced">FilterNoOrderByNoLimit</span></span> = &lt;<span class="cons_String">where</span> &lt;<a href="#Exp_469_3" id="Exp_129_43" title="Defined at line 469, 517">Exp</a>&gt;&gt;
  <button class="modal-open" id="Filter_130_3" title="Multi-file references" data-urls="#Filter_142_29 line 142; ../WebDSL-Action.sdf3/#Filter_311_75 line 311, 312, 315, 316">Filter</button>.<span class="cons_Constructor"><span id="FilterNoWhereNoLimit_130_10" title="Not referenced">FilterNoWhereNoLimit</span></span> = &lt;<span class="cons_String">order</span> <span class="cons_String">by</span> &lt;{<a href="#OrderExp_125_10" id="OrderExp_130_45" title="Defined at line 125, 136, 137, 138">OrderExp</a> <span class="cons_Lit">","</span>}+&gt;&gt;
  <button class="modal-open" id="Filter_131_3" title="Multi-file references" data-urls="#Filter_142_29 line 142; ../WebDSL-Action.sdf3/#Filter_311_75 line 311, 312, 315, 316">Filter</button>.<span class="cons_Constructor"><span id="FilterNoLimit_131_10" title="Not referenced">FilterNoLimit</span></span> = &lt;<span class="cons_String">where</span> &lt;<a href="#Exp_469_3" id="Exp_131_34" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">order</span> <span class="cons_String">by</span> &lt;{<a href="#OrderExp_125_10" id="OrderExp_131_50" title="Defined at line 125, 136, 137, 138">OrderExp</a> <span class="cons_Lit">","</span>}+&gt;&gt;
  <button class="modal-open" id="Filter_132_3" title="Multi-file references" data-urls="#Filter_142_29 line 142; ../WebDSL-Action.sdf3/#Filter_311_75 line 311, 312, 315, 316">Filter</button>.<span class="cons_Constructor"><span id="FilterNoOrderBy_132_10" title="Not referenced">FilterNoOrderBy</span></span> = &lt;<span class="cons_String">where</span> &lt;<a href="#Exp_469_3" id="Exp_132_36" title="Defined at line 469, 517">Exp</a>&gt; &lt;<a href="#Limit_125_19" id="Limit_132_42" title="Defined at line 125, 139, 140, 141">Limit</a>&gt;&gt;
  <button class="modal-open" id="Filter_133_3" title="Multi-file references" data-urls="#Filter_142_29 line 142; ../WebDSL-Action.sdf3/#Filter_311_75 line 311, 312, 315, 316">Filter</button>.<span class="cons_Constructor"><span id="FilterNoWhere_133_10" title="Not referenced">FilterNoWhere</span></span> = &lt;<span class="cons_String">order</span> <span class="cons_String">by</span> &lt;{<a href="#OrderExp_125_10" id="OrderExp_133_38" title="Defined at line 125, 136, 137, 138">OrderExp</a> <span class="cons_Lit">","</span>}+&gt; &lt;<a href="#Limit_125_19" id="Limit_133_55" title="Defined at line 125, 139, 140, 141">Limit</a>&gt;&gt;
  <button class="modal-open" id="Filter_134_3" title="Multi-file references" data-urls="#Filter_142_29 line 142; ../WebDSL-Action.sdf3/#Filter_311_75 line 311, 312, 315, 316">Filter</button>.<span class="cons_Constructor"><span id="FilterNoWhereNoOrderBy_134_10" title="Not referenced">FilterNoWhereNoOrderBy</span></span> = <a href="#Limit_125_19" id="Limit_134_35" title="Defined at line 125, 139, 140, 141">Limit</a>
  <button class="modal-open" id="Filter_135_3" title="Multi-file references" data-urls="#Filter_142_29 line 142; ../WebDSL-Action.sdf3/#Filter_311_75 line 311, 312, 315, 316">Filter</button>.<span class="cons_Constructor"><span id="Filter_135_10" title="Not referenced">Filter</span></span> = &lt;<span class="cons_String">where</span> &lt;<a href="#Exp_469_3" id="Exp_135_27" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">order</span> <span class="cons_String">by</span> &lt;{<a href="#OrderExp_125_10" id="OrderExp_135_43" title="Defined at line 125, 136, 137, 138">OrderExp</a> <span class="cons_Lit">","</span>}+&gt; &lt;<a href="#Limit_125_19" id="Limit_135_60" title="Defined at line 125, 139, 140, 141">Limit</a>&gt;&gt;
  <a href="#OrderExp_130_45" id="OrderExp_136_3" title="Referenced at line 130, 131, 133, 135">OrderExp</a>.<span class="cons_Constructor"><span id="OrderNonSpecific_136_12" title="Not referenced">OrderNonSpecific</span></span> = <a href="#Exp_469_3" id="Exp_136_31" title="Defined at line 469, 517">Exp</a>
  <a href="#OrderExp_130_45" id="OrderExp_137_3" title="Referenced at line 130, 131, 133, 135">OrderExp</a>.<span class="cons_Constructor"><span id="OrderAscending_137_12" title="Not referenced">OrderAscending</span></span> = &lt;&lt;<a href="#Exp_469_3" id="Exp_137_31" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">asc</span>&gt;
  <a href="#OrderExp_130_45" id="OrderExp_138_3" title="Referenced at line 130, 131, 133, 135">OrderExp</a>.<span class="cons_Constructor"><span id="OrderDescending_138_12" title="Not referenced">OrderDescending</span></span> = &lt;&lt;<a href="#Exp_469_3" id="Exp_138_32" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">desc</span>&gt;
  <a href="#Limit_132_42" id="Limit_139_3" title="Referenced at line 132, 133, 134, 135">Limit</a>.<span class="cons_Constructor"><span id="Limit_139_9" title="Not referenced">Limit</span></span> = &lt;<span class="cons_String">limit</span> &lt;<a href="#Exp_469_3" id="Exp_139_25" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">offset</span> &lt;<a href="#Exp_469_3" id="Exp_139_38" title="Defined at line 469, 517">Exp</a>&gt;&gt;
  <a href="#Limit_132_42" id="Limit_140_3" title="Referenced at line 132, 133, 134, 135">Limit</a>.<span class="cons_Constructor"><span id="LimitNoOffset_140_9" title="Not referenced">LimitNoOffset</span></span> = &lt;<span class="cons_String">limit</span> &lt;<a href="#Exp_469_3" id="Exp_140_33" title="Defined at line 469, 517">Exp</a>&gt;&gt;
  <a href="#Limit_132_42" id="Limit_141_3" title="Referenced at line 132, 133, 134, 135">Limit</a>.<span class="cons_Constructor"><span id="LimitNoLimit_141_9" title="Not referenced">LimitNoLimit</span></span> = &lt;<span class="cons_String">offset</span> &lt;<a href="#Exp_469_3" id="Exp_141_33" title="Defined at line 469, 517">Exp</a>&gt;&gt;
  <button class="modal-open" id="OptFilter_142_3" title="Multi-file references" data-urls="#OptFilter_152_38 line 152, 157, 162, 470, 471, 472; ../WebDSL-Action.sdf3/#OptFilter_150_38 line 150, 153, 156, 308, 309">OptFilter</button>.<span class="cons_Constructor"><span id="OptFilterSome_142_13" title="Not referenced">OptFilterSome</span></span> = <a href="#Filter_125_3" id="Filter_142_29" title="Defined at line 125, 129, 130, 131, 132, 133, 134, 135">Filter</a>
  <button class="modal-open" id="OptFilter_143_3" title="Multi-file references" data-urls="#OptFilter_152_38 line 152, 157, 162, 470, 471, 472; ../WebDSL-Action.sdf3/#OptFilter_150_38 line 150, 153, 156, 308, 309">OptFilter</button>.<span class="cons_Constructor"><span id="OptFilterNone_143_13" title="Not referenced">OptFilterNone</span></span> = &lt;&gt;

<span class="keyword">context-free sorts</span>

  <a href="#ForSeparator_154_8" id="ForSeparator_147_3" title="Referenced at line 154, 159, 164, 169">ForSeparator</a> <a href="#ElseIfTempl_189_8" id="ElseIfTempl_147_16" title="Referenced at line 189">ElseIfTempl</a> <a href="#OptElseTempl_189_23" id="OptElseTempl_147_28" title="Referenced at line 189">OptElseTempl</a>

<span class="keyword">context-free syntax</span>

  <a href="#TemplateElement_29_8" id="TemplateElement_151_3" title="Referenced at line 29, 43, 48, 53, 153, 158, 163, 168, 171, 176, 178, 183, 188, 193, 197, 213, 216, 224, 227, 246, 260, 264, 272, 275, 280, 283, 286, 289, 326, 329, 332, 335, 338, 341, 344, 347, 436, 477">TemplateElement</a>.<span class="cons_Constructor"><span id="For_151_19" title="Not referenced">For</span></span> = &lt;
    <span class="cons_String">for</span> <span class="cons_String">(</span> &lt;<a href="#VarId_521_3" id="VarId_152_12" title="Defined at line 521">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="#Sort_464_3" id="Sort_152_22" title="Defined at line 464">Sort</a>&gt; <span class="cons_String">in</span> &lt;<a href="#Exp_469_3" id="Exp_152_32" title="Defined at line 469, 517">Exp</a>&gt; &lt;<a href="#OptFilter_16_47" id="OptFilter_152_38" title="Defined at line 16, 142, 143">OptFilter</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_16_31" id="TemplateElement_153_8" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt;
    <span class="cons_String">}</span> &lt;<a href="#ForSeparator_147_3" id="ForSeparator_154_8" title="Defined at line 147, 171, 172">ForSeparator</a>&gt;
  &gt;
  <a href="#TemplateElement_29_8" id="TemplateElement_156_3" title="Referenced at line 29, 43, 48, 53, 153, 158, 163, 168, 171, 176, 178, 183, 188, 193, 197, 213, 216, 224, 227, 246, 260, 264, 272, 275, 280, 283, 286, 289, 326, 329, 332, 335, 338, 341, 344, 347, 436, 477">TemplateElement</a>.<span class="cons_Constructor"><span id="ForInferred_156_19" title="Not referenced">ForInferred</span></span> = &lt;
    <span class="cons_String">for</span> <span class="cons_String">(</span> &lt;<a href="#VarId_521_3" id="VarId_157_12" title="Defined at line 521">VarId</a>&gt; <span class="cons_String">in</span> &lt;<a href="#Exp_469_3" id="Exp_157_23" title="Defined at line 469, 517">Exp</a>&gt; &lt;<a href="#OptFilter_16_47" id="OptFilter_157_29" title="Defined at line 16, 142, 143">OptFilter</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_16_31" id="TemplateElement_158_8" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt;
    <span class="cons_String">}</span> &lt;<a href="#ForSeparator_147_3" id="ForSeparator_159_8" title="Defined at line 147, 171, 172">ForSeparator</a>&gt;
  &gt;
  <a href="#TemplateElement_29_8" id="TemplateElement_161_3" title="Referenced at line 29, 43, 48, 53, 153, 158, 163, 168, 171, 176, 178, 183, 188, 193, 197, 213, 216, 224, 227, 246, 260, 264, 272, 275, 280, 283, 286, 289, 326, 329, 332, 335, 338, 341, 344, 347, 436, 477">TemplateElement</a>.<span class="cons_Constructor"><span id="ForAll_161_19" title="Not referenced">ForAll</span></span> = &lt;
    <span class="cons_String">for</span> <span class="cons_String">(</span> &lt;<a href="#VarId_521_3" id="VarId_162_12" title="Defined at line 521">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="#Sort_464_3" id="Sort_162_22" title="Defined at line 464">Sort</a>&gt; &lt;<a href="#OptFilter_16_47" id="OptFilter_162_29" title="Defined at line 16, 142, 143">OptFilter</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_16_31" id="TemplateElement_163_8" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt;
    <span class="cons_String">}</span> &lt;<a href="#ForSeparator_147_3" id="ForSeparator_164_8" title="Defined at line 147, 171, 172">ForSeparator</a>&gt;
  &gt;
  <a href="#TemplateElement_29_8" id="TemplateElement_166_3" title="Referenced at line 29, 43, 48, 53, 153, 158, 163, 168, 171, 176, 178, 183, 188, 193, 197, 213, 216, 224, 227, 246, 260, 264, 272, 275, 280, 283, 286, 289, 326, 329, 332, 335, 338, 341, 344, 347, 436, 477">TemplateElement</a>.<span class="cons_Constructor"><span id="ForCount_166_19" title="Not referenced">ForCount</span></span> = &lt;
    <span class="cons_String">for</span> <span class="cons_String">(</span> &lt;<a href="#VarId_521_3" id="VarId_167_12" title="Defined at line 521">VarId</a>&gt; <span class="cons_String">:</span> <span class="cons_String">Int</span> <span class="cons_String">from</span> &lt;<a href="#Exp_469_3" id="Exp_167_31" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">to</span> &lt;<a href="#Exp_469_3" id="Exp_167_40" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_16_31" id="TemplateElement_168_8" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt;
    <span class="cons_String">}</span> &lt;<a href="#ForSeparator_147_3" id="ForSeparator_169_8" title="Defined at line 147, 171, 172">ForSeparator</a>&gt;
  &gt;
  <a href="#ForSeparator_154_8" id="ForSeparator_171_3" title="Referenced at line 154, 159, 164, 169">ForSeparator</a>.<span class="cons_Constructor"><span id="ForSeparator_171_16" title="Not referenced">ForSeparator</span></span> = &lt;<span class="cons_String">separated-by</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_16_31" id="TemplateElement_171_48" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt; <span class="cons_String">}</span>&gt;
  <a href="#ForSeparator_154_8" id="ForSeparator_172_3" title="Referenced at line 154, 159, 164, 169">ForSeparator</a>.<span class="cons_Constructor"><span id="ForSeparatorNone_172_16" title="Not referenced">ForSeparatorNone</span></span> = &lt;&gt;

  <a href="#TemplateElement_29_8" id="TemplateElement_174_3" title="Referenced at line 29, 43, 48, 53, 153, 158, 163, 168, 171, 176, 178, 183, 188, 193, 197, 213, 216, 224, 227, 246, 260, 264, 272, 275, 280, 283, 286, 289, 326, 329, 332, 335, 338, 341, 344, 347, 436, 477">TemplateElement</a>.<span class="cons_Constructor"><span id="IfTempl_174_19" title="Not referenced">IfTempl</span></span> = &lt;
    <span class="cons_String">if</span> <span class="cons_String">(</span> &lt;<a href="#Exp_469_3" id="Exp_175_11" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_16_31" id="TemplateElement_176_8" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt;
    <span class="cons_String">}</span> <span class="cons_String">else</span> <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_16_31" id="TemplateElement_178_8" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateElement_29_8" id="TemplateElement_181_3" title="Referenced at line 29, 43, 48, 53, 153, 158, 163, 168, 171, 176, 178, 183, 188, 193, 197, 213, 216, 224, 227, 246, 260, 264, 272, 275, 280, 283, 286, 289, 326, 329, 332, 335, 338, 341, 344, 347, 436, 477">TemplateElement</a>.<span class="cons_Constructor"><span id="IfNoElseTempl_181_19" title="Not referenced">IfNoElseTempl</span></span> = &lt;
    <span class="cons_String">if</span> <span class="cons_String">(</span> &lt;<a href="#Exp_469_3" id="Exp_182_11" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_16_31" id="TemplateElement_183_8" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateElement_29_8" id="TemplateElement_186_3" title="Referenced at line 29, 43, 48, 53, 153, 158, 163, 168, 171, 176, 178, 183, 188, 193, 197, 213, 216, 224, 227, 246, 260, 264, 272, 275, 280, 283, 286, 289, 326, 329, 332, 335, 338, 341, 344, 347, 436, 477">TemplateElement</a>.<span class="cons_Constructor"><span id="IfElseIfTempl_186_19" title="Not referenced">IfElseIfTempl</span></span> = &lt;
    <span class="cons_String">if</span> <span class="cons_String">(</span> &lt;<a href="#Exp_469_3" id="Exp_187_11" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_16_31" id="TemplateElement_188_8" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt;
    <span class="cons_String">}</span> &lt;<a href="#ElseIfTempl_147_16" id="ElseIfTempl_189_8" title="Defined at line 147, 196">ElseIfTempl</a>+&gt; &lt;<a href="#OptElseTempl_147_28" id="OptElseTempl_189_23" title="Defined at line 147, 191, 192">OptElseTempl</a>&gt;
  &gt;
  <a href="#OptElseTempl_189_23" id="OptElseTempl_191_3" title="Referenced at line 189">OptElseTempl</a>.<span class="cons_Constructor"><span id="OptElseTemplNone_191_16" title="Not referenced">OptElseTemplNone</span></span> = &lt;&gt;
  <a href="#OptElseTempl_189_23" id="OptElseTempl_192_3" title="Referenced at line 189">OptElseTempl</a>.<span class="cons_Constructor"><span id="ElseTempl_192_16" title="Not referenced">ElseTempl</span></span> = &lt;<span class="cons_String">else</span> <span class="cons_String">{</span>
    &lt;<a href="#TemplateElement_16_31" id="TemplateElement_193_6" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt;
  <span class="cons_String">}</span>&gt;

  <a href="#ElseIfTempl_189_8" id="ElseIfTempl_196_3" title="Referenced at line 189">ElseIfTempl</a>.<span class="cons_Constructor"><span id="ElseIfTempl_196_15" title="Not referenced">ElseIfTempl</span></span> = &lt;<span class="cons_String">else</span> <span class="cons_String">if</span> <span class="cons_String">(</span> &lt;<a href="#Exp_469_3" id="Exp_196_41" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span>
    &lt;<a href="#TemplateElement_16_31" id="TemplateElement_197_6" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt;
  <span class="cons_String">}</span>&gt;

<span class="keyword">lexical syntax</span>

  <a href="#TemplateId_34_31" id="TemplateId_202_3" title="Referenced at line 34, 36, 47, 446, 447">TemplateId</a> = <span class="cons_Lit">"if"</span> {<span class="keyword">reject</span>}
  <a href="#TemplateId_34_31" id="TemplateId_203_3" title="Referenced at line 34, 36, 47, 446, 447">TemplateId</a> = <span class="cons_Lit">"else"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free syntax</span>

  <a href="#TemplateElement_29_8" id="TemplateElement_207_3" title="Referenced at line 29, 43, 48, 53, 153, 158, 163, 168, 171, 176, 178, 183, 188, 193, 197, 213, 216, 224, 227, 246, 260, 264, 272, 275, 280, 283, 286, 289, 326, 329, 332, 335, 338, 341, 344, 347, 436, 477">TemplateElement</a>.<span class="cons_Constructor"><span id="TemplateCase_207_19" title="Not referenced">TemplateCase</span></span> = &lt;
    <span class="cons_String">case</span> <span class="cons_String">(</span> &lt;{<a href="#Exp_469_3" id="Exp_208_14" title="Defined at line 469, 517">Exp</a> <span class="cons_Lit">","</span>}+&gt; <span class="cons_String">)</span> <span class="cons_String">{</span>
      &lt;<a href="#TemplateCaseAlt_17_18" id="TemplateCaseAlt_209_8" title="Defined at line 17, 212, 215">TemplateCaseAlt</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateCaseAlt_209_8" id="TemplateCaseAlt_212_3" title="Referenced at line 209">TemplateCaseAlt</a>.<span class="cons_Constructor"><span id="TemplateCaseAlt_212_19" title="Not referenced">TemplateCaseAlt</span></span> = &lt;
    &lt;<a href="#TemplateCaseAltExps_237_3" id="TemplateCaseAltExps_213_6" title="Defined at line 237, 241, 242">TemplateCaseAltExps</a>&gt; <span class="cons_String">{</span> &lt;<a href="#TemplateElement_16_31" id="TemplateElement_213_30" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateCaseAlt_209_8" id="TemplateCaseAlt_215_3" title="Referenced at line 209">TemplateCaseAlt</a>.<span class="cons_Constructor"><span id="TemplateCaseAltDefault_215_19" title="Not referenced">TemplateCaseAltDefault</span></span> = &lt;
    <span class="cons_String">default</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_16_31" id="TemplateElement_216_16" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateElement_29_8" id="TemplateElement_218_3" title="Referenced at line 29, 43, 48, 53, 153, 158, 163, 168, 171, 176, 178, 183, 188, 193, 197, 213, 216, 224, 227, 246, 260, 264, 272, 275, 280, 283, 286, 289, 326, 329, 332, 335, 338, 341, 344, 347, 436, 477">TemplateElement</a>.<span class="cons_Constructor"><a href="#TemplateTypeCase_246_19" id="TemplateTypeCase_218_19" title="Referenced at line 246">TemplateTypeCase</a></span> = &lt;
    <span class="cons_String">typecase</span> <span class="cons_String">(</span> &lt;<a href="#Exp_469_3" id="Exp_219_17" title="Defined at line 469, 517">Exp</a>&gt; &lt;<a href="../WebDSL-Action.sdf3/#OptTypeAlias_91_44" id="OptTypeAlias_219_23" title="Defined at ../WebDSL-Action.sdf3 line 91, 125, 126">OptTypeAlias</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span>
      &lt;<a href="#TemplateTypeCaseAlt_17_34" id="TemplateTypeCaseAlt_220_8" title="Defined at line 17, 223, 226">TemplateTypeCaseAlt</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateTypeCaseAlt_220_8" id="TemplateTypeCaseAlt_223_3" title="Referenced at line 220">TemplateTypeCaseAlt</a>.<span class="cons_Constructor"><span id="TemplateTypeCaseAlt_223_23" title="Not referenced">TemplateTypeCaseAlt</span></span> = &lt;
    &lt;<a href="#Sort_464_3" id="Sort_224_6" title="Defined at line 464">Sort</a>&gt; <span class="cons_String">{</span> &lt;<a href="#TemplateElement_16_31" id="TemplateElement_224_15" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateTypeCaseAlt_220_8" id="TemplateTypeCaseAlt_226_3" title="Referenced at line 220">TemplateTypeCaseAlt</a>.<span class="cons_Constructor"><span id="TemplateTypeCaseDefault_226_23" title="Not referenced">TemplateTypeCaseDefault</span></span> = &lt;
    <span class="cons_String">default</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_16_31" id="TemplateElement_227_16" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;

<span class="keyword">lexical syntax</span>

  <a href="#TemplateId_34_31" id="TemplateId_232_3" title="Referenced at line 34, 36, 47, 446, 447">TemplateId</a> = <span class="cons_Lit">"case"</span> {<span class="keyword">reject</span>}
  <a href="#TemplateId_34_31" id="TemplateId_233_3" title="Referenced at line 34, 36, 47, 446, 447">TemplateId</a> = <span class="cons_Lit">"typecase"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free sorts</span>

  <a href="#TemplateCaseAltExps_213_6" id="TemplateCaseAltExps_237_3" title="Referenced at line 213">TemplateCaseAltExps</a>

<span class="keyword">context-free syntax</span>

  <a href="#TemplateCaseAltExps_213_6" id="TemplateCaseAltExps_241_3" title="Referenced at line 213">TemplateCaseAltExps</a>.<span class="cons_Constructor"><span id="TemplateCaseExps_241_23" title="Not referenced">TemplateCaseExps</span></span> = &lt;&lt;{<a href="#Exp_469_3" id="Exp_241_45" title="Defined at line 469, 517">Exp</a> <span class="cons_Lit">","</span>}+&gt;&gt;
  <a href="#TemplateCaseAltExps_213_6" id="TemplateCaseAltExps_242_3" title="Referenced at line 213">TemplateCaseAltExps</a> = &lt;<span class="cons_String">default</span>&gt; {<span class="keyword">reject</span>}

<span class="keyword">context-free priorities</span>

  <a href="#TemplateElement_16_31" id="TemplateElement_246_3" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>.<span class="cons_Constructor"><a href="#TemplateTypeCase_218_19" id="TemplateTypeCase_246_19" title="Defined at line 218">TemplateTypeCase</a></span> &lt;2&gt; .&gt; <a href="#Exp_469_3" id="Exp_246_43" title="Defined at line 469, 517">Exp</a>.<span class="cons_Constructor"><a href="../WebDSL-Action.sdf3/#Cast_253_7" id="Cast_246_47" title="Defined at ../WebDSL-Action.sdf3 line 253">Cast</a></span>

<span class="keyword">context-free sorts</span>

  <a href="#OptTCallArgs_255_23" id="OptTCallArgs_250_3" title="Referenced at line 255">OptTCallArgs</a> <a href="#OptTCallPropAssigns_255_38" id="OptTCallPropAssigns_250_16" title="Referenced at line 255">OptTCallPropAssigns</a> <a href="#TemplateBody_255_60" id="TemplateBody_250_36" title="Referenced at line 255">TemplateBody</a> <a href="#ArgDefine_268_6" id="ArgDefine_250_49" title="Referenced at line 268">ArgDefine</a>

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="TemplateCall_254_3" title="Multi-file references" data-urls="#TemplateCall_116_21 line 116, 467; ../WebDSL-Ajax.sdf3/#TemplateCall_20_49 line 20, 33, 47, 77, 78, 79, 80">TemplateCall</button>.<span class="cons_Constructor"><span id="TemplateCall_254_16" title="Not referenced">TemplateCall</span></span> = &lt;
    &lt;<a href="#TemplateCallId_432_18" id="TemplateCallId_255_6" title="Defined at line 432, 446, 447">TemplateCallId</a>&gt; &lt;<a href="#OptTCallArgs_250_3" id="OptTCallArgs_255_23" title="Defined at line 250, 257, 258">OptTCallArgs</a>&gt; &lt;<a href="#OptTCallPropAssigns_250_16" id="OptTCallPropAssigns_255_38" title="Defined at line 250, 261, 262">OptTCallPropAssigns</a>&gt; &lt;<a href="#TemplateBody_250_36" id="TemplateBody_255_60" title="Defined at line 250, 263, 266, 267">TemplateBody</a>&gt;
  &gt;
  <a href="#OptTCallArgs_255_23" id="OptTCallArgs_257_3" title="Referenced at line 255">OptTCallArgs</a>.<span class="cons_Constructor"><span id="TCallArgs_257_16" title="Not referenced">TCallArgs</span></span> = &lt;<span class="cons_String">(</span> &lt;{<a href="#TemplateArgExp_17_3" id="TemplateArgExp_257_33" title="Defined at line 17, 259, 260">TemplateArgExp</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;
  <a href="#OptTCallArgs_255_23" id="OptTCallArgs_258_3" title="Referenced at line 255">OptTCallArgs</a>.<span class="cons_Constructor"><span id="OptTCallArgsNone_258_16" title="Not referenced">OptTCallArgsNone</span></span> = &lt;&gt;
  <a href="#TemplateArgExp_257_33" id="TemplateArgExp_259_3" title="Referenced at line 257">TemplateArgExp</a>.<span class="cons_Constructor"><span id="Exp_259_18" title="Not referenced">Exp</span></span> = <a href="#Exp_469_3" id="Exp_259_24" title="Defined at line 469, 517">Exp</a>
  <a href="#TemplateArgExp_257_33" id="TemplateArgExp_260_3" title="Referenced at line 257">TemplateArgExp</a>.<span class="cons_Constructor"><span id="TemplateElementsArgument_260_18" title="Not referenced">TemplateElementsArgument</span></span> = &lt;<span class="cons_String">{</span> &lt;<a href="#TemplateElement_16_31" id="TemplateElement_260_49" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt; <span class="cons_String">}</span>&gt;
  <a href="#OptTCallPropAssigns_255_38" id="OptTCallPropAssigns_261_3" title="Referenced at line 255">OptTCallPropAssigns</a>.<span class="cons_Constructor"><span id="TCallPropAssigns_261_23" title="Not referenced">TCallPropAssigns</span></span> = &lt;<span class="cons_String">[</span> &lt;{<a href="#PropertyAssignment_16_79" id="PropertyAssignment_261_47" title="Defined at line 16, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380">PropertyAssignment</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">]</span>&gt;
  <a href="#OptTCallPropAssigns_255_38" id="OptTCallPropAssigns_262_3" title="Referenced at line 255">OptTCallPropAssigns</a>.<span class="cons_Constructor"><span id="OptTCallPropAssignsNone_262_23" title="Not referenced">OptTCallPropAssignsNone</span></span> = &lt;&gt;
  <a href="#TemplateBody_255_60" id="TemplateBody_263_3" title="Referenced at line 255">TemplateBody</a>.<span class="cons_Constructor"><span id="TemplateBody_263_16" title="Not referenced">TemplateBody</span></span> = &lt;<span class="cons_String">{</span>
    &lt;<a href="#TemplateElement_16_31" id="TemplateElement_264_6" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt;
  <span class="cons_String">}</span>&gt;
  <a href="#TemplateBody_255_60" id="TemplateBody_266_3" title="Referenced at line 255">TemplateBody</a>.<span class="cons_Constructor"><span id="TemplateBodyNone_266_16" title="Not referenced">TemplateBodyNone</span></span> = &lt;&gt;
  <a href="#TemplateBody_255_60" id="TemplateBody_267_3" title="Referenced at line 255">TemplateBody</a>.<span class="cons_Constructor"><span id="TemplateWith_267_16" title="Not referenced">TemplateWith</span></span> = &lt;<span class="cons_String">with</span> <span class="cons_String">{</span>
    &lt;<a href="#ArgDefine_250_49" id="ArgDefine_268_6" title="Defined at line 250, 270">ArgDefine</a>*&gt;
  <span class="cons_String">}</span>&gt;
  <a href="#ArgDefine_268_6" id="ArgDefine_270_3" title="Referenced at line 268">ArgDefine</a>.<span class="cons_Constructor"><span id="ArgDefine_270_13" title="Not referenced">ArgDefine</span></span> = &lt;
    &lt;<a href="#TemplateCallId_432_18" id="TemplateCallId_271_6" title="Defined at line 432, 446, 447">TemplateCallId</a>&gt; <span class="cons_String">(</span> &lt;{<a href="../WebDSL-Core.sdf3/#FormalArg_10_3" id="FormalArg_271_26" title="Defined at ../WebDSL-Core.sdf3 line 10, 36">FormalArg</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span> <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_16_31" id="TemplateElement_272_8" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <button class="modal-open" id="TemplateCall_275_3" title="Multi-file references" data-urls="#TemplateCall_116_21 line 116, 467; ../WebDSL-Ajax.sdf3/#TemplateCall_20_49 line 20, 33, 47, 77, 78, 79, 80">TemplateCall</button> = &lt;<span class="cons_String">with</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_16_31" id="TemplateElement_275_27" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt; <span class="cons_String">}</span>&gt; {<span class="keyword">reject</span>}

<span class="keyword">context-free syntax</span>

  <a href="#TemplateElement_29_8" id="TemplateElement_279_3" title="Referenced at line 29, 43, 48, 53, 153, 158, 163, 168, 171, 176, 178, 183, 188, 193, 197, 213, 216, 224, 227, 246, 260, 264, 272, 275, 280, 283, 286, 289, 326, 329, 332, 335, 338, 341, 344, 347, 436, 477">TemplateElement</a>.<span class="cons_Constructor"><span id="NavigateCallParenthesesNoProps_279_19" title="Not referenced">NavigateCallParenthesesNoProps</span></span> = &lt;
    <span class="cons_String">navigate</span> <span class="cons_String">(</span> &lt;<a href="#PageCall_16_57" id="PageCall_280_17" title="Defined at line 16, 291">PageCall</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_16_31" id="TemplateElement_280_32" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateElement_29_8" id="TemplateElement_282_3" title="Referenced at line 29, 43, 48, 53, 153, 158, 163, 168, 171, 176, 178, 183, 188, 193, 197, 213, 216, 224, 227, 246, 260, 264, 272, 275, 280, 283, 286, 289, 326, 329, 332, 335, 338, 341, 344, 347, 436, 477">TemplateElement</a>.<span class="cons_Constructor"><span id="NavigateCallParentheses_282_19" title="Not referenced">NavigateCallParentheses</span></span> = &lt;
    <span class="cons_String">navigate</span> <span class="cons_String">(</span> &lt;<a href="#PageCall_16_57" id="PageCall_283_17" title="Defined at line 16, 291">PageCall</a>&gt; <span class="cons_String">)</span> <span class="cons_String">[</span> &lt;{<a href="#PropertyAssignment_16_79" id="PropertyAssignment_283_33" title="Defined at line 16, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380">PropertyAssignment</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">]</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_16_31" id="TemplateElement_283_64" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateElement_29_8" id="TemplateElement_285_3" title="Referenced at line 29, 43, 48, 53, 153, 158, 163, 168, 171, 176, 178, 183, 188, 193, 197, 213, 216, 224, 227, 246, 260, 264, 272, 275, 280, 283, 286, 289, 326, 329, 332, 335, 338, 341, 344, 347, 436, 477">TemplateElement</a>.<span class="cons_Constructor"><span id="NavigateCallNoProps_285_19" title="Not referenced">NavigateCallNoProps</span></span> = &lt;
    <span class="cons_String">navigate</span> &lt;<a href="#PageCall_16_57" id="PageCall_286_15" title="Defined at line 16, 291">PageCall</a>&gt; <span class="cons_String">{</span> &lt;<a href="#TemplateElement_16_31" id="TemplateElement_286_28" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateElement_29_8" id="TemplateElement_288_3" title="Referenced at line 29, 43, 48, 53, 153, 158, 163, 168, 171, 176, 178, 183, 188, 193, 197, 213, 216, 224, 227, 246, 260, 264, 272, 275, 280, 283, 286, 289, 326, 329, 332, 335, 338, 341, 344, 347, 436, 477">TemplateElement</a>.<span class="cons_Constructor"><span id="NavigateCall_288_19" title="Not referenced">NavigateCall</span></span> = &lt;
    <span class="cons_String">navigate</span> &lt;<a href="#PageCall_16_57" id="PageCall_289_15" title="Defined at line 16, 291">PageCall</a>&gt; <span class="cons_String">[</span> &lt;{<a href="#PropertyAssignment_16_79" id="PropertyAssignment_289_29" title="Defined at line 16, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380">PropertyAssignment</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">]</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_16_31" id="TemplateElement_289_60" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <button class="modal-open" id="PageCall_291_3" title="Multi-file references" data-urls="#PageCall_280_17 line 280, 283, 286, 289; ../WebDSL-Action.sdf3/#PageCall_71_11 line 71, 74, 77; ../WebDSL-Ajax.sdf3/#PageCall_25_45 line 25, 49">PageCall</button>.<span class="cons_Constructor"><span id="PageCall_291_12" title="Not referenced">PageCall</span></span> = &lt;
    &lt;<a href="../WebDSL-Lexical.sdf3/#PageId_5_52" id="PageId_292_6" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 17">PageId</a>&gt; <span class="cons_String">(</span> &lt;{<a href="#Exp_469_3" id="Exp_292_18" title="Defined at line 469, 517">Exp</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>
  &gt;

<span class="keyword">context-free sorts</span>

  <a href="#ActionCallOrInline_302_23" id="ActionCallOrInline_297_3" title="Referenced at line 302, 305, 308, 311, 314, 317, 320, 323, 326, 329, 332, 335, 338, 341, 344, 347, 382">ActionCallOrInline</a>

<span class="keyword">context-free syntax</span>

  <a href="#TemplateElement_29_8" id="TemplateElement_301_3" title="Referenced at line 29, 43, 48, 53, 153, 158, 163, 168, 171, 176, 178, 183, 188, 193, 197, 213, 216, 224, 227, 246, 260, 264, 272, 275, 280, 283, 286, 289, 326, 329, 332, 335, 338, 341, 344, 347, 436, 477">TemplateElement</a>.<span class="cons_Constructor"><span id="SubmitActionNoProps_301_19" title="Not referenced">SubmitActionNoProps</span></span> = &lt;
    <span class="cons_String">action</span> <span class="cons_String">(</span> &lt;<a href="#Exp_469_3" id="Exp_302_15" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="#ActionCallOrInline_297_3" id="ActionCallOrInline_302_23" title="Defined at line 297, 349, 350">ActionCallOrInline</a>&gt; <span class="cons_String">)</span>
  &gt;
  <a href="#TemplateElement_29_8" id="TemplateElement_304_3" title="Referenced at line 29, 43, 48, 53, 153, 158, 163, 168, 171, 176, 178, 183, 188, 193, 197, 213, 216, 224, 227, 246, 260, 264, 272, 275, 280, 283, 286, 289, 326, 329, 332, 335, 338, 341, 344, 347, 436, 477">TemplateElement</a>.<span class="cons_Constructor"><span id="SubmitAction_304_19" title="Not referenced">SubmitAction</span></span> = &lt;
    <span class="cons_String">action</span> <span class="cons_String">(</span> &lt;<a href="#Exp_469_3" id="Exp_305_15" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="#ActionCallOrInline_297_3" id="ActionCallOrInline_305_23" title="Defined at line 297, 349, 350">ActionCallOrInline</a>&gt; <span class="cons_String">)</span> <span class="cons_String">[</span> &lt;{<a href="#PropertyAssignment_16_79" id="PropertyAssignment_305_49" title="Defined at line 16, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380">PropertyAssignment</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">]</span>
  &gt;
  <a href="#TemplateElement_29_8" id="TemplateElement_307_3" title="Referenced at line 29, 43, 48, 53, 153, 158, 163, 168, 171, 176, 178, 183, 188, 193, 197, 213, 216, 224, 227, 246, 260, 264, 272, 275, 280, 283, 286, 289, 326, 329, 332, 335, 338, 341, 344, 347, 436, 477">TemplateElement</a>.<span class="cons_Constructor"><span id="SubmitLinkActionNoProps_307_19" title="Not referenced">SubmitLinkActionNoProps</span></span> = &lt;
    <span class="cons_String">actionLink</span> <span class="cons_String">(</span> &lt;<a href="#Exp_469_3" id="Exp_308_19" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="#ActionCallOrInline_297_3" id="ActionCallOrInline_308_27" title="Defined at line 297, 349, 350">ActionCallOrInline</a>&gt; <span class="cons_String">)</span>
  &gt;
  <a href="#TemplateElement_29_8" id="TemplateElement_310_3" title="Referenced at line 29, 43, 48, 53, 153, 158, 163, 168, 171, 176, 178, 183, 188, 193, 197, 213, 216, 224, 227, 246, 260, 264, 272, 275, 280, 283, 286, 289, 326, 329, 332, 335, 338, 341, 344, 347, 436, 477">TemplateElement</a>.<span class="cons_Constructor"><span id="SubmitLinkAction_310_19" title="Not referenced">SubmitLinkAction</span></span> = &lt;
    <span class="cons_String">actionLink</span> <span class="cons_String">(</span> &lt;<a href="#Exp_469_3" id="Exp_311_19" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="#ActionCallOrInline_297_3" id="ActionCallOrInline_311_27" title="Defined at line 297, 349, 350">ActionCallOrInline</a>&gt; <span class="cons_String">)</span> <span class="cons_String">[</span> &lt;{<a href="#PropertyAssignment_16_79" id="PropertyAssignment_311_53" title="Defined at line 16, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380">PropertyAssignment</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">]</span>
  &gt;
  <a href="#TemplateElement_29_8" id="TemplateElement_313_3" title="Referenced at line 29, 43, 48, 53, 153, 158, 163, 168, 171, 176, 178, 183, 188, 193, 197, 213, 216, 224, 227, 246, 260, 264, 272, 275, 280, 283, 286, 289, 326, 329, 332, 335, 338, 341, 344, 347, 436, 477">TemplateElement</a>.<span class="cons_Constructor"><span id="SubmitNoProps_313_19" title="Not referenced">SubmitNoProps</span></span> = &lt;
    <span class="cons_String">submit</span> <span class="cons_String">(</span> &lt;<a href="#Exp_469_3" id="Exp_314_15" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="#ActionCallOrInline_297_3" id="ActionCallOrInline_314_23" title="Defined at line 297, 349, 350">ActionCallOrInline</a>&gt; <span class="cons_String">)</span>
  &gt;
  <a href="#TemplateElement_29_8" id="TemplateElement_316_3" title="Referenced at line 29, 43, 48, 53, 153, 158, 163, 168, 171, 176, 178, 183, 188, 193, 197, 213, 216, 224, 227, 246, 260, 264, 272, 275, 280, 283, 286, 289, 326, 329, 332, 335, 338, 341, 344, 347, 436, 477">TemplateElement</a>.<span class="cons_Constructor"><span id="Submit_316_19" title="Not referenced">Submit</span></span> = &lt;
    <span class="cons_String">submit</span> <span class="cons_String">(</span> &lt;<a href="#Exp_469_3" id="Exp_317_15" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="#ActionCallOrInline_297_3" id="ActionCallOrInline_317_23" title="Defined at line 297, 349, 350">ActionCallOrInline</a>&gt; <span class="cons_String">)</span> <span class="cons_String">[</span> &lt;{<a href="#PropertyAssignment_16_79" id="PropertyAssignment_317_49" title="Defined at line 16, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380">PropertyAssignment</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">]</span>
  &gt;
  <a href="#TemplateElement_29_8" id="TemplateElement_319_3" title="Referenced at line 29, 43, 48, 53, 153, 158, 163, 168, 171, 176, 178, 183, 188, 193, 197, 213, 216, 224, 227, 246, 260, 264, 272, 275, 280, 283, 286, 289, 326, 329, 332, 335, 338, 341, 344, 347, 436, 477">TemplateElement</a>.<span class="cons_Constructor"><span id="SubmitLinkNoProps_319_19" title="Not referenced">SubmitLinkNoProps</span></span> = &lt;
    <span class="cons_String">submitlink</span> <span class="cons_String">(</span> &lt;<a href="#Exp_469_3" id="Exp_320_19" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="#ActionCallOrInline_297_3" id="ActionCallOrInline_320_27" title="Defined at line 297, 349, 350">ActionCallOrInline</a>&gt; <span class="cons_String">)</span>
  &gt;
  <a href="#TemplateElement_29_8" id="TemplateElement_322_3" title="Referenced at line 29, 43, 48, 53, 153, 158, 163, 168, 171, 176, 178, 183, 188, 193, 197, 213, 216, 224, 227, 246, 260, 264, 272, 275, 280, 283, 286, 289, 326, 329, 332, 335, 338, 341, 344, 347, 436, 477">TemplateElement</a>.<span class="cons_Constructor"><span id="SubmitLink_322_19" title="Not referenced">SubmitLink</span></span> = &lt;
    <span class="cons_String">submitlink</span> <span class="cons_String">(</span> &lt;<a href="#Exp_469_3" id="Exp_323_19" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="#ActionCallOrInline_297_3" id="ActionCallOrInline_323_27" title="Defined at line 297, 349, 350">ActionCallOrInline</a>&gt; <span class="cons_String">)</span> <span class="cons_String">[</span> &lt;{<a href="#PropertyAssignment_16_79" id="PropertyAssignment_323_53" title="Defined at line 16, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380">PropertyAssignment</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">]</span>
  &gt;
  <a href="#TemplateElement_29_8" id="TemplateElement_325_3" title="Referenced at line 29, 43, 48, 53, 153, 158, 163, 168, 171, 176, 178, 183, 188, 193, 197, 213, 216, 224, 227, 246, 260, 264, 272, 275, 280, 283, 286, 289, 326, 329, 332, 335, 338, 341, 344, 347, 436, 477">TemplateElement</a>.<span class="cons_Constructor"><span id="SubmitElemNoProps_325_19" title="Not referenced">SubmitElemNoProps</span></span> = &lt;
    <span class="cons_String">submit</span> &lt;<a href="#ActionCallOrInline_297_3" id="ActionCallOrInline_326_13" title="Defined at line 297, 349, 350">ActionCallOrInline</a>&gt; <span class="cons_String">{</span> &lt;<a href="#TemplateElement_16_31" id="TemplateElement_326_36" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateElement_29_8" id="TemplateElement_328_3" title="Referenced at line 29, 43, 48, 53, 153, 158, 163, 168, 171, 176, 178, 183, 188, 193, 197, 213, 216, 224, 227, 246, 260, 264, 272, 275, 280, 283, 286, 289, 326, 329, 332, 335, 338, 341, 344, 347, 436, 477">TemplateElement</a>.<span class="cons_Constructor"><span id="SubmitElem_328_19" title="Not referenced">SubmitElem</span></span> = &lt;
    <span class="cons_String">submit</span> &lt;<a href="#ActionCallOrInline_297_3" id="ActionCallOrInline_329_13" title="Defined at line 297, 349, 350">ActionCallOrInline</a>&gt; <span class="cons_String">[</span> &lt;{<a href="#PropertyAssignment_16_79" id="PropertyAssignment_329_37" title="Defined at line 16, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380">PropertyAssignment</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">]</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_16_31" id="TemplateElement_329_68" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateElement_29_8" id="TemplateElement_331_3" title="Referenced at line 29, 43, 48, 53, 153, 158, 163, 168, 171, 176, 178, 183, 188, 193, 197, 213, 216, 224, 227, 246, 260, 264, 272, 275, 280, 283, 286, 289, 326, 329, 332, 335, 338, 341, 344, 347, 436, 477">TemplateElement</a>.<span class="cons_Constructor"><span id="SubmitLinkElemNoProps_331_19" title="Not referenced">SubmitLinkElemNoProps</span></span> = &lt;
    <span class="cons_String">submitlink</span> &lt;<a href="#ActionCallOrInline_297_3" id="ActionCallOrInline_332_17" title="Defined at line 297, 349, 350">ActionCallOrInline</a>&gt; <span class="cons_String">{</span> &lt;<a href="#TemplateElement_16_31" id="TemplateElement_332_40" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateElement_29_8" id="TemplateElement_334_3" title="Referenced at line 29, 43, 48, 53, 153, 158, 163, 168, 171, 176, 178, 183, 188, 193, 197, 213, 216, 224, 227, 246, 260, 264, 272, 275, 280, 283, 286, 289, 326, 329, 332, 335, 338, 341, 344, 347, 436, 477">TemplateElement</a>.<span class="cons_Constructor"><span id="SubmitLinkElem_334_19" title="Not referenced">SubmitLinkElem</span></span> = &lt;
    <span class="cons_String">submitlink</span> &lt;<a href="#ActionCallOrInline_297_3" id="ActionCallOrInline_335_17" title="Defined at line 297, 349, 350">ActionCallOrInline</a>&gt; <span class="cons_String">[</span> &lt;{<a href="#PropertyAssignment_16_79" id="PropertyAssignment_335_41" title="Defined at line 16, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380">PropertyAssignment</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">]</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_16_31" id="TemplateElement_335_72" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateElement_29_8" id="TemplateElement_337_3" title="Referenced at line 29, 43, 48, 53, 153, 158, 163, 168, 171, 176, 178, 183, 188, 193, 197, 213, 216, 224, 227, 246, 260, 264, 272, 275, 280, 283, 286, 289, 326, 329, 332, 335, 338, 341, 344, 347, 436, 477">TemplateElement</a>.<span class="cons_Constructor"><span id="DownloadLinkNoProps_337_19" title="Not referenced">DownloadLinkNoProps</span></span> = &lt;
    <span class="cons_String">downloadlink</span> &lt;<a href="#ActionCallOrInline_297_3" id="ActionCallOrInline_338_19" title="Defined at line 297, 349, 350">ActionCallOrInline</a>&gt; <span class="cons_String">{</span> &lt;<a href="#TemplateElement_16_31" id="TemplateElement_338_42" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateElement_29_8" id="TemplateElement_340_3" title="Referenced at line 29, 43, 48, 53, 153, 158, 163, 168, 171, 176, 178, 183, 188, 193, 197, 213, 216, 224, 227, 246, 260, 264, 272, 275, 280, 283, 286, 289, 326, 329, 332, 335, 338, 341, 344, 347, 436, 477">TemplateElement</a>.<span class="cons_Constructor"><span id="DownloadLink_340_19" title="Not referenced">DownloadLink</span></span> = &lt;
    <span class="cons_String">downloadlink</span> &lt;<a href="#ActionCallOrInline_297_3" id="ActionCallOrInline_341_19" title="Defined at line 297, 349, 350">ActionCallOrInline</a>&gt; <span class="cons_String">[</span> &lt;{<a href="#PropertyAssignment_16_79" id="PropertyAssignment_341_43" title="Defined at line 16, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380">PropertyAssignment</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">]</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_16_31" id="TemplateElement_341_74" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateElement_29_8" id="TemplateElement_343_3" title="Referenced at line 29, 43, 48, 53, 153, 158, 163, 168, 171, 176, 178, 183, 188, 193, 197, 213, 216, 224, 227, 246, 260, 264, 272, 275, 280, 283, 286, 289, 326, 329, 332, 335, 338, 341, 344, 347, 436, 477">TemplateElement</a>.<span class="cons_Constructor"><span id="OutputImageNoProps_343_19" title="Not referenced">OutputImageNoProps</span></span> = &lt;
    <span class="cons_String">outputimage</span> &lt;<a href="#ActionCallOrInline_297_3" id="ActionCallOrInline_344_18" title="Defined at line 297, 349, 350">ActionCallOrInline</a>&gt; <span class="cons_String">{</span> &lt;<a href="#TemplateElement_16_31" id="TemplateElement_344_41" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateElement_29_8" id="TemplateElement_346_3" title="Referenced at line 29, 43, 48, 53, 153, 158, 163, 168, 171, 176, 178, 183, 188, 193, 197, 213, 216, 224, 227, 246, 260, 264, 272, 275, 280, 283, 286, 289, 326, 329, 332, 335, 338, 341, 344, 347, 436, 477">TemplateElement</a>.<span class="cons_Constructor"><span id="OutputImage_346_19" title="Not referenced">OutputImage</span></span> = &lt;
    <span class="cons_String">outputimage</span> &lt;<a href="#ActionCallOrInline_297_3" id="ActionCallOrInline_347_18" title="Defined at line 297, 349, 350">ActionCallOrInline</a>&gt; <span class="cons_String">[</span> &lt;{<a href="#PropertyAssignment_16_79" id="PropertyAssignment_347_42" title="Defined at line 16, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380">PropertyAssignment</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">]</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_16_31" id="TemplateElement_347_73" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#ActionCallOrInline_302_23" id="ActionCallOrInline_349_3" title="Referenced at line 302, 305, 308, 311, 314, 317, 320, 323, 326, 329, 332, 335, 338, 341, 344, 347, 382">ActionCallOrInline</a>.<span class="cons_Constructor"><span id="ActionCall_349_22" title="Not referenced">ActionCall</span></span> = <a href="../WebDSL-Action.sdf3/#ThisCall_77_3" id="ThisCall_349_35" title="Defined at ../WebDSL-Action.sdf3 line 77, 179, 250, 406, 407, 408, 409, 411, 412">ThisCall</a>
  <a href="#ActionCallOrInline_302_23" id="ActionCallOrInline_350_3" title="Referenced at line 302, 305, 308, 311, 314, 317, 320, 323, 326, 329, 332, 335, 338, 341, 344, 347, 382">ActionCallOrInline</a>.<span class="cons_Constructor"><span id="InlineAction_350_22" title="Not referenced">InlineAction</span></span> = &lt;<span class="cons_String">action</span> &lt;<a href="../WebDSL-Action.sdf3/#Block_13_11" id="Block_350_46" title="Defined at ../WebDSL-Action.sdf3 line 13, 45">Block</a>&gt;&gt;

<span class="keyword">lexical syntax</span>

  <a href="#TemplateId_34_31" id="TemplateId_354_3" title="Referenced at line 34, 36, 47, 446, 447">TemplateId</a> = <span class="cons_Lit">"action"</span> {<span class="keyword">reject</span>}
  <a href="#TemplateId_34_31" id="TemplateId_355_3" title="Referenced at line 34, 36, 47, 446, 447">TemplateId</a> = <span class="cons_Lit">"actionLink"</span> {<span class="keyword">reject</span>}
  <a href="#TemplateId_34_31" id="TemplateId_356_3" title="Referenced at line 34, 36, 47, 446, 447">TemplateId</a> = <span class="cons_Lit">"submit"</span> {<span class="keyword">reject</span>}
  <a href="#TemplateId_34_31" id="TemplateId_357_3" title="Referenced at line 34, 36, 47, 446, 447">TemplateId</a> = <span class="cons_Lit">"submitlink"</span> {<span class="keyword">reject</span>}
  <a href="#TemplateId_34_31" id="TemplateId_358_3" title="Referenced at line 34, 36, 47, 446, 447">TemplateId</a> = <span class="cons_Lit">"downloadlink"</span> {<span class="keyword">reject</span>}
  <a href="#TemplateId_34_31" id="TemplateId_359_3" title="Referenced at line 34, 36, 47, 446, 447">TemplateId</a> = <span class="cons_Lit">"outputimage"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free sorts</span>

  <a href="#ActionCallOrInlineOrExp_367_61" id="ActionCallOrInlineOrExp_363_3" title="Referenced at line 367, 368, 369, 381, 388">ActionCallOrInlineOrExp</a> <a href="#PropertySubmitMultiple_380_24" id="PropertySubmitMultiple_363_27" title="Referenced at line 380">PropertySubmitMultiple</a> <a href="#PropertySubmitExp_383_51" id="PropertySubmitExp_363_50" title="Referenced at line 383">PropertySubmitExp</a>

<span class="keyword">context-free syntax</span>

  <a href="#PropertyAssignment_261_47" id="PropertyAssignment_367_3" title="Referenced at line 261, 283, 289, 305, 311, 317, 323, 329, 335, 341, 347">PropertyAssignment</a>.<span class="cons_Constructor"><span id="PropertySubmitColon_367_22" title="Not referenced">PropertySubmitColon</span></span> = &lt;&lt;<a href="#SubmitProp_22_3" id="SubmitProp_367_46" title="Defined at line 22, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428">SubmitProp</a>&gt; <span class="cons_String">:</span> &lt;<a href="#ActionCallOrInlineOrExp_363_3" id="ActionCallOrInlineOrExp_367_61" title="Defined at line 363, 382, 383">ActionCallOrInlineOrExp</a>&gt;&gt;
  <a href="#PropertyAssignment_261_47" id="PropertyAssignment_368_3" title="Referenced at line 261, 283, 289, 305, 311, 317, 323, 329, 335, 341, 347">PropertyAssignment</a>.<span class="cons_Constructor"><span id="PropertySubmitAssign_368_22" title="Not referenced">PropertySubmitAssign</span></span> = &lt;&lt;<a href="#SubmitProp_22_3" id="SubmitProp_368_47" title="Defined at line 22, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428">SubmitProp</a>&gt; <span class="cons_String">:=</span> &lt;<a href="#ActionCallOrInlineOrExp_363_3" id="ActionCallOrInlineOrExp_368_63" title="Defined at line 363, 382, 383">ActionCallOrInlineOrExp</a>&gt;&gt;
  <a href="#PropertyAssignment_261_47" id="PropertyAssignment_369_3" title="Referenced at line 261, 283, 289, 305, 311, 317, 323, 329, 335, 341, 347">PropertyAssignment</a>.<span class="cons_Constructor"><span id="PropertySubmit_369_22" title="Not referenced">PropertySubmit</span></span> = &lt;&lt;<a href="#SubmitProp_22_3" id="SubmitProp_369_41" title="Defined at line 22, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428">SubmitProp</a>&gt; <span class="cons_String">=</span> &lt;<a href="#ActionCallOrInlineOrExp_363_3" id="ActionCallOrInlineOrExp_369_56" title="Defined at line 363, 382, 383">ActionCallOrInlineOrExp</a>&gt;&gt;
  <a href="#PropertyAssignment_261_47" id="PropertyAssignment_370_3" title="Referenced at line 261, 283, 289, 305, 311, 317, 323, 329, 335, 341, 347">PropertyAssignment</a>.<span class="cons_Constructor"><span id="PropertyAssignmentColon_370_22" title="Not referenced">PropertyAssignmentColon</span></span> = &lt;&lt;<a href="#PropertyAssignmentId_394_3" id="PropertyAssignmentId_370_50" title="Defined at line 394, 398, 399">PropertyAssignmentId</a>&gt; <span class="cons_String">:</span> &lt;<a href="#Exp_469_3" id="Exp_370_75" title="Defined at line 469, 517">Exp</a>&gt;&gt;
  <a href="#PropertyAssignment_261_47" id="PropertyAssignment_371_3" title="Referenced at line 261, 283, 289, 305, 311, 317, 323, 329, 335, 341, 347">PropertyAssignment</a>.<span class="cons_Constructor"><span id="PropertyAssignmentAssign_371_22" title="Not referenced">PropertyAssignmentAssign</span></span> = &lt;&lt;<a href="#PropertyAssignmentId_394_3" id="PropertyAssignmentId_371_51" title="Defined at line 394, 398, 399">PropertyAssignmentId</a>&gt; <span class="cons_String">:=</span> &lt;<a href="#Exp_469_3" id="Exp_371_77" title="Defined at line 469, 517">Exp</a>&gt;&gt;
  <a href="#PropertyAssignment_261_47" id="PropertyAssignment_372_3" title="Referenced at line 261, 283, 289, 305, 311, 317, 323, 329, 335, 341, 347">PropertyAssignment</a>.<span class="cons_Constructor"><span id="PropertyAssignment_372_22" title="Not referenced">PropertyAssignment</span></span> = &lt;&lt;<a href="#PropertyAssignmentId_394_3" id="PropertyAssignmentId_372_45" title="Defined at line 394, 398, 399">PropertyAssignmentId</a>&gt; <span class="cons_String">=</span> &lt;<a href="#Exp_469_3" id="Exp_372_70" title="Defined at line 469, 517">Exp</a>&gt;&gt;
  <a href="#PropertyAssignment_261_47" id="PropertyAssignment_373_3" title="Referenced at line 261, 283, 289, 305, 311, 317, 323, 329, 335, 341, 347">PropertyAssignment</a>.<span class="cons_Constructor"><span id="TemplateCallPropertyAjax_373_22" title="Not referenced">TemplateCallPropertyAjax</span></span> = &lt;<span class="cons_String">ajax</span>&gt;
  <a href="#PropertyAssignment_261_47" id="PropertyAssignment_374_3" title="Referenced at line 261, 283, 289, 305, 311, 317, 323, 329, 335, 341, 347">PropertyAssignment</a>.<span class="cons_Constructor"><span id="TemplateCallPropertyNoLoadingFeedback_374_22" title="Not referenced">TemplateCallPropertyNoLoadingFeedback</span></span> = &lt;<span class="cons_String">no</span> <span class="cons_String">loading</span> <span class="cons_String">feedback</span>&gt;
  <a href="#PropertyAssignment_261_47" id="PropertyAssignment_375_3" title="Referenced at line 261, 283, 289, 305, 311, 317, 323, 329, 335, 341, 347">PropertyAssignment</a>.<span class="cons_Constructor"><span id="TemplateCallPropertySecure_375_22" title="Not referenced">TemplateCallPropertySecure</span></span> = &lt;<span class="cons_String">secure</span>&gt;
  <a href="#PropertyAssignment_261_47" id="PropertyAssignment_376_3" title="Referenced at line 261, 283, 289, 305, 311, 317, 323, 329, 335, 341, 347">PropertyAssignment</a>.<span class="cons_Constructor"><span id="TemplateCallPropertyIgnoreValidation_376_22" title="Not referenced">TemplateCallPropertyIgnoreValidation</span></span> = &lt;<span class="cons_String">ignore-validation</span>&gt;
  <a href="#PropertyAssignment_261_47" id="PropertyAssignment_377_3" title="Referenced at line 261, 283, 289, 305, 311, 317, 323, 329, 335, 341, 347">PropertyAssignment</a>.<span class="cons_Constructor"><span id="TemplateCallPropertyNotSecure_377_22" title="Not referenced">TemplateCallPropertyNotSecure</span></span> = &lt;<span class="cons_String">not-secure</span>&gt;
  <a href="#PropertyAssignment_261_47" id="PropertyAssignment_378_3" title="Referenced at line 261, 283, 289, 305, 311, 317, 323, 329, 335, 341, 347">PropertyAssignment</a>.<span class="cons_Constructor"><span id="TemplateCallPropertyNotNull_378_22" title="Not referenced">TemplateCallPropertyNotNull</span></span> = &lt;<span class="cons_String">not</span> <span class="cons_String">null</span>&gt;
  <a href="#PropertyAssignment_261_47" id="PropertyAssignment_379_3" title="Referenced at line 261, 283, 289, 305, 311, 317, 323, 329, 335, 341, 347">PropertyAssignment</a> = <a href="../WebDSL-XML.sdf3/#CommonAttribute_72_3" id="CommonAttribute_379_24" title="Defined at ../WebDSL-XML.sdf3 line 72, 78, 79, 80">CommonAttribute</a>
  <a href="#PropertyAssignment_261_47" id="PropertyAssignment_380_3" title="Referenced at line 261, 283, 289, 305, 311, 317, 323, 329, 335, 341, 347">PropertyAssignment</a> = <a href="#PropertySubmitMultiple_363_27" id="PropertySubmitMultiple_380_24" title="Defined at line 363, 381, 388">PropertySubmitMultiple</a>
  <a href="#PropertySubmitMultiple_380_24" id="PropertySubmitMultiple_381_3" title="Referenced at line 380">PropertySubmitMultiple</a>.<span class="cons_Constructor"><span id="PropertySubmitMultiple_381_26" title="Not referenced">PropertySubmitMultiple</span></span> = &lt;&lt;<a href="#SubmitProp_22_3" id="SubmitProp_381_53" title="Defined at line 22, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428">SubmitProp</a>&gt; <span class="cons_String">=</span> &lt;{<a href="#ActionCallOrInlineOrExp_363_3" id="ActionCallOrInlineOrExp_381_69" title="Defined at line 363, 382, 383">ActionCallOrInlineOrExp</a> <span class="cons_Lit">";"</span>}+&gt;&gt;
  <a href="#ActionCallOrInlineOrExp_367_61" id="ActionCallOrInlineOrExp_382_3" title="Referenced at line 367, 368, 369, 381, 388">ActionCallOrInlineOrExp</a>.<span class="cons_Constructor"><span id="ActionCallOrInline_382_27" title="Not referenced">ActionCallOrInline</span></span> = <a href="#ActionCallOrInline_297_3" id="ActionCallOrInline_382_48" title="Defined at line 297, 349, 350">ActionCallOrInline</a>
  <a href="#ActionCallOrInlineOrExp_367_61" id="ActionCallOrInlineOrExp_383_3" title="Referenced at line 367, 368, 369, 381, 388">ActionCallOrInlineOrExp</a>.<span class="cons_Constructor"><span id="ActionCallOrInlineExp_383_27" title="Not referenced">ActionCallOrInlineExp</span></span> = <a href="#PropertySubmitExp_363_50" id="PropertySubmitExp_383_51" title="Defined at line 363, 384, 390">PropertySubmitExp</a>
  <a href="#PropertySubmitExp_383_51" id="PropertySubmitExp_384_3" title="Referenced at line 383">PropertySubmitExp</a>.<span class="cons_Constructor"><span id="PropertySubmitExp_384_21" title="Not referenced">PropertySubmitExp</span></span> = <a href="#Exp_469_3" id="Exp_384_41" title="Defined at line 469, 517">Exp</a>
  <a href="#TemplateElement_29_8" id="TemplateElement_385_3" title="Referenced at line 29, 43, 48, 53, 153, 158, 163, 168, 171, 176, 178, 183, 188, 193, 197, 213, 216, 224, 227, 246, 260, 264, 272, 275, 280, 283, 286, 289, 326, 329, 332, 335, 338, 341, 344, 347, 436, 477">TemplateElement</a> = <a href="../WebDSL-Action.sdf3/#OutputShorthand_258_3" id="OutputShorthand_385_21" title="Defined at ../WebDSL-Action.sdf3 line 258">OutputShorthand</a>

  <span class="layout">// require at least two actions to get this constructor</span>
  <a href="#PropertySubmitMultiple_380_24" id="PropertySubmitMultiple_388_3" title="Referenced at line 380">PropertySubmitMultiple</a> = &lt;&lt;<a href="#SubmitProp_22_3" id="SubmitProp_388_30" title="Defined at line 22, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428">SubmitProp</a>&gt; <span class="cons_String">=</span> &lt;<a href="#ActionCallOrInlineOrExp_363_3" id="ActionCallOrInlineOrExp_388_45" title="Defined at line 363, 382, 383">ActionCallOrInlineOrExp</a>&gt;&gt; {<span class="keyword">reject</span>}

  <a href="#PropertySubmitExp_383_51" id="PropertySubmitExp_390_3" title="Referenced at line 383">PropertySubmitExp</a> = <a href="../WebDSL-Action.sdf3/#ThisCall_77_3" id="ThisCall_390_23" title="Defined at ../WebDSL-Action.sdf3 line 77, 179, 250, 406, 407, 408, 409, 411, 412">ThisCall</a> {<span class="keyword">reject</span>}

<span class="keyword">lexical sorts</span>

  <a href="#PropertyAssignmentId_370_50" id="PropertyAssignmentId_394_3" title="Referenced at line 370, 371, 372">PropertyAssignmentId</a>

<span class="keyword">lexical syntax</span>

  <a href="#PropertyAssignmentId_370_50" id="PropertyAssignmentId_398_3" title="Referenced at line 370, 371, 372">PropertyAssignmentId</a> = <a href="../WebDSL-Lexical.sdf3/#ExtendedId_5_59" id="ExtendedId_398_26" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 18">ExtendedId</a>
  <a href="#PropertyAssignmentId_370_50" id="PropertyAssignmentId_399_3" title="Referenced at line 370, 371, 372">PropertyAssignmentId</a> = <a href="#SubmitProp_22_3" id="SubmitProp_399_26" title="Defined at line 22, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428">SubmitProp</a> {<span class="keyword">reject</span>}

<span class="keyword">syntax</span>

  <a href="#TemplateElement_29_8" id="TemplateElement_403_3" title="Referenced at line 29, 43, 48, 53, 153, 158, 163, 168, 171, 176, 178, 183, 188, 193, 197, 213, 216, 224, 227, 246, 260, 264, 272, 275, 280, 283, 286, 289, 326, 329, 332, 335, 338, 341, 344, 347, 436, 477">TemplateElement</a><span class="keyword">-CF</span>.<span class="cons_Constructor"><span id="Text_403_22" title="Not referenced">Text</span></span> = <span class="cons_Lit">"\""</span> <a href="../WebDSL-Action.sdf3/#StringPart_269_3" id="StringPart_403_34" title="Defined at ../WebDSL-Action.sdf3 line 269">StringPart</a><span class="keyword">-CF</span>* <span class="cons_Lit">"\""</span>

<span class="keyword">lexical syntax</span>

  <a href="#SubmitProp_367_46" id="SubmitProp_407_3" title="Referenced at line 367, 368, 369, 381, 388, 399">SubmitProp</a> = <span class="cons_Lit">"onabort"</span>
  <a href="#SubmitProp_367_46" id="SubmitProp_408_3" title="Referenced at line 367, 368, 369, 381, 388, 399">SubmitProp</a> = <span class="cons_Lit">"onblur"</span>
  <a href="#SubmitProp_367_46" id="SubmitProp_409_3" title="Referenced at line 367, 368, 369, 381, 388, 399">SubmitProp</a> = <span class="cons_Lit">"onchange"</span>
  <a href="#SubmitProp_367_46" id="SubmitProp_410_3" title="Referenced at line 367, 368, 369, 381, 388, 399">SubmitProp</a> = <span class="cons_Lit">"onclick"</span>
  <a href="#SubmitProp_367_46" id="SubmitProp_411_3" title="Referenced at line 367, 368, 369, 381, 388, 399">SubmitProp</a> = <span class="cons_Lit">"ondblclick"</span>
  <a href="#SubmitProp_367_46" id="SubmitProp_412_3" title="Referenced at line 367, 368, 369, 381, 388, 399">SubmitProp</a> = <span class="cons_Lit">"onerror"</span>
  <a href="#SubmitProp_367_46" id="SubmitProp_413_3" title="Referenced at line 367, 368, 369, 381, 388, 399">SubmitProp</a> = <span class="cons_Lit">"onfocus"</span>
  <a href="#SubmitProp_367_46" id="SubmitProp_414_3" title="Referenced at line 367, 368, 369, 381, 388, 399">SubmitProp</a> = <span class="cons_Lit">"onkeydown"</span>
  <a href="#SubmitProp_367_46" id="SubmitProp_415_3" title="Referenced at line 367, 368, 369, 381, 388, 399">SubmitProp</a> = <span class="cons_Lit">"onkeypress"</span>
  <a href="#SubmitProp_367_46" id="SubmitProp_416_3" title="Referenced at line 367, 368, 369, 381, 388, 399">SubmitProp</a> = <span class="cons_Lit">"onkeyup"</span>
  <a href="#SubmitProp_367_46" id="SubmitProp_417_3" title="Referenced at line 367, 368, 369, 381, 388, 399">SubmitProp</a> = <span class="cons_Lit">"onload"</span>
  <a href="#SubmitProp_367_46" id="SubmitProp_418_3" title="Referenced at line 367, 368, 369, 381, 388, 399">SubmitProp</a> = <span class="cons_Lit">"onmousedown"</span>
  <a href="#SubmitProp_367_46" id="SubmitProp_419_3" title="Referenced at line 367, 368, 369, 381, 388, 399">SubmitProp</a> = <span class="cons_Lit">"onmousemove"</span>
  <a href="#SubmitProp_367_46" id="SubmitProp_420_3" title="Referenced at line 367, 368, 369, 381, 388, 399">SubmitProp</a> = <span class="cons_Lit">"onmouseout"</span>
  <a href="#SubmitProp_367_46" id="SubmitProp_421_3" title="Referenced at line 367, 368, 369, 381, 388, 399">SubmitProp</a> = <span class="cons_Lit">"onmouseover"</span>
  <a href="#SubmitProp_367_46" id="SubmitProp_422_3" title="Referenced at line 367, 368, 369, 381, 388, 399">SubmitProp</a> = <span class="cons_Lit">"onmouseup"</span>
  <a href="#SubmitProp_367_46" id="SubmitProp_423_3" title="Referenced at line 367, 368, 369, 381, 388, 399">SubmitProp</a> = <span class="cons_Lit">"onreset"</span>
  <a href="#SubmitProp_367_46" id="SubmitProp_424_3" title="Referenced at line 367, 368, 369, 381, 388, 399">SubmitProp</a> = <span class="cons_Lit">"onresize"</span>
  <a href="#SubmitProp_367_46" id="SubmitProp_425_3" title="Referenced at line 367, 368, 369, 381, 388, 399">SubmitProp</a> = <span class="cons_Lit">"onselect"</span>
  <a href="#SubmitProp_367_46" id="SubmitProp_426_3" title="Referenced at line 367, 368, 369, 381, 388, 399">SubmitProp</a> = <span class="cons_Lit">"onsubmit"</span>
  <a href="#SubmitProp_367_46" id="SubmitProp_427_3" title="Referenced at line 367, 368, 369, 381, 388, 399">SubmitProp</a> = <span class="cons_Lit">"onunload"</span>
  <a href="#SubmitProp_367_46" id="SubmitProp_428_3" title="Referenced at line 367, 368, 369, 381, 388, 399">SubmitProp</a> = <span class="cons_Lit">"oninput"</span>

<span class="keyword">context-free sorts</span>

  <a href="#ActionModifier_444_28" id="ActionModifier_432_3" title="Referenced at line 444">ActionModifier</a> <a href="#TemplateCallId_255_6" id="TemplateCallId_432_18" title="Referenced at line 255, 271">TemplateCallId</a>

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="TemplateCall_436_3" title="Multi-file references" data-urls="#TemplateCall_116_21 line 116, 467; ../WebDSL-Ajax.sdf3/#TemplateCall_20_49 line 20, 33, 47, 77, 78, 79, 80">TemplateCall</button> = &lt;<span class="cons_String">separated-by</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_16_31" id="TemplateElement_436_35" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt; <span class="cons_String">}</span>&gt; {<span class="keyword">reject</span>}
  <span id="Definition_437_3" title="Not referenced">Definition</span>.<span class="cons_Constructor"><span id="GlobalInit_437_14" title="Not referenced">GlobalInit</span></span> = &lt;
    <span class="cons_String">init</span> &lt;<a href="../WebDSL-Action.sdf3/#Block_13_11" id="Block_438_11" title="Defined at ../WebDSL-Action.sdf3 line 13, 45">Block</a>&gt;
  &gt;
  <a href="#TemplateElement_29_8" id="TemplateElement_440_3" title="Referenced at line 29, 43, 48, 53, 153, 158, 163, 168, 171, 176, 178, 183, 188, 193, 197, 213, 216, 224, 227, 246, 260, 264, 272, 275, 280, 283, 286, 289, 326, 329, 332, 335, 338, 341, 344, 347, 436, 477">TemplateElement</a>.<span class="cons_Constructor"><span id="DataBindAction_440_19" title="Not referenced">DataBindAction</span></span> = &lt;<span class="cons_String">databind</span> &lt;<a href="../WebDSL-Action.sdf3/#Block_13_11" id="Block_440_47" title="Defined at ../WebDSL-Action.sdf3 line 13, 45">Block</a>&gt;&gt;
  <a href="#TemplateElement_29_8" id="TemplateElement_441_3" title="Referenced at line 29, 43, 48, 53, 153, 158, 163, 168, 171, 176, 178, 183, 188, 193, 197, 213, 216, 224, 227, 246, 260, 264, 272, 275, 280, 283, 286, 289, 326, 329, 332, 335, 338, 341, 344, 347, 436, 477">TemplateElement</a>.<span class="cons_Constructor"><span id="RenderAction_441_19" title="Not referenced">RenderAction</span></span> = &lt;<span class="cons_String">render</span> &lt;<a href="../WebDSL-Action.sdf3/#Block_13_11" id="Block_441_43" title="Defined at ../WebDSL-Action.sdf3 line 13, 45">Block</a>&gt;&gt;
  <a href="#TemplateElement_29_8" id="TemplateElement_442_3" title="Referenced at line 29, 43, 48, 53, 153, 158, 163, 168, 171, 176, 178, 183, 188, 193, 197, 213, 216, 224, 227, 246, 260, 264, 272, 275, 280, 283, 286, 289, 326, 329, 332, 335, 338, 341, 344, 347, 436, 477">TemplateElement</a>.<span class="cons_Constructor"><span id="AllPhasesAction_442_19" title="Not referenced">AllPhasesAction</span></span> = &lt;<span class="cons_String">allphases</span> &lt;<a href="../WebDSL-Action.sdf3/#Block_13_11" id="Block_442_49" title="Defined at ../WebDSL-Action.sdf3 line 13, 45">Block</a>&gt;&gt;
  <a href="#TemplateElement_29_8" id="TemplateElement_443_3" title="Referenced at line 29, 43, 48, 53, 153, 158, 163, 168, 171, 176, 178, 183, 188, 193, 197, 213, 216, 224, 227, 246, 260, 264, 272, 275, 280, 283, 286, 289, 326, 329, 332, 335, 338, 341, 344, 347, 436, 477">TemplateElement</a>.<span class="cons_Constructor"><span id="ValidateAction_443_19" title="Not referenced">ValidateAction</span></span> = &lt;<span class="cons_String">validate</span> &lt;<a href="../WebDSL-Action.sdf3/#Block_13_11" id="Block_443_47" title="Defined at ../WebDSL-Action.sdf3 line 13, 45">Block</a>&gt;&gt;
  <a href="#Action_75_21" id="Action_444_3" title="Referenced at line 75">Action</a>.<span class="cons_Constructor"><span id="Action_444_10" title="Not referenced">Action</span></span> = &lt;<span class="cons_String">action</span> &lt;<a href="#ActionModifier_432_3" id="ActionModifier_444_28" title="Defined at line 432, 445">ActionModifier</a>*&gt; &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_444_46" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; &lt;<a href="../WebDSL-Core.sdf3/#OptFormalArgs_10_13" id="OptFormalArgs_444_51" title="Defined at ../WebDSL-Core.sdf3 line 10, 37, 38">OptFormalArgs</a>&gt; &lt;<a href="../WebDSL-Action.sdf3/#Block_13_11" id="Block_444_67" title="Defined at ../WebDSL-Action.sdf3 line 13, 45">Block</a>&gt;&gt;
  <a href="#ActionModifier_444_28" id="ActionModifier_445_3" title="Referenced at line 444">ActionModifier</a>.<span class="cons_Constructor"><span id="ActionModifierIgnoreValidation_445_18" title="Not referenced">ActionModifierIgnoreValidation</span></span> = &lt;<span class="cons_String">ignore-validation</span>&gt;
  <a href="#TemplateCallId_255_6" id="TemplateCallId_446_3" title="Referenced at line 255, 271">TemplateCallId</a>.<span class="cons_Constructor"><span id="QualifiedElementsCall_446_18" title="Not referenced">QualifiedElementsCall</span></span> = &lt;&lt;<a href="#TemplateId_81_3" id="TemplateId_446_44" title="Defined at line 81, 82, 120, 121, 202, 203, 232, 233, 354, 355, 356, 357, 358, 359, 508">TemplateId</a>&gt; <span class="cons_String">.elements</span>&gt;
  <a href="#TemplateCallId_255_6" id="TemplateCallId_447_3" title="Referenced at line 255, 271">TemplateCallId</a>.<span class="cons_Constructor"><span id="TemplateCallId_447_18" title="Not referenced">TemplateCallId</span></span> = <a href="#TemplateId_81_3" id="TemplateId_447_35" title="Defined at line 81, 82, 120, 121, 202, 203, 232, 233, 354, 355, 356, 357, 358, 359, 508">TemplateId</a>

<span class="keyword">context-free syntax</span> <span class="layout">// reject rules</span>

  <button class="modal-open" id="TemplateCall_451_3" title="Multi-file references" data-urls="#TemplateCall_116_21 line 116, 467; ../WebDSL-Ajax.sdf3/#TemplateCall_20_49 line 20, 33, 47, 77, 78, 79, 80">TemplateCall</button> = &lt;<span class="cons_String">init</span> &lt;<a href="../WebDSL-Action.sdf3/#Block_13_11" id="Block_451_25" title="Defined at ../WebDSL-Action.sdf3 line 13, 45">Block</a>&gt;&gt; {<span class="keyword">reject</span>}
  <button class="modal-open" id="TemplateCall_452_3" title="Multi-file references" data-urls="#TemplateCall_116_21 line 116, 467; ../WebDSL-Ajax.sdf3/#TemplateCall_20_49 line 20, 33, 47, 77, 78, 79, 80">TemplateCall</button> = &lt;<span class="cons_String">databind</span> &lt;<a href="../WebDSL-Action.sdf3/#Block_13_11" id="Block_452_29" title="Defined at ../WebDSL-Action.sdf3 line 13, 45">Block</a>&gt;&gt; {<span class="keyword">reject</span>}
  <button class="modal-open" id="TemplateCall_453_3" title="Multi-file references" data-urls="#TemplateCall_116_21 line 116, 467; ../WebDSL-Ajax.sdf3/#TemplateCall_20_49 line 20, 33, 47, 77, 78, 79, 80">TemplateCall</button> = &lt;<span class="cons_String">render</span> &lt;<a href="../WebDSL-Action.sdf3/#Block_13_11" id="Block_453_27" title="Defined at ../WebDSL-Action.sdf3 line 13, 45">Block</a>&gt;&gt; {<span class="keyword">reject</span>}
  <button class="modal-open" id="TemplateCall_454_3" title="Multi-file references" data-urls="#TemplateCall_116_21 line 116, 467; ../WebDSL-Ajax.sdf3/#TemplateCall_20_49 line 20, 33, 47, 77, 78, 79, 80">TemplateCall</button> = &lt;<span class="cons_String">allphases</span> &lt;<a href="../WebDSL-Action.sdf3/#Block_13_11" id="Block_454_30" title="Defined at ../WebDSL-Action.sdf3 line 13, 45">Block</a>&gt;&gt; {<span class="keyword">reject</span>}
  <button class="modal-open" id="TemplateCall_455_3" title="Multi-file references" data-urls="#TemplateCall_116_21 line 116, 467; ../WebDSL-Ajax.sdf3/#TemplateCall_20_49 line 20, 33, 47, 77, 78, 79, 80">TemplateCall</button> = &lt;<span class="cons_String">action</span>&gt; {<span class="keyword">reject</span>}
  <button class="modal-open" id="TemplateCall_456_3" title="Multi-file references" data-urls="#TemplateCall_116_21 line 116, 467; ../WebDSL-Ajax.sdf3/#TemplateCall_20_49 line 20, 33, 47, 77, 78, 79, 80">TemplateCall</button> = &lt;<span class="cons_String">validate</span> &lt;<a href="../WebDSL-Action.sdf3/#Block_13_11" id="Block_456_29" title="Defined at ../WebDSL-Action.sdf3 line 13, 45">Block</a>&gt;&gt; {<span class="keyword">reject</span>}

<span class="keyword">context-free sorts</span>

  <a href="#FormalVarArg_464_34" id="FormalVarArg_460_3" title="Referenced at line 464">FormalVarArg</a> <a href="#ExpVarArg_469_32" id="ExpVarArg_460_16" title="Referenced at line 469, 470, 471, 472, 473">ExpVarArg</a> <a href="#ExpOrTemplateArg_474_30" id="ExpOrTemplateArg_460_26" title="Referenced at line 474, 481">ExpOrTemplateArg</a>

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="Sort_464_3" title="Multi-file references" data-urls="#Sort_34_47 line 34, 91, 94, 97, 100, 152, 162, 224, 465, 470, 472; ../WebDSL-Dispatch.sdf3/#Sort_27_13 line 27; ../WebDSL-Exception.sdf3/#Sort_29_37 line 29">Sort</button>.<span class="cons_Constructor"><span id="TemplateVarArgSort_464_8" title="Not referenced">TemplateVarArgSort</span></span> = &lt;<span class="cons_String">[</span> &lt;{<a href="#FormalVarArg_460_3" id="FormalVarArg_464_34" title="Defined at line 460, 465">FormalVarArg</a> <span class="cons_Lit">","</span>}+&gt; <span class="cons_String">]</span>&gt;
  <a href="#FormalVarArg_464_34" id="FormalVarArg_465_3" title="Referenced at line 464">FormalVarArg</a>.<span class="cons_Constructor"><span id="FormalVarArg_465_16" title="Not referenced">FormalVarArg</span></span> = &lt;&lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_465_33" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">:</span> &lt;<a href="#Sort_464_3" id="Sort_465_40" title="Defined at line 464">Sort</a>&gt;&gt;
  <button class="modal-open" id="TemplateCall_466_3" title="Multi-file references" data-urls="#TemplateCall_116_21 line 116, 467; ../WebDSL-Ajax.sdf3/#TemplateCall_20_49 line 20, 33, 47, 77, 78, 79, 80">TemplateCall</button>.<span class="cons_Constructor"><span id="MemberTemplateCall_466_16" title="Not referenced">MemberTemplateCall</span></span> = &lt;
    &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_467_6" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">.</span> &lt;<a href="#TemplateCall_16_66" id="TemplateCall_467_13" title="Defined at line 16, 77, 254, 275, 436, 451, 452, 453, 454, 455, 456, 466">TemplateCall</a>&gt;
  &gt;
  <button class="modal-open" id="Exp_469_3" title="Multi-file references" data-urls="#Exp_97_30 line 97, 100, 103, 106, 129, 131, 132, 135, 136, 137, 138, 139, 140, 141, 152, 157, 167, 175, 182, 187, 196, 208, 219, 241, 246, 259, 292, 302, 305, 308, 311, 314, 317, 320, 323, 370, 371, 372, 384, 470, 471, 473, 476, 481; ../WebDSL-Ajax.sdf3/#Exp_19_43 line 19, 20, 21, 26, 27, 29, 46, 47, 48, 50, 51, 53, 67, 73, 97, 98, 107, 108, 109, 110; ../WebDSL-Attributes.sdf3/#Exp_20_53 line 20; ../WebDSL-DataValidation.sdf3/#Exp_12_54 line 12, 13, 14, 15, 16, 19, 23, 27, 30; ../WebDSL-EntityDerive.sdf3/#Exp_15_38 line 15; ../WebDSL-Exception.sdf3/#Exp_16_13 line 16, 19; ../WebDSL-JavaScript.sdf3/#Exp_28_25 line 28; ../WebDSL-Service.sdf3/#Exp_28_43 line 28, 29, 30">Exp</button>.<span class="cons_Constructor"><span id="TemplateVarArgExp_469_7" title="Not referenced">TemplateVarArgExp</span></span> = &lt;<span class="cons_String">[</span> &lt;{<a href="#ExpVarArg_460_16" id="ExpVarArg_469_32" title="Defined at line 460, 470, 471, 472, 473, 474">ExpVarArg</a> <span class="cons_Lit">","</span>}+&gt; <span class="cons_String">]</span>&gt;
  <a href="#ExpVarArg_469_32" id="ExpVarArg_470_3" title="Referenced at line 469, 470, 471, 472, 473">ExpVarArg</a>.<span class="cons_Constructor"><span id="ExpVarArgFor_470_13" title="Not referenced">ExpVarArgFor</span></span> = &lt;<span class="cons_String">for</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_470_36" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">:</span> &lt;<a href="#Sort_464_3" id="Sort_470_43" title="Defined at line 464">Sort</a>&gt; <span class="cons_String">in</span> &lt;<a href="#Exp_469_3" id="Exp_470_53" title="Defined at line 469, 517">Exp</a>&gt; &lt;<a href="#OptFilter_16_47" id="OptFilter_470_59" title="Defined at line 16, 142, 143">OptFilter</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span> &lt;{<a href="#ExpVarArg_460_16" id="ExpVarArg_470_76" title="Defined at line 460, 470, 471, 472, 473, 474">ExpVarArg</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">}</span>&gt;
  <a href="#ExpVarArg_469_32" id="ExpVarArg_471_3" title="Referenced at line 469, 470, 471, 472, 473">ExpVarArg</a>.<span class="cons_Constructor"><span id="ExpVarArgForInferred_471_13" title="Not referenced">ExpVarArgForInferred</span></span> = &lt;<span class="cons_String">for</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_471_44" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">in</span> &lt;<a href="#Exp_469_3" id="Exp_471_52" title="Defined at line 469, 517">Exp</a>&gt; &lt;<a href="#OptFilter_16_47" id="OptFilter_471_58" title="Defined at line 16, 142, 143">OptFilter</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span> &lt;{<a href="#ExpVarArg_460_16" id="ExpVarArg_471_75" title="Defined at line 460, 470, 471, 472, 473, 474">ExpVarArg</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">}</span>&gt;
  <a href="#ExpVarArg_469_32" id="ExpVarArg_472_3" title="Referenced at line 469, 470, 471, 472, 473">ExpVarArg</a>.<span class="cons_Constructor"><span id="ExpVarArgForAll_472_13" title="Not referenced">ExpVarArgForAll</span></span> = &lt;<span class="cons_String">for</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_472_39" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">:</span> &lt;<a href="#Sort_464_3" id="Sort_472_46" title="Defined at line 464">Sort</a>&gt; &lt;<a href="#OptFilter_16_47" id="OptFilter_472_53" title="Defined at line 16, 142, 143">OptFilter</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span> &lt;{<a href="#ExpVarArg_460_16" id="ExpVarArg_472_70" title="Defined at line 460, 470, 471, 472, 473, 474">ExpVarArg</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">}</span>&gt;
  <a href="#ExpVarArg_469_32" id="ExpVarArg_473_3" title="Referenced at line 469, 470, 471, 472, 473">ExpVarArg</a>.<span class="cons_Constructor"><span id="ExpVarArgForCount_473_13" title="Not referenced">ExpVarArgForCount</span></span> = &lt;<span class="cons_String">for</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_473_41" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">:</span> <span class="cons_String">Int</span> <span class="cons_String">from</span> &lt;<a href="#Exp_469_3" id="Exp_473_57" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">to</span> &lt;<a href="#Exp_469_3" id="Exp_473_66" title="Defined at line 469, 517">Exp</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span> &lt;{<a href="#ExpVarArg_460_16" id="ExpVarArg_473_77" title="Defined at line 460, 470, 471, 472, 473, 474">ExpVarArg</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">}</span>&gt;
  <a href="#ExpVarArg_469_32" id="ExpVarArg_474_3" title="Referenced at line 469, 470, 471, 472, 473">ExpVarArg</a>.<span class="cons_Constructor"><span id="ExpVarArg_474_13" title="Not referenced">ExpVarArg</span></span> = &lt;<span class="cons_String">(</span> &lt;{<a href="#ExpOrTemplateArg_460_26" id="ExpOrTemplateArg_474_30" title="Defined at line 460, 476, 477">ExpOrTemplateArg</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;

  <a href="#ExpOrTemplateArg_474_30" id="ExpOrTemplateArg_476_3" title="Referenced at line 474, 481">ExpOrTemplateArg</a>.<span class="cons_Constructor"><a href="#ExpVarArgExp_481_20" id="ExpVarArgExp_476_20" title="Referenced at line 481">ExpVarArgExp</a></span> = &lt;&lt;<a href="#Exp_469_3" id="Exp_476_37" title="Defined at line 469, 517">Exp</a>&gt;&gt;
  <a href="#ExpOrTemplateArg_474_30" id="ExpOrTemplateArg_477_3" title="Referenced at line 474, 481">ExpOrTemplateArg</a>.<span class="cons_Constructor"><span id="ExpVarArgElements_477_20" title="Not referenced">ExpVarArgElements</span></span> = &lt;<span class="cons_String">{</span> &lt;<a href="#TemplateElement_16_31" id="TemplateElement_477_44" title="Defined at line 16, 72, 75, 108, 109, 112, 115, 116, 151, 156, 161, 166, 174, 181, 186, 207, 218, 279, 282, 285, 288, 301, 304, 307, 310, 313, 316, 319, 322, 325, 328, 331, 334, 337, 340, 343, 346, 385, 403, 440, 441, 442, 443">TemplateElement</a>*&gt; <span class="cons_String">}</span>&gt;

<span class="keyword">context-free priorities</span>

  <a href="#ExpOrTemplateArg_460_26" id="ExpOrTemplateArg_481_3" title="Defined at line 460, 476, 477">ExpOrTemplateArg</a>.<span class="cons_Constructor"><a href="#ExpVarArgExp_476_20" id="ExpVarArgExp_481_20" title="Defined at line 476">ExpVarArgExp</a></span> &lt;0&gt; .&gt; <a href="#Exp_469_3" id="Exp_481_40" title="Defined at line 469, 517">Exp</a>.<span class="cons_Constructor"><a href="../WebDSL-Action.sdf3/#SetCreation_238_7" id="SetCreation_481_44" title="Defined at ../WebDSL-Action.sdf3 line 238">SetCreation</a></span>

<span class="keyword">context-free sorts</span>

  <a href="#HTMLWrapper_498_24" id="HTMLWrapper_485_3" title="Referenced at line 498">HTMLWrapper</a> <a href="#HTMLWrapperAssigns_504_49" id="HTMLWrapperAssigns_485_15" title="Referenced at line 504">HTMLWrapperAssigns</a> <a href="#HTMLWrapperBody_490_18" id="HTMLWrapperBody_485_34" title="Referenced at line 490, 501">HTMLWrapperBody</a> <a href="#HTMLWrapperAssign_492_46" id="HTMLWrapperAssign_485_50" title="Referenced at line 492">HTMLWrapperAssign</a>

<span class="keyword">context-free syntax</span>

  <a href="#HTMLWrapper_498_24" id="HTMLWrapper_489_3" title="Referenced at line 498">HTMLWrapper</a>.<span class="cons_Constructor"><span id="HTMLWrapper_489_15" title="Not referenced">HTMLWrapper</span></span> = &lt;
    <span class="cons_String">htmlwrapper</span> &lt;<a href="#HTMLWrapperBody_485_34" id="HTMLWrapperBody_490_18" title="Defined at line 485, 504">HTMLWrapperBody</a>&gt;
  &gt;
  <a href="#HTMLWrapperAssigns_504_49" id="HTMLWrapperAssigns_492_3" title="Referenced at line 504">HTMLWrapperAssigns</a>.<span class="cons_Constructor"><span id="HTMLWrapperAssigns_492_22" title="Not referenced">HTMLWrapperAssigns</span></span> = &lt;<span class="cons_String">[</span>&lt;<a href="#HTMLWrapperAssign_485_50" id="HTMLWrapperAssign_492_46" title="Defined at line 485, 495, 496">HTMLWrapperAssign</a>*&gt; <span class="cons_String">]</span>&gt;
  <a href="#HTMLWrapperAssigns_504_49" id="HTMLWrapperAssigns_493_3" title="Referenced at line 504">HTMLWrapperAssigns</a>.<span class="cons_Constructor"><span id="HTMLWrapperAssignsNone_493_22" title="Not referenced">HTMLWrapperAssignsNone</span></span> = &lt;&gt;

  <a href="#HTMLWrapperAssign_492_46" id="HTMLWrapperAssign_495_3" title="Referenced at line 492">HTMLWrapperAssign</a>.<span class="cons_Constructor"><span id="HTMLWrapperAssign_495_21" title="Not referenced">HTMLWrapperAssign</span></span> = &lt;&lt;<a href="../WebDSL-Attributes.sdf3/#Attribute_11_87" id="Attribute_495_43" title="Defined at ../WebDSL-Attributes.sdf3 line 11, 44">Attribute</a>&gt;&gt;
  <a href="#HTMLWrapperAssign_492_46" id="HTMLWrapperAssign_496_3" title="Referenced at line 492">HTMLWrapperAssign</a>.<span class="cons_Constructor"><span id="HTMLWrapperAssignComma_496_21" title="Not referenced">HTMLWrapperAssignComma</span></span> = &lt;&lt;<a href="../WebDSL-Attributes.sdf3/#Attribute_11_87" id="Attribute_496_48" title="Defined at ../WebDSL-Attributes.sdf3 line 11, 44">Attribute</a>&gt; <span class="cons_String">,</span>&gt;

  <a href="#TemplateDefinition_26_35" id="TemplateDefinition_498_3" title="Referenced at line 26, 115">TemplateDefinition</a> = <a href="#HTMLWrapper_485_3" id="HTMLWrapper_498_24" title="Defined at line 485, 489">HTMLWrapper</a>
  <a href="#TemplateDefinition_26_35" id="TemplateDefinition_499_3" title="Referenced at line 26, 115">TemplateDefinition</a>.<span class="cons_Constructor"><span id="HTMLWrapperMultiple_499_22" title="Not referenced">HTMLWrapperMultiple</span></span> = &lt;
    <span class="cons_String">htmlwrapper</span> <span class="cons_String">{</span>
      &lt;<a href="#HTMLWrapperBody_485_34" id="HTMLWrapperBody_501_8" title="Defined at line 485, 504">HTMLWrapperBody</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#HTMLWrapperBody_490_18" id="HTMLWrapperBody_504_3" title="Referenced at line 490, 501">HTMLWrapperBody</a>.<span class="cons_Constructor"><span id="HTMLWrapperBody_504_19" title="Not referenced">HTMLWrapperBody</span></span> = &lt;&lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_504_39" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_504_44" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; &lt;<a href="#HTMLWrapperAssigns_485_15" id="HTMLWrapperAssigns_504_49" title="Defined at line 485, 492, 493">HTMLWrapperAssigns</a>&gt;&gt;

<span class="keyword">lexical syntax</span>

  <a href="#TemplateId_34_31" id="TemplateId_508_3" title="Referenced at line 34, 36, 47, 446, 447">TemplateId</a> = <span class="cons_Lit">"htmlwrapper"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free sorts</span>

  <a href="#TemplateName_517_9" id="TemplateName_512_3" title="Referenced at line 517, 525">TemplateName</a>

<span class="keyword">context-free syntax</span>

  <a href="#TemplateName_517_9" id="TemplateName_516_3" title="Referenced at line 517, 525">TemplateName</a>.<span class="cons_Constructor"><span id="TemplateName_516_16" title="Not referenced">TemplateName</span></span> = &lt;<span class="cons_String">id</span>&gt;
  <button class="modal-open" id="Exp_517_3" title="Multi-file references" data-urls="#Exp_97_30 line 97, 100, 103, 106, 129, 131, 132, 135, 136, 137, 138, 139, 140, 141, 152, 157, 167, 175, 182, 187, 196, 208, 219, 241, 246, 259, 292, 302, 305, 308, 311, 314, 317, 320, 323, 370, 371, 372, 384, 470, 471, 473, 476, 481; ../WebDSL-Ajax.sdf3/#Exp_19_43 line 19, 20, 21, 26, 27, 29, 46, 47, 48, 50, 51, 53, 67, 73, 97, 98, 107, 108, 109, 110; ../WebDSL-Attributes.sdf3/#Exp_20_53 line 20; ../WebDSL-DataValidation.sdf3/#Exp_12_54 line 12, 13, 14, 15, 16, 19, 23, 27, 30; ../WebDSL-EntityDerive.sdf3/#Exp_15_38 line 15; ../WebDSL-Exception.sdf3/#Exp_16_13 line 16, 19; ../WebDSL-JavaScript.sdf3/#Exp_28_25 line 28; ../WebDSL-Service.sdf3/#Exp_28_43 line 28, 29, 30">Exp</button> = <a href="#TemplateName_512_3" id="TemplateName_517_9" title="Defined at line 512, 516">TemplateName</a>

<span class="keyword">lexical syntax</span>

  <button class="modal-open" id="VarId_521_3" title="Multi-file references" data-urls="#VarId_91_10 line 91, 94, 97, 100, 103, 106, 152, 157, 162, 167; ../WebDSL-Exception.sdf3/#VarId_29_27 line 29; ../WebDSL-Prefetch.sdf3/#VarId_65_37 line 65">VarId</button> = <span class="cons_Lit">"id"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free restrictions</span>

  <a href="#TemplateName_512_3" id="TemplateName_525_3" title="Defined at line 512, 516">TemplateName</a> -/- [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_]

</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
