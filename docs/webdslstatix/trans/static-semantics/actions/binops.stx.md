---
title: binops.stx
hide:
  - toc
---

# `binops.stx`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/actions/binops.stx]

[pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/actions/binops.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/trans/static-semantics/actions/binops.stx "The source file on GitHub"

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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../../webdsl-actions.stx#static-semantics/actions/binops_50_81" id="static-semantics/actions/binops_7_38" title="Referenced at ../../webdsl-actions.stx line 4">static-semantics/actions/binops</a>

<span class="keyword">imports</span>
  <a href="../../types/built-ins.stx#static-semantics/types/built-ins_7_39" id="static-semantics/types/built-ins_50_82" title="Defined at ../../types/built-ins.stx line 1">static-semantics/types/built-ins</a>

  <a href="../../webdsl-types.stx#static-semantics/webdsl-types_7_36" id="static-semantics/webdsl-types_86_115" title="Defined at ../../webdsl-types.stx line 1">static-semantics/webdsl-types</a>
  <a href="../../webdsl.stx#static-semantics/webdsl_7_30" id="static-semantics/webdsl_118_141" title="Defined at ../../webdsl.stx line 1">static-semantics/webdsl</a>

<span class="keyword">rules</span> <span class="layout">// binary operators</span>
  <span class="layout">// (e1 + e2)</span>
  <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_186_195" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_237_238" id="s_196_197" title="Referenced at line 12">s</a>, <a href="#exp_259_262" id="exp_199_202" title="Referenced at line 13">exp</a>@<a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Add_6022_6025" id="Add_203_206" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 176">Add</a>(<a href="#e1_240_242" id="e1_207_209" title="Referenced at line 12">e1</a>, <a href="#e2_244_246" id="e2_211_213" title="Referenced at line 12">e2</a>)) = <a href="#T_251_252" id="T_218_219" title="Referenced at line 12, 13">T</a> :-
    <a href="#typeOfAdd_381_390" id="typeOfAdd_227_236" title="Defined at line 19">typeOfAdd</a>(<a href="#s_196_197" id="s_237_238" title="Defined at line 11">s</a>, <a href="#e1_207_209" id="e1_240_242" title="Defined at line 11">e1</a>, <a href="#e2_211_213" id="e2_244_246" title="Defined at line 11">e2</a>) == <a href="#T_218_219" id="T_251_252" title="Defined at line 11">T</a>,
    @<a href="#exp_199_202" id="exp_259_262" title="Defined at line 11">exp</a>.<span class="keyword">type</span> := <a href="#T_218_219" id="T_271_272" title="Defined at line 11">T</a>.

  <a href="../../webdsl.stx#typeOfPlaceholderExp_16940_16960" id="typeOfPlaceholderExp_277_297" title="Defined at ../../webdsl.stx line 398">typeOfPlaceholderExp</a>(<a href="#s_341_342" id="s_298_299" title="Referenced at line 16">s</a>, <a href="#exp_363_366" id="exp_301_304" title="Referenced at line 17">exp</a>@<a href="../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx#PHAdd_2296_2301" id="PHAdd_305_310" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx line 63">PHAdd</a>(<a href="#e1_344_346" id="e1_311_313" title="Referenced at line 16">e1</a>, <a href="#e2_348_350" id="e2_315_317" title="Referenced at line 16">e2</a>)) = <a href="#T_355_356" id="T_322_323" title="Referenced at line 16, 17">T</a> :-
    <a href="#typeOfAdd_381_390" id="typeOfAdd_331_340" title="Defined at line 19">typeOfAdd</a>(<a href="#s_298_299" id="s_341_342" title="Defined at line 15">s</a>, <a href="#e1_311_313" id="e1_344_346" title="Defined at line 15">e1</a>, <a href="#e2_315_317" id="e2_348_350" title="Defined at line 15">e2</a>) == <a href="#T_322_323" id="T_355_356" title="Defined at line 15">T</a>,
    @<a href="#exp_301_304" id="exp_363_366" title="Defined at line 15">exp</a>.<span class="keyword">type</span> := <a href="#T_322_323" id="T_375_376" title="Defined at line 15">T</a>.

  <a href="#typeOfAdd_227_236" id="typeOfAdd_381_390" title="Referenced at line 12, 16, 20">typeOfAdd</a> : <span class="keyword">scope</span> * <a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Exp_404_407" id="Exp_401_404" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 25">Exp</a> * <a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Exp_404_407" id="Exp_407_410" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_414_418" title="Defined at ../../webdsl.stx line 29">TYPE</a>
  <a href="#typeOfAdd_381_390" id="typeOfAdd_421_430" title="Defined at line 19">typeOfAdd</a>(<a href="#s_473_474" id="s_431_432" title="Referenced at line 21, 22">s</a>, <a href="#e1_476_478" id="e1_434_436" title="Referenced at line 21, 24">e1</a>, <a href="#e2_504_506" id="e2_438_440" title="Referenced at line 22, 24">e2</a>) = <a href="#T_540_541" id="T_444_445" title="Referenced at line 23, 24">T</a> :- { <a href="#T1_483_485" id="T1_451_453" title="Referenced at line 21, 23, 24">T1</a> <a href="#T2_511_513" id="T2_454_456" title="Referenced at line 22, 23, 24">T2</a> }
    <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_463_472" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_431_432" id="s_473_474" title="Defined at line 20">s</a>, <a href="#e1_434_436" id="e1_476_478" title="Defined at line 20">e1</a>) == <a href="#T1_451_453" id="T1_483_485" title="Defined at line 20">T1</a>,
    <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_491_500" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_431_432" id="s_501_502" title="Defined at line 20">s</a>, <a href="#e2_438_440" id="e2_504_506" title="Defined at line 20">e2</a>) == <a href="#T2_454_456" id="T2_511_513" title="Defined at line 20">T2</a>,
    <a href="#lubForAdd_5587_5596" id="lubForAdd_519_528" title="Defined at line 143">lubForAdd</a>(<a href="#T1_451_453" id="T1_529_531" title="Defined at line 20">T1</a>, <a href="#T2_454_456" id="T2_533_535" title="Defined at line 20">T2</a>) == <a href="#T_444_445" id="T_540_541" title="Defined at line 20">T</a>,
    <a href="../../webdsl-types.stx#inequalType_10560_10571" id="inequalType_547_558" title="Defined at ../../webdsl-types.stx line 286">inequalType</a>(<a href="#T_444_445" id="T_559_560" title="Defined at line 20">T</a>, <a href="../../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_562_569" title="Defined at ../../webdsl-types.stx line 49">UNTYPED</a>()) | <span class="keyword">error</span> $[Wrong operand types for operator Add: [<a href="#e1_434_436" id="e1_622_624" title="Defined at line 20">e1</a>] has type [<a href="#T1_451_453" id="T1_636_638" title="Defined at line 20">T1</a>], [<a href="#e2_438_440" id="e2_642_644" title="Defined at line 20">e2</a>] has type [<a href="#T2_454_456" id="T2_656_658" title="Defined at line 20">T2</a>]]. <span class="layout">// correct error message for tests</span>

  <span class="layout">// (e1 - e2)</span>
  <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_715_724" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_776_777" id="s_725_726" title="Referenced at line 28, 29">s</a>, <a href="#exp_1012_1015" id="exp_728_731" title="Referenced at line 32">exp</a>@<a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Sub_6049_6052" id="Sub_732_735" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 177">Sub</a>(<a href="#e1_779_781" id="e1_736_738" title="Referenced at line 28, 31">e1</a>, <a href="#e2_807_809" id="e2_740_742" title="Referenced at line 29, 31">e2</a>)) = <a href="#T_850_851" id="T_747_748" title="Referenced at line 30, 31, 32">T</a> :- { <a href="#T1_786_788" id="T1_754_756" title="Referenced at line 28, 30, 31">T1</a> <a href="#T2_814_816" id="T2_757_759" title="Referenced at line 29, 30, 31">T2</a> }
    <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_766_775" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_725_726" id="s_776_777" title="Defined at line 27">s</a>, <a href="#e1_736_738" id="e1_779_781" title="Defined at line 27">e1</a>) == <a href="#T1_754_756" id="T1_786_788" title="Defined at line 27">T1</a>,
    <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_794_803" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_725_726" id="s_804_805" title="Defined at line 27">s</a>, <a href="#e2_740_742" id="e2_807_809" title="Defined at line 27">e2</a>) == <a href="#T2_757_759" id="T2_814_816" title="Defined at line 27">T2</a>,
    <a href="#lubForAddNumeric_5766_5782" id="lubForAddNumeric_822_838" title="Defined at line 148">lubForAddNumeric</a>(<a href="#T1_754_756" id="T1_839_841" title="Defined at line 27">T1</a>, <a href="#T2_757_759" id="T2_843_845" title="Defined at line 27">T2</a>) == <a href="#T_747_748" id="T_850_851" title="Defined at line 27">T</a>,
    <a href="../../webdsl-types.stx#inequalType_10560_10571" id="inequalType_857_868" title="Defined at ../../webdsl-types.stx line 286">inequalType</a>(<a href="#T_747_748" id="T_869_870" title="Defined at line 27">T</a>, <a href="../../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_872_879" title="Defined at ../../webdsl-types.stx line 49">UNTYPED</a>()) | <span class="keyword">error</span> $[Wrong operand types for operator Sub: [<a href="#e1_736_738" id="e1_932_934" title="Defined at line 27">e1</a>] has type [<a href="#T1_754_756" id="T1_946_948" title="Defined at line 27">T1</a>], [<a href="#e2_740_742" id="e2_952_954" title="Defined at line 27">e2</a>] has type [<a href="#T2_757_759" id="T2_966_968" title="Defined at line 27">T2</a>]], <span class="layout">// correct error message for tests</span>
    @<a href="#exp_728_731" id="exp_1012_1015" title="Defined at line 27">exp</a>.<span class="keyword">type</span> := <a href="#T_747_748" id="T_1024_1025" title="Defined at line 27">T</a>.

  <span class="layout">// (e1 * e2)</span>
  <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_1045_1054" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_1106_1107" id="s_1055_1056" title="Referenced at line 36, 37">s</a>, <a href="#exp_1342_1345" id="exp_1058_1061" title="Referenced at line 40">exp</a>@<a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Mul_5941_5944" id="Mul_1062_1065" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 173">Mul</a>(<a href="#e1_1109_1111" id="e1_1066_1068" title="Referenced at line 36, 39">e1</a>, <a href="#e2_1137_1139" id="e2_1070_1072" title="Referenced at line 37, 39">e2</a>)) = <a href="#T_1180_1181" id="T_1077_1078" title="Referenced at line 38, 39, 40">T</a> :- { <a href="#T1_1116_1118" id="T1_1084_1086" title="Referenced at line 36, 38, 39">T1</a> <a href="#T2_1144_1146" id="T2_1087_1089" title="Referenced at line 37, 38, 39">T2</a> }
    <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_1096_1105" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_1055_1056" id="s_1106_1107" title="Defined at line 35">s</a>, <a href="#e1_1066_1068" id="e1_1109_1111" title="Defined at line 35">e1</a>) == <a href="#T1_1084_1086" id="T1_1116_1118" title="Defined at line 35">T1</a>,
    <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_1124_1133" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_1055_1056" id="s_1134_1135" title="Defined at line 35">s</a>, <a href="#e2_1070_1072" id="e2_1137_1139" title="Defined at line 35">e2</a>) == <a href="#T2_1087_1089" id="T2_1144_1146" title="Defined at line 35">T2</a>,
    <a href="#lubForAddNumeric_5766_5782" id="lubForAddNumeric_1152_1168" title="Defined at line 148">lubForAddNumeric</a>(<a href="#T1_1084_1086" id="T1_1169_1171" title="Defined at line 35">T1</a>, <a href="#T2_1087_1089" id="T2_1173_1175" title="Defined at line 35">T2</a>) == <a href="#T_1077_1078" id="T_1180_1181" title="Defined at line 35">T</a>,
    <a href="../../webdsl-types.stx#inequalType_10560_10571" id="inequalType_1187_1198" title="Defined at ../../webdsl-types.stx line 286">inequalType</a>(<a href="#T_1077_1078" id="T_1199_1200" title="Defined at line 35">T</a>, <a href="../../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_1202_1209" title="Defined at ../../webdsl-types.stx line 49">UNTYPED</a>()) | <span class="keyword">error</span> $[Wrong operand types for operator Mul: [<a href="#e1_1066_1068" id="e1_1262_1264" title="Defined at line 35">e1</a>] has type [<a href="#T1_1084_1086" id="T1_1276_1278" title="Defined at line 35">T1</a>], [<a href="#e2_1070_1072" id="e2_1282_1284" title="Defined at line 35">e2</a>] has type [<a href="#T2_1087_1089" id="T2_1296_1298" title="Defined at line 35">T2</a>]], <span class="layout">// correct error message for tests</span>
    @<a href="#exp_1058_1061" id="exp_1342_1345" title="Defined at line 35">exp</a>.<span class="keyword">type</span> := <a href="#T_1077_1078" id="T_1354_1355" title="Defined at line 35">T</a>.

  <span class="layout">// (e1 / e2)</span>
  <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_1375_1384" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_1436_1437" id="s_1385_1386" title="Referenced at line 44, 45">s</a>, <a href="#exp_1672_1675" id="exp_1388_1391" title="Referenced at line 48">exp</a>@<a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Div_5968_5971" id="Div_1392_1395" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 174">Div</a>(<a href="#e1_1439_1441" id="e1_1396_1398" title="Referenced at line 44, 47">e1</a>, <a href="#e2_1467_1469" id="e2_1400_1402" title="Referenced at line 45, 47">e2</a>)) = <a href="#T_1510_1511" id="T_1407_1408" title="Referenced at line 46, 47, 48">T</a> :- { <a href="#T1_1446_1448" id="T1_1414_1416" title="Referenced at line 44, 46, 47">T1</a> <a href="#T2_1474_1476" id="T2_1417_1419" title="Referenced at line 45, 46, 47">T2</a> }
    <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_1426_1435" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_1385_1386" id="s_1436_1437" title="Defined at line 43">s</a>, <a href="#e1_1396_1398" id="e1_1439_1441" title="Defined at line 43">e1</a>) == <a href="#T1_1414_1416" id="T1_1446_1448" title="Defined at line 43">T1</a>,
    <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_1454_1463" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_1385_1386" id="s_1464_1465" title="Defined at line 43">s</a>, <a href="#e2_1400_1402" id="e2_1467_1469" title="Defined at line 43">e2</a>) == <a href="#T2_1417_1419" id="T2_1474_1476" title="Defined at line 43">T2</a>,
    <a href="#lubForAddNumeric_5766_5782" id="lubForAddNumeric_1482_1498" title="Defined at line 148">lubForAddNumeric</a>(<a href="#T1_1414_1416" id="T1_1499_1501" title="Defined at line 43">T1</a>, <a href="#T2_1417_1419" id="T2_1503_1505" title="Defined at line 43">T2</a>) == <a href="#T_1407_1408" id="T_1510_1511" title="Defined at line 43">T</a>,
    <a href="../../webdsl-types.stx#inequalType_10560_10571" id="inequalType_1517_1528" title="Defined at ../../webdsl-types.stx line 286">inequalType</a>(<a href="#T_1407_1408" id="T_1529_1530" title="Defined at line 43">T</a>, <a href="../../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_1532_1539" title="Defined at ../../webdsl-types.stx line 49">UNTYPED</a>()) | <span class="keyword">error</span> $[Wrong operand types for operator Div: [<a href="#e1_1396_1398" id="e1_1592_1594" title="Defined at line 43">e1</a>] has type [<a href="#T1_1414_1416" id="T1_1606_1608" title="Defined at line 43">T1</a>], [<a href="#e2_1400_1402" id="e2_1612_1614" title="Defined at line 43">e2</a>] has type [<a href="#T2_1417_1419" id="T2_1626_1628" title="Defined at line 43">T2</a>]], <span class="layout">// correct error message for tests</span>
    @<a href="#exp_1388_1391" id="exp_1672_1675" title="Defined at line 43">exp</a>.<span class="keyword">type</span> := <a href="#T_1407_1408" id="T_1684_1685" title="Defined at line 43">T</a>.

  <span class="layout">// (e1 % e2)</span>
  <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_1705_1714" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_1766_1767" id="s_1715_1716" title="Referenced at line 52, 53">s</a>, <a href="#exp_2002_2005" id="exp_1718_1721" title="Referenced at line 56">exp</a>@<a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Mod_5995_5998" id="Mod_1722_1725" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 175">Mod</a>(<a href="#e1_1769_1771" id="e1_1726_1728" title="Referenced at line 52, 55">e1</a>, <a href="#e2_1797_1799" id="e2_1730_1732" title="Referenced at line 53, 55">e2</a>)) = <a href="#T_1840_1841" id="T_1737_1738" title="Referenced at line 54, 55, 56">T</a> :- { <a href="#T1_1776_1778" id="T1_1744_1746" title="Referenced at line 52, 54, 55">T1</a> <a href="#T2_1804_1806" id="T2_1747_1749" title="Referenced at line 53, 54, 55">T2</a> }
    <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_1756_1765" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_1715_1716" id="s_1766_1767" title="Defined at line 51">s</a>, <a href="#e1_1726_1728" id="e1_1769_1771" title="Defined at line 51">e1</a>) == <a href="#T1_1744_1746" id="T1_1776_1778" title="Defined at line 51">T1</a>,
    <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_1784_1793" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_1715_1716" id="s_1794_1795" title="Defined at line 51">s</a>, <a href="#e2_1730_1732" id="e2_1797_1799" title="Defined at line 51">e2</a>) == <a href="#T2_1747_1749" id="T2_1804_1806" title="Defined at line 51">T2</a>,
    <a href="#lubForAddNumeric_5766_5782" id="lubForAddNumeric_1812_1828" title="Defined at line 148">lubForAddNumeric</a>(<a href="#T1_1744_1746" id="T1_1829_1831" title="Defined at line 51">T1</a>, <a href="#T2_1747_1749" id="T2_1833_1835" title="Defined at line 51">T2</a>) == <a href="#T_1737_1738" id="T_1840_1841" title="Defined at line 51">T</a>,
    <a href="../../webdsl-types.stx#inequalType_10560_10571" id="inequalType_1847_1858" title="Defined at ../../webdsl-types.stx line 286">inequalType</a>(<a href="#T_1737_1738" id="T_1859_1860" title="Defined at line 51">T</a>, <a href="../../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_1862_1869" title="Defined at ../../webdsl-types.stx line 49">UNTYPED</a>()) | <span class="keyword">error</span> $[Wrong operand types for operator Mod: [<a href="#e1_1726_1728" id="e1_1922_1924" title="Defined at line 51">e1</a>] has type [<a href="#T1_1744_1746" id="T1_1936_1938" title="Defined at line 51">T1</a>], [<a href="#e2_1730_1732" id="e2_1942_1944" title="Defined at line 51">e2</a>] has type [<a href="#T2_1747_1749" id="T2_1956_1958" title="Defined at line 51">T2</a>]], <span class="layout">// correct error message for tests</span>
    @<a href="#exp_1718_1721" id="exp_2002_2005" title="Defined at line 51">exp</a>.<span class="keyword">type</span> := <a href="#T_1737_1738" id="T_2014_2015" title="Defined at line 51">T</a>.

  <span class="layout">// (e1 &gt; e2)</span>
  <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_2035_2044" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_2103_2104" id="s_2045_2046" title="Referenced at line 60, 61, 62">s</a>, <a href="#exp_2341_2344" id="exp_2048_2051" title="Referenced at line 64">exp</a>@<a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#LargerThan_4868_4878" id="LargerThan_2052_2062" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 148">LargerThan</a>(<a href="#e1_2124_2126" id="e1_2063_2065" title="Referenced at line 61, 63">e1</a>, <a href="#e2_2152_2154" id="e2_2067_2069" title="Referenced at line 62, 63">e2</a>)) = <a href="#t_2093_2094" id="t_2074_2075" title="Referenced at line 60, 64">t</a> :- { <a href="#T1_2131_2133" id="T1_2081_2083" title="Referenced at line 61, 63, 63">T1</a> <a href="#T2_2159_2161" id="T2_2084_2086" title="Referenced at line 62, 63, 63">T2</a> }
    <a href="#t_2074_2075" id="t_2093_2094" title="Defined at line 59">t</a> == <a href="../../types/built-ins.stx#bool_2637_2641" id="bool_2098_2102" title="Defined at ../../types/built-ins.stx line 72">bool</a>(<a href="#s_2045_2046" id="s_2103_2104" title="Defined at line 59">s</a>),
    <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_2111_2120" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_2045_2046" id="s_2121_2122" title="Defined at line 59">s</a>, <a href="#e1_2063_2065" id="e1_2124_2126" title="Defined at line 59">e1</a>) == <a href="#T1_2081_2083" id="T1_2131_2133" title="Defined at line 59">T1</a>,
    <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_2139_2148" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_2045_2046" id="s_2149_2150" title="Defined at line 59">s</a>, <a href="#e2_2067_2069" id="e2_2152_2154" title="Defined at line 59">e2</a>) == <a href="#T2_2084_2086" id="T2_2159_2161" title="Defined at line 59">T2</a>,
    <a href="#lubForAddNumeric_5766_5782" id="lubForAddNumeric_2167_2183" title="Defined at line 148">lubForAddNumeric</a>(<a href="#T1_2081_2083" id="T1_2184_2186" title="Defined at line 59">T1</a>, <a href="#T2_2084_2086" id="T2_2188_2190" title="Defined at line 59">T2</a>) != <a href="../../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_2195_2202" title="Defined at ../../webdsl-types.stx line 49">UNTYPED</a>() | <span class="keyword">error</span> $[Wrong operand types for operator LargerThan: [<a href="#e1_2063_2065" id="e1_2261_2263" title="Defined at line 59">e1</a>] has type [<a href="#T1_2081_2083" id="T1_2275_2277" title="Defined at line 59">T1</a>], [<a href="#e2_2067_2069" id="e2_2281_2283" title="Defined at line 59">e2</a>] has type [<a href="#T2_2084_2086" id="T2_2295_2297" title="Defined at line 59">T2</a>]], <span class="layout">// correct error message for tests</span>
    @<a href="#exp_2048_2051" id="exp_2341_2344" title="Defined at line 59">exp</a>.<span class="keyword">type</span> := <a href="#t_2074_2075" id="t_2353_2354" title="Defined at line 59">t</a>.

  <span class="layout">// (e1 &gt;= e2)</span>
  <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_2375_2384" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_2450_2451" id="s_2385_2386" title="Referenced at line 68, 69, 70">s</a>, <a href="#exp_2695_2698" id="exp_2388_2391" title="Referenced at line 72">exp</a>@<a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#LargerThanOrEqual_4902_4919" id="LargerThanOrEqual_2392_2409" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 149">LargerThanOrEqual</a>(<a href="#e1_2471_2473" id="e1_2410_2412" title="Referenced at line 69, 71">e1</a>, <a href="#e2_2499_2501" id="e2_2414_2416" title="Referenced at line 70, 71">e2</a>)) = <a href="#t_2440_2441" id="t_2421_2422" title="Referenced at line 68, 72">t</a> :- { <a href="#T1_2478_2480" id="T1_2428_2430" title="Referenced at line 69, 71, 71">T1</a> <a href="#T2_2506_2508" id="T2_2431_2433" title="Referenced at line 70, 71, 71">T2</a> }
    <a href="#t_2421_2422" id="t_2440_2441" title="Defined at line 67">t</a> == <a href="../../types/built-ins.stx#bool_2637_2641" id="bool_2445_2449" title="Defined at ../../types/built-ins.stx line 72">bool</a>(<a href="#s_2385_2386" id="s_2450_2451" title="Defined at line 67">s</a>),
    <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_2458_2467" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_2385_2386" id="s_2468_2469" title="Defined at line 67">s</a>, <a href="#e1_2410_2412" id="e1_2471_2473" title="Defined at line 67">e1</a>) == <a href="#T1_2428_2430" id="T1_2478_2480" title="Defined at line 67">T1</a>,
    <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_2486_2495" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_2385_2386" id="s_2496_2497" title="Defined at line 67">s</a>, <a href="#e2_2414_2416" id="e2_2499_2501" title="Defined at line 67">e2</a>) == <a href="#T2_2431_2433" id="T2_2506_2508" title="Defined at line 67">T2</a>,
    <a href="#lubForAddNumeric_5766_5782" id="lubForAddNumeric_2514_2530" title="Defined at line 148">lubForAddNumeric</a>(<a href="#T1_2428_2430" id="T1_2531_2533" title="Defined at line 67">T1</a>, <a href="#T2_2431_2433" id="T2_2535_2537" title="Defined at line 67">T2</a>) != <a href="../../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_2542_2549" title="Defined at ../../webdsl-types.stx line 49">UNTYPED</a>() | <span class="keyword">error</span> $[Wrong operand types for operator LargerThanOrEqual: [<a href="#e1_2410_2412" id="e1_2615_2617" title="Defined at line 67">e1</a>] has type [<a href="#T1_2428_2430" id="T1_2629_2631" title="Defined at line 67">T1</a>], [<a href="#e2_2414_2416" id="e2_2635_2637" title="Defined at line 67">e2</a>] has type [<a href="#T2_2431_2433" id="T2_2649_2651" title="Defined at line 67">T2</a>]], <span class="layout">// correct error message for tests</span>
    @<a href="#exp_2388_2391" id="exp_2695_2698" title="Defined at line 67">exp</a>.<span class="keyword">type</span> := <a href="#t_2421_2422" id="t_2707_2708" title="Defined at line 67">t</a>.

  <span class="layout">// (e1 &lt; e2)</span>
  <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_2728_2737" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_2797_2798" id="s_2738_2739" title="Referenced at line 76, 77, 78">s</a>, <a href="#exp_3036_3039" id="exp_2741_2744" title="Referenced at line 80">exp</a>@<a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#SmallerThan_4943_4954" id="SmallerThan_2745_2756" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 150">SmallerThan</a>(<a href="#e1_2818_2820" id="e1_2757_2759" title="Referenced at line 77, 79">e1</a>, <a href="#e2_2846_2848" id="e2_2761_2763" title="Referenced at line 78, 79">e2</a>)) = <a href="#t_2787_2788" id="t_2768_2769" title="Referenced at line 76, 80">t</a> :- { <a href="#T1_2825_2827" id="T1_2775_2777" title="Referenced at line 77, 79, 79">T1</a> <a href="#T2_2853_2855" id="T2_2778_2780" title="Referenced at line 78, 79, 79">T2</a> }
    <a href="#t_2768_2769" id="t_2787_2788" title="Defined at line 75">t</a> == <a href="../../types/built-ins.stx#bool_2637_2641" id="bool_2792_2796" title="Defined at ../../types/built-ins.stx line 72">bool</a>(<a href="#s_2738_2739" id="s_2797_2798" title="Defined at line 75">s</a>),
    <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_2805_2814" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_2738_2739" id="s_2815_2816" title="Defined at line 75">s</a>, <a href="#e1_2757_2759" id="e1_2818_2820" title="Defined at line 75">e1</a>) == <a href="#T1_2775_2777" id="T1_2825_2827" title="Defined at line 75">T1</a>,
    <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_2833_2842" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_2738_2739" id="s_2843_2844" title="Defined at line 75">s</a>, <a href="#e2_2761_2763" id="e2_2846_2848" title="Defined at line 75">e2</a>) == <a href="#T2_2778_2780" id="T2_2853_2855" title="Defined at line 75">T2</a>,
    <a href="#lubForAddNumeric_5766_5782" id="lubForAddNumeric_2861_2877" title="Defined at line 148">lubForAddNumeric</a>(<a href="#T1_2775_2777" id="T1_2878_2880" title="Defined at line 75">T1</a>, <a href="#T2_2778_2780" id="T2_2882_2884" title="Defined at line 75">T2</a>) != <a href="../../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_2889_2896" title="Defined at ../../webdsl-types.stx line 49">UNTYPED</a>() | <span class="keyword">error</span> $[Wrong operand types for operator SmallerThan: [<a href="#e1_2757_2759" id="e1_2956_2958" title="Defined at line 75">e1</a>] has type [<a href="#T1_2775_2777" id="T1_2970_2972" title="Defined at line 75">T1</a>], [<a href="#e2_2761_2763" id="e2_2976_2978" title="Defined at line 75">e2</a>] has type [<a href="#T2_2778_2780" id="T2_2990_2992" title="Defined at line 75">T2</a>]], <span class="layout">// correct error message for tests</span>
    @<a href="#exp_2741_2744" id="exp_3036_3039" title="Defined at line 75">exp</a>.<span class="keyword">type</span> := <a href="#t_2768_2769" id="t_3048_3049" title="Defined at line 75">t</a>.

  <span class="layout">// (e1 &lt;= e2)</span>
  <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_3070_3079" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_3146_3147" id="s_3080_3081" title="Referenced at line 84, 85, 86">s</a>, <a href="#exp_3392_3395" id="exp_3083_3086" title="Referenced at line 88">exp</a>@<a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#SmallerThanOrEqual_4978_4996" id="SmallerThanOrEqual_3087_3105" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 151">SmallerThanOrEqual</a>(<a href="#e1_3167_3169" id="e1_3106_3108" title="Referenced at line 85, 87">e1</a>, <a href="#e2_3195_3197" id="e2_3110_3112" title="Referenced at line 86, 87">e2</a>)) = <a href="#t_3136_3137" id="t_3117_3118" title="Referenced at line 84, 88">t</a> :- { <a href="#T1_3174_3176" id="T1_3124_3126" title="Referenced at line 85, 87, 87">T1</a> <a href="#T2_3202_3204" id="T2_3127_3129" title="Referenced at line 86, 87, 87">T2</a> }
    <a href="#t_3117_3118" id="t_3136_3137" title="Defined at line 83">t</a> == <a href="../../types/built-ins.stx#bool_2637_2641" id="bool_3141_3145" title="Defined at ../../types/built-ins.stx line 72">bool</a>(<a href="#s_3080_3081" id="s_3146_3147" title="Defined at line 83">s</a>),
    <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_3154_3163" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_3080_3081" id="s_3164_3165" title="Defined at line 83">s</a>, <a href="#e1_3106_3108" id="e1_3167_3169" title="Defined at line 83">e1</a>) == <a href="#T1_3124_3126" id="T1_3174_3176" title="Defined at line 83">T1</a>,
    <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_3182_3191" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_3080_3081" id="s_3192_3193" title="Defined at line 83">s</a>, <a href="#e2_3110_3112" id="e2_3195_3197" title="Defined at line 83">e2</a>) == <a href="#T2_3127_3129" id="T2_3202_3204" title="Defined at line 83">T2</a>,
    <a href="#lubForAddNumeric_5766_5782" id="lubForAddNumeric_3210_3226" title="Defined at line 148">lubForAddNumeric</a>(<a href="#T1_3124_3126" id="T1_3227_3229" title="Defined at line 83">T1</a>, <a href="#T2_3127_3129" id="T2_3231_3233" title="Defined at line 83">T2</a>) != <a href="../../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_3238_3245" title="Defined at ../../webdsl-types.stx line 49">UNTYPED</a>() | <span class="keyword">error</span> $[Wrong operand types for operator SmallerThanOrEqual: [<a href="#e1_3106_3108" id="e1_3312_3314" title="Defined at line 83">e1</a>] has type [<a href="#T1_3124_3126" id="T1_3326_3328" title="Defined at line 83">T1</a>], [<a href="#e2_3110_3112" id="e2_3332_3334" title="Defined at line 83">e2</a>] has type [<a href="#T2_3127_3129" id="T2_3346_3348" title="Defined at line 83">T2</a>]], <span class="layout">// correct error message for tests</span>
    @<a href="#exp_3083_3086" id="exp_3392_3395" title="Defined at line 83">exp</a>.<span class="keyword">type</span> := <a href="#t_3117_3118" id="t_3404_3405" title="Defined at line 83">t</a>.

  <span class="layout">// (e1 &amp;&amp; e2)</span>
  <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_3426_3435" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_3487_3488" id="s_3436_3437" title="Referenced at line 92, 93, 94">s</a>, <a href="#exp_3834_3837" id="exp_3439_3442" title="Referenced at line 95">exp</a>@<a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#And_5066_5069" id="And_3443_3446" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 155">And</a>(<a href="#e1_3508_3510" id="e1_3447_3449" title="Referenced at line 93, 93">e1</a>, <a href="#e2_3677_3679" id="e2_3451_3453" title="Referenced at line 94, 94">e2</a>)) = <a href="#b_3477_3478" id="b_3458_3459" title="Referenced at line 92, 93, 94, 95">b</a> :- { <a href="#T1_3515_3517" id="T1_3465_3467" title="Referenced at line 93, 93, 93">T1</a> <a href="#T2_3684_3686" id="T2_3468_3470" title="Referenced at line 94, 94, 94">T2</a> }
    <a href="#b_3458_3459" id="b_3477_3478" title="Defined at line 91">b</a> == <a href="../../types/built-ins.stx#bool_2637_2641" id="bool_3482_3486" title="Defined at ../../types/built-ins.stx line 72">bool</a>(<a href="#s_3436_3437" id="s_3487_3488" title="Defined at line 91">s</a>),
    <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_3495_3504" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_3436_3437" id="s_3505_3506" title="Defined at line 91">s</a>, <a href="#e1_3447_3449" id="e1_3508_3510" title="Defined at line 91">e1</a>) == <a href="#T1_3465_3467" id="T1_3515_3517" title="Defined at line 91">T1</a>, <a href="../../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_3519_3533" title="Defined at ../../webdsl.stx line 408">typeCompatible</a>(<a href="#T1_3465_3467" id="T1_3534_3536" title="Defined at line 91">T1</a>, <a href="#b_3458_3459" id="b_3538_3539" title="Defined at line 91">b</a>) | <span class="keyword">error</span> $[Wrong operand types for operator And: [<a href="#e1_3447_3449" id="e1_3590_3592" title="Defined at line 91">e1</a>] has type [<a href="#T1_3465_3467" id="T1_3604_3606" title="Defined at line 91">T1</a>], expected Bool], <span class="layout">// correct error message for tests</span>
    <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_3664_3673" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_3436_3437" id="s_3674_3675" title="Defined at line 91">s</a>, <a href="#e2_3451_3453" id="e2_3677_3679" title="Defined at line 91">e2</a>) == <a href="#T2_3468_3470" id="T2_3684_3686" title="Defined at line 91">T2</a>, <a href="../../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_3688_3702" title="Defined at ../../webdsl.stx line 408">typeCompatible</a>(<a href="#T2_3468_3470" id="T2_3703_3705" title="Defined at line 91">T2</a>, <a href="#b_3458_3459" id="b_3707_3708" title="Defined at line 91">b</a>) | <span class="keyword">error</span> $[Wrong operand types for operator And: [<a href="#e2_3451_3453" id="e2_3759_3761" title="Defined at line 91">e2</a>] has type [<a href="#T2_3468_3470" id="T2_3773_3775" title="Defined at line 91">T2</a>], expected Bool], <span class="layout">// correct error message for tests</span>
    @<a href="#exp_3439_3442" id="exp_3834_3837" title="Defined at line 91">exp</a>.<span class="keyword">type</span> := <a href="#b_3458_3459" id="b_3846_3847" title="Defined at line 91">b</a>.

  <span class="layout">// (e1 || e2)</span>
  <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_3868_3877" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_3928_3929" id="s_3878_3879" title="Referenced at line 99, 100, 101">s</a>, <a href="#exp_4273_4276" id="exp_3881_3884" title="Referenced at line 102">exp</a>@<a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Or_5093_5095" id="Or_3885_3887" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 156">Or</a>(<a href="#e1_3949_3951" id="e1_3888_3890" title="Referenced at line 100, 100">e1</a>, <a href="#e2_4117_4119" id="e2_3892_3894" title="Referenced at line 101, 101">e2</a>)) = <a href="#b_3918_3919" id="b_3899_3900" title="Referenced at line 99, 100, 101, 102">b</a> :- { <a href="#T1_3956_3958" id="T1_3906_3908" title="Referenced at line 100, 100, 100">T1</a> <a href="#T2_4124_4126" id="T2_3909_3911" title="Referenced at line 101, 101, 101">T2</a> }
    <a href="#b_3899_3900" id="b_3918_3919" title="Defined at line 98">b</a> == <a href="../../types/built-ins.stx#bool_2637_2641" id="bool_3923_3927" title="Defined at ../../types/built-ins.stx line 72">bool</a>(<a href="#s_3878_3879" id="s_3928_3929" title="Defined at line 98">s</a>),
    <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_3936_3945" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_3878_3879" id="s_3946_3947" title="Defined at line 98">s</a>, <a href="#e1_3888_3890" id="e1_3949_3951" title="Defined at line 98">e1</a>) == <a href="#T1_3906_3908" id="T1_3956_3958" title="Defined at line 98">T1</a>, <a href="../../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_3960_3974" title="Defined at ../../webdsl.stx line 408">typeCompatible</a>(<a href="#T1_3906_3908" id="T1_3975_3977" title="Defined at line 98">T1</a>, <a href="#b_3899_3900" id="b_3979_3980" title="Defined at line 98">b</a>) | <span class="keyword">error</span> $[Wrong operand types for operator Or: [<a href="#e1_3888_3890" id="e1_4030_4032" title="Defined at line 98">e1</a>] has type [<a href="#T1_3906_3908" id="T1_4044_4046" title="Defined at line 98">T1</a>], expected Bool], <span class="layout">// correct error message for tests</span>
    <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_4104_4113" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_3878_3879" id="s_4114_4115" title="Defined at line 98">s</a>, <a href="#e2_3892_3894" id="e2_4117_4119" title="Defined at line 98">e2</a>) == <a href="#T2_3909_3911" id="T2_4124_4126" title="Defined at line 98">T2</a>, <a href="../../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_4128_4142" title="Defined at ../../webdsl.stx line 408">typeCompatible</a>(<a href="#T2_3909_3911" id="T2_4143_4145" title="Defined at line 98">T2</a>, <a href="#b_3899_3900" id="b_4147_4148" title="Defined at line 98">b</a>) | <span class="keyword">error</span> $[Wrong operand types for operator Or: [<a href="#e2_3892_3894" id="e2_4198_4200" title="Defined at line 98">e2</a>] has type [<a href="#T2_3909_3911" id="T2_4212_4214" title="Defined at line 98">T2</a>], expected Bool], <span class="layout">// correct error message for tests</span>
    @<a href="#exp_3881_3884" id="exp_4273_4276" title="Defined at line 98">exp</a>.<span class="keyword">type</span> := <a href="#b_3899_3900" id="b_4285_4286" title="Defined at line 98">b</a>.

  <span class="layout">// (e1 == e2)</span>
  <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_4307_4316" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_4367_4368" id="s_4317_4318" title="Referenced at line 106, 107, 108">s</a>, <a href="#exp_4630_4633" id="exp_4320_4323" title="Referenced at line 113">exp</a>@<a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Eq_4813_4815" id="Eq_4324_4326" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 146">Eq</a>(<a href="#e1_4388_4390" id="e1_4327_4329" title="Referenced at line 107, 112">e1</a>, <a href="#e2_4416_4418" id="e2_4331_4333" title="Referenced at line 108, 112">e2</a>)) = <a href="#t_4357_4358" id="t_4338_4339" title="Referenced at line 106, 113">t</a> :- { <a href="#T1_4395_4397" id="T1_4345_4347" title="Referenced at line 107, 110, 111, 112">T1</a> <a href="#T2_4423_4425" id="T2_4348_4350" title="Referenced at line 108, 110, 111, 112">T2</a> }
    <a href="#t_4338_4339" id="t_4357_4358" title="Defined at line 105">t</a> == <a href="../../types/built-ins.stx#bool_2637_2641" id="bool_4362_4366" title="Defined at ../../types/built-ins.stx line 72">bool</a>(<a href="#s_4317_4318" id="s_4367_4368" title="Defined at line 105">s</a>),
    <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_4375_4384" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_4317_4318" id="s_4385_4386" title="Defined at line 105">s</a>, <a href="#e1_4327_4329" id="e1_4388_4390" title="Defined at line 105">e1</a>) == <a href="#T1_4345_4347" id="T1_4395_4397" title="Defined at line 105">T1</a>,
    <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_4403_4412" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_4317_4318" id="s_4413_4414" title="Defined at line 105">s</a>, <a href="#e2_4331_4333" id="e2_4416_4418" title="Defined at line 105">e2</a>) == <a href="#T2_4348_4350" id="T2_4423_4425" title="Defined at line 105">T2</a>,
    <a href="../../webdsl.stx#or_17705_17707" id="or_4431_4433" title="Defined at ../../webdsl.stx line 417">or</a>(
      <a href="../../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_4441_4456" title="Defined at ../../webdsl.stx line 411">typeCompatibleB</a>(<a href="#T1_4345_4347" id="T1_4457_4459" title="Defined at line 105">T1</a>, <a href="#T2_4348_4350" id="T2_4461_4463" title="Defined at line 105">T2</a>),
      <a href="../../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_4472_4487" title="Defined at ../../webdsl.stx line 411">typeCompatibleB</a>(<a href="#T2_4348_4350" id="T2_4488_4490" title="Defined at line 105">T2</a>, <a href="#T1_4345_4347" id="T1_4492_4494" title="Defined at line 105">T1</a>)
    ) | <span class="keyword">error</span> $[Wrong operand types for operator Eq: [<a href="#e1_4327_4329" id="e1_4550_4552" title="Defined at line 105">e1</a>] has type [<a href="#T1_4345_4347" id="T1_4564_4566" title="Defined at line 105">T1</a>], [<a href="#e2_4331_4333" id="e2_4570_4572" title="Defined at line 105">e2</a>] has type [<a href="#T2_4348_4350" id="T2_4584_4586" title="Defined at line 105">T2</a>]], <span class="layout">// correct error message for tests</span>
    @<a href="#exp_4320_4323" id="exp_4630_4633" title="Defined at line 105">exp</a>.<span class="keyword">type</span> := <a href="#t_4338_4339" id="t_4642_4643" title="Defined at line 105">t</a>.

  <span class="layout">// (e1 != e2)</span>
  <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_4664_4673" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_4727_4728" id="s_4674_4675" title="Referenced at line 117, 118, 119">s</a>, <a href="#exp_4990_4993" id="exp_4677_4680" title="Referenced at line 124">exp</a>@<a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#NotEq_4839_4844" id="NotEq_4681_4686" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 147">NotEq</a>(<a href="#e1_4748_4750" id="e1_4687_4689" title="Referenced at line 118, 123">e1</a>, <a href="#e2_4776_4778" id="e2_4691_4693" title="Referenced at line 119, 123">e2</a>)) = <a href="#t_4717_4718" id="t_4698_4699" title="Referenced at line 117, 124">t</a> :- { <a href="#T1_4755_4757" id="T1_4705_4707" title="Referenced at line 118, 121, 122, 123">T1</a> <a href="#T2_4783_4785" id="T2_4708_4710" title="Referenced at line 119, 121, 122, 123">T2</a> }
    <a href="#t_4698_4699" id="t_4717_4718" title="Defined at line 116">t</a> == <a href="../../types/built-ins.stx#bool_2637_2641" id="bool_4722_4726" title="Defined at ../../types/built-ins.stx line 72">bool</a>(<a href="#s_4674_4675" id="s_4727_4728" title="Defined at line 116">s</a>),
    <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_4735_4744" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_4674_4675" id="s_4745_4746" title="Defined at line 116">s</a>, <a href="#e1_4687_4689" id="e1_4748_4750" title="Defined at line 116">e1</a>) == <a href="#T1_4705_4707" id="T1_4755_4757" title="Defined at line 116">T1</a>,
    <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_4763_4772" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_4674_4675" id="s_4773_4774" title="Defined at line 116">s</a>, <a href="#e2_4691_4693" id="e2_4776_4778" title="Defined at line 116">e2</a>) == <a href="#T2_4708_4710" id="T2_4783_4785" title="Defined at line 116">T2</a>,
    <a href="../../webdsl.stx#or_17705_17707" id="or_4791_4793" title="Defined at ../../webdsl.stx line 417">or</a>(
      <a href="../../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_4801_4816" title="Defined at ../../webdsl.stx line 411">typeCompatibleB</a>(<a href="#T1_4705_4707" id="T1_4817_4819" title="Defined at line 116">T1</a>, <a href="#T2_4708_4710" id="T2_4821_4823" title="Defined at line 116">T2</a>),
      <a href="../../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_4832_4847" title="Defined at ../../webdsl.stx line 411">typeCompatibleB</a>(<a href="#T2_4708_4710" id="T2_4848_4850" title="Defined at line 116">T2</a>, <a href="#T1_4705_4707" id="T1_4852_4854" title="Defined at line 116">T1</a>)
    ) | <span class="keyword">error</span> $[Wrong operand types for operator !=: [<a href="#e1_4687_4689" id="e1_4910_4912" title="Defined at line 116">e1</a>] has type [<a href="#T1_4705_4707" id="T1_4924_4926" title="Defined at line 116">T1</a>], [<a href="#e2_4691_4693" id="e2_4930_4932" title="Defined at line 116">e2</a>] has type [<a href="#T2_4708_4710" id="T2_4944_4946" title="Defined at line 116">T2</a>]], <span class="layout">// correct error message for tests</span>
    @<a href="#exp_4677_4680" id="exp_4990_4993" title="Defined at line 116">exp</a>.<span class="keyword">type</span> :=<a href="#t_4698_4699" id="t_5001_5002" title="Defined at line 116">t</a>.

  <span class="layout">// e1 in e2</span>
  <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_5021_5030" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(s, <span id="exp_5034_5037" title="Not referenced locally, nor via imports">exp</span>@<a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#InColl_4569_4575" id="InColl_5038_5044" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 140">InColl</a>(<a href="#e1_5094_5096" id="e1_5045_5047" title="Referenced at line 128, 130">e1</a>, <a href="#e2_5139_5141" id="e2_5049_5051" title="Referenced at line 129, 130">e2</a>)) = <a href="../../types/built-ins.stx#bool_2637_2641" id="bool_5056_5060" title="Defined at ../../types/built-ins.stx line 72">bool</a>(<a href="#s_5091_5092" id="s_5061_5062" title="Referenced at line 128, 129">s</a>) :- { <a href="#T1_5101_5103" id="T1_5069_5071" title="Referenced at line 128, 130, 130">T1</a> <a href="#T2_5147_5149" id="T2_5072_5074" title="Referenced at line 129, 130, 130">T2</a> }
    <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_5081_5090" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_5061_5062" id="s_5091_5092" title="Defined at line 127">s</a>, <a href="#e1_5045_5047" id="e1_5094_5096" title="Defined at line 127">e1</a>) == <a href="#T1_5069_5071" id="T1_5101_5103" title="Defined at line 127">T1</a>,
    <a href="../../webdsl-types.stx#stripGenericType_9921_9937" id="stripGenericType_5109_5125" title="Defined at ../../webdsl-types.stx line 267">stripGenericType</a>(<a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_5126_5135" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_5061_5062" id="s_5136_5137" title="Defined at line 127">s</a>, <a href="#e2_5049_5051" id="e2_5139_5141" title="Defined at line 127">e2</a>)) == <a href="#T2_5072_5074" id="T2_5147_5149" title="Defined at line 127">T2</a>,
    <a href="../../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_5155_5169" title="Defined at ../../webdsl.stx line 408">typeCompatible</a>(<a href="#T1_5069_5071" id="T1_5170_5172" title="Defined at line 127">T1</a>, <a href="#T2_5072_5074" id="T2_5174_5176" title="Defined at line 127">T2</a>) | <span class="keyword">error</span> $[Wrong operand types for operator in: [<a href="#e1_5045_5047" id="e1_5226_5228" title="Defined at line 127">e1</a>] has type [<a href="#T1_5069_5071" id="T1_5240_5242" title="Defined at line 127">T1</a>], [<a href="#e2_5049_5051" id="e2_5246_5248" title="Defined at line 127">e2</a>] has type [<a href="#T2_5072_5074" id="T2_5260_5262" title="Defined at line 127">T2</a>]]. <span class="layout">// correct error message for tests</span>

