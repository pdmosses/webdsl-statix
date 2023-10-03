---
title: WebDSL-Regex-sig.stx
hide:
  - toc
---

# `WebDSL-Regex-sig.stx`



[pdmosses/webdsl-statix/webdslstatix/src-gen/statix/signatures/WebDSL-Regex-sig.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/src-gen/statix/signatures/WebDSL-Regex-sig.stx "The source file on GitHub"

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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix-sig.stx#signatures/WebDSL-Regex-sig_582_609" id="signatures/WebDSL-Regex-sig_7_34" title="Referenced at ../webdsl-statix-sig.stx line 20">signatures/WebDSL-Regex-sig</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action-sig.stx#signatures/WebDSL-Action-sig_7_35" id="signatures/WebDSL-Action-sig_46_74" title="Defined at ../WebDSL-Action-sig.stx line 1">signatures/WebDSL-Action-sig</a>
  <a href="../WebDSL-Lexical-sig.stx#signatures/WebDSL-Lexical-sig_7_36" id="signatures/WebDSL-Lexical-sig_77_106" title="Defined at ../WebDSL-Lexical-sig.stx line 1">signatures/WebDSL-Lexical-sig</a>
  <a href="../WebDSL-DataModel-sig.stx#signatures/WebDSL-DataModel-sig_7_38" id="signatures/WebDSL-DataModel-sig_109_140" title="Defined at ../WebDSL-DataModel-sig.stx line 1">signatures/WebDSL-DataModel-sig</a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <a href="#Pattern_1136_1143" id="Pattern_165_172" title="Referenced at line 64, 109, 110, 111, 111, 111, 133, 134, 135, 136, 137, 138, 139, 140">Pattern</a>
    <a href="#RegexExp_1165_1173" id="RegexExp_177_185" title="Referenced at line 65, 108, 109">RegexExp</a>
    <a href="#Branche_1194_1201" id="Branche_190_197" title="Referenced at line 66, 110, 112">Branche</a>
    <a href="#Piece_1220_1225" id="Piece_202_207" title="Referenced at line 67, 112, 113, 114">Piece</a>
    <a href="#Quantifier_1249_1259" id="Quantifier_212_222" title="Referenced at line 68, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132">Quantifier</a>
    <a href="#Atom_1277_1281" id="Atom_227_231" title="Referenced at line 69, 113, 114, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148">Atom</a>
    <a href="#CharacterClass_1309_1323" id="CharacterClass_236_250" title="Referenced at line 70, 145, 149, 150, 154">CharacterClass</a>
    <a href="#BracketItem_1348_1359" id="BracketItem_255_266" title="Referenced at line 71, 149, 150, 151, 154, 155, 156">BracketItem</a>
    <a href="#BracketLiteralOrBracketCharacter_1405_1437" id="BracketLiteralOrBracketCharacter_271_303" title="Referenced at line 72, 151, 151, 152, 153">BracketLiteralOrBracketCharacter</a>
    <a href="#ClassKeyword_1463_1475" id="ClassKeyword_308_320" title="Referenced at line 73, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176">ClassKeyword</a>
    <a href="#BracketLiteral_4511_4525" id="BracketLiteral_325_339" title="Referenced at line 152, 155">BracketLiteral</a> = <span class="keyword">string</span>
    <a href="#AtomLiteral_4151_4162" id="AtomLiteral_353_364" title="Referenced at line 146">AtomLiteral</a> = <span class="keyword">string</span>
    <a href="#AllChars_4230_4238" id="AllChars_378_386" title="Referenced at line 148">AllChars</a> = <span class="keyword">string</span>
    <a href="#BracketCharacter_1505_1521" id="BracketCharacter_400_416" title="Referenced at line 74, 153, 156, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 254">BracketCharacter</a>
    <a href="#AtomCharacter_1548_1561" id="AtomCharacter_421_434" title="Referenced at line 75, 147, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 253">AtomCharacter</a>
    <a href="#DoubleQuote_1586_1597" id="DoubleQuote_439_450" title="Referenced at line 76, 177, 202, 227, 256">DoubleQuote</a>
    <a href="#OctalChar_1620_1629" id="OctalChar_455_464" title="Referenced at line 77, 178, 203, 228">OctalChar</a>
    <a href="#HexHexChar_1653_1663" id="HexHexChar_469_479" title="Referenced at line 78, 179, 204, 229">HexHexChar</a>
    <a href="#DecHexChar_1687_1697" id="DecHexChar_484_494" title="Referenced at line 79, 180, 205, 230">DecHexChar</a>
    <a href="#Tab_1714_1717" id="Tab_499_502" title="Referenced at line 80, 181, 206, 231">Tab</a>
    <a href="#Newline_1738_1745" id="Newline_507_514" title="Referenced at line 81, 182, 207, 232">Newline</a>
    <a href="#ReturnAtom_1769_1779" id="ReturnAtom_519_529" title="Referenced at line 82, 183, 208, 233">ReturnAtom</a>
    <a href="#Formfeed_1801_1809" id="Formfeed_534_542" title="Referenced at line 83, 184, 209, 234">Formfeed</a>
    <a href="#Alarm_1828_1833" id="Alarm_547_552" title="Referenced at line 84, 185, 210, 235">Alarm</a>
    <a href="#Escape_1853_1859" id="Escape_557_563" title="Referenced at line 85, 186, 211, 236">Escape</a>
    <a href="#WordChar_1881_1889" id="WordChar_568_576" title="Referenced at line 86, 187, 212, 237">WordChar</a>
    <a href="#NonWordChar_1914_1925" id="NonWordChar_581_592" title="Referenced at line 87, 188, 213, 238">NonWordChar</a>
    <a href="#WhiteSpaceChar_1953_1967" id="WhiteSpaceChar_597_611" title="Referenced at line 88, 189, 214, 239">WhiteSpaceChar</a>
    <a href="#DigitChar_1990_1999" id="DigitChar_616_625" title="Referenced at line 89, 191, 216, 241">DigitChar</a>
    <a href="#NonDigitChar_2025_2037" id="NonDigitChar_630_642" title="Referenced at line 90, 192, 217, 242">NonDigitChar</a>
    <a href="#ControlCharacter_2067_2083" id="ControlCharacter_647_663" title="Referenced at line 91, 193, 218, 243">ControlCharacter</a>
    <a href="#WordBoundry_2108_2119" id="WordBoundry_668_679" title="Referenced at line 92, 194, 219, 244">WordBoundry</a>
    <a href="#NonWordBoundry_2147_2161" id="NonWordBoundry_684_698" title="Referenced at line 93, 195, 220, 245">NonWordBoundry</a>
    <a href="#InputBeginBoundry_2192_2209" id="InputBeginBoundry_703_720" title="Referenced at line 94, 196, 221, 246">InputBeginBoundry</a>
    <a href="#PrevMatchEndBoundry_2242_2261" id="PrevMatchEndBoundry_725_744" title="Referenced at line 95, 197, 222, 247">PrevMatchEndBoundry</a>
    <a href="#EndInputBoundry_2290_2305" id="EndInputBoundry_749_764" title="Referenced at line 96, 198, 223, 248">EndInputBoundry</a>
    <a href="#EndInputFinalBoundry_2339_2359" id="EndInputFinalBoundry_769_789" title="Referenced at line 97, 199, 224, 249">EndInputFinalBoundry</a>
    <a href="#Space_2378_2383" id="Space_794_799" title="Referenced at line 98, 201, 226, 251">Space</a>
    <a href="#NonWhiteSpaceChar_2414_2431" id="NonWhiteSpaceChar_804_821" title="Referenced at line 99, 190, 215, 240">NonWhiteSpaceChar</a>
    <a href="#BackReference_2458_2471" id="BackReference_826_839" title="Referenced at line 100, 200, 225, 250">BackReference</a>
    <a href="#QuotablePatternSymbol_2506_2527" id="QuotablePatternSymbol_844_865" title="Referenced at line 101, 252, 255, 256">QuotablePatternSymbol</a>
    <a href="#Quoted_2547_2553" id="Quoted_870_876" title="Referenced at line 102, 252, 253, 254">Quoted</a>
    <a href="#QuotablePatternSymbolLex_9691_9715" id="QuotablePatternSymbolLex_881_905" title="Referenced at line 255">QuotablePatternSymbolLex</a> = <span class="keyword">string</span>
    <a href="#Integer_2920_2927" id="Integer_919_926" title="Referenced at line 115, 116, 117, 117, 121, 122, 123, 123, 127, 128, 129, 129">Integer</a> = <span class="keyword">string</span>
    <a href="#OctalValue_5495_5505" id="OctalValue_940_950" title="Referenced at line 178">OctalValue</a> = <span class="keyword">string</span>
    <a href="#TwoHexValue_5536_5547" id="TwoHexValue_964_975" title="Referenced at line 179">TwoHexValue</a> = <span class="keyword">string</span>
    <a href="#FourHexValue_5579_5591" id="FourHexValue_989_1001" title="Referenced at line 180">FourHexValue</a> = <span class="keyword">string</span>
    <a href="#BackReferenceLex_6238_6254" id="BackReferenceLex_1015_1031" title="Referenced at line 200">BackReferenceLex</a> = <span class="keyword">string</span>
    <a href="#ControlValue_5945_5957" id="ControlValue_1045_1057" title="Referenced at line 193">ControlValue</a> = <span class="keyword">string</span>
    <a href="#RegexId_2574_2581" id="RegexId_1071_1078" title="Referenced at line 103, 139, 140, 257">RegexId</a>
    <a href="#RegexID_9832_9839" id="RegexID_1083_1090" title="Referenced at line 257">RegexID</a> = <span class="keyword">string</span>

  <span class="keyword">constructors</span>
    <span id="Pattern-Plhdr_1120_1133" title="Not referenced locally, nor via imports">Pattern-Plhdr</span> : <a href="#Pattern_165_172" id="Pattern_1136_1143" title="Defined at line 11">Pattern</a>
    <span id="RegexExp-Plhdr_1148_1162" title="Not referenced locally, nor via imports">RegexExp-Plhdr</span> : <a href="#RegexExp_177_185" id="RegexExp_1165_1173" title="Defined at line 12">RegexExp</a>
    <span id="Branche-Plhdr_1178_1191" title="Not referenced locally, nor via imports">Branche-Plhdr</span> : <a href="#Branche_190_197" id="Branche_1194_1201" title="Defined at line 13">Branche</a>
    <span id="Piece-Plhdr_1206_1217" title="Not referenced locally, nor via imports">Piece-Plhdr</span> : <a href="#Piece_202_207" id="Piece_1220_1225" title="Defined at line 14">Piece</a>
    <span id="Quantifier-Plhdr_1230_1246" title="Not referenced locally, nor via imports">Quantifier-Plhdr</span> : <a href="#Quantifier_212_222" id="Quantifier_1249_1259" title="Defined at line 15">Quantifier</a>
    <span id="Atom-Plhdr_1264_1274" title="Not referenced locally, nor via imports">Atom-Plhdr</span> : <a href="#Atom_227_231" id="Atom_1277_1281" title="Defined at line 16">Atom</a>
    <span id="CharacterClass-Plhdr_1286_1306" title="Not referenced locally, nor via imports">CharacterClass-Plhdr</span> : <a href="#CharacterClass_236_250" id="CharacterClass_1309_1323" title="Defined at line 17">CharacterClass</a>
    <span id="BracketItem-Plhdr_1328_1345" title="Not referenced locally, nor via imports">BracketItem-Plhdr</span> : <a href="#BracketItem_255_266" id="BracketItem_1348_1359" title="Defined at line 18">BracketItem</a>
    <span id="BracketLiteralOrBracketCharacter-Plhdr_1364_1402" title="Not referenced locally, nor via imports">BracketLiteralOrBracketCharacter-Plhdr</span> : <a href="#BracketLiteralOrBracketCharacter_271_303" id="BracketLiteralOrBracketCharacter_1405_1437" title="Defined at line 19">BracketLiteralOrBracketCharacter</a>
    <span id="ClassKeyword-Plhdr_1442_1460" title="Not referenced locally, nor via imports">ClassKeyword-Plhdr</span> : <a href="#ClassKeyword_308_320" id="ClassKeyword_1463_1475" title="Defined at line 20">ClassKeyword</a>
    <span id="BracketCharacter-Plhdr_1480_1502" title="Not referenced locally, nor via imports">BracketCharacter-Plhdr</span> : <a href="#BracketCharacter_400_416" id="BracketCharacter_1505_1521" title="Defined at line 24">BracketCharacter</a>
    <span id="AtomCharacter-Plhdr_1526_1545" title="Not referenced locally, nor via imports">AtomCharacter-Plhdr</span> : <a href="#AtomCharacter_421_434" id="AtomCharacter_1548_1561" title="Defined at line 25">AtomCharacter</a>
    <span id="DoubleQuote-Plhdr_1566_1583" title="Not referenced locally, nor via imports">DoubleQuote-Plhdr</span> : <a href="#DoubleQuote_439_450" id="DoubleQuote_1586_1597" title="Defined at line 26">DoubleQuote</a>
    <span id="OctalChar-Plhdr_1602_1617" title="Not referenced locally, nor via imports">OctalChar-Plhdr</span> : <a href="#OctalChar_455_464" id="OctalChar_1620_1629" title="Defined at line 27">OctalChar</a>
    <span id="HexHexChar-Plhdr_1634_1650" title="Not referenced locally, nor via imports">HexHexChar-Plhdr</span> : <a href="#HexHexChar_469_479" id="HexHexChar_1653_1663" title="Defined at line 28">HexHexChar</a>
    <span id="DecHexChar-Plhdr_1668_1684" title="Not referenced locally, nor via imports">DecHexChar-Plhdr</span> : <a href="#DecHexChar_484_494" id="DecHexChar_1687_1697" title="Defined at line 29">DecHexChar</a>
    <span id="Tab-Plhdr_1702_1711" title="Not referenced locally, nor via imports">Tab-Plhdr</span> : <a href="#Tab_499_502" id="Tab_1714_1717" title="Defined at line 30">Tab</a>
    <span id="Newline-Plhdr_1722_1735" title="Not referenced locally, nor via imports">Newline-Plhdr</span> : <a href="#Newline_507_514" id="Newline_1738_1745" title="Defined at line 31">Newline</a>
    <span id="ReturnAtom-Plhdr_1750_1766" title="Not referenced locally, nor via imports">ReturnAtom-Plhdr</span> : <a href="#ReturnAtom_519_529" id="ReturnAtom_1769_1779" title="Defined at line 32">ReturnAtom</a>
    <span id="Formfeed-Plhdr_1784_1798" title="Not referenced locally, nor via imports">Formfeed-Plhdr</span> : <a href="#Formfeed_534_542" id="Formfeed_1801_1809" title="Defined at line 33">Formfeed</a>
    <span id="Alarm-Plhdr_1814_1825" title="Not referenced locally, nor via imports">Alarm-Plhdr</span> : <a href="#Alarm_547_552" id="Alarm_1828_1833" title="Defined at line 34">Alarm</a>
    <span id="Escape-Plhdr_1838_1850" title="Not referenced locally, nor via imports">Escape-Plhdr</span> : <a href="#Escape_557_563" id="Escape_1853_1859" title="Defined at line 35">Escape</a>
    <span id="WordChar-Plhdr_1864_1878" title="Not referenced locally, nor via imports">WordChar-Plhdr</span> : <a href="#WordChar_568_576" id="WordChar_1881_1889" title="Defined at line 36">WordChar</a>
    <span id="NonWordChar-Plhdr_1894_1911" title="Not referenced locally, nor via imports">NonWordChar-Plhdr</span> : <a href="#NonWordChar_581_592" id="NonWordChar_1914_1925" title="Defined at line 37">NonWordChar</a>
    <span id="WhiteSpaceChar-Plhdr_1930_1950" title="Not referenced locally, nor via imports">WhiteSpaceChar-Plhdr</span> : <a href="#WhiteSpaceChar_597_611" id="WhiteSpaceChar_1953_1967" title="Defined at line 38">WhiteSpaceChar</a>
    <span id="DigitChar-Plhdr_1972_1987" title="Not referenced locally, nor via imports">DigitChar-Plhdr</span> : <a href="#DigitChar_616_625" id="DigitChar_1990_1999" title="Defined at line 39">DigitChar</a>
    <span id="NonDigitChar-Plhdr_2004_2022" title="Not referenced locally, nor via imports">NonDigitChar-Plhdr</span> : <a href="#NonDigitChar_630_642" id="NonDigitChar_2025_2037" title="Defined at line 40">NonDigitChar</a>
    <span id="ControlCharacter-Plhdr_2042_2064" title="Not referenced locally, nor via imports">ControlCharacter-Plhdr</span> : <a href="#ControlCharacter_647_663" id="ControlCharacter_2067_2083" title="Defined at line 41">ControlCharacter</a>
    <span id="WordBoundry-Plhdr_2088_2105" title="Not referenced locally, nor via imports">WordBoundry-Plhdr</span> : <a href="#WordBoundry_668_679" id="WordBoundry_2108_2119" title="Defined at line 42">WordBoundry</a>
    <span id="NonWordBoundry-Plhdr_2124_2144" title="Not referenced locally, nor via imports">NonWordBoundry-Plhdr</span> : <a href="#NonWordBoundry_684_698" id="NonWordBoundry_2147_2161" title="Defined at line 43">NonWordBoundry</a>
    <span id="InputBeginBoundry-Plhdr_2166_2189" title="Not referenced locally, nor via imports">InputBeginBoundry-Plhdr</span> : <a href="#InputBeginBoundry_703_720" id="InputBeginBoundry_2192_2209" title="Defined at line 44">InputBeginBoundry</a>
    <span id="PrevMatchEndBoundry-Plhdr_2214_2239" title="Not referenced locally, nor via imports">PrevMatchEndBoundry-Plhdr</span> : <a href="#PrevMatchEndBoundry_725_744" id="PrevMatchEndBoundry_2242_2261" title="Defined at line 45">PrevMatchEndBoundry</a>
    <span id="EndInputBoundry-Plhdr_2266_2287" title="Not referenced locally, nor via imports">EndInputBoundry-Plhdr</span> : <a href="#EndInputBoundry_749_764" id="EndInputBoundry_2290_2305" title="Defined at line 46">EndInputBoundry</a>
    <span id="EndInputFinalBoundry-Plhdr_2310_2336" title="Not referenced locally, nor via imports">EndInputFinalBoundry-Plhdr</span> : <a href="#EndInputFinalBoundry_769_789" id="EndInputFinalBoundry_2339_2359" title="Defined at line 47">EndInputFinalBoundry</a>
    <span id="Space-Plhdr_2364_2375" title="Not referenced locally, nor via imports">Space-Plhdr</span> : <a href="#Space_794_799" id="Space_2378_2383" title="Defined at line 48">Space</a>
    <span id="NonWhiteSpaceChar-Plhdr_2388_2411" title="Not referenced locally, nor via imports">NonWhiteSpaceChar-Plhdr</span> : <a href="#NonWhiteSpaceChar_804_821" id="NonWhiteSpaceChar_2414_2431" title="Defined at line 49">NonWhiteSpaceChar</a>
    <span id="BackReference-Plhdr_2436_2455" title="Not referenced locally, nor via imports">BackReference-Plhdr</span> : <a href="#BackReference_826_839" id="BackReference_2458_2471" title="Defined at line 50">BackReference</a>
    <span id="QuotablePatternSymbol-Plhdr_2476_2503" title="Not referenced locally, nor via imports">QuotablePatternSymbol-Plhdr</span> : <a href="#QuotablePatternSymbol_844_865" id="QuotablePatternSymbol_2506_2527" title="Defined at line 51">QuotablePatternSymbol</a>
    <span id="Quoted-Plhdr_2532_2544" title="Not referenced locally, nor via imports">Quoted-Plhdr</span> : <a href="#Quoted_870_876" id="Quoted_2547_2553" title="Defined at line 52">Quoted</a>
    <span id="RegexId-Plhdr_2558_2571" title="Not referenced locally, nor via imports">RegexId-Plhdr</span> : <a href="#RegexId_1071_1078" id="RegexId_2574_2581" title="Defined at line 60">RegexId</a>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <a href="../../../../trans/static-semantics/webdsl-regex.stx#RegexCall_131_140" id="RegexCall_2613_2622" title="Referenced at ../../../../trans/static-semantics/webdsl-regex.stx line 10, 14, 19, 24, 29, 34">RegexCall</a> : <a href="#RegexExp_177_185" id="RegexExp_2625_2633" title="Defined at line 12">RegexExp</a> * <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_2636_2638" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <span class="keyword">list</span>(<a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_2646_2649" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a>) -&gt; <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_2654_2657" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a>
    <span id="RegexPattern_2662_2674" title="Not referenced locally, nor via imports">RegexPattern</span> : <a href="#Pattern_165_172" id="Pattern_2677_2684" title="Defined at line 11">Pattern</a> -&gt; <a href="#RegexExp_177_185" id="RegexExp_2688_2696" title="Defined at line 12">RegexExp</a>
    <span id="SingleBranch_2701_2713" title="Not referenced locally, nor via imports">SingleBranch</span> : <a href="#Branche_190_197" id="Branche_2716_2723" title="Defined at line 13">Branche</a> -&gt; <a href="#Pattern_165_172" id="Pattern_2727_2734" title="Defined at line 11">Pattern</a>
    <span id="TupleBranch_2739_2750" title="Not referenced locally, nor via imports">TupleBranch</span> : <a href="#Pattern_165_172" id="Pattern_2753_2760" title="Defined at line 11">Pattern</a> * <a href="#Pattern_165_172" id="Pattern_2763_2770" title="Defined at line 11">Pattern</a> -&gt; <a href="#Pattern_165_172" id="Pattern_2774_2781" title="Defined at line 11">Pattern</a>
    <span id="Pieces_2786_2792" title="Not referenced locally, nor via imports">Pieces</span> : <span class="keyword">list</span>(<a href="#Piece_202_207" id="Piece_2800_2805" title="Defined at line 14">Piece</a>) -&gt; <a href="#Branche_190_197" id="Branche_2810_2817" title="Defined at line 13">Branche</a>
    <span id="SingleAtom_2822_2832" title="Not referenced locally, nor via imports">SingleAtom</span> : <a href="#Atom_227_231" id="Atom_2835_2839" title="Defined at line 16">Atom</a> -&gt; <a href="#Piece_202_207" id="Piece_2843_2848" title="Defined at line 14">Piece</a>
    <span id="QuantifiedAtom_2853_2867" title="Not referenced locally, nor via imports">QuantifiedAtom</span> : <a href="#Atom_227_231" id="Atom_2870_2874" title="Defined at line 16">Atom</a> * <a href="#Quantifier_212_222" id="Quantifier_2877_2887" title="Defined at line 15">Quantifier</a> -&gt; <a href="#Piece_202_207" id="Piece_2891_2896" title="Defined at line 14">Piece</a>
    <span id="GreedyExactBound_2901_2917" title="Not referenced locally, nor via imports">GreedyExactBound</span> : <a href="#Integer_919_926" id="Integer_2920_2927" title="Defined at line 54">Integer</a> -&gt; <a href="#Quantifier_212_222" id="Quantifier_2931_2941" title="Defined at line 15">Quantifier</a>
    <span id="GreedyLowerBound_2946_2962" title="Not referenced locally, nor via imports">GreedyLowerBound</span> : <a href="#Integer_919_926" id="Integer_2965_2972" title="Defined at line 54">Integer</a> -&gt; <a href="#Quantifier_212_222" id="Quantifier_2976_2986" title="Defined at line 15">Quantifier</a>
    <span id="GreedyLowerUpperBound_2991_3012" title="Not referenced locally, nor via imports">GreedyLowerUpperBound</span> : <a href="#Integer_919_926" id="Integer_3015_3022" title="Defined at line 54">Integer</a> * <a href="#Integer_919_926" id="Integer_3025_3032" title="Defined at line 54">Integer</a> -&gt; <a href="#Quantifier_212_222" id="Quantifier_3036_3046" title="Defined at line 15">Quantifier</a>
    <span id="GreedyOnceOrNot_3051_3066" title="Not referenced locally, nor via imports">GreedyOnceOrNot</span> : <a href="#Quantifier_212_222" id="Quantifier_3069_3079" title="Defined at line 15">Quantifier</a>
    <span id="GreedyZeroOrMore_3084_3100" title="Not referenced locally, nor via imports">GreedyZeroOrMore</span> : <a href="#Quantifier_212_222" id="Quantifier_3103_3113" title="Defined at line 15">Quantifier</a>
    <span id="GreedyOneOrMore_3118_3133" title="Not referenced locally, nor via imports">GreedyOneOrMore</span> : <a href="#Quantifier_212_222" id="Quantifier_3136_3146" title="Defined at line 15">Quantifier</a>
    <span id="ReluctantExactBound_3151_3170" title="Not referenced locally, nor via imports">ReluctantExactBound</span> : <a href="#Integer_919_926" id="Integer_3173_3180" title="Defined at line 54">Integer</a> -&gt; <a href="#Quantifier_212_222" id="Quantifier_3184_3194" title="Defined at line 15">Quantifier</a>
    <span id="ReluctantLowerBound_3199_3218" title="Not referenced locally, nor via imports">ReluctantLowerBound</span> : <a href="#Integer_919_926" id="Integer_3221_3228" title="Defined at line 54">Integer</a> -&gt; <a href="#Quantifier_212_222" id="Quantifier_3232_3242" title="Defined at line 15">Quantifier</a>
    <span id="ReluctantLowerUpperBound_3247_3271" title="Not referenced locally, nor via imports">ReluctantLowerUpperBound</span> : <a href="#Integer_919_926" id="Integer_3274_3281" title="Defined at line 54">Integer</a> * <a href="#Integer_919_926" id="Integer_3284_3291" title="Defined at line 54">Integer</a> -&gt; <a href="#Quantifier_212_222" id="Quantifier_3295_3305" title="Defined at line 15">Quantifier</a>
    <span id="ReluctantOnceOrNot_3310_3328" title="Not referenced locally, nor via imports">ReluctantOnceOrNot</span> : <a href="#Quantifier_212_222" id="Quantifier_3331_3341" title="Defined at line 15">Quantifier</a>
    <span id="ReluctantZeroOrMore_3346_3365" title="Not referenced locally, nor via imports">ReluctantZeroOrMore</span> : <a href="#Quantifier_212_222" id="Quantifier_3368_3378" title="Defined at line 15">Quantifier</a>
    <span id="ReluctantOneOrMore_3383_3401" title="Not referenced locally, nor via imports">ReluctantOneOrMore</span> : <a href="#Quantifier_212_222" id="Quantifier_3404_3414" title="Defined at line 15">Quantifier</a>
    <span id="PossessiveExactBound_3419_3439" title="Not referenced locally, nor via imports">PossessiveExactBound</span> : <a href="#Integer_919_926" id="Integer_3442_3449" title="Defined at line 54">Integer</a> -&gt; <a href="#Quantifier_212_222" id="Quantifier_3453_3463" title="Defined at line 15">Quantifier</a>
    <span id="PossessiveLowerBound_3468_3488" title="Not referenced locally, nor via imports">PossessiveLowerBound</span> : <a href="#Integer_919_926" id="Integer_3491_3498" title="Defined at line 54">Integer</a> -&gt; <a href="#Quantifier_212_222" id="Quantifier_3502_3512" title="Defined at line 15">Quantifier</a>
    <span id="PossessiveLowerUpperBound_3517_3542" title="Not referenced locally, nor via imports">PossessiveLowerUpperBound</span> : <a href="#Integer_919_926" id="Integer_3545_3552" title="Defined at line 54">Integer</a> * <a href="#Integer_919_926" id="Integer_3555_3562" title="Defined at line 54">Integer</a> -&gt; <a href="#Quantifier_212_222" id="Quantifier_3566_3576" title="Defined at line 15">Quantifier</a>
    <span id="PossessiveOnceOrNot_3581_3600" title="Not referenced locally, nor via imports">PossessiveOnceOrNot</span> : <a href="#Quantifier_212_222" id="Quantifier_3603_3613" title="Defined at line 15">Quantifier</a>
    <span id="PossessiveZeroOrMore_3618_3638" title="Not referenced locally, nor via imports">PossessiveZeroOrMore</span> : <a href="#Quantifier_212_222" id="Quantifier_3641_3651" title="Defined at line 15">Quantifier</a>
    <span id="PossessiveOneOrMore_3656_3675" title="Not referenced locally, nor via imports">PossessiveOneOrMore</span> : <a href="#Quantifier_212_222" id="Quantifier_3678_3688" title="Defined at line 15">Quantifier</a>
    <span id="Capture_3693_3700" title="Not referenced locally, nor via imports">Capture</span> : <a href="#Pattern_165_172" id="Pattern_3703_3710" title="Defined at line 11">Pattern</a> -&gt; <a href="#Atom_227_231" id="Atom_3714_3718" title="Defined at line 16">Atom</a>
    <span id="NonCapture_3723_3733" title="Not referenced locally, nor via imports">NonCapture</span> : <a href="#Pattern_165_172" id="Pattern_3736_3743" title="Defined at line 11">Pattern</a> -&gt; <a href="#Atom_227_231" id="Atom_3747_3751" title="Defined at line 16">Atom</a>
    <span id="PositiveLookahead_3756_3773" title="Not referenced locally, nor via imports">PositiveLookahead</span> : <a href="#Pattern_165_172" id="Pattern_3776_3783" title="Defined at line 11">Pattern</a> -&gt; <a href="#Atom_227_231" id="Atom_3787_3791" title="Defined at line 16">Atom</a>
    <span id="NegativeLookahead_3796_3813" title="Not referenced locally, nor via imports">NegativeLookahead</span> : <a href="#Pattern_165_172" id="Pattern_3816_3823" title="Defined at line 11">Pattern</a> -&gt; <a href="#Atom_227_231" id="Atom_3827_3831" title="Defined at line 16">Atom</a>
    <span id="PositiveLookbehind_3836_3854" title="Not referenced locally, nor via imports">PositiveLookbehind</span> : <a href="#Pattern_165_172" id="Pattern_3857_3864" title="Defined at line 11">Pattern</a> -&gt; <a href="#Atom_227_231" id="Atom_3868_3872" title="Defined at line 16">Atom</a>
    <span id="NegativeLookbehind_3877_3895" title="Not referenced locally, nor via imports">NegativeLookbehind</span> : <a href="#Pattern_165_172" id="Pattern_3898_3905" title="Defined at line 11">Pattern</a> -&gt; <a href="#Atom_227_231" id="Atom_3909_3913" title="Defined at line 16">Atom</a>
    <span id="PythonCapture_3918_3931" title="Not referenced locally, nor via imports">PythonCapture</span> : <a href="#RegexId_1071_1078" id="RegexId_3934_3941" title="Defined at line 60">RegexId</a> * <a href="#Pattern_165_172" id="Pattern_3944_3951" title="Defined at line 11">Pattern</a> -&gt; <a href="#Atom_227_231" id="Atom_3955_3959" title="Defined at line 16">Atom</a>
    <span id="RegexCapture_3964_3976" title="Not referenced locally, nor via imports">RegexCapture</span> : <a href="#Pattern_165_172" id="Pattern_3979_3986" title="Defined at line 11">Pattern</a> * <a href="#RegexId_1071_1078" id="RegexId_3989_3996" title="Defined at line 60">RegexId</a> -&gt; <a href="#Atom_227_231" id="Atom_4000_4004" title="Defined at line 16">Atom</a>
    <span id="Empty_4009_4014" title="Not referenced locally, nor via imports">Empty</span> : <a href="#Atom_227_231" id="Atom_4017_4021" title="Defined at line 16">Atom</a>
    <span id="SingleCharacter_4026_4041" title="Not referenced locally, nor via imports">SingleCharacter</span> : <a href="#Atom_227_231" id="Atom_4044_4048" title="Defined at line 16">Atom</a>
    <span id="LineStart_4053_4062" title="Not referenced locally, nor via imports">LineStart</span> : <a href="#Atom_227_231" id="Atom_4065_4069" title="Defined at line 16">Atom</a>
    <span id="LineEnd_4074_4081" title="Not referenced locally, nor via imports">LineEnd</span> : <a href="#Atom_227_231" id="Atom_4084_4088" title="Defined at line 16">Atom</a>
    <span id="CharacterClass_4093_4107" title="Not referenced locally, nor via imports">CharacterClass</span> : <a href="#CharacterClass_236_250" id="CharacterClass_4110_4124" title="Defined at line 17">CharacterClass</a> -&gt; <a href="#Atom_227_231" id="Atom_4128_4132" title="Defined at line 16">Atom</a>
    <span id="AtomLiteral_4137_4148" title="Not referenced locally, nor via imports">AtomLiteral</span> : <a href="#AtomLiteral_353_364" id="AtomLiteral_4151_4162" title="Defined at line 22">AtomLiteral</a> -&gt; <a href="#Atom_227_231" id="Atom_4166_4170" title="Defined at line 16">Atom</a>
    <span id="AtomCharacter_4175_4188" title="Not referenced locally, nor via imports">AtomCharacter</span> : <a href="#AtomCharacter_421_434" id="AtomCharacter_4191_4204" title="Defined at line 25">AtomCharacter</a> -&gt; <a href="#Atom_227_231" id="Atom_4208_4212" title="Defined at line 16">Atom</a>
    <span id="QuotedAtom_4217_4227" title="Not referenced locally, nor via imports">QuotedAtom</span> : <a href="#AllChars_378_386" id="AllChars_4230_4238" title="Defined at line 23">AllChars</a> -&gt; <a href="#Atom_227_231" id="Atom_4242_4246" title="Defined at line 16">Atom</a>
    <span id="BracketList_4251_4262" title="Not referenced locally, nor via imports">BracketList</span> : <span class="keyword">list</span>(<a href="#BracketItem_255_266" id="BracketItem_4270_4281" title="Defined at line 18">BracketItem</a>) -&gt; <a href="#CharacterClass_236_250" id="CharacterClass_4286_4300" title="Defined at line 17">CharacterClass</a>
    <span id="NegatedBracketList_4305_4323" title="Not referenced locally, nor via imports">NegatedBracketList</span> : <span class="keyword">list</span>(<a href="#BracketItem_255_266" id="BracketItem_4331_4342" title="Defined at line 18">BracketItem</a>) -&gt; <a href="#CharacterClass_236_250" id="CharacterClass_4347_4361" title="Defined at line 17">CharacterClass</a>
    <span id="Range_4366_4371" title="Not referenced locally, nor via imports">Range</span> : <a href="#BracketLiteralOrBracketCharacter_271_303" id="BracketLiteralOrBracketCharacter_4374_4406" title="Defined at line 19">BracketLiteralOrBracketCharacter</a> * <a href="#BracketLiteralOrBracketCharacter_271_303" id="BracketLiteralOrBracketCharacter_4409_4441" title="Defined at line 19">BracketLiteralOrBracketCharacter</a> -&gt; <a href="#BracketItem_255_266" id="BracketItem_4445_4456" title="Defined at line 18">BracketItem</a>
    <span id="BracketLiteral2BracketLiteralOrBracketCharacter_4461_4508" title="Not referenced locally, nor via imports">BracketLiteral2BracketLiteralOrBracketCharacter</span> : <a href="#BracketLiteral_325_339" id="BracketLiteral_4511_4525" title="Defined at line 21">BracketLiteral</a> -&gt; <a href="#BracketLiteralOrBracketCharacter_271_303" id="BracketLiteralOrBracketCharacter_4529_4561" title="Defined at line 19">BracketLiteralOrBracketCharacter</a>
    <span id="BracketCharacter2BracketLiteralOrBracketCharacter_4566_4615" title="Not referenced locally, nor via imports">BracketCharacter2BracketLiteralOrBracketCharacter</span> : <a href="#BracketCharacter_400_416" id="BracketCharacter_4618_4634" title="Defined at line 24">BracketCharacter</a> -&gt; <a href="#BracketLiteralOrBracketCharacter_271_303" id="BracketLiteralOrBracketCharacter_4638_4670" title="Defined at line 19">BracketLiteralOrBracketCharacter</a>
    <span id="Union_4675_4680" title="Not referenced locally, nor via imports">Union</span> : <a href="#CharacterClass_236_250" id="CharacterClass_4683_4697" title="Defined at line 17">CharacterClass</a> -&gt; <a href="#BracketItem_255_266" id="BracketItem_4701_4712" title="Defined at line 18">BracketItem</a>
    <span id="BracketLiteral_4717_4731" title="Not referenced locally, nor via imports">BracketLiteral</span> : <a href="#BracketLiteral_325_339" id="BracketLiteral_4734_4748" title="Defined at line 21">BracketLiteral</a> -&gt; <a href="#BracketItem_255_266" id="BracketItem_4752_4763" title="Defined at line 18">BracketItem</a>
    <span id="BracketCharacter_4768_4784" title="Not referenced locally, nor via imports">BracketCharacter</span> : <a href="#BracketCharacter_400_416" id="BracketCharacter_4787_4803" title="Defined at line 24">BracketCharacter</a> -&gt; <a href="#BracketItem_255_266" id="BracketItem_4807_4818" title="Defined at line 18">BracketItem</a>
    <span id="LowerClass_4823_4833" title="Not referenced locally, nor via imports">LowerClass</span> : <a href="#ClassKeyword_308_320" id="ClassKeyword_4836_4848" title="Defined at line 20">ClassKeyword</a>
    <span id="UpperClass_4853_4863" title="Not referenced locally, nor via imports">UpperClass</span> : <a href="#ClassKeyword_308_320" id="ClassKeyword_4866_4878" title="Defined at line 20">ClassKeyword</a>
    <span id="ASCIIClass_4883_4893" title="Not referenced locally, nor via imports">ASCIIClass</span> : <a href="#ClassKeyword_308_320" id="ClassKeyword_4896_4908" title="Defined at line 20">ClassKeyword</a>
    <span id="AlphaClass_4913_4923" title="Not referenced locally, nor via imports">AlphaClass</span> : <a href="#ClassKeyword_308_320" id="ClassKeyword_4926_4938" title="Defined at line 20">ClassKeyword</a>
    <span id="DigitClass_4943_4953" title="Not referenced locally, nor via imports">DigitClass</span> : <a href="#ClassKeyword_308_320" id="ClassKeyword_4956_4968" title="Defined at line 20">ClassKeyword</a>
    <span id="AlnumClass_4973_4983" title="Not referenced locally, nor via imports">AlnumClass</span> : <a href="#ClassKeyword_308_320" id="ClassKeyword_4986_4998" title="Defined at line 20">ClassKeyword</a>
    <span id="PunctClass_5003_5013" title="Not referenced locally, nor via imports">PunctClass</span> : <a href="#ClassKeyword_308_320" id="ClassKeyword_5016_5028" title="Defined at line 20">ClassKeyword</a>
    <span id="GraphClass_5033_5043" title="Not referenced locally, nor via imports">GraphClass</span> : <a href="#ClassKeyword_308_320" id="ClassKeyword_5046_5058" title="Defined at line 20">ClassKeyword</a>
    <span id="PrintClass_5063_5073" title="Not referenced locally, nor via imports">PrintClass</span> : <a href="#ClassKeyword_308_320" id="ClassKeyword_5076_5088" title="Defined at line 20">ClassKeyword</a>
    <span id="BlankClass_5093_5103" title="Not referenced locally, nor via imports">BlankClass</span> : <a href="#ClassKeyword_308_320" id="ClassKeyword_5106_5118" title="Defined at line 20">ClassKeyword</a>
    <span id="CntrlClass_5123_5133" title="Not referenced locally, nor via imports">CntrlClass</span> : <a href="#ClassKeyword_308_320" id="ClassKeyword_5136_5148" title="Defined at line 20">ClassKeyword</a>
    <span id="XDigitClass_5153_5164" title="Not referenced locally, nor via imports">XDigitClass</span> : <a href="#ClassKeyword_308_320" id="ClassKeyword_5167_5179" title="Defined at line 20">ClassKeyword</a>
    <span id="WhiteSpace_5184_5194" title="Not referenced locally, nor via imports">WhiteSpace</span> : <a href="#ClassKeyword_308_320" id="ClassKeyword_5197_5209" title="Defined at line 20">ClassKeyword</a>
    <span id="JavaIsLowerCase_5214_5229" title="Not referenced locally, nor via imports">JavaIsLowerCase</span> : <a href="#ClassKeyword_308_320" id="ClassKeyword_5232_5244" title="Defined at line 20">ClassKeyword</a>
    <span id="JavaIsUpperCase_5249_5264" title="Not referenced locally, nor via imports">JavaIsUpperCase</span> : <a href="#ClassKeyword_308_320" id="ClassKeyword_5267_5279" title="Defined at line 20">ClassKeyword</a>
    <span id="JavaIsWhitespace_5284_5300" title="Not referenced locally, nor via imports">JavaIsWhitespace</span> : <a href="#ClassKeyword_308_320" id="ClassKeyword_5303_5315" title="Defined at line 20">ClassKeyword</a>
    <span id="JavaIsMirrored_5320_5334" title="Not referenced locally, nor via imports">JavaIsMirrored</span> : <a href="#ClassKeyword_308_320" id="ClassKeyword_5337_5349" title="Defined at line 20">ClassKeyword</a>
    <span id="GreekBlock_5354_5364" title="Not referenced locally, nor via imports">GreekBlock</span> : <a href="#ClassKeyword_308_320" id="ClassKeyword_5367_5379" title="Defined at line 20">ClassKeyword</a>
    <span id="UppercaseLetter_5384_5399" title="Not referenced locally, nor via imports">UppercaseLetter</span> : <a href="#ClassKeyword_308_320" id="ClassKeyword_5402_5414" title="Defined at line 20">ClassKeyword</a>
    <span id="CurrencySymbol_5419_5433" title="Not referenced locally, nor via imports">CurrencySymbol</span> : <a href="#ClassKeyword_308_320" id="ClassKeyword_5436_5448" title="Defined at line 20">ClassKeyword</a>
    <span id="DoubleQuote_5453_5464" title="Not referenced locally, nor via imports">DoubleQuote</span> : <a href="#DoubleQuote_439_450" id="DoubleQuote_5467_5478" title="Defined at line 26">DoubleQuote</a>
    <span id="OctalChar_5483_5492" title="Not referenced locally, nor via imports">OctalChar</span> : <a href="#OctalValue_940_950" id="OctalValue_5495_5505" title="Defined at line 55">OctalValue</a> -&gt; <a href="#OctalChar_455_464" id="OctalChar_5509_5518" title="Defined at line 27">OctalChar</a>
    <span id="HexHexChar_5523_5533" title="Not referenced locally, nor via imports">HexHexChar</span> : <a href="#TwoHexValue_964_975" id="TwoHexValue_5536_5547" title="Defined at line 56">TwoHexValue</a> -&gt; <a href="#HexHexChar_469_479" id="HexHexChar_5551_5561" title="Defined at line 28">HexHexChar</a>
    <span id="DecHexChar_5566_5576" title="Not referenced locally, nor via imports">DecHexChar</span> : <a href="#FourHexValue_989_1001" id="FourHexValue_5579_5591" title="Defined at line 57">FourHexValue</a> -&gt; <a href="#DecHexChar_484_494" id="DecHexChar_5595_5605" title="Defined at line 29">DecHexChar</a>
    <span id="Tab_5610_5613" title="Not referenced locally, nor via imports">Tab</span> : <a href="#Tab_499_502" id="Tab_5616_5619" title="Defined at line 30">Tab</a>
    <span id="Newline_5624_5631" title="Not referenced locally, nor via imports">Newline</span> : <a href="#Newline_507_514" id="Newline_5634_5641" title="Defined at line 31">Newline</a>
    <span id="ReturnAtom_5646_5656" title="Not referenced locally, nor via imports">ReturnAtom</span> : <a href="#ReturnAtom_519_529" id="ReturnAtom_5659_5669" title="Defined at line 32">ReturnAtom</a>
    <span id="Formfeed_5674_5682" title="Not referenced locally, nor via imports">Formfeed</span> : <a href="#Formfeed_534_542" id="Formfeed_5685_5693" title="Defined at line 33">Formfeed</a>
    <span id="Alarm_5698_5703" title="Not referenced locally, nor via imports">Alarm</span> : <a href="#Alarm_547_552" id="Alarm_5706_5711" title="Defined at line 34">Alarm</a>
    <span id="Escape_5716_5722" title="Not referenced locally, nor via imports">Escape</span> : <a href="#Escape_557_563" id="Escape_5725_5731" title="Defined at line 35">Escape</a>
    <span id="WordChar_5736_5744" title="Not referenced locally, nor via imports">WordChar</span> : <a href="#WordChar_568_576" id="WordChar_5747_5755" title="Defined at line 36">WordChar</a>
    <span id="NonWordChar_5760_5771" title="Not referenced locally, nor via imports">NonWordChar</span> : <a href="#NonWordChar_581_592" id="NonWordChar_5774_5785" title="Defined at line 37">NonWordChar</a>
    <span id="WhiteSpaceChar_5790_5804" title="Not referenced locally, nor via imports">WhiteSpaceChar</span> : <a href="#WhiteSpaceChar_597_611" id="WhiteSpaceChar_5807_5821" title="Defined at line 38">WhiteSpaceChar</a>
    <span id="NonWhiteSpaceChar_5826_5843" title="Not referenced locally, nor via imports">NonWhiteSpaceChar</span> : <a href="#NonWhiteSpaceChar_804_821" id="NonWhiteSpaceChar_5846_5863" title="Defined at line 49">NonWhiteSpaceChar</a>
    <span id="DigitChar_5868_5877" title="Not referenced locally, nor via imports">DigitChar</span> : <a href="#DigitChar_616_625" id="DigitChar_5880_5889" title="Defined at line 39">DigitChar</a>
    <span id="NonDigitChar_5894_5906" title="Not referenced locally, nor via imports">NonDigitChar</span> : <a href="#NonDigitChar_630_642" id="NonDigitChar_5909_5921" title="Defined at line 40">NonDigitChar</a>
    <span id="ControlCharacter_5926_5942" title="Not referenced locally, nor via imports">ControlCharacter</span> : <a href="#ControlValue_1045_1057" id="ControlValue_5945_5957" title="Defined at line 59">ControlValue</a> -&gt; <a href="#ControlCharacter_647_663" id="ControlCharacter_5961_5977" title="Defined at line 41">ControlCharacter</a>
    <span id="WordBoundry_5982_5993" title="Not referenced locally, nor via imports">WordBoundry</span> : <a href="#WordBoundry_668_679" id="WordBoundry_5996_6007" title="Defined at line 42">WordBoundry</a>
    <span id="NonWordBoundry_6012_6026" title="Not referenced locally, nor via imports">NonWordBoundry</span> : <a href="#NonWordBoundry_684_698" id="NonWordBoundry_6029_6043" title="Defined at line 43">NonWordBoundry</a>
    <span id="InputBeginBoundry_6048_6065" title="Not referenced locally, nor via imports">InputBeginBoundry</span> : <a href="#InputBeginBoundry_703_720" id="InputBeginBoundry_6068_6085" title="Defined at line 44">InputBeginBoundry</a>
    <span id="PrevMatchEndBoundry_6090_6109" title="Not referenced locally, nor via imports">PrevMatchEndBoundry</span> : <a href="#PrevMatchEndBoundry_725_744" id="PrevMatchEndBoundry_6112_6131" title="Defined at line 45">PrevMatchEndBoundry</a>
    <span id="EndInputBoundry_6136_6151" title="Not referenced locally, nor via imports">EndInputBoundry</span> : <a href="#EndInputBoundry_749_764" id="EndInputBoundry_6154_6169" title="Defined at line 46">EndInputBoundry</a>
    <span id="EndInputFinalBoundry_6174_6194" title="Not referenced locally, nor via imports">EndInputFinalBoundry</span> : <a href="#EndInputFinalBoundry_769_789" id="EndInputFinalBoundry_6197_6217" title="Defined at line 47">EndInputFinalBoundry</a>
    <span id="BackReference_6222_6235" title="Not referenced locally, nor via imports">BackReference</span> : <a href="#BackReferenceLex_1015_1031" id="BackReferenceLex_6238_6254" title="Defined at line 58">BackReferenceLex</a> -&gt; <a href="#BackReference_826_839" id="BackReference_6258_6271" title="Defined at line 50">BackReference</a>
    <span id="Space_6276_6281" title="Not referenced locally, nor via imports">Space</span> : <a href="#Space_794_799" id="Space_6284_6289" title="Defined at line 48">Space</a>
    <span id="DoubleQuote2BracketCharacter_6294_6322" title="Not referenced locally, nor via imports">DoubleQuote2BracketCharacter</span> : <a href="#DoubleQuote_439_450" id="DoubleQuote_6325_6336" title="Defined at line 26">DoubleQuote</a> -&gt; <a href="#BracketCharacter_400_416" id="BracketCharacter_6340_6356" title="Defined at line 24">BracketCharacter</a>
    <span id="OctalChar2BracketCharacter_6361_6387" title="Not referenced locally, nor via imports">OctalChar2BracketCharacter</span> : <a href="#OctalChar_455_464" id="OctalChar_6390_6399" title="Defined at line 27">OctalChar</a> -&gt; <a href="#BracketCharacter_400_416" id="BracketCharacter_6403_6419" title="Defined at line 24">BracketCharacter</a>
    <span id="HexHexChar2BracketCharacter_6424_6451" title="Not referenced locally, nor via imports">HexHexChar2BracketCharacter</span> : <a href="#HexHexChar_469_479" id="HexHexChar_6454_6464" title="Defined at line 28">HexHexChar</a> -&gt; <a href="#BracketCharacter_400_416" id="BracketCharacter_6468_6484" title="Defined at line 24">BracketCharacter</a>
    <span id="DecHexChar2BracketCharacter_6489_6516" title="Not referenced locally, nor via imports">DecHexChar2BracketCharacter</span> : <a href="#DecHexChar_484_494" id="DecHexChar_6519_6529" title="Defined at line 29">DecHexChar</a> -&gt; <a href="#BracketCharacter_400_416" id="BracketCharacter_6533_6549" title="Defined at line 24">BracketCharacter</a>
    <span id="Tab2BracketCharacter_6554_6574" title="Not referenced locally, nor via imports">Tab2BracketCharacter</span> : <a href="#Tab_499_502" id="Tab_6577_6580" title="Defined at line 30">Tab</a> -&gt; <a href="#BracketCharacter_400_416" id="BracketCharacter_6584_6600" title="Defined at line 24">BracketCharacter</a>
    <span id="Newline2BracketCharacter_6605_6629" title="Not referenced locally, nor via imports">Newline2BracketCharacter</span> : <a href="#Newline_507_514" id="Newline_6632_6639" title="Defined at line 31">Newline</a> -&gt; <a href="#BracketCharacter_400_416" id="BracketCharacter_6643_6659" title="Defined at line 24">BracketCharacter</a>
    <span id="ReturnAtom2BracketCharacter_6664_6691" title="Not referenced locally, nor via imports">ReturnAtom2BracketCharacter</span> : <a href="#ReturnAtom_519_529" id="ReturnAtom_6694_6704" title="Defined at line 32">ReturnAtom</a> -&gt; <a href="#BracketCharacter_400_416" id="BracketCharacter_6708_6724" title="Defined at line 24">BracketCharacter</a>
    <span id="Formfeed2BracketCharacter_6729_6754" title="Not referenced locally, nor via imports">Formfeed2BracketCharacter</span> : <a href="#Formfeed_534_542" id="Formfeed_6757_6765" title="Defined at line 33">Formfeed</a> -&gt; <a href="#BracketCharacter_400_416" id="BracketCharacter_6769_6785" title="Defined at line 24">BracketCharacter</a>
    <span id="Alarm2BracketCharacter_6790_6812" title="Not referenced locally, nor via imports">Alarm2BracketCharacter</span> : <a href="#Alarm_547_552" id="Alarm_6815_6820" title="Defined at line 34">Alarm</a> -&gt; <a href="#BracketCharacter_400_416" id="BracketCharacter_6824_6840" title="Defined at line 24">BracketCharacter</a>
    <span id="Escape2BracketCharacter_6845_6868" title="Not referenced locally, nor via imports">Escape2BracketCharacter</span> : <a href="#Escape_557_563" id="Escape_6871_6877" title="Defined at line 35">Escape</a> -&gt; <a href="#BracketCharacter_400_416" id="BracketCharacter_6881_6897" title="Defined at line 24">BracketCharacter</a>
    <span id="WordChar2BracketCharacter_6902_6927" title="Not referenced locally, nor via imports">WordChar2BracketCharacter</span> : <a href="#WordChar_568_576" id="WordChar_6930_6938" title="Defined at line 36">WordChar</a> -&gt; <a href="#BracketCharacter_400_416" id="BracketCharacter_6942_6958" title="Defined at line 24">BracketCharacter</a>
    <span id="NonWordChar2BracketCharacter_6963_6991" title="Not referenced locally, nor via imports">NonWordChar2BracketCharacter</span> : <a href="#NonWordChar_581_592" id="NonWordChar_6994_7005" title="Defined at line 37">NonWordChar</a> -&gt; <a href="#BracketCharacter_400_416" id="BracketCharacter_7009_7025" title="Defined at line 24">BracketCharacter</a>
    <span id="WhiteSpaceChar2BracketCharacter_7030_7061" title="Not referenced locally, nor via imports">WhiteSpaceChar2BracketCharacter</span> : <a href="#WhiteSpaceChar_597_611" id="WhiteSpaceChar_7064_7078" title="Defined at line 38">WhiteSpaceChar</a> -&gt; <a href="#BracketCharacter_400_416" id="BracketCharacter_7082_7098" title="Defined at line 24">BracketCharacter</a>
    <span id="NonWhiteSpaceChar2BracketCharacter_7103_7137" title="Not referenced locally, nor via imports">NonWhiteSpaceChar2BracketCharacter</span> : <a href="#NonWhiteSpaceChar_804_821" id="NonWhiteSpaceChar_7140_7157" title="Defined at line 49">NonWhiteSpaceChar</a> -&gt; <a href="#BracketCharacter_400_416" id="BracketCharacter_7161_7177" title="Defined at line 24">BracketCharacter</a>
    <span id="DigitChar2BracketCharacter_7182_7208" title="Not referenced locally, nor via imports">DigitChar2BracketCharacter</span> : <a href="#DigitChar_616_625" id="DigitChar_7211_7220" title="Defined at line 39">DigitChar</a> -&gt; <a href="#BracketCharacter_400_416" id="BracketCharacter_7224_7240" title="Defined at line 24">BracketCharacter</a>
    <span id="NonDigitChar2BracketCharacter_7245_7274" title="Not referenced locally, nor via imports">NonDigitChar2BracketCharacter</span> : <a href="#NonDigitChar_630_642" id="NonDigitChar_7277_7289" title="Defined at line 40">NonDigitChar</a> -&gt; <a href="#BracketCharacter_400_416" id="BracketCharacter_7293_7309" title="Defined at line 24">BracketCharacter</a>
    <span id="ControlCharacter2BracketCharacter_7314_7347" title="Not referenced locally, nor via imports">ControlCharacter2BracketCharacter</span> : <a href="#ControlCharacter_647_663" id="ControlCharacter_7350_7366" title="Defined at line 41">ControlCharacter</a> -&gt; <a href="#BracketCharacter_400_416" id="BracketCharacter_7370_7386" title="Defined at line 24">BracketCharacter</a>
    <span id="WordBoundry2BracketCharacter_7391_7419" title="Not referenced locally, nor via imports">WordBoundry2BracketCharacter</span> : <a href="#WordBoundry_668_679" id="WordBoundry_7422_7433" title="Defined at line 42">WordBoundry</a> -&gt; <a href="#BracketCharacter_400_416" id="BracketCharacter_7437_7453" title="Defined at line 24">BracketCharacter</a>
    <span id="NonWordBoundry2BracketCharacter_7458_7489" title="Not referenced locally, nor via imports">NonWordBoundry2BracketCharacter</span> : <a href="#NonWordBoundry_684_698" id="NonWordBoundry_7492_7506" title="Defined at line 43">NonWordBoundry</a> -&gt; <a href="#BracketCharacter_400_416" id="BracketCharacter_7510_7526" title="Defined at line 24">BracketCharacter</a>
    <span id="InputBeginBoundry2BracketCharacter_7531_7565" title="Not referenced locally, nor via imports">InputBeginBoundry2BracketCharacter</span> : <a href="#InputBeginBoundry_703_720" id="InputBeginBoundry_7568_7585" title="Defined at line 44">InputBeginBoundry</a> -&gt; <a href="#BracketCharacter_400_416" id="BracketCharacter_7589_7605" title="Defined at line 24">BracketCharacter</a>
    <span id="PrevMatchEndBoundry2BracketCharacter_7610_7646" title="Not referenced locally, nor via imports">PrevMatchEndBoundry2BracketCharacter</span> : <a href="#PrevMatchEndBoundry_725_744" id="PrevMatchEndBoundry_7649_7668" title="Defined at line 45">PrevMatchEndBoundry</a> -&gt; <a href="#BracketCharacter_400_416" id="BracketCharacter_7672_7688" title="Defined at line 24">BracketCharacter</a>
    <span id="EndInputBoundry2BracketCharacter_7693_7725" title="Not referenced locally, nor via imports">EndInputBoundry2BracketCharacter</span> : <a href="#EndInputBoundry_749_764" id="EndInputBoundry_7728_7743" title="Defined at line 46">EndInputBoundry</a> -&gt; <a href="#BracketCharacter_400_416" id="BracketCharacter_7747_7763" title="Defined at line 24">BracketCharacter</a>
    <span id="EndInputFinalBoundry2BracketCharacter_7768_7805" title="Not referenced locally, nor via imports">EndInputFinalBoundry2BracketCharacter</span> : <a href="#EndInputFinalBoundry_769_789" id="EndInputFinalBoundry_7808_7828" title="Defined at line 47">EndInputFinalBoundry</a> -&gt; <a href="#BracketCharacter_400_416" id="BracketCharacter_7832_7848" title="Defined at line 24">BracketCharacter</a>
    <span id="BackReference2BracketCharacter_7853_7883" title="Not referenced locally, nor via imports">BackReference2BracketCharacter</span> : <a href="#BackReference_826_839" id="BackReference_7886_7899" title="Defined at line 50">BackReference</a> -&gt; <a href="#BracketCharacter_400_416" id="BracketCharacter_7903_7919" title="Defined at line 24">BracketCharacter</a>
    <span id="Space2BracketCharacter_7924_7946" title="Not referenced locally, nor via imports">Space2BracketCharacter</span> : <a href="#Space_794_799" id="Space_7949_7954" title="Defined at line 48">Space</a> -&gt; <a href="#BracketCharacter_400_416" id="BracketCharacter_7958_7974" title="Defined at line 24">BracketCharacter</a>
    <span id="DoubleQuote2AtomCharacter_7979_8004" title="Not referenced locally, nor via imports">DoubleQuote2AtomCharacter</span> : <a href="#DoubleQuote_439_450" id="DoubleQuote_8007_8018" title="Defined at line 26">DoubleQuote</a> -&gt; <a href="#AtomCharacter_421_434" id="AtomCharacter_8022_8035" title="Defined at line 25">AtomCharacter</a>
    <span id="OctalChar2AtomCharacter_8040_8063" title="Not referenced locally, nor via imports">OctalChar2AtomCharacter</span> : <a href="#OctalChar_455_464" id="OctalChar_8066_8075" title="Defined at line 27">OctalChar</a> -&gt; <a href="#AtomCharacter_421_434" id="AtomCharacter_8079_8092" title="Defined at line 25">AtomCharacter</a>
    <span id="HexHexChar2AtomCharacter_8097_8121" title="Not referenced locally, nor via imports">HexHexChar2AtomCharacter</span> : <a href="#HexHexChar_469_479" id="HexHexChar_8124_8134" title="Defined at line 28">HexHexChar</a> -&gt; <a href="#AtomCharacter_421_434" id="AtomCharacter_8138_8151" title="Defined at line 25">AtomCharacter</a>
    <span id="DecHexChar2AtomCharacter_8156_8180" title="Not referenced locally, nor via imports">DecHexChar2AtomCharacter</span> : <a href="#DecHexChar_484_494" id="DecHexChar_8183_8193" title="Defined at line 29">DecHexChar</a> -&gt; <a href="#AtomCharacter_421_434" id="AtomCharacter_8197_8210" title="Defined at line 25">AtomCharacter</a>
    <span id="Tab2AtomCharacter_8215_8232" title="Not referenced locally, nor via imports">Tab2AtomCharacter</span> : <a href="#Tab_499_502" id="Tab_8235_8238" title="Defined at line 30">Tab</a> -&gt; <a href="#AtomCharacter_421_434" id="AtomCharacter_8242_8255" title="Defined at line 25">AtomCharacter</a>
    <span id="Newline2AtomCharacter_8260_8281" title="Not referenced locally, nor via imports">Newline2AtomCharacter</span> : <a href="#Newline_507_514" id="Newline_8284_8291" title="Defined at line 31">Newline</a> -&gt; <a href="#AtomCharacter_421_434" id="AtomCharacter_8295_8308" title="Defined at line 25">AtomCharacter</a>
    <span id="ReturnAtom2AtomCharacter_8313_8337" title="Not referenced locally, nor via imports">ReturnAtom2AtomCharacter</span> : <a href="#ReturnAtom_519_529" id="ReturnAtom_8340_8350" title="Defined at line 32">ReturnAtom</a> -&gt; <a href="#AtomCharacter_421_434" id="AtomCharacter_8354_8367" title="Defined at line 25">AtomCharacter</a>
    <span id="Formfeed2AtomCharacter_8372_8394" title="Not referenced locally, nor via imports">Formfeed2AtomCharacter</span> : <a href="#Formfeed_534_542" id="Formfeed_8397_8405" title="Defined at line 33">Formfeed</a> -&gt; <a href="#AtomCharacter_421_434" id="AtomCharacter_8409_8422" title="Defined at line 25">AtomCharacter</a>
    <span id="Alarm2AtomCharacter_8427_8446" title="Not referenced locally, nor via imports">Alarm2AtomCharacter</span> : <a href="#Alarm_547_552" id="Alarm_8449_8454" title="Defined at line 34">Alarm</a> -&gt; <a href="#AtomCharacter_421_434" id="AtomCharacter_8458_8471" title="Defined at line 25">AtomCharacter</a>
    <span id="Escape2AtomCharacter_8476_8496" title="Not referenced locally, nor via imports">Escape2AtomCharacter</span> : <a href="#Escape_557_563" id="Escape_8499_8505" title="Defined at line 35">Escape</a> -&gt; <a href="#AtomCharacter_421_434" id="AtomCharacter_8509_8522" title="Defined at line 25">AtomCharacter</a>
    <span id="WordChar2AtomCharacter_8527_8549" title="Not referenced locally, nor via imports">WordChar2AtomCharacter</span> : <a href="#WordChar_568_576" id="WordChar_8552_8560" title="Defined at line 36">WordChar</a> -&gt; <a href="#AtomCharacter_421_434" id="AtomCharacter_8564_8577" title="Defined at line 25">AtomCharacter</a>
    <span id="NonWordChar2AtomCharacter_8582_8607" title="Not referenced locally, nor via imports">NonWordChar2AtomCharacter</span> : <a href="#NonWordChar_581_592" id="NonWordChar_8610_8621" title="Defined at line 37">NonWordChar</a> -&gt; <a href="#AtomCharacter_421_434" id="AtomCharacter_8625_8638" title="Defined at line 25">AtomCharacter</a>
    <span id="WhiteSpaceChar2AtomCharacter_8643_8671" title="Not referenced locally, nor via imports">WhiteSpaceChar2AtomCharacter</span> : <a href="#WhiteSpaceChar_597_611" id="WhiteSpaceChar_8674_8688" title="Defined at line 38">WhiteSpaceChar</a> -&gt; <a href="#AtomCharacter_421_434" id="AtomCharacter_8692_8705" title="Defined at line 25">AtomCharacter</a>
    <span id="NonWhiteSpaceChar2AtomCharacter_8710_8741" title="Not referenced locally, nor via imports">NonWhiteSpaceChar2AtomCharacter</span> : <a href="#NonWhiteSpaceChar_804_821" id="NonWhiteSpaceChar_8744_8761" title="Defined at line 49">NonWhiteSpaceChar</a> -&gt; <a href="#AtomCharacter_421_434" id="AtomCharacter_8765_8778" title="Defined at line 25">AtomCharacter</a>
    <span id="DigitChar2AtomCharacter_8783_8806" title="Not referenced locally, nor via imports">DigitChar2AtomCharacter</span> : <a href="#DigitChar_616_625" id="DigitChar_8809_8818" title="Defined at line 39">DigitChar</a> -&gt; <a href="#AtomCharacter_421_434" id="AtomCharacter_8822_8835" title="Defined at line 25">AtomCharacter</a>
    <span id="NonDigitChar2AtomCharacter_8840_8866" title="Not referenced locally, nor via imports">NonDigitChar2AtomCharacter</span> : <a href="#NonDigitChar_630_642" id="NonDigitChar_8869_8881" title="Defined at line 40">NonDigitChar</a> -&gt; <a href="#AtomCharacter_421_434" id="AtomCharacter_8885_8898" title="Defined at line 25">AtomCharacter</a>
    <span id="ControlCharacter2AtomCharacter_8903_8933" title="Not referenced locally, nor via imports">ControlCharacter2AtomCharacter</span> : <a href="#ControlCharacter_647_663" id="ControlCharacter_8936_8952" title="Defined at line 41">ControlCharacter</a> -&gt; <a href="#AtomCharacter_421_434" id="AtomCharacter_8956_8969" title="Defined at line 25">AtomCharacter</a>
    <span id="WordBoundry2AtomCharacter_8974_8999" title="Not referenced locally, nor via imports">WordBoundry2AtomCharacter</span> : <a href="#WordBoundry_668_679" id="WordBoundry_9002_9013" title="Defined at line 42">WordBoundry</a> -&gt; <a href="#AtomCharacter_421_434" id="AtomCharacter_9017_9030" title="Defined at line 25">AtomCharacter</a>
    <span id="NonWordBoundry2AtomCharacter_9035_9063" title="Not referenced locally, nor via imports">NonWordBoundry2AtomCharacter</span> : <a href="#NonWordBoundry_684_698" id="NonWordBoundry_9066_9080" title="Defined at line 43">NonWordBoundry</a> -&gt; <a href="#AtomCharacter_421_434" id="AtomCharacter_9084_9097" title="Defined at line 25">AtomCharacter</a>
    <span id="InputBeginBoundry2AtomCharacter_9102_9133" title="Not referenced locally, nor via imports">InputBeginBoundry2AtomCharacter</span> : <a href="#InputBeginBoundry_703_720" id="InputBeginBoundry_9136_9153" title="Defined at line 44">InputBeginBoundry</a> -&gt; <a href="#AtomCharacter_421_434" id="AtomCharacter_9157_9170" title="Defined at line 25">AtomCharacter</a>
    <span id="PrevMatchEndBoundry2AtomCharacter_9175_9208" title="Not referenced locally, nor via imports">PrevMatchEndBoundry2AtomCharacter</span> : <a href="#PrevMatchEndBoundry_725_744" id="PrevMatchEndBoundry_9211_9230" title="Defined at line 45">PrevMatchEndBoundry</a> -&gt; <a href="#AtomCharacter_421_434" id="AtomCharacter_9234_9247" title="Defined at line 25">AtomCharacter</a>
    <span id="EndInputBoundry2AtomCharacter_9252_9281" title="Not referenced locally, nor via imports">EndInputBoundry2AtomCharacter</span> : <a href="#EndInputBoundry_749_764" id="EndInputBoundry_9284_9299" title="Defined at line 46">EndInputBoundry</a> -&gt; <a href="#AtomCharacter_421_434" id="AtomCharacter_9303_9316" title="Defined at line 25">AtomCharacter</a>
    <span id="EndInputFinalBoundry2AtomCharacter_9321_9355" title="Not referenced locally, nor via imports">EndInputFinalBoundry2AtomCharacter</span> : <a href="#EndInputFinalBoundry_769_789" id="EndInputFinalBoundry_9358_9378" title="Defined at line 47">EndInputFinalBoundry</a> -&gt; <a href="#AtomCharacter_421_434" id="AtomCharacter_9382_9395" title="Defined at line 25">AtomCharacter</a>
    <span id="BackReference2AtomCharacter_9400_9427" title="Not referenced locally, nor via imports">BackReference2AtomCharacter</span> : <a href="#BackReference_826_839" id="BackReference_9430_9443" title="Defined at line 50">BackReference</a> -&gt; <a href="#AtomCharacter_421_434" id="AtomCharacter_9447_9460" title="Defined at line 25">AtomCharacter</a>
    <span id="Space2AtomCharacter_9465_9484" title="Not referenced locally, nor via imports">Space2AtomCharacter</span> : <a href="#Space_794_799" id="Space_9487_9492" title="Defined at line 48">Space</a> -&gt; <a href="#AtomCharacter_421_434" id="AtomCharacter_9496_9509" title="Defined at line 25">AtomCharacter</a>
    <span id="Quoted_9514_9520" title="Not referenced locally, nor via imports">Quoted</span> : <a href="#QuotablePatternSymbol_844_865" id="QuotablePatternSymbol_9523_9544" title="Defined at line 51">QuotablePatternSymbol</a> -&gt; <a href="#Quoted_870_876" id="Quoted_9548_9554" title="Defined at line 52">Quoted</a>
    <span id="Quoted2AtomCharacter_9559_9579" title="Not referenced locally, nor via imports">Quoted2AtomCharacter</span> : <a href="#Quoted_870_876" id="Quoted_9582_9588" title="Defined at line 52">Quoted</a> -&gt; <a href="#AtomCharacter_421_434" id="AtomCharacter_9592_9605" title="Defined at line 25">AtomCharacter</a>
    <span id="Quoted2BracketCharacter_9610_9633" title="Not referenced locally, nor via imports">Quoted2BracketCharacter</span> : <a href="#Quoted_870_876" id="Quoted_9636_9642" title="Defined at line 52">Quoted</a> -&gt; <a href="#BracketCharacter_400_416" id="BracketCharacter_9646_9662" title="Defined at line 24">BracketCharacter</a>
    <span id="QuotablePatternSymbol_9667_9688" title="Not referenced locally, nor via imports">QuotablePatternSymbol</span> : <a href="#QuotablePatternSymbolLex_881_905" id="QuotablePatternSymbolLex_9691_9715" title="Defined at line 53">QuotablePatternSymbolLex</a> -&gt; <a href="#QuotablePatternSymbol_844_865" id="QuotablePatternSymbol_9719_9740" title="Defined at line 51">QuotablePatternSymbol</a>
    <span id="DoubleQuote2QuotablePatternSymbol_9745_9778" title="Not referenced locally, nor via imports">DoubleQuote2QuotablePatternSymbol</span> : <a href="#DoubleQuote_439_450" id="DoubleQuote_9781_9792" title="Defined at line 26">DoubleQuote</a> -&gt; <a href="#QuotablePatternSymbol_844_865" id="QuotablePatternSymbol_9796_9817" title="Defined at line 51">QuotablePatternSymbol</a>
    <span id="RegexId_9822_9829" title="Not referenced locally, nor via imports">RegexId</span> : <a href="#RegexID_1083_1090" id="RegexID_9832_9839" title="Defined at line 61">RegexID</a> -&gt; <a href="#RegexId_1071_1078" id="RegexId_9843_9850" title="Defined at line 60">RegexId</a>
</code></pre></td></tr></tbody></table></div>