---
title: WebDSL-Lexical-sig.stx
hide:
  - toc
---

# `WebDSL-Lexical-sig.stx`



[pdmosses/webdsl-statix/webdslstatix/src-gen/statix/signatures/WebDSL-Lexical-sig.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/src-gen/statix/signatures/WebDSL-Lexical-sig.stx "The source file on GitHub"

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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <button class="modal-open" id="signatures/WebDSL-Lexical-sig_1_8" title="Multi-file references" data-urls="../HQL-sig.stx/#signatures/WebDSL-Lexical-sig_5_3 line 5; ../WebDSL-AccessControl-sig.stx/#signatures/WebDSL-Lexical-sig_7_3 line 7; ../WebDSL-Action-sig.stx/#signatures/WebDSL-Lexical-sig_6_3 line 6; ../WebDSL-Ajax-sig.stx/#signatures/WebDSL-Lexical-sig_5_3 line 5; ../WebDSL-Attributes-sig.stx/#signatures/WebDSL-Lexical-sig_5_3 line 5; ../WebDSL-Core-sig.stx/#signatures/WebDSL-Lexical-sig_6_3 line 6; ../WebDSL-DataModel-sig.stx/#signatures/WebDSL-Lexical-sig_6_3 line 6; ../WebDSL-DataValidation-sig.stx/#signatures/WebDSL-Lexical-sig_5_3 line 5; ../WebDSL-Dispatch-sig.stx/#signatures/WebDSL-Lexical-sig_6_3 line 6; ../WebDSL-EntityDerive-sig.stx/#signatures/WebDSL-Lexical-sig_6_3 line 6; ../WebDSL-Exception-sig.stx/#signatures/WebDSL-Lexical-sig_6_3 line 6; ../WebDSL-Expand-sig.stx/#signatures/WebDSL-Lexical-sig_5_3 line 5; ../WebDSL-Generated-sig.stx/#signatures/WebDSL-Lexical-sig_5_3 line 5; ../WebDSL-Native-sig.stx/#signatures/WebDSL-Lexical-sig_5_3 line 5; ../WebDSL-Prefetch-sig.stx/#signatures/WebDSL-Lexical-sig_6_3 line 6; ../WebDSL-Regex-sig.stx/#signatures/WebDSL-Lexical-sig_5_3 line 5; ../WebDSL-Search-sig.stx/#signatures/WebDSL-Lexical-sig_6_3 line 6; ../WebDSL-Service-sig.stx/#signatures/WebDSL-Lexical-sig_6_3 line 6; ../webdsl-statix-sig.stx/#signatures/WebDSL-Lexical-sig_17_3 line 17; ../WebDSL-Test-sig.stx/#signatures/WebDSL-Lexical-sig_5_3 line 5; ../WebDSL-Type-sig.stx/#signatures/WebDSL-Lexical-sig_6_3 line 6; ../WebDSL-UI-sig.stx/#signatures/WebDSL-Lexical-sig_7_3 line 7"><span class="token sort_Id">signatures/WebDSL-Lexical-sig</span></button>

<span class="keyword">imports</span>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <span class="cons_SortAlias"><button class="modal-open" id="QId_8_5" title="Multi-file references" data-urls="../WebDSL-Core-sig.stx/#QId_62_23 line 62, 63; ../WebDSL-Native-sig.stx/#QId_33_19 line 33, 34, 46, 49"><span class="token sort_Id">QId</span></button> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><a href="../WebDSL-UI-sig.stx/#TemplateId_105_19" id="TemplateId_9_5" title="Referenced at ../WebDSL-UI-sig.stx line 105, 106, 111, 237, 238"><span class="token sort_Id">TemplateId</span></a> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><button class="modal-open" id="VarId_10_5" title="Multi-file references" data-urls="../WebDSL-Action-sig.stx/#VarId_88_15 line 88, 89, 90, 106, 107, 108, 109, 116, 158, 159, 160, 161, 162, 163, 164, 165, 166; ../WebDSL-Core-sig.stx/#VarId_53_16 line 53, 56; ../WebDSL-DataModel-sig.stx/#VarId_31_21 line 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42; ../WebDSL-Exception-sig.stx/#VarId_24_13 line 24; ../WebDSL-Prefetch-sig.stx/#VarId_81_23 line 81; ../WebDSL-UI-sig.stx/#VarId_131_23 line 131, 132, 133, 134, 135, 136, 157, 158, 159, 160"><span class="token sort_Id">VarId</span></button> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><a href="../WebDSL-Action-sig.stx/#FAVarId_121_13" id="FAVarId_11_5" title="Referenced at ../WebDSL-Action-sig.stx line 121"><span class="token sort_Id">FAVarId</span></a> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><a href="../WebDSL-Action-sig.stx/#FunId_67_16" id="FunId_12_5" title="Referenced at ../WebDSL-Action-sig.stx line 67, 78, 79, 80, 136"><span class="token sort_Id">FunId</span></a> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><button class="modal-open" id="PropertyId_13_5" title="Multi-file references" data-urls="#PropertyId_70_37 line 70; ../WebDSL-Action-sig.stx/#PropertyId_117_27 line 117; ../WebDSL-Ajax-sig.stx/#PropertyId_61_27 line 61; ../WebDSL-DataModel-sig.stx/#PropertyId_43_16 line 43, 44; ../WebDSL-Prefetch-sig.stx/#PropertyId_82_43 line 82"><span class="token sort_Id">PropertyId</span></button> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><button class="modal-open" id="Id_14_5" title="Multi-file references" data-urls="#Id_69_17 line 69; ../WebDSL-AccessControl-sig.stx/#Id_43_17 line 43, 44, 45, 46, 47, 51, 53, 56, 58, 59, 62; ../WebDSL-Action-sig.stx/#Id_101_17 line 101, 127, 137, 144, 190; ../WebDSL-Ajax-sig.stx/#Id_49_23 line 49, 50, 51, 53, 54, 55, 58, 60; ../WebDSL-Attributes-sig.stx/#Id_29_57 line 29; ../WebDSL-Core-sig.stx/#Id_75_12 line 75, 76; ../WebDSL-DataModel-sig.stx/#Id_26_14 line 26, 27, 28, 29, 30, 57, 58, 59, 61, 62, 71; ../WebDSL-DataValidation-sig.stx/#Id_23_25 line 23, 26, 27; ../WebDSL-Dispatch-sig.stx/#Id_29_21 line 29, 30, 37, 38; ../WebDSL-EntityDerive-sig.stx/#Id_23_23 line 23, 24, 25; ../WebDSL-Expand-sig.stx/#Id_28_20 line 28, 29, 30, 31, 32, 33, 34, 36, 37, 38, 39; ../WebDSL-Generated-sig.stx/#Id_18_22 line 18; ../WebDSL-Native-sig.stx/#Id_35_15 line 35, 37, 39, 50, 53; ../WebDSL-Prefetch-sig.stx/#Id_46_19 line 46, 47, 51, 58; ../WebDSL-Regex-sig.stx/#Id_108_28 line 108; ../WebDSL-Search-sig.stx/#Id_137_45 line 137, 144, 145, 146, 149, 167, 169, 170, 173, 174, 175, 176, 178, 274, 275, 276; ../WebDSL-Service-sig.stx/#Id_23_40 line 23, 24, 27, 28; ../WebDSL-Test-sig.stx/#Id_17_12 line 17; ../WebDSL-Type-sig.stx/#Id_21_15 line 21; ../WebDSL-UI-sig.stx/#Id_102_31 line 102, 109, 112, 235, 240, 241, 243, 244, 245, 246, 257"><span class="token sort_Id">Id</span></button> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><button class="modal-open" id="PageId_15_5" title="Multi-file references" data-urls="../WebDSL-AccessControl-sig.stx/#PageId_40_17 line 40; ../WebDSL-UI-sig.stx/#PageId_110_35 line 110, 191"><span class="token sort_Id">PageId</span></button> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><a href="#ExtendedId_59_18" id="ExtendedId_16_5" title="Referenced at line 59"><span class="token sort_Id">ExtendedId</span></a> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><a href="../WebDSL-Core-sig.stx/#SectionName_61_15" id="SectionName_17_5" title="Referenced at ../WebDSL-Core-sig.stx line 61"><span class="token sort_Id">SectionName</span></a> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortDecl"><button class="modal-open" id="ModuleName_18_5" title="Multi-file references" data-urls="#ModuleName_46_24 line 46, 62, 63; ../WebDSL-Core-sig.stx/#ModuleName_64_18 line 64, 65"><span class="token sort_Id">ModuleName</span></button></span>
    <span class="cons_SortDecl"><button class="modal-open" id="ModulePart_19_5" title="Multi-file references" data-urls="#ModulePart_47_24 line 47, 59, 62; ../../../../trans/static-semantics/webdsl-modules.stx/#ModulePart_120_24 line 120"><span class="token sort_Id">ModulePart</span></button></span>
    <span class="cons_SortDecl"><button class="modal-open" id="ImportName_20_5" title="Multi-file references" data-urls="#ImportName_48_24 line 48, 63; ../WebDSL-Core-sig.stx/#ImportName_71_15 line 71"><span class="token sort_Id">ImportName</span></button></span>
    <span class="cons_SortDecl"><a href="#OptWildcardImport_49_31" id="OptWildcardImport_21_5" title="Referenced at line 49, 60, 61, 63"><span class="token sort_Id">OptWildcardImport</span></a></span>
    <span class="cons_SortAlias"><button class="modal-open" id="Int_22_5" title="Multi-file references" data-urls="../WebDSL-Action-sig.stx/#Int_112_11 line 112; ../WebDSL-DataModel-sig.stx/#Int_67_18 line 67, 70; ../WebDSL-Search-sig.stx/#Int_180_21 line 180, 181"><span class="token sort_Id">Int</span></button> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><a href="../WebDSL-Action-sig.stx/#Long_113_12" id="Long_23_5" title="Referenced at ../WebDSL-Action-sig.stx line 113"><span class="token sort_Id">Long</span></a> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><button class="modal-open" id="Float_24_5" title="Multi-file references" data-urls="../WebDSL-Action-sig.stx/#Float_114_13 line 114; ../WebDSL-Search-sig.stx/#Float_152_44 line 152, 177, 182"><span class="token sort_Id">Float</span></button> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><span id="FloatDigits_25_5" title="Not referenced"><span class="token sort_Id">FloatDigits</span></span> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><span id="ExponentPart_26_5" title="Not referenced"><span class="token sort_Id">ExponentPart</span></span> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><span id="SignedInteger_27_5" title="Not referenced"><span class="token sort_Id">SignedInteger</span></span> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortDecl"><button class="modal-open" id="String_28_5" title="Multi-file references" data-urls="#String_50_20 line 50, 64; ../WebDSL-Action-sig.stx/#String_115_19 line 115; ../WebDSL-Core-sig.stx/#String_76_22 line 76; ../WebDSL-DataModel-sig.stx/#String_68_18 line 68, 72, 73; ../WebDSL-Search-sig.stx/#String_149_29 line 149; ../../../../trans/static-semantics/webdsl-types.stx/#String_85_22 line 85"><span class="token sort_Id">String</span></button></span>
    <span class="cons_SortDecl"><button class="modal-open" id="StringPart_29_5" title="Multi-file references" data-urls="#StringPart_51_24 line 51, 64, 65, 66; ../WebDSL-Action-sig.stx/#StringPart_145_24 line 145; ../WebDSL-UI-sig.stx/#StringPart_229_17 line 229; ../../../../trans/static-semantics/webdsl-types.stx/#StringPart_89_26 line 89"><span class="token sort_Id">StringPart</span></button></span>
    <span class="cons_SortDecl"><a href="#StringInterpExp_52_29" id="StringInterpExp_30_5" title="Referenced at line 52, 66, 67"><span class="token sort_Id">StringInterpExp</span></a></span>
    <span class="cons_SortDecl"><button class="modal-open" id="OutputShorthand_31_5" title="Multi-file references" data-urls="#OutputShorthand_53_29 line 53, 68; ../WebDSL-Action-sig.stx/#OutputShorthand_142_30 line 142; ../WebDSL-UI-sig.stx/#OutputShorthand_228_39 line 228"><span class="token sort_Id">OutputShorthand</span></button></span>
    <span class="cons_SortDecl"><button class="modal-open" id="SimpleExp_32_5" title="Multi-file references" data-urls="#SimpleExp_54_23 line 54, 67, 68, 69, 70; ../WebDSL-Action-sig.stx/#SimpleExp_143_34 line 143, 144; ../../../../trans/static-semantics/webdsl.stx/#SimpleExp_395_29 line 395"><span class="token sort_Id">SimpleExp</span></button></span>
    <span class="cons_SortAlias"><span id="QMLex_33_5" title="Not referenced"><span class="token sort_Id">QMLex</span></span> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><a href="#StringLex_65_19" id="StringLex_34_5" title="Referenced at line 65"><span class="token sort_Id">StringLex</span></a> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><span id="StringChar_35_5" title="Not referenced"><span class="token sort_Id">StringChar</span></span> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><span id="HexPart_36_5" title="Not referenced"><span class="token sort_Id">HexPart</span></span> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><span id="InsideComment_37_5" title="Not referenced"><span class="token sort_Id">InsideComment</span></span> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><span id="CommentChar_38_5" title="Not referenced"><span class="token sort_Id">CommentChar</span></span> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><span id="NewLineEOF_39_5" title="Not referenced"><span class="token sort_Id">NewLineEOF</span></span> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><span id="EOF_40_5" title="Not referenced"><span class="token sort_Id">EOF</span></span> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><a href="../WebDSL-Core-sig.stx/#Word_73_24" id="Word_41_5" title="Referenced at ../WebDSL-Core-sig.stx line 73, 74"><span class="token sort_Id">Word</span></a> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><button class="modal-open" id="SimpleSortLex_42_5" title="Multi-file references" data-urls="../WebDSL-Action-sig.stx/#SimpleSortLex_124_22 line 124; ../WebDSL-Core-sig.stx/#SimpleSortLex_43_18 line 43; ../WebDSL-Prefetch-sig.stx/#SimpleSortLex_53_25 line 53, 89; ../WebDSL-Search-sig.stx/#SimpleSortLex_188_20 line 188, 251"><span class="token sort_Id">SimpleSortLex</span></button> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><a href="../WebDSL-Core-sig.stx/#GenericSortLex_44_19" id="GenericSortLex_43_5" title="Referenced at ../WebDSL-Core-sig.stx line 44"><span class="token sort_Id">GenericSortLex</span></a> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>

  <span class="keyword">constructors</span>
    <span class="cons_OpDecl"><span id="ModuleName-Plhdr_46_5" title="Not referenced"><span class="token sort_Id">ModuleName-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#ModuleName_18_5" id="ModuleName_46_24" title="Defined at line 18"><span class="token sort_Id">ModuleName</span></a></span></span>
    <span class="cons_OpDecl"><span id="ModulePart-Plhdr_47_5" title="Not referenced"><span class="token sort_Id">ModulePart-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#ModulePart_19_5" id="ModulePart_47_24" title="Defined at line 19"><span class="token sort_Id">ModulePart</span></a></span></span>
    <span class="cons_OpDecl"><span id="ImportName-Plhdr_48_5" title="Not referenced"><span class="token sort_Id">ImportName-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#ImportName_20_5" id="ImportName_48_24" title="Defined at line 20"><span class="token sort_Id">ImportName</span></a></span></span>
    <span class="cons_OpDecl"><span id="OptWildcardImport-Plhdr_49_5" title="Not referenced"><span class="token sort_Id">OptWildcardImport-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#OptWildcardImport_21_5" id="OptWildcardImport_49_31" title="Defined at line 21"><span class="token sort_Id">OptWildcardImport</span></a></span></span>
    <span class="cons_OpDecl"><span id="String-Plhdr_50_5" title="Not referenced"><span class="token sort_Id">String-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#String_28_5" id="String_50_20" title="Defined at line 28"><span class="token sort_Id">String</span></a></span></span>
    <span class="cons_OpDecl"><span id="StringPart-Plhdr_51_5" title="Not referenced"><span class="token sort_Id">StringPart-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#StringPart_29_5" id="StringPart_51_24" title="Defined at line 29"><span class="token sort_Id">StringPart</span></a></span></span>
    <span class="cons_OpDecl"><span id="StringInterpExp-Plhdr_52_5" title="Not referenced"><span class="token sort_Id">StringInterpExp-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#StringInterpExp_30_5" id="StringInterpExp_52_29" title="Defined at line 30"><span class="token sort_Id">StringInterpExp</span></a></span></span>
    <span class="cons_OpDecl"><span id="OutputShorthand-Plhdr_53_5" title="Not referenced"><span class="token sort_Id">OutputShorthand-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#OutputShorthand_31_5" id="OutputShorthand_53_29" title="Defined at line 31"><span class="token sort_Id">OutputShorthand</span></a></span></span>
    <span class="cons_OpDecl"><span id="SimpleExp-Plhdr_54_5" title="Not referenced"><span class="token sort_Id">SimpleExp-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#SimpleExp_32_5" id="SimpleExp_54_23" title="Defined at line 32"><span class="token sort_Id">SimpleExp</span></a></span></span>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-modules.stx/#ModulePart_121_22" id="ModulePart_59_5" title="Referenced at ../../../../trans/static-semantics/webdsl-modules.stx line 121"><span class="token sort_Id">ModulePart</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#ExtendedId_16_5" id="ExtendedId_59_18" title="Defined at line 16"><span class="token sort_Id">ExtendedId</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#ModulePart_19_5" id="ModulePart_59_32" title="Defined at line 19"><span class="token sort_Id">ModulePart</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-modules.stx/#WildcardImport_84_75" id="WildcardImport_60_5" title="Referenced at ../../../../trans/static-semantics/webdsl-modules.stx line 84"><span class="token sort_Id">WildcardImport</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#OptWildcardImport_21_5" id="OptWildcardImport_60_22" title="Defined at line 21"><span class="token sort_Id">OptWildcardImport</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-modules.stx/#NoWildcardImport_66_73" id="NoWildcardImport_61_5" title="Referenced at ../../../../trans/static-semantics/webdsl-modules.stx line 66"><span class="token sort_Id">NoWildcardImport</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#OptWildcardImport_21_5" id="OptWildcardImport_61_24" title="Defined at line 21"><span class="token sort_Id">OptWildcardImport</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-modules.stx/#ModuleName_25_27" id="ModuleName_62_5" title="Referenced at ../../../../trans/static-semantics/webdsl-modules.stx line 25, 66, 84"><span class="token sort_Id">ModuleName</span></a> <span class="operator">:</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="#ModulePart_19_5" id="ModulePart_62_23" title="Defined at line 19"><span class="token sort_Id">ModulePart</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#ModuleName_18_5" id="ModuleName_62_38" title="Defined at line 18"><span class="token sort_Id">ModuleName</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-modules.stx/#ImportName_66_45" id="ImportName_63_5" title="Referenced at ../../../../trans/static-semantics/webdsl-modules.stx line 66, 84"><span class="token sort_Id">ImportName</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#ModuleName_18_5" id="ModuleName_63_18" title="Defined at line 18"><span class="token sort_Id">ModuleName</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#OptWildcardImport_21_5" id="OptWildcardImport_63_31" title="Defined at line 21"><span class="token sort_Id">OptWildcardImport</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#ImportName_20_5" id="ImportName_63_52" title="Defined at line 20"><span class="token sort_Id">ImportName</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-types.stx/#String_86_15" id="String_64_5" title="Referenced at ../../../../trans/static-semantics/webdsl-types.stx line 86"><span class="token sort_Id">String</span></a> <span class="operator">:</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="#StringPart_29_5" id="StringPart_64_19" title="Defined at line 29"><span class="token sort_Id">StringPart</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#String_28_5" id="String_64_34" title="Defined at line 28"><span class="token sort_Id">String</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-types.stx/#StringValue_90_19" id="StringValue_65_5" title="Referenced at ../../../../trans/static-semantics/webdsl-types.stx line 90"><span class="token sort_Id">StringValue</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#StringLex_34_5" id="StringLex_65_19" title="Defined at line 34"><span class="token sort_Id">StringLex</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#StringPart_29_5" id="StringPart_65_32" title="Defined at line 29"><span class="token sort_Id">StringPart</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-types.stx/#InterpValue_92_19" id="InterpValue_66_5" title="Referenced at ../../../../trans/static-semantics/webdsl-types.stx line 92"><span class="token sort_Id">InterpValue</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#StringInterpExp_30_5" id="StringInterpExp_66_19" title="Defined at line 30"><span class="token sort_Id">StringInterpExp</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#StringPart_29_5" id="StringPart_66_38" title="Defined at line 29"><span class="token sort_Id">StringPart</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-types.stx/#InterpSimpleExp_92_31" id="InterpSimpleExp_67_5" title="Referenced at ../../../../trans/static-semantics/webdsl-types.stx line 92"><span class="token sort_Id">InterpSimpleExp</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#SimpleExp_32_5" id="SimpleExp_67_23" title="Defined at line 32"><span class="token sort_Id">SimpleExp</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#StringInterpExp_30_5" id="StringInterpExp_67_36" title="Defined at line 30"><span class="token sort_Id">StringInterpExp</span></a></span></span>
    <span class="cons_OpDecl"><span id="OutputShorthandSimpleExp_68_5" title="Not referenced"><span class="token sort_Id">OutputShorthandSimpleExp</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#SimpleExp_32_5" id="SimpleExp_68_32" title="Defined at line 32"><span class="token sort_Id">SimpleExp</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#OutputShorthand_31_5" id="OutputShorthand_68_45" title="Defined at line 31"><span class="token sort_Id">OutputShorthand</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-actions.stx/#SimpleVar_232_22" id="SimpleVar_69_5" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 232"><span class="token sort_Id">SimpleVar</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Id_14_5" id="Id_69_17" title="Defined at line 14"><span class="token sort_Id">Id</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#SimpleExp_32_5" id="SimpleExp_69_23" title="Defined at line 32"><span class="token sort_Id">SimpleExp</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-actions.stx/#SimpleFieldAccess_250_22" id="SimpleFieldAccess_70_5" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 250"><span class="token sort_Id">SimpleFieldAccess</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#SimpleExp_32_5" id="SimpleExp_70_25" title="Defined at line 32"><span class="token sort_Id">SimpleExp</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#PropertyId_13_5" id="PropertyId_70_37" title="Defined at line 13"><span class="token sort_Id">PropertyId</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#SimpleExp_32_5" id="SimpleExp_70_51" title="Defined at line 32"><span class="token sort_Id">SimpleExp</span></a></span></span>
</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
