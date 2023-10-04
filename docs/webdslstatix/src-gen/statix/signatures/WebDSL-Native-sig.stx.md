---
title: WebDSL-Native-sig.stx
hide:
  - toc
---

# `WebDSL-Native-sig.stx`



[pdmosses/webdsl-statix/webdslstatix/src-gen/statix/signatures/WebDSL-Native-sig.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/src-gen/statix/signatures/WebDSL-Native-sig.stx "The source file on GitHub"

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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix-sig.stx#signatures/WebDSL-Native-sig_518_546" id="signatures/WebDSL-Native-sig_7_35" title="Referenced at ../webdsl-statix-sig.stx line 18; ../WebDSL-Type-sig.stx line 7">signatures/WebDSL-Native-sig</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Core-sig.stx#signatures/WebDSL-Core-sig_7_33" id="signatures/WebDSL-Core-sig_47_73" title="Defined at ../WebDSL-Core-sig.stx line 1">signatures/WebDSL-Core-sig</a>
  <a href="../WebDSL-Lexical-sig.stx#signatures/WebDSL-Lexical-sig_7_36" id="signatures/WebDSL-Lexical-sig_76_105" title="Defined at ../WebDSL-Lexical-sig.stx line 1">signatures/WebDSL-Lexical-sig</a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <a href="#NCAlias_322_329" id="NCAlias_130_137" title="Referenced at line 21, 33, 34, 35, 36">NCAlias</a>
    <a href="#NCSuper_350_357" id="NCSuper_142_149" title="Referenced at line 22, 33, 37, 38">NCSuper</a>
    <a href="#NCElement_380_389" id="NCElement_154_163" title="Referenced at line 23, 33, 34, 39, 40, 47, 48, 49; ../../../../trans/static-semantics/webdsl-native.stx line 37, 64, 97">NCElement</a>
    <a href="#NativeType_413_423" id="NativeType_168_178" title="Referenced at line 24, 39, 41, 42, 48, 49, 50, 50, 51, 51, 52, 52, 53; ../../../../trans/static-semantics/webdsl-native.stx line 118; ../../../../trans/static-semantics/webdsl.stx line 38">NativeType</a>
    <a href="#NCFunction_447_457" id="NCFunction_183_193" title="Referenced at line 25, 40, 41, 46; ../WebDSL-Type-sig.stx line 23; ../../../../trans/static-semantics/webdsl-native.stx line 83">NCFunction</a>
    <a href="#NCFunctionReturn_487_503" id="NCFunctionReturn_198_214" title="Referenced at line 26, 41, 42, 43">NCFunctionReturn</a>
    <a href="#NCFunctionStatic_533_549" id="NCFunctionStatic_219_235" title="Referenced at line 27, 41, 44, 45">NCFunctionStatic</a>
    <a href="#NCFunctionFromStatic_583_603" id="NCFunctionFromStatic_240_260" title="Referenced at line 28, 46, 47; ../WebDSL-Type-sig.stx line 24">NCFunctionFromStatic</a>
    <a href="#NativeFunId_1013_1024" id="NativeFunId_265_276" title="Referenced at line 41">NativeFunId</a> = <span class="keyword">string</span>

  <span class="keyword">constructors</span>
    <span id="NCAlias-Plhdr_306_319" title="Not referenced locally, nor via imports">NCAlias-Plhdr</span> : <a href="#NCAlias_130_137" id="NCAlias_322_329" title="Defined at line 10">NCAlias</a>
    <span id="NCSuper-Plhdr_334_347" title="Not referenced locally, nor via imports">NCSuper-Plhdr</span> : <a href="#NCSuper_142_149" id="NCSuper_350_357" title="Defined at line 11">NCSuper</a>
    <span id="NCElement-Plhdr_362_377" title="Not referenced locally, nor via imports">NCElement-Plhdr</span> : <a href="#NCElement_154_163" id="NCElement_380_389" title="Defined at line 12">NCElement</a>
    <span id="NativeType-Plhdr_394_410" title="Not referenced locally, nor via imports">NativeType-Plhdr</span> : <a href="#NativeType_168_178" id="NativeType_413_423" title="Defined at line 13">NativeType</a>
    <span id="NCFunction-Plhdr_428_444" title="Not referenced locally, nor via imports">NCFunction-Plhdr</span> : <a href="#NCFunction_183_193" id="NCFunction_447_457" title="Defined at line 14">NCFunction</a>
    <span id="NCFunctionReturn-Plhdr_462_484" title="Not referenced locally, nor via imports">NCFunctionReturn-Plhdr</span> : <a href="#NCFunctionReturn_198_214" id="NCFunctionReturn_487_503" title="Defined at line 15">NCFunctionReturn</a>
    <span id="NCFunctionStatic-Plhdr_508_530" title="Not referenced locally, nor via imports">NCFunctionStatic-Plhdr</span> : <a href="#NCFunctionStatic_219_235" id="NCFunctionStatic_533_549" title="Defined at line 16">NCFunctionStatic</a>
    <span id="NCFunctionFromStatic-Plhdr_554_580" title="Not referenced locally, nor via imports">NCFunctionFromStatic-Plhdr</span> : <a href="#NCFunctionFromStatic_240_260" id="NCFunctionFromStatic_583_603" title="Defined at line 17">NCFunctionFromStatic</a>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <a href="../../../../trans/static-semantics/webdsl-native.stx#NativeClass_586_597" id="NativeClass_635_646" title="Referenced at ../../../../trans/static-semantics/webdsl-native.stx line 22, 26">NativeClass</a> : <a href="../WebDSL-Lexical-sig.stx#QId_70_73" id="QId_649_652" title="Defined at ../WebDSL-Lexical-sig.stx line 8">QId</a> * <a href="#NCAlias_130_137" id="NCAlias_655_662" title="Defined at line 10">NCAlias</a> * <a href="#NCSuper_142_149" id="NCSuper_665_672" title="Defined at line 11">NCSuper</a> * <span class="keyword">list</span>(<a href="#NCElement_154_163" id="NCElement_680_689" title="Defined at line 12">NCElement</a>) -&gt; <a href="../WebDSL-Core-sig.stx#Definition_310_320" id="Definition_694_704" title="Defined at ../WebDSL-Core-sig.stx line 20">Definition</a>
    <a href="../../../../trans/static-semantics/webdsl-native.stx#ExtendNativeClass_2042_2059" id="ExtendNativeClass_709_726" title="Referenced at ../../../../trans/static-semantics/webdsl-native.stx line 50">ExtendNativeClass</a> : <a href="../WebDSL-Lexical-sig.stx#QId_70_73" id="QId_729_732" title="Defined at ../WebDSL-Lexical-sig.stx line 8">QId</a> * <a href="#NCAlias_130_137" id="NCAlias_735_742" title="Defined at line 10">NCAlias</a> * <span class="keyword">list</span>(<a href="#NCElement_154_163" id="NCElement_750_759" title="Defined at line 12">NCElement</a>) -&gt; <a href="../WebDSL-Core-sig.stx#Definition_310_320" id="Definition_764_774" title="Defined at ../WebDSL-Core-sig.stx line 20">Definition</a>
    <a href="../../../../trans/static-semantics/webdsl-native.stx#NCAlias_601_608" id="NCAlias_779_786" title="Referenced at ../../../../trans/static-semantics/webdsl-native.stx line 22, 26, 50">NCAlias</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_789_791" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> -&gt; <a href="#NCAlias_130_137" id="NCAlias_795_802" title="Defined at line 10">NCAlias</a>
    <span id="NCAliasNone_807_818" title="Not referenced locally, nor via imports">NCAliasNone</span> : <a href="#NCAlias_130_137" id="NCAlias_821_828" title="Defined at line 10">NCAlias</a>
    <a href="../../../../trans/static-semantics/webdsl-native.stx#NCSuper_788_795" id="NCSuper_833_840" title="Referenced at ../../../../trans/static-semantics/webdsl-native.stx line 26">NCSuper</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_843_845" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> -&gt; <a href="#NCSuper_142_149" id="NCSuper_849_856" title="Defined at line 11">NCSuper</a>
    <a href="../../../../trans/static-semantics/webdsl-native.stx#NCSuperNone_617_628" id="NCSuperNone_861_872" title="Referenced at ../../../../trans/static-semantics/webdsl-native.stx line 22">NCSuperNone</a> : <a href="#NCSuper_142_149" id="NCSuper_875_882" title="Defined at line 11">NCSuper</a>
    <a href="../../../../trans/static-semantics/webdsl-native.stx#NCProperty_3038_3048" id="NCProperty_887_897" title="Referenced at ../../../../trans/static-semantics/webdsl-native.stx line 70">NCProperty</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_900_902" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="#NativeType_168_178" id="NativeType_905_915" title="Defined at line 13">NativeType</a> -&gt; <a href="#NCElement_154_163" id="NCElement_919_928" title="Defined at line 12">NCElement</a>
    <a href="../../../../trans/static-semantics/webdsl-native.stx#NCFunctionElement_3260_3277" id="NCFunctionElement_933_950" title="Referenced at ../../../../trans/static-semantics/webdsl-native.stx line 75">NCFunctionElement</a> : <a href="#NCFunction_183_193" id="NCFunction_953_963" title="Defined at line 14">NCFunction</a> -&gt; <a href="#NCElement_154_163" id="NCElement_967_976" title="Defined at line 12">NCElement</a>
    <a href="../../../../trans/static-semantics/webdsl-native.stx#NCFunction_3616_3626" id="NCFunction_981_991" title="Referenced at ../../../../trans/static-semantics/webdsl-native.stx line 84, 89">NCFunction</a> : <a href="#NCFunctionStatic_219_235" id="NCFunctionStatic_994_1010" title="Defined at line 16">NCFunctionStatic</a> * <a href="#NativeFunId_265_276" id="NativeFunId_1013_1024" title="Defined at line 18">NativeFunId</a> * <span class="keyword">list</span>(<a href="#NativeType_168_178" id="NativeType_1032_1042" title="Defined at line 13">NativeType</a>) * <a href="#NCFunctionReturn_198_214" id="NCFunctionReturn_1046_1062" title="Defined at line 15">NCFunctionReturn</a> -&gt; <a href="#NCFunction_183_193" id="NCFunction_1066_1076" title="Defined at line 14">NCFunction</a>
    <a href="../../../../trans/static-semantics/webdsl-native.stx#NCFunctionReturn_3656_3672" id="NCFunctionReturn_1081_1097" title="Referenced at ../../../../trans/static-semantics/webdsl-native.stx line 84, 89">NCFunctionReturn</a> : <a href="#NativeType_168_178" id="NativeType_1100_1110" title="Defined at line 13">NativeType</a> -&gt; <a href="#NCFunctionReturn_198_214" id="NCFunctionReturn_1114_1130" title="Defined at line 15">NCFunctionReturn</a>
    <span id="NCFunctionReturnNone_1135_1155" title="Not referenced locally, nor via imports">NCFunctionReturnNone</span> : <a href="#NCFunctionReturn_198_214" id="NCFunctionReturn_1158_1174" title="Defined at line 15">NCFunctionReturn</a>
    <a href="../../../../trans/static-semantics/webdsl-native.stx#NCFunctionStatic_3627_3643" id="NCFunctionStatic_1179_1195" title="Referenced at ../../../../trans/static-semantics/webdsl-native.stx line 84">NCFunctionStatic</a> : <a href="#NCFunctionStatic_219_235" id="NCFunctionStatic_1198_1214" title="Defined at line 16">NCFunctionStatic</a>
    <a href="../../../../trans/static-semantics/webdsl-native.stx#NCFunctionStaticNone_3941_3961" id="NCFunctionStaticNone_1219_1239" title="Referenced at ../../../../trans/static-semantics/webdsl-native.stx line 89">NCFunctionStaticNone</a> : <a href="#NCFunctionStatic_219_235" id="NCFunctionStatic_1242_1258" title="Defined at line 16">NCFunctionStatic</a>
    <a href="../../../../trans/static-semantics/webdsl-native.stx#NCFunctionFromStatic_3405_3425" id="NCFunctionFromStatic_1263_1283" title="Referenced at ../../../../trans/static-semantics/webdsl-native.stx line 78; ../../../../trans/static-semantics/types/type-extensions.stx line 27">NCFunctionFromStatic</a> : <a href="../WebDSL-Lexical-sig.stx#QId_70_73" id="QId_1286_1289" title="Defined at ../WebDSL-Lexical-sig.stx line 8">QId</a> * <a href="#NCFunction_183_193" id="NCFunction_1292_1302" title="Defined at line 14">NCFunction</a> -&gt; <a href="#NCFunctionFromStatic_240_260" id="NCFunctionFromStatic_1306_1326" title="Defined at line 17">NCFunctionFromStatic</a>
    <a href="../../../../trans/static-semantics/webdsl-native.stx#NCFunctionFromStaticElement_3377_3404" id="NCFunctionFromStaticElement_1331_1358" title="Referenced at ../../../../trans/static-semantics/webdsl-native.stx line 78">NCFunctionFromStaticElement</a> : <a href="#NCFunctionFromStatic_240_260" id="NCFunctionFromStatic_1361_1381" title="Defined at line 17">NCFunctionFromStatic</a> -&gt; <a href="#NCElement_154_163" id="NCElement_1385_1394" title="Defined at line 12">NCElement</a>
    <a href="../../../../trans/static-semantics/webdsl-native.stx#NCConstructor_2922_2935" id="NCConstructor_1399_1412" title="Referenced at ../../../../trans/static-semantics/webdsl-native.stx line 67, 99">NCConstructor</a> : <span class="keyword">list</span>(<a href="#NativeType_168_178" id="NativeType_1420_1430" title="Defined at line 13">NativeType</a>) -&gt; <a href="#NCElement_154_163" id="NCElement_1435_1444" title="Defined at line 12">NCElement</a>
    <a href="../../../../trans/static-semantics/webdsl-native.stx#NCConstructorFromStatic_2970_2993" id="NCConstructorFromStatic_1449_1472" title="Referenced at ../../../../trans/static-semantics/webdsl-native.stx line 68, 103">NCConstructorFromStatic</a> : <a href="../WebDSL-Lexical-sig.stx#QId_70_73" id="QId_1475_1478" title="Defined at ../WebDSL-Lexical-sig.stx line 8">QId</a> * <span class="keyword">list</span>(<a href="#NativeType_168_178" id="NativeType_1486_1496" title="Defined at line 13">NativeType</a>) -&gt; <a href="#NCElement_154_163" id="NCElement_1501_1510" title="Defined at line 12">NCElement</a>
    <a href="../../../../trans/static-semantics/webdsl-native.stx#NativeGenericType_5501_5518" id="NativeGenericType_1515_1532" title="Referenced at ../../../../trans/static-semantics/webdsl-native.stx line 120, 121, 122">NativeGenericType</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_1535_1537" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <span class="keyword">list</span>(<a href="#NativeType_168_178" id="NativeType_1545_1555" title="Defined at line 13">NativeType</a>) -&gt; <a href="#NativeType_168_178" id="NativeType_1560_1570" title="Defined at line 13">NativeType</a>
    <span id="NativeGenericTypeList_1575_1596" title="Not referenced locally, nor via imports">NativeGenericTypeList</span> : <span class="keyword">list</span>(<a href="#NativeType_168_178" id="NativeType_1604_1614" title="Defined at line 13">NativeType</a>) -&gt; <a href="#NativeType_168_178" id="NativeType_1619_1629" title="Defined at line 13">NativeType</a>
    <span id="NativeGenericTypeSet_1634_1654" title="Not referenced locally, nor via imports">NativeGenericTypeSet</span> : <span class="keyword">list</span>(<a href="#NativeType_168_178" id="NativeType_1662_1672" title="Defined at line 13">NativeType</a>) -&gt; <a href="#NativeType_168_178" id="NativeType_1677_1687" title="Defined at line 13">NativeType</a>
    <a href="../../../../trans/static-semantics/webdsl-native.stx#NativeSimpleType_5426_5442" id="NativeSimpleType_1692_1708" title="Referenced at ../../../../trans/static-semantics/webdsl-native.stx line 119">NativeSimpleType</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_1711_1713" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> -&gt; <a href="#NativeType_168_178" id="NativeType_1717_1727" title="Defined at line 13">NativeType</a>
</code></pre></td></tr></tbody></table></div>