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
<td class="code"><pre><code><span class="keyword">module</span> <button class="modal-open" id="signatures/WebDSL-Lexical-sig_1_8" title="a definition with multiple references" data-urls="../HQL-sig.stx/#signatures/WebDSL-Lexical-sig line 5_3; ../WebDSL-AccessControl-sig.stx/#signatures/WebDSL-Lexical-sig line 7_3; ../WebDSL-Action-sig.stx/#signatures/WebDSL-Lexical-sig line 6_3; ../WebDSL-Ajax-sig.stx/#signatures/WebDSL-Lexical-sig line 5_3; ../WebDSL-Attributes-sig.stx/#signatures/WebDSL-Lexical-sig line 5_3; ../WebDSL-Core-sig.stx/#signatures/WebDSL-Lexical-sig line 6_3; ../WebDSL-DataModel-sig.stx/#signatures/WebDSL-Lexical-sig line 6_3; ../WebDSL-DataValidation-sig.stx/#signatures/WebDSL-Lexical-sig line 5_3; ../WebDSL-Dispatch-sig.stx/#signatures/WebDSL-Lexical-sig line 6_3; ../WebDSL-EntityDerive-sig.stx/#signatures/WebDSL-Lexical-sig line 6_3; ../WebDSL-Exception-sig.stx/#signatures/WebDSL-Lexical-sig line 6_3; ../WebDSL-Expand-sig.stx/#signatures/WebDSL-Lexical-sig line 5_3; ../WebDSL-Generated-sig.stx/#signatures/WebDSL-Lexical-sig line 5_3; ../WebDSL-Native-sig.stx/#signatures/WebDSL-Lexical-sig line 5_3; ../WebDSL-Prefetch-sig.stx/#signatures/WebDSL-Lexical-sig line 6_3; ../WebDSL-Regex-sig.stx/#signatures/WebDSL-Lexical-sig line 5_3; ../WebDSL-Search-sig.stx/#signatures/WebDSL-Lexical-sig line 6_3; ../WebDSL-Service-sig.stx/#signatures/WebDSL-Lexical-sig line 6_3; ../webdsl-statix-sig.stx/#signatures/WebDSL-Lexical-sig line 17_3; ../WebDSL-Test-sig.stx/#signatures/WebDSL-Lexical-sig line 5_3; ../WebDSL-Type-sig.stx/#signatures/WebDSL-Lexical-sig line 6_3; ../WebDSL-UI-sig.stx/#signatures/WebDSL-Lexical-sig line 7_3"><span class="token sort_Id">signatures/WebDSL-Lexical-sig</span></button>

