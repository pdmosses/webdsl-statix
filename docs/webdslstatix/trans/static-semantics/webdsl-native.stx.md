---
title: webdsl-native.stx
hide:
  - toc
---

# `webdsl-native.stx`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/webdsl-native.stx]

[pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/webdsl-native.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/trans/static-semantics/webdsl-native.stx "The source file on GitHub"

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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl.stx#static-semantics/webdsl-native_453_483" id="static-semantics/webdsl-native_7_37" title="Referenced at ../webdsl.stx line 19; ../types/built-ins.stx line 9; ../types/type-extensions.stx line 9">static-semantics/webdsl-native</a>

<span class="keyword">imports</span>
  <a href="../actions/functions.stx#static-semantics/actions/functions_7_41" id="static-semantics/actions/functions_49_83" title="Defined at ../actions/functions.stx line 1">static-semantics/actions/functions</a>

  <a href="../types/built-ins.stx#static-semantics/types/built-ins_7_39" id="static-semantics/types/built-ins_87_119" title="Defined at ../types/built-ins.stx line 1">static-semantics/types/built-ins</a>

  <a href="../webdsl-actions.stx#static-semantics/webdsl-actions_7_38" id="static-semantics/webdsl-actions_123_154" title="Defined at ../webdsl-actions.stx line 1">static-semantics/webdsl-actions</a>
  <a href="../webdsl-entities.stx#static-semantics/webdsl-entities_7_39" id="static-semantics/webdsl-entities_157_189" title="Defined at ../webdsl-entities.stx line 1">static-semantics/webdsl-entities</a>
  <a href="../webdsl-types.stx#static-semantics/webdsl-types_7_36" id="static-semantics/webdsl-types_192_221" title="Defined at ../webdsl-types.stx line 1">static-semantics/webdsl-types</a>
  <a href="../webdsl.stx#static-semantics/webdsl_7_30" id="static-semantics/webdsl_224_247" title="Defined at ../webdsl.stx line 1">static-semantics/webdsl</a>

<span class="keyword">rules</span> <span class="layout">// subtype compatiblity</span>

  <a href="../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_282_297" title="Defined at ../webdsl.stx line 411">typeCompatibleB</a>(<a href="../webdsl-types.stx#NATIVECLASS_529_540" id="NATIVECLASS_298_309" title="Defined at ../webdsl-types.stx line 23">NATIVECLASS</a>(_, <span id="s_sub_313_318" title="Not referenced locally, nor via imports">s_sub</span>), <a href="../webdsl-types.stx#NATIVECLASS_529_540" id="NATIVECLASS_321_332" title="Defined at ../webdsl-types.stx line 23">NATIVECLASS</a>(_, s_super)) = <a href="../webdsl-entities.stx#inherits_9247_9255" id="inherits_348_356" title="Defined at ../webdsl-entities.stx line 206">inherits</a>(s_sub, <span id="s_super_364_371" title="Not referenced locally, nor via imports">s_super</span>).

  <span class="layout">// two native classes with identical names are compatible due to redefinitions of built-in native classes</span>
  <a href="../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_485_500" title="Defined at ../webdsl.stx line 411">typeCompatibleB</a>(<a href="../webdsl-types.stx#NATIVECLASS_529_540" id="NATIVECLASS_501_512" title="Defined at ../webdsl-types.stx line 23">NATIVECLASS</a>(nc, _), <a href="../webdsl-types.stx#NATIVECLASS_529_540" id="NATIVECLASS_521_532" title="Defined at ../webdsl-types.stx line 23">NATIVECLASS</a>(<span id="nc_533_535" title="Not referenced locally, nor via imports">nc</span>, _)) = <a href="../webdsl.stx#TRUE_828_832" id="TRUE_543_547" title="Defined at ../webdsl.stx line 34">TRUE</a>().

<span class="keyword">rules</span> <span class="layout">// declarations</span>

  <a href="../webdsl.stx#defOk_15473_15478" id="defOk_577_582" title="Defined at ../webdsl.stx line 356">defOk</a>(<a href="#s_666_667" id="s_583_584" title="Referenced at line 23, 24">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Native-sig.stx#NativeClass_635_646" id="NativeClass_586_597" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Native-sig.stx line 33">NativeClass</a>(<a href="#c_718_719" id="c_598_599" title="Referenced at line 24">c</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Native-sig.stx#NCAlias_779_786" id="NCAlias_601_608" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Native-sig.stx line 35">NCAlias</a>(<a href="#alias_721_726" id="alias_609_614" title="Referenced at line 24">alias</a>), <a href="../../../src-gen/statix/signatures/WebDSL-Native-sig.stx#NCSuperNone_861_872" id="NCSuperNone_617_628" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Native-sig.stx line 38">NCSuperNone</a>(), <a href="#elems_737_742" id="elems_632_637" title="Referenced at line 24">elems</a>)) :- { <a href="#s_super_687_694" id="s_super_645_652" title="Referenced at line 23, 24">s_super</a> }
    <a href="../types/built-ins.stx#object_2954_2960" id="object_659_665" title="Defined at ../types/built-ins.stx line 84">object</a>(<a href="#s_583_584" id="s_666_667" title="Defined at line 22">s</a>) == <a href="../webdsl-types.stx#BUILTINTYPE_1001_1012" id="BUILTINTYPE_672_683" title="Defined at ../webdsl-types.stx line 40">BUILTINTYPE</a>(_, <a href="#s_super_645_652" id="s_super_687_694" title="Defined at line 22">s_super</a>),
    <a href="#nativeClassOk_1329_1342" id="nativeClassOk_701_714" title="Defined at line 37">nativeClassOk</a>(<a href="#s_583_584" id="s_715_716" title="Defined at line 22">s</a>, <a href="#c_598_599" id="c_718_719" title="Defined at line 22">c</a>, <a href="#alias_609_614" id="alias_721_726" title="Defined at line 22">alias</a>, <a href="#s_super_645_652" id="s_super_728_735" title="Defined at line 22">s_super</a>, <a href="#elems_632_637" id="elems_737_742" title="Defined at line 22">elems</a>).

  <a href="../webdsl.stx#defOk_15473_15478" id="defOk_748_753" title="Defined at ../webdsl.stx line 356">defOk</a>(<a href="#s_860_861" id="s_754_755" title="Referenced at line 27, 29">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Native-sig.stx#NativeClass_635_646" id="NativeClass_757_768" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Native-sig.stx line 33">NativeClass</a>(<a href="#c_948_949" id="c_769_770" title="Referenced at line 27, 29">c</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Native-sig.stx#NCAlias_779_786" id="NCAlias_772_779" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Native-sig.stx line 35">NCAlias</a>(<a href="#alias_1026_1031" id="alias_780_785" title="Referenced at line 29">alias</a>), <a href="../../../src-gen/statix/signatures/WebDSL-Native-sig.stx#NCSuper_833_840" id="NCSuper_788_795" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Native-sig.stx line 37">NCSuper</a>(<a href="#super_863_868" id="super_796_801" title="Referenced at line 27, 27, 30">super</a>), <a href="#elems_1042_1047" id="elems_804_809" title="Referenced at line 29">elems</a>)) :- { <a href="#super'_879_885" id="super'_817_823" title="Referenced at line 27, 30">super'</a> <a href="#superType_887_896" id="superType_824_833" title="Referenced at line 27, 28">superType</a> <a href="#s_super_955_962" id="s_super_834_841" title="Referenced at line 28, 29">s_super</a> }
    <a href="../webdsl.stx#resolveType_3324_3335" id="resolveType_848_859" title="Defined at ../webdsl.stx line 105">resolveType</a>(<a href="#s_754_755" id="s_860_861" title="Defined at line 26">s</a>, <a href="#super_796_801" id="super_863_868" title="Defined at line 26">super</a>) == [(_, (<a href="#super'_817_823" id="super'_879_885" title="Defined at line 26">super'</a>, <a href="#superType_824_833" id="superType_887_896" title="Defined at line 26">superType</a>))] | <span class="keyword">error</span> $[Native class [<a href="#super_796_801" id="super_924_929" title="Defined at line 26">super</a>] is not defined] @<a href="#c_769_770" id="c_948_949" title="Defined at line 26">c</a>,
    <a href="#s_super_834_841" id="s_super_955_962" title="Defined at line 26">s_super</a> == <a href="#scopeOfNativeClassSuper_1079_1102" id="scopeOfNativeClassSuper_966_989" title="Defined at line 32">scopeOfNativeClassSuper</a>(<a href="#superType_824_833" id="superType_990_999" title="Defined at line 26">superType</a>),
    <a href="#nativeClassOk_1329_1342" id="nativeClassOk_1006_1019" title="Defined at line 37">nativeClassOk</a>(<a href="#s_754_755" id="s_1020_1021" title="Defined at line 26">s</a>, <a href="#c_769_770" id="c_1023_1024" title="Defined at line 26">c</a>, <a href="#alias_780_785" id="alias_1026_1031" title="Defined at line 26">alias</a>, <a href="#s_super_834_841" id="s_super_1033_1040" title="Defined at line 26">s_super</a>, <a href="#elems_804_809" id="elems_1042_1047" title="Defined at line 26">elems</a>),
    @<a href="#super_796_801" id="super_1055_1060" title="Defined at line 26">super</a>.<span class="keyword">ref</span> := <a href="#super'_817_823" id="super'_1068_1074" title="Defined at line 26">super'</a>.

  <a href="#scopeOfNativeClassSuper_966_989" id="scopeOfNativeClassSuper_1079_1102" title="Referenced at line 28, 33, 34, 35">scopeOfNativeClassSuper</a> : <a href="../webdsl.stx#TYPE_669_673" id="TYPE_1105_1109" title="Defined at ../webdsl.stx line 29">TYPE</a> -&gt; <span class="keyword">scope</span>
  <a href="#scopeOfNativeClassSuper_1079_1102" id="scopeOfNativeClassSuper_1121_1144" title="Defined at line 32">scopeOfNativeClassSuper</a>(<a href="#t_1221_1222" id="t_1145_1146" title="Referenced at line 33">t</a>) = <span class="keyword">new</span> :- <span class="keyword">false</span> | <span class="keyword">error</span> $[Native classes cannot extend something of type [<a href="#t_1145_1146" id="t_1221_1222" title="Defined at line 33">t</a>]].
  <a href="#scopeOfNativeClassSuper_1079_1102" id="scopeOfNativeClassSuper_1228_1251" title="Defined at line 32">scopeOfNativeClassSuper</a>(<a href="../webdsl-types.stx#NATIVECLASS_529_540" id="NATIVECLASS_1252_1263" title="Defined at ../webdsl-types.stx line 23">NATIVECLASS</a>(_, s)) = <span id="s_1273_1274" title="Not referenced locally, nor via imports">s</span>.
  <a href="#scopeOfNativeClassSuper_1079_1102" id="scopeOfNativeClassSuper_1278_1301" title="Defined at line 32">scopeOfNativeClassSuper</a>(<a href="../webdsl-types.stx#BUILTINTYPE_1001_1012" id="BUILTINTYPE_1302_1313" title="Defined at ../webdsl-types.stx line 40">BUILTINTYPE</a>(_, s)) = <span id="s_1323_1324" title="Not referenced locally, nor via imports">s</span>.

  <a href="#nativeClassOk_701_714" id="nativeClassOk_1329_1342" title="Referenced at line 24, 29, 38">nativeClassOk</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> * <span class="keyword">string</span> * <span class="keyword">scope</span> * <span class="keyword">list</span>(<a href="../../../src-gen/statix/signatures/WebDSL-Native-sig.stx#NCElement_154_163" id="NCElement_1384_1393" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Native-sig.stx line 12">NCElement</a>)
  <a href="#nativeClassOk_1329_1342" id="nativeClassOk_1397_1410" title="Defined at line 37">nativeClassOk</a>(<a href="#s_1515_1516" id="s_1411_1412" title="Referenced at line 39, 40, 41, 42, 43, 45, 46">s</a>, <a href="#c_1886_1887" id="c_1414_1415" title="Referenced at line 44">c</a>, <a href="#alias_1544_1549" id="alias_1417_1422" title="Referenced at line 40, 41, 42, 42, 43, 43, 45">alias</a>, <a href="#s_super_1491_1498" id="s_super_1424_1431" title="Referenced at line 39">s_super</a>, <a href="#elems_1943_1948" id="elems_1433_1438" title="Referenced at line 45, 46">elems</a>) :- { <a href="#s_class_1463_1470" id="s_class_1445_1452" title="Referenced at line 39, 39, 39, 40, 41, 42, 43, 44, 45, 46">s_class</a> }
    <span class="keyword">new</span> <a href="#s_class_1445_1452" id="s_class_1463_1470" title="Defined at line 38">s_class</a>, <a href="#s_class_1445_1452" id="s_class_1472_1479" title="Defined at line 38">s_class</a> -<a href="../webdsl.stx#INHERIT_1445_1452" id="INHERIT_1481_1488" title="Defined at ../webdsl.stx line 48">INHERIT</a>-&gt; <a href="#s_super_1424_1431" id="s_super_1491_1498" title="Defined at line 38">s_super</a>, <a href="#s_class_1445_1452" id="s_class_1500_1507" title="Defined at line 38">s_class</a> -<a href="../webdsl.stx#DEF_1498_1501" id="DEF_1509_1512" title="Defined at ../webdsl.stx line 49">DEF</a>-&gt; <a href="#s_1411_1412" id="s_1515_1516" title="Defined at line 38">s</a>,
    <a href="../webdsl.stx#declareExtendScope_4401_4419" id="declareExtendScope_1522_1540" title="Defined at ../webdsl.stx line 133">declareExtendScope</a>(<a href="#s_1411_1412" id="s_1541_1542" title="Defined at line 38">s</a>, <a href="#alias_1417_1422" id="alias_1544_1549" title="Defined at line 38">alias</a>, <a href="#s_class_1445_1452" id="s_class_1551_1558" title="Defined at line 38">s_class</a>),
    <a href="../webdsl-entities.stx#extendScopes_2356_2368" id="extendScopes_1565_1577" title="Defined at ../webdsl-entities.stx line 56">extendScopes</a>(<a href="../webdsl.stx#resolveExtendScope_4524_4542" id="resolveExtendScope_1578_1596" title="Defined at ../webdsl.stx line 137">resolveExtendScope</a>(<a href="#s_1411_1412" id="s_1597_1598" title="Defined at line 38">s</a>, <a href="#alias_1417_1422" id="alias_1600_1605" title="Defined at line 38">alias</a>), <a href="#s_class_1445_1452" id="s_class_1608_1615" title="Defined at line 38">s_class</a>),
    <a href="../webdsl.stx#declareType_3123_3134" id="declareType_1622_1633" title="Defined at ../webdsl.stx line 100">declareType</a>(<a href="#s_1411_1412" id="s_1634_1635" title="Defined at line 38">s</a>, <a href="#alias_1417_1422" id="alias_1637_1642" title="Defined at line 38">alias</a>, <a href="../webdsl-types.stx#NATIVECLASS_529_540" id="NATIVECLASS_1644_1655" title="Defined at ../webdsl-types.stx line 23">NATIVECLASS</a>(<a href="#alias_1417_1422" id="alias_1656_1661" title="Defined at line 38">alias</a>, <a href="#s_class_1445_1452" id="s_class_1663_1670" title="Defined at line 38">s_class</a>)),
    <a href="../webdsl.stx#declareVar_13281_13291" id="declareVar_1678_1688" title="Defined at ../webdsl.stx line 301">declareVar</a>(<a href="#s_1411_1412" id="s_1689_1690" title="Defined at line 38">s</a>, <a href="#alias_1417_1422" id="alias_1692_1697" title="Defined at line 38">alias</a>, <a href="../webdsl-types.stx#STATICNATIVECLASS_576_593" id="STATICNATIVECLASS_1699_1716" title="Defined at ../webdsl-types.stx line 24">STATICNATIVECLASS</a>(<a href="#alias_1417_1422" id="alias_1717_1722" title="Defined at line 38">alias</a>, <a href="#s_class_1445_1452" id="s_class_1724_1731" title="Defined at line 38">s_class</a>)), <span class="layout">// declare class name as global variable that refers to the static scope</span>
    <a href="../webdsl-entities.stx#noCircularInheritance_3354_3375" id="noCircularInheritance_1812_1833" title="Defined at ../webdsl-entities.stx line 76">noCircularInheritance</a>(<a href="#s_class_1445_1452" id="s_class_1834_1841" title="Defined at line 38">s_class</a>) | <span class="keyword">error</span> $[Circular inhertitance detected] @<a href="#c_1414_1415" id="c_1886_1887" title="Defined at line 38">c</a>,
    <a href="#declareNativeClassConstructors_4231_4261" id="declareNativeClassConstructors_1893_1923" title="Defined at line 96">declareNativeClassConstructors</a>(<a href="#s_1411_1412" id="s_1924_1925" title="Defined at line 38">s</a>, <a href="#s_class_1445_1452" id="s_class_1927_1934" title="Defined at line 38">s_class</a>, <a href="#alias_1417_1422" id="alias_1936_1941" title="Defined at line 38">alias</a>, <a href="#elems_1433_1438" id="elems_1943_1948" title="Defined at line 38">elems</a>),
    <a href="#nativeClassElementsOk_2698_2719" id="nativeClassElementsOk_1955_1976" title="Defined at line 63">nativeClassElementsOk</a>(<a href="#s_1411_1412" id="s_1977_1978" title="Defined at line 38">s</a>, <a href="#s_class_1445_1452" id="s_class_1980_1987" title="Defined at line 38">s_class</a>, <a href="#elems_1433_1438" id="elems_1989_1994" title="Defined at line 38">elems</a>).

<span class="keyword">rules</span> <span class="layout">// native class extending</span>

  <a href="../webdsl.stx#defOk_15473_15478" id="defOk_2033_2038" title="Defined at ../webdsl.stx line 356">defOk</a>(<a href="#s_2138_2139" id="s_2039_2040" title="Referenced at line 51, 52, 53, 54, 55">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Native-sig.stx#ExtendNativeClass_709_726" id="ExtendNativeClass_2042_2059" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Native-sig.stx line 34">ExtendNativeClass</a>(<span id="c_2060_2061" title="Not referenced locally, nor via imports">c</span>, <a href="../../../src-gen/statix/signatures/WebDSL-Native-sig.stx#NCAlias_779_786" id="NCAlias_2063_2070" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Native-sig.stx line 35">NCAlias</a>(<a href="#alias_2141_2146" id="alias_2071_2076" title="Referenced at line 51, 51, 53, 54">alias</a>), <a href="#elems_2489_2494" id="elems_2079_2084" title="Referenced at line 55">elems</a>)) :- { <a href="#s_extend_class_2237_2251" id="s_extend_class_2092_2106" title="Referenced at line 52, 52, 53, 54, 55">s_extend_class</a> <span id="class_scopes_2107_2119" title="Not referenced locally, nor via imports">class_scopes</span> }
    <a href="../webdsl.stx#resolveType_3324_3335" id="resolveType_2126_2137" title="Defined at ../webdsl.stx line 105">resolveType</a>(<a href="#s_2039_2040" id="s_2138_2139" title="Defined at line 50">s</a>, <a href="#alias_2071_2076" id="alias_2141_2146" title="Defined at line 50">alias</a>) == [(_, (_, <a href="../webdsl-types.stx#NATIVECLASS_529_540" id="NATIVECLASS_2160_2171" title="Defined at ../webdsl-types.stx line 23">NATIVECLASS</a>(_, _)))] | <span class="keyword">error</span> $[Native class [<a href="#alias_2071_2076" id="alias_2205_2210" title="Defined at line 50">alias</a>] is not defined],
    <span class="keyword">new</span> <a href="#s_extend_class_2092_2106" id="s_extend_class_2237_2251" title="Defined at line 50">s_extend_class</a>, <a href="#s_extend_class_2092_2106" id="s_extend_class_2253_2267" title="Defined at line 50">s_extend_class</a> -<a href="../webdsl.stx#DEF_1498_1501" id="DEF_2269_2272" title="Defined at ../webdsl.stx line 49">DEF</a>-&gt; <a href="#s_2039_2040" id="s_2275_2276" title="Defined at line 50">s</a>,
    <a href="../webdsl.stx#declareExtendScope_4401_4419" id="declareExtendScope_2282_2300" title="Defined at ../webdsl.stx line 133">declareExtendScope</a>(<a href="#s_2039_2040" id="s_2301_2302" title="Defined at line 50">s</a>, <a href="#alias_2071_2076" id="alias_2304_2309" title="Defined at line 50">alias</a>, <a href="#s_extend_class_2092_2106" id="s_extend_class_2311_2325" title="Defined at line 50">s_extend_class</a>), <span class="layout">// declare entity_scope to be linked to entity_name</span>
    <a href="../webdsl-entities.stx#extendScopes_2356_2368" id="extendScopes_2384_2396" title="Defined at ../webdsl-entities.stx line 56">extendScopes</a>(<a href="../webdsl.stx#resolveExtendScope_4524_4542" id="resolveExtendScope_2397_2415" title="Defined at ../webdsl.stx line 137">resolveExtendScope</a>(<a href="#s_2039_2040" id="s_2416_2417" title="Defined at line 50">s</a>, <a href="#alias_2071_2076" id="alias_2419_2424" title="Defined at line 50">alias</a>), <a href="#s_extend_class_2092_2106" id="s_extend_class_2427_2441" title="Defined at line 50">s_extend_class</a>),
    <a href="#nativeClassElementsOk_2698_2719" id="nativeClassElementsOk_2448_2469" title="Defined at line 63">nativeClassElementsOk</a>(<a href="#s_2039_2040" id="s_2470_2471" title="Defined at line 50">s</a>, <a href="#s_extend_class_2092_2106" id="s_extend_class_2473_2487" title="Defined at line 50">s_extend_class</a>, <a href="#elems_2079_2084" id="elems_2489_2494" title="Defined at line 50">elems</a>).

  <a href="#nativeClassDeclaredB_2564_2584" id="nativeClassDeclaredB_2500_2520" title="Referenced at line 58, 59">nativeClassDeclaredB</a> : <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="../webdsl.stx#TYPE_669_673" id="TYPE_2546_2550" title="Defined at ../webdsl.stx line 29">TYPE</a>))) -&gt; <a href="../webdsl.stx#BOOL_697_701" id="BOOL_2557_2561" title="Defined at ../webdsl.stx line 30">BOOL</a>
  <a href="#nativeClassDeclaredB_2500_2520" id="nativeClassDeclaredB_2564_2584" title="Defined at line 57">nativeClassDeclaredB</a>(_) = <a href="../webdsl.stx#FALSE_844_849" id="FALSE_2590_2595" title="Defined at ../webdsl.stx line 35">FALSE</a>().
  <a href="#nativeClassDeclaredB_2500_2520" id="nativeClassDeclaredB_2601_2621" title="Defined at line 57">nativeClassDeclaredB</a>([(_, (_, <a href="../webdsl-types.stx#NATIVECLASS_529_540" id="NATIVECLASS_2631_2642" title="Defined at ../webdsl-types.stx line 23">NATIVECLASS</a>(_, _)))]) = <a href="../webdsl.stx#TRUE_828_832" id="TRUE_2655_2659" title="Defined at ../webdsl.stx line 34">TRUE</a>().

<span class="keyword">rules</span> <span class="layout">// native class elements</span>

  <a href="#nativeClassElementsOk_1955_1976" id="nativeClassElementsOk_2698_2719" title="Referenced at line 46, 55">nativeClassElementsOk</a> <span class="keyword">maps</span> <a href="#nativeClassElementOk_2763_2783" id="nativeClassElementOk_2725_2745" title="Defined at line 64">nativeClassElementOk</a>(*, *, <span class="keyword">list</span>(*))
  <a href="#nativeClassElementOk_2725_2745" id="nativeClassElementOk_2763_2783" title="Referenced at line 63, 67, 68, 70, 75, 78">nativeClassElementOk</a> : <span class="keyword">scope</span> * <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/WebDSL-Native-sig.stx#NCElement_154_163" id="NCElement_2802_2811" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Native-sig.stx line 12">NCElement</a>

  <span class="layout">// constructors are declared in their own rule declareNativeClassConstructors</span>
  <a href="#nativeClassElementOk_2763_2783" id="nativeClassElementOk_2895_2915" title="Defined at line 64">nativeClassElementOk</a>(_, _, <a href="../../../src-gen/statix/signatures/WebDSL-Native-sig.stx#NCConstructor_1399_1412" id="NCConstructor_2922_2935" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Native-sig.stx line 48">NCConstructor</a>(_)).
  <a href="#nativeClassElementOk_2763_2783" id="nativeClassElementOk_2943_2963" title="Defined at line 64">nativeClassElementOk</a>(_, _, <a href="../../../src-gen/statix/signatures/WebDSL-Native-sig.stx#NCConstructorFromStatic_1449_1472" id="NCConstructorFromStatic_2970_2993" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Native-sig.stx line 49">NCConstructorFromStatic</a>(_, _)).

  <a href="#nativeClassElementOk_2763_2783" id="nativeClassElementOk_3005_3025" title="Defined at line 64">nativeClassElementOk</a>(<a href="#s_3090_3091" id="s_3026_3027" title="Referenced at line 71">s</a>, <a href="#s_class_3113_3120" id="s_class_3029_3036" title="Referenced at line 72, 73">s_class</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Native-sig.stx#NCProperty_887_897" id="NCProperty_3038_3048" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Native-sig.stx line 39">NCProperty</a>(<a href="#x_3122_3123" id="x_3049_3050" title="Referenced at line 72, 73, 73, 73">x</a>, <a href="#nt_3093_3095" id="nt_3052_3054" title="Referenced at line 71">nt</a>)) :- {<a href="#t_3068_3069" id="t_3061_3062" title="Referenced at line 71, 72">t</a>}
    <a href="#t_3061_3062" id="t_3068_3069" title="Defined at line 70">t</a> == <a href="#typeOfNativeType_5358_5374" id="typeOfNativeType_3073_3089" title="Defined at line 118">typeOfNativeType</a>(<a href="#s_3026_3027" id="s_3090_3091" title="Defined at line 70">s</a>, <a href="#nt_3052_3054" id="nt_3093_3095" title="Defined at line 70">nt</a>),
    <a href="../webdsl.stx#declareVar_13281_13291" id="declareVar_3102_3112" title="Defined at ../webdsl.stx line 301">declareVar</a>(<a href="#s_class_3029_3036" id="s_class_3113_3120" title="Defined at line 70">s_class</a>, <a href="#x_3049_3050" id="x_3122_3123" title="Defined at line 70">x</a>, <a href="#t_3061_3062" id="t_3125_3126" title="Defined at line 70">t</a>),
    <a href="../webdsl-actions.stx#noDuplicateVarDefsInSuper_3785_3810" id="noDuplicateVarDefsInSuper_3133_3158" title="Defined at ../webdsl-actions.stx line 92">noDuplicateVarDefsInSuper</a>(<a href="#s_class_3029_3036" id="s_class_3159_3166" title="Defined at line 70">s_class</a>, <a href="#x_3049_3050" id="x_3168_3169" title="Defined at line 70">x</a>) | <span class="keyword">error</span> $[Cannot override existing property [<a href="#x_3049_3050" id="x_3216_3217" title="Defined at line 70">x</a>]] @<a href="#x_3049_3050" id="x_3221_3222" title="Defined at line 70">x</a>.

  <a href="#nativeClassElementOk_2763_2783" id="nativeClassElementOk_3227_3247" title="Defined at line 64">nativeClassElementOk</a>(<a href="#s_3318_3319" id="s_3248_3249" title="Referenced at line 76">s</a>, <a href="#s_class_3321_3328" id="s_class_3251_3258" title="Referenced at line 76">s_class</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Native-sig.stx#NCFunctionElement_933_950" id="NCFunctionElement_3260_3277" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Native-sig.stx line 40">NCFunctionElement</a>(<a href="#function_3330_3338" id="function_3278_3286" title="Referenced at line 76">function</a>)) :-
    <a href="#nativeClassFunctionOk_3529_3550" id="nativeClassFunctionOk_3296_3317" title="Defined at line 83">nativeClassFunctionOk</a>(<a href="#s_3248_3249" id="s_3318_3319" title="Defined at line 75">s</a>, <a href="#s_class_3251_3258" id="s_class_3321_3328" title="Defined at line 75">s_class</a>, <a href="#function_3278_3286" id="function_3330_3338" title="Defined at line 75">function</a>).

  <a href="#nativeClassElementOk_2763_2783" id="nativeClassElementOk_3344_3364" title="Defined at line 64">nativeClassElementOk</a>(<a href="#s_3470_3471" id="s_3365_3366" title="Referenced at line 79">s</a>, <a href="#s_class_3473_3480" id="s_class_3368_3375" title="Referenced at line 79">s_class</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Native-sig.stx#NCFunctionFromStaticElement_1331_1358" id="NCFunctionFromStaticElement_3377_3404" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Native-sig.stx line 47">NCFunctionFromStaticElement</a>(<a href="../../../src-gen/statix/signatures/WebDSL-Native-sig.stx#NCFunctionFromStatic_1263_1283" id="NCFunctionFromStatic_3405_3425" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Native-sig.stx line 46">NCFunctionFromStatic</a>(_, <a href="#function_3482_3490" id="function_3429_3437" title="Referenced at line 79">function</a>))) :-
    <a href="#nativeClassFunctionOk_3529_3550" id="nativeClassFunctionOk_3448_3469" title="Defined at line 83">nativeClassFunctionOk</a>(<a href="#s_3365_3366" id="s_3470_3471" title="Defined at line 78">s</a>, <a href="#s_class_3368_3375" id="s_class_3473_3480" title="Defined at line 78">s_class</a>, <a href="#function_3429_3437" id="function_3482_3490" title="Defined at line 78">function</a>).

<span class="keyword">rules</span> <span class="layout">// native class functions</span>

  <a href="#nativeClassFunctionOk_3296_3317" id="nativeClassFunctionOk_3529_3550" title="Referenced at line 76, 79, 84, 89; ../types/type-extensions.stx line 25, 28">nativeClassFunctionOk</a> : <span class="keyword">scope</span> * <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/WebDSL-Native-sig.stx#NCFunction_183_193" id="NCFunction_3569_3579" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Native-sig.stx line 14">NCFunction</a>
  <a href="#nativeClassFunctionOk_3529_3550" id="nativeClassFunctionOk_3582_3603" title="Defined at line 83">nativeClassFunctionOk</a>(<a href="#s_3745_3746" id="s_3604_3605" title="Referenced at line 85, 86">s</a>, <a href="#s_class_3828_3835" id="s_class_3607_3614" title="Referenced at line 87">s_class</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Native-sig.stx#NCFunction_981_991" id="NCFunction_3616_3626" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Native-sig.stx line 41">NCFunction</a>(<a href="../../../src-gen/statix/signatures/WebDSL-Native-sig.stx#NCFunctionStatic_1179_1195" id="NCFunctionStatic_3627_3643" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Native-sig.stx line 44">NCFunctionStatic</a>(), <a href="#f_3837_3838" id="f_3647_3648" title="Referenced at line 87">f</a>, <a href="#args_3748_3752" id="args_3650_3654" title="Referenced at line 85, 87">args</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Native-sig.stx#NCFunctionReturn_1081_1097" id="NCFunctionReturn_3656_3672" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Native-sig.stx line 42">NCFunctionReturn</a>(<a href="#return_3793_3799" id="return_3673_3679" title="Referenced at line 86">return</a>))) :- {<a href="#argTypes_3712_3720" id="argTypes_3687_3695" title="Referenced at line 85, 87">argTypes</a> <a href="#returnType_3759_3769" id="returnType_3696_3706" title="Referenced at line 86, 87">returnType</a>}
    <a href="#argTypes_3687_3695" id="argTypes_3712_3720" title="Defined at line 84">argTypes</a>   == <a href="#typesOfNativeTypes_5293_5311" id="typesOfNativeTypes_3726_3744" title="Defined at line 117">typesOfNativeTypes</a>(<a href="#s_3604_3605" id="s_3745_3746" title="Defined at line 84">s</a>, <a href="#args_3650_3654" id="args_3748_3752" title="Defined at line 84">args</a>),
    <a href="#returnType_3696_3706" id="returnType_3759_3769" title="Defined at line 84">returnType</a> == <a href="#typeOfNativeType_5358_5374" id="typeOfNativeType_3773_3789" title="Defined at line 118">typeOfNativeType</a>(<a href="#s_3604_3605" id="s_3790_3791" title="Defined at line 84">s</a>, <a href="#return_3673_3679" id="return_3793_3799" title="Defined at line 84">return</a>),
    <a href="../webdsl.stx#declareStaticFunction_8923_8944" id="declareStaticFunction_3806_3827" title="Defined at ../webdsl.stx line 220">declareStaticFunction</a>(<a href="#s_class_3607_3614" id="s_class_3828_3835" title="Defined at line 84">s_class</a>, <a href="#f_3647_3648" id="f_3837_3838" title="Defined at line 84">f</a>, <a href="../webdsl.stx#NATIVE_FUNCTION_ORIGIN_909_931" id="NATIVE_FUNCTION_ORIGIN_3840_3862" title="Defined at ../webdsl.stx line 38">NATIVE_FUNCTION_ORIGIN</a>(<a href="#args_3650_3654" id="args_3863_3867" title="Defined at line 84">args</a>), <a href="#argTypes_3687_3695" id="argTypes_3870_3878" title="Defined at line 84">argTypes</a>, <a href="#returnType_3696_3706" id="returnType_3880_3890" title="Defined at line 84">returnType</a>).

  <a href="#nativeClassFunctionOk_3529_3550" id="nativeClassFunctionOk_3896_3917" title="Defined at line 83">nativeClassFunctionOk</a>(<a href="#s_4063_4064" id="s_3918_3919" title="Referenced at line 90, 91">s</a>, <a href="#s_class_4140_4147" id="s_class_3921_3928" title="Referenced at line 92">s_class</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Native-sig.stx#NCFunction_981_991" id="NCFunction_3930_3940" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Native-sig.stx line 41">NCFunction</a>(<a href="../../../src-gen/statix/signatures/WebDSL-Native-sig.stx#NCFunctionStaticNone_1219_1239" id="NCFunctionStaticNone_3941_3961" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Native-sig.stx line 45">NCFunctionStaticNone</a>(), <a href="#f_4149_4150" id="f_3965_3966" title="Referenced at line 92">f</a>, <a href="#args_4066_4070" id="args_3968_3972" title="Referenced at line 90, 92">args</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Native-sig.stx#NCFunctionReturn_1081_1097" id="NCFunctionReturn_3974_3990" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Native-sig.stx line 42">NCFunctionReturn</a>(<a href="#return_4111_4117" id="return_3991_3997" title="Referenced at line 91">return</a>))) :- {<a href="#argTypes_4030_4038" id="argTypes_4005_4013" title="Referenced at line 90, 92">argTypes</a> <a href="#returnType_4077_4087" id="returnType_4014_4024" title="Referenced at line 91, 92">returnType</a>}
    <a href="#argTypes_4005_4013" id="argTypes_4030_4038" title="Defined at line 89">argTypes</a>   == <a href="#typesOfNativeTypes_5293_5311" id="typesOfNativeTypes_4044_4062" title="Defined at line 117">typesOfNativeTypes</a>(<a href="#s_3918_3919" id="s_4063_4064" title="Defined at line 89">s</a>, <a href="#args_3968_3972" id="args_4066_4070" title="Defined at line 89">args</a>),
    <a href="#returnType_4014_4024" id="returnType_4077_4087" title="Defined at line 89">returnType</a> == <a href="#typeOfNativeType_5358_5374" id="typeOfNativeType_4091_4107" title="Defined at line 118">typeOfNativeType</a>(<a href="#s_3918_3919" id="s_4108_4109" title="Defined at line 89">s</a>, <a href="#return_3991_3997" id="return_4111_4117" title="Defined at line 89">return</a>),
    <a href="../webdsl.stx#declareFunction_8746_8761" id="declareFunction_4124_4139" title="Defined at ../webdsl.stx line 217">declareFunction</a>(<a href="#s_class_3921_3928" id="s_class_4140_4147" title="Defined at line 89">s_class</a>, <a href="#f_3965_3966" id="f_4149_4150" title="Defined at line 89">f</a>, <a href="../webdsl.stx#NATIVE_FUNCTION_ORIGIN_909_931" id="NATIVE_FUNCTION_ORIGIN_4152_4174" title="Defined at ../webdsl.stx line 38">NATIVE_FUNCTION_ORIGIN</a>(<a href="#args_3968_3972" id="args_4175_4179" title="Defined at line 89">args</a>), <a href="#argTypes_4005_4013" id="argTypes_4182_4190" title="Defined at line 89">argTypes</a>, <a href="#returnType_4014_4024" id="returnType_4192_4202" title="Defined at line 89">returnType</a>).

<span class="keyword">rules</span> <span class="layout">// constructors</span>

  <a href="#declareNativeClassConstructors_1893_1923" id="declareNativeClassConstructors_4231_4261" title="Referenced at line 45">declareNativeClassConstructors</a> <span class="keyword">maps</span> <a href="#declareNativeClassConstructor_4317_4346" id="declareNativeClassConstructor_4267_4296" title="Defined at line 97">declareNativeClassConstructor</a>(*, *, *, <span class="keyword">list</span>(*))
  <a href="#declareNativeClassConstructor_4267_4296" id="declareNativeClassConstructor_4317_4346" title="Referenced at line 96, 98, 99, 103">declareNativeClassConstructor</a> : <span class="keyword">scope</span> * <span class="keyword">scope</span> * <span class="keyword">string</span> * <a href="../../../src-gen/statix/signatures/WebDSL-Native-sig.stx#NCElement_154_163" id="NCElement_4374_4383" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Native-sig.stx line 12">NCElement</a>
  <a href="#declareNativeClassConstructor_4317_4346" id="declareNativeClassConstructor_4386_4415" title="Defined at line 97">declareNativeClassConstructor</a>(_, _, _, _).
  <a href="#declareNativeClassConstructor_4317_4346" id="declareNativeClassConstructor_4431_4460" title="Defined at line 97">declareNativeClassConstructor</a>(<a href="#s_4549_4550" id="s_4461_4462" title="Referenced at line 100, 101">s</a>, <a href="#s_class_4649_4656" id="s_class_4464_4471" title="Referenced at line 101">s_class</a>, <a href="#name_4585_4589" id="name_4473_4477" title="Referenced at line 101, 101">name</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Native-sig.stx#NCConstructor_1399_1412" id="NCConstructor_4479_4492" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Native-sig.stx line 48">NCConstructor</a>(<a href="#args_4552_4556" id="args_4493_4497" title="Referenced at line 100, 101">args</a>)) :- {<a href="#argTypes_4518_4526" id="argTypes_4504_4512" title="Referenced at line 100, 101">argTypes</a>}
    <a href="#argTypes_4504_4512" id="argTypes_4518_4526" title="Defined at line 99">argTypes</a> == <a href="#typesOfNativeTypes_5293_5311" id="typesOfNativeTypes_4530_4548" title="Defined at line 117">typesOfNativeTypes</a>(<a href="#s_4461_4462" id="s_4549_4550" title="Defined at line 99">s</a>, <a href="#args_4493_4497" id="args_4552_4556" title="Defined at line 99">args</a>),
    <a href="../actions/functions.stx#declFunctionGlobal_6066_6084" id="declFunctionGlobal_4563_4581" title="Defined at ../actions/functions.stx line 128">declFunctionGlobal</a>(<a href="#s_4461_4462" id="s_4582_4583" title="Defined at line 99">s</a>, <a href="#name_4473_4477" id="name_4585_4589" title="Defined at line 99">name</a>, <a href="../webdsl.stx#NATIVE_FUNCTION_ORIGIN_909_931" id="NATIVE_FUNCTION_ORIGIN_4591_4613" title="Defined at ../webdsl.stx line 38">NATIVE_FUNCTION_ORIGIN</a>(<a href="#args_4493_4497" id="args_4614_4618" title="Defined at line 99">args</a>), <a href="#argTypes_4504_4512" id="argTypes_4621_4629" title="Defined at line 99">argTypes</a>, <a href="../webdsl-types.stx#NATIVECLASS_529_540" id="NATIVECLASS_4631_4642" title="Defined at ../webdsl-types.stx line 23">NATIVECLASS</a>(<a href="#name_4473_4477" id="name_4643_4647" title="Defined at line 99">name</a>, <a href="#s_class_4464_4471" id="s_class_4649_4656" title="Defined at line 99">s_class</a>)).

  <a href="#declareNativeClassConstructor_4317_4346" id="declareNativeClassConstructor_4663_4692" title="Defined at line 97">declareNativeClassConstructor</a>(<a href="#s_4794_4795" id="s_4693_4694" title="Referenced at line 104, 105">s</a>, <a href="#s_class_4894_4901" id="s_class_4696_4703" title="Referenced at line 105">s_class</a>, <a href="#name_4830_4834" id="name_4705_4709" title="Referenced at line 105, 105">name</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Native-sig.stx#NCConstructorFromStatic_1449_1472" id="NCConstructorFromStatic_4711_4734" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Native-sig.stx line 49">NCConstructorFromStatic</a>(_, <a href="#args_4797_4801" id="args_4738_4742" title="Referenced at line 104, 105">args</a>)) :- {<a href="#argTypes_4763_4771" id="argTypes_4749_4757" title="Referenced at line 104, 105">argTypes</a>}
    <a href="#argTypes_4749_4757" id="argTypes_4763_4771" title="Defined at line 103">argTypes</a> == <a href="#typesOfNativeTypes_5293_5311" id="typesOfNativeTypes_4775_4793" title="Defined at line 117">typesOfNativeTypes</a>(<a href="#s_4693_4694" id="s_4794_4795" title="Defined at line 103">s</a>, <a href="#args_4738_4742" id="args_4797_4801" title="Defined at line 103">args</a>),
    <a href="../actions/functions.stx#declFunctionGlobal_6066_6084" id="declFunctionGlobal_4808_4826" title="Defined at ../actions/functions.stx line 128">declFunctionGlobal</a>(<a href="#s_4693_4694" id="s_4827_4828" title="Defined at line 103">s</a>, <a href="#name_4705_4709" id="name_4830_4834" title="Defined at line 103">name</a>, <a href="../webdsl.stx#NATIVE_FUNCTION_ORIGIN_909_931" id="NATIVE_FUNCTION_ORIGIN_4836_4858" title="Defined at ../webdsl.stx line 38">NATIVE_FUNCTION_ORIGIN</a>(<a href="#args_4738_4742" id="args_4859_4863" title="Defined at line 103">args</a>), <a href="#argTypes_4749_4757" id="argTypes_4866_4874" title="Defined at line 103">argTypes</a>, <a href="../webdsl-types.stx#NATIVECLASS_529_540" id="NATIVECLASS_4876_4887" title="Defined at ../webdsl-types.stx line 23">NATIVECLASS</a>(<a href="#name_4705_4709" id="name_4888_4892" title="Defined at line 103">name</a>, <a href="#s_class_4696_4703" id="s_class_4894_4901" title="Defined at line 103">s_class</a>)).

<span class="keyword">rules</span> <span class="layout">// typing of expressions</span>

  <a href="../actions/functions.stx#typeOfCall_1322_1332" id="typeOfCall_4940_4950" title="Defined at ../actions/functions.stx line 41">typeOfCall</a>(s, <a href="../webdsl-types.stx#NATIVECLASS_529_540" id="NATIVECLASS_4954_4965" title="Defined at ../webdsl-types.stx line 23">NATIVECLASS</a>(_, <a href="#s_class_5078_5085" id="s_class_4969_4976" title="Referenced at line 110">s_class</a>), <a href="#f_5087_5088" id="f_4979_4980" title="Referenced at line 110">f</a>, args) = <a href="../actions/functions.stx#typeOfFunctionCallInternal_1877_1903" id="typeOfFunctionCallInternal_4990_5016" title="Defined at ../actions/functions.stx line 51">typeOfFunctionCallInternal</a>(<span id="s_5017_5018" title="Not referenced locally, nor via imports">s</span>, f, <span id="args_5023_5027" title="Not referenced locally, nor via imports">args</span>, <a href="#funSigs_5045_5052" id="funSigs_5029_5036" title="Referenced at line 110">funSigs</a>) :-
    <a href="#funSigs_5029_5036" id="funSigs_5045_5052" title="Defined at line 109">funSigs</a> == <a href="../webdsl.stx#resolveEntityFunction_9696_9717" id="resolveEntityFunction_5056_5077" title="Defined at ../webdsl.stx line 234">resolveEntityFunction</a>(<a href="#s_class_4969_4976" id="s_class_5078_5085" title="Defined at line 109">s_class</a>, <a href="#f_4979_4980" id="f_5087_5088" title="Defined at line 109">f</a>).

  <a href="../actions/functions.stx#typeOfCall_1322_1332" id="typeOfCall_5094_5104" title="Defined at ../actions/functions.stx line 41">typeOfCall</a>(s, <a href="../webdsl-types.stx#STATICNATIVECLASS_576_593" id="STATICNATIVECLASS_5108_5125" title="Defined at ../webdsl-types.stx line 24">STATICNATIVECLASS</a>(_, <a href="#s_class_5244_5251" id="s_class_5129_5136" title="Referenced at line 113">s_class</a>), f, <span id="args_5142_5146" title="Not referenced locally, nor via imports">args</span>) = <a href="../actions/functions.stx#typeOfFunctionCallInternal_1877_1903" id="typeOfFunctionCallInternal_5150_5176" title="Defined at ../actions/functions.stx line 51">typeOfFunctionCallInternal</a>(<span id="s_5177_5178" title="Not referenced locally, nor via imports">s</span>, <a href="#f_5253_5254" id="f_5180_5181" title="Referenced at line 113">f</a>, args, <a href="#funSigs_5205_5212" id="funSigs_5189_5196" title="Referenced at line 113">funSigs</a>) :-
    <a href="#funSigs_5189_5196" id="funSigs_5205_5212" title="Defined at line 112">funSigs</a> == <a href="../webdsl.stx#resolveStaticEntityFunction_10356_10383" id="resolveStaticEntityFunction_5216_5243" title="Defined at ../webdsl.stx line 245">resolveStaticEntityFunction</a>(<a href="#s_class_5129_5136" id="s_class_5244_5251" title="Defined at line 112">s_class</a>, <a href="#f_5180_5181" id="f_5253_5254" title="Defined at line 112">f</a>).

<span class="keyword">rules</span> <span class="layout">// typing of native types</span>

  <a href="#typesOfNativeTypes_3726_3744" id="typesOfNativeTypes_5293_5311" title="Referenced at line 85, 90, 100, 104">typesOfNativeTypes</a> <span class="keyword">maps</span> <a href="#typeOfNativeType_5358_5374" id="typeOfNativeType_5317_5333" title="Defined at line 118">typeOfNativeType</a>(*, <span class="keyword">list</span>(*)) = <span class="keyword">list</span>(*)
  <a href="#typeOfNativeType_3073_3089" id="typeOfNativeType_5358_5374" title="Referenced at line 71, 86, 91, 117, 119, 120, 120, 121, 121, 122">typeOfNativeType</a> : <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/WebDSL-Native-sig.stx#NativeType_168_178" id="NativeType_5385_5395" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Native-sig.stx line 13">NativeType</a> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_5399_5403" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#typeOfNativeType_5358_5374" id="typeOfNativeType_5406_5422" title="Defined at line 118">typeOfNativeType</a>(s, <a href="../../../src-gen/statix/signatures/WebDSL-Native-sig.stx#NativeSimpleType_1692_1708" id="NativeSimpleType_5426_5442" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Native-sig.stx line 53">NativeSimpleType</a>(t)) = <a href="../webdsl-types.stx#typeOfSort_5551_5561" id="typeOfSort_5449_5459" title="Defined at ../webdsl-types.stx line 160">typeOfSort</a>(<span id="s_5460_5461" title="Not referenced locally, nor via imports">s</span>, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#SimpleSort_859_869" id="SimpleSort_5463_5473" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 43">SimpleSort</a>(<span id="t_5474_5475" title="Not referenced locally, nor via imports">t</span>)).
  <a href="#typeOfNativeType_5358_5374" id="typeOfNativeType_5481_5497" title="Defined at line 118">typeOfNativeType</a>(s, <a href="../../../src-gen/statix/signatures/WebDSL-Native-sig.stx#NativeGenericType_1515_1532" id="NativeGenericType_5501_5518" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Native-sig.stx line 50">NativeGenericType</a>("List", [<span id="t_5528_5529" title="Not referenced locally, nor via imports">t</span>])) =  <a href="../webdsl-types.stx#LIST_891_895" id="LIST_5536_5540" title="Defined at ../webdsl-types.stx line 35">LIST</a>(<a href="#typeOfNativeType_5358_5374" id="typeOfNativeType_5541_5557" title="Defined at line 118">typeOfNativeType</a>(<span id="s_5558_5559" title="Not referenced locally, nor via imports">s</span>, t)).
  <a href="#typeOfNativeType_5358_5374" id="typeOfNativeType_5568_5584" title="Defined at line 118">typeOfNativeType</a>(<span id="s_5585_5586" title="Not referenced locally, nor via imports">s</span>, <a href="../../../src-gen/statix/signatures/WebDSL-Native-sig.stx#NativeGenericType_1515_1532" id="NativeGenericType_5588_5605" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Native-sig.stx line 50">NativeGenericType</a>("Set", [t])) = <a href="../webdsl-types.stx#SET_915_918" id="SET_5621_5624" title="Defined at ../webdsl-types.stx line 36">SET</a>(<a href="#typeOfNativeType_5358_5374" id="typeOfNativeType_5625_5641" title="Defined at line 118">typeOfNativeType</a>(s, <span id="t_5645_5646" title="Not referenced locally, nor via imports">t</span>)).
  <a href="#typeOfNativeType_5358_5374" id="typeOfNativeType_5652_5668" title="Defined at line 118">typeOfNativeType</a>(<span id="s_5669_5670" title="Not referenced locally, nor via imports">s</span>, <a href="#t_5790_5791" id="t_5672_5673" title="Referenced at line 122">t</a>@<a href="../../../src-gen/statix/signatures/WebDSL-Native-sig.stx#NativeGenericType_1515_1532" id="NativeGenericType_5674_5691" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Native-sig.stx line 50">NativeGenericType</a>(_, _)) = <a href="../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_5701_5708" title="Defined at ../webdsl-types.stx line 49">UNTYPED</a>() :- <span class="keyword">false</span> | <span class="keyword">error</span> $[Only lists and sets with one type parameter are supported] @<a href="#t_5672_5673" id="t_5790_5791" title="Defined at line 122">t</a>.

</code></pre></td></tr></tbody></table></div>