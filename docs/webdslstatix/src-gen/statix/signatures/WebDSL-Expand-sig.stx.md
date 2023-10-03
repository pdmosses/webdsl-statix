---
title: WebDSL-Expand-sig.stx
hide:
  - toc
---

# `WebDSL-Expand-sig.stx`



[pdmosses/webdsl-statix/webdslstatix/src-gen/statix/signatures/WebDSL-Expand-sig.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/src-gen/statix/signatures/WebDSL-Expand-sig.stx "The source file on GitHub"

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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix-sig.stx#signatures/WebDSL-Expand-sig_386_414" id="signatures/WebDSL-Expand-sig_7_35" title="Referenced at ../webdsl-statix-sig.stx line 14">signatures/WebDSL-Expand-sig</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action-sig.stx#signatures/WebDSL-Action-sig_7_35" id="signatures/WebDSL-Action-sig_47_75" title="Defined at ../WebDSL-Action-sig.stx line 1">signatures/WebDSL-Action-sig</a>
  <a href="../WebDSL-Lexical-sig.stx#signatures/WebDSL-Lexical-sig_7_36" id="signatures/WebDSL-Lexical-sig_78_107" title="Defined at ../WebDSL-Lexical-sig.stx line 1">signatures/WebDSL-Lexical-sig</a>
  <a href="../WebDSL-Core-sig.stx#signatures/WebDSL-Core-sig_7_33" id="signatures/WebDSL-Core-sig_110_136" title="Defined at ../WebDSL-Core-sig.stx line 1">signatures/WebDSL-Core-sig</a>
  <a href="../WebDSL-UI-sig.stx#signatures/WebDSL-UI-sig_7_31" id="signatures/WebDSL-UI-sig_139_163" title="Defined at ../WebDSL-UI-sig.stx line 1">signatures/WebDSL-UI-sig</a>
  <a href="../WebDSL-DataModel-sig.stx#signatures/WebDSL-DataModel-sig_7_38" id="signatures/WebDSL-DataModel-sig_166_197" title="Defined at ../WebDSL-DataModel-sig.stx line 1">signatures/WebDSL-DataModel-sig</a>
  <a href="../WebDSL-Attributes-sig.stx#signatures/WebDSL-Attributes-sig_7_39" id="signatures/WebDSL-Attributes-sig_200_232" title="Defined at ../WebDSL-Attributes-sig.stx line 1">signatures/WebDSL-Attributes-sig</a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <a href="#DeriveProperty_399_413" id="DeriveProperty_257_271" title="Referenced at line 21, 28, 30, 33, 34; ../../../../trans/static-semantics/webdsl-expand.stx line 46">DeriveProperty</a>
    <a href="#DeriveBody_437_447" id="DeriveBody_276_286" title="Referenced at line 22, 30, 31, 32, 35; ../../../../trans/static-semantics/webdsl-expand.stx line 61">DeriveBody</a>
    <a href="#DeriveBodyElement_478_495" id="DeriveBodyElement_291_308" title="Referenced at line 23, 35, 36; ../../../../trans/static-semantics/webdsl-expand.stx line 65">DeriveBodyElement</a>
    <a href="#ExpandId_1115_1123" id="ExpandId_313_321" title="Referenced at line 38, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52">ExpandId</a> = <span class="keyword">string</span>
    <a href="#ExpandArgId_1185_1196" id="ExpandArgId_335_346" title="Referenced at line 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 51, 52, 52">ExpandArgId</a> = <span class="keyword">string</span>

  <span class="keyword">constructors</span>
    <span id="DeriveProperty-Plhdr_376_396" title="Not referenced locally, nor via imports">DeriveProperty-Plhdr</span> : <a href="#DeriveProperty_257_271" id="DeriveProperty_399_413" title="Defined at line 14">DeriveProperty</a>
    <span id="DeriveBody-Plhdr_418_434" title="Not referenced locally, nor via imports">DeriveBody-Plhdr</span> : <a href="#DeriveBody_276_286" id="DeriveBody_437_447" title="Defined at line 15">DeriveBody</a>
    <span id="DeriveBodyElement-Plhdr_452_475" title="Not referenced locally, nor via imports">DeriveBodyElement-Plhdr</span> : <a href="#DeriveBodyElement_291_308" id="DeriveBodyElement_478_495" title="Defined at line 16">DeriveBodyElement</a>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <span id="DeriveNoBody_527_539" title="Not referenced locally, nor via imports">DeriveNoBody</span> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_542_544" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_547_550" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <span class="keyword">list</span>(<a href="#DeriveProperty_257_271" id="DeriveProperty_558_572" title="Defined at line 14">DeriveProperty</a>) -&gt; <a href="../WebDSL-UI-sig.stx#TemplateElement_256_271" id="TemplateElement_577_592" title="Defined at ../WebDSL-UI-sig.stx line 15">TemplateElement</a>
    <span id="DeriveNoForNoBody_597_614" title="Not referenced locally, nor via imports">DeriveNoForNoBody</span> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_617_619" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_622_625" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="../WebDSL-UI-sig.stx#TemplateElement_256_271" id="TemplateElement_629_644" title="Defined at ../WebDSL-UI-sig.stx line 15">TemplateElement</a>
    <a href="../../../../trans/static-semantics/webdsl-expand.stx#Derive_1022_1028" id="Derive_649_655" title="Referenced at ../../../../trans/static-semantics/webdsl-expand.stx line 29">Derive</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_658_660" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_663_666" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <span class="keyword">list</span>(<a href="#DeriveProperty_257_271" id="DeriveProperty_674_688" title="Defined at line 14">DeriveProperty</a>) * <a href="#DeriveBody_276_286" id="DeriveBody_692_702" title="Defined at line 15">DeriveBody</a> -&gt; <a href="../WebDSL-UI-sig.stx#TemplateElement_256_271" id="TemplateElement_706_721" title="Defined at ../WebDSL-UI-sig.stx line 15">TemplateElement</a>
    <span id="DeriveNoFor_726_737" title="Not referenced locally, nor via imports">DeriveNoFor</span> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_740_742" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_745_748" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <a href="#DeriveBody_276_286" id="DeriveBody_751_761" title="Defined at line 15">DeriveBody</a> -&gt; <a href="../WebDSL-UI-sig.stx#TemplateElement_256_271" id="TemplateElement_765_780" title="Defined at ../WebDSL-UI-sig.stx line 15">TemplateElement</a>
    <a href="../../../../trans/static-semantics/webdsl-expand.stx#DeriveNoFromNoFor_792_809" id="DeriveNoFromNoFor_785_802" title="Referenced at ../../../../trans/static-semantics/webdsl-expand.stx line 24">DeriveNoFromNoFor</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_805_807" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="#DeriveBody_276_286" id="DeriveBody_810_820" title="Defined at line 15">DeriveBody</a> -&gt; <a href="../WebDSL-UI-sig.stx#TemplateElement_256_271" id="TemplateElement_824_839" title="Defined at ../WebDSL-UI-sig.stx line 15">TemplateElement</a>
    <a href="../../../../trans/static-semantics/webdsl-expand.stx#DeriveDefault_1831_1844" id="DeriveDefault_844_857" title="Referenced at ../../../../trans/static-semantics/webdsl-expand.stx line 48, 53, 57">DeriveDefault</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_860_862" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> -&gt; <a href="#DeriveProperty_257_271" id="DeriveProperty_866_880" title="Defined at line 14">DeriveProperty</a>
    <span id="DeriveMode_885_895" title="Not referenced locally, nor via imports">DeriveMode</span> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_898_900" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_903_905" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> -&gt; <a href="#DeriveProperty_257_271" id="DeriveProperty_909_923" title="Defined at line 14">DeriveProperty</a>
    <a href="../../../../trans/static-semantics/webdsl-expand.stx#DeriveBody_2684_2694" id="DeriveBody_928_938" title="Referenced at ../../../../trans/static-semantics/webdsl-expand.stx line 62">DeriveBody</a> : <span class="keyword">list</span>(<a href="#DeriveBodyElement_291_308" id="DeriveBodyElement_946_963" title="Defined at line 16">DeriveBodyElement</a>) -&gt; <a href="#DeriveBody_276_286" id="DeriveBody_968_978" title="Defined at line 15">DeriveBody</a>
    <span id="DeriveBodyElement_983_1000" title="Not referenced locally, nor via imports">DeriveBodyElement</span> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_1003_1005" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <span class="keyword">list</span>(<a href="../WebDSL-UI-sig.stx#TemplateElement_256_271" id="TemplateElement_1013_1028" title="Defined at ../WebDSL-UI-sig.stx line 15">TemplateElement</a>) -&gt; <a href="#DeriveBodyElement_291_308" id="DeriveBodyElement_1033_1050" title="Defined at line 16">DeriveBodyElement</a>
    <a href="../../../../trans/static-semantics/webdsl-expand.stx#DeriveCrud_2988_2998" id="DeriveCrud_1055_1065" title="Referenced at ../../../../trans/static-semantics/webdsl-expand.stx line 70">DeriveCrud</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_1068_1070" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> -&gt; <a href="../WebDSL-Core-sig.stx#Definition_310_320" id="Definition_1074_1084" title="Defined at ../WebDSL-Core-sig.stx line 20">Definition</a>
    <a href="../../../../trans/static-semantics/webdsl-expand.stx#ExpandTemplateCall_282_300" id="ExpandTemplateCall_1089_1107" title="Referenced at ../../../../trans/static-semantics/webdsl-expand.stx line 15">ExpandTemplateCall</a> : <span class="keyword">list</span>(<a href="#ExpandId_313_321" id="ExpandId_1115_1123" title="Defined at line 17">ExpandId</a>) * <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_1127_1129" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> -&gt; <a href="../WebDSL-Core-sig.stx#Definition_310_320" id="Definition_1133_1143" title="Defined at ../WebDSL-Core-sig.stx line 20">Definition</a>
    <a href="../../../../trans/static-semantics/webdsl-expand.stx#ExpandTemplateDefinition_389_413" id="ExpandTemplateDefinition_1148_1172" title="Referenced at ../../../../trans/static-semantics/webdsl-expand.stx line 16">ExpandTemplateDefinition</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_1175_1177" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <span class="keyword">list</span>(<a href="#ExpandArgId_335_346" id="ExpandArgId_1185_1196" title="Defined at line 18">ExpandArgId</a>) * <span class="keyword">list</span>(<a href="../WebDSL-Core-sig.stx#Definition_310_320" id="Definition_1205_1215" title="Defined at ../WebDSL-Core-sig.stx line 20">Definition</a>) -&gt; <a href="../WebDSL-Core-sig.stx#Definition_310_320" id="Definition_1220_1230" title="Defined at ../WebDSL-Core-sig.stx line 20">Definition</a>
    <span id="TemplateElementExpandLocal_1235_1261" title="Not referenced locally, nor via imports">TemplateElementExpandLocal</span> : <span class="keyword">list</span>(<a href="#ExpandId_313_321" id="ExpandId_1269_1277" title="Defined at line 17">ExpandId</a>) * <span class="keyword">list</span>(<a href="#ExpandArgId_335_346" id="ExpandArgId_1286_1297" title="Defined at line 18">ExpandArgId</a>) * <span class="keyword">list</span>(<a href="../WebDSL-UI-sig.stx#TemplateElement_256_271" id="TemplateElement_1306_1321" title="Defined at ../WebDSL-UI-sig.stx line 15">TemplateElement</a>) -&gt; <a href="../WebDSL-UI-sig.stx#TemplateElement_256_271" id="TemplateElement_1326_1341" title="Defined at ../WebDSL-UI-sig.stx line 15">TemplateElement</a>
    <span id="EntityBodyDeclarationExpandLocal_1346_1378" title="Not referenced locally, nor via imports">EntityBodyDeclarationExpandLocal</span> : <span class="keyword">list</span>(<a href="#ExpandId_313_321" id="ExpandId_1386_1394" title="Defined at line 17">ExpandId</a>) * <span class="keyword">list</span>(<a href="#ExpandArgId_335_346" id="ExpandArgId_1403_1414" title="Defined at line 18">ExpandArgId</a>) * <span class="keyword">list</span>(<a href="../WebDSL-DataModel-sig.stx#EntityBodyDeclaration_164_185" id="EntityBodyDeclaration_1423_1444" title="Defined at ../WebDSL-DataModel-sig.stx line 11">EntityBodyDeclaration</a>) -&gt; <a href="../WebDSL-DataModel-sig.stx#EntityBodyDeclaration_164_185" id="EntityBodyDeclaration_1449_1470" title="Defined at ../WebDSL-DataModel-sig.stx line 11">EntityBodyDeclaration</a>
    <a href="../../../../trans/static-semantics/webdsl-expand.stx#StatementExpandLocal_510_530" id="StatementExpandLocal_1475_1495" title="Referenced at ../../../../trans/static-semantics/webdsl-expand.stx line 18">StatementExpandLocal</a> : <span class="keyword">list</span>(<a href="#ExpandId_313_321" id="ExpandId_1503_1511" title="Defined at line 17">ExpandId</a>) * <span class="keyword">list</span>(<a href="#ExpandArgId_335_346" id="ExpandArgId_1520_1531" title="Defined at line 18">ExpandArgId</a>) * <span class="keyword">list</span>(<a href="../WebDSL-Core-sig.stx#Statement_350_359" id="Statement_1540_1549" title="Defined at ../WebDSL-Core-sig.stx line 23">Statement</a>) -&gt; <a href="../WebDSL-Core-sig.stx#Statement_350_359" id="Statement_1554_1563" title="Defined at ../WebDSL-Core-sig.stx line 23">Statement</a>
    <span id="ObjectPropertyAssignmentExpandLocal_1568_1603" title="Not referenced locally, nor via imports">ObjectPropertyAssignmentExpandLocal</span> : <span class="keyword">list</span>(<a href="#ExpandId_313_321" id="ExpandId_1611_1619" title="Defined at line 17">ExpandId</a>) * <span class="keyword">list</span>(<a href="#ExpandArgId_335_346" id="ExpandArgId_1628_1639" title="Defined at line 18">ExpandArgId</a>) * <span class="keyword">list</span>(<a href="../WebDSL-Action-sig.stx#ObjectPropertyAssignment_431_455" id="ObjectPropertyAssignment_1648_1672" title="Defined at ../WebDSL-Action-sig.stx line 27">ObjectPropertyAssignment</a>) -&gt; <a href="../WebDSL-Action-sig.stx#ObjectPropertyAssignment_431_455" id="ObjectPropertyAssignment_1677_1701" title="Defined at ../WebDSL-Action-sig.stx line 27">ObjectPropertyAssignment</a>
    <span id="DefinitionExpandLocal_1706_1727" title="Not referenced locally, nor via imports">DefinitionExpandLocal</span> : <span class="keyword">list</span>(<a href="#ExpandId_313_321" id="ExpandId_1735_1743" title="Defined at line 17">ExpandId</a>) * <span class="keyword">list</span>(<a href="#ExpandArgId_335_346" id="ExpandArgId_1752_1763" title="Defined at line 18">ExpandArgId</a>) * <span class="keyword">list</span>(<a href="../WebDSL-Core-sig.stx#Definition_310_320" id="Definition_1772_1782" title="Defined at ../WebDSL-Core-sig.stx line 20">Definition</a>) -&gt; <a href="../WebDSL-Core-sig.stx#Definition_310_320" id="Definition_1787_1797" title="Defined at ../WebDSL-Core-sig.stx line 20">Definition</a>
    <a href="../../../../trans/static-semantics/webdsl-expand.stx#ExpExpandLocal_633_647" id="ExpExpandLocal_1802_1816" title="Referenced at ../../../../trans/static-semantics/webdsl-expand.stx line 20">ExpExpandLocal</a> : <span class="keyword">list</span>(<a href="#ExpandId_313_321" id="ExpandId_1824_1832" title="Defined at line 17">ExpandId</a>) * <span class="keyword">list</span>(<a href="#ExpandArgId_335_346" id="ExpandArgId_1841_1852" title="Defined at line 18">ExpandArgId</a>) * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_1856_1859" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_1863_1866" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a>
    <a href="../../../../trans/static-semantics/ui/attributes.stx#AttributeExpandLocal_1099_1119" id="AttributeExpandLocal_1871_1891" title="Referenced at ../../../../trans/static-semantics/ui/attributes.stx line 32">AttributeExpandLocal</a> : <span class="keyword">list</span>(<a href="#ExpandId_313_321" id="ExpandId_1899_1907" title="Defined at line 17">ExpandId</a>) * <span class="keyword">list</span>(<a href="#ExpandArgId_335_346" id="ExpandArgId_1916_1927" title="Defined at line 18">ExpandArgId</a>) * <a href="../WebDSL-Attributes-sig.stx#Attribute_292_301" id="Attribute_1931_1940" title="Defined at ../WebDSL-Attributes-sig.stx line 16">Attribute</a> -&gt; <a href="../WebDSL-Attributes-sig.stx#Attribute_292_301" id="Attribute_1944_1953" title="Defined at ../WebDSL-Attributes-sig.stx line 16">Attribute</a>
    <span id="PropertyAssignmentExpandLocal_1958_1987" title="Not referenced locally, nor via imports">PropertyAssignmentExpandLocal</span> : <span class="keyword">list</span>(<a href="#ExpandId_313_321" id="ExpandId_1995_2003" title="Defined at line 17">ExpandId</a>) * <span class="keyword">list</span>(<a href="#ExpandArgId_335_346" id="ExpandArgId_2012_2023" title="Defined at line 18">ExpandArgId</a>) * <a href="../WebDSL-UI-sig.stx#PropertyAssignment_320_338" id="PropertyAssignment_2027_2045" title="Defined at ../WebDSL-UI-sig.stx line 19">PropertyAssignment</a> -&gt; <a href="../WebDSL-UI-sig.stx#PropertyAssignment_320_338" id="PropertyAssignment_2049_2067" title="Defined at ../WebDSL-UI-sig.stx line 19">PropertyAssignment</a>
    <span id="FormalArgExpandLocal_2072_2092" title="Not referenced locally, nor via imports">FormalArgExpandLocal</span> : <span class="keyword">list</span>(<a href="#ExpandId_313_321" id="ExpandId_2100_2108" title="Defined at line 17">ExpandId</a>) * <span class="keyword">list</span>(<a href="#ExpandArgId_335_346" id="ExpandArgId_2117_2128" title="Defined at line 18">ExpandArgId</a>) * <a href="../WebDSL-Core-sig.stx#FormalArg_164_173" id="FormalArg_2132_2141" title="Defined at ../WebDSL-Core-sig.stx line 11">FormalArg</a> -&gt; <a href="../WebDSL-Core-sig.stx#FormalArg_164_173" id="FormalArg_2145_2154" title="Defined at ../WebDSL-Core-sig.stx line 11">FormalArg</a>
    <span id="CaseAltExpandLocal_2159_2177" title="Not referenced locally, nor via imports">CaseAltExpandLocal</span> : <span class="keyword">list</span>(<a href="#ExpandId_313_321" id="ExpandId_2185_2193" title="Defined at line 17">ExpandId</a>) * <span class="keyword">list</span>(<a href="#ExpandArgId_335_346" id="ExpandArgId_2202_2213" title="Defined at line 18">ExpandArgId</a>) * <a href="../WebDSL-Action-sig.stx#Case_310_314" id="Case_2217_2221" title="Defined at ../WebDSL-Action-sig.stx line 19">Case</a> -&gt; <a href="../WebDSL-Action-sig.stx#Case_310_314" id="Case_2225_2229" title="Defined at ../WebDSL-Action-sig.stx line 19">Case</a>
    <span id="TemplateCaseAltExpandLocal_2234_2260" title="Not referenced locally, nor via imports">TemplateCaseAltExpandLocal</span> : <span class="keyword">list</span>(<a href="#ExpandId_313_321" id="ExpandId_2268_2276" title="Defined at line 17">ExpandId</a>) * <span class="keyword">list</span>(<a href="#ExpandArgId_335_346" id="ExpandArgId_2285_2296" title="Defined at line 18">ExpandArgId</a>) * <a href="../WebDSL-UI-sig.stx#TemplateCaseAlt_362_377" id="TemplateCaseAlt_2300_2315" title="Defined at ../WebDSL-UI-sig.stx line 21">TemplateCaseAlt</a> -&gt; <a href="../WebDSL-UI-sig.stx#TemplateCaseAlt_362_377" id="TemplateCaseAlt_2319_2334" title="Defined at ../WebDSL-UI-sig.stx line 21">TemplateCaseAlt</a>
    <span id="TypeCaseAltExpandLocal_2339_2361" title="Not referenced locally, nor via imports">TypeCaseAltExpandLocal</span> : <span class="keyword">list</span>(<a href="#ExpandId_313_321" id="ExpandId_2369_2377" title="Defined at line 17">ExpandId</a>) * <span class="keyword">list</span>(<a href="#ExpandArgId_335_346" id="ExpandArgId_2386_2397" title="Defined at line 18">ExpandArgId</a>) * <a href="#ExpandArgId_335_346" id="ExpandArgId_2401_2412" title="Defined at line 18">ExpandArgId</a> * <a href="../WebDSL-Action-sig.stx#Block_255_260" id="Block_2415_2420" title="Defined at ../WebDSL-Action-sig.stx line 15">Block</a> -&gt; <a href="../WebDSL-Action-sig.stx#TypeCaseAlt_319_330" id="TypeCaseAlt_2424_2435" title="Defined at ../WebDSL-Action-sig.stx line 20">TypeCaseAlt</a>
    <span id="TemplateTypeCaseAltExpandLocal_2440_2470" title="Not referenced locally, nor via imports">TemplateTypeCaseAltExpandLocal</span> : <span class="keyword">list</span>(<a href="#ExpandId_313_321" id="ExpandId_2478_2486" title="Defined at line 17">ExpandId</a>) * <span class="keyword">list</span>(<a href="#ExpandArgId_335_346" id="ExpandArgId_2495_2506" title="Defined at line 18">ExpandArgId</a>) * <a href="#ExpandArgId_335_346" id="ExpandArgId_2510_2521" title="Defined at line 18">ExpandArgId</a> * <span class="keyword">list</span>(<a href="../WebDSL-UI-sig.stx#TemplateElement_256_271" id="TemplateElement_2529_2544" title="Defined at ../WebDSL-UI-sig.stx line 15">TemplateElement</a>) -&gt; <a href="../WebDSL-UI-sig.stx#TemplateTypeCaseAlt_382_401" id="TemplateTypeCaseAlt_2549_2568" title="Defined at ../WebDSL-UI-sig.stx line 22">TemplateTypeCaseAlt</a>
</code></pre></td></tr></tbody></table></div>