---
title: built-ins.stx
hide:
  - toc
---

# `built-ins.stx`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/actions/built-ins.stx]

[pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/actions/built-ins.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/trans/static-semantics/actions/built-ins.stx "The source file on GitHub"

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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../../webdsl-actions.stx#static-semantics/actions/built-ins_84_118" id="static-semantics/actions/built-ins_7_41" title="Referenced at ../../webdsl-actions.stx line 5; ../../webdsl.stx line 6">static-semantics/actions/built-ins</a>

<span class="keyword">imports</span>
  <a href="../../types/built-ins.stx#static-semantics/types/built-ins_7_39" id="static-semantics/types/built-ins_53_85" title="Defined at ../../types/built-ins.stx line 1">static-semantics/types/built-ins</a>
  <a href="../../webdsl-built-ins.stx#static-semantics/webdsl-built-ins_7_40" id="static-semantics/webdsl-built-ins_88_121" title="Defined at ../../webdsl-built-ins.stx line 1">static-semantics/webdsl-built-ins</a>
  <a href="../../webdsl-types.stx#static-semantics/webdsl-types_7_36" id="static-semantics/webdsl-types_124_153" title="Defined at ../../webdsl-types.stx line 1">static-semantics/webdsl-types</a>
  <a href="../../webdsl.stx#static-semantics/webdsl_7_30" id="static-semantics/webdsl_156_179" title="Defined at ../../webdsl.stx line 1">static-semantics/webdsl</a>

<span class="keyword">rules</span>

  <a href="#declareFunctionIns_219_237" id="declareFunctionIns_190_208" title="Referenced at line 12; ../../webdsl.stx line 378">declareFunctionIns</a> : <span class="keyword">scope</span>
  <a href="#declareFunctionIns_190_208" id="declareFunctionIns_219_237" title="Defined at line 11">declareFunctionIns</a>(<a href="#s_343_344" id="s_238_239" title="Referenced at line 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 40, 42, 42, 44, 45, 46, 48, 50, 51, 52, 53, 55, 56, 57, 59, 60, 62, 63, 64, 65, 66, 67, 69">s</a>) :- { <a href="#datetime_321_329" id="datetime_246_254" title="Referenced at line 13, 26, 32, 33">datetime</a> <a href="#date_351_355" id="date_255_259" title="Referenced at line 14, 27, 28, 29">date</a> <a href="#string_377_383" id="string_260_266" title="Referenced at line 15, 28, 28, 29, 30, 30, 31, 32, 32, 33, 37, 40, 48, 48, 50, 51, 51, 52, 52, 53, 55, 55, 56, 56, 56, 59, 63, 65, 67, 69">string</a> <a href="#time_405_409" id="time_267_271" title="Referenced at line 16, 30, 31">time</a> <a href="#int_431_434" id="int_272_275" title="Referenced at line 17, 34, 34, 34, 35, 35">int</a> <a href="#float_456_461" id="float_276_281" title="Referenced at line 18, 36">float</a> <a href="#uuid_483_487" id="uuid_282_286" title="Referenced at line 19, 39, 40, 69">uuid</a> <a href="#void_509_513" id="void_287_291" title="Referenced at line 20, 44, 45, 46, 59, 60, 62, 63, 64, 65, 66, 67">void</a> <a href="#bool_534_538" id="bool_292_296" title="Referenced at line 21, 57, 62, 63">bool</a> <a href="#object_560_566" id="object_297_303" title="Referenced at line 22, 60, 64, 64, 65, 65, 66, 66, 67, 67">object</a> <a href="#url_588_591" id="url_304_307" title="Referenced at line 23, 37">url</a> <a href="#entity_613_619" id="entity_308_314" title="Referenced at line 24, 69">entity</a> }
    <a href="#datetime_246_254" id="datetime_321_329" title="Defined at line 12">datetime</a>  == <a href="../../types/built-ins.stx#datetime_2498_2506" id="datetime_334_342" title="Defined at ../../types/built-ins.stx line 67">datetime</a>(<a href="#s_238_239" id="s_343_344" title="Defined at line 12">s</a>),
    <a href="#date_255_259" id="date_351_355" title="Defined at line 12">date</a>      == <a href="../../types/built-ins.stx#date_2431_2435" id="date_364_368" title="Defined at ../../types/built-ins.stx line 65">date</a>(<a href="#s_238_239" id="s_369_370" title="Defined at line 12">s</a>),
    <a href="#string_260_266" id="string_377_383" title="Defined at line 12">string</a>    == <a href="../../types/built-ins.stx#string_1822_1828" id="string_390_396" title="Defined at ../../types/built-ins.stx line 48">string</a>(<a href="#s_238_239" id="s_397_398" title="Defined at line 12">s</a>),
    <a href="#time_267_271" id="time_405_409" title="Defined at line 12">time</a>      == <a href="../../types/built-ins.stx#time_2569_2573" id="time_418_422" title="Defined at ../../types/built-ins.stx line 69">time</a>(<a href="#s_238_239" id="s_423_424" title="Defined at line 12">s</a>),
    <a href="#int_272_275" id="int_431_434" title="Defined at line 12">int</a>       == <a href="../../types/built-ins.stx#int_1638_1641" id="int_444_447" title="Defined at ../../types/built-ins.stx line 41">int</a>(<a href="#s_238_239" id="s_448_449" title="Defined at line 12">s</a>),
    <a href="#float_276_281" id="float_456_461" title="Defined at line 12">float</a>     == <a href="../../types/built-ins.stx#float_1698_1703" id="float_469_474" title="Defined at ../../types/built-ins.stx line 43">float</a>(<a href="#s_238_239" id="s_475_476" title="Defined at line 12">s</a>),
    <a href="#uuid_282_286" id="uuid_483_487" title="Defined at line 12">uuid</a>      == <a href="../../types/built-ins.stx#uuid_2698_2702" id="uuid_496_500" title="Defined at ../../types/built-ins.stx line 74">uuid</a>(<a href="#s_238_239" id="s_501_502" title="Defined at line 12">s</a>),
    <a href="#void_287_291" id="void_509_513" title="Defined at line 12">void</a>      == <a href="../../webdsl-types.stx#VOID_1167_1171" id="VOID_522_526" title="Defined at ../../webdsl-types.stx line 46">VOID</a>(),
    <a href="#bool_292_296" id="bool_534_538" title="Defined at line 12">bool</a>      == <a href="../../types/built-ins.stx#bool_2637_2641" id="bool_547_551" title="Defined at ../../types/built-ins.stx line 72">bool</a>(<a href="#s_238_239" id="s_552_553" title="Defined at line 12">s</a>),
    <a href="#object_297_303" id="object_560_566" title="Defined at line 12">object</a>    == <a href="../../types/built-ins.stx#object_2954_2960" id="object_573_579" title="Defined at ../../types/built-ins.stx line 84">object</a>(<a href="#s_238_239" id="s_580_581" title="Defined at line 12">s</a>),
    <a href="#url_304_307" id="url_588_591" title="Defined at line 12">url</a>       == <a href="../../types/built-ins.stx#url_2049_2052" id="url_601_604" title="Defined at ../../types/built-ins.stx line 54">url</a>(<a href="#s_238_239" id="s_605_606" title="Defined at line 12">s</a>),
    <a href="#entity_308_314" id="entity_613_619" title="Defined at line 12">entity</a>    == <a href="../../types/built-ins.stx#entity_2883_2889" id="entity_626_632" title="Defined at ../../types/built-ins.stx line 81">entity</a>(<a href="#s_238_239" id="s_633_634" title="Defined at line 12">s</a>),

    <a href="../../webdsl-built-ins.stx#declareBuiltInFunction_124_146" id="declareBuiltInFunction_642_664" title="Defined at ../../webdsl-built-ins.stx line 10">declareBuiltInFunction</a>(<a href="#s_238_239" id="s_665_666" title="Defined at line 12">s</a>, "now"     , []               , <a href="#datetime_246_254" id="datetime_699_707" title="Defined at line 12">datetime</a>),
    <a href="../../webdsl-built-ins.stx#declareBuiltInFunction_124_146" id="declareBuiltInFunction_714_736" title="Defined at ../../webdsl-built-ins.stx line 10">declareBuiltInFunction</a>(<a href="#s_238_239" id="s_737_738" title="Defined at line 12">s</a>, "today"   , []               , <a href="#date_255_259" id="date_771_775" title="Defined at line 12">date</a>),
    <a href="../../webdsl-built-ins.stx#declareBuiltInFunction_124_146" id="declareBuiltInFunction_782_804" title="Defined at ../../webdsl-built-ins.stx line 10">declareBuiltInFunction</a>(<a href="#s_238_239" id="s_805_806" title="Defined at line 12">s</a>, "Date"    , [<a href="#string_260_266" id="string_821_827" title="Defined at line 12">string</a>, <a href="#string_260_266" id="string_829_835" title="Defined at line 12">string</a>] , <a href="#date_255_259" id="date_839_843" title="Defined at line 12">date</a>),
    <a href="../../webdsl-built-ins.stx#declareBuiltInFunction_124_146" id="declareBuiltInFunction_850_872" title="Defined at ../../webdsl-built-ins.stx line 10">declareBuiltInFunction</a>(<a href="#s_238_239" id="s_873_874" title="Defined at line 12">s</a>, "Date"    , [<a href="#string_260_266" id="string_889_895" title="Defined at line 12">string</a>]         , <a href="#date_255_259" id="date_907_911" title="Defined at line 12">date</a>),
    <a href="../../webdsl-built-ins.stx#declareBuiltInFunction_124_146" id="declareBuiltInFunction_918_940" title="Defined at ../../webdsl-built-ins.stx line 10">declareBuiltInFunction</a>(<a href="#s_238_239" id="s_941_942" title="Defined at line 12">s</a>, "Time"    , [<a href="#string_260_266" id="string_957_963" title="Defined at line 12">string</a>, <a href="#string_260_266" id="string_965_971" title="Defined at line 12">string</a>] , <a href="#time_267_271" id="time_975_979" title="Defined at line 12">time</a>),
    <a href="../../webdsl-built-ins.stx#declareBuiltInFunction_124_146" id="declareBuiltInFunction_986_1008" title="Defined at ../../webdsl-built-ins.stx line 10">declareBuiltInFunction</a>(<a href="#s_238_239" id="s_1009_1010" title="Defined at line 12">s</a>, "Time"    , [<a href="#string_260_266" id="string_1025_1031" title="Defined at line 12">string</a>]         , <a href="#time_267_271" id="time_1043_1047" title="Defined at line 12">time</a>),
    <a href="../../webdsl-built-ins.stx#declareBuiltInFunction_124_146" id="declareBuiltInFunction_1054_1076" title="Defined at ../../webdsl-built-ins.stx line 10">declareBuiltInFunction</a>(<a href="#s_238_239" id="s_1077_1078" title="Defined at line 12">s</a>, "DateTime", [<a href="#string_260_266" id="string_1093_1099" title="Defined at line 12">string</a>, <a href="#string_260_266" id="string_1101_1107" title="Defined at line 12">string</a>] , <a href="#datetime_246_254" id="datetime_1111_1119" title="Defined at line 12">datetime</a>),
    <a href="../../webdsl-built-ins.stx#declareBuiltInFunction_124_146" id="declareBuiltInFunction_1126_1148" title="Defined at ../../webdsl-built-ins.stx line 10">declareBuiltInFunction</a>(<a href="#s_238_239" id="s_1149_1150" title="Defined at line 12">s</a>, "DateTime", [<a href="#string_260_266" id="string_1165_1171" title="Defined at line 12">string</a>]         , <a href="#datetime_246_254" id="datetime_1183_1191" title="Defined at line 12">datetime</a>),
    <a href="../../webdsl-built-ins.stx#declareBuiltInFunction_124_146" id="declareBuiltInFunction_1198_1220" title="Defined at ../../webdsl-built-ins.stx line 10">declareBuiltInFunction</a>(<a href="#s_238_239" id="s_1221_1222" title="Defined at line 12">s</a>, "random"  , [<a href="#int_272_275" id="int_1237_1240" title="Defined at line 12">int</a>, <a href="#int_272_275" id="int_1242_1245" title="Defined at line 12">int</a>]       , <a href="#int_272_275" id="int_1255_1258" title="Defined at line 12">int</a>),
    <a href="../../webdsl-built-ins.stx#declareBuiltInFunction_124_146" id="declareBuiltInFunction_1265_1287" title="Defined at ../../webdsl-built-ins.stx line 10">declareBuiltInFunction</a>(<a href="#s_238_239" id="s_1288_1289" title="Defined at line 12">s</a>, "random"  , [<a href="#int_272_275" id="int_1304_1307" title="Defined at line 12">int</a>]            , <a href="#int_272_275" id="int_1322_1325" title="Defined at line 12">int</a>),
    <a href="../../webdsl-built-ins.stx#declareBuiltInFunction_124_146" id="declareBuiltInFunction_1332_1354" title="Defined at ../../webdsl-built-ins.stx line 10">declareBuiltInFunction</a>(<a href="#s_238_239" id="s_1355_1356" title="Defined at line 12">s</a>, "random"  , []               , <a href="#float_276_281" id="float_1389_1394" title="Defined at line 12">float</a>),
    <a href="../../webdsl-built-ins.stx#declareBuiltInFunction_124_146" id="declareBuiltInFunction_1401_1423" title="Defined at ../../webdsl-built-ins.stx line 10">declareBuiltInFunction</a>(<a href="#s_238_239" id="s_1424_1425" title="Defined at line 12">s</a>, "url"     , [<a href="#string_260_266" id="string_1440_1446" title="Defined at line 12">string</a>]         , <a href="#url_304_307" id="url_1458_1461" title="Defined at line 12">url</a>),

    <a href="../../webdsl-built-ins.stx#declareBuiltInFunction_124_146" id="declareBuiltInFunction_1469_1491" title="Defined at ../../webdsl-built-ins.stx line 10">declareBuiltInFunction</a>(<a href="#s_238_239" id="s_1492_1493" title="Defined at line 12">s</a>, "randomUUID"     , []      , <a href="#uuid_282_286" id="uuid_1524_1528" title="Defined at line 12">uuid</a>),
    <a href="../../webdsl-built-ins.stx#declareBuiltInFunction_124_146" id="declareBuiltInFunction_1535_1557" title="Defined at ../../webdsl-built-ins.stx line 10">declareBuiltInFunction</a>(<a href="#s_238_239" id="s_1558_1559" title="Defined at line 12">s</a>, "UUIDFromString" , [<a href="#string_260_266" id="string_1581_1587" title="Defined at line 12">string</a>], <a href="#uuid_282_286" id="uuid_1590_1594" title="Defined at line 12">uuid</a>),

    <a href="../../webdsl-built-ins.stx#declareBuiltInFunction_124_146" id="declareBuiltInFunction_1602_1624" title="Defined at ../../webdsl-built-ins.stx line 10">declareBuiltInFunction</a>(<a href="#s_238_239" id="s_1625_1626" title="Defined at line 12">s</a>, "getSessionManager", [], <a href="../../webdsl-types.stx#definedTypeNoRef_8308_8324" id="definedTypeNoRef_1653_1669" title="Defined at ../../webdsl-types.stx line 228">definedTypeNoRef</a>(<a href="#s_238_239" id="s_1670_1671" title="Defined at line 12">s</a>, "SessionManager")),

    <a href="../../webdsl-built-ins.stx#declareBuiltInFunction_124_146" id="declareBuiltInFunction_1698_1720" title="Defined at ../../webdsl-built-ins.stx line 10">declareBuiltInFunction</a>(<a href="#s_238_239" id="s_1721_1722" title="Defined at line 12">s</a>, "cancel"  , [], <a href="#void_287_291" id="void_1740_1744" title="Defined at line 12">void</a>),
    <a href="../../webdsl-built-ins.stx#declareBuiltInFunction_124_146" id="declareBuiltInFunction_1751_1773" title="Defined at ../../webdsl-built-ins.stx line 10">declareBuiltInFunction</a>(<a href="#s_238_239" id="s_1774_1775" title="Defined at line 12">s</a>, "rollback", [], <a href="#void_287_291" id="void_1793_1797" title="Defined at line 12">void</a>),
    <a href="../../webdsl-built-ins.stx#declareBuiltInFunction_124_146" id="declareBuiltInFunction_1804_1826" title="Defined at ../../webdsl-built-ins.stx line 10">declareBuiltInFunction</a>(<a href="#s_238_239" id="s_1827_1828" title="Defined at line 12">s</a>, "flush"   , [], <a href="#void_287_291" id="void_1846_1850" title="Defined at line 12">void</a>),

    <a href="../../webdsl-built-ins.stx#declareBuiltInFunction_124_146" id="declareBuiltInFunction_1858_1880" title="Defined at ../../webdsl-built-ins.stx line 10">declareBuiltInFunction</a>(<a href="#s_238_239" id="s_1881_1882" title="Defined at line 12">s</a>, "getValidationErrorsByName", [<a href="#string_260_266" id="string_1914_1920" title="Defined at line 12">string</a>], <a href="../../webdsl-types.stx#LIST_891_895" id="LIST_1923_1927" title="Defined at ../../webdsl-types.stx line 35">LIST</a>(<a href="#string_260_266" id="string_1928_1934" title="Defined at line 12">string</a>)),

    <a href="../../webdsl-built-ins.stx#declareBuiltInFunction_124_146" id="declareBuiltInFunction_1943_1965" title="Defined at ../../webdsl-built-ins.stx line 10">declareBuiltInFunction</a>(<a href="#s_238_239" id="s_1966_1967" title="Defined at line 12">s</a>, "getHttpMethod"          , []      , <a href="#string_260_266" id="string_2006_2012" title="Defined at line 12">string</a>),
    <a href="../../webdsl-built-ins.stx#declareBuiltInFunction_124_146" id="declareBuiltInFunction_2019_2041" title="Defined at ../../webdsl-built-ins.stx line 10">declareBuiltInFunction</a>(<a href="#s_238_239" id="s_2042_2043" title="Defined at line 12">s</a>, "getRequestParameter"    , [<a href="#string_260_266" id="string_2073_2079" title="Defined at line 12">string</a>], <a href="#string_260_266" id="string_2082_2088" title="Defined at line 12">string</a>),
    <a href="../../webdsl-built-ins.stx#declareBuiltInFunction_124_146" id="declareBuiltInFunction_2095_2117" title="Defined at ../../webdsl-built-ins.stx line 10">declareBuiltInFunction</a>(<a href="#s_238_239" id="s_2118_2119" title="Defined at line 12">s</a>, "getRequestParameterList", [<a href="#string_260_266" id="string_2149_2155" title="Defined at line 12">string</a>], <a href="../../webdsl-types.stx#LIST_891_895" id="LIST_2158_2162" title="Defined at ../../webdsl-types.stx line 35">LIST</a>(<a href="#string_260_266" id="string_2163_2169" title="Defined at line 12">string</a>)),
    <a href="../../webdsl-built-ins.stx#declareBuiltInFunction_124_146" id="declareBuiltInFunction_2177_2199" title="Defined at ../../webdsl-built-ins.stx line 10">declareBuiltInFunction</a>(<a href="#s_238_239" id="s_2200_2201" title="Defined at line 12">s</a>, "readRequestBody"        , []      , <a href="#string_260_266" id="string_2240_2246" title="Defined at line 12">string</a>),

    <a href="../../webdsl-built-ins.stx#declareBuiltInFunction_124_146" id="declareBuiltInFunction_2254_2276" title="Defined at ../../webdsl-built-ins.stx line 10">declareBuiltInFunction</a>(<a href="#s_238_239" id="s_2277_2278" title="Defined at line 12">s</a>, "attribute"          , [<a href="#string_260_266" id="string_2304_2310" title="Defined at line 12">string</a>]        , <a href="#string_260_266" id="string_2321_2327" title="Defined at line 12">string</a>),
    <a href="../../webdsl-built-ins.stx#declareBuiltInFunction_124_146" id="declareBuiltInFunction_2334_2356" title="Defined at ../../webdsl-built-ins.stx line 10">declareBuiltInFunction</a>(<a href="#s_238_239" id="s_2357_2358" title="Defined at line 12">s</a>, "attribute"          , [<a href="#string_260_266" id="string_2384_2390" title="Defined at line 12">string</a>, <a href="#string_260_266" id="string_2392_2398" title="Defined at line 12">string</a>], <a href="#string_260_266" id="string_2401_2407" title="Defined at line 12">string</a>),
    <a href="../../webdsl-built-ins.stx#declareBuiltInFunction_124_146" id="declareBuiltInFunction_2414_2436" title="Defined at ../../webdsl-built-ins.stx line 10">declareBuiltInFunction</a>(<a href="#s_238_239" id="s_2437_2438" title="Defined at line 12">s</a>, "hasNotNullAttribute", []              , <a href="#bool_292_296" id="bool_2481_2485" title="Defined at line 12">bool</a>),

    <a href="../../webdsl-built-ins.stx#declareBuiltInFunction_124_146" id="declareBuiltInFunction_2493_2515" title="Defined at ../../webdsl-built-ins.stx line 10">declareBuiltInFunction</a>(<a href="#s_238_239" id="s_2516_2517" title="Defined at line 12">s</a>, "message", [<a href="#string_260_266" id="string_2531_2537" title="Defined at line 12">string</a>], <a href="#void_287_291" id="void_2540_2544" title="Defined at line 12">void</a>),
    <a href="../../webdsl-built-ins.stx#declareBuiltInFunction_124_146" id="declareBuiltInFunction_2551_2573" title="Defined at ../../webdsl-built-ins.stx line 10">declareBuiltInFunction</a>(<a href="#s_238_239" id="s_2574_2575" title="Defined at line 12">s</a>, "log"    , [<a href="#object_297_303" id="object_2589_2595" title="Defined at line 12">object</a>], <a href="#void_287_291" id="void_2598_2602" title="Defined at line 12">void</a>),

    <a href="../../webdsl-built-ins.stx#declareBuiltInFunction_124_146" id="declareBuiltInFunction_2610_2632" title="Defined at ../../webdsl-built-ins.stx line 10">declareBuiltInFunction</a>(<a href="#s_238_239" id="s_2633_2634" title="Defined at line 12">s</a>, "assert", [<a href="#bool_292_296" id="bool_2647_2651" title="Defined at line 12">bool</a>], <a href="#void_287_291" id="void_2654_2658" title="Defined at line 12">void</a>),
    <a href="../../webdsl-built-ins.stx#declareBuiltInFunction_124_146" id="declareBuiltInFunction_2665_2687" title="Defined at ../../webdsl-built-ins.stx line 10">declareBuiltInFunction</a>(<a href="#s_238_239" id="s_2688_2689" title="Defined at line 12">s</a>, "assert", [<a href="#bool_292_296" id="bool_2702_2706" title="Defined at line 12">bool</a>, <a href="#string_260_266" id="string_2708_2714" title="Defined at line 12">string</a>], <a href="#void_287_291" id="void_2717_2721" title="Defined at line 12">void</a>),
    <a href="../../webdsl-built-ins.stx#declareBuiltInFunction_124_146" id="declareBuiltInFunction_2728_2750" title="Defined at ../../webdsl-built-ins.stx line 10">declareBuiltInFunction</a>(<a href="#s_238_239" id="s_2751_2752" title="Defined at line 12">s</a>, "assertEquals", [<a href="#object_297_303" id="object_2771_2777" title="Defined at line 12">object</a>, <a href="#object_297_303" id="object_2779_2785" title="Defined at line 12">object</a>], <a href="#void_287_291" id="void_2788_2792" title="Defined at line 12">void</a>),
    <a href="../../webdsl-built-ins.stx#declareBuiltInFunction_124_146" id="declareBuiltInFunction_2799_2821" title="Defined at ../../webdsl-built-ins.stx line 10">declareBuiltInFunction</a>(<a href="#s_238_239" id="s_2822_2823" title="Defined at line 12">s</a>, "assertEquals", [<a href="#object_297_303" id="object_2842_2848" title="Defined at line 12">object</a>, <a href="#object_297_303" id="object_2850_2856" title="Defined at line 12">object</a>, <a href="#string_260_266" id="string_2858_2864" title="Defined at line 12">string</a>], <a href="#void_287_291" id="void_2867_2871" title="Defined at line 12">void</a>),
    <a href="../../webdsl-built-ins.stx#declareBuiltInFunction_124_146" id="declareBuiltInFunction_2878_2900" title="Defined at ../../webdsl-built-ins.stx line 10">declareBuiltInFunction</a>(<a href="#s_238_239" id="s_2901_2902" title="Defined at line 12">s</a>, "assertNotSame", [<a href="#object_297_303" id="object_2922_2928" title="Defined at line 12">object</a>, <a href="#object_297_303" id="object_2930_2936" title="Defined at line 12">object</a>], <a href="#void_287_291" id="void_2939_2943" title="Defined at line 12">void</a>),
    <a href="../../webdsl-built-ins.stx#declareBuiltInFunction_124_146" id="declareBuiltInFunction_2950_2972" title="Defined at ../../webdsl-built-ins.stx line 10">declareBuiltInFunction</a>(<a href="#s_238_239" id="s_2973_2974" title="Defined at line 12">s</a>, "assertNotSame", [<a href="#object_297_303" id="object_2994_3000" title="Defined at line 12">object</a>, <a href="#object_297_303" id="object_3002_3008" title="Defined at line 12">object</a>, <a href="#string_260_266" id="string_3010_3016" title="Defined at line 12">string</a>], <a href="#void_287_291" id="void_3019_3023" title="Defined at line 12">void</a>),

    <a href="../../webdsl-built-ins.stx#declareBuiltInFunction_124_146" id="declareBuiltInFunction_3031_3053" title="Defined at ../../webdsl-built-ins.stx line 10">declareBuiltInFunction</a>(<a href="#s_238_239" id="s_3054_3055" title="Defined at line 12">s</a>, "loadEntity", [<a href="#string_260_266" id="string_3072_3078" title="Defined at line 12">string</a>, <a href="#uuid_282_286" id="uuid_3080_3084" title="Defined at line 12">uuid</a>], <a href="#entity_308_314" id="entity_3087_3093" title="Defined at line 12">entity</a>).

</code></pre></td></tr></tbody></table></div>