<span class="keyword">rules</span> <span class="layout">// unary operators</span>

  <span class="layout">// (!e)</span>
  <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_5340_5349" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_5392_5393" id="s_5350_5351" title="Referenced at line 136, 137">s</a>, <a href="#exp_5553_5556" id="exp_5353_5356" title="Referenced at line 139">exp</a>@<a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Not_5119_5122" id="Not_5357_5360" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 157">Not</a>(<a href="#e_5413_5414" id="e_5361_5362" title="Referenced at line 137, 138">e</a>)) = <a href="#t_5382_5383" id="t_5367_5368" title="Referenced at line 136, 138, 139">t</a> :- { <a href="#T_5419_5420" id="T_5374_5375" title="Referenced at line 137, 138, 138">T</a> }
    <a href="#t_5367_5368" id="t_5382_5383" title="Defined at line 135">t</a> == <a href="../../types/built-ins.stx#bool_2637_2641" id="bool_5387_5391" title="Defined at ../../types/built-ins.stx line 72">bool</a>(<a href="#s_5350_5351" id="s_5392_5393" title="Defined at line 135">s</a>),
    <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_5400_5409" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_5350_5351" id="s_5410_5411" title="Defined at line 135">s</a>, <a href="#e_5361_5362" id="e_5413_5414" title="Defined at line 135">e</a>) == <a href="#T_5374_5375" id="T_5419_5420" title="Defined at line 135">T</a>,
    <a href="#T_5374_5375" id="T_5426_5427" title="Defined at line 135">T</a> == <a href="#t_5367_5368" id="t_5431_5432" title="Defined at line 135">t</a> | <span class="keyword">error</span> $[Wrong operand types for operator !: [<a href="#e_5361_5362" id="e_5480_5481" title="Defined at line 135">e</a>] has type [<a href="#T_5374_5375" id="T_5493_5494" title="Defined at line 135">T</a>], expected Bool], <span class="layout">// correct error message for tests</span>
    @<a href="#exp_5353_5356" id="exp_5553_5556" title="Defined at line 135">exp</a>.<span class="keyword">type</span> := <a href="#t_5367_5368" id="t_5565_5566" title="Defined at line 135">t</a>.

