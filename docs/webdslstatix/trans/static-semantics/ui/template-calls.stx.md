---
title: template-calls.stx
hide:
  - toc
---

# `template-calls.stx`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/ui/template-calls.stx]

[pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/ui/template-calls.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/trans/static-semantics/ui/template-calls.stx "The source file on GitHub"

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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../actions.stx#static-semantics/ui/template-calls_161_195" id="static-semantics/ui/template-calls_7_41" title="Referenced at ../actions.stx line 10; ../ajax.stx line 6; ../built-ins.stx line 6; ../../webdsl-ac.stx line 10; ../../webdsl-ui.stx line 14">static-semantics/ui/template-calls</a>

<span class="keyword">imports</span>
  <a href="../../actions/functions.stx#static-semantics/actions/functions_7_41" id="static-semantics/actions/functions_53_87" title="Defined at ../../actions/functions.stx line 1">static-semantics/actions/functions</a>

  <a href="../../entities/annotations.stx#static-semantics/entities/annotations_7_44" id="static-semantics/entities/annotations_91_128" title="Defined at ../../entities/annotations.stx line 1">static-semantics/entities/annotations</a>

  <a href="../../types/built-ins.stx#static-semantics/types/built-ins_7_39" id="static-semantics/types/built-ins_132_164" title="Defined at ../../types/built-ins.stx line 1">static-semantics/types/built-ins</a>

  <a href="../actions.stx#static-semantics/ui/actions_7_34" id="static-semantics/ui/actions_168_195" title="Defined at ../actions.stx line 1">static-semantics/ui/actions</a>
  <a href="../attributes.stx#static-semantics/ui/attributes_7_37" id="static-semantics/ui/attributes_198_228" title="Defined at ../attributes.stx line 1">static-semantics/ui/attributes</a>

  <a href="../../webdsl-actions.stx#static-semantics/webdsl-actions_7_38" id="static-semantics/webdsl-actions_232_263" title="Defined at ../../webdsl-actions.stx line 1">static-semantics/webdsl-actions</a>
  <a href="../../webdsl-types.stx#static-semantics/webdsl-types_7_36" id="static-semantics/webdsl-types_266_295" title="Defined at ../../webdsl-types.stx line 1">static-semantics/webdsl-types</a>
  <a href="../../webdsl-ui.stx#static-semantics/webdsl-ui_7_33" id="static-semantics/webdsl-ui_298_324" title="Defined at ../../webdsl-ui.stx line 1">static-semantics/webdsl-ui</a>
  <a href="../../webdsl.stx#static-semantics/webdsl_7_30" id="static-semantics/webdsl_327_350" title="Defined at ../../webdsl.stx line 1">static-semantics/webdsl</a>

<span class="keyword">rules</span> <span class="layout">// template calls</span>

  <a href="../../webdsl-ui.stx#templateElementOk_7058_7075" id="templateElementOk_379_396" title="Defined at ../../webdsl-ui.stx line 138">templateElementOk</a>(<a href="#s_466_467" id="s_397_398" title="Referenced at line 21">s</a>, _, <a href="#s_pha_469_474" id="s_pha_403_408" title="Referenced at line 21">s_pha</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateCall2TemplateElement_4799_4827" id="TemplateCall2TemplateElement_410_438" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 141">TemplateCall2TemplateElement</a>(<a href="#tc_476_478" id="tc_439_441" title="Referenced at line 21">tc</a>)) :-
    <a href="#templateCallOk_622_636" id="templateCallOk_451_465" title="Defined at line 26">templateCallOk</a>(<a href="#s_397_398" id="s_466_467" title="Defined at line 20">s</a>, <a href="#s_pha_403_408" id="s_pha_469_474" title="Defined at line 20">s_pha</a>, <a href="#tc_439_441" id="tc_476_478" title="Defined at line 20">tc</a>).

  <a href="#ajaxTemplateCallOk_536_554" id="ajaxTemplateCallOk_484_502" title="Referenced at line 24; ../ajax.stx line 53, 58">ajaxTemplateCallOk</a> : <span class="keyword">scope</span> * <span class="keyword">scope</span> * <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateCall_303_315" id="TemplateCall_521_533" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 18">TemplateCall</a>
  <a href="#ajaxTemplateCallOk_484_502" id="ajaxTemplateCallOk_536_554" title="Defined at line 23">ajaxTemplateCallOk</a>(<a href="#s_596_597" id="s_555_556" title="Referenced at line 24">s</a>, <a href="#s_pha_599_604" id="s_pha_558_563" title="Referenced at line 24">s_pha</a>, <a href="#tc_606_608" id="tc_565_567" title="Referenced at line 24">tc</a>) :- <a href="#templateCallOk_internal_804_827" id="templateCallOk_internal_572_595" title="Defined at line 30">templateCallOk_internal</a>(<a href="#s_555_556" id="s_596_597" title="Defined at line 24">s</a>, <a href="#s_pha_558_563" id="s_pha_599_604" title="Defined at line 24">s_pha</a>, <a href="#tc_565_567" id="tc_606_608" title="Defined at line 24">tc</a>, <a href="../../webdsl.stx#TRUE_828_832" id="TRUE_610_614" title="Defined at ../../webdsl.stx line 34">TRUE</a>()).

  <a href="#templateCallOk_451_465" id="templateCallOk_622_636" title="Referenced at line 21, 27, 57, 62, 63, 66, 69; ../actions.stx line 114, 117; ../ajax.stx line 31, 35, 39, 43">templateCallOk</a> : <span class="keyword">scope</span> * <span class="keyword">scope</span> * <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateCall_303_315" id="TemplateCall_655_667" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 18">TemplateCall</a>
  <a href="#templateCallOk_622_636" id="templateCallOk_670_684" title="Defined at line 26">templateCallOk</a>(<a href="#s_726_727" id="s_685_686" title="Referenced at line 27">s</a>, <a href="#s_pha_729_734" id="s_pha_688_693" title="Referenced at line 27">s_pha</a>, <a href="#tc_736_738" id="tc_695_697" title="Referenced at line 27">tc</a>) :- <a href="#templateCallOk_internal_804_827" id="templateCallOk_internal_702_725" title="Defined at line 30">templateCallOk_internal</a>(<a href="#s_685_686" id="s_726_727" title="Defined at line 27">s</a>, <a href="#s_pha_688_693" id="s_pha_729_734" title="Defined at line 27">s_pha</a>, <a href="#tc_695_697" id="tc_736_738" title="Defined at line 27">tc</a>, <a href="../../webdsl.stx#FALSE_844_849" id="FALSE_740_745" title="Defined at ../../webdsl.stx line 35">FALSE</a>()).

  <span class="layout">// BOOL denotes if template must be ajax enabled</span>
  <a href="#templateCallOk_internal_572_595" id="templateCallOk_internal_804_827" title="Referenced at line 24, 27, 31, 67; ../../webdsl-ui.stx line 300, 303">templateCallOk_internal</a> : <span class="keyword">scope</span> * <span class="keyword">scope</span> * <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateCall_303_315" id="TemplateCall_846_858" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 18">TemplateCall</a> * <a href="../../webdsl.stx#BOOL_697_701" id="BOOL_861_865" title="Defined at ../../webdsl.stx line 30">BOOL</a>
  <a href="#templateCallOk_internal_804_827" id="templateCallOk_internal_868_891" title="Defined at line 30">templateCallOk_internal</a>(<a href="#s_1043_1044" id="s_892_893" title="Referenced at line 32, 33, 34">s</a>, <a href="#s_pha_1086_1091" id="s_pha_895_900" title="Referenced at line 33">s_pha</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateCall_6895_6907" id="TemplateCall_902_914" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 176">TemplateCall</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateCallId_11273_11287" id="TemplateCallId_915_929" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 238">TemplateCallId</a>(<a href="#t_1130_1131" id="t_930_931" title="Referenced at line 34">t</a>), <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TCallArgs_6997_7006" id="TCallArgs_934_943" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 177">TCallArgs</a>(<a href="#targs_1133_1138" id="targs_944_949" title="Referenced at line 34">targs</a>), <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TCallPropAssigns_7189_7205" id="TCallPropAssigns_952_968" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 181">TCallPropAssigns</a>(<a href="#propAssigns_1046_1057" id="propAssigns_969_980" title="Referenced at line 32">propAssigns</a>), <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateBody_7310_7322" id="TemplateBody_983_995" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 183">TemplateBody</a>(<a href="#body_1093_1097" id="body_996_1000" title="Referenced at line 33">body</a>)), <a href="#ajax_1140_1144" id="ajax_1004_1008" title="Referenced at line 34">ajax</a>) :-
    <a href="#templatePropAssignmentsOk_4182_4207" id="templatePropAssignmentsOk_1017_1042" title="Defined at line 94">templatePropAssignmentsOk</a>(<a href="#s_892_893" id="s_1043_1044" title="Defined at line 31">s</a>, <a href="#propAssigns_969_980" id="propAssigns_1046_1057" title="Defined at line 31">propAssigns</a>),
    <a href="../../webdsl-ui.stx#templateElementsOk_7412_7430" id="templateElementsOk_1064_1082" title="Defined at ../../webdsl-ui.stx line 142">templateElementsOk</a>(<a href="#s_892_893" id="s_1083_1084" title="Defined at line 31">s</a>, <a href="#s_pha_895_900" id="s_pha_1086_1091" title="Defined at line 31">s_pha</a>, <a href="#body_996_1000" id="body_1093_1097" title="Defined at line 31">body</a>),
    <a href="#templateCallMatchesSig_1201_1223" id="templateCallMatchesSig_1104_1126" title="Defined at line 37">templateCallMatchesSig</a>(<a href="#s_892_893" id="s_1127_1128" title="Defined at line 31">s</a>, <a href="#t_930_931" id="t_1130_1131" title="Defined at line 31">t</a>, <a href="#targs_944_949" id="targs_1133_1138" title="Defined at line 31">targs</a>, <a href="#ajax_1004_1008" id="ajax_1140_1144" title="Defined at line 31">ajax</a>).

  <span class="layout">// BOOL denotes if template must be ajax enabled</span>
  <a href="#templateCallMatchesSig_1104_1126" id="templateCallMatchesSig_1201_1223" title="Referenced at line 34, 38; ../../webdsl-ac.stx line 49, 50, 51">templateCallMatchesSig</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> * <span class="keyword">list</span>(<a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateArgExp_343_357" id="TemplateArgExp_1248_1262" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 20">TemplateArgExp</a>) * <a href="../../webdsl.stx#BOOL_697_701" id="BOOL_1266_1270" title="Defined at ../../webdsl.stx line 30">BOOL</a>
  <a href="#templateCallMatchesSig_1201_1223" id="templateCallMatchesSig_1273_1295" title="Defined at line 37">templateCallMatchesSig</a>(<a href="#s_1407_1408" id="s_1296_1297" title="Referenced at line 39, 40, 41">s</a>, <a href="#t_1445_1446" id="t_1299_1300" title="Referenced at line 40, 41, 43, 43, 44, 44, 44, 45">t</a>, <a href="#targs_1410_1415" id="targs_1302_1307" title="Referenced at line 39, 40">targs</a>, <a href="#ajax_1523_1527" id="ajax_1309_1313" title="Referenced at line 41">ajax</a>) :- {<a href="#argTypes_1372_1380" id="argTypes_1319_1327" title="Referenced at line 39, 40, 42, 42">argTypes</a> <a href="#nameCompatibleSigs_1470_1488" id="nameCompatibleSigs_1328_1346" title="Referenced at line 41, 42">nameCompatibleSigs</a> <a href="#mostSpecificSigs_1534_1550" id="mostSpecificSigs_1347_1363" title="Referenced at line 42, 43, 44">mostSpecificSigs</a> <a href="#t'_1658_1660" id="t'_1364_1366" title="Referenced at line 43, 45">t'</a>}
    <a href="#argTypes_1319_1327" id="argTypes_1372_1380" title="Defined at line 38">argTypes</a> == <a href="#typesOfTemplateArgExps_1908_1930" id="typesOfTemplateArgExps_1384_1406" title="Defined at line 47">typesOfTemplateArgExps</a>(<a href="#s_1296_1297" id="s_1407_1408" title="Defined at line 38">s</a>, <a href="#targs_1302_1307" id="targs_1410_1415" title="Defined at line 38">targs</a>),
    <a href="#inputTemplateCallOk_6123_6142" id="inputTemplateCallOk_1422_1441" title="Defined at line 128">inputTemplateCallOk</a>(<a href="#s_1296_1297" id="s_1442_1443" title="Defined at line 38">s</a>, <a href="#t_1299_1300" id="t_1445_1446" title="Defined at line 38">t</a>, <a href="#targs_1302_1307" id="targs_1448_1453" title="Defined at line 38">targs</a>, <a href="#argTypes_1319_1327" id="argTypes_1455_1463" title="Defined at line 38">argTypes</a>),
    <a href="#nameCompatibleSigs_1328_1346" id="nameCompatibleSigs_1470_1488" title="Defined at line 38">nameCompatibleSigs</a> == <a href="../../webdsl.stx#resolveTemplate_internal_6636_6660" id="resolveTemplate_internal_1492_1516" title="Defined at ../../webdsl.stx line 175">resolveTemplate_internal</a>(<a href="#s_1296_1297" id="s_1517_1518" title="Defined at line 38">s</a>, <a href="#t_1299_1300" id="t_1520_1521" title="Defined at line 38">t</a>, <a href="#ajax_1309_1313" id="ajax_1523_1527" title="Defined at line 38">ajax</a>),
    <a href="#mostSpecificSigs_1347_1363" id="mostSpecificSigs_1534_1550" title="Defined at line 38">mostSpecificSigs</a> == <a href="../../actions/functions.stx#mostSpecificSigs_9909_9925" id="mostSpecificSigs_1554_1570" title="Defined at ../../actions/functions.stx line 194">mostSpecificSigs</a>(<a href="#argTypes_1319_1327" id="argTypes_1571_1579" title="Defined at line 38">argTypes</a>, <a href="../../actions/functions.stx#typeCompatibleSigs_8492_8510" id="typeCompatibleSigs_1581_1599" title="Defined at ../../actions/functions.stx line 173">typeCompatibleSigs</a>(<a href="#nameCompatibleSigs_1328_1346" id="nameCompatibleSigs_1600_1618" title="Defined at line 38">nameCompatibleSigs</a>, <a href="#argTypes_1319_1327" id="argTypes_1620_1628" title="Defined at line 38">argTypes</a>)),
    <a href="#mostSpecificSigs_1347_1363" id="mostSpecificSigs_1636_1652" title="Defined at line 38">mostSpecificSigs</a> == [(<a href="#t'_1364_1366" id="t'_1658_1660" title="Defined at line 38">t'</a>, <a href="../../webdsl-types.stx#TEMPLATE_725_733" id="TEMPLATE_1662_1670" title="Defined at ../../webdsl-types.stx line 29">TEMPLATE</a>(_, _, _)) | _] | <span class="keyword">error</span> $[Cannot resolve template [<a href="#t_1299_1300" id="t_1721_1722" title="Defined at line 38">t</a>] with compatible argument types] @<a href="#t_1299_1300" id="t_1757_1758" title="Defined at line 38">t</a>,
    <a href="../../actions/functions.stx#singleSignature_2329_2344" id="singleSignature_1764_1779" title="Defined at ../../actions/functions.stx line 59">singleSignature</a>(<a href="#mostSpecificSigs_1347_1363" id="mostSpecificSigs_1780_1796" title="Defined at line 38">mostSpecificSigs</a>, "template", <a href="#t_1299_1300" id="t_1810_1811" title="Defined at line 38">t</a>) | <span class="keyword">error</span> $[Cannot resolve template [<a href="#t_1299_1300" id="t_1848_1849" title="Defined at line 38">t</a>] with compatible argument types] @<a href="#t_1299_1300" id="t_1884_1885" title="Defined at line 38">t</a>,
    @<a href="#t_1299_1300" id="t_1892_1893" title="Defined at line 38">t</a>.<span class="keyword">ref</span> := <a href="#t'_1364_1366" id="t'_1901_1903" title="Defined at line 38">t'</a>.

  <a href="#typesOfTemplateArgExps_1384_1406" id="typesOfTemplateArgExps_1908_1930" title="Referenced at line 39">typesOfTemplateArgExps</a> <span class="keyword">maps</span> <a href="#typeOfTemplateArgExp_1981_2001" id="typeOfTemplateArgExp_1936_1956" title="Defined at line 48">typeOfTemplateArgExp</a>(*, <span class="keyword">list</span>(*)) = <span class="keyword">list</span>(*)
  <a href="#typeOfTemplateArgExp_1936_1956" id="typeOfTemplateArgExp_1981_2001" title="Referenced at line 47, 49, 50, 51">typeOfTemplateArgExp</a> : <span class="keyword">scope</span> * <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateArgExp_343_357" id="TemplateArgExp_2012_2026" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 20">TemplateArgExp</a> -&gt; <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_2030_2034" title="Defined at ../../webdsl.stx line 29">TYPE</a>
  <a href="#typeOfTemplateArgExp_1981_2001" id="typeOfTemplateArgExp_2037_2057" title="Defined at line 48">typeOfTemplateArgExp</a>(s, <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#Exp_7086_7089" id="Exp_2061_2064" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 179">Exp</a>(exp))                      = <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_2094_2103" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<span id="s_2104_2105" title="Not referenced locally, nor via imports">s</span>, <span id="exp_2107_2110" title="Not referenced locally, nor via imports">exp</span>).
  <a href="#typeOfTemplateArgExp_1981_2001" id="typeOfTemplateArgExp_2115_2135" title="Defined at line 48">typeOfTemplateArgExp</a>(<span id="s_2136_2137" title="Not referenced locally, nor via imports">s</span>, <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateElementsArgument_7118_7142" id="TemplateElementsArgument_2139_2163" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 180">TemplateElementsArgument</a>(<span id="exp_2164_2167" title="Not referenced locally, nor via imports">exp</span>)) = <a href="../../webdsl-types.stx#TEMPLATEELEMENTS_1195_1211" id="TEMPLATEELEMENTS_2172_2188" title="Defined at ../../webdsl-types.stx line 47">TEMPLATEELEMENTS</a>().
  <a href="#typeOfTemplateArgExp_1981_2001" id="typeOfTemplateArgExp_2194_2214" title="Defined at line 48">typeOfTemplateArgExp</a>(<span id="s_2215_2216" title="Not referenced locally, nor via imports">s</span>, <a href="../../../../src-gen/statix/signatures/WebDSL-EntityDerive-sig.stx#ExpEntityDerive_342_357" id="ExpEntityDerive_2218_2233" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-EntityDerive-sig.stx line 21">ExpEntityDerive</a>(_, _))         = <a href="../../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_2251_2258" title="Defined at ../../webdsl-types.stx line 49">UNTYPED</a>() :- <span class="layout">// TO-DO</span>
    <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[Derive expressions not implemented yet].

<span class="keyword">rules</span> <span class="layout">// pre-defined template calls</span>

  <span class="layout">// elements</span>
  <a href="#templateCallOk_622_636" id="templateCallOk_2398_2412" title="Defined at line 26">templateCallOk</a>(_, _, <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateCall_6895_6907" id="TemplateCall_2419_2431" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 176">TemplateCall</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateCallId_11273_11287" id="TemplateCallId_2432_2446" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 238">TemplateCallId</a>("elements"), <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TCallArgs_6997_7006" id="TCallArgs_2460_2469" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 177">TCallArgs</a>(<a href="#targs_2537_2542" id="targs_2470_2475" title="Referenced at line 58">targs</a>), <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TCallPropAssigns_7189_7205" id="TCallPropAssigns_2478_2494" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 181">TCallPropAssigns</a>(<span id="propAssigns_2495_2506" title="Not referenced locally, nor via imports">propAssigns</span>), <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateBody_7310_7322" id="TemplateBody_2509_2521" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 183">TemplateBody</a>(<a href="#body_2615_2619" id="body_2522_2526" title="Referenced at line 59">body</a>))) :-
    <a href="#targs_2470_2475" id="targs_2537_2542" title="Defined at line 57">targs</a> == [] | <span class="keyword">error</span> $[Cannot pass arguments to passed template elements],
    <a href="#body_2522_2526" id="body_2615_2619" title="Defined at line 57">body</a> == []  | <span class="keyword">error</span> $[Cannot pass template elements to passed template elements].

  <span class="layout">// validation</span>
  <a href="#templateCallOk_622_636" id="templateCallOk_2716_2730" title="Defined at line 26">templateCallOk</a>(<span id="s_2731_2732" title="Not referenced locally, nor via imports">s</span>, _, <a href="../../../../src-gen/statix/signatures/WebDSL-DataValidation-sig.stx#ValidationErrors_676_692" id="ValidationErrors_2737_2753" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-DataValidation-sig.stx line 27">ValidationErrors</a>(_)).
  <a href="#templateCallOk_622_636" id="templateCallOk_2761_2775" title="Defined at line 26">templateCallOk</a>(<span id="s_2776_2777" title="Not referenced locally, nor via imports">s</span>, _, <a href="../../../../src-gen/statix/signatures/WebDSL-DataValidation-sig.stx#ValidationErrorsEmpty_718_739" id="ValidationErrorsEmpty_2782_2803" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-DataValidation-sig.stx line 28">ValidationErrorsEmpty</a>()).

  <span class="layout">// navigatebutton</span>
  <a href="#templateCallOk_622_636" id="templateCallOk_2831_2845" title="Defined at line 26">templateCallOk</a>(<a href="#s_3000_3001" id="s_2846_2847" title="Referenced at line 67">s</a>, <a href="#s_pha_3003_3008" id="s_pha_2849_2854" title="Referenced at line 67">s_pha</a>, <a href="#tc_3010_3012" id="tc_2856_2858" title="Referenced at line 67">tc</a>@<a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateCall_6895_6907" id="TemplateCall_2859_2871" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 176">TemplateCall</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateCallId_11273_11287" id="TemplateCallId_2872_2886" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 238">TemplateCallId</a>("navigatebutton"), <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TCallArgs_6997_7006" id="TCallArgs_2906_2915" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 177">TCallArgs</a>([<a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#Exp_7086_7089" id="Exp_2917_2920" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 179">Exp</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#ThisCall2Exp_4393_4405" id="ThisCall2Exp_2921_2933" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 135">ThisCall2Exp</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#ThisCall_4428_4436" id="ThisCall_2934_2942" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 136">ThisCall</a>("url", _))) | _]), _, _)) :-
    <a href="#templateCallOk_internal_804_827" id="templateCallOk_internal_2976_2999" title="Defined at line 30">templateCallOk_internal</a>(<a href="#s_2846_2847" id="s_3000_3001" title="Defined at line 66">s</a>, <a href="#s_pha_2849_2854" id="s_pha_3003_3008" title="Defined at line 66">s_pha</a>, <a href="#tc_2856_2858" id="tc_3010_3012" title="Defined at line 66">tc</a>, <a href="../../webdsl.stx#FALSE_844_849" id="FALSE_3014_3019" title="Defined at ../../webdsl.stx line 35">FALSE</a>()).

  <a href="#templateCallOk_622_636" id="templateCallOk_3027_3041" title="Defined at line 26">templateCallOk</a>(<a href="#s_3205_3206" id="s_3042_3043" title="Referenced at line 70, 70, 71">s</a>, <span id="s_pha_3045_3050" title="Not referenced locally, nor via imports">s_pha</span>, <a href="#tc_3294_3296" id="tc_3052_3054" title="Referenced at line 70">tc</a>@<a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateCall_6895_6907" id="TemplateCall_3055_3067" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 176">TemplateCall</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateCallId_11273_11287" id="TemplateCallId_3068_3082" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 238">TemplateCallId</a>(<a href="#t_3258_3259" id="t_3083_3084" title="Referenced at line 70">t</a>@"navigatebutton"), <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TCallArgs_6997_7006" id="TCallArgs_3104_3113" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 177">TCallArgs</a>([<a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#Exp_7086_7089" id="Exp_3115_3118" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 179">Exp</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#ThisCall2Exp_4393_4405" id="ThisCall2Exp_3119_3131" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 135">ThisCall2Exp</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#ThisCall_4428_4436" id="ThisCall_3132_3140" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 136">ThisCall</a>(<a href="#p_3325_3326" id="p_3141_3142" title="Referenced at line 71">p</a>, <a href="#args_3328_3332" id="args_3144_3148" title="Referenced at line 71">args</a>))) | [<a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#Exp_7086_7089" id="Exp_3155_3158" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 179">Exp</a>(<a href="#e_3208_3209" id="e_3159_3160" title="Referenced at line 70">e</a>)]]), _, _)) :-
    <a href="../../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_3180_3194" title="Defined at ../../webdsl.stx line 408">typeCompatible</a>(<a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_3195_3204" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_3042_3043" id="s_3205_3206" title="Defined at line 69">s</a>, <a href="#e_3159_3160" id="e_3208_3209" title="Defined at line 69">e</a>), <a href="../../types/built-ins.stx#string_1822_1828" id="string_3212_3218" title="Defined at ../../types/built-ins.stx line 48">string</a>(<a href="#s_3042_3043" id="s_3219_3220" title="Defined at line 69">s</a>)) | <span class="keyword">error</span> $[Cannot resolve template [<a href="#t_3083_3084" id="t_3258_3259" title="Defined at line 69">t</a>] with compatible argument types] @<a href="#tc_3052_3054" id="tc_3294_3296" title="Defined at line 69">tc</a>,
    <a href="#pageCallOk_internal_3645_3664" id="pageCallOk_internal_3302_3321" title="Defined at line 84">pageCallOk_internal</a>(<a href="#s_3042_3043" id="s_3322_3323" title="Defined at line 69">s</a>, <a href="#p_3141_3142" id="p_3325_3326" title="Defined at line 69">p</a>, <a href="#args_3144_3148" id="args_3328_3332" title="Defined at line 69">args</a>).

<span class="keyword">rules</span> <span class="layout">// navigate calls</span>

  <a href="../../webdsl-ui.stx#templateElementOk_7058_7075" id="templateElementOk_3363_3380" title="Defined at ../../webdsl-ui.stx line 138">templateElementOk</a>(<a href="#s_3444_3445" id="s_3381_3382" title="Referenced at line 76, 77, 78">s</a>, _, <a href="#s_pha_3519_3524" id="s_pha_3387_3392" title="Referenced at line 78">s_pha</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#NavigateCall_7816_7828" id="NavigateCall_3394_3406" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 190">NavigateCall</a>(<a href="#pc_3447_3449" id="pc_3407_3409" title="Referenced at line 76">pc</a>, <a href="#props_3485_3490" id="props_3411_3416" title="Referenced at line 77">props</a>, <a href="#elems_3526_3531" id="elems_3418_3423" title="Referenced at line 78">elems</a>)) :-
    <a href="#pageCallOk_3537_3547" id="pageCallOk_3433_3443" title="Defined at line 80">pageCallOk</a>(<a href="#s_3381_3382" id="s_3444_3445" title="Defined at line 75">s</a>, <a href="#pc_3407_3409" id="pc_3447_3449" title="Defined at line 75">pc</a>),
    <a href="#templatePropAssignmentsOk_4182_4207" id="templatePropAssignmentsOk_3456_3481" title="Defined at line 94">templatePropAssignmentsOk</a>(<a href="#s_3381_3382" id="s_3482_3483" title="Defined at line 75">s</a>, <a href="#props_3411_3416" id="props_3485_3490" title="Defined at line 75">props</a>),
    <a href="../../webdsl-ui.stx#templateElementsOk_7412_7430" id="templateElementsOk_3497_3515" title="Defined at ../../webdsl-ui.stx line 142">templateElementsOk</a>(<a href="#s_3381_3382" id="s_3516_3517" title="Defined at line 75">s</a>, <a href="#s_pha_3387_3392" id="s_pha_3519_3524" title="Defined at line 75">s_pha</a>, <a href="#elems_3418_3423" id="elems_3526_3531" title="Defined at line 75">elems</a>).

  <a href="#pageCallOk_3433_3443" id="pageCallOk_3537_3547" title="Referenced at line 76, 81; ../ajax.stx line 65">pageCallOk</a> : <span class="keyword">scope</span> * <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#PageCall_290_298" id="PageCall_3558_3566" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 17">PageCall</a>
  <a href="#pageCallOk_3537_3547" id="pageCallOk_3569_3579" title="Defined at line 80">pageCallOk</a>(<a href="#s_3629_3630" id="s_3580_3581" title="Referenced at line 82">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#PageCall_7914_7922" id="PageCall_3583_3591" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 191">PageCall</a>(<a href="#p_3632_3633" id="p_3592_3593" title="Referenced at line 82">p</a>, <a href="#args_3635_3639" id="args_3595_3599" title="Referenced at line 82">args</a>)) :-
    <a href="#pageCallOk_internal_3645_3664" id="pageCallOk_internal_3609_3628" title="Defined at line 84">pageCallOk_internal</a>(<a href="#s_3580_3581" id="s_3629_3630" title="Defined at line 81">s</a>, <a href="#p_3592_3593" id="p_3632_3633" title="Defined at line 81">p</a>, <a href="#args_3595_3599" id="args_3635_3639" title="Defined at line 81">args</a>).

  <a href="#pageCallOk_internal_3302_3321" id="pageCallOk_internal_3645_3664" title="Referenced at line 71, 82, 85, 90; ../actions.stx line 101; ../built-ins.stx line 48">pageCallOk_internal</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> * <span class="keyword">list</span>(<a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Exp_404_407" id="Exp_3689_3692" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 25">Exp</a>)
  <a href="#pageCallOk_internal_3645_3664" id="pageCallOk_internal_3696_3715" title="Defined at line 84">pageCallOk_internal</a>(<a href="#s_3758_3759" id="s_3716_3717" title="Referenced at line 86, 87">s</a>, <a href="#p_3761_3762" id="p_3719_3720" title="Referenced at line 86, 86, 86">p</a>, <a href="#args_3896_3900" id="args_3722_3726" title="Referenced at line 87, 88">args</a>) :- {<a href="#argTypes_3869_3877" id="argTypes_3732_3740" title="Referenced at line 87, 88, 88">argTypes</a> <a href="#ts_3775_3777" id="ts_3741_3743" title="Referenced at line 86, 88, 88">ts</a>}
    <a href="../../webdsl-types.stx#pageType_9677_9685" id="pageType_3749_3757" title="Defined at ../../webdsl-types.stx line 260">pageType</a>(<a href="#s_3716_3717" id="s_3758_3759" title="Defined at line 85">s</a>, <a href="#p_3719_3720" id="p_3761_3762" title="Defined at line 85">p</a>) == <a href="../../webdsl-types.stx#PAGE_624_628" id="PAGE_3767_3771" title="Defined at ../../webdsl-types.stx line 26">PAGE</a>(_, <a href="#ts_3741_3743" id="ts_3775_3777" title="Defined at line 85">ts</a>) | <span class="keyword">error</span> $[There is no page with signature [<a href="#p_3719_3720" id="p_3822_3823" title="Defined at line 85">p</a>]] @<a href="#p_3719_3720" id="p_3827_3828" title="Defined at line 85">p</a>, <span class="layout">// correct error message for tests</span>
    <a href="#argTypes_3732_3740" id="argTypes_3869_3877" title="Defined at line 85">argTypes</a> == <a href="../../webdsl.stx#typesOfExps_16528_16539" id="typesOfExps_3881_3892" title="Defined at ../../webdsl.stx line 387">typesOfExps</a>(<a href="#s_3716_3717" id="s_3893_3894" title="Defined at line 85">s</a>, <a href="#args_3722_3726" id="args_3896_3900" title="Defined at line 85">args</a>),
    <a href="../../webdsl.stx#typesCompatible_17112_17127" id="typesCompatible_3907_3922" title="Defined at ../../webdsl.stx line 401">typesCompatible</a>(<a href="#argTypes_3732_3740" id="argTypes_3923_3931" title="Defined at line 85">argTypes</a>, <a href="#ts_3741_3743" id="ts_3933_3935" title="Defined at line 85">ts</a>) == <a href="../../webdsl.stx#TRUE_828_832" id="TRUE_3940_3944" title="Defined at ../../webdsl.stx line 34">TRUE</a>() | <span class="keyword">error</span> $[Given argument types not compatible with page definition. Got [<a href="#argTypes_3732_3740" id="argTypes_4020_4028" title="Defined at line 85">argTypes</a>] but expected [<a href="#ts_3741_3743" id="ts_4044_4046" title="Defined at line 85">ts</a>]] @<a href="#args_3722_3726" id="args_4050_4054" title="Defined at line 85">args</a>.

  <a href="#pageCallOk_internal_3645_3664" id="pageCallOk_internal_4059_4078" title="Defined at line 84">pageCallOk_internal</a>(_, "root", []). <span class="layout">// root page is always accessible from all locations</span>

<span class="keyword">rules</span> <span class="layout">// property assignments</span>

  <a href="#templatePropAssignmentsOk_1017_1042" id="templatePropAssignmentsOk_4182_4207" title="Referenced at line 32, 77, 95; ../../webdsl-ui.stx line 187, 192, 197, 202">templatePropAssignmentsOk</a> : <span class="keyword">scope</span> * <span class="keyword">list</span>(<a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#PropertyAssignment_320_338" id="PropertyAssignment_4223_4241" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 19">PropertyAssignment</a>)
  <a href="#templatePropAssignmentsOk_4182_4207" id="templatePropAssignmentsOk_4245_4270" title="Defined at line 94">templatePropAssignmentsOk</a>(<a href="#s_4320_4321" id="s_4271_4272" title="Referenced at line 95">s</a>, <a href="#pas_4323_4326" id="pas_4274_4277" title="Referenced at line 95">pas</a>) :- <a href="#templatePropAssignmentsOkNoDuplicates_4336_4373" id="templatePropAssignmentsOkNoDuplicates_4282_4319" title="Defined at line 97">templatePropAssignmentsOkNoDuplicates</a>(<a href="#s_4271_4272" id="s_4320_4321" title="Defined at line 95">s</a>, <a href="#pas_4274_4277" id="pas_4323_4326" title="Defined at line 95">pas</a>, []).

  <a href="#templatePropAssignmentsOkNoDuplicates_4282_4319" id="templatePropAssignmentsOkNoDuplicates_4336_4373" title="Referenced at line 95, 98, 99, 102">templatePropAssignmentsOkNoDuplicates</a> : <span class="keyword">scope</span> * <span class="keyword">list</span>(<a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#PropertyAssignment_320_338" id="PropertyAssignment_4389_4407" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 19">PropertyAssignment</a>) * <span class="keyword">list</span>(<span class="keyword">string</span>)
  <a href="#templatePropAssignmentsOkNoDuplicates_4336_4373" id="templatePropAssignmentsOkNoDuplicates_4426_4463" title="Defined at line 97">templatePropAssignmentsOkNoDuplicates</a>(_, [], _).
  <a href="#templatePropAssignmentsOkNoDuplicates_4336_4373" id="templatePropAssignmentsOkNoDuplicates_4477_4514" title="Defined at line 97">templatePropAssignmentsOkNoDuplicates</a>(<a href="#s_4575_4576" id="s_4515_4516" title="Referenced at line 100, 102">s</a>, [<a href="#pa_4578_4580" id="pa_4519_4521" title="Referenced at line 100">pa</a> | <a href="#pas_4751_4754" id="pas_4524_4527" title="Referenced at line 102">pas</a>], <a href="#xs_4609_4611" id="xs_4530_4532" title="Referenced at line 101, 102">xs</a>) :- {<a href="#x_4545_4546" id="x_4538_4539" title="Referenced at line 100, 101, 101, 101, 102">x</a>}
    <a href="#x_4538_4539" id="x_4545_4546" title="Defined at line 99">x</a> == <a href="#templatePropAssignmentOk_4770_4794" id="templatePropAssignmentOk_4550_4574" title="Defined at line 104">templatePropAssignmentOk</a>(<a href="#s_4515_4516" id="s_4575_4576" title="Defined at line 99">s</a>, <a href="#pa_4519_4521" id="pa_4578_4580" title="Defined at line 99">pa</a>),
    <a href="../../webdsl.stx#noDuplicatesString_18628_18646" id="noDuplicatesString_4587_4605" title="Defined at ../../webdsl.stx line 456">noDuplicatesString</a>(<a href="#x_4538_4539" id="x_4606_4607" title="Defined at line 99">x</a>, <a href="#xs_4530_4532" id="xs_4609_4611" title="Defined at line 99">xs</a>) | <span class="keyword">error</span> $[Properties are defined multiple times: [<a href="#x_4538_4539" id="x_4663_4664" title="Defined at line 99">x</a>]] @<a href="#x_4538_4539" id="x_4668_4669" title="Defined at line 99">x</a>, <span class="layout">// correct error message for tests</span>
    <a href="#templatePropAssignmentsOkNoDuplicates_4336_4373" id="templatePropAssignmentsOkNoDuplicates_4710_4747" title="Defined at line 97">templatePropAssignmentsOkNoDuplicates</a>(<a href="#s_4515_4516" id="s_4748_4749" title="Defined at line 99">s</a>, <a href="#pas_4524_4527" id="pas_4751_4754" title="Defined at line 99">pas</a>, [<a href="#x_4538_4539" id="x_4757_4758" title="Defined at line 99">x</a> | <a href="#xs_4530_4532" id="xs_4761_4763" title="Defined at line 99">xs</a>]).

  <a href="#templatePropAssignmentOk_4550_4574" id="templatePropAssignmentOk_4770_4794" title="Referenced at line 100, 105, 108, 111, 114, 115, 116, 119, 122">templatePropAssignmentOk</a> : <span class="keyword">scope</span> * <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#PropertyAssignment_320_338" id="PropertyAssignment_4805_4823" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 19">PropertyAssignment</a> -&gt; <span class="keyword">string</span> <span class="layout">// return name of property for duplicate check</span>
  <a href="#templatePropAssignmentOk_4770_4794" id="templatePropAssignmentOk_4883_4907" title="Defined at line 104">templatePropAssignmentOk</a>(<span id="s_4908_4909" title="Not referenced locally, nor via imports">s</span>, _) = "_IGNORE" :- <span class="layout">// TO-DO</span>
    <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[This template property assignment is not implemented yet].

  <a href="#templatePropAssignmentOk_4770_4794" id="templatePropAssignmentOk_5030_5054" title="Defined at line 104">templatePropAssignmentOk</a>(<a href="#s_5120_5121" id="s_5055_5056" title="Referenced at line 109, 109">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#PropertyAssignment_9879_9897" id="PropertyAssignment_5058_5076" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 215">PropertyAssignment</a>(<a href="#x_5158_5159" id="x_5077_5078" title="Referenced at line 109">x</a>, <a href="#e_5123_5124" id="e_5080_5081" title="Referenced at line 109, 109">e</a>)) = x :-
    <a href="../../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_5095_5109" title="Defined at ../../webdsl.stx line 408">typeCompatible</a>(<a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_5110_5119" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_5055_5056" id="s_5120_5121" title="Defined at line 108">s</a>, <a href="#e_5080_5081" id="e_5123_5124" title="Defined at line 108">e</a>), <a href="../../types/built-ins.stx#string_1822_1828" id="string_5127_5133" title="Defined at ../../types/built-ins.stx line 48">string</a>(<a href="#s_5055_5056" id="s_5134_5135" title="Defined at line 108">s</a>)) | <span class="keyword">error</span> $[Property [<a href="#x_5077_5078" id="x_5158_5159" title="Defined at line 108">x</a>] requires a String value] @<a href="#e_5080_5081" id="e_5187_5188" title="Defined at line 108">e</a>.

  <a href="#templatePropAssignmentOk_4770_4794" id="templatePropAssignmentOk_5193_5217" title="Defined at line 104">templatePropAssignmentOk</a>(<a href="#s_5280_5281" id="s_5218_5219" title="Referenced at line 112">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#PropertySubmit_9640_9654" id="PropertySubmit_5221_5235" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 212">PropertySubmit</a>(<span id="x_5236_5237" title="Not referenced locally, nor via imports">x</span>, <a href="#a_5283_5284" id="a_5239_5240" title="Referenced at line 112">a</a>)) = x :-
    <a href="../actions.stx#actionCallOrInlineOrExpOk_2586_2611" id="actionCallOrInlineOrExpOk_5254_5279" title="Defined at ../actions.stx line 65">actionCallOrInlineOrExpOk</a>(<a href="#s_5218_5219" id="s_5280_5281" title="Defined at line 111">s</a>, <a href="#a_5239_5240" id="a_5283_5284" title="Defined at line 111">a</a>).

  <a href="#templatePropAssignmentOk_4770_4794" id="templatePropAssignmentOk_5290_5314" title="Defined at line 104">templatePropAssignmentOk</a>(<span id="s_5315_5316" title="Not referenced locally, nor via imports">s</span>, <a href="../../../../src-gen/statix/signatures/WebDSL-Attributes-sig.stx#AttributeSelection2PropertyAssignment_1281_1318" id="AttributeSelection2PropertyAssignment_5318_5355" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Attributes-sig.stx line 39">AttributeSelection2PropertyAssignment</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-Attributes-sig.stx#AttributeIgnoreDefault_1218_1240" id="AttributeIgnoreDefault_5356_5378" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Attributes-sig.stx line 38">AttributeIgnoreDefault</a>(<span id="c_5379_5380" title="Not referenced locally, nor via imports">c</span>@"class"))) = "_IGNORE".
  <a href="#templatePropAssignmentOk_4770_4794" id="templatePropAssignmentOk_5407_5431" title="Defined at line 104">templatePropAssignmentOk</a>(<span id="s_5432_5433" title="Not referenced locally, nor via imports">s</span>, <a href="../../../../src-gen/statix/signatures/WebDSL-Attributes-sig.stx#AttributeSelection2PropertyAssignment_1281_1318" id="AttributeSelection2PropertyAssignment_5435_5472" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Attributes-sig.stx line 39">AttributeSelection2PropertyAssignment</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-Attributes-sig.stx#AttributeIgnoreDefault_1218_1240" id="AttributeIgnoreDefault_5473_5495" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Attributes-sig.stx line 38">AttributeIgnoreDefault</a>(<span id="c_5496_5497" title="Not referenced locally, nor via imports">c</span>@"style"))) = "_IGNORE".
  <a href="#templatePropAssignmentOk_4770_4794" id="templatePropAssignmentOk_5524_5548" title="Defined at line 104">templatePropAssignmentOk</a>(<span id="s_5549_5550" title="Not referenced locally, nor via imports">s</span>, <a href="../../../../src-gen/statix/signatures/WebDSL-Attributes-sig.stx#AttributeSelection2PropertyAssignment_1281_1318" id="AttributeSelection2PropertyAssignment_5552_5589" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Attributes-sig.stx line 39">AttributeSelection2PropertyAssignment</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-Attributes-sig.stx#AttributeIgnoreDefault_1218_1240" id="AttributeIgnoreDefault_5590_5612" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Attributes-sig.stx line 38">AttributeIgnoreDefault</a>(_))) = "_IGNORE" :-
    <span class="keyword">false</span> | <span class="keyword">error</span> $[Only "class" and "style" are implicitly combined with defaults].

  <a href="#templatePropAssignmentOk_4770_4794" id="templatePropAssignmentOk_5721_5745" title="Defined at line 104">templatePropAssignmentOk</a>(<a href="#s_5826_5827" id="s_5746_5747" title="Referenced at line 120">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#CommonAttribute2PropertyAssignment_10288_10322" id="CommonAttribute2PropertyAssignment_5749_5783" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 222">CommonAttribute2PropertyAssignment</a>(<a href="#ca_5829_5831" id="ca_5784_5786" title="Referenced at line 120">ca</a>)) = "_IGNORE" :-
    <a href="../attributes.stx#commonAttributeOk_1750_1767" id="commonAttributeOk_5808_5825" title="Defined at ../attributes.stx line 46">commonAttributeOk</a>(<a href="#s_5746_5747" id="s_5826_5827" title="Defined at line 119">s</a>, <a href="#ca_5784_5786" id="ca_5829_5831" title="Defined at line 119">ca</a>).

  <a href="#templatePropAssignmentOk_4770_4794" id="templatePropAssignmentOk_5837_5861" title="Defined at line 104">templatePropAssignmentOk</a>(<a href="#s_5980_5981" id="s_5862_5863" title="Referenced at line 123">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Attributes-sig.stx#AttributeSelection2PropertyAssignment_1281_1318" id="AttributeSelection2PropertyAssignment_5865_5902" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Attributes-sig.stx line 39">AttributeSelection2PropertyAssignment</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-Attributes-sig.stx#AttributeSelection_1159_1177" id="AttributeSelection_5903_5921" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Attributes-sig.stx line 37">AttributeSelection</a>(<a href="#a_5983_5984" id="a_5922_5923" title="Referenced at line 123, 123, 124">a</a>))) = "_IGNORE" :- { <a href="#a'_5994_5996" id="a'_5944_5946" title="Referenced at line 123, 124">a'</a> }
    <a href="../attributes.stx#resolveAttributeCollection_595_621" id="resolveAttributeCollection_5953_5979" title="Defined at ../attributes.stx line 20">resolveAttributeCollection</a>(<a href="#s_5862_5863" id="s_5980_5981" title="Defined at line 122">s</a>, <a href="#a_5922_5923" id="a_5983_5984" title="Defined at line 122">a</a>) == [(_, <a href="#a'_5944_5946" id="a'_5994_5996" title="Defined at line 122">a'</a>) | _] | <span class="keyword">error</span> $[Attribute collection [<a href="#a_5922_5923" id="a_6035_6036" title="Defined at line 122">a</a>] is not defined],
    @<a href="#a_5922_5923" id="a_6060_6061" title="Defined at line 122">a</a>.<span class="keyword">ref</span> := <a href="#a'_5944_5946" id="a'_6069_6071" title="Defined at line 122">a'</a>.

<span class="keyword">rules</span> <span class="layout">// mutability check for input templates</span>

  <a href="#inputTemplateCallOk_1422_1441" id="inputTemplateCallOk_6123_6142" title="Referenced at line 40, 129, 130">inputTemplateCallOk</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> * <span class="keyword">list</span>(<a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateArgExp_343_357" id="TemplateArgExp_6167_6181" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 20">TemplateArgExp</a>) * <span class="keyword">list</span>(<a href="../../webdsl.stx#TYPE_669_673" id="TYPE_6190_6194" title="Defined at ../../webdsl.stx line 29">TYPE</a>)
  <a href="#inputTemplateCallOk_6123_6142" id="inputTemplateCallOk_6198_6217" title="Defined at line 128">inputTemplateCallOk</a>(<span id="s_6218_6219" title="Not referenced locally, nor via imports">s</span>, _, _, _). <span class="layout">// all other template calls are ok</span>
  <a href="#inputTemplateCallOk_6123_6142" id="inputTemplateCallOk_6268_6287" title="Defined at line 128">inputTemplateCallOk</a>(<a href="#s_6339_6340" id="s_6288_6289" title="Referenced at line 130">s</a>, "input", [<a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#Exp_7086_7089" id="Exp_6301_6304" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 179">Exp</a>(<a href="#e_6342_6343" id="e_6305_6306" title="Referenced at line 130">e</a>) | _], [<a href="#t_6345_6346" id="t_6315_6316" title="Referenced at line 130">t</a> | _]) :- <a href="#isMutableExp_6352_6364" id="isMutableExp_6326_6338" title="Defined at line 132">isMutableExp</a>(<a href="#s_6288_6289" id="s_6339_6340" title="Defined at line 130">s</a>, <a href="#e_6305_6306" id="e_6342_6343" title="Defined at line 130">e</a>, <a href="#t_6315_6316" id="t_6345_6346" title="Defined at line 130">t</a>).

  <a href="#isMutableExp_6326_6338" id="isMutableExp_6352_6364" title="Referenced at line 130, 133, 134, 135, 136">isMutableExp</a> : <span class="keyword">scope</span> * <a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Exp_404_407" id="Exp_6375_6378" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 25">Exp</a> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_6381_6385" title="Defined at ../../webdsl.stx line 29">TYPE</a>
  <a href="#isMutableExp_6352_6364" id="isMutableExp_6388_6400" title="Defined at line 132">isMutableExp</a>(_, <a href="#e_6469_6470" id="e_6404_6405" title="Referenced at line 133, 133">e</a>, <span id="t_6407_6408" title="Not referenced locally, nor via imports">t</span>) :- <span class="keyword">false</span> | <span class="keyword">error</span> $[Cannot verify mutability of expression [<a href="#e_6404_6405" id="e_6469_6470" title="Defined at line 133">e</a>]] @<a href="#e_6404_6405" id="e_6474_6475" title="Defined at line 133">e</a>.
  <a href="#isMutableExp_6352_6364" id="isMutableExp_6479_6491" title="Defined at line 132">isMutableExp</a>(<a href="#s_6524_6525" id="s_6492_6493" title="Referenced at line 134">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Var_3618_3621" id="Var_6495_6498" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 116">Var</a>(<a href="#x_6527_6528" id="x_6499_6500" title="Referenced at line 134">x</a>), <a href="#t_6530_6531" id="t_6503_6504" title="Referenced at line 134">t</a>) :- <a href="../../webdsl-actions.stx#isMutableOrRef_4793_4807" id="isMutableOrRef_6509_6523" title="Defined at ../../webdsl-actions.stx line 113">isMutableOrRef</a>(<a href="#s_6492_6493" id="s_6524_6525" title="Defined at line 134">s</a>, <a href="#x_6499_6500" id="x_6527_6528" title="Defined at line 134">x</a>, <a href="#t_6503_6504" id="t_6530_6531" title="Defined at line 134">t</a>).
  <a href="#isMutableExp_6352_6364" id="isMutableExp_6536_6548" title="Defined at line 132">isMutableExp</a>(<a href="#s_6584_6585" id="s_6549_6550" title="Referenced at line 135">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Cast_4540_4544" id="Cast_6552_6556" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 139">Cast</a>(_, <a href="#sort_6587_6591" id="sort_6560_6564" title="Referenced at line 135">sort</a>), <span id="t_6567_6568" title="Not referenced locally, nor via imports">t</span>) :- <a href="../../webdsl-types.stx#typeOfSort_5551_5561" id="typeOfSort_6573_6583" title="Defined at ../../webdsl-types.stx line 160">typeOfSort</a>(<a href="#s_6549_6550" id="s_6584_6585" title="Defined at line 135">s</a>, <a href="#sort_6560_6564" id="sort_6587_6591" title="Defined at line 135">sort</a>) == <a href="../../webdsl-types.stx#REF_939_942" id="REF_6596_6599" title="Defined at ../../webdsl-types.stx line 37">REF</a>(_).
  <a href="#isMutableExp_6352_6364" id="isMutableExp_6606_6618" title="Defined at line 132">isMutableExp</a>(<a href="#s_6694_6695" id="s_6619_6620" title="Referenced at line 137">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#FieldAccess_3641_3652" id="FieldAccess_6622_6633" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 117">FieldAccess</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#FAVar_3775_3780" id="FAVar_6634_6639" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 121">FAVar</a>(<a href="#var_6697_6700" id="var_6640_6643" title="Referenced at line 137">var</a>), <a href="#x_6734_6735" id="x_6646_6647" title="Referenced at line 138">x</a>), <span id="t_6650_6651" title="Not referenced locally, nor via imports">t</span>) :- {<a href="#varType_6670_6677" id="varType_6657_6664" title="Referenced at line 137, 138">varType</a>}
    <a href="#varType_6657_6664" id="varType_6670_6677" title="Defined at line 136">varType</a> == <a href="../../webdsl-types.stx#variableType_8830_8842" id="variableType_6681_6693" title="Defined at ../../webdsl-types.stx line 239">variableType</a>(<a href="#s_6619_6620" id="s_6694_6695" title="Defined at line 136">s</a>, <a href="#var_6640_6643" id="var_6697_6700" title="Defined at line 136">var</a>),
    <a href="../../entities/annotations.stx#isMutableProperty_10850_10867" id="isMutableProperty_6707_6724" title="Defined at ../../entities/annotations.stx line 231">isMutableProperty</a>(<a href="#varType_6657_6664" id="varType_6725_6732" title="Defined at line 136">varType</a>, <a href="#x_6646_6647" id="x_6734_6735" title="Defined at line 136">x</a>).

</code></pre></td></tr></tbody></table></div>