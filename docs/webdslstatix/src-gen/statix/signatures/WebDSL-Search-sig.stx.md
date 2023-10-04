---
title: WebDSL-Search-sig.stx
hide:
  - toc
---

# `WebDSL-Search-sig.stx`



[pdmosses/webdsl-statix/webdslstatix/src-gen/statix/signatures/WebDSL-Search-sig.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/src-gen/statix/signatures/WebDSL-Search-sig.stx "The source file on GitHub"

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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../WebDSL-Action-sig.stx#signatures/WebDSL-Search-sig_142_170" id="signatures/WebDSL-Search-sig_7_35" title="Referenced at ../WebDSL-Action-sig.stx line 7; ../webdsl-statix-sig.stx line 22">signatures/WebDSL-Search-sig</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action-sig.stx#signatures/WebDSL-Action-sig_7_35" id="signatures/WebDSL-Action-sig_47_75" title="Defined at ../WebDSL-Action-sig.stx line 1">signatures/WebDSL-Action-sig</a>
  <a href="../WebDSL-Core-sig.stx#signatures/WebDSL-Core-sig_7_33" id="signatures/WebDSL-Core-sig_78_104" title="Defined at ../WebDSL-Core-sig.stx line 1">signatures/WebDSL-Core-sig</a>
  <a href="../WebDSL-Lexical-sig.stx#signatures/WebDSL-Lexical-sig_7_36" id="signatures/WebDSL-Lexical-sig_107_136" title="Defined at ../WebDSL-Lexical-sig.stx line 1">signatures/WebDSL-Lexical-sig</a>
  <a href="../WebDSL-DataModel-sig.stx#signatures/WebDSL-DataModel-sig_7_38" id="signatures/WebDSL-DataModel-sig_139_170" title="Defined at ../WebDSL-DataModel-sig.stx line 1">signatures/WebDSL-DataModel-sig</a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <a href="#SA-Value_4806_4814" id="SA-Value_195_203" title="Referenced at line 157">SA-Value</a> = <span class="keyword">string</span>
    <span id="SearcherKW_217_227" title="Not referenced locally, nor via imports">SearcherKW</span> = <span class="keyword">string</span>
    <a href="#SearchFieldId_9660_9673" id="SearchFieldId_241_254" title="Referenced at line 257, 258">SearchFieldId</a> = <span class="keyword">string</span>
    <span id="SEARCHERREF_268_279" title="Not referenced locally, nor via imports">SEARCHERREF</span> = <span class="keyword">string</span>
    <a href="#FullTextAnalyzerBody_1349_1369" id="FullTextAnalyzerBody_293_313" title="Referenced at line 76, 137, 141, 142">FullTextAnalyzerBody</a>
    <a href="#FullTextAnalyzerBodyDef_1406_1429" id="FullTextAnalyzerBodyDef_318_341" title="Referenced at line 77, 141, 142, 142, 143">FullTextAnalyzerBodyDef</a>
    <a href="#CharFilter_1453_1463" id="CharFilter_346_356" title="Referenced at line 78, 143, 144, 275">CharFilter</a>
    <a href="#Tokenizer_1486_1495" id="Tokenizer_361_370" title="Referenced at line 79, 143, 145">Tokenizer</a>
    <a href="#TokenFilter_1520_1531" id="TokenFilter_375_386" title="Referenced at line 80, 143, 146, 276">TokenFilter</a>
    <a href="#AnalyzerArgument_1561_1577" id="AnalyzerArgument_391_407" title="Referenced at line 81, 148, 149">AnalyzerArgument</a>
    <a href="#OptDefaultAnalyzer_1609_1627" id="OptDefaultAnalyzer_412_430" title="Referenced at line 82, 137, 138, 139, 140">OptDefaultAnalyzer</a>
    <a href="#OptAnalyzerArguments_1661_1681" id="OptAnalyzerArguments_435_455" title="Referenced at line 83, 144, 145, 146, 147, 148, 275, 276">OptAnalyzerArguments</a>
    <a href="#SearchableAnno_1709_1723" id="SearchableAnno_460_474" title="Referenced at line 84, 150, 152, 153">SearchableAnno</a>
    <a href="#SearchNamespaceAnno_1756_1775" id="SearchNamespaceAnno_479_498" title="Referenced at line 85, 151, 154">SearchNamespaceAnno</a>
    <a href="#SA-Argument_1800_1811" id="SA-Argument_503_514" title="Referenced at line 86, 156, 157, 158, 159, 160, 161">SA-Argument</a>
    <a href="#OptSAArguments_1839_1853" id="OptSAArguments_519_533" title="Referenced at line 87, 150, 155, 156">OptSAArguments</a>
    <a href="#SA-Key_1873_1879" id="SA-Key_538_544" title="Referenced at line 88, 157, 162, 163, 164, 165, 166">SA-Key</a>
    <a href="#SearchMappingContent_1913_1933" id="SearchMappingContent_549_569" title="Referenced at line 89, 167, 168, 169, 170, 171, 172, 173, 174, 273, 274">SearchMappingContent</a>
    <a href="#MappingPart_1958_1969" id="MappingPart_574_585" title="Referenced at line 90, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182">MappingPart</a>
    <a href="#OptDefaultSearchField_2004_2025" id="OptDefaultSearchField_590_611" title="Referenced at line 91, 171, 172, 173, 174, 185, 186">OptDefaultSearchField</a>
    <a href="#SearchMappingAnnoPart_2060_2081" id="SearchMappingAnnoPart_616_637" title="Referenced at line 92, 179, 183, 184">SearchMappingAnnoPart</a>
    <a href="#SearchMappingId_5415_5430" id="SearchMappingId_642_657" title="Referenced at line 171, 172">SearchMappingId</a> = <span class="keyword">string</span>
    <a href="#SearcherDef_2106_2117" id="SearcherDef_671_682" title="Referenced at line 93, 187, 188, 189; ../../../../trans/static-semantics/webdsl-search.stx line 50">SearcherDef</a>
    <a href="#SearcherPart_2143_2155" id="SearcherPart_687_699" title="Referenced at line 94, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197; ../../../../trans/static-semantics/webdsl-search.stx line 64">SearcherPart</a>
    <a href="#QueryDef_2177_2185" id="QueryDef_704_712" title="Referenced at line 95, 191, 198">QueryDef</a>
    <a href="#Offset_2205_2211" id="Offset_717_723" title="Referenced at line 96, 192, 199">Offset</a>
    <a href="#MaxResults_2235_2245" id="MaxResults_728_738" title="Referenced at line 97, 193, 200, 262">MaxResults</a>
    <a href="#SortBy_2265_2271" id="SortBy_743_749" title="Referenced at line 98, 194, 201">SortBy</a>
    <a href="#ConstraintFilter_2301_2317" id="ConstraintFilter_754_770" title="Referenced at line 99, 190, 202, 203">ConstraintFilter</a>
    <a href="#FacetDef_2339_2347" id="FacetDef_775_783" title="Referenced at line 100, 195, 204, 205">FacetDef</a>
    <a href="#SearchAttributes_2377_2393" id="SearchAttributes_788_804" title="Referenced at line 101, 196, 206">SearchAttributes</a>
    <a href="#NamespaceConstraint_2426_2445" id="NamespaceConstraint_809_828" title="Referenced at line 102, 197, 207, 261">NamespaceConstraint</a>
    <a href="#SearchAttribute_2474_2489" id="SearchAttribute_833_848" title="Referenced at line 103, 206, 208, 209, 210, 211">SearchAttribute</a>
    <a href="#FacetExp_2511_2519" id="FacetExp_853_861" title="Referenced at line 104, 204, 205, 212, 213, 278, 279">FacetExp</a>
    <a href="#FilterConstraint_2549_2565" id="FilterConstraint_866_882" title="Referenced at line 105, 202, 203, 214">FilterConstraint</a>
    <a href="#FieldsConstraint_2595_2611" id="FieldsConstraint_887_903" title="Referenced at line 106, 215, 260, 268">FieldsConstraint</a>
    <a href="#QuerySearchField_2641_2657" id="QuerySearchField_908_924" title="Referenced at line 107, 215, 216">QuerySearchField</a>
    <a href="#QueryConstraint_2686_2701" id="QueryConstraint_929_944" title="Referenced at line 108, 217, 220">QueryConstraint</a>
    <a href="#QueryBoost_2725_2735" id="QueryBoost_949_959" title="Referenced at line 109, 218, 264">QueryBoost</a>
    <a href="#MatchGroup_2759_2769" id="MatchGroup_964_974" title="Referenced at line 110, 198, 219, 219, 220, 221">MatchGroup</a>
    <a href="#QueryExp_2791_2799" id="QueryExp_979_987" title="Referenced at line 111, 217, 222, 223, 224, 225">QueryExp</a>
    <a href="#Slop_2817_2821" id="Slop_992_996" title="Referenced at line 112, 226, 270">Slop</a>
    <a href="#Range_2840_2845" id="Range_1001_1006" title="Referenced at line 113, 213, 223, 227, 228, 279">Range</a>
    <a href="#ExpOrWildCard_2872_2885" id="ExpOrWildCard_1011_1024" title="Referenced at line 114, 227, 227, 228, 228, 229, 230">ExpOrWildCard</a>
    <a href="#RangeOpen_2908_2917" id="RangeOpen_1029_1038" title="Referenced at line 115, 227, 228, 231, 233">RangeOpen</a>
    <a href="#RangeClose_2941_2951" id="RangeClose_1043_1053" title="Referenced at line 116, 227, 228, 232, 234">RangeClose</a>
    <a href="#BoolOp_2971_2977" id="BoolOp_1058_1064" title="Referenced at line 117, 235, 236, 266">BoolOp</a>
    <a href="#QueryTerm_3000_3009" id="QueryTerm_1069_1078" title="Referenced at line 118, 222, 237">QueryTerm</a>
    <a href="#SortExp_3030_3037" id="SortExp_1083_1090" title="Referenced at line 119, 201, 238">SortExp</a>
    <a href="#Direction_3060_3069" id="Direction_1095_1104" title="Referenced at line 120, 239, 240, 241, 242, 272">Direction</a>
    <a href="#Highlight_3092_3101" id="Highlight_1109_1118" title="Referenced at line 121, 243, 244, 245, 246">Highlight</a>
    <a href="#RetrievalExp_3127_3139" id="RetrievalExp_1123_1135" title="Referenced at line 122, 245, 246, 247, 248, 249, 250, 251, 254, 277; ../../../../trans/static-semantics/webdsl-search.stx line 23">RetrievalExp</a>
    <a href="#SuggestType_3164_3175" id="SuggestType_1140_1151" title="Referenced at line 123, 251, 252, 253">SuggestType</a>
    <a href="#SearchField_3200_3211" id="SearchField_1156_1167" title="Referenced at line 124, 212, 213, 214, 216, 238, 245, 246, 248, 255, 256, 277, 278, 279">SearchField</a>
    <a href="#PlainField_3235_3245" id="PlainField_1172_1182" title="Referenced at line 125, 256, 257, 258, 258">PlainField</a>
    <a href="#SuggestionPart_3273_3287" id="SuggestionPart_1187_1201" title="Referenced at line 126, 251, 259, 260, 261, 262">SuggestionPart</a>
    <a href="#OptQueryBoost_3314_3327" id="OptQueryBoost_1206_1219" title="Referenced at line 127, 216, 263, 264">OptQueryBoost</a>
    <a href="#OptBoolOp_3350_3359" id="OptBoolOp_1224_1233" title="Referenced at line 128, 219, 222, 223, 225, 265, 266">OptBoolOp</a>
    <a href="#OptFieldsConstraint_3392_3411" id="OptFieldsConstraint_1238_1257" title="Referenced at line 129, 220, 267, 268">OptFieldsConstraint</a>
    <a href="#OptSlop_3432_3439" id="OptSlop_1262_1269" title="Referenced at line 130, 222, 225, 269, 270">OptSlop</a>
    <a href="#OptDirection_3465_3477" id="OptDirection_1274_1286" title="Referenced at line 131, 238, 271, 272">OptDirection</a>
    <a href="#GroupDef_3499_3507" id="GroupDef_1291_1299" title="Referenced at line 132, 224, 225">GroupDef</a>

  <span class="keyword">constructors</span>
    <span id="FullTextAnalyzerBody-Plhdr_1320_1346" title="Not referenced locally, nor via imports">FullTextAnalyzerBody-Plhdr</span> : <a href="#FullTextAnalyzerBody_293_313" id="FullTextAnalyzerBody_1349_1369" title="Defined at line 16">FullTextAnalyzerBody</a>
    <span id="FullTextAnalyzerBodyDef-Plhdr_1374_1403" title="Not referenced locally, nor via imports">FullTextAnalyzerBodyDef-Plhdr</span> : <a href="#FullTextAnalyzerBodyDef_318_341" id="FullTextAnalyzerBodyDef_1406_1429" title="Defined at line 17">FullTextAnalyzerBodyDef</a>
    <span id="CharFilter-Plhdr_1434_1450" title="Not referenced locally, nor via imports">CharFilter-Plhdr</span> : <a href="#CharFilter_346_356" id="CharFilter_1453_1463" title="Defined at line 18">CharFilter</a>
    <span id="Tokenizer-Plhdr_1468_1483" title="Not referenced locally, nor via imports">Tokenizer-Plhdr</span> : <a href="#Tokenizer_361_370" id="Tokenizer_1486_1495" title="Defined at line 19">Tokenizer</a>
    <span id="TokenFilter-Plhdr_1500_1517" title="Not referenced locally, nor via imports">TokenFilter-Plhdr</span> : <a href="#TokenFilter_375_386" id="TokenFilter_1520_1531" title="Defined at line 20">TokenFilter</a>
    <span id="AnalyzerArgument-Plhdr_1536_1558" title="Not referenced locally, nor via imports">AnalyzerArgument-Plhdr</span> : <a href="#AnalyzerArgument_391_407" id="AnalyzerArgument_1561_1577" title="Defined at line 21">AnalyzerArgument</a>
    <span id="OptDefaultAnalyzer-Plhdr_1582_1606" title="Not referenced locally, nor via imports">OptDefaultAnalyzer-Plhdr</span> : <a href="#OptDefaultAnalyzer_412_430" id="OptDefaultAnalyzer_1609_1627" title="Defined at line 22">OptDefaultAnalyzer</a>
    <span id="OptAnalyzerArguments-Plhdr_1632_1658" title="Not referenced locally, nor via imports">OptAnalyzerArguments-Plhdr</span> : <a href="#OptAnalyzerArguments_435_455" id="OptAnalyzerArguments_1661_1681" title="Defined at line 23">OptAnalyzerArguments</a>
    <span id="SearchableAnno-Plhdr_1686_1706" title="Not referenced locally, nor via imports">SearchableAnno-Plhdr</span> : <a href="#SearchableAnno_460_474" id="SearchableAnno_1709_1723" title="Defined at line 24">SearchableAnno</a>
    <span id="SearchNamespaceAnno-Plhdr_1728_1753" title="Not referenced locally, nor via imports">SearchNamespaceAnno-Plhdr</span> : <a href="#SearchNamespaceAnno_479_498" id="SearchNamespaceAnno_1756_1775" title="Defined at line 25">SearchNamespaceAnno</a>
    <span id="SA-Argument-Plhdr_1780_1797" title="Not referenced locally, nor via imports">SA-Argument-Plhdr</span> : <a href="#SA-Argument_503_514" id="SA-Argument_1800_1811" title="Defined at line 26">SA-Argument</a>
    <span id="OptSAArguments-Plhdr_1816_1836" title="Not referenced locally, nor via imports">OptSAArguments-Plhdr</span> : <a href="#OptSAArguments_519_533" id="OptSAArguments_1839_1853" title="Defined at line 27">OptSAArguments</a>
    <span id="SA-Key-Plhdr_1858_1870" title="Not referenced locally, nor via imports">SA-Key-Plhdr</span> : <a href="#SA-Key_538_544" id="SA-Key_1873_1879" title="Defined at line 28">SA-Key</a>
    <span id="SearchMappingContent-Plhdr_1884_1910" title="Not referenced locally, nor via imports">SearchMappingContent-Plhdr</span> : <a href="#SearchMappingContent_549_569" id="SearchMappingContent_1913_1933" title="Defined at line 29">SearchMappingContent</a>
    <span id="MappingPart-Plhdr_1938_1955" title="Not referenced locally, nor via imports">MappingPart-Plhdr</span> : <a href="#MappingPart_574_585" id="MappingPart_1958_1969" title="Defined at line 30">MappingPart</a>
    <span id="OptDefaultSearchField-Plhdr_1974_2001" title="Not referenced locally, nor via imports">OptDefaultSearchField-Plhdr</span> : <a href="#OptDefaultSearchField_590_611" id="OptDefaultSearchField_2004_2025" title="Defined at line 31">OptDefaultSearchField</a>
    <span id="SearchMappingAnnoPart-Plhdr_2030_2057" title="Not referenced locally, nor via imports">SearchMappingAnnoPart-Plhdr</span> : <a href="#SearchMappingAnnoPart_616_637" id="SearchMappingAnnoPart_2060_2081" title="Defined at line 32">SearchMappingAnnoPart</a>
    <span id="SearcherDef-Plhdr_2086_2103" title="Not referenced locally, nor via imports">SearcherDef-Plhdr</span> : <a href="#SearcherDef_671_682" id="SearcherDef_2106_2117" title="Defined at line 34">SearcherDef</a>
    <span id="SearcherPart-Plhdr_2122_2140" title="Not referenced locally, nor via imports">SearcherPart-Plhdr</span> : <a href="#SearcherPart_687_699" id="SearcherPart_2143_2155" title="Defined at line 35">SearcherPart</a>
    <span id="QueryDef-Plhdr_2160_2174" title="Not referenced locally, nor via imports">QueryDef-Plhdr</span> : <a href="#QueryDef_704_712" id="QueryDef_2177_2185" title="Defined at line 36">QueryDef</a>
    <span id="Offset-Plhdr_2190_2202" title="Not referenced locally, nor via imports">Offset-Plhdr</span> : <a href="#Offset_717_723" id="Offset_2205_2211" title="Defined at line 37">Offset</a>
    <span id="MaxResults-Plhdr_2216_2232" title="Not referenced locally, nor via imports">MaxResults-Plhdr</span> : <a href="#MaxResults_728_738" id="MaxResults_2235_2245" title="Defined at line 38">MaxResults</a>
    <span id="SortBy-Plhdr_2250_2262" title="Not referenced locally, nor via imports">SortBy-Plhdr</span> : <a href="#SortBy_743_749" id="SortBy_2265_2271" title="Defined at line 39">SortBy</a>
    <span id="ConstraintFilter-Plhdr_2276_2298" title="Not referenced locally, nor via imports">ConstraintFilter-Plhdr</span> : <a href="#ConstraintFilter_754_770" id="ConstraintFilter_2301_2317" title="Defined at line 40">ConstraintFilter</a>
    <span id="FacetDef-Plhdr_2322_2336" title="Not referenced locally, nor via imports">FacetDef-Plhdr</span> : <a href="#FacetDef_775_783" id="FacetDef_2339_2347" title="Defined at line 41">FacetDef</a>
    <span id="SearchAttributes-Plhdr_2352_2374" title="Not referenced locally, nor via imports">SearchAttributes-Plhdr</span> : <a href="#SearchAttributes_788_804" id="SearchAttributes_2377_2393" title="Defined at line 42">SearchAttributes</a>
    <span id="NamespaceConstraint-Plhdr_2398_2423" title="Not referenced locally, nor via imports">NamespaceConstraint-Plhdr</span> : <a href="#NamespaceConstraint_809_828" id="NamespaceConstraint_2426_2445" title="Defined at line 43">NamespaceConstraint</a>
    <span id="SearchAttribute-Plhdr_2450_2471" title="Not referenced locally, nor via imports">SearchAttribute-Plhdr</span> : <a href="#SearchAttribute_833_848" id="SearchAttribute_2474_2489" title="Defined at line 44">SearchAttribute</a>
    <span id="FacetExp-Plhdr_2494_2508" title="Not referenced locally, nor via imports">FacetExp-Plhdr</span> : <a href="#FacetExp_853_861" id="FacetExp_2511_2519" title="Defined at line 45">FacetExp</a>
    <span id="FilterConstraint-Plhdr_2524_2546" title="Not referenced locally, nor via imports">FilterConstraint-Plhdr</span> : <a href="#FilterConstraint_866_882" id="FilterConstraint_2549_2565" title="Defined at line 46">FilterConstraint</a>
    <span id="FieldsConstraint-Plhdr_2570_2592" title="Not referenced locally, nor via imports">FieldsConstraint-Plhdr</span> : <a href="#FieldsConstraint_887_903" id="FieldsConstraint_2595_2611" title="Defined at line 47">FieldsConstraint</a>
    <span id="QuerySearchField-Plhdr_2616_2638" title="Not referenced locally, nor via imports">QuerySearchField-Plhdr</span> : <a href="#QuerySearchField_908_924" id="QuerySearchField_2641_2657" title="Defined at line 48">QuerySearchField</a>
    <span id="QueryConstraint-Plhdr_2662_2683" title="Not referenced locally, nor via imports">QueryConstraint-Plhdr</span> : <a href="#QueryConstraint_929_944" id="QueryConstraint_2686_2701" title="Defined at line 49">QueryConstraint</a>
    <span id="QueryBoost-Plhdr_2706_2722" title="Not referenced locally, nor via imports">QueryBoost-Plhdr</span> : <a href="#QueryBoost_949_959" id="QueryBoost_2725_2735" title="Defined at line 50">QueryBoost</a>
    <span id="MatchGroup-Plhdr_2740_2756" title="Not referenced locally, nor via imports">MatchGroup-Plhdr</span> : <a href="#MatchGroup_964_974" id="MatchGroup_2759_2769" title="Defined at line 51">MatchGroup</a>
    <span id="QueryExp-Plhdr_2774_2788" title="Not referenced locally, nor via imports">QueryExp-Plhdr</span> : <a href="#QueryExp_979_987" id="QueryExp_2791_2799" title="Defined at line 52">QueryExp</a>
    <span id="Slop-Plhdr_2804_2814" title="Not referenced locally, nor via imports">Slop-Plhdr</span> : <a href="#Slop_992_996" id="Slop_2817_2821" title="Defined at line 53">Slop</a>
    <span id="Range-Plhdr_2826_2837" title="Not referenced locally, nor via imports">Range-Plhdr</span> : <a href="#Range_1001_1006" id="Range_2840_2845" title="Defined at line 54">Range</a>
    <span id="ExpOrWildCard-Plhdr_2850_2869" title="Not referenced locally, nor via imports">ExpOrWildCard-Plhdr</span> : <a href="#ExpOrWildCard_1011_1024" id="ExpOrWildCard_2872_2885" title="Defined at line 55">ExpOrWildCard</a>
    <span id="RangeOpen-Plhdr_2890_2905" title="Not referenced locally, nor via imports">RangeOpen-Plhdr</span> : <a href="#RangeOpen_1029_1038" id="RangeOpen_2908_2917" title="Defined at line 56">RangeOpen</a>
    <span id="RangeClose-Plhdr_2922_2938" title="Not referenced locally, nor via imports">RangeClose-Plhdr</span> : <a href="#RangeClose_1043_1053" id="RangeClose_2941_2951" title="Defined at line 57">RangeClose</a>
    <span id="BoolOp-Plhdr_2956_2968" title="Not referenced locally, nor via imports">BoolOp-Plhdr</span> : <a href="#BoolOp_1058_1064" id="BoolOp_2971_2977" title="Defined at line 58">BoolOp</a>
    <span id="QueryTerm-Plhdr_2982_2997" title="Not referenced locally, nor via imports">QueryTerm-Plhdr</span> : <a href="#QueryTerm_1069_1078" id="QueryTerm_3000_3009" title="Defined at line 59">QueryTerm</a>
    <span id="SortExp-Plhdr_3014_3027" title="Not referenced locally, nor via imports">SortExp-Plhdr</span> : <a href="#SortExp_1083_1090" id="SortExp_3030_3037" title="Defined at line 60">SortExp</a>
    <span id="Direction-Plhdr_3042_3057" title="Not referenced locally, nor via imports">Direction-Plhdr</span> : <a href="#Direction_1095_1104" id="Direction_3060_3069" title="Defined at line 61">Direction</a>
    <span id="Highlight-Plhdr_3074_3089" title="Not referenced locally, nor via imports">Highlight-Plhdr</span> : <a href="#Highlight_1109_1118" id="Highlight_3092_3101" title="Defined at line 62">Highlight</a>
    <span id="RetrievalExp-Plhdr_3106_3124" title="Not referenced locally, nor via imports">RetrievalExp-Plhdr</span> : <a href="#RetrievalExp_1123_1135" id="RetrievalExp_3127_3139" title="Defined at line 63">RetrievalExp</a>
    <span id="SuggestType-Plhdr_3144_3161" title="Not referenced locally, nor via imports">SuggestType-Plhdr</span> : <a href="#SuggestType_1140_1151" id="SuggestType_3164_3175" title="Defined at line 64">SuggestType</a>
    <span id="SearchField-Plhdr_3180_3197" title="Not referenced locally, nor via imports">SearchField-Plhdr</span> : <a href="#SearchField_1156_1167" id="SearchField_3200_3211" title="Defined at line 65">SearchField</a>
    <span id="PlainField-Plhdr_3216_3232" title="Not referenced locally, nor via imports">PlainField-Plhdr</span> : <a href="#PlainField_1172_1182" id="PlainField_3235_3245" title="Defined at line 66">PlainField</a>
    <span id="SuggestionPart-Plhdr_3250_3270" title="Not referenced locally, nor via imports">SuggestionPart-Plhdr</span> : <a href="#SuggestionPart_1187_1201" id="SuggestionPart_3273_3287" title="Defined at line 67">SuggestionPart</a>
    <span id="OptQueryBoost-Plhdr_3292_3311" title="Not referenced locally, nor via imports">OptQueryBoost-Plhdr</span> : <a href="#OptQueryBoost_1206_1219" id="OptQueryBoost_3314_3327" title="Defined at line 68">OptQueryBoost</a>
    <span id="OptBoolOp-Plhdr_3332_3347" title="Not referenced locally, nor via imports">OptBoolOp-Plhdr</span> : <a href="#OptBoolOp_1224_1233" id="OptBoolOp_3350_3359" title="Defined at line 69">OptBoolOp</a>
    <span id="OptFieldsConstraint-Plhdr_3364_3389" title="Not referenced locally, nor via imports">OptFieldsConstraint-Plhdr</span> : <a href="#OptFieldsConstraint_1238_1257" id="OptFieldsConstraint_3392_3411" title="Defined at line 70">OptFieldsConstraint</a>
    <span id="OptSlop-Plhdr_3416_3429" title="Not referenced locally, nor via imports">OptSlop-Plhdr</span> : <a href="#OptSlop_1262_1269" id="OptSlop_3432_3439" title="Defined at line 71">OptSlop</a>
    <span id="OptDirection-Plhdr_3444_3462" title="Not referenced locally, nor via imports">OptDirection-Plhdr</span> : <a href="#OptDirection_1274_1286" id="OptDirection_3465_3477" title="Defined at line 72">OptDirection</a>
    <span id="GroupDef-Plhdr_3482_3496" title="Not referenced locally, nor via imports">GroupDef-Plhdr</span> : <a href="#GroupDef_1291_1299" id="GroupDef_3499_3507" title="Defined at line 73">GroupDef</a>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <a href="../../../../trans/static-semantics/webdsl-search.stx#FullTextAnalyzer_229_245" id="FullTextAnalyzer_3539_3555" title="Referenced at ../../../../trans/static-semantics/webdsl-search.stx line 16">FullTextAnalyzer</a> : <a href="#OptDefaultAnalyzer_412_430" id="OptDefaultAnalyzer_3558_3576" title="Defined at line 22">OptDefaultAnalyzer</a> * <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_3579_3581" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="#FullTextAnalyzerBody_293_313" id="FullTextAnalyzerBody_3584_3604" title="Defined at line 16">FullTextAnalyzerBody</a> -&gt; <a href="../WebDSL-Core-sig.stx#Definition_310_320" id="Definition_3608_3618" title="Defined at ../WebDSL-Core-sig.stx line 20">Definition</a>
    <span id="NonDefaultAnalyzer_3623_3641" title="Not referenced locally, nor via imports">NonDefaultAnalyzer</span> : <a href="#OptDefaultAnalyzer_412_430" id="OptDefaultAnalyzer_3644_3662" title="Defined at line 22">OptDefaultAnalyzer</a>
    <span id="DefaultAnalyzer_3667_3682" title="Not referenced locally, nor via imports">DefaultAnalyzer</span> : <a href="#OptDefaultAnalyzer_412_430" id="OptDefaultAnalyzer_3685_3703" title="Defined at line 22">OptDefaultAnalyzer</a>
    <span id="DefaultBuiltInAnalyzer_3708_3730" title="Not referenced locally, nor via imports">DefaultBuiltInAnalyzer</span> : <a href="#OptDefaultAnalyzer_412_430" id="OptDefaultAnalyzer_3733_3751" title="Defined at line 22">OptDefaultAnalyzer</a>
    <span id="FullTextAnalyzerBody_3756_3776" title="Not referenced locally, nor via imports">FullTextAnalyzerBody</span> : <a href="#FullTextAnalyzerBodyDef_318_341" id="FullTextAnalyzerBodyDef_3779_3802" title="Defined at line 17">FullTextAnalyzerBodyDef</a> -&gt; <a href="#FullTextAnalyzerBody_293_313" id="FullTextAnalyzerBody_3806_3826" title="Defined at line 16">FullTextAnalyzerBody</a>
    <span id="DualFullTextAnalyzerBody_3831_3855" title="Not referenced locally, nor via imports">DualFullTextAnalyzerBody</span> : <a href="#FullTextAnalyzerBodyDef_318_341" id="FullTextAnalyzerBodyDef_3858_3881" title="Defined at line 17">FullTextAnalyzerBodyDef</a> * <a href="#FullTextAnalyzerBodyDef_318_341" id="FullTextAnalyzerBodyDef_3884_3907" title="Defined at line 17">FullTextAnalyzerBodyDef</a> -&gt; <a href="#FullTextAnalyzerBody_293_313" id="FullTextAnalyzerBody_3911_3931" title="Defined at line 16">FullTextAnalyzerBody</a>
    <span id="FullTextAnalyzerBodyDef_3936_3959" title="Not referenced locally, nor via imports">FullTextAnalyzerBodyDef</span> : <span class="keyword">list</span>(<a href="#CharFilter_346_356" id="CharFilter_3967_3977" title="Defined at line 18">CharFilter</a>) * <a href="#Tokenizer_361_370" id="Tokenizer_3981_3990" title="Defined at line 19">Tokenizer</a> * <span class="keyword">list</span>(<a href="#TokenFilter_375_386" id="TokenFilter_3998_4009" title="Defined at line 20">TokenFilter</a>) -&gt; <a href="#FullTextAnalyzerBodyDef_318_341" id="FullTextAnalyzerBodyDef_4014_4037" title="Defined at line 17">FullTextAnalyzerBodyDef</a>
    <span id="CharFilter_4042_4052" title="Not referenced locally, nor via imports">CharFilter</span> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_4055_4057" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="#OptAnalyzerArguments_435_455" id="OptAnalyzerArguments_4060_4080" title="Defined at line 23">OptAnalyzerArguments</a> -&gt; <a href="#CharFilter_346_356" id="CharFilter_4084_4094" title="Defined at line 18">CharFilter</a>
    <span id="Tokenizer_4099_4108" title="Not referenced locally, nor via imports">Tokenizer</span> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_4111_4113" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="#OptAnalyzerArguments_435_455" id="OptAnalyzerArguments_4116_4136" title="Defined at line 23">OptAnalyzerArguments</a> -&gt; <a href="#Tokenizer_361_370" id="Tokenizer_4140_4149" title="Defined at line 19">Tokenizer</a>
    <span id="TokenFilter_4154_4165" title="Not referenced locally, nor via imports">TokenFilter</span> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_4168_4170" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="#OptAnalyzerArguments_435_455" id="OptAnalyzerArguments_4173_4193" title="Defined at line 23">OptAnalyzerArguments</a> -&gt; <a href="#TokenFilter_375_386" id="TokenFilter_4197_4208" title="Defined at line 20">TokenFilter</a>
    <span id="OptAnalyzerArgumentsNone_4213_4237" title="Not referenced locally, nor via imports">OptAnalyzerArgumentsNone</span> : <a href="#OptAnalyzerArguments_435_455" id="OptAnalyzerArguments_4240_4260" title="Defined at line 23">OptAnalyzerArguments</a>
    <span id="AnalyzerArguments_4265_4282" title="Not referenced locally, nor via imports">AnalyzerArguments</span> : <span class="keyword">list</span>(<a href="#AnalyzerArgument_391_407" id="AnalyzerArgument_4290_4306" title="Defined at line 21">AnalyzerArgument</a>) -&gt; <a href="#OptAnalyzerArguments_435_455" id="OptAnalyzerArguments_4311_4331" title="Defined at line 23">OptAnalyzerArguments</a>
    <span id="AnalyzerArgument_4336_4352" title="Not referenced locally, nor via imports">AnalyzerArgument</span> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_4355_4357" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="../WebDSL-Lexical-sig.stx#String_478_484" id="String_4360_4366" title="Defined at ../WebDSL-Lexical-sig.stx line 28">String</a> -&gt; <a href="#AnalyzerArgument_391_407" id="AnalyzerArgument_4370_4386" title="Defined at line 21">AnalyzerArgument</a>
    <span id="SearchableAnno_4391_4405" title="Not referenced locally, nor via imports">SearchableAnno</span> : <a href="#OptSAArguments_519_533" id="OptSAArguments_4408_4422" title="Defined at line 27">OptSAArguments</a> -&gt; <a href="#SearchableAnno_460_474" id="SearchableAnno_4426_4440" title="Defined at line 24">SearchableAnno</a>
    <span id="SearchNamespaceAnno_4445_4464" title="Not referenced locally, nor via imports">SearchNamespaceAnno</span> : <a href="#SearchNamespaceAnno_479_498" id="SearchNamespaceAnno_4467_4486" title="Defined at line 25">SearchNamespaceAnno</a>
    <a href="../../../../trans/static-semantics/entities/annotations.stx#SearchableAnnoBoost_3640_3659" id="SearchableAnnoBoost_4491_4510" title="Referenced at ../../../../trans/static-semantics/entities/annotations.stx line 87">SearchableAnnoBoost</a> : <a href="#SearchableAnno_460_474" id="SearchableAnno_4513_4527" title="Defined at line 24">SearchableAnno</a> * <a href="../WebDSL-Lexical-sig.stx#Float_381_386" id="Float_4530_4535" title="Defined at ../WebDSL-Lexical-sig.stx line 24">Float</a> -&gt; <a href="../WebDSL-DataModel-sig.stx#Annotation_220_230" id="Annotation_4539_4549" title="Defined at ../WebDSL-DataModel-sig.stx line 14">Annotation</a>
    <a href="../../../../trans/static-semantics/entities/annotations.stx#SearchableAnno2Annotation_3779_3804" id="SearchableAnno2Annotation_4554_4579" title="Referenced at ../../../../trans/static-semantics/entities/annotations.stx line 88">SearchableAnno2Annotation</a> : <a href="#SearchableAnno_460_474" id="SearchableAnno_4582_4596" title="Defined at line 24">SearchableAnno</a> -&gt; <a href="../WebDSL-DataModel-sig.stx#Annotation_220_230" id="Annotation_4600_4610" title="Defined at ../WebDSL-DataModel-sig.stx line 14">Annotation</a>
    <a href="../../../../trans/static-semantics/entities/annotations.stx#SearchNamespaceAnno2Annotation_3921_3951" id="SearchNamespaceAnno2Annotation_4615_4645" title="Referenced at ../../../../trans/static-semantics/entities/annotations.stx line 89">SearchNamespaceAnno2Annotation</a> : <a href="#SearchNamespaceAnno_479_498" id="SearchNamespaceAnno_4648_4667" title="Defined at line 25">SearchNamespaceAnno</a> -&gt; <a href="../WebDSL-DataModel-sig.stx#Annotation_220_230" id="Annotation_4671_4681" title="Defined at ../WebDSL-DataModel-sig.stx line 14">Annotation</a>
    <span id="OptSAArgumentsNone_4686_4704" title="Not referenced locally, nor via imports">OptSAArgumentsNone</span> : <a href="#OptSAArguments_519_533" id="OptSAArguments_4707_4721" title="Defined at line 27">OptSAArguments</a>
    <span id="OptSAArguments_4726_4740" title="Not referenced locally, nor via imports">OptSAArguments</span> : <span class="keyword">list</span>(<a href="#SA-Argument_503_514" id="SA-Argument_4748_4759" title="Defined at line 26">SA-Argument</a>) -&gt; <a href="#OptSAArguments_519_533" id="OptSAArguments_4764_4778" title="Defined at line 27">OptSAArguments</a>
    <span id="SA-Argument_4783_4794" title="Not referenced locally, nor via imports">SA-Argument</span> : <a href="#SA-Key_538_544" id="SA-Key_4797_4803" title="Defined at line 28">SA-Key</a> * <a href="#SA-Value_195_203" id="SA-Value_4806_4814" title="Defined at line 12">SA-Value</a> -&gt; <a href="#SA-Argument_503_514" id="SA-Argument_4818_4829" title="Defined at line 26">SA-Argument</a>
    <span id="Autocomplete-Argument_4834_4855" title="Not referenced locally, nor via imports">Autocomplete-Argument</span> : <a href="#SA-Argument_503_514" id="SA-Argument_4858_4869" title="Defined at line 26">SA-Argument</a>
    <span id="Spellcheck-Argument_4874_4893" title="Not referenced locally, nor via imports">Spellcheck-Argument</span> : <a href="#SA-Argument_503_514" id="SA-Argument_4896_4907" title="Defined at line 26">SA-Argument</a>
    <span id="Numeric-Argument_4912_4928" title="Not referenced locally, nor via imports">Numeric-Argument</span> : <a href="#SA-Argument_503_514" id="SA-Argument_4931_4942" title="Defined at line 26">SA-Argument</a>
    <span id="DefaultSF-Argument_4947_4965" title="Not referenced locally, nor via imports">DefaultSF-Argument</span> : <a href="#SA-Argument_503_514" id="SA-Argument_4968_4979" title="Defined at line 26">SA-Argument</a>
    <span id="SAKeyAnalyzer_4984_4997" title="Not referenced locally, nor via imports">SAKeyAnalyzer</span> : <a href="#SA-Key_538_544" id="SA-Key_5000_5006" title="Defined at line 28">SA-Key</a>
    <span id="SAKeyName_5011_5020" title="Not referenced locally, nor via imports">SAKeyName</span> : <a href="#SA-Key_538_544" id="SA-Key_5023_5029" title="Defined at line 28">SA-Key</a>
    <span id="SAKeyBoost_5034_5044" title="Not referenced locally, nor via imports">SAKeyBoost</span> : <a href="#SA-Key_538_544" id="SA-Key_5047_5053" title="Defined at line 28">SA-Key</a>
    <span id="SAKeySubclass_5058_5071" title="Not referenced locally, nor via imports">SAKeySubclass</span> : <a href="#SA-Key_538_544" id="SA-Key_5074_5080" title="Defined at line 28">SA-Key</a>
    <span id="SAKeyDepth_5085_5095" title="Not referenced locally, nor via imports">SAKeyDepth</span> : <a href="#SA-Key_538_544" id="SA-Key_5098_5104" title="Defined at line 28">SA-Key</a>
    <a href="../../../../trans/static-semantics/webdsl-search.stx#SearchMapping_337_350" id="SearchMapping_5109_5122" title="Referenced at ../../../../trans/static-semantics/webdsl-search.stx line 17">SearchMapping</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_5125_5127" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <span class="keyword">list</span>(<a href="#SearchMappingContent_549_569" id="SearchMappingContent_5135_5155" title="Defined at line 29">SearchMappingContent</a>) -&gt; <a href="../WebDSL-Core-sig.stx#Definition_310_320" id="Definition_5160_5170" title="Defined at ../WebDSL-Core-sig.stx line 20">Definition</a>
    <span id="SearchMappingEmbedded_5175_5196" title="Not referenced locally, nor via imports">SearchMappingEmbedded</span> : <span class="keyword">list</span>(<a href="#SearchMappingContent_549_569" id="SearchMappingContent_5204_5224" title="Defined at line 29">SearchMappingContent</a>) -&gt; <a href="../WebDSL-DataModel-sig.stx#EntityBodyDeclaration_164_185" id="EntityBodyDeclaration_5229_5250" title="Defined at ../WebDSL-DataModel-sig.stx line 11">EntityBodyDeclaration</a>
    <span id="SearchNamespaceMapping_5255_5277" title="Not referenced locally, nor via imports">SearchNamespaceMapping</span> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_5280_5282" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> -&gt; <a href="#SearchMappingContent_549_569" id="SearchMappingContent_5286_5306" title="Defined at line 29">SearchMappingContent</a>
    <span id="SearchNamespaceMappingAlt_5311_5336" title="Not referenced locally, nor via imports">SearchNamespaceMappingAlt</span> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_5339_5341" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> -&gt; <a href="#SearchMappingContent_549_569" id="SearchMappingContent_5345_5365" title="Defined at line 29">SearchMappingContent</a>
    <span id="SearchFieldMapping_5370_5388" title="Not referenced locally, nor via imports">SearchFieldMapping</span> : <a href="#OptDefaultSearchField_590_611" id="OptDefaultSearchField_5391_5412" title="Defined at line 31">OptDefaultSearchField</a> * <a href="#SearchMappingId_642_657" id="SearchMappingId_5415_5430" title="Defined at line 33">SearchMappingId</a> * <span class="keyword">list</span>(<a href="#MappingPart_574_585" id="MappingPart_5438_5449" title="Defined at line 30">MappingPart</a>) -&gt; <a href="#SearchMappingContent_549_569" id="SearchMappingContent_5454_5474" title="Defined at line 29">SearchMappingContent</a>
    <span id="SearchFieldMappingAlt_5479_5500" title="Not referenced locally, nor via imports">SearchFieldMappingAlt</span> : <a href="#OptDefaultSearchField_590_611" id="OptDefaultSearchField_5503_5524" title="Defined at line 31">OptDefaultSearchField</a> * <a href="#SearchMappingId_642_657" id="SearchMappingId_5527_5542" title="Defined at line 33">SearchMappingId</a> * <span class="keyword">list</span>(<a href="#MappingPart_574_585" id="MappingPart_5550_5561" title="Defined at line 30">MappingPart</a>) -&gt; <a href="#SearchMappingContent_549_569" id="SearchMappingContent_5566_5586" title="Defined at line 29">SearchMappingContent</a>
    <span id="SearchFieldMappingIndex_5591_5614" title="Not referenced locally, nor via imports">SearchFieldMappingIndex</span> : <a href="#OptDefaultSearchField_590_611" id="OptDefaultSearchField_5617_5638" title="Defined at line 31">OptDefaultSearchField</a> * <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_5641_5643" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <span class="keyword">list</span>(<a href="#MappingPart_574_585" id="MappingPart_5651_5662" title="Defined at line 30">MappingPart</a>) -&gt; <a href="#SearchMappingContent_549_569" id="SearchMappingContent_5667_5687" title="Defined at line 29">SearchMappingContent</a>
    <span id="SearchFieldMappingIndexAlt_5692_5718" title="Not referenced locally, nor via imports">SearchFieldMappingIndexAlt</span> : <a href="#OptDefaultSearchField_590_611" id="OptDefaultSearchField_5721_5742" title="Defined at line 31">OptDefaultSearchField</a> * <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_5745_5747" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <span class="keyword">list</span>(<a href="#MappingPart_574_585" id="MappingPart_5755_5766" title="Defined at line 30">MappingPart</a>) -&gt; <a href="#SearchMappingContent_549_569" id="SearchMappingContent_5771_5791" title="Defined at line 29">SearchMappingContent</a>
    <span id="FieldName_5796_5805" title="Not referenced locally, nor via imports">FieldName</span> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_5808_5810" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> -&gt; <a href="#MappingPart_574_585" id="MappingPart_5814_5825" title="Defined at line 30">MappingPart</a>
    <span id="AnalyzerName_5830_5842" title="Not referenced locally, nor via imports">AnalyzerName</span> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_5845_5847" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> -&gt; <a href="#MappingPart_574_585" id="MappingPart_5851_5862" title="Defined at line 30">MappingPart</a>
    <span id="BoostAlt_5867_5875" title="Not referenced locally, nor via imports">BoostAlt</span> : <a href="../WebDSL-Lexical-sig.stx#Float_381_386" id="Float_5878_5883" title="Defined at ../WebDSL-Lexical-sig.stx line 24">Float</a> -&gt; <a href="#MappingPart_574_585" id="MappingPart_5887_5898" title="Defined at line 30">MappingPart</a>
    <span id="TargetEntity_5903_5915" title="Not referenced locally, nor via imports">TargetEntity</span> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_5918_5920" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> -&gt; <a href="#MappingPart_574_585" id="MappingPart_5924_5935" title="Defined at line 30">MappingPart</a>
    <span id="SearchMappingAnno_5940_5957" title="Not referenced locally, nor via imports">SearchMappingAnno</span> : <span class="keyword">list</span>(<a href="#SearchMappingAnnoPart_616_637" id="SearchMappingAnnoPart_5965_5986" title="Defined at line 32">SearchMappingAnnoPart</a>) -&gt; <a href="#MappingPart_574_585" id="MappingPart_5991_6002" title="Defined at line 30">MappingPart</a>
    <span id="EmbeddedDepth_6007_6020" title="Not referenced locally, nor via imports">EmbeddedDepth</span> : <a href="../WebDSL-Lexical-sig.stx#Int_346_349" id="Int_6023_6026" title="Defined at ../WebDSL-Lexical-sig.stx line 22">Int</a> -&gt; <a href="#MappingPart_574_585" id="MappingPart_6030_6041" title="Defined at line 30">MappingPart</a>
    <span id="EmbeddedDepthAlt_6046_6062" title="Not referenced locally, nor via imports">EmbeddedDepthAlt</span> : <a href="../WebDSL-Lexical-sig.stx#Int_346_349" id="Int_6065_6068" title="Defined at ../WebDSL-Lexical-sig.stx line 22">Int</a> -&gt; <a href="#MappingPart_574_585" id="MappingPart_6072_6083" title="Defined at line 30">MappingPart</a>
    <span id="Boost_6088_6093" title="Not referenced locally, nor via imports">Boost</span> : <a href="../WebDSL-Lexical-sig.stx#Float_381_386" id="Float_6096_6101" title="Defined at ../WebDSL-Lexical-sig.stx line 24">Float</a> -&gt; <a href="#MappingPart_574_585" id="MappingPart_6105_6116" title="Defined at line 30">MappingPart</a>
    <span id="SearchMappingAnnoSpellCheck_6121_6148" title="Not referenced locally, nor via imports">SearchMappingAnnoSpellCheck</span> : <a href="#SearchMappingAnnoPart_616_637" id="SearchMappingAnnoPart_6151_6172" title="Defined at line 32">SearchMappingAnnoPart</a>
    <span id="SearchMappingAnnoAutoComplete_6177_6206" title="Not referenced locally, nor via imports">SearchMappingAnnoAutoComplete</span> : <a href="#SearchMappingAnnoPart_616_637" id="SearchMappingAnnoPart_6209_6230" title="Defined at line 32">SearchMappingAnnoPart</a>
    <span id="OptDefaultSearchFieldNone_6235_6260" title="Not referenced locally, nor via imports">OptDefaultSearchFieldNone</span> : <a href="#OptDefaultSearchField_590_611" id="OptDefaultSearchField_6263_6284" title="Defined at line 31">OptDefaultSearchField</a>
    <span id="DefaultSearchField_6289_6307" title="Not referenced locally, nor via imports">DefaultSearchField</span> : <a href="#OptDefaultSearchField_590_611" id="OptDefaultSearchField_6310_6331" title="Defined at line 31">OptDefaultSearchField</a>
    <a href="../../../../trans/static-semantics/webdsl-search.stx#SearcherDef_1665_1676" id="SearcherDef_6336_6347" title="Referenced at ../../../../trans/static-semantics/webdsl-search.stx line 48">SearcherDef</a> : <a href="#SearcherDef_671_682" id="SearcherDef_6350_6361" title="Defined at line 34">SearcherDef</a> -&gt; <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_6365_6368" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a>
    <a href="../../../../trans/static-semantics/webdsl-search.stx#SearcherInit_1786_1798" id="SearcherInit_6373_6385" title="Referenced at ../../../../trans/static-semantics/webdsl-search.stx line 51">SearcherInit</a> : <a href="../WebDSL-Lexical-sig.stx#SimpleSortLex_756_769" id="SimpleSortLex_6388_6401" title="Defined at ../WebDSL-Lexical-sig.stx line 42">SimpleSortLex</a> * <span class="keyword">list</span>(<a href="#SearcherPart_687_699" id="SearcherPart_6409_6421" title="Defined at line 35">SearcherPart</a>) -&gt; <a href="#SearcherDef_671_682" id="SearcherDef_6426_6437" title="Defined at line 34">SearcherDef</a>
    <a href="../../../../trans/static-semantics/webdsl-search.stx#SearcherRefMod_2043_2057" id="SearcherRefMod_6442_6456" title="Referenced at ../../../../trans/static-semantics/webdsl-search.stx line 56">SearcherRefMod</a> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_6459_6462" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <span class="keyword">list</span>(<a href="#SearcherPart_687_699" id="SearcherPart_6470_6482" title="Defined at line 35">SearcherPart</a>) -&gt; <a href="#SearcherDef_671_682" id="SearcherDef_6487_6498" title="Defined at line 34">SearcherDef</a>
    <span id="ConstraintFilter2SearcherPart_6503_6532" title="Not referenced locally, nor via imports">ConstraintFilter2SearcherPart</span> : <a href="#ConstraintFilter_754_770" id="ConstraintFilter_6535_6551" title="Defined at line 40">ConstraintFilter</a> -&gt; <a href="#SearcherPart_687_699" id="SearcherPart_6555_6567" title="Defined at line 35">SearcherPart</a>
    <span id="QueryDef2SearcherPart_6572_6593" title="Not referenced locally, nor via imports">QueryDef2SearcherPart</span> : <a href="#QueryDef_704_712" id="QueryDef_6596_6604" title="Defined at line 36">QueryDef</a> -&gt; <a href="#SearcherPart_687_699" id="SearcherPart_6608_6620" title="Defined at line 35">SearcherPart</a>
    <span id="Offset2SearcherPart_6625_6644" title="Not referenced locally, nor via imports">Offset2SearcherPart</span> : <a href="#Offset_717_723" id="Offset_6647_6653" title="Defined at line 37">Offset</a> -&gt; <a href="#SearcherPart_687_699" id="SearcherPart_6657_6669" title="Defined at line 35">SearcherPart</a>
    <span id="MaxResults2SearcherPart_6674_6697" title="Not referenced locally, nor via imports">MaxResults2SearcherPart</span> : <a href="#MaxResults_728_738" id="MaxResults_6700_6710" title="Defined at line 38">MaxResults</a> -&gt; <a href="#SearcherPart_687_699" id="SearcherPart_6714_6726" title="Defined at line 35">SearcherPart</a>
    <span id="SortBy2SearcherPart_6731_6750" title="Not referenced locally, nor via imports">SortBy2SearcherPart</span> : <a href="#SortBy_743_749" id="SortBy_6753_6759" title="Defined at line 39">SortBy</a> -&gt; <a href="#SearcherPart_687_699" id="SearcherPart_6763_6775" title="Defined at line 35">SearcherPart</a>
    <span id="FacetDef2SearcherPart_6780_6801" title="Not referenced locally, nor via imports">FacetDef2SearcherPart</span> : <a href="#FacetDef_775_783" id="FacetDef_6804_6812" title="Defined at line 41">FacetDef</a> -&gt; <a href="#SearcherPart_687_699" id="SearcherPart_6816_6828" title="Defined at line 35">SearcherPart</a>
    <span id="SearchAttributes2SearcherPart_6833_6862" title="Not referenced locally, nor via imports">SearchAttributes2SearcherPart</span> : <a href="#SearchAttributes_788_804" id="SearchAttributes_6865_6881" title="Defined at line 42">SearchAttributes</a> -&gt; <a href="#SearcherPart_687_699" id="SearcherPart_6885_6897" title="Defined at line 35">SearcherPart</a>
    <span id="NamespaceConstraint2SearcherPart_6902_6934" title="Not referenced locally, nor via imports">NamespaceConstraint2SearcherPart</span> : <a href="#NamespaceConstraint_809_828" id="NamespaceConstraint_6937_6956" title="Defined at line 43">NamespaceConstraint</a> -&gt; <a href="#SearcherPart_687_699" id="SearcherPart_6960_6972" title="Defined at line 35">SearcherPart</a>
    <span id="QueryDef_6977_6985" title="Not referenced locally, nor via imports">QueryDef</span> : <span class="keyword">list</span>(<a href="#MatchGroup_964_974" id="MatchGroup_6993_7003" title="Defined at line 51">MatchGroup</a>) -&gt; <a href="#QueryDef_704_712" id="QueryDef_7008_7016" title="Defined at line 36">QueryDef</a>
    <span id="Start_7021_7026" title="Not referenced locally, nor via imports">Start</span> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_7029_7032" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#Offset_717_723" id="Offset_7036_7042" title="Defined at line 37">Offset</a>
    <span id="MaxResults_7047_7057" title="Not referenced locally, nor via imports">MaxResults</span> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_7060_7063" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#MaxResults_728_738" id="MaxResults_7067_7077" title="Defined at line 38">MaxResults</a>
    <span id="SortBy_7082_7088" title="Not referenced locally, nor via imports">SortBy</span> : <span class="keyword">list</span>(<a href="#SortExp_1083_1090" id="SortExp_7096_7103" title="Defined at line 60">SortExp</a>) -&gt; <a href="#SortBy_743_749" id="SortBy_7108_7114" title="Defined at line 39">SortBy</a>
    <span id="ConstraintFilter_7119_7135" title="Not referenced locally, nor via imports">ConstraintFilter</span> : <span class="keyword">list</span>(<a href="#FilterConstraint_866_882" id="FilterConstraint_7143_7159" title="Defined at line 46">FilterConstraint</a>) -&gt; <a href="#ConstraintFilter_754_770" id="ConstraintFilter_7164_7180" title="Defined at line 40">ConstraintFilter</a>
    <span id="ConstraintFilterAlt_7185_7204" title="Not referenced locally, nor via imports">ConstraintFilterAlt</span> : <span class="keyword">list</span>(<a href="#FilterConstraint_866_882" id="FilterConstraint_7212_7228" title="Defined at line 46">FilterConstraint</a>) -&gt; <a href="#ConstraintFilter_754_770" id="ConstraintFilter_7233_7249" title="Defined at line 40">ConstraintFilter</a>
    <span id="FacetDef_7254_7262" title="Not referenced locally, nor via imports">FacetDef</span> : <span class="keyword">list</span>(<a href="#FacetExp_853_861" id="FacetExp_7270_7278" title="Defined at line 45">FacetExp</a>) -&gt; <a href="#FacetDef_775_783" id="FacetDef_7283_7291" title="Defined at line 41">FacetDef</a>
    <span id="FacetDefAlt_7296_7307" title="Not referenced locally, nor via imports">FacetDefAlt</span> : <span class="keyword">list</span>(<a href="#FacetExp_853_861" id="FacetExp_7315_7323" title="Defined at line 45">FacetExp</a>) -&gt; <a href="#FacetDef_775_783" id="FacetDef_7328_7336" title="Defined at line 41">FacetDef</a>
    <span id="SearchAttributes_7341_7357" title="Not referenced locally, nor via imports">SearchAttributes</span> : <span class="keyword">list</span>(<a href="#SearchAttribute_833_848" id="SearchAttribute_7365_7380" title="Defined at line 44">SearchAttribute</a>) -&gt; <a href="#SearchAttributes_788_804" id="SearchAttributes_7385_7401" title="Defined at line 42">SearchAttributes</a>
    <span id="NamespaceConstraint_7406_7425" title="Not referenced locally, nor via imports">NamespaceConstraint</span> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_7428_7431" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#NamespaceConstraint_809_828" id="NamespaceConstraint_7435_7454" title="Defined at line 43">NamespaceConstraint</a>
    <span id="NoLucene_7459_7467" title="Not referenced locally, nor via imports">NoLucene</span> : <a href="#SearchAttribute_833_848" id="SearchAttribute_7470_7485" title="Defined at line 44">SearchAttribute</a>
    <span id="Lucene_7490_7496" title="Not referenced locally, nor via imports">Lucene</span> : <a href="#SearchAttribute_833_848" id="SearchAttribute_7499_7514" title="Defined at line 44">SearchAttribute</a>
    <span id="DefaultAnd_7519_7529" title="Not referenced locally, nor via imports">DefaultAnd</span> : <a href="#SearchAttribute_833_848" id="SearchAttribute_7532_7547" title="Defined at line 44">SearchAttribute</a>
    <span id="DefaultOr_7552_7561" title="Not referenced locally, nor via imports">DefaultOr</span> : <a href="#SearchAttribute_833_848" id="SearchAttribute_7564_7579" title="Defined at line 44">SearchAttribute</a>
    <span id="DiscreteFacetDef_7584_7600" title="Not referenced locally, nor via imports">DiscreteFacetDef</span> : <a href="#SearchField_1156_1167" id="SearchField_7603_7614" title="Defined at line 65">SearchField</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_7617_7620" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#FacetExp_853_861" id="FacetExp_7624_7632" title="Defined at line 45">FacetExp</a>
    <span id="RangeFacetDef_7637_7650" title="Not referenced locally, nor via imports">RangeFacetDef</span> : <a href="#SearchField_1156_1167" id="SearchField_7653_7664" title="Defined at line 65">SearchField</a> * <span class="keyword">list</span>(<a href="#Range_1001_1006" id="Range_7672_7677" title="Defined at line 54">Range</a>) -&gt; <a href="#FacetExp_853_861" id="FacetExp_7682_7690" title="Defined at line 45">FacetExp</a>
    <span id="FieldFilterConstraint_7695_7716" title="Not referenced locally, nor via imports">FieldFilterConstraint</span> : <a href="#SearchField_1156_1167" id="SearchField_7719_7730" title="Defined at line 65">SearchField</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_7733_7736" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#FilterConstraint_866_882" id="FilterConstraint_7740_7756" title="Defined at line 46">FilterConstraint</a>
    <span id="FieldsConstraint_7761_7777" title="Not referenced locally, nor via imports">FieldsConstraint</span> : <span class="keyword">list</span>(<a href="#QuerySearchField_908_924" id="QuerySearchField_7785_7801" title="Defined at line 48">QuerySearchField</a>) -&gt; <a href="#FieldsConstraint_887_903" id="FieldsConstraint_7806_7822" title="Defined at line 47">FieldsConstraint</a>
    <span id="QuerySearchField_7827_7843" title="Not referenced locally, nor via imports">QuerySearchField</span> : <a href="#SearchField_1156_1167" id="SearchField_7846_7857" title="Defined at line 65">SearchField</a> * <a href="#OptQueryBoost_1206_1219" id="OptQueryBoost_7860_7873" title="Defined at line 68">OptQueryBoost</a> -&gt; <a href="#QuerySearchField_908_924" id="QuerySearchField_7877_7893" title="Defined at line 48">QuerySearchField</a>
    <span id="QueryConstraint_7898_7913" title="Not referenced locally, nor via imports">QueryConstraint</span> : <span class="keyword">list</span>(<a href="#QueryExp_979_987" id="QueryExp_7921_7929" title="Defined at line 52">QueryExp</a>) -&gt; <a href="#QueryConstraint_929_944" id="QueryConstraint_7934_7949" title="Defined at line 49">QueryConstraint</a>
    <span id="QueryBoost_7954_7964" title="Not referenced locally, nor via imports">QueryBoost</span> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_7967_7970" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#QueryBoost_949_959" id="QueryBoost_7974_7984" title="Defined at line 50">QueryBoost</a>
    <span id="Clause_7989_7995" title="Not referenced locally, nor via imports">Clause</span> : <a href="#OptBoolOp_1224_1233" id="OptBoolOp_7998_8007" title="Defined at line 69">OptBoolOp</a> * <span class="keyword">list</span>(<a href="#MatchGroup_964_974" id="MatchGroup_8015_8025" title="Defined at line 51">MatchGroup</a>) -&gt; <a href="#MatchGroup_964_974" id="MatchGroup_8030_8040" title="Defined at line 51">MatchGroup</a>
    <span id="Query_8045_8050" title="Not referenced locally, nor via imports">Query</span> : <a href="#OptFieldsConstraint_1238_1257" id="OptFieldsConstraint_8053_8072" title="Defined at line 70">OptFieldsConstraint</a> * <a href="#QueryConstraint_929_944" id="QueryConstraint_8075_8090" title="Defined at line 49">QueryConstraint</a> -&gt; <a href="#MatchGroup_964_974" id="MatchGroup_8094_8104" title="Defined at line 51">MatchGroup</a>
    <span id="MatchAllQuery_8109_8122" title="Not referenced locally, nor via imports">MatchAllQuery</span> : <a href="#MatchGroup_964_974" id="MatchGroup_8125_8135" title="Defined at line 51">MatchGroup</a>
    <span id="TermDef_8140_8147" title="Not referenced locally, nor via imports">TermDef</span> : <a href="#OptBoolOp_1224_1233" id="OptBoolOp_8150_8159" title="Defined at line 69">OptBoolOp</a> * <a href="#QueryTerm_1069_1078" id="QueryTerm_8162_8171" title="Defined at line 59">QueryTerm</a> * <a href="#OptSlop_1262_1269" id="OptSlop_8174_8181" title="Defined at line 71">OptSlop</a> -&gt; <a href="#QueryExp_979_987" id="QueryExp_8185_8193" title="Defined at line 52">QueryExp</a>
    <span id="RangeDef_8198_8206" title="Not referenced locally, nor via imports">RangeDef</span> : <a href="#OptBoolOp_1224_1233" id="OptBoolOp_8209_8218" title="Defined at line 69">OptBoolOp</a> * <a href="#Range_1001_1006" id="Range_8221_8226" title="Defined at line 54">Range</a> -&gt; <a href="#QueryExp_979_987" id="QueryExp_8230_8238" title="Defined at line 52">QueryExp</a>
    <span id="QueryExpGroupDef_8243_8259" title="Not referenced locally, nor via imports">QueryExpGroupDef</span> : <a href="#GroupDef_1291_1299" id="GroupDef_8262_8270" title="Defined at line 73">GroupDef</a> -&gt; <a href="#QueryExp_979_987" id="QueryExp_8274_8282" title="Defined at line 52">QueryExp</a>
    <span id="GroupDef_8287_8295" title="Not referenced locally, nor via imports">GroupDef</span> : <a href="#OptBoolOp_1224_1233" id="OptBoolOp_8298_8307" title="Defined at line 69">OptBoolOp</a> * <span class="keyword">list</span>(<a href="#QueryExp_979_987" id="QueryExp_8315_8323" title="Defined at line 52">QueryExp</a>) * <a href="#OptSlop_1262_1269" id="OptSlop_8327_8334" title="Defined at line 71">OptSlop</a> -&gt; <a href="#GroupDef_1291_1299" id="GroupDef_8338_8346" title="Defined at line 73">GroupDef</a>
    <span id="Slop_8351_8355" title="Not referenced locally, nor via imports">Slop</span> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_8358_8361" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#Slop_992_996" id="Slop_8365_8369" title="Defined at line 53">Slop</a>
    <span id="Range_8374_8379" title="Not referenced locally, nor via imports">Range</span> : <a href="#RangeOpen_1029_1038" id="RangeOpen_8382_8391" title="Defined at line 56">RangeOpen</a> * <a href="#ExpOrWildCard_1011_1024" id="ExpOrWildCard_8394_8407" title="Defined at line 55">ExpOrWildCard</a> * <a href="#ExpOrWildCard_1011_1024" id="ExpOrWildCard_8410_8423" title="Defined at line 55">ExpOrWildCard</a> * <a href="#RangeClose_1043_1053" id="RangeClose_8426_8436" title="Defined at line 57">RangeClose</a> -&gt; <a href="#Range_1001_1006" id="Range_8440_8445" title="Defined at line 54">Range</a>
    <span id="RangeAlt_8450_8458" title="Not referenced locally, nor via imports">RangeAlt</span> : <a href="#RangeOpen_1029_1038" id="RangeOpen_8461_8470" title="Defined at line 56">RangeOpen</a> * <a href="#ExpOrWildCard_1011_1024" id="ExpOrWildCard_8473_8486" title="Defined at line 55">ExpOrWildCard</a> * <a href="#ExpOrWildCard_1011_1024" id="ExpOrWildCard_8489_8502" title="Defined at line 55">ExpOrWildCard</a> * <a href="#RangeClose_1043_1053" id="RangeClose_8505_8515" title="Defined at line 57">RangeClose</a> -&gt; <a href="#Range_1001_1006" id="Range_8519_8524" title="Defined at line 54">Range</a>
    <span id="Exp2ExpOrWildCard_8529_8546" title="Not referenced locally, nor via imports">Exp2ExpOrWildCard</span> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_8549_8552" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#ExpOrWildCard_1011_1024" id="ExpOrWildCard_8556_8569" title="Defined at line 55">ExpOrWildCard</a>
    <span id="WildCard_8574_8582" title="Not referenced locally, nor via imports">WildCard</span> : <a href="#ExpOrWildCard_1011_1024" id="ExpOrWildCard_8585_8598" title="Defined at line 55">ExpOrWildCard</a>
    <span id="ExcludingOpen_8603_8616" title="Not referenced locally, nor via imports">ExcludingOpen</span> : <a href="#RangeOpen_1029_1038" id="RangeOpen_8619_8628" title="Defined at line 56">RangeOpen</a>
    <span id="ExcludingClose_8633_8647" title="Not referenced locally, nor via imports">ExcludingClose</span> : <a href="#RangeClose_1043_1053" id="RangeClose_8650_8660" title="Defined at line 57">RangeClose</a>
    <span id="IncludingOpen_8665_8678" title="Not referenced locally, nor via imports">IncludingOpen</span> : <a href="#RangeOpen_1029_1038" id="RangeOpen_8681_8690" title="Defined at line 56">RangeOpen</a>
    <span id="IncludingClose_8695_8709" title="Not referenced locally, nor via imports">IncludingClose</span> : <a href="#RangeClose_1043_1053" id="RangeClose_8712_8722" title="Defined at line 57">RangeClose</a>
    <span id="Must_8727_8731" title="Not referenced locally, nor via imports">Must</span> : <a href="#BoolOp_1058_1064" id="BoolOp_8734_8740" title="Defined at line 58">BoolOp</a>
    <span id="MustNot_8745_8752" title="Not referenced locally, nor via imports">MustNot</span> : <a href="#BoolOp_1058_1064" id="BoolOp_8755_8761" title="Defined at line 58">BoolOp</a>
    <span id="QueryTermExp_8766_8778" title="Not referenced locally, nor via imports">QueryTermExp</span> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_8781_8784" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#QueryTerm_1069_1078" id="QueryTerm_8788_8797" title="Defined at line 59">QueryTerm</a>
    <span id="SortDef_8802_8809" title="Not referenced locally, nor via imports">SortDef</span> : <a href="#SearchField_1156_1167" id="SearchField_8812_8823" title="Defined at line 65">SearchField</a> * <a href="#OptDirection_1274_1286" id="OptDirection_8826_8838" title="Defined at line 72">OptDirection</a> -&gt; <a href="#SortExp_1083_1090" id="SortExp_8842_8849" title="Defined at line 60">SortExp</a>
    <span id="AscendingAbbr_8854_8867" title="Not referenced locally, nor via imports">AscendingAbbr</span> : <a href="#Direction_1095_1104" id="Direction_8870_8879" title="Defined at line 61">Direction</a>
    <span id="Ascending_8884_8893" title="Not referenced locally, nor via imports">Ascending</span> : <a href="#Direction_1095_1104" id="Direction_8896_8905" title="Defined at line 61">Direction</a>
    <span id="DescendingAbbr_8910_8924" title="Not referenced locally, nor via imports">DescendingAbbr</span> : <a href="#Direction_1095_1104" id="Direction_8927_8936" title="Defined at line 61">Direction</a>
    <span id="Descending_8941_8951" title="Not referenced locally, nor via imports">Descending</span> : <a href="#Direction_1095_1104" id="Direction_8954_8963" title="Defined at line 61">Direction</a>
    <span id="NormalHighlight_8968_8983" title="Not referenced locally, nor via imports">NormalHighlight</span> : <a href="#Highlight_1109_1118" id="Highlight_8986_8995" title="Defined at line 62">Highlight</a>
    <span id="HTMLHighlight_9000_9013" title="Not referenced locally, nor via imports">HTMLHighlight</span> : <a href="#Highlight_1109_1118" id="Highlight_9016_9025" title="Defined at line 62">Highlight</a>
    <a href="../../../../trans/static-semantics/webdsl-search.stx#Highlight_609_618" id="Highlight_9030_9039" title="Referenced at ../../../../trans/static-semantics/webdsl-search.stx line 24">Highlight</a> : <a href="#Highlight_1109_1118" id="Highlight_9042_9051" title="Defined at line 62">Highlight</a> * <a href="#SearchField_1156_1167" id="SearchField_9054_9065" title="Defined at line 65">SearchField</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_9068_9071" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_9074_9077" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#RetrievalExp_1123_1135" id="RetrievalExp_9081_9093" title="Defined at line 63">RetrievalExp</a>
    <a href="../../../../trans/static-semantics/webdsl-search.stx#HighlightTags_734_747" id="HighlightTags_9098_9111" title="Referenced at ../../../../trans/static-semantics/webdsl-search.stx line 27">HighlightTags</a> : <a href="#Highlight_1109_1118" id="Highlight_9114_9123" title="Defined at line 62">Highlight</a> * <a href="#SearchField_1156_1167" id="SearchField_9126_9137" title="Defined at line 65">SearchField</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_9140_9143" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_9146_9149" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_9152_9155" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_9158_9161" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#RetrievalExp_1123_1135" id="RetrievalExp_9165_9177" title="Defined at line 63">RetrievalExp</a>
    <a href="../../../../trans/static-semantics/webdsl-search.stx#SearchResults_869_882" id="SearchResults_9182_9195" title="Referenced at ../../../../trans/static-semantics/webdsl-search.stx line 30">SearchResults</a> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_9198_9201" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#RetrievalExp_1123_1135" id="RetrievalExp_9205_9217" title="Defined at line 63">RetrievalExp</a>
    <a href="../../../../trans/static-semantics/webdsl-search.stx#FacetResults_1205_1217" id="FacetResults_9222_9234" title="Referenced at ../../../../trans/static-semantics/webdsl-search.stx line 35">FacetResults</a> : <a href="#SearchField_1156_1167" id="SearchField_9237_9248" title="Defined at line 65">SearchField</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_9251_9254" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#RetrievalExp_1123_1135" id="RetrievalExp_9258_9270" title="Defined at line 63">RetrievalExp</a>
    <a href="../../../../trans/static-semantics/webdsl-search.stx#SearchResultsSize_1355_1372" id="SearchResultsSize_9275_9292" title="Referenced at ../../../../trans/static-semantics/webdsl-search.stx line 38">SearchResultsSize</a> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_9295_9298" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#RetrievalExp_1123_1135" id="RetrievalExp_9302_9314" title="Defined at line 63">RetrievalExp</a>
    <a href="../../../../trans/static-semantics/webdsl-search.stx#SearchTimeString_1460_1476" id="SearchTimeString_9319_9335" title="Referenced at ../../../../trans/static-semantics/webdsl-search.stx line 41">SearchTimeString</a> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_9338_9341" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#RetrievalExp_1123_1135" id="RetrievalExp_9345_9357" title="Defined at line 63">RetrievalExp</a>
    <a href="../../../../trans/static-semantics/webdsl-search.stx#Suggest_1568_1575" id="Suggest_9362_9369" title="Referenced at ../../../../trans/static-semantics/webdsl-search.stx line 44">Suggest</a> : <a href="../WebDSL-Lexical-sig.stx#SimpleSortLex_756_769" id="SimpleSortLex_9372_9385" title="Defined at ../WebDSL-Lexical-sig.stx line 42">SimpleSortLex</a> * <a href="#SuggestType_1140_1151" id="SuggestType_9388_9399" title="Defined at line 64">SuggestType</a> * <span class="keyword">list</span>(<a href="#SuggestionPart_1187_1201" id="SuggestionPart_9407_9421" title="Defined at line 67">SuggestionPart</a>) -&gt; <a href="#RetrievalExp_1123_1135" id="RetrievalExp_9426_9438" title="Defined at line 63">RetrievalExp</a>
    <span id="AutoComplete_9443_9455" title="Not referenced locally, nor via imports">AutoComplete</span> : <a href="#SuggestType_1140_1151" id="SuggestType_9458_9469" title="Defined at line 64">SuggestType</a>
    <span id="SpellCheck_9474_9484" title="Not referenced locally, nor via imports">SpellCheck</span> : <a href="#SuggestType_1140_1151" id="SuggestType_9487_9498" title="Defined at line 64">SuggestType</a>
    <a href="../../../../trans/static-semantics/webdsl-search.stx#RetrievalExp_483_495" id="RetrievalExp_9503_9515" title="Referenced at ../../../../trans/static-semantics/webdsl-search.stx line 21">RetrievalExp</a> : <a href="#RetrievalExp_1123_1135" id="RetrievalExp_9518_9530" title="Defined at line 63">RetrievalExp</a> -&gt; <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_9534_9537" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a>
    <span id="SearchFieldExp_9542_9556" title="Not referenced locally, nor via imports">SearchFieldExp</span> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_9559_9562" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#SearchField_1156_1167" id="SearchField_9566_9577" title="Defined at line 65">SearchField</a>
    <span id="PlainField2SearchField_9582_9604" title="Not referenced locally, nor via imports">PlainField2SearchField</span> : <a href="#PlainField_1172_1182" id="PlainField_9607_9617" title="Defined at line 66">PlainField</a> -&gt; <a href="#SearchField_1156_1167" id="SearchField_9621_9632" title="Defined at line 65">SearchField</a>
    <span id="SearchFieldPlainBase_9637_9657" title="Not referenced locally, nor via imports">SearchFieldPlainBase</span> : <a href="#SearchFieldId_241_254" id="SearchFieldId_9660_9673" title="Defined at line 14">SearchFieldId</a> -&gt; <a href="#PlainField_1172_1182" id="PlainField_9677_9687" title="Defined at line 66">PlainField</a>
    <span id="SearchFieldPlain_9692_9708" title="Not referenced locally, nor via imports">SearchFieldPlain</span> : <a href="#SearchFieldId_241_254" id="SearchFieldId_9711_9724" title="Defined at line 14">SearchFieldId</a> * <a href="#PlainField_1172_1182" id="PlainField_9727_9737" title="Defined at line 66">PlainField</a> -&gt; <a href="#PlainField_1172_1182" id="PlainField_9741_9751" title="Defined at line 66">PlainField</a>
    <span id="Similarity_9756_9766" title="Not referenced locally, nor via imports">Similarity</span> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_9769_9772" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#SuggestionPart_1187_1201" id="SuggestionPart_9776_9790" title="Defined at line 67">SuggestionPart</a>
    <span id="SuggestTerm_9795_9806" title="Not referenced locally, nor via imports">SuggestTerm</span> : <a href="#FieldsConstraint_887_903" id="FieldsConstraint_9809_9825" title="Defined at line 47">FieldsConstraint</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_9828_9831" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#SuggestionPart_1187_1201" id="SuggestionPart_9835_9849" title="Defined at line 67">SuggestionPart</a>
    <span id="NamespaceConstraint2SuggestionPart_9854_9888" title="Not referenced locally, nor via imports">NamespaceConstraint2SuggestionPart</span> : <a href="#NamespaceConstraint_809_828" id="NamespaceConstraint_9891_9910" title="Defined at line 43">NamespaceConstraint</a> -&gt; <a href="#SuggestionPart_1187_1201" id="SuggestionPart_9914_9928" title="Defined at line 67">SuggestionPart</a>
    <span id="MaxResults2SuggestionPart_9933_9958" title="Not referenced locally, nor via imports">MaxResults2SuggestionPart</span> : <a href="#MaxResults_728_738" id="MaxResults_9961_9971" title="Defined at line 38">MaxResults</a> -&gt; <a href="#SuggestionPart_1187_1201" id="SuggestionPart_9975_9989" title="Defined at line 67">SuggestionPart</a>
    <span id="OptQueryBoostNone_9994_10011" title="Not referenced locally, nor via imports">OptQueryBoostNone</span> : <a href="#OptQueryBoost_1206_1219" id="OptQueryBoost_10014_10027" title="Defined at line 68">OptQueryBoost</a>
    <span id="QueryBoost2OptQueryBoost_10032_10056" title="Not referenced locally, nor via imports">QueryBoost2OptQueryBoost</span> : <a href="#QueryBoost_949_959" id="QueryBoost_10059_10069" title="Defined at line 50">QueryBoost</a> -&gt; <a href="#OptQueryBoost_1206_1219" id="OptQueryBoost_10073_10086" title="Defined at line 68">OptQueryBoost</a>
    <span id="OptBoolOpNone_10091_10104" title="Not referenced locally, nor via imports">OptBoolOpNone</span> : <a href="#OptBoolOp_1224_1233" id="OptBoolOp_10107_10116" title="Defined at line 69">OptBoolOp</a>
    <span id="BoolOp2OptBoolOp_10121_10137" title="Not referenced locally, nor via imports">BoolOp2OptBoolOp</span> : <a href="#BoolOp_1058_1064" id="BoolOp_10140_10146" title="Defined at line 58">BoolOp</a> -&gt; <a href="#OptBoolOp_1224_1233" id="OptBoolOp_10150_10159" title="Defined at line 69">OptBoolOp</a>
    <span id="OptFieldsConstraintNone_10164_10187" title="Not referenced locally, nor via imports">OptFieldsConstraintNone</span> : <a href="#OptFieldsConstraint_1238_1257" id="OptFieldsConstraint_10190_10209" title="Defined at line 70">OptFieldsConstraint</a>
    <span id="FieldsConstraint2OptFieldsConstraint_10214_10250" title="Not referenced locally, nor via imports">FieldsConstraint2OptFieldsConstraint</span> : <a href="#FieldsConstraint_887_903" id="FieldsConstraint_10253_10269" title="Defined at line 47">FieldsConstraint</a> -&gt; <a href="#OptFieldsConstraint_1238_1257" id="OptFieldsConstraint_10273_10292" title="Defined at line 70">OptFieldsConstraint</a>
    <span id="OptSlopNone_10297_10308" title="Not referenced locally, nor via imports">OptSlopNone</span> : <a href="#OptSlop_1262_1269" id="OptSlop_10311_10318" title="Defined at line 71">OptSlop</a>
    <span id="Slop2OptSlop_10323_10335" title="Not referenced locally, nor via imports">Slop2OptSlop</span> : <a href="#Slop_992_996" id="Slop_10338_10342" title="Defined at line 53">Slop</a> -&gt; <a href="#OptSlop_1262_1269" id="OptSlop_10346_10353" title="Defined at line 71">OptSlop</a>
    <span id="OptDirectionNone_10358_10374" title="Not referenced locally, nor via imports">OptDirectionNone</span> : <a href="#OptDirection_1274_1286" id="OptDirection_10377_10389" title="Defined at line 72">OptDirection</a>
    <span id="Direction2OptDirection_10394_10416" title="Not referenced locally, nor via imports">Direction2OptDirection</span> : <a href="#Direction_1095_1104" id="Direction_10419_10428" title="Defined at line 61">Direction</a> -&gt; <a href="#OptDirection_1274_1286" id="OptDirection_10432_10444" title="Defined at line 72">OptDirection</a>
    <span id="SearchMappingEmbeddedDepr_10449_10474" title="Not referenced locally, nor via imports">SearchMappingEmbeddedDepr</span> : <span class="keyword">list</span>(<a href="#SearchMappingContent_549_569" id="SearchMappingContent_10482_10502" title="Defined at line 29">SearchMappingContent</a>) -&gt; <a href="../WebDSL-DataModel-sig.stx#EntityBodyDeclaration_164_185" id="EntityBodyDeclaration_10507_10528" title="Defined at ../WebDSL-DataModel-sig.stx line 11">EntityBodyDeclaration</a>
    <span id="SearchMappingDepr_10533_10550" title="Not referenced locally, nor via imports">SearchMappingDepr</span> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_10553_10555" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <span class="keyword">list</span>(<a href="#SearchMappingContent_549_569" id="SearchMappingContent_10563_10583" title="Defined at line 29">SearchMappingContent</a>) -&gt; <a href="../WebDSL-Core-sig.stx#Definition_310_320" id="Definition_10588_10598" title="Defined at ../WebDSL-Core-sig.stx line 20">Definition</a>
    <span id="CharFilterDepr_10603_10617" title="Not referenced locally, nor via imports">CharFilterDepr</span> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_10620_10622" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="#OptAnalyzerArguments_435_455" id="OptAnalyzerArguments_10625_10645" title="Defined at line 23">OptAnalyzerArguments</a> -&gt; <a href="#CharFilter_346_356" id="CharFilter_10649_10659" title="Defined at line 18">CharFilter</a>
    <span id="TokenFilterDepr_10664_10679" title="Not referenced locally, nor via imports">TokenFilterDepr</span> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_10682_10684" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="#OptAnalyzerArguments_435_455" id="OptAnalyzerArguments_10687_10707" title="Defined at line 23">OptAnalyzerArguments</a> -&gt; <a href="#TokenFilter_375_386" id="TokenFilter_10711_10722" title="Defined at line 20">TokenFilter</a>
    <span id="AllFacetResults_10727_10742" title="Not referenced locally, nor via imports">AllFacetResults</span> : <a href="#SearchField_1156_1167" id="SearchField_10745_10756" title="Defined at line 65">SearchField</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_10759_10762" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#RetrievalExp_1123_1135" id="RetrievalExp_10766_10778" title="Defined at line 63">RetrievalExp</a>
    <span id="DiscreteFacetDefDepr_10783_10803" title="Not referenced locally, nor via imports">DiscreteFacetDefDepr</span> : <a href="#SearchField_1156_1167" id="SearchField_10806_10817" title="Defined at line 65">SearchField</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_10820_10823" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#FacetExp_853_861" id="FacetExp_10827_10835" title="Defined at line 45">FacetExp</a>
    <span id="RangeFacetDefDepr_10840_10857" title="Not referenced locally, nor via imports">RangeFacetDefDepr</span> : <a href="#SearchField_1156_1167" id="SearchField_10860_10871" title="Defined at line 65">SearchField</a> * <span class="keyword">list</span>(<a href="#Range_1001_1006" id="Range_10879_10884" title="Defined at line 54">Range</a>) -&gt; <a href="#FacetExp_853_861" id="FacetExp_10889_10897" title="Defined at line 45">FacetExp</a>
</code></pre></td></tr></tbody></table></div>