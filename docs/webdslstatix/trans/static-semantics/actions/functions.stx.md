---
title: functions.stx
hide:
  - toc
---

# `functions.stx`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/actions/functions.stx]

[pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/actions/functions.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/trans/static-semantics/actions/functions.stx "The source file on GitHub"

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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../../webdsl-ac.stx#static-semantics/actions/functions_45_79" id="static-semantics/actions/functions_7_41" title="Referenced at ../../webdsl-ac.stx line 4; ../../webdsl-actions.stx line 7; ../../webdsl-built-ins.stx line 4; ../../webdsl-entities.stx line 4; ../../webdsl-native.stx line 4; ../../webdsl-services.stx line 4; ../../webdsl-ui.stx line 4; ../../types/built-ins.stx line 4; ../../types/type-extensions.stx line 4; ../../ui/actions.stx line 4; ../../ui/template-calls.stx line 4">static-semantics/actions/functions</a>

<span class="keyword">imports</span>
  <a href="../../types/built-ins.stx#static-semantics/types/built-ins_7_39" id="static-semantics/types/built-ins_53_85" title="Defined at ../../types/built-ins.stx line 1">static-semantics/types/built-ins</a>

  <a href="../../webdsl-actions.stx#static-semantics/webdsl-actions_7_38" id="static-semantics/webdsl-actions_89_120" title="Defined at ../../webdsl-actions.stx line 1">static-semantics/webdsl-actions</a>
  <a href="../../webdsl-entities.stx#static-semantics/webdsl-entities_7_39" id="static-semantics/webdsl-entities_123_155" title="Defined at ../../webdsl-entities.stx line 1">static-semantics/webdsl-entities</a>
  <a href="../../webdsl-types.stx#static-semantics/webdsl-types_7_36" id="static-semantics/webdsl-types_158_187" title="Defined at ../../webdsl-types.stx line 1">static-semantics/webdsl-types</a>
  <a href="../../webdsl.stx#static-semantics/webdsl_7_30" id="static-semantics/webdsl_190_213" title="Defined at ../../webdsl.stx line 1">static-semantics/webdsl</a>

<span class="keyword">rules</span> <span class="layout">// functions calls</span>

  <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_243_252" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_327_328" id="s_253_254" title="Referenced at line 14">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#ThisCall2Exp_4393_4405" id="ThisCall2Exp_256_268" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 135">ThisCall2Exp</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#ThisCall_4428_4436" id="ThisCall_269_277" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 136">ThisCall</a>(<a href="#f_330_331" id="f_278_279" title="Referenced at line 14">f</a>, <a href="#argExps_333_340" id="argExps_281_288" title="Referenced at line 14">argExps</a>))) = <a href="#t_303_304" id="t_294_295" title="Referenced at line 14">t</a> :-
    <a href="#t_294_295" id="t_303_304" title="Defined at line 13">t</a> == <a href="#typeOfFunctionCall_1140_1158" id="typeOfFunctionCall_308_326" title="Defined at line 37">typeOfFunctionCall</a>(<a href="#s_253_254" id="s_327_328" title="Defined at line 13">s</a>, <a href="#f_278_279" id="f_330_331" title="Defined at line 13">f</a>, <a href="#argExps_281_288" id="argExps_333_340" title="Defined at line 13">argExps</a>).

  <a href="../../webdsl.stx#typeOfSimpleExp_16774_16789" id="typeOfSimpleExp_346_361" title="Defined at ../../webdsl.stx line 395">typeOfSimpleExp</a>(<a href="#s_438_439" id="s_362_363" title="Referenced at line 17">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#SimpleThisCall_4679_4693" id="SimpleThisCall_365_379" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 143">SimpleThisCall</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#ThisCall_4428_4436" id="ThisCall_380_388" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 136">ThisCall</a>(<a href="#f_441_442" id="f_389_390" title="Referenced at line 17">f</a>, <a href="#argExps_444_451" id="argExps_392_399" title="Referenced at line 17">argExps</a>))) = <a href="#t_414_415" id="t_405_406" title="Referenced at line 17">t</a> :-
    <a href="#t_405_406" id="t_414_415" title="Defined at line 16">t</a> == <a href="#typeOfFunctionCall_1140_1158" id="typeOfFunctionCall_419_437" title="Defined at line 37">typeOfFunctionCall</a>(<a href="#s_362_363" id="s_438_439" title="Defined at line 16">s</a>, <a href="#f_389_390" id="f_441_442" title="Defined at line 16">f</a>, <a href="#argExps_392_399" id="argExps_444_451" title="Defined at line 16">argExps</a>).

  <a href="../../webdsl.stx#typeOfPlaceholderExp_16940_16960" id="typeOfPlaceholderExp_457_477" title="Defined at ../../webdsl.stx line 398">typeOfPlaceholderExp</a>(<a href="#s_550_551" id="s_478_479" title="Referenced at line 20">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx#PHThisCall_2129_2139" id="PHThisCall_481_491" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx line 59">PHThisCall</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#ThisCall_4428_4436" id="ThisCall_492_500" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 136">ThisCall</a>(<a href="#f_553_554" id="f_501_502" title="Referenced at line 20">f</a>, <a href="#argExps_556_563" id="argExps_504_511" title="Referenced at line 20">argExps</a>))) = <a href="#t_526_527" id="t_517_518" title="Referenced at line 20">t</a> :-
    <a href="#t_517_518" id="t_526_527" title="Defined at line 19">t</a> == <a href="#typeOfFunctionCall_1140_1158" id="typeOfFunctionCall_531_549" title="Defined at line 37">typeOfFunctionCall</a>(<a href="#s_478_479" id="s_550_551" title="Defined at line 19">s</a>, <a href="#f_501_502" id="f_553_554" title="Defined at line 19">f</a>, <a href="#argExps_504_511" id="argExps_556_563" title="Defined at line 19">argExps</a>).

  <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_569_578" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_656_657" id="s_579_580" title="Referenced at line 23, 24">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Call_4473_4477" id="Call_582_586" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 137">Call</a>(<a href="#exp_659_662" id="exp_587_590" title="Referenced at line 23">exp</a>, <a href="#f_733_734" id="f_592_593" title="Referenced at line 25">f</a>, <a href="#argExps_736_743" id="argExps_595_602" title="Referenced at line 25">argExps</a>)) = <a href="#t_700_701" id="t_607_608" title="Referenced at line 25">t</a> :- { <a href="#expType_635_642" id="expType_614_621" title="Referenced at line 23, 25">expType</a> <a href="#s_eval_673_679" id="s_eval_622_628" title="Referenced at line 24, 24, 25">s_eval</a> }
    <a href="#expType_614_621" id="expType_635_642" title="Defined at line 22">expType</a> == <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_646_655" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_579_580" id="s_656_657" title="Defined at line 22">s</a>, <a href="#exp_587_590" id="exp_659_662" title="Defined at line 22">exp</a>),
    <span class="keyword">new</span> <a href="#s_eval_622_628" id="s_eval_673_679" title="Defined at line 22">s_eval</a>, <a href="#s_eval_622_628" id="s_eval_681_687" title="Defined at line 22">s_eval</a> -<a href="../../webdsl.stx#P_1226_1227" id="P_689_690" title="Defined at ../../webdsl.stx line 45">P</a>-&gt; <a href="#s_579_580" id="s_693_694" title="Defined at line 22">s</a>,
    <a href="#t_607_608" id="t_700_701" title="Defined at line 22">t</a> == <a href="#typeOfCall_1322_1332" id="typeOfCall_705_715" title="Defined at line 41">typeOfCall</a>(<a href="#s_eval_622_628" id="s_eval_716_722" title="Defined at line 22">s_eval</a>, <a href="#expType_614_621" id="expType_724_731" title="Defined at line 22">expType</a>, <a href="#f_592_593" id="f_733_734" title="Defined at line 22">f</a>, <a href="#argExps_595_602" id="argExps_736_743" title="Defined at line 22">argExps</a>).

  <a href="../../webdsl.stx#typeOfSimpleExp_16774_16789" id="typeOfSimpleExp_749_764" title="Defined at ../../webdsl.stx line 395">typeOfSimpleExp</a>(<a href="#s_854_855" id="s_765_766" title="Referenced at line 28, 29">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#SimpleCall_4722_4732" id="SimpleCall_768_778" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 144">SimpleCall</a>(<a href="#exp_857_860" id="exp_779_782" title="Referenced at line 28">exp</a>, <a href="#f_931_932" id="f_784_785" title="Referenced at line 30">f</a>, <a href="#argExps_934_941" id="argExps_787_794" title="Referenced at line 30">argExps</a>)) = <a href="#t_898_899" id="t_799_800" title="Referenced at line 30">t</a> :- { <a href="#expType_827_834" id="expType_806_813" title="Referenced at line 28, 30">expType</a> <a href="#s_eval_871_877" id="s_eval_814_820" title="Referenced at line 29, 29, 30">s_eval</a> }
    <a href="#expType_806_813" id="expType_827_834" title="Defined at line 27">expType</a> == <a href="../../webdsl.stx#typeOfSimpleExp_16774_16789" id="typeOfSimpleExp_838_853" title="Defined at ../../webdsl.stx line 395">typeOfSimpleExp</a>(<a href="#s_765_766" id="s_854_855" title="Defined at line 27">s</a>, <a href="#exp_779_782" id="exp_857_860" title="Defined at line 27">exp</a>),
    <span class="keyword">new</span> <a href="#s_eval_814_820" id="s_eval_871_877" title="Defined at line 27">s_eval</a>, <a href="#s_eval_814_820" id="s_eval_879_885" title="Defined at line 27">s_eval</a> -<a href="../../webdsl.stx#P_1226_1227" id="P_887_888" title="Defined at ../../webdsl.stx line 45">P</a>-&gt; <a href="#s_765_766" id="s_891_892" title="Defined at line 27">s</a>,
    <a href="#t_799_800" id="t_898_899" title="Defined at line 27">t</a> == <a href="#typeOfCall_1322_1332" id="typeOfCall_903_913" title="Defined at line 41">typeOfCall</a>(<a href="#s_eval_814_820" id="s_eval_914_920" title="Defined at line 27">s_eval</a>, <a href="#expType_806_813" id="expType_922_929" title="Defined at line 27">expType</a>, <a href="#f_784_785" id="f_931_932" title="Defined at line 27">f</a>, <a href="#argExps_787_794" id="argExps_934_941" title="Defined at line 27">argExps</a>).

  <a href="../../webdsl.stx#typeOfPlaceholderExp_16940_16960" id="typeOfPlaceholderExp_947_967" title="Defined at ../../webdsl.stx line 398">typeOfPlaceholderExp</a>(<a href="#s_1047_1048" id="s_968_969" title="Referenced at line 33, 34">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx#PHCall_2164_2170" id="PHCall_971_977" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx line 60">PHCall</a>(<a href="#exp_1050_1053" id="exp_978_981" title="Referenced at line 33">exp</a>, <a href="#f_1124_1125" id="f_983_984" title="Referenced at line 35">f</a>, <a href="#argExps_1127_1134" id="argExps_986_993" title="Referenced at line 35">argExps</a>)) = <a href="#t_1091_1092" id="t_998_999" title="Referenced at line 35">t</a> :- { <a href="#expType_1026_1033" id="expType_1005_1012" title="Referenced at line 33, 35">expType</a> <a href="#s_eval_1064_1070" id="s_eval_1013_1019" title="Referenced at line 34, 34, 35">s_eval</a> }
    <a href="#expType_1005_1012" id="expType_1026_1033" title="Defined at line 32">expType</a> == <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_1037_1046" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_968_969" id="s_1047_1048" title="Defined at line 32">s</a>, <a href="#exp_978_981" id="exp_1050_1053" title="Defined at line 32">exp</a>),
    <span class="keyword">new</span> <a href="#s_eval_1013_1019" id="s_eval_1064_1070" title="Defined at line 32">s_eval</a>, <a href="#s_eval_1013_1019" id="s_eval_1072_1078" title="Defined at line 32">s_eval</a> -<a href="../../webdsl.stx#P_1226_1227" id="P_1080_1081" title="Defined at ../../webdsl.stx line 45">P</a>-&gt; <a href="#s_968_969" id="s_1084_1085" title="Defined at line 32">s</a>,
    <a href="#t_998_999" id="t_1091_1092" title="Defined at line 32">t</a> == <a href="#typeOfCall_1322_1332" id="typeOfCall_1096_1106" title="Defined at line 41">typeOfCall</a>(<a href="#s_eval_1013_1019" id="s_eval_1107_1113" title="Defined at line 32">s_eval</a>, <a href="#expType_1005_1012" id="expType_1115_1122" title="Defined at line 32">expType</a>, <a href="#f_983_984" id="f_1124_1125" title="Defined at line 32">f</a>, <a href="#argExps_986_993" id="argExps_1127_1134" title="Defined at line 32">argExps</a>).

  <a href="#typeOfFunctionCall_308_326" id="typeOfFunctionCall_1140_1158" title="Referenced at line 14, 17, 20, 38; ../../webdsl-ac.stx line 40, 41, 42, 43">typeOfFunctionCall</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> * <span class="keyword">list</span>(<a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Exp_404_407" id="Exp_1183_1186" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 25">Exp</a>)-&gt; <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_1190_1194" title="Defined at ../../webdsl.stx line 29">TYPE</a>
  <a href="#typeOfFunctionCall_1140_1158" id="typeOfFunctionCall_1197_1215" title="Defined at line 37">typeOfFunctionCall</a>(<a href="#s_1312_1313" id="s_1216_1217" title="Referenced at line 39">s</a>, f, <span id="args_1222_1226" title="Not referenced locally, nor via imports">args</span>) = <a href="#typeOfFunctionCallInternal_1877_1903" id="typeOfFunctionCallInternal_1230_1256" title="Defined at line 51">typeOfFunctionCallInternal</a>(s, <a href="#f_1315_1316" id="f_1260_1261" title="Referenced at line 39">f</a>, args, <a href="#funSigs_1285_1292" id="funSigs_1269_1276" title="Referenced at line 39">funSigs</a>) :-
    <a href="#funSigs_1269_1276" id="funSigs_1285_1292" title="Defined at line 38">funSigs</a> == <a href="../../webdsl.stx#resolveFunction_9367_9382" id="resolveFunction_1296_1311" title="Defined at ../../webdsl.stx line 228">resolveFunction</a>(<a href="#s_1216_1217" id="s_1312_1313" title="Defined at line 38">s</a>, <a href="#f_1260_1261" id="f_1315_1316" title="Defined at line 38">f</a>).

  <a href="#typeOfCall_705_715" id="typeOfCall_1322_1332" title="Referenced at line 25, 30, 35, 42, 45, 48, 48, 49; ../../webdsl-native.stx line 109, 112; ../../types/built-ins.stx line 151, 154, 157, 159, 166, 168, 171, 174, 178, 182, 185, 189, 193, 195, 206, 209, 212, 215, 217, 224, 226, 230, 232, 234, 235, 236, 238; ../../types/type-extensions.stx line 32, 35">typeOfCall</a> : <span class="keyword">scope</span> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_1343_1347" title="Defined at ../../webdsl.stx line 29">TYPE</a> * <span class="keyword">string</span> * <span class="keyword">list</span>(<a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Exp_404_407" id="Exp_1364_1367" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 25">Exp</a>)-&gt; <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_1371_1375" title="Defined at ../../webdsl.stx line 29">TYPE</a>
  <a href="#typeOfCall_1322_1332" id="typeOfCall_1378_1388" title="Defined at line 41">typeOfCall</a>(<span id="s_1389_1390" title="Not referenced locally, nor via imports">s</span>, <a href="../../webdsl-types.stx#ENTITY_444_450" id="ENTITY_1392_1398" title="Defined at ../../webdsl-types.stx line 20">ENTITY</a>(_, <a href="#s_ent_1509_1514" id="s_ent_1402_1407" title="Referenced at line 43">s_ent</a>), f, <span id="args_1413_1417" title="Not referenced locally, nor via imports">args</span>) = <a href="#typeOfFunctionCallInternal_1877_1903" id="typeOfFunctionCallInternal_1421_1447" title="Defined at line 51">typeOfFunctionCallInternal</a>(s, <a href="#f_1516_1517" id="f_1451_1452" title="Referenced at line 43">f</a>, args, <a href="#funSigs_1476_1483" id="funSigs_1460_1467" title="Referenced at line 43">funSigs</a>) :-
    <a href="#funSigs_1460_1467" id="funSigs_1476_1483" title="Defined at line 42">funSigs</a> == <a href="../../webdsl.stx#resolveEntityFunction_9696_9717" id="resolveEntityFunction_1487_1508" title="Defined at ../../webdsl.stx line 234">resolveEntityFunction</a>(<a href="#s_ent_1402_1407" id="s_ent_1509_1514" title="Defined at line 42">s_ent</a>, <a href="#f_1451_1452" id="f_1516_1517" title="Defined at line 42">f</a>).

  <a href="#typeOfCall_1322_1332" id="typeOfCall_1523_1533" title="Defined at line 41">typeOfCall</a>(<span id="s_1534_1535" title="Not referenced locally, nor via imports">s</span>, <a href="../../webdsl-types.stx#STATICENTITY_486_498" id="STATICENTITY_1537_1549" title="Defined at ../../webdsl-types.stx line 21">STATICENTITY</a>(_, <a href="#s_ent_1666_1671" id="s_ent_1553_1558" title="Referenced at line 46">s_ent</a>), f, <span id="args_1564_1568" title="Not referenced locally, nor via imports">args</span>) = <a href="#typeOfFunctionCallInternal_1877_1903" id="typeOfFunctionCallInternal_1572_1598" title="Defined at line 51">typeOfFunctionCallInternal</a>(s, <a href="#f_1673_1674" id="f_1602_1603" title="Referenced at line 46">f</a>, args, <a href="#funSigs_1627_1634" id="funSigs_1611_1618" title="Referenced at line 46">funSigs</a>) :-
    <a href="#funSigs_1611_1618" id="funSigs_1627_1634" title="Defined at line 45">funSigs</a> == <a href="../../webdsl.stx#resolveStaticEntityFunction_10356_10383" id="resolveStaticEntityFunction_1638_1665" title="Defined at ../../webdsl.stx line 245">resolveStaticEntityFunction</a>(<a href="#s_ent_1553_1558" id="s_ent_1666_1671" title="Defined at line 45">s_ent</a>, <a href="#f_1602_1603" id="f_1673_1674" title="Defined at line 45">f</a>).

  <a href="#typeOfCall_1322_1332" id="typeOfCall_1680_1690" title="Defined at line 41">typeOfCall</a>(s, <a href="../../webdsl-types.stx#REF_939_942" id="REF_1694_1697" title="Defined at ../../webdsl-types.stx line 37">REF</a>(t), f, args) = <a href="#typeOfCall_1322_1332" id="typeOfCall_1713_1723" title="Defined at line 41">typeOfCall</a>(<span id="s_1724_1725" title="Not referenced locally, nor via imports">s</span>, <span id="t_1727_1728" title="Not referenced locally, nor via imports">t</span>, <span id="f_1730_1731" title="Not referenced locally, nor via imports">f</span>, <span id="args_1733_1737" title="Not referenced locally, nor via imports">args</span>).
  <a href="#typeOfCall_1322_1332" id="typeOfCall_1742_1752" title="Defined at line 41">typeOfCall</a>(<span id="s_1753_1754" title="Not referenced locally, nor via imports">s</span>, <a href="#t_1863_1864" id="t_1756_1757" title="Referenced at line 49">t</a>, <span id="f_1759_1760" title="Not referenced locally, nor via imports">f</span>, <span id="args_1762_1766" title="Not referenced locally, nor via imports">args</span>) = <a href="../../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_1770_1777" title="Defined at ../../webdsl-types.stx line 49">UNTYPED</a>() :- <span class="keyword">false</span> | <span class="keyword">error</span> $[First subexpression of a function call must be of type entity, [<a href="#t_1756_1757" id="t_1863_1864" title="Defined at line 49">t</a>] found].

  <a href="#typeOfFunctionCallInternal_1230_1256" id="typeOfFunctionCallInternal_1877_1903" title="Referenced at line 38, 42, 45, 52; ../../webdsl-native.stx line 109, 112; ../../types/type-extensions.stx line 32, 35">typeOfFunctionCallInternal</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> * <span class="keyword">list</span>(<a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Exp_404_407" id="Exp_1928_1931" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 25">Exp</a>) * <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_1958_1962" title="Defined at ../../webdsl.stx line 29">TYPE</a>))) -&gt; <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_1969_1973" title="Defined at ../../webdsl.stx line 29">TYPE</a>
  <a href="#typeOfFunctionCallInternal_1877_1903" id="typeOfFunctionCallInternal_1976_2002" title="Defined at line 51">typeOfFunctionCallInternal</a>(<a href="#s_2082_2083" id="s_2003_2004" title="Referenced at line 53">s</a>, <a href="#f_2251_2252" id="f_2006_2007" title="Referenced at line 55, 55, 56, 57">f</a>, <a href="#args_2085_2089" id="args_2009_2013" title="Referenced at line 53">args</a>, <a href="#funSigs_2152_2159" id="funSigs_2015_2022" title="Referenced at line 54">funSigs</a>) = <a href="#t_2198_2199" id="t_2026_2027" title="Referenced at line 55, 57">t</a> :- { <a href="#argTypes_2058_2066" id="argTypes_2033_2041" title="Referenced at line 53, 54, 54">argTypes</a> <a href="#f'_2179_2181" id="f'_2042_2044" title="Referenced at line 55, 56">f'</a> <a href="#result_2096_2102" id="result_2045_2051" title="Referenced at line 54, 55">result</a> }
    <a href="#argTypes_2033_2041" id="argTypes_2058_2066" title="Defined at line 52">argTypes</a> == <a href="../../webdsl.stx#typesOfExps_16528_16539" id="typesOfExps_2070_2081" title="Defined at ../../webdsl.stx line 387">typesOfExps</a>(<a href="#s_2003_2004" id="s_2082_2083" title="Defined at line 52">s</a>, <a href="#args_2009_2013" id="args_2085_2089" title="Defined at line 52">args</a>),
    <a href="#result_2045_2051" id="result_2096_2102" title="Defined at line 52">result</a> == <a href="#mostSpecificSigs_9909_9925" id="mostSpecificSigs_2106_2122" title="Defined at line 194">mostSpecificSigs</a>(<a href="#argTypes_2033_2041" id="argTypes_2123_2131" title="Defined at line 52">argTypes</a>, <a href="#typeCompatibleSigs_8492_8510" id="typeCompatibleSigs_2133_2151" title="Defined at line 173">typeCompatibleSigs</a>(<a href="#funSigs_2015_2022" id="funSigs_2152_2159" title="Defined at line 52">funSigs</a>, <a href="#argTypes_2033_2041" id="argTypes_2161_2169" title="Defined at line 52">argTypes</a>)),
    [(<a href="#f'_2042_2044" id="f'_2179_2181" title="Defined at line 52">f'</a>, <a href="../../webdsl-types.stx#FUNCTION_343_351" id="FUNCTION_2183_2191" title="Defined at ../../webdsl-types.stx line 17">FUNCTION</a>(_, _, <a href="#t_2026_2027" id="t_2198_2199" title="Defined at line 52">t</a>, _))] == <a href="#result_2045_2051" id="result_2209_2215" title="Defined at line 52">result</a> | <span class="keyword">error</span> $[Cannot resolve function [<a href="#f_2006_2007" id="f_2251_2252" title="Defined at line 52">f</a>] with compatible argument types] @<a href="#f_2006_2007" id="f_2287_2288" title="Defined at line 52">f</a>,
    @<a href="#f_2006_2007" id="f_2295_2296" title="Defined at line 52">f</a>.<span class="keyword">ref</span> := <a href="#f'_2042_2044" id="f'_2304_2306" title="Defined at line 52">f'</a>,
    @<a href="#f_2006_2007" id="f_2313_2314" title="Defined at line 52">f</a>.<span class="keyword">type</span> := <a href="#t_2026_2027" id="t_2323_2324" title="Defined at line 52">t</a>.

  <a href="#singleSignature_2389_2404" id="singleSignature_2329_2344" title="Referenced at line 60, 61, 62; ../../ui/template-calls.stx line 44">singleSignature</a> : <span class="keyword">list</span>((<span class="keyword">string</span> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_2362_2366" title="Defined at ../../webdsl.stx line 29">TYPE</a>)) * <span class="keyword">string</span> * <span class="keyword">string</span>
  <a href="#singleSignature_2329_2344" id="singleSignature_2389_2404" title="Defined at line 59">singleSignature</a>([], <a href="#type_2453_2457" id="type_2409_2413" title="Referenced at line 60">type</a>, <a href="#f_2460_2461" id="f_2415_2416" title="Referenced at line 60, 60">f</a>) :- <span class="keyword">false</span> | <span class="keyword">error</span> $[Cannot resolve [<a href="#type_2409_2413" id="type_2453_2457" title="Defined at line 60">type</a>] [<a href="#f_2415_2416" id="f_2460_2461" title="Defined at line 60">f</a>] with compatible argument types] @<a href="#f_2415_2416" id="f_2496_2497" title="Defined at line 60">f</a>.
  <a href="#singleSignature_2329_2344" id="singleSignature_2501_2516" title="Defined at line 59">singleSignature</a>([_ | [_ | _]], <a href="#type_2591_2595" id="type_2532_2536" title="Referenced at line 61">type</a>, <a href="#f_2598_2599" id="f_2538_2539" title="Referenced at line 61, 61">f</a>) :- <span class="keyword">false</span> | <span class="keyword">error</span> $[Found multiple definitions of [<a href="#type_2532_2536" id="type_2591_2595" title="Defined at line 61">type</a>] [<a href="#f_2538_2539" id="f_2598_2599" title="Defined at line 61">f</a>] with equally specific argument types] @<a href="#f_2538_2539" id="f_2640_2641" title="Defined at line 61">f</a>.
  <a href="#singleSignature_2329_2344" id="singleSignature_2645_2660" title="Defined at line 59">singleSignature</a>(_, _, _).

<span class="keyword">rules</span> <span class="layout">// invoke time interval</span>

  <a href="../../webdsl.stx#defOk_15473_15478" id="defOk_2705_2710" title="Defined at ../../webdsl.stx line 356">defOk</a>(<a href="#s_2766_2767" id="s_2711_2712" title="Referenced at line 67, 68">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-TimeInterval-sig.stx#InvokeEvery_584_595" id="InvokeEvery_2714_2725" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-TimeInterval-sig.stx line 27">InvokeEvery</a>(<a href="#exp_2769_2772" id="exp_2726_2729" title="Referenced at line 67">exp</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-TimeInterval-sig.stx#TimeInterval_526_538" id="TimeInterval_2731_2743" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-TimeInterval-sig.stx line 26">TimeInterval</a>(<a href="#parts_2802_2807" id="parts_2744_2749" title="Referenced at line 68">parts</a>))) :-
    <a href="../../webdsl-types.stx#typed_10475_10480" id="typed_2760_2765" title="Defined at ../../webdsl-types.stx line 283">typed</a>(<a href="#s_2711_2712" id="s_2766_2767" title="Defined at line 66">s</a>, <a href="#exp_2726_2729" id="exp_2769_2772" title="Defined at line 66">exp</a>),
    <a href="#timeIntervalPartsOk_2813_2832" id="timeIntervalPartsOk_2779_2798" title="Defined at line 70">timeIntervalPartsOk</a>(<a href="#s_2711_2712" id="s_2799_2800" title="Defined at line 66">s</a>, <a href="#parts_2744_2749" id="parts_2802_2807" title="Defined at line 66">parts</a>).

  <a href="#timeIntervalPartsOk_2779_2798" id="timeIntervalPartsOk_2813_2832" title="Referenced at line 68">timeIntervalPartsOk</a> <span class="keyword">maps</span> <a href="#timeIntervalPartOk_2871_2889" id="timeIntervalPartOk_2838_2856" title="Defined at line 71">timeIntervalPartOk</a>(*, <span class="keyword">list</span>(*))
  <a href="#timeIntervalPartOk_2838_2856" id="timeIntervalPartOk_2871_2889" title="Referenced at line 70, 72, 73, 74, 75, 76, 77">timeIntervalPartOk</a> : <span class="keyword">scope</span> * <a href="../../../../src-gen/statix/signatures/WebDSL-TimeInterval-sig.stx#TimeIntervalPart_135_151" id="TimeIntervalPart_2900_2916" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-TimeInterval-sig.stx line 10">TimeIntervalPart</a>
  <a href="#timeIntervalPartOk_2871_2889" id="timeIntervalPartOk_2919_2937" title="Defined at line 71">timeIntervalPartOk</a>(<a href="#s_2973_2974" id="s_2938_2939" title="Referenced at line 72, 72">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-TimeInterval-sig.stx#Weeks_300_305" id="Weeks_2941_2946" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-TimeInterval-sig.stx line 20">Weeks</a>(<a href="#exp_2976_2979" id="exp_2947_2950" title="Referenced at line 72">exp</a>))        :- <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_2963_2972" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_2938_2939" id="s_2973_2974" title="Defined at line 72">s</a>, <a href="#exp_2947_2950" id="exp_2976_2979" title="Defined at line 72">exp</a>) == <a href="../../types/built-ins.stx#int_1638_1641" id="int_2984_2987" title="Defined at ../../types/built-ins.stx line 41">int</a>(<a href="#s_2938_2939" id="s_2988_2989" title="Defined at line 72">s</a>).
  <a href="#timeIntervalPartOk_2871_2889" id="timeIntervalPartOk_2994_3012" title="Defined at line 71">timeIntervalPartOk</a>(<a href="#s_3048_3049" id="s_3013_3014" title="Referenced at line 73, 73">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-TimeInterval-sig.stx#Days_336_340" id="Days_3016_3020" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-TimeInterval-sig.stx line 21">Days</a>(<a href="#exp_3051_3054" id="exp_3021_3024" title="Referenced at line 73">exp</a>))         :- <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_3038_3047" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_3013_3014" id="s_3048_3049" title="Defined at line 73">s</a>, <a href="#exp_3021_3024" id="exp_3051_3054" title="Defined at line 73">exp</a>) == <a href="../../types/built-ins.stx#int_1638_1641" id="int_3059_3062" title="Defined at ../../types/built-ins.stx line 41">int</a>(<a href="#s_3013_3014" id="s_3063_3064" title="Defined at line 73">s</a>).
  <a href="#timeIntervalPartOk_2871_2889" id="timeIntervalPartOk_3069_3087" title="Defined at line 71">timeIntervalPartOk</a>(<a href="#s_3123_3124" id="s_3088_3089" title="Referenced at line 74, 74">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-TimeInterval-sig.stx#Hours_371_376" id="Hours_3091_3096" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-TimeInterval-sig.stx line 22">Hours</a>(<a href="#exp_3126_3129" id="exp_3097_3100" title="Referenced at line 74">exp</a>))        :- <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_3113_3122" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_3088_3089" id="s_3123_3124" title="Defined at line 74">s</a>, <a href="#exp_3097_3100" id="exp_3126_3129" title="Defined at line 74">exp</a>) == <a href="../../types/built-ins.stx#int_1638_1641" id="int_3134_3137" title="Defined at ../../types/built-ins.stx line 41">int</a>(<a href="#s_3088_3089" id="s_3138_3139" title="Defined at line 74">s</a>).
  <a href="#timeIntervalPartOk_2871_2889" id="timeIntervalPartOk_3144_3162" title="Defined at line 71">timeIntervalPartOk</a>(<a href="#s_3198_3199" id="s_3163_3164" title="Referenced at line 75, 75">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-TimeInterval-sig.stx#Minutes_407_414" id="Minutes_3166_3173" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-TimeInterval-sig.stx line 23">Minutes</a>(<a href="#exp_3201_3204" id="exp_3174_3177" title="Referenced at line 75">exp</a>))      :- <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_3188_3197" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_3163_3164" id="s_3198_3199" title="Defined at line 75">s</a>, <a href="#exp_3174_3177" id="exp_3201_3204" title="Defined at line 75">exp</a>) == <a href="../../types/built-ins.stx#int_1638_1641" id="int_3209_3212" title="Defined at ../../types/built-ins.stx line 41">int</a>(<a href="#s_3163_3164" id="s_3213_3214" title="Defined at line 75">s</a>).
  <a href="#timeIntervalPartOk_2871_2889" id="timeIntervalPartOk_3219_3237" title="Defined at line 71">timeIntervalPartOk</a>(<a href="#s_3273_3274" id="s_3238_3239" title="Referenced at line 76, 76">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-TimeInterval-sig.stx#Seconds_445_452" id="Seconds_3241_3248" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-TimeInterval-sig.stx line 24">Seconds</a>(<a href="#exp_3276_3279" id="exp_3249_3252" title="Referenced at line 76">exp</a>))      :- <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_3263_3272" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_3238_3239" id="s_3273_3274" title="Defined at line 76">s</a>, <a href="#exp_3249_3252" id="exp_3276_3279" title="Defined at line 76">exp</a>) == <a href="../../types/built-ins.stx#int_1638_1641" id="int_3284_3287" title="Defined at ../../types/built-ins.stx line 41">int</a>(<a href="#s_3238_3239" id="s_3288_3289" title="Defined at line 76">s</a>).
  <a href="#timeIntervalPartOk_2871_2889" id="timeIntervalPartOk_3294_3312" title="Defined at line 71">timeIntervalPartOk</a>(<a href="#s_3348_3349" id="s_3313_3314" title="Referenced at line 77, 77">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-TimeInterval-sig.stx#Milliseconds_483_495" id="Milliseconds_3316_3328" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-TimeInterval-sig.stx line 25">Milliseconds</a>(<a href="#exp_3351_3354" id="exp_3329_3332" title="Referenced at line 77">exp</a>)) :- <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_3338_3347" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_3313_3314" id="s_3348_3349" title="Defined at line 77">s</a>, <a href="#exp_3329_3332" id="exp_3351_3354" title="Defined at line 77">exp</a>) == <a href="../../types/built-ins.stx#int_1638_1641" id="int_3359_3362" title="Defined at ../../types/built-ins.stx line 41">int</a>(<a href="#s_3313_3314" id="s_3363_3364" title="Defined at line 77">s</a>).

<span class="keyword">rules</span> <span class="layout">// function definitions</span>

  <span class="layout">// global functions</span>
  <a href="../../webdsl.stx#defOk_15473_15478" id="defOk_3423_3428" title="Defined at ../../webdsl.stx line 356">defOk</a>(<a href="#s_3471_3472" id="s_3429_3430" title="Referenced at line 82">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#GlobalFunction_1495_1509" id="GlobalFunction_3432_3446" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 70">GlobalFunction</a>(<a href="#f_3474_3475" id="f_3447_3448" title="Referenced at line 82">f</a>)) :- <a href="#globalFunctionOk_3881_3897" id="globalFunctionOk_3454_3470" title="Defined at line 94">globalFunctionOk</a>(<a href="#s_3429_3430" id="s_3471_3472" title="Defined at line 82">s</a>, <a href="#f_3447_3448" id="f_3474_3475" title="Defined at line 82">f</a>).
  <a href="../../webdsl.stx#defOk_15473_15478" id="defOk_3480_3485" title="Defined at ../../webdsl.stx line 356">defOk</a>(<a href="#s_3533_3534" id="s_3486_3487" title="Referenced at line 84, 85">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#CachedGlobalFunction_1539_1559" id="CachedGlobalFunction_3489_3509" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 71">CachedGlobalFunction</a>(<a href="#f_3536_3537" id="f_3510_3511" title="Referenced at line 84, 85">f</a>)) :-
    <a href="#canBeCached_5535_5546" id="canBeCached_3521_3532" title="Defined at line 122">canBeCached</a>(<a href="#s_3486_3487" id="s_3533_3534" title="Defined at line 83">s</a>, <a href="#f_3510_3511" id="f_3536_3537" title="Defined at line 83">f</a>),
    <a href="#globalFunctionOk_3881_3897" id="globalFunctionOk_3544_3560" title="Defined at line 94">globalFunctionOk</a>(<a href="#s_3486_3487" id="s_3561_3562" title="Defined at line 83">s</a>, <a href="#f_3510_3511" id="f_3564_3565" title="Defined at line 83">f</a>).

  <a href="../../webdsl.stx#defOk_15473_15478" id="defOk_3571_3576" title="Defined at ../../webdsl.stx line 356">defOk</a>(<span id="s_3577_3578" title="Not referenced locally, nor via imports">s</span>, <a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#ExtendGlobalFunction_1589_1609" id="ExtendGlobalFunction_3580_3600" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 72">ExtendGlobalFunction</a>(_)) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[This definition is not yet implemented].

  <span class="layout">// analyze a function:</span>
  <span class="layout">// - argument types and return type must be defined</span>
  <span class="layout">// - declare arguments as variables in function scope</span>
  <span class="layout">// - analyze function body</span>
  <span class="layout">// - declare function in given scope</span>
  <a href="#globalFunctionOk_3454_3470" id="globalFunctionOk_3881_3897" title="Referenced at line 82, 85, 95">globalFunctionOk</a> : <span class="keyword">scope</span> * <a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Function_265_273" id="Function_3908_3916" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 16">Function</a>
  <a href="#globalFunctionOk_3881_3897" id="globalFunctionOk_3919_3935" title="Defined at line 94">globalFunctionOk</a>(<a href="#s_outer_4092_4099" id="s_outer_3936_3943" title="Referenced at line 96, 97, 98, 102">s_outer</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Function_1368_1376" id="Function_3945_3953" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 67">Function</a>(<a href="#name_4379_4383" id="name_3954_3958" title="Referenced at line 102">name</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#FormalArgs_1478_1488" id="FormalArgs_3960_3970" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 57">FormalArgs</a>(<a href="#args_4196_4200" id="args_3971_3975" title="Referenced at line 98, 99, 102">args</a>), <a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#OptSortSome_1461_1472" id="OptSortSome_3978_3989" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 69">OptSortSome</a>(<a href="#returnSort_4101_4111" id="returnSort_3990_4000" title="Referenced at line 96">returnSort</a>), <a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Block_2123_2128" id="Block_4003_4008" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 81">Block</a>(<a href="#stmts_4327_4332" id="stmts_4009_4014" title="Referenced at line 101">stmts</a>))) :- { <a href="#argTypes_4163_4171" id="argTypes_4023_4031" title="Referenced at line 98, 99, 102">argTypes</a> <a href="#returnType_4067_4077" id="returnType_4032_4042" title="Referenced at line 96, 101, 102">returnType</a> <a href="#s_function_4122_4132" id="s_function_4043_4053" title="Referenced at line 97, 97, 99, 100">s_function</a> <a href="#s_body_4275_4281" id="s_body_4054_4060" title="Referenced at line 100, 100, 101">s_body</a> }
    <a href="#returnType_4032_4042" id="returnType_4067_4077" title="Defined at line 95">returnType</a> == <a href="../../webdsl-types.stx#typeOfSort_5551_5561" id="typeOfSort_4081_4091" title="Defined at ../../webdsl-types.stx line 160">typeOfSort</a>(<a href="#s_outer_3936_3943" id="s_outer_4092_4099" title="Defined at line 95">s_outer</a>, <a href="#returnSort_3990_4000" id="returnSort_4101_4111" title="Defined at line 95">returnSort</a>),
    <span class="keyword">new</span> <a href="#s_function_4043_4053" id="s_function_4122_4132" title="Defined at line 95">s_function</a>, <a href="#s_function_4043_4053" id="s_function_4134_4144" title="Defined at line 95">s_function</a> -<a href="../../webdsl.stx#F_1290_1291" id="F_4146_4147" title="Defined at ../../webdsl.stx line 46">F</a>-&gt; <a href="#s_outer_3936_3943" id="s_outer_4150_4157" title="Defined at line 95">s_outer</a>,
    <a href="#argTypes_4023_4031" id="argTypes_4163_4171" title="Defined at line 95">argTypes</a> == <a href="#typesOfArgs_6612_6623" id="typesOfArgs_4175_4186" title="Defined at line 138">typesOfArgs</a>(<a href="#s_outer_3936_3943" id="s_outer_4187_4194" title="Defined at line 95">s_outer</a>, <a href="#args_3971_3975" id="args_4196_4200" title="Defined at line 95">args</a>),
    <a href="../../webdsl.stx#declareParameters_14585_14602" id="declareParameters_4207_4224" title="Defined at ../../webdsl.stx line 332">declareParameters</a>(<a href="#s_function_4043_4053" id="s_function_4225_4235" title="Defined at line 95">s_function</a>, <a href="#zipArgTypes_6882_6893" id="zipArgTypes_4237_4248" title="Defined at line 145">zipArgTypes</a>(<a href="#args_3971_3975" id="args_4249_4253" title="Defined at line 95">args</a>, <a href="#argTypes_4023_4031" id="argTypes_4255_4263" title="Defined at line 95">argTypes</a>)),
    <span class="keyword">new</span> <a href="#s_body_4054_4060" id="s_body_4275_4281" title="Defined at line 95">s_body</a>, <a href="#s_body_4054_4060" id="s_body_4283_4289" title="Defined at line 95">s_body</a> -<a href="../../webdsl.stx#P_1226_1227" id="P_4291_4292" title="Defined at ../../webdsl.stx line 45">P</a>-&gt; <a href="#s_function_4043_4053" id="s_function_4295_4305" title="Defined at line 95">s_function</a>,
    <a href="../../webdsl.stx#stmtsOk_15878_15885" id="stmtsOk_4311_4318" title="Defined at ../../webdsl.stx line 363">stmtsOk</a>(<a href="#s_body_4054_4060" id="s_body_4319_4325" title="Defined at line 95">s_body</a>, <a href="#stmts_4009_4014" id="stmts_4327_4332" title="Defined at line 95">stmts</a>, <a href="#returnType_4032_4042" id="returnType_4334_4344" title="Defined at line 95">returnType</a>),
    <a href="#declFunctionGlobal_6066_6084" id="declFunctionGlobal_4351_4369" title="Defined at line 128">declFunctionGlobal</a>(<a href="#s_outer_3936_3943" id="s_outer_4370_4377" title="Defined at line 95">s_outer</a>, <a href="#name_3954_3958" id="name_4379_4383" title="Defined at line 95">name</a>, <a href="../../webdsl.stx#FUNCTION_ORIGIN_862_877" id="FUNCTION_ORIGIN_4385_4400" title="Defined at ../../webdsl.stx line 37">FUNCTION_ORIGIN</a>(<a href="#args_3971_3975" id="args_4401_4405" title="Defined at line 95">args</a>), <a href="#argTypes_4023_4031" id="argTypes_4408_4416" title="Defined at line 95">argTypes</a>, <a href="#returnType_4032_4042" id="returnType_4418_4428" title="Defined at line 95">returnType</a>).

  <a href="#entityFunctionOk_4479_4495" id="entityFunctionOk_4434_4450" title="Referenced at line 105, 115, 118; ../../webdsl-entities.stx line 112, 113, 116">entityFunctionOk</a> : <span class="keyword">scope</span> * <a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Function_265_273" id="Function_4461_4469" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 16">Function</a> * <a href="../../webdsl.stx#BOOL_697_701" id="BOOL_4472_4476" title="Defined at ../../webdsl.stx line 30">BOOL</a>
  <a href="#entityFunctionOk_4434_4450" id="entityFunctionOk_4479_4495" title="Defined at line 104">entityFunctionOk</a>(<a href="#s_ent_4658_4663" id="s_ent_4496_4501" title="Referenced at line 106, 107, 108, 112, 113">s_ent</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Function_1368_1376" id="Function_4503_4511" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 67">Function</a>(<a href="#name_4937_4941" id="name_4512_4516" title="Referenced at line 112, 113">name</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#FormalArgs_1478_1488" id="FormalArgs_4518_4528" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 57">FormalArgs</a>(<a href="#args_4756_4760" id="args_4529_4533" title="Referenced at line 108, 109, 112">args</a>), <a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#OptSortSome_1461_1472" id="OptSortSome_4536_4547" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 69">OptSortSome</a>(<a href="#returnSort_4665_4675" id="returnSort_4548_4558" title="Referenced at line 106">returnSort</a>), <a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Block_2123_2128" id="Block_4561_4566" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 81">Block</a>(<a href="#stmts_4887_4892" id="stmts_4567_4572" title="Referenced at line 111">stmts</a>)), <a href="#static_4988_4994" id="static_4576_4582" title="Referenced at line 112">static</a>) :- { <a href="#argTypes_4725_4733" id="argTypes_4589_4597" title="Referenced at line 108, 109, 112, 113">argTypes</a> <a href="#returnType_4633_4643" id="returnType_4598_4608" title="Referenced at line 106, 111, 112">returnType</a> <a href="#s_function_4686_4696" id="s_function_4609_4619" title="Referenced at line 107, 107, 109, 110">s_function</a> <a href="#s_body_4835_4841" id="s_body_4620_4626" title="Referenced at line 110, 110, 111">s_body</a> }
    <a href="#returnType_4598_4608" id="returnType_4633_4643" title="Defined at line 105">returnType</a> == <a href="../../webdsl-types.stx#typeOfSort_5551_5561" id="typeOfSort_4647_4657" title="Defined at ../../webdsl-types.stx line 160">typeOfSort</a>(<a href="#s_ent_4496_4501" id="s_ent_4658_4663" title="Defined at line 105">s_ent</a>, <a href="#returnSort_4548_4558" id="returnSort_4665_4675" title="Defined at line 105">returnSort</a>),
    <span class="keyword">new</span> <a href="#s_function_4609_4619" id="s_function_4686_4696" title="Defined at line 105">s_function</a>, <a href="#s_function_4609_4619" id="s_function_4698_4708" title="Defined at line 105">s_function</a> -<a href="../../webdsl.stx#F_1290_1291" id="F_4710_4711" title="Defined at ../../webdsl.stx line 46">F</a>-&gt; <a href="#s_ent_4496_4501" id="s_ent_4714_4719" title="Defined at line 105">s_ent</a>,
    <a href="#argTypes_4589_4597" id="argTypes_4725_4733" title="Defined at line 105">argTypes</a> == <a href="#typesOfArgs_6612_6623" id="typesOfArgs_4737_4748" title="Defined at line 138">typesOfArgs</a>(<a href="#s_ent_4496_4501" id="s_ent_4749_4754" title="Defined at line 105">s_ent</a>, <a href="#args_4529_4533" id="args_4756_4760" title="Defined at line 105">args</a>),
    <a href="../../webdsl.stx#declareParameters_14585_14602" id="declareParameters_4767_4784" title="Defined at ../../webdsl.stx line 332">declareParameters</a>(<a href="#s_function_4609_4619" id="s_function_4785_4795" title="Defined at line 105">s_function</a>, <a href="#zipArgTypes_6882_6893" id="zipArgTypes_4797_4808" title="Defined at line 145">zipArgTypes</a>(<a href="#args_4529_4533" id="args_4809_4813" title="Defined at line 105">args</a>, <a href="#argTypes_4589_4597" id="argTypes_4815_4823" title="Defined at line 105">argTypes</a>)),
    <span class="keyword">new</span> <a href="#s_body_4620_4626" id="s_body_4835_4841" title="Defined at line 105">s_body</a>, <a href="#s_body_4620_4626" id="s_body_4843_4849" title="Defined at line 105">s_body</a> -<a href="../../webdsl.stx#P_1226_1227" id="P_4851_4852" title="Defined at ../../webdsl.stx line 45">P</a>-&gt; <a href="#s_function_4609_4619" id="s_function_4855_4865" title="Defined at line 105">s_function</a>,
    <a href="../../webdsl.stx#stmtsOk_15878_15885" id="stmtsOk_4871_4878" title="Defined at ../../webdsl.stx line 363">stmtsOk</a>(<a href="#s_body_4620_4626" id="s_body_4879_4885" title="Defined at line 105">s_body</a>, <a href="#stmts_4567_4572" id="stmts_4887_4892" title="Defined at line 105">stmts</a>, <a href="#returnType_4598_4608" id="returnType_4894_4904" title="Defined at line 105">returnType</a>),
    <a href="#declFunctionEntity_6277_6295" id="declFunctionEntity_4911_4929" title="Defined at line 133">declFunctionEntity</a>(<a href="#s_ent_4496_4501" id="s_ent_4930_4935" title="Defined at line 105">s_ent</a>, <a href="#name_4512_4516" id="name_4937_4941" title="Defined at line 105">name</a>, <a href="../../webdsl.stx#FUNCTION_ORIGIN_862_877" id="FUNCTION_ORIGIN_4943_4958" title="Defined at ../../webdsl.stx line 37">FUNCTION_ORIGIN</a>(<a href="#args_4529_4533" id="args_4959_4963" title="Defined at line 105">args</a>), <a href="#argTypes_4589_4597" id="argTypes_4966_4974" title="Defined at line 105">argTypes</a>, <a href="#returnType_4598_4608" id="returnType_4976_4986" title="Defined at line 105">returnType</a>, <a href="#static_4576_4582" id="static_4988_4994" title="Defined at line 105">static</a>),
    <a href="#noDuplicateFunDefsEntity_7411_7435" id="noDuplicateFunDefsEntity_5001_5025" title="Defined at line 156">noDuplicateFunDefsEntity</a>(<a href="#s_ent_4496_4501" id="s_ent_5026_5031" title="Defined at line 105">s_ent</a>, <a href="#name_4512_4516" id="name_5033_5037" title="Defined at line 105">name</a>, <a href="#argTypes_4589_4597" id="argTypes_5039_5047" title="Defined at line 105">argTypes</a>).

  <a href="#entityFunctionOk_4434_4450" id="entityFunctionOk_5053_5069" title="Defined at line 104">entityFunctionOk</a>(<span id="s_ent_5070_5075" title="Not referenced locally, nor via imports">s_ent</span>, <a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Function_1368_1376" id="Function_5077_5085" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 67">Function</a>(<a href="#name_5175_5179" id="name_5086_5090" title="Referenced at line 116, 116">name</a>@"save", <a href="../../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#FormalArgs_1478_1488" id="FormalArgs_5099_5109" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 57">FormalArgs</a>([]), _, _), _) :-
    <span class="keyword">false</span> | <span class="keyword">error</span> $[Entity function with name [<a href="#name_5086_5090" id="name_5175_5179" title="Defined at line 115">name</a>] collides with a built-in function that you are not allowed to overwrite] @<a href="#name_5086_5090" id="name_5255_5259" title="Defined at line 115">name</a>.

  <a href="#entityFunctionOk_4434_4450" id="entityFunctionOk_5264_5280" title="Defined at line 104">entityFunctionOk</a>(<span id="s_ent_5281_5286" title="Not referenced locally, nor via imports">s_ent</span>, <a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Function_1368_1376" id="Function_5288_5296" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 67">Function</a>(<a href="#name_5388_5392" id="name_5297_5301" title="Referenced at line 119, 119">name</a>@"delete", <a href="../../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#FormalArgs_1478_1488" id="FormalArgs_5312_5322" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 57">FormalArgs</a>([]), _, _), _) :-
    <span class="keyword">false</span> | <span class="keyword">error</span> $[Entity function with name [<a href="#name_5297_5301" id="name_5388_5392" title="Defined at line 118">name</a>] collides with a built-in function that you are not allowed to overwrite] @<a href="#name_5297_5301" id="name_5468_5472" title="Defined at line 118">name</a>.

  <span class="layout">// predicate that defines when a function can be cached</span>
  <a href="#canBeCached_3521_3532" id="canBeCached_5535_5546" title="Referenced at line 84, 123, 124; ../../webdsl-entities.stx line 115">canBeCached</a> : <span class="keyword">scope</span> * <a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Function_265_273" id="Function_5557_5565" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 16">Function</a>
  <a href="#canBeCached_5535_5546" id="canBeCached_5568_5579" title="Defined at line 122">canBeCached</a>(<a href="#s_5678_5679" id="s_5580_5581" title="Referenced at line 123">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Function_1368_1376" id="Function_5583_5591" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 67">Function</a>(<a href="#function_name_5767_5780" id="function_name_5592_5605" title="Referenced at line 123">function_name</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#FormalArgs_1478_1488" id="FormalArgs_5607_5617" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 57">FormalArgs</a>([]), <a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#OptSortSome_1461_1472" id="OptSortSome_5623_5634" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 69">OptSortSome</a>(<a href="#returnSort_5681_5691" id="returnSort_5635_5645" title="Referenced at line 123">returnSort</a>), _)) :- <a href="../../webdsl-types.stx#inequalType_10560_10571" id="inequalType_5655_5666" title="Defined at ../../webdsl-types.stx line 286">inequalType</a>(<a href="../../webdsl-types.stx#typeOfSort_5551_5561" id="typeOfSort_5667_5677" title="Defined at ../../webdsl-types.stx line 160">typeOfSort</a>(<a href="#s_5580_5581" id="s_5678_5679" title="Defined at line 123">s</a>, <a href="#returnSort_5635_5645" id="returnSort_5681_5691" title="Defined at line 123">returnSort</a>), <a href="../../webdsl-types.stx#VOID_1167_1171" id="VOID_5694_5698" title="Defined at ../../webdsl-types.stx line 46">VOID</a>()) | <span class="keyword">error</span> $[Only functions that have a return type can be cached] @<a href="#function_name_5592_5605" id="function_name_5767_5780" title="Defined at line 123">function_name</a>.
  <a href="#canBeCached_5535_5546" id="canBeCached_5784_5795" title="Defined at line 122">canBeCached</a>(<span id="s_5796_5797" title="Not referenced locally, nor via imports">s</span>, <a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Function_1368_1376" id="Function_5799_5807" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 67">Function</a>(<a href="#function_name_5917_5930" id="function_name_5808_5821" title="Referenced at line 124">function_name</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#FormalArgs_1478_1488" id="FormalArgs_5823_5833" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 57">FormalArgs</a>([_|_]), _, _)) :- <span class="keyword">false</span> | <span class="keyword">error</span> $[Only functions without arguments can be cached] @<a href="#function_name_5808_5821" id="function_name_5917_5930" title="Defined at line 124">function_name</a>.

  <span class="layout">// declare a function in a given scope</span>
  <span class="layout">// and define the relation typeOfFunDecl with signature (argument types  * return type)</span>
  <a href="#declFunctionGlobal_4351_4369" id="declFunctionGlobal_6066_6084" title="Referenced at line 102, 129; ../../webdsl-ac.stx line 203; ../../webdsl-native.stx line 101, 105">declFunctionGlobal</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> * <a href="../../webdsl.stx#ORIGIN_753_759" id="ORIGIN_6104_6110" title="Defined at ../../webdsl.stx line 31">ORIGIN</a> * <span class="keyword">list</span>(<a href="../../webdsl.stx#TYPE_669_673" id="TYPE_6118_6122" title="Defined at ../../webdsl.stx line 29">TYPE</a>) * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_6126_6130" title="Defined at ../../webdsl.stx line 29">TYPE</a>
  <a href="#declFunctionGlobal_6066_6084" id="declFunctionGlobal_6133_6151" title="Defined at line 128">declFunctionGlobal</a>(<a href="#s_6203_6204" id="s_6152_6153" title="Referenced at line 130, 131">s</a>, <a href="#f_6206_6207" id="f_6155_6156" title="Referenced at line 130, 131">f</a>, <a href="#origin_6209_6215" id="origin_6158_6164" title="Referenced at line 130">origin</a>, <a href="#args_6217_6221" id="args_6166_6170" title="Referenced at line 130, 131">args</a>, <a href="#return_6223_6229" id="return_6172_6178" title="Referenced at line 130">return</a>) :-
    <a href="../../webdsl.stx#declareFunction_8746_8761" id="declareFunction_6187_6202" title="Defined at ../../webdsl.stx line 217">declareFunction</a>(<a href="#s_6152_6153" id="s_6203_6204" title="Defined at line 129">s</a>, <a href="#f_6155_6156" id="f_6206_6207" title="Defined at line 129">f</a>, <a href="#origin_6158_6164" id="origin_6209_6215" title="Defined at line 129">origin</a>, <a href="#args_6166_6170" id="args_6217_6221" title="Defined at line 129">args</a>, <a href="#return_6172_6178" id="return_6223_6229" title="Defined at line 129">return</a>),
    <a href="#noDuplicateFunDefsGlobal_7104_7128" id="noDuplicateFunDefsGlobal_6236_6260" title="Defined at line 150">noDuplicateFunDefsGlobal</a>(<a href="#s_6152_6153" id="s_6261_6262" title="Defined at line 129">s</a>, <a href="#f_6155_6156" id="f_6264_6265" title="Defined at line 129">f</a>, <a href="#args_6166_6170" id="args_6267_6271" title="Defined at line 129">args</a>).

  <a href="#declFunctionEntity_4911_4929" id="declFunctionEntity_6277_6295" title="Referenced at line 112, 134, 135; ../../webdsl-ac.stx line 204; ../../webdsl-built-ins.stx line 15">declFunctionEntity</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> * <a href="../../webdsl.stx#ORIGIN_753_759" id="ORIGIN_6315_6321" title="Defined at ../../webdsl.stx line 31">ORIGIN</a> * <span class="keyword">list</span>(<a href="../../webdsl.stx#TYPE_669_673" id="TYPE_6329_6333" title="Defined at ../../webdsl.stx line 29">TYPE</a>) * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_6337_6341" title="Defined at ../../webdsl.stx line 29">TYPE</a> * <a href="../../webdsl.stx#BOOL_697_701" id="BOOL_6344_6348" title="Defined at ../../webdsl.stx line 30">BOOL</a>
  <a href="#declFunctionEntity_6277_6295" id="declFunctionEntity_6351_6369" title="Defined at line 133">declFunctionEntity</a>(<a href="#s_6431_6432" id="s_6370_6371" title="Referenced at line 134">s</a>, <a href="#f_6434_6435" id="f_6373_6374" title="Referenced at line 134">f</a>, <a href="#origin_6437_6443" id="origin_6376_6382" title="Referenced at line 134">origin</a>, <a href="#args_6445_6449" id="args_6384_6388" title="Referenced at line 134">args</a>, <a href="#return_6451_6457" id="return_6390_6396" title="Referenced at line 134">return</a>, <a href="../../webdsl.stx#TRUE_828_832" id="TRUE_6398_6402" title="Defined at ../../webdsl.stx line 34">TRUE</a>()) :- <a href="../../webdsl.stx#declareStaticFunction_8923_8944" id="declareStaticFunction_6409_6430" title="Defined at ../../webdsl.stx line 220">declareStaticFunction</a>(<a href="#s_6370_6371" id="s_6431_6432" title="Defined at line 134">s</a>, <a href="#f_6373_6374" id="f_6434_6435" title="Defined at line 134">f</a>, <a href="#origin_6376_6382" id="origin_6437_6443" title="Defined at line 134">origin</a>, <a href="#args_6384_6388" id="args_6445_6449" title="Defined at line 134">args</a>, <a href="#return_6390_6396" id="return_6451_6457" title="Defined at line 134">return</a>).
  <a href="#declFunctionEntity_6277_6295" id="declFunctionEntity_6462_6480" title="Defined at line 133">declFunctionEntity</a>(<a href="#s_6537_6538" id="s_6481_6482" title="Referenced at line 135">s</a>, <a href="#f_6540_6541" id="f_6484_6485" title="Referenced at line 135">f</a>, <a href="#origin_6543_6549" id="origin_6487_6493" title="Referenced at line 135">origin</a>, <a href="#args_6551_6555" id="args_6495_6499" title="Referenced at line 135">args</a>, <a href="#return_6557_6563" id="return_6501_6507" title="Referenced at line 135">return</a>, <a href="../../webdsl.stx#FALSE_844_849" id="FALSE_6509_6514" title="Defined at ../../webdsl.stx line 35">FALSE</a>()) :- <a href="../../webdsl.stx#declareFunction_8746_8761" id="declareFunction_6521_6536" title="Defined at ../../webdsl.stx line 217">declareFunction</a>(<a href="#s_6481_6482" id="s_6537_6538" title="Defined at line 135">s</a>, <a href="#f_6484_6485" id="f_6540_6541" title="Defined at line 135">f</a>, <a href="#origin_6487_6493" id="origin_6543_6549" title="Defined at line 135">origin</a>, <a href="#args_6495_6499" id="args_6551_6555" title="Defined at line 135">args</a>, <a href="#return_6501_6507" id="return_6557_6563" title="Defined at line 135">return</a>).

  <span class="layout">// map syntactic types to semantic types</span>
  <a href="#typesOfArgs_4175_4186" id="typesOfArgs_6612_6623" title="Referenced at line 98, 108; ../../webdsl-ac.stx line 101, 123, 144, 153, 162, 171, 193, 209; ../../webdsl-services.stx line 16; ../../webdsl-ui.stx line 35, 65, 87; ../../ui/actions.stx line 48">typesOfArgs</a> <span class="keyword">maps</span> <a href="#typeOfArg_6663_6672" id="typeOfArg_6629_6638" title="Defined at line 139">typeOfArg</a>(*, <span class="keyword">list</span>(*)) = <span class="keyword">list</span>(*)
  <a href="#typeOfArg_6629_6638" id="typeOfArg_6663_6672" title="Referenced at line 138, 140; ../../webdsl-ui.stx line 281">typeOfArg</a> : <span class="keyword">scope</span> * <a href="../../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#FormalArg_164_173" id="FormalArg_6683_6692" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 11">FormalArg</a> -&gt; <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_6696_6700" title="Defined at ../../webdsl.stx line 29">TYPE</a>
  <a href="#typeOfArg_6663_6672" id="typeOfArg_6703_6712" title="Defined at line 139">typeOfArg</a>(<a href="#s_6757_6758" id="s_6713_6714" title="Referenced at line 141">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#Arg_1442_1445" id="Arg_6716_6719" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 56">Arg</a>(_, <a href="#sort_6760_6764" id="sort_6723_6727" title="Referenced at line 141, 142, 142">sort</a>)) = <a href="#t_6741_6742" id="t_6732_6733" title="Referenced at line 141, 142">t</a> :-
    <a href="#t_6732_6733" id="t_6741_6742" title="Defined at line 140">t</a> == <a href="../../webdsl-types.stx#typeOfSort_5551_5561" id="typeOfSort_6746_6756" title="Defined at ../../webdsl-types.stx line 160">typeOfSort</a>(<a href="#s_6713_6714" id="s_6757_6758" title="Defined at line 140">s</a>, <a href="#sort_6723_6727" id="sort_6760_6764" title="Defined at line 140">sort</a>),
    <a href="../../webdsl-types.stx#inequalType_10560_10571" id="inequalType_6771_6782" title="Defined at ../../webdsl-types.stx line 286">inequalType</a>(<a href="#t_6732_6733" id="t_6783_6784" title="Defined at line 140">t</a>, <a href="../../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_6786_6793" title="Defined at ../../webdsl-types.stx line 49">UNTYPED</a>()) | <span class="keyword">error</span> $[Unknown type [<a href="#sort_6723_6727" id="sort_6821_6825" title="Defined at line 140">sort</a>]] @<a href="#sort_6723_6727" id="sort_6829_6833" title="Defined at line 140">sort</a>.

  <span class="layout">// create tuples of (arg_name * arg_type)</span>
  <a href="#zipArgTypes_4237_4248" id="zipArgTypes_6882_6893" title="Referenced at line 99, 109; ../../webdsl-ac.stx line 102, 124, 194, 212; ../../webdsl-services.stx line 17; ../../webdsl-ui.stx line 36, 67, 89; ../../ui/actions.stx line 49">zipArgTypes</a> <span class="keyword">maps</span> <a href="#zipArgType_6940_6950" id="zipArgType_6899_6909" title="Defined at line 146">zipArgType</a>(<span class="keyword">list</span>(*), <span class="keyword">list</span>(*)) = <span class="keyword">list</span>(*)
  <a href="#zipArgType_6899_6909" id="zipArgType_6940_6950" title="Referenced at line 145, 147">zipArgType</a> : <a href="../../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#FormalArg_164_173" id="FormalArg_6953_6962" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 11">FormalArg</a> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_6965_6969" title="Defined at ../../webdsl.stx line 29">TYPE</a> -&gt; (<span class="keyword">string</span> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_6983_6987" title="Defined at ../../webdsl.stx line 29">TYPE</a>)
  <a href="#zipArgType_6940_6950" id="zipArgType_6991_7001" title="Defined at line 146">zipArgType</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#Arg_1442_1445" id="Arg_7002_7005" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 56">Arg</a>(<span id="x_7006_7007" title="Not referenced locally, nor via imports">x</span>, _), <span id="t_7013_7014" title="Not referenced locally, nor via imports">t</span>) = (x, t).

  <span class="layout">// predicate that defines when there are overlapping function signatures</span>
  <a href="#noDuplicateFunDefsGlobal_6236_6260" id="noDuplicateFunDefsGlobal_7104_7128" title="Referenced at line 131, 151">noDuplicateFunDefsGlobal</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> * <span class="keyword">list</span>(<a href="../../webdsl.stx#TYPE_669_673" id="TYPE_7153_7157" title="Defined at ../../webdsl.stx line 29">TYPE</a>)
  <a href="#noDuplicateFunDefsGlobal_7104_7128" id="noDuplicateFunDefsGlobal_7161_7185" title="Defined at line 150">noDuplicateFunDefsGlobal</a>(<a href="#s_7226_7227" id="s_7186_7187" title="Referenced at line 152">s</a>, <a href="#f_7229_7230" id="f_7189_7190" title="Referenced at line 152, 154, 154">f</a>, <a href="#ts_7272_7274" id="ts_7192_7194" title="Referenced at line 153, 154">ts</a>) :- { <a href="#ps_7235_7237" id="ps_7201_7203" title="Referenced at line 152, 153">ps</a> }
    <a href="../../webdsl.stx#resolveFunction_9367_9382" id="resolveFunction_7210_7225" title="Defined at ../../webdsl.stx line 228">resolveFunction</a>(<a href="#s_7186_7187" id="s_7226_7227" title="Defined at line 151">s</a>, <a href="#f_7189_7190" id="f_7229_7230" title="Defined at line 151">f</a>) == <a href="#ps_7201_7203" id="ps_7235_7237" title="Defined at line 151">ps</a>,
    <a href="#amountOfFunDeclsWithArgs_7977_8001" id="amountOfFunDeclsWithArgs_7243_7267" title="Defined at line 165">amountOfFunDeclsWithArgs</a>(<a href="#ps_7201_7203" id="ps_7268_7270" title="Defined at line 151">ps</a>, <a href="#ts_7192_7194" id="ts_7272_7274" title="Defined at line 151">ts</a>, 0) == 1
        | <span class="keyword">error</span> $[Function with name [<a href="#f_7189_7190" id="f_7322_7323" title="Defined at line 151">f</a>] and argument types [<a href="#ts_7192_7194" id="ts_7345_7347" title="Defined at line 151">ts</a>] is already defined] @<a href="#f_7189_7190" id="f_7370_7371" title="Defined at line 151">f</a>. <span class="layout">// correct error message for tests</span>

  <a href="#noDuplicateFunDefsEntity_5001_5025" id="noDuplicateFunDefsEntity_7411_7435" title="Referenced at line 113, 157">noDuplicateFunDefsEntity</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> * <span class="keyword">list</span>(<a href="../../webdsl.stx#TYPE_669_673" id="TYPE_7460_7464" title="Defined at ../../webdsl.stx line 29">TYPE</a>)
  <a href="#noDuplicateFunDefsEntity_7411_7435" id="noDuplicateFunDefsEntity_7468_7492" title="Defined at line 156">noDuplicateFunDefsEntity</a>(<a href="#s_7621_7622" id="s_7493_7494" title="Referenced at line 160">s</a>, <a href="#f_7588_7589" id="f_7496_7497" title="Referenced at line 159, 162, 162">f</a>, <a href="#types_7716_7721" id="types_7499_7504" title="Referenced at line 161, 162">types</a>) :- { <a href="#ps_7627_7629" id="ps_7511_7513" title="Referenced at line 160, 161">ps</a> }
    <span class="keyword">query</span> <a href="../../webdsl.stx#function_2039_2047" id="function_7526_7534" title="Defined at ../../webdsl.stx line 65">function</a> <span class="keyword">filter</span> <a href="../../webdsl.stx#EXTEND_1385_1391" id="EXTEND_7542_7548" title="Defined at ../../webdsl.stx line 47">EXTEND</a>?
                   <span class="keyword">and</span> { <a href="#f'_7581_7583" id="f'_7575_7577" title="Referenced at line 159">f'</a> :- <a href="#f'_7575_7577" id="f'_7581_7583" title="Defined at line 159">f'</a> == (<a href="#f_7496_7497" id="f_7588_7589" title="Defined at line 157">f</a>, _, _) }
                   <span class="keyword">in</span> <a href="#s_7493_7494" id="s_7621_7622" title="Defined at line 157">s</a> |-&gt; <a href="#ps_7511_7513" id="ps_7627_7629" title="Defined at line 157">ps</a>,
    <a href="#amountOfFunDeclsWithArgs_7977_8001" id="amountOfFunDeclsWithArgs_7635_7659" title="Defined at line 165">amountOfFunDeclsWithArgs</a>(<a href="../../webdsl.stx#filterFunctionResults_11136_11157" id="filterFunctionResults_7660_7681" title="Defined at ../../webdsl.stx line 257">filterFunctionResults</a>(<a href="../../webdsl.stx#typesOfStripOrigin_4016_4034" id="typesOfStripOrigin_7682_7700" title="Defined at ../../webdsl.stx line 122">typesOfStripOrigin</a>(<a href="#ps_7511_7513" id="ps_7701_7703" title="Defined at line 157">ps</a>), <a href="../../webdsl.stx#FALSE_844_849" id="FALSE_7706_7711" title="Defined at ../../webdsl.stx line 35">FALSE</a>()), <a href="#types_7499_7504" id="types_7716_7721" title="Defined at line 157">types</a>, 0) == 1
        | <span class="keyword">error</span> $[Function with name [<a href="#f_7496_7497" id="f_7769_7770" title="Defined at line 157">f</a>] and argument types [<a href="#types_7499_7504" id="types_7792_7797" title="Defined at line 157">types</a>] is already defined] @<a href="#f_7496_7497" id="f_7820_7821" title="Defined at line 157">f</a>. <span class="layout">// correct error message for tests</span>

  <span class="layout">// helper function for noDuplicateFunDefs that counts the amount of function with a given name and argument types</span>
  <a href="#amountOfFunDeclsWithArgs_7243_7267" id="amountOfFunDeclsWithArgs_7977_8001" title="Referenced at line 153, 161, 166, 167, 167, 168, 168">amountOfFunDeclsWithArgs</a> : <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_8027_8031" title="Defined at ../../webdsl.stx line 29">TYPE</a>))) * <span class="keyword">list</span>(<a href="../../webdsl.stx#TYPE_669_673" id="TYPE_8042_8046" title="Defined at ../../webdsl.stx line 29">TYPE</a>) * <span class="keyword">int</span> -&gt; <span class="keyword">int</span>
  <a href="#amountOfFunDeclsWithArgs_7977_8001" id="amountOfFunDeclsWithArgs_8063_8087" title="Defined at line 165">amountOfFunDeclsWithArgs</a>([], _, n) = <span id="n_8100_8101" title="Not referenced locally, nor via imports">n</span>.
  <a href="#amountOfFunDeclsWithArgs_7977_8001" id="amountOfFunDeclsWithArgs_8105_8129" title="Defined at line 165">amountOfFunDeclsWithArgs</a>([(_, (_, <a href="../../webdsl-types.stx#FUNCTION_343_351" id="FUNCTION_8139_8147" title="Defined at ../../webdsl-types.stx line 17">FUNCTION</a>(_, types, _, _))) | tail], types, <span id="n_8182_8183" title="Not referenced locally, nor via imports">n</span>) = <a href="#amountOfFunDeclsWithArgs_7977_8001" id="amountOfFunDeclsWithArgs_8187_8211" title="Defined at line 165">amountOfFunDeclsWithArgs</a>(<span id="tail_8212_8216" title="Not referenced locally, nor via imports">tail</span>, <span id="types_8218_8223" title="Not referenced locally, nor via imports">types</span>, <a href="#i_8231_8232" id="i_8225_8226" title="Referenced at line 167">i</a>) :- <a href="#i_8225_8226" id="i_8231_8232" title="Defined at line 167">i</a> #= n + 1.
  <a href="#amountOfFunDeclsWithArgs_7977_8001" id="amountOfFunDeclsWithArgs_8245_8269" title="Defined at line 165">amountOfFunDeclsWithArgs</a>([_ | <span id="tail_8275_8279" title="Not referenced locally, nor via imports">tail</span>], <span id="types_8282_8287" title="Not referenced locally, nor via imports">types</span>, <span id="n_8289_8290" title="Not referenced locally, nor via imports">n</span>) = <a href="#amountOfFunDeclsWithArgs_7977_8001" id="amountOfFunDeclsWithArgs_8294_8318" title="Defined at line 165">amountOfFunDeclsWithArgs</a>(tail, types, n).

<span class="keyword">rules</span>  <span class="layout">// rules and functions for function overloading</span>

  <span class="layout">// function that gets all functions/templates with matching name and compatible argument types</span>
  <a href="#typeCompatibleSigs_2133_2151" id="typeCompatibleSigs_8492_8510" title="Referenced at line 54, 174; ../../ui/template-calls.stx line 42">typeCompatibleSigs</a> : <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_8536_8540" title="Defined at ../../webdsl.stx line 29">TYPE</a>))) * <span class="keyword">list</span>(<a href="../../webdsl.stx#TYPE_669_673" id="TYPE_8551_8555" title="Defined at ../../webdsl.stx line 29">TYPE</a>) -&gt; <span class="keyword">list</span>((<span class="keyword">string</span> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_8575_8579" title="Defined at ../../webdsl.stx line 29">TYPE</a>))
  <a href="#typeCompatibleSigs_8492_8510" id="typeCompatibleSigs_8584_8602" title="Defined at line 173">typeCompatibleSigs</a>(<a href="#nameCompatibleSigs_8757_8775" id="nameCompatibleSigs_8603_8621" title="Referenced at line 175">nameCompatibleSigs</a>, <a href="#args_8741_8745" id="args_8623_8627" title="Referenced at line 175">args</a>) = <a href="#result_8783_8789" id="result_8631_8637" title="Referenced at line 176">result</a> :- {<a href="#sigsZippedWithTypeCompatibility_8679_8710" id="sigsZippedWithTypeCompatibility_8642_8673" title="Referenced at line 175, 176">sigsZippedWithTypeCompatibility</a>}
    <a href="#sigsZippedWithTypeCompatibility_8642_8673" id="sigsZippedWithTypeCompatibility_8679_8710" title="Defined at line 174">sigsZippedWithTypeCompatibility</a> == <a href="#zipSigsWithTypesCompatible_9419_9445" id="zipSigsWithTypesCompatible_8714_8740" title="Defined at line 187">zipSigsWithTypesCompatible</a>(<a href="#args_8623_8627" id="args_8741_8745" title="Defined at line 174">args</a>, <a href="#dropPaths_14818_14827" id="dropPaths_8747_8756" title="Defined at line 272">dropPaths</a>(<a href="#nameCompatibleSigs_8603_8621" id="nameCompatibleSigs_8757_8775" title="Defined at line 174">nameCompatibleSigs</a>)),
    <a href="#result_8631_8637" id="result_8783_8789" title="Defined at line 174">result</a> == <a href="#filterCompatibleArgTypes_8992_9016" id="filterCompatibleArgTypes_8793_8817" title="Defined at line 180">filterCompatibleArgTypes</a>(<a href="#sigsZippedWithTypeCompatibility_8642_8673" id="sigsZippedWithTypeCompatibility_8818_8849" title="Defined at line 174">sigsZippedWithTypeCompatibility</a>).

  <span class="layout">// helper function for typeCompatibleSigs that prunes the list</span>
  <span class="layout">// of functions/templates based on the zipped BOOL with the signature</span>
  <a href="#filterCompatibleArgTypes_8793_8817" id="filterCompatibleArgTypes_8992_9016" title="Referenced at line 176, 181, 182, 182, 183, 183">filterCompatibleArgTypes</a> : <span class="keyword">list</span>((<a href="../../webdsl.stx#BOOL_697_701" id="BOOL_9025_9029" title="Defined at ../../webdsl.stx line 30">BOOL</a> * (<span class="keyword">string</span> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_9042_9046" title="Defined at ../../webdsl.stx line 29">TYPE</a>))) -&gt; <span class="keyword">list</span>((<span class="keyword">string</span> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_9068_9072" title="Defined at ../../webdsl.stx line 29">TYPE</a>))
  <a href="#filterCompatibleArgTypes_8992_9016" id="filterCompatibleArgTypes_9077_9101" title="Defined at line 180">filterCompatibleArgTypes</a>([]) = [].
  <a href="#filterCompatibleArgTypes_8992_9016" id="filterCompatibleArgTypes_9114_9138" title="Defined at line 180">filterCompatibleArgTypes</a>([(<a href="../../webdsl.stx#TRUE_828_832" id="TRUE_9141_9145" title="Defined at ../../webdsl.stx line 34">TRUE</a>() , f) | <span id="fs_9155_9157" title="Not referenced locally, nor via imports">fs</span>]) = [<span id="f_9163_9164" title="Not referenced locally, nor via imports">f</span> | <a href="#filterCompatibleArgTypes_8992_9016" id="filterCompatibleArgTypes_9167_9191" title="Defined at line 180">filterCompatibleArgTypes</a>(fs)].
  <a href="#filterCompatibleArgTypes_8992_9016" id="filterCompatibleArgTypes_9200_9224" title="Defined at line 180">filterCompatibleArgTypes</a>([(<a href="../../webdsl.stx#FALSE_844_849" id="FALSE_9227_9232" title="Defined at ../../webdsl.stx line 35">FALSE</a>(), _) | fs]) = <a href="#filterCompatibleArgTypes_8992_9016" id="filterCompatibleArgTypes_9248_9272" title="Defined at line 180">filterCompatibleArgTypes</a>(<span id="fs_9273_9275" title="Not referenced locally, nor via imports">fs</span>).

  <span class="layout">// helper function for typeCompatibleSigs that zips the</span>
  <span class="layout">// signatures with whether the types are compatible with given argument types</span>
  <a href="#zipSigsWithTypesCompatible_8714_8740" id="zipSigsWithTypesCompatible_9419_9445" title="Referenced at line 175">zipSigsWithTypesCompatible</a> <span class="keyword">maps</span> <a href="#zipSigWithTypesCompatible_9501_9526" id="zipSigWithTypesCompatible_9451_9476" title="Defined at line 188">zipSigWithTypesCompatible</a>(*, <span class="keyword">list</span>(*)) = <span class="keyword">list</span>(*)
  <a href="#zipSigWithTypesCompatible_9451_9476" id="zipSigWithTypesCompatible_9501_9526" title="Referenced at line 187, 189, 190">zipSigWithTypesCompatible</a> : <span class="keyword">list</span>(<a href="../../webdsl.stx#TYPE_669_673" id="TYPE_9534_9538" title="Defined at ../../webdsl.stx line 29">TYPE</a>) * (<span class="keyword">string</span> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_9552_9556" title="Defined at ../../webdsl.stx line 29">TYPE</a>) -&gt; (<a href="../../webdsl.stx#BOOL_697_701" id="BOOL_9562_9566" title="Defined at ../../webdsl.stx line 30">BOOL</a> * (<span class="keyword">string</span> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_9579_9583" title="Defined at ../../webdsl.stx line 29">TYPE</a>))
  <a href="#zipSigWithTypesCompatible_9501_9526" id="zipSigWithTypesCompatible_9588_9613" title="Defined at line 188">zipSigWithTypesCompatible</a>(<span id="args_9614_9618" title="Not referenced locally, nor via imports">args</span>, <span id="f_9620_9621" title="Not referenced locally, nor via imports">f</span>@(_, <a href="../../webdsl-types.stx#FUNCTION_343_351" id="FUNCTION_9626_9634" title="Defined at ../../webdsl-types.stx line 17">FUNCTION</a>(_, funArgs, _, _))) = (<a href="../../webdsl.stx#typesCompatible_17112_17127" id="typesCompatible_9658_9673" title="Defined at ../../webdsl.stx line 401">typesCompatible</a>(args, <span id="funArgs_9680_9687" title="Not referenced locally, nor via imports">funArgs</span>), f).
  <a href="#zipSigWithTypesCompatible_9501_9526" id="zipSigWithTypesCompatible_9696_9721" title="Defined at line 188">zipSigWithTypesCompatible</a>(args, <span id="f_9728_9729" title="Not referenced locally, nor via imports">f</span>@(_, <a href="../../webdsl-types.stx#TEMPLATE_725_733" id="TEMPLATE_9734_9742" title="Defined at ../../webdsl-types.stx line 29">TEMPLATE</a>(_, templArgs, _))) = (<a href="../../webdsl.stx#typesCompatible_17112_17127" id="typesCompatible_9765_9780" title="Defined at ../../webdsl.stx line 401">typesCompatible</a>(<span id="args_9781_9785" title="Not referenced locally, nor via imports">args</span>, <span id="templArgs_9787_9796" title="Not referenced locally, nor via imports">templArgs</span>), f).

  <span class="layout">// function that prunes the list of compatible signatures</span>
  <span class="layout">// to a list of most specific signatures</span>
  <a href="#mostSpecificSigs_2106_2122" id="mostSpecificSigs_9909_9925" title="Referenced at line 54, 195, 196, 197; ../../ui/template-calls.stx line 42">mostSpecificSigs</a> : <span class="keyword">list</span>(<a href="../../webdsl.stx#TYPE_669_673" id="TYPE_9933_9937" title="Defined at ../../webdsl.stx line 29">TYPE</a>) * <span class="keyword">list</span>((<span class="keyword">string</span> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_9956_9960" title="Defined at ../../webdsl.stx line 29">TYPE</a>)) -&gt; <span class="keyword">list</span>((<span class="keyword">string</span> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_9981_9985" title="Defined at ../../webdsl.stx line 29">TYPE</a>))
  <a href="#mostSpecificSigs_9909_9925" id="mostSpecificSigs_9990_10006" title="Defined at line 194">mostSpecificSigs</a>(<span id="args_10007_10011" title="Not referenced locally, nor via imports">args</span>, []) = [].     <span class="layout">// In case no functions are compatible, return empty list</span>
  <a href="#mostSpecificSigs_9909_9925" id="mostSpecificSigs_10087_10103" title="Defined at line 194">mostSpecificSigs</a>(<span id="args_10104_10108" title="Not referenced locally, nor via imports">args</span>, fs@[_]) = <span id="fs_10120_10122" title="Not referenced locally, nor via imports">fs</span>. <span class="layout">// In case of only one compatible signature, return that</span>
  <a href="#mostSpecificSigs_9909_9925" id="mostSpecificSigs_10183_10199" title="Defined at line 194">mostSpecificSigs</a>(args, sigs) = <a href="#mostSpecificSigs_helper_10472_10495" id="mostSpecificSigs_helper_10214_10237" title="Defined at line 202">mostSpecificSigs_helper</a>(<span id="args_10238_10242" title="Not referenced locally, nor via imports">args</span>, sigs, <a href="#matchingSigs_10961_10973" id="matchingSigs_10250_10262" title="Defined at line 208">matchingSigs</a>(<a href="../../webdsl-types.stx#stripRefTypes_10326_10339" id="stripRefTypes_10263_10276" title="Defined at ../../webdsl-types.stx line 278">stripRefTypes</a>(args), <span id="sigs_10284_10288" title="Not referenced locally, nor via imports">sigs</span>)).

  <span class="layout">// helper function for mostSpecificFunSigs that returns</span>
  <span class="layout">// the exactly matching signatures if they exists,</span>
  <span class="layout">// else return the most specific (least inheritance) signatures</span>
  <a href="#mostSpecificSigs_helper_10214_10237" id="mostSpecificSigs_helper_10472_10495" title="Referenced at line 197, 203, 204">mostSpecificSigs_helper</a> : <span class="keyword">list</span>(<a href="../../webdsl.stx#TYPE_669_673" id="TYPE_10503_10507" title="Defined at ../../webdsl.stx line 29">TYPE</a>) * <span class="keyword">list</span>((<span class="keyword">string</span> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_10526_10530" title="Defined at ../../webdsl.stx line 29">TYPE</a>)) * <span class="keyword">list</span>((<span class="keyword">string</span> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_10550_10554" title="Defined at ../../webdsl.stx line 29">TYPE</a>)) -&gt; <span class="keyword">list</span>((<span class="keyword">string</span> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_10575_10579" title="Defined at ../../webdsl.stx line 29">TYPE</a>))
  <a href="#mostSpecificSigs_helper_10472_10495" id="mostSpecificSigs_helper_10584_10607" title="Defined at line 202">mostSpecificSigs_helper</a>(<span id="args_10608_10612" title="Not referenced locally, nor via imports">args</span>, <span id="sigs_10614_10618" title="Not referenced locally, nor via imports">sigs</span>, <span id="matching_10620_10628" title="Not referenced locally, nor via imports">matching</span>) = matching.
  <a href="#mostSpecificSigs_helper_10472_10495" id="mostSpecificSigs_helper_10644_10667" title="Defined at line 202">mostSpecificSigs_helper</a>(<a href="#args_10855_10859" id="args_10668_10672" title="Referenced at line 205">args</a>, sigs, [])       = <a href="#filterLeastInheritanceAmount_14479_14507" id="filterLeastInheritanceAmount_10692_10720" title="Defined at line 267">filterLeastInheritanceAmount</a>(<a href="../../webdsl.stx#minOfList_18238_18247" id="minOfList_10721_10730" title="Defined at ../../webdsl.stx line 440">minOfList</a>(<a href="#inheritanceAmounts_10814_10832" id="inheritanceAmounts_10731_10749" title="Referenced at line 205">inheritanceAmounts</a>), <a href="#zipInheritanceAmountWithSig_14155_14182" id="zipInheritanceAmountWithSig_10752_10779" title="Defined at line 262">zipInheritanceAmountWithSig</a>(inheritanceAmounts, <a href="#sigs_10861_10865" id="sigs_10800_10804" title="Referenced at line 205">sigs</a>)) :-
    <a href="#inheritanceAmounts_10731_10749" id="inheritanceAmounts_10814_10832" title="Defined at line 204">inheritanceAmounts</a> == <a href="#inheritanceAmounts_11933_11951" id="inheritanceAmounts_10836_10854" title="Defined at line 220">inheritanceAmounts</a>(<a href="#args_10668_10672" id="args_10855_10859" title="Defined at line 204">args</a>, <a href="#sigs_10800_10804" id="sigs_10861_10865" title="Defined at line 204">sigs</a>).

  <span class="layout">// helper function for mostSpecificFunSigs that returns the exactly matching signatures</span>
  <a href="#matchingSigs_10250_10262" id="matchingSigs_10961_10973" title="Referenced at line 197, 209, 210, 211, 215, 216, 217; ../../webdsl-ui.stx line 92">matchingSigs</a> : <span class="keyword">list</span>(<a href="../../webdsl.stx#TYPE_669_673" id="TYPE_10981_10985" title="Defined at ../../webdsl.stx line 29">TYPE</a>) * <span class="keyword">list</span>((<span class="keyword">string</span> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_11004_11008" title="Defined at ../../webdsl.stx line 29">TYPE</a>)) -&gt; <span class="keyword">list</span>((<span class="keyword">string</span> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_11029_11033" title="Defined at ../../webdsl.stx line 29">TYPE</a>))
  <a href="#matchingSigs_10961_10973" id="matchingSigs_11038_11050" title="Defined at line 208">matchingSigs</a>(_, []) = [].
  <a href="#matchingSigs_10961_10973" id="matchingSigs_11066_11078" title="Defined at line 208">matchingSigs</a>(<span id="args_11079_11083" title="Not referenced locally, nor via imports">args</span>, [(x, <a href="../../webdsl-types.stx#FUNCTION_343_351" id="FUNCTION_11090_11098" title="Defined at ../../webdsl-types.stx line 17">FUNCTION</a>(f, params, rt, <span id="static_11114_11120" title="Not referenced locally, nor via imports">static</span>)) | <span id="fs_11125_11127" title="Not referenced locally, nor via imports">fs</span>]) = <a href="#matchingSigs_helper_11468_11487" id="matchingSigs_helper_11132_11151" title="Defined at line 214">matchingSigs_helper</a>(args, (<span id="x_11159_11160" title="Not referenced locally, nor via imports">x</span>, <a href="../../webdsl-types.stx#FUNCTION_343_351" id="FUNCTION_11162_11170" title="Defined at ../../webdsl-types.stx line 17">FUNCTION</a>(<span id="f_11171_11172" title="Not referenced locally, nor via imports">f</span>, <a href="../../webdsl-types.stx#stripRefTypes_10326_10339" id="stripRefTypes_11174_11187" title="Defined at ../../webdsl-types.stx line 278">stripRefTypes</a>(<span id="params_11188_11194" title="Not referenced locally, nor via imports">params</span>), <span id="rt_11197_11199" title="Not referenced locally, nor via imports">rt</span>, static)), fs).
  <a href="#matchingSigs_10961_10973" id="matchingSigs_11218_11230" title="Defined at line 208">matchingSigs</a>(<span id="args_11231_11235" title="Not referenced locally, nor via imports">args</span>, [(x, <a href="../../webdsl-types.stx#TEMPLATE_725_733" id="TEMPLATE_11242_11250" title="Defined at ../../webdsl-types.stx line 29">TEMPLATE</a>(t, <span id="params_11254_11260" title="Not referenced locally, nor via imports">params</span>, <span id="ajax_11262_11266" title="Not referenced locally, nor via imports">ajax</span>))       | fs]) = <a href="#matchingSigs_helper_11468_11487" id="matchingSigs_helper_11284_11303" title="Defined at line 214">matchingSigs_helper</a>(args, (<span id="x_11311_11312" title="Not referenced locally, nor via imports">x</span>, <a href="../../webdsl-types.stx#TEMPLATE_725_733" id="TEMPLATE_11314_11322" title="Defined at ../../webdsl-types.stx line 29">TEMPLATE</a>(<span id="t_11323_11324" title="Not referenced locally, nor via imports">t</span>, <a href="../../webdsl-types.stx#stripRefTypes_10326_10339" id="stripRefTypes_11326_11339" title="Defined at ../../webdsl-types.stx line 278">stripRefTypes</a>(params), ajax)), <span id="fs_11357_11359" title="Not referenced locally, nor via imports">fs</span>).

  <span class="layout">// helper function for matchingSigs that compares the argument types after stripping the Ref&lt;&gt; sorts</span>
  <a href="#matchingSigs_helper_11132_11151" id="matchingSigs_helper_11468_11487" title="Referenced at line 210, 211, 215, 216, 217">matchingSigs_helper</a> : <span class="keyword">list</span>(<a href="../../webdsl.stx#TYPE_669_673" id="TYPE_11495_11499" title="Defined at ../../webdsl.stx line 29">TYPE</a>) * (<span class="keyword">string</span> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_11513_11517" title="Defined at ../../webdsl.stx line 29">TYPE</a>) * <span class="keyword">list</span>((<span class="keyword">string</span> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_11536_11540" title="Defined at ../../webdsl.stx line 29">TYPE</a>)) -&gt; <span class="keyword">list</span>((<span class="keyword">string</span> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_11561_11565" title="Defined at ../../webdsl.stx line 29">TYPE</a>))
  <a href="#matchingSigs_helper_11468_11487" id="matchingSigs_helper_11570_11589" title="Defined at line 214">matchingSigs_helper</a>(args, f@(_, <a href="../../webdsl-types.stx#FUNCTION_343_351" id="FUNCTION_11602_11610" title="Defined at ../../webdsl-types.stx line 17">FUNCTION</a>(_, <span id="args_11614_11618" title="Not referenced locally, nor via imports">args</span>, _, _)), <span id="fs_11628_11630" title="Not referenced locally, nor via imports">fs</span>) = [<span id="f_11635_11636" title="Not referenced locally, nor via imports">f</span> | <a href="#matchingSigs_10961_10973" id="matchingSigs_11639_11651" title="Defined at line 208">matchingSigs</a>(args, fs)].
  <a href="#matchingSigs_helper_11468_11487" id="matchingSigs_helper_11666_11685" title="Defined at line 214">matchingSigs_helper</a>(args, <span id="f_11692_11693" title="Not referenced locally, nor via imports">f</span>@(_, <a href="../../webdsl-types.stx#TEMPLATE_725_733" id="TEMPLATE_11698_11706" title="Defined at ../../webdsl-types.stx line 29">TEMPLATE</a>(_, args, _))   , fs) = [f | <a href="#matchingSigs_10961_10973" id="matchingSigs_11735_11747" title="Defined at line 208">matchingSigs</a>(<span id="args_11748_11752" title="Not referenced locally, nor via imports">args</span>, <span id="fs_11754_11756" title="Not referenced locally, nor via imports">fs</span>)].
  <a href="#matchingSigs_helper_11468_11487" id="matchingSigs_helper_11762_11781" title="Defined at line 214">matchingSigs_helper</a>(args, _, <span id="fs_11791_11793" title="Not referenced locally, nor via imports">fs</span>) = <a href="#matchingSigs_10961_10973" id="matchingSigs_11797_11809" title="Defined at line 208">matchingSigs</a>(<span id="args_11810_11814" title="Not referenced locally, nor via imports">args</span>, fs).

  <span class="layout">// function that computes the total amount of inheritance edges from caller arguments to defined arguments</span>
  <a href="#inheritanceAmounts_10836_10854" id="inheritanceAmounts_11933_11951" title="Referenced at line 205">inheritanceAmounts</a> <span class="keyword">maps</span> <a href="#inheritanceAmount_11999_12016" id="inheritanceAmount_11957_11974" title="Defined at line 221">inheritanceAmount</a>(*, <span class="keyword">list</span>(*)) = <span class="keyword">list</span>(*)
  <a href="#inheritanceAmount_11957_11974" id="inheritanceAmount_11999_12016" title="Referenced at line 220, 222, 223">inheritanceAmount</a> : <span class="keyword">list</span>(<a href="../../webdsl.stx#TYPE_669_673" id="TYPE_12024_12028" title="Defined at ../../webdsl.stx line 29">TYPE</a>) * (<span class="keyword">string</span> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_12042_12046" title="Defined at ../../webdsl.stx line 29">TYPE</a>) -&gt; <span class="keyword">int</span>
  <a href="#inheritanceAmount_11999_12016" id="inheritanceAmount_12057_12074" title="Defined at line 221">inheritanceAmount</a>(args, (_, <a href="../../webdsl-types.stx#FUNCTION_343_351" id="FUNCTION_12085_12093" title="Defined at ../../webdsl-types.stx line 17">FUNCTION</a>(_, sigTypes, _, _))) = <a href="#inheritanceAmount_helper_12365_12389" id="inheritanceAmount_helper_12117_12141" title="Defined at line 226">inheritanceAmount_helper</a>(<span id="args_12142_12146" title="Not referenced locally, nor via imports">args</span>, <span id="sigTypes_12148_12156" title="Not referenced locally, nor via imports">sigTypes</span>).
  <a href="#inheritanceAmount_11999_12016" id="inheritanceAmount_12161_12178" title="Defined at line 221">inheritanceAmount</a>(<span id="args_12179_12183" title="Not referenced locally, nor via imports">args</span>, (_, <a href="../../webdsl-types.stx#TEMPLATE_725_733" id="TEMPLATE_12189_12197" title="Defined at ../../webdsl-types.stx line 29">TEMPLATE</a>(_, sigTypes, _)))    = <a href="#inheritanceAmount_helper_12365_12389" id="inheritanceAmount_helper_12221_12245" title="Defined at line 226">inheritanceAmount_helper</a>(args, <span id="sigTypes_12252_12260" title="Not referenced locally, nor via imports">sigTypes</span>).

  <span class="layout">// helper function for getInheritanceAmount that computers the total amount of inheritance edges</span>
  <a href="#inheritanceAmount_helper_12117_12141" id="inheritanceAmount_helper_12365_12389" title="Referenced at line 222, 223, 227, 228, 232, 236, 237, 239, 241, 245, 246, 248, 250">inheritanceAmount_helper</a> : <span class="keyword">list</span>(<a href="../../webdsl.stx#TYPE_669_673" id="TYPE_12397_12401" title="Defined at ../../webdsl.stx line 29">TYPE</a>) * <span class="keyword">list</span>(<a href="../../webdsl.stx#TYPE_669_673" id="TYPE_12410_12414" title="Defined at ../../webdsl.stx line 29">TYPE</a>) -&gt; <span class="keyword">int</span>
  <a href="#inheritanceAmount_helper_12365_12389" id="inheritanceAmount_helper_12425_12449" title="Defined at line 226">inheritanceAmount_helper</a>([], []) = 0.
  <a href="#inheritanceAmount_helper_12365_12389" id="inheritanceAmount_helper_12465_12489" title="Defined at line 226">inheritanceAmount_helper</a>([<a href="#argT_12576_12580" id="argT_12491_12495" title="Referenced at line 229">argT</a> | <a href="#argtl_12694_12699" id="argtl_12498_12503" title="Referenced at line 232">argtl</a>], [<a href="#sigT_12610_12614" id="sigT_12507_12511" title="Referenced at line 230">sigT</a> | <a href="#sigtl_12701_12706" id="sigtl_12514_12519" title="Referenced at line 232">sigtl</a>]) = <a href="#x_12713_12714" id="x_12524_12525" title="Referenced at line 233">x</a> :- { <a href="#s_arg_12553_12558" id="s_arg_12531_12536" title="Referenced at line 229, 231">s_arg</a> <a href="#s_sig_12587_12592" id="s_sig_12537_12542" title="Referenced at line 230, 231">s_sig</a> <a href="#y_12621_12622" id="y_12543_12544" title="Referenced at line 231">y</a> <a href="#z_12664_12665" id="z_12545_12546" title="Referenced at line 232">z</a> }
    <a href="#s_arg_12531_12536" id="s_arg_12553_12558" title="Defined at line 228">s_arg</a> == <a href="#scopeFromType_13808_13821" id="scopeFromType_12562_12575" title="Defined at line 253">scopeFromType</a>(<a href="#argT_12491_12495" id="argT_12576_12580" title="Defined at line 228">argT</a>),
    <a href="#s_sig_12537_12542" id="s_sig_12587_12592" title="Defined at line 228">s_sig</a> == <a href="#scopeFromType_13808_13821" id="scopeFromType_12596_12609" title="Defined at line 253">scopeFromType</a>(<a href="#sigT_12507_12511" id="sigT_12610_12614" title="Defined at line 228">sigT</a>),
    <a href="#y_12543_12544" id="y_12621_12622" title="Defined at line 228">y</a> == <a href="../../webdsl-entities.stx#inheritEdgesAmount_9611_9629" id="inheritEdgesAmount_12626_12644" title="Defined at ../../webdsl-entities.stx line 217">inheritEdgesAmount</a>(<a href="#s_arg_12531_12536" id="s_arg_12645_12650" title="Defined at line 228">s_arg</a>, <a href="#s_sig_12537_12542" id="s_sig_12652_12657" title="Defined at line 228">s_sig</a>),
    <a href="#z_12545_12546" id="z_12664_12665" title="Defined at line 228">z</a> == <a href="#inheritanceAmount_helper_12365_12389" id="inheritanceAmount_helper_12669_12693" title="Defined at line 226">inheritanceAmount_helper</a>(<a href="#argtl_12498_12503" id="argtl_12694_12699" title="Defined at line 228">argtl</a>, <a href="#sigtl_12514_12519" id="sigtl_12701_12706" title="Defined at line 228">sigtl</a>),
    <a href="#x_12524_12525" id="x_12713_12714" title="Defined at line 228">x</a> #= y + z.

  <span class="layout">// in case of two built-in types, the same built-in type is +0, two compatible (but not equal) types is +1</span>
  <a href="#inheritanceAmount_helper_12365_12389" id="inheritanceAmount_helper_12837_12861" title="Defined at line 226">inheritanceAmount_helper</a>([<span id="arg_12863_12866" title="Not referenced locally, nor via imports">arg</span>@<a href="../../webdsl-types.stx#BUILTINTYPE_1001_1012" id="BUILTINTYPE_12867_12878" title="Defined at ../../webdsl-types.stx line 40">BUILTINTYPE</a>(<span id="t_12879_12880" title="Not referenced locally, nor via imports">t</span>, _) | <a href="#argtl_12969_12974" id="argtl_12887_12892" title="Referenced at line 237">argtl</a>], [<span id="sig_12896_12899" title="Not referenced locally, nor via imports">sig</span>@<a href="../../webdsl-types.stx#BUILTINTYPE_1001_1012" id="BUILTINTYPE_12900_12911" title="Defined at ../../webdsl-types.stx line 40">BUILTINTYPE</a>(t, _) | <a href="#sigtl_12976_12981" id="sigtl_12920_12925" title="Referenced at line 237">sigtl</a>]) = <a href="#x_12939_12940" id="x_12930_12931" title="Referenced at line 237">x</a> :-
    <a href="#x_12930_12931" id="x_12939_12940" title="Defined at line 236">x</a> == <a href="#inheritanceAmount_helper_12365_12389" id="inheritanceAmount_helper_12944_12968" title="Defined at line 226">inheritanceAmount_helper</a>(<a href="#argtl_12887_12892" id="argtl_12969_12974" title="Defined at line 236">argtl</a>, <a href="#sigtl_12920_12925" id="sigtl_12976_12981" title="Defined at line 236">sigtl</a>).

  <a href="#inheritanceAmount_helper_12365_12389" id="inheritanceAmount_helper_12987_13011" title="Defined at line 226">inheritanceAmount_helper</a>([<a href="#arg_13110_13113" id="arg_13013_13016" title="Referenced at line 240, 240">arg</a>@<a href="../../webdsl-types.stx#BUILTINTYPE_1001_1012" id="BUILTINTYPE_13017_13028" title="Defined at ../../webdsl-types.stx line 40">BUILTINTYPE</a>(_, _) | <a href="#argtl_13230_13235" id="argtl_13037_13042" title="Referenced at line 241">argtl</a>], [<a href="#sig_13115_13118" id="sig_13046_13049" title="Referenced at line 240, 240">sig</a>@<a href="../../webdsl-types.stx#BUILTINTYPE_1001_1012" id="BUILTINTYPE_13050_13061" title="Defined at ../../webdsl-types.stx line 40">BUILTINTYPE</a>(_, _) | <a href="#sigtl_13237_13242" id="sigtl_13070_13075" title="Referenced at line 241">sigtl</a>]) = <a href="#x_13249_13250" id="x_13080_13081" title="Referenced at line 242">x</a> :- { <a href="#y_13200_13201" id="y_13087_13088" title="Referenced at line 241">y</a> }
    <a href="../../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_13095_13109" title="Defined at ../../webdsl.stx line 408">typeCompatible</a>(<a href="#arg_13013_13016" id="arg_13110_13113" title="Defined at line 239">arg</a>, <a href="#sig_13046_13049" id="sig_13115_13118" title="Defined at line 239">sig</a>) | <span class="keyword">error</span> $[Argument type [<a href="#arg_13013_13016" id="arg_13145_13148" title="Defined at line 239">arg</a>] is not compatible with signature type [<a href="#sig_13046_13049" id="sig_13189_13192" title="Defined at line 239">sig</a>]],
    <a href="#y_13087_13088" id="y_13200_13201" title="Defined at line 239">y</a> == <a href="#inheritanceAmount_helper_12365_12389" id="inheritanceAmount_helper_13205_13229" title="Defined at line 226">inheritanceAmount_helper</a>(<a href="#argtl_13037_13042" id="argtl_13230_13235" title="Defined at line 239">argtl</a>, <a href="#sigtl_13070_13075" id="sigtl_13237_13242" title="Defined at line 239">sigtl</a>),
    <a href="#x_13080_13081" id="x_13249_13250" title="Defined at line 239">x</a> #= y + 1.

  <span class="layout">// in case of two template variable arguments, +0 for exactly the same types, +1 for different types</span>
  <a href="#inheritanceAmount_helper_12365_12389" id="inheritanceAmount_helper_13367_13391" title="Defined at line 226">inheritanceAmount_helper</a>([<span id="arg_13393_13396" title="Not referenced locally, nor via imports">arg</span>@<a href="../../webdsl-types.stx#TEMPLATEVARARG_1090_1104" id="TEMPLATEVARARG_13397_13411" title="Defined at ../../webdsl-types.stx line 43">TEMPLATEVARARG</a>(<span id="ts_13412_13414" title="Not referenced locally, nor via imports">ts</span>, _) | <a href="#argtl_13507_13512" id="argtl_13421_13426" title="Referenced at line 246">argtl</a>], [<span id="sig_13430_13433" title="Not referenced locally, nor via imports">sig</span>@<a href="../../webdsl-types.stx#TEMPLATEVARARG_1090_1104" id="TEMPLATEVARARG_13434_13448" title="Defined at ../../webdsl-types.stx line 43">TEMPLATEVARARG</a>(ts, _) | <a href="#sigtl_13514_13519" id="sigtl_13458_13463" title="Referenced at line 246">sigtl</a>]) = <a href="#x_13477_13478" id="x_13468_13469" title="Referenced at line 246">x</a> :-
    <a href="#x_13468_13469" id="x_13477_13478" title="Defined at line 245">x</a> == <a href="#inheritanceAmount_helper_12365_12389" id="inheritanceAmount_helper_13482_13506" title="Defined at line 226">inheritanceAmount_helper</a>(<a href="#argtl_13421_13426" id="argtl_13507_13512" title="Defined at line 245">argtl</a>, <a href="#sigtl_13458_13463" id="sigtl_13514_13519" title="Defined at line 245">sigtl</a>).

  <a href="#inheritanceAmount_helper_12365_12389" id="inheritanceAmount_helper_13525_13549" title="Defined at line 226">inheritanceAmount_helper</a>([<a href="#arg_13654_13657" id="arg_13551_13554" title="Referenced at line 249, 249">arg</a>@<a href="../../webdsl-types.stx#TEMPLATEVARARG_1090_1104" id="TEMPLATEVARARG_13555_13569" title="Defined at ../../webdsl-types.stx line 43">TEMPLATEVARARG</a>(_, _) | <a href="#argtl_13774_13779" id="argtl_13578_13583" title="Referenced at line 250">argtl</a>], [<a href="#sig_13659_13662" id="sig_13587_13590" title="Referenced at line 249, 249">sig</a>@<a href="../../webdsl-types.stx#TEMPLATEVARARG_1090_1104" id="TEMPLATEVARARG_13591_13605" title="Defined at ../../webdsl-types.stx line 43">TEMPLATEVARARG</a>(_, _) | <a href="#sigtl_13781_13786" id="sigtl_13614_13619" title="Referenced at line 250">sigtl</a>]) = <a href="#x_13793_13794" id="x_13624_13625" title="Referenced at line 251">x</a> :- { <a href="#y_13744_13745" id="y_13631_13632" title="Referenced at line 250">y</a> }
    <a href="../../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_13639_13653" title="Defined at ../../webdsl.stx line 408">typeCompatible</a>(<a href="#arg_13551_13554" id="arg_13654_13657" title="Defined at line 248">arg</a>, <a href="#sig_13587_13590" id="sig_13659_13662" title="Defined at line 248">sig</a>) | <span class="keyword">error</span> $[Argument type [<a href="#arg_13551_13554" id="arg_13689_13692" title="Defined at line 248">arg</a>] is not compatible with signature type [<a href="#sig_13587_13590" id="sig_13733_13736" title="Defined at line 248">sig</a>]],
    <a href="#y_13631_13632" id="y_13744_13745" title="Defined at line 248">y</a> == <a href="#inheritanceAmount_helper_12365_12389" id="inheritanceAmount_helper_13749_13773" title="Defined at line 226">inheritanceAmount_helper</a>(<a href="#argtl_13578_13583" id="argtl_13774_13779" title="Defined at line 248">argtl</a>, <a href="#sigtl_13614_13619" id="sigtl_13781_13786" title="Defined at line 248">sigtl</a>),
    <a href="#x_13624_13625" id="x_13793_13794" title="Defined at line 248">x</a> #= y + 1.

  <a href="#scopeFromType_12562_12575" id="scopeFromType_13808_13821" title="Referenced at line 229, 230, 254, 254, 255, 255, 256, 256, 257, 258, 259">scopeFromType</a> : <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_13824_13828" title="Defined at ../../webdsl.stx line 29">TYPE</a> -&gt; <span class="keyword">scope</span>
  <a href="#scopeFromType_13808_13821" id="scopeFromType_13840_13853" title="Defined at line 253">scopeFromType</a>(<a href="../../webdsl-types.stx#REF_939_942" id="REF_13854_13857" title="Defined at ../../webdsl-types.stx line 37">REF</a>(<span id="t_13858_13859" title="Not referenced locally, nor via imports">t</span>)) = <a href="#scopeFromType_13808_13821" id="scopeFromType_13864_13877" title="Defined at line 253">scopeFromType</a>(t).
  <a href="#scopeFromType_13808_13821" id="scopeFromType_13884_13897" title="Defined at line 253">scopeFromType</a>(<a href="../../webdsl-types.stx#LIST_891_895" id="LIST_13898_13902" title="Defined at ../../webdsl-types.stx line 35">LIST</a>(t)) = <a href="#scopeFromType_13808_13821" id="scopeFromType_13909_13922" title="Defined at line 253">scopeFromType</a>(<span id="t_13923_13924" title="Not referenced locally, nor via imports">t</span>).
  <a href="#scopeFromType_13808_13821" id="scopeFromType_13929_13942" title="Defined at line 253">scopeFromType</a>(<a href="../../webdsl-types.stx#SET_915_918" id="SET_13943_13946" title="Defined at ../../webdsl-types.stx line 36">SET</a>(t)) = <a href="#scopeFromType_13808_13821" id="scopeFromType_13953_13966" title="Defined at line 253">scopeFromType</a>(<span id="t_13967_13968" title="Not referenced locally, nor via imports">t</span>).
  <a href="#scopeFromType_13808_13821" id="scopeFromType_13973_13986" title="Defined at line 253">scopeFromType</a>(<a href="../../webdsl-types.stx#ENTITY_444_450" id="ENTITY_13987_13993" title="Defined at ../../webdsl-types.stx line 20">ENTITY</a>(_, s)) = <span id="s_14003_14004" title="Not referenced locally, nor via imports">s</span>.
  <a href="#scopeFromType_13808_13821" id="scopeFromType_14008_14021" title="Defined at line 253">scopeFromType</a>(<a href="../../webdsl-types.stx#NATIVECLASS_529_540" id="NATIVECLASS_14022_14033" title="Defined at ../../webdsl-types.stx line 23">NATIVECLASS</a>(_, <span id="s_14037_14038" title="Not referenced locally, nor via imports">s</span>)) = s.
  <a href="#scopeFromType_13808_13821" id="scopeFromType_14048_14061" title="Defined at line 253">scopeFromType</a>(<a href="../../webdsl-types.stx#BUILTINTYPE_1001_1012" id="BUILTINTYPE_14062_14073" title="Defined at ../../webdsl-types.stx line 40">BUILTINTYPE</a>(_, s)) = <span id="s_14083_14084" title="Not referenced locally, nor via imports">s</span>.

  <span class="layout">// function that zips the inheritance amount with the signature</span>
  <a href="#zipInheritanceAmountWithSig_10752_10779" id="zipInheritanceAmountWithSig_14155_14182" title="Referenced at line 204, 263, 264, 264">zipInheritanceAmountWithSig</a> : <span class="keyword">list</span>(<span class="keyword">int</span>) * <span class="keyword">list</span>((<span class="keyword">string</span> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_14212_14216" title="Defined at ../../webdsl.stx line 29">TYPE</a>)) -&gt; <span class="keyword">list</span>((<span class="keyword">int</span> * (<span class="keyword">string</span> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_14244_14248" title="Defined at ../../webdsl.stx line 29">TYPE</a>)))
  <a href="#zipInheritanceAmountWithSig_14155_14182" id="zipInheritanceAmountWithSig_14254_14281" title="Defined at line 262">zipInheritanceAmountWithSig</a>([], []) = [].
  <a href="#zipInheritanceAmountWithSig_14155_14182" id="zipInheritanceAmountWithSig_14298_14325" title="Defined at line 262">zipInheritanceAmountWithSig</a>([<span id="x_14327_14328" title="Not referenced locally, nor via imports">x</span>|<span id="xs_14329_14331" title="Not referenced locally, nor via imports">xs</span>], [y|ys]) = [(x, <span id="y_14349_14350" title="Not referenced locally, nor via imports">y</span>) | <a href="#zipInheritanceAmountWithSig_14155_14182" id="zipInheritanceAmountWithSig_14354_14381" title="Defined at line 262">zipInheritanceAmountWithSig</a>(xs, <span id="ys_14386_14388" title="Not referenced locally, nor via imports">ys</span>)].

  <span class="layout">// function that prunes the signatures to only keep the lowest inheritance amount</span>
  <a href="#filterLeastInheritanceAmount_10692_10720" id="filterLeastInheritanceAmount_14479_14507" title="Referenced at line 204, 268, 269, 269, 270, 270">filterLeastInheritanceAmount</a> : <span class="keyword">int</span> * <span class="keyword">list</span>((<span class="keyword">int</span> * (<span class="keyword">string</span> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_14538_14542" title="Defined at ../../webdsl.stx line 29">TYPE</a>))) -&gt; <span class="keyword">list</span>((<span class="keyword">string</span> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_14564_14568" title="Defined at ../../webdsl.stx line 29">TYPE</a>))
  <a href="#filterLeastInheritanceAmount_14479_14507" id="filterLeastInheritanceAmount_14573_14601" title="Defined at line 267">filterLeastInheritanceAmount</a>(_, []) = [].
  <a href="#filterLeastInheritanceAmount_14479_14507" id="filterLeastInheritanceAmount_14617_14645" title="Defined at line 267">filterLeastInheritanceAmount</a>(x, [(x, sig) | sigtl]) = [<span id="sig_14672_14675" title="Not referenced locally, nor via imports">sig</span> | <a href="#filterLeastInheritanceAmount_14479_14507" id="filterLeastInheritanceAmount_14678_14706" title="Defined at line 267">filterLeastInheritanceAmount</a>(<span id="x_14707_14708" title="Not referenced locally, nor via imports">x</span>, <span id="sigtl_14710_14715" title="Not referenced locally, nor via imports">sigtl</span>)].
  <a href="#filterLeastInheritanceAmount_14479_14507" id="filterLeastInheritanceAmount_14721_14749" title="Defined at line 267">filterLeastInheritanceAmount</a>(x, [_        | <span id="sigtl_14765_14770" title="Not referenced locally, nor via imports">sigtl</span>]) = <a href="#filterLeastInheritanceAmount_14479_14507" id="filterLeastInheritanceAmount_14775_14803" title="Defined at line 267">filterLeastInheritanceAmount</a>(<span id="x_14804_14805" title="Not referenced locally, nor via imports">x</span>, sigtl).

  <a href="#dropPaths_8747_8756" id="dropPaths_14818_14827" title="Referenced at line 175; ../../webdsl-ui.stx line 92">dropPaths</a> <span class="keyword">maps</span> <a href="#dropPath_14863_14871" id="dropPath_14833_14841" title="Defined at line 273">dropPath</a>(<span class="keyword">list</span>(*)) = <span class="keyword">list</span>(*)
  <a href="#dropPath_14833_14841" id="dropPath_14863_14871" title="Referenced at line 272, 274">dropPath</a> : (<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_14892_14896" title="Defined at ../../webdsl.stx line 29">TYPE</a>)) -&gt; (<span class="keyword">string</span> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_14912_14916" title="Defined at ../../webdsl.stx line 29">TYPE</a>)
  <a href="#dropPath_14863_14871" id="dropPath_14920_14928" title="Defined at line 273">dropPath</a>((_, <span id="x_14933_14934" title="Not referenced locally, nor via imports">x</span>)) = x.

</code></pre></td></tr></tbody></table></div>