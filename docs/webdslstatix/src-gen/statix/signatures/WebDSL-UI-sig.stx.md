---
title: WebDSL-UI-sig.stx
hide:
  - toc
---

# `WebDSL-UI-sig.stx`



[pdmosses/webdsl-statix/webdslstatix/src-gen/statix/signatures/WebDSL-UI-sig.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/src-gen/statix/signatures/WebDSL-UI-sig.stx "The source file on GitHub"

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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../HQL-sig.stx#signatures/WebDSL-UI-sig_100_124" id="signatures/WebDSL-UI-sig_7_31" title="Referenced at ../HQL-sig.stx line 6; ../WebDSL-AccessControl-sig.stx line 8; ../WebDSL-Action-sig.stx line 8; ../WebDSL-Ajax-sig.stx line 6; ../WebDSL-Attributes-sig.stx line 7; ../WebDSL-DataValidation-sig.stx line 6; ../WebDSL-Dispatch-sig.stx line 7; ../WebDSL-EntityDerive-sig.stx line 7; ../WebDSL-Exception-sig.stx line 7; ../WebDSL-Expand-sig.stx line 7; ../WebDSL-JavaScript-sig.stx line 6; ../WebDSL-Prefetch-sig.stx line 7; ../WebDSL-Service-sig.stx line 7; ../webdsl-statix-sig.stx line 27; ../WebDSL-XML-sig.stx line 5">signatures/WebDSL-UI-sig</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action-sig.stx#signatures/WebDSL-Action-sig_7_35" id="signatures/WebDSL-Action-sig_43_71" title="Defined at ../WebDSL-Action-sig.stx line 1">signatures/WebDSL-Action-sig</a>
  <a href="../WebDSL-Attributes-sig.stx#signatures/WebDSL-Attributes-sig_7_39" id="signatures/WebDSL-Attributes-sig_74_106" title="Defined at ../WebDSL-Attributes-sig.stx line 1">signatures/WebDSL-Attributes-sig</a>
  <a href="../WebDSL-Core-sig.stx#signatures/WebDSL-Core-sig_7_33" id="signatures/WebDSL-Core-sig_109_135" title="Defined at ../WebDSL-Core-sig.stx line 1">signatures/WebDSL-Core-sig</a>
  <a href="../WebDSL-Lexical-sig.stx#signatures/WebDSL-Lexical-sig_7_36" id="signatures/WebDSL-Lexical-sig_138_167" title="Defined at ../WebDSL-Lexical-sig.stx line 1">signatures/WebDSL-Lexical-sig</a>
  <a href="../WebDSL-XML-sig.stx#signatures/WebDSL-XML-sig_7_32" id="signatures/WebDSL-XML-sig_170_195" title="Defined at ../WebDSL-XML-sig.stx line 1">signatures/WebDSL-XML-sig</a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <a href="#TemplateDefinition_1069_1087" id="TemplateDefinition_220_238" title="Referenced at line 57, 101, 102, 106, 110, 111, 112, 140, 255, 256; ../../../../trans/static-semantics/webdsl-ui.stx line 61, 84">TemplateDefinition</a>
    <a href="#Modifier_1109_1117" id="Modifier_243_251" title="Referenced at line 58, 102, 106, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128; ../WebDSL-AccessControl-sig.stx line 57; ../WebDSL-Service-sig.stx line 23; ../../../../trans/static-semantics/webdsl-services.stx line 23; ../../../../trans/static-semantics/webdsl-ui.stx line 49, 77, 98, 103, 108">Modifier</a>
    <a href="#TemplateElement_1146_1161" id="TemplateElement_256_271" title="Referenced at line 59, 102, 110, 111, 112, 129, 130, 137, 138, 139, 140, 141, 157, 157, 158, 158, 159, 159, 160, 160, 161, 163, 163, 163, 164, 164, 165, 165, 167, 168, 169, 170, 171, 172, 173, 174, 180, 183, 186, 187, 187, 188, 188, 189, 189, 190, 190, 192, 193, 194, 195, 196, 197, 198, 199, 200, 200, 201, 201, 202, 202, 203, 203, 204, 204, 205, 205, 206, 206, 207, 207, 228, 229, 231, 232, 233, 234, 249; ../WebDSL-AccessControl-sig.stx line 58; ../WebDSL-Ajax-sig.stx line 47, 48, 49, 50, 51, 52, 57; ../WebDSL-Dispatch-sig.stx line 28, 29, 30, 31, 33, 34, 35; ../WebDSL-EntityDerive-sig.stx line 24, 24; ../WebDSL-Expand-sig.stx line 28, 29, 30, 31, 32, 36, 40, 40, 52; ../WebDSL-JavaScript-sig.stx line 24, 25; ../WebDSL-Prefetch-sig.stx line 46; ../WebDSL-XML-sig.stx line 28, 29, 29, 30, 31; ../../../../trans/static-semantics/webdsl-ui.stx line 138, 142, 250, 256, 267">TemplateElement</a>
    <a href="#OptFilter_1184_1193" id="OptFilter_276_285" title="Referenced at line 60, 155, 156, 157, 158, 159, 243, 244, 245; ../WebDSL-Action-sig.stx line 106, 107, 108, 158, 159">OptFilter</a>
    <a href="#PageCall_1215_1223" id="PageCall_290_298" title="Referenced at line 61, 187, 188, 189, 190, 191; ../WebDSL-Action-sig.stx line 86, 87; ../WebDSL-Ajax-sig.stx line 40; ../../../../trans/static-semantics/ui/template-calls.stx line 80">PageCall</a>
    <a href="#TemplateCall_1249_1261" id="TemplateCall_303_315" title="Referenced at line 62, 141, 176, 241, 241; ../WebDSL-Action-sig.stx line 191, 192; ../WebDSL-Ajax-sig.stx line 35, 45, 53, 54, 55, 56; ../WebDSL-DataValidation-sig.stx line 27, 28; ../WebDSL-Exception-sig.stx line 21, 23; ../../../../trans/static-semantics/ui/template-calls.stx line 23, 26, 30">TemplateCall</a>
    <a href="#PropertyAssignment_1293_1311" id="PropertyAssignment_320_338" title="Referenced at line 63, 181, 188, 190, 193, 195, 197, 199, 201, 203, 205, 207, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223; ../WebDSL-Attributes-sig.stx line 39; ../WebDSL-Expand-sig.stx line 47, 47; ../../../../trans/static-semantics/ui/template-calls.stx line 94, 97, 104">PropertyAssignment</a>
    <a href="#TemplateArgExp_1339_1353" id="TemplateArgExp_343_357" title="Referenced at line 64, 177, 179, 180; ../WebDSL-EntityDerive-sig.stx line 21; ../../../../trans/static-semantics/ui/template-calls.stx line 37, 48, 128">TemplateArgExp</a>
    <a href="#TemplateCaseAlt_1382_1397" id="TemplateCaseAlt_362_377" title="Referenced at line 65, 169, 170, 171; ../WebDSL-Expand-sig.stx line 50, 50">TemplateCaseAlt</a>
    <a href="#TemplateTypeCaseAlt_1430_1449" id="TemplateTypeCaseAlt_382_401" title="Referenced at line 66, 172, 173, 174; ../WebDSL-Expand-sig.stx line 52">TemplateTypeCaseAlt</a>
    <a href="#OptTemplateArgs_1478_1493" id="OptTemplateArgs_406_421" title="Referenced at line 67, 102, 103, 104, 110, 111, 112">OptTemplateArgs</a>
    <a href="#TemplateArg_1518_1529" id="TemplateArg_426_437" title="Referenced at line 68, 103, 105; ../../../../trans/static-semantics/webdsl-ui.stx line 320">TemplateArg</a>
    <a href="#OptLocalRedefineArgs_1563_1583" id="OptLocalRedefineArgs_442_462" title="Referenced at line 69, 106, 107, 108">OptLocalRedefineArgs</a>
    <a href="#LocalRedefineArg_1613_1629" id="LocalRedefineArg_467_483" title="Referenced at line 70, 108, 109">LocalRedefineArg</a>
    <a href="#SubmitProp_9491_9501" id="SubmitProp_488_498" title="Referenced at line 210, 211, 212, 224">SubmitProp</a> = <span class="keyword">string</span>
    <a href="#VarDecl_1650_1657" id="VarDecl_512_519" title="Referenced at line 71, 131, 132, 133, 134, 135, 136, 137, 138, 139; ../../../../trans/static-semantics/ui/actions.stx line 23">VarDecl</a>
    <a href="#Filter_1677_1683" id="Filter_524_530" title="Referenced at line 72, 142, 143, 144, 145, 146, 147, 148, 155; ../WebDSL-Action-sig.stx line 161, 162, 165, 166; ../../../../trans/static-semantics/webdsl-actions.stx line 206">Filter</a>
    <a href="#OrderExp_1705_1713" id="OrderExp_535_543" title="Referenced at line 73, 143, 144, 146, 148, 149, 150, 151">OrderExp</a>
    <a href="#Limit_1732_1737" id="Limit_548_553" title="Referenced at line 74, 145, 146, 147, 148, 152, 153, 154">Limit</a>
    <a href="#ForSeparator_1763_1775" id="ForSeparator_558_570" title="Referenced at line 75, 157, 158, 159, 160, 161, 162">ForSeparator</a>
    <a href="#ElseIfTempl_1800_1811" id="ElseIfTempl_575_586" title="Referenced at line 76, 165, 168">ElseIfTempl</a>
    <a href="#OptElseTempl_1837_1849" id="OptElseTempl_591_603" title="Referenced at line 77, 165, 166, 167">OptElseTempl</a>
    <a href="#TemplateCaseAltExps_1882_1901" id="TemplateCaseAltExps_608_627" title="Referenced at line 78, 170, 175">TemplateCaseAltExps</a>
    <a href="#OptTCallArgs_1927_1939" id="OptTCallArgs_632_644" title="Referenced at line 79, 176, 177, 178">OptTCallArgs</a>
    <a href="#OptTCallPropAssigns_1972_1991" id="OptTCallPropAssigns_649_668" title="Referenced at line 80, 176, 181, 182">OptTCallPropAssigns</a>
    <a href="#TemplateBody_2017_2029" id="TemplateBody_673_685" title="Referenced at line 81, 176, 183, 184, 185">TemplateBody</a>
    <a href="#ArgDefine_2052_2061" id="ArgDefine_690_699" title="Referenced at line 82, 185, 186">ArgDefine</a>
    <a href="#ActionCallOrInline_2093_2111" id="ActionCallOrInline_704_722" title="Referenced at line 83, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 225; ../../../../trans/static-semantics/ui/actions.stx line 70">ActionCallOrInline</a>
    <a href="#ActionCallOrInlineOrExp_2148_2171" id="ActionCallOrInlineOrExp_727_750" title="Referenced at line 84, 210, 211, 212, 224, 225, 226; ../../../../trans/static-semantics/ui/actions.stx line 65">ActionCallOrInlineOrExp</a>
    <a href="#PropertySubmitMultiple_2207_2229" id="PropertySubmitMultiple_755_777" title="Referenced at line 85, 223, 224">PropertySubmitMultiple</a>
    <a href="#PropertySubmitExp_2260_2277" id="PropertySubmitExp_782_799" title="Referenced at line 86, 226, 227">PropertySubmitExp</a>
    <a href="#PropertyAssignmentId_9746_9766" id="PropertyAssignmentId_804_824" title="Referenced at line 213, 214, 215">PropertyAssignmentId</a> = <span class="keyword">string</span>
    <a href="#ActionModifier_2305_2319" id="ActionModifier_838_852" title="Referenced at line 87, 235, 236">ActionModifier</a>
    <a href="#TemplateCallId_2347_2361" id="TemplateCallId_857_871" title="Referenced at line 88, 176, 186, 237, 238">TemplateCallId</a>
    <a href="#FormalVarArg_2387_2399" id="FormalVarArg_876_888" title="Referenced at line 89, 239, 240; ../../../../trans/static-semantics/webdsl-ui.stx line 286">FormalVarArg</a>
    <a href="#ExpVarArg_2422_2431" id="ExpVarArg_893_902" title="Referenced at line 90, 242, 243, 243, 244, 244, 245, 245, 246, 246, 247; ../../../../trans/static-semantics/ui/actions.stx line 125, 131, 138">ExpVarArg</a>
    <a href="#ExpOrTemplateArg_2461_2477" id="ExpOrTemplateArg_907_923" title="Referenced at line 91, 247, 248, 249; ../../../../trans/static-semantics/ui/actions.stx line 188">ExpOrTemplateArg</a>
    <a href="#HTMLWrapper_2502_2513" id="HTMLWrapper_928_939" title="Referenced at line 92, 250, 255">HTMLWrapper</a>
    <a href="#HTMLWrapperAssigns_2545_2563" id="HTMLWrapperAssigns_944_962" title="Referenced at line 93, 251, 252, 257">HTMLWrapperAssigns</a>
    <a href="#HTMLWrapperBody_2592_2607" id="HTMLWrapperBody_967_982" title="Referenced at line 94, 250, 256, 257">HTMLWrapperBody</a>
    <a href="#HTMLWrapperAssign_2638_2655" id="HTMLWrapperAssign_987_1004" title="Referenced at line 95, 251, 253, 254">HTMLWrapperAssign</a>
    <a href="#TemplateName_2681_2693" id="TemplateName_1009_1021" title="Referenced at line 96, 258, 259">TemplateName</a>

  <span class="keyword">constructors</span>
    <span id="TemplateDefinition-Plhdr_1042_1066" title="Not referenced locally, nor via imports">TemplateDefinition-Plhdr</span> : <a href="#TemplateDefinition_220_238" id="TemplateDefinition_1069_1087" title="Defined at line 13">TemplateDefinition</a>
    <span id="Modifier-Plhdr_1092_1106" title="Not referenced locally, nor via imports">Modifier-Plhdr</span> : <a href="#Modifier_243_251" id="Modifier_1109_1117" title="Defined at line 14">Modifier</a>
    <span id="TemplateElement-Plhdr_1122_1143" title="Not referenced locally, nor via imports">TemplateElement-Plhdr</span> : <a href="#TemplateElement_256_271" id="TemplateElement_1146_1161" title="Defined at line 15">TemplateElement</a>
    <span id="OptFilter-Plhdr_1166_1181" title="Not referenced locally, nor via imports">OptFilter-Plhdr</span> : <a href="#OptFilter_276_285" id="OptFilter_1184_1193" title="Defined at line 16">OptFilter</a>
    <span id="PageCall-Plhdr_1198_1212" title="Not referenced locally, nor via imports">PageCall-Plhdr</span> : <a href="#PageCall_290_298" id="PageCall_1215_1223" title="Defined at line 17">PageCall</a>
    <span id="TemplateCall-Plhdr_1228_1246" title="Not referenced locally, nor via imports">TemplateCall-Plhdr</span> : <a href="#TemplateCall_303_315" id="TemplateCall_1249_1261" title="Defined at line 18">TemplateCall</a>
    <span id="PropertyAssignment-Plhdr_1266_1290" title="Not referenced locally, nor via imports">PropertyAssignment-Plhdr</span> : <a href="#PropertyAssignment_320_338" id="PropertyAssignment_1293_1311" title="Defined at line 19">PropertyAssignment</a>
    <span id="TemplateArgExp-Plhdr_1316_1336" title="Not referenced locally, nor via imports">TemplateArgExp-Plhdr</span> : <a href="#TemplateArgExp_343_357" id="TemplateArgExp_1339_1353" title="Defined at line 20">TemplateArgExp</a>
    <span id="TemplateCaseAlt-Plhdr_1358_1379" title="Not referenced locally, nor via imports">TemplateCaseAlt-Plhdr</span> : <a href="#TemplateCaseAlt_362_377" id="TemplateCaseAlt_1382_1397" title="Defined at line 21">TemplateCaseAlt</a>
    <span id="TemplateTypeCaseAlt-Plhdr_1402_1427" title="Not referenced locally, nor via imports">TemplateTypeCaseAlt-Plhdr</span> : <a href="#TemplateTypeCaseAlt_382_401" id="TemplateTypeCaseAlt_1430_1449" title="Defined at line 22">TemplateTypeCaseAlt</a>
    <span id="OptTemplateArgs-Plhdr_1454_1475" title="Not referenced locally, nor via imports">OptTemplateArgs-Plhdr</span> : <a href="#OptTemplateArgs_406_421" id="OptTemplateArgs_1478_1493" title="Defined at line 23">OptTemplateArgs</a>
    <span id="TemplateArg-Plhdr_1498_1515" title="Not referenced locally, nor via imports">TemplateArg-Plhdr</span> : <a href="#TemplateArg_426_437" id="TemplateArg_1518_1529" title="Defined at line 24">TemplateArg</a>
    <span id="OptLocalRedefineArgs-Plhdr_1534_1560" title="Not referenced locally, nor via imports">OptLocalRedefineArgs-Plhdr</span> : <a href="#OptLocalRedefineArgs_442_462" id="OptLocalRedefineArgs_1563_1583" title="Defined at line 25">OptLocalRedefineArgs</a>
    <span id="LocalRedefineArg-Plhdr_1588_1610" title="Not referenced locally, nor via imports">LocalRedefineArg-Plhdr</span> : <a href="#LocalRedefineArg_467_483" id="LocalRedefineArg_1613_1629" title="Defined at line 26">LocalRedefineArg</a>
    <span id="VarDecl-Plhdr_1634_1647" title="Not referenced locally, nor via imports">VarDecl-Plhdr</span> : <a href="#VarDecl_512_519" id="VarDecl_1650_1657" title="Defined at line 28">VarDecl</a>
    <span id="Filter-Plhdr_1662_1674" title="Not referenced locally, nor via imports">Filter-Plhdr</span> : <a href="#Filter_524_530" id="Filter_1677_1683" title="Defined at line 29">Filter</a>
    <span id="OrderExp-Plhdr_1688_1702" title="Not referenced locally, nor via imports">OrderExp-Plhdr</span> : <a href="#OrderExp_535_543" id="OrderExp_1705_1713" title="Defined at line 30">OrderExp</a>
    <span id="Limit-Plhdr_1718_1729" title="Not referenced locally, nor via imports">Limit-Plhdr</span> : <a href="#Limit_548_553" id="Limit_1732_1737" title="Defined at line 31">Limit</a>
    <span id="ForSeparator-Plhdr_1742_1760" title="Not referenced locally, nor via imports">ForSeparator-Plhdr</span> : <a href="#ForSeparator_558_570" id="ForSeparator_1763_1775" title="Defined at line 32">ForSeparator</a>
    <span id="ElseIfTempl-Plhdr_1780_1797" title="Not referenced locally, nor via imports">ElseIfTempl-Plhdr</span> : <a href="#ElseIfTempl_575_586" id="ElseIfTempl_1800_1811" title="Defined at line 33">ElseIfTempl</a>
    <span id="OptElseTempl-Plhdr_1816_1834" title="Not referenced locally, nor via imports">OptElseTempl-Plhdr</span> : <a href="#OptElseTempl_591_603" id="OptElseTempl_1837_1849" title="Defined at line 34">OptElseTempl</a>
    <span id="TemplateCaseAltExps-Plhdr_1854_1879" title="Not referenced locally, nor via imports">TemplateCaseAltExps-Plhdr</span> : <a href="#TemplateCaseAltExps_608_627" id="TemplateCaseAltExps_1882_1901" title="Defined at line 35">TemplateCaseAltExps</a>
    <span id="OptTCallArgs-Plhdr_1906_1924" title="Not referenced locally, nor via imports">OptTCallArgs-Plhdr</span> : <a href="#OptTCallArgs_632_644" id="OptTCallArgs_1927_1939" title="Defined at line 36">OptTCallArgs</a>
    <span id="OptTCallPropAssigns-Plhdr_1944_1969" title="Not referenced locally, nor via imports">OptTCallPropAssigns-Plhdr</span> : <a href="#OptTCallPropAssigns_649_668" id="OptTCallPropAssigns_1972_1991" title="Defined at line 37">OptTCallPropAssigns</a>
    <span id="TemplateBody-Plhdr_1996_2014" title="Not referenced locally, nor via imports">TemplateBody-Plhdr</span> : <a href="#TemplateBody_673_685" id="TemplateBody_2017_2029" title="Defined at line 38">TemplateBody</a>
    <span id="ArgDefine-Plhdr_2034_2049" title="Not referenced locally, nor via imports">ArgDefine-Plhdr</span> : <a href="#ArgDefine_690_699" id="ArgDefine_2052_2061" title="Defined at line 39">ArgDefine</a>
    <span id="ActionCallOrInline-Plhdr_2066_2090" title="Not referenced locally, nor via imports">ActionCallOrInline-Plhdr</span> : <a href="#ActionCallOrInline_704_722" id="ActionCallOrInline_2093_2111" title="Defined at line 40">ActionCallOrInline</a>
    <span id="ActionCallOrInlineOrExp-Plhdr_2116_2145" title="Not referenced locally, nor via imports">ActionCallOrInlineOrExp-Plhdr</span> : <a href="#ActionCallOrInlineOrExp_727_750" id="ActionCallOrInlineOrExp_2148_2171" title="Defined at line 41">ActionCallOrInlineOrExp</a>
    <span id="PropertySubmitMultiple-Plhdr_2176_2204" title="Not referenced locally, nor via imports">PropertySubmitMultiple-Plhdr</span> : <a href="#PropertySubmitMultiple_755_777" id="PropertySubmitMultiple_2207_2229" title="Defined at line 42">PropertySubmitMultiple</a>
    <span id="PropertySubmitExp-Plhdr_2234_2257" title="Not referenced locally, nor via imports">PropertySubmitExp-Plhdr</span> : <a href="#PropertySubmitExp_782_799" id="PropertySubmitExp_2260_2277" title="Defined at line 43">PropertySubmitExp</a>
    <span id="ActionModifier-Plhdr_2282_2302" title="Not referenced locally, nor via imports">ActionModifier-Plhdr</span> : <a href="#ActionModifier_838_852" id="ActionModifier_2305_2319" title="Defined at line 45">ActionModifier</a>
    <span id="TemplateCallId-Plhdr_2324_2344" title="Not referenced locally, nor via imports">TemplateCallId-Plhdr</span> : <a href="#TemplateCallId_857_871" id="TemplateCallId_2347_2361" title="Defined at line 46">TemplateCallId</a>
    <span id="FormalVarArg-Plhdr_2366_2384" title="Not referenced locally, nor via imports">FormalVarArg-Plhdr</span> : <a href="#FormalVarArg_876_888" id="FormalVarArg_2387_2399" title="Defined at line 47">FormalVarArg</a>
    <span id="ExpVarArg-Plhdr_2404_2419" title="Not referenced locally, nor via imports">ExpVarArg-Plhdr</span> : <a href="#ExpVarArg_893_902" id="ExpVarArg_2422_2431" title="Defined at line 48">ExpVarArg</a>
    <span id="ExpOrTemplateArg-Plhdr_2436_2458" title="Not referenced locally, nor via imports">ExpOrTemplateArg-Plhdr</span> : <a href="#ExpOrTemplateArg_907_923" id="ExpOrTemplateArg_2461_2477" title="Defined at line 49">ExpOrTemplateArg</a>
    <span id="HTMLWrapper-Plhdr_2482_2499" title="Not referenced locally, nor via imports">HTMLWrapper-Plhdr</span> : <a href="#HTMLWrapper_928_939" id="HTMLWrapper_2502_2513" title="Defined at line 50">HTMLWrapper</a>
    <span id="HTMLWrapperAssigns-Plhdr_2518_2542" title="Not referenced locally, nor via imports">HTMLWrapperAssigns-Plhdr</span> : <a href="#HTMLWrapperAssigns_944_962" id="HTMLWrapperAssigns_2545_2563" title="Defined at line 51">HTMLWrapperAssigns</a>
    <span id="HTMLWrapperBody-Plhdr_2568_2589" title="Not referenced locally, nor via imports">HTMLWrapperBody-Plhdr</span> : <a href="#HTMLWrapperBody_967_982" id="HTMLWrapperBody_2592_2607" title="Defined at line 52">HTMLWrapperBody</a>
    <span id="HTMLWrapperAssign-Plhdr_2612_2635" title="Not referenced locally, nor via imports">HTMLWrapperAssign-Plhdr</span> : <a href="#HTMLWrapperAssign_987_1004" id="HTMLWrapperAssign_2638_2655" title="Defined at line 53">HTMLWrapperAssign</a>
    <span id="TemplateName-Plhdr_2660_2678" title="Not referenced locally, nor via imports">TemplateName-Plhdr</span> : <a href="#TemplateName_1009_1021" id="TemplateName_2681_2693" title="Defined at line 54">TemplateName</a>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <a href="../../../../trans/static-semantics/webdsl-ui.stx#TemplateDefinition_458_476" id="TemplateDefinition_2725_2743" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 22, 23, 24, 26, 27, 31, 58">TemplateDefinition</a> : <a href="#TemplateDefinition_220_238" id="TemplateDefinition_2746_2764" title="Defined at line 13">TemplateDefinition</a> -&gt; <a href="../WebDSL-Core-sig.stx#Definition_310_320" id="Definition_2768_2778" title="Defined at ../WebDSL-Core-sig.stx line 20">Definition</a>
    <a href="../../../../trans/static-semantics/webdsl-ui.stx#Define_477_483" id="Define_2783_2789" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 22">Define</a> : <span class="keyword">list</span>(<a href="#Modifier_243_251" id="Modifier_2797_2805" title="Defined at line 14">Modifier</a>) * <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_2809_2811" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="../WebDSL-Core-sig.stx#OptFormalArgs_178_191" id="OptFormalArgs_2814_2827" title="Defined at ../WebDSL-Core-sig.stx line 12">OptFormalArgs</a> * <a href="#OptTemplateArgs_406_421" id="OptTemplateArgs_2830_2845" title="Defined at line 23">OptTemplateArgs</a> * <span class="keyword">list</span>(<a href="#TemplateElement_256_271" id="TemplateElement_2853_2868" title="Defined at line 15">TemplateElement</a>) -&gt; <a href="#TemplateDefinition_220_238" id="TemplateDefinition_2873_2891" title="Defined at line 13">TemplateDefinition</a>
    <a href="../../../../trans/static-semantics/webdsl-ui.stx#TemplateArgs_1205_1217" id="TemplateArgs_2896_2908" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 31, 62, 85">TemplateArgs</a> : <span class="keyword">list</span>(<a href="#TemplateArg_426_437" id="TemplateArg_2916_2927" title="Defined at line 24">TemplateArg</a>) -&gt; <a href="#OptTemplateArgs_406_421" id="OptTemplateArgs_2932_2947" title="Defined at line 23">OptTemplateArgs</a>
    <span id="OptTemplateArgsNone_2952_2971" title="Not referenced locally, nor via imports">OptTemplateArgsNone</span> : <a href="#OptTemplateArgs_406_421" id="OptTemplateArgs_2974_2989" title="Defined at line 23">OptTemplateArgs</a>
    <a href="../../../../trans/static-semantics/webdsl-ui.stx#TemplateArg_14782_14793" id="TemplateArg_2994_3005" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 321">TemplateArg</a> : <a href="../WebDSL-Lexical-sig.stx#TemplateId_87_97" id="TemplateId_3008_3018" title="Defined at ../WebDSL-Lexical-sig.stx line 9">TemplateId</a> * <span class="keyword">list</span>(<a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_3026_3030" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a>) -&gt; <a href="#TemplateArg_426_437" id="TemplateArg_3035_3046" title="Defined at line 24">TemplateArg</a>
    <a href="../../../../trans/static-semantics/webdsl-ui.stx#LocalRedefine_621_634" id="LocalRedefine_3051_3064" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 23">LocalRedefine</a> : <span class="keyword">list</span>(<a href="#Modifier_243_251" id="Modifier_3072_3080" title="Defined at line 14">Modifier</a>) * <a href="../WebDSL-Lexical-sig.stx#TemplateId_87_97" id="TemplateId_3084_3094" title="Defined at ../WebDSL-Lexical-sig.stx line 9">TemplateId</a> * <span class="keyword">list</span>(<a href="../WebDSL-Core-sig.stx#FormalArg_164_173" id="FormalArg_3102_3111" title="Defined at ../WebDSL-Core-sig.stx line 11">FormalArg</a>) * <a href="../WebDSL-Lexical-sig.stx#TemplateId_87_97" id="TemplateId_3115_3125" title="Defined at ../WebDSL-Lexical-sig.stx line 9">TemplateId</a> * <a href="#OptLocalRedefineArgs_442_462" id="OptLocalRedefineArgs_3128_3148" title="Defined at line 25">OptLocalRedefineArgs</a> -&gt; <a href="#TemplateDefinition_220_238" id="TemplateDefinition_3152_3170" title="Defined at line 13">TemplateDefinition</a>
    <span id="OptLocalRedefineArgsNone_3175_3199" title="Not referenced locally, nor via imports">OptLocalRedefineArgsNone</span> : <a href="#OptLocalRedefineArgs_442_462" id="OptLocalRedefineArgs_3202_3222" title="Defined at line 25">OptLocalRedefineArgs</a>
    <span id="LocalRedefineArgs_3227_3244" title="Not referenced locally, nor via imports">LocalRedefineArgs</span> : <span class="keyword">list</span>(<a href="#LocalRedefineArg_467_483" id="LocalRedefineArg_3252_3268" title="Defined at line 26">LocalRedefineArg</a>) -&gt; <a href="#OptLocalRedefineArgs_442_462" id="OptLocalRedefineArgs_3273_3293" title="Defined at line 25">OptLocalRedefineArgs</a>
    <span id="LocalRedefineArg_3298_3314" title="Not referenced locally, nor via imports">LocalRedefineArg</span> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_3317_3319" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> -&gt; <a href="#LocalRedefineArg_467_483" id="LocalRedefineArg_3323_3339" title="Defined at line 26">LocalRedefineArg</a>
    <a href="../../../../trans/static-semantics/webdsl-ui.stx#DefinePage_1166_1176" id="DefinePage_3344_3354" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 31">DefinePage</a> : <span class="keyword">list</span>(<a href="#Modifier_243_251" id="Modifier_3362_3370" title="Defined at line 14">Modifier</a>) * <a href="../WebDSL-Lexical-sig.stx#PageId_210_216" id="PageId_3374_3380" title="Defined at ../WebDSL-Lexical-sig.stx line 15">PageId</a> * <a href="../WebDSL-Core-sig.stx#OptFormalArgs_178_191" id="OptFormalArgs_3383_3396" title="Defined at ../WebDSL-Core-sig.stx line 12">OptFormalArgs</a> * <a href="#OptTemplateArgs_406_421" id="OptTemplateArgs_3399_3414" title="Defined at line 23">OptTemplateArgs</a> * <span class="keyword">list</span>(<a href="#TemplateElement_256_271" id="TemplateElement_3422_3437" title="Defined at line 15">TemplateElement</a>) -&gt; <a href="#TemplateDefinition_220_238" id="TemplateDefinition_3442_3460" title="Defined at line 13">TemplateDefinition</a>
    <a href="../../../../trans/static-semantics/webdsl-ui.stx#DefineTemplate_2526_2540" id="DefineTemplate_3465_3479" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 58, 62, 85">DefineTemplate</a> : <span class="keyword">list</span>(<a href="#Modifier_243_251" id="Modifier_3487_3495" title="Defined at line 14">Modifier</a>) * <a href="../WebDSL-Lexical-sig.stx#TemplateId_87_97" id="TemplateId_3499_3509" title="Defined at ../WebDSL-Lexical-sig.stx line 9">TemplateId</a> * <a href="../WebDSL-Core-sig.stx#OptFormalArgs_178_191" id="OptFormalArgs_3512_3525" title="Defined at ../WebDSL-Core-sig.stx line 12">OptFormalArgs</a> * <a href="#OptTemplateArgs_406_421" id="OptTemplateArgs_3528_3543" title="Defined at line 23">OptTemplateArgs</a> * <span class="keyword">list</span>(<a href="#TemplateElement_256_271" id="TemplateElement_3551_3566" title="Defined at line 15">TemplateElement</a>) -&gt; <a href="#TemplateDefinition_220_238" id="TemplateDefinition_3571_3589" title="Defined at line 13">TemplateDefinition</a>
    <a href="../../../../trans/static-semantics/webdsl-ui.stx#DefineEmail_755_766" id="DefineEmail_3594_3605" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 24">DefineEmail</a> : <span class="keyword">list</span>(<a href="#Modifier_243_251" id="Modifier_3613_3621" title="Defined at line 14">Modifier</a>) * <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_3625_3627" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="../WebDSL-Core-sig.stx#OptFormalArgs_178_191" id="OptFormalArgs_3630_3643" title="Defined at ../WebDSL-Core-sig.stx line 12">OptFormalArgs</a> * <a href="#OptTemplateArgs_406_421" id="OptTemplateArgs_3646_3661" title="Defined at line 23">OptTemplateArgs</a> * <span class="keyword">list</span>(<a href="#TemplateElement_256_271" id="TemplateElement_3669_3684" title="Defined at line 15">TemplateElement</a>) -&gt; <a href="#TemplateDefinition_220_238" id="TemplateDefinition_3689_3707" title="Defined at line 13">TemplateDefinition</a>
    <a href="../../../../trans/static-semantics/webdsl-ui.stx#Page_1690_1694" id="Page_3712_3716" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 40, 110">Page</a> : <a href="#Modifier_243_251" id="Modifier_3719_3727" title="Defined at line 14">Modifier</a>
    <span id="Email_3732_3737" title="Not referenced locally, nor via imports">Email</span> : <a href="#Modifier_243_251" id="Modifier_3740_3748" title="Defined at line 14">Modifier</a>
    <a href="../../../../trans/static-semantics/webdsl-ui.stx#AjaxTemplate_2195_2207" id="AjaxTemplate_3753_3765" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 51, 80, 101">AjaxTemplate</a> : <a href="#Modifier_243_251" id="Modifier_3768_3776" title="Defined at line 14">Modifier</a>
    <a href="../../../../trans/static-semantics/webdsl-ui.stx#Template_3328_3336" id="Template_3781_3789" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 72, 111, 112">Template</a> : <a href="#Modifier_243_251" id="Modifier_3792_3800" title="Defined at line 14">Modifier</a>
    <span id="Feed_3805_3809" title="Not referenced locally, nor via imports">Feed</span> : <a href="#Modifier_243_251" id="Modifier_3812_3820" title="Defined at line 14">Modifier</a>
    <span id="Local_3825_3830" title="Not referenced locally, nor via imports">Local</span> : <a href="#Modifier_243_251" id="Modifier_3833_3841" title="Defined at line 14">Modifier</a>
    <span id="NoSpan_3846_3852" title="Not referenced locally, nor via imports">NoSpan</span> : <a href="#Modifier_243_251" id="Modifier_3855_3863" title="Defined at line 14">Modifier</a>
    <span id="TemplateModSpan_3868_3883" title="Not referenced locally, nor via imports">TemplateModSpan</span> : <a href="#Modifier_243_251" id="Modifier_3886_3894" title="Defined at line 14">Modifier</a>
    <span id="TemplateModInline_3899_3916" title="Not referenced locally, nor via imports">TemplateModInline</span> : <a href="#Modifier_243_251" id="Modifier_3919_3927" title="Defined at line 14">Modifier</a>
    <span id="TempateModSecure_3932_3948" title="Not referenced locally, nor via imports">TempateModSecure</span> : <a href="#Modifier_243_251" id="Modifier_3951_3959" title="Defined at line 14">Modifier</a>
    <span id="TemplateModNotSecure_3964_3984" title="Not referenced locally, nor via imports">TemplateModNotSecure</span> : <a href="#Modifier_243_251" id="Modifier_3987_3995" title="Defined at line 14">Modifier</a>
    <a href="../../../../trans/static-semantics/webdsl-ui.stx#TemplateModOverride_2398_2417" id="TemplateModOverride_4000_4019" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 53, 81, 106">TemplateModOverride</a> : <a href="#Modifier_243_251" id="Modifier_4022_4030" title="Defined at line 14">Modifier</a>
    <span id="TemplateDeprecated_4035_4053" title="Not referenced locally, nor via imports">TemplateDeprecated</span> : <a href="#Modifier_243_251" id="Modifier_4056_4064" title="Defined at line 14">Modifier</a>
    <span id="ExpireCache_4069_4080" title="Not referenced locally, nor via imports">ExpireCache</span> : <a href="#Modifier_243_251" id="Modifier_4083_4091" title="Defined at line 14">Modifier</a>
    <span id="ReadOnlyPage_4096_4108" title="Not referenced locally, nor via imports">ReadOnlyPage</span> : <a href="#Modifier_243_251" id="Modifier_4111_4119" title="Defined at line 14">Modifier</a>
    <a href="../../../../trans/static-semantics/webdsl-ui.stx#WebService_2281_2291" id="WebService_4124_4134" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 52, 79">WebService</a> : <a href="#Modifier_243_251" id="Modifier_4137_4145" title="Defined at line 14">Modifier</a>
    <a href="../../../../trans/static-semantics/webdsl-ui.stx#Init_12788_12792" id="Init_4150_4154" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 275; ../../../../trans/static-semantics/ui/actions.stx line 82">Init</a> : <a href="../WebDSL-Action-sig.stx#Block_255_260" id="Block_4157_4162" title="Defined at ../WebDSL-Action-sig.stx line 15">Block</a> -&gt; <a href="#TemplateElement_256_271" id="TemplateElement_4166_4181" title="Defined at line 15">TemplateElement</a>
    <a href="../../../../trans/static-semantics/ui/actions.stx#Action2TemplateElement_2454_2476" id="Action2TemplateElement_4186_4208" title="Referenced at ../../../../trans/static-semantics/ui/actions.stx line 62">Action2TemplateElement</a> : <a href="../WebDSL-Core-sig.stx#Action_339_345" id="Action_4211_4217" title="Defined at ../WebDSL-Core-sig.stx line 22">Action</a> -&gt; <a href="#TemplateElement_256_271" id="TemplateElement_4221_4236" title="Defined at line 15">TemplateElement</a>
    <a href="../../../../trans/static-semantics/ui/actions.stx#TemplateVarDecl_760_775" id="TemplateVarDecl_4241_4256" title="Referenced at ../../../../trans/static-semantics/ui/actions.stx line 24">TemplateVarDecl</a> : <a href="../WebDSL-Lexical-sig.stx#VarId_111_116" id="VarId_4259_4264" title="Defined at ../WebDSL-Lexical-sig.stx line 10">VarId</a> * <a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_4267_4271" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a> -&gt; <a href="#VarDecl_512_519" id="VarDecl_4275_4282" title="Defined at line 28">VarDecl</a>
    <span id="TemplateVarDeclDepr_4287_4306" title="Not referenced locally, nor via imports">TemplateVarDeclDepr</span> : <a href="../WebDSL-Lexical-sig.stx#VarId_111_116" id="VarId_4309_4314" title="Defined at ../WebDSL-Lexical-sig.stx line 10">VarId</a> * <a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_4317_4321" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a> -&gt; <a href="#VarDecl_512_519" id="VarDecl_4325_4332" title="Defined at line 28">VarDecl</a>
    <a href="../../../../trans/static-semantics/ui/actions.stx#TemplateVarDeclInit_973_992" id="TemplateVarDeclInit_4337_4356" title="Referenced at ../../../../trans/static-semantics/ui/actions.stx line 30">TemplateVarDeclInit</a> : <a href="../WebDSL-Lexical-sig.stx#VarId_111_116" id="VarId_4359_4364" title="Defined at ../WebDSL-Lexical-sig.stx line 10">VarId</a> * <a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_4367_4371" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_4374_4377" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#VarDecl_512_519" id="VarDecl_4381_4388" title="Defined at line 28">VarDecl</a>
    <span id="TemplateVarDeclInitDepr_4393_4416" title="Not referenced locally, nor via imports">TemplateVarDeclInitDepr</span> : <a href="../WebDSL-Lexical-sig.stx#VarId_111_116" id="VarId_4419_4424" title="Defined at ../WebDSL-Lexical-sig.stx line 10">VarId</a> * <a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_4427_4431" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_4434_4437" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#VarDecl_512_519" id="VarDecl_4441_4448" title="Defined at line 28">VarDecl</a>
    <a href="../../../../trans/static-semantics/ui/actions.stx#TemplateVarDeclInitInferred_1276_1303" id="TemplateVarDeclInitInferred_4453_4480" title="Referenced at ../../../../trans/static-semantics/ui/actions.stx line 37">TemplateVarDeclInitInferred</a> : <a href="../WebDSL-Lexical-sig.stx#VarId_111_116" id="VarId_4483_4488" title="Defined at ../WebDSL-Lexical-sig.stx line 10">VarId</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_4491_4494" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#VarDecl_512_519" id="VarDecl_4498_4505" title="Defined at line 28">VarDecl</a>
    <span id="TemplateVarDeclInitInferredDepr_4510_4541" title="Not referenced locally, nor via imports">TemplateVarDeclInitInferredDepr</span> : <a href="../WebDSL-Lexical-sig.stx#VarId_111_116" id="VarId_4544_4549" title="Defined at ../WebDSL-Lexical-sig.stx line 10">VarId</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_4552_4555" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#VarDecl_512_519" id="VarDecl_4559_4566" title="Defined at line 28">VarDecl</a>
    <a href="../../../../trans/static-semantics/webdsl-ui.stx#TEVarDecl_12548_12557" id="TEVarDecl_4571_4580" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 271; ../../../../trans/static-semantics/ui/actions.stx line 19">TEVarDecl</a> : <a href="#VarDecl_512_519" id="VarDecl_4583_4590" title="Defined at line 28">VarDecl</a> -&gt; <a href="#TemplateElement_256_271" id="TemplateElement_4594_4609" title="Defined at line 15">TemplateElement</a>
    <a href="../../../../trans/static-semantics/ui/actions.stx#RequestScopeTemplate_503_523" id="RequestScopeTemplate_4614_4634" title="Referenced at ../../../../trans/static-semantics/ui/actions.stx line 20">RequestScopeTemplate</a> : <a href="#VarDecl_512_519" id="VarDecl_4637_4644" title="Defined at line 28">VarDecl</a> -&gt; <a href="#TemplateElement_256_271" id="TemplateElement_4648_4663" title="Defined at line 15">TemplateElement</a>
    <a href="../../../../trans/static-semantics/ui/actions.stx#LocalScopeTemplate_610_628" id="LocalScopeTemplate_4668_4686" title="Referenced at ../../../../trans/static-semantics/ui/actions.stx line 21">LocalScopeTemplate</a> : <a href="#VarDecl_512_519" id="VarDecl_4689_4696" title="Defined at line 28">VarDecl</a> -&gt; <a href="#TemplateElement_256_271" id="TemplateElement_4700_4715" title="Defined at line 15">TemplateElement</a>
    <a href="../../../../trans/static-semantics/webdsl-ui.stx#TemplateDefinition2TemplateElement_8958_8992" id="TemplateDefinition2TemplateElement_4720_4754" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 183">TemplateDefinition2TemplateElement</a> : <a href="#TemplateDefinition_220_238" id="TemplateDefinition_4757_4775" title="Defined at line 13">TemplateDefinition</a> -&gt; <a href="#TemplateElement_256_271" id="TemplateElement_4779_4794" title="Defined at line 15">TemplateElement</a>
    <a href="../../../../trans/static-semantics/ui/template-calls.stx#TemplateCall2TemplateElement_410_438" id="TemplateCall2TemplateElement_4799_4827" title="Referenced at ../../../../trans/static-semantics/ui/template-calls.stx line 20">TemplateCall2TemplateElement</a> : <a href="#TemplateCall_303_315" id="TemplateCall_4830_4842" title="Defined at line 18">TemplateCall</a> -&gt; <a href="#TemplateElement_256_271" id="TemplateElement_4846_4861" title="Defined at line 15">TemplateElement</a>
    <span id="FilterNoOrderByNoLimit_4866_4888" title="Not referenced locally, nor via imports">FilterNoOrderByNoLimit</span> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_4891_4894" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#Filter_524_530" id="Filter_4898_4904" title="Defined at line 29">Filter</a>
    <span id="FilterNoWhereNoLimit_4909_4929" title="Not referenced locally, nor via imports">FilterNoWhereNoLimit</span> : <span class="keyword">list</span>(<a href="#OrderExp_535_543" id="OrderExp_4937_4945" title="Defined at line 30">OrderExp</a>) -&gt; <a href="#Filter_524_530" id="Filter_4950_4956" title="Defined at line 29">Filter</a>
    <span id="FilterNoLimit_4961_4974" title="Not referenced locally, nor via imports">FilterNoLimit</span> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_4977_4980" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <span class="keyword">list</span>(<a href="#OrderExp_535_543" id="OrderExp_4988_4996" title="Defined at line 30">OrderExp</a>) -&gt; <a href="#Filter_524_530" id="Filter_5001_5007" title="Defined at line 29">Filter</a>
    <span id="FilterNoOrderBy_5012_5027" title="Not referenced locally, nor via imports">FilterNoOrderBy</span> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_5030_5033" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <a href="#Limit_548_553" id="Limit_5036_5041" title="Defined at line 31">Limit</a> -&gt; <a href="#Filter_524_530" id="Filter_5045_5051" title="Defined at line 29">Filter</a>
    <span id="FilterNoWhere_5056_5069" title="Not referenced locally, nor via imports">FilterNoWhere</span> : <span class="keyword">list</span>(<a href="#OrderExp_535_543" id="OrderExp_5077_5085" title="Defined at line 30">OrderExp</a>) * <a href="#Limit_548_553" id="Limit_5089_5094" title="Defined at line 31">Limit</a> -&gt; <a href="#Filter_524_530" id="Filter_5098_5104" title="Defined at line 29">Filter</a>
    <span id="FilterNoWhereNoOrderBy_5109_5131" title="Not referenced locally, nor via imports">FilterNoWhereNoOrderBy</span> : <a href="#Limit_548_553" id="Limit_5134_5139" title="Defined at line 31">Limit</a> -&gt; <a href="#Filter_524_530" id="Filter_5143_5149" title="Defined at line 29">Filter</a>
    <span id="Filter_5154_5160" title="Not referenced locally, nor via imports">Filter</span> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_5163_5166" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <span class="keyword">list</span>(<a href="#OrderExp_535_543" id="OrderExp_5174_5182" title="Defined at line 30">OrderExp</a>) * <a href="#Limit_548_553" id="Limit_5186_5191" title="Defined at line 31">Limit</a> -&gt; <a href="#Filter_524_530" id="Filter_5195_5201" title="Defined at line 29">Filter</a>
    <span id="OrderNonSpecific_5206_5222" title="Not referenced locally, nor via imports">OrderNonSpecific</span> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_5225_5228" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#OrderExp_535_543" id="OrderExp_5232_5240" title="Defined at line 30">OrderExp</a>
    <span id="OrderAscending_5245_5259" title="Not referenced locally, nor via imports">OrderAscending</span> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_5262_5265" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#OrderExp_535_543" id="OrderExp_5269_5277" title="Defined at line 30">OrderExp</a>
    <span id="OrderDescending_5282_5297" title="Not referenced locally, nor via imports">OrderDescending</span> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_5300_5303" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#OrderExp_535_543" id="OrderExp_5307_5315" title="Defined at line 30">OrderExp</a>
    <span id="Limit_5320_5325" title="Not referenced locally, nor via imports">Limit</span> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_5328_5331" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_5334_5337" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#Limit_548_553" id="Limit_5341_5346" title="Defined at line 31">Limit</a>
    <span id="LimitNoOffset_5351_5364" title="Not referenced locally, nor via imports">LimitNoOffset</span> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_5367_5370" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#Limit_548_553" id="Limit_5374_5379" title="Defined at line 31">Limit</a>
    <span id="LimitNoLimit_5384_5396" title="Not referenced locally, nor via imports">LimitNoLimit</span> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_5399_5402" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#Limit_548_553" id="Limit_5406_5411" title="Defined at line 31">Limit</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#OptFilterSome_6905_6918" id="OptFilterSome_5416_5429" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 165, 177, 185; ../../../../trans/static-semantics/webdsl-ui.stx line 211, 224, 233; ../../../../trans/static-semantics/ui/actions.stx line 142, 156, 166">OptFilterSome</a> : <a href="#Filter_524_530" id="Filter_5432_5438" title="Defined at line 29">Filter</a> -&gt; <a href="#OptFilter_276_285" id="OptFilter_5442_5451" title="Defined at line 16">OptFilter</a>
    <span id="OptFilterNone_5456_5469" title="Not referenced locally, nor via imports">OptFilterNone</span> : <a href="#OptFilter_276_285" id="OptFilter_5472_5481" title="Defined at line 16">OptFilter</a>
    <a href="../../../../trans/static-semantics/webdsl-ui.stx#For_9935_9938" id="For_5486_5489" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 211">For</a> : <a href="../WebDSL-Lexical-sig.stx#VarId_111_116" id="VarId_5492_5497" title="Defined at ../WebDSL-Lexical-sig.stx line 10">VarId</a> * <a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_5500_5504" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_5507_5510" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <a href="#OptFilter_276_285" id="OptFilter_5513_5522" title="Defined at line 16">OptFilter</a> * <span class="keyword">list</span>(<a href="#TemplateElement_256_271" id="TemplateElement_5530_5545" title="Defined at line 15">TemplateElement</a>) * <a href="#ForSeparator_558_570" id="ForSeparator_5549_5561" title="Defined at line 32">ForSeparator</a> -&gt; <a href="#TemplateElement_256_271" id="TemplateElement_5565_5580" title="Defined at line 15">TemplateElement</a>
    <a href="../../../../trans/static-semantics/webdsl-ui.stx#ForInferred_10514_10525" id="ForInferred_5585_5596" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 224">ForInferred</a> : <a href="../WebDSL-Lexical-sig.stx#VarId_111_116" id="VarId_5599_5604" title="Defined at ../WebDSL-Lexical-sig.stx line 10">VarId</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_5607_5610" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <a href="#OptFilter_276_285" id="OptFilter_5613_5622" title="Defined at line 16">OptFilter</a> * <span class="keyword">list</span>(<a href="#TemplateElement_256_271" id="TemplateElement_5630_5645" title="Defined at line 15">TemplateElement</a>) * <a href="#ForSeparator_558_570" id="ForSeparator_5649_5661" title="Defined at line 32">ForSeparator</a> -&gt; <a href="#TemplateElement_256_271" id="TemplateElement_5665_5680" title="Defined at line 15">TemplateElement</a>
    <a href="../../../../trans/static-semantics/webdsl-ui.stx#ForAll_10884_10890" id="ForAll_5685_5691" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 233">ForAll</a> : <a href="../WebDSL-Lexical-sig.stx#VarId_111_116" id="VarId_5694_5699" title="Defined at ../WebDSL-Lexical-sig.stx line 10">VarId</a> * <a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_5702_5706" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a> * <a href="#OptFilter_276_285" id="OptFilter_5709_5718" title="Defined at line 16">OptFilter</a> * <span class="keyword">list</span>(<a href="#TemplateElement_256_271" id="TemplateElement_5726_5741" title="Defined at line 15">TemplateElement</a>) * <a href="#ForSeparator_558_570" id="ForSeparator_5745_5757" title="Defined at line 32">ForSeparator</a> -&gt; <a href="#TemplateElement_256_271" id="TemplateElement_5761_5776" title="Defined at line 15">TemplateElement</a>
    <a href="../../../../trans/static-semantics/webdsl-ui.stx#ForCount_11230_11238" id="ForCount_5781_5789" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 241">ForCount</a> : <a href="../WebDSL-Lexical-sig.stx#VarId_111_116" id="VarId_5792_5797" title="Defined at ../WebDSL-Lexical-sig.stx line 10">VarId</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_5800_5803" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_5806_5809" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <span class="keyword">list</span>(<a href="#TemplateElement_256_271" id="TemplateElement_5817_5832" title="Defined at line 15">TemplateElement</a>) * <a href="#ForSeparator_558_570" id="ForSeparator_5836_5848" title="Defined at line 32">ForSeparator</a> -&gt; <a href="#TemplateElement_256_271" id="TemplateElement_5852_5867" title="Defined at line 15">TemplateElement</a>
    <a href="../../../../trans/static-semantics/webdsl-ui.stx#ForSeparator_9977_9989" id="ForSeparator_5872_5884" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 211, 224, 233, 241">ForSeparator</a> : <span class="keyword">list</span>(<a href="#TemplateElement_256_271" id="TemplateElement_5892_5907" title="Defined at line 15">TemplateElement</a>) -&gt; <a href="#ForSeparator_558_570" id="ForSeparator_5912_5924" title="Defined at line 32">ForSeparator</a>
    <span id="ForSeparatorNone_5929_5945" title="Not referenced locally, nor via imports">ForSeparatorNone</span> : <a href="#ForSeparator_558_570" id="ForSeparator_5948_5960" title="Defined at line 32">ForSeparator</a>
    <a href="../../../../trans/static-semantics/webdsl-ui.stx#IfTempl_8732_8739" id="IfTempl_5965_5972" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 178">IfTempl</a> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_5975_5978" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <span class="keyword">list</span>(<a href="#TemplateElement_256_271" id="TemplateElement_5986_6001" title="Defined at line 15">TemplateElement</a>) * <span class="keyword">list</span>(<a href="#TemplateElement_256_271" id="TemplateElement_6010_6025" title="Defined at line 15">TemplateElement</a>) -&gt; <a href="#TemplateElement_256_271" id="TemplateElement_6030_6045" title="Defined at line 15">TemplateElement</a>
    <span id="IfNoElseTempl_6050_6063" title="Not referenced locally, nor via imports">IfNoElseTempl</span> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_6066_6069" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <span class="keyword">list</span>(<a href="#TemplateElement_256_271" id="TemplateElement_6077_6092" title="Defined at line 15">TemplateElement</a>) -&gt; <a href="#TemplateElement_256_271" id="TemplateElement_6097_6112" title="Defined at line 15">TemplateElement</a>
    <span id="IfElseIfTempl_6117_6130" title="Not referenced locally, nor via imports">IfElseIfTempl</span> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_6133_6136" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <span class="keyword">list</span>(<a href="#TemplateElement_256_271" id="TemplateElement_6144_6159" title="Defined at line 15">TemplateElement</a>) * <span class="keyword">list</span>(<a href="#ElseIfTempl_575_586" id="ElseIfTempl_6168_6179" title="Defined at line 33">ElseIfTempl</a>) * <a href="#OptElseTempl_591_603" id="OptElseTempl_6183_6195" title="Defined at line 34">OptElseTempl</a> -&gt; <a href="#TemplateElement_256_271" id="TemplateElement_6199_6214" title="Defined at line 15">TemplateElement</a>
    <span id="OptElseTemplNone_6219_6235" title="Not referenced locally, nor via imports">OptElseTemplNone</span> : <a href="#OptElseTempl_591_603" id="OptElseTempl_6238_6250" title="Defined at line 34">OptElseTempl</a>
    <span id="ElseTempl_6255_6264" title="Not referenced locally, nor via imports">ElseTempl</span> : <span class="keyword">list</span>(<a href="#TemplateElement_256_271" id="TemplateElement_6272_6287" title="Defined at line 15">TemplateElement</a>) -&gt; <a href="#OptElseTempl_591_603" id="OptElseTempl_6292_6304" title="Defined at line 34">OptElseTempl</a>
    <span id="ElseIfTempl_6309_6320" title="Not referenced locally, nor via imports">ElseIfTempl</span> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_6323_6326" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <span class="keyword">list</span>(<a href="#TemplateElement_256_271" id="TemplateElement_6334_6349" title="Defined at line 15">TemplateElement</a>) -&gt; <a href="#ElseIfTempl_575_586" id="ElseIfTempl_6354_6365" title="Defined at line 33">ElseIfTempl</a>
    <span id="TemplateCase_6370_6382" title="Not referenced locally, nor via imports">TemplateCase</span> : <span class="keyword">list</span>(<a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_6390_6393" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a>) * <span class="keyword">list</span>(<a href="#TemplateCaseAlt_362_377" id="TemplateCaseAlt_6402_6417" title="Defined at line 21">TemplateCaseAlt</a>) -&gt; <a href="#TemplateElement_256_271" id="TemplateElement_6422_6437" title="Defined at line 15">TemplateElement</a>
    <span id="TemplateCaseAlt_6442_6457" title="Not referenced locally, nor via imports">TemplateCaseAlt</span> : <a href="#TemplateCaseAltExps_608_627" id="TemplateCaseAltExps_6460_6479" title="Defined at line 35">TemplateCaseAltExps</a> * <span class="keyword">list</span>(<a href="#TemplateElement_256_271" id="TemplateElement_6487_6502" title="Defined at line 15">TemplateElement</a>) -&gt; <a href="#TemplateCaseAlt_362_377" id="TemplateCaseAlt_6507_6522" title="Defined at line 21">TemplateCaseAlt</a>
    <span id="TemplateCaseAltDefault_6527_6549" title="Not referenced locally, nor via imports">TemplateCaseAltDefault</span> : <span class="keyword">list</span>(<a href="#TemplateElement_256_271" id="TemplateElement_6557_6572" title="Defined at line 15">TemplateElement</a>) -&gt; <a href="#TemplateCaseAlt_362_377" id="TemplateCaseAlt_6577_6592" title="Defined at line 21">TemplateCaseAlt</a>
    <span id="TemplateTypeCase_6597_6613" title="Not referenced locally, nor via imports">TemplateTypeCase</span> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_6616_6619" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <a href="../WebDSL-Action-sig.stx#OptTypeAlias_335_347" id="OptTypeAlias_6622_6634" title="Defined at ../WebDSL-Action-sig.stx line 21">OptTypeAlias</a> * <span class="keyword">list</span>(<a href="#TemplateTypeCaseAlt_382_401" id="TemplateTypeCaseAlt_6642_6661" title="Defined at line 22">TemplateTypeCaseAlt</a>) -&gt; <a href="#TemplateElement_256_271" id="TemplateElement_6666_6681" title="Defined at line 15">TemplateElement</a>
    <span id="TemplateTypeCaseAlt_6686_6705" title="Not referenced locally, nor via imports">TemplateTypeCaseAlt</span> : <a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_6708_6712" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a> * <span class="keyword">list</span>(<a href="#TemplateElement_256_271" id="TemplateElement_6720_6735" title="Defined at line 15">TemplateElement</a>) -&gt; <a href="#TemplateTypeCaseAlt_382_401" id="TemplateTypeCaseAlt_6740_6759" title="Defined at line 22">TemplateTypeCaseAlt</a>
    <span id="TemplateTypeCaseDefault_6764_6787" title="Not referenced locally, nor via imports">TemplateTypeCaseDefault</span> : <span class="keyword">list</span>(<a href="#TemplateElement_256_271" id="TemplateElement_6795_6810" title="Defined at line 15">TemplateElement</a>) -&gt; <a href="#TemplateTypeCaseAlt_382_401" id="TemplateTypeCaseAlt_6815_6834" title="Defined at line 22">TemplateTypeCaseAlt</a>
    <span id="TemplateCaseExps_6839_6855" title="Not referenced locally, nor via imports">TemplateCaseExps</span> : <span class="keyword">list</span>(<a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_6863_6866" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a>) -&gt; <a href="#TemplateCaseAltExps_608_627" id="TemplateCaseAltExps_6871_6890" title="Defined at line 35">TemplateCaseAltExps</a>
    <a href="../../../../trans/static-semantics/ui/template-calls.stx#TemplateCall_902_914" id="TemplateCall_6895_6907" title="Referenced at ../../../../trans/static-semantics/ui/template-calls.stx line 31, 57, 66, 69">TemplateCall</a> : <a href="#TemplateCallId_857_871" id="TemplateCallId_6910_6924" title="Defined at line 46">TemplateCallId</a> * <a href="#OptTCallArgs_632_644" id="OptTCallArgs_6927_6939" title="Defined at line 36">OptTCallArgs</a> * <a href="#OptTCallPropAssigns_649_668" id="OptTCallPropAssigns_6942_6961" title="Defined at line 37">OptTCallPropAssigns</a> * <a href="#TemplateBody_673_685" id="TemplateBody_6964_6976" title="Defined at line 38">TemplateBody</a> -&gt; <a href="#TemplateCall_303_315" id="TemplateCall_6980_6992" title="Defined at line 18">TemplateCall</a>
    <a href="../../../../trans/static-semantics/ui/template-calls.stx#TCallArgs_934_943" id="TCallArgs_6997_7006" title="Referenced at ../../../../trans/static-semantics/ui/template-calls.stx line 31, 57, 66, 69">TCallArgs</a> : <span class="keyword">list</span>(<a href="#TemplateArgExp_343_357" id="TemplateArgExp_7014_7028" title="Defined at line 20">TemplateArgExp</a>) -&gt; <a href="#OptTCallArgs_632_644" id="OptTCallArgs_7033_7045" title="Defined at line 36">OptTCallArgs</a>
    <span id="OptTCallArgsNone_7050_7066" title="Not referenced locally, nor via imports">OptTCallArgsNone</span> : <a href="#OptTCallArgs_632_644" id="OptTCallArgs_7069_7081" title="Defined at line 36">OptTCallArgs</a>
    <a href="../../../../trans/static-semantics/ui/template-calls.stx#Exp_2061_2064" id="Exp_7086_7089" title="Referenced at ../../../../trans/static-semantics/ui/template-calls.stx line 49, 66, 69, 69, 130">Exp</a> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_7092_7095" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#TemplateArgExp_343_357" id="TemplateArgExp_7099_7113" title="Defined at line 20">TemplateArgExp</a>
    <a href="../../../../trans/static-semantics/ui/template-calls.stx#TemplateElementsArgument_2139_2163" id="TemplateElementsArgument_7118_7142" title="Referenced at ../../../../trans/static-semantics/ui/template-calls.stx line 50">TemplateElementsArgument</a> : <span class="keyword">list</span>(<a href="#TemplateElement_256_271" id="TemplateElement_7150_7165" title="Defined at line 15">TemplateElement</a>) -&gt; <a href="#TemplateArgExp_343_357" id="TemplateArgExp_7170_7184" title="Defined at line 20">TemplateArgExp</a>
    <a href="../../../../trans/static-semantics/ui/template-calls.stx#TCallPropAssigns_952_968" id="TCallPropAssigns_7189_7205" title="Referenced at ../../../../trans/static-semantics/ui/template-calls.stx line 31, 57">TCallPropAssigns</a> : <span class="keyword">list</span>(<a href="#PropertyAssignment_320_338" id="PropertyAssignment_7213_7231" title="Defined at line 19">PropertyAssignment</a>) -&gt; <a href="#OptTCallPropAssigns_649_668" id="OptTCallPropAssigns_7236_7255" title="Defined at line 37">OptTCallPropAssigns</a>
    <span id="OptTCallPropAssignsNone_7260_7283" title="Not referenced locally, nor via imports">OptTCallPropAssignsNone</span> : <a href="#OptTCallPropAssigns_649_668" id="OptTCallPropAssigns_7286_7305" title="Defined at line 37">OptTCallPropAssigns</a>
    <a href="../../../../trans/static-semantics/ui/template-calls.stx#TemplateBody_983_995" id="TemplateBody_7310_7322" title="Referenced at ../../../../trans/static-semantics/ui/template-calls.stx line 31, 57">TemplateBody</a> : <span class="keyword">list</span>(<a href="#TemplateElement_256_271" id="TemplateElement_7330_7345" title="Defined at line 15">TemplateElement</a>) -&gt; <a href="#TemplateBody_673_685" id="TemplateBody_7350_7362" title="Defined at line 38">TemplateBody</a>
    <span id="TemplateBodyNone_7367_7383" title="Not referenced locally, nor via imports">TemplateBodyNone</span> : <a href="#TemplateBody_673_685" id="TemplateBody_7386_7398" title="Defined at line 38">TemplateBody</a>
    <span id="TemplateWith_7403_7415" title="Not referenced locally, nor via imports">TemplateWith</span> : <span class="keyword">list</span>(<a href="#ArgDefine_690_699" id="ArgDefine_7423_7432" title="Defined at line 39">ArgDefine</a>) -&gt; <a href="#TemplateBody_673_685" id="TemplateBody_7437_7449" title="Defined at line 38">TemplateBody</a>
    <span id="ArgDefine_7454_7463" title="Not referenced locally, nor via imports">ArgDefine</span> : <a href="#TemplateCallId_857_871" id="TemplateCallId_7466_7480" title="Defined at line 46">TemplateCallId</a> * <span class="keyword">list</span>(<a href="../WebDSL-Core-sig.stx#FormalArg_164_173" id="FormalArg_7488_7497" title="Defined at ../WebDSL-Core-sig.stx line 11">FormalArg</a>) * <span class="keyword">list</span>(<a href="#TemplateElement_256_271" id="TemplateElement_7506_7521" title="Defined at line 15">TemplateElement</a>) -&gt; <a href="#ArgDefine_690_699" id="ArgDefine_7526_7535" title="Defined at line 39">ArgDefine</a>
    <span id="NavigateCallParenthesesNoProps_7540_7570" title="Not referenced locally, nor via imports">NavigateCallParenthesesNoProps</span> : <a href="#PageCall_290_298" id="PageCall_7573_7581" title="Defined at line 17">PageCall</a> * <span class="keyword">list</span>(<a href="#TemplateElement_256_271" id="TemplateElement_7589_7604" title="Defined at line 15">TemplateElement</a>) -&gt; <a href="#TemplateElement_256_271" id="TemplateElement_7609_7624" title="Defined at line 15">TemplateElement</a>
    <span id="NavigateCallParentheses_7629_7652" title="Not referenced locally, nor via imports">NavigateCallParentheses</span> : <a href="#PageCall_290_298" id="PageCall_7655_7663" title="Defined at line 17">PageCall</a> * <span class="keyword">list</span>(<a href="#PropertyAssignment_320_338" id="PropertyAssignment_7671_7689" title="Defined at line 19">PropertyAssignment</a>) * <span class="keyword">list</span>(<a href="#TemplateElement_256_271" id="TemplateElement_7698_7713" title="Defined at line 15">TemplateElement</a>) -&gt; <a href="#TemplateElement_256_271" id="TemplateElement_7718_7733" title="Defined at line 15">TemplateElement</a>
    <span id="NavigateCallNoProps_7738_7757" title="Not referenced locally, nor via imports">NavigateCallNoProps</span> : <a href="#PageCall_290_298" id="PageCall_7760_7768" title="Defined at line 17">PageCall</a> * <span class="keyword">list</span>(<a href="#TemplateElement_256_271" id="TemplateElement_7776_7791" title="Defined at line 15">TemplateElement</a>) -&gt; <a href="#TemplateElement_256_271" id="TemplateElement_7796_7811" title="Defined at line 15">TemplateElement</a>
    <a href="../../../../trans/static-semantics/ui/template-calls.stx#NavigateCall_3394_3406" id="NavigateCall_7816_7828" title="Referenced at ../../../../trans/static-semantics/ui/template-calls.stx line 75">NavigateCall</a> : <a href="#PageCall_290_298" id="PageCall_7831_7839" title="Defined at line 17">PageCall</a> * <span class="keyword">list</span>(<a href="#PropertyAssignment_320_338" id="PropertyAssignment_7847_7865" title="Defined at line 19">PropertyAssignment</a>) * <span class="keyword">list</span>(<a href="#TemplateElement_256_271" id="TemplateElement_7874_7889" title="Defined at line 15">TemplateElement</a>) -&gt; <a href="#TemplateElement_256_271" id="TemplateElement_7894_7909" title="Defined at line 15">TemplateElement</a>
    <a href="../../../../trans/static-semantics/ui/template-calls.stx#PageCall_3583_3591" id="PageCall_7914_7922" title="Referenced at ../../../../trans/static-semantics/ui/template-calls.stx line 81">PageCall</a> : <a href="../WebDSL-Lexical-sig.stx#PageId_210_216" id="PageId_7925_7931" title="Defined at ../WebDSL-Lexical-sig.stx line 15">PageId</a> * <span class="keyword">list</span>(<a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_7939_7942" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a>) -&gt; <a href="#PageCall_290_298" id="PageCall_7947_7955" title="Defined at line 17">PageCall</a>
    <span id="SubmitActionNoProps_7960_7979" title="Not referenced locally, nor via imports">SubmitActionNoProps</span> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_7982_7985" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <a href="#ActionCallOrInline_704_722" id="ActionCallOrInline_7988_8006" title="Defined at line 40">ActionCallOrInline</a> -&gt; <a href="#TemplateElement_256_271" id="TemplateElement_8010_8025" title="Defined at line 15">TemplateElement</a>
    <span id="SubmitAction_8030_8042" title="Not referenced locally, nor via imports">SubmitAction</span> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_8045_8048" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <a href="#ActionCallOrInline_704_722" id="ActionCallOrInline_8051_8069" title="Defined at line 40">ActionCallOrInline</a> * <span class="keyword">list</span>(<a href="#PropertyAssignment_320_338" id="PropertyAssignment_8077_8095" title="Defined at line 19">PropertyAssignment</a>) -&gt; <a href="#TemplateElement_256_271" id="TemplateElement_8100_8115" title="Defined at line 15">TemplateElement</a>
    <span id="SubmitLinkActionNoProps_8120_8143" title="Not referenced locally, nor via imports">SubmitLinkActionNoProps</span> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_8146_8149" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <a href="#ActionCallOrInline_704_722" id="ActionCallOrInline_8152_8170" title="Defined at line 40">ActionCallOrInline</a> -&gt; <a href="#TemplateElement_256_271" id="TemplateElement_8174_8189" title="Defined at line 15">TemplateElement</a>
    <span id="SubmitLinkAction_8194_8210" title="Not referenced locally, nor via imports">SubmitLinkAction</span> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_8213_8216" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <a href="#ActionCallOrInline_704_722" id="ActionCallOrInline_8219_8237" title="Defined at line 40">ActionCallOrInline</a> * <span class="keyword">list</span>(<a href="#PropertyAssignment_320_338" id="PropertyAssignment_8245_8263" title="Defined at line 19">PropertyAssignment</a>) -&gt; <a href="#TemplateElement_256_271" id="TemplateElement_8268_8283" title="Defined at line 15">TemplateElement</a>
    <span id="SubmitNoProps_8288_8301" title="Not referenced locally, nor via imports">SubmitNoProps</span> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_8304_8307" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <a href="#ActionCallOrInline_704_722" id="ActionCallOrInline_8310_8328" title="Defined at line 40">ActionCallOrInline</a> -&gt; <a href="#TemplateElement_256_271" id="TemplateElement_8332_8347" title="Defined at line 15">TemplateElement</a>
    <span id="Submit_8352_8358" title="Not referenced locally, nor via imports">Submit</span> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_8361_8364" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <a href="#ActionCallOrInline_704_722" id="ActionCallOrInline_8367_8385" title="Defined at line 40">ActionCallOrInline</a> * <span class="keyword">list</span>(<a href="#PropertyAssignment_320_338" id="PropertyAssignment_8393_8411" title="Defined at line 19">PropertyAssignment</a>) -&gt; <a href="#TemplateElement_256_271" id="TemplateElement_8416_8431" title="Defined at line 15">TemplateElement</a>
    <span id="SubmitLinkNoProps_8436_8453" title="Not referenced locally, nor via imports">SubmitLinkNoProps</span> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_8456_8459" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <a href="#ActionCallOrInline_704_722" id="ActionCallOrInline_8462_8480" title="Defined at line 40">ActionCallOrInline</a> -&gt; <a href="#TemplateElement_256_271" id="TemplateElement_8484_8499" title="Defined at line 15">TemplateElement</a>
    <span id="SubmitLink_8504_8514" title="Not referenced locally, nor via imports">SubmitLink</span> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_8517_8520" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <a href="#ActionCallOrInline_704_722" id="ActionCallOrInline_8523_8541" title="Defined at line 40">ActionCallOrInline</a> * <span class="keyword">list</span>(<a href="#PropertyAssignment_320_338" id="PropertyAssignment_8549_8567" title="Defined at line 19">PropertyAssignment</a>) -&gt; <a href="#TemplateElement_256_271" id="TemplateElement_8572_8587" title="Defined at line 15">TemplateElement</a>
    <span id="SubmitElemNoProps_8592_8609" title="Not referenced locally, nor via imports">SubmitElemNoProps</span> : <a href="#ActionCallOrInline_704_722" id="ActionCallOrInline_8612_8630" title="Defined at line 40">ActionCallOrInline</a> * <span class="keyword">list</span>(<a href="#TemplateElement_256_271" id="TemplateElement_8638_8653" title="Defined at line 15">TemplateElement</a>) -&gt; <a href="#TemplateElement_256_271" id="TemplateElement_8658_8673" title="Defined at line 15">TemplateElement</a>
    <a href="../../../../trans/static-semantics/webdsl-ui.stx#SubmitElem_9060_9070" id="SubmitElem_8678_8688" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 185">SubmitElem</a> : <a href="#ActionCallOrInline_704_722" id="ActionCallOrInline_8691_8709" title="Defined at line 40">ActionCallOrInline</a> * <span class="keyword">list</span>(<a href="#PropertyAssignment_320_338" id="PropertyAssignment_8717_8735" title="Defined at line 19">PropertyAssignment</a>) * <span class="keyword">list</span>(<a href="#TemplateElement_256_271" id="TemplateElement_8744_8759" title="Defined at line 15">TemplateElement</a>) -&gt; <a href="#TemplateElement_256_271" id="TemplateElement_8764_8779" title="Defined at line 15">TemplateElement</a>
    <span id="SubmitLinkElemNoProps_8784_8805" title="Not referenced locally, nor via imports">SubmitLinkElemNoProps</span> : <a href="#ActionCallOrInline_704_722" id="ActionCallOrInline_8808_8826" title="Defined at line 40">ActionCallOrInline</a> * <span class="keyword">list</span>(<a href="#TemplateElement_256_271" id="TemplateElement_8834_8849" title="Defined at line 15">TemplateElement</a>) -&gt; <a href="#TemplateElement_256_271" id="TemplateElement_8854_8869" title="Defined at line 15">TemplateElement</a>
    <a href="../../../../trans/static-semantics/webdsl-ui.stx#SubmitLinkElem_9240_9254" id="SubmitLinkElem_8874_8888" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 190">SubmitLinkElem</a> : <a href="#ActionCallOrInline_704_722" id="ActionCallOrInline_8891_8909" title="Defined at line 40">ActionCallOrInline</a> * <span class="keyword">list</span>(<a href="#PropertyAssignment_320_338" id="PropertyAssignment_8917_8935" title="Defined at line 19">PropertyAssignment</a>) * <span class="keyword">list</span>(<a href="#TemplateElement_256_271" id="TemplateElement_8944_8959" title="Defined at line 15">TemplateElement</a>) -&gt; <a href="#TemplateElement_256_271" id="TemplateElement_8964_8979" title="Defined at line 15">TemplateElement</a>
    <span id="DownloadLinkNoProps_8984_9003" title="Not referenced locally, nor via imports">DownloadLinkNoProps</span> : <a href="#ActionCallOrInline_704_722" id="ActionCallOrInline_9006_9024" title="Defined at line 40">ActionCallOrInline</a> * <span class="keyword">list</span>(<a href="#TemplateElement_256_271" id="TemplateElement_9032_9047" title="Defined at line 15">TemplateElement</a>) -&gt; <a href="#TemplateElement_256_271" id="TemplateElement_9052_9067" title="Defined at line 15">TemplateElement</a>
    <a href="../../../../trans/static-semantics/webdsl-ui.stx#DownloadLink_9424_9436" id="DownloadLink_9072_9084" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 195">DownloadLink</a> : <a href="#ActionCallOrInline_704_722" id="ActionCallOrInline_9087_9105" title="Defined at line 40">ActionCallOrInline</a> * <span class="keyword">list</span>(<a href="#PropertyAssignment_320_338" id="PropertyAssignment_9113_9131" title="Defined at line 19">PropertyAssignment</a>) * <span class="keyword">list</span>(<a href="#TemplateElement_256_271" id="TemplateElement_9140_9155" title="Defined at line 15">TemplateElement</a>) -&gt; <a href="#TemplateElement_256_271" id="TemplateElement_9160_9175" title="Defined at line 15">TemplateElement</a>
    <span id="OutputImageNoProps_9180_9198" title="Not referenced locally, nor via imports">OutputImageNoProps</span> : <a href="#ActionCallOrInline_704_722" id="ActionCallOrInline_9201_9219" title="Defined at line 40">ActionCallOrInline</a> * <span class="keyword">list</span>(<a href="#TemplateElement_256_271" id="TemplateElement_9227_9242" title="Defined at line 15">TemplateElement</a>) -&gt; <a href="#TemplateElement_256_271" id="TemplateElement_9247_9262" title="Defined at line 15">TemplateElement</a>
    <a href="../../../../trans/static-semantics/webdsl-ui.stx#OutputImage_9606_9617" id="OutputImage_9267_9278" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 200">OutputImage</a> : <a href="#ActionCallOrInline_704_722" id="ActionCallOrInline_9281_9299" title="Defined at line 40">ActionCallOrInline</a> * <span class="keyword">list</span>(<a href="#PropertyAssignment_320_338" id="PropertyAssignment_9307_9325" title="Defined at line 19">PropertyAssignment</a>) * <span class="keyword">list</span>(<a href="#TemplateElement_256_271" id="TemplateElement_9334_9349" title="Defined at line 15">TemplateElement</a>) -&gt; <a href="#TemplateElement_256_271" id="TemplateElement_9354_9369" title="Defined at line 15">TemplateElement</a>
    <a href="../../../../trans/static-semantics/ui/actions.stx#ActionCall_2995_3005" id="ActionCall_9374_9384" title="Referenced at ../../../../trans/static-semantics/ui/actions.stx line 71">ActionCall</a> : <a href="../WebDSL-Action-sig.stx#ThisCall_472_480" id="ThisCall_9387_9395" title="Defined at ../WebDSL-Action-sig.stx line 29">ThisCall</a> -&gt; <a href="#ActionCallOrInline_704_722" id="ActionCallOrInline_9399_9417" title="Defined at line 40">ActionCallOrInline</a>
    <a href="../../../../trans/static-semantics/ui/actions.stx#InlineAction_3380_3392" id="InlineAction_9422_9434" title="Referenced at ../../../../trans/static-semantics/ui/actions.stx line 77">InlineAction</a> : <a href="../WebDSL-Action-sig.stx#Block_255_260" id="Block_9437_9442" title="Defined at ../WebDSL-Action-sig.stx line 15">Block</a> -&gt; <a href="#ActionCallOrInline_704_722" id="ActionCallOrInline_9446_9464" title="Defined at line 40">ActionCallOrInline</a>
    <span id="PropertySubmitColon_9469_9488" title="Not referenced locally, nor via imports">PropertySubmitColon</span> : <a href="#SubmitProp_488_498" id="SubmitProp_9491_9501" title="Defined at line 27">SubmitProp</a> * <a href="#ActionCallOrInlineOrExp_727_750" id="ActionCallOrInlineOrExp_9504_9527" title="Defined at line 41">ActionCallOrInlineOrExp</a> -&gt; <a href="#PropertyAssignment_320_338" id="PropertyAssignment_9531_9549" title="Defined at line 19">PropertyAssignment</a>
    <span id="PropertySubmitAssign_9554_9574" title="Not referenced locally, nor via imports">PropertySubmitAssign</span> : <a href="#SubmitProp_488_498" id="SubmitProp_9577_9587" title="Defined at line 27">SubmitProp</a> * <a href="#ActionCallOrInlineOrExp_727_750" id="ActionCallOrInlineOrExp_9590_9613" title="Defined at line 41">ActionCallOrInlineOrExp</a> -&gt; <a href="#PropertyAssignment_320_338" id="PropertyAssignment_9617_9635" title="Defined at line 19">PropertyAssignment</a>
    <a href="../../../../trans/static-semantics/ui/template-calls.stx#PropertySubmit_5221_5235" id="PropertySubmit_9640_9654" title="Referenced at ../../../../trans/static-semantics/ui/template-calls.stx line 111">PropertySubmit</a> : <a href="#SubmitProp_488_498" id="SubmitProp_9657_9667" title="Defined at line 27">SubmitProp</a> * <a href="#ActionCallOrInlineOrExp_727_750" id="ActionCallOrInlineOrExp_9670_9693" title="Defined at line 41">ActionCallOrInlineOrExp</a> -&gt; <a href="#PropertyAssignment_320_338" id="PropertyAssignment_9697_9715" title="Defined at line 19">PropertyAssignment</a>
    <span id="PropertyAssignmentColon_9720_9743" title="Not referenced locally, nor via imports">PropertyAssignmentColon</span> : <a href="#PropertyAssignmentId_804_824" id="PropertyAssignmentId_9746_9766" title="Defined at line 44">PropertyAssignmentId</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_9769_9772" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#PropertyAssignment_320_338" id="PropertyAssignment_9776_9794" title="Defined at line 19">PropertyAssignment</a>
    <span id="PropertyAssignmentAssign_9799_9823" title="Not referenced locally, nor via imports">PropertyAssignmentAssign</span> : <a href="#PropertyAssignmentId_804_824" id="PropertyAssignmentId_9826_9846" title="Defined at line 44">PropertyAssignmentId</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_9849_9852" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#PropertyAssignment_320_338" id="PropertyAssignment_9856_9874" title="Defined at line 19">PropertyAssignment</a>
    <a href="../../../../trans/static-semantics/ui/template-calls.stx#PropertyAssignment_5058_5076" id="PropertyAssignment_9879_9897" title="Referenced at ../../../../trans/static-semantics/ui/template-calls.stx line 108">PropertyAssignment</a> : <a href="#PropertyAssignmentId_804_824" id="PropertyAssignmentId_9900_9920" title="Defined at line 44">PropertyAssignmentId</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_9923_9926" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#PropertyAssignment_320_338" id="PropertyAssignment_9930_9948" title="Defined at line 19">PropertyAssignment</a>
    <span id="TemplateCallPropertyAjax_9953_9977" title="Not referenced locally, nor via imports">TemplateCallPropertyAjax</span> : <a href="#PropertyAssignment_320_338" id="PropertyAssignment_9980_9998" title="Defined at line 19">PropertyAssignment</a>
    <span id="TemplateCallPropertyNoLoadingFeedback_10003_10040" title="Not referenced locally, nor via imports">TemplateCallPropertyNoLoadingFeedback</span> : <a href="#PropertyAssignment_320_338" id="PropertyAssignment_10043_10061" title="Defined at line 19">PropertyAssignment</a>
    <span id="TemplateCallPropertySecure_10066_10092" title="Not referenced locally, nor via imports">TemplateCallPropertySecure</span> : <a href="#PropertyAssignment_320_338" id="PropertyAssignment_10095_10113" title="Defined at line 19">PropertyAssignment</a>
    <span id="TemplateCallPropertyIgnoreValidation_10118_10154" title="Not referenced locally, nor via imports">TemplateCallPropertyIgnoreValidation</span> : <a href="#PropertyAssignment_320_338" id="PropertyAssignment_10157_10175" title="Defined at line 19">PropertyAssignment</a>
    <span id="TemplateCallPropertyNotSecure_10180_10209" title="Not referenced locally, nor via imports">TemplateCallPropertyNotSecure</span> : <a href="#PropertyAssignment_320_338" id="PropertyAssignment_10212_10230" title="Defined at line 19">PropertyAssignment</a>
    <span id="TemplateCallPropertyNotNull_10235_10262" title="Not referenced locally, nor via imports">TemplateCallPropertyNotNull</span> : <a href="#PropertyAssignment_320_338" id="PropertyAssignment_10265_10283" title="Defined at line 19">PropertyAssignment</a>
    <a href="../../../../trans/static-semantics/ui/template-calls.stx#CommonAttribute2PropertyAssignment_5749_5783" id="CommonAttribute2PropertyAssignment_10288_10322" title="Referenced at ../../../../trans/static-semantics/ui/template-calls.stx line 119">CommonAttribute2PropertyAssignment</a> : <a href="../WebDSL-XML-sig.stx#CommonAttribute_374_389" id="CommonAttribute_10325_10340" title="Defined at ../WebDSL-XML-sig.stx line 20">CommonAttribute</a> -&gt; <a href="#PropertyAssignment_320_338" id="PropertyAssignment_10344_10362" title="Defined at line 19">PropertyAssignment</a>
    <span id="PropertySubmitMultiple2PropertyAssignment_10367_10408" title="Not referenced locally, nor via imports">PropertySubmitMultiple2PropertyAssignment</span> : <a href="#PropertySubmitMultiple_755_777" id="PropertySubmitMultiple_10411_10433" title="Defined at line 42">PropertySubmitMultiple</a> -&gt; <a href="#PropertyAssignment_320_338" id="PropertyAssignment_10437_10455" title="Defined at line 19">PropertyAssignment</a>
    <span id="PropertySubmitMultiple_10460_10482" title="Not referenced locally, nor via imports">PropertySubmitMultiple</span> : <a href="#SubmitProp_488_498" id="SubmitProp_10485_10495" title="Defined at line 27">SubmitProp</a> * <span class="keyword">list</span>(<a href="#ActionCallOrInlineOrExp_727_750" id="ActionCallOrInlineOrExp_10503_10526" title="Defined at line 41">ActionCallOrInlineOrExp</a>) -&gt; <a href="#PropertySubmitMultiple_755_777" id="PropertySubmitMultiple_10531_10553" title="Defined at line 42">PropertySubmitMultiple</a>
    <a href="../../../../trans/static-semantics/ui/actions.stx#ActionCallOrInline_2677_2695" id="ActionCallOrInline_10558_10576" title="Referenced at ../../../../trans/static-semantics/ui/actions.stx line 66">ActionCallOrInline</a> : <a href="#ActionCallOrInline_704_722" id="ActionCallOrInline_10579_10597" title="Defined at line 40">ActionCallOrInline</a> -&gt; <a href="#ActionCallOrInlineOrExp_727_750" id="ActionCallOrInlineOrExp_10601_10624" title="Defined at line 41">ActionCallOrInlineOrExp</a>
    <a href="../../../../trans/static-semantics/ui/actions.stx#ActionCallOrInlineExp_2762_2783" id="ActionCallOrInlineExp_10629_10650" title="Referenced at ../../../../trans/static-semantics/ui/actions.stx line 67">ActionCallOrInlineExp</a> : <a href="#PropertySubmitExp_782_799" id="PropertySubmitExp_10653_10670" title="Defined at line 43">PropertySubmitExp</a> -&gt; <a href="#ActionCallOrInlineOrExp_727_750" id="ActionCallOrInlineOrExp_10674_10697" title="Defined at line 41">ActionCallOrInlineOrExp</a>
    <a href="../../../../trans/static-semantics/ui/actions.stx#PropertySubmitExp_2784_2801" id="PropertySubmitExp_10702_10719" title="Referenced at ../../../../trans/static-semantics/ui/actions.stx line 67">PropertySubmitExp</a> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_10722_10725" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#PropertySubmitExp_782_799" id="PropertySubmitExp_10729_10746" title="Defined at line 43">PropertySubmitExp</a>
    <span id="OutputShorthand2TemplateElement_10751_10782" title="Not referenced locally, nor via imports">OutputShorthand2TemplateElement</span> : <a href="../WebDSL-Lexical-sig.stx#OutputShorthand_524_539" id="OutputShorthand_10785_10800" title="Defined at ../WebDSL-Lexical-sig.stx line 31">OutputShorthand</a> -&gt; <a href="#TemplateElement_256_271" id="TemplateElement_10804_10819" title="Defined at line 15">TemplateElement</a>
    <a href="../../../../trans/static-semantics/webdsl-ui.stx#Text_7720_7724" id="Text_10824_10828" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 149">Text</a> : <span class="keyword">list</span>(<a href="../WebDSL-Lexical-sig.stx#StringPart_489_499" id="StringPart_10836_10846" title="Defined at ../WebDSL-Lexical-sig.stx line 29">StringPart</a>) -&gt; <a href="#TemplateElement_256_271" id="TemplateElement_10851_10866" title="Defined at line 15">TemplateElement</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#GlobalInit_395_405" id="GlobalInit_10871_10881" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 19">GlobalInit</a> : <a href="../WebDSL-Action-sig.stx#Block_255_260" id="Block_10884_10889" title="Defined at ../WebDSL-Action-sig.stx line 15">Block</a> -&gt; <a href="../WebDSL-Core-sig.stx#Definition_310_320" id="Definition_10893_10903" title="Defined at ../WebDSL-Core-sig.stx line 20">Definition</a>
    <a href="../../../../trans/static-semantics/ui/actions.stx#DataBindAction_3618_3632" id="DataBindAction_10908_10922" title="Referenced at ../../../../trans/static-semantics/ui/actions.stx line 85">DataBindAction</a> : <a href="../WebDSL-Action-sig.stx#Block_255_260" id="Block_10925_10930" title="Defined at ../WebDSL-Action-sig.stx line 15">Block</a> -&gt; <a href="#TemplateElement_256_271" id="TemplateElement_10934_10949" title="Defined at line 15">TemplateElement</a>
    <a href="../../../../trans/static-semantics/ui/actions.stx#RenderAction_3715_3727" id="RenderAction_10954_10966" title="Referenced at ../../../../trans/static-semantics/ui/actions.stx line 88">RenderAction</a> : <a href="../WebDSL-Action-sig.stx#Block_255_260" id="Block_10969_10974" title="Defined at ../WebDSL-Action-sig.stx line 15">Block</a> -&gt; <a href="#TemplateElement_256_271" id="TemplateElement_10978_10993" title="Defined at line 15">TemplateElement</a>
    <a href="../../../../trans/static-semantics/ui/actions.stx#AllPhasesAction_3810_3825" id="AllPhasesAction_10998_11013" title="Referenced at ../../../../trans/static-semantics/ui/actions.stx line 91">AllPhasesAction</a> : <a href="../WebDSL-Action-sig.stx#Block_255_260" id="Block_11016_11021" title="Defined at ../WebDSL-Action-sig.stx line 15">Block</a> -&gt; <a href="#TemplateElement_256_271" id="TemplateElement_11025_11040" title="Defined at line 15">TemplateElement</a>
    <a href="../../../../trans/static-semantics/ui/actions.stx#ValidateAction_3908_3922" id="ValidateAction_11045_11059" title="Referenced at ../../../../trans/static-semantics/ui/actions.stx line 94">ValidateAction</a> : <a href="../WebDSL-Action-sig.stx#Block_255_260" id="Block_11062_11067" title="Defined at ../WebDSL-Action-sig.stx line 15">Block</a> -&gt; <a href="#TemplateElement_256_271" id="TemplateElement_11071_11086" title="Defined at line 15">TemplateElement</a>
    <a href="../../../../trans/static-semantics/ui/actions.stx#Action_2304_2310" id="Action_11091_11097" title="Referenced at ../../../../trans/static-semantics/ui/actions.stx line 58, 62">Action</a> : <span class="keyword">list</span>(<a href="#ActionModifier_838_852" id="ActionModifier_11105_11119" title="Defined at line 45">ActionModifier</a>) * <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_11123_11125" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="../WebDSL-Core-sig.stx#OptFormalArgs_178_191" id="OptFormalArgs_11128_11141" title="Defined at ../WebDSL-Core-sig.stx line 12">OptFormalArgs</a> * <a href="../WebDSL-Action-sig.stx#Block_255_260" id="Block_11144_11149" title="Defined at ../WebDSL-Action-sig.stx line 15">Block</a> -&gt; <a href="../WebDSL-Core-sig.stx#Action_339_345" id="Action_11153_11159" title="Defined at ../WebDSL-Core-sig.stx line 22">Action</a>
    <span id="ActionModifierIgnoreValidation_11164_11194" title="Not referenced locally, nor via imports">ActionModifierIgnoreValidation</span> : <a href="#ActionModifier_838_852" id="ActionModifier_11197_11211" title="Defined at line 45">ActionModifier</a>
    <span id="QualifiedElementsCall_11216_11237" title="Not referenced locally, nor via imports">QualifiedElementsCall</span> : <a href="../WebDSL-Lexical-sig.stx#TemplateId_87_97" id="TemplateId_11240_11250" title="Defined at ../WebDSL-Lexical-sig.stx line 9">TemplateId</a> -&gt; <a href="#TemplateCallId_857_871" id="TemplateCallId_11254_11268" title="Defined at line 46">TemplateCallId</a>
    <a href="../../../../trans/static-semantics/ui/template-calls.stx#TemplateCallId_915_929" id="TemplateCallId_11273_11287" title="Referenced at ../../../../trans/static-semantics/ui/template-calls.stx line 31, 57, 66, 69">TemplateCallId</a> : <a href="../WebDSL-Lexical-sig.stx#TemplateId_87_97" id="TemplateId_11290_11300" title="Defined at ../WebDSL-Lexical-sig.stx line 9">TemplateId</a> -&gt; <a href="#TemplateCallId_857_871" id="TemplateCallId_11304_11318" title="Defined at line 46">TemplateCallId</a>
    <a href="../../../../trans/static-semantics/webdsl-ui.stx#TemplateVarArgSort_13045_13063" id="TemplateVarArgSort_11323_11341" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 281">TemplateVarArgSort</a> : <span class="keyword">list</span>(<a href="#FormalVarArg_876_888" id="FormalVarArg_11349_11361" title="Defined at line 47">FormalVarArg</a>) -&gt; <a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_11366_11370" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a>
    <a href="../../../../trans/static-semantics/webdsl-ui.stx#FormalVarArg_13368_13380" id="FormalVarArg_11375_11387" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 287">FormalVarArg</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_11390_11392" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_11395_11399" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a> -&gt; <a href="#FormalVarArg_876_888" id="FormalVarArg_11403_11415" title="Defined at line 47">FormalVarArg</a>
    <a href="../../../../trans/static-semantics/webdsl-ui.stx#MemberTemplateCall_13845_13863" id="MemberTemplateCall_11420_11438" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 300">MemberTemplateCall</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_11441_11443" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="#TemplateCall_303_315" id="TemplateCall_11446_11458" title="Defined at line 18">TemplateCall</a> -&gt; <a href="#TemplateCall_303_315" id="TemplateCall_11462_11474" title="Defined at line 18">TemplateCall</a>
    <a href="../../../../trans/static-semantics/ui/actions.stx#TemplateVarArgExp_4945_4962" id="TemplateVarArgExp_11479_11496" title="Referenced at ../../../../trans/static-semantics/ui/actions.stx line 121">TemplateVarArgExp</a> : <span class="keyword">list</span>(<a href="#ExpVarArg_893_902" id="ExpVarArg_11504_11513" title="Defined at line 48">ExpVarArg</a>) -&gt; <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_11518_11521" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a>
    <a href="../../../../trans/static-semantics/ui/actions.stx#ExpVarArgFor_5849_5861" id="ExpVarArgFor_11526_11538" title="Referenced at ../../../../trans/static-semantics/ui/actions.stx line 142">ExpVarArgFor</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_11541_11543" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_11546_11550" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_11553_11556" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <a href="#OptFilter_276_285" id="OptFilter_11559_11568" title="Defined at line 16">OptFilter</a> * <span class="keyword">list</span>(<a href="#ExpVarArg_893_902" id="ExpVarArg_11576_11585" title="Defined at line 48">ExpVarArg</a>) -&gt; <a href="#ExpVarArg_893_902" id="ExpVarArg_11590_11599" title="Defined at line 48">ExpVarArg</a>
    <a href="../../../../trans/static-semantics/ui/actions.stx#ExpVarArgForInferred_6500_6520" id="ExpVarArgForInferred_11604_11624" title="Referenced at ../../../../trans/static-semantics/ui/actions.stx line 156">ExpVarArgForInferred</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_11627_11629" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_11632_11635" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <a href="#OptFilter_276_285" id="OptFilter_11638_11647" title="Defined at line 16">OptFilter</a> * <span class="keyword">list</span>(<a href="#ExpVarArg_893_902" id="ExpVarArg_11655_11664" title="Defined at line 48">ExpVarArg</a>) -&gt; <a href="#ExpVarArg_893_902" id="ExpVarArg_11669_11678" title="Defined at line 48">ExpVarArg</a>
    <a href="../../../../trans/static-semantics/ui/actions.stx#ExpVarArgForAll_6978_6993" id="ExpVarArgForAll_11683_11698" title="Referenced at ../../../../trans/static-semantics/ui/actions.stx line 166">ExpVarArgForAll</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_11701_11703" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_11706_11710" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a> * <a href="#OptFilter_276_285" id="OptFilter_11713_11722" title="Defined at line 16">OptFilter</a> * <span class="keyword">list</span>(<a href="#ExpVarArg_893_902" id="ExpVarArg_11730_11739" title="Defined at line 48">ExpVarArg</a>) -&gt; <a href="#ExpVarArg_893_902" id="ExpVarArg_11744_11753" title="Defined at line 48">ExpVarArg</a>
    <a href="../../../../trans/static-semantics/ui/actions.stx#ExpVarArgForCount_7396_7413" id="ExpVarArgForCount_11758_11775" title="Referenced at ../../../../trans/static-semantics/ui/actions.stx line 175">ExpVarArgForCount</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_11778_11780" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_11783_11786" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_11789_11792" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <span class="keyword">list</span>(<a href="#ExpVarArg_893_902" id="ExpVarArg_11800_11809" title="Defined at line 48">ExpVarArg</a>) -&gt; <a href="#ExpVarArg_893_902" id="ExpVarArg_11814_11823" title="Defined at line 48">ExpVarArg</a>
    <a href="../../../../trans/static-semantics/ui/actions.stx#ExpVarArg_5708_5717" id="ExpVarArg_11828_11837" title="Referenced at ../../../../trans/static-semantics/ui/actions.stx line 139">ExpVarArg</a> : <span class="keyword">list</span>(<a href="#ExpOrTemplateArg_907_923" id="ExpOrTemplateArg_11845_11861" title="Defined at line 49">ExpOrTemplateArg</a>) -&gt; <a href="#ExpVarArg_893_902" id="ExpVarArg_11866_11875" title="Defined at line 48">ExpVarArg</a>
    <a href="../../../../trans/static-semantics/ui/actions.stx#ExpVarArgExp_8114_8126" id="ExpVarArgExp_11880_11892" title="Referenced at ../../../../trans/static-semantics/ui/actions.stx line 189">ExpVarArgExp</a> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_11895_11898" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#ExpOrTemplateArg_907_923" id="ExpOrTemplateArg_11902_11918" title="Defined at line 49">ExpOrTemplateArg</a>
    <a href="../../../../trans/static-semantics/ui/actions.stx#ExpVarArgElements_8197_8214" id="ExpVarArgElements_11923_11940" title="Referenced at ../../../../trans/static-semantics/ui/actions.stx line 192">ExpVarArgElements</a> : <span class="keyword">list</span>(<a href="#TemplateElement_256_271" id="TemplateElement_11948_11963" title="Defined at line 15">TemplateElement</a>) -&gt; <a href="#ExpOrTemplateArg_907_923" id="ExpOrTemplateArg_11968_11984" title="Defined at line 49">ExpOrTemplateArg</a>
    <span id="HTMLWrapper_11989_12000" title="Not referenced locally, nor via imports">HTMLWrapper</span> : <a href="#HTMLWrapperBody_967_982" id="HTMLWrapperBody_12003_12018" title="Defined at line 52">HTMLWrapperBody</a> -&gt; <a href="#HTMLWrapper_928_939" id="HTMLWrapper_12022_12033" title="Defined at line 50">HTMLWrapper</a>
    <span id="HTMLWrapperAssigns_12038_12056" title="Not referenced locally, nor via imports">HTMLWrapperAssigns</span> : <span class="keyword">list</span>(<a href="#HTMLWrapperAssign_987_1004" id="HTMLWrapperAssign_12064_12081" title="Defined at line 53">HTMLWrapperAssign</a>) -&gt; <a href="#HTMLWrapperAssigns_944_962" id="HTMLWrapperAssigns_12086_12104" title="Defined at line 51">HTMLWrapperAssigns</a>
    <span id="HTMLWrapperAssignsNone_12109_12131" title="Not referenced locally, nor via imports">HTMLWrapperAssignsNone</span> : <a href="#HTMLWrapperAssigns_944_962" id="HTMLWrapperAssigns_12134_12152" title="Defined at line 51">HTMLWrapperAssigns</a>
    <span id="HTMLWrapperAssign_12157_12174" title="Not referenced locally, nor via imports">HTMLWrapperAssign</span> : <a href="../WebDSL-Attributes-sig.stx#Attribute_292_301" id="Attribute_12177_12186" title="Defined at ../WebDSL-Attributes-sig.stx line 16">Attribute</a> -&gt; <a href="#HTMLWrapperAssign_987_1004" id="HTMLWrapperAssign_12190_12207" title="Defined at line 53">HTMLWrapperAssign</a>
    <span id="HTMLWrapperAssignComma_12212_12234" title="Not referenced locally, nor via imports">HTMLWrapperAssignComma</span> : <a href="../WebDSL-Attributes-sig.stx#Attribute_292_301" id="Attribute_12237_12246" title="Defined at ../WebDSL-Attributes-sig.stx line 16">Attribute</a> -&gt; <a href="#HTMLWrapperAssign_987_1004" id="HTMLWrapperAssign_12250_12267" title="Defined at line 53">HTMLWrapperAssign</a>
    <a href="../../../../trans/static-semantics/webdsl-ui.stx#HTMLWrapper2TemplateDefinition_891_921" id="HTMLWrapper2TemplateDefinition_12272_12302" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 26">HTMLWrapper2TemplateDefinition</a> : <a href="#HTMLWrapper_928_939" id="HTMLWrapper_12305_12316" title="Defined at line 50">HTMLWrapper</a> -&gt; <a href="#TemplateDefinition_220_238" id="TemplateDefinition_12320_12338" title="Defined at line 13">TemplateDefinition</a>
    <a href="../../../../trans/static-semantics/webdsl-ui.stx#HTMLWrapperMultiple_1020_1039" id="HTMLWrapperMultiple_12343_12362" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 27">HTMLWrapperMultiple</a> : <span class="keyword">list</span>(<a href="#HTMLWrapperBody_967_982" id="HTMLWrapperBody_12370_12385" title="Defined at line 52">HTMLWrapperBody</a>) -&gt; <a href="#TemplateDefinition_220_238" id="TemplateDefinition_12390_12408" title="Defined at line 13">TemplateDefinition</a>
    <span id="HTMLWrapperBody_12413_12428" title="Not referenced locally, nor via imports">HTMLWrapperBody</span> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_12431_12433" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_12436_12438" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="#HTMLWrapperAssigns_944_962" id="HTMLWrapperAssigns_12441_12459" title="Defined at line 51">HTMLWrapperAssigns</a> -&gt; <a href="#HTMLWrapperBody_967_982" id="HTMLWrapperBody_12463_12478" title="Defined at line 52">HTMLWrapperBody</a>
    <a href="../../../../trans/static-semantics/webdsl-ui.stx#TemplateName_9808_9820" id="TemplateName_12483_12495" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 207">TemplateName</a> : <a href="#TemplateName_1009_1021" id="TemplateName_12498_12510" title="Defined at line 54">TemplateName</a>
    <a href="../../../../trans/static-semantics/webdsl-ui.stx#TemplateName2Exp_9791_9807" id="TemplateName2Exp_12515_12531" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 207">TemplateName2Exp</a> : <a href="#TemplateName_1009_1021" id="TemplateName_12534_12546" title="Defined at line 54">TemplateName</a> -&gt; <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_12550_12553" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a>
</code></pre></td></tr></tbody></table></div>