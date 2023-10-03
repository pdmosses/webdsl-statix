---
title: built-ins.stx
hide:
  - toc
---

# `built-ins.stx`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/entities/built-ins.stx]

[pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/entities/built-ins.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/trans/static-semantics/entities/built-ins.stx "The source file on GitHub"

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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../../webdsl-entities.stx#static-semantics/entities/built-ins_129_164" id="static-semantics/entities/built-ins_7_42" title="Referenced at ../../webdsl-entities.stx line 7; ../../webdsl.stx line 7">static-semantics/entities/built-ins</a>

<span class="keyword">imports</span>
  <a href="../../types/built-ins.stx#static-semantics/types/built-ins_7_39" id="static-semantics/types/built-ins_54_86" title="Defined at ../../types/built-ins.stx line 1">static-semantics/types/built-ins</a>

  <a href="../annotations.stx#static-semantics/entities/annotations_7_44" id="static-semantics/entities/annotations_90_127" title="Defined at ../annotations.stx line 1">static-semantics/entities/annotations</a>

  <a href="../../webdsl-entities.stx#static-semantics/webdsl-entities_7_39" id="static-semantics/webdsl-entities_131_163" title="Defined at ../../webdsl-entities.stx line 1">static-semantics/webdsl-entities</a>
  <a href="../../webdsl-built-ins.stx#static-semantics/webdsl-built-ins_7_40" id="static-semantics/webdsl-built-ins_166_199" title="Defined at ../../webdsl-built-ins.stx line 1">static-semantics/webdsl-built-ins</a>
  <a href="../../webdsl.stx#static-semantics/webdsl_7_30" id="static-semantics/webdsl_202_225" title="Defined at ../../webdsl.stx line 1">static-semantics/webdsl</a>

<span class="keyword">rules</span>

  <a href="#declareEntityBuiltIns_268_289" id="declareEntityBuiltIns_236_257" title="Referenced at line 15; ../../webdsl.stx line 379">declareEntityBuiltIns</a> : <span class="keyword">scope</span>
  <a href="#declareEntityBuiltIns_236_257" id="declareEntityBuiltIns_268_289" title="Defined at line 14">declareEntityBuiltIns</a>(<a href="#s_381_382" id="s_290_291" title="Referenced at line 16, 18, 19, 20, 21, 22, 23, 24, 25, 28, 31, 32, 35, 37, 38, 39, 40, 41, 42">s</a>) :- {<a href="#s_object_355_363" id="s_object_297_305" title="Referenced at line 16, 16, 17, 18, 28">s_object</a> <a href="#s_ent_392_397" id="s_ent_306_311" title="Referenced at line 17, 17, 19, 20, 21, 22, 23, 23, 24, 25, 26, 27, 30, 34">s_ent</a> <a href="#s_sessionmessage_1142_1158" id="s_sessionmessage_312_328" title="Referenced at line 30, 30, 31, 32, 36">s_sessionmessage</a> <a href="#s_sessionmanager_1337_1353" id="s_sessionmanager_329_345" title="Referenced at line 34, 34, 35, 36, 37, 38, 39, 40, 41, 42">s_sessionmanager</a>}
    <span class="keyword">new</span> <a href="#s_object_297_305" id="s_object_355_363" title="Defined at line 15">s_object</a>, <a href="#s_object_297_305" id="s_object_365_373" title="Defined at line 15">s_object</a> -<a href="../../webdsl.stx#DEF_1498_1501" id="DEF_375_378" title="Defined at ../../webdsl.stx line 49">DEF</a>-&gt; <a href="#s_290_291" id="s_381_382" title="Defined at line 15">s</a>,
    <span class="keyword">new</span> <a href="#s_ent_306_311" id="s_ent_392_397" title="Defined at line 15">s_ent</a>, <a href="#s_ent_306_311" id="s_ent_399_404" title="Defined at line 15">s_ent</a> -<a href="../../webdsl.stx#INHERIT_1445_1452" id="INHERIT_406_413" title="Defined at ../../webdsl.stx line 48">INHERIT</a>-&gt; <a href="#s_object_297_305" id="s_object_416_424" title="Defined at line 15">s_object</a>,
    <a href="../../webdsl.stx#declareType_3123_3134" id="declareType_430_441" title="Defined at ../../webdsl.stx line 100">declareType</a>(<a href="#s_290_291" id="s_442_443" title="Defined at line 15">s</a>, "Object", <a href="../../webdsl-types.stx#BUILTINTYPE_1001_1012" id="BUILTINTYPE_455_466" title="Defined at ../../webdsl-types.stx line 40">BUILTINTYPE</a>("Object", <a href="#s_object_297_305" id="s_object_477_485" title="Defined at line 15">s_object</a>)),
    <a href="../../webdsl.stx#declareType_3123_3134" id="declareType_493_504" title="Defined at ../../webdsl.stx line 100">declareType</a>(<a href="#s_290_291" id="s_505_506" title="Defined at line 15">s</a>, "Entity", <a href="../../webdsl-types.stx#ENTITY_444_450" id="ENTITY_518_524" title="Defined at ../../webdsl-types.stx line 20">ENTITY</a>("Entity", <a href="#s_ent_306_311" id="s_ent_535_540" title="Defined at line 15">s_ent</a>)),
    <a href="../../webdsl.stx#declareVar_13281_13291" id="declareVar_548_558" title="Defined at ../../webdsl.stx line 301">declareVar</a>(<a href="#s_ent_306_311" id="s_ent_559_564" title="Defined at line 15">s_ent</a>, "id"       , <a href="../../types/built-ins.stx#uuid_2698_2702" id="uuid_579_583" title="Defined at ../../types/built-ins.stx line 74">uuid</a>(<a href="#s_290_291" id="s_584_585" title="Defined at line 15">s</a>)),
    <a href="../../webdsl.stx#declareVar_13281_13291" id="declareVar_593_603" title="Defined at ../../webdsl.stx line 301">declareVar</a>(<a href="#s_ent_306_311" id="s_ent_604_609" title="Defined at line 15">s_ent</a>, "naturalId", <a href="../../types/built-ins.stx#string_1822_1828" id="string_624_630" title="Defined at ../../types/built-ins.stx line 48">string</a>(<a href="#s_290_291" id="s_631_632" title="Defined at line 15">s</a>)),
    <a href="../../webdsl.stx#declareVar_13281_13291" id="declareVar_640_650" title="Defined at ../../webdsl.stx line 301">declareVar</a>(<a href="#s_ent_306_311" id="s_ent_651_656" title="Defined at line 15">s_ent</a>, "version"  , <a href="../../types/built-ins.stx#int_1638_1641" id="int_671_674" title="Defined at ../../types/built-ins.stx line 41">int</a>(<a href="#s_290_291" id="s_675_676" title="Defined at line 15">s</a>)),
    <a href="../../webdsl.stx#declareVar_13281_13291" id="declareVar_684_694" title="Defined at ../../webdsl.stx line 301">declareVar</a>(<a href="#s_ent_306_311" id="s_ent_695_700" title="Defined at line 15">s_ent</a>, "name"     , <a href="../../types/built-ins.stx#string_1822_1828" id="string_715_721" title="Defined at ../../types/built-ins.stx line 48">string</a>(<a href="#s_290_291" id="s_722_723" title="Defined at line 15">s</a>)), <a href="../annotations.stx#declareAnnotations_699_717" id="declareAnnotations_727_745" title="Defined at ../annotations.stx line 35">declareAnnotations</a>(<a href="#s_ent_306_311" id="s_ent_746_751" title="Defined at line 15">s_ent</a>, "name", [<a href="../annotations.stx#OVERRIDABLE_340_351" id="OVERRIDABLE_762_773" title="Defined at ../annotations.stx line 19">OVERRIDABLE</a>(), <a href="../annotations.stx#NAME_369_373" id="NAME_777_781" title="Defined at ../annotations.stx line 20">NAME</a>(), <a href="../annotations.stx#DERIVED_427_434" id="DERIVED_785_792" title="Defined at ../annotations.stx line 22">DERIVED</a>()]),
    <a href="../../webdsl.stx#declareVar_13281_13291" id="declareVar_802_812" title="Defined at ../../webdsl.stx line 301">declareVar</a>(<a href="#s_ent_306_311" id="s_ent_813_818" title="Defined at line 15">s_ent</a>, "created"  , <a href="../../types/built-ins.stx#datetime_2498_2506" id="datetime_833_841" title="Defined at ../../types/built-ins.stx line 67">datetime</a>(<a href="#s_290_291" id="s_842_843" title="Defined at line 15">s</a>)),
    <a href="../../webdsl.stx#declareVar_13281_13291" id="declareVar_851_861" title="Defined at ../../webdsl.stx line 301">declareVar</a>(<a href="#s_ent_306_311" id="s_ent_862_867" title="Defined at line 15">s_ent</a>, "modified" , <a href="../../types/built-ins.stx#datetime_2498_2506" id="datetime_882_890" title="Defined at ../../types/built-ins.stx line 67">datetime</a>(<a href="#s_290_291" id="s_891_892" title="Defined at line 15">s</a>)),
    <a href="../../webdsl-built-ins.stx#declareBuiltInFunction_124_146" id="declareBuiltInFunction_900_922" title="Defined at ../../webdsl-built-ins.stx line 10">declareBuiltInFunction</a>(<a href="#s_ent_306_311" id="s_ent_923_928" title="Defined at line 15">s_ent</a>, "save"  , [], <a href="../../webdsl-types.stx#VOID_1167_1171" id="VOID_944_948" title="Defined at ../../webdsl-types.stx line 46">VOID</a>()),
    <a href="../../webdsl-built-ins.stx#declareBuiltInFunction_124_146" id="declareBuiltInFunction_957_979" title="Defined at ../../webdsl-built-ins.stx line 10">declareBuiltInFunction</a>(<a href="#s_ent_306_311" id="s_ent_980_985" title="Defined at line 15">s_ent</a>, "delete", [], <a href="../../webdsl-types.stx#VOID_1167_1171" id="VOID_1001_1005" title="Defined at ../../webdsl-types.stx line 46">VOID</a>()), <span class="layout">// TO-DO: not allowed on session entities and global vars</span>
    <a href="../../webdsl-built-ins.stx#declareBuiltInFunction_124_146" id="declareBuiltInFunction_1072_1094" title="Defined at ../../webdsl-built-ins.stx line 10">declareBuiltInFunction</a>(<a href="#s_object_297_305" id="s_object_1095_1103" title="Defined at line 15">s_object</a>, "toString", [], <a href="../../types/built-ins.stx#string_1822_1828" id="string_1121_1127" title="Defined at ../../types/built-ins.stx line 48">string</a>(<a href="#s_290_291" id="s_1128_1129" title="Defined at line 15">s</a>)),

    <span class="keyword">new</span> <a href="#s_sessionmessage_312_328" id="s_sessionmessage_1142_1158" title="Defined at line 15">s_sessionmessage</a>, <a href="#s_sessionmessage_312_328" id="s_sessionmessage_1160_1176" title="Defined at line 15">s_sessionmessage</a> -<a href="../../webdsl.stx#INHERIT_1445_1452" id="INHERIT_1178_1185" title="Defined at ../../webdsl.stx line 48">INHERIT</a>-&gt; <a href="#s_ent_306_311" id="s_ent_1188_1193" title="Defined at line 15">s_ent</a>,
    <a href="../../webdsl.stx#declareType_3123_3134" id="declareType_1199_1210" title="Defined at ../../webdsl.stx line 100">declareType</a>(<a href="#s_290_291" id="s_1211_1212" title="Defined at line 15">s</a>, "SessionMessage", <a href="../../webdsl-types.stx#ENTITY_444_450" id="ENTITY_1232_1238" title="Defined at ../../webdsl-types.stx line 20">ENTITY</a>("SessionMessage", <a href="#s_sessionmessage_312_328" id="s_sessionmessage_1257_1273" title="Defined at line 15">s_sessionmessage</a>)),
    <a href="../../webdsl.stx#declareVar_13281_13291" id="declareVar_1281_1291" title="Defined at ../../webdsl.stx line 301">declareVar</a>(<a href="#s_sessionmessage_312_328" id="s_sessionmessage_1292_1308" title="Defined at line 15">s_sessionmessage</a>, "text", <a href="../../types/built-ins.stx#text_2200_2204" id="text_1318_1322" title="Defined at ../../types/built-ins.stx line 58">text</a>(<a href="#s_290_291" id="s_1323_1324" title="Defined at line 15">s</a>)),

    <span class="keyword">new</span> <a href="#s_sessionmanager_329_345" id="s_sessionmanager_1337_1353" title="Defined at line 15">s_sessionmanager</a>, <a href="#s_sessionmanager_329_345" id="s_sessionmanager_1355_1371" title="Defined at line 15">s_sessionmanager</a> -<a href="../../webdsl.stx#INHERIT_1445_1452" id="INHERIT_1373_1380" title="Defined at ../../webdsl.stx line 48">INHERIT</a>-&gt; <a href="#s_ent_306_311" id="s_ent_1383_1388" title="Defined at line 15">s_ent</a>,
    <a href="../../webdsl.stx#declareType_3123_3134" id="declareType_1394_1405" title="Defined at ../../webdsl.stx line 100">declareType</a>(<a href="#s_290_291" id="s_1406_1407" title="Defined at line 15">s</a>, "SessionManager", <a href="../../webdsl-types.stx#ENTITY_444_450" id="ENTITY_1427_1433" title="Defined at ../../webdsl-types.stx line 20">ENTITY</a>("SessionManager", <a href="#s_sessionmanager_329_345" id="s_sessionmanager_1452_1468" title="Defined at line 15">s_sessionmanager</a>)),
    <a href="../../webdsl.stx#declareVar_13281_13291" id="declareVar_1476_1486" title="Defined at ../../webdsl.stx line 301">declareVar</a>(<a href="#s_sessionmanager_329_345" id="s_sessionmanager_1487_1503" title="Defined at line 15">s_sessionmanager</a>, "messages"         , <a href="../../webdsl-types.stx#ENTITY_444_450" id="ENTITY_1526_1532" title="Defined at ../../webdsl-types.stx line 20">ENTITY</a>("SessionMessage", <a href="#s_sessionmessage_312_328" id="s_sessionmessage_1551_1567" title="Defined at line 15">s_sessionmessage</a>)),
    <a href="../../webdsl.stx#declareVar_13281_13291" id="declareVar_1575_1585" title="Defined at ../../webdsl.stx line 301">declareVar</a>(<a href="#s_sessionmanager_329_345" id="s_sessionmanager_1586_1602" title="Defined at line 15">s_sessionmanager</a>, "lastUse"          , <a href="../../types/built-ins.stx#datetime_2498_2506" id="datetime_1625_1633" title="Defined at ../../types/built-ins.stx line 67">datetime</a>(<a href="#s_290_291" id="s_1634_1635" title="Defined at line 15">s</a>)),
    <a href="../../webdsl.stx#declareVar_13281_13291" id="declareVar_1643_1653" title="Defined at ../../webdsl.stx line 301">declareVar</a>(<a href="#s_sessionmanager_329_345" id="s_sessionmanager_1654_1670" title="Defined at line 15">s_sessionmanager</a>, "logsqlMessage"    , <a href="../../types/built-ins.stx#text_2200_2204" id="text_1693_1697" title="Defined at ../../types/built-ins.stx line 58">text</a>(<a href="#s_290_291" id="s_1698_1699" title="Defined at line 15">s</a>)),
    <a href="../../webdsl.stx#declareVar_13281_13291" id="declareVar_1707_1717" title="Defined at ../../webdsl.stx line 301">declareVar</a>(<a href="#s_sessionmanager_329_345" id="s_sessionmanager_1718_1734" title="Defined at line 15">s_sessionmanager</a>, "stayLoggedIn"     , <a href="../../types/built-ins.stx#bool_2637_2641" id="bool_1757_1761" title="Defined at ../../types/built-ins.stx line 72">bool</a>(<a href="#s_290_291" id="s_1762_1763" title="Defined at line 15">s</a>)),
    <a href="../../webdsl.stx#declareVar_13281_13291" id="declareVar_1771_1781" title="Defined at ../../webdsl.stx line 301">declareVar</a>(<a href="#s_sessionmanager_329_345" id="s_sessionmanager_1782_1798" title="Defined at line 15">s_sessionmanager</a>, "sessionHasChanges", <a href="../../types/built-ins.stx#bool_2637_2641" id="bool_1821_1825" title="Defined at ../../types/built-ins.stx line 72">bool</a>(<a href="#s_290_291" id="s_1826_1827" title="Defined at line 15">s</a>)),
    <a href="../../webdsl.stx#declareVar_13281_13291" id="declareVar_1835_1845" title="Defined at ../../webdsl.stx line 301">declareVar</a>(<a href="#s_sessionmanager_329_345" id="s_sessionmanager_1846_1862" title="Defined at line 15">s_sessionmanager</a>, "domain"           , <a href="../../types/built-ins.stx#string_1822_1828" id="string_1885_1891" title="Defined at ../../types/built-ins.stx line 48">string</a>(<a href="#s_290_291" id="s_1892_1893" title="Defined at line 15">s</a>)),
    <a href="../../webdsl.stx#declareVar_13281_13291" id="declareVar_1901_1911" title="Defined at ../../webdsl.stx line 301">declareVar</a>(<a href="#s_sessionmanager_329_345" id="s_sessionmanager_1912_1928" title="Defined at line 15">s_sessionmanager</a>, "cookieValue"      , <a href="../../types/built-ins.stx#uuid_2698_2702" id="uuid_1951_1955" title="Defined at ../../types/built-ins.stx line 74">uuid</a>(<a href="#s_290_291" id="s_1956_1957" title="Defined at line 15">s</a>)).

</code></pre></td></tr></tbody></table></div>