<span class="keyword">rules</span> <span class="layout">// utils</span>

  <a href="#lubForAdd_519_528" id="lubForAdd_5587_5596" title="Referenced at line 23, 144, 145, 146">lubForAdd</a> : <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_5599_5603" title="Defined at ../../webdsl.stx line 29">TYPE</a> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_5606_5610" title="Defined at ../../webdsl.stx line 29">TYPE</a> -&gt; <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_5614_5618" title="Defined at ../../webdsl.stx line 29">TYPE</a>
  <a href="#lubForAdd_5587_5596" id="lubForAdd_5621_5630" title="Defined at line 143">lubForAdd</a>(T1, <span id="T2_5635_5637" title="Not referenced locally, nor via imports">T2</span>) = <a href="#lubForAddNumeric_5766_5782" id="lubForAddNumeric_5641_5657" title="Defined at line 148">lubForAddNumeric</a>(<span id="T1_5658_5660" title="Not referenced locally, nor via imports">T1</span>, T2).
  <a href="#lubForAdd_5587_5596" id="lubForAdd_5669_5678" title="Defined at line 143">lubForAdd</a>(t@<a href="../../webdsl-types.stx#BUILTINTYPE_1001_1012" id="BUILTINTYPE_5681_5692" title="Defined at ../../webdsl-types.stx line 40">BUILTINTYPE</a>("String", _), _) = <span id="t_5712_5713" title="Not referenced locally, nor via imports">t</span>.
  <a href="#lubForAdd_5587_5596" id="lubForAdd_5717_5726" title="Defined at line 143">lubForAdd</a>(_, t@<a href="../../webdsl-types.stx#BUILTINTYPE_1001_1012" id="BUILTINTYPE_5732_5743" title="Defined at ../../webdsl-types.stx line 40">BUILTINTYPE</a>("String", _)) = <span id="t_5760_5761" title="Not referenced locally, nor via imports">t</span>.

  <a href="#lubForAddNumeric_822_838" id="lubForAddNumeric_5766_5782" title="Referenced at line 30, 38, 46, 54, 63, 71, 79, 87, 144, 149, 150, 151, 152, 153, 156, 157, 160, 161">lubForAddNumeric</a> : <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_5785_5789" title="Defined at ../../webdsl.stx line 29">TYPE</a> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_5792_5796" title="Defined at ../../webdsl.stx line 29">TYPE</a> -&gt; <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_5800_5804" title="Defined at ../../webdsl.stx line 29">TYPE</a>
  <a href="#lubForAddNumeric_5766_5782" id="lubForAddNumeric_5807_5823" title="Defined at line 148">lubForAddNumeric</a>(_, _) = <a href="../../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_5832_5839" title="Defined at ../../webdsl-types.stx line 49">UNTYPED</a>().
  <a href="#lubForAddNumeric_5766_5782" id="lubForAddNumeric_5845_5861" title="Defined at line 148">lubForAddNumeric</a>(t@<a href="../../webdsl-types.stx#BUILTINTYPE_1001_1012" id="BUILTINTYPE_5864_5875" title="Defined at ../../webdsl-types.stx line 40">BUILTINTYPE</a>("Int", _)    , <span id="t_5891_5892" title="Not referenced locally, nor via imports">t</span>) = t.
  <a href="#lubForAddNumeric_5766_5782" id="lubForAddNumeric_5901_5917" title="Defined at line 148">lubForAddNumeric</a>(t@<a href="../../webdsl-types.stx#BUILTINTYPE_1001_1012" id="BUILTINTYPE_5920_5931" title="Defined at ../../webdsl-types.stx line 40">BUILTINTYPE</a>("Long", _)   , t) = <span id="t_5952_5953" title="Not referenced locally, nor via imports">t</span>.
  <a href="#lubForAddNumeric_5766_5782" id="lubForAddNumeric_5957_5973" title="Defined at line 148">lubForAddNumeric</a>(<span id="t_5974_5975" title="Not referenced locally, nor via imports">t</span>@<a href="../../webdsl-types.stx#BUILTINTYPE_1001_1012" id="BUILTINTYPE_5976_5987" title="Defined at ../../webdsl-types.stx line 40">BUILTINTYPE</a>("Float", _)  , t) = t.
  <a href="#lubForAddNumeric_5766_5782" id="lubForAddNumeric_6013_6029" title="Defined at line 148">lubForAddNumeric</a>(t@<a href="../../webdsl-types.stx#NATIVECLASS_529_540" id="NATIVECLASS_6032_6043" title="Defined at ../../webdsl-types.stx line 23">NATIVECLASS</a>("Double", _) , t) = <span id="t_6064_6065" title="Not referenced locally, nor via imports">t</span>.

  <span class="layout">// implicit widening from int to long</span>
  <a href="#lubForAddNumeric_5766_5782" id="lubForAddNumeric_6110_6126" title="Defined at line 148">lubForAddNumeric</a>(<a href="../../webdsl-types.stx#BUILTINTYPE_1001_1012" id="BUILTINTYPE_6127_6138" title="Defined at ../../webdsl-types.stx line 40">BUILTINTYPE</a>("Int", _)      , <span id="t_6156_6157" title="Not referenced locally, nor via imports">t</span>@<a href="../../webdsl-types.stx#BUILTINTYPE_1001_1012" id="BUILTINTYPE_6158_6169" title="Defined at ../../webdsl-types.stx line 40">BUILTINTYPE</a>("Long", _))   = t.
  <a href="#lubForAddNumeric_5766_5782" id="lubForAddNumeric_6191_6207" title="Defined at line 148">lubForAddNumeric</a>(t@<a href="../../webdsl-types.stx#BUILTINTYPE_1001_1012" id="BUILTINTYPE_6210_6221" title="Defined at ../../webdsl-types.stx line 40">BUILTINTYPE</a>("Long", _)   , <a href="../../webdsl-types.stx#BUILTINTYPE_1001_1012" id="BUILTINTYPE_6237_6248" title="Defined at ../../webdsl-types.stx line 40">BUILTINTYPE</a>("Int", _))      = <span id="t_6267_6268" title="Not referenced locally, nor via imports">t</span>.

  <span class="layout">// implicit widening from float to double</span>
  <a href="#lubForAddNumeric_5766_5782" id="lubForAddNumeric_6317_6333" title="Defined at line 148">lubForAddNumeric</a>(<span id="t_6334_6335" title="Not referenced locally, nor via imports">t</span>@<a href="../../webdsl-types.stx#NATIVECLASS_529_540" id="NATIVECLASS_6336_6347" title="Defined at ../../webdsl-types.stx line 23">NATIVECLASS</a>("Double", _) , <a href="../../webdsl-types.stx#BUILTINTYPE_1001_1012" id="BUILTINTYPE_6363_6374" title="Defined at ../../webdsl-types.stx line 40">BUILTINTYPE</a>("Float", _))    = t.
  <a href="#lubForAddNumeric_5766_5782" id="lubForAddNumeric_6398_6414" title="Defined at line 148">lubForAddNumeric</a>(<a href="../../webdsl-types.stx#BUILTINTYPE_1001_1012" id="BUILTINTYPE_6415_6426" title="Defined at ../../webdsl-types.stx line 40">BUILTINTYPE</a>("Float", _)    , t@<a href="../../webdsl-types.stx#NATIVECLASS_529_540" id="NATIVECLASS_6446_6457" title="Defined at ../../webdsl-types.stx line 23">NATIVECLASS</a>("Double", _)) = <span id="t_6474_6475" title="Not referenced locally, nor via imports">t</span>.

</code></pre></td></tr></tbody></table></div>