<span class="keyword">imports</span>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <span class="cons_SortAlias"><button class="modal-open" id="QId_8_5" title="a definition with multiple references" data-urls="../WebDSL-Core-sig.stx/#QId line 62_23, 63_19; ../WebDSL-Native-sig.stx/#QId line 33_19, 34_25, 46_28, 49_31"><span class="token sort_Id">QId</span></button> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><button class="modal-open" id="TemplateId_9_5" title="a definition with multiple references" data-urls="../WebDSL-UI-sig.stx/#TemplateId line 105_19, 106_38, 106_69, 111_39, 237_29, 238_22"><span class="token sort_Id">TemplateId</span></button> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><button class="modal-open" id="VarId_10_5" title="a definition with multiple references" data-urls="../WebDSL-Action-sig.stx/#VarId line 88_15, 89_19, 90_27, 106_15, 107_23, 108_18, 109_20, 116_11, 158_20, 159_28, 160_19, 161_25, 162_33, 163_26, 164_34, 165_32, 166_40; ../WebDSL-Core-sig.stx/#VarId line 53_16, 56_11; ../WebDSL-DataModel-sig.stx/#VarId line 31_21, 32_25, 33_25, 34_29, 35_33, 36_37, 37_22, 38_26, 39_26, 40_30, 41_34, 42_38; ../WebDSL-Exception-sig.stx/#VarId line 24_13; ../WebDSL-Prefetch-sig.stx/#VarId line 81_23; ../WebDSL-UI-sig.stx/#VarId line 131_23, 132_27, 133_27, 134_31, 135_35, 136_39, 157_11, 158_19, 159_14, 160_16"><span class="token sort_Id">VarId</span></button> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><a href="../WebDSL-Action-sig.stx/#FAVarId_121_13" id="FAVarId_11_5" title="a definition with a single reference"><span class="token sort_Id">FAVarId</span></a> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><button class="modal-open" id="FunId_12_5" title="a definition with multiple references" data-urls="../WebDSL-Action-sig.stx/#FunId line 67_16, 78_19, 79_23, 80_30, 136_16"><span class="token sort_Id">FunId</span></button> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><button class="modal-open" id="PropertyId_13_5" title="a definition with multiple references" data-urls="#PropertyId line 70_37; ../WebDSL-Action-sig.stx/#PropertyId line 117_27; ../WebDSL-Ajax-sig.stx/#PropertyId line 61_27; ../WebDSL-DataModel-sig.stx/#PropertyId line 43_16, 44_23; ../WebDSL-Prefetch-sig.stx/#PropertyId line 82_43"><span class="token sort_Id">PropertyId</span></button> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><button class="modal-open" id="Id_14_5" title="a definition with multiple references" data-urls="#Id line 69_17; ../WebDSL-AccessControl-sig.stx/#Id line 43_17, 44_33, 44_43, 45_19, 46_35, 46_45, 47_29, 51_73, 53_12, 56_25, 58_32, 59_13, 62_10; ../WebDSL-Action-sig.stx/#Id line 101_17, 127_32, 137_18, 144_30, 190_17; ../WebDSL-Ajax-sig.stx/#Id line 49_23, 49_28, 50_26, 51_19, 53_27, 53_32, 54_30, 55_23, 58_22, 60_20; ../WebDSL-Attributes-sig.stx/#Id line 29_57; ../WebDSL-Core-sig.stx/#Id line 75_12, 76_17; ../WebDSL-DataModel-sig.stx/#Id line 26_14, 26_19, 27_21, 28_21, 29_20, 30_27, 57_19, 57_24, 58_29, 59_24, 59_29, 61_23, 62_18, 71_21; ../WebDSL-DataValidation-sig.stx/#Id line 23_25, 26_30, 27_24; ../WebDSL-Dispatch-sig.stx/#Id line 29_21, 30_22, 37_28, 38_33; ../WebDSL-EntityDerive-sig.stx/#Id line 23_23, 24_34, 25_36; ../WebDSL-Expand-sig.stx/#Id line 28_20, 29_25, 30_14, 31_19, 32_25, 33_21, 34_18, 34_23, 36_25, 37_18, 38_43, 39_32; ../WebDSL-Generated-sig.stx/#Id line 18_22; ../WebDSL-Native-sig.stx/#Id line 35_15, 37_15, 39_18, 50_25, 53_24; ../WebDSL-Prefetch-sig.stx/#Id line 46_19, 47_23, 51_43, 58_25; ../WebDSL-Regex-sig.stx/#Id line 108_28; ../WebDSL-Search-sig.stx/#Id line 137_45, 144_18, 145_17, 146_19, 149_24, 167_21, 169_30, 170_33, 173_55, 174_58, 175_17, 176_20, 178_20, 274_25, 275_22, 276_23; ../WebDSL-Service-sig.stx/#Id line 23_40, 24_25, 24_30, 27_32, 28_37; ../WebDSL-Test-sig.stx/#Id line 17_12; ../WebDSL-Type-sig.stx/#Id line 21_15; ../WebDSL-UI-sig.stx/#Id line 102_31, 109_24, 112_36, 235_37, 240_20, 241_26, 243_20, 244_28, 245_23, 246_25, 257_23, 257_28"><span class="token sort_Id">Id</span></button> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><button class="modal-open" id="PageId_15_5" title="a definition with multiple references" data-urls="../WebDSL-AccessControl-sig.stx/#PageId line 40_17; ../WebDSL-UI-sig.stx/#PageId line 110_35, 191_16"><span class="token sort_Id">PageId</span></button> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><a href="#ExtendedId_59_18" id="ExtendedId_16_5" title="a definition with a single reference"><span class="token sort_Id">ExtendedId</span></a> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><a href="../WebDSL-Core-sig.stx/#SectionName_61_15" id="SectionName_17_5" title="a definition with a single reference"><span class="token sort_Id">SectionName</span></a> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortDecl"><button class="modal-open" id="ModuleName_18_5" title="a definition with multiple references" data-urls="#ModuleName line 46_24, 62_38, 63_18; ../WebDSL-Core-sig.stx/#ModuleName line 64_18, 65_14"><span class="token sort_Id">ModuleName</span></button></span>
    <span class="cons_SortDecl"><button class="modal-open" id="ModulePart_19_5" title="a definition with multiple references" data-urls="#ModulePart line 47_24, 59_32, 62_23; ../../../../trans/static-semantics/webdsl-modules.stx/#ModulePart line 120_24"><span class="token sort_Id">ModulePart</span></button></span>
    <span class="cons_SortDecl"><button class="modal-open" id="ImportName_20_5" title="a definition with multiple references" data-urls="#ImportName line 48_24, 63_52; ../WebDSL-Core-sig.stx/#ImportName line 71_15"><span class="token sort_Id">ImportName</span></button></span>
    <span class="cons_SortDecl"><button class="modal-open" id="OptWildcardImport_21_5" title="a definition with multiple references" data-urls="#OptWildcardImport line 49_31, 60_22, 61_24, 63_31"><span class="token sort_Id">OptWildcardImport</span></button></span>
    <span class="cons_SortAlias"><button class="modal-open" id="Int_22_5" title="a definition with multiple references" data-urls="../WebDSL-Action-sig.stx/#Int line 112_11; ../WebDSL-DataModel-sig.stx/#Int line 67_18, 70_17; ../WebDSL-Search-sig.stx/#Int line 180_21, 181_24"><span class="token sort_Id">Int</span></button> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><a href="../WebDSL-Action-sig.stx/#Long_113_12" id="Long_23_5" title="a definition with a single reference"><span class="token sort_Id">Long</span></a> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><button class="modal-open" id="Float_24_5" title="a definition with multiple references" data-urls="../WebDSL-Action-sig.stx/#Float line 114_13; ../WebDSL-Search-sig.stx/#Float line 152_44, 177_16, 182_13"><span class="token sort_Id">Float</span></button> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><span id="FloatDigits_25_5" title="a definition with no references"><span class="token sort_Id">FloatDigits</span></span> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><span id="ExponentPart_26_5" title="a definition with no references"><span class="token sort_Id">ExponentPart</span></span> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><span id="SignedInteger_27_5" title="a definition with no references"><span class="token sort_Id">SignedInteger</span></span> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortDecl"><button class="modal-open" id="String_28_5" title="a definition with multiple references" data-urls="#String line 50_20, 64_34; ../WebDSL-Action-sig.stx/#String line 115_19; ../WebDSL-Core-sig.stx/#String line 76_22; ../WebDSL-DataModel-sig.stx/#String line 68_18, 72_19, 73_24; ../WebDSL-Search-sig.stx/#String line 149_29; ../../../../trans/static-semantics/webdsl-types.stx/#String line 85_22"><span class="token sort_Id">String</span></button></span>
    <span class="cons_SortDecl"><button class="modal-open" id="StringPart_29_5" title="a definition with multiple references" data-urls="#StringPart line 51_24, 64_19, 65_32, 66_38; ../WebDSL-Action-sig.stx/#StringPart line 145_24; ../WebDSL-UI-sig.stx/#StringPart line 229_17; ../../../../trans/static-semantics/webdsl-types.stx/#StringPart line 89_26"><span class="token sort_Id">StringPart</span></button></span>
    <span class="cons_SortDecl"><button class="modal-open" id="StringInterpExp_30_5" title="a definition with multiple references" data-urls="#StringInterpExp line 52_29, 66_19, 67_36"><span class="token sort_Id">StringInterpExp</span></button></span>
    <span class="cons_SortDecl"><button class="modal-open" id="OutputShorthand_31_5" title="a definition with multiple references" data-urls="#OutputShorthand line 53_29, 68_45; ../WebDSL-Action-sig.stx/#OutputShorthand line 142_30; ../WebDSL-UI-sig.stx/#OutputShorthand line 228_39"><span class="token sort_Id">OutputShorthand</span></button></span>
    <span class="cons_SortDecl"><button class="modal-open" id="SimpleExp_32_5" title="a definition with multiple references" data-urls="#SimpleExp line 54_23, 67_23, 68_32, 69_23, 70_25, 70_51; ../WebDSL-Action-sig.stx/#SimpleExp line 143_34, 144_18, 144_48; ../../../../trans/static-semantics/webdsl.stx/#SimpleExp line 395_29"><span class="token sort_Id">SimpleExp</span></button></span>
    <span class="cons_SortAlias"><span id="QMLex_33_5" title="a definition with no references"><span class="token sort_Id">QMLex</span></span> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><a href="#StringLex_65_19" id="StringLex_34_5" title="a definition with a single reference"><span class="token sort_Id">StringLex</span></a> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><span id="StringChar_35_5" title="a definition with no references"><span class="token sort_Id">StringChar</span></span> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><span id="HexPart_36_5" title="a definition with no references"><span class="token sort_Id">HexPart</span></span> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><span id="InsideComment_37_5" title="a definition with no references"><span class="token sort_Id">InsideComment</span></span> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><span id="CommentChar_38_5" title="a definition with no references"><span class="token sort_Id">CommentChar</span></span> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><span id="NewLineEOF_39_5" title="a definition with no references"><span class="token sort_Id">NewLineEOF</span></span> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><span id="EOF_40_5" title="a definition with no references"><span class="token sort_Id">EOF</span></span> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><button class="modal-open" id="Word_41_5" title="a definition with multiple references" data-urls="../WebDSL-Core-sig.stx/#Word line 73_24, 74_17"><span class="token sort_Id">Word</span></button> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><button class="modal-open" id="SimpleSortLex_42_5" title="a definition with multiple references" data-urls="../WebDSL-Action-sig.stx/#SimpleSortLex line 124_22; ../WebDSL-Core-sig.stx/#SimpleSortLex line 43_18; ../WebDSL-Prefetch-sig.stx/#SimpleSortLex line 53_25, 89_25; ../WebDSL-Search-sig.stx/#SimpleSortLex line 188_20, 251_15"><span class="token sort_Id">SimpleSortLex</span></button> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><a href="../WebDSL-Core-sig.stx/#GenericSortLex_44_19" id="GenericSortLex_43_5" title="a definition with a single reference"><span class="token sort_Id">GenericSortLex</span></a> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>

  <span class="keyword">constructors</span>
    <span class="cons_OpDecl"><span id="ModuleName-Plhdr_46_5" title="a definition with no references"><span class="token sort_Id">ModuleName-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#ModuleName_18_5" id="ModuleName_46_24" title="a reference to a single-file definition"><span class="token sort_Id">ModuleName</span></a></span></span>
    <span class="cons_OpDecl"><span id="ModulePart-Plhdr_47_5" title="a definition with no references"><span class="token sort_Id">ModulePart-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#ModulePart_19_5" id="ModulePart_47_24" title="a reference to a single-file definition"><span class="token sort_Id">ModulePart</span></a></span></span>
    <span class="cons_OpDecl"><span id="ImportName-Plhdr_48_5" title="a definition with no references"><span class="token sort_Id">ImportName-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#ImportName_20_5" id="ImportName_48_24" title="a reference to a single-file definition"><span class="token sort_Id">ImportName</span></a></span></span>
    <span class="cons_OpDecl"><span id="OptWildcardImport-Plhdr_49_5" title="a definition with no references"><span class="token sort_Id">OptWildcardImport-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#OptWildcardImport_21_5" id="OptWildcardImport_49_31" title="a reference to a single-file definition"><span class="token sort_Id">OptWildcardImport</span></a></span></span>
    <span class="cons_OpDecl"><span id="String-Plhdr_50_5" title="a definition with no references"><span class="token sort_Id">String-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#String_28_5" id="String_50_20" title="a reference to a single-file definition"><span class="token sort_Id">String</span></a></span></span>
    <span class="cons_OpDecl"><span id="StringPart-Plhdr_51_5" title="a definition with no references"><span class="token sort_Id">StringPart-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#StringPart_29_5" id="StringPart_51_24" title="a reference to a single-file definition"><span class="token sort_Id">StringPart</span></a></span></span>
    <span class="cons_OpDecl"><span id="StringInterpExp-Plhdr_52_5" title="a definition with no references"><span class="token sort_Id">StringInterpExp-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#StringInterpExp_30_5" id="StringInterpExp_52_29" title="a reference to a single-file definition"><span class="token sort_Id">StringInterpExp</span></a></span></span>
    <span class="cons_OpDecl"><span id="OutputShorthand-Plhdr_53_5" title="a definition with no references"><span class="token sort_Id">OutputShorthand-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#OutputShorthand_31_5" id="OutputShorthand_53_29" title="a reference to a single-file definition"><span class="token sort_Id">OutputShorthand</span></a></span></span>
    <span class="cons_OpDecl"><span id="SimpleExp-Plhdr_54_5" title="a definition with no references"><span class="token sort_Id">SimpleExp-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#SimpleExp_32_5" id="SimpleExp_54_23" title="a reference to a single-file definition"><span class="token sort_Id">SimpleExp</span></a></span></span>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-modules.stx/#ModulePart_121_22" id="ModulePart_59_5" title="a definition with a single reference"><span class="token sort_Id">ModulePart</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#ExtendedId_16_5" id="ExtendedId_59_18" title="a reference to a single-file definition"><span class="token sort_Id">ExtendedId</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#ModulePart_19_5" id="ModulePart_59_32" title="a reference to a single-file definition"><span class="token sort_Id">ModulePart</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-modules.stx/#WildcardImport_84_75" id="WildcardImport_60_5" title="a definition with a single reference"><span class="token sort_Id">WildcardImport</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#OptWildcardImport_21_5" id="OptWildcardImport_60_22" title="a reference to a single-file definition"><span class="token sort_Id">OptWildcardImport</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-modules.stx/#NoWildcardImport_66_73" id="NoWildcardImport_61_5" title="a definition with a single reference"><span class="token sort_Id">NoWildcardImport</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#OptWildcardImport_21_5" id="OptWildcardImport_61_24" title="a reference to a single-file definition"><span class="token sort_Id">OptWildcardImport</span></a></span></span>
    <span class="cons_OpDecl"><button class="modal-open" id="ModuleName_62_5" title="a definition with multiple references" data-urls="../../../../trans/static-semantics/webdsl-modules.stx/#ModuleName line 25_27, 66_56, 84_58"><span class="token sort_Id">ModuleName</span></button> <span class="operator">:</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="#ModulePart_19_5" id="ModulePart_62_23" title="a reference to a single-file definition"><span class="token sort_Id">ModulePart</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#ModuleName_18_5" id="ModuleName_62_38" title="a reference to a single-file definition"><span class="token sort_Id">ModuleName</span></a></span></span>
    <span class="cons_OpDecl"><button class="modal-open" id="ImportName_63_5" title="a definition with multiple references" data-urls="../../../../trans/static-semantics/webdsl-modules.stx/#ImportName line 66_45, 84_47"><span class="token sort_Id">ImportName</span></button> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#ModuleName_18_5" id="ModuleName_63_18" title="a reference to a single-file definition"><span class="token sort_Id">ModuleName</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#OptWildcardImport_21_5" id="OptWildcardImport_63_31" title="a reference to a single-file definition"><span class="token sort_Id">OptWildcardImport</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#ImportName_20_5" id="ImportName_63_52" title="a reference to a single-file definition"><span class="token sort_Id">ImportName</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-types.stx/#String_86_15" id="String_64_5" title="a definition with a single reference"><span class="token sort_Id">String</span></a> <span class="operator">:</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="#StringPart_29_5" id="StringPart_64_19" title="a reference to a single-file definition"><span class="token sort_Id">StringPart</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#String_28_5" id="String_64_34" title="a reference to a single-file definition"><span class="token sort_Id">String</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-types.stx/#StringValue_90_19" id="StringValue_65_5" title="a definition with a single reference"><span class="token sort_Id">StringValue</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#StringLex_34_5" id="StringLex_65_19" title="a reference to a single-file definition"><span class="token sort_Id">StringLex</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#StringPart_29_5" id="StringPart_65_32" title="a reference to a single-file definition"><span class="token sort_Id">StringPart</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-types.stx/#InterpValue_92_19" id="InterpValue_66_5" title="a definition with a single reference"><span class="token sort_Id">InterpValue</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#StringInterpExp_30_5" id="StringInterpExp_66_19" title="a reference to a single-file definition"><span class="token sort_Id">StringInterpExp</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#StringPart_29_5" id="StringPart_66_38" title="a reference to a single-file definition"><span class="token sort_Id">StringPart</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-types.stx/#InterpSimpleExp_92_31" id="InterpSimpleExp_67_5" title="a definition with a single reference"><span class="token sort_Id">InterpSimpleExp</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#SimpleExp_32_5" id="SimpleExp_67_23" title="a reference to a single-file definition"><span class="token sort_Id">SimpleExp</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#StringInterpExp_30_5" id="StringInterpExp_67_36" title="a reference to a single-file definition"><span class="token sort_Id">StringInterpExp</span></a></span></span>
    <span class="cons_OpDecl"><span id="OutputShorthandSimpleExp_68_5" title="a definition with no references"><span class="token sort_Id">OutputShorthandSimpleExp</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#SimpleExp_32_5" id="SimpleExp_68_32" title="a reference to a single-file definition"><span class="token sort_Id">SimpleExp</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#OutputShorthand_31_5" id="OutputShorthand_68_45" title="a reference to a single-file definition"><span class="token sort_Id">OutputShorthand</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-actions.stx/#SimpleVar_232_22" id="SimpleVar_69_5" title="a definition with a single reference"><span class="token sort_Id">SimpleVar</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Id_14_5" id="Id_69_17" title="a reference to a single-file definition"><span class="token sort_Id">Id</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#SimpleExp_32_5" id="SimpleExp_69_23" title="a reference to a single-file definition"><span class="token sort_Id">SimpleExp</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-actions.stx/#SimpleFieldAccess_250_22" id="SimpleFieldAccess_70_5" title="a definition with a single reference"><span class="token sort_Id">SimpleFieldAccess</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#SimpleExp_32_5" id="SimpleExp_70_25" title="a reference to a single-file definition"><span class="token sort_Id">SimpleExp</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#PropertyId_13_5" id="PropertyId_70_37" title="a reference to a single-file definition"><span class="token sort_Id">PropertyId</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#SimpleExp_32_5" id="SimpleExp_70_51" title="a reference to a single-file definition"><span class="token sort_Id">SimpleExp</span></a></span></span>
</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
