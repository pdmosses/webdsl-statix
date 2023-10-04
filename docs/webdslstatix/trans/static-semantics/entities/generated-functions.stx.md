---
title: generated-functions.stx
hide:
  - toc
---

# `generated-functions.stx`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/entities/generated-functions.stx]

[pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/entities/generated-functions.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/trans/static-semantics/entities/generated-functions.stx "The source file on GitHub"

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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../../webdsl-entities.stx#static-semantics/entities/generated-functions_167_212" id="static-semantics/entities/generated-functions_7_52" title="Referenced at ../../webdsl-entities.stx line 8">static-semantics/entities/generated-functions</a>

<span class="keyword">imports</span>
  <a href="../annotations.stx#static-semantics/entities/annotations_7_44" id="static-semantics/entities/annotations_64_101" title="Defined at ../annotations.stx line 1">static-semantics/entities/annotations</a>

  <a href="../../types/built-ins.stx#static-semantics/types/built-ins_7_39" id="static-semantics/types/built-ins_105_137" title="Defined at ../../types/built-ins.stx line 1">static-semantics/types/built-ins</a>

  <a href="../../webdsl.stx#static-semantics/webdsl_7_30" id="static-semantics/webdsl_141_164" title="Defined at ../../webdsl.stx line 1">static-semantics/webdsl</a>
  <a href="../../webdsl-actions.stx#static-semantics/webdsl-actions_7_38" id="static-semantics/webdsl-actions_167_198" title="Defined at ../../webdsl-actions.stx line 1">static-semantics/webdsl-actions</a>
  <a href="../../webdsl-types.stx#static-semantics/webdsl-types_7_36" id="static-semantics/webdsl-types_201_230" title="Defined at ../../webdsl-types.stx line 1">static-semantics/webdsl-types</a>

<span class="keyword">rules</span>

/*
  <span class="keyword">declare findEntity</span>(&lt;<span class="keyword">idType</span>&gt;) <span class="keyword">or loadEntity</span>(&lt;<span class="keyword">uuid</span>&gt;) <span class="keyword">based</span>
  <span class="keyword">on presence of</span> `(<span class="keyword">id</span>)` <span class="keyword">annotation and type</span>
*/

  <a href="../../webdsl.stx#defOk_15473_15478" id="defOk_351_356" title="Defined at ../../webdsl.stx line 356">defOk</a>(<a href="#s_522_523" id="s_357_358" title="Referenced at line 20, 21">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Generated-sig.stx#GeneratedDefinition_288_307" id="GeneratedDefinition_360_379" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Generated-sig.stx line 19">GeneratedDefinition</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-Generated-sig.stx#Generated_243_252" id="Generated_380_389" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Generated-sig.stx line 18">Generated</a>(["loadOrFindEntity", <a href="#entityName_525_535" id="entityName_411_421" title="Referenced at line 20">entityName</a>, <a href="#loadName_603_611" id="loadName_423_431" title="Referenced at line 21">loadName</a>, <a href="#findName_613_621" id="findName_433_441" title="Referenced at line 21">findName</a>, <a href="#getUniqueName_623_636" id="getUniqueName_443_456" title="Referenced at line 21">getUniqueName</a>, <a href="#isUniqueName_638_650" id="isUniqueName_458_470" title="Referenced at line 21">isUniqueName</a>, <a href="#isUniqueIdName_652_666" id="isUniqueIdName_472_486" title="Referenced at line 21">isUniqueIdName</a>]))) :- { <a href="#s_ent_561_566" id="s_ent_496_501" title="Referenced at line 20, 21">s_ent</a> <a href="#t_549_550" id="t_502_503" title="Referenced at line 20, 21">t</a> }
    <a href="../../webdsl.stx#resolveType_3324_3335" id="resolveType_510_521" title="Defined at ../../webdsl.stx line 105">resolveType</a>(<a href="#s_357_358" id="s_522_523" title="Defined at line 19">s</a>, <a href="#entityName_411_421" id="entityName_525_535" title="Defined at line 19">entityName</a>) == [(_, (_, <a href="#t_502_503" id="t_549_550" title="Defined at line 19">t</a>@<a href="../../webdsl-types.stx#ENTITY_444_450" id="ENTITY_551_557" title="Defined at ../../webdsl-types.stx line 20">ENTITY</a>(_, <a href="#s_ent_496_501" id="s_ent_561_566" title="Defined at line 19">s_ent</a>)))],
    <a href="#declareLoadOrFindEntity_700_723" id="declareLoadOrFindEntity_576_599" title="Defined at line 23">declareLoadOrFindEntity</a>(<a href="#s_357_358" id="s_600_601" title="Defined at line 19">s</a>, <a href="#loadName_423_431" id="loadName_603_611" title="Defined at line 19">loadName</a>, <a href="#findName_433_441" id="findName_613_621" title="Defined at line 19">findName</a>, <a href="#getUniqueName_443_456" id="getUniqueName_623_636" title="Defined at line 19">getUniqueName</a>, <a href="#isUniqueName_458_470" id="isUniqueName_638_650" title="Defined at line 19">isUniqueName</a>, <a href="#isUniqueIdName_472_486" id="isUniqueIdName_652_666" title="Defined at line 19">isUniqueIdName</a>, <a href="#t_502_503" id="t_668_669" title="Defined at line 19">t</a>, <a href="../annotations.stx#hasIdAnnotationB_10246_10262" id="hasIdAnnotationB_671_687" title="Defined at ../annotations.stx line 220">hasIdAnnotationB</a>(<a href="#s_ent_496_501" id="s_ent_688_693" title="Defined at line 19">s_ent</a>)).

  <a href="#declareLoadOrFindEntity_576_599" id="declareLoadOrFindEntity_700_723" title="Referenced at line 21, 24, 27">declareLoadOrFindEntity</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> * <span class="keyword">string</span> * <span class="keyword">string</span> * <span class="keyword">string</span> * <span class="keyword">string</span> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_779_783" title="Defined at ../../webdsl.stx line 29">TYPE</a> * <a href="../../webdsl.stx#BOOL_697_701" id="BOOL_786_790" title="Defined at ../../webdsl.stx line 30">BOOL</a>
  <a href="#declareLoadOrFindEntity_700_723" id="declareLoadOrFindEntity_793_816" title="Defined at line 23">declareLoadOrFindEntity</a>(<a href="#s_877_878" id="s_817_818" title="Referenced at line 25, 25">s</a>, <a href="#loadName_880_888" id="loadName_820_828" title="Referenced at line 25">loadName</a>, _, _, _, _, <a href="#t_922_923" id="t_842_843" title="Referenced at line 25">t</a>, <a href="../../webdsl.stx#FALSE_844_849" id="FALSE_845_850" title="Defined at ../../webdsl.stx line 35">FALSE</a>()) :-
    <a href="../../webdsl.stx#declareFunction_8746_8761" id="declareFunction_861_876" title="Defined at ../../webdsl.stx line 217">declareFunction</a>(<a href="#s_817_818" id="s_877_878" title="Defined at line 24">s</a>, <a href="#loadName_820_828" id="loadName_880_888" title="Defined at line 24">loadName</a>, <a href="../../webdsl.stx#GENERATED_ORIGIN_1122_1138" id="GENERATED_ORIGIN_890_906" title="Defined at ../../webdsl.stx line 41">GENERATED_ORIGIN</a>(1), [<a href="../../types/built-ins.stx#uuid_2698_2702" id="uuid_912_916" title="Defined at ../../types/built-ins.stx line 74">uuid</a>(<a href="#s_817_818" id="s_917_918" title="Defined at line 24">s</a>)], <a href="#t_842_843" id="t_922_923" title="Defined at line 24">t</a>).

  <a href="#declareLoadOrFindEntity_700_723" id="declareLoadOrFindEntity_929_952" title="Defined at line 23">declareLoadOrFindEntity</a>(<a href="#s_1074_1075" id="s_953_954" title="Referenced at line 28, 32, 33, 34, 35, 36">s</a>, _, <a href="#findName_1235_1243" id="findName_959_967" title="Referenced at line 32">findName</a>, <a href="#getUniqueName_1309_1322" id="getUniqueName_969_982" title="Referenced at line 33">getUniqueName</a>, <a href="#isUniqueName_1383_1395" id="isUniqueName_984_996" title="Referenced at line 34">isUniqueName</a>, <a href="#isUniqueIdName_1455_1469" id="isUniqueIdName_998_1012" title="Referenced at line 35, 36">isUniqueIdName</a>, <a href="#t_1082_1083" id="t_1014_1015" title="Referenced at line 29, 32, 33, 34, 36">t</a>, <a href="../../webdsl.stx#TRUE_828_832" id="TRUE_1017_1021" title="Defined at ../../webdsl.stx line 34">TRUE</a>()) :- { <a href="#s_ent_1097_1102" id="s_ent_1030_1035" title="Referenced at line 29, 30, 31">s_ent</a> <a href="#idName_1155_1161" id="idName_1036_1042" title="Referenced at line 30, 31">idName</a> <a href="#idType_1173_1179" id="idType_1043_1049" title="Referenced at line 31, 32, 33, 35, 36">idType</a> <a href="#bool_1061_1065" id="bool_1050_1054" title="Referenced at line 28, 34, 35, 36">bool</a> }
    <a href="#bool_1050_1054" id="bool_1061_1065" title="Defined at line 27">bool</a> == <a href="../../types/built-ins.stx#bool_2637_2641" id="bool_1069_1073" title="Defined at ../../types/built-ins.stx line 72">bool</a>(<a href="#s_953_954" id="s_1074_1075" title="Defined at line 27">s</a>),
    <a href="#t_1014_1015" id="t_1082_1083" title="Defined at line 27">t</a> == <a href="../../webdsl-types.stx#ENTITY_444_450" id="ENTITY_1087_1093" title="Defined at ../../webdsl-types.stx line 20">ENTITY</a>(_, <a href="#s_ent_1030_1035" id="s_ent_1097_1102" title="Defined at line 27">s_ent</a>),
    <a href="../annotations.stx#resolveAnnotationByAnno_1186_1209" id="resolveAnnotationByAnno_1109_1132" title="Defined at ../annotations.stx line 47">resolveAnnotationByAnno</a>(<a href="#s_ent_1030_1035" id="s_ent_1133_1138" title="Defined at line 27">s_ent</a>, <a href="../annotations.stx#ID_311_313" id="ID_1140_1142" title="Defined at ../annotations.stx line 18">ID</a>()) == [(_, (<a href="#idName_1036_1042" id="idName_1155_1161" title="Defined at line 27">idName</a>, _))],
    <a href="#idType_1043_1049" id="idType_1173_1179" title="Defined at line 27">idType</a> == <a href="../../webdsl-types.stx#propertyType_9035_9047" id="propertyType_1183_1195" title="Defined at ../../webdsl-types.stx line 244">propertyType</a>(<a href="#s_ent_1030_1035" id="s_ent_1196_1201" title="Defined at line 27">s_ent</a>, <a href="#idName_1036_1042" id="idName_1203_1209" title="Defined at line 27">idName</a>),
    <a href="../../webdsl.stx#declareFunction_8746_8761" id="declareFunction_1216_1231" title="Defined at ../../webdsl.stx line 217">declareFunction</a>(<a href="#s_953_954" id="s_1232_1233" title="Defined at line 27">s</a>, <a href="#findName_959_967" id="findName_1235_1243" title="Defined at line 27">findName</a>,       <a href="../../webdsl.stx#GENERATED_ORIGIN_1122_1138" id="GENERATED_ORIGIN_1251_1267" title="Defined at ../../webdsl.stx line 41">GENERATED_ORIGIN</a>(1), [<a href="#idType_1043_1049" id="idType_1273_1279" title="Defined at line 27">idType</a>], <a href="#t_1014_1015" id="t_1282_1283" title="Defined at line 27">t</a>),
    <a href="../../webdsl.stx#declareFunction_8746_8761" id="declareFunction_1290_1305" title="Defined at ../../webdsl.stx line 217">declareFunction</a>(<a href="#s_953_954" id="s_1306_1307" title="Defined at line 27">s</a>, <a href="#getUniqueName_969_982" id="getUniqueName_1309_1322" title="Defined at line 27">getUniqueName</a>,  <a href="../../webdsl.stx#GENERATED_ORIGIN_1122_1138" id="GENERATED_ORIGIN_1325_1341" title="Defined at ../../webdsl.stx line 41">GENERATED_ORIGIN</a>(1), [<a href="#idType_1043_1049" id="idType_1347_1353" title="Defined at line 27">idType</a>], <a href="#t_1014_1015" id="t_1356_1357" title="Defined at line 27">t</a>),
    <a href="../../webdsl.stx#declareFunction_8746_8761" id="declareFunction_1364_1379" title="Defined at ../../webdsl.stx line 217">declareFunction</a>(<a href="#s_953_954" id="s_1380_1381" title="Defined at line 27">s</a>, <a href="#isUniqueName_984_996" id="isUniqueName_1383_1395" title="Defined at line 27">isUniqueName</a>,   <a href="../../webdsl.stx#GENERATED_ORIGIN_1122_1138" id="GENERATED_ORIGIN_1399_1415" title="Defined at ../../webdsl.stx line 41">GENERATED_ORIGIN</a>(1), [<a href="#t_1014_1015" id="t_1421_1422" title="Defined at line 27">t</a>], <a href="#bool_1050_1054" id="bool_1425_1429" title="Defined at line 27">bool</a>),
    <a href="../../webdsl.stx#declareFunction_8746_8761" id="declareFunction_1436_1451" title="Defined at ../../webdsl.stx line 217">declareFunction</a>(<a href="#s_953_954" id="s_1452_1453" title="Defined at line 27">s</a>, <a href="#isUniqueIdName_998_1012" id="isUniqueIdName_1455_1469" title="Defined at line 27">isUniqueIdName</a>, <a href="../../webdsl.stx#GENERATED_ORIGIN_1122_1138" id="GENERATED_ORIGIN_1471_1487" title="Defined at ../../webdsl.stx line 41">GENERATED_ORIGIN</a>(1), [<a href="#idType_1043_1049" id="idType_1493_1499" title="Defined at line 27">idType</a>], <a href="#bool_1050_1054" id="bool_1502_1506" title="Defined at line 27">bool</a>),
    <a href="../../webdsl.stx#declareFunction_8746_8761" id="declareFunction_1513_1528" title="Defined at ../../webdsl.stx line 217">declareFunction</a>(<a href="#s_953_954" id="s_1529_1530" title="Defined at line 27">s</a>, <a href="#isUniqueIdName_998_1012" id="isUniqueIdName_1532_1546" title="Defined at line 27">isUniqueIdName</a>, <a href="../../webdsl.stx#GENERATED_ORIGIN_1122_1138" id="GENERATED_ORIGIN_1548_1564" title="Defined at ../../webdsl.stx line 41">GENERATED_ORIGIN</a>(2), [<a href="#idType_1043_1049" id="idType_1570_1576" title="Defined at line 27">idType</a>, <a href="#t_1014_1015" id="t_1578_1579" title="Defined at line 27">t</a>], <a href="#bool_1050_1054" id="bool_1582_1586" title="Defined at line 27">bool</a>).

<span class="keyword">rules</span>

/*
  <span class="keyword">declare findEntityByProperty and findEntityByPropertyLike if</span>
  <span class="keyword">the property is string-type compatible</span>
*/

  <a href="../../webdsl.stx#defOk_15473_15478" id="defOk_1710_1715" title="Defined at ../../webdsl.stx line 356">defOk</a>(<a href="#s_1885_1886" id="s_1716_1717" title="Referenced at line 46, 48, 48">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Generated-sig.stx#GeneratedDefinition_288_307" id="GeneratedDefinition_1719_1738" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Generated-sig.stx line 19">GeneratedDefinition</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-Generated-sig.stx#Generated_243_252" id="Generated_1739_1748" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Generated-sig.stx line 18">Generated</a>(["findEntityByProperty", <a href="#entityName_1888_1898" id="entityName_1774_1784" title="Referenced at line 46">entityName</a>, <a href="#propertyName_1977_1989" id="propertyName_1786_1798" title="Referenced at line 47">propertyName</a>, <a href="#findByPropName_2027_2041" id="findByPropName_1800_1814" title="Referenced at line 48">findByPropName</a>, <a href="#findByPropLikeName_2043_2061" id="findByPropLikeName_1816_1834" title="Referenced at line 48">findByPropLikeName</a>]))) :- { <a href="#entType_1912_1919" id="entType_1844_1851" title="Referenced at line 46, 48">entType</a> <a href="#s_ent_1930_1935" id="s_ent_1852_1857" title="Referenced at line 46, 47">s_ent</a> <a href="#propType_1945_1953" id="propType_1858_1866" title="Referenced at line 47, 48, 48">propType</a> }
    <a href="../../webdsl.stx#resolveType_3324_3335" id="resolveType_1873_1884" title="Defined at ../../webdsl.stx line 105">resolveType</a>(<a href="#s_1716_1717" id="s_1885_1886" title="Defined at line 45">s</a>, <a href="#entityName_1774_1784" id="entityName_1888_1898" title="Defined at line 45">entityName</a>) == [(_, (_, <a href="#entType_1844_1851" id="entType_1912_1919" title="Defined at line 45">entType</a>@<a href="../../webdsl-types.stx#ENTITY_444_450" id="ENTITY_1920_1926" title="Defined at ../../webdsl-types.stx line 20">ENTITY</a>(_, <a href="#s_ent_1852_1857" id="s_ent_1930_1935" title="Defined at line 45">s_ent</a>)))],
    <a href="#propType_1858_1866" id="propType_1945_1953" title="Defined at line 45">propType</a> == <a href="../../webdsl-types.stx#propertyType_9035_9047" id="propertyType_1957_1969" title="Defined at ../../webdsl-types.stx line 244">propertyType</a>(<a href="#s_ent_1852_1857" id="s_ent_1970_1975" title="Defined at line 45">s_ent</a>, <a href="#propertyName_1786_1798" id="propertyName_1977_1989" title="Defined at line 45">propertyName</a>),
    <a href="#declareFindEntityByProperty_2124_2151" id="declareFindEntityByProperty_1996_2023" title="Defined at line 50">declareFindEntityByProperty</a>(<a href="#s_1716_1717" id="s_2024_2025" title="Defined at line 45">s</a>, <a href="#findByPropName_1800_1814" id="findByPropName_2027_2041" title="Defined at line 45">findByPropName</a>, <a href="#findByPropLikeName_1816_1834" id="findByPropLikeName_2043_2061" title="Defined at line 45">findByPropLikeName</a>, <a href="#entType_1844_1851" id="entType_2063_2070" title="Defined at line 45">entType</a>, <a href="#propType_1858_1866" id="propType_2072_2080" title="Defined at line 45">propType</a>, <a href="../../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_2082_2097" title="Defined at ../../webdsl.stx line 411">typeCompatibleB</a>(<a href="#propType_1858_1866" id="propType_2098_2106" title="Defined at line 45">propType</a>, <a href="../../types/built-ins.stx#string_1822_1828" id="string_2108_2114" title="Defined at ../../types/built-ins.stx line 48">string</a>(<a href="#s_1716_1717" id="s_2115_2116" title="Defined at line 45">s</a>))).

  <a href="#declareFindEntityByProperty_1996_2023" id="declareFindEntityByProperty_2124_2151" title="Referenced at line 48, 51, 52">declareFindEntityByProperty</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> * <span class="keyword">string</span> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_2180_2184" title="Defined at ../../webdsl.stx line 29">TYPE</a> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_2187_2191" title="Defined at ../../webdsl.stx line 29">TYPE</a> * <a href="../../webdsl.stx#BOOL_697_701" id="BOOL_2194_2198" title="Defined at ../../webdsl.stx line 30">BOOL</a>
  <a href="#declareFindEntityByProperty_2124_2151" id="declareFindEntityByProperty_2201_2228" title="Defined at line 50">declareFindEntityByProperty</a>(_, _, _, _, _, <a href="../../webdsl.stx#FALSE_844_849" id="FALSE_2244_2249" title="Defined at ../../webdsl.stx line 35">FALSE</a>()).
  <a href="#declareFindEntityByProperty_2124_2151" id="declareFindEntityByProperty_2256_2283" title="Defined at line 50">declareFindEntityByProperty</a>(<a href="#s_2373_2374" id="s_2284_2285" title="Referenced at line 53, 54">s</a>, <a href="#findByPropName_2376_2390" id="findByPropName_2287_2301" title="Referenced at line 53">findByPropName</a>, <a href="#findByPropLikeName_2458_2476" id="findByPropLikeName_2303_2321" title="Referenced at line 54">findByPropLikeName</a>, <a href="#entType_2424_2431" id="entType_2323_2330" title="Referenced at line 53, 54">entType</a>, <a href="#propType_2408_2416" id="propType_2332_2340" title="Referenced at line 53, 54">propType</a>, <a href="../../webdsl.stx#TRUE_828_832" id="TRUE_2342_2346" title="Defined at ../../webdsl.stx line 34">TRUE</a>()) :-
    <a href="../../webdsl.stx#declareFunction_8746_8761" id="declareFunction_2357_2372" title="Defined at ../../webdsl.stx line 217">declareFunction</a>(<a href="#s_2284_2285" id="s_2373_2374" title="Defined at line 52">s</a>, <a href="#findByPropName_2287_2301" id="findByPropName_2376_2390" title="Defined at line 52">findByPropName</a>, <a href="../../webdsl.stx#PROP_ORIGIN_1005_1016" id="PROP_ORIGIN_2392_2403" title="Defined at ../../webdsl.stx line 40">PROP_ORIGIN</a>(), [<a href="#propType_2332_2340" id="propType_2408_2416" title="Defined at line 52">propType</a>], <a href="../../webdsl-types.stx#LIST_891_895" id="LIST_2419_2423" title="Defined at ../../webdsl-types.stx line 35">LIST</a>(<a href="#entType_2323_2330" id="entType_2424_2431" title="Defined at line 52">entType</a>)),
    <a href="../../webdsl.stx#declareFunction_8746_8761" id="declareFunction_2439_2454" title="Defined at ../../webdsl.stx line 217">declareFunction</a>(<a href="#s_2284_2285" id="s_2455_2456" title="Defined at line 52">s</a>, <a href="#findByPropLikeName_2303_2321" id="findByPropLikeName_2458_2476" title="Defined at line 52">findByPropLikeName</a>, <a href="../../webdsl.stx#PROP_ORIGIN_1005_1016" id="PROP_ORIGIN_2478_2489" title="Defined at ../../webdsl.stx line 40">PROP_ORIGIN</a>(), [<a href="#propType_2332_2340" id="propType_2494_2502" title="Defined at line 52">propType</a>], <a href="../../webdsl-types.stx#LIST_891_895" id="LIST_2505_2509" title="Defined at ../../webdsl-types.stx line 35">LIST</a>(<a href="#entType_2323_2330" id="entType_2510_2517" title="Defined at line 52">entType</a>)).

</code></pre></td></tr></tbody></table></div>